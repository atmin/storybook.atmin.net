import{j as t}from"./iframe-CuZB3Ta0.js";import"./preload-helper-PPVm8Dsz.js";function o({count:s,onDismiss:n}){return t.jsxs("div",{className:"fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 rounded-lg border border-destructive/40 bg-background px-4 py-2 shadow-lg text-sm",role:"alert","data-testid":"restore-warning",children:[t.jsx("span",{children:s===1?"1 conversation's history couldn't be restored on this device.":`${s} conversations' history couldn't be restored on this device.`}),t.jsx("button",{type:"button",onClick:n,"aria-label":"Dismiss",className:"text-muted-foreground hover:text-foreground",children:"✕"})]})}o.__docgenInfo={description:`Surfaces partial history loss after a restore (I6): some key-backup
blobs were present but couldn't be decrypted (corrupt/undecryptable),
so those conversations' history won't appear on this device. Shown
once per session rather than failing the whole login — one bad blob
must not block recovering everything else.`,methods:[],displayName:"RestoreWarningToast",props:{count:{required:!0,tsType:{name:"number"},description:"Number of session keys that couldn't be restored on this device."},onDismiss:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const{fn:a}=__STORYBOOK_MODULE_TEST__,d={title:"App/RestoreWarningToast",component:o,args:{onDismiss:a()}},e={args:{count:1}},r={args:{count:4}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    count: 1
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    count: 4
  }
}`,...r.parameters?.docs?.source}}};const u=["One","Several"];export{e as One,r as Several,u as __namedExportsOrder,d as default};
