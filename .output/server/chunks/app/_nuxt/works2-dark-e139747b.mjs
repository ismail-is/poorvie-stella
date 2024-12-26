import { _ as __nuxt_component_0 } from './Loading-8d8ab4f5.mjs';
import { unref, useSSRContext } from 'vue';
import { u as useHead } from './index-88e9f29c.mjs';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$1, a as _sfc_main$4 } from './Footer-141c0815.mjs';
import { _ as _sfc_main$2 } from './WorksHeader-a7371f8f.mjs';
import { _ as _sfc_main$3 } from './WorksStyle2-49db81c8.mjs';
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
import './5-d22ab734.mjs';
import './6-f22bbc20.mjs';

const _sfc_main = {
  __name: "works2-dark",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      titleTemplate: `%s - Works Dark`
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonLoading = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_CommonLoading, null, null, _parent));
      _push(`<div class="circle-bg"><div class="circle-color fixed"><div class="gradient-circle"></div><div class="gradient-circle two"></div></div></div>`);
      _push(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
      _push(`<div class="main-content">`);
      _push(ssrRenderComponent(unref(_sfc_main$3), {
        grid: 3,
        filterPosition: "center"
      }, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$4), null, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/works2/works2-dark.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=works2-dark-e139747b.mjs.map
