import{i as g}from"./assets/vendor-Bk3t6AMZ.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const d={method:"POST",headers:{"Content-Type":"application/json",accept:"application/json"}},p=async t=>{d.body=JSON.stringify(t);try{const e=await fetch("https:portfolio-js.b.goit.study/api/requests",d);if(!e.ok)throw new Error(e.status);return e.json()}catch(e){throw console.log(e),e}},h=(t,e)=>{let s;return function(...c){clearTimeout(s),s=setTimeout(()=>t.apply(this,c),e)}},f=t=>g.warning({message:t,position:"topRight",backgroundColor:"#e74a3b",messageColor:"#FAFAFB",messageLineHeight:"24px",maxWidth:"310px",theme:"dark",timeout:2e5}),y=(t,e,s)=>{const c=`
  <div class="modal">
    <button class="modal-btn-close" data-modal-close>
      <svg class="modal-close" width="24" height="24">
        <use href="./img/sprite.svg#close-modal"></use>
      </svg>
    </button>
    <h3 class="modal-title">${e}</h3>
    <p class="modal-text">
      ${s}
    </p>
  </div>`;t.innerHTML=c},n={contactForm:document.querySelector(".contact-form"),backDrop:document.querySelector(".backdrop"),errorMessage:document.querySelector(".notvalid"),checkedIcon:document.querySelector(".input-icon")},a=()=>n.backDrop.classList.toggle("is-hidden"),v=()=>{const t=document.querySelector("[data-modal-close]");a();const e=s=>{(s.code==="Escape"||s.currentTarget===s.target)&&(a(),window.removeEventListener("keydown",e))};window.addEventListener("keydown",e),n.backDrop.addEventListener("click",e),t.addEventListener("click",a)},L=t=>{t.preventDefault();const{email:{value:e},comment:{value:s}}=t.target;p({email:e,comment:s}).then(({title:c,message:o})=>{y(n.backDrop,c,o),v(),t.target.reset(),n.checkedIcon.classList.add("is-hidden")}).catch(c=>{f(`Error: № ${c.message}. Please verify the information you provided and try again `)})},b=h(t=>{const{valid:e}=t.target.validity;e?(n.errorMessage.classList.add("is-hidden"),t.target.classList.remove("notvalid"),n.checkedIcon.classList.remove("is-hidden")):(n.errorMessage.classList.remove("is-hidden"),t.target.classList.add("notvalid"))},1e3);n.contactForm.email.addEventListener("blur",()=>{n.errorMessage.classList.add("is-hidden")});n.contactForm.email.addEventListener("input",b);n.contactForm.addEventListener("submit",L);const k=document.querySelector(".menu-icon-btn"),E=document.querySelector(".header-modal-btn"),l=document.querySelector(".header-modal"),M=document.querySelectorAll(".modal-list-item a"),u=document.querySelector("body");k.addEventListener("click",S);E.addEventListener("click",m);M.forEach(t=>t.addEventListener("click",m));function S(){l.classList.toggle("is-visible"),u.classList.toggle("body-hidden")}function m(){l.classList.remove("is-visible"),u.classList.remove("body-hidden")}
//# sourceMappingURL=index.js.map
