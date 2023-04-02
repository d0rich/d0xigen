import b from"./Icon.b3dd37fe.js";import{_ as D}from"./nuxt-link.075ce972.js";import{a as _,o as n,c as m,w as l,s as a,v as g,Z as S,r as x,Y as $,p as y,u as r,D as w,e as u,A as E,t as h,W as H,E as j,f as V,a7 as R,ai as B,z as A,aj as F,ak as O,al as C,am as I,b as M}from"./entry.5a4e1aa5.js";import Y from"./ContentNavigation.befb8f3d.js";import"./config.963af07d.js";import"./Icon.vue.800d5b2d.js";import"./asyncData.e2173b34.js";/* empty css                   *//* empty css                            *//* empty css                      *//* empty css                            *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                     *//* empty css                    *//* empty css                    *//* empty css                   *//* empty css                        *//* empty css                       *//* empty css                    *//* empty css                    *//* empty css                       *//* empty css                    *//* empty css                    *//* empty css                    */const Z={class:"d-shape"},q={class:"d-shape__bg-wrapper"},G={name:"DWrapShape"},T=_({...G,props:{shapeClass:null,shapeStyle:null,filterClass:null,filterStyle:null,tag:null},setup(t){return(e,o)=>(n(),m($(t.tag??"div"),null,{default:l(()=>[a("div",Z,[a("div",{class:g(["d-shape__bg-filter",t.filterClass]),style:S(t.filterStyle)},[a("div",q,[a("div",{class:g(["d-shape__bg",t.shapeClass]),style:S(t.shapeStyle)},null,6)])],6),x(e.$slots,"default")])]),_:3}))}}),J={key:0,class:"d-focus-hl__hl--negative-tile"},K={key:2,class:"d-focus-hl__hl--negative-list-item"},Q={name:"DWrapShape"},U=_({...Q,props:{linkExact:Boolean,noPassiveLink:Boolean,variant:{type:String,default:"negative-tile"},tag:{type:String,default:"div"},colorClass:{type:[String,Object],default:"bg-red-600"}},setup(t){const e=t,o=y(()=>e.to||e.href?D:e.tag);return(p,s)=>{const c=T;return n(),m(c,null,{default:l(()=>[(n(),m($(r(o)),w(e,{class:["d-focus-hl",{"d-focus-hl--exact":t.linkExact,"d-focus-hl--not-exact":!t.linkExact,"d-focus-hl--no-passive-link":t.noPassiveLink}]}),{default:l(()=>[t.variant==="negative-tile"?(n(),u("div",J)):t.variant==="list-item"?(n(),u("div",{key:1,class:g(["d-focus-hl__hl--list-item",t.colorClass])},null,2)):t.variant==="negative-list-item"?(n(),u("div",K)):E("",!0),x(p.$slots,"default")]),_:3},16,["class"]))]),_:3})}}}),X={name:"DBtn"},L=_({...X,props:{to:{type:String,default:void 0},href:{type:String,default:void 0},exact:Boolean,noPassiveHl:Boolean,noRotate:Boolean,tag:{type:String,default:"button"},highlight:{type:String,default:void 0},colorClass:[String,Object],textTransform:{type:String,default:"uppercase"}},setup(t){const e=t,o=y(()=>e.to||e.href?D:e.tag);return(p,s)=>{const c=U;return n(),m($(r(o)),w({class:["d-btn",{"-rotate-6":!t.noRotate,uppercase:t.textTransform==="uppercase",capitalize:t.textTransform==="capitalize",lowercase:t.textTransform==="lowercase"}]},e),{default:l(()=>[h(c,{variant:t.highlight,"link-exact":t.exact,"no-passive-link":t.noPassiveHl,"color-class":t.colorClass},{default:l(()=>[x(p.$slots,"default")]),_:3},8,["variant","link-exact","no-passive-link","color-class"])]),_:3},16,["class"])}}}),N=()=>({showContentTree:H("layout/docs/showContentTree",()=>!0)}),tt={class:"grid grid-cols-[24px_1fr] items-start gap-x-4 py-1 transition-colors"},et={key:1},P=_({__name:"ContentNavigationItem",props:{navItem:null,parentPath:null},setup(t){const e=t,o=j(),{showContentTree:p}=N(),s=V(!1),c=y(()=>{const d=e.navItem._path;return d==="/"?o.path==="/":o.path.startsWith(d)}),f=y(()=>!!e.navItem.children&&!!e.navItem.children.length);return R(()=>{s.value=c.value}),(d,i)=>{const W=b,k=L,z=P;return n(),u("li",null,[a("div",tt,[r(f)?(n(),m(k,{key:0,tag:"button","no-rotate":"",onClick:i[0]||(i[0]=v=>s.value=!r(s))},{default:l(()=>[h(W,{name:r(s)?"ic:sharp-expand-more":"ic:sharp-chevron-right",class:"text-2xl"},null,8,["name"])]),_:1})):(n(),u("div",et)),a("div",null,[h(k,{to:t.navItem._path,highlight:"negative-list-item","no-rotate":"","text-transform":"none",onClick:i[1]||(i[1]=v=>p.value=!1)},{default:l(()=>[B(A(t.navItem.title),1)]),_:1},8,["to"]),F(a("ul",null,[(n(!0),u(C,null,I(t.navItem.children,v=>(n(),m(z,{key:v._path,"nav-item":v,"parent-path":t.navItem._path},null,8,["nav-item","parent-path"]))),128))],512),[[O,r(f)&&r(s)]])])])])}}}),nt={name:"DLayoutHeader"},at={class:"p-4 font-serif font-semibold"};function ot(t,e,o,p,s,c){const f=b,d=L,i=T;return n(),m(i,{tag:"header",class:"absolute top-0 left-0 right-0","shape-class":"bg-black","shape-style":{clipPath:"polygon(0 0, 100% 0, 100% calc(100% - 1rem), 0 100%)"}},{default:l(()=>[a("nav",at,[h(d,{tag:"button",class:"text-2xl"},{default:l(()=>[h(f,{name:"ic:sharp-menu"})]),_:1}),B(" d0rich-docs ")])]),_:1},8,["shape-style"])}const st=M(nt,[["render",ot]]),lt={class:"pt-24 flex justify-around w-fit flex-col-reverse md:flex-row"},it={class:"sticky top-32"},rt={class:"min-h-[150vh]"},Rt=_({__name:"docs",setup(t){const{showContentTree:e}=N();return(o,p)=>{const s=st,c=P,f=Y;return n(),u(C,null,[h(s),a("div",lt,[a("aside",{class:g(["w-72 px-3 fixed z-20 h-full bg-neutral-50 top-0 transition-all md:h-auto md:relative md:bg-inherit md:left-0",{"-left-72":!r(e),"left-0":r(e)}])},[a("nav",it,[h(f,null,{default:l(({navigation:d})=>[a("ul",null,[(n(!0),u(C,null,I(d,i=>(n(),m(c,{key:i._path,"nav-item":i},null,8,["nav-item"]))),128))])]),_:1})])],2),a("main",rt,[x(o.$slots,"default")])])],64)}}});export{Rt as default};