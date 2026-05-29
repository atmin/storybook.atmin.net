import{j as e}from"./iframe-BKzLHnKf.js";import{P as F}from"./PasswordField-Ch8ND1AX.js";import{P as L}from"./PasswordStrengthMeter-BiUtCWwr.js";import{A as B,a as W,b as M}from"./alert-u0Xo7gjL.js";import{C as o,b as C,d as N,e as S,a as i,B as A}from"./card-sTir0OK7.js";import{C as z}from"./checkbox-CwmfCsSQ.js";import"./preload-helper-PPVm8Dsz.js";import"./PasswordInput-DcGqV68J.js";import"./createLucideIcon-J1AjQu5j.js";import"./utils-BQHNewu7.js";import"./index-B2vGPMKB.js";import"./index-C2Lgt2zE.js";const Y={idle:"text-muted-foreground",invalid:"text-destructive",checking:"text-muted-foreground",available:"text-green-600",taken:"text-destructive",released:"text-destructive",error:"text-destructive"};function H({step:a,handle:q,password:s,confirm:y,acknowledged:j,error:T,strength:n,availability:t,onHandleChange:R,onSurpriseMe:E,onPasswordChange:I,onConfirmChange:Q,onAcknowledgedChange:P,onRegister:D}){const O=t.status==="available"&&s.length>0&&s===y&&j;return a==="deriving"?e.jsx("div",{className:"flex min-h-screen items-center justify-center bg-background p-8",children:e.jsxs("div",{className:"text-center",children:[e.jsxs("div",{className:"mb-4 flex justify-center gap-2",children:[e.jsx("span",{className:"size-3 animate-pulse rounded-full bg-primary [animation-delay:-0.3s]"}),e.jsx("span",{className:"size-3 animate-pulse rounded-full bg-primary [animation-delay:-0.15s]"}),e.jsx("span",{className:"size-3 animate-pulse rounded-full bg-primary"})]}),e.jsx("p",{className:"text-lg font-medium",children:"Deriving your keys…"}),e.jsx("p",{className:"mt-2 text-sm text-muted-foreground",children:"This takes a few seconds and runs entirely on your device."})]})}):e.jsx("div",{className:"flex min-h-screen items-center justify-center bg-background p-8",children:e.jsxs("div",{className:"w-full max-w-md",children:[e.jsx("h1",{className:"mb-8 text-2xl font-bold",children:e.jsx("a",{href:"/",className:"hover:text-foreground",children:"atmin"})}),a==="enter"&&e.jsxs(e.Fragment,{children:[e.jsxs(o,{className:"mb-6",children:[e.jsxs(C,{children:[e.jsx(N,{children:"Pick a handle"}),e.jsx(S,{children:"Other people will use this to find you. 3–32 lowercase letters, digits, or hyphens."})]}),e.jsxs(i,{className:"space-y-2",children:[e.jsx("label",{htmlFor:"handle",className:"sr-only",children:"Handle"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"select-none text-muted-foreground",children:"@"}),e.jsx("input",{id:"handle",type:"text",value:q,onChange:b=>R(b.target.value.toLowerCase()),autoComplete:"username",placeholder:"alice-test",className:"flex-1 rounded border border-input bg-background px-3 py-2 text-sm"}),e.jsx(A,{type:"button",variant:"outline",onClick:E,"data-testid":"surprise-me",children:"Surprise me"})]}),t.message&&e.jsx("p",{className:`text-xs ${Y[t.status]}`,"data-testid":"handle-availability",children:t.message})]})]}),e.jsxs(o,{className:"mb-6",children:[e.jsxs(C,{children:[e.jsx(N,{children:"Choose a password"}),e.jsx(S,{children:"Your password derives your encryption keys locally. It's never sent anywhere or stored."})]}),e.jsxs(i,{className:"space-y-4",children:[e.jsx(F,{password:s,confirm:y,onPasswordChange:I,onConfirmChange:Q}),s.length>0&&e.jsx(L,{score:n.score,feedback:n.feedback,pwned:n.pwned,loading:n.loading})]})]}),e.jsxs(B,{className:"mb-6",children:[e.jsx(W,{children:"⚠️ Critical Security Warning"}),e.jsxs(M,{className:"space-y-2 text-sm",children:[e.jsx("p",{children:"There is no password reset. If you forget this password and lose your devices, your account and message history are gone forever."}),e.jsxs("p",{children:["Store it in a password manager like"," ",e.jsx("a",{href:"https://en.wikipedia.org/wiki/List_of_password_managers",target:"_blank",rel:"noopener noreferrer",className:"underline",children:"1Password, Bitwarden, or KeePass"}),"."]})]})]}),e.jsx("div",{className:"mb-6",children:e.jsxs("label",{className:"flex items-start gap-3",children:[e.jsx(z,{checked:j,onCheckedChange:b=>P(b===!0)}),e.jsx("span",{className:"text-sm",children:"I understand that my password cannot be reset and is the only way to recover my account"})]})}),T&&e.jsx("p",{className:"mb-4 text-sm text-destructive",children:T}),e.jsx(A,{onClick:D,disabled:!O,className:"w-full",children:"Register"})]}),a==="registering"&&e.jsx(o,{children:e.jsx(i,{className:"pt-6",children:e.jsx("p",{className:"text-center text-muted-foreground",children:"Creating your account…"})})}),a==="done"&&e.jsx(o,{children:e.jsxs(i,{className:"pt-6",children:[e.jsx("p",{className:"mb-2 text-center text-green-600",children:"✓ Account created successfully"}),e.jsx("p",{className:"text-center text-sm text-muted-foreground",children:"Redirecting…"})]})})]})})}H.__docgenInfo={description:"",methods:[],displayName:"RegisterForm",props:{step:{required:!0,tsType:{name:"RegisterStep"},description:""},handle:{required:!0,tsType:{name:"string"},description:""},password:{required:!0,tsType:{name:"string"},description:""},confirm:{required:!0,tsType:{name:"string"},description:""},acknowledged:{required:!0,tsType:{name:"boolean"},description:""},error:{required:!0,tsType:{name:"string"},description:""},strength:{required:!0,tsType:{name:"PasswordStrength"},description:""},availability:{required:!0,tsType:{name:"HandleAvailability"},description:""},onHandleChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onSurpriseMe:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onPasswordChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onConfirmChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onAcknowledgedChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},onRegister:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const{fn:r}=__STORYBOOK_MODULE_TEST__,K={score:0,feedback:[],pwned:!1,loading:!1},U={status:"idle",message:""},v={status:"available",message:"✓ Available."},_={status:"taken",message:"✗ Taken."},V={status:"invalid",message:"Handle must be 3–32 lowercase letters, digits, or hyphens, starting with a letter."},Z={status:"released",message:"✗ In cooldown until 2026-06-25.",availableAt:"2026-06-25T00:00:00Z"},$={status:"checking",message:"Checking…"},le={title:"Forms/RegisterForm",component:H,args:{onHandleChange:r(),onSurpriseMe:r(),onPasswordChange:r(),onConfirmChange:r(),onAcknowledgedChange:r(),onRegister:r(),strength:K,availability:U}},d={args:{step:"enter",handle:"",password:"",confirm:"",acknowledged:!1,error:""}},l={args:{step:"enter",handle:"alice-test",password:"",confirm:"",acknowledged:!1,error:"",availability:v}},c={args:{step:"enter",handle:"alice",password:"",confirm:"",acknowledged:!1,error:"",availability:_}},p={args:{step:"enter",handle:"Alice",password:"",confirm:"",acknowledged:!1,error:"",availability:V}},u={args:{step:"enter",handle:"recent-user",password:"",confirm:"",acknowledged:!1,error:"",availability:Z}},m={args:{step:"enter",handle:"alice-test",password:"",confirm:"",acknowledged:!1,error:"",availability:$}},g={args:{step:"enter",handle:"alice-test",password:"password",confirm:"password",acknowledged:!1,error:"",availability:v,strength:{score:0,feedback:["This is a top-10 common password."],pwned:!0,loading:!1}}},h={args:{step:"enter",handle:"alice-test",password:"Tr0ub4dour&3xpl0re!Quokka",confirm:"Tr0ub4dour&3xpl0re!Quokka",acknowledged:!0,error:"",availability:v,strength:{score:4,feedback:[],pwned:!1,loading:!1}}},f={args:{step:"deriving",handle:"alice-test",password:"Tr0ub4dour&3xpl0re!Quokka",confirm:"Tr0ub4dour&3xpl0re!Quokka",acknowledged:!0,error:""}},x={args:{step:"registering",handle:"alice-test",password:"",confirm:"",acknowledged:!0,error:""}},w={args:{step:"done",handle:"alice-test",password:"",confirm:"",acknowledged:!0,error:""}},k={args:{step:"enter",handle:"alice-test",password:"Tr0ub4dour&3xpl0re!Quokka",confirm:"Tr0ub4dour&3xpl0re!Quokka",acknowledged:!0,error:"That handle is already taken.",availability:_,strength:{score:4,feedback:[],pwned:!1,loading:!1}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'enter',
    handle: '',
    password: '',
    confirm: '',
    acknowledged: false,
    error: ''
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'enter',
    handle: 'alice-test',
    password: '',
    confirm: '',
    acknowledged: false,
    error: '',
    availability: available
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'enter',
    handle: 'alice',
    password: '',
    confirm: '',
    acknowledged: false,
    error: '',
    availability: taken
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'enter',
    handle: 'Alice',
    password: '',
    confirm: '',
    acknowledged: false,
    error: '',
    availability: invalid
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'enter',
    handle: 'recent-user',
    password: '',
    confirm: '',
    acknowledged: false,
    error: '',
    availability: released
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'enter',
    handle: 'alice-test',
    password: '',
    confirm: '',
    acknowledged: false,
    error: '',
    availability: checking
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'enter',
    handle: 'alice-test',
    password: 'password',
    confirm: 'password',
    acknowledged: false,
    error: '',
    availability: available,
    strength: {
      score: 0,
      feedback: ['This is a top-10 common password.'],
      pwned: true,
      loading: false
    }
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'enter',
    handle: 'alice-test',
    password: 'Tr0ub4dour&3xpl0re!Quokka',
    confirm: 'Tr0ub4dour&3xpl0re!Quokka',
    acknowledged: true,
    error: '',
    availability: available,
    strength: {
      score: 4,
      feedback: [],
      pwned: false,
      loading: false
    }
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'deriving',
    handle: 'alice-test',
    password: 'Tr0ub4dour&3xpl0re!Quokka',
    confirm: 'Tr0ub4dour&3xpl0re!Quokka',
    acknowledged: true,
    error: ''
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'registering',
    handle: 'alice-test',
    password: '',
    confirm: '',
    acknowledged: true,
    error: ''
  }
}`,...x.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'done',
    handle: 'alice-test',
    password: '',
    confirm: '',
    acknowledged: true,
    error: ''
  }
}`,...w.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'enter',
    handle: 'alice-test',
    password: 'Tr0ub4dour&3xpl0re!Quokka',
    confirm: 'Tr0ub4dour&3xpl0re!Quokka',
    acknowledged: true,
    error: 'That handle is already taken.',
    availability: taken,
    strength: {
      score: 4,
      feedback: [],
      pwned: false,
      loading: false
    }
  }
}`,...k.parameters?.docs?.source}}};const ce=["Enter","HandleAvailable","HandleTaken","HandleInvalid","HandleInCooldown","HandleChecking","EnterWeak","EnterStrong","Deriving","Registering","Done","WithError"];export{f as Deriving,w as Done,d as Enter,h as EnterStrong,g as EnterWeak,l as HandleAvailable,m as HandleChecking,u as HandleInCooldown,p as HandleInvalid,c as HandleTaken,x as Registering,k as WithError,ce as __namedExportsOrder,le as default};
