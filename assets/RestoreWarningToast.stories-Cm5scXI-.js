import{j as e,T as a}from"./iframe-UxH-happ.js";import{T as i}from"./triangle-alert-CeNEjshw.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-BIFsOAuu.js";const c={bgIos:"bg-white/80 shadow-lg backdrop-blur-xl dark:bg-[#1c1c1e]/80",textIos:"text-foreground",textMaterial:"text-foreground"};function o({count:s,onDismiss:n}){return e.jsx(a,{opened:!0,position:"center",colors:c,role:"alert","data-testid":"restore-warning",button:e.jsx("button",{type:"button",onClick:n,"aria-label":"Dismiss",className:"font-medium text-primary",children:"Dismiss"}),children:e.jsxs("span",{className:"flex items-center gap-2 text-sm",children:[e.jsx(i,{className:"size-4 shrink-0 text-amber-500"}),s===1?"1 conversation's history couldn't be restored on this device.":`${s} conversations' history couldn't be restored on this device.`]})})}o.__docgenInfo={description:`Surfaces partial history loss after a restore (I6): some key-backup
blobs were present but couldn't be decrypted (corrupt/undecryptable),
so those conversations' history won't appear on this device. Shown
once per session rather than failing the whole login — one bad blob
must not block recovering everything else.`,methods:[],displayName:"RestoreWarningToast",props:{count:{required:!0,tsType:{name:"number"},description:"Number of session keys that couldn't be restored on this device."},onDismiss:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const{fn:d}=__STORYBOOK_MODULE_TEST__,g={title:"App/RestoreWarningToast",component:o,parameters:{layout:"fullscreen"},args:{onDismiss:d()}},r={args:{count:1}},t={args:{count:4}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    count: 1
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    count: 4
  }
}`,...t.parameters?.docs?.source}}};const b=["One","Several"];export{r as One,t as Several,b as __namedExportsOrder,g as default};
