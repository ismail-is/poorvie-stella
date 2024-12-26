import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  __name: "PageHeader",
  __ssrInlineRender: true,
  props: ["title", "paragraph", "classText"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: `page-header ${__props.classText && __props.classText}`
      }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-lg-7 col-md-9"><div class="cont text-center"><h1 class="mb-10 color-font">${ssrInterpolate(__props.title)}</h1><p>${ssrInterpolate(__props.paragraph)}</p></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Headers/PageHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=PageHeader-9dc113ff.mjs.map
