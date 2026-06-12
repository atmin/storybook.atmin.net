import{j as e}from"./iframe-CuZB3Ta0.js";import{P as h}from"./PasswordInput-BnWon6Hc.js";import{P as D}from"./PasswordStrengthMeter-DMJCu0Q5.js";import{C as f,a as x,b as R,d as O,e as F,B as I}from"./card-DTMGVdB_.js";import{C as W}from"./checkbox-CfePLLWX.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-CecnZctf.js";import"./utils-BXTaqGe-.js";import"./index-CSEc3_z1.js";import"./index-CSqRAH77.js";function o({label:r}){return e.jsx(f,{children:e.jsxs(x,{className:"pt-6 text-center",children:[e.jsxs("div",{className:"mb-4 flex justify-center gap-2",children:[e.jsx("span",{className:"size-3 animate-pulse rounded-full bg-primary [animation-delay:-0.3s]"}),e.jsx("span",{className:"size-3 animate-pulse rounded-full bg-primary [animation-delay:-0.15s]"}),e.jsx("span",{className:"size-3 animate-pulse rounded-full bg-primary"})]}),e.jsx("p",{className:"text-sm font-medium",children:r})]})})}function C({step:r,currentPassword:P,newPassword:s,confirmPassword:a,acknowledged:v,error:j,strength:t,onCurrentChange:k,onNewChange:N,onConfirmChange:S,onAcknowledgedChange:E,onSubmit:T}){const y=a.length>0&&s!==a,q=P.length>0&&s.length>0&&s===a&&v&&r==="enter";return r==="deriving-old"?e.jsx(o,{label:"Verifying your current password…"}):r==="deriving-new"?e.jsx(o,{label:"Deriving keys for your new password…"}):r==="writing-chain"?e.jsx(o,{label:"Writing key chain…"}):r==="rotating"?e.jsx(o,{label:"Rotating credentials on the server…"}):r==="done"?e.jsx(f,{children:e.jsx(x,{className:"pt-6",children:e.jsx("p",{className:"text-center text-sm text-green-600",children:"✓ Password changed"})})}):e.jsxs(f,{className:"mt-8",children:[e.jsxs(R,{children:[e.jsx(O,{children:"Change password"}),e.jsx(F,{children:"Replaces the credential that derives all your encryption keys. Other devices will be signed out and need to sign in again with the new password."})]}),e.jsxs(x,{className:"space-y-5",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"current-password",className:"mb-1 block text-sm font-medium",children:"Current password or recovery phrase"}),e.jsx(h,{id:"current-password",value:P,onChange:k,autoComplete:"current-password"}),e.jsx("p",{className:"mt-1 text-xs text-muted-foreground",children:"Accounts created before password support migrate to a password the first time you change it — enter your 12-word recovery phrase here."})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"new-password",className:"mb-1 block text-sm font-medium",children:"New password"}),e.jsx(h,{id:"new-password",value:s,onChange:N,autoComplete:"new-password"}),s.length>0&&e.jsx("div",{className:"mt-2",children:e.jsx(D,{score:t.score,feedback:t.feedback,pwned:t.pwned,loading:t.loading})})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"confirm-new-password",className:"mb-1 block text-sm font-medium",children:"Confirm new password"}),e.jsx(h,{id:"confirm-new-password",value:a,onChange:S,autoComplete:"new-password",ariaInvalid:y}),y&&e.jsx("p",{className:"mt-1 text-xs text-destructive",children:"Passwords do not match."})]}),e.jsx("div",{children:e.jsxs("label",{className:"flex items-start gap-3",children:[e.jsx(W,{checked:v,onCheckedChange:_=>E(_===!0)}),e.jsx("span",{className:"text-sm",children:"I understand that if I forget this password, my account and history are unrecoverable."})]})}),j&&e.jsx("p",{className:"text-sm text-destructive",children:j}),e.jsx(I,{onClick:T,disabled:!q,className:"w-full","data-testid":"change-password-submit",children:"Change password"})]})]})}C.__docgenInfo={description:"",methods:[],displayName:"ChangePasswordPanel",props:{step:{required:!0,tsType:{name:"RotateStep"},description:""},currentPassword:{required:!0,tsType:{name:"string"},description:""},newPassword:{required:!0,tsType:{name:"string"},description:""},confirmPassword:{required:!0,tsType:{name:"string"},description:""},acknowledged:{required:!0,tsType:{name:"boolean"},description:""},error:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},strength:{required:!0,tsType:{name:"PasswordStrength"},description:""},onCurrentChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onNewChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onConfirmChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onAcknowledgedChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const{fn:n}=__STORYBOOK_MODULE_TEST__,M={score:0,feedback:[],pwned:!1,loading:!1},b={score:4,feedback:[],pwned:!1,loading:!1},J={title:"Forms/ChangePasswordPanel",component:C,args:{onCurrentChange:n(),onNewChange:n(),onConfirmChange:n(),onAcknowledgedChange:n(),onSubmit:n(),strength:M},decorators:[r=>e.jsx("div",{className:"max-w-xl p-8",children:e.jsx(r,{})})]},d={args:{step:"enter",currentPassword:"",newPassword:"",confirmPassword:"",acknowledged:!1,error:null}},i={args:{step:"enter",currentPassword:"old-pass",newPassword:"new-pass-strong",confirmPassword:"new-pass-strong",acknowledged:!0,error:null,strength:b}},c={args:{step:"enter",currentPassword:"old-pass",newPassword:"new-pass-strong",confirmPassword:"new-pass-strongER",acknowledged:!0,error:null,strength:b}},l={args:{step:"enter",currentPassword:"old-pass",newPassword:"new-pass",confirmPassword:"new-pass",acknowledged:!0,error:"Current password is incorrect."}},p={args:{step:"deriving-old",currentPassword:"old-pass",newPassword:"new-pass",confirmPassword:"new-pass",acknowledged:!0,error:null}},u={args:{step:"deriving-new",currentPassword:"old-pass",newPassword:"new-pass",confirmPassword:"new-pass",acknowledged:!0,error:null}},m={args:{step:"writing-chain",currentPassword:"old-pass",newPassword:"new-pass",confirmPassword:"new-pass",acknowledged:!0,error:null}},w={args:{step:"rotating",currentPassword:"old-pass",newPassword:"new-pass",confirmPassword:"new-pass",acknowledged:!0,error:null}},g={args:{step:"done",currentPassword:"",newPassword:"",confirmPassword:"",acknowledged:!1,error:null}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'enter',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    acknowledged: false,
    error: null
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'enter',
    currentPassword: 'old-pass',
    newPassword: 'new-pass-strong',
    confirmPassword: 'new-pass-strong',
    acknowledged: true,
    error: null,
    strength: strong
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'enter',
    currentPassword: 'old-pass',
    newPassword: 'new-pass-strong',
    confirmPassword: 'new-pass-strongER',
    acknowledged: true,
    error: null,
    strength: strong
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'enter',
    currentPassword: 'old-pass',
    newPassword: 'new-pass',
    confirmPassword: 'new-pass',
    acknowledged: true,
    error: 'Current password is incorrect.'
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'deriving-old',
    currentPassword: 'old-pass',
    newPassword: 'new-pass',
    confirmPassword: 'new-pass',
    acknowledged: true,
    error: null
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'deriving-new',
    currentPassword: 'old-pass',
    newPassword: 'new-pass',
    confirmPassword: 'new-pass',
    acknowledged: true,
    error: null
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'writing-chain',
    currentPassword: 'old-pass',
    newPassword: 'new-pass',
    confirmPassword: 'new-pass',
    acknowledged: true,
    error: null
  }
}`,...m.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'rotating',
    currentPassword: 'old-pass',
    newPassword: 'new-pass',
    confirmPassword: 'new-pass',
    acknowledged: true,
    error: null
  }
}`,...w.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'done',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    acknowledged: false,
    error: null
  }
}`,...g.parameters?.docs?.source}}};const Q=["Enter","EnterFilled","EnterMismatch","EnterWithError","DerivingOld","DerivingNew","WritingChain","Rotating","Done"];export{u as DerivingNew,p as DerivingOld,g as Done,d as Enter,i as EnterFilled,c as EnterMismatch,l as EnterWithError,w as Rotating,m as WritingChain,Q as __namedExportsOrder,J as default};
