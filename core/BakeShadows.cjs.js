"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),a=require("@react-three/fiber");exports.BakeShadows=function(){const t=a.useThree((e=>e.gl));return e.useEffect((()=>(t.shadowMap.autoUpdate=!1,t.shadowMap.needsUpdate=!0,()=>{t.shadowMap.autoUpdate=t.shadowMap.needsUpdate=!0})),[t.shadowMap]),null};
