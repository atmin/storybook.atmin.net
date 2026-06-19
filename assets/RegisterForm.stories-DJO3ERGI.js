import{j as e}from"./iframe-G8plW4P5.js";import{P as z}from"./PasswordField-AEEpmAbc.js";import{P as Y}from"./PasswordStrengthMeter-BE42nITe.js";import{A as K,a as M,b as V}from"./alert-BWzsUWfl.js";import{C as d,b as A,d as _,e as R,a as l,B as H}from"./card-DIXLj2B2.js";import{C as U}from"./checkbox-Dg2GrWdz.js";import"./preload-helper-PPVm8Dsz.js";import"./PasswordInput-BQW_nC9D.js";import"./createLucideIcon-DgTG2hH4.js";import"./utils-0aO_Cz3C.js";import"./index-CON7Z28P.js";import"./index-CvmaPzcH.js";const Z={idle:"text-muted-foreground",invalid:"text-destructive",checking:"text-muted-foreground",available:"text-green-600",taken:"text-destructive",released:"text-destructive",error:"text-destructive"};function P({step:r,handle:F,password:t,confirm:N,acknowledged:C,error:S,powStatus:v,provingMs:n,powHashes:a,strength:o,availability:i,onHandleChange:I,onSurpriseMe:Q,onPasswordChange:D,onConfirmChange:O,onAcknowledgedChange:L,onRegister:W}){const B=i.status==="available"&&t.length>0&&t===N&&C,q=a>0?e.jsxs("p",{className:"mt-2 text-center font-mono text-xs tabular-nums text-muted-foreground",children:["PoW: ",(n/1e3).toFixed(1),"s · ",a," hashes · ~",(n/a).toFixed(1)," ms/hash"]}):null,$=v==="failed"?null:e.jsxs("p",{className:"mt-4 text-center text-xs tabular-nums text-muted-foreground",children:[v==="ready"?"🔒 Secure registration ready":`🔒 Preparing secure registration… ${(n/1e3).toFixed(0)}s`,v==="ready"&&a>0&&` · ${a} hashes · ~${(n/a).toFixed(1)} ms/hash`]});return r==="deriving"||r==="proving"?e.jsx("div",{className:"flex min-h-screen items-center justify-center bg-background p-8",children:e.jsxs("div",{className:"text-center",children:[e.jsxs("div",{className:"mb-4 flex justify-center gap-2",children:[e.jsx("span",{className:"size-3 animate-pulse rounded-full bg-primary [animation-delay:-0.3s]"}),e.jsx("span",{className:"size-3 animate-pulse rounded-full bg-primary [animation-delay:-0.15s]"}),e.jsx("span",{className:"size-3 animate-pulse rounded-full bg-primary"})]}),e.jsx("p",{className:"text-lg font-medium",children:r==="deriving"?"Deriving your keys…":"Verifying your device…"}),e.jsx("p",{className:"mt-2 text-sm text-muted-foreground",children:"This takes a few seconds and runs entirely on your device."}),r==="proving"&&e.jsxs("p",{className:"mt-2 font-mono text-sm tabular-nums text-muted-foreground",children:[(n/1e3).toFixed(1),"s"]})]})}):e.jsx("div",{className:"flex min-h-screen items-center justify-center bg-background p-8",children:e.jsxs("div",{className:"w-full max-w-md",children:[e.jsx("h1",{className:"mb-8 text-2xl font-bold",children:e.jsx("a",{href:"/",className:"hover:text-foreground",children:"atmin"})}),r==="enter"&&e.jsxs(e.Fragment,{children:[e.jsxs(d,{className:"mb-6",children:[e.jsxs(A,{children:[e.jsx(_,{children:"Pick a handle"}),e.jsx(R,{children:"Other people will use this to find you. 3–32 lowercase letters, digits, or hyphens."})]}),e.jsxs(l,{className:"space-y-2",children:[e.jsx("label",{htmlFor:"handle",className:"sr-only",children:"Handle"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"select-none text-muted-foreground",children:"@"}),e.jsx("input",{id:"handle",type:"text",value:F,onChange:j=>I(j.target.value.toLowerCase()),autoComplete:"username",placeholder:"alice-test",className:"flex-1 rounded border border-input bg-background px-3 py-2 text-sm"}),e.jsx(H,{type:"button",variant:"outline",onClick:Q,"data-testid":"surprise-me",children:"Surprise me"})]}),i.message&&e.jsx("p",{className:`text-xs ${Z[i.status]}`,"data-testid":"handle-availability",children:i.message})]})]}),e.jsxs(d,{className:"mb-6",children:[e.jsxs(A,{children:[e.jsx(_,{children:"Choose a password"}),e.jsx(R,{children:"Your password derives your encryption keys locally. It's never sent anywhere or stored."})]}),e.jsxs(l,{className:"space-y-4",children:[e.jsx(z,{password:t,confirm:N,onPasswordChange:D,onConfirmChange:O}),t.length>0&&e.jsx(Y,{score:o.score,feedback:o.feedback,pwned:o.pwned,loading:o.loading})]})]}),e.jsxs(K,{className:"mb-6",children:[e.jsx(M,{children:"⚠️ Critical Security Warning"}),e.jsxs(V,{className:"space-y-2 text-sm",children:[e.jsx("p",{children:"There is no password reset. If you forget this password and lose your devices, your account and message history are gone forever."}),e.jsxs("p",{children:["Store it in a password manager like"," ",e.jsx("a",{href:"https://en.wikipedia.org/wiki/List_of_password_managers",target:"_blank",rel:"noopener noreferrer",className:"underline",children:"1Password, Bitwarden, or KeePass"}),"."]})]})]}),e.jsx("div",{className:"mb-6",children:e.jsxs("label",{className:"flex items-start gap-3",children:[e.jsx(U,{checked:C,onCheckedChange:j=>L(j===!0)}),e.jsx("span",{className:"text-sm",children:"I understand that my password cannot be reset and is the only way to recover my account"})]})}),S&&e.jsx("p",{className:"mb-4 text-sm text-destructive",children:S}),e.jsx(H,{onClick:W,disabled:!B,className:"w-full",children:"Register"}),$]}),r==="registering"&&e.jsx(d,{children:e.jsxs(l,{className:"pt-6",children:[e.jsx("p",{className:"text-center text-muted-foreground",children:"Creating your account…"}),q]})}),r==="done"&&e.jsx(d,{children:e.jsxs(l,{className:"pt-6",children:[e.jsx("p",{className:"mb-2 text-center text-green-600",children:"✓ Account created successfully"}),e.jsx("p",{className:"text-center text-sm text-muted-foreground",children:"Redirecting…"}),q]})})]})})}P.__docgenInfo={description:"",methods:[],displayName:"RegisterForm",props:{step:{required:!0,tsType:{name:"RegisterStep"},description:""},handle:{required:!0,tsType:{name:"string"},description:""},password:{required:!0,tsType:{name:"string"},description:""},confirm:{required:!0,tsType:{name:"string"},description:""},acknowledged:{required:!0,tsType:{name:"boolean"},description:""},error:{required:!0,tsType:{name:"string"},description:""},powStatus:{required:!0,tsType:{name:"PowStatus"},description:""},provingMs:{required:!0,tsType:{name:"number"},description:""},powHashes:{required:!0,tsType:{name:"number"},description:""},strength:{required:!0,tsType:{name:"PasswordStrength"},description:""},availability:{required:!0,tsType:{name:"HandleAvailability"},description:""},onHandleChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onSurpriseMe:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onPasswordChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onConfirmChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onAcknowledgedChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},onRegister:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const{fn:s}=__STORYBOOK_MODULE_TEST__,G={score:0,feedback:[],pwned:!1,loading:!1},J={status:"idle",message:""},T={status:"available",message:"✓ Available."},E={status:"taken",message:"✗ Taken."},X={status:"invalid",message:"Handle must be 3–32 lowercase letters, digits, or hyphens, starting with a letter."},ee={status:"released",message:"✗ In cooldown until 2026-06-25.",availableAt:"2026-06-25T00:00:00Z"},re={status:"checking",message:"Checking…"},ge={title:"Forms/RegisterForm",component:P,args:{onHandleChange:s(),onSurpriseMe:s(),onPasswordChange:s(),onConfirmChange:s(),onAcknowledgedChange:s(),onRegister:s(),strength:G,availability:J,powStatus:"ready",provingMs:0,powHashes:0}},c={args:{step:"enter",handle:"",password:"",confirm:"",acknowledged:!1,error:""}},u={args:{step:"enter",handle:"alice-test",password:"",confirm:"",acknowledged:!1,error:"",availability:T}},m={args:{step:"enter",handle:"alice",password:"",confirm:"",acknowledged:!1,error:"",availability:E}},p={args:{step:"enter",handle:"Alice",password:"",confirm:"",acknowledged:!1,error:"",availability:X}},g={args:{step:"enter",handle:"recent-user",password:"",confirm:"",acknowledged:!1,error:"",availability:ee}},h={args:{step:"enter",handle:"alice-test",password:"",confirm:"",acknowledged:!1,error:"",availability:re}},x={args:{step:"enter",handle:"alice-test",password:"password",confirm:"password",acknowledged:!1,error:"",availability:T,strength:{score:0,feedback:["This is a top-10 common password."],pwned:!0,loading:!1}}},f={args:{step:"enter",handle:"alice-test",password:"Tr0ub4dour&3xpl0re!Quokka",confirm:"Tr0ub4dour&3xpl0re!Quokka",acknowledged:!0,error:"",availability:T,strength:{score:4,feedback:[],pwned:!1,loading:!1}}},w={args:{step:"deriving",handle:"alice-test",password:"Tr0ub4dour&3xpl0re!Quokka",confirm:"Tr0ub4dour&3xpl0re!Quokka",acknowledged:!0,error:""}},k={args:{step:"registering",handle:"alice-test",password:"",confirm:"",acknowledged:!0,error:""}},y={args:{step:"done",handle:"alice-test",password:"",confirm:"",acknowledged:!0,error:""}},b={args:{step:"enter",handle:"alice-test",password:"Tr0ub4dour&3xpl0re!Quokka",confirm:"Tr0ub4dour&3xpl0re!Quokka",acknowledged:!0,error:"That handle is already taken.",availability:E,strength:{score:4,feedback:[],pwned:!1,loading:!1}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'enter',
    handle: '',
    password: '',
    confirm: '',
    acknowledged: false,
    error: ''
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'enter',
    handle: 'alice-test',
    password: '',
    confirm: '',
    acknowledged: false,
    error: '',
    availability: available
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'enter',
    handle: 'alice',
    password: '',
    confirm: '',
    acknowledged: false,
    error: '',
    availability: taken
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'enter',
    handle: 'Alice',
    password: '',
    confirm: '',
    acknowledged: false,
    error: '',
    availability: invalid
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'enter',
    handle: 'recent-user',
    password: '',
    confirm: '',
    acknowledged: false,
    error: '',
    availability: released
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'enter',
    handle: 'alice-test',
    password: '',
    confirm: '',
    acknowledged: false,
    error: '',
    availability: checking
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'deriving',
    handle: 'alice-test',
    password: 'Tr0ub4dour&3xpl0re!Quokka',
    confirm: 'Tr0ub4dour&3xpl0re!Quokka',
    acknowledged: true,
    error: ''
  }
}`,...w.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'registering',
    handle: 'alice-test',
    password: '',
    confirm: '',
    acknowledged: true,
    error: ''
  }
}`,...k.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'done',
    handle: 'alice-test',
    password: '',
    confirm: '',
    acknowledged: true,
    error: ''
  }
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};const he=["Enter","HandleAvailable","HandleTaken","HandleInvalid","HandleInCooldown","HandleChecking","EnterWeak","EnterStrong","Deriving","Registering","Done","WithError"];export{w as Deriving,y as Done,c as Enter,f as EnterStrong,x as EnterWeak,u as HandleAvailable,h as HandleChecking,g as HandleInCooldown,p as HandleInvalid,m as HandleTaken,k as Registering,b as WithError,he as __namedExportsOrder,ge as default};
