import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { mergeProps, unref, useSSRContext, ref, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { f as featuresData } from './features-1bf70970.mjs';
import { _ as _imports_0$1 } from './4-f91bac2f.mjs';
import { M as ModalVideo } from './ModalVideo-db24fbd8.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-afaf4e47.mjs';

const _sfc_main$2 = {
  __name: "Services4",
  __ssrInlineRender: true,
  props: ["serviceMB50"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "services box section-padding" }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-lg-8 col-md-10"><div class="sec-head text-center"><h6 class="wow fadeIn" data-wow-delay=".5s">Best Features</h6><h3 class="wow color-font"> We are a new digital product development agency </h3></div></div></div><div class="row"><!--[-->`);
      ssrRenderList(unref(featuresData).slice(0, 3), (item, index) => {
        _push(`<div class="col-lg-4 wow fadeInLeft"${ssrRenderAttr("data-wow-delay", index == 0 ? ".5s" : index == 1 ? ".7s" : ".9s")}><div class="${ssrRenderClass(`item-box no-curve ${__props.serviceMB50 && index + 1 != unref(featuresData).length - 1 ? "mb-50" : ""}`)}"><span class="${ssrRenderClass(`icon color-font ${item.icon}`)}"></span><h6>${ssrInterpolate(item.title)}</h6><p>${ssrInterpolate(item.content)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Services/Services4.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const videoChannel = "vimeo";
const videoId = "127203262";
const _sfc_main$1 = {
  __name: "AboutUs4",
  __ssrInlineRender: true,
  setup(__props) {
    const videoIsOpen = ref(false);
    function onClose() {
      videoIsOpen.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "about-cr" }, _attrs))}><div class="container-fluid"><div class="row"><div class="col-lg-6 img md-mb50"><img${ssrRenderAttr("src", _imports_0$1)} alt=""></div><div class="col-lg-4 valign"><div class="cont full-width"><h3 class="color-font">Huge collection.</h3><h6> Innovative solutions <br> to boost your creative projects. </h6>`);
      _push(ssrRenderComponent(ModalVideo, {
        channel: videoChannel,
        videoId,
        isOpen: unref(videoIsOpen),
        onClose
      }, null, _parent));
      _push(`<div class="vid-area"><div class="vid-icon"><a class="vid"><div class="vid-butn back-color"><span class="icon"><i class="fas fa-play"></i></span></div></a></div><div class="valign"><span class="text">Watch Video</span></div></div><div class="states"><h2 class="color-font fw-700"> 125 <span class="fz-30">k</span></h2><p>Projects completed around the world</p></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AboutUs/AboutUs4.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _imports_0 = "" + publicAssetsURL("img/portfolio/cr/1.jpg");
const _imports_1 = "" + publicAssetsURL("img/portfolio/cr/2.jpg");
const _imports_2 = "" + publicAssetsURL("img/portfolio/cr/3.jpg");
const _imports_3 = "" + publicAssetsURL("img/portfolio/cr/4.jpg");
const _sfc_main = {
  __name: "Works4",
  __ssrInlineRender: true,
  props: ["classText"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: `portfolio-cr section-padding pb-50 ${__props.classText ? __props.classText : ""}`
      }, _attrs))}><div class="container"><div class="row"><div class="filtering text-center col-12"><div class="filter"><span data-filter="*" class="active"> All </span><span data-filter=".brand">Branding</span><span data-filter=".web">Mobile App</span><span data-filter=".graphic">Creative</span></div></div><div class="gallery-mons full-width"><div class="items graphic wow fadeInUp" data-wow-delay=".4s"><div class="item-img">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "imago wow",
        to: "/project-details2/project-details2-dark"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="image"${_scopeId}><div class="item-img-overlay"${_scopeId}></div>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "image"
              }),
              createVNode("div", { class: "item-img-overlay" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="cont flex"><h6 class="color-font">Creative Design</h6><span><a href="#0">Graphic</a></span></div></div><div class="items web brand wow fadeInUp" data-wow-delay=".4s"><div class="item-img">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "imago wow",
        to: "/project-details2/project-details2-dark"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_1)} alt="image"${_scopeId}><div class="item-img-overlay"${_scopeId}></div>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_1,
                alt: "image"
              }),
              createVNode("div", { class: "item-img-overlay" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="cont flex"><h6 class="color-font">Modern Design</h6><span><a href="#0">Brand</a>, <a href="#0">Web</a></span></div></div><div class="items width2 brand wow fadeInUp" data-wow-delay=".4s"><div class="item-img">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "imago wow",
        to: "/project-details2/project-details2-dark"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_2)} alt="image"${_scopeId}><div class="item-img-overlay"${_scopeId}></div>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_2,
                alt: "image"
              }),
              createVNode("div", { class: "item-img-overlay" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="cont"><h6 class="color-font">Creative Design</h6><span><a href="#0">Website</a></span></div></div><div class="items width2 graphic wow fadeInUp" data-wow-delay=".4s"><div class="item-img">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "imago wow",
        to: "/project-details2/project-details2-dark"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_3)} alt="image"${_scopeId}><div class="item-img-overlay"${_scopeId}></div>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_3,
                alt: "image"
              }),
              createVNode("div", { class: "item-img-overlay" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="cont"><h6 class="color-font">Modern Design</h6><span><a href="#0">Graphic</a></span></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Works/Works4.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$2 as _, _sfc_main$1 as a, _sfc_main as b };
//# sourceMappingURL=Works4-037f9fa2.mjs.map
