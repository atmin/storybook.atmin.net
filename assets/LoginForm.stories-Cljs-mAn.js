import{u as v,r as h,j as e,m as N,N as S,n as T,b as t,B as E}from"./iframe-BcmkuDE_.js";import{P as L}from"./PasswordInput-DltyS_Jk.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-xwYUcDU8.js";const k={rotated_elsewhere:"This account was rotated on another device. Please sign in with your new password.",account_deleted:"✓ Your account has been deleted."};function f({loading:u,error:m,notice:s=null,onDismissNotice:w,onLogin:y}){const p=v(),[l,j]=h.useState(""),[d,_]=h.useState(""),b=r=>{r.preventDefault(),y(l,d)},g=()=>{s&&w?.()};return e.jsxs(N,{children:[e.jsx(S,{title:"Sign in",left:e.jsx(T,{text:"Back",onClick:()=>p("/")})}),e.jsx(t,{className:"mt-6 text-sm opacity-70",children:"Restore your account with your password."}),s&&e.jsx(t,{className:"text-sm opacity-70","data-testid":s==="account_deleted"?"account-deleted-notice":"login-notice",children:k[s]}),e.jsxs("form",{onSubmit:b,children:[e.jsxs(t,{strong:!0,inset:!0,className:"space-y-5",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"handle",className:"mb-1 block text-sm font-medium",children:"Handle"}),e.jsx("input",{id:"handle",type:"text",value:l,onChange:r=>{j(r.target.value.toLowerCase()),g()},placeholder:"alice-test",required:!0,className:"w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"}),e.jsx("p",{className:"mt-1 text-xs opacity-60",children:"Handles are lowercase."})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"secret",className:"mb-1 block text-sm font-medium",children:"Password"}),e.jsx(L,{id:"secret",value:d,onChange:r=>{_(r),g()},placeholder:"Password",autoComplete:"current-password"})]}),m&&e.jsxs("div",{className:"text-sm text-red-500",children:[e.jsx("p",{className:"font-medium",children:"Login failed"}),e.jsx("p",{children:m})]})]}),e.jsx(t,{children:e.jsx(E,{type:"submit",rounded:!0,large:!0,disabled:u||!l||!d,children:u?"Signing in...":"Sign In"})})]}),e.jsxs(t,{className:"text-center text-sm opacity-70",children:["Don't have an account?"," ",e.jsx("button",{type:"button",className:"underline",onClick:()=>p("/register"),children:"Create one"})]})]})}f.__docgenInfo={description:"",methods:[],displayName:"LoginForm",props:{loading:{required:!0,tsType:{name:"boolean"},description:""},error:{required:!0,tsType:{name:"string"},description:""},notice:{required:!1,tsType:{name:"union",raw:"'rotated_elsewhere' | 'account_deleted' | null",elements:[{name:"literal",value:"'rotated_elsewhere'"},{name:"literal",value:"'account_deleted'"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},onDismissNotice:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onLogin:{required:!0,tsType:{name:"signature",type:"function",raw:"(handle: string, secret: string) => void",signature:{arguments:[{type:{name:"string"},name:"handle"},{type:{name:"string"},name:"secret"}],return:{name:"void"}}},description:""}}};const{fn:x}=__STORYBOOK_MODULE_TEST__,O={title:"Forms/LoginForm",component:f,parameters:{layout:"fullscreen"},args:{onLogin:x(),onDismissNotice:x()}},a={args:{loading:!1,error:""}},n={args:{loading:!0,error:""}},o={args:{loading:!1,error:"Incorrect password. Please try again."}},i={args:{loading:!1,error:"",notice:"rotated_elsewhere"}},c={args:{loading:!1,error:"",notice:"account_deleted"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    loading: false,
    error: ''
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    error: ''
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    loading: false,
    error: 'Incorrect password. Please try again.'
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    loading: false,
    error: '',
    notice: 'rotated_elsewhere'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    loading: false,
    error: '',
    notice: 'account_deleted'
  }
}`,...c.parameters?.docs?.source}}};const q=["Default","Loading","WithError","RotatedElsewhere","AccountDeleted"];export{c as AccountDeleted,a as Default,n as Loading,i as RotatedElsewhere,o as WithError,q as __namedExportsOrder,O as default};
