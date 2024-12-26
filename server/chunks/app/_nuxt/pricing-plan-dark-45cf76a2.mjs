import { _ as __nuxt_component_0 } from './Loading-8d8ab4f5.mjs';
import { unref, useSSRContext } from 'vue';
import { u as useHead } from './index-88e9f29c.mjs';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$1, F as Footer } from './index-61bb4795.mjs';
import { _ as _sfc_main$2 } from './index-92c33e93.mjs';
import { _ as _sfc_main$3 } from './index-ab2c70f8.mjs';
import { C as CallToAction } from './index-80766df6.mjs';
import { _ as _sfc_main$4 } from './index-4a47db00.mjs';
import 'unhead';
import '@unhead/shared';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
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
import 'devalue';
import '@unhead/ssr';
import './logo-light-76183bc1.mjs';
import '../server.mjs';
import 'vue-router';
import './nuxt-link-afaf4e47.mjs';

const _sfc_main = {
  __name: "pricing-plan-dark",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      titleTemplate: `%s - Pricing Dark`
    });
    const headerData = {
      title: "Pricing Package",
      page: "Pricing"
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonLoading = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_CommonLoading, null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$2), { headerData }, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent));
      _push(ssrRenderComponent(unref(CallToAction), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$4), null, null, _parent));
      _push(ssrRenderComponent(unref(Footer), null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/mobile-app/pricing-plan-dark.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=pricing-plan-dark-45cf76a2.mjs.map
