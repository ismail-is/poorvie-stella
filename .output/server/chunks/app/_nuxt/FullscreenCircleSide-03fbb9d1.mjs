import { _ as __nuxt_component_0 } from './nuxt-link-afaf4e47.mjs';
import { ref, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Parallax, Navigation, Pagination, Autoplay } from 'swiper';
import { f as fullScreenData } from './fullScreen-9d269b59.mjs';

const _sfc_main = {
  __name: "FullscreenCircleSide",
  __ssrInlineRender: true,
  props: ["sliderRef"],
  setup(__props, { expose: __expose }) {
    const fixedSlider = ref();
    __expose({
      fixedSlider
    });
    const swiperOptions = {
      modules: [Parallax, Navigation, Pagination, Autoplay],
      speed: 1e3,
      mousewheel: true,
      parallax: true,
      centeredSlides: true,
      slidesPerView: 1,
      autoplay: true,
      spaceBetween: 500,
      navigation: {
        prevEl: ".txt-botm .swiper-button-prev",
        nextEl: ".txt-botm .swiper-button-next"
      },
      breakpoints: {
        0: {
          spaceBetween: 0
        },
        640: {
          spaceBetween: 0
        },
        768: {
          spaceBetween: 30
        },
        1024: {
          spaceBetween: 500
        }
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
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "slider circle-slide showcase-carus" }, _attrs))}><div id="content-carousel-container-unq-1" class="swiper-container">`);
      _push(ssrRenderComponent(unref(Swiper), mergeProps(swiperOptions, { class: "swiper-wrapper" }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(fullScreenData), (slide) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: slide.id,
                class: "SwiperSlide"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="full-width"${_scopeId2}><div class="bg-img valign" style="${ssrRenderStyle(`background-image: url(${slide.image})`)}" data-overlay-dark="1"${_scopeId2}><div class="caption ontop valign"${_scopeId2}><div class="o-hidden"${_scopeId2}><h1 data-swiper-parallax="-2000"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_NuxtLink, { to: "/project-details2/project-details2-dark" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="stroke"${_scopeId3}>${ssrInterpolate(slide.title.first)}</div><span${_scopeId3}>${ssrInterpolate(slide.title.second)}</span>`);
                        } else {
                          return [
                            createVNode("div", { class: "stroke" }, toDisplayString(slide.title.first), 1),
                            createVNode("span", null, toDisplayString(slide.title.second), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</h1></div></div><div class="copy-cap valign"${_scopeId2}><div class="cap"${_scopeId2}><h1 data-swiper-parallax="-2000"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_NuxtLink, { to: "/project-details2/project-details2-dark" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="stroke"${_scopeId3}>${ssrInterpolate(slide.title.first)}</div><span${_scopeId3}>${ssrInterpolate(slide.title.second)}</span>`);
                        } else {
                          return [
                            createVNode("div", { class: "stroke" }, toDisplayString(slide.title.first), 1),
                            createVNode("span", null, toDisplayString(slide.title.second), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</h1></div></div></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "full-width" }, [
                        createVNode("div", {
                          class: "bg-img valign",
                          style: `background-image: url(${slide.image})`,
                          "data-overlay-dark": "1"
                        }, [
                          createVNode("div", { class: "caption ontop valign" }, [
                            createVNode("div", { class: "o-hidden" }, [
                              createVNode("h1", { "data-swiper-parallax": "-2000" }, [
                                createVNode(_component_NuxtLink, { to: "/project-details2/project-details2-dark" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "stroke" }, toDisplayString(slide.title.first), 1),
                                    createVNode("span", null, toDisplayString(slide.title.second), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "copy-cap valign" }, [
                            createVNode("div", { class: "cap" }, [
                              createVNode("h1", { "data-swiper-parallax": "-2000" }, [
                                createVNode(_component_NuxtLink, { to: "/project-details2/project-details2-dark" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "stroke" }, toDisplayString(slide.title.first), 1),
                                    createVNode("span", null, toDisplayString(slide.title.second), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ])
                            ])
                          ])
                        ], 4)
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
              (openBlock(true), createBlock(Fragment, null, renderList(unref(fullScreenData), (slide) => {
                return openBlock(), createBlock(unref(SwiperSlide), {
                  key: slide.id,
                  class: "SwiperSlide"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "full-width" }, [
                      createVNode("div", {
                        class: "bg-img valign",
                        style: `background-image: url(${slide.image})`,
                        "data-overlay-dark": "1"
                      }, [
                        createVNode("div", { class: "caption ontop valign" }, [
                          createVNode("div", { class: "o-hidden" }, [
                            createVNode("h1", { "data-swiper-parallax": "-2000" }, [
                              createVNode(_component_NuxtLink, { to: "/project-details2/project-details2-dark" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "stroke" }, toDisplayString(slide.title.first), 1),
                                  createVNode("span", null, toDisplayString(slide.title.second), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "copy-cap valign" }, [
                          createVNode("div", { class: "cap" }, [
                            createVNode("h1", { "data-swiper-parallax": "-2000" }, [
                              createVNode(_component_NuxtLink, { to: "/project-details2/project-details2-dark" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "stroke" }, toDisplayString(slide.title.first), 1),
                                  createVNode("span", null, toDisplayString(slide.title.second), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ])
                          ])
                        ])
                      ], 4)
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
      _push(`</div><div class="txt-botm"><div class="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"><div><span>Next Slide</span></div><div><i class="fas fa-chevron-right"></i></div></div><div class="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"><div><i class="fas fa-chevron-left"></i></div><div><span>Prev Slide</span></div></div></div></header>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Showcases/FullscreenCircleSide.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=FullscreenCircleSide-03fbb9d1.mjs.map
