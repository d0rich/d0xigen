import{_}from"./nuxt-link.16a68450.js";import{a as v,o as n,c as d,w as c,e as i,k as f,h as b,p as m,$ as g,j as B,u as w,G as $,b as u,ah as O,m as T,f as D,Y as k,r as x,A as E}from"./entry.20e40fb8.js";/* empty css                */import{u as P}from"./safe-on-mounted.9366baa0.js";const z={class:"d-shape"},H={class:"d-shape__bg-wrapper"},L={name:"DWrapShape"},W=v({...L,props:{shapeClass:null,shapeStyle:null,filterClass:null,filterStyle:null,tag:null},setup(e){return(t,a)=>(n(),d(g(e.tag??"div"),null,{default:c(()=>[i("div",z,[i("div",{class:f(["d-shape__bg-filter",e.filterClass]),style:b(e.filterStyle)},[i("div",H,[i("div",{class:f(["d-shape__bg",e.shapeClass]),style:b(e.shapeStyle)},null,6)])],6),m(t.$slots,"default")])]),_:3}))}}),j={key:0,class:"d-focus-hl__hl--negative-tile"},I={key:2,class:"d-focus-hl__hl--negative-list-item"},M=i("div",{class:"d-focus-hl__hl--negative-list-item"},null,-1),N={name:"DWrapShape"},R=v({...N,props:{linkExact:Boolean,noPassiveLink:Boolean,active:Boolean,variant:{type:String,default:"negative-tile"},tag:{type:String,default:"div"},colorClass:{type:[String,Object],default:"bg-red-600"}},setup(e){const t=e,a=B(()=>t.to||t.href?_:t.tag);return(s,r)=>{const o=W;return n(),d(o,null,{default:c(()=>[(n(),d(g(w(a)),$(t,{class:["d-focus-hl",{"d-focus-hl--exact":e.linkExact,"d-focus-hl--not-exact":!e.linkExact,"d-focus-hl--no-passive-link":e.noPassiveLink,"d-focus-hl--active":e.active}]}),{default:c(()=>[e.variant==="negative-tile"?(n(),u("div",j)):e.variant==="list-item"?(n(),u("div",{key:1,class:f(["d-focus-hl__hl--list-item",e.colorClass])},null,2)):e.variant==="negative-list-item"?(n(),u("div",I)):e.variant==="composite-list-item"?(n(),u(O,{key:3},[i("div",{class:f(["d-focus-hl__hl--list-item",e.colorClass])},null,2),M],64)):T("",!0),m(s.$slots,"default")]),_:3},16,["class"]))]),_:3})}}}),V={name:"DBtn"},J=v({...V,props:{to:{type:String,default:void 0},href:{type:String,default:void 0},exact:Boolean,noPassiveHighlight:Boolean,active:Boolean,noRotate:Boolean,tag:{type:String,default:"button"},highlight:{type:String,default:void 0},colorClass:[String,Object],textTransform:{type:String,default:"uppercase"}},setup(e){const t=e,a=B(()=>t.to||t.href?_:t.tag);return(s,r)=>{const o=R;return n(),d(g(w(a)),$({class:["d-btn",{"-rotate-6":!e.noRotate,uppercase:e.textTransform==="uppercase",capitalize:e.textTransform==="capitalize",lowercase:e.textTransform==="lowercase"}]},t),{default:c(()=>[D(o,{variant:e.highlight,"link-exact":e.exact,"no-passive-link":e.noPassiveHighlight,"color-class":e.colorClass,active:e.active},{default:c(()=>[m(s.$slots,"default")]),_:3},8,["variant","link-exact","no-passive-link","color-class","active"])]),_:3},16,["class"])}}}),A=()=>({showContentTree:k("layout/docs/showContentTree",()=>!1),tableOfContents:k("layout/docs/tableOfContents",()=>null)}),K=e=>{const{tableOfContents:t}=A(),a=new Map,s=x(null),r=x([]);function o(){var p;s.value?s.value.disconnect():s.value=new IntersectionObserver(h=>{h.forEach(l=>{a.set(l.target.id,l.isIntersecting)}),r.value=Array.from(a.keys()).filter(l=>a.get(l))});const y=h=>{h.forEach(l=>{var S;const C=document.getElementById(l.id);C&&((S=s.value)==null||S.observe(C)),l.children&&y(l.children)})};y(((p=t.value)==null?void 0:p.links)??[])}return E(t,()=>{setTimeout(()=>{o()},100)}),P(e,()=>{o()}),r};export{J as _,W as a,K as b,A as u};
