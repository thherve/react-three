"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@babel/runtime/helpers/extends"),r=require("react"),t=require("three");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function u(e){if(e&&e.__esModule)return e;var r=Object.create(null);return e&&Object.keys(e).forEach((function(t){if("default"!==t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})}})),r.default=e,Object.freeze(r)}var c=n(e),a=u(r),o=u(t);const l=a.forwardRef((({userData:e,children:r,geometry:t,threshold:n=15,color:u="black",...l},s)=>{const f=a.useRef(null);return a.useLayoutEffect((()=>{const e=f.current.parent;if(e){const r=t||e.geometry;r===f.current.userData.currentGeom&&n===f.current.userData.currentThreshold||(f.current.userData.currentGeom=r,f.current.userData.currentThreshold=n,f.current.geometry=new o.EdgesGeometry(r,n))}})),a.useImperativeHandle(s,(()=>f.current)),a.createElement("lineSegments",c.default({ref:f,raycast:()=>null},l),r||a.createElement("lineBasicMaterial",{color:u}))}));exports.Edges=l;
