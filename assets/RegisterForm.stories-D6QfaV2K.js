import{u as K,j as e,b as r,m as c,N as V,n as z,a as P,B as Q,C as U}from"./iframe-Dl2q8Ffc.js";import{P as Z}from"./PasswordField-8ydSlDgx.js";import{P as G}from"./PasswordStrengthMeter-CJ108DG6.js";import{S as A}from"./StatusCover-CMPcRt2B.js";import{c as R}from"./createLucideIcon-C51JCz3H.js";import"./preload-helper-PPVm8Dsz.js";import"./PasswordInput-Dz1IsJ2A.js";const J=[["rect",{width:"12",height:"12",x:"2",y:"10",rx:"2",ry:"2",key:"6agr2n"}],["path",{d:"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6",key:"1o487t"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 14h.01",key:"ssrbsk"}],["path",{d:"M15 6h.01",key:"cblpky"}],["path",{d:"M18 9h.01",key:"2061c0"}]],X=R("dices",J);const ee=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],re=R("triangle-alert",ee),ae={idle:"opacity-60",invalid:"text-red-500",checking:"opacity-60",available:"text-green-600",taken:"text-red-500",released:"text-red-500",error:"text-red-500"};function I({step:a,handle:H,password:o,confirm:C,acknowledged:N,error:_,powStatus:T,provingMs:t,powHashes:s,strength:i,availability:d,onHandleChange:F,onSurpriseMe:L,onPasswordChange:M,onConfirmChange:B,onAcknowledgedChange:O,onRegister:D}){const W=K(),$=d.status==="available"&&o.length>0&&o===C&&N,q=s>0?e.jsxs(r,{className:"text-center font-mono text-xs tabular-nums opacity-60",children:["PoW: ",(t/1e3).toFixed(1),"s · ",s," hashes · ~",(t/s).toFixed(1)," ms/hash"]}):null;if(a==="deriving"||a==="proving")return e.jsxs(c,{children:[e.jsx(A,{label:a==="deriving"?"Deriving your keys…":"Verifying your device…"}),e.jsx(r,{className:"text-center text-sm opacity-60",children:"This takes a few seconds and runs entirely on your device."}),a==="proving"&&e.jsxs(r,{className:"text-center font-mono text-sm tabular-nums opacity-60",children:[(t/1e3).toFixed(1),"s"]})]});if(a==="registering")return e.jsxs(c,{children:[e.jsx(A,{label:"Creating your account…"}),q]});if(a==="done")return e.jsxs(c,{children:[e.jsx(r,{className:"pt-10 text-center text-green-600",children:"✓ Account created successfully"}),e.jsx(r,{className:"text-center text-sm opacity-60",children:"Redirecting…"}),q]});const Y=T==="failed"?null:e.jsxs(r,{className:"text-center text-xs tabular-nums opacity-60",children:[T==="ready"?"🔒 Secure registration ready":`🔒 Preparing secure registration… ${(t/1e3).toFixed(0)}s`,T==="ready"&&s>0&&` · ${s} hashes · ~${(t/s).toFixed(1)} ms/hash`]});return e.jsxs(c,{children:[e.jsx(V,{title:"Create account",left:e.jsx(z,{text:"Back",onClick:()=>W("/")})}),e.jsx(P,{children:"Pick a handle"}),e.jsx(r,{className:"text-sm opacity-70",children:"Other people will use this to find you. 3–32 lowercase letters, digits, or hyphens."}),e.jsxs(r,{strong:!0,inset:!0,className:"space-y-2",children:[e.jsx("label",{htmlFor:"handle",className:"sr-only",children:"Handle"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"select-none opacity-60",children:"@"}),e.jsx("input",{id:"handle",type:"text",value:H,onChange:j=>F(j.target.value.toLowerCase()),autoComplete:"username",placeholder:"alice-test",className:"flex-1 rounded-lg border border-input bg-background px-3 py-2 text-sm"}),e.jsx(Q,{inline:!0,outline:!0,rounded:!0,onClick:L,"data-testid":"surprise-me","aria-label":"Surprise me",children:e.jsx(X,{className:"h-5 w-5"})})]}),d.message&&e.jsx("p",{className:`text-xs ${ae[d.status]}`,"data-testid":"handle-availability",children:d.message})]}),e.jsx(P,{children:"Choose a password"}),e.jsx(r,{className:"text-sm opacity-70",children:"Your password derives your encryption keys locally. It's never sent anywhere or stored."}),e.jsxs(r,{strong:!0,inset:!0,className:"space-y-4",children:[e.jsx(Z,{password:o,confirm:C,onPasswordChange:M,onConfirmChange:B}),o.length>0&&e.jsx(G,{score:i.score,feedback:i.feedback,pwned:i.pwned,loading:i.loading})]}),e.jsxs(r,{strong:!0,inset:!0,className:"mt-6 space-y-2 text-sm",children:[e.jsxs("div",{className:"flex items-center gap-2 font-medium text-red-500",children:[e.jsx(re,{className:"h-5 w-5 shrink-0"}),"Critical security warning"]}),e.jsx("p",{children:"There is no password reset. If you forget this password and lose your devices, your account and message history are gone forever."}),e.jsxs("p",{children:["Store it in a password manager like"," ",e.jsx("a",{href:"https://en.wikipedia.org/wiki/List_of_password_managers",target:"_blank",rel:"noopener noreferrer",className:"underline",children:"1Password, Bitwarden, or KeePass"}),"."]})]}),e.jsx(r,{strong:!0,inset:!0,children:e.jsx(U,{checked:N,onChange:j=>O(j.target.checked),"data-testid":"register-ack",children:e.jsx("span",{className:"ml-2 text-sm",children:"I understand that my password cannot be reset and is the only way to recover my account"})})}),_&&e.jsx(r,{className:"text-sm text-red-500",children:_}),e.jsx(r,{children:e.jsx(Q,{rounded:!0,large:!0,onClick:D,disabled:!$,children:"Register"})}),Y]})}I.__docgenInfo={description:"",methods:[],displayName:"RegisterForm",props:{step:{required:!0,tsType:{name:"RegisterStep"},description:""},handle:{required:!0,tsType:{name:"string"},description:""},password:{required:!0,tsType:{name:"string"},description:""},confirm:{required:!0,tsType:{name:"string"},description:""},acknowledged:{required:!0,tsType:{name:"boolean"},description:""},error:{required:!0,tsType:{name:"string"},description:""},powStatus:{required:!0,tsType:{name:"PowStatus"},description:""},provingMs:{required:!0,tsType:{name:"number"},description:""},powHashes:{required:!0,tsType:{name:"number"},description:""},strength:{required:!0,tsType:{name:"PasswordStrength"},description:""},availability:{required:!0,tsType:{name:"HandleAvailability"},description:""},onHandleChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onSurpriseMe:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onPasswordChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onConfirmChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onAcknowledgedChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},onRegister:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const{fn:n}=__STORYBOOK_MODULE_TEST__,se={score:0,feedback:[],pwned:!1,loading:!1},ne={status:"idle",message:""},S={status:"available",message:"✓ Available."},E={status:"taken",message:"✗ Taken."},te={status:"invalid",message:"Handle must be 3–32 lowercase letters, digits, or hyphens, starting with a letter."},oe={status:"released",message:"✗ In cooldown until 2026-06-25.",availableAt:"2026-06-25T00:00:00Z"},ie={status:"checking",message:"Checking…"},he={title:"Forms/RegisterForm",component:I,parameters:{layout:"fullscreen"},args:{onHandleChange:n(),onSurpriseMe:n(),onPasswordChange:n(),onConfirmChange:n(),onAcknowledgedChange:n(),onRegister:n(),strength:se,availability:ne,powStatus:"ready",provingMs:0,powHashes:0}},l={args:{step:"enter",handle:"",password:"",confirm:"",acknowledged:!1,error:""}},u={args:{step:"enter",handle:"alice-test",password:"",confirm:"",acknowledged:!1,error:"",availability:S}},p={args:{step:"enter",handle:"alice",password:"",confirm:"",acknowledged:!1,error:"",availability:E}},m={args:{step:"enter",handle:"Alice",password:"",confirm:"",acknowledged:!1,error:"",availability:te}},g={args:{step:"enter",handle:"recent-user",password:"",confirm:"",acknowledged:!1,error:"",availability:oe}},h={args:{step:"enter",handle:"alice-test",password:"",confirm:"",acknowledged:!1,error:"",availability:ie}},k={args:{step:"enter",handle:"alice-test",password:"password",confirm:"password",acknowledged:!1,error:"",availability:S,strength:{score:0,feedback:["This is a top-10 common password."],pwned:!0,loading:!1}}},w={args:{step:"enter",handle:"alice-test",password:"Tr0ub4dour&3xpl0re!Quokka",confirm:"Tr0ub4dour&3xpl0re!Quokka",acknowledged:!0,error:"",availability:S,strength:{score:4,feedback:[],pwned:!1,loading:!1}}},y={args:{step:"deriving",handle:"alice-test",password:"Tr0ub4dour&3xpl0re!Quokka",confirm:"Tr0ub4dour&3xpl0re!Quokka",acknowledged:!0,error:""}},x={args:{step:"proving",handle:"alice-test",password:"Tr0ub4dour&3xpl0re!Quokka",confirm:"Tr0ub4dour&3xpl0re!Quokka",acknowledged:!0,error:"",provingMs:2400}},f={args:{step:"registering",handle:"alice-test",password:"",confirm:"",acknowledged:!0,error:""}},v={args:{step:"done",handle:"alice-test",password:"",confirm:"",acknowledged:!0,error:""}},b={args:{step:"enter",handle:"alice-test",password:"Tr0ub4dour&3xpl0re!Quokka",confirm:"Tr0ub4dour&3xpl0re!Quokka",acknowledged:!0,error:"That handle is already taken.",availability:E,strength:{score:4,feedback:[],pwned:!1,loading:!1}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'enter',
    handle: '',
    password: '',
    confirm: '',
    acknowledged: false,
    error: ''
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'enter',
    handle: 'alice-test',
    password: '',
    confirm: '',
    acknowledged: false,
    error: '',
    availability: available
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'enter',
    handle: 'alice',
    password: '',
    confirm: '',
    acknowledged: false,
    error: '',
    availability: taken
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'enter',
    handle: 'Alice',
    password: '',
    confirm: '',
    acknowledged: false,
    error: '',
    availability: invalid
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'deriving',
    handle: 'alice-test',
    password: 'Tr0ub4dour&3xpl0re!Quokka',
    confirm: 'Tr0ub4dour&3xpl0re!Quokka',
    acknowledged: true,
    error: ''
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'proving',
    handle: 'alice-test',
    password: 'Tr0ub4dour&3xpl0re!Quokka',
    confirm: 'Tr0ub4dour&3xpl0re!Quokka',
    acknowledged: true,
    error: '',
    provingMs: 2400
  }
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'registering',
    handle: 'alice-test',
    password: '',
    confirm: '',
    acknowledged: true,
    error: ''
  }
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'done',
    handle: 'alice-test',
    password: '',
    confirm: '',
    acknowledged: true,
    error: ''
  }
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};const ke=["Enter","HandleAvailable","HandleTaken","HandleInvalid","HandleInCooldown","HandleChecking","EnterWeak","EnterStrong","Deriving","Proving","Registering","Done","WithError"];export{y as Deriving,v as Done,l as Enter,w as EnterStrong,k as EnterWeak,u as HandleAvailable,h as HandleChecking,g as HandleInCooldown,m as HandleInvalid,p as HandleTaken,x as Proving,f as Registering,b as WithError,ke as __namedExportsOrder,he as default};
