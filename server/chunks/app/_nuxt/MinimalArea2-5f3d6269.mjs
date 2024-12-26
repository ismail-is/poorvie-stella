import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { mergeProps, useSSRContext, unref, withCtx, createVNode, toDisplayString, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-afaf4e47.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay } from 'swiper';
import { _ as _imports_0$1 } from './min-area-692b8d24.mjs';

const _sfc_main$4 = {
  __name: "Header4",
  __ssrInlineRender: true,
  props: ["theme"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "particles circle-bg valign" }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-lg-10"><div class="cont text-center"><h1><span class="color-font">Creativity</span> is the process of having <span class="color-font">original ideas</span>. </h1></div></div></div></div><div class="gradient-circle"></div><div class="gradient-circle two"></div><div class="line bottom left"></div></header>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Headers/Header4.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const id = 1;
const image1 = "/img/01.jpg";
const image2 = "/img/02.jpg";
const exp = {
  nmb: 28,
  name: "Years Of Experience"
};
const title = {
  first: "Unlimited Skills",
  second: "for Super Projects."
};
const content = {
  first: "Branding is no longer simply about visual appeal (or the cherry in the apple pie example, as given in my earlier article).",
  second: "We develop creative solutions for small and big brands alike, build authentic product identities and much more."
};
const smallTitle = "About Us";
const AboutUs3data = {
  id,
  image1,
  image2,
  exp,
  title,
  content,
  smallTitle
};
const _sfc_main$3 = {
  __name: "AboutUs3",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "agency section-padding position-re" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-7"><div class="imgsec md-mb50"><div class="row"><div class="col-md-6"><div class="item"><div class="imgone big-bord wow fadeInDown" data-wow-delay=".8s"><img class="thumparallax-down"${ssrRenderAttr("src", unref(AboutUs3data).image1)} alt=""></div><div class="exp"><h2 class="nmb-font">${ssrInterpolate(unref(AboutUs3data).exp.nmb)}</h2><h6>${ssrInterpolate(unref(AboutUs3data).exp.name)}</h6></div></div></div><div class="col-md-6"><div class="item"><div class="imgtwo big-bord wow fadeInUp" data-wow-delay=".6s"><img class="thumparallax"${ssrRenderAttr("src", unref(AboutUs3data).image2)} alt=""></div></div></div></div></div></div><div class="col-lg-5 valign"><div class="content"><h4 class="wow words chars splitting" data-splitting>${ssrInterpolate(unref(AboutUs3data).title.first)} <br> ${ssrInterpolate(unref(AboutUs3data).title.second)}</h4><p class="wow txt words chars splitting" data-splitting>${ssrInterpolate(unref(AboutUs3data).content.first)} <br> ${ssrInterpolate(unref(AboutUs3data).content.second)}</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about/about-dark",
        class: "butn bord curve mt-40 wow fadeInUp",
        "data-wow-delay": ".8s"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate(unref(AboutUs3data).smallTitle)}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(unref(AboutUs3data).smallTitle), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<br></div></div></div></div><div class="line bottom right"></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AboutUs/AboutUs3.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _imports_0 = "" + publicAssetsURL("img/portfolio/2.jpg");
const _imports_1 = "" + publicAssetsURL("img/portfolio/1.jpg");
const _imports_2 = "" + publicAssetsURL("img/portfolio/3.jpg");
const _imports_3 = "" + publicAssetsURL("img/portfolio/4.jpg");
const _imports_4 = "" + publicAssetsURL("img/portfolio/5.jpg");
const _imports_5 = "" + publicAssetsURL("img/portfolio/6.jpg");
const _sfc_main$2 = {
  __name: "Works3",
  __ssrInlineRender: true,
  setup(__props) {
    const swiperOptions = {
      modules: [Navigation, Autoplay],
      slidesPerView: 2,
      centeredSlides: true,
      autoPlay: true,
      loop: true,
      navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next"
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      speed: 1e3,
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
          slidesPerView: 1,
          spaceBetween: 0,
          centeredSlides: false
        },
        991: {
          slidesPerView: 2
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "work-carousel2 metro section-padding" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-8 col-md-10"><div class="sec-head"><h6 class="wow fadeIn" data-wow-delay=".5s">Portfolio</h6><h3 class="wow color-font"> Our Recent Web Design &amp; <br> Some Past Projects. </h3></div></div></div></div><div class="container-fluid"><div class="row"><div class="col-lg-12 no-padding"><div class="swiper-container">`);
      _push(ssrRenderComponent(unref(Swiper), mergeProps({ class: "swiper-wrapper" }, swiperOptions), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "swiper-slide" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="content"${_scopeId2}><div class="img"${_scopeId2}><span class="imgio"${_scopeId2}><div class="wow cimgio" data-delay="500"${_scopeId2}></div><img${ssrRenderAttr("src", _imports_0)} alt=""${_scopeId2}></span></div><div class="cont"${_scopeId2}><h6${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_NuxtLink, { to: "/project-details2/project-details2-dark" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` art &amp; illustration `);
                      } else {
                        return [
                          createTextVNode(" art & illustration ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</h6><h4${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_NuxtLink, { to: "/project-details2/project-details2-dark" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Inspiring new space `);
                      } else {
                        return [
                          createTextVNode(" Inspiring new space ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</h4></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "content" }, [
                      createVNode("div", { class: "img" }, [
                        createVNode("span", { class: "imgio" }, [
                          createVNode("div", {
                            class: "wow cimgio",
                            "data-delay": "500"
                          }),
                          createVNode("img", {
                            src: _imports_0,
                            alt: ""
                          })
                        ])
                      ]),
                      createVNode("div", { class: "cont" }, [
                        createVNode("h6", null, [
                          createVNode(_component_NuxtLink, { to: "/project-details2/project-details2-dark" }, {
                            default: withCtx(() => [
                              createTextVNode(" art & illustration ")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("h4", null, [
                          createVNode(_component_NuxtLink, { to: "/project-details2/project-details2-dark" }, {
                            default: withCtx(() => [
                              createTextVNode(" Inspiring new space ")
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "swiper-slide" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="content"${_scopeId2}><div class="img"${_scopeId2}><span class="imgio"${_scopeId2}><div class="wow cimgio" data-delay="500"${_scopeId2}></div><img${ssrRenderAttr("src", _imports_1)} alt=""${_scopeId2}></span></div><div class="cont"${_scopeId2}><h6${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_NuxtLink, { to: "/project-details2/project-details2-dark" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` art &amp; illustration `);
                      } else {
                        return [
                          createTextVNode(" art & illustration ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</h6><h4${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_NuxtLink, { to: "/project-details2/project-details2-dark" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Inspiring new space `);
                      } else {
                        return [
                          createTextVNode(" Inspiring new space ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</h4></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "content" }, [
                      createVNode("div", { class: "img" }, [
                        createVNode("span", { class: "imgio" }, [
                          createVNode("div", {
                            class: "wow cimgio",
                            "data-delay": "500"
                          }),
                          createVNode("img", {
                            src: _imports_1,
                            alt: ""
                          })
                        ])
                      ]),
                      createVNode("div", { class: "cont" }, [
                        createVNode("h6", null, [
                          createVNode(_component_NuxtLink, { to: "/project-details2/project-details2-dark" }, {
                            default: withCtx(() => [
                              createTextVNode(" art & illustration ")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("h4", null, [
                          createVNode(_component_NuxtLink, { to: "/project-details2/project-details2-dark" }, {
                            default: withCtx(() => [
                              createTextVNode(" Inspiring new space ")
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "swiper-slide" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="content"${_scopeId2}><div class="img"${_scopeId2}><span class="imgio"${_scopeId2}><div class="wow cimgio" data-delay="500"${_scopeId2}></div><img${ssrRenderAttr("src", _imports_2)} alt=""${_scopeId2}></span></div><div class="cont"${_scopeId2}><h6${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_NuxtLink, { to: "/project-details2/project-details2-dark" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` art &amp; illustration `);
                      } else {
                        return [
                          createTextVNode(" art & illustration ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</h6><h4${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_NuxtLink, { to: "/project-details2/project-details2-dark" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Inspiring new space `);
                      } else {
                        return [
                          createTextVNode(" Inspiring new space ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</h4></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "content" }, [
                      createVNode("div", { class: "img" }, [
                        createVNode("span", { class: "imgio" }, [
                          createVNode("div", {
                            class: "wow cimgio",
                            "data-delay": "500"
                          }),
                          createVNode("img", {
                            src: _imports_2,
                            alt: ""
                          })
                        ])
                      ]),
                      createVNode("div", { class: "cont" }, [
                        createVNode("h6", null, [
                          createVNode(_component_NuxtLink, { to: "/project-details2/project-details2-dark" }, {
                            default: withCtx(() => [
                              createTextVNode(" art & illustration ")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("h4", null, [
                          createVNode(_component_NuxtLink, { to: "/project-details2/project-details2-dark" }, {
                            default: withCtx(() => [
                              createTextVNode(" Inspiring new space ")
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "swiper-slide" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="content"${_scopeId2}><div class="img"${_scopeId2}><span class="imgio"${_scopeId2}><div class="wow cimgio" data-delay="500"${_scopeId2}></div><img${ssrRenderAttr("src", _imports_3)} alt=""${_scopeId2}></span></div><div class="cont"${_scopeId2}><h6${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_NuxtLink, { to: "/project-details2/project-details2-dark" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` art &amp; illustration `);
                      } else {
                        return [
                          createTextVNode(" art & illustration ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</h6><h4${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_NuxtLink, { to: "/project-details2/project-details2-dark" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Inspiring new space `);
                      } else {
                        return [
                          createTextVNode(" Inspiring new space ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</h4></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "content" }, [
                      createVNode("div", { class: "img" }, [
                        createVNode("span", { class: "imgio" }, [
                          createVNode("div", {
                            class: "wow cimgio",
                            "data-delay": "500"
                          }),
                          createVNode("img", {
                            src: _imports_3,
                            alt: ""
                          })
                        ])
                      ]),
                      createVNode("div", { class: "cont" }, [
                        createVNode("h6", null, [
                          createVNode(_component_NuxtLink, { to: "/project-details2/project-details2-dark" }, {
                            default: withCtx(() => [
                              createTextVNode(" art & illustration ")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("h4", null, [
                          createVNode(_component_NuxtLink, { to: "/project-details2/project-details2-dark" }, {
                            default: withCtx(() => [
                              createTextVNode(" Inspiring new space ")
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "swiper-slide" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="content"${_scopeId2}><div class="img"${_scopeId2}><span class="imgio"${_scopeId2}><div class="wow cimgio" data-delay="500"${_scopeId2}></div><img${ssrRenderAttr("src", _imports_4)} alt=""${_scopeId2}></span></div><div class="cont"${_scopeId2}><h6${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_NuxtLink, { to: "/project-details2/project-details2-dark" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` art &amp; illustration `);
                      } else {
                        return [
                          createTextVNode(" art & illustration ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</h6><h4${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_NuxtLink, { to: "/project-details2/project-details2-dark" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Inspiring new space `);
                      } else {
                        return [
                          createTextVNode(" Inspiring new space ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</h4></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "content" }, [
                      createVNode("div", { class: "img" }, [
                        createVNode("span", { class: "imgio" }, [
                          createVNode("div", {
                            class: "wow cimgio",
                            "data-delay": "500"
                          }),
                          createVNode("img", {
                            src: _imports_4,
                            alt: ""
                          })
                        ])
                      ]),
                      createVNode("div", { class: "cont" }, [
                        createVNode("h6", null, [
                          createVNode(_component_NuxtLink, { to: "/project-details2/project-details2-dark" }, {
                            default: withCtx(() => [
                              createTextVNode(" art & illustration ")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("h4", null, [
                          createVNode(_component_NuxtLink, { to: "/project-details2/project-details2-dark" }, {
                            default: withCtx(() => [
                              createTextVNode(" Inspiring new space ")
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "swiper-slide" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="content"${_scopeId2}><div class="img"${_scopeId2}><span class="imgio"${_scopeId2}><div class="wow cimgio" data-delay="500"${_scopeId2}></div><img${ssrRenderAttr("src", _imports_5)} alt=""${_scopeId2}></span></div><div class="cont"${_scopeId2}><h6${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_NuxtLink, { to: "/project-details2/project-details2-dark" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` art &amp; illustration `);
                      } else {
                        return [
                          createTextVNode(" art & illustration ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</h6><h4${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_NuxtLink, { to: "/project-details2/project-details2-dark" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Inspiring new space `);
                      } else {
                        return [
                          createTextVNode(" Inspiring new space ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</h4></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "content" }, [
                      createVNode("div", { class: "img" }, [
                        createVNode("span", { class: "imgio" }, [
                          createVNode("div", {
                            class: "wow cimgio",
                            "data-delay": "500"
                          }),
                          createVNode("img", {
                            src: _imports_5,
                            alt: ""
                          })
                        ])
                      ]),
                      createVNode("div", { class: "cont" }, [
                        createVNode("h6", null, [
                          createVNode(_component_NuxtLink, { to: "/project-details2/project-details2-dark" }, {
                            default: withCtx(() => [
                              createTextVNode(" art & illustration ")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("h4", null, [
                          createVNode(_component_NuxtLink, { to: "/project-details2/project-details2-dark" }, {
                            default: withCtx(() => [
                              createTextVNode(" Inspiring new space ")
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(SwiperSlide), { class: "swiper-slide" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "content" }, [
                    createVNode("div", { class: "img" }, [
                      createVNode("span", { class: "imgio" }, [
                        createVNode("div", {
                          class: "wow cimgio",
                          "data-delay": "500"
                        }),
                        createVNode("img", {
                          src: _imports_0,
                          alt: ""
                        })
                      ])
                    ]),
                    createVNode("div", { class: "cont" }, [
                      createVNode("h6", null, [
                        createVNode(_component_NuxtLink, { to: "/project-details2/project-details2-dark" }, {
                          default: withCtx(() => [
                            createTextVNode(" art & illustration ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("h4", null, [
                        createVNode(_component_NuxtLink, { to: "/project-details2/project-details2-dark" }, {
                          default: withCtx(() => [
                            createTextVNode(" Inspiring new space ")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "swiper-slide" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "content" }, [
                    createVNode("div", { class: "img" }, [
                      createVNode("span", { class: "imgio" }, [
                        createVNode("div", {
                          class: "wow cimgio",
                          "data-delay": "500"
                        }),
                        createVNode("img", {
                          src: _imports_1,
                          alt: ""
                        })
                      ])
                    ]),
                    createVNode("div", { class: "cont" }, [
                      createVNode("h6", null, [
                        createVNode(_component_NuxtLink, { to: "/project-details2/project-details2-dark" }, {
                          default: withCtx(() => [
                            createTextVNode(" art & illustration ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("h4", null, [
                        createVNode(_component_NuxtLink, { to: "/project-details2/project-details2-dark" }, {
                          default: withCtx(() => [
                            createTextVNode(" Inspiring new space ")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "swiper-slide" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "content" }, [
                    createVNode("div", { class: "img" }, [
                      createVNode("span", { class: "imgio" }, [
                        createVNode("div", {
                          class: "wow cimgio",
                          "data-delay": "500"
                        }),
                        createVNode("img", {
                          src: _imports_2,
                          alt: ""
                        })
                      ])
                    ]),
                    createVNode("div", { class: "cont" }, [
                      createVNode("h6", null, [
                        createVNode(_component_NuxtLink, { to: "/project-details2/project-details2-dark" }, {
                          default: withCtx(() => [
                            createTextVNode(" art & illustration ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("h4", null, [
                        createVNode(_component_NuxtLink, { to: "/project-details2/project-details2-dark" }, {
                          default: withCtx(() => [
                            createTextVNode(" Inspiring new space ")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "swiper-slide" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "content" }, [
                    createVNode("div", { class: "img" }, [
                      createVNode("span", { class: "imgio" }, [
                        createVNode("div", {
                          class: "wow cimgio",
                          "data-delay": "500"
                        }),
                        createVNode("img", {
                          src: _imports_3,
                          alt: ""
                        })
                      ])
                    ]),
                    createVNode("div", { class: "cont" }, [
                      createVNode("h6", null, [
                        createVNode(_component_NuxtLink, { to: "/project-details2/project-details2-dark" }, {
                          default: withCtx(() => [
                            createTextVNode(" art & illustration ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("h4", null, [
                        createVNode(_component_NuxtLink, { to: "/project-details2/project-details2-dark" }, {
                          default: withCtx(() => [
                            createTextVNode(" Inspiring new space ")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "swiper-slide" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "content" }, [
                    createVNode("div", { class: "img" }, [
                      createVNode("span", { class: "imgio" }, [
                        createVNode("div", {
                          class: "wow cimgio",
                          "data-delay": "500"
                        }),
                        createVNode("img", {
                          src: _imports_4,
                          alt: ""
                        })
                      ])
                    ]),
                    createVNode("div", { class: "cont" }, [
                      createVNode("h6", null, [
                        createVNode(_component_NuxtLink, { to: "/project-details2/project-details2-dark" }, {
                          default: withCtx(() => [
                            createTextVNode(" art & illustration ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("h4", null, [
                        createVNode(_component_NuxtLink, { to: "/project-details2/project-details2-dark" }, {
                          default: withCtx(() => [
                            createTextVNode(" Inspiring new space ")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "swiper-slide" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "content" }, [
                    createVNode("div", { class: "img" }, [
                      createVNode("span", { class: "imgio" }, [
                        createVNode("div", {
                          class: "wow cimgio",
                          "data-delay": "500"
                        }),
                        createVNode("img", {
                          src: _imports_5,
                          alt: ""
                        })
                      ])
                    ]),
                    createVNode("div", { class: "cont" }, [
                      createVNode("h6", null, [
                        createVNode(_component_NuxtLink, { to: "/project-details2/project-details2-dark" }, {
                          default: withCtx(() => [
                            createTextVNode(" art & illustration ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("h4", null, [
                        createVNode(_component_NuxtLink, { to: "/project-details2/project-details2-dark" }, {
                          default: withCtx(() => [
                            createTextVNode(" Inspiring new space ")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"><i class="ion-ios-arrow-right"></i></div><div class="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"><i class="ion-ios-arrow-left"></i></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Works/Works3.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Services3",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "feat sub-bg section-padding" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-8 col-md-10"><div class="sec-head"><h6 class="wow fadeIn" data-wow-delay=".5s">Best Services</h6><h3 class="wow color-font"> We help to create strategies, design &amp; development. </h3></div></div></div><div class="row"><div class="col-lg-3 col-md-6 items md-mb30"><div class="item wow fadeIn" data-wow-delay=".3s"><span class="icon"><i class="ion-ios-monitor"></i></span><h5>Interface Design</h5><p> Implementation and rollout of new network infrastructure, including consolidation. </p><a href="#0" class="more-stroke"><span></span></a></div></div><div class="col-lg-3 col-md-6 items active md-mb30"><div class="item wow fadeIn" data-wow-delay=".3s"><span class="icon"><i class="ion-ios-bolt-outline"></i></span><h5>Creative Always</h5><p> Implementation and rollout of new network infrastructure, including consolidation. </p><a href="#0" class="more-stroke"><span></span></a></div></div><div class="col-lg-3 col-md-6 items sm-mb30"><div class="item wow fadeIn" data-wow-delay=".3s"><span class="icon"><i class="ion-cube"></i></span><h5>Real-time Editing</h5><p> Implementation and rollout of new network infrastructure, including consolidation. </p><a href="#0" class="more-stroke"><span></span></a></div></div><div class="col-lg-3 col-md-6 items"><div class="item wow fadeIn" data-wow-delay=".3s"><span class="icon"><i class="ion-ios-color-wand"></i></span><h5>Art Concept</h5><p> Implementation and rollout of new network infrastructure, including consolidation. </p><a href="#0" class="more-stroke"><span></span></a></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Services/Services3.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "MinimalArea2",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "min-area" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-6"><div class="img"><img class="thumparallax-down"${ssrRenderAttr("src", _imports_0$1)} alt=""></div></div><div class="col-lg-6 valign"><div class="content"><h4 class="color-font">Dream. Innovate. Implement.</h4><p class="wow txt words chars splitting" data-splitting> Our creative Ad agency is ranked among the finest in the US. We cultivate smart ideas for start-ups and seasoned players. By adhering to industry standards, we create some stunning portfolios. Company branding redefines. </p><ul><li class="wow fadeInUp" data-wow-delay=".2s"> We provide free initial consultation and support. </li><li class="wow fadeInUp" data-wow-delay=".4s"> We work with some of the most successful businesses. </li></ul>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about/about-dark",
        class: "butn bord curve mt-40 wow fadeInUp",
        "data-wow-delay": ".8s"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Discover</span>`);
          } else {
            return [
              createVNode("span", null, "Discover")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<br></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Others/MinimalArea2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$4 as _, _sfc_main$3 as a, _sfc_main$2 as b, _sfc_main$1 as c, _sfc_main as d };
//# sourceMappingURL=MinimalArea2-5f3d6269.mjs.map
