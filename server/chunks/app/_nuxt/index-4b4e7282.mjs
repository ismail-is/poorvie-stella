import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { mergeProps, unref, useSSRContext, withCtx, createVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-afaf4e47.mjs';
import { _ as _export_sfc } from '../server.mjs';

const _imports_0 = "" + publicAssetsURL("mobile-app/img/app-img/s2-light.png");
const _imports_1 = "" + publicAssetsURL("mobile-app/img/app-img/s2.png");
const features = [
  {
    id: 1,
    icon: "pe-7s-vector",
    title: "Modern Design",
    details: "unde omniste natus error sit voluptatem accus antium dolore mque laudant totam rem aperiam."
  },
  {
    id: 2,
    icon: "pe-7s-rocket",
    title: "Fast Installation",
    details: "unde omniste natus error sit voluptatem accus antium dolore mque laudant totam rem aperiam."
  },
  {
    id: 3,
    icon: "pe-7s-graph3",
    title: "Digital Analytics",
    details: "unde omniste natus error sit voluptatem accus antium dolore mque laudant totam rem aperiam."
  },
  {
    id: 4,
    icon: "pe-7s-anchor",
    title: "SEO Friendly",
    details: "unde omniste natus error sit voluptatem accus antium dolore mque laudant totam rem aperiam."
  },
  {
    id: 5,
    icon: "pe-7s-phone",
    title: "Clean Coding",
    details: "unde omniste natus error sit voluptatem accus antium dolore mque laudant totam rem aperiam."
  },
  {
    id: 6,
    icon: "pe-7s-lock",
    title: "High Security",
    details: "unde omniste natus error sit voluptatem accus antium dolore mque laudant totam rem aperiam."
  }
];
const _sfc_main$2 = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "app-services section-padding bg-gray" }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-lg-7 col-md-10"><div class="s-head text-center mb-80"><h6 class="stit mb-30"><span class="left"></span> Application Features <span class="Right"></span></h6><h2>Amazing Features to Customize your Application Easy</h2></div></div></div><div class="row"><!--[-->`);
      ssrRenderList(unref(features), (feature, index) => {
        _push(`<div class="col-lg-4 col-md-6"><div class="${ssrRenderClass(`item ${index !== unref(features).length - 1 ? "mb-30" : ""}`)}"><div class="item-tit mb-15"><div class="icon"><span class="${ssrRenderClass(feature.icon)}"></span></div><div class="text-tit"><h5>${ssrInterpolate(feature.title)}</h5></div></div><p>${ssrInterpolate(feature.details)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Mobile-app/Features/index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512"
  }, _attrs))}><path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Mobile-app/Pricing/Icon.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Icon = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const pricing = [
  {
    id: 1,
    title: "Free Package",
    price: 0,
    description: "Get Free 7 Days Trial",
    status: "idle",
    features: [
      {
        title: "Unique Design & Development",
        disabled: false
      },
      {
        title: "Clean Code & Easy Editable",
        disabled: false
      },
      {
        title: "Modern UI Design",
        disabled: false
      },
      {
        title: "350 GB Hosting Free",
        disabled: true
      },
      {
        title: "24/7 Hour Support",
        disabled: true
      },
      {
        title: "Upload Modern Design",
        disabled: true
      }
    ]
  },
  {
    id: 2,
    title: "Premium Package",
    price: 59,
    description: "Choose Package",
    status: "active",
    features: [
      {
        title: "Unique Design & Development",
        disabled: false
      },
      {
        title: "Clean Code & Easy Editable",
        disabled: false
      },
      {
        title: "Modern UI Design",
        disabled: false
      },
      {
        title: "350 GB Hosting Free",
        disabled: false
      },
      {
        title: "24/7 Hour Support",
        disabled: false
      },
      {
        title: "Upload Modern Design",
        disabled: false
      }
    ]
  }
];
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: ["bgGray"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: `app-price section-padding ${__props.bgGray ? "bg-gray" : ""}`
      }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-lg-8 col-md-10"><div class="s-head text-center mb-80"><h6 class="stit mb-30"><span class="left"></span> Pricing Package <span class="Right"></span></h6><h2>Popular Pricing Package for Design Mobile Application </h2></div></div></div><div class="row justify-content-center"><div class="col-lg-10"><div class="pric-tables"><div class="row"><!--[-->`);
      ssrRenderList(unref(pricing), (plan, index) => {
        _push(`<div class="col-md-6"><div class="${ssrRenderClass(`item ${index !== unref(pricing).length - 1 ? "sm-mb50" : ""} ${plan.status === "active" ? "active" : ""}`)}"><div class="type text-center mb-15"><h5>${ssrInterpolate(plan.title)}</h5></div><div class="amount text-center mb-40"><h3><span>$</span> ${ssrInterpolate(plan.price)}</h3></div><div class="order mb-40">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "#0",
          class: `${plan.status === "active" ? "butn-gr" : "butn-gray"} rounded buton`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(plan.description)}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(plan.description), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="feat"><ul><!--[-->`);
        ssrRenderList(plan.features, (feature, idx) => {
          _push(`<li class="${ssrRenderClass(`${feature.disabled ? "disbl" : ""}`)}"><i class="icon">`);
          _push(ssrRenderComponent(unref(Icon), null, null, _parent));
          _push(`</i> ${ssrInterpolate(feature.title)}</li>`);
        });
        _push(`<!--]--></ul></div></div></div>`);
      });
      _push(`<!--]--></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Mobile-app/Pricing/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$2 as _, _sfc_main as a, _imports_0 as b, _imports_1 as c };
//# sourceMappingURL=index-4b4e7282.mjs.map