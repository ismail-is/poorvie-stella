const s=a=>{window.addEventListener("scroll",()=>{var o=window.pageYOffset;a&&a.forEach(r=>{r.style.transform="translate3d(0, "+-(o*.2)+"px, 0)",r.style.opacity=1-o/600})})};export{s as f};
