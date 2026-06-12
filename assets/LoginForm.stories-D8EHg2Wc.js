import{r as u,j as e}from"./iframe-CyJ44ox6.js";import{P as b}from"./PasswordInput-DOGQrpmH.js";import{A as v,a as y,b as _}from"./alert-C_N0fARX.js";import{C as N,b as S,d as T,e as C,a as E,B as D}from"./card-BCJqSxSi.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-DkjrEm2A.js";import"./utils-BXTaqGe-.js";const L={rotated_elsewhere:"This account was rotated on another device. Please sign in with your new password.",account_deleted:"✓ Your account has been deleted."};function p({loading:l,error:c,notice:s=null,onDismissNotice:h,onLogin:x}){const[i,f]=u.useState(""),[d,w]=u.useState(""),j=r=>{r.preventDefault(),x(i,d)},m=()=>{s&&h?.()};return e.jsx("div",{className:"flex min-h-screen items-center justify-center bg-background p-8",children:e.jsxs("div",{className:"w-full max-w-md",children:[e.jsx("h1",{className:"mb-8 text-2xl font-bold",children:e.jsx("a",{href:"/",className:"hover:text-foreground",children:"atmin"})}),e.jsxs(N,{children:[e.jsxs(S,{children:[e.jsx(T,{children:"Sign In"}),e.jsx(C,{children:"Restore your account with your password"})]}),e.jsxs(E,{children:[s&&e.jsx("p",{className:"mb-4 text-sm text-muted-foreground","data-testid":s==="account_deleted"?"account-deleted-notice":"login-notice",children:L[s]}),e.jsxs("form",{onSubmit:j,className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"handle",className:"mb-1 block text-sm font-medium",children:"Handle"}),e.jsx("input",{id:"handle",type:"text",value:i,onChange:r=>{f(r.target.value.toLowerCase()),m()},placeholder:"alice-test",required:!0,className:"w-full rounded border border-input bg-background px-3 py-2 text-sm"}),e.jsx("p",{className:"mt-1 text-xs text-muted-foreground",children:"Handles are lowercase."})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"secret",className:"mb-1 block text-sm font-medium",children:"Password"}),e.jsx(b,{id:"secret",value:d,onChange:r=>{w(r),m()},placeholder:"Password",autoComplete:"current-password"})]}),c&&e.jsxs(v,{variant:"destructive",children:[e.jsx(y,{children:"Login Failed"}),e.jsx(_,{children:c})]}),e.jsx(D,{type:"submit",disabled:l||!i||!d,className:"w-full",children:l?"Signing in...":"Sign In"})]})]})]}),e.jsxs("p",{className:"mt-4 text-center text-sm text-muted-foreground",children:["Don't have an account?"," ",e.jsx("a",{href:"/register",className:"underline",children:"Create one"})]})]})})}p.__docgenInfo={description:"",methods:[],displayName:"LoginForm",props:{loading:{required:!0,tsType:{name:"boolean"},description:""},error:{required:!0,tsType:{name:"string"},description:""},notice:{required:!1,tsType:{name:"union",raw:"'rotated_elsewhere' | 'account_deleted' | null",elements:[{name:"literal",value:"'rotated_elsewhere'"},{name:"literal",value:"'account_deleted'"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},onDismissNotice:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onLogin:{required:!0,tsType:{name:"signature",type:"function",raw:"(handle: string, secret: string) => void",signature:{arguments:[{type:{name:"string"},name:"handle"},{type:{name:"string"},name:"secret"}],return:{name:"void"}}},description:""}}};const{fn:g}=__STORYBOOK_MODULE_TEST__,A={title:"Forms/LoginForm",component:p,args:{onLogin:g()}},t={args:{loading:!1,error:""}},a={args:{loading:!0,error:""}},n={args:{loading:!1,error:"Incorrect password. Please try again."}},o={args:{loading:!1,error:"",notice:"rotated_elsewhere",onDismissNotice:g()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    loading: false,
    error: ''
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    error: ''
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    loading: false,
    error: 'Incorrect password. Please try again.'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    loading: false,
    error: '',
    notice: 'rotated_elsewhere',
    onDismissNotice: fn()
  }
}`,...o.parameters?.docs?.source}}};const H=["Default","Loading","WithError","RotatedElsewhere"];export{t as Default,a as Loading,o as RotatedElsewhere,n as WithError,H as __namedExportsOrder,A as default};
