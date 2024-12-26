import { mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderClass } from 'vue/server-renderer';
import { c, p as particlesConfig } from './particle-config-b5ba4886.mjs';

const id$1 = 1;
const title$1 = {
  first: "Let's talk",
  second: "about your project."
};
const content = "Feel free to ask me any question or let\u2019s do to talk about our future collaboration.";
const contentHeaderData = {
  id: id$1,
  title: title$1,
  content
};
const particlesBlackConfig = {
  particles: {
    number: {
      value: 130,
      density: {
        enable: true,
        value_area: 900
      }
    },
    color: {
      value: "#000000"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "/img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.2,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.3,
        sync: false
      }
    },
    size: {
      value: 1.8,
      random: true,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.4,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble"
      },
      onclick: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 250,
        size: 0,
        duration: 2,
        opacity: 0,
        speed: 3
      },
      repulse: {
        distance: 400,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};
const _sfc_main$1 = {
  __name: "ContactHeader",
  __ssrInlineRender: true,
  props: ["theme"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "pages-header circle-bg valign position-re" }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-lg-9 col-md-11"><div class="capt"><div class="text-center"><h1 class="color-font mb-10 fw-700">${ssrInterpolate(unref(contentHeaderData).title.first)} <br> ${ssrInterpolate(unref(contentHeaderData).title.second)}</h1><p>${ssrInterpolate(unref(contentHeaderData).content)}</p></div></div></div></div></div>`);
      _push(ssrRenderComponent(unref(c), {
        id: "particles-js",
        options: __props.theme === "light" ? unref(particlesBlackConfig) : unref(particlesConfig)
      }, null, _parent));
      _push(`<div class="circle-color"><div class="gradient-circle"></div><div class="gradient-circle two"></div></div></header>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Contact/ContactHeader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const id = 1;
const title = "Let's Talk.";
const email = "Email@example.com";
const phone = "+4.930.705.5448";
const location = {
  first: "295 Witting Streets Suite 666,",
  second: "Melbourne, Australia"
};
const contentFormData = {
  id,
  title,
  email,
  phone,
  location
};
const _sfc_main = {
  __name: "ContactForm",
  __ssrInlineRender: true,
  props: ["theme"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "contact section-padding" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-6"><div class="form md-mb50"><h4 class="fw-700 color-font mb-50">Get In Touch.</h4><form id="contact-form"><div class="messages"></div><div class="controls"><div class="form-group"><input id="form_name" type="text" name="name" placeholder="Name" required="required"></div><div class="form-group"><input id="form_email" type="email" name="email" placeholder="Email" required="required"></div><div class="form-group"><textarea id="form_message" name="message" placeholder="Message" rows="4" required="required"></textarea></div><button type="submit" class="${ssrRenderClass(`butn ${__props.theme === "light" ? "dark" : "bord"}`)}"><span>Send Message</span></button></div></form></div></div><div class="col-lg-5 offset-lg-1"><div class="cont-info"><h4 class="fw-700 color-font mb-50">Contact Info.</h4><h3 class="wow" data-splitting>${ssrInterpolate(unref(contentFormData).title)}</h3><div class="item mb-40"><h5><a to="#0">${ssrInterpolate(unref(contentFormData).email)}</a></h5><h5>${ssrInterpolate(unref(contentFormData).phone)}</h5></div><h3 class="wow" data-splitting>Visit Us.</h3><div class="item"><h6>${ssrInterpolate(unref(contentFormData).location.first)} <br> ${ssrInterpolate(unref(contentFormData).location.second)}</h6></div><div class="social mt-50"><a to="#0" class="icon"><i class="fab fa-facebook-f"></i></a><a to="#0" class="icon"><i class="fab fa-twitter"></i></a><a to="#0" class="icon"><i class="fab fa-pinterest"></i></a><a to="#0" class="icon"><i class="fab fa-behance"></i></a></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Contact/ContactForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$1 as _, _sfc_main as a };
//# sourceMappingURL=ContactForm-9376172f.mjs.map
