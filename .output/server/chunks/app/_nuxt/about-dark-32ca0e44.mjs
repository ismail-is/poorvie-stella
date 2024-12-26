import { _ as __nuxt_component_0 } from './Loading-8d8ab4f5.mjs';
import { unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { u as useHead } from './index-88e9f29c.mjs';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$1, a as _sfc_main$9 } from './Footer-141c0815.mjs';
import { _ as _sfc_main$2, a as _sfc_main$1$1, b as _sfc_main$6 } from './MinimalArea1-bdef1c7b.mjs';
import { _ as _sfc_main$3 } from './Services1-ed3eb59e.mjs';
import { _ as _sfc_main$4 } from './clients-f216af70.mjs';
import { _ as _sfc_main$1$2, a as _sfc_main$7 } from './Clients1-3ccc1f9e.mjs';
import { _ as _sfc_main$5 } from './Team1-68d9b694.mjs';
import { _ as _sfc_main$8 } from './CallToAction-4c27f958.mjs';
import 'unhead';
import '@unhead/shared';
import './nuxt-link-afaf4e47.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';
import '../server.mjs';
import 'vue-router';
import './logo-light-76183bc1.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import './2-060c6328.mjs';
import './min-area-692b8d24.mjs';
import './features-1bf70970.mjs';
import './1-62a40b4e.mjs';
import 'swiper/vue';
import './ModalVideo-db24fbd8.mjs';
import './client-only-29ef7f45.mjs';
import 'vue3-circle-progress';

const _sfc_main = {
  __name: "about-dark",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      titleTemplate: `%s - About Dark`
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonLoading = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_CommonLoading, null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$2), { imageLink: "/img/slid/about.jpg" }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Our dedicated team of creatives is bursting with talent, experience and passion for what we do. `);
          } else {
            return [
              createTextVNode(" Our dedicated team of creatives is bursting with talent, experience and passion for what we do. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$1$1), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$3), { oStyle: "4item" }, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$4), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$1$2), { from: "aboutPage" }, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$5), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$6), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$7), { theme: "dark" }, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$8), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$9), null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about/about-dark.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=about-dark-32ca0e44.mjs.map
