import j from"./Icon.a70c0a96.js";import{r as _,j as D,u as I,k as U,l as q,p as G,a as H,q as K,e as J,s as X,b as Q,v as Y,o as h,f as b,x as $,y as L,w as Z,c as E,T as ee,h as M,z as te,A as ne,t as oe,B as ae,i as se}from"./entry.17c5dee4.js";/* empty css                      */import{_ as R}from"./_plugin-vue_export-helper.c27b6911.js";import"./Icon.vue.f097d220.js";var P;const O=typeof window<"u",re=e=>typeof e=="string",W=()=>{},ue=O&&((P=window==null?void 0:window.navigator)==null?void 0:P.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function C(e){return typeof e=="function"?e():I(e)}function ie(e){return e}function z(e){return U()?(q(e),!0):!1}function le(e,t=!0){G()?H(e):t?e():K(e)}function ce(e,t,n={}){const{immediate:o=!0}=n,u=_(!1);let s=null;function f(){s&&(clearTimeout(s),s=null)}function l(){u.value=!1,f()}function c(...p){f(),u.value=!0,s=setTimeout(()=>{u.value=!1,s=null,e(...p)},C(t))}return o&&(u.value=!0,O&&c()),z(l),{isPending:D(u),start:c,stop:l}}function g(e){var t;const n=C(e);return(t=n==null?void 0:n.$el)!=null?t:n}const F=O?window:void 0,de=O?window.navigator:void 0;function w(...e){let t,n,o,u;if(re(e[0])||Array.isArray(e[0])?([n,o,u]=e,t=F):[t,n,o,u]=e,!t)return W;Array.isArray(n)||(n=[n]),Array.isArray(o)||(o=[o]);const s=[],f=()=>{s.forEach(i=>i()),s.length=0},l=(i,y,a,r)=>(i.addEventListener(y,a,r),()=>i.removeEventListener(y,a,r)),c=X(()=>[g(t),C(u)],([i,y])=>{f(),i&&s.push(...n.flatMap(a=>o.map(r=>l(i,a,r,y))))},{immediate:!0,flush:"post"}),p=()=>{c(),f()};return z(p),p}let x=!1;function pe(e,t,n={}){const{window:o=F,ignore:u=[],capture:s=!0,detectIframe:f=!1}=n;if(!o)return;ue&&!x&&(x=!0,Array.from(o.document.body.children).forEach(a=>a.addEventListener("click",W)));let l=!0;const c=a=>u.some(r=>{if(typeof r=="string")return Array.from(o.document.querySelectorAll(r)).some(m=>m===a.target||a.composedPath().includes(m));{const m=g(r);return m&&(a.target===m||a.composedPath().includes(m))}}),i=[w(o,"click",a=>{const r=g(e);if(!(!r||r===a.target||a.composedPath().includes(r))){if(a.detail===0&&(l=!c(a)),!l){l=!0;return}t(a)}},{passive:!0,capture:s}),w(o,"pointerdown",a=>{const r=g(e);r&&(l=!a.composedPath().includes(r)&&!c(a))},{passive:!0}),f&&w(o,"blur",a=>{var r;const m=g(e);((r=o.document.activeElement)==null?void 0:r.tagName)==="IFRAME"&&!(m!=null&&m.contains(o.document.activeElement))&&t(a)})].filter(Boolean);return()=>i.forEach(a=>a())}function fe(e,t=!1){const n=_(),o=()=>n.value=!!e();return o(),le(o,t),n}function me(e={}){const{navigator:t=de,read:n=!1,source:o,copiedDuring:u=1500,legacy:s=!1}=e,f=["copy","cut"],l=fe(()=>t&&"clipboard"in t),c=J(()=>l.value||s),p=_(""),i=_(!1),y=ce(()=>i.value=!1,u);function a(){l.value?t.clipboard.readText().then(d=>{p.value=d}):p.value=V()}if(c.value&&n)for(const d of f)w(d,a);async function r(d=C(o)){c.value&&d!=null&&(l.value?await t.clipboard.writeText(d):m(d),p.value=d,i.value=!0,y.start())}function m(d){const v=document.createElement("textarea");v.value=d??"",v.style.position="absolute",v.style.opacity="0",document.body.appendChild(v),v.select(),document.execCommand("copy"),v.remove()}function V(){var d,v,S;return(S=(v=(d=document==null?void 0:document.getSelection)==null?void 0:d.call(document))==null?void 0:v.toString())!=null?S:""}return{isSupported:c,text:p,copied:i,copy:r}}const B=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},T="__vueuse_ssr_handlers__";B[T]=B[T]||{};var A;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(A||(A={}));var ye=Object.defineProperty,k=Object.getOwnPropertySymbols,ve=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable,N=(e,t,n)=>t in e?ye(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ge=(e,t)=>{for(var n in t||(t={}))ve.call(t,n)&&N(e,n,t[n]);if(k)for(var n of k(t))_e.call(t,n)&&N(e,n,t[n]);return e};const he={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};ge({linear:ie},he);const we=e=>(te("data-v-4a003820"),e=e(),ne(),e),Oe=we(()=>$("span",{class:"sr-only"},"Copy to clipboard",-1)),Ce={class:"icon-wrapper"},Ie=Q({__name:"ProseCodeCopyButton",props:{content:{type:String,default:""},show:{type:Boolean,default:!1}},setup(e){const t=e,n=_(),{copy:o}=me();pe(n,()=>{s.value==="copied"&&(s.value="init")});const{prose:u}=Y(),s=_("init"),f=l=>{o(t.content).then(()=>{s.value="copied"}).catch(c=>{console.warn("Couldn't copy to clipboard!",c)})};return(l,c)=>{const p=j;return h(),b("button",{ref_key:"copyButtonRef",ref:n,class:M([(e.show||s.value==="copied")&&"show"]),onClick:f},[Oe,$("span",Ce,[L(ee,{name:"fade"},{default:Z(()=>{var i,y;return[s.value==="copied"?(h(),E(p,{key:0,name:(i=I(u).copyButton)==null?void 0:i.iconCopied,size:"18",class:"copied"},null,8,["name"])):(h(),E(p,{key:1,name:(y=I(u).copyButton)==null?void 0:y.iconCopy,size:"18"},null,8,["name"]))]}),_:1})])],2)}}}),be=R(Ie,[["__scopeId","data-v-4a003820"]]),Se={key:0,class:"filename"},Ee=Q({__name:"ProseCode",props:{code:{type:String,default:""},language:{type:String,default:null},filename:{type:String,default:null},highlights:{type:Array,default:()=>[]}},setup(e){const t=_(!1);return(n,o)=>{const u=be;return h(),b("div",{class:M([[`highlight-${e.language}`],"prose-code"]),onMouseenter:o[0]||(o[0]=s=>t.value=!0),onMouseleave:o[1]||(o[1]=s=>t.value=!1)},[e.filename?(h(),b("span",Se,oe(e.filename),1)):ae("",!0),se(n.$slots,"default",{},void 0,!0),L(u,{show:t.value,content:e.code,class:"copy-button"},null,8,["show","content"])],34)}}}),ke=R(Ee,[["__scopeId","data-v-c164ce0a"]]);export{ke as default};
