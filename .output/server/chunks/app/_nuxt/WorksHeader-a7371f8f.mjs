import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

const _sfc_main = {
  __name: "WorksHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const fixedSlider = ref();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({
        ref_key: "fixedSlider",
        ref: fixedSlider,
        class: "works-header fixed-slider hfixd valign sub-bg"
      }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-lg-7 col-md-9 static"><div class="capt mt-50"><div class="parlx text-center"><h1 class="color-font">amazing works</h1><p> Creativity involves breaking out of expected &amp; repeatable patterns in order to look at things in different way than ever before. </p></div><div class="bactxt custom-font valign"><span class="full-width">Works</span></div></div></div></div></div></header>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Headers/WorksHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=WorksHeader-a7371f8f.mjs.map
