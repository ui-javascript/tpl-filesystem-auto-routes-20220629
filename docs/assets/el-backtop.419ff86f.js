
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{d as e,y as a,z as t,A as s,c as l,B as o,o as r,t as u,j as n,l as i,e as c,C as m,i as p,h as v,n as d,D as f,k as b,T as g,E as k,F as y,g as h,G as E,H as x,I as T}from"./index.015bb7ab.js";import{t as $}from"./error2.13f96d52.js";const _=e=>e**3,j=["onClick"];const q=T(k(e({name:"ElBacktop",props:{visibilityHeight:{type:Number,default:200},target:{type:String,default:""},right:{type:Number,default:40},bottom:{type:Number,default:40}},emits:{click:e=>e instanceof MouseEvent},setup(e,{emit:k}){const T=e,q=a("backtop"),w=t(),A=t(),B=s(!1),C=l((()=>({right:`${T.right}px`,bottom:`${T.bottom}px`}))),D=()=>{if(!w.value)return;const e=Date.now(),a=w.value.scrollTop,t=()=>{if(!w.value)return;const s=(Date.now()-e)/500;var l;s<1?(w.value.scrollTop=a*(1-((l=s)<.5?_(2*l)/2:1-_(2*(1-l))/2)),requestAnimationFrame(t)):w.value.scrollTop=0};requestAnimationFrame(t)},F=e=>{D(),k("click",e)},H=y((()=>{w.value&&(B.value=w.value.scrollTop>=T.visibilityHeight)}),300);return o(A,"scroll",H),r((()=>{var e;A.value=document,w.value=document.documentElement,T.target&&(w.value=null!=(e=document.querySelector(T.target))?e:void 0,w.value||$("ElBacktop",`target is not existed: ${T.target}`),A.value=w.value)})),(e,a)=>(u(),n(g,{name:`${v(q).namespace.value}-fade-in`},{default:i((()=>[B.value?(u(),c("div",{key:0,style:p(v(C)),class:d(v(q).b()),onClick:f(F,["stop"])},[m(e.$slots,"default",{},(()=>[h(v(x),{class:d(v(q).e("icon"))},{default:i((()=>[h(v(E))])),_:1},8,["class"])]))],14,j)):b("v-if",!0)])),_:3},8,["name"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/backtop/src/backtop.vue"]]));export{q as E};
//# sourceMappingURL=el-backtop.419ff86f.js.map
