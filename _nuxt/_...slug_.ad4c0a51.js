import{b as u,G as L,o as s,c as l,w as p,aa as B,t as T,B as c,ab as A,F as y,ac as x,f as C,ad as _,ae as w,af as f,u as i,T as q,J as E,X as M,h as O,y as g,L as j}from"./entry.0fbaaa7b.js";import N from"./ContentRendererMarkdown.09b3df22.js";import R from"./ContentRenderer.a60f4114.js";import{u as D}from"./asyncData.bc01b7d6.js";import{u as P}from"./layout.167d59e6.js";const $=e=>Object.fromEntries(Object.entries(e).filter(([,t])=>t!==void 0)),S=(e,t)=>(r,n)=>(L(()=>e({...$(r),...n.attrs},n)),()=>{var o,a;return t?(a=(o=n.slots).default)==null?void 0:a.call(o):null}),H={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:[String,Object,Array],contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},V=u({name:"Title",inheritAttrs:!1,setup:S((e,{slots:t})=>{var n,o,a;return{title:((a=(o=(n=t.default)==null?void 0:n.call(t))==null?void 0:o[0])==null?void 0:a.children)||null}})}),z=u({name:"Meta",inheritAttrs:!1,props:{...H,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:S(e=>{const t={...e};return t.httpEquiv&&(t["http-equiv"]=t.httpEquiv,delete t.httpEquiv),{meta:[t]}})}),F=u({name:"Head",inheritAttrs:!1,setup:(e,t)=>()=>{var r,n;return(n=(r=t.slots).default)==null?void 0:n.call(r)}}),U=u({__name:"AsyncSafeMeta",props:{title:null,ogTitle:null,description:null,image:null},setup(e){return(t,r)=>{const n=V,o=z,a=F;return s(),l(a,null,{default:p(()=>[e.title?(s(),l(n,{key:0},{default:p(()=>[B(T(e.title),1)]),_:1})):c("",!0),e.title||e.ogTitle?(s(),l(o,{key:1,property:"og:title",content:e.ogTitle||e.title},null,8,["content"])):c("",!0),e.description?(s(),l(o,{key:2,name:"description",content:e.description},null,8,["content"])):c("",!0),e.description?(s(),l(o,{key:3,property:"og:description",content:e.description},null,8,["content"])):c("",!0)]),_:1})}}}),G=u({name:"LayoutLoader",inheritAttrs:!1,props:{name:String},async setup(e,t){const r=await _[e.name]().then(n=>n.default||n);return()=>E(r,t.attrs,t.slots)}}),I=u({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(e,t){const r=A("_route"),n=r===y()?x():r,o=C(()=>i(e.name)??n.meta.layout??"default");return()=>{const a=o.value&&o.value in _,d=n.meta.layoutTransition??w;return f(q,a&&d,{default:()=>f(G,a&&{key:o.value,name:o.value,...t.attrs},t.slots).default()}).default()}}}),J={name:"DocPage"},et=u({...J,async setup(e){var d,m;let t,r;const n=y(),{tableOfContents:o}=P(),{data:a}=([t,r]=M(()=>D("page-data"+n.path,()=>j(n.path).findOne(),"$aROEKgqrzL")),t=await t,r(),t);return o.value=((m=(d=a.value)==null?void 0:d.body)==null?void 0:m.toc)??null,(K,X)=>{const h=U,v=N,k=R,b=I;return s(),O("div",null,[i(a)?(s(),l(h,{key:0,title:i(a).title,description:i(a).description},null,8,["title","description"])):c("",!0),g(b,null,{default:p(()=>[i(a)&&i(a)._type==="markdown"?(s(),l(k,{key:0,value:i(a)},{default:p(()=>[g(v,{tag:"article",class:"d-article",value:i(a)},null,8,["value"])]),_:1},8,["value"])):c("",!0)]),_:1})])}}});export{et as default};