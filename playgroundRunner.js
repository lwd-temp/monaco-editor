"use strict";(self.webpackChunkmy_application=self.webpackChunkmy_application||[]).push([[1517],{912:(o,e,n)=>{n.r(e)},2534:(o,e)=>{let n;function a(o){return{loaderUrl:`${o}/loader.js`,loaderConfigPaths:{vs:`${o}`},codiconUrl:`${o}/base/browser/ui/codicons/codicon/codicon.ttf`,monacoTypesUrl:void 0}}Object.defineProperty(e,"__esModule",{value:!0}),e.getMonacoSetup=e.prodMonacoSetup=e.loadMonaco=e.getMonaco=e.getLoadedMonaco=void 0,e.getLoadedMonaco=function(){if(!monaco)throw new Error("monaco is not loaded yet");return monaco},e.getMonaco=function(){return window.monaco},e.loadMonaco=async function(o=e.prodMonacoSetup){return n||(n=async function(o){const e=self;var n;e.require||await(n=o.loaderUrl,new Promise((o=>{const e=document.createElement("script");e.onload=()=>o(),e.async=!0,e.type="text/javascript",e.src=n,document.head.appendChild(e)}))),e.AMD=!0,e.getCodiconPath=()=>o.codiconUrl,console.log("LOADER CONFIG: "),console.log(JSON.stringify(o.loaderConfigPaths,null,"\t"));const a=e.require;return a.config({paths:o.loaderConfigPaths}),new Promise((o=>{a(["vs/editor/editor.main"],(()=>{a(["vs/basic-languages/monaco.contribution","vs/language/css/monaco.contribution","vs/language/html/monaco.contribution","vs/language/json/monaco.contribution","vs/language/typescript/monaco.contribution"],(()=>{o(monaco)}))}))}))}(o)),n},e.prodMonacoSetup=a("node_modules/monaco-editor/min/vs"),e.getMonacoSetup=a},9492:(__unused_webpack_module,exports,__webpack_require__)=>{var __webpack_unused_export__;__webpack_unused_export__={value:!0};const monaco_loader_1=__webpack_require__(2534);let monacoPromise;async function initialize(state){if(monacoPromise)throw new Error("already initialized");const loadingContainerDiv=document.createElement("div");loadingContainerDiv.className="loader-container";const loadingDiv=document.createElement("div");loadingDiv.className="loader",loadingContainerDiv.appendChild(loadingDiv),document.body.appendChild(loadingContainerDiv),monacoPromise=(0,monaco_loader_1.loadMonaco)(state.monacoSetup),await monacoPromise,loadingContainerDiv.remove();const style=document.createElement("style");style.innerHTML=state.css,document.body.appendChild(style),document.body.innerHTML+=state.html;try{eval(state.js)}catch(o){const e=document.createElement("pre");e.appendChild(document.createTextNode(`${o}: ${o.state}`)),document.body.insertBefore(e,document.body.firstChild)}}__webpack_require__(912),window.addEventListener("message",(o=>{if("null"!==window.origin)return void console.error("not in sandbox");const e=o.data;"initialize"===e.kind&&initialize(e.state)}))}},o=>{o(o.s=9492)}]);
//# sourceMappingURL=playgroundRunner.js.map