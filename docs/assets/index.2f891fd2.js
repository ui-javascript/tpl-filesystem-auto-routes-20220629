
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{d as e,c as t,t as a,j as r,i as s,h as i,aA as n,e as o,f as l}from"./index.015bb7ab.js";const p=["xlink:href"],u=e({name:"SvgIcon"}),d=Object.assign(u,{props:{name:{type:String,required:!0},flip:{type:String,validator:e=>["","horizontal","vertical","both"].includes(e),default:""},rotate:{type:Number,validator:e=>e>=0&&e<=360,default:0}},setup(e){const u=e,d=t((()=>{let e=[];if(""!=u.flip)switch(u.flip){case"horizontal":e.push("rotateY(180deg)");break;case"vertical":e.push("rotateX(180deg)");break;case"both":e.push("rotateX(180deg)"),e.push("rotateY(180deg)")}return 0!=u.rotate&&e.push(`rotate(${u.rotate}deg)`),`transform: ${e.join(" ")};`}));return(t,u)=>0===e.name.indexOf("ep:")?(a(),r(i(n),{key:0,icon:e.name,style:s(i(d))},null,8,["icon","style"])):(a(),o("svg",{key:1,style:s(i(d)),"aria-hidden":"true"},[l("use",{"xlink:href":`#icon-${e.name}`},null,8,p)],4))}});export{d as _};
//# sourceMappingURL=index.2f891fd2.js.map
