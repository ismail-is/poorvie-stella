import { _ as __nuxt_component_0 } from './nuxt-link-afaf4e47.mjs';
import { mergeProps, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation, Mousewheel } from 'swiper';
import { f as fullScreenData } from './fullScreen-9d269b59.mjs';

const _sfc_main = {
  __name: "ShowcaseGrid",
  __ssrInlineRender: true,
  props: ["sliderRef"],
  setup(__props) {
    const swiperOptions = {
      modules: [Autoplay, Navigation, Mousewheel],
      slidesPerView: 4,
      speed: 1e3,
      mousewheel: true,
      autoplay: true,
      loop: true,
      spaceBetween: 30,
      breakpoints: {
        0: {
          slidesPerView: 1
        },
        640: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 4
        }
      },
      navigation: {
        prevEl: ".txt-botm .swiper-button-prev",
        nextEl: ".txt-botm .swiper-button-next"
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<header${ssrRenderAttrs(mergeProps({
        ref: __props.sliderRef,
        class: "slider showcase-grid"
      }, _attrs))}><div id="content-carousel-container-unq-1">`);
      _push(ssrRenderComponent(unref(Swiper), swiperOptions, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(fullScreenData), (slide) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: slide.id,
                class: "swiper-slide"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="nbo-link"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_NuxtLink, { to: "/project-details2/project-details2-dark" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="bg-img" style="${ssrRenderStyle(`background-image: url(${slide.image})`)}"${ssrRenderAttr("data-tooltip-tit", slide.title.first + " " + slide.title.second)}${ssrRenderAttr("data-tooltip-sub", slide.sub)}${_scopeId3}></div>`);
                        } else {
                          return [
                            createVNode("div", {
                              class: "bg-img",
                              style: `background-image: url(${slide.image})`,
                              "data-tooltip-tit": slide.title.first + " " + slide.title.second,
                              "data-tooltip-sub": slide.sub
                            }, null, 12, ["data-tooltip-tit", "data-tooltip-sub"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "nbo-link" }, [
                        createVNode(_component_NuxtLink, { to: "/project-details2/project-details2-dark" }, {
                          default: withCtx(() => [
                            createVNode("div", {
                              class: "bg-img",
                              style: `background-image: url(${slide.image})`,
                              "data-tooltip-tit": slide.title.first + " " + slide.title.second,
                              "data-tooltip-sub": slide.sub
                            }, null, 12, ["data-tooltip-tit", "data-tooltip-sub"])
                          ]),
                          _: 2
                        }, 1024)
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
                  class: "swiper-slide"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "nbo-link" }, [
                      createVNode(_component_NuxtLink, { to: "/project-details2/project-details2-dark" }, {
                        default: withCtx(() => [
                          createVNode("div", {
                            class: "bg-img",
                            style: `background-image: url(${slide.image})`,
                            "data-tooltip-tit": slide.title.first + " " + slide.title.second,
                            "data-tooltip-sub": slide.sub
                          }, null, 12, ["data-tooltip-tit", "data-tooltip-sub"])
                        ]),
                        _: 2
                      }, 1024)
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
      _push(`<div class="txt-botm"><div class="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"><div><span>Next Slide</span></div><div><i class="fas fa-chevron-right"></i></div></div><div class="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"><div><i class="fas fa-chevron-left"></i></div><div><span>Prev Slide</span></div></div><div class="swiper-pagination dots"></div></div></div></header>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Showcases/ShowcaseGrid.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=ShowcaseGrid-265964ff.mjs.map
