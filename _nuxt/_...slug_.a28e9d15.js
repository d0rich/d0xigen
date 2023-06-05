import{a as u,K as A,o as s,c as i,w as d,s as h,t as v,v as _,b,f as p,e as m,x as S,p as x,ad as E,ae as M,J as T,af as q,j as O,ag as C,ah as R,ai as $,u as c,T as V,N as H,m as I,Z as D}from"./entry.0aa717f9.js";import z from"./ContentRendererMarkdown.3ec8f913.js";import U from"./Icon.cc736643.js";import{_ as B}from"./Shape.vue.39627c41.js";import{_ as L}from"./_plugin-vue_export-helper.c27b6911.js";import{_ as W}from"./nuxt-link.ec8bdcc5.js";import F from"./ContentRenderer.7439e254.js";import{_ as J,u as K}from"./layout.c49fce4a.js";import{u as X}from"./asyncData.fd585d8f.js";import"https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";const Y=n=>Object.fromEntries(Object.entries(n).filter(([,t])=>t!==void 0)),N=(n,t)=>(a,e)=>(A(()=>n({...Y(a),...e.attrs},e)),()=>{var o,r;return t?(r=(o=e.slots).default)==null?void 0:r.call(o):null}),Z={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:[String,Object,Array],contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},G=u({name:"Title",inheritAttrs:!1,setup:N((n,{slots:t})=>{var e,o,r;return{title:((r=(o=(e=t.default)==null?void 0:e.call(t))==null?void 0:o[0])==null?void 0:r.children)||null}})}),Q=u({name:"Meta",inheritAttrs:!1,props:{...Z,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:N(n=>{const t={...n};return t.httpEquiv&&(t["http-equiv"]=t.httpEquiv,delete t.httpEquiv),{meta:[t]}})}),tt=u({name:"Head",inheritAttrs:!1,setup:(n,t)=>()=>{var a,e;return(e=(a=t.slots).default)==null?void 0:e.call(a)}}),et=u({__name:"AsyncSafeMeta",props:{title:{},ogTitle:{},description:{},image:{}},setup(n){return(t,a)=>{const e=G,o=Q,r=tt;return s(),i(r,null,{default:d(()=>[t.title?(s(),i(e,{key:0},{default:d(()=>[h(v(t.title),1)]),_:1})):_("",!0),t.title||t.ogTitle?(s(),i(o,{key:1,property:"og:title",content:t.ogTitle||t.title},null,8,["content"])):_("",!0),t.description?(s(),i(o,{key:2,name:"description",content:t.description},null,8,["content"])):_("",!0),t.description?(s(),i(o,{key:3,property:"og:description",content:t.description},null,8,["content"])):_("",!0)]),_:1})}}}),nt={name:"DCardTitle"};const ot={class:"card__title"},at={class:"card__title__content__text"},st={class:"ml-2 print:text-neutral-600"};function rt(n,t,a,e,o,r){const l=B;return s(),b("div",ot,[p(l,{class:"card__title__content","shape-class":"card__title__content__shape"},{default:d(()=>[m("h3",at,[S(n.$slots,"default")])]),_:3}),m("span",st,[S(n.$slots,"extra")])])}const it=L(nt,[["render",rt]]),ct={name:"DCard"},lt=u({...ct,props:{mode:{type:String,default:"default"},dense:Boolean},setup(n){return(t,a)=>{const e=B;return s(),i(e,{"shape-class":{card__bg:!n.dense,"card__bg--dense":n.dense},class:x({"card--homepage-story force-light":n.mode==="homepage-story","card--homepage-skills force-light":n.mode==="homepage-skills",card:n.mode==="default"})},{default:d(()=>[m("div",{class:x({card__content:!n.dense,"card__content--dense":n.dense})},[S(t.$slots,"default")],2)]),_:3},8,["shape-class","class"])}}});const dt={class:"text-xl font-bold"},ut={name:"DLayoutSurroundDocCard"},_t=u({...ut,props:{doc:{},direction:{}},setup(n){return(t,a)=>{const e=U,o=it,r=lt,l=W;return s(),i(l,{to:t.doc._path,class:"transition-transform hover:scale-90"},{default:d(()=>[p(r,{dense:""},{default:d(()=>[t.direction==="before"?(s(),i(o,{key:0},{default:d(()=>[p(e,{name:"ic:sharp-arrow-back-ios"}),h("Previous ")]),_:1})):(s(),i(o,{key:1},{default:d(()=>[h(" Next"),p(e,{name:"ic:sharp-arrow-forward-ios"})]),_:1})),m("h4",dt,v(t.doc.title),1),m("p",null,v(t.doc.description),1)]),_:1})]),_:1},8,["to"])}}}),pt={},mt=E('<div class="flex justify-center items-center"><div class="text-6xl font-bold text-red-600 dark:text-red-300 pr-6"> 404 </div><div class="border-l border-neutral-500 pl-6"><h1 class="text-4xl font-bold mb-3">Page not found</h1><p class="text-gray-500 dark:text-gray-400"> The page you are looking for does not exist. </p></div></div>',1),ft={class:"flex justify-center mt-10"};function gt(n,t){const a=J;return s(),b("section",null,[mt,m("div",ft,[p(a,{to:"/","no-rotate":"",class:"text-3xl"},{default:d(()=>[h("To homepage")]),_:1})])])}const yt=L(pt,[["render",gt]]),ht=u({name:"LayoutLoader",inheritAttrs:!1,props:{name:String},async setup(n,t){const a=await C[n.name]().then(e=>e.default||e);return()=>H(a,t.attrs,t.slots)}}),vt=u({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(n,t){const a=M("_route"),e=a===T()?q():a,o=O(()=>c(n.name)??e.meta.layout??"default");return()=>{const r=o.value&&o.value in C,l=e.meta.layoutTransition??R;return $(V,r&&l,{default:()=>$(ht,r&&{key:o.value,name:o.value,...t.attrs},t.slots).default()}).default()}}}),St={class:"justify-center grid sm:grid-cols-2 gap-8 items-start mt-32"},bt={name:"DocPage"},jt=u({...bt,setup(n){const t=T(),{tableOfContents:a}=K(),{data:e,error:o}=X("page-data"+t.path,async()=>{const l=D(t.path).findOne(),f=D().only(["_path","title","description"]).findSurround(t.path.replace(/\/$/,""),{before:1,after:1}),[g,y]=await Promise.all([l,f]);return{...g,before:y[0],after:y[1]}},"$YuoAxEXb6b");function r(){var l,f;a.value=((f=(l=e.value)==null?void 0:l.body)==null?void 0:f.toc)??null}return r(),I(()=>{r()}),(l,f)=>{const g=et,y=z,k=_t,P=F,j=yt,w=vt;return s(),b("div",null,[c(e)?(s(),i(g,{key:0,title:c(e).title,description:c(e).description},null,8,["title","description"])):c(o)?(s(),i(g,{key:1,title:"Page not found"})):_("",!0),p(w,null,{default:d(()=>[c(e)&&c(e)._type==="markdown"?(s(),i(P,{key:0,value:c(e)},{default:d(()=>[p(y,{tag:"article",class:"d-article",value:c(e)},null,8,["value"]),m("nav",St,[c(e).before?(s(),i(k,{key:0,doc:c(e).before,direction:"before"},null,8,["doc"])):_("",!0),c(e).after?(s(),i(k,{key:1,doc:c(e).after,direction:"after"},null,8,["doc"])):_("",!0)])]),_:1},8,["value"])):c(o)?(s(),i(j,{key:1,class:"mt-[20vh]"})):_("",!0)]),_:1})])}}});export{jt as default};
