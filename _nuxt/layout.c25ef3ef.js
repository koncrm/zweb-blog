import{f as l,a1 as p,j as c,K as m,a2 as d,i as f,a3 as y,a4 as i,T as _,a5 as v,u as L}from"./entry.2043473a.js";const T=l({props:{name:String},async setup(s,u){const e=await p[s.name]().then(t=>t.default||t);return()=>c(e,{},u.slots)}}),j=l({props:{name:{type:[String,Boolean,Object],default:null}},setup(s,u){const e=v("_route"),t=e===m()?d():e,n=f(()=>{var a,o;return(o=(a=L(s.name))!=null?a:t.meta.layout)!=null?o:"default"});return()=>{var r;const a=n.value&&n.value in p,o=(r=t.meta.layoutTransition)!=null?r:y;return i(_,a&&o,{default:()=>i(T,a&&{key:n.value,name:n.value,hasTransition:void 0},u.slots).default()}).default()}}});export{j as default};