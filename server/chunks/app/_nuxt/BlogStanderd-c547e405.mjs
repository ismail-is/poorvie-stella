import { _ as __nuxt_component_0 } from './nuxt-link-afaf4e47.mjs';
import { mergeProps, unref, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';

const blogs = [
  {
    id: 1,
    title: "Build a Beautiful Blog With Ease",
    content: "My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. These qualities can be combined perfectly natural. However, things like people look miserable, if these properties are connected.",
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
    title: "Build a Beautiful Blog With Ease",
    content: "My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. These qualities can be combined perfectly natural. However, things like people look miserable, if these properties are connected.",
    image: "/img/blog/b2.jpg",
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
    id: 3,
    title: "Build a Beautiful Blog With Ease",
    content: "My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. These qualities can be combined perfectly natural. However, things like people look miserable, if these properties are connected.",
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
    title: "Build a Beautiful Blog With Ease",
    content: "My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. These qualities can be combined perfectly natural. However, things like people look miserable, if these properties are connected.",
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
  }
];
const _sfc_main = {
  __name: "BlogStanderd",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "blog-pg section-padding pt-0" }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-lg-11"><div class="posts"><!--[-->`);
      ssrRenderList(unref(blogs), (blogItem, index) => {
        _push(`<div class="${ssrRenderClass(`item ${index === unref(blogs).length - 1 ? "" : "mb-80"}`)}"><div class="img">`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/blog-details/blog-details-dark" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", blogItem.image)} alt=""${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: blogItem.image,
                  alt: ""
                }, null, 8, ["src"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="content"><div class="row justify-content-center"><div class="col-10">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/blog/blog-dark",
          class: "date"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="num"${_scopeId}>${ssrInterpolate(blogItem.date.day)}</span><span${_scopeId}>${ssrInterpolate(blogItem.date.month)}</span>`);
            } else {
              return [
                createVNode("span", { class: "num" }, toDisplayString(blogItem.date.day), 1),
                createVNode("span", null, toDisplayString(blogItem.date.month), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<div class="tags"><!--[-->`);
        ssrRenderList(blogItem.tags, (tag, index2) => {
          _push(`<a href="#">${ssrInterpolate(tag)}</a>`);
        });
        _push(`<!--]--></div><h4 class="title">`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/blog-details/blog-details-dark" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(blogItem.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(blogItem.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</h4><p>${ssrInterpolate(blogItem.content)}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/blog-details/blog-details-dark",
          class: "butn bord curve mt-30"
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
        _push(`</div></div></div></div>`);
      });
      _push(`<!--]--><div class="pagination"><span class="active">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/blog/blog-dark" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`1`);
          } else {
            return [
              createTextVNode("1")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span><span>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/blog/blog-dark" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`2`);
          } else {
            return [
              createTextVNode("2")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span><span>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/blog/blog-dark" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fas fa-angle-right"${_scopeId}></i>`);
          } else {
            return [
              createVNode("i", { class: "fas fa-angle-right" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blogs/BlogStanderd.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=BlogStanderd-c547e405.mjs.map
