import { _ as __nuxt_component_0 } from './nuxt-link-afaf4e47.mjs';
import { mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: ["headerData"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: "page-app-header valign bg-img",
        "data-overlay-dark": "8",
        style: { "background-image": "url('/mobile-app/img/p1.jpg')" }
      }, _attrs))}><div class="container"><div class="row"><div class="col-12"><div class="text-center"><h1>${ssrInterpolate(__props.headerData.title)}</h1><div class="links">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="icon pe-7s-angle-right"></span>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.headerData.page)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.headerData.page), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div></header>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Mobile-app/AltHeader/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=index-92c33e93.mjs.map
