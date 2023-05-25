"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@babel/runtime/helpers/extends"),t=require("three"),r=require("react"),a=require("@react-three/fiber"),n=require("react-merge-refs");function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function o(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var a=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,a.get?a:{enumerable:!0,get:function(){return e[r]}})}})),t.default=e,Object.freeze(t)}var s=i(e),u=o(t),c=o(r),l=i(n);const f=new u.Matrix4,d=new u.Ray,m=new u.Sphere,y=new u.Vector3;class p extends u.Group{constructor(){super(),this.size=0,this.color=new u.Color("white"),this.instance={current:void 0},this.instanceKey={current:void 0}}get geometry(){var e;return null==(e=this.instance.current)?void 0:e.geometry}raycast(e,t){var r,a;const n=this.instance.current;if(!n||!n.geometry)return;const i=n.userData.instances.indexOf(this.instanceKey);if(-1===i||i>n.geometry.drawRange.count)return;const o=null!==(r=null==(a=e.params.Points)?void 0:a.threshold)&&void 0!==r?r:1;if(m.set(this.getWorldPosition(y),o),!1===e.ray.intersectsSphere(m))return;f.copy(n.matrixWorld).invert(),d.copy(e.ray).applyMatrix4(f);const s=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=s*s,l=d.distanceSqToPoint(y);if(l<c){const r=new u.Vector3;d.closestPointToPoint(y,r),r.applyMatrix4(this.matrixWorld);const a=e.ray.origin.distanceTo(r);if(a<e.near||a>e.far)return;t.push({distance:a,distanceToRay:Math.sqrt(l),point:r,index:i,face:null,object:this})}}}let g,h;const b=c.createContext(null),x=new u.Matrix4,w=new u.Vector3,P=c.forwardRef((({children:e,range:t,limit:r=1e3,...n},i)=>{const o=c.useRef(null),[f,d]=c.useState([]),[[m,y,p]]=c.useState((()=>[new Float32Array(3*r),Float32Array.from({length:3*r},(()=>1)),Float32Array.from({length:r},(()=>1))]));c.useEffect((()=>{o.current.geometry.attributes.position.needsUpdate=!0})),a.useFrame((()=>{for(o.current.updateMatrix(),o.current.updateMatrixWorld(),x.copy(o.current.matrixWorld).invert(),o.current.geometry.drawRange.count=Math.min(r,void 0!==t?t:r,f.length),g=0;g<f.length;g++)h=f[g].current,h.getWorldPosition(w).applyMatrix4(x),w.toArray(m,3*g),o.current.geometry.attributes.position.needsUpdate=!0,h.matrixWorldNeedsUpdate=!0,h.color.toArray(y,3*g),o.current.geometry.attributes.color.needsUpdate=!0,p.set([h.size],g),o.current.geometry.attributes.size.needsUpdate=!0}));const P=c.useMemo((()=>({getParent:()=>o,subscribe:e=>(d((t=>[...t,e])),()=>d((t=>t.filter((t=>t.current!==e.current)))))})),[]);return c.createElement("points",s.default({userData:{instances:f},matrixAutoUpdate:!1,ref:l.default([i,o]),raycast:()=>null},n),c.createElement("bufferGeometry",null,c.createElement("bufferAttribute",{attach:"attributes-position",count:m.length/3,array:m,itemSize:3,usage:u.DynamicDrawUsage}),c.createElement("bufferAttribute",{attach:"attributes-color",count:y.length/3,array:y,itemSize:3,usage:u.DynamicDrawUsage}),c.createElement("bufferAttribute",{attach:"attributes-size",count:p.length,array:p,itemSize:1,usage:u.DynamicDrawUsage})),c.createElement(b.Provider,{value:P},e))})),v=c.forwardRef((({children:e,...t},r)=>{c.useMemo((()=>a.extend({PositionPoint:p})),[]);const n=c.useRef(),{subscribe:i,getParent:o}=c.useContext(b);return c.useLayoutEffect((()=>i(n)),[]),c.createElement("positionPoint",s.default({instance:o(),instanceKey:n,ref:l.default([r,n])},t),e)})),E=c.forwardRef((({children:e,positions:t,colors:r,sizes:n,stride:i=3,...o},f)=>{const d=c.useRef(null);return a.useFrame((()=>{const e=d.current.geometry.attributes;e.position.needsUpdate=!0,r&&(e.color.needsUpdate=!0),n&&(e.size.needsUpdate=!0)})),c.createElement("points",s.default({ref:l.default([f,d])},o),c.createElement("bufferGeometry",null,c.createElement("bufferAttribute",{attach:"attributes-position",count:t.length/i,array:t,itemSize:i,usage:u.DynamicDrawUsage}),r&&c.createElement("bufferAttribute",{attach:"attributes-color",count:r.length/i,array:r,itemSize:3,usage:u.DynamicDrawUsage}),n&&c.createElement("bufferAttribute",{attach:"attributes-size",count:n.length/i,array:n,itemSize:1,usage:u.DynamicDrawUsage})),e)})),z=c.forwardRef(((e,t)=>e.positions instanceof Float32Array?c.createElement(E,s.default({},e,{ref:t})):c.createElement(P,s.default({},e,{ref:t}))));exports.Point=v,exports.Points=z,exports.PointsBuffer=E,exports.PositionPoint=p;