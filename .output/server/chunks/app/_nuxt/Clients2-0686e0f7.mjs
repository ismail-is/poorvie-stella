import { mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { c as clientsData } from './clients-f216af70.mjs';

const id = 1;
const image1 = "/img/intro/1.jpg";
const image2 = "/img/intro/3.jpg";
const image3 = "/img/intro/2.jpg";
const smallTitle = "About Us";
const title = {
  first: "We are more than just",
  second: "a digital agency."
};
const content = "We are Vie. We create award-winning websites, remarkable brands and cutting-edge apps.Nullam imperdiet, sem at fringilla lobortis, sem nibh fringilla nibh, id gravida mi purus sit amet erat. Ut dictum nisi masvitp";
const features = [
  {
    id: 1,
    icon: "gleam",
    name: {
      first: "Pixel",
      second: "Perfect"
    },
    wowDelay: ".3s"
  },
  {
    id: 2,
    icon: "paint-bucket",
    name: {
      first: "Creative",
      second: "Design"
    },
    wowDelay: ".5s"
  },
  {
    id: 3,
    icon: "medal",
    name: {
      first: "Heigh",
      second: "Perfomance"
    },
    wowDelay: ".8s"
  }
];
const AboutUs2Data = {
  id,
  image1,
  image2,
  image3,
  smallTitle,
  title,
  content,
  features
};
const _sfc_main$1 = {
  __name: "AboutUs2",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "about section-padding" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-5"><div class="img-mons sm-mb30"><div class="row"><div class="col-md-5 cmd-padding valign"><div class="img1 wow imago" data-wow-delay=".5s"><img${ssrRenderAttr("src", unref(AboutUs2Data).image1)} alt=""></div></div><div class="col-md-7 cmd-padding"><div class="img2 wow imago" data-wow-delay=".3s"><img${ssrRenderAttr("src", unref(AboutUs2Data).image2)} alt=""></div><div class="img3 wow imago" data-wow-delay=".8s"><img${ssrRenderAttr("src", unref(AboutUs2Data).image3)} alt=""></div></div></div></div></div><div class="col-lg-6 offset-lg-1 valign"><div class="content"><div class="sub-title"><h6>${ssrInterpolate(unref(AboutUs2Data).smallTitle)}</h6></div><h3 class="words chars splitting main-title wow" data-splitting>${ssrInterpolate(unref(AboutUs2Data).title.first)} <br> ${ssrInterpolate(unref(AboutUs2Data).title.second)}</h3><p class="words chars splitting wow txt" data-splitting>${ssrInterpolate(unref(AboutUs2Data).content)}</p><div class="ftbox mt-30"><ul><!--[-->`);
      ssrRenderList(unref(AboutUs2Data).features, (feature) => {
        _push(`<li class="${ssrRenderClass(`wow fadeIn ${feature.id == 2 ? "space" : ""}`)}"${ssrRenderAttr("data-wow-delay", feature.wowDelay)}><span class="${ssrRenderClass(`icon color-font pe-7s-${feature.icon}`)}"></span><h6>${ssrInterpolate(feature.name.first)} <br> ${ssrInterpolate(feature.name.second)}</h6><div class="dots"><span></span><span></span><span></span></div></li>`);
      });
      _push(`<!--]--></ul></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AboutUs/AboutUs2.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Clients2",
  __ssrInlineRender: true,
  props: ["theme", "length"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "clients sub-bg pt-50 pb-50" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-7"><div class="row"><!--[-->`);
      ssrRenderList(unref(clientsData).slice(0, __props.length), (item) => {
        _push(`<div class="col-lg-3 brands"><div class="item no-bord wow fadeIn" data-wow-delay=".3s"><div class="img">`);
        if (__props.theme === "light") {
          _push(`<img${ssrRenderAttr("src", item.lightImage)} alt="">`);
        } else {
          _push(`<img${ssrRenderAttr("src", item.darkImage)} alt="">`);
        }
        _push(`<a to="#0" class="link words chars splitting" data-splitting>${ssrInterpolate(item.url)}</a></div></div></div>`);
      });
      _push(`<!--]--></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Clients/Clients2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$1 as _, _sfc_main as a };
//# sourceMappingURL=Clients2-0686e0f7.mjs.map
