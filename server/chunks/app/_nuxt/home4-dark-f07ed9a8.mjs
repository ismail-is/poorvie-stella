import { _ as __nuxt_component_0 } from './Loading-8d8ab4f5.mjs';
import { ref, unref, useSSRContext } from 'vue';
import { u as useHead } from './index-88e9f29c.mjs';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$1, a as _sfc_main$a } from './Footer-141c0815.mjs';
import { _ as _sfc_main$2 } from './SliderHeader-16942ae7.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$6 } from './Clients2-0686e0f7.mjs';
import { _ as _sfc_main$3 } from './Services1-ed3eb59e.mjs';
import { _ as _sfc_main$4 } from './index-1daf60bb.mjs';
import { _ as _sfc_main$5 } from './clients-f216af70.mjs';
import { _ as _sfc_main$7 } from './Team1-68d9b694.mjs';
import { _ as _sfc_main$8 } from './Blogs4-d807cb26.mjs';
import { _ as _sfc_main$9 } from './ContactFormS-fe221cca.mjs';
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
import 'swiper/vue';
import 'swiper';
import './features-1bf70970.mjs';
import './5-d22ab734.mjs';
import './6-f22bbc20.mjs';
import './1-62a40b4e.mjs';
import './ModalVideo-db24fbd8.mjs';
import './client-only-29ef7f45.mjs';

const _sfc_main = {
  __name: "home4-dark",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      titleTemplate: `%s - Business One Page Dark`
    });
    const fixedSlider = ref();
    ref();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonLoading = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_CommonLoading, null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$2), {
        ref_key: "fixedSlider",
        ref: fixedSlider
      }, null, _parent));
      _push(`<div class="main-content">`);
      _push(ssrRenderComponent(unref(_sfc_main$1$1), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$3), { lines: "" }, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$4), {
        grid: "2",
        filterPosition: "left"
      }, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$5), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$6), {
        theme: "dark",
        length: "4"
      }, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$7), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$8), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$9), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$a), { hideBGCOLOR: "" }, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/homepage/home4-dark.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=home4-dark-f07ed9a8.mjs.map
