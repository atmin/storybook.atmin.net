import{j as e}from"./iframe-Ked3bIwF.js";import{c as i}from"./utils-C72_W1jc.js";import"./preload-helper-PPVm8Dsz.js";function d({topBar:a,children:s,className:m,fullHeight:n}){return e.jsxs("div",{className:i("bg-background",n?"h-dvh overflow-hidden":"min-h-screen",m),children:[a&&e.jsx("header",{className:"fixed top-0 right-0 left-0 z-10 bg-background/80 backdrop-blur-md",children:e.jsx("div",{className:"mx-auto flex h-14 w-full max-w-2xl items-center px-4",children:a})}),n?e.jsx("div",{className:"flex h-full flex-col overflow-hidden",children:s}):s]})}d.__docgenInfo={description:"",methods:[],displayName:"Layout",props:{topBar:{required:!1,tsType:{name:"ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},fullHeight:{required:!1,tsType:{name:"boolean"},description:"Lock to viewport height with a docked bottom area (chat view)."}}};const h={title:"Shell/Layout",component:d},c=()=>e.jsxs("div",{className:"flex w-full items-center justify-between",children:[e.jsx("span",{className:"font-mono font-bold",children:"atmin"}),e.jsx("span",{className:"text-xs text-muted-foreground",children:"Settings"})]}),l=()=>e.jsx("div",{className:"mx-auto max-w-md p-8 font-mono text-sm",children:e.jsx("p",{className:"text-muted-foreground",children:"Page content goes here."})}),r={args:{topBar:e.jsx(c,{}),children:e.jsx(l,{})}},o={args:{children:e.jsx(l,{})}},t={args:{fullHeight:!0,topBar:e.jsx(c,{}),children:e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex-1 overflow-y-auto p-4 font-mono text-sm",children:e.jsx("p",{className:"text-muted-foreground",children:"Scrollable messages area"})}),e.jsx("div",{className:"border-t border-border bg-background px-4 py-3 font-mono text-sm text-muted-foreground",children:"Docked input bar"})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    topBar: <SampleTopBar />,
    children: <SampleContent />
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: <SampleContent />
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    fullHeight: true,
    topBar: <SampleTopBar />,
    children: <>
                <div className="flex-1 overflow-y-auto p-4 font-mono text-sm">
                    <p className="text-muted-foreground">
                        Scrollable messages area
                    </p>
                </div>
                <div className="border-t border-border bg-background px-4 py-3 font-mono text-sm text-muted-foreground">
                    Docked input bar
                </div>
            </>
  }
}`,...t.parameters?.docs?.source}}};const f=["WithTopBar","NoTopBar","FullHeight"];export{t as FullHeight,o as NoTopBar,r as WithTopBar,f as __namedExportsOrder,h as default};
