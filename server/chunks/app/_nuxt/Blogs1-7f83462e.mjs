import { _ as __nuxt_component_0 } from './nuxt-link-afaf4e47.mjs';
import { mergeProps, unref, withCtx, createVNode, useSSRContext, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation } from 'swiper';
import { a as _imports_0, _ as _imports_1 } from './2-060c6328.mjs';
import { _ as _export_sfc } from '../server.mjs';

const id = 1;
const smallTitle = "About Us";
const title = "Our Comapny";
const content = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.";
const image = "/img/feat.jpg";
const status = [
  {
    id: 1,
    number: "3",
    letter: "K",
    statusName: "Happy Clients"
  },
  {
    id: 2,
    number: "14",
    letter: "K",
    statusName: "Success Projects"
  }
];
const aboutData = {
  id,
  smallTitle,
  title,
  content,
  image,
  status
};
const _sfc_main$2 = {
  __name: "AboutUs1",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "about-us section-padding" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-5 valign md-mb50"><div class="mb-50"><h6 class="fw-100 text-u ls10 mb-10">${ssrInterpolate(unref(aboutData).smallTitle)}</h6><h3 class="fw-600 text-u ls1 mb-30 color-font">${ssrInterpolate(unref(aboutData).title)}</h3><p>${ssrInterpolate(unref(aboutData).content)}</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "butn bord curve mt-30"
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
        _: 1
      }, _parent));
      _push(`</div></div><div class="col-lg-7 img"><img${ssrRenderAttr("src", unref(aboutData).image)}${ssrRenderAttr("alt", unref(aboutData).title)}><div class="stauts"><!--[-->`);
      ssrRenderList(unref(aboutData).status, (statue) => {
        _push(`<div class="item"><h4>${ssrInterpolate(statue.number)} <span>${ssrInterpolate(statue.letter)}</span></h4><h6>${ssrInterpolate(statue.statusName)}</h6></div>`);
      });
      _push(`<!--]--></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AboutUs/AboutUs1.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const worksData = [
  {
    id: 1,
    title: "art & illustration",
    secTex: "Innovation and Crafts",
    image: "/img/portfolio/metro/01.jpg",
    slug: "/project-details2/project-details2-dark"
  },
  {
    id: 2,
    title: "art & illustration",
    secTex: "Inspiring new space",
    image: "/img/portfolio/metro/02.jpg",
    slug: "/project-details2/project-details2-dark"
  },
  {
    id: 3,
    title: "art & illustration",
    secTex: "Natural plus modern",
    image: "/img/portfolio/metro/03.jpg",
    slug: "/project-details2/project-details2-dark"
  },
  {
    id: 4,
    title: "art & illustration",
    secTex: "Innovation and Crafts",
    image: "/img/portfolio/metro/04.jpg",
    slug: "/project-details2/project-details2-dark"
  },
  {
    id: 5,
    title: "art & illustration",
    secTex: "Natural plus modern",
    image: "/img/portfolio/metro/05.jpg",
    slug: "/project-details2/project-details2-dark"
  }
];
const _sfc_main$1 = {
  __name: "Works1",
  __ssrInlineRender: true,
  setup(__props) {
    const swiperOptions = {
      modules: [Autoplay, Navigation],
      navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next"
      },
      slidesPerView: 2,
      centeredSlides: true,
      autoPlay: true,
      loop: true,
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
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "work-carousel metro position-re" }, _attrs))}><div class="container-fluid"><div class="row"><div class="col-lg-12 no-padding"><div class="swiper-container">`);
      _push(ssrRenderComponent(unref(Swiper), mergeProps(swiperOptions, { class: "swiper-wrapper" }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(worksData), (slide) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: slide.id,
                class: "swiper-slide"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="content wow noraidus fadeInUp" data-wow-delay=".3s"${_scopeId2}><div class="item-img bg-img wow imago" style="${ssrRenderStyle(`background-image: url(${slide.image})`)}"${_scopeId2}></div><div class="cont"${_scopeId2}><h6 class="color-font"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(slide.title)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(slide.title), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</h6><h4${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_NuxtLink, { to: "/project-details2/project-details2-dark" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(slide.secTex)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(slide.secTex), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</h4></div></div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: "content wow noraidus fadeInUp",
                        "data-wow-delay": ".3s"
                      }, [
                        createVNode("div", {
                          class: "item-img bg-img wow imago",
                          style: `background-image: url(${slide.image})`
                        }, null, 4),
                        createVNode("div", { class: "cont" }, [
                          createVNode("h6", { class: "color-font" }, [
                            createVNode(_component_NuxtLink, { to: "#" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(slide.title), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          createVNode("h4", null, [
                            createVNode(_component_NuxtLink, { to: "/project-details2/project-details2-dark" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(slide.secTex), 1)
                              ]),
                              _: 2
                            }, 1024)
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
              (openBlock(true), createBlock(Fragment, null, renderList(unref(worksData), (slide) => {
                return openBlock(), createBlock(unref(SwiperSlide), {
                  key: slide.id,
                  class: "swiper-slide"
                }, {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: "content wow noraidus fadeInUp",
                      "data-wow-delay": ".3s"
                    }, [
                      createVNode("div", {
                        class: "item-img bg-img wow imago",
                        style: `background-image: url(${slide.image})`
                      }, null, 4),
                      createVNode("div", { class: "cont" }, [
                        createVNode("h6", { class: "color-font" }, [
                          createVNode(_component_NuxtLink, { to: "#" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(slide.title), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        createVNode("h4", null, [
                          createVNode(_component_NuxtLink, { to: "/project-details2/project-details2-dark" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(slide.secTex), 1)
                            ]),
                            _: 2
                          }, 1024)
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
      _push(`<div class="swiper-button-next swiper-nav-ctrl simp-next cursor-pointer"><span class="simple-btn right">Next</span></div><div class="swiper-button-prev swiper-nav-ctrl simp-prev cursor-pointer"><span class="simple-btn">Prev</span></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Works/Works1.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "blog section-padding sub-bg" }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-lg-8 col-md-10"><div class="sec-head text-center"><h6 class="wow fadeIn" data-wow-delay=".5s">RECENT ARTICLES</h6><h3 class="wow color-font">From our blogs.</h3></div></div></div><div class="row"><div class="col-lg-6"><div class="item md-mb50 wow fadeInUp" data-wow-delay=".3s"><div class="img"><img${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="cont"><div><div class="info">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "#",
    class: "date"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}><i${_scopeId}>06</i> August </span>`);
      } else {
        return [
          createVNode("span", null, [
            createVNode("i", null, "06"),
            createTextVNode(" August ")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span>/</span>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "#",
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
  _push(`</div><h5>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` How to use solid color combine with simple furnitures. `);
      } else {
        return [
          createTextVNode(" How to use solid color combine with simple furnitures. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h5><div class="btn-more">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "#",
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
  _push(`</div></div></div></div></div><div class="col-lg-6"><div class="item md-mb50 wow fadeInUp" data-wow-delay=".5s"><div class="img"><img${ssrRenderAttr("src", _imports_1)} alt=""></div><div class="cont"><div><div class="info">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "#",
    class: "date"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}><i${_scopeId}>06</i> August </span>`);
      } else {
        return [
          createVNode("span", null, [
            createVNode("i", null, "06"),
            createTextVNode(" August ")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span>/</span>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "#",
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
  _push(`</div><h5>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` How to use solid color combine with simple furnitures. `);
      } else {
        return [
          createTextVNode(" How to use solid color combine with simple furnitures. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h5><div class="btn-more">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "#",
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
  _push(`</div></div></div></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blogs/Blogs1.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Blogs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Blogs as B, _sfc_main$2 as _, _sfc_main$1 as a };
//# sourceMappingURL=Blogs1-7f83462e.mjs.map
