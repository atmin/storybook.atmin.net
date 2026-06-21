import{j as e,b as t,P as n}from"./iframe-Chxscvv8.js";function o({label:r,destructive:s=!1}){return e.jsxs(t,{className:"py-10 text-center",children:[e.jsx("div",{className:"mb-4 flex justify-center",children:e.jsx(n,{colors:s?{iconIos:"text-red-500",iconMaterial:"text-red-500"}:void 0})}),e.jsx("p",{className:"text-sm font-medium",children:r})]})}o.__docgenInfo={description:`Full-width centred cover shown while a long-running on-device crypto step is
in progress (Argon2id derivation, key rotation, account teardown). Konsta
\`Preloader\` is the single "work in progress" spinner across the app (ADR-0023
T3) — it replaced the bespoke three-pulsing-dots so every such moment looks
the same on iOS and Material.`,methods:[],displayName:"StatusCover",props:{label:{required:!0,tsType:{name:"string"},description:`What's happening — e.g. "Deriving your keys…".`},destructive:{required:!1,tsType:{name:"boolean"},description:`Tints the spinner red for destructive operations (account deletion).
Default is the primary-coloured spinner used by every other long-running
crypto step (register / login derive, password change).`,defaultValue:{value:"false",computed:!1}}}};export{o as S};
