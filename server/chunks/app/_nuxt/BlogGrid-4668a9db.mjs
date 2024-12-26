import { _ as __nuxt_component_0 } from './nuxt-link-afaf4e47.mjs';
import { mergeProps, unref, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const blogs = [
  {
    id: 1,
    title: "How to use solid color combine with simple furnitures.",
    image: "/img/blog/b1.jpg",
    tags: [
      "WordPress",
      "Themeforest",
      "Vie"
    ],
    date: {
      day: "07",
      month: "August"
    }
  },
  {
    id: 2,
    title: "How to use solid color combine with simple furnitures.",
    image: "/img/blog/b2.jpg",
    tags: [
      "WordPress"
    ],
    date: {
      day: "07",
      month: "August"
    }
  },
  {
    id: 3,
    title: "How to use solid color combine with simple furnitures.",
    image: "/img/blog/b3.jpg",
    tags: [
      "WordPress",
      "Themeforest",
      "Vie"
    ],
    date: {
      day: "07",
      month: "August"
    }
  },
  {
    id: 4,
    title: "How to use solid color combine with simple furnitures.",
    image: "/img/blog/b4.jpg",
    tags: [
      "WordPress",
      "Themeforest",
      "Vie"
    ],
    date: {
      day: "07",
      month: "August"
    }
  },
  {
    id: 5,
    title: "How to use solid color combine with simple furnitures.",
    image: "/img/blog/b2.jpg",
    tags: [
      "WordPress"
    ],
    date: {
      day: "07",
      month: "August"
    }
  },
  {
    id: 6,
    title: "How to use solid color combine with simple furnitures.",
    image: "/img/blog/b3.jpg",
    tags: [
      "WordPress",
      "Themeforest",
      "Vie"
    ],
    date: {
      day: "07",
      month: "August"
    }
  }
];
const _sfc_main = {
  __name: "BlogGrid",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "blog-pg blog section-padding pt-0" }, _attrs))}><div class="container"><div class="posts"><div class="row"><!--[-->`);
      ssrRenderList(unref(blogs), (blogItem) => {
        _push(`<div class="col-lg-4"><div class="item mb-80 wow fadeInUp" data-wow-delay=".3s"><div class="img"><img${ssrRenderAttr("src", blogItem.image)} alt=""></div><div class="cont"><div><div class="info">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/blog-details/blog-details-dark",
          class: "date"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}><i${_scopeId}>${ssrInterpolate(blogItem.date.day)}</i> ${ssrInterpolate(blogItem.date.month)}</span>`);
            } else {
              return [
                createVNode("span", null, [
                  createVNode("i", null, toDisplayString(blogItem.date.day), 1),
                  createTextVNode(" " + toDisplayString(blogItem.date.month), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<span>/</span><!--[-->`);
        ssrRenderList(blogItem.tags, (tag, index) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: index,
            to: "#0",
            class: "tag"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span${_scopeId}>${ssrInterpolate(tag)}</span>`);
              } else {
                return [
                  createVNode("span", null, toDisplayString(tag), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div><h5>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/blog-details/blog-details-dark" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(blogItem.title.substr(0, 55) + "...")}`);
            } else {
              return [
                createTextVNode(toDisplayString(blogItem.title.substr(0, 55) + "..."), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</h5><div class="btn-more">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "simple-btn",
          to: "/blog-details/blog-details-dark"
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
          _: 2
        }, _parent));
        _push(`</div></div></div></div></div>`);
      });
      _push(`<!--]--><div class="pagination"><span class="active"><a href="#">1</a></span><span><a href="#">2</a></span><span><a href="#"><i class="fas fa-angle-right"></i></a></span></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blogs/BlogGrid.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=BlogGrid-4668a9db.mjs.map
