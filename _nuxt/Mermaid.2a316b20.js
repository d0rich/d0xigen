import{_ as g}from"./LetterD.01dbd7c7.js";import{a as p,o as i,b as l,e,f as u,h,i as b,j as x,r as m,k as v,l as y,u as o,t as k,m as w,p as D}from"./entry.22f210a6.js";/* empty css                    */import"./_plugin-vue_export-helper.c27b6911.js";const N={name:"DAnimationSpinner"},B=p({...N,props:{spinPeriod:{type:Number,default:10},bladeWigglePeriod:{type:Number,default:5}},setup(s){const r="315 315";return(a,d)=>{const n=g;return i(),l("svg",{class:"spinner",viewBox:"0 0 630 630",xmlns:"http://www.w3.org/2000/svg",style:h({"--d-spinner-spin-period":s.spinPeriod+"s","--d-spinner-blade-wiggle-period":s.bladeWigglePeriod+"s"})},[e("defs",null,[u(n,{id:"d-letter"}),e("use",{id:"d-spinner-blade",href:"#d-letter",class:"d-animation-spinner__blade","transform-origin":r}),e("g",{id:"spinner",class:"d-animation-spinner__spinner","transform-origin":r},[e("use",{href:"#d-spinner-blade",transform:"rotate(0)","transform-origin":r}),e("use",{href:"#d-spinner-blade",transform:"rotate(120)","transform-origin":r}),e("use",{href:"#d-spinner-blade",transform:"rotate(240)","transform-origin":r})])]),e("use",{href:"#spinner",transform:"translate( -20 20 )",class:"fill-black","transform-origin":r}),e("use",{href:"#spinner",class:"fill-white","transform-origin":r})],4)}}}),C={class:"relative"},A=["textContent"],M={key:0,class:"absolute inset-0 font-serif"},L=p({__name:"Mermaid",props:{code:null},setup(s){const r=s,{$mermaid:a}=b(),d=x(()=>atob(r.code)),n=m(null),t=m(!0);async function f(){if(t.value=!0,n.value&&a){try{await a.run({nodes:[n.value],suppressErrors:!0})}catch(c){console.error(c)}t.value=!1}}return v(()=>{f()}),(c,P)=>{const _=B;return i(),l("figure",C,[e("pre",{ref_key:"codeBlock",ref:n,class:y({"opacity-0":o(t)}),textContent:k(o(d))},null,10,A),e("div",null,[o(t)?(i(),l("div",M,[u(_,{class:"max-h-[calc(100%_-_2rem)]"}),w(" Mermaid diagram is loading... ")])):D("",!0)])])}}});export{L as default};
