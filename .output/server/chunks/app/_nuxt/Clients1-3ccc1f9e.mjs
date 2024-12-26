import { mergeProps, unref, useSSRContext, withCtx, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import CircleProgress from 'vue3-circle-progress';
import { _ as __nuxt_component_0 } from './nuxt-link-afaf4e47.mjs';
import { c as clientsData } from './clients-f216af70.mjs';

const _sfc_main$1 = {
  __name: "SkillsCircle",
  __ssrInlineRender: true,
  props: ["from", "theme"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: `skills-circle pt-50 pb-50 ${__props.from ? __props.from === "aboutPage" ? "sub-bg" : "" : ""}`
      }, _attrs))}><div class="container"><div class="row"><div class="col-lg-7"><div class=""><div class="row"><div class="col-md-6"><div class="item wow fadeInLeft" data-wow-delay=".6"><div class="skill">`);
      _push(ssrRenderComponent(unref(CircleProgress), {
        percent: 90,
        "show-percent": true,
        "fill-color": "rgb(18, 194, 233)",
        "empty-color": __props.theme == "dark" ? "#0f1013" : "#e5e5e5",
        "border-width": 2,
        "border-bg-width": 2,
        size: 110,
        unit: "%"
      }, null, _parent));
      _push(`</div><div class="cont"><span>Project</span><h6>Consulting</h6></div></div></div><div class="col-md-6"><div class="item wow fadeInLeft" data-wow-delay=".3"><div class="skill">`);
      _push(ssrRenderComponent(unref(CircleProgress), {
        percent: 75,
        "fill-color": "rgb(18, 194, 233)",
        "empty-color": __props.theme == "dark" ? "#0f1013" : "#e5e5e5",
        "border-width": 2,
        "border-bg-width": 2,
        size: 110,
        "show-percent": true,
        unit: "%"
      }, null, _parent));
      _push(`</div><div class="cont"><span>App</span><h6>Development</h6></div></div></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Skills/SkillsCircle.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Clients1",
  __ssrInlineRender: true,
  props: ["theme"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "clients section-padding" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-4 valign md-mb50"><div class="sec-head mb-0"><h6 class="wow fadeIn" data-wow-delay=".5s">Best Features</h6><h3 class="wow mb-20 color-font">Our Clients</h3><p> Our area of practice is quite wide: design, graphics, branding, development. </p></div></div><div class="col-lg-8"><div><div class="row bord"><!--[-->`);
      ssrRenderList(unref(clientsData).slice(0, unref(clientsData).length / 2), (item) => {
        _push(`<div class="col-md-3 col-6 brands"><div class="item wow fadeIn"${ssrRenderAttr("data-wow-delay", `${item.id == 1 ? ".3" : item.id == 2 ? ".6" : item.id == 3 ? ".8" : item.id == 4 ? ".3" : ""}s`)}><div class="img">`);
        if (__props.theme === "light") {
          _push(`<img${ssrRenderAttr("src", item.lightImage)} alt="">`);
        } else {
          _push(`<img${ssrRenderAttr("src", item.darkImage)} alt="">`);
        }
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "#",
          class: "link words chars splitting",
          "data-splitting": ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.url)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.url), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div><div class="row"><!--[-->`);
      ssrRenderList(unref(clientsData).slice(4, unref(clientsData).length), (item) => {
        _push(`<div class="${ssrRenderClass(`${item.id == 5 ? "col-md-3 col-6 brands sm-mb30" : item.id == 6 ? "col-md-3 col-6 brands sm-mb30" : item.id == 7 ? "col-md-3 col-6 brands" : item.id == 8 ? "col-md-3 col-6 brands" : ""}`)}"><div class="item wow fadeIn"${ssrRenderAttr("data-wow-delay", `${item.id == 1 ? ".4" : item.id == 2 ? ".7" : item.id == 3 ? ".5" : item.id == 4 ? ".3" : ""}s`)}><div class="img">`);
        if (__props.theme === "light") {
          _push(`<img${ssrRenderAttr("src", item.lightImage)} alt="client image">`);
        } else {
          _push(`<img${ssrRenderAttr("src", item.darkImage)} alt="client image">`);
        }
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "#",
          class: "link words chars splitting",
          "data-splitting": ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.url)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.url), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Clients/Clients1.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$1 as _, _sfc_main as a };
//# sourceMappingURL=Clients1-3ccc1f9e.mjs.map
