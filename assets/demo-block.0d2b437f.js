import{_ as g,o as i,c as a,d as o,aI as r,a as p,b as c,w as d,J as h,b7 as m,b4 as f,bo as v,M as C}from"./app.5b70d173.js";const _={data(){return{hovering:!1,isExpanded:!1,fixedControl:!1,scrollParent:null,langConfig:{"hide-text":"\u9690\u85CF\u4EE3\u7801","show-text":"\u663E\u793A\u4EE3\u7801"}}},props:{jsfiddle:Object,default(){return{}}},methods:{scrollHandler(){const{top:e,bottom:t,left:u}=this.$refs.meta.getBoundingClientRect();this.fixedControl=t>document.documentElement.clientHeight&&e+44<=document.documentElement.clientHeight},removeScrollHandler(){this.scrollParent&&this.scrollParent.removeEventListener("scroll",this.scrollHandler)}},computed:{lang(){return this.$route.path.split("/")[1]},blockClass(){return`demo-${this.lang} demo-${this.$router.currentRoute.path.split("/").pop()}`},iconClass(){return this.isExpanded?"el-icon-caret-top":"el-icon-caret-bottom"},controlText(){return this.isExpanded?this.langConfig["hide-text"]:this.langConfig["show-text"]},codeArea(){return this.$el.getElementsByClassName("meta")[0]},codeAreaHeight(){return this.$el.getElementsByClassName("description").length>0?this.$el.getElementsByClassName("description")[0].clientHeight+this.$el.getElementsByClassName("sourceCode")[0].clientHeight+20:this.$el.getElementsByClassName("sourceCode")[0].clientHeight}},watch:{isExpanded(e){if(this.codeArea.style.height=e?`${this.codeAreaHeight+1}px`:"0",!e){this.fixedControl=!1,this.$refs.control.style.left="0",this.removeScrollHandler();return}setTimeout(()=>{this.scrollParent=document.querySelector(".page-component__scroll > .el-scrollbar__wrap"),this.scrollParent&&this.scrollParent.addEventListener("scroll",this.scrollHandler),this.scrollHandler()},200)}},mounted(){this.$nextTick(()=>{let e=this.$el.getElementsByClassName("sourceCode")[0];this.$el.getElementsByClassName("description").length===0&&(e.style.width="100%",e.borderRight="none")})},beforeDestroy(){this.removeScrollHandler()}},x={style:{padding:"24px"},class:"source-bg"},E={class:"meta",ref:"meta"},y={key:0,class:"description"},b={class:"sourceCode"};function $(e,t,u,H,s,l){return i(),a("div",{class:h(["demo-block",[l.blockClass,{hover:s.hovering}]]),onMouseenter:t[1]||(t[1]=n=>s.hovering=!0),onMouseleave:t[2]||(t[2]=n=>s.hovering=!1)},[o("div",x,[r(e.$slots,"source")]),o("div",E,[e.$slots.default?(i(),a("div",y,[r(e.$slots,"default")])):p("v-if",!0),o("div",b,[r(e.$slots,"sourceCode")])],512),o("div",{class:"demo-block-control",ref:"control",onClick:t[0]||(t[0]=n=>s.isExpanded=!s.isExpanded)},[c(m,{name:"arrow-slide"},{default:d(()=>[o("i",{class:h([l.iconClass,{hovering:s.hovering}])},null,2)]),_:1}),c(m,{name:"text-slide",persisted:""},{default:d(()=>[f(o("span",null,C(l.controlText),513),[[v,s.hovering]])]),_:1})],512)],34)}const k=g(_,[["render",$],["__file","demo-block.vue"]]);export{k as default};