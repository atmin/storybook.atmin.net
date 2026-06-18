import{r as B,j as e}from"./iframe-BDa6lOl2.js";import{P as q}from"./PasswordInput-ClvzrZsq.js";import{C as m,b as w,d as C,e as N,a as p,B as u}from"./card-BihTY1WK.js";import{C as _}from"./checkbox-nS2QnpCf.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-CPnva7eo.js";import"./utils-BXTaqGe-.js";import"./index-BWMaZQf9.js";import"./index-Csi_EsGQ.js";function k({label:s}){return e.jsx(m,{className:"mt-8 border-destructive/40",children:e.jsxs(p,{className:"pt-6 text-center",children:[e.jsxs("div",{className:"mb-4 flex justify-center gap-2",children:[e.jsx("span",{className:"size-3 animate-pulse rounded-full bg-destructive [animation-delay:-0.3s]"}),e.jsx("span",{className:"size-3 animate-pulse rounded-full bg-destructive [animation-delay:-0.15s]"}),e.jsx("span",{className:"size-3 animate-pulse rounded-full bg-destructive"})]}),e.jsx("p",{className:"text-sm font-medium",children:s})]})})}function T({handle:s,step:t,password:g,handleConfirm:h,acknowledged:x,error:v,onPasswordChange:y,onHandleConfirmChange:f,onAcknowledgedChange:j,onSubmit:E}){const[S,b]=B.useState(!1);if(t==="verifying")return e.jsx(k,{label:"Verifying your password…"});if(t==="deleting"||t==="done")return e.jsx(k,{label:"Deleting your account…"});const D=()=>{b(!1),y(""),f(""),j(!1)},P=g.length>0&&h===s&&x;return S?e.jsxs(m,{className:"mt-8 border-destructive/40",children:[e.jsxs(w,{children:[e.jsx(C,{className:"text-destructive",children:"Delete account"}),e.jsx(N,{children:"This cannot be undone."})]}),e.jsxs(p,{className:"space-y-5",children:[e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsx("p",{className:"font-medium",children:"What will be deleted"}),e.jsxs("ul",{className:"list-disc space-y-1 pl-5 text-muted-foreground",children:[e.jsx("li",{children:"Your profile, contacts, conversation history, key backups, and uploaded media."}),e.jsx("li",{children:"All your sessions on every device."}),e.jsxs("li",{children:["Your handle @",s," will be reserved for 30 days, then becomes available to anyone — including, until then, not even you can re-claim it."]})]}),e.jsx("p",{className:"font-medium",children:"What will not be deleted"}),e.jsx("ul",{className:"list-disc space-y-1 pl-5 text-muted-foreground",children:e.jsx("li",{children:"Messages you've sent to others — their copies remain on their devices and in their inboxes."})})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"delete-password",className:"mb-1 block text-sm font-medium",children:"Password"}),e.jsx(q,{id:"delete-password",value:g,onChange:y,autoComplete:"current-password"})]}),e.jsxs("div",{children:[e.jsxs("label",{htmlFor:"delete-handle-confirm",className:"mb-1 block text-sm font-medium",children:["Type your handle"," ",e.jsx("span",{className:"font-mono",children:s})," to confirm"]}),e.jsx("input",{id:"delete-handle-confirm",type:"text",value:h,onChange:l=>f(l.target.value),autoComplete:"off","data-testid":"delete-account-handle-confirm",className:"w-full rounded border border-input bg-background px-3 py-2 text-sm"})]}),e.jsx("div",{children:e.jsxs("label",{className:"flex items-start gap-3",children:[e.jsx(_,{checked:x,onCheckedChange:l=>j(l===!0),"data-testid":"delete-account-ack"}),e.jsx("span",{className:"text-sm",children:"I understand this cannot be undone."})]})}),v&&e.jsx("p",{className:"text-sm text-destructive",children:v}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx(u,{variant:"destructive",onClick:E,disabled:!P,"data-testid":"delete-account-submit",children:"Delete account"}),e.jsx(u,{variant:"ghost",onClick:D,"data-testid":"delete-account-cancel",children:"Cancel"})]})]})]}):e.jsxs(m,{className:"mt-8 border-destructive/40",children:[e.jsxs(w,{children:[e.jsx(C,{className:"text-destructive",children:"Delete account"}),e.jsxs(N,{children:["Permanently delete @",s," and all your data. This cannot be undone. Want to leave on just this device? Sign out from Devices instead."]})]}),e.jsx(p,{children:e.jsx(u,{variant:"outline",onClick:()=>b(!0),"data-testid":"delete-account-trigger",className:"border-destructive/50 text-destructive hover:bg-destructive/10",children:"Delete account"})})]})}T.__docgenInfo={description:"",methods:[],displayName:"DeleteAccountPanel",props:{handle:{required:!0,tsType:{name:"string"},description:""},step:{required:!0,tsType:{name:"DeleteStep"},description:""},password:{required:!0,tsType:{name:"string"},description:""},handleConfirm:{required:!0,tsType:{name:"string"},description:""},acknowledged:{required:!0,tsType:{name:"boolean"},description:""},error:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},onPasswordChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(v: string) => void",signature:{arguments:[{type:{name:"string"},name:"v"}],return:{name:"void"}}},description:""},onHandleConfirmChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(v: string) => void",signature:{arguments:[{type:{name:"string"},name:"v"}],return:{name:"void"}}},description:""},onAcknowledgedChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(v: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"v"}],return:{name:"void"}}},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const{fn:n}=__STORYBOOK_MODULE_TEST__,M={title:"Settings/DeleteAccountPanel",component:T,args:{handle:"copper-falcon",step:"enter",password:"",handleConfirm:"",acknowledged:!1,error:null,onPasswordChange:n(),onHandleConfirmChange:n(),onAcknowledgedChange:n(),onSubmit:n()}},r={},a={play:async({canvas:s,userEvent:t})=>{await t.click(s.getByTestId("delete-account-trigger"))}},i={args:{password:"hunter2hunter2",handleConfirm:"copper-falcon",acknowledged:!0},play:async({canvas:s,userEvent:t})=>{await t.click(s.getByTestId("delete-account-trigger"))}},o={args:{password:"nope",handleConfirm:"copper-falcon",acknowledged:!0,error:"Password is incorrect."},play:async({canvas:s,userEvent:t})=>{await t.click(s.getByTestId("delete-account-trigger"))}},c={args:{step:"verifying"}},d={args:{step:"deleting"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByTestId('delete-account-trigger'));
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'verifying'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'deleting'
  }
}`,...d.parameters?.docs?.source}}};const R=["Collapsed","ExpandedBlank","ExpandedFilled","WrongPasswordError","Verifying","Deleting"];export{r as Collapsed,d as Deleting,a as ExpandedBlank,i as ExpandedFilled,c as Verifying,o as WrongPasswordError,R as __namedExportsOrder,M as default};
