import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-afaf4e47.mjs';
import { ref, mergeProps, unref, useSSRContext, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import { M as ModalVideo } from './ModalVideo-db24fbd8.mjs';

const _imports_0$1 = "" + publicAssetsURL("img/slid/001.jpg");
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "slider-st valign position-re" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-6 valign"><div class="cont md-mb50"><div class="sub-title mb-5"><h6>Digital Consulting Agency</h6></div><h1 class="mb-10 fw-600">Unique Business Consulting.</h1><p> We help our clients succeed by creating brand identities, digital experiences, and print materials. </p>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "butn bord curve mt-30",
    to: "/about/about-dark"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>About Us</span>`);
      } else {
        return [
          createVNode("span", null, "About Us")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="col-lg-6"><div class="img"><img${ssrRenderAttr("src", _imports_0$1)} alt=""></div></div></div></div><div class="line bottom left"></div></header>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Headers/Header2.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const videoChannel = "vimeo";
const videoId = "127203262";
const _sfc_main$1 = {
  __name: "Video",
  __ssrInlineRender: true,
  setup(__props) {
    const videoIsOpen = ref(false);
    function onClose() {
      videoIsOpen.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "video bg-img parallaxie",
        style: { "background-image": "url('/img/bg-vid.jpg')" }
      }, _attrs))}>`);
      _push(ssrRenderComponent(ModalVideo, {
        channel: videoChannel,
        videoId,
        isOpen: unref(videoIsOpen),
        onClose
      }, null, _parent));
      _push(`<a class="vid valign"><div class="vid-butn"><span class="icon"><i class="pe-7s-play"></i></span></div></a><div class="container"><div class="stauts"><div class="item"><h4>3<span>K</span> +</h4><h6>Happy Clients</h6></div><div class="item"><h4>14<span>K</span> +</h4><h6>Success Projects</h6></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Others/Video.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _imports_0 = "" + publicAssetsURL("img/team/1.jpg");
const _imports_1 = "" + publicAssetsURL("img/team/2.jpg");
const _imports_2 = "" + publicAssetsURL("img/team/3.jpg");
const _imports_3 = "" + publicAssetsURL("img/team/4.jpg");
const _sfc_main = {
  __name: "Team2",
  __ssrInlineRender: true,
  props: ["theme"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "team section-padding" }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-lg-8 col-md-10"><div class="sec-head text-center"><h6 class="wow fadeIn" data-wow-delay=".5s">Our Team</h6><h3 class="wow color-font"> An original team of creators designers &amp; dreamers. </h3></div></div></div></div><div class="container-fluid"><div class="row"><div class="col-lg-3 col-md-6"><div class="item cir md-mb50"><div class="img"><img${ssrRenderAttr("src", _imports_0)} alt=""><div id="circle"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="300px" height="300px" viewBox="0 0 300 300" enable-background="new 0 0 300 300" xml:space="preserve"><defs><path id="circlePath" d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "></path></defs><circle cx="150" cy="100" r="75" fill="none"></circle><g><use xlink:href="#circlePath" fill="none"></use><text${ssrRenderAttr("fill", __props.theme === "light" ? "rgb(18, 194, 233)" : "#fff")}><textPath xlink:href="#circlePath"> CEO Manager CEO Manager CEO Manager </textPath></text></g></svg></div><div class="info"><h6>Ryan Hicks</h6><span>Client Manager</span></div></div></div></div><div class="col-lg-3 col-md-6"><div class="item cir md-mb50"><div class="img"><img${ssrRenderAttr("src", _imports_1)} alt=""><div id="circle"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="300px" height="300px" viewBox="0 0 300 300" enable-background="new 0 0 300 300" xml:space="preserve"><defs><path id="circlePath" d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "></path></defs><circle cx="150" cy="100" r="75" fill="none"></circle><g><use xlink:href="#circlePath" fill="none"></use><text${ssrRenderAttr("fill", __props.theme === "light" ? "rgb(18, 194, 233)" : "#fff")}><textPath xlink:href="#circlePath"> Interior Designer Interior Designer Interior Designer </textPath></text></g></svg></div><div class="info"><h6>Ryan Hicks</h6><span>Client Manager</span></div></div></div></div><div class="col-lg-3 col-md-6"><div class="item cir sm-mb50"><div class="img"><img${ssrRenderAttr("src", _imports_2)} alt=""><div id="circle"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="300px" height="300px" viewBox="0 0 300 300" enable-background="new 0 0 300 300" xml:space="preserve"><defs><path id="circlePath" d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "></path></defs><circle cx="150" cy="100" r="75" fill="none"></circle><g><use xlink:href="#circlePath" fill="none"></use><text${ssrRenderAttr("fill", __props.theme === "light" ? "rgb(18, 194, 233)" : "#fff")}><textPath xlink:href="#circlePath"> Landscape Designer Landscape Designer Landscape Designer </textPath></text></g></svg></div><div class="info"><h6>Ryan Hicks</h6><span>Client Manager</span></div></div></div></div><div class="col-lg-3 col-md-6"><div class="item cir"><div class="img"><img${ssrRenderAttr("src", _imports_3)} alt=""><div id="circle"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="300px" height="300px" viewBox="0 0 300 300" enable-background="new 0 0 300 300" xml:space="preserve"><defs><path id="circlePath" d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "></path></defs><circle cx="150" cy="100" r="75" fill="none"></circle><g><use xlink:href="#circlePath" fill="none"></use><text${ssrRenderAttr("fill", __props.theme === "light" ? "rgb(18, 194, 233)" : "#fff")}><textPath xlink:href="#circlePath"> Client Manager Client Manager Client Manager </textPath></text></g></svg></div><div class="info"><h6>Ryan Hicks</h6><span>Client Manager</span></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Team/Team2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { Header as H, _sfc_main$1 as _, _sfc_main as a };
//# sourceMappingURL=Team2-2149861f.mjs.map
