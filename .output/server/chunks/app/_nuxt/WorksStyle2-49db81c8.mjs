import { _ as __nuxt_component_0 } from './nuxt-link-afaf4e47.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0, a as _imports_1, b as _imports_2, c as _imports_3, d as _imports_4 } from './5-d22ab734.mjs';
import { _ as _imports_5 } from './6-f22bbc20.mjs';

const _sfc_main = {
  __name: "WorksStyle2",
  __ssrInlineRender: true,
  props: ["grid", "filterPosition", "hideFilter"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: `${__props.grid ? __props.grid === 3 ? "three-column" : null : null} portfolio section-padding pb-70`
      }, _attrs))}>`);
      if (!__props.hideFilter) {
        _push(`<div class="container"><div class="row justify-content-center"><div class="col-lg-8 col-md-10"><div class="sec-head text-center"><h6 class="wow fadeIn" data-wow-delay=".5s">Portfolio</h6><h3 class="wow color-font"> Our Recent Web Design &amp; <br> Some Past Projects. </h3></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="container"><div class="row">`);
      if (!__props.hideFilter) {
        _push(`<div class="${ssrRenderClass(`filtering ${__props.filterPosition === "center" ? "text-center" : __props.filterPosition === "left" ? "text-left" : "text-right"} col-12`)}"><div class="filter"><span data-filter="*" class="active"> All </span><span data-filter=".brand">Branding</span><span data-filter=".web">Mobile App</span><span data-filter=".graphic">Creative</span></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="gallery full-width"><div class="${ssrRenderClass(`${__props.grid === 3 ? "col-lg-4 col-md-6" : __props.grid === 2 ? "col-md-6" : "col-12"} items graphic wow fadeInUp`)}" data-wow-delay=".4s"><div class="item-img">`);
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
      _push(`</div><div class="cont"><h6>Creativity Demand</h6><span><a href="#0">Design</a>, <a href="#0">WordPress</a></span></div></div><div class="${ssrRenderClass(`${__props.grid === 3 ? "col-lg-4 col-md-6" : __props.grid === 2 ? "col-md-6" : "col-12"} items web wow fadeInUp`)}" data-wow-delay=".4s"><div class="item-img">`);
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
      _push(`</div><div class="cont"><h6>Through The Breaking</h6><span><a href="#0">Design</a>, <a href="#0">WordPress</a></span></div></div><div class="${ssrRenderClass(`${__props.grid === 3 ? "col-lg-4 col-md-6" : __props.grid === 2 ? "col-md-6" : "col-12"} items brand wow fadeInUp`)}" data-wow-delay=".4s"><div class="item-img">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/project-details2/project-details2-dark",
        class: "imago wow"
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
      _push(`</div><div class="cont"><h6>Create With Creatives</h6><span><a href="#0">Design</a>, <a href="#0">WordPress</a></span></div></div><div class="${ssrRenderClass(`${__props.grid === 3 ? "col-lg-4 col-md-6" : __props.grid === 2 ? "col-md-6" : "col-12"} items graphic wow fadeInUp`)}" data-wow-delay=".4s"><div class="item-img">`);
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
      _push(`</div><div class="cont"><h6>Energies of Love</h6><span><a href="#0">Design</a>, <a href="#0">WordPress</a></span></div></div><div class="${ssrRenderClass(`${__props.grid === 3 ? "col-lg-4 col-md-6" : __props.grid === 2 ? "col-md-6" : "col-12"} items web wow fadeInUp`)}" data-wow-delay=".4s"><div class="item-img">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "imago wow",
        to: "/project-details2/project-details2-dark"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_4)} alt="image"${_scopeId}><div class="item-img-overlay"${_scopeId}></div>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_4,
                alt: "image"
              }),
              createVNode("div", { class: "item-img-overlay" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="cont"><h6>See It Yourself</h6><span><a href="#0">Design</a>, <a href="#0">WordPress</a></span></div></div><div class="${ssrRenderClass(`${__props.grid === 3 ? "col-lg-4 col-md-6" : __props.grid === 2 ? "col-md-6" : "col-12"} items brand wow fadeInUp`)}" data-wow-delay=".4s"><div class="item-img">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "imago wow",
        to: "/project-details2/project-details2-dark"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_5)} alt="image"${_scopeId}><div class="item-img-overlay"${_scopeId}></div>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_5,
                alt: "image"
              }),
              createVNode("div", { class: "item-img-overlay" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="cont"><h6>Blast From The Past</h6><span><a href="#0">Design</a>, <a href="#0">WordPress</a></span></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Works/WorksStyle2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=WorksStyle2-49db81c8.mjs.map
