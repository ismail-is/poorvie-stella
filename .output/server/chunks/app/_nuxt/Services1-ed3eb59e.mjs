import { mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { f as featuresData } from './features-1bf70970.mjs';

const _sfc_main = {
  __name: "Services1",
  __ssrInlineRender: true,
  props: ["lines", "oStyle"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: `services bords section-padding ${__props.oStyle === "4item" ? "lficon" : __props.lines ? "" : "pt-0"}`
      }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-lg-8 col-md-10"><div class="sec-head text-center"><h6 class="wow fadeIn" data-wow-delay=".5s">Best Features</h6><h3 class="wow color-font"> We are a new digital product development agency </h3></div></div></div>`);
      if (__props.oStyle === "4item") {
        _push(`<div class="row"><!--[-->`);
        ssrRenderList(unref(featuresData), (feature) => {
          _push(`<div class="col-lg-6 wow fadeInLeft"${ssrRenderAttr("data-wow-delay", `${feature.id == 1 ? ".5" : feature.id === 2 ? ".7" : feature.id === 3 ? ".9" : "1.1"}s`)}><div class="item-box"><div><span class="${ssrRenderClass(`icon ${feature.icon}`)}"></span></div><div class="cont"><h6>${ssrInterpolate(feature.title)}</h6><p>${ssrInterpolate(feature.content)}</p></div></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="row"><!--[-->`);
        ssrRenderList(unref(featuresData).slice(0, 3), (feature) => {
          _push(`<div class="col-lg-4 wow fadeInLeft" data-wow-delay=".5s"><div class="item-box md-mb50"><span class="${ssrRenderClass(`icon ${feature.icon}`)}"></span><h6>${ssrInterpolate(feature.title)}</h6><p>${ssrInterpolate(feature.content)}</p></div></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div>`);
      if (__props.lines) {
        _push(`<div class="line top left"></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.lines) {
        _push(`<div class="line bottom right"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Services/Services1.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Services1-ed3eb59e.mjs.map
