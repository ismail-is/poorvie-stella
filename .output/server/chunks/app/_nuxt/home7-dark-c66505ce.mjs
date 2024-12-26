import { _ as __nuxt_component_0 } from './Loading-8d8ab4f5.mjs';
import { unref, useSSRContext } from 'vue';
import { u as useHead } from './index-88e9f29c.mjs';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$1, a as _sfc_main$7 } from './Footer-141c0815.mjs';
import { _ as _sfc_main$3, a as _sfc_main$2, b as _sfc_main$1$1, c as _sfc_main$4 } from './AboutUs5-14be59dc.mjs';
import { _ as _sfc_main$5 } from './FullTestimonials-3f88d149.mjs';
import { B as Blogs } from './Blogs2-21745d73.mjs';
import { _ as _sfc_main$6 } from './ContactFormS-fe221cca.mjs';
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
import './client-only-29ef7f45.mjs';
import './features-1bf70970.mjs';
import './4-f91bac2f.mjs';
import './1-62a40b4e.mjs';
import 'swiper/vue';
import 'swiper';
import './3-dce5e48a.mjs';

const _sfc_main = {
  __name: "home7-dark",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      titleTemplate: `%s - Freelancer Dark`
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonLoading = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_CommonLoading, null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$1$1), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$4), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$5), { showHead: "" }, null, _parent));
      _push(ssrRenderComponent(unref(Blogs), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$6), { noLine: "" }, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$7), null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/homepage/home7-dark.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=home7-dark-c66505ce.mjs.map
