import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0 } from './client-only-29ef7f45.mjs';
import { mergeProps, useSSRContext, unref, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { f as featuresData } from './features-1bf70970.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-afaf4e47.mjs';
import { _ as _imports_0$2 } from './4-f91bac2f.mjs';

const _imports_0$1 = "" + publicAssetsURL("img/hero.jpg");
const _sfc_main$3 = {
  __name: "FreelanceHeader",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "freelancre valign" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-4"><div class="img"><img${ssrRenderAttr("src", _imports_0$1)} alt=""></div></div><div class="col-lg-8 valign"><div class="cont"><h1 class="cd-headline clip"> Hello, My name is hisham i love design and i hope to make awesome designs and also i create a <span class="cd-words-wrapper">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</span></h1></div></div></div><div class="states"><div class="container"><ul class="flex"><li class="flex"><div class="numb valign"><h3>12</h3></div><div class="text valign"><p> Years <br> Of Experience </p></div></li><li class="flex"><div class="numb valign"><h3>165</h3></div><div class="text valign"><p> Projects Completed <br> In 19 Countries </p></div></li><li class="mail-us"><a href="mailto:your@email.com?subject=Subject"><div class="flex"><div class="text valign"><div class="full-width"><p>Get In Touch</p><h6>Vie_Support@Gmail.Com</h6></div></div><div class="mail-icon"><div class="icon-box"><span class="icon color-font pe-7s-mail"></span></div></div></div></a></li></ul></div></div></div><div class="line bottom left"></div></header>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Headers/FreelanceHeader.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "Services5",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "services box lficon section-padding position-re" }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-lg-8 col-md-10"><div class="sec-head text-center"><h6 class="wow fadeIn" data-wow-delay=".5s">Best Features</h6><h3 class="wow color-font"> We are a new digital product development agency </h3></div></div></div><div class="row"><!--[-->`);
      ssrRenderList(unref(featuresData), (item, index) => {
        _push(`<div class="col-lg-6 wow fadeInLeft"${ssrRenderAttr(
          "data-wow-delay",
          index == 0 ? ".5s" : index == 1 ? ".7s" : index === 2 ? ".9s" : ".5s"
        )}><div class="item-box no-curve"><div><span class="${ssrRenderClass(`icon color-font ${item.icon}`)}"></span></div><div class="cont"><h6>${ssrInterpolate(item.title)}</h6><p>${ssrInterpolate(item.content)}</p></div></div></div>`);
      });
      _push(`<!--]--></div></div><div class="line bottom right"></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Services/Services5.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _imports_0 = "" + publicAssetsURL("img/portfolio/freelancer/1.jpg");
const _imports_1 = "" + publicAssetsURL("img/portfolio/freelancer/2.jpg");
const _imports_2 = "" + publicAssetsURL("img/portfolio/freelancer/3.jpg");
const _imports_3 = "" + publicAssetsURL("img/portfolio/freelancer/4.jpg");
const _imports_4 = "" + publicAssetsURL("img/portfolio/freelancer/5.jpg");
const _imports_5 = "" + publicAssetsURL("img/portfolio/freelancer/6.jpg");
const _sfc_main$1 = {
  __name: "Works5",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "portfolio-frl section-padding pb-70" }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-lg-8 col-md-10"><div class="sec-head text-center"><h6 class="wow fadeIn" data-wow-delay=".5s">Portfolio</h6><h3 class="wow color-font"> Our Recent Web Design &amp; <br> Some Past Projects. </h3></div></div></div></div><div class="container"><div class="row"><div class="filtering col-12"><div class="filter wow fadeIn" data-wow-delay=".5s"><span data-filter="*" class="active"> All </span><span data-filter=".brand">Branding</span><span data-filter=".web">Mobile App</span><span data-filter=".graphic">Creative</span></div></div><div class="gallery full-width"><div class="col-md-6 items graphic lg-mr wow fadeInUp" data-wow-delay=".4s"><div class="item-img"><div class="cont"><h6>Creative Mobile App</h6><p>Ui / Ux creative mobile app design</p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "rota",
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
      _push(`<div class="tags"><span>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`App`);
          } else {
            return [
              createTextVNode("App")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span><span>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Fitnes`);
          } else {
            return [
              createTextVNode("Fitnes")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span><span>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Creative`);
          } else {
            return [
              createTextVNode("Creative")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span></div></div></div><div class="col-md-6 items web wow fadeInUp" data-wow-delay=".4s"><div class="item-img"><div class="cont"><h6>Creative Mobile App</h6><p>Ui / Ux creative mobile app design</p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "rota",
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
      _push(`<div class="tags"><span>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`App`);
          } else {
            return [
              createTextVNode("App")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span><span>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Fitnes`);
          } else {
            return [
              createTextVNode("Fitnes")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span><span>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Creative`);
          } else {
            return [
              createTextVNode("Creative")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span></div></div></div><div class="col-md-6 items web wow fadeInUp" data-wow-delay=".4s"><div class="item-img"><div class="cont"><h6>Creative Mobile App</h6><p>Ui / Ux creative mobile app design</p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "rota",
        to: "/project-details2/project-details2-dark"
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
      _push(`<div class="tags"><span>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`App`);
          } else {
            return [
              createTextVNode("App")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span><span>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Fitnes`);
          } else {
            return [
              createTextVNode("Fitnes")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span><span>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Creative`);
          } else {
            return [
              createTextVNode("Creative")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span></div></div></div><div class="col-md-6 items web graphic wow fadeInUp" data-wow-delay=".4s"><div class="item-img"><div class="cont"><h6>Creative Mobile App</h6><p>Ui / Ux creative mobile app design</p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "rota",
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
      _push(`<div class="tags"><span>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`App`);
          } else {
            return [
              createTextVNode("App")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span><span>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Fitnes`);
          } else {
            return [
              createTextVNode("Fitnes")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span><span>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Creative`);
          } else {
            return [
              createTextVNode("Creative")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span></div></div></div><div class="col-md-6 items brand wow fadeInUp" data-wow-delay=".4s"><div class="item-img"><div class="cont"><h6>Creative Mobile App</h6><p>Ui / Ux creative mobile app design</p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "rota",
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
      _push(`<div class="tags"><span>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`App`);
          } else {
            return [
              createTextVNode("App")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span><span>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Fitnes`);
          } else {
            return [
              createTextVNode("Fitnes")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span><span>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Creative`);
          } else {
            return [
              createTextVNode("Creative")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span></div></div></div><div class="col-md-6 items brand wow fadeInUp" data-wow-delay=".4s"><div class="item-img"><div class="cont"><h6>Creative Mobile App</h6><p>Ui / Ux creative mobile app design</p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "rota",
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
      _push(`<div class="tags"><span>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`App`);
          } else {
            return [
              createTextVNode("App")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span><span>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Fitnes`);
          } else {
            return [
              createTextVNode("Fitnes")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span><span>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Creative`);
          } else {
            return [
              createTextVNode("Creative")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Works/Works5.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "AboutUs5",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "about-cr" }, _attrs))}><div class="container-fluid"><div class="row"><div class="col-lg-6 img md-mb50"><img${ssrRenderAttr("src", _imports_0$2)} alt=""></div><div class="col-lg-5 valign"><div class="cont full-width"><h3 class="color-font">UI / UX Designer</h3><h5 class="co-tit mb-15">We help to create visual strategies.</h5><p> We are Vie. We create award-winning websites, remarkable brands and cutting-edge apps.Nullam imperdie. </p><div class="skills-box mt-40"><div class="skill-item"><h5 class="fz-14 mb-15">UI / UX Design</h5><div class="skill-progress"><div class="progres" data-value="90%"></div></div></div><div class="skill-item"><h5 class="fz-14 mb-15">Apps Development</h5><div class="skill-progress"><div class="progres" data-value="80%"></div></div></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AboutUs/AboutUs5.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$3 as _, _sfc_main$2 as a, _sfc_main$1 as b, _sfc_main as c };
//# sourceMappingURL=AboutUs5-14be59dc.mjs.map
