import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0 } from './Loading-8d8ab4f5.mjs';
import { useSSRContext, onUnmounted, mergeProps, unref, withCtx, createVNode } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc, a as useState } from '../server.mjs';
import { c, p as particlesConfig } from './particle-config-b5ba4886.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-afaf4e47.mjs';
import { u as useHead } from './index-88e9f29c.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$7 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "circle-bg" }, _attrs))}><div class="circle-color fixed"><div class="gradient-circle"></div><div class="gradient-circle two"></div></div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Demos/CircleBg.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$6 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const backgroundPosition = useState("backgroundPosition", () => 0);
    function handleScroll() {
      backgroundPosition.value = -(window.scrollY - 0.25 * window.scrollY);
    }
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: "works-header particles valign bg-img parallaxie",
        "data-overlay-dark": "4",
        style: {
          backgroundImage: `url(/demo-img/bg.png)`,
          minHeight: "100vh",
          zIndex: "99999",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center " + unref(backgroundPosition) + "px"
        }
      }, _attrs))}>`);
      _push(ssrRenderComponent(unref(c), {
        id: "particles-js",
        options: unref(particlesConfig)
      }, null, _parent));
      _push(`<div class="container"><div class="row justify-content-center"><div class="col-lg-9 col-md-11 static"><div class="capt mt-50"><div class="bactxt custom-font valign"><span class="full-width" style="${ssrRenderStyle({ "color": "transparent" })}"> vie </span></div></div></div></div></div></header>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Demos/Header.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$6;
const _imports_0$1 = "" + publicAssetsURL("demo-img/1.png");
const _imports_1$1 = "" + publicAssetsURL("demo-img/01.png");
const _imports_2$1 = "" + publicAssetsURL("demo-img/2.png");
const _imports_3$1 = "" + publicAssetsURL("demo-img/02.png");
const _imports_4$1 = "" + publicAssetsURL("demo-img/mobile1.png");
const _imports_5$1 = "" + publicAssetsURL("demo-img/mobile2.png");
const _imports_6$1 = "" + publicAssetsURL("demo-img/n2.png");
const _imports_7$1 = "" + publicAssetsURL("demo-img/n02.png");
const _imports_8$1 = "" + publicAssetsURL("demo-img/n3.png");
const _imports_9$1 = "" + publicAssetsURL("demo-img/n03.png");
const _imports_10$1 = "" + publicAssetsURL("demo-img/3.png");
const _imports_11$1 = "" + publicAssetsURL("demo-img/03.png");
const _imports_12 = "" + publicAssetsURL("demo-img/5.png");
const _imports_13 = "" + publicAssetsURL("demo-img/05.png");
const _imports_14 = "" + publicAssetsURL("demo-img/n1.png");
const _imports_15 = "" + publicAssetsURL("demo-img/n01.png");
const _imports_16 = "" + publicAssetsURL("demo-img/4.png");
const _imports_17 = "" + publicAssetsURL("demo-img/04.png");
const _imports_18 = "" + publicAssetsURL("demo-img/c3.png");
const _imports_19 = "" + publicAssetsURL("demo-img/c4.png");
const _sfc_main$5 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "masonery section-padding" }, _attrs))} data-v-ab9284c4><div class="container" data-v-ab9284c4><div class="row justify-content-center" data-v-ab9284c4><div class="col-lg-8 col-md-10" data-v-ab9284c4><div class="sec-head text-center" data-v-ab9284c4><h3 class="color-font" data-v-ab9284c4>49+ stunning unique ready template</h3><span class="tbg" data-v-ab9284c4><b data-v-ab9284c4>+</b>49 </span></div></div></div></div><div class="container-fluid" data-v-ab9284c4><div class="row" data-v-ab9284c4><div class="gallery full-width" data-v-ab9284c4><div class="col-lg-3 col-md-6 items" data-v-ab9284c4><div class="item-img wow fadeInUp" data-wow-delay=".4s" data-v-ab9284c4><span class="dot" data-v-ab9284c4></span><span class="dot" data-v-ab9284c4></span><span class="dot" data-v-ab9284c4></span>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    target: "_blank",
    to: "/homepage/home1-dark"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="img" data-v-ab9284c4${_scopeId}><img${ssrRenderAttr("src", _imports_0$1)} alt="image" data-v-ab9284c4${_scopeId}></div><div class="cont" data-v-ab9284c4${_scopeId}><h6 data-v-ab9284c4${_scopeId}>Main Demo</h6></div>`);
      } else {
        return [
          createVNode("div", { class: "img" }, [
            createVNode("img", {
              src: _imports_0$1,
              alt: "image"
            })
          ]),
          createVNode("div", { class: "cont" }, [
            createVNode("h6", null, "Main Demo")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="col-lg-3 col-md-6 items" data-v-ab9284c4><div class="item-img wow fadeInUp" data-wow-delay=".4s" data-v-ab9284c4><span class="dot" data-v-ab9284c4></span><span class="dot" data-v-ab9284c4></span><span class="dot" data-v-ab9284c4></span>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    target: "_blank",
    to: "/homepage/home1-light"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="img" data-v-ab9284c4${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="image" data-v-ab9284c4${_scopeId}></div><div class="cont" data-v-ab9284c4${_scopeId}><h6 data-v-ab9284c4${_scopeId}>Main Demo</h6></div>`);
      } else {
        return [
          createVNode("div", { class: "img" }, [
            createVNode("img", {
              src: _imports_1$1,
              alt: "image"
            })
          ]),
          createVNode("div", { class: "cont" }, [
            createVNode("h6", null, "Main Demo")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="col-lg-3 col-md-6 items" data-v-ab9284c4><div class="item-img wow fadeInUp" data-wow-delay=".4s" data-v-ab9284c4><span class="dot" data-v-ab9284c4></span><span class="dot" data-v-ab9284c4></span><span class="dot" data-v-ab9284c4></span>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    target: "_blank",
    to: "/homepage/home2-dark"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="img" data-v-ab9284c4${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="image" data-v-ab9284c4${_scopeId}></div><div class="cont" data-v-ab9284c4${_scopeId}><h6 data-v-ab9284c4${_scopeId}>Creative Agency</h6></div>`);
      } else {
        return [
          createVNode("div", { class: "img" }, [
            createVNode("img", {
              src: _imports_2$1,
              alt: "image"
            })
          ]),
          createVNode("div", { class: "cont" }, [
            createVNode("h6", null, "Creative Agency")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="col-lg-3 col-md-6 items" data-v-ab9284c4><div class="item-img wow fadeInUp" data-wow-delay=".4s" data-v-ab9284c4><span class="dot" data-v-ab9284c4></span><span class="dot" data-v-ab9284c4></span><span class="dot" data-v-ab9284c4></span>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    target: "_blank",
    to: "/homepage/home2-light"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="img" data-v-ab9284c4${_scopeId}><img${ssrRenderAttr("src", _imports_3$1)} alt="image" data-v-ab9284c4${_scopeId}></div><div class="cont" data-v-ab9284c4${_scopeId}><h6 data-v-ab9284c4${_scopeId}>Creative Agency</h6></div>`);
      } else {
        return [
          createVNode("div", { class: "img" }, [
            createVNode("img", {
              src: _imports_3$1,
              alt: "image"
            })
          ]),
          createVNode("div", { class: "cont" }, [
            createVNode("h6", null, "Creative Agency")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div class="gallery full-width" data-v-ab9284c4><div class="col-lg-3 col-md-6 items" data-v-ab9284c4><div class="item-img wow fadeInUp" data-wow-delay=".4s" data-v-ab9284c4><span class="dot" data-v-ab9284c4></span><span class="dot" data-v-ab9284c4></span><span class="dot" data-v-ab9284c4></span>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    target: "_blank",
    to: "/mobile-app/mobile-app-dark"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="img" data-v-ab9284c4${_scopeId}><img${ssrRenderAttr("src", _imports_4$1)} alt="image" data-v-ab9284c4${_scopeId}></div><div class="cont" data-v-ab9284c4${_scopeId}><h6 data-v-ab9284c4${_scopeId}>Mobile app</h6><div class="sta new" data-v-ab9284c4${_scopeId}><span data-v-ab9284c4${_scopeId}>New Demo</span></div></div>`);
      } else {
        return [
          createVNode("div", { class: "img" }, [
            createVNode("img", {
              src: _imports_4$1,
              alt: "image"
            })
          ]),
          createVNode("div", { class: "cont" }, [
            createVNode("h6", null, "Mobile app"),
            createVNode("div", { class: "sta new" }, [
              createVNode("span", null, "New Demo")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="col-lg-3 col-md-6 items" data-v-ab9284c4><div class="item-img wow fadeInUp" data-wow-delay=".4s" data-v-ab9284c4><span class="dot" data-v-ab9284c4></span><span class="dot" data-v-ab9284c4></span><span class="dot" data-v-ab9284c4></span>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    target: "_blank",
    to: "/mobile-app/mobile-app-light"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="img" data-v-ab9284c4${_scopeId}><img${ssrRenderAttr("src", _imports_5$1)} alt="image" data-v-ab9284c4${_scopeId}></div><div class="cont" data-v-ab9284c4${_scopeId}><h6 data-v-ab9284c4${_scopeId}>Mobile app</h6><div class="sta new" data-v-ab9284c4${_scopeId}><span data-v-ab9284c4${_scopeId}>New Demo</span></div></div>`);
      } else {
        return [
          createVNode("div", { class: "img" }, [
            createVNode("img", {
              src: _imports_5$1,
              alt: "image"
            })
          ]),
          createVNode("div", { class: "cont" }, [
            createVNode("h6", null, "Mobile app"),
            createVNode("div", { class: "sta new" }, [
              createVNode("span", null, "New Demo")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="col-lg-3 col-md-6 items" data-v-ab9284c4><div class="item-img wow fadeInUp" data-wow-delay=".4s" data-v-ab9284c4><span class="dot" data-v-ab9284c4></span><span class="dot" data-v-ab9284c4></span><span class="dot" data-v-ab9284c4></span>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    target: "_blank",
    to: "/homepage/home7-dark"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="img" data-v-ab9284c4${_scopeId}><img${ssrRenderAttr("src", _imports_6$1)} alt="image" data-v-ab9284c4${_scopeId}></div><div class="cont" data-v-ab9284c4${_scopeId}><h6 data-v-ab9284c4${_scopeId}>Freelancer</h6></div>`);
      } else {
        return [
          createVNode("div", { class: "img" }, [
            createVNode("img", {
              src: _imports_6$1,
              alt: "image"
            })
          ]),
          createVNode("div", { class: "cont" }, [
            createVNode("h6", null, "Freelancer")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="col-lg-3 col-md-6 items" data-v-ab9284c4><div class="item-img wow fadeInUp" data-wow-delay=".4s" data-v-ab9284c4><span class="dot" data-v-ab9284c4></span><span class="dot" data-v-ab9284c4></span><span class="dot" data-v-ab9284c4></span>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    target: "_blank",
    to: "/homepage/home7-light"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="img" data-v-ab9284c4${_scopeId}><img${ssrRenderAttr("src", _imports_7$1)} alt="image" data-v-ab9284c4${_scopeId}></div><div class="cont" data-v-ab9284c4${_scopeId}><h6 data-v-ab9284c4${_scopeId}>Freelancer</h6></div>`);
      } else {
        return [
          createVNode("div", { class: "img" }, [
            createVNode("img", {
              src: _imports_7$1,
              alt: "image"
            })
          ]),
          createVNode("div", { class: "cont" }, [
            createVNode("h6", null, "Freelancer")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div class="gallery full-width" data-v-ab9284c4><div class="col-lg-3 col-md-6 items" data-v-ab9284c4><div class="item-img wow fadeInUp" data-wow-delay=".4s" data-v-ab9284c4><span class="dot" data-v-ab9284c4></span><span class="dot" data-v-ab9284c4></span><span class="dot" data-v-ab9284c4></span>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    target: "_blank",
    to: "/homepage/home8-dark"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="img" data-v-ab9284c4${_scopeId}><img${ssrRenderAttr("src", _imports_8$1)} alt="image" data-v-ab9284c4${_scopeId}></div><div class="cont" data-v-ab9284c4${_scopeId}><h6 data-v-ab9284c4${_scopeId}>Architecture</h6></div>`);
      } else {
        return [
          createVNode("div", { class: "img" }, [
            createVNode("img", {
              src: _imports_8$1,
              alt: "image"
            })
          ]),
          createVNode("div", { class: "cont" }, [
            createVNode("h6", null, "Architecture")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="col-lg-3 col-md-6 items" data-v-ab9284c4><div class="item-img wow fadeInUp" data-wow-delay=".4s" data-v-ab9284c4><span class="dot" data-v-ab9284c4></span><span class="dot" data-v-ab9284c4></span><span class="dot" data-v-ab9284c4></span>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    target: "_blank",
    to: "/homepage/home8-light"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="img" data-v-ab9284c4${_scopeId}><img${ssrRenderAttr("src", _imports_9$1)} alt="image" data-v-ab9284c4${_scopeId}></div><div class="cont" data-v-ab9284c4${_scopeId}><h6 data-v-ab9284c4${_scopeId}>Architecture</h6></div>`);
      } else {
        return [
          createVNode("div", { class: "img" }, [
            createVNode("img", {
              src: _imports_9$1,
              alt: "image"
            })
          ]),
          createVNode("div", { class: "cont" }, [
            createVNode("h6", null, "Architecture")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="col-lg-3 col-md-6 items" data-v-ab9284c4><div class="item-img wow fadeInUp" data-wow-delay=".4s" data-v-ab9284c4><span class="dot" data-v-ab9284c4></span><span class="dot" data-v-ab9284c4></span><span class="dot" data-v-ab9284c4></span>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    target: "_blank",
    to: "/homepage/home5-dark"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="img" data-v-ab9284c4${_scopeId}><img${ssrRenderAttr("src", _imports_10$1)} alt="image" data-v-ab9284c4${_scopeId}></div><div class="cont" data-v-ab9284c4${_scopeId}><h6 data-v-ab9284c4${_scopeId}>Digital Agency</h6></div>`);
      } else {
        return [
          createVNode("div", { class: "img" }, [
            createVNode("img", {
              src: _imports_10$1,
              alt: "image"
            })
          ]),
          createVNode("div", { class: "cont" }, [
            createVNode("h6", null, "Digital Agency")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="col-lg-3 col-md-6 items" data-v-ab9284c4><div class="item-img wow fadeInUp" data-wow-delay=".4s" data-v-ab9284c4><span class="dot" data-v-ab9284c4></span><span class="dot" data-v-ab9284c4></span><span class="dot" data-v-ab9284c4></span>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    target: "_blank",
    to: "/homepage/home5-light"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="img" data-v-ab9284c4${_scopeId}><img${ssrRenderAttr("src", _imports_11$1)} alt="image" data-v-ab9284c4${_scopeId}></div><div class="cont" data-v-ab9284c4${_scopeId}><h6 data-v-ab9284c4${_scopeId}>Digital Agency</h6></div>`);
      } else {
        return [
          createVNode("div", { class: "img" }, [
            createVNode("img", {
              src: _imports_11$1,
              alt: "image"
            })
          ]),
          createVNode("div", { class: "cont" }, [
            createVNode("h6", null, "Digital Agency")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div class="gallery full-width" data-v-ab9284c4><div class="col-lg-3 col-md-6 items" data-v-ab9284c4><div class="item-img wow fadeInUp" data-wow-delay=".4s" data-v-ab9284c4><span class="dot" data-v-ab9284c4></span><span class="dot" data-v-ab9284c4></span><span class="dot" data-v-ab9284c4></span>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    target: "_blank",
    to: "/homepage/home3-dark"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="img" data-v-ab9284c4${_scopeId}><img${ssrRenderAttr("src", _imports_12)} alt="image" data-v-ab9284c4${_scopeId}></div><div class="cont" data-v-ab9284c4${_scopeId}><h6 data-v-ab9284c4${_scopeId}>Corporate Business</h6></div>`);
      } else {
        return [
          createVNode("div", { class: "img" }, [
            createVNode("img", {
              src: _imports_12,
              alt: "image"
            })
          ]),
          createVNode("div", { class: "cont" }, [
            createVNode("h6", null, "Corporate Business")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="col-lg-3 col-md-6 items" data-v-ab9284c4><div class="item-img wow fadeInUp" data-wow-delay=".4s" data-v-ab9284c4><span class="dot" data-v-ab9284c4></span><span class="dot" data-v-ab9284c4></span><span class="dot" data-v-ab9284c4></span>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    target: "_blank",
    to: "/homepage/home3-light"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="img" data-v-ab9284c4${_scopeId}><img${ssrRenderAttr("src", _imports_13)} alt="image" data-v-ab9284c4${_scopeId}></div><div class="cont" data-v-ab9284c4${_scopeId}><h6 data-v-ab9284c4${_scopeId}>Corporate Business</h6></div>`);
      } else {
        return [
          createVNode("div", { class: "img" }, [
            createVNode("img", {
              src: _imports_13,
              alt: "image"
            })
          ]),
          createVNode("div", { class: "cont" }, [
            createVNode("h6", null, "Corporate Business")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="col-lg-3 col-md-6 items" data-v-ab9284c4><div class="item-img wow fadeInUp" data-wow-delay=".4s" data-v-ab9284c4><span class="dot" data-v-ab9284c4></span><span class="dot" data-v-ab9284c4></span><span class="dot" data-v-ab9284c4></span>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    target: "_blank",
    to: "/homepage/home6-dark"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="img" data-v-ab9284c4${_scopeId}><img${ssrRenderAttr("src", _imports_14)} alt="image" data-v-ab9284c4${_scopeId}></div><div class="cont" data-v-ab9284c4${_scopeId}><h6 data-v-ab9284c4${_scopeId}>Modern Agency</h6></div>`);
      } else {
        return [
          createVNode("div", { class: "img" }, [
            createVNode("img", {
              src: _imports_14,
              alt: "image"
            })
          ]),
          createVNode("div", { class: "cont" }, [
            createVNode("h6", null, "Modern Agency")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="col-lg-3 col-md-6 items" data-v-ab9284c4><div class="item-img wow fadeInUp" data-wow-delay=".4s" data-v-ab9284c4><span class="dot" data-v-ab9284c4></span><span class="dot" data-v-ab9284c4></span><span class="dot" data-v-ab9284c4></span>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    target: "_blank",
    to: "/homepage/home6-light"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="img" data-v-ab9284c4${_scopeId}><img${ssrRenderAttr("src", _imports_15)} alt="image" data-v-ab9284c4${_scopeId}></div><div class="cont" data-v-ab9284c4${_scopeId}><h6 data-v-ab9284c4${_scopeId}>Modern Agency</h6></div>`);
      } else {
        return [
          createVNode("div", { class: "img" }, [
            createVNode("img", {
              src: _imports_15,
              alt: "image"
            })
          ]),
          createVNode("div", { class: "cont" }, [
            createVNode("h6", null, "Modern Agency")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="col-lg-3 col-md-6 items" data-v-ab9284c4><div class="item-img wow fadeInUp" data-wow-delay=".4s" data-v-ab9284c4><span class="dot" data-v-ab9284c4></span><span class="dot" data-v-ab9284c4></span><span class="dot" data-v-ab9284c4></span>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    target: "_blank",
    to: "/homepage/home4-dark"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="img" data-v-ab9284c4${_scopeId}><img${ssrRenderAttr("src", _imports_16)} alt="image" data-v-ab9284c4${_scopeId}></div><div class="cont" data-v-ab9284c4${_scopeId}><h6 data-v-ab9284c4${_scopeId}>Business One Page</h6></div>`);
      } else {
        return [
          createVNode("div", { class: "img" }, [
            createVNode("img", {
              src: _imports_16,
              alt: "image"
            })
          ]),
          createVNode("div", { class: "cont" }, [
            createVNode("h6", null, "Business One Page")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="col-lg-3 col-md-6 items" data-v-ab9284c4><div class="item-img wow fadeInUp" data-wow-delay=".4s" data-v-ab9284c4><span class="dot" data-v-ab9284c4></span><span class="dot" data-v-ab9284c4></span><span class="dot" data-v-ab9284c4></span>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    target: "_blank",
    to: "/homepage/home4-light"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="img" data-v-ab9284c4${_scopeId}><img${ssrRenderAttr("src", _imports_17)} alt="image" data-v-ab9284c4${_scopeId}></div><div class="cont" data-v-ab9284c4${_scopeId}><h6 data-v-ab9284c4${_scopeId}>Business One Page</h6></div>`);
      } else {
        return [
          createVNode("div", { class: "img" }, [
            createVNode("img", {
              src: _imports_17,
              alt: "image"
            })
          ]),
          createVNode("div", { class: "cont" }, [
            createVNode("h6", null, "Business One Page")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="col-lg-3 col-md-6 items" data-v-ab9284c4><div class="item-img wow fadeInUp" data-wow-delay=".4s" data-v-ab9284c4><span class="dot" data-v-ab9284c4></span><span class="dot" data-v-ab9284c4></span><span class="dot" data-v-ab9284c4></span><div class="img" data-v-ab9284c4><img${ssrRenderAttr("src", _imports_18)} alt="image" data-v-ab9284c4></div><div class="cont" data-v-ab9284c4><h6 data-v-ab9284c4>Restaurant</h6><div class="sta coming" data-v-ab9284c4><span data-v-ab9284c4>Coming Soon</span></div></div></div></div><div class="col-lg-3 col-md-6 items" data-v-ab9284c4><div class="item-img wow fadeInUp" data-wow-delay=".4s" data-v-ab9284c4><span class="dot" data-v-ab9284c4></span><span class="dot" data-v-ab9284c4></span><span class="dot" data-v-ab9284c4></span><div class="img" data-v-ab9284c4><img${ssrRenderAttr("src", _imports_19)} alt="image" data-v-ab9284c4></div><div class="cont" data-v-ab9284c4><h6 data-v-ab9284c4>Multipurpose</h6><div class="sta coming" data-v-ab9284c4><span data-v-ab9284c4>Coming Soon</span></div></div></div></div></div></div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Demos/Pages.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Pages = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-ab9284c4"]]);
const _imports_0 = "" + publicAssetsURL("demo-img/s1.png");
const _imports_1 = "" + publicAssetsURL("demo-img/s01.png");
const _imports_2 = "" + publicAssetsURL("demo-img/s2.png");
const _imports_3 = "" + publicAssetsURL("demo-img/s02.png");
const _imports_4 = "" + publicAssetsURL("demo-img/s3.png");
const _imports_5 = "" + publicAssetsURL("demo-img/s03.png");
const _imports_6 = "" + publicAssetsURL("demo-img/w1.png");
const _imports_7 = "" + publicAssetsURL("demo-img/w01.png");
const _imports_8 = "" + publicAssetsURL("demo-img/w2.png");
const _imports_9 = "" + publicAssetsURL("demo-img/w02.png");
const _imports_10 = "" + publicAssetsURL("demo-img/w3.png");
const _imports_11 = "" + publicAssetsURL("demo-img/w03.png");
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "masonery section-padding position-re" }, _attrs))} data-v-a7a28d9b><div class="container" data-v-a7a28d9b><div class="row justify-content-center" data-v-a7a28d9b><div class="col-lg-8 col-md-10" data-v-a7a28d9b><div class="sec-head text-center" data-v-a7a28d9b><h3 class="color-font" data-v-a7a28d9b>Showcases</h3></div></div></div></div><div class="container-fluid" data-v-a7a28d9b><div class="row" data-v-a7a28d9b><div class="gallery full-width" data-v-a7a28d9b><div class="col-lg-3 col-md-6 items" data-v-a7a28d9b><div class="item-img wow fadeInUp" data-wow-delay=".4s" data-v-a7a28d9b><span class="dot" data-v-a7a28d9b></span><span class="dot" data-v-a7a28d9b></span><span class="dot" data-v-a7a28d9b></span>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    target: "_blank",
    to: "/showcase/showcase-dark"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="img" data-v-a7a28d9b${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="image" data-v-a7a28d9b${_scopeId}></div><div class="cont" data-v-a7a28d9b${_scopeId}><h6 data-v-a7a28d9b${_scopeId}>Full Screen</h6></div>`);
      } else {
        return [
          createVNode("div", { class: "img" }, [
            createVNode("img", {
              src: _imports_0,
              alt: "image"
            })
          ]),
          createVNode("div", { class: "cont" }, [
            createVNode("h6", null, "Full Screen")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="col-lg-3 col-md-6 items" data-v-a7a28d9b><div class="item-img wow fadeInUp" data-wow-delay=".4s" data-v-a7a28d9b><span class="dot" data-v-a7a28d9b></span><span class="dot" data-v-a7a28d9b></span><span class="dot" data-v-a7a28d9b></span>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    target: "_blank",
    to: "/showcase/showcase-light"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="img" data-v-a7a28d9b${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="image" data-v-a7a28d9b${_scopeId}></div><div class="cont" data-v-a7a28d9b${_scopeId}><h6 data-v-a7a28d9b${_scopeId}>Full Screen</h6></div>`);
      } else {
        return [
          createVNode("div", { class: "img" }, [
            createVNode("img", {
              src: _imports_1,
              alt: "image"
            })
          ]),
          createVNode("div", { class: "cont" }, [
            createVNode("h6", null, "Full Screen")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="col-lg-3 col-md-6 items" data-v-a7a28d9b><div class="item-img wow fadeInUp" data-wow-delay=".4s" data-v-a7a28d9b><span class="dot" data-v-a7a28d9b></span><span class="dot" data-v-a7a28d9b></span><span class="dot" data-v-a7a28d9b></span>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    target: "_blank",
    to: "/showcase3/showcase3-dark"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="img" data-v-a7a28d9b${_scopeId}><img${ssrRenderAttr("src", _imports_2)} alt="image" data-v-a7a28d9b${_scopeId}></div><div class="cont" data-v-a7a28d9b${_scopeId}><h6 data-v-a7a28d9b${_scopeId}>Showcase Carousel</h6></div>`);
      } else {
        return [
          createVNode("div", { class: "img" }, [
            createVNode("img", {
              src: _imports_2,
              alt: "image"
            })
          ]),
          createVNode("div", { class: "cont" }, [
            createVNode("h6", null, "Showcase Carousel")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="col-lg-3 col-md-6 items" data-v-a7a28d9b><div class="item-img wow fadeInUp" data-wow-delay=".4s" data-v-a7a28d9b><span class="dot" data-v-a7a28d9b></span><span class="dot" data-v-a7a28d9b></span><span class="dot" data-v-a7a28d9b></span>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    target: "_blank",
    to: "/showcase3/showcase3-light"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="img" data-v-a7a28d9b${_scopeId}><img${ssrRenderAttr("src", _imports_3)} alt="image" data-v-a7a28d9b${_scopeId}></div><div class="cont" data-v-a7a28d9b${_scopeId}><h6 data-v-a7a28d9b${_scopeId}>Showcase Carousel</h6></div>`);
      } else {
        return [
          createVNode("div", { class: "img" }, [
            createVNode("img", {
              src: _imports_3,
              alt: "image"
            })
          ]),
          createVNode("div", { class: "cont" }, [
            createVNode("h6", null, "Showcase Carousel")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="col-lg-3 col-md-6 items" data-v-a7a28d9b><div class="item-img wow fadeInUp" data-wow-delay=".4s" data-v-a7a28d9b><span class="dot" data-v-a7a28d9b></span><span class="dot" data-v-a7a28d9b></span><span class="dot" data-v-a7a28d9b></span>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    target: "_blank",
    to: "/showcase2/showcase2-dark"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="img" data-v-a7a28d9b${_scopeId}><img${ssrRenderAttr("src", _imports_4)} alt="image" data-v-a7a28d9b${_scopeId}></div><div class="cont" data-v-a7a28d9b${_scopeId}><h6 data-v-a7a28d9b${_scopeId}>Showcase Circle</h6></div>`);
      } else {
        return [
          createVNode("div", { class: "img" }, [
            createVNode("img", {
              src: _imports_4,
              alt: "image"
            })
          ]),
          createVNode("div", { class: "cont" }, [
            createVNode("h6", null, "Showcase Circle")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="col-lg-3 col-md-6 items" data-v-a7a28d9b><div class="item-img wow fadeInUp" data-wow-delay=".4s" data-v-a7a28d9b><span class="dot" data-v-a7a28d9b></span><span class="dot" data-v-a7a28d9b></span><span class="dot" data-v-a7a28d9b></span>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    target: "_blank",
    to: "/showcase2/showcase2-light"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="img" data-v-a7a28d9b${_scopeId}><img${ssrRenderAttr("src", _imports_5)} alt="image" data-v-a7a28d9b${_scopeId}></div><div class="cont" data-v-a7a28d9b${_scopeId}><h6 data-v-a7a28d9b${_scopeId}>Showcase Circle</h6></div>`);
      } else {
        return [
          createVNode("div", { class: "img" }, [
            createVNode("img", {
              src: _imports_5,
              alt: "image"
            })
          ]),
          createVNode("div", { class: "cont" }, [
            createVNode("h6", null, "Showcase Circle")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="col-lg-3 col-md-6 items" data-v-a7a28d9b><div class="item-img wow fadeInUp" data-wow-delay=".4s" data-v-a7a28d9b><span class="dot" data-v-a7a28d9b></span><span class="dot" data-v-a7a28d9b></span><span class="dot" data-v-a7a28d9b></span>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    target: "_blank",
    to: "/works/works-dark"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="img" data-v-a7a28d9b${_scopeId}><img${ssrRenderAttr("src", _imports_6)} alt="image" data-v-a7a28d9b${_scopeId}></div><div class="cont" data-v-a7a28d9b${_scopeId}><h6 data-v-a7a28d9b${_scopeId}>Works 3 column</h6></div>`);
      } else {
        return [
          createVNode("div", { class: "img" }, [
            createVNode("img", {
              src: _imports_6,
              alt: "image"
            })
          ]),
          createVNode("div", { class: "cont" }, [
            createVNode("h6", null, "Works 3 column")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="col-lg-3 col-md-6 items" data-v-a7a28d9b><div class="item-img wow fadeInUp" data-wow-delay=".4s" data-v-a7a28d9b><span class="dot" data-v-a7a28d9b></span><span class="dot" data-v-a7a28d9b></span><span class="dot" data-v-a7a28d9b></span>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    target: "_blank",
    to: "/works/works-light"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="img" data-v-a7a28d9b${_scopeId}><img${ssrRenderAttr("src", _imports_7)} alt="image" data-v-a7a28d9b${_scopeId}></div><div class="cont" data-v-a7a28d9b${_scopeId}><h6 data-v-a7a28d9b${_scopeId}>Works 3 column</h6></div>`);
      } else {
        return [
          createVNode("div", { class: "img" }, [
            createVNode("img", {
              src: _imports_7,
              alt: "image"
            })
          ]),
          createVNode("div", { class: "cont" }, [
            createVNode("h6", null, "Works 3 column")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="col-lg-3 col-md-6 items" data-v-a7a28d9b><div class="item-img wow fadeInUp" data-wow-delay=".4s" data-v-a7a28d9b><span class="dot" data-v-a7a28d9b></span><span class="dot" data-v-a7a28d9b></span><span class="dot" data-v-a7a28d9b></span>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    target: "_blank",
    to: "/works2/works2-dark"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="img" data-v-a7a28d9b${_scopeId}><img${ssrRenderAttr("src", _imports_8)} alt="image" data-v-a7a28d9b${_scopeId}></div><div class="cont" data-v-a7a28d9b${_scopeId}><h6 data-v-a7a28d9b${_scopeId}>Works Filtering</h6></div>`);
      } else {
        return [
          createVNode("div", { class: "img" }, [
            createVNode("img", {
              src: _imports_8,
              alt: "image"
            })
          ]),
          createVNode("div", { class: "cont" }, [
            createVNode("h6", null, "Works Filtering")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="col-lg-3 col-md-6 items" data-v-a7a28d9b><div class="item-img wow fadeInUp" data-wow-delay=".4s" data-v-a7a28d9b><span class="dot" data-v-a7a28d9b></span><span class="dot" data-v-a7a28d9b></span><span class="dot" data-v-a7a28d9b></span>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    target: "_blank",
    to: "/works2/works2-light"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="img" data-v-a7a28d9b${_scopeId}><img${ssrRenderAttr("src", _imports_9)} alt="image" data-v-a7a28d9b${_scopeId}></div><div class="cont" data-v-a7a28d9b${_scopeId}><h6 data-v-a7a28d9b${_scopeId}>Works Filtering</h6></div>`);
      } else {
        return [
          createVNode("div", { class: "img" }, [
            createVNode("img", {
              src: _imports_9,
              alt: "image"
            })
          ]),
          createVNode("div", { class: "cont" }, [
            createVNode("h6", null, "Works Filtering")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="col-lg-3 col-md-6 items" data-v-a7a28d9b><div class="item-img wow fadeInUp" data-wow-delay=".4s" data-v-a7a28d9b><span class="dot" data-v-a7a28d9b></span><span class="dot" data-v-a7a28d9b></span><span class="dot" data-v-a7a28d9b></span>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    target: "_blank",
    to: "/works3/works3-dark"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="img" data-v-a7a28d9b${_scopeId}><img${ssrRenderAttr("src", _imports_10)} alt="image" data-v-a7a28d9b${_scopeId}></div><div class="cont" data-v-a7a28d9b${_scopeId}><h6 data-v-a7a28d9b${_scopeId}>Works Gallery</h6></div>`);
      } else {
        return [
          createVNode("div", { class: "img" }, [
            createVNode("img", {
              src: _imports_10,
              alt: "image"
            })
          ]),
          createVNode("div", { class: "cont" }, [
            createVNode("h6", null, "Works Gallery")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="col-lg-3 col-md-6 items" data-v-a7a28d9b><div class="item-img wow fadeInUp" data-wow-delay=".4s" data-v-a7a28d9b><span class="dot" data-v-a7a28d9b></span><span class="dot" data-v-a7a28d9b></span><span class="dot" data-v-a7a28d9b></span>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    target: "_blank",
    to: "/works3/works3-light"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="img" data-v-a7a28d9b${_scopeId}><img${ssrRenderAttr("src", _imports_11)} alt="image" data-v-a7a28d9b${_scopeId}></div><div class="cont" data-v-a7a28d9b${_scopeId}><h6 data-v-a7a28d9b${_scopeId}>Works Gallery</h6></div>`);
      } else {
        return [
          createVNode("div", { class: "img" }, [
            createVNode("img", {
              src: _imports_11,
              alt: "image"
            })
          ]),
          createVNode("div", { class: "cont" }, [
            createVNode("h6", null, "Works Gallery")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div><div class="line top left" data-v-a7a28d9b></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Demos/Showcases.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Showcases = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-a7a28d9b"]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "services bords lficon section-padding position-re" }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-lg-9 col-md-12"><div class="sec-head text-center"><h6 class="wow fadeIn" data-wow-delay=".5s">Best Features</h6><h3 class="wow color-font"> Creative Agency, Corporate and Portfolio Template </h3></div></div></div><div class="row"><div class="col-lg-6 wow fadeInLeft" data-wow-delay=".5s"><div class="item-box"><div><span class="icon pe-7s-paint-bucket"></span></div><div class="cont"><h6>UI/UX Design</h6><p> We provide the best design by following the latest trends. </p></div></div></div><div class="col-lg-6 wow fadeInLeft" data-wow-delay=".7s"><div class="item-box"><div><span class="icon pe-7s-phone"></span></div><div class="cont"><h6>Easily Customizable</h6><p>Build and customize stunning pages in minutes.</p></div></div></div><div class="col-lg-6 wow fadeInLeft" data-wow-delay=".9s"><div class="item-box"><div><span class="icon pe-7s-display1"></span></div><div class="cont"><h6>One / Multi Page</h6><p>Choose the layout style that fits your need.</p></div></div></div><div class="col-lg-6 wow fadeInLeft" data-wow-delay=".5s"><div class="item-box"><div><span class="icon pe-7s-diskette"></span></div><div class="cont"><h6>24/7 Support</h6><p>We commit to keep your site up-to-date.</p></div></div></div></div></div><div class="line top right"></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Demos/Services.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Services = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "call-action section-padding bg-img",
    style: { backgroundImage: `url(/img/patrn.svg)` }
  }, _attrs))}><div class="container"><div class="row"><div class="col-md-8 col-lg-9"><div class="content sm-mb30"><h6 class="wow words chars splitting" data-splitting> Purchase The Vie </h6><h2 class="wow words chars splitting" data-splitting> and Make <br><b class="back-color">Your Life Easier</b>. </h2></div></div><div class="col-md-4 col-lg-3 valign">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "#",
    class: "butn bord curve wow fadeInUp",
    "data-wow-delay": ".5s"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Purchase Now</span>`);
      } else {
        return [
          createVNode("span", null, "Purchase Now")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Demos/CallToAction.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const CallToAction = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "MainContent",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-content section-padding pb-0" }, _attrs))} data-v-e648966b>`);
      _push(ssrRenderComponent(Pages, null, null, _parent));
      _push(ssrRenderComponent(Showcases, null, null, _parent));
      _push(ssrRenderComponent(Services, null, null, _parent));
      _push(ssrRenderComponent(CallToAction, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Demos/MainContent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-e648966b"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      titleTemplate: `%s - Demos`
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonLoading = __nuxt_component_0;
      const _component_DemosCircleBg = __nuxt_component_1;
      const _component_DemosHeader = __nuxt_component_2;
      const _component_DemosMainContent = __nuxt_component_3;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_CommonLoading, null, null, _parent));
      _push(ssrRenderComponent(_component_DemosCircleBg, null, null, _parent));
      _push(ssrRenderComponent(_component_DemosHeader, null, null, _parent));
      _push(ssrRenderComponent(_component_DemosMainContent, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-f67c900d.mjs.map
