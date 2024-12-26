import { mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { b as _imports_0, c as _imports_1 } from './index-4b4e7282.mjs';

const stats = [
  {
    title: "Saticfied Clents",
    value: "756",
    icon: "pe-7s-user"
  },
  {
    title: "Years Of Experience",
    value: "38",
    icon: "pe-7s-umbrella"
  },
  {
    title: "Global Clients",
    value: "5k",
    icon: "pe-7s-global"
  },
  {
    title: "Expert Team Member",
    value: "47",
    icon: "pe-7s-anchor"
  }
];
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: ["theme"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "serv-block section-padding" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-6 valign"><div class="content md-mb50"><h6 class="stit mb-30"><span class="left"></span> Company Statistics</h6><h2 class="mb-30">We\u2019re Professional Agency and We\u2019ve Lot\u2019s of Goods Achievements</h2><div class="app-sta"><div class="row"><!--[-->`);
      ssrRenderList(unref(stats), (stat, idx) => {
        _push(`<div class="col-sm-6"><div class="${ssrRenderClass(`item ${idx !== unref(stats).length - 1 || idx !== unref(stats).length - 2 ? "mb-30" : ""}`)}"><span class="${ssrRenderClass(`icon ${stat.icon}`)}"></span><h3>${ssrInterpolate(stat.value)}+</h3><p>${ssrInterpolate(stat.title)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></div></div><div class="col-lg-5 offset-lg-1"><div class="serv-img">`);
      if (__props.theme === "light") {
        _push(`<img${ssrRenderAttr("src", _imports_0)} alt="">`);
      } else {
        _push(`<img${ssrRenderAttr("src", _imports_1)} alt="">`);
      }
      _push(`</div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Mobile-app/Stats/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=index-4bc74053.mjs.map
