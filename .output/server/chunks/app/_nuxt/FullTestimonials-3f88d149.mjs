import { mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './1-62a40b4e.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation } from 'swiper';

const _sfc_main = {
  __name: "FullTestimonials",
  __ssrInlineRender: true,
  props: ["withIMG", "withCOLOR", "noPadding", "classText", "showHead"],
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
        class: `testimonials ${__props.withIMG ? "section-padding bg-img" : __props.withCOLOR ? "section-padding back-color" : __props.noPadding ? "" : "section-padding"} ${__props.classText ? __props.classText : ""}`,
        style: `background-image: ${__props.withIMG ? "url(" + __props.withIMG + ")" : "none"}`
      }, _attrs))}>`);
      if (__props.showHead) {
        _push(`<div class="container"><div class="row justify-content-center"><div class="col-lg-8 col-md-10"><div class="sec-head text-center"><h6 class="wow fadeIn" data-wow-delay=".5s">Testimonials</h6><h3 class="wow color-font"> We love our clients from all over the world. </h3></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="container-fluid position-re"><div class="row wow fadeInUp" data-wow-delay=".5s"><div class="col-lg-12">`);
      _push(ssrRenderComponent(unref(Swiper), mergeProps(settings, {
        class: "slic-item",
        "data-wow-delay": ".5s"
      }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "item" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="info valign"${_scopeId2}><div class="cont"${_scopeId2}><div class="author"${_scopeId2}><div class="img"${_scopeId2}><img${ssrRenderAttr("src", _imports_0)} alt=""${_scopeId2}></div><h6 class="author-name color-font"${_scopeId2}>Alex Regelman</h6><span class="author-details"${_scopeId2}> Co-founder, Colabrio </span></div></div></div><p${_scopeId2}> I would highly recommend Vie Digital. I worked with the team on an animation for our \u2018Click &amp; Collect\u2019 service. </p>`);
                } else {
                  return [
                    createVNode("div", { class: "info valign" }, [
                      createVNode("div", { class: "cont" }, [
                        createVNode("div", { class: "author" }, [
                          createVNode("div", { class: "img" }, [
                            createVNode("img", {
                              src: _imports_0,
                              alt: ""
                            })
                          ]),
                          createVNode("h6", { class: "author-name color-font" }, "Alex Regelman"),
                          createVNode("span", { class: "author-details" }, " Co-founder, Colabrio ")
                        ])
                      ])
                    ]),
                    createVNode("p", null, " I would highly recommend Vie Digital. I worked with the team on an animation for our \u2018Click & Collect\u2019 service. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "item" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="info valign"${_scopeId2}><div class="cont"${_scopeId2}><div class="author"${_scopeId2}><div class="img"${_scopeId2}><img${ssrRenderAttr("src", _imports_0)} alt=""${_scopeId2}></div><h6 class="author-name color-font"${_scopeId2}>Alex Regelman</h6><span class="author-details"${_scopeId2}> Co-founder, Colabrio </span></div></div></div><p${_scopeId2}> I would highly recommend Vie Digital. I worked with the team on an animation for our \u2018Click &amp; Collect\u2019 service. </p>`);
                } else {
                  return [
                    createVNode("div", { class: "info valign" }, [
                      createVNode("div", { class: "cont" }, [
                        createVNode("div", { class: "author" }, [
                          createVNode("div", { class: "img" }, [
                            createVNode("img", {
                              src: _imports_0,
                              alt: ""
                            })
                          ]),
                          createVNode("h6", { class: "author-name color-font" }, "Alex Regelman"),
                          createVNode("span", { class: "author-details" }, " Co-founder, Colabrio ")
                        ])
                      ])
                    ]),
                    createVNode("p", null, " I would highly recommend Vie Digital. I worked with the team on an animation for our \u2018Click & Collect\u2019 service. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "item" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="info valign"${_scopeId2}><div class="cont"${_scopeId2}><div class="author"${_scopeId2}><div class="img"${_scopeId2}><img${ssrRenderAttr("src", _imports_0)} alt=""${_scopeId2}></div><h6 class="author-name color-font"${_scopeId2}>Alex Regelman</h6><span class="author-details"${_scopeId2}> Co-founder, Colabrio </span></div></div></div><p${_scopeId2}> I would highly recommend Vie Digital. I worked with the team on an animation for our \u2018Click &amp; Collect\u2019 service. </p>`);
                } else {
                  return [
                    createVNode("div", { class: "info valign" }, [
                      createVNode("div", { class: "cont" }, [
                        createVNode("div", { class: "author" }, [
                          createVNode("div", { class: "img" }, [
                            createVNode("img", {
                              src: _imports_0,
                              alt: ""
                            })
                          ]),
                          createVNode("h6", { class: "author-name color-font" }, "Alex Regelman"),
                          createVNode("span", { class: "author-details" }, " Co-founder, Colabrio ")
                        ])
                      ])
                    ]),
                    createVNode("p", null, " I would highly recommend Vie Digital. I worked with the team on an animation for our \u2018Click & Collect\u2019 service. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "item" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="info valign"${_scopeId2}><div class="cont"${_scopeId2}><div class="author"${_scopeId2}><div class="img"${_scopeId2}><img${ssrRenderAttr("src", _imports_0)} alt=""${_scopeId2}></div><h6 class="author-name color-font"${_scopeId2}>Alex Regelman</h6><span class="author-details"${_scopeId2}> Co-founder, Colabrio </span></div></div></div><p${_scopeId2}> I would highly recommend Vie Digital. I worked with the team on an animation for our \u2018Click &amp; Collect\u2019 service. </p>`);
                } else {
                  return [
                    createVNode("div", { class: "info valign" }, [
                      createVNode("div", { class: "cont" }, [
                        createVNode("div", { class: "author" }, [
                          createVNode("div", { class: "img" }, [
                            createVNode("img", {
                              src: _imports_0,
                              alt: ""
                            })
                          ]),
                          createVNode("h6", { class: "author-name color-font" }, "Alex Regelman"),
                          createVNode("span", { class: "author-details" }, " Co-founder, Colabrio ")
                        ])
                      ])
                    ]),
                    createVNode("p", null, " I would highly recommend Vie Digital. I worked with the team on an animation for our \u2018Click & Collect\u2019 service. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(SwiperSlide), { class: "item" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "info valign" }, [
                    createVNode("div", { class: "cont" }, [
                      createVNode("div", { class: "author" }, [
                        createVNode("div", { class: "img" }, [
                          createVNode("img", {
                            src: _imports_0,
                            alt: ""
                          })
                        ]),
                        createVNode("h6", { class: "author-name color-font" }, "Alex Regelman"),
                        createVNode("span", { class: "author-details" }, " Co-founder, Colabrio ")
                      ])
                    ])
                  ]),
                  createVNode("p", null, " I would highly recommend Vie Digital. I worked with the team on an animation for our \u2018Click & Collect\u2019 service. ")
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "item" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "info valign" }, [
                    createVNode("div", { class: "cont" }, [
                      createVNode("div", { class: "author" }, [
                        createVNode("div", { class: "img" }, [
                          createVNode("img", {
                            src: _imports_0,
                            alt: ""
                          })
                        ]),
                        createVNode("h6", { class: "author-name color-font" }, "Alex Regelman"),
                        createVNode("span", { class: "author-details" }, " Co-founder, Colabrio ")
                      ])
                    ])
                  ]),
                  createVNode("p", null, " I would highly recommend Vie Digital. I worked with the team on an animation for our \u2018Click & Collect\u2019 service. ")
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "item" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "info valign" }, [
                    createVNode("div", { class: "cont" }, [
                      createVNode("div", { class: "author" }, [
                        createVNode("div", { class: "img" }, [
                          createVNode("img", {
                            src: _imports_0,
                            alt: ""
                          })
                        ]),
                        createVNode("h6", { class: "author-name color-font" }, "Alex Regelman"),
                        createVNode("span", { class: "author-details" }, " Co-founder, Colabrio ")
                      ])
                    ])
                  ]),
                  createVNode("p", null, " I would highly recommend Vie Digital. I worked with the team on an animation for our \u2018Click & Collect\u2019 service. ")
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "item" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "info valign" }, [
                    createVNode("div", { class: "cont" }, [
                      createVNode("div", { class: "author" }, [
                        createVNode("div", { class: "img" }, [
                          createVNode("img", {
                            src: _imports_0,
                            alt: ""
                          })
                        ]),
                        createVNode("h6", { class: "author-name color-font" }, "Alex Regelman"),
                        createVNode("span", { class: "author-details" }, " Co-founder, Colabrio ")
                      ])
                    ])
                  ]),
                  createVNode("p", null, " I would highly recommend Vie Digital. I worked with the team on an animation for our \u2018Click & Collect\u2019 service. ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="arrows"><div class="container"><div class="next cursor-pointer"><span class="pe-7s-angle-right"></span></div><div class="prev cursor-pointer"><span class="pe-7s-angle-left"></span></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Testimonials/FullTestimonials.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=FullTestimonials-3f88d149.mjs.map
