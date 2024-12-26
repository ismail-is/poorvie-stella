import { mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';

const teams = [
  {
    id: 1,
    image: "/img/team/1.jpg",
    title: "Stephanie Lawrence",
    sub: "CEO, Colabrio Media"
  },
  {
    id: 2,
    image: "/img/team/2.jpg",
    title: "Alex Regelman",
    sub: "CEO, Colabrio Media"
  },
  {
    id: 3,
    image: "/img/team/3.jpg",
    title: "Stacey Stamper",
    sub: "CEO, Colabrio Media"
  },
  {
    id: 4,
    image: "/img/team/4.jpg",
    title: "Stephanie Lawrence",
    sub: "CEO, Colabrio Media"
  }
];
const skills = [
  {
    id: 1,
    text: "UI / UX Design",
    value: "90%"
  },
  {
    id: 2,
    text: "Apps Development",
    value: "80%"
  }
];
const teamData = {
  teams,
  skills
};
const _sfc_main = {
  __name: "Team1",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "team-crv section-padding" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-5 valign"><div class="content wow fadeInUp md-mb30" data-wow-delay=".5s"><div class="sub-title"><h6>Our Staff</h6><span></span><span></span><span></span></div><h3 class="co-tit mb-15">We help to create visual strategies.</h3><p> We are Vie. We create award-winning websites, remarkable brands and cutting-edge apps.Nullam imperdie. </p><div class="skills-box mt-40"><!--[-->`);
      ssrRenderList(unref(teamData).skills, (skill) => {
        _push(`<div class="skill-item"><h6 class="custom-font">${ssrInterpolate(skill.text)}</h6><div class="skill-progress"><div class="progres"${ssrRenderAttr("data-value", skill.value)}></div></div></div>`);
      });
      _push(`<!--]--></div></div></div><div class="col-lg-6 offset-lg-1"><div class="img-box"><div class="row"><div class="col-sm-6 toright"><div class="full-width"><!--[-->`);
      ssrRenderList(unref(teamData).teams.slice(0, 2), (team, index) => {
        _push(`<div><div class="${ssrRenderClass(`img sizxl ${index + 1 != unref(teamData).teams.slice(0, 2).length ? "mb-30" : null}`)}"${ssrRenderAttr("data-tooltip-tit", team.title)}${ssrRenderAttr("data-tooltip-sub", team.sub)}><img${ssrRenderAttr("src", team.image)} alt="" class="imago wow"></div></div>`);
      });
      _push(`<!--]--></div></div><div class="col-sm-6 toleft valign"><div class="full-width text-left"><!--[-->`);
      ssrRenderList(unref(teamData).teams.slice(2, 4), (team, index) => {
        _push(`<div><div class="${ssrRenderClass(`img sizxl ${index + 1 != unref(teamData).teams.slice(2, 4).length ? "mb-30" : null}`)}"${ssrRenderAttr("data-tooltip-tit", team.title)}${ssrRenderAttr("data-tooltip-sub", team.sub)}><img${ssrRenderAttr("src", team.image)} alt="team image" class="imago wow"></div></div>`);
      });
      _push(`<!--]--></div></div></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Team/Team1.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Team1-68d9b694.mjs.map
