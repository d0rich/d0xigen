import{a as d,aa as _,k as f,j as o,o as x,b as z,h as S,u as r}from"./entry.dce2177f.js";/* empty css                    */import{_ as I}from"./_plugin-vue_export-helper.c27b6911.js";import"https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";const h=d({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(p){var c;const s=p;_(t=>({"589837de":r(l)}));const e=f();(c=e==null?void 0:e.nuxtIcon)!=null&&c.aliases;const m=o(()=>{var t;return(((t=e==null?void 0:e.nuxtIcon)==null?void 0:t.aliases)||{})[s.name]||s.name}),l=o(()=>`url('https://api.iconify.design/${m.value.replace(":","/")}.svg')`),a=o(()=>{var n,i,u;if(!s.size&&typeof((n=e.nuxtIcon)==null?void 0:n.size)=="boolean"&&!((i=e.nuxtIcon)!=null&&i.size))return;const t=s.size||((u=e.nuxtIcon)==null?void 0:u.size)||"1em";return String(Number(t))===t?`${t}px`:t});return(t,n)=>(x(),z("span",{style:S({width:r(a),height:r(a)})},null,4))}}),k=I(h,[["__scopeId","data-v-e9d3514d"]]);export{k as default};