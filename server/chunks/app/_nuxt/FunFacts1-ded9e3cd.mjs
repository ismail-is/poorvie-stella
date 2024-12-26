import { ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { C as CountTo } from './vue3-count-to.esm-97a09df1.mjs';

const funFactData = [
  {
    id: 1,
    icon: "pe-7s-smile",
    content: "People who are commited to their management tasks.",
    value: "2400"
  },
  {
    id: 2,
    icon: "pe-7s-portfolio",
    content: "Signed projects that have been confirmed complete!",
    value: "133"
  },
  {
    id: 3,
    icon: "pe-7s-medal",
    content: "International awards and cups for design projects.",
    value: "46"
  }
];
const _sfc_main = {
  __name: "FunFacts1",
  __ssrInlineRender: true,
  setup(__props) {
    const countUpRef = ref();
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "number-sec section-padding" }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-lg-8 col-md-10"><div class="sec-head text-center"><h6 class="wow fadeIn" data-wow-delay=".5s">FUN FACTS</h6><h3 class="wow color-font"> Pleasure in the job puts perfection in the work. </h3></div></div></div><div class="row"><!--[-->`);
      ssrRenderList(unref(funFactData), (item) => {
        _push(`<div class="col-md-4"><div class="item no-bord sm-mb50"><span class="${ssrRenderClass(`icon ${item.icon}`)}"></span><h3 class="">`);
        _push(ssrRenderComponent(unref(CountTo), {
          ref_for: true,
          ref_key: "countUpRef",
          ref: countUpRef,
          startVal: 0,
          endVal: Number(item.value),
          duration: 3e3,
          autoplay: false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="count"${_scopeId}>\xA0</span>`);
            } else {
              return [
                createVNode("span", { class: "count" }, "\xA0")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</h3><p class="wow txt words chars splitting" data-splitting>${ssrInterpolate(item.content)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FunFacts/FunFacts1.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=FunFacts1-ded9e3cd.mjs.map
