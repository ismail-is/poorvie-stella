import { defineComponent, nextTick, openBlock, createElementBlock } from 'vue';

const generatedAttribute = "generated";
const mouseDownEvent = "pointerdown";
const mouseUpEvent = "pointerup";
const mouseLeaveEvent = "pointerleave";
const mouseOutEvent = "pointerout";
const mouseMoveEvent = "pointermove";
const touchStartEvent = "touchstart";
const touchEndEvent = "touchend";
const touchMoveEvent = "touchmove";
const touchCancelEvent = "touchcancel";
const resizeEvent = "resize";
const visibilityChangeEvent = "visibilitychange";
const errorPrefix = "tsParticles - Error";

class Vector3d {
    constructor(xOrCoords, y, z) {
        this._updateFromAngle = (angle, length) => {
            this.x = Math.cos(angle) * length;
            this.y = Math.sin(angle) * length;
        };
        if (!isNumber(xOrCoords) && xOrCoords) {
            this.x = xOrCoords.x;
            this.y = xOrCoords.y;
            const coords3d = xOrCoords;
            this.z = coords3d.z ? coords3d.z : 0;
        }
        else if (xOrCoords !== undefined && y !== undefined) {
            this.x = xOrCoords;
            this.y = y;
            this.z = z ?? 0;
        }
        else {
            throw new Error(`${errorPrefix} Vector3d not initialized correctly`);
        }
    }
    static get origin() {
        return Vector3d.create(0, 0, 0);
    }
    get angle() {
        return Math.atan2(this.y, this.x);
    }
    set angle(angle) {
        this._updateFromAngle(angle, this.length);
    }
    get length() {
        return Math.sqrt(this.getLengthSq());
    }
    set length(length) {
        this._updateFromAngle(this.angle, length);
    }
    static clone(source) {
        return Vector3d.create(source.x, source.y, source.z);
    }
    static create(x, y, z) {
        return new Vector3d(x, y, z);
    }
    add(v) {
        return Vector3d.create(this.x + v.x, this.y + v.y, this.z + v.z);
    }
    addTo(v) {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
    }
    copy() {
        return Vector3d.clone(this);
    }
    distanceTo(v) {
        return this.sub(v).length;
    }
    distanceToSq(v) {
        return this.sub(v).getLengthSq();
    }
    div(n) {
        return Vector3d.create(this.x / n, this.y / n, this.z / n);
    }
    divTo(n) {
        this.x /= n;
        this.y /= n;
        this.z /= n;
    }
    getLengthSq() {
        return this.x ** 2 + this.y ** 2;
    }
    mult(n) {
        return Vector3d.create(this.x * n, this.y * n, this.z * n);
    }
    multTo(n) {
        this.x *= n;
        this.y *= n;
        this.z *= n;
    }
    normalize() {
        const length = this.length;
        if (length != 0) {
            this.multTo(1.0 / length);
        }
    }
    rotate(angle) {
        return Vector3d.create(this.x * Math.cos(angle) - this.y * Math.sin(angle), this.x * Math.sin(angle) + this.y * Math.cos(angle), 0);
    }
    setTo(c) {
        this.x = c.x;
        this.y = c.y;
        const v3d = c;
        this.z = v3d.z ? v3d.z : 0;
    }
    sub(v) {
        return Vector3d.create(this.x - v.x, this.y - v.y, this.z - v.z);
    }
    subFrom(v) {
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
    }
}

class Vector extends Vector3d {
    constructor(xOrCoords, y) {
        super(xOrCoords, y, 0);
    }
    static get origin() {
        return Vector.create(0, 0);
    }
    static clone(source) {
        return Vector.create(source.x, source.y);
    }
    static create(x, y) {
        return new Vector(x, y);
    }
}

let _random = Math.random;
function getRandom() {
    return clamp(_random(), 0, 1 - 1e-16);
}
function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}
function randomInRange(r) {
    const max = getRangeMax(r);
    let min = getRangeMin(r);
    if (max === min) {
        min = 0;
    }
    return getRandom() * (max - min) + min;
}
function getRangeValue(value) {
    return isNumber(value) ? value : randomInRange(value);
}
function getRangeMin(value) {
    return isNumber(value) ? value : value.min;
}
function getRangeMax(value) {
    return isNumber(value) ? value : value.max;
}
function setRangeValue(source, value) {
    if (source === value || (value === undefined && isNumber(source))) {
        return source;
    }
    const min = getRangeMin(source), max = getRangeMax(source);
    return value !== undefined
        ? {
            min: Math.min(min, value),
            max: Math.max(max, value),
        }
        : setRangeValue(min, max);
}
function getValue(options) {
    const random = options.random, { enable, minimumValue } = isBoolean(random)
        ? {
            enable: random,
            minimumValue: 0,
        }
        : random;
    return enable ? getRangeValue(setRangeValue(options.value, minimumValue)) : getRangeValue(options.value);
}
function getDistances(pointA, pointB) {
    const dx = pointA.x - pointB.x, dy = pointA.y - pointB.y;
    return { dx: dx, dy: dy, distance: Math.sqrt(dx ** 2 + dy ** 2) };
}
function getDistance(pointA, pointB) {
    return getDistances(pointA, pointB).distance;
}
function getParticleDirectionAngle(direction, position, center) {
    if (isNumber(direction)) {
        return (direction * Math.PI) / 180;
    }
    switch (direction) {
        case "top":
            return -Math.PI / 2;
        case "top-right":
            return -Math.PI / 4;
        case "right":
            return 0;
        case "bottom-right":
            return Math.PI / 4;
        case "bottom":
            return Math.PI / 2;
        case "bottom-left":
            return (3 * Math.PI) / 4;
        case "left":
            return Math.PI;
        case "top-left":
            return (-3 * Math.PI) / 4;
        case "inside":
            return Math.atan2(center.y - position.y, center.x - position.x);
        case "outside":
            return Math.atan2(position.y - center.y, position.x - center.x);
        default:
            return getRandom() * Math.PI * 2;
    }
}
function getParticleBaseVelocity(direction) {
    const baseVelocity = Vector.origin;
    baseVelocity.length = 1;
    baseVelocity.angle = direction;
    return baseVelocity;
}
function calcExactPositionOrRandomFromSize(data) {
    return {
        x: data.position?.x ?? getRandom() * data.size.width,
        y: data.position?.y ?? getRandom() * data.size.height,
    };
}
function parseAlpha(input) {
    return input ? (input.endsWith("%") ? parseFloat(input) / 100 : parseFloat(input)) : 1;
}

const _logger = {
    debug: console.debug,
    error: console.error,
    info: console.info,
    log: console.log,
    verbose: console.log,
    warning: console.warn,
};
function getLogger() {
    return _logger;
}
function isSsr() {
    return "undefined" === "undefined"   ;
}
function safeMatchMedia(query) {
    {
        return;
    }
}
function safeMutationObserver(callback) {
    {
        return;
    }
}
function isInArray(value, array) {
    return value === array || (isArray(array) && array.indexOf(value) > -1);
}
function arrayRandomIndex(array) {
    return Math.floor(getRandom() * array.length);
}
function itemFromArray(array, index, useIndex = true) {
    return array[index !== undefined && useIndex ? index % array.length : arrayRandomIndex(array)];
}
function deepExtend(destination, ...sources) {
    for (const source of sources) {
        if (source === undefined || source === null) {
            continue;
        }
        if (!isObject(source)) {
            destination = source;
            continue;
        }
        const sourceIsArray = Array.isArray(source);
        if (sourceIsArray && (isObject(destination) || !destination || !Array.isArray(destination))) {
            destination = [];
        }
        else if (!sourceIsArray && (isObject(destination) || !destination || Array.isArray(destination))) {
            destination = {};
        }
        for (const key in source) {
            if (key === "__proto__") {
                continue;
            }
            const sourceDict = source, value = sourceDict[key], destDict = destination;
            destDict[key] =
                isObject(value) && Array.isArray(value)
                    ? value.map((v) => deepExtend(destDict[key], v))
                    : deepExtend(destDict[key], value);
        }
    }
    return destination;
}
function executeOnSingleOrMultiple(obj, callback) {
    return isArray(obj) ? obj.map((item, index) => callback(item, index)) : callback(obj, 0);
}
function itemFromSingleOrMultiple(obj, index, useIndex) {
    return isArray(obj) ? itemFromArray(obj, index, useIndex) : obj;
}
function initParticleNumericAnimationValue(options, pxRatio) {
    const valueRange = options.value, animationOptions = options.animation, res = {
        delayTime: getRangeValue(animationOptions.delay) * 1000,
        enable: animationOptions.enable,
        value: getRangeValue(options.value) * pxRatio,
        max: getRangeMax(valueRange) * pxRatio,
        min: getRangeMin(valueRange) * pxRatio,
        loops: 0,
        maxLoops: getRangeValue(animationOptions.count),
        time: 0,
    };
    if (animationOptions.enable) {
        res.decay = 1 - getRangeValue(animationOptions.decay);
        switch (animationOptions.mode) {
            case "increase":
                res.status = "increasing";
                break;
            case "decrease":
                res.status = "decreasing";
                break;
            case "random":
                res.status = getRandom() >= 0.5 ? "increasing" : "decreasing";
                break;
        }
        const autoStatus = animationOptions.mode === "auto";
        switch (animationOptions.startValue) {
            case "min":
                res.value = res.min;
                if (autoStatus) {
                    res.status = "increasing";
                }
                break;
            case "max":
                res.value = res.max;
                if (autoStatus) {
                    res.status = "decreasing";
                }
                break;
            case "random":
            default:
                res.value = randomInRange(res);
                if (autoStatus) {
                    res.status = getRandom() >= 0.5 ? "increasing" : "decreasing";
                }
                break;
        }
    }
    res.initialValue = res.value;
    return res;
}
function getPositionOrSize(positionOrSize, canvasSize) {
    const isPercent = positionOrSize.mode === "percent";
    if (!isPercent) {
        const { mode: _, ...rest } = positionOrSize;
        return rest;
    }
    const isPosition = "x" in positionOrSize;
    if (isPosition) {
        return {
            x: (positionOrSize.x / 100) * canvasSize.width,
            y: (positionOrSize.y / 100) * canvasSize.height,
        };
    }
    else {
        return {
            width: (positionOrSize.width / 100) * canvasSize.width,
            height: (positionOrSize.height / 100) * canvasSize.height,
        };
    }
}
function getPosition(position, canvasSize) {
    return getPositionOrSize(position, canvasSize);
}
function isBoolean(arg) {
    return typeof arg === "boolean";
}
function isString(arg) {
    return typeof arg === "string";
}
function isNumber(arg) {
    return typeof arg === "number";
}
function isFunction(arg) {
    return typeof arg === "function";
}
function isObject(arg) {
    return typeof arg === "object" && arg !== null;
}
function isArray(arg) {
    return Array.isArray(arg);
}

const randomColorValue = "random", colorManagers = new Map();
function addColorManager(manager) {
    colorManagers.set(manager.key, manager);
}
function hue2rgb(p, q, t) {
    if (t < 0) {
        t += 1;
    }
    if (t > 1) {
        t -= 1;
    }
    if (t < 1 / 6) {
        return p + (q - p) * 6 * t;
    }
    if (t < 1 / 2) {
        return q;
    }
    if (t < 2 / 3) {
        return p + (q - p) * (2 / 3 - t) * 6;
    }
    return p;
}
function stringToRgba(input) {
    for (const [, manager] of colorManagers) {
        if (input.startsWith(manager.stringPrefix)) {
            return manager.parseString(input);
        }
    }
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i, hexFixed = input.replace(shorthandRegex, (_, r, g, b, a) => {
        return r + r + g + g + b + b + (a !== undefined ? a + a : "");
    }), regex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i, result = regex.exec(hexFixed);
    return result
        ? {
            a: result[4] !== undefined ? parseInt(result[4], 16) / 0xff : 1,
            b: parseInt(result[3], 16),
            g: parseInt(result[2], 16),
            r: parseInt(result[1], 16),
        }
        : undefined;
}
function rangeColorToRgb(input, index, useIndex = true) {
    if (!input) {
        return;
    }
    const color = isString(input) ? { value: input } : input;
    if (isString(color.value)) {
        return colorToRgb(color.value, index, useIndex);
    }
    if (isArray(color.value)) {
        return rangeColorToRgb({
            value: itemFromArray(color.value, index, useIndex),
        });
    }
    for (const [, manager] of colorManagers) {
        const res = manager.handleRangeColor(color);
        if (res) {
            return res;
        }
    }
}
function colorToRgb(input, index, useIndex = true) {
    if (!input) {
        return;
    }
    const color = isString(input) ? { value: input } : input;
    if (isString(color.value)) {
        return color.value === randomColorValue ? getRandomRgbColor() : stringToRgb(color.value);
    }
    if (isArray(color.value)) {
        return colorToRgb({
            value: itemFromArray(color.value, index, useIndex),
        });
    }
    for (const [, manager] of colorManagers) {
        const res = manager.handleColor(color);
        if (res) {
            return res;
        }
    }
}
function rangeColorToHsl(color, index, useIndex = true) {
    const rgb = rangeColorToRgb(color, index, useIndex);
    return rgb ? rgbToHsl(rgb) : undefined;
}
function rgbToHsl(color) {
    const r1 = color.r / 255, g1 = color.g / 255, b1 = color.b / 255, max = Math.max(r1, g1, b1), min = Math.min(r1, g1, b1), res = {
        h: 0,
        l: (max + min) / 2,
        s: 0,
    };
    if (max !== min) {
        res.s = res.l < 0.5 ? (max - min) / (max + min) : (max - min) / (2.0 - max - min);
        res.h =
            r1 === max
                ? (g1 - b1) / (max - min)
                : (res.h = g1 === max ? 2.0 + (b1 - r1) / (max - min) : 4.0 + (r1 - g1) / (max - min));
    }
    res.l *= 100;
    res.s *= 100;
    res.h *= 60;
    if (res.h < 0) {
        res.h += 360;
    }
    if (res.h >= 360) {
        res.h -= 360;
    }
    return res;
}
function stringToRgb(input) {
    return stringToRgba(input);
}
function hslToRgb(hsl) {
    const result = { b: 0, g: 0, r: 0 }, hslPercent = {
        h: hsl.h / 360,
        l: hsl.l / 100,
        s: hsl.s / 100,
    };
    if (!hslPercent.s) {
        result.r = result.g = result.b = hslPercent.l;
    }
    else {
        const q = hslPercent.l < 0.5
            ? hslPercent.l * (1 + hslPercent.s)
            : hslPercent.l + hslPercent.s - hslPercent.l * hslPercent.s, p = 2 * hslPercent.l - q;
        result.r = hue2rgb(p, q, hslPercent.h + 1 / 3);
        result.g = hue2rgb(p, q, hslPercent.h);
        result.b = hue2rgb(p, q, hslPercent.h - 1 / 3);
    }
    result.r = Math.floor(result.r * 255);
    result.g = Math.floor(result.g * 255);
    result.b = Math.floor(result.b * 255);
    return result;
}
function hslaToRgba(hsla) {
    const rgbResult = hslToRgb(hsla);
    return {
        a: hsla.a,
        b: rgbResult.b,
        g: rgbResult.g,
        r: rgbResult.r,
    };
}
function getRandomRgbColor(min) {
    const fixedMin = min ?? 0;
    return {
        b: Math.floor(randomInRange(setRangeValue(fixedMin, 256))),
        g: Math.floor(randomInRange(setRangeValue(fixedMin, 256))),
        r: Math.floor(randomInRange(setRangeValue(fixedMin, 256))),
    };
}
function getStyleFromRgb(color, opacity) {
    return `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity ?? 1})`;
}
function getStyleFromHsl(color, opacity) {
    return `hsla(${color.h}, ${color.s}%, ${color.l}%, ${opacity ?? 1})`;
}
function getHslFromAnimation(animation) {
    return animation !== undefined
        ? {
            h: animation.h.value,
            s: animation.s.value,
            l: animation.l.value,
        }
        : undefined;
}

function paintBase(context, dimension, baseColor) {
    context.fillStyle = baseColor ?? "rgba(0,0,0,0)";
    context.fillRect(0, 0, dimension.width, dimension.height);
}
function paintImage(context, dimension, image, opacity) {
    if (!image) {
        return;
    }
    context.globalAlpha = opacity;
    context.drawImage(image, 0, 0, dimension.width, dimension.height);
    context.globalAlpha = 1;
}
function clear(context, dimension) {
    context.clearRect(0, 0, dimension.width, dimension.height);
}
function drawParticle(data) {
    const { container, context, particle, delta, colorStyles, backgroundMask, composite, radius, opacity, shadow, transform, } = data;
    const pos = particle.getPosition(), angle = particle.rotation + (particle.pathRotation ? particle.velocity.angle : 0), rotateData = {
        sin: Math.sin(angle),
        cos: Math.cos(angle),
    }, transformData = {
        a: rotateData.cos * (transform.a ?? 1),
        b: rotateData.sin * (transform.b ?? 1),
        c: -rotateData.sin * (transform.c ?? 1),
        d: rotateData.cos * (transform.d ?? 1),
    };
    context.setTransform(transformData.a, transformData.b, transformData.c, transformData.d, pos.x, pos.y);
    context.beginPath();
    if (backgroundMask) {
        context.globalCompositeOperation = composite;
    }
    const shadowColor = particle.shadowColor;
    if (shadow.enable && shadowColor) {
        context.shadowBlur = shadow.blur;
        context.shadowColor = getStyleFromRgb(shadowColor);
        context.shadowOffsetX = shadow.offset.x;
        context.shadowOffsetY = shadow.offset.y;
    }
    if (colorStyles.fill) {
        context.fillStyle = colorStyles.fill;
    }
    const strokeWidth = particle.strokeWidth ?? 0;
    context.lineWidth = strokeWidth;
    if (colorStyles.stroke) {
        context.strokeStyle = colorStyles.stroke;
    }
    drawShape(container, context, particle, radius, opacity, delta);
    if (strokeWidth > 0) {
        context.stroke();
    }
    if (particle.close) {
        context.closePath();
    }
    if (particle.fill) {
        context.fill();
    }
    drawShapeAfterEffect(container, context, particle, radius, opacity, delta);
    context.globalCompositeOperation = "source-over";
    context.setTransform(1, 0, 0, 1, 0, 0);
}
function drawShape(container, context, particle, radius, opacity, delta) {
    if (!particle.shape) {
        return;
    }
    const drawer = container.drawers.get(particle.shape);
    if (!drawer) {
        return;
    }
    drawer.draw(context, particle, radius, opacity, delta, container.retina.pixelRatio);
}
function drawShapeAfterEffect(container, context, particle, radius, opacity, delta) {
    if (!particle.shape) {
        return;
    }
    const drawer = container.drawers.get(particle.shape);
    if (!drawer || !drawer.afterEffect) {
        return;
    }
    drawer.afterEffect(context, particle, radius, opacity, delta, container.retina.pixelRatio);
}
function drawPlugin(context, plugin, delta) {
    if (!plugin.draw) {
        return;
    }
    plugin.draw(context, delta);
}
function drawParticlePlugin(context, plugin, particle, delta) {
    if (!plugin.drawParticle) {
        return;
    }
    plugin.drawParticle(context, particle, delta);
}
function alterHsl(color, type, value) {
    return {
        h: color.h,
        s: color.s,
        l: color.l + (type === "darken" ? -1 : 1) * value,
    };
}

function setTransformValue(factor, newFactor, key) {
    const newValue = newFactor[key];
    if (newValue !== undefined) {
        factor[key] = (factor[key] ?? 1) * newValue;
    }
}
class Canvas {
    constructor(container) {
        this.container = container;
        this._applyPostDrawUpdaters = (particle) => {
            for (const updater of this._postDrawUpdaters) {
                updater.afterDraw && updater.afterDraw(particle);
            }
        };
        this._applyPreDrawUpdaters = (ctx, particle, radius, zOpacity, colorStyles, transform) => {
            for (const updater of this._preDrawUpdaters) {
                if (updater.getColorStyles) {
                    const { fill, stroke } = updater.getColorStyles(particle, ctx, radius, zOpacity);
                    if (fill) {
                        colorStyles.fill = fill;
                    }
                    if (stroke) {
                        colorStyles.stroke = stroke;
                    }
                }
                if (updater.getTransformValues) {
                    const updaterTransform = updater.getTransformValues(particle);
                    for (const key in updaterTransform) {
                        setTransformValue(transform, updaterTransform, key);
                    }
                }
                updater.beforeDraw && updater.beforeDraw(particle);
            }
        };
        this._applyResizePlugins = () => {
            for (const plugin of this._resizePlugins) {
                plugin.resize && plugin.resize();
            }
        };
        this._getPluginParticleColors = (particle) => {
            let fColor, sColor;
            for (const plugin of this._colorPlugins) {
                if (!fColor && plugin.particleFillColor) {
                    fColor = rangeColorToHsl(plugin.particleFillColor(particle));
                }
                if (!sColor && plugin.particleStrokeColor) {
                    sColor = rangeColorToHsl(plugin.particleStrokeColor(particle));
                }
                if (fColor && sColor) {
                    break;
                }
            }
            return [fColor, sColor];
        };
        this._initCover = () => {
            const options = this.container.actualOptions, cover = options.backgroundMask.cover, color = cover.color, coverRgb = rangeColorToRgb(color);
            if (coverRgb) {
                const coverColor = {
                    ...coverRgb,
                    a: cover.opacity,
                };
                this._coverColorStyle = getStyleFromRgb(coverColor, coverColor.a);
            }
        };
        this._initStyle = () => {
            const element = this.element, options = this.container.actualOptions;
            if (!element) {
                return;
            }
            if (this._fullScreen) {
                this._originalStyle = deepExtend({}, element.style);
                this._setFullScreenStyle();
            }
            else {
                this._resetOriginalStyle();
            }
            for (const key in options.style) {
                if (!key || !options.style) {
                    continue;
                }
                const value = options.style[key];
                if (!value) {
                    continue;
                }
                element.style.setProperty(key, value, "important");
            }
        };
        this._initTrail = async () => {
            const options = this.container.actualOptions, trail = options.particles.move.trail, trailFill = trail.fill;
            if (!trail.enable) {
                return;
            }
            if (trailFill.color) {
                const fillColor = rangeColorToRgb(trailFill.color);
                if (!fillColor) {
                    return;
                }
                const trail = options.particles.move.trail;
                this._trailFill = {
                    color: {
                        ...fillColor,
                    },
                    opacity: 1 / trail.length,
                };
            }
            else {
                await new Promise((resolve, reject) => {
                    if (!trailFill.image) {
                        return;
                    }
                    const img = document.createElement("img");
                    img.addEventListener("load", () => {
                        this._trailFill = {
                            image: img,
                            opacity: 1 / trail.length,
                        };
                        resolve();
                    });
                    img.addEventListener("error", (evt) => {
                        reject(evt.error);
                    });
                    img.src = trailFill.image;
                });
            }
        };
        this._paintBase = (baseColor) => {
            this.draw((ctx) => paintBase(ctx, this.size, baseColor));
        };
        this._paintImage = (image, opacity) => {
            this.draw((ctx) => paintImage(ctx, this.size, image, opacity));
        };
        this._repairStyle = () => {
            const element = this.element;
            if (!element) {
                return;
            }
            this._safeMutationObserver((observer) => observer.disconnect());
            this._initStyle();
            this.initBackground();
            this._safeMutationObserver((observer) => observer.observe(element, { attributes: true }));
        };
        this._resetOriginalStyle = () => {
            const element = this.element, originalStyle = this._originalStyle;
            if (!(element && originalStyle)) {
                return;
            }
            const style = element.style;
            style.position = originalStyle.position;
            style.zIndex = originalStyle.zIndex;
            style.top = originalStyle.top;
            style.left = originalStyle.left;
            style.width = originalStyle.width;
            style.height = originalStyle.height;
        };
        this._safeMutationObserver = (callback) => {
            if (!this._mutationObserver) {
                return;
            }
            callback(this._mutationObserver);
        };
        this._setFullScreenStyle = () => {
            const element = this.element;
            if (!element) {
                return;
            }
            const priority = "important", style = element.style;
            style.setProperty("position", "fixed", priority);
            style.setProperty("z-index", this.container.actualOptions.fullScreen.zIndex.toString(10), priority);
            style.setProperty("top", "0", priority);
            style.setProperty("left", "0", priority);
            style.setProperty("width", "100%", priority);
            style.setProperty("height", "100%", priority);
        };
        this.size = {
            height: 0,
            width: 0,
        };
        this._context = null;
        this._generated = false;
        this._preDrawUpdaters = [];
        this._postDrawUpdaters = [];
        this._resizePlugins = [];
        this._colorPlugins = [];
    }
    get _fullScreen() {
        return this.container.actualOptions.fullScreen.enable;
    }
    clear() {
        const options = this.container.actualOptions, trail = options.particles.move.trail, trailFill = this._trailFill;
        if (options.backgroundMask.enable) {
            this.paint();
        }
        else if (trail.enable && trail.length > 0 && trailFill) {
            if (trailFill.color) {
                this._paintBase(getStyleFromRgb(trailFill.color, trailFill.opacity));
            }
            else if (trailFill.image) {
                this._paintImage(trailFill.image, trailFill.opacity);
            }
        }
        else {
            this.draw((ctx) => {
                clear(ctx, this.size);
            });
        }
    }
    destroy() {
        this.stop();
        if (this._generated) {
            const element = this.element;
            element && element.remove();
        }
        else {
            this._resetOriginalStyle();
        }
        this._preDrawUpdaters = [];
        this._postDrawUpdaters = [];
        this._resizePlugins = [];
        this._colorPlugins = [];
    }
    draw(cb) {
        const ctx = this._context;
        if (!ctx) {
            return;
        }
        return cb(ctx);
    }
    drawParticle(particle, delta) {
        if (particle.spawning || particle.destroyed) {
            return;
        }
        const radius = particle.getRadius();
        if (radius <= 0) {
            return;
        }
        const pfColor = particle.getFillColor(), psColor = particle.getStrokeColor() ?? pfColor;
        let [fColor, sColor] = this._getPluginParticleColors(particle);
        if (!fColor) {
            fColor = pfColor;
        }
        if (!sColor) {
            sColor = psColor;
        }
        if (!fColor && !sColor) {
            return;
        }
        this.draw((ctx) => {
            const container = this.container, options = container.actualOptions, zIndexOptions = particle.options.zIndex, zOpacityFactor = (1 - particle.zIndexFactor) ** zIndexOptions.opacityRate, opacity = particle.bubble.opacity ?? particle.opacity?.value ?? 1, strokeOpacity = particle.strokeOpacity ?? opacity, zOpacity = opacity * zOpacityFactor, zStrokeOpacity = strokeOpacity * zOpacityFactor, transform = {}, colorStyles = {
                fill: fColor ? getStyleFromHsl(fColor, zOpacity) : undefined,
            };
            colorStyles.stroke = sColor ? getStyleFromHsl(sColor, zStrokeOpacity) : colorStyles.fill;
            this._applyPreDrawUpdaters(ctx, particle, radius, zOpacity, colorStyles, transform);
            drawParticle({
                container,
                context: ctx,
                particle,
                delta,
                colorStyles,
                backgroundMask: options.backgroundMask.enable,
                composite: options.backgroundMask.composite,
                radius: radius * (1 - particle.zIndexFactor) ** zIndexOptions.sizeRate,
                opacity: zOpacity,
                shadow: particle.options.shadow,
                transform,
            });
            this._applyPostDrawUpdaters(particle);
        });
    }
    drawParticlePlugin(plugin, particle, delta) {
        this.draw((ctx) => drawParticlePlugin(ctx, plugin, particle, delta));
    }
    drawPlugin(plugin, delta) {
        this.draw((ctx) => drawPlugin(ctx, plugin, delta));
    }
    async init() {
        this._safeMutationObserver((obs) => obs.disconnect());
        this._mutationObserver = safeMutationObserver();
        this.resize();
        this._initStyle();
        this._initCover();
        try {
            await this._initTrail();
        }
        catch (e) {
            getLogger().error(e);
        }
        this.initBackground();
        this._safeMutationObserver((obs) => {
            if (!this.element) {
                return;
            }
            obs.observe(this.element, { attributes: true });
        });
        this.initUpdaters();
        this.initPlugins();
        this.paint();
    }
    initBackground() {
        const options = this.container.actualOptions, background = options.background, element = this.element;
        if (!element) {
            return;
        }
        const elementStyle = element.style;
        if (!elementStyle) {
            return;
        }
        if (background.color) {
            const color = rangeColorToRgb(background.color);
            elementStyle.backgroundColor = color ? getStyleFromRgb(color, background.opacity) : "";
        }
        else {
            elementStyle.backgroundColor = "";
        }
        elementStyle.backgroundImage = background.image || "";
        elementStyle.backgroundPosition = background.position || "";
        elementStyle.backgroundRepeat = background.repeat || "";
        elementStyle.backgroundSize = background.size || "";
    }
    initPlugins() {
        this._resizePlugins = [];
        for (const [, plugin] of this.container.plugins) {
            if (plugin.resize) {
                this._resizePlugins.push(plugin);
            }
            if (plugin.particleFillColor || plugin.particleStrokeColor) {
                this._colorPlugins.push(plugin);
            }
        }
    }
    initUpdaters() {
        this._preDrawUpdaters = [];
        this._postDrawUpdaters = [];
        for (const updater of this.container.particles.updaters) {
            if (updater.afterDraw) {
                this._postDrawUpdaters.push(updater);
            }
            if (updater.getColorStyles || updater.getTransformValues || updater.beforeDraw) {
                this._preDrawUpdaters.push(updater);
            }
        }
    }
    loadCanvas(canvas) {
        if (this._generated && this.element) {
            this.element.remove();
        }
        this._generated =
            canvas.dataset && generatedAttribute in canvas.dataset
                ? canvas.dataset[generatedAttribute] === "true"
                : this._generated;
        this.element = canvas;
        this.element.ariaHidden = "true";
        this._originalStyle = deepExtend({}, this.element.style);
        this.size.height = canvas.offsetHeight;
        this.size.width = canvas.offsetWidth;
        this._context = this.element.getContext("2d");
        this._safeMutationObserver((obs) => {
            if (!this.element) {
                return;
            }
            obs.observe(this.element, { attributes: true });
        });
        this.container.retina.init();
        this.initBackground();
    }
    paint() {
        const options = this.container.actualOptions;
        this.draw((ctx) => {
            if (options.backgroundMask.enable && options.backgroundMask.cover) {
                clear(ctx, this.size);
                this._paintBase(this._coverColorStyle);
            }
            else {
                this._paintBase();
            }
        });
    }
    resize() {
        if (!this.element) {
            return false;
        }
        const container = this.container, pxRatio = container.retina.pixelRatio, size = container.canvas.size, newSize = {
            width: this.element.offsetWidth * pxRatio,
            height: this.element.offsetHeight * pxRatio,
        };
        if (newSize.height === size.height &&
            newSize.width === size.width &&
            newSize.height === this.element.height &&
            newSize.width === this.element.width) {
            return false;
        }
        const oldSize = { ...size };
        this.element.width = size.width = this.element.offsetWidth * pxRatio;
        this.element.height = size.height = this.element.offsetHeight * pxRatio;
        if (this.container.started) {
            this.resizeFactor = {
                width: size.width / oldSize.width,
                height: size.height / oldSize.height,
            };
        }
        return true;
    }
    stop() {
        this._safeMutationObserver((obs) => obs.disconnect());
        this._mutationObserver = undefined;
        this.draw((ctx) => clear(ctx, this.size));
    }
    async windowResize() {
        if (!this.element || !this.resize()) {
            return;
        }
        const container = this.container, needsRefresh = container.updateActualOptions();
        container.particles.setDensity();
        this._applyResizePlugins();
        if (needsRefresh) {
            await container.refresh();
        }
    }
}

function manageListener(element, event, handler, add, options) {
    if (add) {
        let addOptions = { passive: true };
        if (isBoolean(options)) {
            addOptions.capture = options;
        }
        else if (options !== undefined) {
            addOptions = options;
        }
        element.addEventListener(event, handler, addOptions);
    }
    else {
        const removeOptions = options;
        element.removeEventListener(event, handler, removeOptions);
    }
}
class EventListeners {
    constructor(container) {
        this.container = container;
        this._doMouseTouchClick = (e) => {
            const container = this.container, options = container.actualOptions;
            if (this._canPush) {
                const mouseInteractivity = container.interactivity.mouse, mousePos = mouseInteractivity.position;
                if (!mousePos) {
                    return;
                }
                mouseInteractivity.clickPosition = { ...mousePos };
                mouseInteractivity.clickTime = new Date().getTime();
                const onClick = options.interactivity.events.onClick;
                executeOnSingleOrMultiple(onClick.mode, (mode) => this.container.handleClickMode(mode));
            }
            if (e.type === "touchend") {
                setTimeout(() => this._mouseTouchFinish(), 500);
            }
        };
        this._handleThemeChange = (e) => {
            const mediaEvent = e, container = this.container, options = container.options, defaultThemes = options.defaultThemes, themeName = mediaEvent.matches ? defaultThemes.dark : defaultThemes.light, theme = options.themes.find((theme) => theme.name === themeName);
            if (theme && theme.default.auto) {
                container.loadTheme(themeName);
            }
        };
        this._handleVisibilityChange = () => {
            const container = this.container, options = container.actualOptions;
            this._mouseTouchFinish();
            if (!options.pauseOnBlur) {
                return;
            }
            if (document && document.hidden) {
                container.pageHidden = true;
                container.pause();
            }
            else {
                container.pageHidden = false;
                if (container.getAnimationStatus()) {
                    container.play(true);
                }
                else {
                    container.draw(true);
                }
            }
        };
        this._handleWindowResize = async () => {
            if (this._resizeTimeout) {
                clearTimeout(this._resizeTimeout);
                delete this._resizeTimeout;
            }
            this._resizeTimeout = setTimeout(async () => {
                const canvas = this.container.canvas;
                canvas && (await canvas.windowResize());
            }, this.container.actualOptions.interactivity.events.resize.delay * 1000);
        };
        this._manageInteractivityListeners = (mouseLeaveTmpEvent, add) => {
            const handlers = this._handlers, container = this.container, options = container.actualOptions;
            const interactivityEl = container.interactivity.element;
            if (!interactivityEl) {
                return;
            }
            const html = interactivityEl, canvasEl = container.canvas.element;
            if (canvasEl) {
                canvasEl.style.pointerEvents = html === canvasEl ? "initial" : "none";
            }
            if (!(options.interactivity.events.onHover.enable || options.interactivity.events.onClick.enable)) {
                return;
            }
            manageListener(interactivityEl, mouseMoveEvent, handlers.mouseMove, add);
            manageListener(interactivityEl, touchStartEvent, handlers.touchStart, add);
            manageListener(interactivityEl, touchMoveEvent, handlers.touchMove, add);
            if (!options.interactivity.events.onClick.enable) {
                manageListener(interactivityEl, touchEndEvent, handlers.touchEnd, add);
            }
            else {
                manageListener(interactivityEl, touchEndEvent, handlers.touchEndClick, add);
                manageListener(interactivityEl, mouseUpEvent, handlers.mouseUp, add);
                manageListener(interactivityEl, mouseDownEvent, handlers.mouseDown, add);
            }
            manageListener(interactivityEl, mouseLeaveTmpEvent, handlers.mouseLeave, add);
            manageListener(interactivityEl, touchCancelEvent, handlers.touchCancel, add);
        };
        this._manageListeners = (add) => {
            const handlers = this._handlers, container = this.container, options = container.actualOptions, detectType = options.interactivity.detectsOn, canvasEl = container.canvas.element;
            let mouseLeaveTmpEvent = mouseLeaveEvent;
            if (detectType === "window") {
                container.interactivity.element = window;
                mouseLeaveTmpEvent = mouseOutEvent;
            }
            else if (detectType === "parent" && canvasEl) {
                container.interactivity.element = canvasEl.parentElement ?? canvasEl.parentNode;
            }
            else {
                container.interactivity.element = canvasEl;
            }
            this._manageMediaMatch(add);
            this._manageResize(add);
            this._manageInteractivityListeners(mouseLeaveTmpEvent, add);
            if (document) {
                manageListener(document, visibilityChangeEvent, handlers.visibilityChange, add, false);
            }
        };
        this._manageMediaMatch = (add) => {
            const handlers = this._handlers, mediaMatch = safeMatchMedia();
            if (!mediaMatch) {
                return;
            }
            if (mediaMatch.addEventListener !== undefined) {
                manageListener(mediaMatch, "change", handlers.themeChange, add);
                return;
            }
            if (mediaMatch.addListener === undefined) {
                return;
            }
            if (add) {
                mediaMatch.addListener(handlers.oldThemeChange);
            }
            else {
                mediaMatch.removeListener(handlers.oldThemeChange);
            }
        };
        this._manageResize = (add) => {
            const handlers = this._handlers, container = this.container, options = container.actualOptions;
            if (!options.interactivity.events.resize) {
                return;
            }
            if (typeof ResizeObserver === "undefined") {
                manageListener(window, resizeEvent, handlers.resize, add);
                return;
            }
            const canvasEl = container.canvas.element;
            if (this._resizeObserver && !add) {
                if (canvasEl) {
                    this._resizeObserver.unobserve(canvasEl);
                }
                this._resizeObserver.disconnect();
                delete this._resizeObserver;
            }
            else if (!this._resizeObserver && add && canvasEl) {
                this._resizeObserver = new ResizeObserver(async (entries) => {
                    const entry = entries.find((e) => e.target === canvasEl);
                    if (!entry) {
                        return;
                    }
                    await this._handleWindowResize();
                });
                this._resizeObserver.observe(canvasEl);
            }
        };
        this._mouseDown = () => {
            const { interactivity } = this.container;
            if (!interactivity) {
                return;
            }
            const { mouse } = interactivity;
            mouse.clicking = true;
            mouse.downPosition = mouse.position;
        };
        this._mouseTouchClick = (e) => {
            const container = this.container, options = container.actualOptions, { mouse } = container.interactivity;
            mouse.inside = true;
            let handled = false;
            const mousePosition = mouse.position;
            if (!mousePosition || !options.interactivity.events.onClick.enable) {
                return;
            }
            for (const [, plugin] of container.plugins) {
                if (!plugin.clickPositionValid) {
                    continue;
                }
                handled = plugin.clickPositionValid(mousePosition);
                if (handled) {
                    break;
                }
            }
            if (!handled) {
                this._doMouseTouchClick(e);
            }
            mouse.clicking = false;
        };
        this._mouseTouchFinish = () => {
            const interactivity = this.container.interactivity;
            if (!interactivity) {
                return;
            }
            const mouse = interactivity.mouse;
            delete mouse.position;
            delete mouse.clickPosition;
            delete mouse.downPosition;
            interactivity.status = mouseLeaveEvent;
            mouse.inside = false;
            mouse.clicking = false;
        };
        this._mouseTouchMove = (e) => {
            const container = this.container, options = container.actualOptions, interactivity = container.interactivity, canvasEl = container.canvas.element;
            if (!interactivity || !interactivity.element) {
                return;
            }
            interactivity.mouse.inside = true;
            let pos;
            if (e.type.startsWith("pointer")) {
                this._canPush = true;
                const mouseEvent = e;
                if (interactivity.element === window) {
                    if (canvasEl) {
                        const clientRect = canvasEl.getBoundingClientRect();
                        pos = {
                            x: mouseEvent.clientX - clientRect.left,
                            y: mouseEvent.clientY - clientRect.top,
                        };
                    }
                }
                else if (options.interactivity.detectsOn === "parent") {
                    const source = mouseEvent.target, target = mouseEvent.currentTarget;
                    if (source && target && canvasEl) {
                        const sourceRect = source.getBoundingClientRect(), targetRect = target.getBoundingClientRect(), canvasRect = canvasEl.getBoundingClientRect();
                        pos = {
                            x: mouseEvent.offsetX + 2 * sourceRect.left - (targetRect.left + canvasRect.left),
                            y: mouseEvent.offsetY + 2 * sourceRect.top - (targetRect.top + canvasRect.top),
                        };
                    }
                    else {
                        pos = {
                            x: mouseEvent.offsetX ?? mouseEvent.clientX,
                            y: mouseEvent.offsetY ?? mouseEvent.clientY,
                        };
                    }
                }
                else if (mouseEvent.target === canvasEl) {
                    pos = {
                        x: mouseEvent.offsetX ?? mouseEvent.clientX,
                        y: mouseEvent.offsetY ?? mouseEvent.clientY,
                    };
                }
            }
            else {
                this._canPush = e.type !== "touchmove";
                if (canvasEl) {
                    const touchEvent = e, lastTouch = touchEvent.touches[touchEvent.touches.length - 1], canvasRect = canvasEl.getBoundingClientRect();
                    pos = {
                        x: lastTouch.clientX - (canvasRect.left ?? 0),
                        y: lastTouch.clientY - (canvasRect.top ?? 0),
                    };
                }
            }
            const pxRatio = container.retina.pixelRatio;
            if (pos) {
                pos.x *= pxRatio;
                pos.y *= pxRatio;
            }
            interactivity.mouse.position = pos;
            interactivity.status = mouseMoveEvent;
        };
        this._touchEnd = (e) => {
            const evt = e, touches = Array.from(evt.changedTouches);
            for (const touch of touches) {
                this._touches.delete(touch.identifier);
            }
            this._mouseTouchFinish();
        };
        this._touchEndClick = (e) => {
            const evt = e, touches = Array.from(evt.changedTouches);
            for (const touch of touches) {
                this._touches.delete(touch.identifier);
            }
            this._mouseTouchClick(e);
        };
        this._touchStart = (e) => {
            const evt = e, touches = Array.from(evt.changedTouches);
            for (const touch of touches) {
                this._touches.set(touch.identifier, performance.now());
            }
            this._mouseTouchMove(e);
        };
        this._canPush = true;
        this._touches = new Map();
        this._handlers = {
            mouseDown: () => this._mouseDown(),
            mouseLeave: () => this._mouseTouchFinish(),
            mouseMove: (e) => this._mouseTouchMove(e),
            mouseUp: (e) => this._mouseTouchClick(e),
            touchStart: (e) => this._touchStart(e),
            touchMove: (e) => this._mouseTouchMove(e),
            touchEnd: (e) => this._touchEnd(e),
            touchCancel: (e) => this._touchEnd(e),
            touchEndClick: (e) => this._touchEndClick(e),
            visibilityChange: () => this._handleVisibilityChange(),
            themeChange: (e) => this._handleThemeChange(e),
            oldThemeChange: (e) => this._handleThemeChange(e),
            resize: () => {
                this._handleWindowResize();
            },
        };
    }
    addListeners() {
        this._manageListeners(true);
    }
    removeListeners() {
        this._manageListeners(false);
    }
}

class OptionsColor {
    constructor() {
        this.value = "";
    }
    static create(source, data) {
        const color = new OptionsColor();
        color.load(source);
        if (data !== undefined) {
            if (isString(data) || isArray(data)) {
                color.load({ value: data });
            }
            else {
                color.load(data);
            }
        }
        return color;
    }
    load(data) {
        if (data?.value === undefined) {
            return;
        }
        this.value = data.value;
    }
}

class Background {
    constructor() {
        this.color = new OptionsColor();
        this.color.value = "";
        this.image = "";
        this.position = "";
        this.repeat = "";
        this.size = "";
        this.opacity = 1;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.color !== undefined) {
            this.color = OptionsColor.create(this.color, data.color);
        }
        if (data.image !== undefined) {
            this.image = data.image;
        }
        if (data.position !== undefined) {
            this.position = data.position;
        }
        if (data.repeat !== undefined) {
            this.repeat = data.repeat;
        }
        if (data.size !== undefined) {
            this.size = data.size;
        }
        if (data.opacity !== undefined) {
            this.opacity = data.opacity;
        }
    }
}

class BackgroundMaskCover {
    constructor() {
        this.color = new OptionsColor();
        this.color.value = "#fff";
        this.opacity = 1;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.color !== undefined) {
            this.color = OptionsColor.create(this.color, data.color);
        }
        if (data.opacity !== undefined) {
            this.opacity = data.opacity;
        }
    }
}

class BackgroundMask {
    constructor() {
        this.composite = "destination-out";
        this.cover = new BackgroundMaskCover();
        this.enable = false;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.composite !== undefined) {
            this.composite = data.composite;
        }
        if (data.cover !== undefined) {
            const cover = data.cover;
            const color = (isString(data.cover) ? { color: data.cover } : data.cover);
            this.cover.load(cover.color !== undefined ? cover : { color: color });
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
    }
}

class FullScreen {
    constructor() {
        this.enable = true;
        this.zIndex = 0;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.zIndex !== undefined) {
            this.zIndex = data.zIndex;
        }
    }
}

class ClickEvent {
    constructor() {
        this.enable = false;
        this.mode = [];
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.mode !== undefined) {
            this.mode = data.mode;
        }
    }
}

class DivEvent {
    constructor() {
        this.selectors = [];
        this.enable = false;
        this.mode = [];
        this.type = "circle";
    }
    get el() {
        return this.elementId;
    }
    set el(value) {
        this.elementId = value;
    }
    get elementId() {
        return this.ids;
    }
    set elementId(value) {
        this.ids = value;
    }
    get ids() {
        return executeOnSingleOrMultiple(this.selectors, (t) => t.replace("#", ""));
    }
    set ids(value) {
        this.selectors = executeOnSingleOrMultiple(value, (t) => `#${t}`);
    }
    load(data) {
        if (!data) {
            return;
        }
        const ids = data.ids ?? data.elementId ?? data.el;
        if (ids !== undefined) {
            this.ids = ids;
        }
        if (data.selectors !== undefined) {
            this.selectors = data.selectors;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.mode !== undefined) {
            this.mode = data.mode;
        }
        if (data.type !== undefined) {
            this.type = data.type;
        }
    }
}

class Parallax {
    constructor() {
        this.enable = false;
        this.force = 2;
        this.smooth = 10;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.force !== undefined) {
            this.force = data.force;
        }
        if (data.smooth !== undefined) {
            this.smooth = data.smooth;
        }
    }
}

class HoverEvent {
    constructor() {
        this.enable = false;
        this.mode = [];
        this.parallax = new Parallax();
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.mode !== undefined) {
            this.mode = data.mode;
        }
        this.parallax.load(data.parallax);
    }
}

class ResizeEvent {
    constructor() {
        this.delay = 0.5;
        this.enable = true;
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.delay !== undefined) {
            this.delay = data.delay;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
    }
}

class Events {
    constructor() {
        this.onClick = new ClickEvent();
        this.onDiv = new DivEvent();
        this.onHover = new HoverEvent();
        this.resize = new ResizeEvent();
    }
    get onclick() {
        return this.onClick;
    }
    set onclick(value) {
        this.onClick = value;
    }
    get ondiv() {
        return this.onDiv;
    }
    set ondiv(value) {
        this.onDiv = value;
    }
    get onhover() {
        return this.onHover;
    }
    set onhover(value) {
        this.onHover = value;
    }
    load(data) {
        if (!data) {
            return;
        }
        this.onClick.load(data.onClick ?? data.onclick);
        const onDiv = data.onDiv ?? data.ondiv;
        if (onDiv !== undefined) {
            this.onDiv = executeOnSingleOrMultiple(onDiv, (t) => {
                const tmp = new DivEvent();
                tmp.load(t);
                return tmp;
            });
        }
        this.onHover.load(data.onHover ?? data.onhover);
        if (isBoolean(data.resize)) {
            this.resize.enable = data.resize;
        }
        else {
            this.resize.load(data.resize);
        }
    }
}

class Modes {
    constructor(engine, container) {
        this._engine = engine;
        this._container = container;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (!this._container) {
            return;
        }
        const interactors = this._engine.plugins.interactors.get(this._container);
        if (!interactors) {
            return;
        }
        for (const interactor of interactors) {
            if (!interactor.loadModeOptions) {
                continue;
            }
            interactor.loadModeOptions(this, data);
        }
    }
}

class Interactivity {
    constructor(engine, container) {
        this.detectsOn = "window";
        this.events = new Events();
        this.modes = new Modes(engine, container);
    }
    get detect_on() {
        return this.detectsOn;
    }
    set detect_on(value) {
        this.detectsOn = value;
    }
    load(data) {
        if (!data) {
            return;
        }
        const detectsOn = data.detectsOn ?? data.detect_on;
        if (detectsOn !== undefined) {
            this.detectsOn = detectsOn;
        }
        this.events.load(data.events);
        this.modes.load(data.modes);
    }
}

class ManualParticle {
    load(data) {
        if (!data) {
            return;
        }
        if (data.position) {
            this.position = {
                x: data.position.x ?? 50,
                y: data.position.y ?? 50,
                mode: data.position.mode ?? "percent",
            };
        }
        if (data.options) {
            this.options = deepExtend({}, data.options);
        }
    }
}

class Responsive {
    constructor() {
        this.maxWidth = Infinity;
        this.options = {};
        this.mode = "canvas";
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.maxWidth !== undefined) {
            this.maxWidth = data.maxWidth;
        }
        if (data.mode !== undefined) {
            if (data.mode === "screen") {
                this.mode = "screen";
            }
            else {
                this.mode = "canvas";
            }
        }
        if (data.options !== undefined) {
            this.options = deepExtend({}, data.options);
        }
    }
}

class ThemeDefault {
    constructor() {
        this.auto = false;
        this.mode = "any";
        this.value = false;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.auto !== undefined) {
            this.auto = data.auto;
        }
        if (data.mode !== undefined) {
            this.mode = data.mode;
        }
        if (data.value !== undefined) {
            this.value = data.value;
        }
    }
}

class Theme {
    constructor() {
        this.name = "";
        this.default = new ThemeDefault();
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.name !== undefined) {
            this.name = data.name;
        }
        this.default.load(data.default);
        if (data.options !== undefined) {
            this.options = deepExtend({}, data.options);
        }
    }
}

class ColorAnimation {
    constructor() {
        this.count = 0;
        this.enable = false;
        this.offset = 0;
        this.speed = 1;
        this.delay = 0;
        this.decay = 0;
        this.sync = true;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.count !== undefined) {
            this.count = setRangeValue(data.count);
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.offset !== undefined) {
            this.offset = setRangeValue(data.offset);
        }
        if (data.speed !== undefined) {
            this.speed = setRangeValue(data.speed);
        }
        if (data.decay !== undefined) {
            this.decay = setRangeValue(data.decay);
        }
        if (data.delay !== undefined) {
            this.delay = setRangeValue(data.delay);
        }
        if (data.sync !== undefined) {
            this.sync = data.sync;
        }
    }
}

class HslAnimation {
    constructor() {
        this.h = new ColorAnimation();
        this.s = new ColorAnimation();
        this.l = new ColorAnimation();
    }
    load(data) {
        if (!data) {
            return;
        }
        this.h.load(data.h);
        this.s.load(data.s);
        this.l.load(data.l);
    }
}

class AnimatableColor extends OptionsColor {
    constructor() {
        super();
        this.animation = new HslAnimation();
    }
    static create(source, data) {
        const color = new AnimatableColor();
        color.load(source);
        if (data !== undefined) {
            if (isString(data) || isArray(data)) {
                color.load({ value: data });
            }
            else {
                color.load(data);
            }
        }
        return color;
    }
    load(data) {
        super.load(data);
        if (!data) {
            return;
        }
        const colorAnimation = data.animation;
        if (colorAnimation !== undefined) {
            if (colorAnimation.enable !== undefined) {
                this.animation.h.load(colorAnimation);
            }
            else {
                this.animation.load(data.animation);
            }
        }
    }
}

class CollisionsAbsorb {
    constructor() {
        this.speed = 2;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.speed !== undefined) {
            this.speed = data.speed;
        }
    }
}

class CollisionsOverlap {
    constructor() {
        this.enable = true;
        this.retries = 0;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.retries !== undefined) {
            this.retries = data.retries;
        }
    }
}

class AnimationOptions {
    constructor() {
        this.count = 0;
        this.enable = false;
        this.speed = 1;
        this.decay = 0;
        this.delay = 0;
        this.sync = false;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.count !== undefined) {
            this.count = setRangeValue(data.count);
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.speed !== undefined) {
            this.speed = setRangeValue(data.speed);
        }
        if (data.decay !== undefined) {
            this.decay = setRangeValue(data.decay);
        }
        if (data.delay !== undefined) {
            this.delay = setRangeValue(data.delay);
        }
        if (data.sync !== undefined) {
            this.sync = data.sync;
        }
    }
}
class RangedAnimationOptions extends AnimationOptions {
    constructor() {
        super();
        this.mode = "auto";
        this.startValue = "random";
    }
    load(data) {
        super.load(data);
        if (!data) {
            return;
        }
        if (data.minimumValue !== undefined) {
            this.minimumValue = data.minimumValue;
        }
        if (data.mode !== undefined) {
            this.mode = data.mode;
        }
        if (data.startValue !== undefined) {
            this.startValue = data.startValue;
        }
    }
}

class Random {
    constructor() {
        this.enable = false;
        this.minimumValue = 0;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.minimumValue !== undefined) {
            this.minimumValue = data.minimumValue;
        }
    }
}

class ValueWithRandom {
    constructor() {
        this.random = new Random();
        this.value = 0;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (isBoolean(data.random)) {
            this.random.enable = data.random;
        }
        else {
            this.random.load(data.random);
        }
        if (data.value !== undefined) {
            this.value = setRangeValue(data.value, this.random.enable ? this.random.minimumValue : undefined);
        }
    }
}

class ParticlesBounceFactor extends ValueWithRandom {
    constructor() {
        super();
        this.random.minimumValue = 0.1;
        this.value = 1;
    }
}

class ParticlesBounce {
    constructor() {
        this.horizontal = new ParticlesBounceFactor();
        this.vertical = new ParticlesBounceFactor();
    }
    load(data) {
        if (!data) {
            return;
        }
        this.horizontal.load(data.horizontal);
        this.vertical.load(data.vertical);
    }
}

class Collisions {
    constructor() {
        this.absorb = new CollisionsAbsorb();
        this.bounce = new ParticlesBounce();
        this.enable = false;
        this.maxSpeed = 50;
        this.mode = "bounce";
        this.overlap = new CollisionsOverlap();
    }
    load(data) {
        if (!data) {
            return;
        }
        this.absorb.load(data.absorb);
        this.bounce.load(data.bounce);
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.maxSpeed !== undefined) {
            this.maxSpeed = setRangeValue(data.maxSpeed);
        }
        if (data.mode !== undefined) {
            this.mode = data.mode;
        }
        this.overlap.load(data.overlap);
    }
}

class MoveAngle {
    constructor() {
        this.offset = 0;
        this.value = 90;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.offset !== undefined) {
            this.offset = setRangeValue(data.offset);
        }
        if (data.value !== undefined) {
            this.value = setRangeValue(data.value);
        }
    }
}

class MoveAttract {
    constructor() {
        this.distance = 200;
        this.enable = false;
        this.rotate = {
            x: 3000,
            y: 3000,
        };
    }
    get rotateX() {
        return this.rotate.x;
    }
    set rotateX(value) {
        this.rotate.x = value;
    }
    get rotateY() {
        return this.rotate.y;
    }
    set rotateY(value) {
        this.rotate.y = value;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.distance !== undefined) {
            this.distance = setRangeValue(data.distance);
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        const rotateX = data.rotate?.x ?? data.rotateX;
        if (rotateX !== undefined) {
            this.rotate.x = rotateX;
        }
        const rotateY = data.rotate?.y ?? data.rotateY;
        if (rotateY !== undefined) {
            this.rotate.y = rotateY;
        }
    }
}

class MoveCenter {
    constructor() {
        this.x = 50;
        this.y = 50;
        this.mode = "percent";
        this.radius = 0;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.x !== undefined) {
            this.x = data.x;
        }
        if (data.y !== undefined) {
            this.y = data.y;
        }
        if (data.mode !== undefined) {
            this.mode = data.mode;
        }
        if (data.radius !== undefined) {
            this.radius = data.radius;
        }
    }
}

class MoveGravity {
    constructor() {
        this.acceleration = 9.81;
        this.enable = false;
        this.inverse = false;
        this.maxSpeed = 50;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.acceleration !== undefined) {
            this.acceleration = setRangeValue(data.acceleration);
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.inverse !== undefined) {
            this.inverse = data.inverse;
        }
        if (data.maxSpeed !== undefined) {
            this.maxSpeed = setRangeValue(data.maxSpeed);
        }
    }
}

class MovePath {
    constructor() {
        this.clamp = true;
        this.delay = new ValueWithRandom();
        this.enable = false;
        this.options = {};
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.clamp !== undefined) {
            this.clamp = data.clamp;
        }
        this.delay.load(data.delay);
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        this.generator = data.generator;
        if (data.options) {
            this.options = deepExtend(this.options, data.options);
        }
    }
}

class MoveTrailFill {
    load(data) {
        if (!data) {
            return;
        }
        if (data.color !== undefined) {
            this.color = OptionsColor.create(this.color, data.color);
        }
        if (data.image !== undefined) {
            this.image = data.image;
        }
    }
}

class MoveTrail {
    constructor() {
        this.enable = false;
        this.length = 10;
        this.fill = new MoveTrailFill();
    }
    get fillColor() {
        return this.fill.color;
    }
    set fillColor(value) {
        this.fill.load({ color: value });
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.fill !== undefined || data.fillColor !== undefined) {
            this.fill.load(data.fill || { color: data.fillColor });
        }
        if (data.length !== undefined) {
            this.length = data.length;
        }
    }
}

class OutModes {
    constructor() {
        this.default = "out";
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.default !== undefined) {
            this.default = data.default;
        }
        this.bottom = data.bottom ?? data.default;
        this.left = data.left ?? data.default;
        this.right = data.right ?? data.default;
        this.top = data.top ?? data.default;
    }
}

class Spin {
    constructor() {
        this.acceleration = 0;
        this.enable = false;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.acceleration !== undefined) {
            this.acceleration = setRangeValue(data.acceleration);
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.position) {
            this.position = deepExtend({}, data.position);
        }
    }
}

class Move {
    constructor() {
        this.angle = new MoveAngle();
        this.attract = new MoveAttract();
        this.center = new MoveCenter();
        this.decay = 0;
        this.distance = {};
        this.direction = "none";
        this.drift = 0;
        this.enable = false;
        this.gravity = new MoveGravity();
        this.path = new MovePath();
        this.outModes = new OutModes();
        this.random = false;
        this.size = false;
        this.speed = 2;
        this.spin = new Spin();
        this.straight = false;
        this.trail = new MoveTrail();
        this.vibrate = false;
        this.warp = false;
    }
    get bounce() {
        return this.collisions;
    }
    set bounce(value) {
        this.collisions = value;
    }
    get collisions() {
        return false;
    }
    set collisions(_) {
    }
    get noise() {
        return this.path;
    }
    set noise(value) {
        this.path = value;
    }
    get outMode() {
        return this.outModes.default;
    }
    set outMode(value) {
        this.outModes.default = value;
    }
    get out_mode() {
        return this.outMode;
    }
    set out_mode(value) {
        this.outMode = value;
    }
    load(data) {
        if (!data) {
            return;
        }
        this.angle.load(isNumber(data.angle) ? { value: data.angle } : data.angle);
        this.attract.load(data.attract);
        this.center.load(data.center);
        if (data.decay !== undefined) {
            this.decay = setRangeValue(data.decay);
        }
        if (data.direction !== undefined) {
            this.direction = data.direction;
        }
        if (data.distance !== undefined) {
            this.distance = isNumber(data.distance)
                ? {
                    horizontal: data.distance,
                    vertical: data.distance,
                }
                : { ...data.distance };
        }
        if (data.drift !== undefined) {
            this.drift = setRangeValue(data.drift);
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        this.gravity.load(data.gravity);
        const outModes = data.outModes ?? data.outMode ?? data.out_mode;
        if (outModes !== undefined) {
            if (isObject(outModes)) {
                this.outModes.load(outModes);
            }
            else {
                this.outModes.load({
                    default: outModes,
                });
            }
        }
        this.path.load(data.path ?? data.noise);
        if (data.random !== undefined) {
            this.random = data.random;
        }
        if (data.size !== undefined) {
            this.size = data.size;
        }
        if (data.speed !== undefined) {
            this.speed = setRangeValue(data.speed);
        }
        this.spin.load(data.spin);
        if (data.straight !== undefined) {
            this.straight = data.straight;
        }
        this.trail.load(data.trail);
        if (data.vibrate !== undefined) {
            this.vibrate = data.vibrate;
        }
        if (data.warp !== undefined) {
            this.warp = data.warp;
        }
    }
}

class OpacityAnimation extends RangedAnimationOptions {
    constructor() {
        super();
        this.destroy = "none";
        this.speed = 2;
    }
    get opacity_min() {
        return this.minimumValue;
    }
    set opacity_min(value) {
        this.minimumValue = value;
    }
    load(data) {
        if (data?.opacity_min !== undefined && data.minimumValue === undefined) {
            data.minimumValue = data.opacity_min;
        }
        super.load(data);
        if (!data) {
            return;
        }
        if (data.destroy !== undefined) {
            this.destroy = data.destroy;
        }
    }
}

class Opacity extends ValueWithRandom {
    constructor() {
        super();
        this.animation = new OpacityAnimation();
        this.random.minimumValue = 0.1;
        this.value = 1;
    }
    get anim() {
        return this.animation;
    }
    set anim(value) {
        this.animation = value;
    }
    load(data) {
        if (!data) {
            return;
        }
        super.load(data);
        const animation = data.animation ?? data.anim;
        if (animation !== undefined) {
            this.animation.load(animation);
            this.value = setRangeValue(this.value, this.animation.enable ? this.animation.minimumValue : undefined);
        }
    }
}

class ParticlesDensity {
    constructor() {
        this.enable = false;
        this.width = 1920;
        this.height = 1080;
    }
    get area() {
        return this.width;
    }
    set area(value) {
        this.width = value;
    }
    get factor() {
        return this.height;
    }
    set factor(value) {
        this.height = value;
    }
    get value_area() {
        return this.area;
    }
    set value_area(value) {
        this.area = value;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        const width = data.width ?? data.area ?? data.value_area;
        if (width !== undefined) {
            this.width = width;
        }
        const height = data.height ?? data.factor;
        if (height !== undefined) {
            this.height = height;
        }
    }
}

class ParticlesNumber {
    constructor() {
        this.density = new ParticlesDensity();
        this.limit = 0;
        this.value = 0;
    }
    get max() {
        return this.limit;
    }
    set max(value) {
        this.limit = value;
    }
    load(data) {
        if (!data) {
            return;
        }
        this.density.load(data.density);
        const limit = data.limit ?? data.max;
        if (limit !== undefined) {
            this.limit = limit;
        }
        if (data.value !== undefined) {
            this.value = data.value;
        }
    }
}

class Shadow {
    constructor() {
        this.blur = 0;
        this.color = new OptionsColor();
        this.enable = false;
        this.offset = {
            x: 0,
            y: 0,
        };
        this.color.value = "#000";
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.blur !== undefined) {
            this.blur = data.blur;
        }
        this.color = OptionsColor.create(this.color, data.color);
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.offset === undefined) {
            return;
        }
        if (data.offset.x !== undefined) {
            this.offset.x = data.offset.x;
        }
        if (data.offset.y !== undefined) {
            this.offset.y = data.offset.y;
        }
    }
}

const charKey = "character", charAltKey = "char", imageKey = "image", imageAltKey = "images", polygonKey = "polygon", polygonAltKey = "star";
class Shape {
    constructor() {
        this.loadShape = (item, mainKey, altKey, altOverride) => {
            if (!item) {
                return;
            }
            const itemIsArray = isArray(item), emptyValue = itemIsArray ? [] : {}, mainDifferentValues = itemIsArray !== isArray(this.options[mainKey]), altDifferentValues = itemIsArray !== isArray(this.options[altKey]);
            if (mainDifferentValues) {
                this.options[mainKey] = emptyValue;
            }
            if (altDifferentValues && altOverride) {
                this.options[altKey] = emptyValue;
            }
            this.options[mainKey] = deepExtend(this.options[mainKey] ?? emptyValue, item);
            if (!this.options[altKey] || altOverride) {
                this.options[altKey] = deepExtend(this.options[altKey] ?? emptyValue, item);
            }
        };
        this.close = true;
        this.fill = true;
        this.options = {};
        this.type = "circle";
    }
    get character() {
        return (this.options[charKey] ?? this.options[charAltKey]);
    }
    set character(value) {
        this.options[charAltKey] = this.options[charKey] = value;
    }
    get custom() {
        return this.options;
    }
    set custom(value) {
        this.options = value;
    }
    get image() {
        return (this.options[imageKey] ?? this.options[imageAltKey]);
    }
    set image(value) {
        this.options[imageAltKey] = this.options[imageKey] = value;
    }
    get images() {
        return this.image;
    }
    set images(value) {
        this.image = value;
    }
    get polygon() {
        return (this.options[polygonKey] ?? this.options[polygonAltKey]);
    }
    set polygon(value) {
        this.options[polygonAltKey] = this.options[polygonKey] = value;
    }
    get stroke() {
        return [];
    }
    set stroke(_value) {
    }
    load(data) {
        if (!data) {
            return;
        }
        const options = data.options ?? data.custom;
        if (options !== undefined) {
            for (const shape in options) {
                const item = options[shape];
                if (item) {
                    this.options[shape] = deepExtend(this.options[shape] ?? {}, item);
                }
            }
        }
        this.loadShape(data.character, charKey, charAltKey, true);
        this.loadShape(data.polygon, polygonKey, polygonAltKey, false);
        this.loadShape(data.image ?? data.images, imageKey, imageAltKey, true);
        if (data.close !== undefined) {
            this.close = data.close;
        }
        if (data.fill !== undefined) {
            this.fill = data.fill;
        }
        if (data.type !== undefined) {
            this.type = data.type;
        }
    }
}

class SizeAnimation extends RangedAnimationOptions {
    constructor() {
        super();
        this.destroy = "none";
        this.speed = 5;
    }
    get size_min() {
        return this.minimumValue;
    }
    set size_min(value) {
        this.minimumValue = value;
    }
    load(data) {
        if (data?.size_min !== undefined && data.minimumValue === undefined) {
            data.minimumValue = data.size_min;
        }
        super.load(data);
        if (!data) {
            return;
        }
        if (data.destroy !== undefined) {
            this.destroy = data.destroy;
        }
    }
}

class Size extends ValueWithRandom {
    constructor() {
        super();
        this.animation = new SizeAnimation();
        this.random.minimumValue = 1;
        this.value = 3;
    }
    get anim() {
        return this.animation;
    }
    set anim(value) {
        this.animation = value;
    }
    load(data) {
        super.load(data);
        if (!data) {
            return;
        }
        const animation = data.animation ?? data.anim;
        if (animation !== undefined) {
            this.animation.load(animation);
            this.value = setRangeValue(this.value, this.animation.enable ? this.animation.minimumValue : undefined);
        }
    }
}

class Stroke {
    constructor() {
        this.width = 0;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.color !== undefined) {
            this.color = AnimatableColor.create(this.color, data.color);
        }
        if (data.width !== undefined) {
            this.width = setRangeValue(data.width);
        }
        if (data.opacity !== undefined) {
            this.opacity = setRangeValue(data.opacity);
        }
    }
}

class ZIndex extends ValueWithRandom {
    constructor() {
        super();
        this.opacityRate = 1;
        this.sizeRate = 1;
        this.velocityRate = 1;
    }
    load(data) {
        super.load(data);
        if (!data) {
            return;
        }
        if (data.opacityRate !== undefined) {
            this.opacityRate = data.opacityRate;
        }
        if (data.sizeRate !== undefined) {
            this.sizeRate = data.sizeRate;
        }
        if (data.velocityRate !== undefined) {
            this.velocityRate = data.velocityRate;
        }
    }
}

class ParticlesOptions {
    constructor(engine, container) {
        this._engine = engine;
        this._container = container;
        this.bounce = new ParticlesBounce();
        this.collisions = new Collisions();
        this.color = new AnimatableColor();
        this.color.value = "#fff";
        this.groups = {};
        this.move = new Move();
        this.number = new ParticlesNumber();
        this.opacity = new Opacity();
        this.reduceDuplicates = false;
        this.shadow = new Shadow();
        this.shape = new Shape();
        this.size = new Size();
        this.stroke = new Stroke();
        this.zIndex = new ZIndex();
    }
    load(data) {
        if (!data) {
            return;
        }
        this.bounce.load(data.bounce);
        this.color.load(AnimatableColor.create(this.color, data.color));
        if (data.groups !== undefined) {
            for (const group in data.groups) {
                const item = data.groups[group];
                if (item !== undefined) {
                    this.groups[group] = deepExtend(this.groups[group] ?? {}, item);
                }
            }
        }
        this.move.load(data.move);
        this.number.load(data.number);
        this.opacity.load(data.opacity);
        if (data.reduceDuplicates !== undefined) {
            this.reduceDuplicates = data.reduceDuplicates;
        }
        this.shape.load(data.shape);
        this.size.load(data.size);
        this.shadow.load(data.shadow);
        this.zIndex.load(data.zIndex);
        const collisions = data.move?.collisions ?? data.move?.bounce;
        if (collisions !== undefined) {
            this.collisions.enable = collisions;
        }
        this.collisions.load(data.collisions);
        if (data.interactivity !== undefined) {
            this.interactivity = deepExtend({}, data.interactivity);
        }
        const strokeToLoad = data.stroke ?? data.shape?.stroke;
        if (strokeToLoad) {
            this.stroke = executeOnSingleOrMultiple(strokeToLoad, (t) => {
                const tmp = new Stroke();
                tmp.load(t);
                return tmp;
            });
        }
        if (this._container) {
            const updaters = this._engine.plugins.updaters.get(this._container);
            if (updaters) {
                for (const updater of updaters) {
                    if (updater.loadOptions) {
                        updater.loadOptions(this, data);
                    }
                }
            }
            const interactors = this._engine.plugins.interactors.get(this._container);
            if (interactors) {
                for (const interactor of interactors) {
                    if (interactor.loadParticlesOptions) {
                        interactor.loadParticlesOptions(this, data);
                    }
                }
            }
        }
    }
}

function loadOptions(options, ...sourceOptionsArr) {
    for (const sourceOptions of sourceOptionsArr) {
        options.load(sourceOptions);
    }
}
function loadParticlesOptions(engine, container, ...sourceOptionsArr) {
    const options = new ParticlesOptions(engine, container);
    loadOptions(options, ...sourceOptionsArr);
    return options;
}

class Options {
    constructor(engine, container) {
        this._findDefaultTheme = (mode) => {
            return (this.themes.find((theme) => theme.default.value && theme.default.mode === mode) ??
                this.themes.find((theme) => theme.default.value && theme.default.mode === "any"));
        };
        this._importPreset = (preset) => {
            this.load(this._engine.plugins.getPreset(preset));
        };
        this._engine = engine;
        this._container = container;
        this.autoPlay = true;
        this.background = new Background();
        this.backgroundMask = new BackgroundMask();
        this.defaultThemes = {};
        this.delay = 0;
        this.fullScreen = new FullScreen();
        this.detectRetina = true;
        this.duration = 0;
        this.fpsLimit = 120;
        this.interactivity = new Interactivity(engine, container);
        this.manualParticles = [];
        this.particles = loadParticlesOptions(this._engine, this._container);
        this.pauseOnBlur = true;
        this.pauseOnOutsideViewport = true;
        this.responsive = [];
        this.smooth = false;
        this.style = {};
        this.themes = [];
        this.zLayers = 100;
    }
    get backgroundMode() {
        return this.fullScreen;
    }
    set backgroundMode(value) {
        this.fullScreen.load(value);
    }
    get fps_limit() {
        return this.fpsLimit;
    }
    set fps_limit(value) {
        this.fpsLimit = value;
    }
    get retina_detect() {
        return this.detectRetina;
    }
    set retina_detect(value) {
        this.detectRetina = value;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.preset !== undefined) {
            executeOnSingleOrMultiple(data.preset, (preset) => this._importPreset(preset));
        }
        if (data.autoPlay !== undefined) {
            this.autoPlay = data.autoPlay;
        }
        if (data.delay !== undefined) {
            this.delay = setRangeValue(data.delay);
        }
        const detectRetina = data.detectRetina ?? data.retina_detect;
        if (detectRetina !== undefined) {
            this.detectRetina = detectRetina;
        }
        if (data.duration !== undefined) {
            this.duration = setRangeValue(data.duration);
        }
        const fpsLimit = data.fpsLimit ?? data.fps_limit;
        if (fpsLimit !== undefined) {
            this.fpsLimit = fpsLimit;
        }
        if (data.pauseOnBlur !== undefined) {
            this.pauseOnBlur = data.pauseOnBlur;
        }
        if (data.pauseOnOutsideViewport !== undefined) {
            this.pauseOnOutsideViewport = data.pauseOnOutsideViewport;
        }
        if (data.zLayers !== undefined) {
            this.zLayers = data.zLayers;
        }
        this.background.load(data.background);
        const fullScreen = data.fullScreen ?? data.backgroundMode;
        if (isBoolean(fullScreen)) {
            this.fullScreen.enable = fullScreen;
        }
        else {
            this.fullScreen.load(fullScreen);
        }
        this.backgroundMask.load(data.backgroundMask);
        this.interactivity.load(data.interactivity);
        if (data.manualParticles) {
            this.manualParticles = data.manualParticles.map((t) => {
                const tmp = new ManualParticle();
                tmp.load(t);
                return tmp;
            });
        }
        this.particles.load(data.particles);
        this.style = deepExtend(this.style, data.style);
        this._engine.plugins.loadOptions(this, data);
        if (data.smooth !== undefined) {
            this.smooth = data.smooth;
        }
        const interactors = this._engine.plugins.interactors.get(this._container);
        if (interactors) {
            for (const interactor of interactors) {
                if (interactor.loadOptions) {
                    interactor.loadOptions(this, data);
                }
            }
        }
        if (data.responsive !== undefined) {
            for (const responsive of data.responsive) {
                const optResponsive = new Responsive();
                optResponsive.load(responsive);
                this.responsive.push(optResponsive);
            }
        }
        this.responsive.sort((a, b) => a.maxWidth - b.maxWidth);
        if (data.themes !== undefined) {
            for (const theme of data.themes) {
                const existingTheme = this.themes.find((t) => t.name === theme.name);
                if (!existingTheme) {
                    const optTheme = new Theme();
                    optTheme.load(theme);
                    this.themes.push(optTheme);
                }
                else {
                    existingTheme.load(theme);
                }
            }
        }
        this.defaultThemes.dark = this._findDefaultTheme("dark")?.name;
        this.defaultThemes.light = this._findDefaultTheme("light")?.name;
    }
    setResponsive(width, pxRatio, defaultOptions) {
        this.load(defaultOptions);
        const responsiveOptions = this.responsive.find((t) => t.mode === "screen" && screen ? t.maxWidth > screen.availWidth : t.maxWidth * pxRatio > width);
        this.load(responsiveOptions?.options);
        return responsiveOptions?.maxWidth;
    }
    setTheme(name) {
        if (name) {
            const chosenTheme = this.themes.find((theme) => theme.name === name);
            if (chosenTheme) {
                this.load(chosenTheme.options);
            }
        }
        else {
            const mediaMatch = safeMatchMedia(), clientDarkMode = mediaMatch && mediaMatch.matches, defaultTheme = this._findDefaultTheme(clientDarkMode ? "dark" : "light");
            if (defaultTheme) {
                this.load(defaultTheme.options);
            }
        }
    }
}

class InteractionManager {
    constructor(engine, container) {
        this.container = container;
        this._engine = engine;
        this._interactors = engine.plugins.getInteractors(this.container, true);
        this._externalInteractors = [];
        this._particleInteractors = [];
    }
    async externalInteract(delta) {
        for (const interactor of this._externalInteractors) {
            interactor.isEnabled() && (await interactor.interact(delta));
        }
    }
    handleClickMode(mode) {
        for (const interactor of this._externalInteractors) {
            interactor.handleClickMode && interactor.handleClickMode(mode);
        }
    }
    init() {
        this._externalInteractors = [];
        this._particleInteractors = [];
        for (const interactor of this._interactors) {
            switch (interactor.type) {
                case "external":
                    this._externalInteractors.push(interactor);
                    break;
                case "particles":
                    this._particleInteractors.push(interactor);
                    break;
            }
            interactor.init();
        }
    }
    async particlesInteract(particle, delta) {
        for (const interactor of this._externalInteractors) {
            interactor.clear(particle, delta);
        }
        for (const interactor of this._particleInteractors) {
            interactor.isEnabled(particle) && (await interactor.interact(particle, delta));
        }
    }
    async reset(particle) {
        for (const interactor of this._externalInteractors) {
            interactor.isEnabled() && interactor.reset(particle);
        }
        for (const interactor of this._particleInteractors) {
            interactor.isEnabled(particle) && interactor.reset(particle);
        }
    }
}

const fixOutMode = (data) => {
    if (!isInArray(data.outMode, data.checkModes)) {
        return;
    }
    const diameter = data.radius * 2;
    if (data.coord > data.maxCoord - diameter) {
        data.setCb(-data.radius);
    }
    else if (data.coord < diameter) {
        data.setCb(data.radius);
    }
};
class Particle {
    constructor(engine, id, container, position, overrideOptions, group) {
        this.container = container;
        this._calcPosition = (container, position, zIndex, tryCount = 0) => {
            for (const [, plugin] of container.plugins) {
                const pluginPos = plugin.particlePosition !== undefined ? plugin.particlePosition(position, this) : undefined;
                if (pluginPos) {
                    return Vector3d.create(pluginPos.x, pluginPos.y, zIndex);
                }
            }
            const canvasSize = container.canvas.size, exactPosition = calcExactPositionOrRandomFromSize({
                size: canvasSize,
                position: position,
            }), pos = Vector3d.create(exactPosition.x, exactPosition.y, zIndex), radius = this.getRadius(), outModes = this.options.move.outModes, fixHorizontal = (outMode) => {
                fixOutMode({
                    outMode,
                    checkModes: ["bounce", "bounce-horizontal"],
                    coord: pos.x,
                    maxCoord: container.canvas.size.width,
                    setCb: (value) => (pos.x += value),
                    radius,
                });
            }, fixVertical = (outMode) => {
                fixOutMode({
                    outMode,
                    checkModes: ["bounce", "bounce-vertical"],
                    coord: pos.y,
                    maxCoord: container.canvas.size.height,
                    setCb: (value) => (pos.y += value),
                    radius,
                });
            };
            fixHorizontal(outModes.left ?? outModes.default);
            fixHorizontal(outModes.right ?? outModes.default);
            fixVertical(outModes.top ?? outModes.default);
            fixVertical(outModes.bottom ?? outModes.default);
            if (this._checkOverlap(pos, tryCount)) {
                return this._calcPosition(container, undefined, zIndex, tryCount + 1);
            }
            return pos;
        };
        this._calculateVelocity = () => {
            const baseVelocity = getParticleBaseVelocity(this.direction), res = baseVelocity.copy(), moveOptions = this.options.move;
            if (moveOptions.direction === "inside" || moveOptions.direction === "outside") {
                return res;
            }
            const rad = (Math.PI / 180) * getRangeValue(moveOptions.angle.value), radOffset = (Math.PI / 180) * getRangeValue(moveOptions.angle.offset), range = {
                left: radOffset - rad / 2,
                right: radOffset + rad / 2,
            };
            if (!moveOptions.straight) {
                res.angle += randomInRange(setRangeValue(range.left, range.right));
            }
            if (moveOptions.random && typeof moveOptions.speed === "number") {
                res.length *= getRandom();
            }
            return res;
        };
        this._checkOverlap = (pos, tryCount = 0) => {
            const collisionsOptions = this.options.collisions, radius = this.getRadius();
            if (!collisionsOptions.enable) {
                return false;
            }
            const overlapOptions = collisionsOptions.overlap;
            if (overlapOptions.enable) {
                return false;
            }
            const retries = overlapOptions.retries;
            if (retries >= 0 && tryCount > retries) {
                throw new Error(`${errorPrefix} particle is overlapping and can't be placed`);
            }
            return !!this.container.particles.find((particle) => getDistance(pos, particle.position) < radius + particle.getRadius());
        };
        this._getRollColor = (color) => {
            if (!color || !this.roll || (!this.backColor && !this.roll.alter)) {
                return color;
            }
            const backFactor = this.roll.horizontal && this.roll.vertical ? 2 : 1, backSum = this.roll.horizontal ? Math.PI / 2 : 0, rolled = Math.floor(((this.roll.angle ?? 0) + backSum) / (Math.PI / backFactor)) % 2;
            if (!rolled) {
                return color;
            }
            if (this.backColor) {
                return this.backColor;
            }
            if (this.roll.alter) {
                return alterHsl(color, this.roll.alter.type, this.roll.alter.value);
            }
            return color;
        };
        this._initPosition = (position) => {
            const container = this.container, zIndexValue = getRangeValue(this.options.zIndex.value);
            this.position = this._calcPosition(container, position, clamp(zIndexValue, 0, container.zLayers));
            this.initialPosition = this.position.copy();
            const canvasSize = container.canvas.size;
            this.moveCenter = {
                ...getPosition(this.options.move.center, canvasSize),
                radius: this.options.move.center.radius ?? 0,
                mode: this.options.move.center.mode ?? "percent",
            };
            this.direction = getParticleDirectionAngle(this.options.move.direction, this.position, this.moveCenter);
            switch (this.options.move.direction) {
                case "inside":
                    this.outType = "inside";
                    break;
                case "outside":
                    this.outType = "outside";
                    break;
            }
            this.offset = Vector.origin;
        };
        this._loadShapeData = (shapeOptions, reduceDuplicates) => {
            const shapeData = shapeOptions.options[this.shape];
            if (!shapeData) {
                return;
            }
            return deepExtend({
                close: shapeOptions.close,
                fill: shapeOptions.fill,
            }, itemFromSingleOrMultiple(shapeData, this.id, reduceDuplicates));
        };
        this._engine = engine;
        this.init(id, position, overrideOptions, group);
    }
    destroy(override) {
        if (this.unbreakable || this.destroyed) {
            return;
        }
        this.destroyed = true;
        this.bubble.inRange = false;
        this.slow.inRange = false;
        const container = this.container, pathGenerator = this.pathGenerator;
        for (const [, plugin] of container.plugins) {
            if (plugin.particleDestroyed) {
                plugin.particleDestroyed(this, override);
            }
        }
        for (const updater of container.particles.updaters) {
            if (updater.particleDestroyed) {
                updater.particleDestroyed(this, override);
            }
        }
        if (pathGenerator) {
            pathGenerator.reset(this);
        }
    }
    draw(delta) {
        const container = this.container;
        for (const [, plugin] of container.plugins) {
            container.canvas.drawParticlePlugin(plugin, this, delta);
        }
        container.canvas.drawParticle(this, delta);
    }
    getFillColor() {
        return this._getRollColor(this.bubble.color ?? getHslFromAnimation(this.color));
    }
    getMass() {
        return (this.getRadius() ** 2 * Math.PI) / 2;
    }
    getPosition() {
        return {
            x: this.position.x + this.offset.x,
            y: this.position.y + this.offset.y,
            z: this.position.z,
        };
    }
    getRadius() {
        return this.bubble.radius ?? this.size.value;
    }
    getStrokeColor() {
        return this._getRollColor(this.bubble.color ?? getHslFromAnimation(this.strokeColor));
    }
    init(id, position, overrideOptions, group) {
        const container = this.container, engine = this._engine;
        this.id = id;
        this.group = group;
        this.fill = true;
        this.pathRotation = false;
        this.close = true;
        this.lastPathTime = 0;
        this.destroyed = false;
        this.unbreakable = false;
        this.rotation = 0;
        this.misplaced = false;
        this.retina = {
            maxDistance: {},
        };
        this.outType = "normal";
        this.ignoresResizeRatio = true;
        const pxRatio = container.retina.pixelRatio, mainOptions = container.actualOptions, particlesOptions = loadParticlesOptions(this._engine, container, mainOptions.particles), shapeType = particlesOptions.shape.type, { reduceDuplicates } = particlesOptions;
        this.shape = itemFromSingleOrMultiple(shapeType, this.id, reduceDuplicates);
        const shapeOptions = particlesOptions.shape;
        if (overrideOptions && overrideOptions.shape && overrideOptions.shape.type) {
            const overrideShapeType = overrideOptions.shape.type, shape = itemFromSingleOrMultiple(overrideShapeType, this.id, reduceDuplicates);
            if (shape) {
                this.shape = shape;
                shapeOptions.load(overrideOptions.shape);
            }
        }
        this.shapeData = this._loadShapeData(shapeOptions, reduceDuplicates);
        particlesOptions.load(overrideOptions);
        const shapeData = this.shapeData;
        if (shapeData) {
            particlesOptions.load(shapeData.particles);
        }
        const interactivity = new Interactivity(engine, container);
        interactivity.load(container.actualOptions.interactivity);
        interactivity.load(particlesOptions.interactivity);
        this.interactivity = interactivity;
        this.fill = shapeData?.fill ?? particlesOptions.shape.fill;
        this.close = shapeData?.close ?? particlesOptions.shape.close;
        this.options = particlesOptions;
        const pathOptions = this.options.move.path;
        this.pathDelay = getValue(pathOptions.delay) * 1000;
        if (pathOptions.generator) {
            this.pathGenerator = this._engine.plugins.getPathGenerator(pathOptions.generator);
            if (this.pathGenerator && container.addPath(pathOptions.generator, this.pathGenerator)) {
                this.pathGenerator.init(container);
            }
        }
        container.retina.initParticle(this);
        this.size = initParticleNumericAnimationValue(this.options.size, pxRatio);
        this.bubble = {
            inRange: false,
        };
        this.slow = {
            inRange: false,
            factor: 1,
        };
        this._initPosition(position);
        this.initialVelocity = this._calculateVelocity();
        this.velocity = this.initialVelocity.copy();
        this.moveDecay = 1 - getRangeValue(this.options.move.decay);
        const particles = container.particles;
        particles.needsSort = particles.needsSort || particles.lastZIndex < this.position.z;
        particles.lastZIndex = this.position.z;
        this.zIndexFactor = this.position.z / container.zLayers;
        this.sides = 24;
        let drawer = container.drawers.get(this.shape);
        if (!drawer) {
            drawer = this._engine.plugins.getShapeDrawer(this.shape);
            if (drawer) {
                container.drawers.set(this.shape, drawer);
            }
        }
        if (drawer && drawer.loadShape) {
            drawer.loadShape(this);
        }
        const sideCountFunc = drawer?.getSidesCount;
        if (sideCountFunc) {
            this.sides = sideCountFunc(this);
        }
        this.spawning = false;
        this.shadowColor = rangeColorToRgb(this.options.shadow.color);
        for (const updater of container.particles.updaters) {
            updater.init(this);
        }
        for (const mover of container.particles.movers) {
            mover.init && mover.init(this);
        }
        if (drawer && drawer.particleInit) {
            drawer.particleInit(container, this);
        }
        for (const [, plugin] of container.plugins) {
            plugin.particleCreated && plugin.particleCreated(this);
        }
    }
    isInsideCanvas() {
        const radius = this.getRadius(), canvasSize = this.container.canvas.size, position = this.position;
        return (position.x >= -radius &&
            position.y >= -radius &&
            position.y <= canvasSize.height + radius &&
            position.x <= canvasSize.width + radius);
    }
    isVisible() {
        return !this.destroyed && !this.spawning && this.isInsideCanvas();
    }
    reset() {
        for (const updater of this.container.particles.updaters) {
            updater.reset && updater.reset(this);
        }
    }
}

class Point {
    constructor(position, particle) {
        this.position = position;
        this.particle = particle;
    }
}

class Range {
    constructor(x, y) {
        this.position = {
            x: x,
            y: y,
        };
    }
}

class Rectangle extends Range {
    constructor(x, y, width, height) {
        super(x, y);
        this.size = {
            height: height,
            width: width,
        };
    }
    contains(point) {
        const w = this.size.width, h = this.size.height, pos = this.position;
        return point.x >= pos.x && point.x <= pos.x + w && point.y >= pos.y && point.y <= pos.y + h;
    }
    intersects(range) {
        if (range instanceof Circle) {
            range.intersects(this);
        }
        const w = this.size.width, h = this.size.height, pos1 = this.position, pos2 = range.position, size2 = range instanceof Rectangle ? range.size : { width: 0, height: 0 }, w2 = size2.width, h2 = size2.height;
        return pos2.x < pos1.x + w && pos2.x + w2 > pos1.x && pos2.y < pos1.y + h && pos2.y + h2 > pos1.y;
    }
}

class Circle extends Range {
    constructor(x, y, radius) {
        super(x, y);
        this.radius = radius;
    }
    contains(point) {
        return getDistance(point, this.position) <= this.radius;
    }
    intersects(range) {
        const pos1 = this.position, pos2 = range.position, distPos = { x: Math.abs(pos2.x - pos1.x), y: Math.abs(pos2.y - pos1.y) }, r = this.radius;
        if (range instanceof Circle) {
            const rSum = r + range.radius, dist = Math.sqrt(distPos.x ** 2 + distPos.y ** 2);
            return rSum > dist;
        }
        else if (range instanceof Rectangle) {
            const { width, height } = range.size, edges = Math.pow(distPos.x - width, 2) + Math.pow(distPos.y - height, 2);
            return (edges <= r ** 2 ||
                (distPos.x <= r + width && distPos.y <= r + height) ||
                distPos.x <= width ||
                distPos.y <= height);
        }
        return false;
    }
}

class QuadTree {
    constructor(rectangle, capacity) {
        this.rectangle = rectangle;
        this.capacity = capacity;
        this._subdivide = () => {
            const { x, y } = this.rectangle.position, { width, height } = this.rectangle.size, { capacity } = this;
            for (let i = 0; i < 4; i++) {
                this._subs.push(new QuadTree(new Rectangle(x + (width / 2) * (i % 2), y + (height / 2) * (Math.round(i / 2) - (i % 2)), width / 2, height / 2), capacity));
            }
            this._divided = true;
        };
        this._points = [];
        this._divided = false;
        this._subs = [];
    }
    insert(point) {
        if (!this.rectangle.contains(point.position)) {
            return false;
        }
        if (this._points.length < this.capacity) {
            this._points.push(point);
            return true;
        }
        if (!this._divided) {
            this._subdivide();
        }
        return this._subs.some((sub) => sub.insert(point));
    }
    query(range, check, found) {
        const res = found || [];
        if (!range.intersects(this.rectangle)) {
            return [];
        }
        for (const p of this._points) {
            if (!range.contains(p.position) &&
                getDistance(range.position, p.position) > p.particle.getRadius() &&
                (!check || check(p.particle))) {
                continue;
            }
            res.push(p.particle);
        }
        if (this._divided) {
            for (const sub of this._subs) {
                sub.query(range, check, res);
            }
        }
        return res;
    }
    queryCircle(position, radius, check) {
        return this.query(new Circle(position.x, position.y, radius), check);
    }
    queryRectangle(position, size, check) {
        return this.query(new Rectangle(position.x, position.y, size.width, size.height), check);
    }
}

const qTreeCapacity = 4;
const qTreeRectangle = (canvasSize) => {
    return new Rectangle(-canvasSize.width / 4, -canvasSize.height / 4, (canvasSize.width * 3) / 2, (canvasSize.height * 3) / 2);
};
class Particles {
    constructor(engine, container) {
        this._applyDensity = (options, manualCount, group) => {
            if (!options.number.density?.enable) {
                return;
            }
            const numberOptions = options.number, densityFactor = this._initDensityFactor(numberOptions.density), optParticlesNumber = numberOptions.value, optParticlesLimit = numberOptions.limit > 0 ? numberOptions.limit : optParticlesNumber, particlesNumber = Math.min(optParticlesNumber, optParticlesLimit) * densityFactor + manualCount, particlesCount = Math.min(this.count, this.filter((t) => t.group === group).length);
            this.limit = numberOptions.limit * densityFactor;
            if (particlesCount < particlesNumber) {
                this.push(Math.abs(particlesNumber - particlesCount), undefined, options, group);
            }
            else if (particlesCount > particlesNumber) {
                this.removeQuantity(particlesCount - particlesNumber, group);
            }
        };
        this._initDensityFactor = (densityOptions) => {
            const container = this._container;
            if (!container.canvas.element || !densityOptions.enable) {
                return 1;
            }
            const canvas = container.canvas.element, pxRatio = container.retina.pixelRatio;
            return (canvas.width * canvas.height) / (densityOptions.factor * pxRatio ** 2 * densityOptions.area);
        };
        this._pushParticle = (position, overrideOptions, group, initializer) => {
            try {
                let particle = this.pool.pop();
                if (particle) {
                    particle.init(this._nextId, position, overrideOptions, group);
                }
                else {
                    particle = new Particle(this._engine, this._nextId, this._container, position, overrideOptions, group);
                }
                let canAdd = true;
                if (initializer) {
                    canAdd = initializer(particle);
                }
                if (!canAdd) {
                    return;
                }
                this._array.push(particle);
                this._zArray.push(particle);
                this._nextId++;
                this._engine.dispatchEvent("particleAdded", {
                    container: this._container,
                    data: {
                        particle,
                    },
                });
                return particle;
            }
            catch (e) {
                getLogger().warning(`${errorPrefix} adding particle: ${e}`);
                return;
            }
        };
        this._removeParticle = (index, group, override) => {
            const particle = this._array[index];
            if (!particle || particle.group !== group) {
                return false;
            }
            particle.destroy(override);
            const zIdx = this._zArray.indexOf(particle);
            this._array.splice(index, 1);
            this._zArray.splice(zIdx, 1);
            this.pool.push(particle);
            this._engine.dispatchEvent("particleRemoved", {
                container: this._container,
                data: {
                    particle,
                },
            });
            return true;
        };
        this._engine = engine;
        this._container = container;
        this._nextId = 0;
        this._array = [];
        this._zArray = [];
        this.pool = [];
        this.limit = 0;
        this.needsSort = false;
        this.lastZIndex = 0;
        this._interactionManager = new InteractionManager(engine, container);
        const canvasSize = container.canvas.size;
        this.quadTree = new QuadTree(qTreeRectangle(canvasSize), qTreeCapacity);
        this.movers = this._engine.plugins.getMovers(container, true);
        this.updaters = this._engine.plugins.getUpdaters(container, true);
    }
    get count() {
        return this._array.length;
    }
    addManualParticles() {
        const container = this._container, options = container.actualOptions;
        for (const particle of options.manualParticles) {
            this.addParticle(particle.position ? getPosition(particle.position, container.canvas.size) : undefined, particle.options);
        }
    }
    addParticle(position, overrideOptions, group, initializer) {
        const container = this._container, options = container.actualOptions, limit = options.particles.number.limit;
        if (limit > 0) {
            const countToRemove = this.count + 1 - limit;
            if (countToRemove > 0) {
                this.removeQuantity(countToRemove);
            }
        }
        return this._pushParticle(position, overrideOptions, group, initializer);
    }
    clear() {
        this._array = [];
        this._zArray = [];
    }
    destroy() {
        this._array = [];
        this._zArray = [];
        this.movers = [];
        this.updaters = [];
    }
    async draw(delta) {
        const container = this._container;
        container.canvas.clear();
        await this.update(delta);
        for (const [, plugin] of container.plugins) {
            container.canvas.drawPlugin(plugin, delta);
        }
        for (const p of this._zArray) {
            p.draw(delta);
        }
    }
    filter(condition) {
        return this._array.filter(condition);
    }
    find(condition) {
        return this._array.find(condition);
    }
    handleClickMode(mode) {
        this._interactionManager.handleClickMode(mode);
    }
    init() {
        const container = this._container, options = container.actualOptions;
        this.lastZIndex = 0;
        this.needsSort = false;
        let handled = false;
        this.updaters = this._engine.plugins.getUpdaters(container, true);
        this._interactionManager.init();
        for (const [, plugin] of container.plugins) {
            if (plugin.particlesInitialization !== undefined) {
                handled = plugin.particlesInitialization();
            }
            if (handled) {
                break;
            }
        }
        this._interactionManager.init();
        for (const [, pathGenerator] of container.pathGenerators) {
            pathGenerator.init(container);
        }
        this.addManualParticles();
        if (!handled) {
            for (const group in options.particles.groups) {
                const groupOptions = options.particles.groups[group];
                for (let i = this.count, j = 0; j < groupOptions.number?.value && i < options.particles.number.value; i++, j++) {
                    this.addParticle(undefined, groupOptions, group);
                }
            }
            for (let i = this.count; i < options.particles.number.value; i++) {
                this.addParticle();
            }
        }
    }
    push(nb, mouse, overrideOptions, group) {
        this.pushing = true;
        for (let i = 0; i < nb; i++) {
            this.addParticle(mouse?.position, overrideOptions, group);
        }
        this.pushing = false;
    }
    async redraw() {
        this.clear();
        this.init();
        await this.draw({ value: 0, factor: 0 });
    }
    remove(particle, group, override) {
        this.removeAt(this._array.indexOf(particle), undefined, group, override);
    }
    removeAt(index, quantity = 1, group, override) {
        if (index < 0 || index > this.count) {
            return;
        }
        let deleted = 0;
        for (let i = index; deleted < quantity && i < this.count; i++) {
            this._removeParticle(i--, group, override) && deleted++;
        }
    }
    removeQuantity(quantity, group) {
        this.removeAt(0, quantity, group);
    }
    setDensity() {
        const options = this._container.actualOptions, groups = options.particles.groups;
        for (const group in groups) {
            this._applyDensity(groups[group], 0, group);
        }
        this._applyDensity(options.particles, options.manualParticles.length);
    }
    async update(delta) {
        const container = this._container, particlesToDelete = new Set();
        this.quadTree = new QuadTree(qTreeRectangle(container.canvas.size), qTreeCapacity);
        for (const [, pathGenerator] of container.pathGenerators) {
            pathGenerator.update();
        }
        for (const [, plugin] of container.plugins) {
            plugin.update && plugin.update(delta);
        }
        for (const particle of this._array) {
            const resizeFactor = container.canvas.resizeFactor;
            if (resizeFactor && !particle.ignoresResizeRatio) {
                particle.position.x *= resizeFactor.width;
                particle.position.y *= resizeFactor.height;
                particle.initialPosition.x *= resizeFactor.width;
                particle.initialPosition.y *= resizeFactor.height;
            }
            particle.ignoresResizeRatio = false;
            await this._interactionManager.reset(particle);
            for (const [, plugin] of this._container.plugins) {
                if (particle.destroyed) {
                    break;
                }
                if (plugin.particleUpdate) {
                    plugin.particleUpdate(particle, delta);
                }
            }
            for (const mover of this.movers) {
                mover.isEnabled(particle) && mover.move(particle, delta);
            }
            if (particle.destroyed) {
                particlesToDelete.add(particle);
                continue;
            }
            this.quadTree.insert(new Point(particle.getPosition(), particle));
        }
        if (particlesToDelete.size) {
            const checkDelete = (p) => !particlesToDelete.has(p);
            this._array = this.filter(checkDelete);
            this._zArray = this._zArray.filter(checkDelete);
            this.pool.push(...particlesToDelete);
        }
        await this._interactionManager.externalInteract(delta);
        for (const particle of this._array) {
            for (const updater of this.updaters) {
                updater.update(particle, delta);
            }
            if (!particle.destroyed && !particle.spawning) {
                await this._interactionManager.particlesInteract(particle, delta);
            }
        }
        delete container.canvas.resizeFactor;
        if (this.needsSort) {
            const zArray = this._zArray;
            zArray.sort((a, b) => b.position.z - a.position.z || a.id - b.id);
            this.lastZIndex = zArray[zArray.length - 1].position.z;
            this.needsSort = false;
        }
    }
}

class Retina {
    constructor(container) {
        this.container = container;
        this.pixelRatio = 1;
        this.reduceFactor = 1;
    }
    init() {
        const container = this.container, options = container.actualOptions;
        this.pixelRatio = !options.detectRetina || isSsr() ? 1 : window.devicePixelRatio;
        this.reduceFactor = 1;
        const ratio = this.pixelRatio;
        if (container.canvas.element) {
            const element = container.canvas.element;
            container.canvas.size.width = element.offsetWidth * ratio;
            container.canvas.size.height = element.offsetHeight * ratio;
        }
        const particles = options.particles, moveOptions = particles.move;
        this.attractDistance = getRangeValue(moveOptions.attract.distance) * ratio;
        this.maxSpeed = getRangeValue(moveOptions.gravity.maxSpeed) * ratio;
        this.sizeAnimationSpeed = getRangeValue(particles.size.animation.speed) * ratio;
    }
    initParticle(particle) {
        const options = particle.options, ratio = this.pixelRatio, moveOptions = options.move, moveDistance = moveOptions.distance, props = particle.retina;
        props.attractDistance = getRangeValue(moveOptions.attract.distance) * ratio;
        props.moveDrift = getRangeValue(moveOptions.drift) * ratio;
        props.moveSpeed = getRangeValue(moveOptions.speed) * ratio;
        props.sizeAnimationSpeed = getRangeValue(options.size.animation.speed) * ratio;
        const maxDistance = props.maxDistance;
        maxDistance.horizontal = moveDistance.horizontal !== undefined ? moveDistance.horizontal * ratio : undefined;
        maxDistance.vertical = moveDistance.vertical !== undefined ? moveDistance.vertical * ratio : undefined;
        props.maxSpeed = getRangeValue(moveOptions.gravity.maxSpeed) * ratio;
    }
}

function guardCheck(container) {
    return container && !container.destroyed;
}
function initDelta(value, fpsLimit = 60, smooth = false) {
    return {
        value,
        factor: smooth ? 60 / fpsLimit : (60 * value) / 1000,
    };
}
function loadContainerOptions(engine, container, ...sourceOptionsArr) {
    const options = new Options(engine, container);
    loadOptions(options, ...sourceOptionsArr);
    return options;
}
const defaultPathGeneratorKey = "default", defaultPathGenerator = {
    generate: (p) => p.velocity,
    init: () => {
    },
    update: () => {
    },
    reset: () => {
    },
};
class Container {
    constructor(engine, id, sourceOptions) {
        this.id = id;
        this._intersectionManager = (entries) => {
            if (!guardCheck(this) || !this.actualOptions.pauseOnOutsideViewport) {
                return;
            }
            for (const entry of entries) {
                if (entry.target !== this.interactivity.element) {
                    continue;
                }
                (entry.isIntersecting ? this.play : this.pause)();
            }
        };
        this._nextFrame = async (timestamp) => {
            try {
                if (!this.smooth &&
                    this.lastFrameTime !== undefined &&
                    timestamp < this.lastFrameTime + 1000 / this.fpsLimit) {
                    this.draw(false);
                    return;
                }
                this.lastFrameTime ??= timestamp;
                const delta = initDelta(timestamp - this.lastFrameTime, this.fpsLimit, this.smooth);
                this.addLifeTime(delta.value);
                this.lastFrameTime = timestamp;
                if (delta.value > 1000) {
                    this.draw(false);
                    return;
                }
                await this.particles.draw(delta);
                if (!this.alive()) {
                    this.destroy();
                    return;
                }
                if (this.getAnimationStatus()) {
                    this.draw(false);
                }
            }
            catch (e) {
                getLogger().error(`${errorPrefix} in animation loop`, e);
            }
        };
        this._engine = engine;
        this.fpsLimit = 120;
        this.smooth = false;
        this._delay = 0;
        this._duration = 0;
        this._lifeTime = 0;
        this._firstStart = true;
        this.started = false;
        this.destroyed = false;
        this._paused = true;
        this.lastFrameTime = 0;
        this.zLayers = 100;
        this.pageHidden = false;
        this._sourceOptions = sourceOptions;
        this._initialSourceOptions = sourceOptions;
        this.retina = new Retina(this);
        this.canvas = new Canvas(this);
        this.particles = new Particles(this._engine, this);
        this.pathGenerators = new Map();
        this.interactivity = {
            mouse: {
                clicking: false,
                inside: false,
            },
        };
        this.plugins = new Map();
        this.drawers = new Map();
        this._options = loadContainerOptions(this._engine, this);
        this.actualOptions = loadContainerOptions(this._engine, this);
        this._eventListeners = new EventListeners(this);
        if (typeof IntersectionObserver !== "undefined" && IntersectionObserver) {
            this._intersectionObserver = new IntersectionObserver((entries) => this._intersectionManager(entries));
        }
        this._engine.dispatchEvent("containerBuilt", { container: this });
    }
    get options() {
        return this._options;
    }
    get sourceOptions() {
        return this._sourceOptions;
    }
    addClickHandler(callback) {
        if (!guardCheck(this)) {
            return;
        }
        const el = this.interactivity.element;
        if (!el) {
            return;
        }
        const clickOrTouchHandler = (e, pos, radius) => {
            if (!guardCheck(this)) {
                return;
            }
            const pxRatio = this.retina.pixelRatio, posRetina = {
                x: pos.x * pxRatio,
                y: pos.y * pxRatio,
            }, particles = this.particles.quadTree.queryCircle(posRetina, radius * pxRatio);
            callback(e, particles);
        };
        const clickHandler = (e) => {
            if (!guardCheck(this)) {
                return;
            }
            const mouseEvent = e, pos = {
                x: mouseEvent.offsetX || mouseEvent.clientX,
                y: mouseEvent.offsetY || mouseEvent.clientY,
            };
            clickOrTouchHandler(e, pos, 1);
        };
        const touchStartHandler = () => {
            if (!guardCheck(this)) {
                return;
            }
            touched = true;
            touchMoved = false;
        };
        const touchMoveHandler = () => {
            if (!guardCheck(this)) {
                return;
            }
            touchMoved = true;
        };
        const touchEndHandler = (e) => {
            if (!guardCheck(this)) {
                return;
            }
            if (touched && !touchMoved) {
                const touchEvent = e;
                let lastTouch = touchEvent.touches[touchEvent.touches.length - 1];
                if (!lastTouch) {
                    lastTouch = touchEvent.changedTouches[touchEvent.changedTouches.length - 1];
                    if (!lastTouch) {
                        return;
                    }
                }
                const element = this.canvas.element, canvasRect = element ? element.getBoundingClientRect() : undefined, pos = {
                    x: lastTouch.clientX - (canvasRect ? canvasRect.left : 0),
                    y: lastTouch.clientY - (canvasRect ? canvasRect.top : 0),
                };
                clickOrTouchHandler(e, pos, Math.max(lastTouch.radiusX, lastTouch.radiusY));
            }
            touched = false;
            touchMoved = false;
        };
        const touchCancelHandler = () => {
            if (!guardCheck(this)) {
                return;
            }
            touched = false;
            touchMoved = false;
        };
        let touched = false, touchMoved = false;
        el.addEventListener("click", clickHandler);
        el.addEventListener("touchstart", touchStartHandler);
        el.addEventListener("touchmove", touchMoveHandler);
        el.addEventListener("touchend", touchEndHandler);
        el.addEventListener("touchcancel", touchCancelHandler);
    }
    addLifeTime(value) {
        this._lifeTime += value;
    }
    addPath(key, generator, override = false) {
        if (!guardCheck(this) || (!override && this.pathGenerators.has(key))) {
            return false;
        }
        this.pathGenerators.set(key, generator ?? defaultPathGenerator);
        return true;
    }
    alive() {
        return !this._duration || this._lifeTime <= this._duration;
    }
    destroy() {
        if (!guardCheck(this)) {
            return;
        }
        this.stop();
        this.particles.destroy();
        this.canvas.destroy();
        for (const [, drawer] of this.drawers) {
            drawer.destroy && drawer.destroy(this);
        }
        for (const key of this.drawers.keys()) {
            this.drawers.delete(key);
        }
        this._engine.plugins.destroy(this);
        this.destroyed = true;
        const mainArr = this._engine.dom(), idx = mainArr.findIndex((t) => t === this);
        if (idx >= 0) {
            mainArr.splice(idx, 1);
        }
        this._engine.dispatchEvent("containerDestroyed", { container: this });
    }
    draw(force) {
        if (!guardCheck(this)) {
            return;
        }
        let refreshTime = force;
        this._drawAnimationFrame = requestAnimationFrame(async (timestamp) => {
            if (refreshTime) {
                this.lastFrameTime = undefined;
                refreshTime = false;
            }
            await this._nextFrame(timestamp);
        });
    }
    async export(type, options = {}) {
        for (const [, plugin] of this.plugins) {
            if (!plugin.export) {
                continue;
            }
            const res = await plugin.export(type, options);
            if (!res.supported) {
                continue;
            }
            return res.blob;
        }
        getLogger().error(`${errorPrefix} - Export plugin with type ${type} not found`);
    }
    getAnimationStatus() {
        return !this._paused && !this.pageHidden && guardCheck(this);
    }
    handleClickMode(mode) {
        if (!guardCheck(this)) {
            return;
        }
        this.particles.handleClickMode(mode);
        for (const [, plugin] of this.plugins) {
            plugin.handleClickMode && plugin.handleClickMode(mode);
        }
    }
    async init() {
        if (!guardCheck(this)) {
            return;
        }
        const shapes = this._engine.plugins.getSupportedShapes();
        for (const type of shapes) {
            const drawer = this._engine.plugins.getShapeDrawer(type);
            if (drawer) {
                this.drawers.set(type, drawer);
            }
        }
        this._options = loadContainerOptions(this._engine, this, this._initialSourceOptions, this.sourceOptions);
        this.actualOptions = loadContainerOptions(this._engine, this, this._options);
        const availablePlugins = this._engine.plugins.getAvailablePlugins(this);
        for (const [id, plugin] of availablePlugins) {
            this.plugins.set(id, plugin);
        }
        this.retina.init();
        await this.canvas.init();
        this.updateActualOptions();
        this.canvas.initBackground();
        this.canvas.resize();
        this.zLayers = this.actualOptions.zLayers;
        this._duration = getRangeValue(this.actualOptions.duration) * 1000;
        this._delay = getRangeValue(this.actualOptions.delay) * 1000;
        this._lifeTime = 0;
        this.fpsLimit = this.actualOptions.fpsLimit > 0 ? this.actualOptions.fpsLimit : 120;
        this.smooth = this.actualOptions.smooth;
        for (const [, drawer] of this.drawers) {
            drawer.init && (await drawer.init(this));
        }
        for (const [, plugin] of this.plugins) {
            plugin.init && (await plugin.init());
        }
        this._engine.dispatchEvent("containerInit", { container: this });
        this.particles.init();
        this.particles.setDensity();
        for (const [, plugin] of this.plugins) {
            plugin.particlesSetup && plugin.particlesSetup();
        }
        this._engine.dispatchEvent("particlesSetup", { container: this });
    }
    async loadTheme(name) {
        if (!guardCheck(this)) {
            return;
        }
        this._currentTheme = name;
        await this.refresh();
    }
    pause() {
        if (!guardCheck(this)) {
            return;
        }
        if (this._drawAnimationFrame !== undefined) {
            cancelAnimationFrame(this._drawAnimationFrame);
            delete this._drawAnimationFrame;
        }
        if (this._paused) {
            return;
        }
        for (const [, plugin] of this.plugins) {
            plugin.pause && plugin.pause();
        }
        if (!this.pageHidden) {
            this._paused = true;
        }
        this._engine.dispatchEvent("containerPaused", { container: this });
    }
    play(force) {
        if (!guardCheck(this)) {
            return;
        }
        const needsUpdate = this._paused || force;
        if (this._firstStart && !this.actualOptions.autoPlay) {
            this._firstStart = false;
            return;
        }
        if (this._paused) {
            this._paused = false;
        }
        if (needsUpdate) {
            for (const [, plugin] of this.plugins) {
                if (plugin.play) {
                    plugin.play();
                }
            }
        }
        this._engine.dispatchEvent("containerPlay", { container: this });
        this.draw(needsUpdate || false);
    }
    async refresh() {
        if (!guardCheck(this)) {
            return;
        }
        this.stop();
        return this.start();
    }
    async reset() {
        if (!guardCheck(this)) {
            return;
        }
        this._initialSourceOptions = undefined;
        this._options = loadContainerOptions(this._engine, this);
        this.actualOptions = loadContainerOptions(this._engine, this, this._options);
        return this.refresh();
    }
    setNoise(noiseOrGenerator, init, update) {
        if (!guardCheck(this)) {
            return;
        }
        this.setPath(noiseOrGenerator, init, update);
    }
    setPath(pathOrGenerator, init, update) {
        if (!pathOrGenerator || !guardCheck(this)) {
            return;
        }
        const pathGenerator = { ...defaultPathGenerator };
        if (isFunction(pathOrGenerator)) {
            pathGenerator.generate = pathOrGenerator;
            if (init) {
                pathGenerator.init = init;
            }
            if (update) {
                pathGenerator.update = update;
            }
        }
        else {
            const oldGenerator = pathGenerator;
            pathGenerator.generate = pathOrGenerator.generate || oldGenerator.generate;
            pathGenerator.init = pathOrGenerator.init || oldGenerator.init;
            pathGenerator.update = pathOrGenerator.update || oldGenerator.update;
        }
        this.addPath(defaultPathGeneratorKey, pathGenerator, true);
    }
    async start() {
        if (!guardCheck(this) || this.started) {
            return;
        }
        await this.init();
        this.started = true;
        await new Promise((resolve) => {
            this._delayTimeout = setTimeout(async () => {
                this._eventListeners.addListeners();
                if (this.interactivity.element instanceof HTMLElement && this._intersectionObserver) {
                    this._intersectionObserver.observe(this.interactivity.element);
                }
                for (const [, plugin] of this.plugins) {
                    plugin.start && (await plugin.start());
                }
                this._engine.dispatchEvent("containerStarted", { container: this });
                this.play();
                resolve();
            }, this._delay);
        });
    }
    stop() {
        if (!guardCheck(this) || !this.started) {
            return;
        }
        if (this._delayTimeout) {
            clearTimeout(this._delayTimeout);
            delete this._delayTimeout;
        }
        this._firstStart = true;
        this.started = false;
        this._eventListeners.removeListeners();
        this.pause();
        this.particles.clear();
        this.canvas.stop();
        if (this.interactivity.element instanceof HTMLElement && this._intersectionObserver) {
            this._intersectionObserver.unobserve(this.interactivity.element);
        }
        for (const [, plugin] of this.plugins) {
            plugin.stop && plugin.stop();
        }
        for (const key of this.plugins.keys()) {
            this.plugins.delete(key);
        }
        this._sourceOptions = this._options;
        this._engine.dispatchEvent("containerStopped", { container: this });
    }
    updateActualOptions() {
        this.actualOptions.responsive = [];
        const newMaxWidth = this.actualOptions.setResponsive(this.canvas.size.width, this.retina.pixelRatio, this._options);
        this.actualOptions.setTheme(this._currentTheme);
        if (this.responsiveMaxWidth === newMaxWidth) {
            return false;
        }
        this.responsiveMaxWidth = newMaxWidth;
        return true;
    }
}

class EventDispatcher {
    constructor() {
        this._listeners = new Map();
    }
    addEventListener(type, listener) {
        this.removeEventListener(type, listener);
        let arr = this._listeners.get(type);
        if (!arr) {
            arr = [];
            this._listeners.set(type, arr);
        }
        arr.push(listener);
    }
    dispatchEvent(type, args) {
        const listeners = this._listeners.get(type);
        listeners && listeners.forEach((handler) => handler(args));
    }
    hasEventListener(type) {
        return !!this._listeners.get(type);
    }
    removeAllEventListeners(type) {
        if (!type) {
            this._listeners = new Map();
        }
        else {
            this._listeners.delete(type);
        }
    }
    removeEventListener(type, listener) {
        const arr = this._listeners.get(type);
        if (!arr) {
            return;
        }
        const length = arr.length, idx = arr.indexOf(listener);
        if (idx < 0) {
            return;
        }
        if (length === 1) {
            this._listeners.delete(type);
        }
        else {
            arr.splice(idx, 1);
        }
    }
}

function getItemsFromInitializer(container, map, initializers, force = false) {
    let res = map.get(container);
    if (!res || force) {
        res = [...initializers.values()].map((t) => t(container));
        map.set(container, res);
    }
    return res;
}
class Plugins {
    constructor(engine) {
        this._engine = engine;
        this.plugins = [];
        this._initializers = {
            interactors: new Map(),
            movers: new Map(),
            updaters: new Map(),
        };
        this.interactors = new Map();
        this.movers = new Map();
        this.updaters = new Map();
        this.presets = new Map();
        this.drawers = new Map();
        this.pathGenerators = new Map();
    }
    addInteractor(name, initInteractor) {
        this._initializers.interactors.set(name, initInteractor);
    }
    addParticleMover(name, initMover) {
        this._initializers.movers.set(name, initMover);
    }
    addParticleUpdater(name, initUpdater) {
        this._initializers.updaters.set(name, initUpdater);
    }
    addPathGenerator(type, pathGenerator) {
        !this.getPathGenerator(type) && this.pathGenerators.set(type, pathGenerator);
    }
    addPlugin(plugin) {
        !this.getPlugin(plugin.id) && this.plugins.push(plugin);
    }
    addPreset(presetKey, options, override = false) {
        (override || !this.getPreset(presetKey)) && this.presets.set(presetKey, options);
    }
    addShapeDrawer(types, drawer) {
        executeOnSingleOrMultiple(types, (type) => {
            !this.getShapeDrawer(type) && this.drawers.set(type, drawer);
        });
    }
    destroy(container) {
        this.updaters.delete(container);
        this.movers.delete(container);
        this.interactors.delete(container);
    }
    getAvailablePlugins(container) {
        const res = new Map();
        for (const plugin of this.plugins) {
            plugin.needsPlugin(container.actualOptions) && res.set(plugin.id, plugin.getPlugin(container));
        }
        return res;
    }
    getInteractors(container, force = false) {
        return getItemsFromInitializer(container, this.interactors, this._initializers.interactors, force);
    }
    getMovers(container, force = false) {
        return getItemsFromInitializer(container, this.movers, this._initializers.movers, force);
    }
    getPathGenerator(type) {
        return this.pathGenerators.get(type);
    }
    getPlugin(plugin) {
        return this.plugins.find((t) => t.id === plugin);
    }
    getPreset(preset) {
        return this.presets.get(preset);
    }
    getShapeDrawer(type) {
        return this.drawers.get(type);
    }
    getSupportedShapes() {
        return this.drawers.keys();
    }
    getUpdaters(container, force = false) {
        return getItemsFromInitializer(container, this.updaters, this._initializers.updaters, force);
    }
    loadOptions(options, sourceOptions) {
        for (const plugin of this.plugins) {
            plugin.loadOptions(options, sourceOptions);
        }
    }
    loadParticlesOptions(container, options, ...sourceOptions) {
        const updaters = this.updaters.get(container);
        if (!updaters) {
            return;
        }
        for (const updater of updaters) {
            updater.loadOptions && updater.loadOptions(options, ...sourceOptions);
        }
    }
}

async function getDataFromUrl(data) {
    const url = itemFromSingleOrMultiple(data.url, data.index);
    if (!url) {
        return data.fallback;
    }
    const response = await fetch(url);
    if (response.ok) {
        return response.json();
    }
    getLogger().error(`${errorPrefix} ${response.status} while retrieving config file`);
    return data.fallback;
}
function isParamsEmpty(params) {
    return !params.id && !params.element && !params.url && !params.options;
}
function isParams(obj) {
    return !isParamsEmpty(obj);
}
class Engine {
    constructor() {
        this._configs = new Map();
        this._domArray = [];
        this._eventDispatcher = new EventDispatcher();
        this._initialized = false;
        this.plugins = new Plugins(this);
    }
    get configs() {
        const res = {};
        for (const [name, config] of this._configs) {
            res[name] = config;
        }
        return res;
    }
    get version() {
        return "2.12.0";
    }
    addConfig(nameOrConfig, config) {
        if (isString(nameOrConfig)) {
            if (config) {
                config.name = nameOrConfig;
                this._configs.set(nameOrConfig, config);
            }
        }
        else {
            this._configs.set(nameOrConfig.name ?? "default", nameOrConfig);
        }
    }
    addEventListener(type, listener) {
        this._eventDispatcher.addEventListener(type, listener);
    }
    async addInteractor(name, interactorInitializer, refresh = true) {
        this.plugins.addInteractor(name, interactorInitializer);
        await this.refresh(refresh);
    }
    async addMover(name, moverInitializer, refresh = true) {
        this.plugins.addParticleMover(name, moverInitializer);
        await this.refresh(refresh);
    }
    async addParticleUpdater(name, updaterInitializer, refresh = true) {
        this.plugins.addParticleUpdater(name, updaterInitializer);
        await this.refresh(refresh);
    }
    async addPathGenerator(name, generator, refresh = true) {
        this.plugins.addPathGenerator(name, generator);
        await this.refresh(refresh);
    }
    async addPlugin(plugin, refresh = true) {
        this.plugins.addPlugin(plugin);
        await this.refresh(refresh);
    }
    async addPreset(preset, options, override = false, refresh = true) {
        this.plugins.addPreset(preset, options, override);
        await this.refresh(refresh);
    }
    async addShape(shape, drawer, initOrRefresh, afterEffectOrRefresh, destroyOrRefresh, refresh = true) {
        let customDrawer;
        let realRefresh = refresh, realInit, realAfterEffect, realDestroy;
        if (isBoolean(initOrRefresh)) {
            realRefresh = initOrRefresh;
            realInit = undefined;
        }
        else {
            realInit = initOrRefresh;
        }
        if (isBoolean(afterEffectOrRefresh)) {
            realRefresh = afterEffectOrRefresh;
            realAfterEffect = undefined;
        }
        else {
            realAfterEffect = afterEffectOrRefresh;
        }
        if (isBoolean(destroyOrRefresh)) {
            realRefresh = destroyOrRefresh;
            realDestroy = undefined;
        }
        else {
            realDestroy = destroyOrRefresh;
        }
        if (isFunction(drawer)) {
            customDrawer = {
                afterEffect: realAfterEffect,
                destroy: realDestroy,
                draw: drawer,
                init: realInit,
            };
        }
        else {
            customDrawer = drawer;
        }
        this.plugins.addShapeDrawer(shape, customDrawer);
        await this.refresh(realRefresh);
    }
    dispatchEvent(type, args) {
        this._eventDispatcher.dispatchEvent(type, args);
    }
    dom() {
        return this._domArray;
    }
    domItem(index) {
        const dom = this.dom(), item = dom[index];
        if (!item || item.destroyed) {
            dom.splice(index, 1);
            return;
        }
        return item;
    }
    init() {
        if (this._initialized) {
            return;
        }
        this._initialized = true;
    }
    async load(tagIdOrOptionsOrParams, options) {
        return this.loadFromArray(tagIdOrOptionsOrParams, options);
    }
    async loadFromArray(tagIdOrOptionsOrParams, optionsOrIndex, index) {
        let params;
        if (!isParams(tagIdOrOptionsOrParams)) {
            params = {};
            if (isString(tagIdOrOptionsOrParams)) {
                params.id = tagIdOrOptionsOrParams;
            }
            else {
                params.options = tagIdOrOptionsOrParams;
            }
            if (isNumber(optionsOrIndex)) {
                params.index = optionsOrIndex;
            }
            else {
                params.options = optionsOrIndex ?? params.options;
            }
            params.index = index ?? params.index;
        }
        else {
            params = tagIdOrOptionsOrParams;
        }
        return this._loadParams(params);
    }
    async loadJSON(tagId, pathConfigJson, index) {
        let url, id;
        if (isNumber(pathConfigJson) || pathConfigJson === undefined) {
            url = tagId;
        }
        else {
            id = tagId;
            url = pathConfigJson;
        }
        return this._loadParams({ id: id, url, index });
    }
    async refresh(refresh = true) {
        if (!refresh) {
            return;
        }
        this.dom().forEach((t) => t.refresh());
    }
    removeEventListener(type, listener) {
        this._eventDispatcher.removeEventListener(type, listener);
    }
    async set(id, element, options, index) {
        const params = { index };
        if (isString(id)) {
            params.id = id;
        }
        else {
            params.element = id;
        }
        if (element instanceof HTMLElement) {
            params.element = element;
        }
        else {
            params.options = element;
        }
        if (isNumber(options)) {
            params.index = options;
        }
        else {
            params.options = options ?? params.options;
        }
        return this._loadParams(params);
    }
    async setJSON(id, element, pathConfigJson, index) {
        const params = {};
        if (id instanceof HTMLElement) {
            params.element = id;
            params.url = element;
            params.index = pathConfigJson;
        }
        else {
            params.id = id;
            params.element = element;
            params.url = pathConfigJson;
            params.index = index;
        }
        return this._loadParams(params);
    }
    setOnClickHandler(callback) {
        const dom = this.dom();
        if (!dom.length) {
            throw new Error(`${errorPrefix} can only set click handlers after calling tsParticles.load()`);
        }
        for (const domItem of dom) {
            domItem.addClickHandler(callback);
        }
    }
    async _loadParams(params) {
        const id = params.id ?? `tsparticles${Math.floor(getRandom() * 10000)}`, { index, url } = params, options = url ? await getDataFromUrl({ fallback: params.options, url, index }) : params.options;
        let domContainer = params.element ?? document.getElementById(id);
        if (!domContainer) {
            domContainer = document.createElement("div");
            domContainer.id = id;
            document.body.append(domContainer);
        }
        const currentOptions = itemFromSingleOrMultiple(options, index), dom = this.dom(), oldIndex = dom.findIndex((v) => v.id === id);
        if (oldIndex >= 0) {
            const old = this.domItem(oldIndex);
            if (old && !old.destroyed) {
                old.destroy();
                dom.splice(oldIndex, 1);
            }
        }
        let canvasEl;
        if (domContainer.tagName.toLowerCase() === "canvas") {
            canvasEl = domContainer;
            canvasEl.dataset[generatedAttribute] = "false";
        }
        else {
            const existingCanvases = domContainer.getElementsByTagName("canvas");
            if (existingCanvases.length) {
                canvasEl = existingCanvases[0];
                canvasEl.dataset[generatedAttribute] = "false";
            }
            else {
                canvasEl = document.createElement("canvas");
                canvasEl.dataset[generatedAttribute] = "true";
                domContainer.appendChild(canvasEl);
            }
        }
        if (!canvasEl.style.width) {
            canvasEl.style.width = "100%";
        }
        if (!canvasEl.style.height) {
            canvasEl.style.height = "100%";
        }
        const newItem = new Container(this, id, currentOptions);
        if (oldIndex >= 0) {
            dom.splice(oldIndex, 0, newItem);
        }
        else {
            dom.push(newItem);
        }
        newItem.canvas.loadCanvas(canvasEl);
        await newItem.start();
        return newItem;
    }
}

class HslColorManager {
    constructor() {
        this.key = "hsl";
        this.stringPrefix = "hsl";
    }
    handleColor(color) {
        const colorValue = color.value, hslColor = colorValue.hsl ?? color.value;
        if (hslColor.h !== undefined && hslColor.s !== undefined && hslColor.l !== undefined) {
            return hslToRgb(hslColor);
        }
    }
    handleRangeColor(color) {
        const colorValue = color.value, hslColor = colorValue.hsl ?? color.value;
        if (hslColor.h !== undefined && hslColor.l !== undefined) {
            return hslToRgb({
                h: getRangeValue(hslColor.h),
                l: getRangeValue(hslColor.l),
                s: getRangeValue(hslColor.s),
            });
        }
    }
    parseString(input) {
        if (!input.startsWith("hsl")) {
            return;
        }
        const regex = /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.%]+)\s*)?\)/i, result = regex.exec(input);
        return result
            ? hslaToRgba({
                a: result.length > 4 ? parseAlpha(result[5]) : 1,
                h: parseInt(result[1], 10),
                l: parseInt(result[3], 10),
                s: parseInt(result[2], 10),
            })
            : undefined;
    }
}

class RgbColorManager {
    constructor() {
        this.key = "rgb";
        this.stringPrefix = "rgb";
    }
    handleColor(color) {
        const colorValue = color.value, rgbColor = colorValue.rgb ?? color.value;
        if (rgbColor.r !== undefined) {
            return rgbColor;
        }
    }
    handleRangeColor(color) {
        const colorValue = color.value, rgbColor = colorValue.rgb ?? color.value;
        if (rgbColor.r !== undefined) {
            return {
                r: getRangeValue(rgbColor.r),
                g: getRangeValue(rgbColor.g),
                b: getRangeValue(rgbColor.b),
            };
        }
    }
    parseString(input) {
        if (!input.startsWith(this.stringPrefix)) {
            return;
        }
        const regex = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.%]+)\s*)?\)/i, result = regex.exec(input);
        return result
            ? {
                a: result.length > 4 ? parseAlpha(result[5]) : 1,
                b: parseInt(result[3], 10),
                g: parseInt(result[2], 10),
                r: parseInt(result[1], 10),
            }
            : undefined;
    }
}

function init() {
    const rgbColorManager = new RgbColorManager(), hslColorManager = new HslColorManager();
    addColorManager(rgbColorManager);
    addColorManager(hslColorManager);
    const engine = new Engine();
    engine.init();
    return engine;
}

const tsParticles = init();

let e;
const u = defineComponent({
  props: {
    id: {
      type: String,
      required: true
    },
    options: {
      type: Object
    },
    url: {
      type: String
    },
    particlesLoaded: {
      type: Function
    },
    particlesInit: {
      type: Function
    }
  },
  mounted() {
    nextTick(async () => {
      if (!this.id)
        throw new Error("Prop 'id' is required!");
      tsParticles.init(), this.particlesInit && await this.particlesInit(tsParticles), e = await tsParticles.load({
        id: this.id,
        url: this.url,
        options: this.options
      }), this.particlesLoaded && e && this.particlesLoaded(e);
    });
  },
  unmounted() {
    e && (e.destroy(), e = void 0);
  }
}), f = (t, n) => {
  const i = t.__vccOpts || t;
  for (const [r, s] of n)
    i[r] = s;
  return i;
}, m = ["id"];
function h(t, n, i, r, s, _) {
  return openBlock(), createElementBlock("div", { id: t.id }, null, 8, m);
}
const c = /* @__PURE__ */ f(u, [["render", h]]);
const particlesConfig = {
  particles: {
    number: {
      value: 130,
      density: {
        enable: true,
        value_area: 900
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "/img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.2,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.3,
        sync: false
      }
    },
    size: {
      value: 1.8,
      random: true,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.4,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble"
      },
      onclick: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 250,
        size: 0,
        duration: 2,
        opacity: 0,
        speed: 3
      },
      repulse: {
        distance: 400,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};

export { c, particlesConfig as p };
//# sourceMappingURL=particle-config-b5ba4886.mjs.map
