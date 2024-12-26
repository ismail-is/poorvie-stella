import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { ref, onUnmounted, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0$1, a as _imports_1 } from './logo-light-76183bc1.mjs';
import { _ as _export_sfc } from '../server.mjs';

const _imports_0 = "" + publicAssetsURL("img/logo-gr.png");
const _sfc_main$1 = {
  __name: "index",
  __ssrInlineRender: true,
  props: ["lr", "theme", "nr", "grLogo"],
  setup(__props) {
    const navbar = ref();
    function handleScroll() {
      if (window.scrollY > 300) {
        navbar.value.classList.add("nav-scroll");
      } else {
        navbar.value.classList.remove("nav-scroll");
      }
    }
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({
        ref_key: "navbar",
        ref: navbar,
        class: "navbar navbar-expand-lg"
      }, _attrs))}><div class="container"><a to="/" class="logo">`);
      if (__props.grLogo) {
        _push(`<img${ssrRenderAttr("src", _imports_0)} alt="logo">`);
      } else if (__props.theme && __props.theme === "light") {
        _push(`<img${ssrRenderAttr("src", _imports_0$1)} alt="logo">`);
      } else if (__props.theme && __props.theme === "themeD") {
        _push(`<img${ssrRenderAttr("src", _imports_1)} alt="logo">`);
      } else {
        _push(`<img${ssrRenderAttr("src", _imports_1)} alt="logo">`);
      }
      _push(`</a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="icon-bar"><i class="fas fa-bars"></i></span></button><div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav ml-auto"><li class="nav-item dropdown"><span class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> Home </span><div class="dropdown-menu"><a class="dropdown-item"${ssrRenderAttr("href", `/homepage/home1-${__props.theme === "light" ? "light" : "dark"}`)}>Main Home </a><a class="dropdown-item"${ssrRenderAttr("href", `/homepage/home2-${__props.theme === "light" ? "light" : "dark"}`)}>Creative Agency</a><a class="dropdown-item"${ssrRenderAttr("href", `/homepage/home5-${__props.theme === "light" ? "light" : "dark"}`)}>Digital Agency </a><a class="dropdown-item"${ssrRenderAttr("href", `/homepage/home4-${__props.theme === "light" ? "light" : "dark"}`)}>Business One Page</a><a class="dropdown-item"${ssrRenderAttr("href", `/homepage/home3-${__props.theme === "light" ? "light" : "dark"}`)}>Corporate Business</a><a class="dropdown-item"${ssrRenderAttr("href", `/homepage/home6-${__props.theme === "light" ? "light" : "dark"}`)}>Modern Agency </a><a class="dropdown-item"${ssrRenderAttr("href", `/homepage/home7-${__props.theme === "light" ? "light" : "dark"}`)}>Freelancer </a><a class="dropdown-item"${ssrRenderAttr("href", `/homepage/home8-${__props.theme === "light" ? "light" : "dark"}`)}>Architecture </a></div></li><li class="nav-item"><a class="nav-link"${ssrRenderAttr("href", `/mobile-app/services-${__props.theme === "light" ? "light" : "dark"}`)}>Services </a></li><li class="nav-item"><a class="nav-link"${ssrRenderAttr("href", `/mobile-app/pricing-plan-${__props.theme === "light" ? "light" : "dark"}`)}>Pricing </a></li><li class="nav-item"><a class="nav-link"${ssrRenderAttr("href", `/mobile-app/portfolio-${__props.theme === "light" ? "light" : "dark"}`)}>Portfolio </a></li><li class="nav-item"><a class="nav-link"${ssrRenderAttr("href", `/mobile-app/shop-${__props.theme === "light" ? "light" : "dark"}`)}>Products</a></li><li class="nav-item"><a class="nav-link"${ssrRenderAttr("href", `/contact/contact-${__props.theme === "light" ? "light" : "dark"}`)}>Contact</a></li></ul></div></div></nav>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Mobile-app/Navbar/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({
    class: "app-footer",
    "data-overlay-dark": "0"
  }, _attrs))}><div class="container"><div class="row"><div class="col-lg-4 col-md-6"><div class="item-clumn our md-mb50"><a href="#0" class="logo-brand mb-50"><img${ssrRenderAttr("src", _imports_0)} alt=""></a><p>Sed ut perspiciatis undmnis iste natus error sit voluptatem accusantium dolore udantiuy totam rem aperiam. </p></div></div><div class="col-lg-3 col-md-6"><div class="item-clumn links md-mb50"><h5 class="title">Resources</h5><ul><li><span class="icon pe-7s-angle-right"></span><a href="#0">Our Products</a></li><li><span class="icon pe-7s-angle-right"></span><a href="#0">Blogs &amp; Guides</a></li><li><span class="icon pe-7s-angle-right"></span><a href="#0">Premium Support</a></li><li><span class="icon pe-7s-angle-right"></span><a href="#0">Need a Career ?</a></li></ul></div></div><div class="col-lg-2 col-md-6"><div class="item-clumn links sm-mb50"><h5 class="title">Links</h5><ul><li><span class="icon pe-7s-angle-right"></span><a href="#0">Support</a></li><li><span class="icon pe-7s-angle-right"></span><a href="#0">Privacy</a></li><li><span class="icon pe-7s-angle-right"></span><a href="#0">Setting</a></li><li><span class="icon pe-7s-angle-right"></span><a href="#0">My Account</a></li></ul></div></div><div class="col-lg-3 col-md-6"><div class="item-clumn links"><h5 class="title mb-30">Contact</h5><div class="info"><span>Email Address</span><h6><a href="#0">support@gmail.com</a></h6></div><div class="social mt-30"><a href="#0"><i class="fab fa-facebook-f"></i></a><a href="#0"><i class="fab fa-twitter"></i></a><a href="#0"><i class="fab fa-instagram"></i></a><a href="#0"><i class="fab fa-youtube"></i></a></div></div></div></div></div><div class="sub-footer"><div class="container"><div class="row"><div class="col-12"><div class="text-center"><p>\xA9 2023 Vie. All Rights Reserved</p></div></div></div></div></div><div class="circle-blur"></div><div class="circle-blur two"></div></footer>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Mobile-app/Footer/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Footer as F, _sfc_main$1 as _ };
//# sourceMappingURL=index-61bb4795.mjs.map
