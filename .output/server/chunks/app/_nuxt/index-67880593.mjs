import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { mergeProps, unref, useSSRContext, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createTextVNode, ref } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-afaf4e47.mjs';
import { b as _imports_0$1, c as _imports_1$1 } from './index-4b4e7282.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper';
import { M as ModalVideo } from './ModalVideo-db24fbd8.mjs';

const image$1 = "/mobile-app/img/header-img.png";
const title = "Let\u2019s Build Amazing Mobile Apps Together";
const descripition = "Sit amet consectetur adipiscing elit, sed do eiusmod tempor idunte ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan";
const headerData = {
  image: image$1,
  title,
  descripition
};
const _sfc_main$b = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "mobile-app valign" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-6 valign"><div class="caption"><h1 class="mb-20">${ssrInterpolate(unref(headerData).title)}</h1><p>${ssrInterpolate(unref(headerData).descripition)}</p><div class="butons mt-40"><a href="#0" class="butn-gr rounded buton"><span>Apple Store</span><i class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg></i></a><a href="#0" class="butn-bord-dark rounded buton"><span>Google Play</span><i class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg></i></a></div></div></div><div class="col-lg-5 offset-lg-1"><div class="img"><img${ssrRenderAttr("src", unref(headerData).image)} alt=""></div></div></div></div></header>`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Mobile-app/Header/index.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const image = "/mobile-app/img/shapes/border.png";
const brands = [
  {
    id: 1,
    image: "/mobile-app/img/brands/l1.png"
  },
  {
    id: 2,
    image: "/mobile-app/img/brands/l2.png"
  },
  {
    id: 3,
    image: "/mobile-app/img/brands/l3.png"
  },
  {
    id: 4,
    image: "/mobile-app/img/brands/l4.png"
  },
  {
    id: 5,
    image: "/mobile-app/img/brands/l5.png"
  },
  {
    id: 6,
    image: "/mobile-app/img/brands/l5.png"
  },
  {
    id: 7,
    image: "/mobile-app/img/brands/l4.png"
  },
  {
    id: 8,
    image: "/mobile-app/img/brands/l3.png"
  },
  {
    id: 9,
    image: "/mobile-app/img/brands/l2.png"
  },
  {
    id: 10,
    image: "/mobile-app/img/brands/l1.png"
  }
];
const brands$1 = {
  image,
  brands
};
const _sfc_main$a = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "brands pt-80 pb-80 bg-dark",
        "data-overlay-dark": "0"
      }, _attrs))}><div class="container"><div class="head mb-60 text-center"><div class="row justify-content-center"><div class="col-lg-6 col-md-9"><div class="text"><h2>We\u2019ve <span>154+ <img${ssrRenderAttr("src", unref(brands$1).image)} alt="" class="bord-gr"></span> Global Partners</h2><span class="mt-10">Professional Design Agency to provide solutions</span></div></div></div></div><div class="row"><!--[-->`);
      ssrRenderList(unref(brands$1).brands, (brand, index) => {
        _push(`<!--[-->`);
        if (index < 5) {
          _push(`<div class="${ssrRenderClass(`col-lg ${index !== 4 ? "col-sm-3" : "lg-hide"}`)}"><div class="item"><div class="img">`);
          _push(ssrRenderComponent(_component_NuxtLink, { to: "#0" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<img${ssrRenderAttr("src", brand.image)} alt="" class="front"${_scopeId}><img${ssrRenderAttr("src", brand.image)} alt="" class="back"${_scopeId}>`);
              } else {
                return [
                  createVNode("img", {
                    src: brand.image,
                    alt: "",
                    class: "front"
                  }, null, 8, ["src"]),
                  createVNode("img", {
                    src: brand.image,
                    alt: "",
                    class: "back"
                  }, null, 8, ["src"])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div><div class="row lg-hide"><!--[-->`);
      ssrRenderList(unref(brands$1).brands, (brand, index) => {
        _push(`<!--[-->`);
        if (index >= 5) {
          _push(`<div class="col-lg"><div class="item"><div class="img">`);
          _push(ssrRenderComponent(_component_NuxtLink, { to: "#0" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<img${ssrRenderAttr("src", brand.image)} alt="" class="front"${_scopeId}><img${ssrRenderAttr("src", brand.image)} alt="" class="back"${_scopeId}>`);
              } else {
                return [
                  createVNode("img", {
                    src: brand.image,
                    alt: "",
                    class: "front"
                  }, null, 8, ["src"]),
                  createVNode("img", {
                    src: brand.image,
                    alt: "",
                    class: "back"
                  }, null, 8, ["src"])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div></div><div class="circle-blur"></div></section>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Mobile-app/Brands/index.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _imports_0 = "" + publicAssetsURL("mobile-app/img/app-img/s1-light.png");
const _imports_1 = "" + publicAssetsURL("mobile-app/img/app-img/s1.png");
const _sfc_main$9 = {
  __name: "section-left",
  __ssrInlineRender: true,
  props: ["theme"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "row" }, _attrs))}><div class="col-lg-5"><div class="serv-img md-mb50">`);
      if (__props.theme === "light") {
        _push(`<img${ssrRenderAttr("src", _imports_0)} alt="">`);
      } else {
        _push(`<img${ssrRenderAttr("src", _imports_1)} alt="">`);
      }
      _push(`</div></div><div class="col-lg-6 offset-lg-1 valign"><div class="content"><h6 class="stit mb-30"><span class="left"></span> Custimize Application</h6><h2 class="mb-30">We Tackle Your Most Ambitious Goals</h2><p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accus antium doloremque laudantium, totam rem aperiam, eaque ipsa quae abillo inventore veritatis et quasi architecto beatae vitae dicta ecabo. Nemo enim ipsam voluptatem quia voluptas aspernatur </p><div class="butons mt-40"><a href="#0" class="butn-gr rounded buton"><span>Get Free 7 Days Trial</span><i class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg></i></a><a href="#0" class="butn-more"><span>Read More</span><i class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path></svg></i></a></div><div class="list-feat mt-40"><ul><li class="mb-20"><i class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"></path></svg></i> Unique Design &amp; Development</li><li class="mb-20"><i class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"></path></svg></i> Experience Team Members</li><li><i class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"></path></svg></i> Powerfull Applications</li></ul></div></div></div></div>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Mobile-app/Services/section-left.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "section-right",
  __ssrInlineRender: true,
  props: ["theme"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "row mt-80" }, _attrs))}><div class="col-lg-6 valign"><div class="content md-mb50"><h6 class="stit mb-30"><span class="left"></span> Core Features</h6><h2 class="mb-30"> Links, Content &amp; Community. One Online Homepages. Save and Organise Ideas </h2><p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accus antium doloremque laudantium, totam rem aperiam, eaque ipsa quae abillo inventore veritatis et quasi architecto beatae vitae dicta ecabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos </p><div class="butons mt-40"><a href="#0" class="butn-bord-red rounded buton"><span>Get Free 7 Days Trial</span><i class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg></i></a><a href="#0" class="butn-more"><span>Read More</span><i class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path></svg></i></a></div></div></div><div class="col-lg-5 offset-lg-1"><div class="serv-img">`);
      if (__props.theme === "light") {
        _push(`<img${ssrRenderAttr("src", _imports_0$1)} alt="">`);
      } else {
        _push(`<img${ssrRenderAttr("src", _imports_1$1)} alt="">`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Mobile-app/Services/section-right.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "index",
  __ssrInlineRender: true,
  props: ["theme"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "serv-block section-padding" }, _attrs))}><div class="container">`);
      _push(ssrRenderComponent(unref(_sfc_main$9), { theme: __props.theme }, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$8), { theme: __props.theme }, null, _parent));
      _push(`</div><div class="circle-blur"></div><div class="circle-blur two"></div></section>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Mobile-app/Services/index.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const screenshots = [
  "/mobile-app/img/screenshots/1.png",
  "/mobile-app/img/screenshots/2.png",
  "/mobile-app/img/screenshots/3.png",
  "/mobile-app/img/screenshots/4.png",
  "/mobile-app/img/screenshots/5.png",
  "/mobile-app/img/screenshots/3.png"
];
const _sfc_main$6 = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const swiperOptions = {
      modules: [Pagination],
      speed: 1e3,
      spaceBetween: 30,
      loop: true,
      parallax: false,
      slidesPerView: 5,
      dots: true,
      pagination: {
        type: "bullets",
        clickable: true,
        el: ".secreen-shots .swiper-pagination"
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        640: {
          slidesPerView: 2
        },
        767: {
          slidesPerView: 3,
          centeredSlides: false
        },
        991: {
          slidesPerView: 5
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "secreen-shots section-padding" }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-lg-7 col-md-10"><div class="s-head text-center mb-80"><h6 class="stit mb-30"><span class="left"></span> Apps Screenshot <span class="Right"></span></h6><h2>Amazing Designer Create Our Application Let\u2019s See</h2></div></div></div><div class="row"><div class="col-12">`);
      _push(ssrRenderComponent(unref(Swiper), swiperOptions, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(screenshots), (screenshot, index) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                class: "SwiperSlide",
                key: index
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="item"${_scopeId2}><div class="img"${_scopeId2}><img${ssrRenderAttr("src", screenshot)} alt=""${_scopeId2}></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "item" }, [
                        createVNode("div", { class: "img" }, [
                          createVNode("img", {
                            src: screenshot,
                            alt: ""
                          }, null, 8, ["src"])
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(screenshots), (screenshot, index) => {
                return openBlock(), createBlock(unref(SwiperSlide), {
                  class: "SwiperSlide",
                  key: index
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "item" }, [
                      createVNode("div", { class: "img" }, [
                        createVNode("img", {
                          src: screenshot,
                          alt: ""
                        }, null, 8, ["src"])
                      ])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="swiper-pagination"></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Mobile-app/Screenshots/index.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const processSteps = [
  {
    id: 1,
    icon: "pe-7s-cloud-download",
    title: "Download Apps",
    details: "Sorem ipsum dolor sit amet consectetur adipiscing elit seddo eiusmod tempor incididunt"
  },
  {
    id: 2,
    icon: "pe-7s-user",
    title: "Create Account",
    details: "Sorem ipsum dolor sit amet consectetur adipiscing elit seddo eiusmod tempor incididunt"
  },
  {
    id: 3,
    icon: "pe-7s-phone",
    title: "Got Results",
    details: "Sorem ipsum dolor sit amet consectetur adipiscing elit seddo eiusmod tempor incididunt"
  }
];
const _sfc_main$5 = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "app-process section-padding pt-0" }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-lg-7 col-md-10"><div class="s-head text-center mb-80"><h6 class="stit mb-30"><span class="left"></span> Working Process <span class="Right"></span></h6><h2>3 Step to Compalte Projects</h2></div></div></div><div class="row"><!--[-->`);
      ssrRenderList(unref(processSteps), (step, index) => {
        _push(`<div class="col-lg-4"><div class="${ssrRenderClass(`item text-center ${index !== unref(processSteps).length - 1 ? "md-mb50" : ""}`)}"><span class="${ssrRenderClass(`icon ${step.icon}`)}"></span><h5>${ssrInterpolate(step.title)}</h5>`);
        if (step.id < 10) {
          _push(`<span class="step-number">Step ${ssrInterpolate(`0${step.id}`)}</span>`);
        } else {
          _push(`<span class="step-number">Step ${ssrInterpolate(step.id)}</span>`);
        }
        _push(`<p>${ssrInterpolate(step.details)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Mobile-app/Process/index.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "Video",
  __ssrInlineRender: true,
  props: ["video"],
  setup(__props) {
    const videoIsOpen = ref(false);
    function onClose() {
      videoIsOpen.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="row mb-20"><div class="col-12"><div class="vid-img bg-img" style="${ssrRenderStyle({ "background-image": "url('/mobile-app/img/bg-vid.jpg')" })}" data-overlay-dark="2"><span class="vid" style="${ssrRenderStyle({ "cursor": "pointer" })}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z"></path></svg></span></div></div></div>`);
      _push(ssrRenderComponent(ModalVideo, {
        channel: __props.video.channel,
        videoId: __props.video.id,
        isOpen: unref(videoIsOpen),
        onClose
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Mobile-app/TeamVid/Video.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "Team",
  __ssrInlineRender: true,
  props: ["team"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="row justify-content-center mt-100"><div class="col-lg-7 col-md-10"><div class="s-head text-center mb-80"><h6 class="stit mb-30"><span class="left"></span> Meet Our Team <span class="Right"></span></h6><h2>We\u2019ve Experience Team Member to Provide Solutions</h2></div></div></div><div class="row"><!--[-->`);
      ssrRenderList(__props.team, (teamMember, index) => {
        _push(`<div class="col-lg-3 col-md-6"><div class="${ssrRenderClass(`item text-center ${index !== teamMember.length - 1 ? "md-mb50" : ""}`)}"><div class="img"><img${ssrRenderAttr("src", teamMember.image)} alt=""></div><div class="info"><h5>${ssrInterpolate(teamMember.name)}</h5><p>${ssrInterpolate(teamMember.position)}</p></div></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Mobile-app/TeamVid/Team.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const video = {
  channel: "vimeo",
  id: "127203262"
};
const team = [
  {
    id: 1,
    image: "/mobile-app/img/team/1.png",
    name: "Eddie E. Moseley",
    position: "CEO & Founder"
  },
  {
    id: 2,
    image: "/mobile-app/img/team/2.png",
    name: "John J. Schreffler",
    position: "Apps Designer"
  },
  {
    id: 3,
    image: "/mobile-app/img/team/3.png",
    name: "Venessa M. Meister",
    position: "Web Developer"
  },
  {
    id: 4,
    image: "/mobile-app/img/team/4.png",
    name: "Joel R. Funkhouser",
    position: "Senior Manager"
  }
];
const teamVideo = {
  video,
  team
};
const _sfc_main$2 = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "team-vid section-padding bg-dark pt-0",
        "data-overlay-dark": "0"
      }, _attrs))}><div class="container" style="${ssrRenderStyle({ "position": "static" })}">`);
      _push(ssrRenderComponent(unref(_sfc_main$4), {
        video: unref(teamVideo).video
      }, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$3), {
        team: unref(teamVideo).team
      }, null, _parent));
      _push(`</div><div class="circle-blur"></div><div class="circle-blur two"></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Mobile-app/TeamVid/index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const testimonials = [
  {
    id: 1,
    "icon-image": "/mobile-app/img/qoute.png",
    content: "unde omnis iste natus error sit voluptatem accusantium dolore laudantium totam rem aperiam eaqusa quae abillo inventore veritatis architect beatae vitae dicta ecabo.",
    author: {
      name: "William Glenn",
      image: "/mobile-app/img/clients/1.png",
      position: "Senior Manager"
    }
  },
  {
    id: 2,
    "icon-image": "/mobile-app/img/qoute.png",
    content: "unde omnis iste natus error sit voluptatem accusantium dolore laudantium totam rem aperiam eaqusa quae abillo inventore veritatis architect beatae vitae dicta ecabo.",
    author: {
      name: "John R. Gordon",
      image: "/mobile-app/img/clients/2.png",
      position: "Senior Manager"
    }
  },
  {
    id: 3,
    "icon-image": "/mobile-app/img/qoute.png",
    content: "unde omnis iste natus error sit voluptatem accusantium dolore laudantium totam rem aperiam eaqusa quae abillo inventore veritatis architect beatae vitae dicta ecabo.",
    author: {
      name: "Josesr B. Rink",
      image: "/mobile-app/img/clients/3.png",
      position: "Senior Manager"
    }
  },
  {
    id: 4,
    "icon-image": "/mobile-app/img/qoute.png",
    content: "unde omnis iste natus error sit voluptatem accusantium dolore laudantium totam rem aperiam eaqusa quae abillo inventore veritatis architect beatae vitae dicta ecabo.",
    author: {
      name: "William Glenn",
      image: "/mobile-app/img/clients/1.png",
      position: "Senior Manager"
    }
  }
];
const _sfc_main$1 = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const swiperOptions = {
      modules: [Pagination],
      speed: 1e3,
      spaceBetween: 30,
      loop: true,
      parallax: false,
      slidesPerView: 3,
      dots: true,
      pagination: {
        type: "bullets",
        clickable: true,
        el: ".app-testim .swiper-pagination"
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        767: {
          slidesPerView: 2,
          centeredSlides: false
        },
        991: {
          slidesPerView: 3
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "app-testim section-padding bg-gray" }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-lg-7 col-md-10"><div class="s-head text-center mb-80"><h6 class="stit mb-30"><span class="left"></span> Clients Feedback <span class="Right"></span></h6><h2>Valuable Clinets Feedback About Our Services</h2></div></div></div><div class="row"><div class="col-12">`);
      _push(ssrRenderComponent(unref(Swiper), swiperOptions, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(testimonials), (testimonial) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                class: "swiper-slide",
                key: testimonial.id
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="item"${_scopeId2}><div class="icon mb-50"${_scopeId2}><img${ssrRenderAttr("src", testimonial["icon-image"])} alt=""${_scopeId2}></div><div class="text"${_scopeId2}><p${_scopeId2}>${ssrInterpolate(testimonial.content)}</p></div><div class="info"${_scopeId2}><div class="img"${_scopeId2}><img${ssrRenderAttr("src", testimonial.author.image)} alt=""${_scopeId2}></div><div class="cont"${_scopeId2}><h6 class="mb-10"${_scopeId2}>${ssrInterpolate(testimonial.author.name)}</h6><span${_scopeId2}>${ssrInterpolate(testimonial.author.position)}</span></div></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "item" }, [
                        createVNode("div", { class: "icon mb-50" }, [
                          createVNode("img", {
                            src: testimonial["icon-image"],
                            alt: ""
                          }, null, 8, ["src"])
                        ]),
                        createVNode("div", { class: "text" }, [
                          createVNode("p", null, toDisplayString(testimonial.content), 1)
                        ]),
                        createVNode("div", { class: "info" }, [
                          createVNode("div", { class: "img" }, [
                            createVNode("img", {
                              src: testimonial.author.image,
                              alt: ""
                            }, null, 8, ["src"])
                          ]),
                          createVNode("div", { class: "cont" }, [
                            createVNode("h6", { class: "mb-10" }, toDisplayString(testimonial.author.name), 1),
                            createVNode("span", null, toDisplayString(testimonial.author.position), 1)
                          ])
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(testimonials), (testimonial) => {
                return openBlock(), createBlock(unref(SwiperSlide), {
                  class: "swiper-slide",
                  key: testimonial.id
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "item" }, [
                      createVNode("div", { class: "icon mb-50" }, [
                        createVNode("img", {
                          src: testimonial["icon-image"],
                          alt: ""
                        }, null, 8, ["src"])
                      ]),
                      createVNode("div", { class: "text" }, [
                        createVNode("p", null, toDisplayString(testimonial.content), 1)
                      ]),
                      createVNode("div", { class: "info" }, [
                        createVNode("div", { class: "img" }, [
                          createVNode("img", {
                            src: testimonial.author.image,
                            alt: ""
                          }, null, 8, ["src"])
                        ]),
                        createVNode("div", { class: "cont" }, [
                          createVNode("h6", { class: "mb-10" }, toDisplayString(testimonial.author.name), 1),
                          createVNode("span", null, toDisplayString(testimonial.author.position), 1)
                        ])
                      ])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="swiper-pagination"></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Mobile-app/Testimonials/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const blogs = [
  {
    id: 1,
    image: "/mobile-app/img/blog/1.jpg",
    tag: "Design & Arts",
    title: "Everything You Want Know About Creating Voice Interfaces",
    author: "Lisa A. Cowles",
    comments: 5
  },
  {
    id: 2,
    image: "/mobile-app/img/blog/2.jpg",
    tag: "Design & Arts",
    title: "Everything You Want Know About Creating Voice Interfaces",
    author: "Lisa A. Cowles",
    comments: 5
  }
];
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "app-blog section-padding" }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-lg-7 col-md-10"><div class="s-head text-center mb-80"><h6 class="stit mb-30"><span class="left"></span> Blog and News <span class="Right"></span></h6><h2>Read Latest Artices and Tips Latest News &amp; Blog</h2></div></div></div><div class="row"><!--[-->`);
      ssrRenderList(unref(blogs), (blog, index) => {
        _push(`<div class="col-lg-6"><div class="${ssrRenderClass(`item ${index !== unref(blogs).length - 1 ? "md-mb50" : ""}`)}"><div class="row"><div class="col-md-5"><div class="img"><img${ssrRenderAttr("src", blog.image)} alt=""></div></div><div class="col-md-7 valign"><div class="cont"><div class="full-width"><div class="tag">`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "#0" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(blog.tag)}`);
            } else {
              return [
                createTextVNode(toDisplayString(blog.tag), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="title"><h5>${ssrInterpolate(blog.title)}</h5></div><div class="info">`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "#0" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>Post By :</span> ${ssrInterpolate(blog.author)}`);
            } else {
              return [
                createVNode("span", null, "Post By :"),
                createTextVNode(" " + toDisplayString(blog.author), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, { to: "#0" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>Comments :</span>`);
              if (blog.comments < 10) {
                _push2(`<!--[--> (0${ssrInterpolate(blog.comments)}) <!--]-->`);
              } else {
                _push2(`<!--[--> (${ssrInterpolate(blog.comments)}) <!--]-->`);
              }
            } else {
              return [
                createVNode("span", null, "Comments :"),
                blog.comments < 10 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                  createTextVNode(" (0" + toDisplayString(blog.comments) + ") ", 1)
                ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                  createTextVNode(" (" + toDisplayString(blog.comments) + ") ", 1)
                ], 64))
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "#0",
          class: "butn-bord-red rounded buton"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>Read More</span>`);
            } else {
              return [
                createVNode("span", null, "Read More")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></div></div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Mobile-app/Blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$b as _, _sfc_main$a as a, _sfc_main$7 as b, _sfc_main$6 as c, _sfc_main$5 as d, _sfc_main$2 as e, _sfc_main$1 as f, _sfc_main as g };
//# sourceMappingURL=index-67880593.mjs.map
