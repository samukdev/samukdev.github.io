"use strict";(globalThis["webpackChunkquasar_project"]=globalThis["webpackChunkquasar_project"]||[]).push([[571],{5571:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Ze});var s=a(9835);function o(e,t,a,o,n,l){const i=(0,s.up)("section-home"),r=(0,s.up)("section-about-me"),c=(0,s.up)("section-skills"),d=(0,s.up)("section-portfolio"),m=(0,s.up)("section-contato"),p=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(p,{class:"wrapper"},{default:(0,s.w5)((()=>[(0,s.Wm)(i,{id:"#home"}),(0,s.Wm)(r,{id:"#aboutme"}),(0,s.Wm)(c,{id:"#skills"}),(0,s.Wm)(d,{id:"#projetos"}),(0,s.Wm)(m,{id:"#contato"})])),_:1})}var n=a(1957),l=a(6970),i=a(499);const r={id:"copyTarget",ref:"copyTarget"},c={class:"main-content"},d={class:"flex items-center text-uppercase",style:{"letter-spacing":"1px","font-size":"0.85rem"}},m={key:0,class:"overlay-content rounded-borders"},p={class:"flex items-center text-uppercase",style:{"letter-spacing":"2px","font-size":"0.85rem"}};function u(e,t,a,o,i,u){const g=(0,s.up)("q-icon");return(0,s.wg)(),(0,s.iD)("div",{class:"parent-container",onMouseover:t[0]||(t[0]=t=>e.showButton=!0),onMouseleave:t[1]||(t[1]=t=>e.showButton=!1),onClick:t[2]||(t[2]=e=>u.copyToClipboard())},[(0,s.wy)((0,s._)("div",r,null,512),[[n.F8,!1]]),(0,s._)("div",c,[(0,s._)("div",d,[(0,s.Wm)(g,{class:"q-mr-md",name:"mail",size:"1.5rem"}),(0,s.Uk)((0,l.zw)(e.email),1)])]),(0,s.Wm)(n.uT,{class:"gt-sm",appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"},{default:(0,s.w5)((()=>[e.showButton?((0,s.wg)(),(0,s.iD)("div",m,[(0,s._)("div",p,[(0,s.Wm)(g,{class:"q-mr-sm",name:"content_copy",size:"1.5rem"}),(0,s.Uk)((0,l.zw)(e.$t("CTA.label")),1)])])):(0,s.kq)("",!0)])),_:1})],32)}const g={data:()=>({email:"samuelbs98@gmail.com",showButton:!1}),methods:{async copyToClipboard(){await navigator.clipboard.writeText(this.email),this.$q.notify({message:this.$t("CTA.notify"),icon:"mail",color:"primary",timeout:1250})}}};var b=a(1639),x=a(2857),f=a(9984),w=a.n(f);const v=(0,b.Z)(g,[["render",u],["__scopeId","data-v-565b43f1"]]),_=v;w()(g,"components",{QIcon:x.Z});var k=a(2367);const h=e=>((0,s.dD)("data-v-203f954a"),e=e(),(0,s.Cn)(),e),q={class:"wrapper column q-pa-md"},y={class:"col flex flex-center"},S={class:"q-my-none text-center font-playfair"},z={class:"q-my-none text-center"},T=h((()=>(0,s._)("span",{class:"text-center"},[(0,s._)("div",{class:"local-container"},[(0,s.Uk)(" São Paulo "),(0,s._)("span",{class:"separator"}),(0,s.Uk)(" Brasil ")])],-1))),C={__name:"SectionHome",setup(e){const t=(0,i.iH)(null),a=(0,i.iH)(null),{elementX:o,elementY:r,isOutside:c,elementHeight:d,elementWidth:m}=(0,k.jYR)(t),p=e=>{a.value=e},u=(0,s.Fl)((()=>{const e=18,t=(e/2-r.value/d.value*e).toFixed(2),s=-(e/2-o.value/m.value*e).toFixed(2);if(c.value&&!a.value)return"";if(c.value&&a.value)return a.value;const n=`perspective(${m.value}px) rotateY(${s}deg) rotateX(${t}deg)`;return p(n),n}));return(e,a)=>((0,s.wg)(),(0,s.iD)("div",q,[(0,s._)("div",y,[(0,s.Wm)(n.uT,{appear:"","enter-active-class":"animated zoomIn","leave-active-class":"animated fadeOut"},{default:(0,s.w5)((()=>[(0,s._)("div",{class:"message-container default-box q-pa-xl",ref_key:"target",ref:t,style:(0,l.j5)({transform:(0,i.SU)(u)})},[(0,s._)("h1",S,(0,l.zw)(e.$t("home.title")),1),(0,s._)("h2",z,(0,l.zw)(e.$t("home.subtitle")),1),T,(0,s.Wm)(_,{class:"cta"})],4)])),_:1})])]))}},W=(0,b.Z)(C,[["__scopeId","data-v-203f954a"]]),$=W,j={class:"col-sm col-xs-12"},I={class:"abolsute fit bg-transparent q-pa-lg flex flex-center"},D={class:"col-sm col-xs-12 flex flex-center"},Z={class:"card-content"},A={class:"row"},F={class:"font-playfair text-h4 text-weight-medium text-black-1 q-mt-none q-mb-lg"},P={class:"text-black-2 text-black-4 text-weight-regular q-mb-lg description"};function U(e,t,a,o,n,i){const r=(0,s.up)("q-img"),c=(0,s.up)("q-btn"),d=(0,s.up)("section-template");return(0,s.wg)(),(0,s.j4)(d,{title:e.$t("projects.sectionTitle"),subtitle:e.$t("projects.sectionSubtitle")},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.orderedProjects,((t,a)=>((0,s.wg)(),(0,s.iD)("div",{class:"q-mx-auto",key:t.id,style:{"max-width":"900px"}},[(0,s._)("div",{class:(0,l.C_)(["default-box row",{"q-mb-xl":a<=e.projects.length-1,reverse:(a+1)%2===0}])},[(0,s._)("div",j,[(0,s.Wm)(r,{src:`/projects/${t.bgImage}`,ratio:1,style:{"min-height":"100%"}},{default:(0,s.w5)((()=>[(0,s._)("div",I,[(0,s.Wm)(r,{src:`/projects/${t.image}`},null,8,["src"])])])),_:2},1032,["src"])]),(0,s._)("div",D,[(0,s._)("div",Z,[(0,s._)("div",A,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.tags,((e,a)=>((0,s.wg)(),(0,s.iD)("div",{class:(0,l.C_)(["text-black-1 text-caption q-pa-none q-mb-sm q-py-xs q-px-md",{"q-mr-xs":a<=t.tags.length-1}]),style:{"border-radius":"100ex",border:"1px solid #303030"},key:e},(0,l.zw)(e),3)))),128))]),(0,s._)("h1",F,(0,l.zw)(t.title),1),(0,s._)("p",P,(0,l.zw)(t.description),1),(0,s.Wm)(c,{class:"q-mt-md text-grey-1 btn-box-shadow",rounded:"",style:(0,l.j5)([{"letter-spacing":"2px","font-size":"0.75rem"},t.btnStyle]),padding:"0.85rem 3rem",onClick:e=>i.openNewTab(t.link),unelevated:"",label:"View Project"},null,8,["style","onClick"])])])],2)])))),128))])),_:1},8,["title","subtitle"])}const Q=e=>((0,s.dD)("data-v-138ebc81"),e=e(),(0,s.Cn)(),e),B={class:"wrapper"},H={class:"q-pa-lg container"},M={class:"heading text-center q-px-sm"},E={key:0,class:"text-h3 font-playfair q-mt-none q-mb-md text-weight-medium text-black-1"},V={key:1,class:"text-h6 text-black-2 text-weight-regular font-lora"},Y=Q((()=>(0,s._)("div",{class:"flex flex-center"},[(0,s._)("span",{class:"separator"})],-1)));function J(e,t,a,o,n,i){return(0,s.wg)(),(0,s.iD)("div",B,[(0,s._)("section",H,[(0,s._)("div",M,[a.title?((0,s.wg)(),(0,s.iD)("h1",E,(0,l.zw)(a.title),1)):(0,s.kq)("",!0),a.subtitle?((0,s.wg)(),(0,s.iD)("p",V,(0,l.zw)(a.subtitle),1)):(0,s.kq)("",!0),Y]),(0,s._)("div",null,[(0,s.WI)(e.$slots,"default",{},void 0,!0)])])])}const N={name:"SectionTemplate",props:{title:{type:String,default:""},subtitle:{type:String,default:""}}},O=(0,b.Z)(N,[["render",J],["__scopeId","data-v-138ebc81"]]),L=O,K={name:"SectionPortfolio",components:{SectionTemplate:L},data:()=>({projects:[{id:1,order:3,title:"A simple Weather app",description:"A simple web app that consumes a API for previewing the weather.",image:"weather-app.png",bgImage:"bg-green.svg",btnStyle:"background: linear-gradient(225deg, #0FCFA1 0%, #65B8E7 100%);",link:"https://github.com/samukdev/weather-app",tags:["Vue"]},{id:2,order:2,title:"Pokedex",description:"Find and know more details about a pokemon.",image:"pokedex.png",bgImage:"bg-red.svg",btnStyle:"background: linear-gradient(225deg, #FE4545 0%, #D62C92 100%);",link:"https://github.com/samukdev/PokemonList",tags:["Javascript","Vue","Quasar"]},{id:3,order:4,title:"Pomodoro Clock",description:"Same time, more efficiency",image:"pomodoro.png",bgImage:"bg-purple.svg",btnStyle:"background: linear-gradient(225deg, #7A5DEF 0%, #6567E7 100%);",link:"https://github.com/samukdev/covid19-report",tags:["Vue"]},{id:4,order:1,title:"Login Page",description:"A responsive login page made with Vue and Firebase.",image:"nuxt-login.png",bgImage:"bg-blue.svg",btnStyle:"background: linear-gradient(225deg, #65B8E7 0%, #5182FF 86.98%);",link:"https://github.com/samukdev/nuxt-app",tags:["Vue","Nuxt","Firebase"]}]}),methods:{openNewTab(e){window.open(e,"_blank").focus()}},computed:{orderedProjects(){const e=JSON.parse(JSON.stringify(this.projects));return e.sort(((e,t)=>e.order-t.order))}}};var R=a(335),X=a(7065);const G=(0,b.Z)(K,[["render",U],["__scopeId","data-v-7f4347d5"]]),ee=G;w()(K,"components",{QImg:R.Z,QBtn:X.Z});const te=e=>((0,s.dD)("data-v-79ce75cf"),e=e(),(0,s.Cn)(),e),ae={class:"wrapper flex flex-center q-px-md",style:{"padding-top":"10%","padding-bottom":"15rem","margin-top":"-10%"}},se={class:"default-box q-pa-xl"},oe={class:"font-playfair"},ne=te((()=>(0,s._)("footer",{class:"full-width text-center text-caption absolute-bottom q-pa-md text-grey-1"},[(0,s.Uk)("Designed and developed by"),(0,s._)("strong",{class:"text-weight-medium"},"  Samuel Barbosa"),(0,s.Uk)(".")],-1)));function le(e,t,a,o,n,i){const r=(0,s.up)("CTA");return(0,s.wg)(),(0,s.iD)("div",ae,[(0,s._)("section",se,[(0,s._)("h1",oe,(0,l.zw)(e.$t("contactMe.title")),1),(0,s._)("p",null,(0,l.zw)(e.$t("contactMe.text")),1),(0,s.Wm)(r,{class:"cta"})]),ne])}const ie={components:{CTA:_},data:()=>({heading:"Obrigado pela visita!"})},re=(0,b.Z)(ie,[["render",le],["__scopeId","data-v-79ce75cf"]]),ce=re,de={class:"row q-col-gutter-xl"},me={class:"col-md col-xs-12"},pe={class:"default-box q-pa-xl fit"},ue={class:"text-black-2 font-lora q-mt-none q-mb-xl"},ge={class:"q-mr-md"},be={class:"col-md col-xs-12"},xe={class:"default-box q-pa-xl fit"},fe={class:"text-black-2 font-lora q-mt-none q-mb-xl flex items-center"},we={class:"q-mr-md"};function ve(e,t,a,o,n,i){const r=(0,s.up)("q-icon"),c=(0,s.up)("q-item-section"),d=(0,s.up)("q-item"),m=(0,s.up)("q-list"),p=(0,s.up)("section-template");return(0,s.wg)(),(0,s.j4)(p,{title:e.$t("skills.sectionTitle"),subtitle:e.$t("skills.sectionSubtitle")},{default:(0,s.w5)((()=>[(0,s._)("div",de,[(0,s._)("div",me,[(0,s._)("div",pe,[(0,s._)("h6",ue,[(0,s._)("span",ge,[(0,s.Wm)(r,{class:"text-black-3",name:"school",size:"1.5rem"})]),(0,s.Uk)((0,l.zw)(e.$t("skills.education")),1)]),(0,s.Wm)(m,{class:"row q-col-gutter-xs"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.certifications,(e=>((0,s.wg)(),(0,s.j4)(d,{class:"col-auto q-mr-sm q-mb-sm q-pa-md rounded-borders bg-grey-2 flex flex-center text-black-2 column full-width",key:e.id},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{class:"text-bold text-black-1 font-lora"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,l.zw)(e.name),1)])),_:2},1024),(0,s.Wm)(c,{class:"text-black-3 text-caption"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,l.zw)(`${e.institute} (${e.start} - ${e.end||"Atualmente"})`),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])]),(0,s._)("div",be,[(0,s._)("div",xe,[(0,s._)("h6",fe,[(0,s._)("span",we,[(0,s.Wm)(r,{class:"text-black-3",name:"code",size:"1.5rem"})]),(0,s.Uk)((0,l.zw)(e.$t("skills.langsAndTech")),1)]),(0,s.Wm)(m,{class:"row q-col-gutter-xs"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.skills,((e,t)=>((0,s.wg)(),(0,s.j4)(d,{class:"col-auto q-mr-sm q-mb-sm q-pa-md rounded-borders bg-grey-2 flex flex-center text-black-2",key:e.id,style:(0,l.j5)({order:e.order})},{default:(0,s.w5)((()=>[(0,s.Wm)(c,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,l.zw)(e.name),1)])),_:2},1024)])),_:2},1032,["style"])))),128))])),_:1})])])])])),_:1},8,["title","subtitle"])}const _e={name:"SectionSkills",components:{SectionTemplate:L},data:()=>({skills:[{name:"HTML",id:"1",order:1},{name:"CSS",id:"2",order:1},{name:"Javascript",id:"3",order:1},{name:"Vue JS",id:"4",order:1},{name:"Quasar Framework",id:"5",order:1},{name:"Git",id:"1",order:1},{name:"Typescript",id:"1",order:1},{name:"SCSS / SASS",id:"1",order:1},{name:"Bootstrap",id:"1",order:1},{name:"Figma",id:"1",order:1},{name:"React",id:"1",order:1},{name:"Node JS",id:"1",order:1},{name:"SQL",id:"1",order:1}],certifications:[{id:1,name:"Análise e Desenvolvimento de Sistemas",institute:"Universidade Cruzeiro do Sul",start:"2020",end:!1},{id:1,name:"Técnico em Informática",institute:"ETEC - Centro Paula Souza",start:"2017",end:"2018"}]})};var ke=a(3246),he=a(490),qe=a(1233);const ye=(0,b.Z)(_e,[["render",ve],["__scopeId","data-v-072a0f03"]]),Se=ye;w()(_e,"components",{QIcon:x.Z,QList:ke.Z,QItem:he.Z,QItemSection:qe.Z});const ze={class:"text text-lora text-h6 text-weight-regular q-px-md text-black-2 text-center",style:{"max-width":"800px",margin:"0 auto"}};function Te(e,t,a,o,n,i){const r=(0,s.up)("section-template");return(0,s.wg)(),(0,s.j4)(r,{title:e.$t("aboutMe.sectionTitle")},{default:(0,s.w5)((()=>[(0,s._)("p",ze,(0,l.zw)(e.$t("aboutMe.text")),1)])),_:1},8,["title"])}const Ce={name:"SectionAboutMe",components:{SectionTemplate:L}},We=(0,b.Z)(Ce,[["render",Te]]),$e=We,je=(0,s.aZ)({name:"PageIndex",components:{SectionHome:$,SectionPortfolio:ee,SectionContato:ce,SectionSkills:Se,SectionAboutMe:$e}});var Ie=a(9885);const De=(0,b.Z)(je,[["render",o],["__scopeId","data-v-d9a7362e"]]),Ze=De;w()(je,"components",{QPage:Ie.Z})}}]);