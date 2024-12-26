import { _ as __nuxt_component_0 } from './nuxt-link-afaf4e47.mjs';
import { mergeProps, unref, withCtx, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Parallax, Navigation, Mousewheel } from 'swiper';

const showcasse1Data = [
  {
    id: 1,
    title: {
      first: "Midnight",
      second: "Snack"
    },
    image: "/img/portfolio/full/1.jpg",
    sub: "Design"
  },
  {
    id: 2,
    title: {
      first: "Fisherman",
      second: "Portrait"
    },
    image: "/img/portfolio/full/2.jpg",
    sub: "Design"
  },
  {
    id: 3,
    title: {
      first: "Tribos",
      second: "Urbanas"
    },
    image: "/img/portfolio/full/3.jpg",
    sub: "Design"
  },
  {
    id: 4,
    title: {
      first: "Monsoon",
      second: "in the city"
    },
    image: "/img/portfolio/full/3.jpg",
    sub: "Design"
  }
];
const _sfc_main = {
  __name: "ShowcaseFullscreen",
  __ssrInlineRender: true,
  props: ["sliderRef"],
  setup(__props) {
    const swiperOptions = {
      modules: [Parallax, Navigation, Mousewheel],
      speed: 1e3,
      slidesPerView: 1,
      mousewheel: true,
      parallax: true,
      navigation: {
        prevEl: ".txt-botm .swiper-button-prev",
        nextEl: ".txt-botm .swiper-button-next"
      },
      onSwiper: (swiper) => {
        setTimeout(() => {
          for (var i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].childNodes[0].setAttribute(
              "data-swiper-parallax",
              0.75 * swiper.width
            );
          }
        });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<header${ssrRenderAttrs(mergeProps({
        ref: __props.sliderRef,
        class: "slider showcase-full"
      }, _attrs))}><div class="swiper-container parallax-slider">`);
      _push(ssrRenderComponent(unref(Swiper), mergeProps(swiperOptions, { class: "swiper-wrapper" }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(showcasse1Data), (slide) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: slide.id,
                class: "swiper-slide"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="bg-img valign" style="${ssrRenderStyle(`background-image: url(${slide.image})`)}" data-overlay-dark="4"${_scopeId2}><div class="container"${_scopeId2}><div class="row"${_scopeId2}><div class="col-lg-12"${_scopeId2}><div class="caption"${_scopeId2}><h1${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_NuxtLink, { to: "/project-details2/project-details2-dark" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="stroke" data-swiper-parallax="-2000"${_scopeId3}>${ssrInterpolate(slide.title.first)}</div><span data-swiper-parallax="-5000"${_scopeId3}>${ssrInterpolate(slide.title.second)}</span>`);
                        } else {
                          return [
                            createVNode("div", {
                              class: "stroke",
                              "data-swiper-parallax": "-2000"
                            }, toDisplayString(slide.title.first), 1),
                            createVNode("span", { "data-swiper-parallax": "-5000" }, toDisplayString(slide.title.second), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`<div class="bord"${_scopeId2}></div></h1><div class="discover"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_NuxtLink, { to: "/project-details2/project-details2-dark" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span${_scopeId3}> Explore <br${_scopeId3}> More </span>`);
                        } else {
                          return [
                            createVNode("span", null, [
                              createTextVNode(" Explore "),
                              createVNode("br"),
                              createTextVNode(" More ")
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div></div></div></div></div></div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: "bg-img valign",
                        style: `background-image: url(${slide.image})`,
                        "data-overlay-dark": "4"
                      }, [
                        createVNode("div", { class: "container" }, [
                          createVNode("div", { class: "row" }, [
                            createVNode("div", { class: "col-lg-12" }, [
                              createVNode("div", { class: "caption" }, [
                                createVNode("h1", null, [
                                  createVNode(_component_NuxtLink, { to: "/project-details2/project-details2-dark" }, {
                                    default: withCtx(() => [
                                      createVNode("div", {
                                        class: "stroke",
                                        "data-swiper-parallax": "-2000"
                                      }, toDisplayString(slide.title.first), 1),
                                      createVNode("span", { "data-swiper-parallax": "-5000" }, toDisplayString(slide.title.second), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode("div", { class: "bord" })
                                ]),
                                createVNode("div", { class: "discover" }, [
                                  createVNode(_component_NuxtLink, { to: "/project-details2/project-details2-dark" }, {
                                    default: withCtx(() => [
                                      createVNode("span", null, [
                                        createTextVNode(" Explore "),
                                        createVNode("br"),
                                        createTextVNode(" More ")
                                      ])
                                    ]),
                                    _: 1
                                  })
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
              (openBlock(true), createBlock(Fragment, null, renderList(unref(showcasse1Data), (slide) => {
                return openBlock(), createBlock(unref(SwiperSlide), {
                  key: slide.id,
                  class: "swiper-slide"
                }, {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: "bg-img valign",
                      style: `background-image: url(${slide.image})`,
                      "data-overlay-dark": "4"
                    }, [
                      createVNode("div", { class: "container" }, [
                        createVNode("div", { class: "row" }, [
                          createVNode("div", { class: "col-lg-12" }, [
                            createVNode("div", { class: "caption" }, [
                              createVNode("h1", null, [
                                createVNode(_component_NuxtLink, { to: "/project-details2/project-details2-dark" }, {
                                  default: withCtx(() => [
                                    createVNode("div", {
                                      class: "stroke",
                                      "data-swiper-parallax": "-2000"
                                    }, toDisplayString(slide.title.first), 1),
                                    createVNode("span", { "data-swiper-parallax": "-5000" }, toDisplayString(slide.title.second), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode("div", { class: "bord" })
                              ]),
                              createVNode("div", { class: "discover" }, [
                                createVNode(_component_NuxtLink, { to: "/project-details2/project-details2-dark" }, {
                                  default: withCtx(() => [
                                    createVNode("span", null, [
                                      createTextVNode(" Explore "),
                                      createVNode("br"),
                                      createTextVNode(" More ")
                                    ])
                                  ]),
                                  _: 1
                                })
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
      _push(`<div class="txt-botm"><div class="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"><div><span>Next Slide</span></div><div><i class="fas fa-chevron-right"></i></div></div><div class="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"><div><i class="fas fa-chevron-left"></i></div><div><span>Prev Slide</span></div></div><div class="swiper-pagination dots"></div></div></div></header>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Showcases/ShowcaseFullscreen.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=ShowcaseFullscreen-52357b5e.mjs.map
