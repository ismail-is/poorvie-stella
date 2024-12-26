import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { ref, mergeProps, unref, withCtx, createVNode, useSSRContext, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-afaf4e47.mjs';
import { C as CountTo } from './vue3-count-to.esm-97a09df1.mjs';
import { _ as __nuxt_component_0 } from './client-only-29ef7f45.mjs';

const _imports_0 = "" + publicAssetsURL("img/slid/002.jpg");
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "slider-stwo valign position-re" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-5"><div class="img"><img${ssrRenderAttr("src", _imports_0)} alt=""></div></div><div class="col-lg-7 valign"><div class="cont"><div class="sub-title mb-5"><h6>Digital Consulting Agency</h6></div><h1 class="mb-10 fw-600">Unique Business Consulting.</h1><p> We help our clients succeed by creating brand identities, <br> digital experiences, and print materials. </p><ul><li><div><span class="icon pe-7s-arc"><div class="bord"></div></span></div><div class="cont"><h6>Branding</h6><p> It is a long established fact that a reader will be distracted. </p></div></li><li><div><span class="icon pe-7s-help2"><div class="bord"></div></span></div><div class="cont"><h6>Marketing</h6><p> It is a long established fact that a reader will be distracted. </p></div></li></ul></div></div></div></div></header>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Headers/Header3.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "services section-padding position-re" }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-lg-8 col-md-10"><div class="sec-head text-center"><h6 class="wow fadeIn" data-wow-delay=".5s">Best Features</h6><h3 class="wow color-font"> We are a new digital product development agency </h3></div></div></div><div class="row"><div class="col-lg-4 wow fadeInUp" data-wow-delay=".3s"><div class="step-item xtop"><span class="icon pe-7s-gleam"></span><h6>Digital Marketing</h6><p> Tempore corrupti temporibus fuga earum asperiores fugit laudantium. </p></div></div><div class="col-lg-4 wow fadeInUp" data-wow-delay=".6s"><div class="step-item xcolor"><span class="icon pe-7s-phone"></span><h6>Web &amp; App Development</h6><p> Tempore corrupti temporibus fuga earum asperiores fugit laudantium. </p></div></div><div class="col-lg-4 wow fadeInUp" data-wow-delay=".9s"><div class="step-item xbottom"><span class="icon pe-7s-magic-wand"></span><h6>Graphic Design</h6><p> Tempore corrupti temporibus fuga earum asperiores fugit laudantium. </p></div></div></div><div class="smore">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#0" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Discover More`);
      } else {
        return [
          createTextVNode("Discover More")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<i class="fas fa-long-arrow-alt-right"></i></div></div><div class="line top left"></div><div class="line bottom right"></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Services/Services2.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Services = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = {
  __name: "FunFacts2",
  __ssrInlineRender: true,
  setup(__props) {
    const countUpRef1 = ref();
    const countUpRef2 = ref();
    const countUpRef3 = ref();
    const countUpRef4 = ref();
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "funfacts2 block-sec section-padding" }, _attrs))}><div class="container"><div class="number-sec"><div class="row"><div class="col-lg-3 col-md-6"><div class="item md-mb50"><span class="icon pe-7s-smile"></span><h3 class="custom-font">`);
      _push(ssrRenderComponent(unref(CountTo), {
        ref_key: "countUpRef1",
        ref: countUpRef1,
        startVal: 0,
        endVal: 2400,
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
        _: 1
      }, _parent));
      _push(`</h3><p class="wow words chars splitting txt" data-splitting> Happy Clients </p></div></div><div class="col-lg-3 col-md-6"><div class="item md-mb50"><span class="icon pe-7s-portfolio"></span><h3 class="custom-font">`);
      _push(ssrRenderComponent(unref(CountTo), {
        ref_key: "countUpRef2",
        ref: countUpRef2,
        startVal: 0,
        endVal: 133,
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
        _: 1
      }, _parent));
      _push(`</h3><p class="wow txt words chars splitting" data-splitting> Compleate Projects </p></div></div><div class="col-lg-3 col-md-6"><div class="item sm-mb50"><span class="icon pe-7s-cloud-download"></span><h3 class="custom-font">`);
      _push(ssrRenderComponent(unref(CountTo), {
        ref_key: "countUpRef3",
        ref: countUpRef3,
        startVal: 0,
        endVal: 254,
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
        _: 1
      }, _parent));
      _push(` k </h3><p class="wow txt words chars splitting" data-splitting> Files Downloaded </p></div></div><div class="col-lg-3 col-md-6"><div class="item"><span class="icon pe-7s-medal"></span><h3 class="custom-font">`);
      _push(ssrRenderComponent(unref(CountTo), {
        ref_key: "countUpRef4",
        ref: countUpRef4,
        startVal: 0,
        endVal: 46,
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
        _: 1
      }, _parent));
      _push(`</h3><p class="wow txt words chars splitting" data-splitting> Award Win </p></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FunFacts/FunFacts2.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Works2",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "work-carousel section-padding caroul position-re pb-0" }, _attrs))}><div class="container-fluid"><div class="row justify-content-center"><div class="col-lg-8 col-md-10"><div class="sec-head text-center"><h6 class="wow fadeIn" data-wow-delay=".5s">Latest Work</h6><h3 class="wow color-font"> Our Recent Web Design &amp; <br> Some Past Projects. </h3></div></div></div><div class="row"><div class="col-lg-12 no-padding"><div class="swiper-container"><div class="swiper-container">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`<div class="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"><i class="ion-ios-arrow-right"></i></div><div class="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"><i class="ion-ios-arrow-left"></i></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Works/Works2.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "blog-grid section-padding position-re" }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-lg-8 col-md-10"><div class="sec-head text-center"><h6 class="wow fadeIn" data-wow-delay=".5s">RECENT ARTICLES</h6><h3 class="wow color-font">From our blogs.</h3></div></div></div><div class="row"><div class="col-lg-4 wow fadeInUp" data-wow-delay=".3s"><div class="item bg-img" style="${ssrRenderStyle({ "background-image": "url('/img/blog/1.jpg')" })}"><div class="cont">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "#0",
    class: "date"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}><i${_scopeId}>06</i> Aug 2023 </span>`);
      } else {
        return [
          createVNode("span", null, [
            createVNode("i", null, "06"),
            createTextVNode(" Aug 2023 ")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="info">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "#0",
    class: "author"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>by / Admin</span>`);
      } else {
        return [
          createVNode("span", null, "by / Admin")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "#0",
    class: "tag"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>WordPress</span>`);
      } else {
        return [
          createVNode("span", null, "WordPress")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><h6>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#0" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` The Start-Up Ultimate Guide to Make Your WordPress Journal. `);
      } else {
        return [
          createTextVNode(" The Start-Up Ultimate Guide to Make Your WordPress Journal. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h6><div class="btn-more">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "#0",
    class: "simple-btn"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Read More `);
      } else {
        return [
          createTextVNode(" Read More ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div><div class="col-lg-4 wow fadeInUp" data-wow-delay=".6s"><div class="item active bg-img" style="${ssrRenderStyle({ "background-image": "url('/img/blog/2.jpg')" })}"><div class="cont">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "#0",
    class: "date"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}><i${_scopeId}>06</i> Aug 2023 </span>`);
      } else {
        return [
          createVNode("span", null, [
            createVNode("i", null, "06"),
            createTextVNode(" Aug 2023 ")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="info">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "#0",
    class: "author"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>by / Admin</span>`);
      } else {
        return [
          createVNode("span", null, "by / Admin")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "#0",
    class: "tag"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>WordPress</span>`);
      } else {
        return [
          createVNode("span", null, "WordPress")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><h6>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#0" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` The Start-Up Ultimate Guide to Make Your WordPress Journal. `);
      } else {
        return [
          createTextVNode(" The Start-Up Ultimate Guide to Make Your WordPress Journal. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h6><div class="btn-more">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "#0",
    class: "simple-btn"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Read More `);
      } else {
        return [
          createTextVNode(" Read More ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div><div class="col-lg-4 wow fadeInUp" data-wow-delay=".9s"><div class="item bg-img" style="${ssrRenderStyle({ "background-image": "url('/img/blog/3.jpg')" })}"><div class="cont">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "#0",
    class: "date"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}><i${_scopeId}>06</i> Aug 2023 </span>`);
      } else {
        return [
          createVNode("span", null, [
            createVNode("i", null, "06"),
            createTextVNode(" Aug 2023 ")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="info">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "#0",
    class: "author"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>by / Admin</span>`);
      } else {
        return [
          createVNode("span", null, "by / Admin")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "#0",
    class: "tag"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>WordPress</span>`);
      } else {
        return [
          createVNode("span", null, "WordPress")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><h6>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#0" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` The Start-Up Ultimate Guide to Make Your WordPress Journal. `);
      } else {
        return [
          createTextVNode(" The Start-Up Ultimate Guide to Make Your WordPress Journal. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h6><div class="btn-more">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "#0",
    class: "simple-btn"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Read More `);
      } else {
        return [
          createTextVNode(" Read More ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div></div><div class="line top right"></div><div class="line bottom left"></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blogs/Blogs3.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Blogs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Blogs as B, Header as H, Services as S, _sfc_main$1 as _, _sfc_main$2 as a };
//# sourceMappingURL=Blogs3-f1a0126d.mjs.map
