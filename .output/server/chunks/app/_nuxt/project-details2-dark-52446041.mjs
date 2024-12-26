import { _ as __nuxt_component_0 } from './Loading-8d8ab4f5.mjs';
import { unref, useSSRContext } from 'vue';
import { u as useHead } from './index-88e9f29c.mjs';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$1, a as _sfc_main$6 } from './Footer-141c0815.mjs';
import { _ as _sfc_main$5, P as ProjectDate, a as _sfc_main$4, b as _sfc_main$3, c as _sfc_main$2, d as _sfc_main$1$1, N as NextProject } from './project-details2-0f66fa94.mjs';
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

const _sfc_main = {
  __name: "project-details2-dark",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      titleTemplate: `%s - Project Details Dark`
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonLoading = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_CommonLoading, null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent));
      _push(`<div class="wrapper">`);
      _push(ssrRenderComponent(unref(_sfc_main$5), { projectHeaderData: unref(ProjectDate) }, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$4), {
        projectIntroductionData: unref(ProjectDate).intro
      }, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$3), {
        projectGalleryData: unref(ProjectDate).gallery
      }, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$2), {
        projectDescriptionData: unref(ProjectDate).description
      }, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$1$1), { projectVideoData: unref(ProjectDate) }, null, _parent));
      _push(ssrRenderComponent(unref(NextProject), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$6), null, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/project-details2/project-details2-dark.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=project-details2-dark-52446041.mjs.map
