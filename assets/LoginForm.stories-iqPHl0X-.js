import{r as u,j as e}from"./iframe-DqsnVztB.js";import{P as b}from"./PasswordInput-TqHphAhT.js";import{A as y,a as v,b as N}from"./alert-5mMGPQ2W.js";import{C as _,b as S,d as T,e as C,a as E,B as D}from"./card-WbPlQj7w.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-CmprXL94.js";import"./utils-BQHNewu7.js";const L={rotated_elsewhere:"This account was rotated on another device. Please sign in with your new password."};function p({loading:l,error:c,notice:o=null,onDismissNotice:h,onLogin:x}){const[i,f]=u.useState(""),[d,w]=u.useState(""),j=r=>{r.preventDefault(),x(i,d)},m=()=>{o&&h?.()};return e.jsx("div",{className:"flex min-h-screen items-center justify-center bg-background p-8",children:e.jsxs("div",{className:"w-full max-w-md",children:[e.jsx("h1",{className:"mb-8 text-2xl font-bold",children:e.jsx("a",{href:"/",className:"hover:text-foreground",children:"atmin"})}),e.jsxs(_,{children:[e.jsxs(S,{children:[e.jsx(T,{children:"Sign In"}),e.jsx(C,{children:"Restore your account with your password"})]}),e.jsxs(E,{children:[o&&e.jsx("p",{className:"mb-4 text-sm text-muted-foreground","data-testid":"login-notice",children:L[o]}),e.jsxs("form",{onSubmit:j,className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"handle",className:"mb-1 block text-sm font-medium",children:"Handle"}),e.jsx("input",{id:"handle",type:"text",value:i,onChange:r=>{f(r.target.value.toLowerCase()),m()},placeholder:"alice-test",required:!0,className:"w-full rounded border border-input bg-background px-3 py-2 text-sm"}),e.jsx("p",{className:"mt-1 text-xs text-muted-foreground",children:"Handles are lowercase."})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"secret",className:"mb-1 block text-sm font-medium",children:"Password"}),e.jsx(b,{id:"secret",value:d,onChange:r=>{w(r),m()},placeholder:"Password",autoComplete:"current-password"})]}),c&&e.jsxs(y,{variant:"destructive",children:[e.jsx(v,{children:"Login Failed"}),e.jsx(N,{children:c})]}),e.jsx(D,{type:"submit",disabled:l||!i||!d,className:"w-full",children:l?"Signing in...":"Sign In"})]})]})]}),e.jsxs("p",{className:"mt-4 text-center text-sm text-muted-foreground",children:["Don't have an account?"," ",e.jsx("a",{href:"/register",className:"underline",children:"Create one"})]})]})})}p.__docgenInfo={description:"",methods:[],displayName:"LoginForm",props:{loading:{required:!0,tsType:{name:"boolean"},description:""},error:{required:!0,tsType:{name:"string"},description:""},notice:{required:!1,tsType:{name:"union",raw:"'rotated_elsewhere' | null",elements:[{name:"literal",value:"'rotated_elsewhere'"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},onDismissNotice:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onLogin:{required:!0,tsType:{name:"signature",type:"function",raw:"(handle: string, secret: string) => void",signature:{arguments:[{type:{name:"string"},name:"handle"},{type:{name:"string"},name:"secret"}],return:{name:"void"}}},description:""}}};const{fn:g}=__STORYBOOK_MODULE_TEST__,A={title:"Forms/LoginForm",component:p,args:{onLogin:g()}},s={args:{loading:!1,error:""}},t={args:{loading:!0,error:""}},a={args:{loading:!1,error:"Incorrect password. Please try again."}},n={args:{loading:!1,error:"",notice:"rotated_elsewhere",onDismissNotice:g()}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    loading: false,
    error: ''
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    error: ''
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    loading: false,
    error: 'Incorrect password. Please try again.'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    loading: false,
    error: '',
    notice: 'rotated_elsewhere',
    onDismissNotice: fn()
  }
}`,...n.parameters?.docs?.source}}};const H=["Default","Loading","WithError","RotatedElsewhere"];export{s as Default,t as Loading,n as RotatedElsewhere,a as WithError,H as __namedExportsOrder,A as default};
