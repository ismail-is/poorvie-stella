import { _ as __nuxt_component_0 } from './nuxt-link-afaf4e47.mjs';
import { mergeProps, withCtx, createVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';

const faq = [
  {
    question: "Everything You Want Know About Creating ?",
    answer: "But must explain you how all this mistaken idea denouncing pleasure and praising pain was born and I will give you complete the system and expound the actual teachings of the great explorer",
    active: false
  },
  {
    question: "Frameworks Solve And Without Them ?",
    answer: "But must explain you how all this mistaken idea denouncing pleasure and praising pain was born and I will give you complete the system and expound the actual teachings of the great explorer",
    active: true
  },
  {
    question: "Getting Started With CSS Cascade Layers ?",
    answer: "But must explain you how all this mistaken idea denouncing pleasure and praising pain was born and I will give you complete the system and expound the actual teachings of the great explorer",
    active: false
  },
  {
    question: "Designing Better Links Websites Guideline ?",
    answer: "But must explain you how all this mistaken idea denouncing pleasure and praising pain was born and I will give you complete the system and expound the actual teachings of the great explorer",
    active: false
  }
];
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "app-faq section-padding" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-5"><div class="content md-mb50"><h6 class="stit mb-30"><span class="left"></span> Faqs</h6><h2 class="mb-30">Have Any Questions on Minds? Frequently Asked Questions</h2><p> Sed perspiciatis unde omnis natus error sit voluptatem accus doloremque laudantium totarem aperiam eaqupsa quae abillo inventore veritatis quasi architecto </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#0",
        class: "butn-bord-red rounded buton mt-30"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Get Free 7 Days Trial</span>`);
          } else {
            return [
              createVNode("span", null, "Get Free 7 Days Trial")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="col-lg-6 offset-lg-1"><div class="content"><div class="accordion shadwo"><!--[-->`);
      ssrRenderList(unref(faq), (question, idx) => {
        _push(`<div class="${ssrRenderClass(`item ${question.active ? "active" : ""} ${idx !== unref(faq).length - 1 ? "mb-30" : ""}`)}"><div class="title"><h6>${ssrInterpolate(question.question)} <span class="icon pe-7s-angle-right"></span></h6></div><div class="${ssrRenderClass(`accordion-info ${question.active ? "active" : ""}`)}"><p>${ssrInterpolate(question.answer)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Mobile-app/FAQ/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=index-4a47db00.mjs.map
