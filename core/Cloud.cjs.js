"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),r=require("@react-three/fiber"),t=require("./Billboard.cjs.js"),a=require("./shapes.cjs.js"),n=require("./useTexture.cjs.js");function s(e){if(e&&e.__esModule)return e;var r=Object.create(null);return e&&Object.keys(e).forEach((function(t){if("default"!==t){var a=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,a.get?a:{enumerable:!0,get:function(){return e[t]}})}})),r.default=e,Object.freeze(r)}require("@babel/runtime/helpers/extends"),require("react-merge-refs"),require("three");var c=s(e);exports.Cloud=function({opacity:e=.5,speed:s=.4,width:o=10,depth:i=1.5,segments:u=20,texture:l="https://rawcdn.githack.com/pmndrs/drei-assets/9225a9f1fbd449d9411125c2f419b843d0308c9f/cloud.png",color:d="#ffffff",depthTest:f=!0,...h}){const p=c.useRef(),m=n.useTexture(l),b=c.useMemo((()=>[...new Array(u)].map(((e,r)=>({x:o/2-Math.random()*o,y:o/2-Math.random()*o,scale:.4+Math.sin((r+1)/u*Math.PI)*(10*(.2+Math.random())),density:Math.max(.2,Math.random()),rotation:Math.max(.002,.005*Math.random())*s})))),[o,u,s]);return r.useFrame((e=>{var r;return null==(r=p.current)?void 0:r.children.forEach(((r,t)=>{r.children[0].rotation.z+=b[t].rotation,r.children[0].scale.setScalar(b[t].scale+(1+Math.sin(e.clock.getElapsedTime()/10))/2*t/10)}))})),c.createElement("group",h,c.createElement("group",{position:[0,0,u/2*i],ref:p},b.map((({x:r,y:n,scale:s,density:o},u)=>c.createElement(t.Billboard,{key:u,position:[r,n,-u*i]},c.createElement(a.Plane,{scale:s,rotation:[0,0,0]},c.createElement("meshStandardMaterial",{map:m,transparent:!0,opacity:s/6*o*e,depthTest:f,color:d})))))))};