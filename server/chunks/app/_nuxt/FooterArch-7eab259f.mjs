import { _ as __nuxt_component_0 } from './nuxt-link-afaf4e47.mjs';
import { ref, onUnmounted, mergeProps, withCtx, openBlock, createBlock, useSSRContext, unref, createVNode, toDisplayString, createTextVNode, createCommentVNode, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as _imports_0$3, a as _imports_1$3 } from './logo-light-76183bc1.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Parallax, Navigation, Pagination, EffectFade, Autoplay } from 'swiper';
import { _ as _export_sfc } from '../server.mjs';
import { _ as _imports_0$4 } from './1-62a40b4e.mjs';
import { a as _imports_0$5, _ as _imports_1$4 } from './2-060c6328.mjs';

const _sfc_main$a = {
  __name: "NavbarArch",
  __ssrInlineRender: true,
  props: ["lr", "theme"],
  setup(__props) {
    const navbar = ref();
    function handleScroll() {
      if (window.scrollY > 300) {
        navbar.value.classList.add("nav-scroll");
      } else {
        navbar.value.classList.remove("nav-scroll");
      }
    }
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: "navbar navbar-expand-lg",
        ref_key: "navbar",
        ref: navbar
      }, _attrs))}><div class="container">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "logo"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.theme === "light") {
              _push2(`<img${ssrRenderAttr("src", _imports_0$3)} alt="logo"${_scopeId}>`);
            } else if (__props.theme === "themeD") {
              _push2(`<img${ssrRenderAttr("src", _imports_1$3)} alt="logo"${_scopeId}>`);
            } else {
              _push2(`<img${ssrRenderAttr("src", _imports_1$3)} alt="logo"${_scopeId}>`);
            }
          } else {
            return [
              __props.theme === "light" ? (openBlock(), createBlock("img", {
                key: 0,
                ref: "lr",
                src: _imports_0$3,
                alt: "logo"
              }, null, 512)) : __props.theme === "themeD" ? (openBlock(), createBlock("img", {
                key: 1,
                ref: "lr",
                src: _imports_1$3,
                alt: "logo"
              }, null, 512)) : (openBlock(), createBlock("img", {
                key: 2,
                ref: "lr",
                src: _imports_1$3,
                alt: "logo"
              }, null, 512))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="icon-bar"><i class="fas fa-bars"></i></span></button><div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav ml-auto"><li class="nav-item dropdown"><span class="nav-link dropdown-toggle" data-toggle="dropdown" data-scroll-nav="0"> Home </span><div class="dropdown-menu"><a class="dropdown-item" href="/homepage/home1-dark"> Main Home </a><a class="dropdown-item" href="/homepage/home2-dark"> Creative Agency </a><a class="dropdown-item" href="/homepage/home5-dark"> Digital Agency </a><a class="dropdown-item" href="/homepage/home4-dark"> Business One Page </a><a class="dropdown-item" href="/homepage/home3-dark"> Corporate Business </a><a class="dropdown-item" href="/homepage/home6-dark"> Modern Agency </a><a class="dropdown-item" href="/homepage/home7-dark"> Freelancer </a><a class="dropdown-item" href="/homepage/home8-dark"> Architecture </a></div></li><li class="nav-item"><a class="nav-link" data-scroll-to="#about">About </a></li><li class="nav-item"><a class="nav-link" data-scroll-to="#works"> Works </a></li><li class="nav-item"><a class="nav-link" data-scroll-to="#team"> Team </a></li><li class="nav-item"><a class="nav-link" data-scroll-to="#testimonials"> Testimonials </a></li><li class="nav-item"><a class="nav-link" data-scroll-to="#blogs"> Blog </a></li><li class="nav-item"><a class="nav-link" data-scroll-to="#contact"> Contact </a></li></ul></div></div></nav>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Common/NavbarArch.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const intro5Data = [
  {
    id: 1,
    title: {
      first: "Private",
      second: "Houses Turnkey"
    },
    content: "We developed strong relationships with contractors and specialist companies offering discounted prices.",
    image: "/img/arch/slid/1.jpg"
  },
  {
    id: 2,
    title: "Dustin Villa, Spain",
    content: "We developed strong relationships with contractors and specialist companies offering discounted prices.",
    image: "/img/arch/slid/3.jpg"
  },
  {
    id: 3,
    title: {
      first: "Innovative",
      second: "Architectures"
    },
    content: "We developed strong relationships with contractors and specialist companies offering discounted prices.",
    image: "/img/arch/slid/2.jpg"
  }
];
const _sfc_main$9 = {
  __name: "Header5",
  __ssrInlineRender: true,
  props: ["sliderRef"],
  setup(__props, { expose: __expose }) {
    const fixedSlider = ref();
    __expose({
      fixedSlider
    });
    const swiperOptions = {
      modules: [Parallax, Navigation, Pagination],
      speed: 1e3,
      navigation: {
        prevEl: ".setting .controls .swiper-button-prev",
        nextEl: ".setting .controls .swiper-button-next"
      },
      parallax: true,
      pagination: {
        clickable: true,
        el: ".setting .swiper-pagination"
      },
      onSwiper: handleSwiperReadied
    };
    function handleSwiperReadied(swiper) {
      setTimeout(() => {
        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].childNodes[0].setAttribute(
            "data-swiper-parallax",
            0.75 * swiper.width
          );
        }
      }, 0);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({
        ref: __props.sliderRef,
        id: "arch-slider",
        class: "slider arch-slider"
      }, _attrs))}><div class="swiper-container parallax-slider">`);
      _push(ssrRenderComponent(unref(Swiper), mergeProps(swiperOptions, { class: "swiper-wrapper" }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(intro5Data), (slide, index) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: slide.id,
                class: "swiper-slide"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="bg-img valign" style="${ssrRenderStyle(`background-image: url(${slide.image})`)}" data-overlay-dark="6"${_scopeId2}><div class="container"${_scopeId2}><div class="row"${_scopeId2}><div class="col-lg-6"${_scopeId2}><div class="caption mt-30"${_scopeId2}><h5${_scopeId2}>0${ssrInterpolate(index + 1)} .</h5><h1${_scopeId2}>`);
                    if (typeof slide.title === "object") {
                      _push3(`<div${_scopeId2}>${ssrInterpolate(slide.title.first)} <br${_scopeId2}> ${ssrInterpolate(slide.title.second)}</div>`);
                    } else {
                      _push3(`<div${_scopeId2}>${ssrInterpolate(slide.title)}</div>`);
                    }
                    _push3(`</h1>`);
                    if (slide.content) {
                      _push3(`<p${_scopeId2}>${ssrInterpolate(slide.content)}</p>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div></div><div class="col-lg-4 valign"${_scopeId2}><div class="explore"${_scopeId2}><a href="#0"${_scopeId2}> Explore Project <i class="ion-chevron-right"${_scopeId2}></i></a></div></div></div></div></div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: "bg-img valign",
                        style: `background-image: url(${slide.image})`,
                        "data-overlay-dark": "6"
                      }, [
                        createVNode("div", { class: "container" }, [
                          createVNode("div", { class: "row" }, [
                            createVNode("div", { class: "col-lg-6" }, [
                              createVNode("div", { class: "caption mt-30" }, [
                                createVNode("h5", null, "0" + toDisplayString(index + 1) + " .", 1),
                                createVNode("h1", null, [
                                  typeof slide.title === "object" ? (openBlock(), createBlock("div", { key: 0 }, [
                                    createTextVNode(toDisplayString(slide.title.first) + " ", 1),
                                    createVNode("br"),
                                    createTextVNode(" " + toDisplayString(slide.title.second), 1)
                                  ])) : (openBlock(), createBlock("div", { key: 1 }, toDisplayString(slide.title), 1))
                                ]),
                                slide.content ? (openBlock(), createBlock("p", { key: 0 }, toDisplayString(slide.content), 1)) : createCommentVNode("", true)
                              ])
                            ]),
                            createVNode("div", { class: "col-lg-4 valign" }, [
                              createVNode("div", { class: "explore" }, [
                                createVNode("a", { href: "#0" }, [
                                  createTextVNode(" Explore Project "),
                                  createVNode("i", { class: "ion-chevron-right" })
                                ])
                              ])
                            ])
                          ])
                        ])
                      ], 4)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(intro5Data), (slide, index) => {
                return openBlock(), createBlock(unref(SwiperSlide), {
                  key: slide.id,
                  class: "swiper-slide"
                }, {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: "bg-img valign",
                      style: `background-image: url(${slide.image})`,
                      "data-overlay-dark": "6"
                    }, [
                      createVNode("div", { class: "container" }, [
                        createVNode("div", { class: "row" }, [
                          createVNode("div", { class: "col-lg-6" }, [
                            createVNode("div", { class: "caption mt-30" }, [
                              createVNode("h5", null, "0" + toDisplayString(index + 1) + " .", 1),
                              createVNode("h1", null, [
                                typeof slide.title === "object" ? (openBlock(), createBlock("div", { key: 0 }, [
                                  createTextVNode(toDisplayString(slide.title.first) + " ", 1),
                                  createVNode("br"),
                                  createTextVNode(" " + toDisplayString(slide.title.second), 1)
                                ])) : (openBlock(), createBlock("div", { key: 1 }, toDisplayString(slide.title), 1))
                              ]),
                              slide.content ? (openBlock(), createBlock("p", { key: 0 }, toDisplayString(slide.content), 1)) : createCommentVNode("", true)
                            ])
                          ]),
                          createVNode("div", { class: "col-lg-4 valign" }, [
                            createVNode("div", { class: "explore" }, [
                              createVNode("a", { href: "#0" }, [
                                createTextVNode(" Explore Project "),
                                createVNode("i", { class: "ion-chevron-right" })
                              ])
                            ])
                          ])
                        ])
                      ])
                    ], 4)
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="setting"><div class="controls"><div class="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"><i class="ion-chevron-right"></i></div><div class="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"><i class="ion-chevron-left"></i></div></div><div class="swiper-pagination"></div></div></div></header>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Headers/Header5.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "about",
    class: "about-ar section-padding"
  }, _attrs))}><div class="container"><div class="row"><div class="col-lg-6 valign"><div class="img"><div class="bg-img bg-fixed hero-bg" style="${ssrRenderStyle({ "background-image": "url(/img/arch/hero.jpg)" })}"></div><div class="exp valign text-center"><div class="full-width"><h2 class="bg-img bg-fixed" style="${ssrRenderStyle({ "background-image": "url(/img/arch/hero.jpg)" })}"> 25 </h2><p>Years Of Experience</p></div></div></div></div><div class="col-lg-6 valign"><div class="content"><h6 class="sub-title main-color ls10 text-u">About Us</h6><h3>Best Designers Architectures for You.</h3><p> Architecture bibendum pharetra eleifend. Suspendisse vel volutpat purus, sit amet bibendum nisl. Cras mollis turpis a ipsum ultes, nec condimentum ipsum consequat. Mauris vitae consequat nibh, vitae interdum sit amet bibendum nisl. </p>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "butn bord mt-30",
    to: "/about/about-dark"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>About Us</span>`);
      } else {
        return [
          createVNode("span", null, "About Us")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></section>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AboutUs/AboutUs6.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const AboutUs = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$7 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "serv-arch" }, _attrs))}><div class="container-fluid"><div class="row justify-content-center"><div class="col-lg col-md-6 item bg-img" style="${ssrRenderStyle({ "background-image": "url(/img/arch/s2.jpg)" })}"><h6 class="numb">01</h6><h5>Architecture</h5><p> We provide all equipment and services, etc and ensure a safe and secure project site. </p><a href="#0" class="custom-font more main-color"> Read More </a></div><div class="col-lg col-md-6 item bg-img" style="${ssrRenderStyle({ "background-image": "url(/img/arch/s1.jpg)" })}"><h6 class="numb">02</h6><h5>Interior Design</h5><p> We provide all equipment and services, etc and ensure a safe and secure project site. </p><a href="#0" class="custom-font more main-color"> Read More </a></div><div class="col-lg col-md-6 item bg-img" style="${ssrRenderStyle({ "background-image": "url(/img/arch/s3.jpg)" })}"><h6 class="numb">03</h6><h5>3D Modeling</h5><p> We provide all equipment and services, etc and ensure a safe and secure project site. </p><a href="#0" class="custom-font more main-color"> Read More </a></div><div class="col-lg col-md-6 item bg-img" style="${ssrRenderStyle({ "background-image": "url(/img/arch/s4.jpg)" })}"><h6 class="numb">04</h6><h5>Furniture Design</h5><p> We provide all equipment and services, etc and ensure a safe and secure project site. </p><a href="#0" class="custom-font more main-color"> Read More </a></div><div class="col-lg col-md-6 item bg-img" style="${ssrRenderStyle({ "background-image": "url(/img/arch/s5.jpg)" })}"><h6 class="numb">05</h6><h5>Urban Design</h5><p> We provide all equipment and services, etc and ensure a safe and secure project site. </p><a href="#0" class="custom-font more main-color"> Read More </a></div></div></div></section>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Services/Services6.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Services = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$4]]);
const _imports_0$2 = "" + __publicAssetsURL("img/arch/work/1.jpg");
const _imports_1$2 = "" + __publicAssetsURL("img/arch/work/2.jpg");
const _imports_2$1 = "" + __publicAssetsURL("img/arch/work/5.jpg");
const _imports_3 = "" + __publicAssetsURL("img/arch/work/3.jpg");
const _imports_4 = "" + __publicAssetsURL("img/arch/work/4.jpg");
const _imports_5 = "" + __publicAssetsURL("img/arch/work/6.jpg");
const _sfc_main$6 = {
  __name: "Works6",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "portfolio po-arch section-padding pb-70",
        id: "works"
      }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-lg-8 col-md-10"><div class="sec-head text-center"><h2 class="wow fadeIn" data-wow-delay=".3s">Projects</h2></div></div></div></div><div class="container"><div class="row"><div class="filtering col-12"><div class="filter custom-font wow fadeIn" data-wow-delay=".5s"><span data-filter="*" class="active"> All </span><span data-filter=".brand">Interior</span><span data-filter=".web">Architecture</span><span data-filter=".graphic">Residential</span></div></div><div class="gallery full-width"><div class="col-md-6 items graphic lg-mr wow fadeInUp" data-wow-delay=".4s"><div class="item-img">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "imago wow",
        to: "/project-details2/project-details2-dark"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0$2)} alt="image"${_scopeId}><div class="item-img-overlay"${_scopeId}></div>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0$2,
                alt: "image"
              }),
              createVNode("div", { class: "item-img-overlay" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="cont"><h5>BUGANVILLA HOUSE</h5><span class="tags main-color custom-font">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Arch`);
          } else {
            return [
              createTextVNode("Arch")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`, `);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Interior`);
          } else {
            return [
              createTextVNode("Interior")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span></div></div><div class="col-md-6 items web wow fadeInUp" data-wow-delay=".4s"><div class="item-img">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "imago wow",
        to: "/project-details2/project-details2-dark"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_1$2)} alt="image"${_scopeId}><div class="item-img-overlay"${_scopeId}></div>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_1$2,
                alt: "image"
              }),
              createVNode("div", { class: "item-img-overlay" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="cont"><h5>The Concept</h5><span class="tags main-color custom-font">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Arch`);
          } else {
            return [
              createTextVNode("Arch")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`, `);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Interior`);
          } else {
            return [
              createTextVNode("Interior")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span></div></div><div class="col-md-6 items web wow fadeInUp" data-wow-delay=".4s"><div class="item-img">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "imago wow",
        to: "/project-details2/project-details2-dark"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_2$1)} alt="image"${_scopeId}><div class="item-img-overlay"${_scopeId}></div>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_2$1,
                alt: "image"
              }),
              createVNode("div", { class: "item-img-overlay" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="cont"><h5>Private House</h5><span class="tags main-color custom-font">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Arch`);
          } else {
            return [
              createTextVNode("Arch")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`, `);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Interior`);
          } else {
            return [
              createTextVNode("Interior")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span></div></div><div class="col-md-6 items web graphic wow fadeInUp" data-wow-delay=".4s"><div class="item-img">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "imago wow",
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
      _push(`</div><div class="cont"><h5>Floating House Messinia</h5><span class="tags main-color custom-font">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Arch`);
          } else {
            return [
              createTextVNode("Arch")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`, `);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Interior`);
          } else {
            return [
              createTextVNode("Interior")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span></div></div><div class="col-md-6 items brand wow fadeInUp" data-wow-delay=".4s"><div class="item-img">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "imago wow",
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
      _push(`</div><div class="cont"><h5>IN THE PINE FOREST</h5><span class="tags main-color custom-font">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Arch`);
          } else {
            return [
              createTextVNode("Arch")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`, `);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Interior`);
          } else {
            return [
              createTextVNode("Interior")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span></div></div><div class="col-md-6 items brand wow fadeInUp" data-wow-delay=".4s"><div class="item-img">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "imago wow",
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
      _push(`</div><div class="cont"><h5>VILLAS IN SOCHI</h5><span class="tags main-color custom-font">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Arch`);
          } else {
            return [
              createTextVNode("Arch")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`, `);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Interior`);
          } else {
            return [
              createTextVNode("Interior")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Works/Works6.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _imports_0$1 = "" + __publicAssetsURL("img/team/a1.jpg");
const _imports_1$1 = "" + __publicAssetsURL("img/team/a2.jpg");
const _imports_2 = "" + __publicAssetsURL("img/team/a3.jpg");
const _sfc_main$5 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "team",
    class: "team section-padding"
  }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-lg-8 col-md-10"><div class="sec-head text-center"><h2 class="wow fadeIn" data-wow-delay=".3s">Our Team</h2></div></div></div></div><div class="container"><div class="row"><div class="col-lg-4"><div class="item cir md-mb50"><div class="img"><img${ssrRenderAttr("src", _imports_0$1)} alt=""><div id="circle"><svg version="1.1" x="0px" y="0px" width="300px" height="300px" viewBox="0 0 300 300" enableBackground="new 0 0 300 300" xmlSpace="preserve"><defs><path id="circlePath" d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "></path></defs><circle cx="150" cy="100" r="75" fill="none"></circle><g><use xlink:href="#circlePath" fill="none"></use><text fill="#c5a47e" class="custom-font"><textPath xlink:href="#circlePath"> CEO Manager - CEO Manager - CEO Manager - </textPath></text></g></svg></div><div class="info"><h6 class="ls3">Ryan Hicks</h6><span class="main-color fw-600">Client Manager</span></div></div></div></div><div class="col-lg-4"><div class="item cir md-mb50"><div class="img"><img${ssrRenderAttr("src", _imports_1$1)} alt=""><div id="circle"><svg version="1.1" x="0px" y="0px" width="300px" height="300px" viewBox="0 0 300 300" enableBackground="new 0 0 300 300" xmlSpace="preserve"><defs><path id="circlePath" d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "></path></defs><circle cx="150" cy="100" r="75" fill="none"></circle><g><use xlink:href="#circlePath" fill="none"></use><text fill="#c5a47e" class="custom-font"><textPath xlink:href="#circlePath"> Interior Designer Interior Designer Interior Designer </textPath></text></g></svg></div><div class="info"><h6 class="ls3">Ryan Hicks</h6><span class="main-color fw-600">Client Manager</span></div></div></div></div><div class="col-lg-4"><div class="item cir sm-mb50"><div class="img"><img${ssrRenderAttr("src", _imports_2)} alt=""><div id="circle"><svg version="1.1" x="0px" y="0px" width="300px" height="300px" viewBox="0 0 300 300" enableBackground="new 0 0 300 300" xmlSpace="preserve"><defs><path id="circlePath" d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "></path></defs><circle cx="150" cy="100" r="75" fill="none"></circle><g><use xlink:href="#circlePath" fill="none"></use><text fill="#c5a47e" class="custom-font"><textPath xlink:href="#circlePath"> Landscape Designer Landscape Designer Landscape Designer </textPath></text></g></svg></div><div class="info"><h6 class="ls3">Ryan Hicks</h6><span class="main-color fw-600">Client Manager</span></div></div></div></div></div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Team/Team3.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Team = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$3]]);
const caseStudyData = [
  {
    id: 1,
    image: "/img/arch/slid/3.jpg",
    title: "FLOATING HOUSE MESSINIA",
    date: "14 Sep 2023"
  },
  {
    id: 2,
    image: "/img/arch/slid/2.jpg",
    title: "IN THE PINE FOREST",
    date: "14 Sep 2023"
  },
  {
    id: 3,
    image: "/img/arch/slid/1.jpg",
    title: "BUGANVILLA HOUSE",
    date: "14 Sep 2023"
  }
];
const _sfc_main$4 = {
  __name: "CaseStudy",
  __ssrInlineRender: true,
  setup(__props) {
    const swiperOptions = {
      modules: [Navigation, EffectFade],
      speed: 1e3,
      effect: "fade",
      navigation: {
        prevEl: ".controls .swiper-button-prev",
        nextEl: ".controls .swiper-button-next"
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "case-study" }, _attrs))}><div id="content-carousel-container-unq-1" class="swiper-container" data-swiper="container">`);
      _push(ssrRenderComponent(unref(Swiper), mergeProps(swiperOptions, { class: "swiper-wrapper" }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(caseStudyData), (slide) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: slide.id,
                class: "swiper-slide bg-img",
                style: `background-image: url(${slide.image}) `,
                "data-overlay-dark": "7"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="container d-flex align-items-end"${_scopeId2}><div class="cont"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span${_scopeId3}>Case Study</span><h6 class="main-color"${_scopeId3}>${ssrInterpolate(slide.date)}</h6><h4${_scopeId3}>${ssrInterpolate(slide.title)}</h4>`);
                        } else {
                          return [
                            createVNode("span", null, "Case Study"),
                            createVNode("h6", { class: "main-color" }, toDisplayString(slide.date), 1),
                            createVNode("h4", null, toDisplayString(slide.title), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "container d-flex align-items-end" }, [
                        createVNode("div", { class: "cont" }, [
                          createVNode(_component_NuxtLink, { to: "#" }, {
                            default: withCtx(() => [
                              createVNode("span", null, "Case Study"),
                              createVNode("h6", { class: "main-color" }, toDisplayString(slide.date), 1),
                              createVNode("h4", null, toDisplayString(slide.title), 1)
                            ]),
                            _: 2
                          }, 1024)
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
              (openBlock(true), createBlock(Fragment, null, renderList(unref(caseStudyData), (slide) => {
                return openBlock(), createBlock(unref(SwiperSlide), {
                  key: slide.id,
                  class: "swiper-slide bg-img",
                  style: `background-image: url(${slide.image}) `,
                  "data-overlay-dark": "7"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "container d-flex align-items-end" }, [
                      createVNode("div", { class: "cont" }, [
                        createVNode(_component_NuxtLink, { to: "#" }, {
                          default: withCtx(() => [
                            createVNode("span", null, "Case Study"),
                            createVNode("h6", { class: "main-color" }, toDisplayString(slide.date), 1),
                            createVNode("h4", null, toDisplayString(slide.title), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ])
                    ])
                  ]),
                  _: 2
                }, 1032, ["style"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="controls"><div class="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"><i class="fas fa-chevron-right"></i></div><div class="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"><i class="fas fa-chevron-left"></i></div></div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Others/CaseStudy.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "TestimonialsArcho",
  __ssrInlineRender: true,
  setup(__props) {
    const settings = {
      modules: [Autoplay, Navigation],
      loop: true,
      navigation: {
        prevEl: ".arrows .prev",
        nextEl: ".arrows .next"
      },
      centeredSlides: true,
      autoplay: true,
      slidesPerView: 3,
      spaceBetween: 60,
      breakpoints: {
        1024: {
          slidesPerView: 3,
          centeredSlides: false
        },
        767: {
          slidesPerView: 1,
          centeredSlides: false
        },
        480: {
          slidesPerView: 1,
          centeredSlides: false
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "testimonials",
        class: "testimonials section-padding position-re"
      }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-lg-8 col-md-10"><div class="sec-head text-center"><h2 class="wow fadeIn" data-wow-delay=".3s">Testimonials</h2></div></div></div></div><div class="container-fluid position-re"><div class="row wow fadeInUp" data-wow-delay=".5s"><div class="col-lg-12">`);
      _push(ssrRenderComponent(unref(Swiper), mergeProps(settings, {
        class: "slic-item",
        "data-wow-delay": ".5s"
      }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "item" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="info inf-lrg valign"${_scopeId2}><div class="cont"${_scopeId2}><div class="author"${_scopeId2}><div class="img"${_scopeId2}><img${ssrRenderAttr("src", _imports_0$4)} alt=""${_scopeId2}></div><h6 class="author-name color-font"${_scopeId2}>Alex Regelman</h6><span class="author-details"${_scopeId2}> Co-founder, Colabrio </span></div></div></div><div class="valign"${_scopeId2}><p class="fz-20 fw-200"${_scopeId2}> I would highly recommend Vie Digital. I worked with the team on an animation for our &#39;Click &amp; Collect&#39; service. </p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "info inf-lrg valign" }, [
                      createVNode("div", { class: "cont" }, [
                        createVNode("div", { class: "author" }, [
                          createVNode("div", { class: "img" }, [
                            createVNode("img", {
                              src: _imports_0$4,
                              alt: ""
                            })
                          ]),
                          createVNode("h6", { class: "author-name color-font" }, "Alex Regelman"),
                          createVNode("span", { class: "author-details" }, " Co-founder, Colabrio ")
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "valign" }, [
                      createVNode("p", { class: "fz-20 fw-200" }, " I would highly recommend Vie Digital. I worked with the team on an animation for our 'Click & Collect' service. ")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "item" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="info inf-lrg valign"${_scopeId2}><div class="cont"${_scopeId2}><div class="author"${_scopeId2}><div class="img"${_scopeId2}><img${ssrRenderAttr("src", _imports_0$4)} alt=""${_scopeId2}></div><h6 class="author-name color-font"${_scopeId2}>Alex Regelman</h6><span class="author-details"${_scopeId2}> Co-founder, Colabrio </span></div></div></div><div class="valign"${_scopeId2}><p class="fz-20 fw-200"${_scopeId2}> I would highly recommend Vie Digital. I worked with the team on an animation for our &#39;Click &amp; Collect&#39; service. </p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "info inf-lrg valign" }, [
                      createVNode("div", { class: "cont" }, [
                        createVNode("div", { class: "author" }, [
                          createVNode("div", { class: "img" }, [
                            createVNode("img", {
                              src: _imports_0$4,
                              alt: ""
                            })
                          ]),
                          createVNode("h6", { class: "author-name color-font" }, "Alex Regelman"),
                          createVNode("span", { class: "author-details" }, " Co-founder, Colabrio ")
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "valign" }, [
                      createVNode("p", { class: "fz-20 fw-200" }, " I would highly recommend Vie Digital. I worked with the team on an animation for our 'Click & Collect' service. ")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "item" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="info inf-lrg valign"${_scopeId2}><div class="cont"${_scopeId2}><div class="author"${_scopeId2}><div class="img"${_scopeId2}><img${ssrRenderAttr("src", _imports_0$4)} alt=""${_scopeId2}></div><h6 class="author-name color-font"${_scopeId2}>Alex Regelman</h6><span class="author-details"${_scopeId2}> Co-founder, Colabrio </span></div></div></div><div class="valign"${_scopeId2}><p class="fz-20 fw-200"${_scopeId2}> I would highly recommend Vie Digital. I worked with the team on an animation for our &#39;Click &amp; Collect&#39; service. </p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "info inf-lrg valign" }, [
                      createVNode("div", { class: "cont" }, [
                        createVNode("div", { class: "author" }, [
                          createVNode("div", { class: "img" }, [
                            createVNode("img", {
                              src: _imports_0$4,
                              alt: ""
                            })
                          ]),
                          createVNode("h6", { class: "author-name color-font" }, "Alex Regelman"),
                          createVNode("span", { class: "author-details" }, " Co-founder, Colabrio ")
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "valign" }, [
                      createVNode("p", { class: "fz-20 fw-200" }, " I would highly recommend Vie Digital. I worked with the team on an animation for our 'Click & Collect' service. ")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "item" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="info inf-lrg valign"${_scopeId2}><div class="cont"${_scopeId2}><div class="author"${_scopeId2}><div class="img"${_scopeId2}><img${ssrRenderAttr("src", _imports_0$4)} alt=""${_scopeId2}></div><h6 class="author-name color-font"${_scopeId2}>Alex Regelman</h6><span class="author-details"${_scopeId2}> Co-founder, Colabrio </span></div></div></div><div class="valign"${_scopeId2}><p class="fz-20 fw-200"${_scopeId2}> I would highly recommend Vie Digital. I worked with the team on an animation for our &#39;Click &amp; Collect&#39; service. </p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "info inf-lrg valign" }, [
                      createVNode("div", { class: "cont" }, [
                        createVNode("div", { class: "author" }, [
                          createVNode("div", { class: "img" }, [
                            createVNode("img", {
                              src: _imports_0$4,
                              alt: ""
                            })
                          ]),
                          createVNode("h6", { class: "author-name color-font" }, "Alex Regelman"),
                          createVNode("span", { class: "author-details" }, " Co-founder, Colabrio ")
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "valign" }, [
                      createVNode("p", { class: "fz-20 fw-200" }, " I would highly recommend Vie Digital. I worked with the team on an animation for our 'Click & Collect' service. ")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(SwiperSlide), { class: "item" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "info inf-lrg valign" }, [
                    createVNode("div", { class: "cont" }, [
                      createVNode("div", { class: "author" }, [
                        createVNode("div", { class: "img" }, [
                          createVNode("img", {
                            src: _imports_0$4,
                            alt: ""
                          })
                        ]),
                        createVNode("h6", { class: "author-name color-font" }, "Alex Regelman"),
                        createVNode("span", { class: "author-details" }, " Co-founder, Colabrio ")
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "valign" }, [
                    createVNode("p", { class: "fz-20 fw-200" }, " I would highly recommend Vie Digital. I worked with the team on an animation for our 'Click & Collect' service. ")
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "item" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "info inf-lrg valign" }, [
                    createVNode("div", { class: "cont" }, [
                      createVNode("div", { class: "author" }, [
                        createVNode("div", { class: "img" }, [
                          createVNode("img", {
                            src: _imports_0$4,
                            alt: ""
                          })
                        ]),
                        createVNode("h6", { class: "author-name color-font" }, "Alex Regelman"),
                        createVNode("span", { class: "author-details" }, " Co-founder, Colabrio ")
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "valign" }, [
                    createVNode("p", { class: "fz-20 fw-200" }, " I would highly recommend Vie Digital. I worked with the team on an animation for our 'Click & Collect' service. ")
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "item" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "info inf-lrg valign" }, [
                    createVNode("div", { class: "cont" }, [
                      createVNode("div", { class: "author" }, [
                        createVNode("div", { class: "img" }, [
                          createVNode("img", {
                            src: _imports_0$4,
                            alt: ""
                          })
                        ]),
                        createVNode("h6", { class: "author-name color-font" }, "Alex Regelman"),
                        createVNode("span", { class: "author-details" }, " Co-founder, Colabrio ")
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "valign" }, [
                    createVNode("p", { class: "fz-20 fw-200" }, " I would highly recommend Vie Digital. I worked with the team on an animation for our 'Click & Collect' service. ")
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "item" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "info inf-lrg valign" }, [
                    createVNode("div", { class: "cont" }, [
                      createVNode("div", { class: "author" }, [
                        createVNode("div", { class: "img" }, [
                          createVNode("img", {
                            src: _imports_0$4,
                            alt: ""
                          })
                        ]),
                        createVNode("h6", { class: "author-name color-font" }, "Alex Regelman"),
                        createVNode("span", { class: "author-details" }, " Co-founder, Colabrio ")
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "valign" }, [
                    createVNode("p", { class: "fz-20 fw-200" }, " I would highly recommend Vie Digital. I worked with the team on an animation for our 'Click & Collect' service. ")
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="arrows"><div class="container"><div class="next cursor-pointer"><span class="pe-7s-angle-right"></span></div><div class="prev cursor-pointer"><span class="pe-7s-angle-left"></span></div></div></div></div><div class="line-v top"></div><div class="line-v bottom"></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Testimonials/TestimonialsArcho.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _imports_0 = "" + __publicAssetsURL("img/arch/blog/1.jpg");
const _imports_1 = "" + __publicAssetsURL("img/arch/blog/2.jpg");
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "blog section-padding",
    id: "blogs"
  }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-lg-8 col-md-10"><div class="sec-head text-center"><h2 class="wow fadeIn" data-wow-delay=".3s">Latest News</h2></div></div></div><div class="row"><div class="col-lg-6"><div class="item md-mb50 wow fadeInUp" data-wow-delay=".3s"><div class="img"><img${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="cont"><div><div class="info"><a href="#0" class="date"><span><i>06</i> August </span></a><span>/</span><a href="#0" class="tag"><span class="main-color">Architecture</span></a></div><h5><a href="#0"> How to use solid color combine with simple furnitures. </a></h5><div class="btn-more"><a href="#0" class="simple-btn main-color"> Read More </a></div></div></div></div></div><div class="col-lg-6"><div class="item md-mb50 wow fadeInUp" data-wow-delay=".5s"><div class="img"><img${ssrRenderAttr("src", _imports_1)} alt=""></div><div class="cont"><div><div class="info"><a href="#0" class="date"><span><i>06</i> August </span></a><span>/</span><a href="#0" class="tag"><span class="main-color">Architecture</span></a></div><h5><a href="#0"> How to use solid color combine with simple furnitures. </a></h5><div class="btn-more"><a href="#0" class="simple-btn main-color"> Read More </a></div></div></div></div></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Others/LatestNews.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const LatestNews = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "contact",
    class: "contact-sec style2 section-padding position-re bg-img",
    style: { "background-image": "url('/img/patrn1.png')" }
  }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-lg-8 col-md-10"><div class="sec-head text-center"><h2 class="wow fadeIn" data-wow-delay=".3s">Contact Us</h2></div></div></div><div class="row justify-content-center"><div class="col-lg-10"><div class="form wow fadeInUp" data-wow-delay=".5s"><form id="contact-form"><div class="messages"></div><div class="controls"><div class="row"><div class="col-lg-4"><div class="form-group"><input id="form_name" type="text" name="name" placeholder="Name"${ssrIncludeBooleanAttr(true) ? " required" : ""}></div></div><div class="col-lg-4"><div class="form-group"><input id="form_email" type="email" name="email" placeholder="Email"${ssrIncludeBooleanAttr(true) ? " required" : ""}></div></div><div class="col-lg-4"><div class="form-group"><input id="form_name" type="text" name="name" placeholder="Name"${ssrIncludeBooleanAttr(true) ? " required" : ""}></div></div><div class="col-12"><div class="form-group"><textarea id="form_message" name="message" placeholder="Message" rows="4"${ssrIncludeBooleanAttr(true) ? " required" : ""}></textarea></div></div><div class="col-12"><div class="text-center"><a href="#0" class="butn light mt-30 full-width"><h6 class="ls3 text-u">Send Massege</h6></a></div></div></div></div></form></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Contact/ContactArcho.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ContactArcho = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "sub-bg" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-4"><div class="item md-mb50"><div class="title"><h5>Contact Us</h5></div><ul><li><span class="icon pe-7s-map-marker"></span><div class="cont"><h6>Officeal Address</h6><p>504 White St . Dawsonville, GA 30534 , New York</p></div></li><li><span class="icon pe-7s-mail"></span><div class="cont"><h6>Email Us</h6><p>support@gmail.com</p></div></li><li><span class="icon pe-7s-call"></span><div class="cont"><h6>Call Us</h6><p>+87986451666</p></div></li></ul></div></div><div class="col-lg-4"><div class="item md-mb50"><div class="title"><h5>Recent News</h5></div><ul><li><div class="img"><img${ssrRenderAttr("src", _imports_0$5)} alt=""></div><div class="sm-post"><p> The Start-Up Ultimate Guide to Make Your WordPress Journal. </p><span class="date main-color">14 sep 2023</span></div></li><li><div class="img"><img${ssrRenderAttr("src", _imports_1$4)} alt=""></div><div class="sm-post"><p> The Start-Up Ultimate Guide to Make Your WordPress Journal. </p><span class="date main-color">14 sep 2023</span></div></li><li><div class="subscribe"><input type="text" placeholder="Type Your Email"><span class="subs pe-7s-paper-plane back-color"></span></div></li></ul></div></div><div class="col-lg-4"><div class="item"><div class="logo"><img${ssrRenderAttr("src", _imports_1$3)} alt=""></div><div class="social"><a href="#0"><i class="fab fa-facebook-f"></i></a><a href="#0"><i class="fab fa-twitter"></i></a><a href="#0"><i class="fab fa-instagram"></i></a><a href="#0"><i class="fab fa-youtube"></i></a></div><div class="copy-right"><p> \xA9 2023, Vie Template. Made with passion by <a href="#0" class="main-color"> ThemesCamp </a> . </p></div></div></div></div></div></footer>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Common/FooterArch.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FooterArch = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { AboutUs as A, ContactArcho as C, FooterArch as F, LatestNews as L, Services as S, Team as T, _sfc_main$a as _, _sfc_main$9 as a, _sfc_main$6 as b, _sfc_main$4 as c, _sfc_main$3 as d };
//# sourceMappingURL=FooterArch-7eab259f.mjs.map
