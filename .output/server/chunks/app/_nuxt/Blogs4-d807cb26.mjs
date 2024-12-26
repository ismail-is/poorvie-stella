import { _ as __nuxt_component_0 } from './client-only-29ef7f45.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = {
  __name: "Blogs4",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "blog-crv sub-bg" }, _attrs))}><div class="stories"><div class="container-fluid"><div class="row"><div class="col-lg-6 no-padding">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div><div class="col-lg-6 no-padding valign">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></div><div class="controls"><div class="swiper-button-next swiper-nav-ctrl next-ctrl"><i class="fas fa-caret-up"></i></div><div class="swiper-button-prev swiper-nav-ctrl prev-ctrl"><i class="fas fa-caret-down"></i></div><div class="swiper-pagination"></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blogs/Blogs4.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Blogs4-d807cb26.mjs.map
