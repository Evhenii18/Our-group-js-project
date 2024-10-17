import{a as m,i as k,S as L}from"./assets/vendor-Br3gR3Vd.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const S=async(e,o)=>{try{const t=await m.post("https://portfolio-js.b.goit.study/api/requests",{email:e,comment:o});if(!t.status===201)throw new Error(t.status);return t}catch(t){throw console.log(t),t}},E=(e,o)=>{let t;return function(...r){clearTimeout(t),t=setTimeout(()=>e.apply(this,r),o)}},g="/Our-group-js-project/assets/sprite-OmMtwSbn.svg",q=({title:e,message:o})=>k.warning({title:e,message:o,position:"topRight",backgroundColor:"#e74a3b",messageColor:"#FAFAFB",messageLineHeight:"24px",maxWidth:"310px",theme:"dark"}),O=(e,o,t)=>{const r=`
  <div class="modal">
    <button class="modal-btn-close" data-modal-close>
      <svg class="modal-close" width="24" height="24">
        <use href="${g}#close-modal"></use>
      </svg>
    </button>
    <h3 class="modal-title">${o}</h3>
    <p class="modal-text">
      ${t}
    </p>
  </div>`;e.innerHTML=r},c={contactForm:document.querySelector(".contact-form"),backDrop:document.querySelector(".backdrop"),errorMessage:document.querySelector(".notvalid"),checkedIcon:document.querySelector(".input-icon")},l=()=>c.backDrop.classList.toggle("is-hidden"),x=()=>{const e=document.querySelector("[data-modal-close]");l();const o=t=>{(t.code==="Escape"||t.currentTarget===t.target)&&(l(),window.removeEventListener("keydown",o))};window.addEventListener("keydown",o),c.backDrop.addEventListener("click",o),e.addEventListener("click",l)},M=e=>{e.preventDefault();const{email:{value:o},comment:{value:t}}=e.target;S(o,t).then(({data:{title:r,message:s}})=>{O(c.backDrop,r,s),x(),e.target.reset(),c.checkedIcon.classList.add("is-hidden")}).catch(r=>{q({title:"Network response was not ok!",message:"Please try again later."})})},J=E(e=>{const{valid:o}=e.target.validity;o?(c.errorMessage.classList.add("is-hidden"),e.target.classList.remove("notvalid"),c.checkedIcon.classList.remove("is-hidden")):(c.errorMessage.classList.remove("is-hidden"),e.target.classList.add("notvalid"))},1e3);c.contactForm.email.addEventListener("blur",()=>{c.errorMessage.classList.add("is-hidden")});c.contactForm.email.addEventListener("input",J);c.contactForm.addEventListener("submit",M);document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".question-box");e.forEach(t=>{t.addEventListener("click",()=>{const r=t.parentElement,s=r.querySelector(".answer");s.style.display=s.style.display==="block"?"none":"block",r.classList.toggle("open"),e.forEach(i=>{const n=i.parentElement;n!==r&&(n.classList.remove("open"),n.querySelector(".answer").style.display="none")})})});const o=document.querySelector(".question-element");if(o){const t=o.querySelector(".answer");t.style.display="block",o.classList.add("open")}});const B="/Our-group-js-project/assets/pj-1-min-DWzjyzI8.jpg",R="/Our-group-js-project/assets/pj-1@2x-min-v07MUiUj.jpg",C="/Our-group-js-project/assets/pj-2-min-BVBeLtto.jpg",N="/Our-group-js-project/assets/pj-2@2x-min-BHkuqi7c.jpg",A="/Our-group-js-project/assets/pj-3-min-CDth7Upd.jpg",$="/Our-group-js-project/assets/pj-3@2x-min-D9ARAM-8.jpg",F="/Our-group-js-project/assets/pj-4-min-Ce6nM6ti.jpg",G="/Our-group-js-project/assets/pj-4@2x-min-DOL37arf.jpg",P="/Our-group-js-project/assets/pj-5-min-0Tv8jdQ4.jpg",T="/Our-group-js-project/assets/pj-5@2x-min-CCftv4yG.jpg",D="/Our-group-js-project/assets/pj-6-min-bqtJGl73.jpg",I="/Our-group-js-project/assets/pj-6@2x-min-COGH-CPf.jpg",X="/Our-group-js-project/assets/pj-7-min-CMzUQQXG.jpg",H="/Our-group-js-project/assets/pj-7@2x-min-7W1K9WAy.jpg",K="/Our-group-js-project/assets/pj-8-min-Cpf3RKyu.jpg",Q="/Our-group-js-project/assets/pj-8@2x-min-DkBtJZR1.jpg",z="/Our-group-js-project/assets/pj-9-min-DlRHRbAA.jpg",V="/Our-group-js-project/assets/pj-9@2x-min-BiQYWY6P.jpg",W="/Our-group-js-project/assets/pj-10-min-CskgAQGH.jpg",_="/Our-group-js-project/assets/pj-10@2x-min-CdrKtdBg.jpg",v={projectsList:document.querySelector(".projects-list")},j=[{id:1,title:"power pulse webservice",stacks:"React, JavaScript, Node JS, Git",link:"#",src:B,srcset:R},{id:2,title:"mimino website",stacks:"React, JavaScript, Node JS, Git",link:"#",src:C,srcset:N},{id:3,title:"vyshyvanka vibes Landing Page",stacks:"React, JavaScript, Node JS, Git",link:"#",src:A,srcset:$},{id:4,title:"green harvest online store",stacks:"React, JavaScript, Node JS, Git",link:"#",src:F,srcset:G},{id:5,title:"wallet webservice ",stacks:"React, JavaScript, Node JS, Git",link:"#",src:P,srcset:T},{id:6,title:"chego jewelry website",stacks:"React, JavaScript, Node JS, Git",link:"#",src:D,srcset:I},{id:7,title:"energy flow webservice ",stacks:"React, JavaScript, Node JS, Git",link:"#",src:X,srcset:H},{id:8,title:"fruitbox online store",stacks:"React, JavaScript, Node JS, Git",link:"#",src:K,srcset:Q},{id:9,title:"English excellence webservice ",stacks:"React, JavaScript, Node JS, Git",link:"#",src:z,srcset:V},{id:10,title:"starlight studio landing page",stacks:"React, JavaScript, Node JS, Git",link:"#",src:W,srcset:_}],U=()=>{let e=v.projectsList.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})},h=e=>{let t="";j.slice(e,e+3).map(r=>{t+=`<li class="projects-item">
      <img
         src="${r.src}"
         srcset="${r.srcset}"
        alt="project image"
        class="project-img"
      />
      <p class="project-stacks">${r.stacks}</p>
      <div class="projects-box">
        <h3 class="projects-title">${r.title}</h3>
        <a class="projects-link" href="${r.link}"
          >visit
          <svg class="contacts-icon" width="24" height="24">
            <use href="${g}#icon-visit-arrow"></use>
          </svg>
        </a>
      </div>
    </li>`}),v.projectsList.insertAdjacentHTML("beforeend",t)},Y={loadBtn:document.querySelector("#load-more")};let d=3;const Z=()=>{h(0)},ee=e=>{if(h(d),U(),d+=3,d>j.length){e.target.classList.add("is-hidden");return}};Z();Y.loadBtn.addEventListener("click",ee);const p=document.getElementById("theme-toggle"),u=document.body,y=(e,o)=>localStorage.getItem("theme")==="dark"&&e.classList.add(o),te=()=>{p.classList.toggle("active-btn"),u.classList.toggle("dark-theme"),u.classList.contains("dark-theme")?localStorage.setItem("theme","dark"):localStorage.setItem("theme","light")};y(u,"dark-theme");y(p,"active-btn");p.addEventListener("click",te);const a=new L(".swiper",{direction:"horizontal",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:!0,slidesPerView:1,spaceBetween:20,breakpoints:{1280:{slidesPerView:2,spaceBetween:32}},on:{init:function(){this.isBeginning&&(document.querySelector(".swiper-button-prev").classList.add("button-disabled"),document.querySelector(".swiper-button-next").classList.remove("button-disabled"))},fromEdge:function(){document.querySelector(".swiper-button-next").classList.remove("button-disabled"),document.querySelector(".swiper-button-prev").classList.remove("button-disabled")},reachEnd:function(){document.querySelector(".swiper-button-next").classList.add("button-disabled")},reachBeginning:function(){document.querySelector(".swiper-button-prev").classList.add("button-disabled")}}});async function se(){try{const e=await m.get("https://portfolio-js.b.goit.study/api/reviews");if(!e.status===200)throw new Error("Network response was not ok");return e.data}catch(e){document.getElementById("not-found").style.display="block",console.log("Error fetching reviews: "+e.message)}}async function oe(e){const o=await se(),t=document.getElementById("reviews-list"),r=o.reduce((s,i)=>`${s}
      <div class="swiper-slide">
        <p class="review-text">${i.review}</p>
        <div class="review-autor">
          <img class="review-autor__photo" src="${i.avatar_url}"></img>
          <p class="review-autor__name">${i.author}</p>
        </div>
      </div>`,"");t.insertAdjacentHTML("beforeend",r),a.update(),document.querySelector(".swiper").addEventListener("keydown",s=>{s.code==="ArrowLeft"&&(console.log("Keydown code: "+s.code),a.slidePrev()),s.code==="ArrowRight"&&(console.log("Keydown code: "+s.code),a.slideNext())}),document.querySelector(".swiper-button-prev").addEventListener("click",s=>a.slidePrev()),document.querySelector(".swiper-button-next").addEventListener("click",s=>a.slideNext())}const re=document.querySelector(".menu-icon-btn"),ie=document.querySelector(".header-modal-btn"),w=document.querySelector(".header-modal"),ce=document.querySelectorAll(".modal-list-item a"),f=document.querySelector("body");re.addEventListener("click",ne);ie.addEventListener("click",b);ce.forEach(e=>e.addEventListener("click",b));function ne(){w.classList.toggle("is-visible"),f.classList.toggle("body-hidden")}function b(){w.classList.remove("is-visible"),f.classList.remove("body-hidden")}oe();
//# sourceMappingURL=index.js.map
