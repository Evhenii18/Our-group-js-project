import{i as v}from"./assets/vendor-Bk3t6AMZ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function o(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(s){if(s.ep)return;s.ep=!0;const i=o(s);fetch(s.href,i)}})();const d={method:"POST",headers:{"Content-Type":"application/json",accept:"application/json"}},f=async e=>{d.body=JSON.stringify(e);try{const t=await fetch("https:portfolio-js.b.goit.study/api/requests",d);if(!t.ok)throw new Error(t.status);return t.json()}catch(t){throw console.log(t),t}},y=(e,t)=>{let o;return function(...c){clearTimeout(o),o=setTimeout(()=>e.apply(this,c),t)}},k=e=>v.warning({message:e,position:"topRight",backgroundColor:"#e74a3b",messageColor:"#FAFAFB",messageLineHeight:"24px",maxWidth:"310px",theme:"dark",timeout:2e5}),b=(e,t,o)=>{const c=`
  <div class="modal">
    <button class="modal-btn-close" data-modal-close>
      <svg class="modal-close" width="24" height="24">
        <use href="./img/sprite.svg#close-modal"></use>
      </svg>
    </button>
    <h3 class="modal-title">${t}</h3>
    <p class="modal-text">
      ${o}
    </p>
  </div>`;e.innerHTML=c},r={contactForm:document.querySelector(".contact-form"),backDrop:document.querySelector(".backdrop"),errorMessage:document.querySelector(".notvalid"),checkedIcon:document.querySelector(".input-icon")},a=()=>r.backDrop.classList.toggle("is-hidden"),L=()=>{const e=document.querySelector("[data-modal-close]");a();const t=o=>{(o.code==="Escape"||o.currentTarget===o.target)&&(a(),window.removeEventListener("keydown",t))};window.addEventListener("keydown",t),r.backDrop.addEventListener("click",t),e.addEventListener("click",a)},S=e=>{e.preventDefault();const{email:{value:t},comment:{value:o}}=e.target;f({email:t,comment:o}).then(({title:c,message:s})=>{b(r.backDrop,c,s),L(),e.target.reset(),r.checkedIcon.classList.add("is-hidden")}).catch(c=>{k(`Error: № ${c.message}. Please verify the information you provided and try again `)})},w=y(e=>{const{valid:t}=e.target.validity;t?(r.errorMessage.classList.add("is-hidden"),e.target.classList.remove("notvalid"),r.checkedIcon.classList.remove("is-hidden")):(r.errorMessage.classList.remove("is-hidden"),e.target.classList.add("notvalid"))},1e3);r.contactForm.email.addEventListener("blur",()=>{r.errorMessage.classList.add("is-hidden")});r.contactForm.email.addEventListener("input",w);r.contactForm.addEventListener("submit",S);const m={projectsList:document.querySelector(".projects-list")},u=[{title:"power pulse webservice",stacks:"React, JavaScript, Node JS, Git",link:"#"},{title:"mimino website",stacks:"React, JavaScript, Node JS, Git",link:"#"},{title:"vyshyvanka vibes Landing Page",stacks:"React, JavaScript, Node JS, Git",link:"#"},{title:"green harvest online store",stacks:"React, JavaScript, Node JS, Git",link:"#"},{title:"wallet webservice ",stacks:"React, JavaScript, Node JS, Git",link:"#"},{title:"chego jewelry website",stacks:"React, JavaScript, Node JS, Git",link:"#"},{title:"energy flow webservice ",stacks:"React, JavaScript, Node JS, Git",link:"#"},{title:"fruitbox online store",stacks:"React, JavaScript, Node JS, Git",link:"#"},{title:"English excellence webservice ",stacks:"React, JavaScript, Node JS, Git",link:"#"},{title:"starlight studio landing page",stacks:"React, JavaScript, Node JS, Git",link:"#"}],j=()=>{let e=m.projectsList.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})},J=e=>{let o="";u.slice(e,e+3).map((c,s)=>{const i=s+e+1;o+=`<li class="projects-item">
      <img
        src="./img/pj-${i}-min.jpg"
        srcset="./img/pj-${i}-min.jpg 1x, ./img/pj-${i}@2x-min.jpg 2x"
        alt="project image"
        class="project-img"
      />
      <p class="project-stacks">${c.stacks}</p>
      <div class="projects-box">
        <h3 class="projects-title">${c.title}</h3>
        <a class="projects-link" href="${c.link}"
          >visit
          <svg class="contacts-icon" width="24" height="24">
            <use href="./img/sprite.svg#icon-visit-arrow"></use>
          </svg>
        </a>
      </div>
    </li>`}),m.projectsList.insertAdjacentHTML("beforeend",o)},E={loadBtn:document.querySelector("#load-more")};let l=3;const M=e=>{if(J(l),j(),l+=3,l>u.length){e.target.classList.add("is-hidden");return}};E.loadBtn.addEventListener("click",M);const q=document.querySelector(".menu-icon-btn"),N=document.querySelector(".header-modal-btn"),p=document.querySelector(".header-modal"),R=document.querySelectorAll(".modal-list-item a"),g=document.querySelector("body");q.addEventListener("click",$);N.addEventListener("click",h);R.forEach(e=>e.addEventListener("click",h));function $(){p.classList.toggle("is-visible"),g.classList.toggle("body-hidden")}function h(){p.classList.remove("is-visible"),g.classList.remove("body-hidden")}
//# sourceMappingURL=index.js.map
