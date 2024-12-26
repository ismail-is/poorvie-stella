import { _ as __nuxt_component_0 } from './Loading-8d8ab4f5.mjs';
import { unref, useSSRContext } from 'vue';
import { u as useHead } from './index-88e9f29c.mjs';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$1, a as _sfc_main$7 } from './Footer-141c0815.mjs';
import { H as Header, _ as _sfc_main$1$1, a as _sfc_main$5 } from './Team2-2149861f.mjs';
import { _ as _sfc_main$2 } from './Services1-ed3eb59e.mjs';
import { _ as _sfc_main$3 } from './index-1daf60bb.mjs';
import { _ as _sfc_main$4 } from './FullTestimonials-3f88d149.mjs';
import { B as Blogs } from './Blogs2-21745d73.mjs';
import { _ as _sfc_main$6 } from './CallToAction-4c27f958.mjs';
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
import './ModalVideo-db24fbd8.mjs';
import './client-only-29ef7f45.mjs';
import './features-1bf70970.mjs';
import './5-d22ab734.mjs';
import './6-f22bbc20.mjs';
import './1-62a40b4e.mjs';
import 'swiper/vue';
import 'swiper';
import './3-dce5e48a.mjs';

const _sfc_main = {
  __name: "home2-light",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      titleTemplate: `%s - Creative Agency Light`
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonLoading = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_CommonLoading, null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$1), { theme: "light" }, null, _parent));
      _push(ssrRenderComponent(unref(Header), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$2), { oStyle: "4item" }, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$1$1), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$3), {
        grid: 3,
        filterPosition: "center"
      }, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$4), { noPadding: "" }, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$5), { theme: "light" }, null, _parent));
      _push(ssrRenderComponent(unref(Blogs), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$6), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$7), null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/homepage/home2-light.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=home2-light-85d5dca9.mjs.map
