import { toRef, isRef, hasInjectionContext, getCurrentInstance, useSSRContext, createApp, reactive, provide, onErrorCaptured, onServerPrefetch, unref, createVNode, resolveDynamicComponent, inject, shallowRef, shallowReactive, isReadonly, defineAsyncComponent, isShallow, isReactive, toRaw, withCtx, mergeProps, nextTick, defineComponent, computed, ref, h, Suspense, Transition } from 'vue';
import { f as useRuntimeConfig$1, m as withQuery, n as hasProtocol, p as parseURL, o as isScriptProtocol, j as joinURL, i as createError$1, $ as $fetch, q as sanitizeStatusCode, r as createHooks, t as defu } from '../nitro/node-server.mjs';
import { createMemoryHistory, createRouter, START_LOCATION, useRoute as useRoute$1, RouterView } from 'vue-router';
import { ssrRenderSuspense, ssrRenderComponent, ssrRenderVNode } from 'vue/server-renderer';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';

function createContext$1(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als && currentInstance === void 0) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers$1.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers$1.delete(onLeave);
      }
    }
  };
}
function createNamespace$1(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext$1({ ...defaultOpts, ...opts });
      }
      contexts[key];
      return contexts[key];
    }
  };
}
const _globalThis$1 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey$1 = "__unctx__";
const defaultNamespace = _globalThis$1[globalKey$1] || (_globalThis$1[globalKey$1] = createNamespace$1());
const getContext = (key, opts = {}) => defaultNamespace.get(key, opts);
const asyncHandlersKey$1 = "__unctx_async_handlers__";
const asyncHandlers$1 = _globalThis$1[asyncHandlersKey$1] || (_globalThis$1[asyncHandlersKey$1] = /* @__PURE__ */ new Set());

const appConfig = useRuntimeConfig$1().app;
const baseURL = () => appConfig.baseURL;
const nuxtAppCtx = /* @__PURE__ */ getContext("nuxt-app", {
  asyncContext: false
});
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.7.0";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: reactive({
      data: {},
      state: {},
      _errors: {},
      ...{ serverRendered: true }
    }),
    static: {
      data: {}
    },
    runWithContext: (fn) => callWithNuxt(nuxtApp, fn),
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: {},
    _payloadRevivers: {},
    ...options
  };
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    async function contextCaller(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    }
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
      nuxtApp.ssrContext._payloadReducers = {};
      nuxtApp.payload.path = nuxtApp.ssrContext.url;
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin2) {
  if (plugin2.hooks) {
    nuxtApp.hooks.addHooks(plugin2.hooks);
  }
  if (typeof plugin2 === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin2(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  var _a, _b;
  const parallels = [];
  const errors = [];
  for (const plugin2 of plugins2) {
    if (((_a = nuxtApp.ssrContext) == null ? void 0 : _a.islandContext) && ((_b = plugin2.env) == null ? void 0 : _b.islands) === false) {
      continue;
    }
    const promise = applyPlugin(nuxtApp, plugin2);
    if (plugin2.parallel) {
      parallels.push(promise.catch((e) => errors.push(e)));
    } else {
      await promise;
    }
  }
  await Promise.all(parallels);
  if (errors.length) {
    throw errors[0];
  }
}
/*! @__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin2) {
  if (typeof plugin2 === "function") {
    return plugin2;
  }
  delete plugin2.name;
  return Object.assign(plugin2.setup || (() => {
  }), plugin2, { [NuxtPluginIndicator]: true });
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
/*! @__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function useNuxtApp() {
  var _a;
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = (_a = getCurrentInstance()) == null ? void 0 : _a.appContext.app.$nuxt;
  }
  nuxtAppInstance = nuxtAppInstance || nuxtAppCtx.tryUse();
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
/*! @__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig() {
  return (/* @__PURE__ */ useNuxtApp()).$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als && currentInstance === void 0) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      contexts[key];
      return contexts[key];
    }
  };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
_globalThis[globalKey] || (_globalThis[globalKey] = createNamespace());
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set());
function executeAsync(function_) {
  const restores = [];
  for (const leaveHandler of asyncHandlers) {
    const restore2 = leaveHandler();
    if (restore2) {
      restores.push(restore2);
    }
  }
  const restore = () => {
    for (const restore2 of restores) {
      restore2();
    }
  };
  let awaitable = function_();
  if (awaitable && typeof awaitable === "object" && "catch" in awaitable) {
    awaitable = awaitable.catch((error) => {
      restore();
      throw error;
    });
  }
  return [awaitable, restore];
}
const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxt = /* @__PURE__ */ useNuxtApp();
  const state = toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
const LayoutMetaSymbol = Symbol("layout-meta");
const PageRouteSymbol = Symbol("route");
const useRouter = () => {
  var _a;
  return (_a = /* @__PURE__ */ useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, (/* @__PURE__ */ useNuxtApp())._route);
  }
  return (/* @__PURE__ */ useNuxtApp())._route;
};
/*! @__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if ((/* @__PURE__ */ useNuxtApp())._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : withQuery(to.path || "/", to.query || {}) + (to.hash || "");
  if (options == null ? void 0 : options.open) {
    return Promise.resolve();
  }
  const isExternal = (options == null ? void 0 : options.external) || hasProtocol(toPath, { acceptRelative: true });
  if (isExternal) {
    if (!(options == null ? void 0 : options.external)) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const protocol = parseURL(toPath).protocol;
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = /* @__PURE__ */ useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      async function redirect(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(/"/g, "%22");
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode((options == null ? void 0 : options.redirectCode) || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: location2 }
        };
        return response;
      }
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    if (options == null ? void 0 : options.replace) {
      location.replace(toPath);
    } else {
      location.href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
const useError = () => toRef((/* @__PURE__ */ useNuxtApp()).payload, "error");
const showError = (_err) => {
  const err = createError(_err);
  try {
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const error = useError();
    if (false)
      ;
    error.value = error.value || err;
  } catch {
    throw err;
  }
  return err;
};
const isNuxtError = (err) => !!(err && typeof err === "object" && "__nuxt_error" in err);
const createError = (err) => {
  const _err = createError$1(err);
  _err.__nuxt_error = true;
  return _err;
};
const __nuxt_page_meta$Q = {
  layout: "dark"
};
const __nuxt_page_meta$P = {
  layout: "light"
};
const __nuxt_page_meta$O = {
  layout: "dark"
};
const __nuxt_page_meta$N = {
  layout: "light"
};
const __nuxt_page_meta$M = {
  layout: "dark"
};
const __nuxt_page_meta$L = {
  layout: "light"
};
const __nuxt_page_meta$K = {
  layout: "dark"
};
const __nuxt_page_meta$J = {
  layout: "light"
};
const __nuxt_page_meta$I = {
  layout: "dark"
};
const __nuxt_page_meta$H = {
  layout: "light"
};
const __nuxt_page_meta$G = {
  layout: "dark"
};
const __nuxt_page_meta$F = {
  layout: "light"
};
const __nuxt_page_meta$E = {
  layout: "dark"
};
const __nuxt_page_meta$D = {
  layout: "light"
};
const __nuxt_page_meta$C = {
  layout: "dark"
};
const __nuxt_page_meta$B = {
  layout: "light"
};
const __nuxt_page_meta$A = {
  layout: "dark"
};
const __nuxt_page_meta$z = {
  layout: "light"
};
const __nuxt_page_meta$y = {
  layout: "dark"
};
const __nuxt_page_meta$x = {
  layout: "light"
};
const __nuxt_page_meta$w = {
  layout: "dark"
};
const __nuxt_page_meta$v = {
  layout: "light"
};
const __nuxt_page_meta$u = {
  layout: "dark"
};
const __nuxt_page_meta$t = {
  layout: "light"
};
const __nuxt_page_meta$s = {
  layout: "dark"
};
const __nuxt_page_meta$r = {
  layout: "light"
};
const __nuxt_page_meta$q = {
  layout: "arch-dark"
};
const __nuxt_page_meta$p = {
  layout: "arch-light"
};
const __nuxt_page_meta$o = {
  layout: "dark"
};
const __nuxt_page_meta$n = {
  layout: "mobile-app-dark"
};
const __nuxt_page_meta$m = {
  layout: "mobile-app-light"
};
const __nuxt_page_meta$l = {
  layout: "mobile-app-dark"
};
const __nuxt_page_meta$k = {
  layout: "mobile-app-light"
};
const __nuxt_page_meta$j = {
  layout: "mobile-app-dark"
};
const __nuxt_page_meta$i = {
  layout: "mobile-app-light"
};
const __nuxt_page_meta$h = {
  layout: "mobile-app-dark"
};
const __nuxt_page_meta$g = {
  layout: "mobile-app-light"
};
const __nuxt_page_meta$f = {
  layout: "mobile-app-dark"
};
const __nuxt_page_meta$e = {
  layout: "mobile-app-light"
};
const __nuxt_page_meta$d = {
  layout: "dark"
};
const __nuxt_page_meta$c = {
  layout: "light"
};
const __nuxt_page_meta$b = {
  layout: "dark"
};
const __nuxt_page_meta$a = {
  layout: "light"
};
const __nuxt_page_meta$9 = {
  layout: "dark"
};
const __nuxt_page_meta$8 = {
  layout: "light"
};
const __nuxt_page_meta$7 = {
  layout: "dark"
};
const __nuxt_page_meta$6 = {
  layout: "light"
};
const __nuxt_page_meta$5 = {
  layout: "dark"
};
const __nuxt_page_meta$4 = {
  layout: "light"
};
const __nuxt_page_meta$3 = {
  layout: "dark"
};
const __nuxt_page_meta$2 = {
  layout: "light"
};
const __nuxt_page_meta$1 = {
  layout: "dark"
};
const __nuxt_page_meta = {
  layout: "light"
};
const _routes = [
  {
    name: (__nuxt_page_meta$Q == null ? void 0 : __nuxt_page_meta$Q.name) ?? "about-about-dark",
    path: (__nuxt_page_meta$Q == null ? void 0 : __nuxt_page_meta$Q.path) ?? "/about/about-dark",
    meta: __nuxt_page_meta$Q || {},
    alias: (__nuxt_page_meta$Q == null ? void 0 : __nuxt_page_meta$Q.alias) || [],
    redirect: (__nuxt_page_meta$Q == null ? void 0 : __nuxt_page_meta$Q.redirect) || void 0,
    component: () => import('./_nuxt/about-dark-32ca0e44.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$P == null ? void 0 : __nuxt_page_meta$P.name) ?? "about-about-light",
    path: (__nuxt_page_meta$P == null ? void 0 : __nuxt_page_meta$P.path) ?? "/about/about-light",
    meta: __nuxt_page_meta$P || {},
    alias: (__nuxt_page_meta$P == null ? void 0 : __nuxt_page_meta$P.alias) || [],
    redirect: (__nuxt_page_meta$P == null ? void 0 : __nuxt_page_meta$P.redirect) || void 0,
    component: () => import('./_nuxt/about-light-eee0e724.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$O == null ? void 0 : __nuxt_page_meta$O.name) ?? "blog-details-blog-details-dark",
    path: (__nuxt_page_meta$O == null ? void 0 : __nuxt_page_meta$O.path) ?? "/blog-details/blog-details-dark",
    meta: __nuxt_page_meta$O || {},
    alias: (__nuxt_page_meta$O == null ? void 0 : __nuxt_page_meta$O.alias) || [],
    redirect: (__nuxt_page_meta$O == null ? void 0 : __nuxt_page_meta$O.redirect) || void 0,
    component: () => import('./_nuxt/blog-details-dark-5c12677b.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$N == null ? void 0 : __nuxt_page_meta$N.name) ?? "blog-details-blog-details-light",
    path: (__nuxt_page_meta$N == null ? void 0 : __nuxt_page_meta$N.path) ?? "/blog-details/blog-details-light",
    meta: __nuxt_page_meta$N || {},
    alias: (__nuxt_page_meta$N == null ? void 0 : __nuxt_page_meta$N.alias) || [],
    redirect: (__nuxt_page_meta$N == null ? void 0 : __nuxt_page_meta$N.redirect) || void 0,
    component: () => import('./_nuxt/blog-details-light-aafbc6f2.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$M == null ? void 0 : __nuxt_page_meta$M.name) ?? "blog-grid-blog-grid-dark",
    path: (__nuxt_page_meta$M == null ? void 0 : __nuxt_page_meta$M.path) ?? "/blog-grid/blog-grid-dark",
    meta: __nuxt_page_meta$M || {},
    alias: (__nuxt_page_meta$M == null ? void 0 : __nuxt_page_meta$M.alias) || [],
    redirect: (__nuxt_page_meta$M == null ? void 0 : __nuxt_page_meta$M.redirect) || void 0,
    component: () => import('./_nuxt/blog-grid-dark-67e9ba74.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$L == null ? void 0 : __nuxt_page_meta$L.name) ?? "blog-grid-blog-grid-light",
    path: (__nuxt_page_meta$L == null ? void 0 : __nuxt_page_meta$L.path) ?? "/blog-grid/blog-grid-light",
    meta: __nuxt_page_meta$L || {},
    alias: (__nuxt_page_meta$L == null ? void 0 : __nuxt_page_meta$L.alias) || [],
    redirect: (__nuxt_page_meta$L == null ? void 0 : __nuxt_page_meta$L.redirect) || void 0,
    component: () => import('./_nuxt/blog-grid-light-0273afbe.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$K == null ? void 0 : __nuxt_page_meta$K.name) ?? "blog-list-blog-list-dark",
    path: (__nuxt_page_meta$K == null ? void 0 : __nuxt_page_meta$K.path) ?? "/blog-list/blog-list-dark",
    meta: __nuxt_page_meta$K || {},
    alias: (__nuxt_page_meta$K == null ? void 0 : __nuxt_page_meta$K.alias) || [],
    redirect: (__nuxt_page_meta$K == null ? void 0 : __nuxt_page_meta$K.redirect) || void 0,
    component: () => import('./_nuxt/blog-list-dark-5ca740df.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$J == null ? void 0 : __nuxt_page_meta$J.name) ?? "blog-list-blog-list-light",
    path: (__nuxt_page_meta$J == null ? void 0 : __nuxt_page_meta$J.path) ?? "/blog-list/blog-list-light",
    meta: __nuxt_page_meta$J || {},
    alias: (__nuxt_page_meta$J == null ? void 0 : __nuxt_page_meta$J.alias) || [],
    redirect: (__nuxt_page_meta$J == null ? void 0 : __nuxt_page_meta$J.redirect) || void 0,
    component: () => import('./_nuxt/blog-list-light-bc805a1d.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$I == null ? void 0 : __nuxt_page_meta$I.name) ?? "blog-blog-dark",
    path: (__nuxt_page_meta$I == null ? void 0 : __nuxt_page_meta$I.path) ?? "/blog/blog-dark",
    meta: __nuxt_page_meta$I || {},
    alias: (__nuxt_page_meta$I == null ? void 0 : __nuxt_page_meta$I.alias) || [],
    redirect: (__nuxt_page_meta$I == null ? void 0 : __nuxt_page_meta$I.redirect) || void 0,
    component: () => import('./_nuxt/blog-dark-6df33e4f.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$H == null ? void 0 : __nuxt_page_meta$H.name) ?? "blog-blog-light",
    path: (__nuxt_page_meta$H == null ? void 0 : __nuxt_page_meta$H.path) ?? "/blog/blog-light",
    meta: __nuxt_page_meta$H || {},
    alias: (__nuxt_page_meta$H == null ? void 0 : __nuxt_page_meta$H.alias) || [],
    redirect: (__nuxt_page_meta$H == null ? void 0 : __nuxt_page_meta$H.redirect) || void 0,
    component: () => import('./_nuxt/blog-light-6fe5ebc5.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$G == null ? void 0 : __nuxt_page_meta$G.name) ?? "contact-contact-dark",
    path: (__nuxt_page_meta$G == null ? void 0 : __nuxt_page_meta$G.path) ?? "/contact/contact-dark",
    meta: __nuxt_page_meta$G || {},
    alias: (__nuxt_page_meta$G == null ? void 0 : __nuxt_page_meta$G.alias) || [],
    redirect: (__nuxt_page_meta$G == null ? void 0 : __nuxt_page_meta$G.redirect) || void 0,
    component: () => import('./_nuxt/contact-dark-ece6082c.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$F == null ? void 0 : __nuxt_page_meta$F.name) ?? "contact-contact-light",
    path: (__nuxt_page_meta$F == null ? void 0 : __nuxt_page_meta$F.path) ?? "/contact/contact-light",
    meta: __nuxt_page_meta$F || {},
    alias: (__nuxt_page_meta$F == null ? void 0 : __nuxt_page_meta$F.alias) || [],
    redirect: (__nuxt_page_meta$F == null ? void 0 : __nuxt_page_meta$F.redirect) || void 0,
    component: () => import('./_nuxt/contact-light-9f73024f.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$E == null ? void 0 : __nuxt_page_meta$E.name) ?? "homepage-home1-dark",
    path: (__nuxt_page_meta$E == null ? void 0 : __nuxt_page_meta$E.path) ?? "/homepage/home1-dark",
    meta: __nuxt_page_meta$E || {},
    alias: (__nuxt_page_meta$E == null ? void 0 : __nuxt_page_meta$E.alias) || [],
    redirect: (__nuxt_page_meta$E == null ? void 0 : __nuxt_page_meta$E.redirect) || void 0,
    component: () => import('./_nuxt/home1-dark-8d4a8f9f.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$D == null ? void 0 : __nuxt_page_meta$D.name) ?? "homepage-home1-light",
    path: (__nuxt_page_meta$D == null ? void 0 : __nuxt_page_meta$D.path) ?? "/homepage/home1-light",
    meta: __nuxt_page_meta$D || {},
    alias: (__nuxt_page_meta$D == null ? void 0 : __nuxt_page_meta$D.alias) || [],
    redirect: (__nuxt_page_meta$D == null ? void 0 : __nuxt_page_meta$D.redirect) || void 0,
    component: () => import('./_nuxt/home1-light-6b2f7dac.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$C == null ? void 0 : __nuxt_page_meta$C.name) ?? "homepage-home2-dark",
    path: (__nuxt_page_meta$C == null ? void 0 : __nuxt_page_meta$C.path) ?? "/homepage/home2-dark",
    meta: __nuxt_page_meta$C || {},
    alias: (__nuxt_page_meta$C == null ? void 0 : __nuxt_page_meta$C.alias) || [],
    redirect: (__nuxt_page_meta$C == null ? void 0 : __nuxt_page_meta$C.redirect) || void 0,
    component: () => import('./_nuxt/home2-dark-47b8872d.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$B == null ? void 0 : __nuxt_page_meta$B.name) ?? "homepage-home2-light",
    path: (__nuxt_page_meta$B == null ? void 0 : __nuxt_page_meta$B.path) ?? "/homepage/home2-light",
    meta: __nuxt_page_meta$B || {},
    alias: (__nuxt_page_meta$B == null ? void 0 : __nuxt_page_meta$B.alias) || [],
    redirect: (__nuxt_page_meta$B == null ? void 0 : __nuxt_page_meta$B.redirect) || void 0,
    component: () => import('./_nuxt/home2-light-85d5dca9.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$A == null ? void 0 : __nuxt_page_meta$A.name) ?? "homepage-home3-dark",
    path: (__nuxt_page_meta$A == null ? void 0 : __nuxt_page_meta$A.path) ?? "/homepage/home3-dark",
    meta: __nuxt_page_meta$A || {},
    alias: (__nuxt_page_meta$A == null ? void 0 : __nuxt_page_meta$A.alias) || [],
    redirect: (__nuxt_page_meta$A == null ? void 0 : __nuxt_page_meta$A.redirect) || void 0,
    component: () => import('./_nuxt/home3-dark-f5cdf2ce.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$z == null ? void 0 : __nuxt_page_meta$z.name) ?? "homepage-home3-light",
    path: (__nuxt_page_meta$z == null ? void 0 : __nuxt_page_meta$z.path) ?? "/homepage/home3-light",
    meta: __nuxt_page_meta$z || {},
    alias: (__nuxt_page_meta$z == null ? void 0 : __nuxt_page_meta$z.alias) || [],
    redirect: (__nuxt_page_meta$z == null ? void 0 : __nuxt_page_meta$z.redirect) || void 0,
    component: () => import('./_nuxt/home3-light-cf6ebb8a.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$y == null ? void 0 : __nuxt_page_meta$y.name) ?? "homepage-home4-dark",
    path: (__nuxt_page_meta$y == null ? void 0 : __nuxt_page_meta$y.path) ?? "/homepage/home4-dark",
    meta: __nuxt_page_meta$y || {},
    alias: (__nuxt_page_meta$y == null ? void 0 : __nuxt_page_meta$y.alias) || [],
    redirect: (__nuxt_page_meta$y == null ? void 0 : __nuxt_page_meta$y.redirect) || void 0,
    component: () => import('./_nuxt/home4-dark-f07ed9a8.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$x == null ? void 0 : __nuxt_page_meta$x.name) ?? "homepage-home4-light",
    path: (__nuxt_page_meta$x == null ? void 0 : __nuxt_page_meta$x.path) ?? "/homepage/home4-light",
    meta: __nuxt_page_meta$x || {},
    alias: (__nuxt_page_meta$x == null ? void 0 : __nuxt_page_meta$x.alias) || [],
    redirect: (__nuxt_page_meta$x == null ? void 0 : __nuxt_page_meta$x.redirect) || void 0,
    component: () => import('./_nuxt/home4-light-c96611c4.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$w == null ? void 0 : __nuxt_page_meta$w.name) ?? "homepage-home5-dark",
    path: (__nuxt_page_meta$w == null ? void 0 : __nuxt_page_meta$w.path) ?? "/homepage/home5-dark",
    meta: __nuxt_page_meta$w || {},
    alias: (__nuxt_page_meta$w == null ? void 0 : __nuxt_page_meta$w.alias) || [],
    redirect: (__nuxt_page_meta$w == null ? void 0 : __nuxt_page_meta$w.redirect) || void 0,
    component: () => import('./_nuxt/home5-dark-c585b627.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$v == null ? void 0 : __nuxt_page_meta$v.name) ?? "homepage-home5-light",
    path: (__nuxt_page_meta$v == null ? void 0 : __nuxt_page_meta$v.path) ?? "/homepage/home5-light",
    meta: __nuxt_page_meta$v || {},
    alias: (__nuxt_page_meta$v == null ? void 0 : __nuxt_page_meta$v.alias) || [],
    redirect: (__nuxt_page_meta$v == null ? void 0 : __nuxt_page_meta$v.redirect) || void 0,
    component: () => import('./_nuxt/home5-light-af1fa010.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$u == null ? void 0 : __nuxt_page_meta$u.name) ?? "homepage-home6-dark",
    path: (__nuxt_page_meta$u == null ? void 0 : __nuxt_page_meta$u.path) ?? "/homepage/home6-dark",
    meta: __nuxt_page_meta$u || {},
    alias: (__nuxt_page_meta$u == null ? void 0 : __nuxt_page_meta$u.alias) || [],
    redirect: (__nuxt_page_meta$u == null ? void 0 : __nuxt_page_meta$u.redirect) || void 0,
    component: () => import('./_nuxt/home6-dark-3d3c24c2.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$t == null ? void 0 : __nuxt_page_meta$t.name) ?? "homepage-home6-light",
    path: (__nuxt_page_meta$t == null ? void 0 : __nuxt_page_meta$t.path) ?? "/homepage/home6-light",
    meta: __nuxt_page_meta$t || {},
    alias: (__nuxt_page_meta$t == null ? void 0 : __nuxt_page_meta$t.alias) || [],
    redirect: (__nuxt_page_meta$t == null ? void 0 : __nuxt_page_meta$t.redirect) || void 0,
    component: () => import('./_nuxt/home6-light-0eb9b4df.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$s == null ? void 0 : __nuxt_page_meta$s.name) ?? "homepage-home7-dark",
    path: (__nuxt_page_meta$s == null ? void 0 : __nuxt_page_meta$s.path) ?? "/homepage/home7-dark",
    meta: __nuxt_page_meta$s || {},
    alias: (__nuxt_page_meta$s == null ? void 0 : __nuxt_page_meta$s.alias) || [],
    redirect: (__nuxt_page_meta$s == null ? void 0 : __nuxt_page_meta$s.redirect) || void 0,
    component: () => import('./_nuxt/home7-dark-c66505ce.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$r == null ? void 0 : __nuxt_page_meta$r.name) ?? "homepage-home7-light",
    path: (__nuxt_page_meta$r == null ? void 0 : __nuxt_page_meta$r.path) ?? "/homepage/home7-light",
    meta: __nuxt_page_meta$r || {},
    alias: (__nuxt_page_meta$r == null ? void 0 : __nuxt_page_meta$r.alias) || [],
    redirect: (__nuxt_page_meta$r == null ? void 0 : __nuxt_page_meta$r.redirect) || void 0,
    component: () => import('./_nuxt/home7-light-579e6f2d.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$q == null ? void 0 : __nuxt_page_meta$q.name) ?? "homepage-home8-dark",
    path: (__nuxt_page_meta$q == null ? void 0 : __nuxt_page_meta$q.path) ?? "/homepage/home8-dark",
    meta: __nuxt_page_meta$q || {},
    alias: (__nuxt_page_meta$q == null ? void 0 : __nuxt_page_meta$q.alias) || [],
    redirect: (__nuxt_page_meta$q == null ? void 0 : __nuxt_page_meta$q.redirect) || void 0,
    component: () => import('./_nuxt/home8-dark-401aac51.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$p == null ? void 0 : __nuxt_page_meta$p.name) ?? "homepage-home8-light",
    path: (__nuxt_page_meta$p == null ? void 0 : __nuxt_page_meta$p.path) ?? "/homepage/home8-light",
    meta: __nuxt_page_meta$p || {},
    alias: (__nuxt_page_meta$p == null ? void 0 : __nuxt_page_meta$p.alias) || [],
    redirect: (__nuxt_page_meta$p == null ? void 0 : __nuxt_page_meta$p.redirect) || void 0,
    component: () => import('./_nuxt/home8-light-0dc22887.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$o == null ? void 0 : __nuxt_page_meta$o.name) ?? "index",
    path: (__nuxt_page_meta$o == null ? void 0 : __nuxt_page_meta$o.path) ?? "/",
    meta: __nuxt_page_meta$o || {},
    alias: (__nuxt_page_meta$o == null ? void 0 : __nuxt_page_meta$o.alias) || [],
    redirect: (__nuxt_page_meta$o == null ? void 0 : __nuxt_page_meta$o.redirect) || void 0,
    component: () => import('./_nuxt/index-f67c900d.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$n == null ? void 0 : __nuxt_page_meta$n.name) ?? "mobile-app-mobile-app-dark",
    path: (__nuxt_page_meta$n == null ? void 0 : __nuxt_page_meta$n.path) ?? "/mobile-app/mobile-app-dark",
    meta: __nuxt_page_meta$n || {},
    alias: (__nuxt_page_meta$n == null ? void 0 : __nuxt_page_meta$n.alias) || [],
    redirect: (__nuxt_page_meta$n == null ? void 0 : __nuxt_page_meta$n.redirect) || void 0,
    component: () => import('./_nuxt/mobile-app-dark-ee6de314.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$m == null ? void 0 : __nuxt_page_meta$m.name) ?? "mobile-app-mobile-app-light",
    path: (__nuxt_page_meta$m == null ? void 0 : __nuxt_page_meta$m.path) ?? "/mobile-app/mobile-app-light",
    meta: __nuxt_page_meta$m || {},
    alias: (__nuxt_page_meta$m == null ? void 0 : __nuxt_page_meta$m.alias) || [],
    redirect: (__nuxt_page_meta$m == null ? void 0 : __nuxt_page_meta$m.redirect) || void 0,
    component: () => import('./_nuxt/mobile-app-light-88ba1f89.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$l == null ? void 0 : __nuxt_page_meta$l.name) ?? "mobile-app-portfolio-dark",
    path: (__nuxt_page_meta$l == null ? void 0 : __nuxt_page_meta$l.path) ?? "/mobile-app/portfolio-dark",
    meta: __nuxt_page_meta$l || {},
    alias: (__nuxt_page_meta$l == null ? void 0 : __nuxt_page_meta$l.alias) || [],
    redirect: (__nuxt_page_meta$l == null ? void 0 : __nuxt_page_meta$l.redirect) || void 0,
    component: () => import('./_nuxt/portfolio-dark-10018323.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$k == null ? void 0 : __nuxt_page_meta$k.name) ?? "mobile-app-portfolio-light",
    path: (__nuxt_page_meta$k == null ? void 0 : __nuxt_page_meta$k.path) ?? "/mobile-app/portfolio-light",
    meta: __nuxt_page_meta$k || {},
    alias: (__nuxt_page_meta$k == null ? void 0 : __nuxt_page_meta$k.alias) || [],
    redirect: (__nuxt_page_meta$k == null ? void 0 : __nuxt_page_meta$k.redirect) || void 0,
    component: () => import('./_nuxt/portfolio-light-1d96bd12.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$j == null ? void 0 : __nuxt_page_meta$j.name) ?? "mobile-app-pricing-plan-dark",
    path: (__nuxt_page_meta$j == null ? void 0 : __nuxt_page_meta$j.path) ?? "/mobile-app/pricing-plan-dark",
    meta: __nuxt_page_meta$j || {},
    alias: (__nuxt_page_meta$j == null ? void 0 : __nuxt_page_meta$j.alias) || [],
    redirect: (__nuxt_page_meta$j == null ? void 0 : __nuxt_page_meta$j.redirect) || void 0,
    component: () => import('./_nuxt/pricing-plan-dark-45cf76a2.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$i == null ? void 0 : __nuxt_page_meta$i.name) ?? "mobile-app-pricing-plan-light",
    path: (__nuxt_page_meta$i == null ? void 0 : __nuxt_page_meta$i.path) ?? "/mobile-app/pricing-plan-light",
    meta: __nuxt_page_meta$i || {},
    alias: (__nuxt_page_meta$i == null ? void 0 : __nuxt_page_meta$i.alias) || [],
    redirect: (__nuxt_page_meta$i == null ? void 0 : __nuxt_page_meta$i.redirect) || void 0,
    component: () => import('./_nuxt/pricing-plan-light-a76d93f6.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$h == null ? void 0 : __nuxt_page_meta$h.name) ?? "mobile-app-services-dark",
    path: (__nuxt_page_meta$h == null ? void 0 : __nuxt_page_meta$h.path) ?? "/mobile-app/services-dark",
    meta: __nuxt_page_meta$h || {},
    alias: (__nuxt_page_meta$h == null ? void 0 : __nuxt_page_meta$h.alias) || [],
    redirect: (__nuxt_page_meta$h == null ? void 0 : __nuxt_page_meta$h.redirect) || void 0,
    component: () => import('./_nuxt/services-dark-6907a852.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$g == null ? void 0 : __nuxt_page_meta$g.name) ?? "mobile-app-services-light",
    path: (__nuxt_page_meta$g == null ? void 0 : __nuxt_page_meta$g.path) ?? "/mobile-app/services-light",
    meta: __nuxt_page_meta$g || {},
    alias: (__nuxt_page_meta$g == null ? void 0 : __nuxt_page_meta$g.alias) || [],
    redirect: (__nuxt_page_meta$g == null ? void 0 : __nuxt_page_meta$g.redirect) || void 0,
    component: () => import('./_nuxt/services-light-c166f544.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$f == null ? void 0 : __nuxt_page_meta$f.name) ?? "mobile-app-shop-dark",
    path: (__nuxt_page_meta$f == null ? void 0 : __nuxt_page_meta$f.path) ?? "/mobile-app/shop-dark",
    meta: __nuxt_page_meta$f || {},
    alias: (__nuxt_page_meta$f == null ? void 0 : __nuxt_page_meta$f.alias) || [],
    redirect: (__nuxt_page_meta$f == null ? void 0 : __nuxt_page_meta$f.redirect) || void 0,
    component: () => import('./_nuxt/shop-dark-99ae40a4.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$e == null ? void 0 : __nuxt_page_meta$e.name) ?? "mobile-app-shop-light",
    path: (__nuxt_page_meta$e == null ? void 0 : __nuxt_page_meta$e.path) ?? "/mobile-app/shop-light",
    meta: __nuxt_page_meta$e || {},
    alias: (__nuxt_page_meta$e == null ? void 0 : __nuxt_page_meta$e.alias) || [],
    redirect: (__nuxt_page_meta$e == null ? void 0 : __nuxt_page_meta$e.redirect) || void 0,
    component: () => import('./_nuxt/shop-light-0efc7314.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$d == null ? void 0 : __nuxt_page_meta$d.name) ?? "project-details2-project-details2-dark",
    path: (__nuxt_page_meta$d == null ? void 0 : __nuxt_page_meta$d.path) ?? "/project-details2/project-details2-dark",
    meta: __nuxt_page_meta$d || {},
    alias: (__nuxt_page_meta$d == null ? void 0 : __nuxt_page_meta$d.alias) || [],
    redirect: (__nuxt_page_meta$d == null ? void 0 : __nuxt_page_meta$d.redirect) || void 0,
    component: () => import('./_nuxt/project-details2-dark-52446041.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$c == null ? void 0 : __nuxt_page_meta$c.name) ?? "project-details2-project-details2-light",
    path: (__nuxt_page_meta$c == null ? void 0 : __nuxt_page_meta$c.path) ?? "/project-details2/project-details2-light",
    meta: __nuxt_page_meta$c || {},
    alias: (__nuxt_page_meta$c == null ? void 0 : __nuxt_page_meta$c.alias) || [],
    redirect: (__nuxt_page_meta$c == null ? void 0 : __nuxt_page_meta$c.redirect) || void 0,
    component: () => import('./_nuxt/project-details2-light-b465e7a9.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$b == null ? void 0 : __nuxt_page_meta$b.name) ?? "showcase-showcase-dark",
    path: (__nuxt_page_meta$b == null ? void 0 : __nuxt_page_meta$b.path) ?? "/showcase/showcase-dark",
    meta: __nuxt_page_meta$b || {},
    alias: (__nuxt_page_meta$b == null ? void 0 : __nuxt_page_meta$b.alias) || [],
    redirect: (__nuxt_page_meta$b == null ? void 0 : __nuxt_page_meta$b.redirect) || void 0,
    component: () => import('./_nuxt/showcase-dark-65eb0d1d.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$a == null ? void 0 : __nuxt_page_meta$a.name) ?? "showcase-showcase-light",
    path: (__nuxt_page_meta$a == null ? void 0 : __nuxt_page_meta$a.path) ?? "/showcase/showcase-light",
    meta: __nuxt_page_meta$a || {},
    alias: (__nuxt_page_meta$a == null ? void 0 : __nuxt_page_meta$a.alias) || [],
    redirect: (__nuxt_page_meta$a == null ? void 0 : __nuxt_page_meta$a.redirect) || void 0,
    component: () => import('./_nuxt/showcase-light-b8f4f48d.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$9 == null ? void 0 : __nuxt_page_meta$9.name) ?? "showcase2-showcase2-dark",
    path: (__nuxt_page_meta$9 == null ? void 0 : __nuxt_page_meta$9.path) ?? "/showcase2/showcase2-dark",
    meta: __nuxt_page_meta$9 || {},
    alias: (__nuxt_page_meta$9 == null ? void 0 : __nuxt_page_meta$9.alias) || [],
    redirect: (__nuxt_page_meta$9 == null ? void 0 : __nuxt_page_meta$9.redirect) || void 0,
    component: () => import('./_nuxt/showcase2-dark-872cc099.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$8 == null ? void 0 : __nuxt_page_meta$8.name) ?? "showcase2-showcase2-light",
    path: (__nuxt_page_meta$8 == null ? void 0 : __nuxt_page_meta$8.path) ?? "/showcase2/showcase2-light",
    meta: __nuxt_page_meta$8 || {},
    alias: (__nuxt_page_meta$8 == null ? void 0 : __nuxt_page_meta$8.alias) || [],
    redirect: (__nuxt_page_meta$8 == null ? void 0 : __nuxt_page_meta$8.redirect) || void 0,
    component: () => import('./_nuxt/showcase2-light-aa00cca1.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$7 == null ? void 0 : __nuxt_page_meta$7.name) ?? "showcase3-showcase3-dark",
    path: (__nuxt_page_meta$7 == null ? void 0 : __nuxt_page_meta$7.path) ?? "/showcase3/showcase3-dark",
    meta: __nuxt_page_meta$7 || {},
    alias: (__nuxt_page_meta$7 == null ? void 0 : __nuxt_page_meta$7.alias) || [],
    redirect: (__nuxt_page_meta$7 == null ? void 0 : __nuxt_page_meta$7.redirect) || void 0,
    component: () => import('./_nuxt/showcase3-dark-fe38a2d8.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$6 == null ? void 0 : __nuxt_page_meta$6.name) ?? "showcase3-showcase3-light",
    path: (__nuxt_page_meta$6 == null ? void 0 : __nuxt_page_meta$6.path) ?? "/showcase3/showcase3-light",
    meta: __nuxt_page_meta$6 || {},
    alias: (__nuxt_page_meta$6 == null ? void 0 : __nuxt_page_meta$6.alias) || [],
    redirect: (__nuxt_page_meta$6 == null ? void 0 : __nuxt_page_meta$6.redirect) || void 0,
    component: () => import('./_nuxt/showcase3-light-06ce5b6e.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$5 == null ? void 0 : __nuxt_page_meta$5.name) ?? "works-works-dark",
    path: (__nuxt_page_meta$5 == null ? void 0 : __nuxt_page_meta$5.path) ?? "/works/works-dark",
    meta: __nuxt_page_meta$5 || {},
    alias: (__nuxt_page_meta$5 == null ? void 0 : __nuxt_page_meta$5.alias) || [],
    redirect: (__nuxt_page_meta$5 == null ? void 0 : __nuxt_page_meta$5.redirect) || void 0,
    component: () => import('./_nuxt/works-dark-606ac20b.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$4 == null ? void 0 : __nuxt_page_meta$4.name) ?? "works-works-light",
    path: (__nuxt_page_meta$4 == null ? void 0 : __nuxt_page_meta$4.path) ?? "/works/works-light",
    meta: __nuxt_page_meta$4 || {},
    alias: (__nuxt_page_meta$4 == null ? void 0 : __nuxt_page_meta$4.alias) || [],
    redirect: (__nuxt_page_meta$4 == null ? void 0 : __nuxt_page_meta$4.redirect) || void 0,
    component: () => import('./_nuxt/works-light-6df4797b.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$3 == null ? void 0 : __nuxt_page_meta$3.name) ?? "works2-works2-dark",
    path: (__nuxt_page_meta$3 == null ? void 0 : __nuxt_page_meta$3.path) ?? "/works2/works2-dark",
    meta: __nuxt_page_meta$3 || {},
    alias: (__nuxt_page_meta$3 == null ? void 0 : __nuxt_page_meta$3.alias) || [],
    redirect: (__nuxt_page_meta$3 == null ? void 0 : __nuxt_page_meta$3.redirect) || void 0,
    component: () => import('./_nuxt/works2-dark-e139747b.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$2 == null ? void 0 : __nuxt_page_meta$2.name) ?? "works2-works2-light",
    path: (__nuxt_page_meta$2 == null ? void 0 : __nuxt_page_meta$2.path) ?? "/works2/works2-light",
    meta: __nuxt_page_meta$2 || {},
    alias: (__nuxt_page_meta$2 == null ? void 0 : __nuxt_page_meta$2.alias) || [],
    redirect: (__nuxt_page_meta$2 == null ? void 0 : __nuxt_page_meta$2.redirect) || void 0,
    component: () => import('./_nuxt/works2-light-7286f512.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.name) ?? "works3-works3-dark",
    path: (__nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.path) ?? "/works3/works3-dark",
    meta: __nuxt_page_meta$1 || {},
    alias: (__nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.alias) || [],
    redirect: (__nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.redirect) || void 0,
    component: () => import('./_nuxt/works3-dark-b77c8e7e.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta == null ? void 0 : __nuxt_page_meta.name) ?? "works3-works3-light",
    path: (__nuxt_page_meta == null ? void 0 : __nuxt_page_meta.path) ?? "/works3/works3-light",
    meta: __nuxt_page_meta || {},
    alias: (__nuxt_page_meta == null ? void 0 : __nuxt_page_meta.alias) || [],
    redirect: (__nuxt_page_meta == null ? void 0 : __nuxt_page_meta.redirect) || void 0,
    component: () => import('./_nuxt/works3-light-7fdcc6fb.mjs').then((m) => m.default || m)
  }
];
const appLayoutTransition = false;
const appPageTransition = false;
const appKeepalive = false;
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    var _a;
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const behavior = ((_a = useRouter().options) == null ? void 0 : _a.scrollBehaviorType) ?? "auto";
    let position = savedPosition || void 0;
    const routeAllowsScrollToTop = typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop;
    if (!position && from && to && routeAllowsScrollToTop !== false && _isDifferentRoute(from, to)) {
      position = { left: 0, top: 0 };
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
      }
    }
    const hasTransition = (route) => !!(route.meta.pageTransition ?? appPageTransition);
    const hookToWait = hasTransition(from) && hasTransition(to) ? "page:transition:finish" : "page:finish";
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await nextTick();
        if (to.hash) {
          position = { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
        }
        resolve(position);
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = document.querySelector(selector);
    if (elem) {
      return parseFloat(getComputedStyle(elem).scrollMarginTop);
    }
  } catch {
  }
  return 0;
}
function _isDifferentRoute(from, to) {
  const samePageComponent = to.matched.every((comp, index) => {
    var _a, _b, _c;
    return ((_a = comp.components) == null ? void 0 : _a.default) === ((_c = (_b = from.matched[index]) == null ? void 0 : _b.components) == null ? void 0 : _c.default);
  });
  if (!samePageComponent) {
    return true;
  }
  if (samePageComponent && JSON.stringify(from.params) !== JSON.stringify(to.params)) {
    return true;
  }
  return false;
}
const configRouterOptions = {};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  var _a;
  let __temp, __restore;
  if (!((_a = to.meta) == null ? void 0 : _a.validate)) {
    return;
  }
  useRouter();
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  {
    return result;
  }
});
const globalMiddleware = [
  validate
];
const namedMiddleware = {};
const plugin = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a, _b;
    let __temp, __restore;
    let routerBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    if (routerOptions.hashMode && !routerBase.includes("#")) {
      routerBase += "#";
    }
    const history = ((_a = routerOptions.history) == null ? void 0 : _a.call(routerOptions, routerBase)) ?? createMemoryHistory(routerBase);
    const routes = ((_b = routerOptions.routes) == null ? void 0 : _b.call(routerOptions, _routes)) ?? _routes;
    let startPosition;
    const initialURL = nuxtApp.ssrContext.url;
    const router = createRouter({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        var _a2;
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        router.options.scrollBehavior = routerOptions.scrollBehavior;
        return (_a2 = routerOptions.scrollBehavior) == null ? void 0 : _a2.call(routerOptions, to, START_LOCATION, startPosition || savedPosition);
      },
      history,
      routes
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const _route = shallowRef(router.resolve(initialURL));
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to, from) => {
      var _a2, _b2, _c, _d;
      if (((_b2 = (_a2 = to.matched[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default) === ((_d = (_c = from.matched[0]) == null ? void 0 : _c.components) == null ? void 0 : _d.default)) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key]
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware = nuxtApp._middleware || {
      global: [],
      named: {}
    };
    useError();
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
    }
    const initialLayout = useState("_layout");
    router.beforeEach(async (to, from) => {
      var _a2, _b2;
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout.value && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout.value;
      }
      nuxtApp._processingMiddleware = true;
      if (!((_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.islandContext)) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          if (Array.isArray(componentMiddleware)) {
            for (const entry2 of componentMiddleware) {
              middlewareEntries.add(entry2);
            }
          } else {
            middlewareEntries.add(componentMiddleware);
          }
        }
        for (const entry2 of middlewareEntries) {
          const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_b2 = namedMiddleware[entry2]) == null ? void 0 : _b2.call(namedMiddleware).then((r) => r.default || r)) : entry2;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry2}'.`);
          }
          const result = await nuxtApp.runWithContext(() => middleware(to, from));
          {
            if (result === false || result instanceof Error) {
              const error2 = result || createError$1({
                statusCode: 404,
                statusMessage: `Page Not Found: ${initialURL}`
              });
              await nuxtApp.runWithContext(() => showError(error2));
              return false;
            }
          }
          if (result || result === false) {
            return result;
          }
        }
      }
    });
    router.onError(() => {
      delete nuxtApp._processingMiddleware;
    });
    router.afterEach(async (to, _from, failure) => {
      var _a2;
      delete nuxtApp._processingMiddleware;
      if ((failure == null ? void 0 : failure.type) === 4) {
        return;
      }
      if (to.matched.length === 0 && !((_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.islandContext)) {
        await nuxtApp.runWithContext(() => showError(createError$1({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${to.fullPath}`
        })));
      } else if (to.redirectedFrom && to.fullPath !== initialURL) {
        await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        await router.replace({
          ...router.resolve(initialURL),
          name: void 0,
          // #4920, #4982
          force: true
        });
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});
function definePayloadReducer(name, reduce) {
  {
    (/* @__PURE__ */ useNuxtApp()).ssrContext._payloadReducers[name] = reduce;
  }
}
const reducers = {
  NuxtError: (data) => isNuxtError(data) && data.toJSON(),
  EmptyShallowRef: (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  EmptyRef: (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  ShallowRef: (data) => isRef(data) && isShallow(data) && data.value,
  ShallowReactive: (data) => isReactive(data) && isShallow(data) && toRaw(data),
  Ref: (data) => isRef(data) && data.value,
  Reactive: (data) => isReactive(data) && toRaw(data)
};
const revive_payload_server_eJ33V7gbc6 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const reducer in reducers) {
      definePayloadReducer(reducer, reducers[reducer]);
    }
  }
});
const components_plugin_KR1HBZs4kY = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components"
});
const unhead_KgADcZ0jPj = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    nuxtApp.vueApp.use(head);
  }
});
const plugins = [
  plugin,
  revive_payload_server_eJ33V7gbc6,
  components_plugin_KR1HBZs4kY,
  unhead_KgADcZ0jPj
];
const _wrapIf = (component, props, slots) => {
  props = props === true ? {} : props;
  return { default: () => {
    var _a;
    return props ? h(component, props, slots) : (_a = slots.default) == null ? void 0 : _a.call(slots);
  } };
};
const layouts = {
  "arch-dark": () => import('./_nuxt/arch-dark-25e4ec42.mjs').then((m) => m.default || m),
  "arch-light": () => import('./_nuxt/arch-light-18d5e528.mjs').then((m) => m.default || m),
  dark: () => import('./_nuxt/dark-f634e1ef.mjs').then((m) => m.default || m),
  light: () => import('./_nuxt/light-f5a76029.mjs').then((m) => m.default || m),
  "mobile-app-dark": () => import('./_nuxt/mobile-app-dark-d2522b06.mjs').then((m) => m.default || m),
  "mobile-app-light": () => import('./_nuxt/mobile-app-light-b4f8e0c9.mjs').then((m) => m.default || m)
};
const LayoutLoader = /* @__PURE__ */ defineComponent({
  name: "LayoutLoader",
  inheritAttrs: false,
  props: {
    name: String,
    layoutProps: Object
  },
  async setup(props, context) {
    const LayoutComponent = await layouts[props.name]().then((r) => r.default || r);
    return () => h(LayoutComponent, props.layoutProps, context.slots);
  }
});
const __nuxt_component_0 = /* @__PURE__ */ defineComponent({
  name: "NuxtLayout",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    }
  },
  setup(props, context) {
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const injectedRoute = inject(PageRouteSymbol);
    const route = injectedRoute === useRoute() ? useRoute$1() : injectedRoute;
    const layout = computed(() => unref(props.name) ?? route.meta.layout ?? "default");
    const layoutRef = ref();
    context.expose({ layoutRef });
    const done = nuxtApp.deferHydration();
    return () => {
      const hasLayout = layout.value && layout.value in layouts;
      const transitionProps = route.meta.layoutTransition ?? appLayoutTransition;
      return _wrapIf(Transition, hasLayout && transitionProps, {
        default: () => h(Suspense, { suspensible: true, onResolve: () => {
          nextTick(done);
        } }, {
          default: () => h(
            // @ts-expect-error seems to be an issue in vue types
            LayoutProvider,
            {
              layoutProps: mergeProps(context.attrs, { ref: layoutRef }),
              key: layout.value,
              name: layout.value,
              shouldProvide: !props.name,
              hasTransition: !!transitionProps
            },
            context.slots
          )
        })
      }).default();
    };
  }
});
const LayoutProvider = /* @__PURE__ */ defineComponent({
  name: "NuxtLayoutProvider",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean]
    },
    layoutProps: {
      type: Object
    },
    hasTransition: {
      type: Boolean
    },
    shouldProvide: {
      type: Boolean
    }
  },
  setup(props, context) {
    const name = props.name;
    if (props.shouldProvide) {
      provide(LayoutMetaSymbol, {
        isCurrent: (route) => name === (route.meta.layout ?? "default")
      });
    }
    return () => {
      var _a, _b;
      if (!name || typeof name === "string" && !(name in layouts)) {
        return (_b = (_a = context.slots).default) == null ? void 0 : _b.call(_a);
      }
      return h(
        // @ts-expect-error seems to be an issue in vue types
        LayoutLoader,
        { key: name, layoutProps: props.layoutProps, name },
        context.slots
      );
    };
  }
});
const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
};
const generateRouteKey = (routeProps, override) => {
  const matchedRoute = routeProps.route.matched.find((m) => {
    var _a;
    return ((_a = m.components) == null ? void 0 : _a.default) === routeProps.Component.type;
  });
  const source = override ?? (matchedRoute == null ? void 0 : matchedRoute.meta.key) ?? (matchedRoute && interpolatePath(routeProps.route, matchedRoute));
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};
const RouteProvider = /* @__PURE__ */ defineComponent({
  name: "RouteProvider",
  props: {
    vnode: {
      type: Object,
      required: true
    },
    route: {
      type: Object,
      required: true
    },
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key]
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const __nuxt_component_1 = /* @__PURE__ */ defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, expose }) {
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const pageRef = ref();
    inject(PageRouteSymbol, null);
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    let vnode;
    const done = nuxtApp.deferHydration();
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          if (!routeProps.Component) {
            return;
          }
          const key = generateRouteKey(routeProps, props.pageKey);
          const hasTransition = !!(props.transition ?? routeProps.route.meta.pageTransition ?? appPageTransition);
          const transitionProps = hasTransition && _mergeTransitionProps([
            props.transition,
            routeProps.route.meta.pageTransition,
            appPageTransition,
            { onAfterLeave: () => {
              nuxtApp.callHook("page:transition:finish", routeProps.Component);
            } }
          ].filter(Boolean));
          vnode = _wrapIf(
            Transition,
            hasTransition && transitionProps,
            wrapInKeepAlive(
              props.keepalive ?? routeProps.route.meta.keepalive ?? appKeepalive,
              h(Suspense, {
                suspensible: true,
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => {
                  nextTick(() => nuxtApp.callHook("page:finish", routeProps.Component).finally(done));
                }
              }, {
                // @ts-expect-error seems to be an issue in vue types
                default: () => h(RouteProvider, {
                  key,
                  vnode: routeProps.Component,
                  route: routeProps.route,
                  renderKey: key,
                  trackRootNodes: hasTransition,
                  vnodeRef: pageRef
                })
              })
            )
          ).default();
          return vnode;
        }
      });
    };
  }
});
function _toArray(val) {
  return Array.isArray(val) ? val : val ? [val] : [];
}
function _mergeTransitionProps(routeProps) {
  const _props = routeProps.map((prop) => ({
    ...prop,
    onAfterLeave: _toArray(prop.onAfterLeave)
  }));
  return defu(..._props);
}
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __nuxt_component_0;
  const _component_NuxtPage = __nuxt_component_1;
  _push(ssrRenderComponent(_component_NuxtLayout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_NuxtPage)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AppComponent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "nuxt-error-page",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const props = __props;
    const _error = props.error;
    (_error.stack || "").split("\n").splice(1).map((line) => {
      const text = line.replace("webpack:/", "").replace(".vue", ".js").trim();
      return {
        text,
        internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
      };
    }).map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n");
    const statusCode = Number(_error.statusCode || 500);
    const is404 = statusCode === 404;
    const statusMessage = _error.statusMessage ?? (is404 ? "Page Not Found" : "Internal Server Error");
    const description = _error.message || _error.toString();
    const stack = void 0;
    const _Error404 = /* @__PURE__ */ defineAsyncComponent(() => import('./_nuxt/error-404-1f44a6c3.mjs').then((r) => r.default || r));
    const _Error = /* @__PURE__ */ defineAsyncComponent(() => import('./_nuxt/error-500-707ae857.mjs').then((r) => r.default || r));
    const ErrorTemplate = is404 ? _Error404 : _Error;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ErrorTemplate), mergeProps({ statusCode: unref(statusCode), statusMessage: unref(statusMessage), description: unref(description), stack: unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ErrorComponent = _sfc_main$1;
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = /* @__PURE__ */ defineAsyncComponent(() => import('./_nuxt/island-renderer-98f7783f.mjs').then((r) => r.default || r));
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(error)) {
            _push(ssrRenderComponent(unref(ErrorComponent), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(AppComponent), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RootComponent = _sfc_main;
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(RootComponent);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.hooks.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    if (ssrContext == null ? void 0 : ssrContext._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry$1 = (ctx) => entry(ctx);

export { _export_sfc as _, useState as a, createError as c, entry$1 as default, navigateTo as n, useRouter as u };
//# sourceMappingURL=server.mjs.map
