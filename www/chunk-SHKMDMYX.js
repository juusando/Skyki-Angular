import{a as g,b as h,c,d as a,e as d,f as s,g as u,h as p,i as l,j as m,k as v,l as f,m as x,n as C,o as y,p as M,r as w,z as b}from"./chunk-YLDKVQYC.js";import"./chunk-AWLJRFMK.js";import"./chunk-DPS53AMR.js";import"./chunk-KVKS32JK.js";import"./chunk-3WZZPK6V.js";import"./chunk-OLA2TFA4.js";import"./chunk-5UTQD2FY.js";import"./chunk-X4HFT2W7.js";import"./chunk-4WFVMWDK.js";import"./chunk-75CQR26D.js";import"./chunk-NMYJD6OP.js";import"./chunk-B43CU5JX.js";import"./chunk-TQEIIVVC.js";import"./chunk-LF5XB4YN.js";import"./chunk-JHI3MBHO.js";function P(n,S){if(n&1&&m(0,"div",1),n&2){let e=v();s("innerHTML",e.svgContent,h)}}var _=(()=>{class n{get hostClasses(){return`icon icon-${this.name}`}constructor(e,t,i){this.http=e,this.sanitizer=t,this.el=i,this.name="",this.svgContent=null}ngOnInit(){this.name&&this.loadSvg()}loadSvg(){let e=`assets/icons/${this.name}.svg`;this.http.get(e,{responseType:"text"}).subscribe({next:t=>{let i=this.processSvg(t);this.svgContent=this.sanitizer.bypassSecurityTrustHtml(i)},error:t=>{console.error(`Error loading SVG icon: ${this.name}`,t)}})}processSvg(e){let i=new DOMParser().parseFromString(e,"image/svg+xml"),o=i.querySelector("svg");if(o){if(["width","height"].forEach(r=>{o.hasAttribute(r)&&o.removeAttribute(r)}),!o.hasAttribute("viewBox")&&o.hasAttribute("width")&&o.hasAttribute("height")){let r=o.getAttribute("width")||"24",I=o.getAttribute("height")||"24";o.setAttribute("viewBox",`0 0 ${r} ${I}`)}return new XMLSerializer().serializeToString(i)}return e}static{this.\u0275fac=function(t){return new(t||n)(c(y),c(w),c(g))}}static{this.\u0275cmp=a({type:n,selectors:[["app-icon"]],hostVars:2,hostBindings:function(t,i){t&2&&u(i.hostClasses)},inputs:{name:"name"},decls:1,vars:1,consts:[[3,"innerHTML",4,"ngIf"],[3,"innerHTML"]],template:function(t,i){t&1&&d(0,P,1,1,"div",0),t&2&&s("ngIf",i.svgContent)},dependencies:[C,x,M],styles:["[_nghost-%COMP%]{display:inline-flex;align-items:center;justify-content:center}[_nghost-%COMP%]     svg{width:100%;height:100%}div[_ngcontent-%COMP%]{display:contents}"]})}}return n})();var B=(()=>{class n{constructor(){}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=a({type:n,selectors:[["app-home"]],decls:9,vars:2,consts:[[3,"fullscreen","scrollY"],["id","box"],["id","container"],[1,"icon-container"],["name","user_2",1,"svg-icon"]],template:function(t,i){t&1&&(p(0,"ion-content",0)(1,"div",1)(2,"div",2)(3,"div",3),m(4,"app-icon",4),l(),p(5,"h1"),f(6,"HELLO ZILAPP"),l(),p(7,"h2"),f(8,"21-03-2025"),l()()()()),t&2&&s("fullscreen",!0)("scrollY",!1)},dependencies:[b,_],styles:["ion-content[_ngcontent-%COMP%]{--background: transparent}#box[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;align-items:center;justify-content:center;background-color:#e62762}#container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;text-align:center;padding:20px;border-radius:8px;width:100%;font-family:Cera,sans-serif}.icon-container[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:20px;margin-top:30px}app-icon[_ngcontent-%COMP%]{width:160px;height:160px;stroke-width:1.1px;color:#fff}h1[_ngcontent-%COMP%]{color:#fff;font-weight:900;line-height:90%;font-size:68px;margin:0;font-family:Outfit,sans-serif}h2[_ngcontent-%COMP%]{color:#fff;font-weight:500;line-height:90%;font-size:44px;margin:0;font-family:Outfit,sans-serif}"]})}}return n})();export{B as HomePage};
