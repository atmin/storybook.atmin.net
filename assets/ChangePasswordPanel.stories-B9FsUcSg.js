import{r as F,j as e,a as k,L as B,f as I,S as W,b as a,C as L,B as C}from"./iframe-Cii7GhjR.js";import{P}from"./PasswordInput-CcCuZAKX.js";import{P as M}from"./PasswordStrengthMeter-DrKSCbP-.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-Dr5g4T_K.js";function i({label:r}){return e.jsxs(a,{className:"py-10 text-center",children:[e.jsxs("div",{className:"mb-4 flex justify-center gap-2",children:[e.jsx("span",{className:"size-3 animate-pulse rounded-full bg-primary [animation-delay:-0.3s]"}),e.jsx("span",{className:"size-3 animate-pulse rounded-full bg-primary [animation-delay:-0.15s]"}),e.jsx("span",{className:"size-3 animate-pulse rounded-full bg-primary"})]}),e.jsx("p",{className:"text-sm font-medium",children:r})]})}function b({step:r,currentPassword:t,newPassword:s,confirmPassword:o,acknowledged:y,error:v,strength:d,onCurrentChange:S,onNewChange:E,onConfirmChange:T,onAcknowledgedChange:q,onSubmit:_}){const[O,x]=F.useState(!1),j=o.length>0&&s!==o,R=t.length>0&&s.length>0&&s===o&&y&&r==="enter";return e.jsxs(e.Fragment,{children:[e.jsx(k,{children:"Security"}),e.jsx(B,{strong:!0,inset:!0,children:e.jsx(I,{link:!0,title:"Change password",onClick:()=>x(!0),"data-testid":"change-password-trigger"})}),e.jsx(W,{opened:O,onBackdropClick:()=>x(!1),className:"w-full pb-8",children:e.jsxs("div",{className:"max-h-[85vh] overflow-y-auto",children:[r==="deriving-old"&&e.jsx(i,{label:"Verifying your current password…"}),r==="deriving-new"&&e.jsx(i,{label:"Deriving keys for your new password…"}),r==="writing-chain"&&e.jsx(i,{label:"Writing key chain…"}),r==="rotating"&&e.jsx(i,{label:"Rotating credentials on the server…"}),r==="done"&&e.jsx(a,{className:"py-10 text-center text-sm text-green-600",children:"✓ Password changed"}),r==="enter"&&e.jsxs(e.Fragment,{children:[e.jsx(k,{children:"Change password"}),e.jsx(a,{className:"text-sm opacity-70",children:"Replaces the credential that derives all your encryption keys. Other devices will be signed out and need to sign in again with the new password."}),e.jsxs(a,{strong:!0,inset:!0,className:"space-y-5",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"current-password",className:"mb-1 block text-sm font-medium",children:"Current password or recovery phrase"}),e.jsx(P,{id:"current-password",value:t,onChange:S,autoComplete:"current-password"}),e.jsx("p",{className:"mt-1 text-xs text-muted-foreground",children:"Accounts created before password support migrate to a password the first time you change it — enter your 12-word recovery phrase here."})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"new-password",className:"mb-1 block text-sm font-medium",children:"New password"}),e.jsx(P,{id:"new-password",value:s,onChange:E,autoComplete:"new-password"}),s.length>0&&e.jsx("div",{className:"mt-2",children:e.jsx(M,{score:d.score,feedback:d.feedback,pwned:d.pwned,loading:d.loading})})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"confirm-new-password",className:"mb-1 block text-sm font-medium",children:"Confirm new password"}),e.jsx(P,{id:"confirm-new-password",value:o,onChange:T,autoComplete:"new-password",ariaInvalid:j}),j&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:"Passwords do not match."})]}),e.jsx(L,{checked:y,onChange:D=>q(D.target.checked),"data-testid":"change-password-ack",children:e.jsx("span",{className:"text-sm",children:"I understand that if I forget this password, my account and history are unrecoverable."})}),v&&e.jsx("p",{className:"text-sm text-red-500",children:v})]}),e.jsxs(a,{className:"flex gap-3",children:[e.jsx(C,{clear:!0,onClick:()=>x(!1),children:"Cancel"}),e.jsx(C,{onClick:_,disabled:!R,"data-testid":"change-password-submit",children:"Change password"})]})]})]})})]})}b.__docgenInfo={description:"",methods:[],displayName:"ChangePasswordPanel",props:{step:{required:!0,tsType:{name:"RotateStep"},description:""},currentPassword:{required:!0,tsType:{name:"string"},description:""},newPassword:{required:!0,tsType:{name:"string"},description:""},confirmPassword:{required:!0,tsType:{name:"string"},description:""},acknowledged:{required:!0,tsType:{name:"boolean"},description:""},error:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},strength:{required:!0,tsType:{name:"PasswordStrength"},description:""},onCurrentChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onNewChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onConfirmChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onAcknowledgedChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const{fn:n}=__STORYBOOK_MODULE_TEST__,z={score:0,feedback:[],pwned:!1,loading:!1},N={score:4,feedback:[],pwned:!1,loading:!1},G={title:"Forms/ChangePasswordPanel",component:b,args:{onCurrentChange:n(),onNewChange:n(),onConfirmChange:n(),onAcknowledgedChange:n(),onSubmit:n(),strength:z},play:async({canvas:r,userEvent:t})=>{await t.click(r.getByTestId("change-password-trigger"))}},c={args:{step:"enter",currentPassword:"",newPassword:"",confirmPassword:"",acknowledged:!1,error:null}},l={args:{step:"enter",currentPassword:"old-pass",newPassword:"new-pass-strong",confirmPassword:"new-pass-strong",acknowledged:!0,error:null,strength:N}},p={args:{step:"enter",currentPassword:"old-pass",newPassword:"new-pass-strong",confirmPassword:"new-pass-strongER",acknowledged:!0,error:null,strength:N}},u={args:{step:"enter",currentPassword:"old-pass",newPassword:"new-pass",confirmPassword:"new-pass",acknowledged:!0,error:"Current password is incorrect."}},w={args:{step:"deriving-old",currentPassword:"old-pass",newPassword:"new-pass",confirmPassword:"new-pass",acknowledged:!0,error:null}},m={args:{step:"deriving-new",currentPassword:"old-pass",newPassword:"new-pass",confirmPassword:"new-pass",acknowledged:!0,error:null}},g={args:{step:"writing-chain",currentPassword:"old-pass",newPassword:"new-pass",confirmPassword:"new-pass",acknowledged:!0,error:null}},h={args:{step:"rotating",currentPassword:"old-pass",newPassword:"new-pass",confirmPassword:"new-pass",acknowledged:!0,error:null}},f={args:{step:"done",currentPassword:"",newPassword:"",confirmPassword:"",acknowledged:!1,error:null}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'enter',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    acknowledged: false,
    error: null
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'enter',
    currentPassword: 'old-pass',
    newPassword: 'new-pass-strong',
    confirmPassword: 'new-pass-strong',
    acknowledged: true,
    error: null,
    strength: strong
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'enter',
    currentPassword: 'old-pass',
    newPassword: 'new-pass-strong',
    confirmPassword: 'new-pass-strongER',
    acknowledged: true,
    error: null,
    strength: strong
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'enter',
    currentPassword: 'old-pass',
    newPassword: 'new-pass',
    confirmPassword: 'new-pass',
    acknowledged: true,
    error: 'Current password is incorrect.'
  }
}`,...u.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'deriving-old',
    currentPassword: 'old-pass',
    newPassword: 'new-pass',
    confirmPassword: 'new-pass',
    acknowledged: true,
    error: null
  }
}`,...w.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'deriving-new',
    currentPassword: 'old-pass',
    newPassword: 'new-pass',
    confirmPassword: 'new-pass',
    acknowledged: true,
    error: null
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'writing-chain',
    currentPassword: 'old-pass',
    newPassword: 'new-pass',
    confirmPassword: 'new-pass',
    acknowledged: true,
    error: null
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'rotating',
    currentPassword: 'old-pass',
    newPassword: 'new-pass',
    confirmPassword: 'new-pass',
    acknowledged: true,
    error: null
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'done',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    acknowledged: false,
    error: null
  }
}`,...f.parameters?.docs?.source}}};const H=["Enter","EnterFilled","EnterMismatch","EnterWithError","DerivingOld","DerivingNew","WritingChain","Rotating","Done"];export{m as DerivingNew,w as DerivingOld,f as Done,c as Enter,l as EnterFilled,p as EnterMismatch,u as EnterWithError,h as Rotating,g as WritingChain,H as __namedExportsOrder,G as default};
