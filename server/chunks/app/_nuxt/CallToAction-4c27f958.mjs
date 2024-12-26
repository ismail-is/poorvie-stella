import { _ as __nuxt_component_0 } from './nuxt-link-afaf4e47.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = {
  __name: "CallToAction",
  __ssrInlineRender: true,
  props: ["img"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "call-action section-padding sub-bg bg-img",
        style: `background-image: url(${__props.img ? __props.img : "/img/patrn.svg"})`
      }, _attrs))}><div class="container"><div class="row"><div class="col-md-8 col-lg-9"><div class="content sm-mb30"><h6 class="wow words chars splitting" data-splitting>Let\u2019s Talk</h6><h2 class="wow words chars splitting" data-splitting> about your <br><b class="back-color">next project</b>. </h2></div></div><div class="col-md-4 col-lg-3 valign">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact/contact-dark",
        class: "butn bord curve wow fadeInUp",
        "data-wow-delay": ".5s"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Get In Touch</span>`);
          } else {
            return [
              createVNode("span", null, "Get In Touch")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Others/CallToAction.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=CallToAction-4c27f958.mjs.map
