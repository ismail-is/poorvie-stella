import { _ as __nuxt_component_0 } from './nuxt-link-afaf4e47.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = {
  __name: "ContactFormS",
  __ssrInlineRender: true,
  props: ["noLine"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "contact-sec section-padding position-re" }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-lg-8 col-md-10"><div class="sec-head text-center"><h6 class="wow fadeIn" data-wow-delay=".5s">Contact Us</h6><h3 class="wow color-font"> Let&#39;s Get in Touch And Make Magic Together. </h3></div></div></div><div class="row justify-content-center"><div class="col-lg-10"><div class="form wow fadeInUp" data-wow-delay=".5s"><form id="contact-form"><div class="messages"></div><div class="controls"><div class="row"><div class="col-lg-4"><div class="form-group"><input id="form_name" type="text" name="name" placeholder="Name" required="required"></div></div><div class="col-lg-4"><div class="form-group"><input id="form_email" type="email" name="email" placeholder="Email" required="required"></div></div><div class="col-lg-4"><div class="form-group"><input id="form_name" type="text" name="name" placeholder="Name" required="required"></div></div><div class="col-12"><div class="form-group"><textarea id="form_message" name="message" placeholder="Message" rows="4" required="required"></textarea></div></div><div class="col-12"><div class="text-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#0",
        class: "butn bord curve mt-30"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Send Massege</span>`);
          } else {
            return [
              createVNode("span", null, "Send Massege")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></form></div></div></div></div>`);
      if (!__props.noLine) {
        _push(`<div class="line bottom left"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Contact/ContactFormS.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=ContactFormS-fe221cca.mjs.map
