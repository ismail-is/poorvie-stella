import { _ as __nuxt_component_0 } from './nuxt-link-afaf4e47.mjs';
import { ref, onUnmounted, mergeProps, withCtx, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0, a as _imports_1 } from './logo-light-76183bc1.mjs';
import { a as _imports_0$1, _ as _imports_1$1 } from './2-060c6328.mjs';

const _sfc_main$1 = {
  __name: "Navbar",
  __ssrInlineRender: true,
  props: ["lr", "theme"],
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
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<nav${ssrRenderAttrs(mergeProps({
        ref_key: "navbar",
        ref: navbar,
        class: ["navbar navbar-expand-lg change", __props.theme === "light" ? "light" : ""]
      }, _attrs))}><div class="container">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "logo"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.theme === "light") {
              _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="logo"${_scopeId}>`);
            } else if (__props.theme === "themeD") {
              _push2(`<img${ssrRenderAttr("src", _imports_1)} alt="logo"${_scopeId}>`);
            } else {
              _push2(`<img${ssrRenderAttr("src", _imports_1)} alt="logo"${_scopeId}>`);
            }
          } else {
            return [
              __props.theme === "light" ? (openBlock(), createBlock("img", {
                key: 0,
                ref: "lr",
                src: _imports_0,
                alt: "logo"
              }, null, 512)) : __props.theme === "themeD" ? (openBlock(), createBlock("img", {
                key: 1,
                ref: "lr",
                src: _imports_1,
                alt: "logo"
              }, null, 512)) : (openBlock(), createBlock("img", {
                key: 2,
                ref: "lr",
                src: _imports_1,
                alt: "logo"
              }, null, 512))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="icon-bar"><i class="fas fa-bars"></i></span></button><div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav ml-auto"><li class="nav-item dropdown"><span class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> Home </span><div class="dropdown-menu"><a class="dropdown-item" href="/homepage/home1-dark"> Main Home </a><a class="dropdown-item" href="/homepage/home2-dark"> Creative Agency </a><a class="dropdown-item" href="/homepage/home5-dark"> Digital Agency </a><a class="dropdown-item" href="/homepage/home4-dark"> Business One Page </a><a class="dropdown-item" href="/homepage/home3-dark"> Corporate Business </a><a class="dropdown-item" href="/homepage/home6-dark"> Modern Agency </a><a class="dropdown-item" href="/homepage/home7-dark"> Freelancer </a><a class="dropdown-item" href="/homepage/home8-dark"> Architecture </a></div></li><li class="nav-item"><a class="nav-link" href="/about/about-dark"> About </a></li><li class="nav-item dropdown"><span class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> Works </span><div class="dropdown-menu"><a class="dropdown-item" href="/showcase/showcase-dark"> Showcase Parallax </a><a class="dropdown-item" href="/showcase3/showcase3-dark"> Showcase Carousel </a><a class="dropdown-item" href="/showcase2/showcase2-dark"> Showcase Circle </a><a class="dropdown-item" href="/works/works-dark"> Portfolio Masonry </a><a class="dropdown-item" href="/works2/works2-dark"> Portfolio Filtering </a><a class="dropdown-item" href="/works3/works3-dark"> Portfolio Gallery </a></div></li><li class="nav-item dropdown"><span class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> Blog </span><div class="dropdown-menu"><a class="dropdown-item" href="/blog/blog-dark"> Blog Standerd </a><a class="dropdown-item" href="/blog-list/blog-list-dark"> Blog List </a><a class="dropdown-item" href="/blog-grid/blog-grid-dark"> Blog Grid </a><a class="dropdown-item" href="/blog-details/blog-details-dark"> Blog Details </a></div></li><li class="nav-item"><a class="nav-link" href="/contact/contact-dark"> Contact </a></li></ul></div></div></nav>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Common/Navbar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Footer",
  __ssrInlineRender: true,
  props: ["hideBGCOLOR"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({
        class: `${!__props.hideBGCOLOR ? "sub-bg" : ""}`
      }, _attrs))}><div class="container"><div class="row"><div class="col-lg-4"><div class="item md-mb50"><div class="title"><h5>Contact Us</h5></div><ul><li><span class="icon pe-7s-map-marker"></span><div class="cont"><h6>Officeal Address</h6><p>504 White St . Dawsonville, GA 30534 , New York</p></div></li><li><span class="icon pe-7s-mail"></span><div class="cont"><h6>Email Us</h6><p>support@gmail.com</p></div></li><li><span class="icon pe-7s-call"></span><div class="cont"><h6>Call Us</h6><p>+87986451666</p></div></li></ul></div></div><div class="col-lg-4"><div class="item md-mb50"><div class="title"><h5>Recent News</h5></div><ul><li><div class="img"><a href="#"><img${ssrRenderAttr("src", _imports_0$1)} alt=""></a></div><div class="sm-post"><a href="#"><p> The Start-Up Ultimate Guide to Make Your WordPress Journal. </p><span class="date">14 sep 2023</span></a></div></li><li><div class="img"><a href="#"><img${ssrRenderAttr("src", _imports_1$1)} alt=""></a></div><div class="sm-post"><a href="#"><p> The Start-Up Ultimate Guide to Make Your WordPress Journal. </p><span class="date">14 sep 2023</span></a></div></li><li><div class="subscribe"><input type="text" placeholder="Type Your Email"><span class="subs pe-7s-paper-plane"></span></div></li></ul></div></div><div class="col-lg-4"><div class="item"><div class="logo"><img${ssrRenderAttr("src", _imports_1)} alt="logo"></div><div class="social"><a href="#0"><i class="fab fa-facebook-f"></i></a><a href="#0"><i class="fab fa-twitter"></i></a><a href="#0"><i class="fab fa-instagram"></i></a><a href="#0"><i class="fab fa-youtube"></i></a></div><div class="copy-right"><p> \xA9 2023, Vie Template. Made with passion by <a href="#0">ThemesCamp</a>. </p></div></div></div></div></div></footer>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Common/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$1 as _, _sfc_main as a };
//# sourceMappingURL=Footer-141c0815.mjs.map
