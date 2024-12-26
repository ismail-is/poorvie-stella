import { _ as __nuxt_component_0 } from './nuxt-link-afaf4e47.mjs';
import { mergeProps, unref, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const blogs = [
  {
    id: 1,
    title: "How to use solid color combine with simple furnitures.",
    content: "My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. These qualities can be combined perfectly natural. However, things like people look miserable, if these properties are connected.",
    image: "/img/blog/l1.jpg",
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
    image: "/img/blog/l2.jpg",
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
    title: "Build a Beautiful Blog With Ease",
    content: "My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. These qualities can be combined perfectly natural. However, things like people look miserable, if these properties are connected.",
    image: "/img/blog/l3.jpg",
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
  __name: "BlogListed",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "blog-pg blog-list section-padding pt-0" }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-lg-11"><div class="posts mt-80"><!--[-->`);
      ssrRenderList(unref(blogs), (blogItem) => {
        _push(`<div class="item mb-80 wow fadeInUp" data-wow-delay=".3s"><div class="row"><div class="col-lg-6 valign"><div class="img md-mb50"><img${ssrRenderAttr("src", blogItem.image)} alt=""></div></div><div class="col-lg-6 valign"><div class="cont"><div><div class="info">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "#0",
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
            class: "tag",
            key: index,
            to: "#"
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
              _push2(`${ssrInterpolate(blogItem.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(blogItem.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</h5><p class="mt-10">${ssrInterpolate(blogItem.content.substr(0, 146) + "...")}</p><div class="btn-more mt-30">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/blog-details/blog-details-dark",
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
          _: 2
        }, _parent));
        _push(`</div></div></div></div></div></div>`);
      });
      _push(`<!--]--><div class="pagination"><span class="active"><a href="#">1</a></span><span><a href="#">2</a></span><span><a href="#"><i class="fas fa-angle-right"></i></a></span></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blogs/BlogListed.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=BlogListed-3edea850.mjs.map
