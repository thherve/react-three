"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("three");class t extends e.MeshStandardMaterial{constructor(e={}){super(e),this._tDepth={value:null},this._distortionMap={value:null},this._tDiffuse={value:null},this._tDiffuseBlur={value:null},this._textureMatrix={value:null},this._hasBlur={value:!1},this._mirror={value:0},this._mixBlur={value:0},this._blurStrength={value:.5},this._minDepthThreshold={value:.9},this._maxDepthThreshold={value:1},this._depthScale={value:0},this._depthToBlurRatioBias={value:.25},this._distortion={value:1},this._mixContrast={value:1},this.setValues(e)}onBeforeCompile(e){var t;null!=(t=e.defines)&&t.USE_UV||(e.defines.USE_UV=""),e.uniforms.hasBlur=this._hasBlur,e.uniforms.tDiffuse=this._tDiffuse,e.uniforms.tDepth=this._tDepth,e.uniforms.distortionMap=this._distortionMap,e.uniforms.tDiffuseBlur=this._tDiffuseBlur,e.uniforms.textureMatrix=this._textureMatrix,e.uniforms.mirror=this._mirror,e.uniforms.mixBlur=this._mixBlur,e.uniforms.mixStrength=this._blurStrength,e.uniforms.minDepthThreshold=this._minDepthThreshold,e.uniforms.maxDepthThreshold=this._maxDepthThreshold,e.uniforms.depthScale=this._depthScale,e.uniforms.depthToBlurRatioBias=this._depthToBlurRatioBias,e.uniforms.distortion=this._distortion,e.uniforms.mixContrast=this._mixContrast,e.vertexShader=`\n        uniform mat4 textureMatrix;\n        varying vec4 my_vUv;\n      ${e.vertexShader}`,e.vertexShader=e.vertexShader.replace("#include <project_vertex>","#include <project_vertex>\n        my_vUv = textureMatrix * vec4( position, 1.0 );\n        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );"),e.fragmentShader=`\n        uniform sampler2D tDiffuse;\n        uniform sampler2D tDiffuseBlur;\n        uniform sampler2D tDepth;\n        uniform sampler2D distortionMap;\n        uniform float distortion;\n        uniform float cameraNear;\n\t\t\t  uniform float cameraFar;\n        uniform bool hasBlur;\n        uniform float mixBlur;\n        uniform float mirror;\n        uniform float mixStrength;\n        uniform float minDepthThreshold;\n        uniform float maxDepthThreshold;\n        uniform float mixContrast;\n        uniform float depthScale;\n        uniform float depthToBlurRatioBias;\n        varying vec4 my_vUv;\n        ${e.fragmentShader}`,e.fragmentShader=e.fragmentShader.replace("#include <emissivemap_fragment>","#include <emissivemap_fragment>\n\n      float distortionFactor = 0.0;\n      #ifdef USE_DISTORTION\n        distortionFactor = texture2D(distortionMap, vUv).r * distortion;\n      #endif\n\n      vec4 new_vUv = my_vUv;\n      new_vUv.x += distortionFactor;\n      new_vUv.y += distortionFactor;\n\n      vec4 base = texture2DProj(tDiffuse, new_vUv);\n      vec4 blur = texture2DProj(tDiffuseBlur, new_vUv);\n\n      vec4 merge = base;\n\n      #ifdef USE_NORMALMAP\n        vec2 normal_uv = vec2(0.0);\n        vec4 normalColor = texture2D(normalMap, vUv * normalScale);\n        vec3 my_normal = normalize( vec3( normalColor.r * 2.0 - 1.0, normalColor.b,  normalColor.g * 2.0 - 1.0 ) );\n        vec3 coord = new_vUv.xyz / new_vUv.w;\n        normal_uv = coord.xy + coord.z * my_normal.xz * 0.05;\n        vec4 base_normal = texture2D(tDiffuse, normal_uv);\n        vec4 blur_normal = texture2D(tDiffuseBlur, normal_uv);\n        merge = base_normal;\n        blur = blur_normal;\n      #endif\n\n      float depthFactor = 0.0001;\n      float blurFactor = 0.0;\n\n      #ifdef USE_DEPTH\n        vec4 depth = texture2DProj(tDepth, new_vUv);\n        depthFactor = smoothstep(minDepthThreshold, maxDepthThreshold, 1.0-(depth.r * depth.a));\n        depthFactor *= depthScale;\n        depthFactor = max(0.0001, min(1.0, depthFactor));\n\n        #ifdef USE_BLUR\n          blur = blur * min(1.0, depthFactor + depthToBlurRatioBias);\n          merge = merge * min(1.0, depthFactor + 0.5);\n        #else\n          merge = merge * depthFactor;\n        #endif\n\n      #endif\n\n      float reflectorRoughnessFactor = roughness;\n      #ifdef USE_ROUGHNESSMAP\n        vec4 reflectorTexelRoughness = texture2D( roughnessMap, vUv );\n        reflectorRoughnessFactor *= reflectorTexelRoughness.g;\n      #endif\n\n      #ifdef USE_BLUR\n        blurFactor = min(1.0, mixBlur * reflectorRoughnessFactor);\n        merge = mix(merge, blur, blurFactor);\n      #endif\n\n      vec4 newMerge = vec4(0.0, 0.0, 0.0, 1.0);\n      newMerge.r = (merge.r - 0.5) * mixContrast + 0.5;\n      newMerge.g = (merge.g - 0.5) * mixContrast + 0.5;\n      newMerge.b = (merge.b - 0.5) * mixContrast + 0.5;\n\n      diffuseColor.rgb = diffuseColor.rgb * ((1.0 - min(1.0, mirror)) + newMerge.rgb * mixStrength);\n      ")}get tDiffuse(){return this._tDiffuse.value}set tDiffuse(e){this._tDiffuse.value=e}get tDepth(){return this._tDepth.value}set tDepth(e){this._tDepth.value=e}get distortionMap(){return this._distortionMap.value}set distortionMap(e){this._distortionMap.value=e}get tDiffuseBlur(){return this._tDiffuseBlur.value}set tDiffuseBlur(e){this._tDiffuseBlur.value=e}get textureMatrix(){return this._textureMatrix.value}set textureMatrix(e){this._textureMatrix.value=e}get hasBlur(){return this._hasBlur.value}set hasBlur(e){this._hasBlur.value=e}get mirror(){return this._mirror.value}set mirror(e){this._mirror.value=e}get mixBlur(){return this._mixBlur.value}set mixBlur(e){this._mixBlur.value=e}get mixStrength(){return this._blurStrength.value}set mixStrength(e){this._blurStrength.value=e}get minDepthThreshold(){return this._minDepthThreshold.value}set minDepthThreshold(e){this._minDepthThreshold.value=e}get maxDepthThreshold(){return this._maxDepthThreshold.value}set maxDepthThreshold(e){this._maxDepthThreshold.value=e}get depthScale(){return this._depthScale.value}set depthScale(e){this._depthScale.value=e}get depthToBlurRatioBias(){return this._depthToBlurRatioBias.value}set depthToBlurRatioBias(e){this._depthToBlurRatioBias.value=e}get distortion(){return this._distortion.value}set distortion(e){this._distortion.value=e}get mixContrast(){return this._mixContrast.value}set mixContrast(e){this._mixContrast.value=e}}exports.MeshReflectorMaterial=t;
