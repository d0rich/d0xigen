import L from"./ContentRendererMarkdown.3f134f28.js";import g from"./ContentRenderer.b474ae06.js";import{a as l,ad as C,E as d,ae as w,p as k,af as f,ag as x,ah as _,u as s,T as R,I as A,X as B,e as N,t as i,w as m,o as p,c as O,A as T,K as $}from"./entry.fa05daf1.js";import{u as b}from"./asyncData.4aa22052.js";import{u as j}from"./layout.c412f67b.js";const D=l({name:"LayoutLoader",inheritAttrs:!1,props:{name:String},async setup(u,t){const n=await f[u.name]().then(e=>e.default||e);return()=>A(n,t.attrs,t.slots)}}),E=l({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(u,t){const n=C("_route"),e=n===d()?w():n,o=k(()=>s(u.name)??e.meta.layout??"default");return()=>{const a=o.value&&o.value in f,r=e.meta.layoutTransition??x;return _(R,a&&r,{default:()=>_(D,a&&{key:o.value,name:o.value,...t.attrs},t.slots).default()}).default()}}}),S={name:"DocPage"},X=l({...S,async setup(u){var r,c;let t,n;const e=d(),{tableOfContents:o}=j(),{data:a}=([t,n]=B(()=>b("page-data"+e.path,()=>$(e.path).findOne(),"$aROEKgqrzL")),t=await t,n(),t);return o.value=((c=(r=a.value)==null?void 0:r.body)==null?void 0:c.toc)??null,(q,I)=>{const y=L,v=g,h=E;return p(),N("div",null,[i(h,null,{default:m(()=>[s(a)&&s(a)._type==="markdown"?(p(),O(v,{key:0,value:s(a),tag:"article"},{default:m(()=>[i(y,{value:s(a),class:"d-article"},null,8,["value"])]),_:1},8,["value"])):T("",!0)]),_:1})])}}});export{X as default};