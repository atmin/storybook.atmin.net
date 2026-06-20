import{r as d,j as n,o as me}from"./iframe-Cii7GhjR.js";import{P as pe}from"./PasswordField-DCJijVeX.js";import{P as fe}from"./PasswordStrengthMeter-DrKSCbP-.js";import{A as ge,a as he,b as xe}from"./alert-CtE5xOCv.js";import{f as be,u as B,C as S,a as K,b as V,d as Y,e as j,B as G}from"./card-C0WV37UN.js";import{c as ve}from"./utils-Uo9mvgnA.js";import{C as ke}from"./check-BUoAshnk.js";import"./index-COIS11Ew.js";import"./preload-helper-PPVm8Dsz.js";import"./PasswordInput-CcCuZAKX.js";import"./createLucideIcon-Dr5g4T_K.js";import"./index-BfEep-79.js";var ye=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],U=ye.reduce((e,r)=>{const t=be(`Primitive.${r}`),c=d.forwardRef((a,s)=>{const{asChild:l,...i}=a,o=l?t:r;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),n.jsx(o,{...i,ref:s})});return c.displayName=`Primitive.${r}`,{...e,[r]:c}},{});function we(e,r=[]){let t=[];function c(s,l){const i=d.createContext(l),o=t.length;t=[...t,l];const u=m=>{const{scope:f,children:g,...h}=m,v=f?.[e]?.[o]||i,k=d.useMemo(()=>h,Object.values(h));return n.jsx(v.Provider,{value:k,children:g})};u.displayName=s+"Provider";function p(m,f){const g=f?.[e]?.[o]||i,h=d.useContext(g);if(h)return h;if(l!==void 0)return l;throw new Error(`\`${m}\` must be used within \`${s}\``)}return[u,p]}const a=()=>{const s=t.map(l=>d.createContext(l));return function(i){const o=i?.[e]||s;return d.useMemo(()=>({[`__scope${e}`]:{...i,[e]:o}}),[i,o])}};return a.scopeName=e,[c,Ce(a,...r)]}function Ce(...e){const r=e[0];if(e.length===1)return r;const t=()=>{const c=e.map(a=>({useScope:a(),scopeName:a.scopeName}));return function(s){const l=c.reduce((i,{useScope:o,scopeName:u})=>{const m=o(s)[`__scope${u}`];return{...i,...m}},{});return d.useMemo(()=>({[`__scope${r.scopeName}`]:l}),[l])}};return t.scopeName=r.scopeName,t}function X(e,r,{checkForDefaultPrevented:t=!0}={}){return function(a){if(e?.(a),t===!1||!a.defaultPrevented)return r?.(a)}}var L=globalThis?.document?d.useLayoutEffect:()=>{},Ne=me[" useInsertionEffect ".trim().toString()]||L;function Se({prop:e,defaultProp:r,onChange:t=()=>{},caller:c}){const[a,s,l]=je({defaultProp:r,onChange:t}),i=e!==void 0,o=i?e:a;{const p=d.useRef(e!==void 0);d.useEffect(()=>{const m=p.current;m!==i&&console.warn(`${c} is changing from ${m?"controlled":"uncontrolled"} to ${i?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),p.current=i},[i,c])}const u=d.useCallback(p=>{if(i){const m=Te(p)?p(e):p;m!==e&&l.current?.(m)}else s(p)},[i,e,s,l]);return[o,u]}function je({defaultProp:e,onChange:r}){const[t,c]=d.useState(e),a=d.useRef(t),s=d.useRef(r);return Ne(()=>{s.current=r},[r]),d.useEffect(()=>{a.current!==t&&(s.current?.(t),a.current=t)},[t,a]),[t,c,s]}function Te(e){return typeof e=="function"}function Re(e,r){return d.useReducer((t,c)=>r[t][c]??t,e)}var Z=e=>{const{present:r,children:t}=e,c=Ee(r),a=typeof t=="function"?t({present:c.isPresent}):d.Children.only(t),s=B(c.ref,Pe(a));return typeof t=="function"||c.isPresent?d.cloneElement(a,{ref:s}):null};Z.displayName="Presence";function Ee(e){const[r,t]=d.useState(),c=d.useRef(null),a=d.useRef(e),s=d.useRef("none"),l=e?"mounted":"unmounted",[i,o]=Re(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return d.useEffect(()=>{const u=T(c.current);s.current=i==="mounted"?u:"none"},[i]),L(()=>{const u=c.current,p=a.current;if(p!==e){const f=s.current,g=T(u);e?o("MOUNT"):g==="none"||u?.display==="none"?o("UNMOUNT"):o(p&&f!==g?"ANIMATION_OUT":"UNMOUNT"),a.current=e}},[e,o]),L(()=>{if(r){let u;const p=r.ownerDocument.defaultView??window,m=g=>{const v=T(c.current).includes(CSS.escape(g.animationName));if(g.target===r&&v&&(o("ANIMATION_END"),!a.current)){const k=r.style.animationFillMode;r.style.animationFillMode="forwards",u=p.setTimeout(()=>{r.style.animationFillMode==="forwards"&&(r.style.animationFillMode=k)})}},f=g=>{g.target===r&&(s.current=T(c.current))};return r.addEventListener("animationstart",f),r.addEventListener("animationcancel",m),r.addEventListener("animationend",m),()=>{p.clearTimeout(u),r.removeEventListener("animationstart",f),r.removeEventListener("animationcancel",m),r.removeEventListener("animationend",m)}}else o("ANIMATION_END")},[r,o]),{isPresent:["mounted","unmountSuspended"].includes(i),ref:d.useCallback(u=>{c.current=u?getComputedStyle(u):null,t(u)},[])}}function T(e){return e?.animationName||"none"}function Pe(e){let r=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,t=r&&"isReactWarning"in r&&r.isReactWarning;return t?e.ref:(r=Object.getOwnPropertyDescriptor(e,"ref")?.get,t=r&&"isReactWarning"in r&&r.isReactWarning,t?e.props.ref:e.props.ref||e.ref)}function Ae(e){const r=d.useRef({value:e,previous:e});return d.useMemo(()=>(r.current.value!==e&&(r.current.previous=r.current.value,r.current.value=e),r.current.previous),[e])}function _e(e){const[r,t]=d.useState(void 0);return L(()=>{if(e){t({width:e.offsetWidth,height:e.offsetHeight});const c=new ResizeObserver(a=>{if(!Array.isArray(a)||!a.length)return;const s=a[0];let l,i;if("borderBoxSize"in s){const o=s.borderBoxSize,u=Array.isArray(o)?o[0]:o;l=u.inlineSize,i=u.blockSize}else l=e.offsetWidth,i=e.offsetHeight;t({width:l,height:i})});return c.observe(e,{box:"border-box"}),()=>c.unobserve(e)}else t(void 0)},[e]),r}var z="Checkbox",[Ie]=we(z),[Oe,$]=Ie(z);function Me(e){const{__scopeCheckbox:r,checked:t,children:c,defaultChecked:a,disabled:s,form:l,name:i,onCheckedChange:o,required:u,value:p="on",internal_do_not_use_render:m}=e,[f,g]=Se({prop:t,defaultProp:a??!1,onChange:o,caller:z}),[h,v]=d.useState(null),[k,x]=d.useState(null),b=d.useRef(!1),N=h?!!l||!!h.closest("form"):!0,w={checked:f,disabled:s,setChecked:g,control:h,setControl:v,name:i,form:l,value:p,hasConsumerStoppedPropagationRef:b,required:u,defaultChecked:y(a)?!1:a,isFormControl:N,bubbleInput:k,setBubbleInput:x};return n.jsx(Oe,{scope:r,...w,children:qe(m)?m(w):c})}var J="CheckboxTrigger",ee=d.forwardRef(({__scopeCheckbox:e,onKeyDown:r,onClick:t,...c},a)=>{const{control:s,value:l,disabled:i,checked:o,required:u,setControl:p,setChecked:m,hasConsumerStoppedPropagationRef:f,isFormControl:g,bubbleInput:h}=$(J,e),v=B(a,p),k=d.useRef(o);return d.useEffect(()=>{const x=s?.form;if(x){const b=()=>m(k.current);return x.addEventListener("reset",b),()=>x.removeEventListener("reset",b)}},[s,m]),n.jsx(U.button,{type:"button",role:"checkbox","aria-checked":y(o)?"mixed":o,"aria-required":u,"data-state":oe(o),"data-disabled":i?"":void 0,disabled:i,value:l,...c,ref:v,onKeyDown:X(r,x=>{x.key==="Enter"&&x.preventDefault()}),onClick:X(t,x=>{m(b=>y(b)?!0:!b),h&&g&&(f.current=x.isPropagationStopped(),f.current||x.stopPropagation())})})});ee.displayName=J;var re=d.forwardRef((e,r)=>{const{__scopeCheckbox:t,name:c,checked:a,defaultChecked:s,required:l,disabled:i,value:o,onCheckedChange:u,form:p,...m}=e;return n.jsx(Me,{__scopeCheckbox:t,checked:a,defaultChecked:s,disabled:i,required:l,onCheckedChange:u,name:c,form:p,value:o,internal_do_not_use_render:({isFormControl:f})=>n.jsxs(n.Fragment,{children:[n.jsx(ee,{...m,ref:r,__scopeCheckbox:t}),f&&n.jsx(ae,{__scopeCheckbox:t})]})})});re.displayName=z;var ne="CheckboxIndicator",te=d.forwardRef((e,r)=>{const{__scopeCheckbox:t,forceMount:c,...a}=e,s=$(ne,t);return n.jsx(Z,{present:c||y(s.checked)||s.checked===!0,children:n.jsx(U.span,{"data-state":oe(s.checked),"data-disabled":s.disabled?"":void 0,...a,ref:r,style:{pointerEvents:"none",...e.style}})})});te.displayName=ne;var se="CheckboxBubbleInput",ae=d.forwardRef(({__scopeCheckbox:e,...r},t)=>{const{control:c,hasConsumerStoppedPropagationRef:a,checked:s,defaultChecked:l,required:i,disabled:o,name:u,value:p,form:m,bubbleInput:f,setBubbleInput:g}=$(se,e),h=B(t,g),v=Ae(s),k=_e(c);d.useEffect(()=>{const b=f;if(!b)return;const N=window.HTMLInputElement.prototype,Q=Object.getOwnPropertyDescriptor(N,"checked").set,le=!a.current;if(v!==s&&Q){const ue=new Event("click",{bubbles:le});b.indeterminate=y(s),Q.call(b,y(s)?!1:s),b.dispatchEvent(ue)}},[f,v,s,a]);const x=d.useRef(y(s)?!1:s);return n.jsx(U.input,{type:"checkbox","aria-hidden":!0,defaultChecked:l??x.current,required:i,disabled:o,name:u,value:p,form:m,...r,tabIndex:-1,ref:h,style:{...r.style,...k,position:"absolute",pointerEvents:"none",opacity:0,margin:0,transform:"translateX(-100%)"}})});ae.displayName=se;function qe(e){return typeof e=="function"}function y(e){return e==="indeterminate"}function oe(e){return y(e)?"indeterminate":e?"checked":"unchecked"}function ie({className:e,...r}){return n.jsx(re,{"data-slot":"checkbox",className:ve("peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",e),...r,children:n.jsx(te,{"data-slot":"checkbox-indicator",className:"grid place-content-center text-current transition-none",children:n.jsx(ke,{className:"size-3.5"})})})}ie.__docgenInfo={description:"",methods:[],displayName:"Checkbox"};const Fe={idle:"text-muted-foreground",invalid:"text-destructive",checking:"text-muted-foreground",available:"text-green-600",taken:"text-destructive",released:"text-destructive",error:"text-destructive"};function ce({step:e,handle:r,password:t,confirm:c,acknowledged:a,error:s,powStatus:l,provingMs:i,powHashes:o,strength:u,availability:p,onHandleChange:m,onSurpriseMe:f,onPasswordChange:g,onConfirmChange:h,onAcknowledgedChange:v,onRegister:k}){const x=p.status==="available"&&t.length>0&&t===c&&a,b=o>0?n.jsxs("p",{className:"mt-2 text-center font-mono text-xs tabular-nums text-muted-foreground",children:["PoW: ",(i/1e3).toFixed(1),"s · ",o," hashes · ~",(i/o).toFixed(1)," ms/hash"]}):null,N=l==="failed"?null:n.jsxs("p",{className:"mt-4 text-center text-xs tabular-nums text-muted-foreground",children:[l==="ready"?"🔒 Secure registration ready":`🔒 Preparing secure registration… ${(i/1e3).toFixed(0)}s`,l==="ready"&&o>0&&` · ${o} hashes · ~${(i/o).toFixed(1)} ms/hash`]});return e==="deriving"||e==="proving"?n.jsx("div",{className:"flex min-h-screen items-center justify-center bg-background p-8",children:n.jsxs("div",{className:"text-center",children:[n.jsxs("div",{className:"mb-4 flex justify-center gap-2",children:[n.jsx("span",{className:"size-3 animate-pulse rounded-full bg-primary [animation-delay:-0.3s]"}),n.jsx("span",{className:"size-3 animate-pulse rounded-full bg-primary [animation-delay:-0.15s]"}),n.jsx("span",{className:"size-3 animate-pulse rounded-full bg-primary"})]}),n.jsx("p",{className:"text-lg font-medium",children:e==="deriving"?"Deriving your keys…":"Verifying your device…"}),n.jsx("p",{className:"mt-2 text-sm text-muted-foreground",children:"This takes a few seconds and runs entirely on your device."}),e==="proving"&&n.jsxs("p",{className:"mt-2 font-mono text-sm tabular-nums text-muted-foreground",children:[(i/1e3).toFixed(1),"s"]})]})}):n.jsx("div",{className:"flex min-h-screen items-center justify-center bg-background p-8",children:n.jsxs("div",{className:"w-full max-w-md",children:[n.jsx("h1",{className:"mb-8 text-2xl font-bold",children:n.jsx("a",{href:"/",className:"hover:text-foreground",children:"atmin"})}),e==="enter"&&n.jsxs(n.Fragment,{children:[n.jsxs(S,{className:"mb-6",children:[n.jsxs(K,{children:[n.jsx(V,{children:"Pick a handle"}),n.jsx(Y,{children:"Other people will use this to find you. 3–32 lowercase letters, digits, or hyphens."})]}),n.jsxs(j,{className:"space-y-2",children:[n.jsx("label",{htmlFor:"handle",className:"sr-only",children:"Handle"}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"select-none text-muted-foreground",children:"@"}),n.jsx("input",{id:"handle",type:"text",value:r,onChange:w=>m(w.target.value.toLowerCase()),autoComplete:"username",placeholder:"alice-test",className:"flex-1 rounded border border-input bg-background px-3 py-2 text-sm"}),n.jsx(G,{type:"button",variant:"outline",onClick:f,"data-testid":"surprise-me",children:"Surprise me"})]}),p.message&&n.jsx("p",{className:`text-xs ${Fe[p.status]}`,"data-testid":"handle-availability",children:p.message})]})]}),n.jsxs(S,{className:"mb-6",children:[n.jsxs(K,{children:[n.jsx(V,{children:"Choose a password"}),n.jsx(Y,{children:"Your password derives your encryption keys locally. It's never sent anywhere or stored."})]}),n.jsxs(j,{className:"space-y-4",children:[n.jsx(pe,{password:t,confirm:c,onPasswordChange:g,onConfirmChange:h}),t.length>0&&n.jsx(fe,{score:u.score,feedback:u.feedback,pwned:u.pwned,loading:u.loading})]})]}),n.jsxs(ge,{className:"mb-6",children:[n.jsx(he,{children:"⚠️ Critical Security Warning"}),n.jsxs(xe,{className:"space-y-2 text-sm",children:[n.jsx("p",{children:"There is no password reset. If you forget this password and lose your devices, your account and message history are gone forever."}),n.jsxs("p",{children:["Store it in a password manager like"," ",n.jsx("a",{href:"https://en.wikipedia.org/wiki/List_of_password_managers",target:"_blank",rel:"noopener noreferrer",className:"underline",children:"1Password, Bitwarden, or KeePass"}),"."]})]})]}),n.jsx("div",{className:"mb-6",children:n.jsxs("label",{className:"flex items-start gap-3",children:[n.jsx(ie,{checked:a,onCheckedChange:w=>v(w===!0)}),n.jsx("span",{className:"text-sm",children:"I understand that my password cannot be reset and is the only way to recover my account"})]})}),s&&n.jsx("p",{className:"mb-4 text-sm text-destructive",children:s}),n.jsx(G,{onClick:k,disabled:!x,className:"w-full",children:"Register"}),N]}),e==="registering"&&n.jsx(S,{children:n.jsxs(j,{className:"pt-6",children:[n.jsx("p",{className:"text-center text-muted-foreground",children:"Creating your account…"}),b]})}),e==="done"&&n.jsx(S,{children:n.jsxs(j,{className:"pt-6",children:[n.jsx("p",{className:"mb-2 text-center text-green-600",children:"✓ Account created successfully"}),n.jsx("p",{className:"text-center text-sm text-muted-foreground",children:"Redirecting…"}),b]})})]})})}ce.__docgenInfo={description:"",methods:[],displayName:"RegisterForm",props:{step:{required:!0,tsType:{name:"RegisterStep"},description:""},handle:{required:!0,tsType:{name:"string"},description:""},password:{required:!0,tsType:{name:"string"},description:""},confirm:{required:!0,tsType:{name:"string"},description:""},acknowledged:{required:!0,tsType:{name:"boolean"},description:""},error:{required:!0,tsType:{name:"string"},description:""},powStatus:{required:!0,tsType:{name:"PowStatus"},description:""},provingMs:{required:!0,tsType:{name:"number"},description:""},powHashes:{required:!0,tsType:{name:"number"},description:""},strength:{required:!0,tsType:{name:"PasswordStrength"},description:""},availability:{required:!0,tsType:{name:"HandleAvailability"},description:""},onHandleChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onSurpriseMe:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onPasswordChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onConfirmChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onAcknowledgedChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},onRegister:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const{fn:C}=__STORYBOOK_MODULE_TEST__,De={score:0,feedback:[],pwned:!1,loading:!1},He={status:"idle",message:""},W={status:"available",message:"✓ Available."},de={status:"taken",message:"✗ Taken."},Le={status:"invalid",message:"Handle must be 3–32 lowercase letters, digits, or hyphens, starting with a letter."},ze={status:"released",message:"✗ In cooldown until 2026-06-25.",availableAt:"2026-06-25T00:00:00Z"},Be={status:"checking",message:"Checking…"},rr={title:"Forms/RegisterForm",component:ce,args:{onHandleChange:C(),onSurpriseMe:C(),onPasswordChange:C(),onConfirmChange:C(),onAcknowledgedChange:C(),onRegister:C(),strength:De,availability:He,powStatus:"ready",provingMs:0,powHashes:0}},R={args:{step:"enter",handle:"",password:"",confirm:"",acknowledged:!1,error:""}},E={args:{step:"enter",handle:"alice-test",password:"",confirm:"",acknowledged:!1,error:"",availability:W}},P={args:{step:"enter",handle:"alice",password:"",confirm:"",acknowledged:!1,error:"",availability:de}},A={args:{step:"enter",handle:"Alice",password:"",confirm:"",acknowledged:!1,error:"",availability:Le}},_={args:{step:"enter",handle:"recent-user",password:"",confirm:"",acknowledged:!1,error:"",availability:ze}},I={args:{step:"enter",handle:"alice-test",password:"",confirm:"",acknowledged:!1,error:"",availability:Be}},O={args:{step:"enter",handle:"alice-test",password:"password",confirm:"password",acknowledged:!1,error:"",availability:W,strength:{score:0,feedback:["This is a top-10 common password."],pwned:!0,loading:!1}}},M={args:{step:"enter",handle:"alice-test",password:"Tr0ub4dour&3xpl0re!Quokka",confirm:"Tr0ub4dour&3xpl0re!Quokka",acknowledged:!0,error:"",availability:W,strength:{score:4,feedback:[],pwned:!1,loading:!1}}},q={args:{step:"deriving",handle:"alice-test",password:"Tr0ub4dour&3xpl0re!Quokka",confirm:"Tr0ub4dour&3xpl0re!Quokka",acknowledged:!0,error:""}},F={args:{step:"registering",handle:"alice-test",password:"",confirm:"",acknowledged:!0,error:""}},D={args:{step:"done",handle:"alice-test",password:"",confirm:"",acknowledged:!0,error:""}},H={args:{step:"enter",handle:"alice-test",password:"Tr0ub4dour&3xpl0re!Quokka",confirm:"Tr0ub4dour&3xpl0re!Quokka",acknowledged:!0,error:"That handle is already taken.",availability:de,strength:{score:4,feedback:[],pwned:!1,loading:!1}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'enter',
    handle: '',
    password: '',
    confirm: '',
    acknowledged: false,
    error: ''
  }
}`,...R.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'enter',
    handle: 'alice-test',
    password: '',
    confirm: '',
    acknowledged: false,
    error: '',
    availability: available
  }
}`,...E.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'enter',
    handle: 'alice',
    password: '',
    confirm: '',
    acknowledged: false,
    error: '',
    availability: taken
  }
}`,...P.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'enter',
    handle: 'Alice',
    password: '',
    confirm: '',
    acknowledged: false,
    error: '',
    availability: invalid
  }
}`,...A.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'enter',
    handle: 'recent-user',
    password: '',
    confirm: '',
    acknowledged: false,
    error: '',
    availability: released
  }
}`,..._.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'enter',
    handle: 'alice-test',
    password: '',
    confirm: '',
    acknowledged: false,
    error: '',
    availability: checking
  }
}`,...I.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'deriving',
    handle: 'alice-test',
    password: 'Tr0ub4dour&3xpl0re!Quokka',
    confirm: 'Tr0ub4dour&3xpl0re!Quokka',
    acknowledged: true,
    error: ''
  }
}`,...q.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'registering',
    handle: 'alice-test',
    password: '',
    confirm: '',
    acknowledged: true,
    error: ''
  }
}`,...F.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    step: 'done',
    handle: 'alice-test',
    password: '',
    confirm: '',
    acknowledged: true,
    error: ''
  }
}`,...D.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}};const nr=["Enter","HandleAvailable","HandleTaken","HandleInvalid","HandleInCooldown","HandleChecking","EnterWeak","EnterStrong","Deriving","Registering","Done","WithError"];export{q as Deriving,D as Done,R as Enter,M as EnterStrong,O as EnterWeak,E as HandleAvailable,I as HandleChecking,_ as HandleInCooldown,A as HandleInvalid,P as HandleTaken,F as Registering,H as WithError,nr as __namedExportsOrder,rr as default};
