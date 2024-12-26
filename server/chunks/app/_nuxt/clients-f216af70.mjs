import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './1-62a40b4e.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { M as ModalVideo } from './ModalVideo-db24fbd8.mjs';

const _imports_1 = "" + publicAssetsURL("img/clients/2.jpg");
const _imports_2 = "" + publicAssetsURL("img/clients/3.jpg");
const videoChannel = "vimeo";
const videoId = "127203262";
const _sfc_main = {
  __name: "TestimonialsWithVideo",
  __ssrInlineRender: true,
  setup(__props) {
    const videoIsOpen = ref(false);
    const settings = {
      loop: true,
      speed: 500,
      slidesPerView: 1
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "block-sec" }, _attrs))}><div class="background bg-img pt-100 pb-0 parallaxie" style="${ssrRenderStyle({ "background-image": "url('/img/bg-vid.jpg')" })}" data-overlay-dark="5"><div class="container"><div class="row"><div class="col-lg-6"><div class="vid-area"><span class="text">Watch Video</span>`);
      _push(ssrRenderComponent(ModalVideo, {
        channel: videoChannel,
        videoId,
        isOpen: unref(videoIsOpen)
      }, null, _parent));
      _push(`<div class="vid-icon cursor-pointer"><a class="vid"><div class="vid-butn"><span class="icon"><i class="fas fa-play"></i></span></div></a></div></div></div><div class="col-lg-5 offset-lg-1"><div class="testim-box"><div class="head-box"><h6 class="wow fadeIn" data-wow-delay=".5s">Our Clients</h6><h4 class="wow fadeInLeft" data-wow-delay=".5s"> What Client&#39;s Say? </h4></div>`);
      _push(ssrRenderComponent(unref(Swiper), mergeProps(settings, {
        class: "slic-item wow fadeInUp",
        "data-wow-delay": ".5s"
      }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "item" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p${_scopeId2}> Nulla metus metus ullamcorper vel tincidunt sed euismod nibh volutpat velit class aptent taciti sociosqu ad litora. </p><div class="info"${_scopeId2}><div class="img"${_scopeId2}><div class="img-box"${_scopeId2}><img${ssrRenderAttr("src", _imports_0)} alt=""${_scopeId2}></div></div><div class="cont"${_scopeId2}><div class="author"${_scopeId2}><h6 class="author-name"${_scopeId2}>Alex Regelman</h6><span class="author-details"${_scopeId2}> Co-founder, Colabrio </span></div></div></div>`);
                } else {
                  return [
                    createVNode("p", null, " Nulla metus metus ullamcorper vel tincidunt sed euismod nibh volutpat velit class aptent taciti sociosqu ad litora. "),
                    createVNode("div", { class: "info" }, [
                      createVNode("div", { class: "img" }, [
                        createVNode("div", { class: "img-box" }, [
                          createVNode("img", {
                            src: _imports_0,
                            alt: ""
                          })
                        ])
                      ]),
                      createVNode("div", { class: "cont" }, [
                        createVNode("div", { class: "author" }, [
                          createVNode("h6", { class: "author-name" }, "Alex Regelman"),
                          createVNode("span", { class: "author-details" }, " Co-founder, Colabrio ")
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "item" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p${_scopeId2}> Nulla metus metus ullamcorper vel tincidunt sed euismod nibh volutpat velit class aptent taciti sociosqu ad litora. </p><div class="info"${_scopeId2}><div class="img"${_scopeId2}><div class="img-box"${_scopeId2}><img${ssrRenderAttr("src", _imports_1)} alt=""${_scopeId2}></div></div><div class="cont"${_scopeId2}><div class="author"${_scopeId2}><h6 class="author-name"${_scopeId2}>Alex Regelman</h6><span class="author-details"${_scopeId2}> Co-founder, Colabrio </span></div></div></div>`);
                } else {
                  return [
                    createVNode("p", null, " Nulla metus metus ullamcorper vel tincidunt sed euismod nibh volutpat velit class aptent taciti sociosqu ad litora. "),
                    createVNode("div", { class: "info" }, [
                      createVNode("div", { class: "img" }, [
                        createVNode("div", { class: "img-box" }, [
                          createVNode("img", {
                            src: _imports_1,
                            alt: ""
                          })
                        ])
                      ]),
                      createVNode("div", { class: "cont" }, [
                        createVNode("div", { class: "author" }, [
                          createVNode("h6", { class: "author-name" }, "Alex Regelman"),
                          createVNode("span", { class: "author-details" }, " Co-founder, Colabrio ")
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "item" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p${_scopeId2}> Nulla metus metus ullamcorper vel tincidunt sed euismod nibh volutpat velit class aptent taciti sociosqu ad litora. </p><div class="info"${_scopeId2}><div class="img"${_scopeId2}><div class="img-box"${_scopeId2}><img${ssrRenderAttr("src", _imports_2)} alt=""${_scopeId2}></div></div><div class="cont"${_scopeId2}><div class="author"${_scopeId2}><h6 class="author-name"${_scopeId2}>Alex Regelman</h6><span class="author-details"${_scopeId2}> Co-founder, Colabrio </span></div></div></div>`);
                } else {
                  return [
                    createVNode("p", null, " Nulla metus metus ullamcorper vel tincidunt sed euismod nibh volutpat velit class aptent taciti sociosqu ad litora. "),
                    createVNode("div", { class: "info" }, [
                      createVNode("div", { class: "img" }, [
                        createVNode("div", { class: "img-box" }, [
                          createVNode("img", {
                            src: _imports_2,
                            alt: ""
                          })
                        ])
                      ]),
                      createVNode("div", { class: "cont" }, [
                        createVNode("div", { class: "author" }, [
                          createVNode("h6", { class: "author-name" }, "Alex Regelman"),
                          createVNode("span", { class: "author-details" }, " Co-founder, Colabrio ")
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
              createVNode(unref(SwiperSlide), { class: "item" }, {
                default: withCtx(() => [
                  createVNode("p", null, " Nulla metus metus ullamcorper vel tincidunt sed euismod nibh volutpat velit class aptent taciti sociosqu ad litora. "),
                  createVNode("div", { class: "info" }, [
                    createVNode("div", { class: "img" }, [
                      createVNode("div", { class: "img-box" }, [
                        createVNode("img", {
                          src: _imports_0,
                          alt: ""
                        })
                      ])
                    ]),
                    createVNode("div", { class: "cont" }, [
                      createVNode("div", { class: "author" }, [
                        createVNode("h6", { class: "author-name" }, "Alex Regelman"),
                        createVNode("span", { class: "author-details" }, " Co-founder, Colabrio ")
                      ])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "item" }, {
                default: withCtx(() => [
                  createVNode("p", null, " Nulla metus metus ullamcorper vel tincidunt sed euismod nibh volutpat velit class aptent taciti sociosqu ad litora. "),
                  createVNode("div", { class: "info" }, [
                    createVNode("div", { class: "img" }, [
                      createVNode("div", { class: "img-box" }, [
                        createVNode("img", {
                          src: _imports_1,
                          alt: ""
                        })
                      ])
                    ]),
                    createVNode("div", { class: "cont" }, [
                      createVNode("div", { class: "author" }, [
                        createVNode("h6", { class: "author-name" }, "Alex Regelman"),
                        createVNode("span", { class: "author-details" }, " Co-founder, Colabrio ")
                      ])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "item" }, {
                default: withCtx(() => [
                  createVNode("p", null, " Nulla metus metus ullamcorper vel tincidunt sed euismod nibh volutpat velit class aptent taciti sociosqu ad litora. "),
                  createVNode("div", { class: "info" }, [
                    createVNode("div", { class: "img" }, [
                      createVNode("div", { class: "img-box" }, [
                        createVNode("img", {
                          src: _imports_2,
                          alt: ""
                        })
                      ])
                    ]),
                    createVNode("div", { class: "cont" }, [
                      createVNode("div", { class: "author" }, [
                        createVNode("h6", { class: "author-name" }, "Alex Regelman"),
                        createVNode("span", { class: "author-details" }, " Co-founder, Colabrio ")
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
      _push(`</div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Testimonials/TestimonialsWithVideo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const clientsData = [
  {
    id: 1,
    lightImage: "/img/clients/brands/light/01.png",
    darkImage: "/img/clients/brands/dark/01.png",
    url: "www.Vie.com"
  },
  {
    id: 2,
    lightImage: "/img/clients/brands/light/02.png",
    darkImage: "/img/clients/brands/dark/02.png",
    url: "www.Vie.com"
  },
  {
    id: 3,
    lightImage: "/img/clients/brands/light/03.png",
    darkImage: "/img/clients/brands/dark/03.png",
    url: "www.Vie.com"
  },
  {
    id: 4,
    lightImage: "/img/clients/brands/light/04.png",
    darkImage: "/img/clients/brands/dark/04.png",
    url: "www.Vie.com"
  },
  {
    id: 5,
    lightImage: "/img/clients/brands/light/05.png",
    darkImage: "/img/clients/brands/dark/05.png",
    url: "www.Vie.com"
  },
  {
    id: 6,
    lightImage: "/img/clients/brands/light/06.png",
    darkImage: "/img/clients/brands/dark/06.png",
    url: "www.Vie.com"
  },
  {
    id: 7,
    lightImage: "/img/clients/brands/light/07.png",
    darkImage: "/img/clients/brands/dark/07.png",
    url: "www.Vie.com"
  },
  {
    id: 8,
    lightImage: "/img/clients/brands/light/08.png",
    darkImage: "/img/clients/brands/dark/08.png",
    url: "www.Vie.com"
  }
];

export { _sfc_main as _, clientsData as c };
//# sourceMappingURL=clients-f216af70.mjs.map
