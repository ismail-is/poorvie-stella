import { mergeProps, useSSRContext, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0 } from './min-area-692b8d24.mjs';

const _sfc_main$2 = {
  __name: "PagesHeader",
  __ssrInlineRender: true,
  props: ["imageLink"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "pages-header circle-bg valign" }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-lg-10"><div class="cont mt-100 mb-50 text-center"><h1 class="color-font fw-700">`);
      ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent);
      _push(`</h1></div></div><div class="col-lg-10"><div class="img"><img${ssrRenderAttr("src", __props.imageLink)} alt=""></div></div></div></div><div class="half sub-bg"><div class="circle-color"><div class="gradient-circle"></div><div class="gradient-circle two"></div></div></div></header>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Headers/PagesHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const id = 1;
const title = "Who We Are ?";
const paragraph1 = "We develop creative solutions for small and big brands alike, build authentic product identities and much more.Lorem ipsum dolor sit amet, consectetur adipiscing elit sit non facilisis vitae eut.";
const paragraph2 = "lorem in id tristique in elementum leo nisi eleifend placerat magna lacus elementum ornare vehicula odio posuere quisque ultrices tempus cras id blandit maecenas in ornare quis dolor tempus risus vitae feugiat fames aliquet sed.";
const AboutInfo1Data = {
  id,
  title,
  paragraph1,
  paragraph2
};
const _sfc_main$1 = {
  __name: "AboutIntro",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "intro-section section-padding pb-0" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-3 col-md-4"><div class="htit sm-mb30"><h4>${ssrInterpolate(unref(AboutInfo1Data).title)}</h4></div></div><div class="col-lg-8 offset-lg-1 col-md-8"><div class="text"><p class="wow txt mb-10 words chars splitting" data-splitting>${ssrInterpolate(unref(AboutInfo1Data).paragraph1)}</p><p class="wow txt words chars splitting" data-splitting>${ssrInterpolate(unref(AboutInfo1Data).paragraph2)}</p></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AboutUs/AboutIntro.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "MinimalArea1",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "min-area sub-bg" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-6"><div class="img"><img class="thumparallax-down"${ssrRenderAttr("src", _imports_0)} alt=""></div></div><div class="col-lg-6 valign"><div class="content pt-0"><h4 class="wow color-font">About us.</h4><p class="wow txt" data-splitting> Our creative Ad agency is ranked among the finest in the US. We cultivate smart ideas for start-ups and seasoned players. </p><ul class="feat"><li class="wow fadeInUp" data-wow-delay=".2s"><h6><span>1</span> Our Mission</h6><p> luctus massa ipsum at tempus eleifend congue lectus bibendum </p></li><li class="wow fadeInUp" data-wow-delay=".4s"><h6><span>2</span> Our Goals</h6><p> luctus massa ipsum at tempus eleifend congue lectus bibendum </p></li><li class="wow fadeInUp" data-wow-delay=".6s"><h6><span>3</span> Why Us?</h6><p> luctus massa ipsum at tempus eleifend congue lectus bibendum </p></li></ul></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Others/MinimalArea1.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$2 as _, _sfc_main$1 as a, _sfc_main as b };
//# sourceMappingURL=MinimalArea1-bdef1c7b.mjs.map
