import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { mergeProps, unref, useSSRContext, withCtx, createTextVNode, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import { _ as _imports_1 } from './2-060c6328.mjs';
import { _ as _imports_2 } from './3-dce5e48a.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-afaf4e47.mjs';

const _imports_0$1 = "" + publicAssetsURL("img/blog/single.jpg");
const _sfc_main$5 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "img" }, _attrs))}><img${ssrRenderAttr("src", _imports_0$1)} alt=""></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blogs/Details/Image.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Image = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$3]]);
const _imports_0 = "" + publicAssetsURL("img/blog/01.jpg");
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "content pt-60" }, _attrs))}><div class="row justify-content-center"><div class="col-lg-10"><div class="cont"><h4 class="extra-title"> Priorities that will pop up in any particular month. </h4><div class="spacial"><p> Never ever think of giving up. Winners never quit and quitters never win. Take all negative words out of your mental dictionary and focus on the solutions with utmost conviction and patience. The battle is never lost until you&#39;ve abandon your vision. </p></div><p> the main component of a healthy environment for self esteem is that it needs be nurturing. The main compont of a healthy environment for self esteem is that it needs be nurturing. The main component of a healthy env for self esteem The main compont be nurturing It should provide unconditional warmth. The main component of a healthy env for self esteem The main compont be nurturing It should provide unconditional </p><h6>- We all intend to plan ahead.</h6><p> We all intend to plan ahead, but too often let the day-to-day minutia get in the way of making a calendar for the year. Sure, you can&#39;t know every detail to anticipate. Heck, you can&#39;t know half the priorities that will pop up in any particular month. But you can plan for big picture seasonality, busy-times, and events. </p><ul><li><span>01</span> Integer in volutpat libero.</li><li><span>02</span> Vivamus maximus ultricies pulvinar. </li><li><span>03</span> priorities that will pop up in any particular month. </li><li><span>04</span> We all intend to plan ahead.</li><li><span>05</span> The main component of a healthy env for self esteem. </li></ul><div class="quotes text-center"><p> Never ever think of giving up. Winners never quit and quitters never win. Take all negative words out of your mental dictionary and focus on the solutions with utmost conviction and patience. The battle is never lost until you&#39;ve abandon your vision. </p></div><div class="row"><div class="col-md-6"><div class="mb-10"><img${ssrRenderAttr("src", _imports_1)} alt=""></div></div><div class="col-md-6"><div class="mb-10"><img${ssrRenderAttr("src", _imports_2)} alt=""></div></div></div><p> We all intend to plan ahead, but too often let the day-to-day minutia get in the way of making a calendar for the year. Sure, you can&#39;t know every detail to anticipate. Heck, you can&#39;t know half the priorities that will pop up in any particular month. But you can plan for big picture seasonality, busy-times, and events. </p><div class="share-info"><div class="social"><a href="#0"><i class="fab fa-facebook-f"></i></a><a href="#0"><i class="fab fa-twitter"></i></a><a href="#0"><i class="fab fa-behance"></i></a></div><div class="tags"><a href="#0">Web</a>,<a href="#0">Themeforest</a>, <a href="#0">ThemesCamp</a></div></div></div><div class="author"><div class="author-img"><img${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="info"><h6><span>author :</span> Jorden Griffin</h6><p> the main component of a healthy environment for self esteem is that it needs be nurturing. The main compont of a healthy environment. </p><div class="social"><a href="#0"><i class="fab fa-facebook-f"></i></a><a href="#0"><i class="fab fa-twitter"></i></a><a href="#0"><i class="fab fa-behance"></i></a></div></div></div></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blogs/Details/Content.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Content = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "pagination" }, _attrs))}><span><a href="#0">Prev Post</a></span><span class="icon">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/blog/blog-dark" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fas fa-th-large"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "fas fa-th-large" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</span><span class="text-right"><a href="#0">Next Post</a></span></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blogs/Details/Pagination.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Pagination = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "comments-area" }, _attrs))}><h5>Comments :</h5><div class="item"><div class="comment-img"><img${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="info"><h6>Jorden Griffin - <span> 6 Aug 2023</span></h6><span class="replay"><a href="#0"> Replay <i class="fas fa-reply"></i></a></span><p> the main component of a healthy environment for self esteem is that it needs be nurturing. The main compont of a healthy environment. </p></div></div><div class="item relped"><div class="comment-img"><img${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="info"><h6>Jorden Griffin - <span> 6 Aug 2023</span></h6><span class="replay"><a href="#0"> Replay <i class="fas fa-reply"></i></a></span><p> the main component of a healthy environment for self esteem is that it needs be nurturing. The main compont of a healthy environment. </p></div></div><div class="item"><div class="comment-img"><img${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="info"><h6>Jorden Griffin - <span> 6 Aug 2023</span></h6><span class="replay"><a href="#0"> Replay <i class="fas fa-reply"></i></a></span><p> the main component of a healthy environment for self esteem is that it needs be nurturing. The main compont of a healthy environment. </p></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blogs/Details/CommentsArea.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const CommentsArea = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "CommentsForm",
  __ssrInlineRender: true,
  props: ["theme"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "comment-form" }, _attrs))}><h5>Add Comment :</h5><div class="form"><form action=""><div class="row"><div class="col-12"><div class="form-group"><textarea placeholder="Your Comment"></textarea></div></div><div class="col-md-6"><div class="form-group"><input type="text" placeholder="Your Name"></div></div><div class="col-md-6"><div class="form-group"><input type="email" placeholder="Your Email"></div></div><div class="col-12"><div class="form-group text-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#0",
        class: `butn ${__props.theme ? __props.theme === "light" ? "dark" : "" : "light"} curve full-width`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Comment `);
          } else {
            return [
              createTextVNode(" Comment ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></form></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blogs/Details/CommentsForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "BlogDetails",
  __ssrInlineRender: true,
  props: ["theme"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "blog-pg single section-padding pt-0" }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-lg-11"><div class="post">`);
      _push(ssrRenderComponent(unref(Image), null, null, _parent));
      _push(ssrRenderComponent(unref(Content), null, null, _parent));
      _push(ssrRenderComponent(unref(Pagination), null, null, _parent));
      _push(ssrRenderComponent(unref(CommentsArea), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$1), { theme: __props.theme }, null, _parent));
      _push(`</div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blogs/BlogDetails.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=BlogDetails-34511d40.mjs.map
