"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@react-three/fiber"),r=require("three"),n=require("three-stdlib"),s=require("../helpers/environment-assets.cjs.js");exports.useEnvironment=function({files:t=["/px.png","/nx.png","/py.png","/ny.png","/pz.png","/nz.png"],path:i="",preset:p,encoding:a,extensions:o}={}){if(p){if(!(p in s.presetsObj))throw new Error("Preset must be one of: "+Object.keys(s.presetsObj).join(", "));t=s.presetsObj[p],i="https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/hdris/"}const c=Array.isArray(t),u=c?r.CubeTextureLoader:n.RGBELoader,g=e.useLoader(u,c?[t]:t,(e=>{e.setPath(i),o&&o(e)})),d=c?g[0]:g;return d.mapping=c?r.CubeReflectionMapping:r.EquirectangularReflectionMapping,d.encoding=(null!=a?a:c)?r.sRGBEncoding:r.LinearEncoding,d};