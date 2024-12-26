import { _ as __nuxt_component_0 } from './nuxt-link-afaf4e47.mjs';
import { mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';

const filters = [
  {
    type: "Show All",
    operator: "*"
  },
  {
    type: "Mobile Apps",
    operator: ".brand"
  },
  {
    type: "Development",
    operator: ".web"
  },
  {
    type: "Branding",
    operator: ".graphic"
  },
  {
    type: "Design",
    operator: ".design"
  },
  {
    type: "Logo Design",
    operator: ".app"
  }
];
const works = [
  {
    image: "/mobile-app/img/works/1.jpg",
    type: "graphic",
    title: "Mobile UI Design",
    tags: "Design Branding"
  },
  {
    image: "/mobile-app/img/works/2.jpg",
    type: "web",
    title: "Mobile UI Design",
    tags: "Design Branding"
  },
  {
    image: "/mobile-app/img/works/5.jpg",
    type: "web",
    title: "Mobile UI Design",
    tags: "Design Branding"
  },
  {
    image: "/mobile-app/img/works/3.jpg",
    type: "web graphic",
    title: "Mobile UI Design",
    tags: "Design Branding"
  },
  {
    image: "/mobile-app/img/works/4.jpg",
    type: "app design",
    title: "Mobile UI Design",
    tags: "Design Branding"
  },
  {
    image: "/mobile-app/img/works/6.jpg",
    type: "brand",
    title: "Mobile UI Design",
    tags: "Design Branding"
  },
  {
    image: "/mobile-app/img/works/7.jpg",
    type: "items",
    title: "Mobile UI Design",
    tags: "Design Branding"
  },
  {
    image: "/mobile-app/img/works/8.jpg",
    type: "design",
    title: "Mobile UI Design",
    tags: "Design Branding"
  }
];
const works$1 = {
  filters,
  works
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: ["theme"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "app-works section-padding" }, _attrs))}><div class="container"><div class="row"><div class="filtering col-12"><div class="filter custom-font wow fadeIn" data-wow-delay=".5s" style="${ssrRenderStyle({ "visibility": "visible", "animation-delay": "0.5s", "animation-name": "fadeIn" })}"><!--[-->`);
      ssrRenderList(unref(works$1).filters, (filter, idx) => {
        _push(`<span${ssrRenderAttr("data-filter", filter.operator)} class="${ssrRenderClass(idx === 0 ? "active" : "")}">${ssrInterpolate(filter.type)}</span>`);
      });
      _push(`<!--]--></div></div><div class="gallery full-width" style="${ssrRenderStyle({ "position": "relative", "height": "2246.51px" })}"><!--[-->`);
      ssrRenderList(unref(works$1).works, (work, idx) => {
        _push(`<div class="${ssrRenderClass(`col-md-6 items ${work.type} wow fadeInUp`)}" data-wow-delay=".4s"><div class="item-img">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/project-details2/project-details2-${__props.theme || "dark"}`,
          class: "imago wow animated"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", work.image)} alt="image"${_scopeId}><div class="item-img-overlay"${_scopeId}></div>`);
            } else {
              return [
                createVNode("img", {
                  src: work.image,
                  alt: "image"
                }, null, 8, ["src"]),
                createVNode("div", { class: "item-img-overlay" })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<div class="cont valign"><div class="full-width text-center"><span class="icon pe-7s-angle-right"></span><h5>${ssrInterpolate(work.title)}</h5><span class="tags">${ssrInterpolate(work.tags)}</span></div></div></div></div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Mobile-app/Works/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=index-a7a15999.mjs.map
