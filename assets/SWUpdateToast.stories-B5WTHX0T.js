import{j as e}from"./iframe-qTlOAnYa.js";import"./preload-helper-PPVm8Dsz.js";function r({sending:n,onUpdate:o,onDismiss:i}){return e.jsxs("div",{className:"fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 rounded-lg border bg-background px-4 py-2 shadow-lg text-sm",children:[e.jsx("span",{children:"Update available"}),e.jsx("button",{type:"button",className:"font-medium underline disabled:opacity-40",disabled:n,onClick:o,children:n?"Sending…":"Reload"}),e.jsx("button",{type:"button",onClick:i,"aria-label":"Dismiss",className:"text-muted-foreground hover:text-foreground",children:"✕"})]})}r.__docgenInfo={description:"",methods:[],displayName:"SWUpdateToast",props:{sending:{required:!0,tsType:{name:"boolean"},description:""},onUpdate:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onDismiss:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const{fn:s}=__STORYBOOK_MODULE_TEST__,u={title:"App/SWUpdateToast",component:r,args:{onUpdate:s(),onDismiss:s()}},t={args:{sending:!1}},a={args:{sending:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    sending: false
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    sending: true
  }
}`,...a.parameters?.docs?.source}}};const c=["UpdateAvailable","UpdateWhileSending"];export{t as UpdateAvailable,a as UpdateWhileSending,c as __namedExportsOrder,u as default};
