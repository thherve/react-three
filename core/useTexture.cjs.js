"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("three"),r=require("@react-three/fiber"),t=require("react");const u=e=>e===Object(e)&&!Array.isArray(e)&&"function"!=typeof e;function a(a,s){const o=r.useThree((e=>e.gl)),c=r.useLoader(e.TextureLoader,u(a)?Object.values(a):a);if(t.useLayoutEffect((()=>{null==s||s(c)}),[s]),t.useEffect((()=>{(Array.isArray(c)?c:[c]).forEach(o.initTexture)}),[o,c]),u(a)){const e=Object.keys(a),r={};return e.forEach((t=>Object.assign(r,{[t]:c[e.indexOf(t)]}))),r}return c}a.preload=t=>r.useLoader.preload(e.TextureLoader,t),a.clear=t=>r.useLoader.clear(e.TextureLoader,t),exports.IsObject=u,exports.useTexture=a;