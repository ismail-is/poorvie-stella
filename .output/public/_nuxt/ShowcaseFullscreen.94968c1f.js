import{_ as v}from"./nuxt-link.2048aaa9.js";import{S as _,a as f}from"./swiper-slide.4154dbd7.js";import{M as g}from"./mousewheel.1fb9cff5.js";import{r as h,N as w}from"./removeSlashpagination.2d3f2e34.js";import{P as x}from"./parallax.2647997b.js";import{g as b,o,c as d,a as s,b as r,w as a,F as S,i as k,f as l,j,l as N,t as c,m as y,d as p,h as D}from"./entry.1ee7db55.js";const M=[{id:1,title:{first:"Midnight",second:"Snack"},image:"/img/portfolio/full/1.jpg",sub:"Design"},{id:2,title:{first:"Fisherman",second:"Portrait"},image:"/img/portfolio/full/2.jpg",sub:"Design"},{id:3,title:{first:"Tribos",second:"Urbanas"},image:"/img/portfolio/full/3.jpg",sub:"Design"},{id:4,title:{first:"Monsoon",second:"in the city"},image:"/img/portfolio/full/3.jpg",sub:"Design"}],P={class:"swiper-container parallax-slider"},B={class:"container"},F={class:"row"},V={class:"col-lg-12"},E={class:"caption"},T={class:"stroke","data-swiper-parallax":"-2000"},L={"data-swiper-parallax":"-5000"},R=s("div",{class:"bord"},null,-1),z={class:"discover"},A=s("span",null,[p(" Explore "),s("br"),p(" More ")],-1),C=D('<div class="txt-botm"><div class="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"><div><span>Next Slide</span></div><div><i class="fas fa-chevron-right"></i></div></div><div class="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"><div><i class="fas fa-chevron-left"></i></div><div><span>Prev Slide</span></div></div><div class="swiper-pagination dots"></div></div>',1),I={__name:"ShowcaseFullscreen",props:["sliderRef"],setup(u){const m={modules:[x,w,g],speed:1e3,slidesPerView:1,mousewheel:!0,parallax:!0,navigation:{prevEl:".txt-botm .swiper-button-prev",nextEl:".txt-botm .swiper-button-next"},onSwiper:e=>{setTimeout(()=>{for(var t=0;t<e.slides.length;t++)e.slides[t].childNodes[0].setAttribute("data-swiper-parallax",.75*e.width)})}};return b(()=>{h()}),(e,t)=>{const n=v;return o(),d("header",{ref:u.sliderRef,class:"slider showcase-full"},[s("div",P,[r(l(f),y(m,{class:"swiper-wrapper"}),{default:a(()=>[(o(!0),d(S,null,k(l(M),i=>(o(),j(l(_),{key:i.id,class:"swiper-slide"},{default:a(()=>[s("div",{class:"bg-img valign",style:N(`background-image: url(${i.image})`),"data-overlay-dark":"4"},[s("div",B,[s("div",F,[s("div",V,[s("div",E,[s("h1",null,[r(n,{to:"/project-details2/project-details2-dark"},{default:a(()=>[s("div",T,c(i.title.first),1),s("span",L,c(i.title.second),1)]),_:2},1024),R]),s("div",z,[r(n,{to:"/project-details2/project-details2-dark"},{default:a(()=>[A]),_:1})])])])])])],4)]),_:2},1024))),128))]),_:1},16),C])],512)}}};export{I as _};