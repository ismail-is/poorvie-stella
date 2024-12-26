import { ref, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Parallax, Navigation, Pagination } from 'swiper';

const intro1Data = [
  {
    id: 1,
    title: "Original Solutions",
    content: "If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration.",
    image: "/img/slid/02.jpg"
  },
  {
    id: 2,
    title: "Digital Design Awards",
    content: "If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration.",
    image: "/img/slid/03.jpg"
  },
  {
    id: 3,
    title: "Business value through digital products",
    content: "",
    image: "/img/slid/01.jpg"
  }
];
const _sfc_main = {
  __name: "SliderHeader",
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
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next"
      },
      parallax: true,
      pagination: {
        type: "fraction",
        clickable: true,
        el: ".swiper-pagination"
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
        ref_key: "fixedSlider",
        ref: fixedSlider,
        class: "slider slider-prlx fixed-slider text-center"
      }, _attrs))}><div class="swiper-container parallax-slider">`);
      _push(ssrRenderComponent(unref(Swiper), mergeProps(swiperOptions, { class: "swiper-wrapper" }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(intro1Data), (slide) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: slide.id,
                class: "swiper-slide"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="bg-img valign" style="${ssrRenderStyle(`background-image: url(${slide.image})`)}" data-overlay-dark="6"${_scopeId2}><div class="container"${_scopeId2}><div class="row justify-content-center"${_scopeId2}><div class="col-lg-8 col-md-10"${_scopeId2}><div class="caption center mt-30"${_scopeId2}><h1 class="color-font"${_scopeId2}>${ssrInterpolate(slide.title)}</h1>`);
                    if (slide.content) {
                      _push3(`<p${_scopeId2}>${ssrInterpolate(slide.content)}</p>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<a href="#" class="butn bord curve mt-30"${_scopeId2}><span${_scopeId2}>Look More</span></a></div></div></div></div></div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: "bg-img valign",
                        style: `background-image: url(${slide.image})`,
                        "data-overlay-dark": "6"
                      }, [
                        createVNode("div", { class: "container" }, [
                          createVNode("div", { class: "row justify-content-center" }, [
                            createVNode("div", { class: "col-lg-8 col-md-10" }, [
                              createVNode("div", { class: "caption center mt-30" }, [
                                createVNode("h1", { class: "color-font" }, toDisplayString(slide.title), 1),
                                slide.content ? (openBlock(), createBlock("p", { key: 0 }, toDisplayString(slide.content), 1)) : createCommentVNode("", true),
                                createVNode("a", {
                                  href: "#",
                                  class: "butn bord curve mt-30"
                                }, [
                                  createVNode("span", null, "Look More")
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
              (openBlock(true), createBlock(Fragment, null, renderList(unref(intro1Data), (slide) => {
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
                        createVNode("div", { class: "row justify-content-center" }, [
                          createVNode("div", { class: "col-lg-8 col-md-10" }, [
                            createVNode("div", { class: "caption center mt-30" }, [
                              createVNode("h1", { class: "color-font" }, toDisplayString(slide.title), 1),
                              slide.content ? (openBlock(), createBlock("p", { key: 0 }, toDisplayString(slide.content), 1)) : createCommentVNode("", true),
                              createVNode("a", {
                                href: "#",
                                class: "butn bord curve mt-30"
                              }, [
                                createVNode("span", null, "Look More")
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
      _push(`<div class="setone setwo"><div class="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"><i class="fas fa-chevron-right"></i></div><div class="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"><i class="fas fa-chevron-left"></i></div></div><div class="swiper-pagination top botm"></div><div class="social-icon"><a href="#"><i class="fab fa-facebook-f"></i></a><a href="#"><i class="fab fa-twitter"></i></a><a href="#"><i class="fab fa-behance"></i></a><a href="#"><i class="fab fa-pinterest-p"></i></a></div></div></header>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Headers/SliderHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=SliderHeader-16942ae7.mjs.map
