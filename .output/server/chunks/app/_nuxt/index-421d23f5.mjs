import { mergeProps, unref, useSSRContext, withCtx, createTextVNode, toDisplayString, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-afaf4e47.mjs';

const _sfc_main$2 = {
  __name: "Sidebar",
  __ssrInlineRender: true,
  props: ["categories", "tags", "priceFilter"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-lg-3" }, _attrs))}><div class="sidebar md-mb50"><div class="row"><div class="col-lg-12 col-md-6"><div class="search mb-30"><form><div class="form-group"><input type="text" name="shop-search" placeholder="Search"><button><span class="icon pe-7s-search"></span></button></div></form></div></div><div class="col-lg-12 col-md-6"><div class="box gat mb-30"><h6 class="title mb-30">Category</h6><ul><!--[-->`);
      ssrRenderList(__props.categories, (category, idx) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "#0" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(category.title)} <span${_scopeId}>${ssrInterpolate(category.productsCount > 10 ? category.productsCount : "0" + category.productsCount)}</span>`);
            } else {
              return [
                createTextVNode(toDisplayString(category.title) + " ", 1),
                createVNode("span", null, toDisplayString(category.productsCount > 10 ? category.productsCount : "0" + category.productsCount), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div></div><div class="col-lg-12 col-md-6"><div class="box filter-price mb-30"><h6 class="title mb-30">Filter By Price</h6><div class="range-slider mb-30"><div id="tooltip"></div><input id="range" type="range"${ssrRenderAttr("step", __props.priceFilter.step)}${ssrRenderAttr("value", __props.priceFilter.value)}${ssrRenderAttr("min", __props.priceFilter.min)}${ssrRenderAttr("max", __props.priceFilter.max)}><div class="start-pointe">$ ${ssrInterpolate(__props.priceFilter.min)}</div></div></div></div><div class="col-lg-12 col-md-6"><div class="box tags"><h6 class="title mb-30">Popular Tags</h6><div><!--[-->`);
      ssrRenderList(__props.tags, (tag, idx) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "#0",
          key: idx
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(tag)}`);
            } else {
              return [
                createTextVNode(toDisplayString(tag), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Mobile-app/Shop/Sidebar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Products",
  __ssrInlineRender: true,
  props: ["products"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-lg-9" }, _attrs))}><div class="store"><div class="top-area"><div class="row"><div class="col-lg-4 valign"><div class="result-text"><span>Showing 1 - 12 of 30 Results</span></div></div><div class="col-lg-8 d-flex justify-content-end"><div class="filter-select"><select class="form-select" aria-label="Default select example"><option selected>Open this select menu</option><option value="1">One</option><option value="2">Two</option><option value="3">Three</option></select></div></div></div></div><div class="row"><!--[-->`);
      ssrRenderList(__props.products, (product) => {
        _push(`<div class="col-lg-4 col-md-6"><div class="item"><div class="img"><img${ssrRenderAttr("src", product.image)} alt=""><span class="tag">${ssrInterpolate(product.tag)}</span><div class="add">`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "#0" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Add To Cart <span class="pe-7s-angle-right"${_scopeId}></span>`);
            } else {
              return [
                createTextVNode("Add To Cart "),
                createVNode("span", { class: "pe-7s-angle-right" })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div><div class="info"><h6>${ssrInterpolate(product.name)}</h6><span>$${ssrInterpolate(product.price)}</span></div></div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Mobile-app/Shop/Products.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const categories = [
  {
    title: "App Design",
    productsCount: 5
  },
  {
    title: "Development",
    productsCount: 3
  },
  {
    title: "Web Design",
    productsCount: 7
  },
  {
    title: "Dashboard",
    productsCount: 4
  },
  {
    title: "Logo Design",
    productsCount: 9
  },
  {
    title: "Branding",
    productsCount: 14
  }
];
const tags = [
  "Apps",
  "Design",
  "Branding",
  "Software",
  "Development",
  "Web"
];
const priceFilter = {
  min: 5,
  max: 800,
  step: 10,
  value: 200
};
const products = [
  {
    id: 1,
    image: "/mobile-app/img/shop/1.jpg",
    tag: "Apps",
    name: "Mobile Apps Design",
    price: 1253
  },
  {
    id: 2,
    image: "/mobile-app/img/shop/2.jpg",
    tag: "Apps",
    name: "Mobile Apps Design",
    price: 1253
  },
  {
    id: 3,
    image: "/mobile-app/img/shop/3.jpg",
    tag: "Apps",
    name: "Mobile Apps Design",
    price: 1253
  },
  {
    id: 4,
    image: "/mobile-app/img/shop/4.jpg",
    tag: "Apps",
    name: "Mobile Apps Design",
    price: 1253
  },
  {
    id: 5,
    image: "/mobile-app/img/shop/5.jpg",
    tag: "Apps",
    name: "Mobile Apps Design",
    price: 1253
  },
  {
    id: 6,
    image: "/mobile-app/img/shop/6.jpg",
    tag: "Apps",
    name: "Mobile Apps Design",
    price: 1253
  },
  {
    id: 7,
    image: "/mobile-app/img/shop/7.jpg",
    tag: "Apps",
    name: "Mobile Apps Design",
    price: 1253
  },
  {
    id: 8,
    image: "/mobile-app/img/shop/8.jpg",
    tag: "Apps",
    name: "Mobile Apps Design",
    price: 1253
  },
  {
    id: 9,
    image: "/mobile-app/img/shop/9.jpg",
    tag: "Apps",
    name: "Mobile Apps Design",
    price: 1253
  }
];
const ShopData = {
  categories,
  tags,
  priceFilter,
  products
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "shop section-padding" }, _attrs))}><div class="container"><div class="row">`);
      _push(ssrRenderComponent(unref(_sfc_main$2), {
        categories: unref(ShopData).categories,
        tags: unref(ShopData).tags,
        priceFilter: unref(ShopData).priceFilter
      }, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$1), {
        products: unref(ShopData).products
      }, null, _parent));
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Mobile-app/Shop/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=index-421d23f5.mjs.map
