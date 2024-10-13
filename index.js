import{i as v}from"./assets/vendor-Bk3t6AMZ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const r of c.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function o(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(s){if(s.ep)return;s.ep=!0;const c=o(s);fetch(s.href,c)}})();const d={method:"POST",headers:{"Content-Type":"application/json",accept:"application/json"}},f=async e=>{d.body=JSON.stringify(e);try{const t=await fetch("https:portfolio-js.b.goit.study/api/requests",d);if(!t.ok)throw new Error(t.status);return t.json()}catch(t){throw console.log(t),t}},y=(e,t)=>{let o;return function(...i){clearTimeout(o),o=setTimeout(()=>e.apply(this,i),t)}},k=e=>v.warning({message:e,position:"topRight",backgroundColor:"#e74a3b",messageColor:"#FAFAFB",messageLineHeight:"24px",maxWidth:"310px",theme:"dark",timeout:2e5}),L=(e,t,o)=>{const i=`
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
  </div>`;e.innerHTML=i},n={contactForm:document.querySelector(".contact-form"),backDrop:document.querySelector(".backdrop"),errorMessage:document.querySelector(".notvalid"),checkedIcon:document.querySelector(".input-icon")},a=()=>n.backDrop.classList.toggle("is-hidden"),b=()=>{const e=document.querySelector("[data-modal-close]");a();const t=o=>{(o.code==="Escape"||o.currentTarget===o.target)&&(a(),window.removeEventListener("keydown",t))};window.addEventListener("keydown",t),n.backDrop.addEventListener("click",t),e.addEventListener("click",a)},S=e=>{e.preventDefault();const{email:{value:t},comment:{value:o}}=e.target;f({email:t,comment:o}).then(({title:i,message:s})=>{L(n.backDrop,i,s),b(),e.target.reset(),n.checkedIcon.classList.add("is-hidden")}).catch(i=>{k(`Error: № ${i.message}. Please verify the information you provided and try again `)})},w=y(e=>{const{valid:t}=e.target.validity;t?(n.errorMessage.classList.add("is-hidden"),e.target.classList.remove("notvalid"),n.checkedIcon.classList.remove("is-hidden")):(n.errorMessage.classList.remove("is-hidden"),e.target.classList.add("notvalid"))},1e3);n.contactForm.email.addEventListener("blur",()=>{n.errorMessage.classList.add("is-hidden")});n.contactForm.email.addEventListener("input",w);n.contactForm.addEventListener("submit",S);document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".question-box");e.forEach(o=>{o.addEventListener("click",()=>{const i=o.parentElement,s=i.querySelector(".answer");s.style.display=s.style.display==="block"?"none":"block",i.classList.toggle("open"),e.forEach(c=>{const r=c.parentElement;r!==i&&(r.classList.remove("open"),r.querySelector(".answer").style.display="none")})})});const t=document.querySelector(".question-element");if(t){const o=t.querySelector(".answer");o.style.display="block",t.classList.add("open")}});const m={projectsList:document.querySelector(".projects-list")},u=[{title:"power pulse webservice",stacks:"React, JavaScript, Node JS, Git",link:"#"},{title:"mimino website",stacks:"React, JavaScript, Node JS, Git",link:"#"},{title:"vyshyvanka vibes Landing Page",stacks:"React, JavaScript, Node JS, Git",link:"#"},{title:"green harvest online store",stacks:"React, JavaScript, Node JS, Git",link:"#"},{title:"wallet webservice ",stacks:"React, JavaScript, Node JS, Git",link:"#"},{title:"chego jewelry website",stacks:"React, JavaScript, Node JS, Git",link:"#"},{title:"energy flow webservice ",stacks:"React, JavaScript, Node JS, Git",link:"#"},{title:"fruitbox online store",stacks:"React, JavaScript, Node JS, Git",link:"#"},{title:"English excellence webservice ",stacks:"React, JavaScript, Node JS, Git",link:"#"},{title:"starlight studio landing page",stacks:"React, JavaScript, Node JS, Git",link:"#"}],E=()=>{let e=m.projectsList.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})},j=e=>{let o="";u.slice(e,e+3).map((i,s)=>{const c=s+e+1;o+=`<li class="projects-item">
      <img
        src="./img/pj-${c}-min.jpg"
        srcset="./img/pj-${c}-min.jpg 1x, ./img/pj-${c}@2x-min.jpg 2x"
        alt="project image"
        class="project-img"
      />
      <p class="project-stacks">${i.stacks}</p>
      <div class="projects-box">
        <h3 class="projects-title">${i.title}</h3>
        <a class="projects-link" href="${i.link}"
          >visit
          <svg class="contacts-icon" width="24" height="24">
            <use href="./img/sprite.svg#icon-visit-arrow"></use>
          </svg>
        </a>
      </div>
    </li>`}),m.projectsList.insertAdjacentHTML("beforeend",o)},q={loadBtn:document.querySelector("#load-more")};let l=3;const J=e=>{if(j(l),E(),l+=3,l>u.length){e.target.classList.add("is-hidden");return}};q.loadBtn.addEventListener("click",J);const M=document.querySelector(".menu-icon-btn"),N=document.querySelector(".header-modal-btn"),p=document.querySelector(".header-modal"),R=document.querySelectorAll(".modal-list-item a"),g=document.querySelector("body");M.addEventListener("click",x);N.addEventListener("click",h);R.forEach(e=>e.addEventListener("click",h));function x(){p.classList.toggle("is-visible"),g.classList.toggle("body-hidden")}function h(){p.classList.remove("is-visible"),g.classList.remove("body-hidden")}
//# sourceMappingURL=index.js.map
