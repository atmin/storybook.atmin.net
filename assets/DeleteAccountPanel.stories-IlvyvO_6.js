import{r as S,j as e,a as w,L as I,i as D,S as P,b as j,C as q,B as k}from"./iframe-Bg5_a6e4.js";import{P as _}from"./PasswordInput-W_TpgaYW.js";import{S as b}from"./StatusCover-CYKhanpM.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-Clx5iBU2.js";function T({handle:r,step:n,password:u,handleConfirm:p,acknowledged:m,error:g,onPasswordChange:y,onHandleConfirmChange:h,onAcknowledgedChange:x,onSubmit:C}){const[E,v]=S.useState(!1),f=()=>{v(!1),y(""),h(""),x(!1)},B=u.length>0&&p===r&&m,N=n==="verifying"||n==="deleting"||n==="done";return e.jsxs(e.Fragment,{children:[e.jsx(w,{children:e.jsx("span",{className:"text-red-500",children:"Danger zone"})}),e.jsx(I,{strong:!0,inset:!0,children:e.jsx(D,{link:!0,title:e.jsx("span",{className:"text-red-500",children:"Delete account"}),onClick:()=>v(!0),"data-testid":"delete-account-trigger"})}),e.jsx(P,{opened:E,onBackdropClick:N?void 0:f,className:"w-full pb-8",children:e.jsxs("div",{className:"max-h-[85vh] overflow-y-auto",children:[n==="verifying"&&e.jsx(b,{label:"Verifying your password…",destructive:!0}),(n==="deleting"||n==="done")&&e.jsx(b,{label:"Deleting your account…",destructive:!0}),n==="enter"&&e.jsxs(e.Fragment,{children:[e.jsx(w,{children:"Delete account"}),e.jsxs(j,{strong:!0,inset:!0,className:"space-y-5",children:[e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsx("p",{className:"font-medium",children:"What will be deleted"}),e.jsxs("ul",{className:"list-disc space-y-1 pl-5 text-muted-foreground",children:[e.jsx("li",{children:"Your profile, contacts, conversation history, key backups, and uploaded media."}),e.jsx("li",{children:"All your sessions on every device."}),e.jsxs("li",{children:["Your handle"," ",e.jsxs("span",{className:"font-mono",children:["@",r]})," ","will be reserved for 30 days, then becomes available to anyone — including, until then, not even you can re-claim it."]})]}),e.jsx("p",{className:"font-medium",children:"What will not be deleted"}),e.jsx("ul",{className:"list-disc space-y-1 pl-5 text-muted-foreground",children:e.jsx("li",{children:"Messages you've sent to others — their copies remain on their devices and in their inboxes."})})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"delete-password",className:"mb-1 block text-sm font-medium",children:"Password"}),e.jsx(_,{id:"delete-password",value:u,onChange:y,autoComplete:"current-password"})]}),e.jsxs("div",{children:[e.jsxs("label",{htmlFor:"delete-handle-confirm",className:"mb-1 block text-sm font-medium",children:["Type your handle"," ",e.jsx("span",{className:"font-mono",children:r})," ","to confirm"]}),e.jsx("input",{id:"delete-handle-confirm",type:"text",value:p,onChange:l=>h(l.target.value),autoComplete:"off","data-testid":"delete-account-handle-confirm",className:"w-full rounded border border-input bg-background px-3 py-2 text-sm"})]}),e.jsx(q,{checked:m,onChange:l=>x(l.target.checked),"data-testid":"delete-account-ack",children:e.jsx("span",{className:"ml-2 text-sm",children:"I understand this cannot be undone."})}),g&&e.jsx("p",{className:"text-sm text-red-500",children:g})]}),e.jsxs(j,{className:"flex gap-3",children:[e.jsx(k,{rounded:!0,clear:!0,onClick:f,children:"Cancel"}),e.jsx(k,{rounded:!0,colors:{fillBgIos:"bg-red-500",fillBgMaterial:"bg-red-500"},onClick:C,disabled:!B,"data-testid":"delete-account-submit",children:"Delete account"})]})]})]})})]})}T.__docgenInfo={description:"",methods:[],displayName:"DeleteAccountPanel",props:{handle:{required:!0,tsType:{name:"string"},description:""},step:{required:!0,tsType:{name:"DeleteStep"},description:""},password:{required:!0,tsType:{name:"string"},description:""},handleConfirm:{required:!0,tsType:{name:"string"},description:""},acknowledged:{required:!0,tsType:{name:"boolean"},description:""},error:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},onPasswordChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(v: string) => void",signature:{arguments:[{type:{name:"string"},name:"v"}],return:{name:"void"}}},description:""},onHandleConfirmChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(v: string) => void",signature:{arguments:[{type:{name:"string"},name:"v"}],return:{name:"void"}}},description:""},onAcknowledgedChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(v: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"v"}],return:{name:"void"}}},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const{fn:t}=__STORYBOOK_MODULE_TEST__,M={title:"Settings/DeleteAccountPanel",component:T,args:{handle:"copper-falcon",step:"enter",password:"",handleConfirm:"",acknowledged:!1,error:null,onPasswordChange:t(),onHandleConfirmChange:t(),onAcknowledgedChange:t(),onSubmit:t()}},s={},a={play:async({canvas:r,userEvent:n})=>{await n.click(r.getByTestId("delete-account-trigger"))}},o={args:{password:"hunter2hunter2",handleConfirm:"copper-falcon",acknowledged:!0},play:async({canvas:r,userEvent:n})=>{await n.click(r.getByTestId("delete-account-trigger"))}},c={args:{password:"nope",handleConfirm:"copper-falcon",acknowledged:!0,error:"Password is incorrect."},play:async({canvas:r,userEvent:n})=>{await n.click(r.getByTestId("delete-account-trigger"))}},i={args:{step:"verifying"},play:async({canvas:r,userEvent:n})=>{await n.click(r.getByTestId("delete-account-trigger"))}},d={args:{step:"deleting"},play:async({canvas:r,userEvent:n})=>{await n.click(r.getByTestId("delete-account-trigger"))}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByTestId('delete-account-trigger'));
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    password: 'hunter2hunter2',
    handleConfirm: 'copper-falcon',
    acknowledged: true
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByTestId('delete-account-trigger'));
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    password: 'nope',
    handleConfirm: 'copper-falcon',
    acknowledged: true,
    error: 'Password is incorrect.'
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByTestId('delete-account-trigger'));
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'verifying'
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByTestId('delete-account-trigger'));
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'deleting'
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByTestId('delete-account-trigger'));
  }
}`,...d.parameters?.docs?.source}}};const V=["Collapsed","ExpandedBlank","ExpandedFilled","WrongPasswordError","Verifying","Deleting"];export{s as Collapsed,d as Deleting,a as ExpandedBlank,o as ExpandedFilled,i as Verifying,c as WrongPasswordError,V as __namedExportsOrder,M as default};
