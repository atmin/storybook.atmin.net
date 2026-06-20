import{r as F,j as e,a as C,L as B,i as I,S as W,b as d,C as L,B as j}from"./iframe-CtSQpU8Y.js";import{P as x}from"./PasswordInput-2tAu_TKZ.js";import{P as M}from"./PasswordStrengthMeter-Bed7yz00.js";import{S as i}from"./StatusCover-D_NYnz3E.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-Ckykkxlo.js";function b({step:r,currentPassword:a,newPassword:s,confirmPassword:t,acknowledged:v,error:y,strength:o,onCurrentChange:N,onNewChange:E,onConfirmChange:T,onAcknowledgedChange:q,onSubmit:_}){const[O,P]=F.useState(!1),k=t.length>0&&s!==t,R=a.length>0&&s.length>0&&s===t&&v&&r==="enter";return e.jsxs(e.Fragment,{children:[e.jsx(C,{children:"Security"}),e.jsx(B,{strong:!0,inset:!0,children:e.jsx(I,{link:!0,title:"Change password",onClick:()=>P(!0),"data-testid":"change-password-trigger"})}),e.jsx(W,{opened:O,onBackdropClick:()=>P(!1),className:"w-full pb-8",children:e.jsxs("div",{className:"max-h-[85vh] overflow-y-auto",children:[r==="deriving-old"&&e.jsx(i,{label:"Verifying your current password…"}),r==="deriving-new"&&e.jsx(i,{label:"Deriving keys for your new password…"}),r==="writing-chain"&&e.jsx(i,{label:"Writing key chain…"}),r==="rotating"&&e.jsx(i,{label:"Rotating credentials on the server…"}),r==="done"&&e.jsx(d,{className:"py-10 text-center text-sm text-green-600",children:"✓ Password changed"}),r==="enter"&&e.jsxs(e.Fragment,{children:[e.jsx(C,{children:"Change password"}),e.jsx(d,{className:"text-sm opacity-70",children:"Replaces the credential that derives all your encryption keys. Other devices will be signed out and need to sign in again with the new password."}),e.jsxs(d,{strong:!0,inset:!0,className:"space-y-5",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"current-password",className:"mb-1 block text-sm font-medium",children:"Current password or recovery phrase"}),e.jsx(x,{id:"current-password",value:a,onChange:N,autoComplete:"current-password"}),e.jsx("p",{className:"mt-1 text-xs text-muted-foreground",children:"Accounts created before password support migrate to a password the first time you change it — enter your 12-word recovery phrase here."})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"new-password",className:"mb-1 block text-sm font-medium",children:"New password"}),e.jsx(x,{id:"new-password",value:s,onChange:E,autoComplete:"new-password"}),s.length>0&&e.jsx("div",{className:"mt-2",children:e.jsx(M,{score:o.score,feedback:o.feedback,pwned:o.pwned,loading:o.loading})})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"confirm-new-password",className:"mb-1 block text-sm font-medium",children:"Confirm new password"}),e.jsx(x,{id:"confirm-new-password",value:t,onChange:T,autoComplete:"new-password",ariaInvalid:k}),k&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:"Passwords do not match."})]}),e.jsx(L,{checked:v,onChange:D=>q(D.target.checked),"data-testid":"change-password-ack",children:e.jsx("span",{className:"ml-2 text-sm",children:"I understand that if I forget this password, my account and history are unrecoverable."})}),y&&e.jsx("p",{className:"text-sm text-red-500",children:y})]}),e.jsxs(d,{className:"flex gap-3",children:[e.jsx(j,{rounded:!0,clear:!0,onClick:()=>P(!1),children:"Cancel"}),e.jsx(j,{rounded:!0,onClick:_,disabled:!R,"data-testid":"change-password-submit",children:"Change password"})]})]})]})})]})}b.__docgenInfo={description:"",methods:[],displayName:"ChangePasswordPanel",props:{step:{required:!0,tsType:{name:"RotateStep"},description:""},currentPassword:{required:!0,tsType:{name:"string"},description:""},newPassword:{required:!0,tsType:{name:"string"},description:""},confirmPassword:{required:!0,tsType:{name:"string"},description:""},acknowledged:{required:!0,tsType:{name:"boolean"},description:""},error:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},strength:{required:!0,tsType:{name:"PasswordStrength"},description:""},onCurrentChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onNewChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onConfirmChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onAcknowledgedChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const{fn:n}=__STORYBOOK_MODULE_TEST__,A={score:0,feedback:[],pwned:!1,loading:!1},S={score:4,feedback:[],pwned:!1,loading:!1},H={title:"Forms/ChangePasswordPanel",component:b,args:{onCurrentChange:n(),onNewChange:n(),onConfirmChange:n(),onAcknowledgedChange:n(),onSubmit:n(),strength:A},play:async({canvas:r,userEvent:a})=>{await a.click(r.getByTestId("change-password-trigger"))}},c={args:{step:"enter",currentPassword:"",newPassword:"",confirmPassword:"",acknowledged:!1,error:null}},l={args:{step:"enter",currentPassword:"old-pass",newPassword:"new-pass-strong",confirmPassword:"new-pass-strong",acknowledged:!0,error:null,strength:S}},p={args:{step:"enter",currentPassword:"old-pass",newPassword:"new-pass-strong",confirmPassword:"new-pass-strongER",acknowledged:!0,error:null,strength:S}},u={args:{step:"enter",currentPassword:"old-pass",newPassword:"new-pass",confirmPassword:"new-pass",acknowledged:!0,error:"Current password is incorrect."}},w={args:{step:"deriving-old",currentPassword:"old-pass",newPassword:"new-pass",confirmPassword:"new-pass",acknowledged:!0,error:null}},g={args:{step:"deriving-new",currentPassword:"old-pass",newPassword:"new-pass",confirmPassword:"new-pass",acknowledged:!0,error:null}},m={args:{step:"writing-chain",currentPassword:"old-pass",newPassword:"new-pass",confirmPassword:"new-pass",acknowledged:!0,error:null}},h={args:{step:"rotating",currentPassword:"old-pass",newPassword:"new-pass",confirmPassword:"new-pass",acknowledged:!0,error:null}},f={args:{step:"done",currentPassword:"",newPassword:"",confirmPassword:"",acknowledged:!1,error:null}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'deriving-new',
    currentPassword: 'old-pass',
    newPassword: 'new-pass',
    confirmPassword: 'new-pass',
    acknowledged: true,
    error: null
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'writing-chain',
    currentPassword: 'old-pass',
    newPassword: 'new-pass',
    confirmPassword: 'new-pass',
    acknowledged: true,
    error: null
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};const J=["Enter","EnterFilled","EnterMismatch","EnterWithError","DerivingOld","DerivingNew","WritingChain","Rotating","Done"];export{g as DerivingNew,w as DerivingOld,f as Done,c as Enter,l as EnterFilled,p as EnterMismatch,u as EnterWithError,h as Rotating,m as WritingChain,J as __namedExportsOrder,H as default};
