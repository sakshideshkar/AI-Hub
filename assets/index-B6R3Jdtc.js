var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function te(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ne(e,t){return te(e.type,t,e.props)}function T(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function re(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ie=/\/+/g;function ae(e,t){return typeof e==`object`&&e&&e.key!=null?re(``+e.key):t.toString(36)}function oe(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function se(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,se(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ae(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(ie,`$&/`)+`/`),se(o,r,i,``,function(e){return e})):o!=null&&(T(o)&&(o=ne(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ie,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ae(a,u),c+=se(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ae(a,u++),c+=se(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return se(oe(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ce(e,t,n){if(e==null)return e;var r=[],i=0;return se(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function le(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var E=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},D={map:ce,forEach:function(e,t,n){ce(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ce(e,function(){t++}),t},toArray:function(e){return ce(e,function(e){return e})||[]},only:function(e){if(!T(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=D,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ee.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return te(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ee.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return te(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=T,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:le}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,E)}catch(e){E(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.8`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,T());else{var t=n(l);t!==null&&ae(x,t.startTime-e)}}}var S=!1,C=-1,w=5,ee=-1;function te(){return g?!0:!(e.unstable_now()-ee<w)}function ne(){if(g=!1,S){var t=e.unstable_now();ee=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&te());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ae(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}}}finally{i?T():S=!1}}}var T;if(typeof y==`function`)T=function(){y(ne)};else if(typeof MessageChannel<`u`){var re=new MessageChannel,ie=re.port2;re.port1.onmessage=ne,T=function(){ie.postMessage(null)}}else T=function(){_(ne,0)};function ae(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ae(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,T()))),r},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.8`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),ee=Symbol.for(`react.suspense`),te=Symbol.for(`react.suspense_list`),ne=Symbol.for(`react.memo`),T=Symbol.for(`react.lazy`),re=Symbol.for(`react.activity`),ie=Symbol.for(`react.memo_cache_sentinel`),ae=Symbol.iterator;function oe(e){return typeof e!=`object`||!e?null:(e=ae&&e[ae]||e[`@@iterator`],typeof e==`function`?e:null)}var se=Symbol.for(`react.client.reference`);function ce(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===se?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case ee:return`Suspense`;case te:return`SuspenseList`;case re:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ne:return t=e.displayName||null,t===null?ce(e.type)||`Memo`:t;case T:t=e._payload,e=e._init;try{return ce(e(t))}catch{}}return null}var le=Array.isArray,E=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},de=[],fe=-1;function pe(e){return{current:e}}function me(e){0>fe||(e.current=de[fe],de[fe]=null,fe--)}function O(e,t){fe++,de[fe]=e.current,e.current=t}var he=pe(null),ge=pe(null),_e=pe(null),ve=pe(null);function ye(e,t){switch(O(_e,t),O(ge,e),O(he,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}me(he),O(he,e)}function be(){me(he),me(ge),me(_e)}function xe(e){e.memoizedState!==null&&O(ve,e);var t=he.current,n=Hd(t,e.type);t!==n&&(O(ge,e),O(he,n))}function Se(e){ge.current===e&&(me(he),me(ge)),ve.current===e&&(me(ve),Qf._currentValue=ue)}var Ce,we;function Te(e){if(Ce===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Ce=t&&t[1]||``,we=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Ce+e+we}var Ee=!1;function De(e,t){if(!e||Ee)return``;Ee=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ee=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Te(n):``}function Oe(e,t){switch(e.tag){case 26:case 27:case 5:return Te(e.type);case 16:return Te(`Lazy`);case 13:return e.child!==t&&t!==null?Te(`Suspense Fallback`):Te(`Suspense`);case 19:return Te(`SuspenseList`);case 0:case 15:return De(e.type,!1);case 11:return De(e.type.render,!1);case 1:return De(e.type,!0);case 31:return Te(`Activity`);default:return``}}function ke(e){try{var t=``,n=null;do t+=Oe(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ae=Object.prototype.hasOwnProperty,je=t.unstable_scheduleCallback,Me=t.unstable_cancelCallback,Ne=t.unstable_shouldYield,Pe=t.unstable_requestPaint,Fe=t.unstable_now,Ie=t.unstable_getCurrentPriorityLevel,Le=t.unstable_ImmediatePriority,Re=t.unstable_UserBlockingPriority,ze=t.unstable_NormalPriority,Be=t.unstable_LowPriority,Ve=t.unstable_IdlePriority,He=t.log,Ue=t.unstable_setDisableYieldValue,We=null,Ge=null;function Ke(e){if(typeof He==`function`&&Ue(e),Ge&&typeof Ge.setStrictMode==`function`)try{Ge.setStrictMode(We,e)}catch{}}var qe=Math.clz32?Math.clz32:Xe,Je=Math.log,Ye=Math.LN2;function Xe(e){return e>>>=0,e===0?32:31-(Je(e)/Ye|0)|0}var Ze=256,Qe=262144,$e=4194304;function et(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function tt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=et(n))):i=et(o):i=et(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=et(n))):i=et(o)):i=et(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function nt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function rt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function it(){var e=$e;return $e<<=1,!($e&62914560)&&($e=4194304),e}function at(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ot(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function st(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-qe(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&ct(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function ct(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-qe(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function lt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-qe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ut(e,t){var n=t&-t;return n=n&42?1:dt(n),(n&(e.suspendedLanes|t))===0?n:0}function dt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ft(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function pt(){var e=D.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function mt(e,t){var n=D.p;try{return D.p=e,t()}finally{D.p=n}}var ht=Math.random().toString(36).slice(2),gt=`__reactFiber$`+ht,k=`__reactProps$`+ht,_t=`__reactContainer$`+ht,vt=`__reactEvents$`+ht,yt=`__reactListeners$`+ht,bt=`__reactHandles$`+ht,xt=`__reactResources$`+ht,St=`__reactMarker$`+ht;function Ct(e){delete e[gt],delete e[k],delete e[vt],delete e[yt],delete e[bt]}function wt(e){var t=e[gt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_t]||n[gt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[gt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Tt(e){if(e=e[gt]||e[_t]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Et(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Dt(e){var t=e[xt];return t||=e[xt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function A(e){e[St]=!0}var Ot=new Set,kt={};function At(e,t){jt(e,t),jt(e+`Capture`,t)}function jt(e,t){for(kt[e]=t,e=0;e<t.length;e++)Ot.add(t[e])}var Mt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Nt={},Pt={};function Ft(e){return Ae.call(Pt,e)?!0:Ae.call(Nt,e)?!1:Mt.test(e)?Pt[e]=!0:(Nt[e]=!0,!1)}function It(e,t,n){if(Ft(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}}function Lt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Rt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function j(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function zt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Bt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vt(e){if(!e._valueTracker){var t=zt(e)?`checked`:`value`;e._valueTracker=Bt(e,t,``+e[t])}}function Ht(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=zt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function Ut(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Wt=/[\n"\\]/g;function Gt(e){return e.replace(Wt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Kt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+j(t)):e.value!==``+j(t)&&(e.value=``+j(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Jt(e,o,j(n)):Jt(e,o,j(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+j(s):e.removeAttribute(`name`)}function qt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Vt(e);return}n=n==null?``:``+j(n),t=t==null?n:``+j(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Vt(e)}function Jt(e,t,n){t===`number`&&Ut(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Yt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+j(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Xt(e,t,n){if(t!=null&&(t=``+j(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+j(n)}function Zt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(le(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=j(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Vt(e)}function Qt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $t=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function en(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||$t.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function tn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&en(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&en(e,o,t[o])}function nn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var rn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),an=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function on(e){return an.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function sn(){}var cn=null;function ln(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var un=null,dn=null;function fn(e){var t=Tt(e);if(t&&(e=t.stateNode)){var n=e[k]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Kt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Gt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[k]||null;if(!a)throw Error(i(90));Kt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ht(r)}break a;case`textarea`:Xt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Yt(e,!!n.multiple,t,!1)}}}var pn=!1;function mn(e,t,n){if(pn)return e(t,n);pn=!0;try{return e(t)}finally{if(pn=!1,(un!==null||dn!==null)&&(bu(),un&&(t=un,e=dn,dn=un=null,fn(t),e)))for(t=0;t<e.length;t++)fn(e[t])}}function hn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[k]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var gn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),_n=!1;if(gn)try{var vn={};Object.defineProperty(vn,"passive",{get:function(){_n=!0}}),window.addEventListener(`test`,vn,vn),window.removeEventListener(`test`,vn,vn)}catch{_n=!1}var yn=null,bn=null,xn=null;function Sn(){if(xn)return xn;var e,t=bn,n=t.length,r,i=`value`in yn?yn.value:yn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return xn=i.slice(e,1<r?1-r:void 0)}function Cn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wn(){return!0}function Tn(){return!1}function En(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?wn:Tn,this.isPropagationStopped=Tn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=wn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=wn)},persist:function(){},isPersistent:wn}),t}var Dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},M=En(Dn),On=h({},Dn,{view:0,detail:0}),kn=En(On),An,jn,Mn,Nn=h({},On,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Mn&&(Mn&&e.type===`mousemove`?(An=e.screenX-Mn.screenX,jn=e.screenY-Mn.screenY):jn=An=0,Mn=e),An)},movementY:function(e){return`movementY`in e?e.movementY:jn}}),Pn=En(Nn),Fn=En(h({},Nn,{dataTransfer:0})),In=En(h({},On,{relatedTarget:0})),Ln=En(h({},Dn,{animationName:0,elapsedTime:0,pseudoElement:0})),Rn=En(h({},Dn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),zn=En(h({},Dn,{data:0})),Bn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},N={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Vn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function P(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Vn[e])?!!t[e]:!1}function Hn(){return P}var Un=En(h({},On,{key:function(e){if(e.key){var t=Bn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Cn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?N[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hn,charCode:function(e){return e.type===`keypress`?Cn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Cn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Wn=En(h({},Nn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Gn=En(h({},On,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hn})),Kn=En(h({},Dn,{propertyName:0,elapsedTime:0,pseudoElement:0})),qn=En(h({},Nn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Jn=En(h({},Dn,{newState:0,oldState:0})),Yn=[9,13,27,32],Xn=gn&&`CompositionEvent`in window,Zn=null;gn&&`documentMode`in document&&(Zn=document.documentMode);var Qn=gn&&`TextEvent`in window&&!Zn,$n=gn&&(!Xn||Zn&&8<Zn&&11>=Zn),er=` `,tr=!1;function nr(e,t){switch(e){case`keyup`:return Yn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function F(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var rr=!1;function ir(e,t){switch(e){case`compositionend`:return F(t);case`keypress`:return t.which===32?(tr=!0,er):null;case`textInput`:return e=t.data,e===er&&tr?null:e;default:return null}}function ar(e,t){if(rr)return e===`compositionend`||!Xn&&nr(e,t)?(e=Sn(),xn=bn=yn=null,rr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return $n&&t.locale!==`ko`?null:t.data;default:return null}}var or={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!or[e.type]:t===`textarea`}function cr(e,t,n,r){un?dn?dn.push(r):dn=[r]:un=r,t=Ed(t,`onChange`),0<t.length&&(n=new M(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var lr=null,ur=null;function dr(e){yd(e,0)}function fr(e){if(Ht(Et(e)))return e}function pr(e,t){if(e===`change`)return t}var mr=!1;if(gn){var hr;if(gn){var gr=`oninput`in document;if(!gr){var _r=document.createElement(`div`);_r.setAttribute(`oninput`,`return;`),gr=typeof _r.oninput==`function`}hr=gr}else hr=!1;mr=hr&&(!document.documentMode||9<document.documentMode)}function vr(){lr&&(lr.detachEvent(`onpropertychange`,yr),ur=lr=null)}function yr(e){if(e.propertyName===`value`&&fr(ur)){var t=[];cr(t,ur,e,ln(e)),mn(dr,t)}}function br(e,t,n){e===`focusin`?(vr(),lr=t,ur=n,lr.attachEvent(`onpropertychange`,yr)):e===`focusout`&&vr()}function xr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return fr(ur)}function Sr(e,t){if(e===`click`)return fr(t)}function Cr(e,t){if(e===`input`||e===`change`)return fr(t)}function wr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Tr=typeof Object.is==`function`?Object.is:wr;function Er(e,t){if(Tr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ae.call(t,i)||!Tr(e[i],t[i]))return!1}return!0}function Dr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Or(e,t){var n=Dr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Dr(n)}}function kr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?kr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ar(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ut(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ut(e.document)}return t}function jr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Mr=gn&&`documentMode`in document&&11>=document.documentMode,Nr=null,Pr=null,Fr=null,Ir=!1;function Lr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ir||Nr==null||Nr!==Ut(r)||(r=Nr,`selectionStart`in r&&jr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Fr&&Er(Fr,r)||(Fr=r,r=Ed(Pr,`onSelect`),0<r.length&&(t=new M(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Nr)))}function Rr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var zr={animationend:Rr(`Animation`,`AnimationEnd`),animationiteration:Rr(`Animation`,`AnimationIteration`),animationstart:Rr(`Animation`,`AnimationStart`),transitionrun:Rr(`Transition`,`TransitionRun`),transitionstart:Rr(`Transition`,`TransitionStart`),transitioncancel:Rr(`Transition`,`TransitionCancel`),transitionend:Rr(`Transition`,`TransitionEnd`)},Br={},Vr={};gn&&(Vr=document.createElement(`div`).style,`AnimationEvent`in window||(delete zr.animationend.animation,delete zr.animationiteration.animation,delete zr.animationstart.animation),`TransitionEvent`in window||delete zr.transitionend.transition);function Hr(e){if(Br[e])return Br[e];if(!zr[e])return e;var t=zr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Vr)return Br[e]=t[n];return e}var Ur=Hr(`animationend`),Wr=Hr(`animationiteration`),Gr=Hr(`animationstart`),Kr=Hr(`transitionrun`),qr=Hr(`transitionstart`),Jr=Hr(`transitioncancel`),Yr=Hr(`transitionend`),Xr=new Map,Zr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Zr.push(`scrollEnd`);function Qr(e,t){Xr.set(e,t),At(t,[e])}var $r=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ei=[],ti=0,ni=0;function ri(){for(var e=ti,t=ni=ti=0;t<e;){var n=ei[t];ei[t++]=null;var r=ei[t];ei[t++]=null;var i=ei[t];ei[t++]=null;var a=ei[t];if(ei[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&si(n,i,a)}}function ii(e,t,n,r){ei[ti++]=e,ei[ti++]=t,ei[ti++]=n,ei[ti++]=r,ni|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ai(e,t,n,r){return ii(e,t,n,r),ci(e)}function oi(e,t){return ii(e,null,null,t),ci(e)}function si(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-qe(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ci(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var li={};function ui(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(e,t,n,r){return new ui(e,t,n,r)}function fi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pi(e,t){var n=e.alternate;return n===null?(n=di(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function mi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function hi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)fi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,he.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case re:return e=di(31,n,t,a),e.elementType=re,e.lanes=o,e;case y:return gi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=di(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case ee:return e=di(13,n,t,a),e.elementType=ee,e.lanes=o,e;case te:return e=di(19,n,t,a),e.elementType=te,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case ne:s=14;break a;case T:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=di(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function gi(e,t,n,r){return e=di(7,e,r,t),e.lanes=n,e}function _i(e,t,n){return e=di(6,e,null,t),e.lanes=n,e}function vi(e){var t=di(18,null,null,0);return t.stateNode=e,t}function yi(e,t,n){return t=di(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var bi=new WeakMap;function xi(e,t){if(typeof e==`object`&&e){var n=bi.get(e);return n===void 0?(t={value:e,source:t,stack:ke(t)},bi.set(e,t),t):n}return{value:e,source:t,stack:ke(t)}}var Si=[],Ci=0,wi=null,Ti=0,Ei=[],Di=0,Oi=null,ki=1,Ai=``;function ji(e,t){Si[Ci++]=Ti,Si[Ci++]=wi,wi=e,Ti=t}function Mi(e,t,n){Ei[Di++]=ki,Ei[Di++]=Ai,Ei[Di++]=Oi,Oi=e;var r=ki;e=Ai;var i=32-qe(r)-1;r&=~(1<<i),n+=1;var a=32-qe(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ki=1<<32-qe(t)+i|n<<i|r,Ai=a+e}else ki=1<<a|n<<i|r,Ai=e}function Ni(e){e.return!==null&&(ji(e,1),Mi(e,1,0))}function Pi(e){for(;e===wi;)wi=Si[--Ci],Si[Ci]=null,Ti=Si[--Ci],Si[Ci]=null;for(;e===Oi;)Oi=Ei[--Di],Ei[Di]=null,Ai=Ei[--Di],Ei[Di]=null,ki=Ei[--Di],Ei[Di]=null}function Fi(e,t){Ei[Di++]=ki,Ei[Di++]=Ai,Ei[Di++]=Oi,ki=t.id,Ai=t.overflow,Oi=e}var Ii=null,I=null,L=!1,Li=null,Ri=!1,zi=Error(i(519));function Bi(e){throw Ki(xi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),zi}function Vi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[gt]=e,t[k]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),qt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Zt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=sn),t=!0):t=!1,t||Bi(e,!0)}function Hi(e){for(Ii=e.return;Ii;)switch(Ii.tag){case 5:case 31:case 13:Ri=!1;return;case 27:case 3:Ri=!0;return;default:Ii=Ii.return}}function Ui(e){if(e!==Ii)return!1;if(!L)return Hi(e),L=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||Ud(e.type,e.memoizedProps)),n=!n),n&&I&&Bi(e),Hi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));I=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));I=uf(e)}else t===27?(t=I,Zd(e.type)?(e=lf,lf=null,I=e):I=t):I=Ii?cf(e.stateNode.nextSibling):null;return!0}function Wi(){I=Ii=null,L=!1}function Gi(){var e=Li;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Li=null),e}function Ki(e){Li===null?Li=[e]:Li.push(e)}var qi=pe(null),Ji=null,Yi=null;function Xi(e,t,n){O(qi,t._currentValue),t._currentValue=n}function Zi(e){e._currentValue=qi.current,me(qi)}function Qi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function $i(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Qi(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Qi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ea(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Tr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ve.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&$i(t,e,n,r),t.flags|=262144}function ta(e){for(e=e.firstContext;e!==null;){if(!Tr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function na(e){Ji=e,Yi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ra(e){return aa(Ji,e)}function ia(e,t){return Ji===null&&na(e),aa(e,t)}function aa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Yi===null){if(e===null)throw Error(i(308));Yi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Yi=Yi.next=t;return n}var oa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},sa=t.unstable_scheduleCallback,ca=t.unstable_NormalPriority,la={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ua(){return{controller:new oa,data:new Map,refCount:0}}function da(e){e.refCount--,e.refCount===0&&sa(ca,function(){e.controller.abort()})}var fa=null,pa=0,ma=0,ha=null;function ga(e,t){if(fa===null){var n=fa=[];pa=0,ma=dd(),ha={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return pa++,t.then(_a,_a),t}function _a(){if(--pa===0&&fa!==null){ha!==null&&(ha.status=`fulfilled`);var e=fa;fa=null,ma=0,ha=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function va(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ya=E.S;E.S=function(e,t){eu=Fe(),typeof t==`object`&&t&&typeof t.then==`function`&&ga(e,t),ya!==null&&ya(e,t)};var ba=pe(null);function xa(){var e=ba.current;return e===null?K.pooledCache:e}function Sa(e,t){t===null?O(ba,ba.current):O(ba,t.pool)}function Ca(){var e=xa();return e===null?null:{parent:la._currentValue,pool:e}}var wa=Error(i(460)),Ta=Error(i(474)),Ea=Error(i(542)),Da={then:function(){}};function Oa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function ka(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(sn,sn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Na(e),e;default:if(typeof t.status==`string`)t.then(sn,sn);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Na(e),e}throw ja=t,wa}}function Aa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(ja=e,wa):e}}var ja=null;function Ma(){if(ja===null)throw Error(i(459));var e=ja;return ja=null,e}function Na(e){if(e===wa||e===Ea)throw Error(i(483))}var Pa=null,Fa=0;function Ia(e){var t=Fa;return Fa+=1,Pa===null&&(Pa=[]),ka(Pa,e,t)}function La(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ra(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function za(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=pi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=_i(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===T&&Aa(i)===t.type)?(t=a(t,n.props),La(t,n),t.return=e,t):(t=hi(n.type,n.key,n.props,null,e.mode,r),La(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=yi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=gi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=_i(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=hi(t.type,t.key,t.props,null,e.mode,n),La(n,t),n.return=e,n;case v:return t=yi(t,e.mode,n),t.return=e,t;case T:return t=Aa(t),f(e,t,n)}if(le(t)||oe(t))return t=gi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ia(t),n);if(t.$$typeof===C)return f(e,ia(e,t),n);Ra(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case T:return n=Aa(n),p(e,t,n,r)}if(le(n)||oe(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ia(n),r);if(n.$$typeof===C)return p(e,t,ia(e,n),r);Ra(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case T:return r=Aa(r),m(e,t,n,r,i)}if(le(r)||oe(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ia(r),i);if(r.$$typeof===C)return m(e,t,n,ia(t,r),i);Ra(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),L&&ji(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return L&&ji(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),L&&ji(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),L&&ji(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return L&&ji(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),L&&ji(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===T&&Aa(l)===r.type){n(e,r.sibling),c=a(r,o.props),La(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===y?(c=gi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=hi(o.type,o.key,o.props,null,e.mode,c),La(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=yi(o,e.mode,c),c.return=e,e=c}return s(e);case T:return o=Aa(o),b(e,r,o,c)}if(le(o))return h(e,r,o,c);if(oe(o)){if(l=oe(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Ia(o),c);if(o.$$typeof===C)return b(e,r,ia(e,o),c);Ra(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=_i(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Fa=0;var i=b(e,t,n,r);return Pa=null,i}catch(t){if(t===wa||t===Ea)throw t;var a=di(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ba=za(!0),Va=za(!1),Ha=!1;function Ua(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ga(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ka(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ci(e),si(e,null,n),t}return ii(e,r,t,n),ci(e)}function qa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}function Ja(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ya=!1;function Xa(){if(Ya){var e=ha;if(e!==null)throw e}}function Za(e,t,n,r){Ya=!1;var i=e.updateQueue;Ha=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(J&f)===f:(r&f)===f){f!==0&&f===ma&&(Ya=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ha=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function Qa(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function $a(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Qa(n[e],t)}var eo=pe(null),to=pe(0);function no(e,t){e=Wl,O(to,e),O(eo,t),Wl=e|t.baseLanes}function ro(){O(to,Wl),O(eo,eo.current)}function io(){Wl=to.current,me(eo),me(to)}var ao=pe(null),oo=null;function so(e){var t=e.alternate;O(R,R.current&1),O(ao,e),oo===null&&(t===null||eo.current!==null||t.memoizedState!==null)&&(oo=e)}function co(e){O(R,R.current),O(ao,e),oo===null&&(oo=e)}function lo(e){e.tag===22?(O(R,R.current),O(ao,e),oo===null&&(oo=e)):uo(e)}function uo(){O(R,R.current),O(ao,ao.current)}function fo(e){me(ao),oo===e&&(oo=null),me(R)}var R=pe(0);function po(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var mo=0,z=null,B=null,ho=null,go=!1,_o=!1,vo=!1,yo=0,bo=0,xo=null,So=0;function V(){throw Error(i(321))}function Co(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Tr(e[n],t[n]))return!1;return!0}function wo(e,t,n,r,i,a){return mo=a,z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,E.H=e===null||e.memoizedState===null?Bs:Vs,vo=!1,a=n(r,i),vo=!1,_o&&(a=Eo(t,n,r,i)),To(e),a}function To(e){E.H=zs;var t=B!==null&&B.next!==null;if(mo=0,ho=B=z=null,go=!1,bo=0,xo=null,t)throw Error(i(300));e===null||ic||(e=e.dependencies,e!==null&&ta(e)&&(ic=!0))}function Eo(e,t,n,r){z=e;var a=0;do{if(_o&&(xo=null),bo=0,_o=!1,25<=a)throw Error(i(301));if(a+=1,ho=B=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}E.H=Hs,o=t(n,r)}while(_o);return o}function Do(){var e=E.H,t=e.useState()[0];return t=typeof t.then==`function`?No(t):t,e=e.useState()[0],(B===null?null:B.memoizedState)!==e&&(z.flags|=1024),t}function Oo(){var e=yo!==0;return yo=0,e}function ko(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ao(e){if(go){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}go=!1}mo=0,ho=B=z=null,_o=!1,bo=yo=0,xo=null}function jo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ho===null?z.memoizedState=ho=e:ho=ho.next=e,ho}function H(){if(B===null){var e=z.alternate;e=e===null?null:e.memoizedState}else e=B.next;var t=ho===null?z.memoizedState:ho.next;if(t!==null)ho=t,B=e;else{if(e===null)throw z.alternate===null?Error(i(467)):Error(i(310));B=e,e={memoizedState:B.memoizedState,baseState:B.baseState,baseQueue:B.baseQueue,queue:B.queue,next:null},ho===null?z.memoizedState=ho=e:ho=ho.next=e}return ho}function Mo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function No(e){var t=bo;return bo+=1,xo===null&&(xo=[]),e=ka(xo,e,t),t=z,(ho===null?t.memoizedState:ho.next)===null&&(t=t.alternate,E.H=t===null||t.memoizedState===null?Bs:Vs),e}function Po(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return No(e);if(e.$$typeof===C)return ra(e)}throw Error(i(438,String(e)))}function Fo(e){var t=null,n=z.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=z.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Mo(),z.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ie;return t.index++,n}function Io(e,t){return typeof t==`function`?t(e):t}function Lo(e){return Ro(H(),B,e)}function Ro(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(mo&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ma&&(d=!0);else if((mo&p)===p){u=u.next,p===ma&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,z.lanes|=p,Gl|=p;f=u.action,vo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,z.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Tr(o,e.memoizedState)&&(ic=!0,d&&(n=ha,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function zo(e){var t=H(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Tr(o,t.memoizedState)||(ic=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Bo(e,t,n){var r=z,a=H(),o=L;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Tr((B||a).memoizedState,n);if(s&&(a.memoizedState=n,ic=!0),a=a.queue,ds(Uo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||ho!==null&&ho.memoizedState.tag&1){if(r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,a,n,t),null),K===null)throw Error(i(349));o||mo&127||Vo(r,t,n)}return n}function Vo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=z.updateQueue,t===null?(t=Mo(),z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ho(e,t,n,r){t.value=n,t.getSnapshot=r,Wo(t)&&Go(e)}function Uo(e,t,n){return n(function(){Wo(t)&&Go(e)})}function Wo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Tr(e,n)}catch{return!0}}function Go(e){var t=oi(e,2);t!==null&&hu(t,e,2)}function Ko(e){var t=jo();if(typeof e==`function`){var n=e;if(e=n(),vo){Ke(!0);try{n()}finally{Ke(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:e},t}function qo(e,t,n,r){return e.baseState=n,Ro(e,B,typeof r==`function`?r:Io)}function Jo(e,t,n,r,a){if(Is(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};E.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Yo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Yo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=E.T,o={};E.T=o;try{var s=n(i,r),c=E.S;c!==null&&c(o,s),Xo(e,t,s)}catch(n){Qo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),E.T=a}}else try{a=n(i,r),Xo(e,t,a)}catch(n){Qo(e,t,n)}}function Xo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Zo(e,t,n)},function(n){return Qo(e,t,n)}):Zo(e,t,n)}function Zo(e,t,n){t.status=`fulfilled`,t.value=n,$o(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Yo(e,n)))}function Qo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,$o(t),t=t.next;while(t!==r)}e.action=null}function $o(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function es(e,t){return t}function ts(e,t){if(L){var n=K.formState;if(n!==null){a:{var r=z;if(L){if(I){b:{for(var i=I,a=Ri;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){I=cf(i.nextSibling),r=i.data===`F!`;break a}}Bi(r)}r=!1}r&&(t=n[0])}}return n=jo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:t},n.queue=r,n=Ns.bind(null,z,r),r.dispatch=n,r=Ko(!1),a=Fs.bind(null,z,!1,r.queue),r=jo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Jo.bind(null,z,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ns(e){return rs(H(),B,e)}function rs(e,t,n){if(t=Ro(e,t,es)[0],e=Lo(Io)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=No(t)}catch(e){throw e===wa?Ea:e}else r=t;t=H();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(z.flags|=2048,os(9,{destroy:void 0},is.bind(null,i,n),null)),[r,a,e]}function is(e,t){e.action=t}function as(e){var t=H(),n=B;if(n!==null)return rs(t,n,e);H(),t=t.memoizedState,n=H();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function os(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=z.updateQueue,t===null&&(t=Mo(),z.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ss(){return H().memoizedState}function cs(e,t,n,r){var i=jo();z.flags|=e,i.memoizedState=os(1|t,{destroy:void 0},n,r===void 0?null:r)}function ls(e,t,n,r){var i=H();r=r===void 0?null:r;var a=i.memoizedState.inst;B!==null&&r!==null&&Co(r,B.memoizedState.deps)?i.memoizedState=os(t,a,n,r):(z.flags|=e,i.memoizedState=os(1|t,a,n,r))}function us(e,t){cs(8390656,8,e,t)}function ds(e,t){ls(2048,8,e,t)}function fs(e){z.flags|=4;var t=z.updateQueue;if(t===null)t=Mo(),z.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ps(e){var t=H().memoizedState;return fs({ref:t,nextImpl:e}),function(){if(G&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ms(e,t){return ls(4,2,e,t)}function hs(e,t){return ls(4,4,e,t)}function gs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _s(e,t,n){n=n==null?null:n.concat([e]),ls(4,4,gs.bind(null,t,e),n)}function vs(){}function ys(e,t){var n=H();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Co(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bs(e,t){var n=H();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Co(t,r[1]))return r[0];if(r=e(),vo){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r}function xs(e,t,n){return n===void 0||mo&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),z.lanes|=e,Gl|=e,n)}function Ss(e,t,n,r){return Tr(n,t)?n:eo.current===null?!(mo&42)||mo&1073741824&&!(J&261930)?(ic=!0,e.memoizedState=n):(e=mu(),z.lanes|=e,Gl|=e,t):(e=xs(e,n,r),Tr(e,t)||(ic=!0),e)}function Cs(e,t,n,r,i){var a=D.p;D.p=a!==0&&8>a?a:8;var o=E.T,s={};E.T=s,Fs(e,!1,t,n);try{var c=i(),l=E.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ps(e,t,va(c,r),pu(e)):Ps(e,t,r,pu(e))}catch(n){Ps(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{D.p=a,o!==null&&s.types!==null&&(o.types=s.types),E.T=o}}function ws(){}function Ts(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Es(e).queue;Cs(e,a,t,ue,n===null?ws:function(){return Ds(e),n(r)})}function Es(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:ue},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ds(e){var t=Es(e);t.next===null&&(t=e.alternate.memoizedState),Ps(e,t.next.queue,{},pu())}function Os(){return ra(Qf)}function ks(){return H().memoizedState}function As(){return H().memoizedState}function js(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ga(n);var r=Ka(t,e,n);r!==null&&(hu(r,t,n),qa(r,t,n)),t={cache:ua()},e.payload=t;return}t=t.return}}function Ms(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Is(e)?Ls(t,n):(n=ai(e,t,n,r),n!==null&&(hu(n,e,r),Rs(n,t,r)))}function Ns(e,t,n){Ps(e,t,n,pu())}function Ps(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Is(e))Ls(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Tr(s,o))return ii(e,t,i,0),K===null&&ri(),!1}catch{}if(n=ai(e,t,i,r),n!==null)return hu(n,e,r),Rs(n,t,r),!0}return!1}function Fs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Is(e)){if(t)throw Error(i(479))}else t=ai(e,n,r,2),t!==null&&hu(t,e,2)}function Is(e){var t=e.alternate;return e===z||t!==null&&t===z}function Ls(e,t){_o=go=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}var zs={readContext:ra,use:Po,useCallback:V,useContext:V,useEffect:V,useImperativeHandle:V,useLayoutEffect:V,useInsertionEffect:V,useMemo:V,useReducer:V,useRef:V,useState:V,useDebugValue:V,useDeferredValue:V,useTransition:V,useSyncExternalStore:V,useId:V,useHostTransitionStatus:V,useFormState:V,useActionState:V,useOptimistic:V,useMemoCache:V,useCacheRefresh:V};zs.useEffectEvent=V;var Bs={readContext:ra,use:Po,useCallback:function(e,t){return jo().memoizedState=[e,t===void 0?null:t],e},useContext:ra,useEffect:us,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),cs(4194308,4,gs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return cs(4194308,4,e,t)},useInsertionEffect:function(e,t){cs(4,2,e,t)},useMemo:function(e,t){var n=jo();t=t===void 0?null:t;var r=e();if(vo){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=jo();if(n!==void 0){var i=n(t);if(vo){Ke(!0);try{n(t)}finally{Ke(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ms.bind(null,z,e),[r.memoizedState,e]},useRef:function(e){var t=jo();return e={current:e},t.memoizedState=e},useState:function(e){e=Ko(e);var t=e.queue,n=Ns.bind(null,z,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:vs,useDeferredValue:function(e,t){return xs(jo(),e,t)},useTransition:function(){var e=Ko(!1);return e=Cs.bind(null,z,e.queue,!0,!1),jo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=z,a=jo();if(L){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),K===null)throw Error(i(349));J&127||Vo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,us(Uo.bind(null,r,o,e),[e]),r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,o,n,t),null),n},useId:function(){var e=jo(),t=K.identifierPrefix;if(L){var n=Ai,r=ki;n=(r&~(1<<32-qe(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=yo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=So++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Os,useFormState:ts,useActionState:ts,useOptimistic:function(e){var t=jo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Fs.bind(null,z,!0,n),n.dispatch=t,[e,t]},useMemoCache:Fo,useCacheRefresh:function(){return jo().memoizedState=js.bind(null,z)},useEffectEvent:function(e){var t=jo(),n={impl:e};return t.memoizedState=n,function(){if(G&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Vs={readContext:ra,use:Po,useCallback:ys,useContext:ra,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:Lo,useRef:ss,useState:function(){return Lo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){return Ss(H(),B.memoizedState,e,t)},useTransition:function(){var e=Lo(Io)[0],t=H().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:ns,useActionState:ns,useOptimistic:function(e,t){return qo(H(),B,e,t)},useMemoCache:Fo,useCacheRefresh:As};Vs.useEffectEvent=ps;var Hs={readContext:ra,use:Po,useCallback:ys,useContext:ra,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:zo,useRef:ss,useState:function(){return zo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){var n=H();return B===null?xs(n,e,t):Ss(n,B.memoizedState,e,t)},useTransition:function(){var e=zo(Io)[0],t=H().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:as,useActionState:as,useOptimistic:function(e,t){var n=H();return B===null?(n.baseState=e,[e,n.queue.dispatch]):qo(n,B,e,t)},useMemoCache:Fo,useCacheRefresh:As};Hs.useEffectEvent=ps;function Us(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ws={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ga(r);i.payload=t,n!=null&&(i.callback=n),t=Ka(e,i,r),t!==null&&(hu(t,e,r),qa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ga(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ka(e,i,r),t!==null&&(hu(t,e,r),qa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ga(n);r.tag=2,t!=null&&(r.callback=t),t=Ka(e,r,n),t!==null&&(hu(t,e,n),qa(t,e,n))}};function Gs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Er(n,r)||!Er(i,a):!0}function Ks(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ws.enqueueReplaceState(t,t.state,null)}function qs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Js(e){$r(e)}function Ys(e){console.error(e)}function Xs(e){$r(e)}function Zs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Qs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function $s(e,t,n){return n=Ga(n),n.tag=3,n.payload={element:null},n.callback=function(){Zs(e,t)},n}function ec(e){return e=Ga(e),e.tag=3,e}function tc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Qs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Qs(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function nc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ea(t,n,a,!0),n=ao.current,n!==null){switch(n.tag){case 31:case 13:return oo===null?Du():n.alternate===null&&X===0&&(X=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Da?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Da?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(L)return t=ao.current,t===null?(r!==zi&&(t=Error(i(423),{cause:r}),Ki(xi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=xi(r,n),a=$s(e.stateNode,r,a),Ja(e,a),X!==4&&(X=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==zi&&(e=Error(i(422),{cause:r}),Ki(xi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=xi(o,n),Xl===null?Xl=[o]:Xl.push(o),X!==4&&(X=2),t===null)return!0;r=xi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=$s(n.stateNode,r,e),Ja(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=ec(a),tc(a,e,n,r),Ja(n,a),!1}n=n.return}while(n!==null);return!1}var rc=Error(i(461)),ic=!1;function ac(e,t,n,r){t.child=e===null?Va(t,null,n,r):Ba(t,e.child,n,r)}function oc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return na(t),r=wo(e,t,n,o,a,i),s=Oo(),e!==null&&!ic?(ko(e,t,i),Ac(e,t,i)):(L&&s&&Ni(t),t.flags|=1,ac(e,t,r,i),t.child)}function sc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!fi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,cc(e,t,a,r,i)):(e=hi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!jc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Er:n,n(o,r)&&e.ref===t.ref)return Ac(e,t,i)}return t.flags|=1,e=pi(a,r),e.ref=t.ref,e.return=t,t.child=e}function cc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Er(a,r)&&e.ref===t.ref){if(ic=!1,t.pendingProps=r=a,jc(e,i))e.flags&131072&&(ic=!0);else return t.lanes=e.lanes,Ac(e,t,i)}}return gc(e,t,n,r,i)}function lc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return dc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Sa(t,a===null?null:a.cachePool),a===null?ro():no(t,a),lo(t);else return r=t.lanes=536870912,dc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Sa(t,null),ro(),uo(t)):(Sa(t,a.cachePool),no(t,a),uo(t),t.memoizedState=null);return ac(e,t,i,n),t.child}function uc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function dc(e,t,n,r,i){var a=xa();return a=a===null?null:{parent:la._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Sa(t,null),ro(),lo(t),e!==null&&ea(e,t,r,!0),t.childLanes=i,null}function fc(e,t){return t=Tc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function pc(e,t,n){return Ba(t,e.child,null,n),e=fc(t,t.pendingProps),e.flags|=2,fo(t),t.memoizedState=null,e}function mc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(L){if(r.mode===`hidden`)return e=fc(t,r),t.lanes=536870912,uc(null,e);if(co(t),(e=I)?(e=rf(e,Ri),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Oi===null?null:{id:ki,overflow:Ai},retryLane:536870912,hydrationErrors:null},n=vi(e),n.return=t,t.child=n,Ii=t,I=null)):e=null,e===null)throw Bi(t);return t.lanes=536870912,null}return fc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(co(t),a){if(t.flags&256)t.flags&=-257,t=pc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(ic||ea(e,t,n,!1),a=(n&e.childLanes)!==0,ic||a){if(r=K,r!==null&&(s=ut(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,oi(e,s),hu(r,e,s),rc;Du(),t=pc(e,t,n)}else e=o.treeContext,I=cf(s.nextSibling),Ii=t,L=!0,Li=null,Ri=!1,e!==null&&Fi(t,e),t=fc(t,r),t.flags|=4096;return t}return e=pi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function hc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function gc(e,t,n,r,i){return na(t),n=wo(e,t,n,r,void 0,i),r=Oo(),e!==null&&!ic?(ko(e,t,i),Ac(e,t,i)):(L&&r&&Ni(t),t.flags|=1,ac(e,t,n,i),t.child)}function _c(e,t,n,r,i,a){return na(t),t.updateQueue=null,n=Eo(t,r,n,i),To(e),r=Oo(),e!==null&&!ic?(ko(e,t,a),Ac(e,t,a)):(L&&r&&Ni(t),t.flags|=1,ac(e,t,n,a),t.child)}function vc(e,t,n,r,i){if(na(t),t.stateNode===null){var a=li,o=n.contextType;typeof o==`object`&&o&&(a=ra(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ws,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ua(t),o=n.contextType,a.context=typeof o==`object`&&o?ra(o):li,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Us(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ws.enqueueReplaceState(a,a.state,null),Za(t,r,a,i),Xa(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=qs(n,s);a.props=c;var l=a.context,u=n.contextType;o=li,typeof u==`object`&&u&&(o=ra(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ks(t,a,r,o),Ha=!1;var f=t.memoizedState;a.state=f,Za(t,r,a,i),Xa(),l=t.memoizedState,s||f!==l||Ha?(typeof d==`function`&&(Us(t,n,d,r),l=t.memoizedState),(c=Ha||Gs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Wa(e,t),o=t.memoizedProps,u=qs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=li,typeof l==`object`&&l&&(c=ra(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ks(t,a,r,c),Ha=!1,f=t.memoizedState,a.state=f,Za(t,r,a,i),Xa();var p=t.memoizedState;o!==d||f!==p||Ha||e!==null&&e.dependencies!==null&&ta(e.dependencies)?(typeof s==`function`&&(Us(t,n,s,r),p=t.memoizedState),(u=Ha||Gs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ta(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,hc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ba(t,e.child,null,i),t.child=Ba(t,null,n,i)):ac(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Ac(e,t,i),e}function yc(e,t,n,r){return Wi(),t.flags|=256,ac(e,t,n,r),t.child}var bc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xc(e){return{baseLanes:e,cachePool:Ca()}}function Sc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function Cc(e,t,n){var r=t.pendingProps,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(R.current&2)),s&&(a=!0,t.flags&=-129),s=!!(t.flags&32),t.flags&=-33,e===null){if(L){if(a?so(t):uo(t),(e=I)?(e=rf(e,Ri),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Oi===null?null:{id:ki,overflow:Ai},retryLane:536870912,hydrationErrors:null},n=vi(e),n.return=t,t.child=n,Ii=t,I=null)):e=null,e===null)throw Bi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(uo(t),a=t.mode,c=Tc({mode:`hidden`,children:c},a),r=gi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(null,r)):(so(t),wc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(so(t),t.flags&=-257,t=Ec(e,t,n)):t.memoizedState===null?(uo(t),c=r.fallback,a=t.mode,r=Tc({mode:`visible`,children:r.children},a),c=gi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ba(t,e.child,null,n),r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,t=uc(null,r)):(uo(t),t.child=e.child,t.flags|=128,t=null);else if(so(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Ki({value:r,source:null,stack:null}),t=Ec(e,t,n)}else if(ic||ea(e,t,n,!1),s=(n&e.childLanes)!==0,ic||s){if(s=K,s!==null&&(r=ut(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,oi(e,r),hu(s,e,r),rc;af(c)||Du(),t=Ec(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,I=cf(c.nextSibling),Ii=t,L=!0,Li=null,Ri=!1,e!==null&&Fi(t,e),t=wc(t,r.children),t.flags|=4096);return t}return a?(uo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=pi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=gi(c,a,n,null),c.flags|=2):c=pi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,uc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=xc(n):(a=c.cachePool,a===null?a=Ca():(l=la._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(e.child,r)):(so(t),n=e.child,e=n.sibling,n=pi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function wc(e,t){return t=Tc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Tc(e,t){return e=di(22,e,null,t),e.lanes=0,e}function Ec(e,t,n){return Ba(t,e.child,null,n),e=wc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Qi(e.return,t,n)}function Oc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function kc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=R.current,s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,O(R,o),ac(e,t,r,n),r=L?Ti:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dc(e,n,t);else if(e.tag===19)Dc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&po(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Oc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&po(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Oc(t,!0,n,null,a,r);break;case`together`:Oc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Ac(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(ea(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=pi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=pi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jc(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&ta(e)))}function Mc(e,t,n){switch(t.tag){case 3:ye(t,t.stateNode.containerInfo),Xi(t,la,e.memoizedState.cache),Wi();break;case 27:case 5:xe(t);break;case 4:ye(t,t.stateNode.containerInfo);break;case 10:Xi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,co(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(so(t),e=Ac(e,t,n),e===null?null:e.sibling):Cc(e,t,n):(so(t),t.flags|=128,null);so(t);break;case 19:var i=!!(e.flags&128);if(r=(n&t.childLanes)!==0,r||=(ea(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return kc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),O(R,R.current),r)break;return null;case 22:return t.lanes=0,lc(e,t,n,t.pendingProps);case 24:Xi(t,la,e.memoizedState.cache)}return Ac(e,t,n)}function Nc(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)ic=!0;else{if(!jc(e,n)&&!(t.flags&128))return ic=!1,Mc(e,t,n);ic=!!(e.flags&131072)}}else ic=!1,L&&t.flags&1048576&&Mi(t,Ti,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Aa(t.elementType),t.type=e,typeof e==`function`)fi(e)?(r=qs(e,r),t.tag=1,t=vc(null,t,e,r,n)):(t.tag=0,t=gc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=oc(null,t,e,r,n);break a}if(a===ne){t.tag=14,t=sc(null,t,e,r,n);break a}}throw t=ce(e)||e,Error(i(306,t,``))}}return t;case 0:return gc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=qs(r,t.pendingProps),vc(e,t,r,a,n);case 3:a:{if(ye(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Wa(e,t),Za(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Xi(t,la,r),r!==o.cache&&$i(t,[la],n,!0),Xa(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=yc(e,t,r,n);break a}if(r!==a){a=xi(Error(i(424)),t),Ki(a),t=yc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(I=cf(e.firstChild),Ii=t,L=!0,Li=null,Ri=!0,n=Va(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Wi(),r===a){t=Ac(e,t,n);break a}ac(e,t,r,n)}t=t.child}return t;case 26:return hc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:L||(n=t.type,e=t.pendingProps,r=Bd(_e.current).createElement(n),r[gt]=t,r[k]=e,Pd(r,n,e),A(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return xe(t),e===null&&L&&(r=t.stateNode=ff(t.type,t.pendingProps,_e.current),Ii=t,Ri=!0,a=I,Zd(t.type)?(lf=a,I=cf(r.firstChild)):I=a),ac(e,t,t.pendingProps.children,n),hc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&L&&((a=r=I)&&(r=tf(r,t.type,t.pendingProps,Ri),r===null?a=!1:(t.stateNode=r,Ii=t,I=cf(r.firstChild),Ri=!1,a=!0)),a||Bi(t)),xe(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=wo(e,t,Do,null,null,n),Qf._currentValue=a),hc(e,t),ac(e,t,r,n),t.child;case 6:return e===null&&L&&((e=n=I)&&(n=nf(n,t.pendingProps,Ri),n===null?e=!1:(t.stateNode=n,Ii=t,I=null,e=!0)),e||Bi(t)),null;case 13:return Cc(e,t,n);case 4:return ye(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ba(t,null,r,n):ac(e,t,r,n),t.child;case 11:return oc(e,t,t.type,t.pendingProps,n);case 7:return ac(e,t,t.pendingProps,n),t.child;case 8:return ac(e,t,t.pendingProps.children,n),t.child;case 12:return ac(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Xi(t,t.type,r.value),ac(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,na(t),a=ra(a),r=r(a),t.flags|=1,ac(e,t,r,n),t.child;case 14:return sc(e,t,t.type,t.pendingProps,n);case 15:return cc(e,t,t.type,t.pendingProps,n);case 19:return kc(e,t,n);case 31:return mc(e,t,n);case 22:return lc(e,t,n,t.pendingProps);case 24:return na(t),r=ra(la),e===null?(a=xa(),a===null&&(a=K,o=ua(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ua(t),Xi(t,la,a)):((e.lanes&n)!==0&&(Wa(e,t),Za(t,null,null,n),Xa()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Xi(t,la,r),r!==a.cache&&$i(t,[la],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Xi(t,la,r))),ac(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Pc(e){e.flags|=4}function Fc(e,t,n,r,i){if((t=!!(e.mode&32))&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw ja=Da,Ta}}else e.flags&=-16777217}function Ic(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t)){if(wu())e.flags|=8192;else throw ja=Da,Ta}}function Lc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:it(),e.lanes|=t,Yl|=t)}function Rc(e,t){if(!L)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function U(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function zc(e,t,n){var r=t.pendingProps;switch(Pi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return U(t),null;case 1:return U(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Zi(la),be(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ui(t)?Pc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Gi())),U(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Pc(t),o===null?(U(t),Fc(t,a,null,r,n)):(U(t),Ic(t,o))):o?o===e.memoizedState?(U(t),t.flags&=-16777217):(Pc(t),U(t),Ic(t,o)):(e=e.memoizedProps,e!==r&&Pc(t),U(t),Fc(t,a,e,r,n)),null;case 27:if(Se(t),n=_e.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}e=he.current,Ui(t)?Vi(t,e):(e=ff(a,r,n),t.stateNode=e,Pc(t))}return U(t),null;case 5:if(Se(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}if(o=he.current,Ui(t))Vi(t,o);else{var s=Bd(_e.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[gt]=t,o[k]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Pc(t)}}return U(t),Fc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=_e.current,Ui(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Ii,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[gt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Bi(t,!0)}else e=Bd(e).createTextNode(r),e[gt]=t,t.stateNode=e}return U(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ui(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[gt]=t}else Wi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),e=!1}else n=Gi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(fo(t),t):(fo(t),null);if(t.flags&128)throw Error(i(558))}return U(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ui(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[gt]=t}else Wi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),a=!1}else a=Gi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(fo(t),t):(fo(t),null)}return fo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Lc(t,t.updateQueue),U(t),null);case 4:return be(),e===null&&Sd(t.stateNode.containerInfo),U(t),null;case 10:return Zi(t.type),U(t),null;case 19:if(me(R),r=t.memoizedState,r===null)return U(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)Rc(r,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=po(e),o!==null){for(t.flags|=128,Rc(r,!1),e=o.updateQueue,t.updateQueue=e,Lc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)mi(n,e),n=n.sibling;return O(R,R.current&1|2),L&&ji(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Fe()>tu&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304)}}else{if(!a){if(e=po(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Lc(t,e),Rc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!L)return U(t),null}else 2*Fe()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(U(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Fe(),e.sibling=null,n=R.current,O(R,a?n&1|2:n&1),L&&ji(t,r.treeForkCount),e);case 22:case 23:return fo(t),io(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(U(t),t.subtreeFlags&6&&(t.flags|=8192)):U(t),n=t.updateQueue,n!==null&&Lc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&me(ba),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Zi(la),U(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Bc(e,t){switch(Pi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zi(la),be(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Se(t),null;case 31:if(t.memoizedState!==null){if(fo(t),t.alternate===null)throw Error(i(340));Wi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(fo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Wi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return me(R),null;case 4:return be(),null;case 10:return Zi(t.type),null;case 22:case 23:return fo(t),io(),e!==null&&me(ba),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Zi(la),null;case 25:return null;default:return null}}function Vc(e,t){switch(Pi(t),t.tag){case 3:Zi(la),be();break;case 26:case 27:case 5:Se(t);break;case 4:be();break;case 31:t.memoizedState!==null&&fo(t);break;case 13:fo(t);break;case 19:me(R);break;case 10:Zi(t.type);break;case 22:case 23:fo(t),io(),e!==null&&me(ba);break;case 24:Zi(la)}}function Hc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Uc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Wc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{$a(t,n)}catch(t){Z(e,e.return,t)}}}function Gc(e,t,n){n.props=qs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Kc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function qc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}}function Jc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Yc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[k]=t}catch(t){Z(e,e.return,t)}}function Xc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Zc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Xc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=sn));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[gt]=e,t[k]=n}catch(t){Z(e,e.return,t)}}var tl=!1,nl=!1,rl=!1,il=typeof WeakSet==`function`?WeakSet:Set,al=null;function ol(e,t){if(e=e.containerInfo,Rd=sp,e=Ar(e),jr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,al=t;al!==null;)if(t=al,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,al=e;else for(;al!==null;){switch(t=al,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=qs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,al=e;break}al=t.return}}function sl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:xl(e,n),r&4&&Hc(5,n);break;case 1:if(xl(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=qs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}}r&64&&Wc(n),r&512&&Kc(n,n.return);break;case 3:if(xl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{$a(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&el(n);case 26:case 5:xl(e,n),t===null&&r&4&&Jc(n),r&512&&Kc(n,n.return);break;case 12:xl(e,n);break;case 31:xl(e,n),r&4&&fl(e,n);break;case 13:xl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||tl,!r){t=t!==null&&t.memoizedState!==null||nl,i=tl;var a=nl;tl=r,(nl=t)&&!a?Cl(e,n,!!(n.subtreeFlags&8772)):xl(e,n),tl=i,nl=a}break;case 30:break;default:xl(e,n)}}function cl(e){var t=e.alternate;t!==null&&(e.alternate=null,cl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ct(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var W=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount==`function`)try{Ge.onCommitFiberUnmount(We,n)}catch{}switch(n.tag){case 26:nl||qc(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:nl||qc(n,t);var r=W,i=ll;Zd(n.type)&&(W=n.stateNode,ll=!1),ul(e,t,n),pf(n.stateNode),W=r,ll=i;break;case 5:nl||qc(n,t);case 6:if(r=W,i=ll,W=null,ul(e,t,n),W=r,ll=i,W!==null){if(ll)try{(W.nodeType===9?W.body:W.nodeName===`HTML`?W.ownerDocument.body:W).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{W.removeChild(n.stateNode)}catch(e){Z(n,t,e)}}break;case 18:W!==null&&(ll?(e=W,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(W,n.stateNode));break;case 4:r=W,i=ll,W=n.stateNode.containerInfo,ll=!0,ul(e,t,n),W=r,ll=i;break;case 0:case 11:case 14:case 15:Uc(2,n,t),nl||Uc(4,n,t),ul(e,t,n);break;case 1:nl||(qc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Gc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:nl=(r=nl)||n.memoizedState!==null,ul(e,t,n),nl=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new il),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new il),t;default:throw Error(i(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){W=c.stateNode,ll=!1;break a}break;case 5:W=c.stateNode,ll=!1;break a;case 3:case 4:W=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(W===null)throw Error(i(160));dl(o,s,a),W=null,ll=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),yl(e),r&4&&(Uc(3,e,e.return),Hc(3,e),Uc(5,e,e.return));break;case 1:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&64&&tl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=_l;if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null){if(r===null){if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[St]||o[gt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[gt]=e,A(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[gt]=e,A(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode)}else e.stateNode=If(a,r,e.memoizedProps)}else o===r?r===null&&e.stateNode!==null&&Yc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),n!==null&&r&4&&Yc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),e.flags&32){a=e.stateNode;try{Qt(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Yc(e,a,n===null?a:n.memoizedProps)),r&1024&&(rl=!0);break;case 6:if(gl(t,e),yl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=_l,_l=gf(t.containerInfo),gl(t,e),_l=a,yl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}rl&&(rl=!1,bl(e));break;case 4:r=_l,_l=gf(e.stateNode.containerInfo),gl(t,e),yl(e),_l=r;break;case 12:gl(t,e),yl(e);break;case 31:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),yl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Fe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=tl,d=nl;if(tl=u||a,nl=d||l,gl(t,e),nl=d,tl=u,yl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||tl||nl||Sl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),yl(e)}}function yl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Xc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;$c(e,Zc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Qt(o,``),n.flags&=-33),$c(e,Zc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Qc(e,Zc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sl(e,t.alternate,t),t=t.sibling}function Sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Uc(4,t,t.return),Sl(t);break;case 1:qc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Gc(t,t.return,n),Sl(t);break;case 27:pf(t.stateNode);case 26:case 5:qc(t,t.return),Sl(t);break;case 22:t.memoizedState===null&&Sl(t);break;case 30:Sl(t);break;default:Sl(t)}e=e.sibling}}function Cl(e,t,n){for(n&&=!!(t.subtreeFlags&8772),t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Cl(i,a,n),Hc(4,a);break;case 1:if(Cl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Qa(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Wc(a),Kc(a,a.return);break;case 27:el(a);case 26:case 5:Cl(i,a,n),n&&r===null&&o&4&&Jc(a),Kc(a,a.return);break;case 12:Cl(i,a,n);break;case 31:Cl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Cl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Cl(i,a,n),Kc(a,a.return);break;case 30:break;default:Cl(i,a,n)}t=t.sibling}}function wl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&da(n))}function Tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&da(e))}function El(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dl(e,t,n,r),t=t.sibling}function Dl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:El(e,t,n,r),i&2048&&Hc(9,t);break;case 1:El(e,t,n,r);break;case 3:El(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&da(e)));break;case 12:if(i&2048){El(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else El(e,t,n,r);break;case 31:El(e,t,n,r);break;case 13:El(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?El(e,t,n,r):(a._visibility|=2,Ol(e,t,n,r,!!(t.subtreeFlags&10256)||!1)):a._visibility&2?El(e,t,n,r):kl(e,t),i&2048&&wl(o,t);break;case 24:El(e,t,n,r),i&2048&&Tl(t.alternate,t);break;default:El(e,t,n,r)}}function Ol(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(a,o,s,c,i),Hc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ol(a,o,s,c,i)):u._visibility&2?Ol(a,o,s,c,i):kl(a,o),i&&l&2048&&wl(o.alternate,o);break;case 24:Ol(a,o,s,c,i),i&&l&2048&&Tl(o.alternate,o);break;default:Ol(a,o,s,c,i)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:kl(n,r),i&2048&&wl(r.alternate,r);break;case 24:kl(n,r),i&2048&&Tl(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var Al=8192;function jl(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Ml(e,t,n),e=e.sibling}function Ml(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Al&&e.memoizedState!==null&&Gf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var r=_l;_l=gf(e.stateNode.containerInfo),jl(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Al,Al=16777216,jl(e,t,n),Al=r):jl(e,t,n));break;default:jl(e,t,n)}}function Nl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fl(e),e=e.sibling}function Fl(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Uc(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Il(e)):Pl(e);break;default:Pl(e)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Uc(8,t,t.return),Il(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Il(t));break;default:Il(t)}e=e.sibling}}function Ll(e,t){for(;al!==null;){var n=al;switch(n.tag){case 0:case 11:case 15:Uc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:da(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,al=r;else a:for(n=e;al!==null;){r=al;var i=r.sibling,a=r.return;if(cl(r),r===n){al=null;break a}if(i!==null){i.return=a,al=i;break a}al=a}}}var Rl={getCacheForType:function(e){var t=ra(la),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ra(la).controller.signal}},zl=typeof WeakMap==`function`?WeakMap:Map,G=0,K=null,q=null,J=0,Y=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,X=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return G&2&&J!==0?J&-J:E.T===null?pt():dd()}function mu(){if(Jl===0){if(!(J&536870912)||L){var e=Qe;Qe<<=1,!(Qe&3932160)&&(Qe=262144),Jl=e}else Jl=536870912}return e=ao.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===K&&(Y===2||Y===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,J,Jl,!1)),ot(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(Kl|=n),X===4&&yu(e,J,Jl,!1)),rd(e))}function gu(e,t,n){if(G&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||nt(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Hl&&!r&&yu(e,t,0,!1);break}if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Vl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-Fe(),10<a)){if(yu(r,t,Jl,!Vl),tt(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,null,-0,0)}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:sn},Ml(t,a,d);var m=(a&62914560)===a?$l-Fe():(a&4194048)===a?eu-Fe():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Tr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-qe(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&ct(e,n,t)}function bu(){return G&6?!0:(id(0,!1),!1)}function xu(){if(q!==null){if(Y===0)var e=q.return;else e=q,Yi=Ji=null,Ao(e),Pa=null,Fa=0,e=q;for(;e!==null;)Vc(e.alternate,e),e=e.return;q=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),K=e,q=n=pi(e.current,null),J=t,Y=0,Bl=null,Vl=!1,Hl=nt(e,t),Ul=!1,Yl=Jl=ql=Kl=Gl=X=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-qe(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,ri(),n}function Cu(e,t){z=null,E.H=zs,t===wa||t===Ea?(t=Ma(),Y=3):t===Ta?(t=Ma(),Y=4):Y=t===rc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,q===null&&(X=1,Zs(e,xi(t,e.current)))}function wu(){var e=ao.current;return e===null?!0:(J&4194048)===J?oo===null:(J&62914560)===J||J&536870912?e===oo:!1}function Tu(){var e=E.H;return E.H=zs,e===null?zs:e}function Eu(){var e=E.A;return E.A=Rl,e}function Du(){X=4,Vl||(J&4194048)!==J&&ao.current!==null||(Hl=!0),!(Gl&134217727)&&!(Kl&134217727)||K===null||yu(K,J,Jl,!1)}function Ou(e,t,n){var r=G;G|=2;var i=Tu(),a=Eu();(K!==e||J!==t)&&(nu=null,Su(e,t)),t=!1;var o=X;a:do try{if(Y!==0&&q!==null){var s=q,c=Bl;switch(Y){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:ao.current===null&&(t=!0);var l=Y;if(Y=0,Bl=null,Pu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=Y,Y=0,Bl=null,Pu(e,s,c,l)}}ku(),o=X;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Yi=Ji=null,G=r,E.H=i,E.A=a,q===null&&(K=null,J=0,ri()),o}function ku(){for(;q!==null;)Mu(q)}function Au(e,t){var n=G;G|=2;var r=Tu(),a=Eu();K!==e||J!==t?(nu=null,tu=Fe()+500,Su(e,t)):Hl=nt(e,t);a:do try{if(Y!==0&&q!==null){t=q;var o=Bl;b:switch(Y){case 1:Y=0,Bl=null,Pu(e,t,o,1);break;case 2:case 9:if(Oa(o)){Y=0,Bl=null,Nu(t);break}t=function(){Y!==2&&Y!==9||K!==e||(Y=7),rd(e)},o.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:Oa(o)?(Y=0,Bl=null,Nu(t)):(Y=0,Bl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var c=q;if(s?Wf(s):c.stateNode.complete){Y=0,Bl=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,Fu(u))}break b}}Y=0,Bl=null,Pu(e,t,o,5);break;case 6:Y=0,Bl=null,Pu(e,t,o,6);break;case 8:xu(),X=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Yi=Ji=null,E.H=r,E.A=a,G=n,q===null?(K=null,J=0,ri(),X):0}function ju(){for(;q!==null&&!Ne();)Mu(q)}function Mu(e){var t=Nc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=_c(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=_c(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:Ao(t);default:Vc(n,t),t=q=mi(t,Wl),t=Nc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Pu(e,t,n,r){Yi=Ji=null,Ao(t),Pa=null,Fa=0;var i=t.return;try{if(nc(e,i,t,n,J)){X=1,Zs(e,xi(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;X=1,Zs(e,xi(n,e.current)),q=null;return}t.flags&32768?(L||r===1?e=!0:Hl||J&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=ao.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Vl);return}e=t.return;var n=zc(t.alternate,t,Wl);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);X===0&&(X=5)}function Iu(e,t){do{var n=Bc(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);X=6,q=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(G&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ni,st(e,n,o,s,c,l),e===K&&(q=K=null,J=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(ze,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=E.T,E.T=null,a=D.p,D.p=2,s=G,G|=4;try{ol(e,t,n)}finally{G=s,D.p=a,E.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=!!(t.flags&13878);if(t.subtreeFlags&13878||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=G;G|=4;try{vl(t,e);var a=zd,o=Ar(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&kr(s.ownerDocument.documentElement,s)){if(c!==null&&jr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Or(s,h),v=Or(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{G=i,D.p=r,E.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=G;G|=4;try{sl(e,t.alternate,t)}finally{G=i,D.p=r,E.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Pe();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),ft(n),t=t.stateNode,Ge&&typeof Ge.onCommitFiberRoot==`function`)try{Ge.onCommitFiberRoot(We,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=E.T,i=D.p,D.p=2,E.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{E.T=t,D.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,da(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=ft(su),r=E.T,a=D.p;try{D.p=32>n?32:n,E.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,G&6)throw Error(i(331));var c=G;if(G|=4,Fl(o.current),Dl(o,o.current,s,n),G=c,id(0,!1),Ge&&typeof Ge.onPostCommitFiberRoot==`function`)try{Ge.onPostCommitFiberRoot(We,o)}catch{}return!0}finally{D.p=a,E.T=r,Vu(e,t)}}function Wu(e,t,n){t=xi(n,t),t=$s(e.stateNode,t,2),e=Ka(e,t,2),e!==null&&(ot(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=xi(n,e),n=ec(2),r=Ka(t,n,2),r!==null&&(tc(n,r,t,e),ot(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(J&n)===n&&(X===4||X===3&&(J&62914560)===J&&300>Fe()-$l?!(G&2)&&Su(e,0):ql|=n,Yl===J&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=it()),e=oi(e,t),e!==null&&(ot(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return je(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-qe(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=J,a=tt(r,r===K?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||nt(r,a)||(n=!0,ld(r,a))}r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Fe(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-qe(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=rt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=K,n=J,n=tt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Y===2||Y===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Me(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||nt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Me(r),ft(n)){case 2:case 8:n=Re;break;case 32:n=ze;break;case 268435456:n=Ve;break;default:n=ze}return r=cd.bind(null,e),n=je(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Me(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=J;return r=tt(e,e===K?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Fe()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){G&6?je(Le,ad):od()})}function dd(){if(nd===0){var e=ma;e===0&&(e=Ze,Ze<<=1,!(Ze&261888)&&(Ze=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:on(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[k]||null).action),o=r.submitter;o&&(t=(t=o[k]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new M(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Ts(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ts(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<Zr.length;hd++){var gd=Zr[hd];Qr(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}Qr(Ur,`onAnimationEnd`),Qr(Wr,`onAnimationIteration`),Qr(Gr,`onAnimationStart`),Qr(`dblclick`,`onDoubleClick`),Qr(`focusin`,`onFocus`),Qr(`focusout`,`onBlur`),Qr(Kr,`onTransitionRun`),Qr(qr,`onTransitionStart`),Qr(Jr,`onTransitionCancel`),Qr(Yr,`onTransitionEnd`),jt(`onMouseEnter`,[`mouseout`,`mouseover`]),jt(`onMouseLeave`,[`mouseout`,`mouseover`]),jt(`onPointerEnter`,[`pointerout`,`pointerover`]),jt(`onPointerLeave`,[`pointerout`,`pointerover`]),At(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),At(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),At(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),At(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),At(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),At(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){$r(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){$r(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[vt];n===void 0&&(n=t[vt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,Ot.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!_n||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=wt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}mn(function(){var r=a,i=ln(n),s=[];a:{var c=Xr.get(e);if(c!==void 0){var l=M,u=e;switch(e){case`keypress`:if(Cn(n)===0)break a;case`keydown`:case`keyup`:l=Un;break;case`focusin`:u=`focus`,l=In;break;case`focusout`:u=`blur`,l=In;break;case`beforeblur`:case`afterblur`:l=In;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Pn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Fn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Gn;break;case Ur:case Wr:case Gr:l=Ln;break;case Yr:l=Kn;break;case`scroll`:case`scrollend`:l=kn;break;case`wheel`:l=qn;break;case`copy`:case`cut`:case`paste`:l=Rn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Wn;break;case`toggle`:case`beforetoggle`:l=Jn}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=hn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==cn&&(u=n.relatedTarget||n.fromElement)&&(wt(u)||u[_t]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?wt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Pn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Wn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Et(l),h=u==null?c:Et(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,wt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?Et(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=pr;else if(sr(c)){if(mr)v=Cr;else{v=xr;var y=br}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&nn(r.elementType)&&(v=pr):v=Sr;if(v&&=v(e,r)){cr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Jt(c,`number`,c.value)}switch(y=r?Et(r):window,e){case`focusin`:(sr(y)||y.contentEditable===`true`)&&(Nr=y,Pr=r,Fr=null);break;case`focusout`:Fr=Pr=Nr=null;break;case`mousedown`:Ir=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Ir=!1,Lr(s,n,i);break;case`selectionchange`:if(Mr)break;case`keydown`:case`keyup`:Lr(s,n,i)}var b;if(Xn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else rr?nr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&($n&&n.locale!==`ko`&&(rr||x!==`onCompositionStart`?x===`onCompositionEnd`&&rr&&(b=Sn()):(yn=i,bn=`value`in yn?yn.value:yn.textContent,rr=!0)),y=Ed(r,x),0<y.length&&(x=new zn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=F(n),b!==null&&(x.data=b)))),(b=Qn?ir(e,n):ar(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new zn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=hn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=hn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=hn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=hn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Qt(e,``+r);break;case`className`:Lt(e,`class`,r);break;case`tabIndex`:Lt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Lt(e,n,r);break;case`style`:tn(e,r,o);break;case`data`:if(t!==`object`){Lt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=on(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=on(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=sn);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=on(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),It(e,`popover`,r);break;case`xlinkActuate`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:It(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=rn.get(n)||n,It(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:tn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Qt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=sn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!kt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[k]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):It(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}qt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Yt(e,!!r,n,!0):Yt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Zt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(nn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Kt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Yt(e,!!n,n?[]:``,!1):Yt(e,!!n,t,!0)):Yt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Xt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(nn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e!==Wd&&(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[St]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body)}n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),Ct(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[St])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ct(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=D.d;D.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Tt(e);t!==null&&t.tag===5&&t.type===`form`?Ds(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Gt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),A(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Gt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Gt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Gt(n.imageSizes)+`"]`)):i+=`[href="`+Gt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),A(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Gt(r)+`"][href="`+Gt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),A(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Dt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);A(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Dt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),A(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Dt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),A(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=_e.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Dt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Dt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Dt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Gt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),A(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Gt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Gt(n.href)+`"]`);if(r)return t.instance=r,A(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),A(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,A(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),A(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,A(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),A(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[St]||a[gt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,A(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),A(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=at(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=at(0),this.hiddenUpdates=at(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=di(3,null,null,t),e.current=a,a.stateNode=e,t=ua(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ua(a),e}function tp(e){return e?(e=li,e):li}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ga(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ka(e,r,t),n!==null&&(hu(n,e,t),qa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=oi(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=dt(t);var n=oi(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=2,up(e,t,n,r)}finally{D.p=a,E.T=i}}function lp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=8,up(e,t,n,r)}finally{D.p=a,E.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Tt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=et(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-qe(o);s.entanglements[1]|=c,o&=~c}rd(a),!(G&6)&&(tu=Fe()+500,id(0,!1))}}break;case 31:case 13:s=oi(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=ln(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=wt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ie()){case Le:return 2;case Re:return 8;case ze:case Be:return 32;case Ve:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Tt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=wt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,mt(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,mt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);cn=r,n.target.dispatchEvent(r),cn=null}else return t=Tt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Tt(n);a!==null&&(e.splice(t,3),t-=3,Ts(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[k]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[k]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[_t]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=pt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.8`)throw Error(i(527,Lp,`19.2.8`));D.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:E,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{We=zp.inject(Rp),Ge=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Js,s=Ys,c=Xs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[_t]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=`modulepreload`,v=function(e){return`/Ai-Hub/`+e},y={},b=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=v(t,n),t=s(t),t in y)return;y[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:_,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},x=c(u(),1),S=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,C=/^[\\/]{2}/;function w(e,t){return t+e.replace(/\\/g,`/`)}var ee=`popstate`;function te(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function ne(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return oe(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:se(t)}return le(t,n,null,e)}function T(e,t){if(e===!1||e==null)throw Error(t)}function re(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function ie(){return Math.random().toString(36).substring(2,10)}function ae(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function oe(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?ce(t):t,state:n,key:t&&t.key||r||ie(),mask:i}}function se({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function ce(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function le(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=te(e)?e:oe(h.location,e,t);n&&n(r,e),l=u()+1;let d=ae(r,l),f=h.createHref(r.mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=te(e)?e:oe(h.location,e,t);n&&n(r,e),l=u();let i=ae(r,l),d=h.createHref(r.mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return E(i,e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(ee,d),c=e,()=>{i.removeEventListener(ee,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function E(e,t,n=!1){let r=`http://localhost`;e&&(r=e.location.origin===`null`?e.location.href:e.location.origin),T(r,`No window.location.(origin|href) available to create URL`);let i=typeof t==`string`?t:se(t);return i=i.replace(/ $/,`%20`),!n&&C.test(i)&&(i=r+i),new URL(i,r)}function D(e,t,n=`/`){return ue(e,t,n,!1)}function ue(e,t,n,r,i){let a=Oe((typeof t==`string`?ce(t):t).pathname||`/`,n);if(a==null)return null;let o=i??de(e),s=null,c=De(a);for(let e=0;s==null&&e<o.length;++e)s=Ce(o[e],c,r);return s}function de(e){let t=fe(e);return me(t),t}function fe(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;T(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Ie([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(T(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),fe(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:xe(l,e.index),routesMeta:u.map((e,t)=>{let[n,r]=Ee(e.relativePath,e.caseSensitive,t===u.length-1);return{...e,matcher:n,compiledParams:r}})})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of pe(e.path))a(e,t,!0,n)}),t}function pe(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=pe(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function me(e){e.sort((e,t)=>e.score===t.score?Se(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var O=/^:[\w-]+$/,he=3,ge=2,_e=1,ve=10,ye=-2,be=e=>e===`*`;function xe(e,t){let n=e.split(`/`),r=n.length;return n.some(be)&&(r+=ye),t&&(r+=ge),n.filter(e=>!be(e)).reduce((e,t)=>e+(O.test(t)?he:t===``?_e:ve),r)}function Se(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function Ce(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u={path:s.relativePath,caseSensitive:s.caseSensitive,end:c},d=s.matcher&&s.compiledParams?Te(u,l,s.matcher,s.compiledParams):we(u,l),f=s.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=we({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:Ie([a,d.pathname]),pathnameBase:Re(Ie([a,d.pathnameBase])),route:f}),d.pathnameBase!==`/`&&(a=Ie([a,d.pathnameBase]))}return o}function we(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Ee(e.path,e.caseSensitive,e.end);return Te(e,t,n,r)}function Te(e,t,n,r){let i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return e[t]=n&&!i?void 0:(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function Ee(e,t=!1,n=!0){re(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function De(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return re(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Oe(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}function ke(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?ce(e):e,a;return n?(n=Fe(n),a=n.startsWith(`/`)?Ae(n.substring(1),`/`):Ae(n,t)):a=t,{pathname:a,search:ze(r),hash:Be(i)}}function Ae(e,t){let n=Le(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function je(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Me(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Ne(e){let t=Me(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Pe(e,t,n,r=!1){let i;typeof e==`string`?i=ce(e):(i={...e},T(!i.pathname||!i.pathname.includes(`?`),je(`?`,`pathname`,`search`,i)),T(!i.pathname||!i.pathname.includes(`#`),je(`#`,`pathname`,`hash`,i)),T(!i.search||!i.search.includes(`#`),je(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=ke(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Fe=e=>e.replace(/[\\/]{2,}/g,`/`),Ie=e=>Fe(e.join(`/`)),Le=e=>e.replace(/\/+$/,``),Re=e=>Le(e).replace(/^\/*/,`/`),ze=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Be=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,Ve=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function He(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function Ue(e){return Ie(e.map(e=>e.route.path).filter(Boolean))||`/`}var We=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function Ge(e,t){let n=e;if(typeof n!=`string`||!S.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(We)try{let e=new URL(window.location.href),r=C.test(n)?new URL(w(n,e.protocol)):new URL(n),a=Oe(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{re(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var Ke=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(Ke);var qe=[`GET`,...Ke];new Set(qe);var Je=[`about:`,`blob:`,`chrome:`,`chrome-untrusted:`,`content:`,`data:`,`devtools:`,`file:`,`filesystem:`,`javascript:`];function Ye(e){try{return Je.includes(new URL(e).protocol)}catch{return!1}}var Xe=x.createContext(null);Xe.displayName=`DataRouter`;var Ze=x.createContext(null);Ze.displayName=`DataRouterState`;var Qe=x.createContext(!1);function $e(){return x.useContext(Qe)}var et=x.createContext({isTransitioning:!1});et.displayName=`ViewTransition`;var tt=x.createContext(new Map);tt.displayName=`Fetchers`;var nt=x.createContext(null);nt.displayName=`Await`;var rt=x.createContext(null);rt.displayName=`Navigation`;var it=x.createContext(null);it.displayName=`Location`;var at=x.createContext({outlet:null,matches:[],isDataRoute:!1});at.displayName=`Route`;var ot=x.createContext(null);ot.displayName=`RouteError`;var st=`REACT_ROUTER_ERROR`,ct=`REDIRECT`,lt=`ROUTE_ERROR_RESPONSE`;function ut(e){if(e.startsWith(`${st}:${ct}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function dt(e){if(e.startsWith(`${st}:${lt}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new Ve(t.status,t.statusText,t.data)}catch{}}function ft(e,{relative:t}={}){T(pt(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=x.useContext(rt),{hash:i,pathname:a,search:o}=vt(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Ie([n,a])),r.createHref({pathname:s,search:o,hash:i})}function pt(){return x.useContext(it)!=null}function mt(){return T(pt(),`useLocation() may be used only in the context of a <Router> component.`),x.useContext(it).location}var ht=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function gt(e){x.useContext(rt).static||x.useLayoutEffect(e)}function k(){let{isDataRoute:e}=x.useContext(at);return e?Pt():_t()}function _t(){T(pt(),`useNavigate() may be used only in the context of a <Router> component.`);let e=x.useContext(Xe),{basename:t,navigator:n}=x.useContext(rt),{matches:r}=x.useContext(at),{pathname:i}=mt(),a=JSON.stringify(Ne(r)),o=x.useRef(!1);return gt(()=>{o.current=!0}),x.useCallback((r,s={})=>{if(re(o.current,ht),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Pe(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Ie([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}x.createContext(null);function vt(e,{relative:t}={}){let{matches:n}=x.useContext(at),{pathname:r}=mt(),i=JSON.stringify(Ne(n));return x.useMemo(()=>Pe(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function yt(e,t){return bt(e,t)}function bt(e,t,n){T(pt(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=x.useContext(rt),{matches:i}=x.useContext(at),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;It(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=mt(),d;if(t){let e=typeof t==`string`?ce(t):t;T(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=n&&n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):D(e,{pathname:p});re(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),re(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=Dt(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Ie([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Ie([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?x.createElement(it.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,mask:void 0,...d},navigationType:`POP`}},h):h}function xt(){let e=Nt(),t=He(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=x.createElement(x.Fragment,null,x.createElement(`p`,null,`💿 Hey developer 👋`),x.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,x.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,x.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),x.createElement(x.Fragment,null,x.createElement(`h2`,null,`Unexpected Application Error!`),x.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?x.createElement(`pre`,{style:i},n):null,o)}var St=x.createElement(xt,null),Ct=class extends x.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=dt(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:x.createElement(at.Provider,{value:this.props.routeContext},x.createElement(ot.Provider,{value:e,children:this.props.component}));return this.context?x.createElement(Tt,{error:e},t):t}};Ct.contextType=Qe;var wt=new WeakMap;function Tt({children:e,error:t}){let{basename:n}=x.useContext(rt);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=ut(t.digest);if(e){let r=wt.get(t);if(r)throw r;let i=Ge(e.location,n),a=i.absoluteURL||i.to;if(Ye(a))throw Error(`Invalid redirect location`);if(We&&!wt.get(t)){if(i.isExternal||e.reloadDocument)window.location.href=a;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw wt.set(t,n),n}}return x.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${a}`})}}return e}function Et({routeContext:e,match:t,children:n}){let r=x.useContext(Xe);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),x.createElement(at.Provider,{value:e},n)}function Dt(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);T(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:Ue(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||St,o&&(s<0&&c===0?(It(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?x.createElement(n.route.Component,null):n.route.element?n.route.element:e,x.createElement(Et,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?x.createElement(Ct,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function A(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ot(e){let t=x.useContext(Xe);return T(t,A(e)),t}function kt(e){let t=x.useContext(Ze);return T(t,A(e)),t}function At(e){let t=x.useContext(at);return T(t,A(e)),t}function jt(e){let t=At(e),n=t.matches[t.matches.length-1];return T(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Mt(){return jt(`useRouteId`)}function Nt(){let e=x.useContext(ot),t=kt(`useRouteError`),n=jt(`useRouteError`);return e===void 0?t.errors?.[n]:e}function Pt(){let{router:e}=Ot(`useNavigate`),t=jt(`useNavigate`),n=x.useRef(!1);return gt(()=>{n.current=!0}),x.useCallback(async(r,i={})=>{re(n.current,ht),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var Ft={};function It(e,t,n){!t&&!Ft[e]&&(Ft[e]=!0,re(!1,n))}x.memo(Lt);function Lt({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:a}){return bt(e,void 0,{manifest:t,state:r,isStatic:i,onError:a,future:n})}function Rt({to:e,replace:t,state:n,relative:r}){T(pt(),`<Navigate> may be used only in the context of a <Router> component.`);let{static:i}=x.useContext(rt);re(!i,`<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.`);let{matches:a}=x.useContext(at),{pathname:o}=mt(),s=k(),c=Pe(e,Ne(a),o,r===`path`),l=JSON.stringify(c);return x.useEffect(()=>{s(JSON.parse(l),{replace:t,state:n,relative:r})},[s,l,r,t,n]),null}function j(e){T(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function zt({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,useTransitions:o}){T(!pt(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=x.useMemo(()=>({basename:s,navigator:i,static:a,useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=ce(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,mask:m}=n,h=x.useMemo(()=>{let e=Oe(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return re(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:x.createElement(rt.Provider,{value:c},x.createElement(it.Provider,{children:t,value:h}))}function Bt({children:e,location:t}){return yt(Vt(e),t)}x.Component;function Vt(e,t=[]){let n=[];return x.Children.forEach(e,(e,r)=>{if(!x.isValidElement(e))return;let i=[...t,r];if(e.type===x.Fragment){n.push.apply(n,Vt(e.props.children,i));return}T(e.type===j,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),T(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Vt(e.props.children,i)),n.push(a)}),n}var Ht=`get`,Ut=`application/x-www-form-urlencoded`;function Wt(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function Gt(e){return Wt(e)&&e.tagName.toLowerCase()===`button`}function Kt(e){return Wt(e)&&e.tagName.toLowerCase()===`form`}function qt(e){return Wt(e)&&e.tagName.toLowerCase()===`input`}function Jt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Yt(e,t){return e.button===0&&(!t||t===`_self`)&&!Jt(e)}function Xt(e=``){return new URLSearchParams(typeof e==`string`||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(e=>[n,e]):[[n,r]])},[]))}function Zt(e,t){let n=Xt(e);return t&&t.forEach((e,r)=>{n.has(r)||t.getAll(r).forEach(e=>{n.append(r,e)})}),n}var Qt=null;function $t(){if(Qt===null)try{new FormData(document.createElement(`form`),0),Qt=!1}catch{Qt=!0}return Qt}var en=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function tn(e){return e!=null&&!en.has(e)?(re(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ut}"`),null):e}function nn(e,t){let n,r,i,a,o;if(Kt(e)){let o=e.getAttribute(`action`);r=o?Oe(o,t):null,n=e.getAttribute(`method`)||Ht,i=tn(e.getAttribute(`enctype`))||Ut,a=new FormData(e)}else if(Gt(e)||qt(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?Oe(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||Ht,i=tn(e.getAttribute(`formenctype`))||tn(o.getAttribute(`enctype`))||Ut,a=new FormData(o,e),!$t()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Wt(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=Ht,r=null,i=Ut,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);function rn(e,t){if(e===!1||e==null)throw Error(t)}function an(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return i.pathname=n?i.pathname.endsWith(`/`)?`${i.pathname}_.${r}`:`${i.pathname}.${r}`:i.pathname===`/`?`_root.${r}`:t&&Oe(i.pathname,t)===`/`?`${Le(t)}/_root.${r}`:`${Le(i.pathname)}.${r}`,i}async function on(e,t){if(e.id in t)return t[e.id];try{let n=await b(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function sn(e){return e!=null&&typeof e.page==`string`}function cn(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function ln(e,t,n){return mn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await on(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(cn).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function un(e,t,n,r,i,a){let o=(e,t)=>!n[t]||e.route.id!==n[t].route.id,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function dn(e,t,{includeHydrateFallback:n}={}){return fn(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function fn(e){return[...new Set(e)]}function pn(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function mn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!sn(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(pn(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function hn(){let e=x.useContext(Xe);return rn(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function gn(){let e=x.useContext(Ze);return rn(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var _n=x.createContext(void 0);_n.displayName=`FrameworkContext`;function vn(){let e=x.useContext(_n);return rn(e,`You must render this element inside a <HydratedRouter> element`),e}function yn(e,t){let n=x.useContext(_n),[r,i]=x.useState(!1),[a,o]=x.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=x.useRef(null);x.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),x.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:bn(s,p),onBlur:bn(c,m),onMouseEnter:bn(l,p),onMouseLeave:bn(u,m),onTouchStart:bn(d,p)}]:[a,f,{}]:[!1,f,{}]}function bn(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function xn({page:e,...t}){let n=$e(),{nonce:r}=vn(),{router:i}=hn(),a=x.useMemo(()=>D(i.routes,e,i.basename),[i.routes,e,i.basename]);return a?(t.nonce==null&&r&&(t={...t,nonce:r}),n?x.createElement(Cn,{page:e,matches:a,...t}):x.createElement(wn,{page:e,matches:a,...t})):null}function Sn(e){let{manifest:t,routeModules:n}=vn(),[r,i]=x.useState([]);return x.useEffect(()=>{let r=!1;return ln(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function Cn({page:e,matches:t,...n}){let r=mt(),{future:i}=vn(),{basename:a}=hn(),o=x.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=an(e,a,i.v8_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.v8_trailingSlashAwareDataRequests,e,r,t]);return x.createElement(x.Fragment,null,o.map(e=>x.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function wn({page:e,matches:t,...n}){let r=mt(),{future:i,manifest:a,routeModules:o}=vn(),{basename:s}=hn(),{loaderData:c,matches:l}=gn(),u=x.useMemo(()=>un(e,t,l,a,r,`data`),[e,t,l,a,r]),d=x.useMemo(()=>un(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=x.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=an(e,s,i.v8_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.v8_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=x.useMemo(()=>dn(d,a),[d,a]),m=Sn(d);return x.createElement(x.Fragment,null,f.map(e=>x.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>x.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>x.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function Tn(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}x.Component;var En=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{En&&(window.__reactRouterVersion=`7.18.2`)}catch{}function Dn({basename:e,children:t,useTransitions:n,window:r}){let i=x.useRef();i.current??=ne({window:r,v5Compat:!0});let a=i.current,[o,s]=x.useState({action:a.action,location:a.location}),c=x.useCallback(e=>{n===!1?s(e):x.startTransition(()=>s(e))},[n]);return x.useLayoutEffect(()=>a.listen(c),[a,c]),x.createElement(zt,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,useTransitions:n})}var M=x.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,useTransitions:_}=x.useContext(rt),v=typeof l==`string`&&S.test(l),y=Ge(l,h);l=y.to;let b=ft(l,{relative:r}),C=mt(),w=null;if(o){let e=Pe(o,[],C.mask?C.mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Ie([h,e.pathname])),w=g.createHref(e)}let[ee,te,ne]=yn(n,p),T=Mn(l,{replace:a,mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,defaultShouldRevalidate:f,useTransitions:_});function re(t){e&&e(t),t.defaultPrevented||T(t)}let ie=!(y.isExternal||i),ae=x.createElement(`a`,{...p,...ne,href:(ie?w:void 0)||y.absoluteURL||b,onClick:ie?re:e,ref:Tn(m,te),target:c,"data-discover":!v&&t===`render`?`true`:void 0});return ee&&!v?x.createElement(x.Fragment,null,ae,x.createElement(xn,{page:b})):ae});M.displayName=`Link`;var On=x.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=vt(a,{relative:c.relative}),d=mt(),f=x.useContext(Ze),{navigator:p,basename:m}=x.useContext(rt),h=f!=null&&Rn(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,v=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase()),v&&m&&(v=Oe(v,m)||v);let y=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,b=_===g||!r&&_.startsWith(g)&&_.charAt(y)===`/`,S=v!=null&&(v===g||!r&&v.startsWith(g)&&v.charAt(g.length)===`/`),C={isActive:b,isPending:S,isTransitioning:h},w=b?e:void 0,ee;ee=typeof n==`function`?n(C):[n,b?`active`:null,S?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let te=typeof i==`function`?i(C):i;return x.createElement(M,{...c,"aria-current":w,className:ee,ref:l,style:te,to:a,viewTransition:o},typeof s==`function`?s(C):s)});On.displayName=`NavLink`;var kn=x.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=Ht,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m)=>{let{useTransitions:h}=x.useContext(rt),g=In(),_=Ln(s,{relative:l}),v=o.toLowerCase()===`get`?`get`:`post`,y=typeof s==`string`&&S.test(s);return x.createElement(`form`,{ref:m,method:v,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f});h&&n!==!1?x.startTransition(()=>p()):p()},...p,"data-discover":!y&&e===`render`?`true`:void 0})});kn.displayName=`Form`;function An(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function jn(e){let t=x.useContext(Xe);return T(t,An(e)),t}function Mn(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c,useTransitions:l}={}){let u=k(),d=mt(),f=vt(e,{relative:o});return x.useCallback(p=>{if(Yt(p,t)){p.preventDefault();let t=n===void 0?se(d)===se(f):n,m=()=>u(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c});l?x.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}function Nn(e){re(typeof URLSearchParams<`u`,"You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let t=x.useRef(Xt(e)),n=x.useRef(!1),r=mt(),i=x.useMemo(()=>Zt(r.search,n.current?null:t.current),[r.search]),a=k();return[i,x.useCallback((e,t)=>{let r=Xt(typeof e==`function`?e(new URLSearchParams(i)):e);n.current=!0,a(`?`+r,t)},[a,i])]}var Pn=0,Fn=()=>`__${String(++Pn)}__`;function In(){let{router:e}=jn(`useSubmit`),{basename:t}=x.useContext(rt),n=Mt(),r=e.fetch,i=e.navigate;return x.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=nn(e,t);if(a.navigate===!1){let e=a.fetcherKey||Fn();await r(e,n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync})}else await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Ln(e,{relative:t}={}){let{basename:n}=x.useContext(rt),r=x.useContext(at);T(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...vt(e||`.`,{relative:t})},o=mt();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Ie([n,a.pathname])),se(a)}function Rn(e,{relative:t}={}){let n=x.useContext(et);T(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=jn(`useViewTransitionState`),i=vt(e,{relative:t});if(!n.isTransitioning)return!1;let a=Oe(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Oe(n.nextLocation.pathname,r)||n.nextLocation.pathname;return we(i.pathname,o)!=null||we(i.pathname,a)!=null}var zn=c(g(),1),Bn=[{id:`all`,name:`All Categories`,icon:`🌐`,count:32,description:`Explore the complete directory of AI tools`},{id:`assistant`,name:`AI Assistants & LLMs`,icon:`🤖`,count:8,description:`Conversational intelligence, reasoning & research agents`},{id:`coding`,name:`Coding & Dev`,icon:`💻`,count:6,description:`Code generation, debugging, refactoring & IDE assistants`},{id:`image`,name:`Image & Design`,icon:`🎨`,count:6,description:`Text-to-image generation, photo editing & design automation`},{id:`video`,name:`Video & Animation`,icon:`🎬`,count:5,description:`Text-to-video, realistic generation & cinematic AI effects`},{id:`audio`,name:`Voice & Music`,icon:`🎵`,count:4,description:`Voice synthesis, text-to-speech & studio-quality music generation`},{id:`productivity`,name:`Productivity & Notes`,icon:`⚡`,count:5,description:`Workflow automation, meeting summaries & smart note-taking`},{id:`research`,name:`Research & Analysis`,icon:`🔬`,count:4,description:`Scientific literature search, paper summarization & data analysis`}],N=[{id:`chatgpt`,name:`ChatGPT`,creator:`OpenAI`,category:`assistant`,categoryLabel:`AI Assistant`,tagline:`The world's leading conversational AI assistant with multimodal reasoning.`,description:`ChatGPT is OpenAI's flagship conversational model powered by GPT-4o and o3-mini reasoning, supporting web search, data analysis, voice chat, and code execution.`,rating:4.9,reviewsCount:34200,monthlyUsers:`250M+`,pricingModel:`Freemium`,priceText:`Free / $20 mo Plus`,featured:!0,trendingScore:98,growthRate:`+34%`,verified:!0,websiteUrl:`https://chatgpt.com`,tags:[`LLM`,`Reasoning`,`Multimodal`,`OpenAI`],specs:{contextWindow:`128K tokens`,apiAvailable:`Yes`,imageGeneration:`DALL-E 3 Built-in`,voiceMode:`Advanced Voice Mode`,codingSupport:`Python Sandbox & Code Interpreter`,platforms:`Web, iOS, Android, macOS, Windows`,freeTier:`Generous GPT-4o mini & limited GPT-4o`},pros:[`Extremely versatile`,`Rich custom GPT ecosystem`,`Native live voice interaction`],cons:[`Advanced voice and latest reasoning require Plus tier`]},{id:`gemini`,name:`Google Gemini`,creator:`Google DeepMind`,category:`assistant`,categoryLabel:`AI Assistant`,tagline:`Google's next-generation multimodal model with massive 2M token context.`,description:`Gemini is Google's multimodal AI featuring industry-leading 2M token context windows, deep Google Workspace integration, native audio/video understanding, and live search.`,rating:4.8,reviewsCount:22100,monthlyUsers:`180M+`,pricingModel:`Freemium`,priceText:`Free / $19.99 mo Advanced`,featured:!0,trendingScore:95,growthRate:`+28%`,verified:!0,websiteUrl:`https://gemini.google.com`,tags:[`Multimodal`,`Google`,`Massive Context`,`Deep Research`],specs:{contextWindow:`2,000,000 tokens`,apiAvailable:`Yes (Gemini API)`,imageGeneration:`Imagen 3 Built-in`,voiceMode:`Gemini Live`,codingSupport:`Python execution & benchmark leader`,platforms:`Web, Android, iOS`,freeTier:`Gemini 2.0 Flash / Pro access`},pros:[`Huge 2M context window`,`Real-time Google search grounding`,`Seamless Workspace sync`],cons:[`Occasional safety over-filtering`]},{id:`claude`,name:`Claude 3.7 Sonnet`,creator:`Anthropic`,category:`assistant`,categoryLabel:`AI Assistant`,tagline:`State-of-the-art hybrid reasoning & coding model with computer use.`,description:`Claude 3.7 Sonnet combines instantaneous response mode with extended step-by-step thinking, excelling at complex programming, literature analysis, and computer interaction.`,rating:4.9,reviewsCount:18400,monthlyUsers:`90M+`,pricingModel:`Freemium`,priceText:`Free / $20 mo Pro`,featured:!0,trendingScore:97,growthRate:`+45%`,verified:!0,websiteUrl:`https://claude.ai`,tags:[`Hybrid Reasoning`,`Coding Leader`,`Anthropic`,`Extended Thinking`],specs:{contextWindow:`200K tokens`,apiAvailable:`Yes (Anthropic API)`,imageGeneration:`Vision analysis only`,voiceMode:`Text & Artifacts`,codingSupport:`Industry-leading SWE-bench score`,platforms:`Web, iOS, Android, Mac App`,freeTier:`Standard Sonnet access with rate limits`},pros:[`Best-in-class coding & reasoning`,`Artifacts live UI renderer`,`Nuanced writing tone`],cons:[`No native text-to-image output`]},{id:`deepseek`,name:`DeepSeek R1`,creator:`DeepSeek AI`,category:`assistant`,categoryLabel:`AI Assistant`,tagline:`Open-weights open-source reasoning powerhouse with low latency.`,description:`DeepSeek R1 brings frontier-grade mathematical and algorithmic reasoning with fully open weights, competitive with top proprietary reasoning systems.`,rating:4.8,reviewsCount:15200,monthlyUsers:`65M+`,pricingModel:`Free / Open Source`,priceText:`100% Free Web / Low-cost API`,featured:!0,trendingScore:99,growthRate:`+82%`,verified:!0,websiteUrl:`https://chat.deepseek.com`,tags:[`Open Source`,`Reasoning`,`Math`,`Budget-Friendly`],specs:{contextWindow:`64K - 128K tokens`,apiAvailable:`Yes (Extremely affordable)`,imageGeneration:`Text/Code only`,voiceMode:`Text only`,codingSupport:`Exceptional algorithm & math solving`,platforms:`Web, Mobile, Ollama / Local`,freeTier:`Unlimited free tier online`},pros:[`Free to use online`,`Open weights for local hosting`,`Superb mathematical reasoning`],cons:[`Servers occasionally face traffic surges`]},{id:`perplexity`,name:`Perplexity AI`,creator:`Perplexity`,category:`assistant`,categoryLabel:`AI Assistant`,tagline:`AI conversational search engine with cited academic & live sources.`,description:`Perplexity replaces traditional search engines by synthesizing answers with direct citations, file uploads, spaces, and multi-model selector (GPT-4o, Claude 3.7, Sonar).`,rating:4.8,reviewsCount:16900,monthlyUsers:`55M+`,pricingModel:`Freemium`,priceText:`Free / $20 mo Pro`,featured:!0,trendingScore:92,growthRate:`+29%`,verified:!0,websiteUrl:`https://perplexity.ai`,tags:[`Search`,`Citations`,`Deep Research`,`Multi-Model`],specs:{contextWindow:`Multi-Source Context`,apiAvailable:`Yes (Sonar API)`,imageGeneration:`Flux / DALL-E 3 built-in`,voiceMode:`Voice search`,codingSupport:`Search-enhanced coding`,platforms:`Web, iOS, Android, Chrome Extension`,freeTier:`Unlimited basic searches + 5 Pro daily`},pros:[`Accurate inline citations`,`Switch between Claude, GPT, and Grok`,`Deep Research Mode`],cons:[`Pro tier required for heavy file analysis`]},{id:`cursor`,name:`Cursor AI`,creator:`Anysphere`,category:`coding`,categoryLabel:`Coding & Dev`,tagline:`The AI-first code editor designed to pair-program with entire repositories.`,description:`A fork of VS Code built from the ground up for AI: features multi-file editing (Composer), indexing of whole codebases, terminal execution, and Claude 3.7 / GPT-4o integration.`,rating:4.9,reviewsCount:14300,monthlyUsers:`15M+`,pricingModel:`Freemium`,priceText:`Free / $20 mo Pro`,featured:!0,trendingScore:96,growthRate:`+58%`,verified:!0,websiteUrl:`https://cursor.com`,tags:[`IDE`,`VS Code`,`Composer`,`Full-Stack`],specs:{contextWindow:`Full Repository Embeddings`,apiAvailable:`BYOK (Bring Your Own Key)`,imageGeneration:`UI Wireframe preview`,voiceMode:`Voice Dictation`,codingSupport:`Multi-file diffs & terminal automation`,platforms:`Windows, macOS, Linux`,freeTier:`14-day trial & 50 fast requests/mo`},pros:[`Indexes your entire git repo`,`Composer multi-file editing`,`Seamless VS Code migration`],cons:[`Requires downloading desktop software`]},{id:`copilot`,name:`GitHub Copilot`,creator:`GitHub / Microsoft`,category:`coding`,categoryLabel:`Coding & Dev`,tagline:`Your AI pair programmer integrated into popular IDEs.`,description:`GitHub Copilot suggests code, autocompletes functions, writes tests, and chats in real time inside VS Code, Visual Studio, JetBrains, and Neovim.`,rating:4.7,reviewsCount:29500,monthlyUsers:`40M+`,pricingModel:`Paid / Free Tier`,priceText:`Free plan / $10 mo Individual`,featured:!0,trendingScore:89,growthRate:`+18%`,verified:!0,websiteUrl:`https://github.com/features/copilot`,tags:[`GitHub`,`Autocomplete`,`Enterprise`,`VS Code`],specs:{contextWindow:`Tab Context & Workspace`,apiAvailable:`Copilot Extensions API`,imageGeneration:`N/A`,voiceMode:`Voice coding`,codingSupport:`Real-time ghost-text autocomplete`,platforms:`VS Code, JetBrains, Visual Studio, Neovim`,freeTier:`2,000 autocompletions & 50 chat messages/mo`},pros:[`Blazing fast inline completion`,`Enterprise security guarantees`,`Integrates in any IDE`],cons:[`Chat is less conversational than Cursor Composer`]},{id:`v0`,name:`v0 by Vercel`,creator:`Vercel`,category:`coding`,categoryLabel:`Coding & Dev`,tagline:`Generative UI system producing production-ready React, Tailwind, & Next.js.`,description:`v0 creates beautiful frontend components and full web applications from prompt or screenshot. Copy React/Tailwind code or deploy directly to Vercel in 1-click.`,rating:4.8,reviewsCount:8900,monthlyUsers:`8M+`,pricingModel:`Freemium`,priceText:`Free / $20 mo Premium`,featured:!0,trendingScore:94,growthRate:`+42%`,verified:!0,websiteUrl:`https://v0.dev`,tags:[`React`,`Tailwind`,`Next.js`,`UI Generation`],specs:{contextWindow:`Full React Tree & NPM packages`,apiAvailable:`Vercel SDK`,imageGeneration:`Screenshots to React`,voiceMode:`Text Prompts`,codingSupport:`Next.js, Tailwind, Lucide, Framer Motion`,platforms:`Web browser`,freeTier:`200 free generation credits monthly`},pros:[`Instant live component preview`,`Clean code standard`,`1-click deploy to Vercel`],cons:[`Focuses primarily on React/Tailwind frontend stack`]},{id:`midjourney`,name:`Midjourney v6`,creator:`Midjourney Research`,category:`image`,categoryLabel:`Image & Design`,tagline:`The benchmark for hyper-realistic and artistic AI image synthesis.`,description:`Midjourney is the premier AI image creation platform renowned for photorealism, artistic lighting, fine textures, prompt adherence, and inpainting.`,rating:4.9,reviewsCount:31e3,monthlyUsers:`25M+`,pricingModel:`Paid`,priceText:`$10 to $60/mo`,featured:!0,trendingScore:93,growthRate:`+21%`,verified:!0,websiteUrl:`https://midjourney.com`,tags:[`Photorealism`,`Art`,`Image Generation`,`Upscaling`],specs:{contextWindow:`Text & Image Prompts`,apiAvailable:`No official public API`,imageGeneration:`Highest aesthetic fidelity v6.1`,voiceMode:`N/A`,codingSupport:`N/A`,platforms:`Web browser & Discord`,freeTier:`Occasional promotional trials`},pros:[`Unmatched aesthetic realism & lighting`,`Web canvas editor & inpainting`,`Consistent character generation`],cons:[`No ongoing free tier`]},{id:`flux`,name:`Flux 1.1 Pro`,creator:`Black Forest Labs`,category:`image`,categoryLabel:`Image & Design`,tagline:`Next-gen open-weights diffusion model with crisp typography & realism.`,description:`Developed by the original creators of Stable Diffusion, Flux 1.1 Pro generates ultra-detailed humans, legible typography on signs, and cinematic compositions at lightning speed.`,rating:4.8,reviewsCount:11200,monthlyUsers:`12M+`,pricingModel:`Freemium`,priceText:`Free on Replicate / API pay-per-image`,featured:!0,trendingScore:96,growthRate:`+64%`,verified:!0,websiteUrl:`https://blackforestlabs.ai`,tags:[`Diffusion`,`Open Weights`,`Typography`,`Fast`],specs:{contextWindow:`High-resolution prompt embeddings`,apiAvailable:`Yes (Replicate, Fal.ai, BFL)`,imageGeneration:`2K resolution in 1.5 seconds`,voiceMode:`N/A`,codingSupport:`N/A`,platforms:`Web, APIs, ComfyUI Local`,freeTier:`Free demo tiers on partner platforms`},pros:[`Renders clear legible text in images`,`Open weights available (Flux Schnell)`,`Extreme detail`],cons:[`High VRAM required for local 24GB GPUs`]},{id:`runway`,name:`Runway Gen-3 Alpha`,creator:`Runway`,category:`video`,categoryLabel:`Video & Animation`,tagline:`Hollywood-grade cinematic video generation and camera control.`,description:`Runway Gen-3 creates photorealistic 4K cinematic video clips with precise director controls, motion brush, camera pan/zoom/tilt, and lip sync audio.`,rating:4.8,reviewsCount:15400,monthlyUsers:`18M+`,pricingModel:`Freemium`,priceText:`Free credits / $12 mo Standard`,featured:!0,trendingScore:91,growthRate:`+36%`,verified:!0,websiteUrl:`https://runwayml.com`,tags:[`Video Gen`,`Cinematic`,`Motion Brush`,`VFX`],specs:{contextWindow:`Text/Image/Video inputs`,apiAvailable:`Yes (Runway API)`,imageGeneration:`Integrated storyboarder`,voiceMode:`Lip-sync synthesis`,codingSupport:`N/A`,platforms:`Web, iOS App`,freeTier:`125 one-time free generation credits`},pros:[`Precise camera trajectory control`,`Realistic human motion and physics`,`Full video editing suite`],cons:[`Heavy credit consumption for high-res clips`]},{id:`elevenlabs`,name:`ElevenLabs`,creator:`ElevenLabs AI`,category:`audio`,categoryLabel:`Voice & Music`,tagline:`The industry standard for lifelike human voice cloning and dubbing.`,description:`ElevenLabs generates natural emotive speech in 32+ languages, instantaneous voice cloning from 1-minute audio, sound effects, and automated video dubbing.`,rating:4.9,reviewsCount:19800,monthlyUsers:`22M+`,pricingModel:`Freemium`,priceText:`Free (10K chars) / $5 mo Starter`,featured:!0,trendingScore:94,growthRate:`+31%`,verified:!0,websiteUrl:`https://elevenlabs.io`,tags:[`Voice Cloning`,`Text-to-Speech`,`Dubbing`,`Sound FX`],specs:{contextWindow:`Audio & Text synthesis`,apiAvailable:`Yes (Ultra low latency API)`,imageGeneration:`N/A`,voiceMode:`Real-time conversational agents`,codingSupport:`SDKs in Python, Node, Go`,platforms:`Web, API, iOS Reader App`,freeTier:`10,000 free characters per month`},pros:[`Indistinguishable human emotion & cadence`,`Instant voice cloning`,`30+ supported languages`],cons:[`Voice cloning restricted on free tier for security`]},{id:`suno`,name:`Suno AI v4`,creator:`Suno`,category:`audio`,categoryLabel:`Voice & Music`,tagline:`Generate full radio-quality songs with vocals, lyrics, and instruments.`,description:`Type any prompt or lyrics, and Suno generates complete multi-genre radio-quality songs with realistic singing voices, solos, harmonies, and mastering in seconds.`,rating:4.8,reviewsCount:14200,monthlyUsers:`16M+`,pricingModel:`Freemium`,priceText:`Free (50 credits/day) / $10 mo Pro`,featured:!0,trendingScore:95,growthRate:`+48%`,verified:!0,websiteUrl:`https://suno.com`,tags:[`Music Gen`,`Songwriting`,`Vocals`,`Stem Separation`],specs:{contextWindow:`Lyrics & Style prompts`,apiAvailable:`N/A`,imageGeneration:`Cover art generation`,voiceMode:`Singing & Rap vocals`,codingSupport:`N/A`,platforms:`Web, iOS, Android`,freeTier:`50 free daily credits (10 songs)`},pros:[`Complete songs with verse/chorus structure`,`Any music genre from Jazz to Metal`,`Free daily credits replenish`],cons:[`Commercial ownership requires Pro subscription`]},{id:`notion`,name:`Notion AI`,creator:`Notion Labs`,category:`productivity`,categoryLabel:`Productivity & Notes`,tagline:`Connected workplace AI that searches across docs, slack, and tasks.`,description:`Notion AI unifies your company knowledge base, summarizes long meeting transcripts, drafts reports, answers questions about past docs, and automates database workflows.`,rating:4.7,reviewsCount:17300,monthlyUsers:`35M+`,pricingModel:`Freemium`,priceText:`$10/user/month add-on`,featured:!0,trendingScore:88,growthRate:`+17%`,verified:!0,websiteUrl:`https://notion.so`,tags:[`Workplace`,`Knowledge Base`,`Notes`,`Automation`],specs:{contextWindow:`All Workspace Pages & Integrations`,apiAvailable:`Notion API`,imageGeneration:`N/A`,voiceMode:`N/A`,codingSupport:`Markdown & Code blocks`,platforms:`Web, macOS, Windows, iOS, Android`,freeTier:`Limited free AI responses for test`},pros:[`Queries your entire team's documentation`,`Auto-fills database tables`,`Natural markdown editing`],cons:[`Add-on subscription fee on top of Notion plan`]},{id:`consensus`,name:`Consensus AI`,creator:`Consensus`,category:`research`,categoryLabel:`Research & Analysis`,tagline:`Search 200M+ peer-reviewed scientific papers for evidence-backed answers.`,description:`Consensus acts as an AI research assistant that scans peer-reviewed scientific literature, measures consensus among experts, and summarizes scientific evidence with citations.`,rating:4.8,reviewsCount:7600,monthlyUsers:`6M+`,pricingModel:`Freemium`,priceText:`Free / $11.99 mo Premium`,featured:!0,trendingScore:90,growthRate:`+39%`,verified:!0,websiteUrl:`https://consensus.app`,tags:[`Science`,`Peer-Reviewed`,`Academic`,`Consensus Meter`],specs:{contextWindow:`200M+ Semantic Scholar papers`,apiAvailable:`Yes (Research API)`,imageGeneration:`N/A`,voiceMode:`N/A`,codingSupport:`N/A`,platforms:`Web browser`,freeTier:`Unlimited basic searches & summaries`},pros:[`Consensus Meter shows scientific agreement`,`Direct links to DOI and PubMed`,`Zero hallucinated papers`],cons:[`Best suited for empirical and medical science queries`]},{id:`luma`,name:`Luma Dream Machine`,creator:`Luma AI`,category:`video`,categoryLabel:`Video & Animation`,tagline:`High-speed realistic video generation with physics and camera motion.`,description:`Luma Dream Machine generates realistic 5-second video sequences with accurate fluid dynamics, reflections, and seamless end-frame video extensions.`,rating:4.7,reviewsCount:9100,monthlyUsers:`11M+`,pricingModel:`Freemium`,priceText:`Free (30 gens/mo) / $29.99 mo`,featured:!1,trendingScore:89,growthRate:`+33%`,verified:!0,websiteUrl:`https://lumalabs.ai/dream-machine`,tags:[`Video Gen`,`3D Motion`,`Camera Tracking`,`Physics`],specs:{contextWindow:`Text/Image to Video`,apiAvailable:`Yes (Luma API)`,imageGeneration:`Integrated`,voiceMode:`N/A`,codingSupport:`N/A`,platforms:`Web browser`,freeTier:`30 free generations per month`},pros:[`Fast rendering times`,`Keyframe looping support`,`Generous free tier`],cons:[`Occasional temporal morphing on complex actions`]},{id:`dalle`,name:`DALL-E 3`,creator:`OpenAI`,category:`image`,categoryLabel:`Image & Design`,tagline:`Intelligent text-to-image generator with superior prompt comprehension.`,description:`DALL-E 3 translates complex, detailed natural language descriptions into exact images, respecting spatial relationships and rendering crisp typography.`,rating:4.7,reviewsCount:24500,monthlyUsers:`60M+`,pricingModel:`Freemium`,priceText:`Free in Bing/ChatGPT / API pay-per-image`,featured:!1,trendingScore:87,growthRate:`+15%`,verified:!0,websiteUrl:`https://openai.com/dall-e-3`,tags:[`OpenAI`,`Prompt Adherence`,`Typography`,`Art`],specs:{contextWindow:`Natural language prompts`,apiAvailable:`Yes (OpenAI Image API)`,imageGeneration:`Native 1024x1024 / 1792x1024`,voiceMode:`N/A`,codingSupport:`N/A`,platforms:`ChatGPT, Microsoft Copilot, Web API`,freeTier:`Free via Microsoft Copilot & ChatGPT Free`},pros:[`Flawless understanding of complex sentences`,`Built directly into ChatGPT`,`Good typography capabilities`],cons:[`Less photorealistic than Midjourney v6`]},{id:`codeium`,name:`Windsurf by Codeium`,creator:`Codeium`,category:`coding`,categoryLabel:`Coding & Dev`,tagline:`The Agentic IDE with Flows and multi-file contextual awareness.`,description:`Windsurf by Codeium introduces Cascade AI: an agentic pair-programmer capable of reading codebase flows, creating files, and running terminal commands in sync.`,rating:4.8,reviewsCount:11800,monthlyUsers:`9M+`,pricingModel:`Freemium`,priceText:`Free tier / $15 mo Pro`,featured:!1,trendingScore:92,growthRate:`+46%`,verified:!0,websiteUrl:`https://codeium.com/windsurf`,tags:[`Agentic IDE`,`Cascade`,`Autocomplete`,`Flows`],specs:{contextWindow:`Entire Project Graph`,apiAvailable:`Yes`,imageGeneration:`N/A`,voiceMode:`N/A`,codingSupport:`Terminal execution & file manipulation`,platforms:`Windows, macOS, Linux, VS Code Plugin`,freeTier:`Generous unlimited individual tier`},pros:[`Cascade agentic workflow`,`Completely free tier for solo devs`,`Fast completions`],cons:[`Newer ecosystem compared to GitHub Copilot`]},{id:`raycast`,name:`Raycast AI`,creator:`Raycast`,category:`productivity`,categoryLabel:`Productivity & Notes`,tagline:`Supercharged desktop spotlight assistant for instant commands.`,description:`Raycast replaces macOS/Windows spotlight with an extensible launcher powered by GPT-4o, Claude 3.7, and DeepSeek, translating text, searching files, and triggering custom scripts.`,rating:4.9,reviewsCount:8400,monthlyUsers:`4M+`,pricingModel:`Freemium`,priceText:`Free App / $8 mo AI Pro`,featured:!1,trendingScore:90,growthRate:`+27%`,verified:!0,websiteUrl:`https://raycast.com`,tags:[`Launcher`,`Spotlight`,`Hotkeys`,`Multi-Model`],specs:{contextWindow:`Clipboard & System Context`,apiAvailable:`Raycast Extensions API`,imageGeneration:`N/A`,voiceMode:`Quick audio transcription`,codingSupport:`Quick code snippets & explanations`,platforms:`macOS, Windows (Beta)`,freeTier:`Core launcher free / limited AI trials`},pros:[`Sub-millisecond keyboard shortcuts`,`Ask AI from any desktop app`,`Custom prompt commands`],cons:[`Native app download required`]},{id:`julius`,name:`Julius AI`,creator:`Julius AI`,category:`research`,categoryLabel:`Research & Analysis`,tagline:`Your AI data analyst for Excel spreadsheets, CSVs, and statistical modeling.`,description:`Upload any Excel, CSV, or database file and Julius writes Python code, plots publication-grade visualizations, runs regressions, and identifies trends automatically.`,rating:4.7,reviewsCount:6500,monthlyUsers:`3M+`,pricingModel:`Freemium`,priceText:`Free (15 queries/mo) / $20 mo Pro`,featured:!1,trendingScore:87,growthRate:`+35%`,verified:!0,websiteUrl:`https://julius.ai`,tags:[`Data Analysis`,`Excel`,`Python`,`Charts`],specs:{contextWindow:`Large CSV / XLSX File parsing`,apiAvailable:`N/A`,imageGeneration:`Matplotlib & Seaborn Chart outputs`,voiceMode:`N/A`,codingSupport:`Python data science code generation`,platforms:`Web browser`,freeTier:`15 free data analysis prompts per month`},pros:[`Exports clean Python code and interactive charts`,`Handles messy raw spreadsheet data`,`No coding knowledge required`],cons:[`Very large files (>100MB) require Pro plan`]}],Vn=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),P=o(((e,t)=>{t.exports=Vn()}))(),Hn=(0,x.createContext)(),Un=({children:e})=>{let[t,n]=(0,x.useState)(()=>localStorage.getItem(`aihub_theme`)||`dark`),[r,i]=(0,x.useState)(()=>{try{let e=localStorage.getItem(`aihub_favorites`);return e?JSON.parse(e):[`chatgpt`,`claude`,`cursor`,`midjourney`]}catch{return[`chatgpt`,`claude`,`cursor`,`midjourney`]}}),[a,o]=(0,x.useState)(()=>({isLoggedIn:localStorage.getItem(`isLoggedIn`)===`true`,name:localStorage.getItem(`userName`)||`Sakshi Patel`,email:localStorage.getItem(`userEmail`)||`sakshi@aihub.dev`,avatar:localStorage.getItem(`userAvatar`)||`👩‍💻`,bio:`AI researcher & full-stack developer exploring future frontier models.`,plan:`AIHUB Pro Explorer`,joined:`Jan 2025`})),[s,c]=(0,x.useState)(()=>{try{let e=localStorage.getItem(`aihub_activity`);return e?JSON.parse(e):[{id:1,type:`explore`,toolName:`Claude 3.7 Sonnet`,time:`10 mins ago`,icon:`🧠`,text:`Explored hybrid reasoning benchmarks`},{id:2,type:`compare`,toolName:`ChatGPT vs Gemini`,time:`2 hours ago`,icon:`⚖️`,text:`Compared 2M context vs DALL-E integration`},{id:3,type:`favorite`,toolName:`Cursor AI`,time:`Yesterday`,icon:`⭐`,text:`Saved Cursor AI to favorite workspace tools`},{id:4,type:`review`,toolName:`DeepSeek R1`,time:`2 days ago`,icon:`💬`,text:`Rated 5 stars for mathematical proofs`}]}catch{return[]}}),[l,u]=(0,x.useState)([`chatgpt`,`claude`]),[d,f]=(0,x.useState)(null),[p,m]=(0,x.useState)(!1),[h,g]=(0,x.useState)(!1),[_,v]=(0,x.useState)(!1),[y,b]=(0,x.useState)([]);(0,x.useEffect)(()=>{document.documentElement.setAttribute(`data-theme`,t),localStorage.setItem(`aihub_theme`,t)},[t]),(0,x.useEffect)(()=>{localStorage.setItem(`aihub_favorites`,JSON.stringify(r))},[r]),(0,x.useEffect)(()=>{localStorage.setItem(`aihub_activity`,JSON.stringify(s))},[s]);let S=(e,t=`success`,n=3e3)=>{let r=Date.now()+Math.random();b(n=>[...n,{id:r,message:e,type:t}]),setTimeout(()=>{b(e=>e.filter(e=>e.id!==r))},n)},C=e=>{b(t=>t.filter(t=>t.id!==e))},w=()=>{n(e=>e===`dark`?`light`:`dark`)},ee=e=>{let t=r.includes(e),n=N.find(t=>t.id===e),a=n?n.name:`Tool`;t?(i(t=>t.filter(t=>t!==e)),S(`Removed ${a} from favorites`,`info`)):(i(t=>[...t,e]),S(`Added ${a} to your favorites! ⭐`,`success`),ne({type:`favorite`,toolName:a,icon:`❤️`,text:`Added ${a} to your favorites`}))},te=e=>r.includes(e),ne=({type:e,toolName:t,icon:n,text:r})=>{let i={id:Date.now(),type:e,toolName:t,time:`Just now`,icon:n||`⚡`,text:r||`Explored ${t}`};c(e=>[i,...e.slice(0,15)])},T=(e,t=`Sakshi Patel`)=>{localStorage.setItem(`isLoggedIn`,`true`),localStorage.setItem(`userEmail`,e),localStorage.setItem(`userName`,t),o({isLoggedIn:!0,name:t,email:e,avatar:`👩‍💻`,bio:`AI researcher & full-stack developer exploring future frontier models.`,plan:`AIHUB Pro Explorer`,joined:`Jan 2025`}),S(`Welcome back, ${t}! 🚀`,`success`)};return(0,P.jsx)(Hn.Provider,{value:{theme:t,toggleTheme:w,favorites:r,toggleFavorite:ee,isFavorite:te,user:a,login:T,logout:()=>{localStorage.removeItem(`isLoggedIn`),o(e=>({...e,isLoggedIn:!1})),S(`Logged out successfully.`,`info`)},loginAsDemo:()=>{T(`demo@aihub.dev`,`Demo Explorer`)},updateProfile:e=>{o(t=>{let n={...t,...e};return n.name&&localStorage.setItem(`userName`,n.name),n.email&&localStorage.setItem(`userEmail`,n.email),n}),S(`Profile settings saved successfully! ✨`,`success`)},recentActivity:s,addActivity:ne,compareList:l,setCompareList:u,selectedToolForModal:d,openToolModal:e=>{f(e),ne({type:`explore`,toolName:e.name,icon:`🔍`,text:`Viewed specifications for ${e.name}`})},closeToolModal:()=>{f(null)},isAiAssistantOpen:p,setIsAiAssistantOpen:m,sidebarCollapsed:h,setSidebarCollapsed:g,mobileMenuOpen:_,setMobileMenuOpen:v,toasts:y,showToast:S,removeToast:C},children:e})},Wn=()=>{let e=(0,x.useContext)(Hn);if(!e)throw Error(`useApp must be used within an AppProvider`);return e},Gn={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Kn=x.createContext&&x.createContext(Gn),qn=[`attr`,`size`,`title`];function Jn(e,t){if(e==null)return{};var n,r,i=Yn(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Yn(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Xn(){return Xn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xn.apply(null,arguments)}function Zn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Qn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Zn(Object(n),!0).forEach(function(t){$n(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Zn(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function $n(e,t,n){return(t=er(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function er(e){var t=tr(e,`string`);return typeof t==`symbol`?t:t+``}function tr(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function nr(e){return e&&e.map((e,t)=>x.createElement(e.tag,Qn({key:t},e.attr),nr(e.child)))}function F(e){return t=>x.createElement(rr,Xn({attr:Qn({},e.attr)},t),nr(e.child))}function rr(e){var t=t=>{var n=e.attr,r=e.size,i=e.title,a=Jn(e,qn),o=r||t.size||`1em`,s;return t.className&&(s=t.className),e.className&&(s=(s?s+` `:``)+e.className),x.createElement(`svg`,Xn({stroke:`currentColor`,fill:`currentColor`,strokeWidth:`0`},t.attr,n,a,{className:s,style:Qn(Qn({color:e.color||t.color},t.style),e.style),height:o,width:o,xmlns:`http://www.w3.org/2000/svg`}),i&&x.createElement(`title`,null,i),e.children)};return Kn===void 0?t(Gn):x.createElement(Kn.Consumer,null,e=>t(e))}function ir(e){return F({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z`},child:[]}]})(e)}function ar(e){return F({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z`},child:[]}]})(e)}function or(e){return F({tag:`svg`,attr:{viewBox:`0 0 488 512`},child:[{tag:`path`,attr:{d:`M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z`},child:[]}]})(e)}function sr(e){return F({tag:`svg`,attr:{viewBox:`0 0 496 512`},child:[{tag:`path`,attr:{d:`M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z`},child:[]}]})(e)}function cr(e){return F({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z`},child:[]}]})(e)}function lr(e){return F({tag:`svg`,attr:{viewBox:`0 0 496 512`},child:[{tag:`path`,attr:{d:`M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z`},child:[]}]})(e)}function ur(e){return F({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M212.333 224.333H12c-6.627 0-12-5.373-12-12V12C0 5.373 5.373 0 12 0h48c6.627 0 12 5.373 12 12v78.112C117.773 39.279 184.26 7.47 258.175 8.007c136.906.994 246.448 111.623 246.157 248.532C504.041 393.258 393.12 504 256.333 504c-64.089 0-122.496-24.313-166.51-64.215-5.099-4.622-5.334-12.554-.467-17.42l33.967-33.967c4.474-4.474 11.662-4.717 16.401-.525C170.76 415.336 211.58 432 256.333 432c97.268 0 176-78.716 176-176 0-97.267-78.716-176-176-176-58.496 0-110.28 28.476-142.274 72.333h98.274c6.627 0 12 5.373 12 12v48c0 6.627-5.373 12-12 12z`},child:[]}]})(e)}function dr(e){return F({tag:`svg`,attr:{viewBox:`0 0 352 512`},child:[{tag:`path`,attr:{d:`M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z`},child:[]}]})(e)}function fr(e){return F({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z`},child:[]}]})(e)}function pr(e){return F({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M296 32h192c13.255 0 24 10.745 24 24v160c0 13.255-10.745 24-24 24H296c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24zm-80 0H24C10.745 32 0 42.745 0 56v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zM0 296v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm296 184h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H296c-13.255 0-24 10.745-24 24v160c0 13.255 10.745 24 24 24z`},child:[]}]})(e)}function mr(e){return F({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z`},child:[]}]})(e)}function hr(e){return F({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z`},child:[]}]})(e)}function gr(e){return F({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z`},child:[]}]})(e)}function _r(e){return F({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z`},child:[]}]})(e)}function vr(e){return F({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z`},child:[]}]})(e)}function yr(e){return F({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z`},child:[]}]})(e)}function br(e){return F({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z`},child:[]}]})(e)}function xr(e){return F({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z`},child:[]}]})(e)}function Sr(e){return F({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z`},child:[]}]})(e)}function Cr(e){return F({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z`},child:[]}]})(e)}function wr(e){return F({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z`},child:[]}]})(e)}function Tr(e){return F({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M224 96l16-32 32-16-32-16-16-32-16 32-32 16 32 16 16 32zM80 160l26.66-53.33L160 80l-53.34-26.67L80 0 53.34 53.33 0 80l53.34 26.67L80 160zm352 128l-26.66 53.33L352 368l53.34 26.67L432 448l26.66-53.33L512 368l-53.34-26.67L432 288zm70.62-193.77L417.77 9.38C411.53 3.12 403.34 0 395.15 0c-8.19 0-16.38 3.12-22.63 9.38L9.38 372.52c-12.5 12.5-12.5 32.76 0 45.25l84.85 84.85c6.25 6.25 14.44 9.37 22.62 9.37 8.19 0 16.38-3.12 22.63-9.37l363.14-363.15c12.5-12.48 12.5-32.75 0-45.24zM359.45 203.46l-50.91-50.91 86.6-86.6 50.91 50.91-86.6 86.6z`},child:[]}]})(e)}function Er(e){return F({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z`},child:[]}]})(e)}function Dr(e){return F({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z`},child:[]}]})(e)}function Or(e){return F({tag:`svg`,attr:{viewBox:`0 0 352 512`},child:[{tag:`path`,attr:{d:`M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z`},child:[]}]})(e)}function kr(e){return F({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z`},child:[]}]})(e)}function Ar(e){return F({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M512 176.001C512 273.203 433.202 352 336 352c-11.22 0-22.19-1.062-32.827-3.069l-24.012 27.014A23.999 23.999 0 0 1 261.223 384H224v40c0 13.255-10.745 24-24 24h-40v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-78.059c0-6.365 2.529-12.47 7.029-16.971l161.802-161.802C163.108 213.814 160 195.271 160 176 160 78.798 238.797.001 335.999 0 433.488-.001 512 78.511 512 176.001zM336 128c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z`},child:[]}]})(e)}function jr(e){return F({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z`},child:[]}]})(e)}function Mr(e){return F({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z`},child:[]}]})(e)}function Nr(e){return F({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z`},child:[]}]})(e)}function Pr(e){return F({tag:`svg`,attr:{viewBox:`0 0 384 512`},child:[{tag:`path`,attr:{d:`M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z`},child:[]}]})(e)}function Fr(e){return F({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z`},child:[]}]})(e)}function Ir(e){return F({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z`},child:[]}]})(e)}function Lr(e){return F({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z`},child:[]}]})(e)}function Rr(e){return F({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z`},child:[]}]})(e)}function zr(e){return F({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z`},child:[]}]})(e)}function Br(e){return F({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z`},child:[]}]})(e)}function Vr(e){return F({tag:`svg`,attr:{viewBox:`0 0 320 512`},child:[{tag:`path`,attr:{d:`M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z`},child:[]}]})(e)}function Hr(e){return F({tag:`svg`,attr:{viewBox:`0 0 320 512`},child:[{tag:`path`,attr:{d:`M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z`},child:[]}]})(e)}function Ur(e){return F({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z`},child:[]}]})(e)}function Wr(e){return F({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z`},child:[]}]})(e)}function Gr(e){return F({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z`},child:[]}]})(e)}function Kr(e){return F({tag:`svg`,attr:{viewBox:`0 0 320 512`},child:[{tag:`path`,attr:{d:`M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z`},child:[]}]})(e)}function qr(e){return F({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z`},child:[]}]})(e)}function Jr(e){return F({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M256 336h-.02c0-16.18 1.34-8.73-85.05-181.51-17.65-35.29-68.19-35.36-85.87 0C-2.06 328.75.02 320.33.02 336H0c0 44.18 57.31 80 128 80s128-35.82 128-80zM128 176l72 144H56l72-144zm511.98 160c0-16.18 1.34-8.73-85.05-181.51-17.65-35.29-68.19-35.36-85.87 0-87.12 174.26-85.04 165.84-85.04 181.51H384c0 44.18 57.31 80 128 80s128-35.82 128-80h-.02zM440 320l72-144 72 144H440zm88 128H352V153.25c23.51-10.29 41.16-31.48 46.39-57.25H528c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16H383.64C369.04 12.68 346.09 0 320 0s-49.04 12.68-63.64 32H112c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h129.61c5.23 25.76 22.87 46.96 46.39 57.25V448H112c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z`},child:[]}]})(e)}function Yr(e){return F({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z`},child:[]}]})(e)}var Xr=({name:e,size:t=44,className:n=``})=>{let r=(e||``).toLowerCase();return r.includes(`chatgpt`)||r.includes(`gpt`)?(0,P.jsxs)(`svg`,{width:t,height:t,viewBox:`0 0 100 100`,fill:`none`,className:n,children:[(0,P.jsx)(`rect`,{width:`100`,height:`100`,rx:`22`,fill:`#10A37F`}),(0,P.jsx)(`path`,{d:`M72.5 45.2c-.6-4.5-3.3-8.3-7.3-10.4-2.2-1.2-4.7-1.8-7.2-1.8-1.5 0-3 .2-4.4.7-1.3-3.6-3.9-6.6-7.4-8.3-4.2-2.1-9.1-2.2-13.4-.3-4.4 2-7.5 5.9-8.7 10.6-3.8 1.4-6.9 4.3-8.5 8.1-2.3 5.3-1.6 11.4 1.7 16.1-.6 4.5 2.1 9 5.8 11.7 2.6 1.9 5.8 2.9 9 2.9 1.4 0 2.8-.2 4.1-.7 1.3 3.6 3.9 6.6 7.4 8.3 4.2 2.1 9.1 2.2 13.4.3 4.4-2 7.5-5.9 8.7-10.6 3.8-1.4 6.9-4.3 8.5-8.1 2.3-5.3 1.6-11.4-1.7-16.1.6-1.5.8-2.9.7-4.3zm-19.7 34c-2.4 0-4.6-.9-6.3-2.6l1.7-2.9c1.2 1.2 2.8 1.9 4.6 1.9 3.6 0 6.6-3 6.6-6.6v-12.8l3.8 2.2v10.6c0 5.6-4.6 10.2-10.4 10.2zm-20.9-8.8c-1.5-2.1-2.1-4.7-1.7-7.3l3.2.9c-.3 1.9.1 3.8 1.2 5.3 2.1 3 6.2 3.8 9.2 1.7l11.1-6.4v4.4l-9.2 5.3c-4.8 2.8-11 1.2-13.8-3.9zm-7-22.3c.9-2.4 2.7-4.3 5.1-5.3l1.4 3c-1.8.8-3.1 2.2-3.8 4-1.4 3.4.2 7.3 3.6 8.7l11.1 4.5-2.2 3.8-9.6-3.9c-4.9-2-7.5-7.6-5.6-12.8zm39.7-5.5l-11.1-6.4v-4.4l9.2-5.3c4.8-2.8 11-1.2 13.8 3.9 1.5 2.1 2.1 4.7 1.7 7.3l-3.2-.9c.3-1.9-.1-3.8-1.2-5.3-2.1-3-6.2-3.8-9.2-1.7zm13.6 20c-.9 2.4-2.7 4.3-5.1 5.3l-1.4-3c1.8-.8 3.1-2.2 3.8-4 1.4-3.4-.2-7.3-3.6-8.7l-11.1-4.5 2.2-3.8 9.6 3.9c4.9 2.1 7.5 7.6 5.6 12.8zm-26.6-7.3l-5.6-3.2 5.6-3.2 5.6 3.2-5.6 3.2z`,fill:`#fff`})]}):r.includes(`gemini`)?(0,P.jsxs)(`svg`,{width:t,height:t,viewBox:`0 0 100 100`,fill:`none`,className:n,children:[(0,P.jsx)(`rect`,{width:`100`,height:`100`,rx:`22`,fill:`#1E1F2E`}),(0,P.jsx)(`defs`,{children:(0,P.jsxs)(`linearGradient`,{id:`geminiGrad`,x1:`0%`,y1:`0%`,x2:`100%`,y2:`100%`,children:[(0,P.jsx)(`stop`,{offset:`0%`,stopColor:`#4E8CFF`}),(0,P.jsx)(`stop`,{offset:`50%`,stopColor:`#9B72CF`}),(0,P.jsx)(`stop`,{offset:`100%`,stopColor:`#FA7298`})]})}),(0,P.jsx)(`path`,{d:`M50 16C50 34.778 34.778 50 16 50C34.778 50 50 65.222 50 84C50 65.222 65.222 50 84 50C65.222 50 50 34.778 50 16Z`,fill:`url(#geminiGrad)`})]}):r.includes(`claude`)?(0,P.jsxs)(`svg`,{width:t,height:t,viewBox:`0 0 100 100`,fill:`none`,className:n,children:[(0,P.jsx)(`rect`,{width:`100`,height:`100`,rx:`22`,fill:`#D97757`}),(0,P.jsx)(`path`,{d:`M50 22C34.536 22 22 34.536 22 50C22 65.464 34.536 78 50 78C65.464 78 78 65.464 78 50C78 34.536 65.464 22 50 22ZM50 32C59.941 32 68 40.059 68 50C68 59.941 59.941 68 50 68C40.059 68 32 59.941 32 50C32 40.059 40.059 32 50 32Z`,fill:`#FFF4E6`}),(0,P.jsx)(`circle`,{cx:`50`,cy:`50`,r:`8`,fill:`#FFF4E6`})]}):r.includes(`deepseek`)?(0,P.jsxs)(`svg`,{width:t,height:t,viewBox:`0 0 100 100`,fill:`none`,className:n,children:[(0,P.jsx)(`rect`,{width:`100`,height:`100`,rx:`22`,fill:`#0E1E38`}),(0,P.jsx)(`path`,{d:`M26 35C26 27.268 32.268 21 40 21H60C67.732 21 74 27.268 74 35V65C74 72.732 67.732 79 60 79H40C32.268 79 26 72.732 26 65V35Z`,stroke:`#4D88FF`,strokeWidth:`6`}),(0,P.jsx)(`path`,{d:`M40 42H60M40 58H54`,stroke:`#00D4FF`,strokeWidth:`6`,strokeLinecap:`round`})]}):r.includes(`copilot`)||r.includes(`github`)?(0,P.jsxs)(`svg`,{width:t,height:t,viewBox:`0 0 100 100`,fill:`none`,className:n,children:[(0,P.jsx)(`rect`,{width:`100`,height:`100`,rx:`22`,fill:`#0D1117`}),(0,P.jsx)(`path`,{d:`M50 20C33.4 20 20 33.4 20 50C20 63.3 28.6 74.5 40.6 78.5C42.1 78.8 42.6 77.9 42.6 77.1C42.6 76.4 42.6 74.5 42.6 72C34.2 73.8 32.5 68 32.5 68C31.1 64.5 29.2 63.6 29.2 63.6C26.5 61.7 29.4 61.8 29.4 61.8C32.4 62 34 64.9 34 64.9C36.7 69.5 41 68.2 42.7 67.4C43 65.4 43.8 64 44.7 63.2C38 62.4 31 59.8 31 48.2C31 44.9 32.2 42.2 34.1 40.1C33.8 39.3 32.8 36.2 34.4 32C34.4 32 36.9 31.2 42.6 35.1C45 34.4 47.5 34.1 50 34.1C52.5 34.1 55 34.4 57.4 35.1C63.1 31.2 65.6 32 65.6 32C67.2 36.2 66.2 39.3 65.9 40.1C67.8 42.2 69 44.9 69 48.2C69 59.8 62 62.4 55.2 63.2C56.3 64.1 57.3 65.9 57.3 68.7C57.3 72.7 57.3 75.9 57.3 76.9C57.3 77.7 57.8 78.7 59.4 78.3C71.4 74.3 80 63.2 80 50C80 33.4 66.6 20 50 20Z`,fill:`#58A6FF`})]}):r.includes(`midjourney`)?(0,P.jsxs)(`svg`,{width:t,height:t,viewBox:`0 0 100 100`,fill:`none`,className:n,children:[(0,P.jsx)(`rect`,{width:`100`,height:`100`,rx:`22`,fill:`#0C101A`}),(0,P.jsx)(`path`,{d:`M24 70L40 30L60 62L76 42`,stroke:`#00D2FF`,strokeWidth:`6`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,P.jsx)(`circle`,{cx:`76`,cy:`42`,r:`5`,fill:`#7C5CFF`}),(0,P.jsx)(`circle`,{cx:`24`,cy:`70`,r:`5`,fill:`#FF4D8D`})]}):r.includes(`cursor`)?(0,P.jsxs)(`svg`,{width:t,height:t,viewBox:`0 0 100 100`,fill:`none`,className:n,children:[(0,P.jsx)(`rect`,{width:`100`,height:`100`,rx:`22`,fill:`#18181B`}),(0,P.jsx)(`path`,{d:`M32 25L68 50L48 54L64 75L54 80L38 59L25 68L32 25Z`,fill:`#A855F7`,stroke:`#C084FC`,strokeWidth:`2`})]}):r.includes(`v0`)||r.includes(`vercel`)?(0,P.jsxs)(`svg`,{width:t,height:t,viewBox:`0 0 100 100`,fill:`none`,className:n,children:[(0,P.jsx)(`rect`,{width:`100`,height:`100`,rx:`22`,fill:`#000000`}),(0,P.jsx)(`path`,{d:`M50 22L78 72H22L50 22Z`,fill:`#FFFFFF`})]}):r.includes(`runway`)||r.includes(`gen-3`)?(0,P.jsxs)(`svg`,{width:t,height:t,viewBox:`0 0 100 100`,fill:`none`,className:n,children:[(0,P.jsx)(`rect`,{width:`100`,height:`100`,rx:`22`,fill:`#141419`}),(0,P.jsx)(`path`,{d:`M28 28H52C63 28 72 37 72 48C72 59 63 68 52 68H44L68 76`,stroke:`#00FF66`,strokeWidth:`7`,strokeLinecap:`round`}),(0,P.jsx)(`path`,{d:`M28 28V72`,stroke:`#00FF66`,strokeWidth:`7`,strokeLinecap:`round`})]}):r.includes(`elevenlabs`)?(0,P.jsxs)(`svg`,{width:t,height:t,viewBox:`0 0 100 100`,fill:`none`,className:n,children:[(0,P.jsx)(`rect`,{width:`100`,height:`100`,rx:`22`,fill:`#0F172A`}),(0,P.jsx)(`rect`,{x:`36`,y:`24`,width:`8`,height:`52`,rx:`4`,fill:`#FFFFFF`}),(0,P.jsx)(`rect`,{x:`56`,y:`24`,width:`8`,height:`52`,rx:`4`,fill:`#6366F1`})]}):r.includes(`suno`)||r.includes(`music`)||r.includes(`udio`)?(0,P.jsxs)(`svg`,{width:t,height:t,viewBox:`0 0 100 100`,fill:`none`,className:n,children:[(0,P.jsx)(`rect`,{width:`100`,height:`100`,rx:`22`,fill:`#2E0854`}),(0,P.jsx)(`path`,{d:`M30 65V35L70 25V55`,stroke:`#FF007A`,strokeWidth:`6`,strokeLinecap:`round`}),(0,P.jsx)(`circle`,{cx:`26`,cy:`65`,r:`9`,fill:`#FF007A`}),(0,P.jsx)(`circle`,{cx:`66`,cy:`55`,r:`9`,fill:`#00E5FF`})]}):r.includes(`notion`)?(0,P.jsxs)(`svg`,{width:t,height:t,viewBox:`0 0 100 100`,fill:`none`,className:n,children:[(0,P.jsx)(`rect`,{width:`100`,height:`100`,rx:`22`,fill:`#FFFFFF`}),(0,P.jsx)(`path`,{d:`M26 28L68 24L74 72L32 76L26 28Z`,fill:`#000000`}),(0,P.jsx)(`path`,{d:`M38 38L60 36L44 64L62 62`,stroke:`#FFFFFF`,strokeWidth:`4`,strokeLinecap:`round`})]}):r.includes(`perplexity`)?(0,P.jsxs)(`svg`,{width:t,height:t,viewBox:`0 0 100 100`,fill:`none`,className:n,children:[(0,P.jsx)(`rect`,{width:`100`,height:`100`,rx:`22`,fill:`#13343B`}),(0,P.jsx)(`circle`,{cx:`50`,cy:`50`,r:`22`,stroke:`#22D3EE`,strokeWidth:`6`}),(0,P.jsx)(`path`,{d:`M50 20V80M20 50H80`,stroke:`#22D3EE`,strokeWidth:`5`})]}):r.includes(`flux`)||r.includes(`stable`)||r.includes(`dall-e`)||r.includes(`leonardo`)?(0,P.jsxs)(`svg`,{width:t,height:t,viewBox:`0 0 100 100`,fill:`none`,className:n,children:[(0,P.jsx)(`rect`,{width:`100`,height:`100`,rx:`22`,fill:`#2D124D`}),(0,P.jsx)(`defs`,{children:(0,P.jsxs)(`linearGradient`,{id:`artGrad`,x1:`0%`,y1:`0%`,x2:`100%`,y2:`100%`,children:[(0,P.jsx)(`stop`,{offset:`0%`,stopColor:`#EC4899`}),(0,P.jsx)(`stop`,{offset:`100%`,stopColor:`#8B5CF6`})]})}),(0,P.jsx)(`path`,{d:`M30 68L46 44L60 60L68 50L78 68H30Z`,fill:`url(#artGrad)`}),(0,P.jsx)(`circle`,{cx:`42`,cy:`36`,r:`6`,fill:`#FBBF24`})]}):(0,P.jsx)(`div`,{style:{width:t,height:t,borderRadius:t*.28,background:`linear-gradient(135deg, #6366f1, #06b6d4)`,display:`flex`,alignItems:`center`,justifyContent:`center`,color:`white`,fontSize:t*.45,fontWeight:`bold`,boxShadow:`0 8px 20px rgba(99,102,241,0.3)`},className:n,children:e?e.substring(0,2).toUpperCase():`AI`})};function Zr(){let e=k(),{theme:t,toggleTheme:n,favorites:r,user:i,logout:a,setIsAiAssistantOpen:o,openToolModal:s,mobileMenuOpen:c,setMobileMenuOpen:l}=Wn(),[u,d]=(0,x.useState)(``),[f,p]=(0,x.useState)(!1),[m,h]=(0,x.useState)(!1),g=(0,x.useRef)(null),_=(0,x.useRef)(null),v=u.trim()?N.filter(e=>e.name.toLowerCase().includes(u.toLowerCase())||e.categoryLabel.toLowerCase().includes(u.toLowerCase())||e.tags.some(e=>e.toLowerCase().includes(u.toLowerCase()))).slice(0,5):[];(0,x.useEffect)(()=>{let e=e=>{g.current&&!g.current.contains(e.target)&&p(!1),_.current&&!_.current.contains(e.target)&&h(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]);let y=e=>{d(``),p(!1),s(e)};return(0,P.jsxs)(`header`,{className:`navbar-modern`,children:[(0,P.jsxs)(`div`,{className:`nav-container`,children:[(0,P.jsxs)(`div`,{className:`nav-left`,children:[(0,P.jsx)(`button`,{type:`button`,className:`mobile-hamburger`,onClick:()=>l(!c),"aria-label":`Toggle navigation`,children:c?(0,P.jsx)(dr,{}):(0,P.jsx)(qr,{})}),(0,P.jsxs)(M,{to:`/dashboard`,className:`nav-brand`,children:[(0,P.jsx)(`div`,{className:`brand-icon-box`,children:(0,P.jsx)(Sr,{})}),(0,P.jsxs)(`span`,{className:`brand-text`,children:[`AI`,(0,P.jsx)(`span`,{className:`gradient-text`,children:`HUB`})]})]})]}),(0,P.jsxs)(`div`,{className:`nav-search-area`,ref:g,children:[(0,P.jsxs)(`form`,{className:`search-input-wrapper`,onSubmit:t=>{t.preventDefault(),u.trim()&&(p(!1),e(`/tools?search=${encodeURIComponent(u)}`))},children:[(0,P.jsx)(yr,{className:`search-icon`}),(0,P.jsx)(`input`,{type:`text`,placeholder:`Search 30+ AI tools (e.g., ChatGPT, Claude, Midjourney)...`,value:u,onChange:e=>d(e.target.value),onFocus:()=>p(!0)}),u&&(0,P.jsx)(`button`,{type:`button`,className:`clear-search-btn`,onClick:()=>d(``),children:(0,P.jsx)(dr,{})})]}),f&&v.length>0&&(0,P.jsxs)(`div`,{className:`search-results-dropdown glass-card`,children:[(0,P.jsx)(`span`,{className:`dropdown-header-title`,children:`TOP MATCHING TOOLS`}),v.map(e=>(0,P.jsxs)(`div`,{className:`search-item`,onClick:()=>y(e),children:[(0,P.jsx)(Xr,{name:e.name,size:30}),(0,P.jsxs)(`div`,{className:`search-item-info`,children:[(0,P.jsx)(`strong`,{children:e.name}),(0,P.jsxs)(`small`,{children:[e.categoryLabel,` • `,e.pricingModel]})]}),(0,P.jsx)(`span`,{className:`search-arrow`,children:`View Spec →`})]},e.id)),(0,P.jsxs)(`div`,{className:`search-view-all`,onClick:()=>{p(!1),e(`/tools?search=${encodeURIComponent(u)}`)},children:[`See all results for "`,u,`" →`]})]})]}),(0,P.jsxs)(`div`,{className:`nav-actions`,children:[(0,P.jsxs)(`button`,{type:`button`,className:`ai-matchmaker-btn`,onClick:()=>o(!0),title:`Ask AI-Hub Matchmaker`,children:[(0,P.jsx)(Tr,{className:`magic-spin`}),(0,P.jsx)(`span`,{children:`AI Matchmaker`})]}),(0,P.jsxs)(M,{to:`/favorites`,className:`nav-icon-badge`,title:`Your Saved Favorites`,children:[(0,P.jsx)(Nr,{}),r.length>0&&(0,P.jsx)(`span`,{className:`fav-count-pill`,children:r.length})]}),(0,P.jsx)(`button`,{type:`button`,className:`nav-btn-icon`,onClick:n,title:t===`dark`?`Switch to Light Mode`:`Switch to Dark Mode`,children:t===`dark`?(0,P.jsx)(mr,{className:`sun-icon`}):(0,P.jsx)(wr,{})}),(0,P.jsxs)(`div`,{className:`profile-menu-wrapper`,ref:_,children:[(0,P.jsxs)(`button`,{type:`button`,className:`profile-avatar-btn`,onClick:()=>h(!m),children:[(0,P.jsx)(`span`,{className:`user-avatar-badge`,children:i.avatar||`👩‍💻`}),(0,P.jsx)(`span`,{className:`user-name-text`,children:i.name?.split(` `)[0]})]}),m&&(0,P.jsxs)(`div`,{className:`profile-popover glass-card`,children:[(0,P.jsxs)(`div`,{className:`popover-user-head`,children:[(0,P.jsx)(`div`,{className:`popover-avatar`,children:i.avatar||`👩‍💻`}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`strong`,{children:i.name}),(0,P.jsx)(`small`,{children:i.email})]})]}),(0,P.jsxs)(`div`,{className:`popover-menu-links`,children:[(0,P.jsxs)(M,{to:`/profile`,onClick:()=>h(!1),className:`popover-link`,children:[(0,P.jsx)(lr,{}),` My Profile & Stats`]}),(0,P.jsxs)(M,{to:`/favorites`,onClick:()=>h(!1),className:`popover-link`,children:[(0,P.jsx)(Nr,{}),` Favorites Collection (`,r.length,`)`]}),(0,P.jsx)(M,{to:`/compare`,onClick:()=>h(!1),className:`popover-link`,children:`⚖️ Tool Comparison Matrix`})]}),(0,P.jsx)(`div`,{className:`popover-footer`,children:(0,P.jsxs)(`button`,{type:`button`,className:`logout-popover-btn`,onClick:()=>{h(!1),a(),e(`/login`)},children:[(0,P.jsx)(gr,{}),` Sign Out`]})})]})]})]})]}),(0,P.jsx)(`style`,{children:`
        .navbar-modern {
          height: 72px;
          position: sticky;
          top: 0;
          z-index: 1000;
          background: var(--navbar-bg);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border-color);
        }

        .nav-container {
          height: 100%;
          padding: 0 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          max-width: 1600px;
          margin: 0 auto;
        }

        .nav-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .mobile-hamburger {
          display: none;
          width: 40px;
          height: 40px;
          border-radius: var(--radius-md);
          background: var(--bg-glass-strong);
          border: 1px solid var(--border-color);
          color: var(--text-main);
          font-size: 18px;
          cursor: pointer;
          place-items: center;
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }

        .brand-icon-box {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-md);
          background: var(--accent-gradient);
          color: white;
          display: grid;
          place-items: center;
          font-size: 20px;
          box-shadow: 0 8px 20px rgba(124, 92, 255, 0.4);
        }

        .brand-text {
          font-size: 22px;
          font-weight: 900;
          letter-spacing: -0.5px;
          color: var(--text-main);
        }

        .nav-search-area {
          flex: 1;
          max-width: 540px;
          position: relative;
        }

        .search-input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          width: 100%;
          height: 44px;
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-pill);
          padding: 0 16px;
          transition: all 0.25s ease;
        }

        .search-input-wrapper:focus-within {
          border-color: var(--accent-primary);
          box-shadow: 0 0 25px rgba(124, 92, 255, 0.25);
        }

        .search-icon {
          color: var(--accent-primary);
          margin-right: 12px;
          font-size: 14px;
        }

        .search-input-wrapper input {
          flex: 1;
          border: none;
          background: transparent;
          color: var(--text-main);
          font-size: 13.5px;
          outline: none;
        }

        .search-input-wrapper input::placeholder {
          color: var(--text-dim);
        }

        .clear-search-btn {
          color: var(--text-dim);
          cursor: pointer;
        }

        .search-results-dropdown {
          position: absolute;
          top: 52px;
          left: 0;
          width: 100%;
          padding: 12px;
          border-radius: var(--radius-lg);
          background: var(--bg-surface);
          border: 1px solid var(--border-highlight);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6);
          z-index: 100;
        }

        .dropdown-header-title {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1px;
          color: var(--text-dim);
          display: block;
          padding: 4px 10px 8px;
        }

        .search-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px 12px;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: 0.2s;
        }

        .search-item:hover {
          background: var(--bg-glass-strong);
          transform: translateX(4px);
        }

        .search-item-info {
          flex: 1;
        }

        .search-item-info strong {
          display: block;
          font-size: 13px;
          color: var(--text-main);
        }

        .search-item-info small {
          color: var(--text-dim);
          font-size: 11px;
        }

        .search-arrow {
          font-size: 12px;
          color: var(--accent-primary);
          font-weight: 700;
        }

        .search-view-all {
          text-align: center;
          padding: 10px;
          font-size: 12px;
          font-weight: 700;
          color: var(--accent-primary);
          border-top: 1px solid var(--border-color);
          margin-top: 6px;
          cursor: pointer;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .ai-matchmaker-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: var(--radius-pill);
          background: rgba(124, 92, 255, 0.14);
          border: 1px solid rgba(124, 92, 255, 0.35);
          color: var(--accent-primary);
          font-weight: 700;
          font-size: 13px;
          cursor: pointer;
          transition: all 0.25s;
        }

        .ai-matchmaker-btn:hover {
          background: var(--accent-gradient);
          color: white;
          box-shadow: 0 5px 20px rgba(124, 92, 255, 0.4);
          transform: translateY(-2px);
        }

        .magic-spin {
          font-size: 14px;
        }

        .nav-icon-badge, .nav-btn-icon {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-md);
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          display: grid;
          place-items: center;
          position: relative;
          cursor: pointer;
          transition: 0.2s;
          font-size: 16px;
        }

        .nav-icon-badge:hover, .nav-btn-icon:hover {
          color: var(--accent-primary);
          border-color: var(--accent-primary);
          background: var(--bg-glass-strong);
        }

        .fav-count-pill {
          position: absolute;
          top: -4px;
          right: -4px;
          background: #ef4444;
          color: white;
          font-size: 10px;
          font-weight: 800;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          box-shadow: 0 2px 8px rgba(239, 68, 68, 0.5);
        }

        .sun-icon {
          color: #f59e0b;
        }

        .profile-menu-wrapper {
          position: relative;
        }

        .profile-avatar-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 4px 12px 4px 6px;
          border-radius: var(--radius-pill);
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          color: var(--text-main);
          cursor: pointer;
          transition: 0.2s;
        }

        .profile-avatar-btn:hover {
          border-color: var(--accent-primary);
        }

        .user-avatar-badge {
          font-size: 18px;
        }

        .user-name-text {
          font-weight: 700;
          font-size: 13px;
        }

        .profile-popover {
          position: absolute;
          top: 50px;
          right: 0;
          width: 260px;
          padding: 14px;
          border-radius: var(--radius-lg);
          background: var(--bg-surface);
          border: 1px solid var(--border-highlight);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
          z-index: 200;
          animation: popoverFade 0.2s ease-out;
        }

        @keyframes popoverFade {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .popover-user-head {
          display: flex;
          align-items: center;
          gap: 10px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-color);
          margin-bottom: 10px;
        }

        .popover-avatar {
          font-size: 26px;
        }

        .popover-user-head strong {
          display: block;
          font-size: 14px;
        }

        .popover-user-head small {
          font-size: 11px;
          color: var(--text-dim);
        }

        .popover-menu-links {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .popover-link {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border-radius: var(--radius-sm);
          font-size: 13px;
          font-weight: 600;
          color: var(--text-muted);
          transition: 0.2s;
        }

        .popover-link:hover {
          background: var(--bg-glass-strong);
          color: var(--accent-primary);
        }

        .popover-footer {
          margin-top: 10px;
          padding-top: 10px;
          border-top: 1px solid var(--border-color);
        }

        .logout-popover-btn {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 9px 12px;
          border-radius: var(--radius-sm);
          color: #ef4444;
          font-weight: 700;
          font-size: 13px;
          cursor: pointer;
          transition: 0.2s;
        }

        .logout-popover-btn:hover {
          background: rgba(239, 68, 68, 0.1);
        }

        @media (max-width: 992px) {
          .mobile-hamburger {
            display: grid;
          }
          .nav-search-area {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .ai-matchmaker-btn span {
            display: none;
          }
          .user-name-text {
            display: none;
          }
          .nav-container {
            padding: 0 16px;
          }
        }
      `})]})}function Qr(){let e=k(),{favorites:t,logout:n,setIsAiAssistantOpen:r,sidebarCollapsed:i,setSidebarCollapsed:a,mobileMenuOpen:o,setMobileMenuOpen:s}=Wn(),c=[{path:`/dashboard`,icon:Mr,title:`Dashboard`,description:`Personal Overview`},{path:`/tools`,icon:Sr,title:`AI Tools Directory`,description:`30+ Frontier Models`},{path:`/categories`,icon:kr,title:`Categories`,description:`Explore 8 Sectors`},{path:`/compare`,icon:Jr,title:`Compare Tools`,description:`Feature Matrix`},{path:`/trending`,icon:Pr,title:`Trending AI`,description:`Leaderboard`,badge:`HOT`},{path:`/favorites`,icon:Nr,title:`Favorites`,description:`Saved Collection`,count:t.length},{path:`/profile`,icon:cr,title:`Profile & Settings`,description:`Preferences`}],l=()=>{s(!1)};return(0,P.jsxs)(P.Fragment,{children:[o&&(0,P.jsx)(`div`,{className:`sidebar-backdrop`,onClick:l}),(0,P.jsxs)(`aside`,{className:`sidebar-container ${i?`is-collapsed`:``} ${o?`mobile-open`:``}`,children:[(0,P.jsx)(`button`,{type:`button`,className:`desktop-collapse-btn`,onClick:()=>a(!i),title:i?`Expand Sidebar`:`Collapse Sidebar`,children:i?(0,P.jsx)(Vr,{}):(0,P.jsx)(Hr,{})}),(0,P.jsx)(`div`,{className:`sidebar-matchmaker-box`,children:(0,P.jsxs)(`button`,{type:`button`,className:`matchmaker-banner-btn`,onClick:()=>{l(),r(!0)},children:[(0,P.jsx)(`div`,{className:`sparkle-circle`,children:(0,P.jsx)(Tr,{})}),!i&&(0,P.jsxs)(`div`,{className:`sparkle-text`,children:[(0,P.jsx)(`strong`,{children:`Ask AI Matchmaker`}),(0,P.jsx)(`small`,{children:`Find ideal AI tools in seconds`})]})]})}),(0,P.jsxs)(`div`,{className:`sidebar-nav-section`,children:[!i&&(0,P.jsx)(`span`,{className:`nav-group-label`,children:`PLATFORM NAVIGATION`}),(0,P.jsx)(`nav`,{className:`nav-links-list`,children:c.map(({path:e,icon:t,title:n,description:r,badge:a,count:o})=>(0,P.jsxs)(On,{to:e,onClick:l,className:({isActive:e})=>`nav-item-link ${e?`active-link`:``}`,title:i?n:``,children:[(0,P.jsx)(`div`,{className:`nav-item-icon`,children:(0,P.jsx)(t,{})}),!i&&(0,P.jsxs)(`div`,{className:`nav-item-body`,children:[(0,P.jsx)(`span`,{className:`nav-item-title`,children:n}),(0,P.jsx)(`span`,{className:`nav-item-desc`,children:r})]}),!i&&a&&(0,P.jsx)(`span`,{className:`badge-hot`,children:a}),!i&&o!==void 0&&o>0&&(0,P.jsx)(`span`,{className:`badge-count`,children:o})]},e))})]}),!i&&(0,P.jsx)(`div`,{className:`sidebar-pro-widget glass-card`,children:(0,P.jsxs)(`div`,{className:`pro-widget-content`,children:[(0,P.jsx)(`span`,{className:`pro-pill`,children:`✨ PRO ACCESS`}),(0,P.jsx)(`h4`,{children:`AI-Hub Pro`}),(0,P.jsx)(`p`,{children:`Get instant API benchmarks, side-by-side token estimators, & alerts.`}),(0,P.jsx)(`button`,{type:`button`,className:`btn-primary pro-upgrade-btn`,onClick:()=>alert(`You already have full free access during AI-Hub Beta!`),children:`Active Beta Plan ✓`})]})}),!i&&(0,P.jsxs)(`div`,{className:`system-status-indicator`,children:[(0,P.jsx)(`span`,{className:`pulse-dot`}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`strong`,{children:`Frontier AI Live`}),(0,P.jsx)(`small`,{children:`All 32 models operational`})]})]}),(0,P.jsx)(`div`,{className:`sidebar-bottom-bar`,children:(0,P.jsxs)(`button`,{type:`button`,className:`nav-item-link logout-btn`,onClick:()=>{l(),n(),e(`/login`)},title:i?`Sign Out`:``,children:[(0,P.jsx)(`div`,{className:`nav-item-icon`,children:(0,P.jsx)(gr,{})}),!i&&(0,P.jsx)(`span`,{className:`nav-item-title`,children:`Sign Out`})]})})]}),(0,P.jsx)(`style`,{children:`
        .sidebar-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(4px);
          z-index: 1050;
        }

        .sidebar-container {
          position: fixed;
          top: 72px;
          left: 0;
          width: 260px;
          height: calc(100vh - 72px);
          background: var(--sidebar-bg);
          border-right: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          padding: 20px 14px;
          z-index: 1100;
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow-y: auto;
          overflow-x: hidden;
        }

        .sidebar-container.is-collapsed {
          width: 80px;
          padding: 20px 10px;
        }

        .desktop-collapse-btn {
          position: absolute;
          top: 14px;
          right: -14px;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          display: grid;
          place-items: center;
          cursor: pointer;
          z-index: 10;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          transition: 0.2s;
        }

        .desktop-collapse-btn:hover {
          background: var(--accent-primary);
          color: white;
          border-color: var(--accent-primary);
          transform: scale(1.1);
        }

        .sidebar-matchmaker-box {
          margin-bottom: 20px;
        }

        .matchmaker-banner-btn {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 12px;
          border-radius: var(--radius-md);
          background: var(--accent-gradient);
          color: white;
          cursor: pointer;
          box-shadow: 0 8px 25px rgba(124, 92, 255, 0.35);
          transition: all 0.25s;
          text-align: left;
        }

        .matchmaker-banner-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(124, 92, 255, 0.5);
        }

        .sparkle-circle {
          width: 34px;
          height: 34px;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.2);
          display: grid;
          place-items: center;
          font-size: 16px;
          flex-shrink: 0;
        }

        .sparkle-text strong {
          display: block;
          font-size: 13px;
        }

        .sparkle-text small {
          font-size: 10.5px;
          opacity: 0.9;
        }

        .sidebar-nav-section {
          flex: 1;
        }

        .nav-group-label {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.2px;
          color: var(--text-dim);
          display: block;
          padding: 0 10px 8px;
        }

        .nav-links-list {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .nav-item-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 12px;
          border-radius: var(--radius-md);
          color: var(--text-muted);
          text-decoration: none;
          transition: all 0.2s;
          border: 1px solid transparent;
        }

        .nav-item-link:hover {
          background: var(--bg-glass-strong);
          color: var(--text-main);
          transform: translateX(3px);
        }

        .nav-item-link.active-link {
          background: var(--bg-card);
          border-color: var(--border-highlight);
          color: var(--accent-primary);
          font-weight: 700;
          box-shadow: 0 4px 15px rgba(124, 92, 255, 0.12);
        }

        .nav-item-icon {
          width: 32px;
          height: 32px;
          border-radius: var(--radius-sm);
          display: grid;
          place-items: center;
          font-size: 16px;
          flex-shrink: 0;
        }

        .active-link .nav-item-icon {
          background: var(--accent-gradient);
          color: #ffffff;
        }

        .nav-item-body {
          flex: 1;
          min-width: 0;
        }

        .nav-item-title {
          display: block;
          font-size: 13px;
          font-weight: 700;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .nav-item-desc {
          display: block;
          font-size: 10.5px;
          color: var(--text-dim);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .badge-hot {
          font-size: 9px;
          font-weight: 900;
          padding: 2px 6px;
          border-radius: var(--radius-pill);
          background: rgba(236, 72, 153, 0.15);
          color: #ec4899;
          border: 1px solid rgba(236, 72, 153, 0.3);
        }

        .badge-count {
          font-size: 10px;
          font-weight: 800;
          padding: 2px 7px;
          border-radius: var(--radius-pill);
          background: var(--accent-primary);
          color: #ffffff;
        }

        .sidebar-pro-widget {
          padding: 16px;
          margin: 16px 0;
          border-radius: var(--radius-md);
          background: linear-gradient(145deg, var(--bg-surface) 0%, rgba(124, 92, 255, 0.08) 100%);
        }

        .pro-pill {
          font-size: 9px;
          font-weight: 800;
          color: var(--accent-primary);
          letter-spacing: 0.5px;
        }

        .pro-widget-content h4 {
          font-size: 14px;
          margin: 4px 0 6px;
        }

        .pro-widget-content p {
          font-size: 11px;
          color: var(--text-muted);
          line-height: 1.5;
          margin-bottom: 12px;
        }

        .pro-upgrade-btn {
          width: 100%;
          padding: 8px !important;
          font-size: 12px !important;
        }

        .system-status-indicator {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border-radius: var(--radius-md);
          background: var(--bg-glass);
          border: 1px solid var(--border-color);
          margin-bottom: 12px;
        }

        .pulse-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 10px #10b981;
          animation: pulseStatus 2s infinite;
        }

        @keyframes pulseStatus {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.7; }
        }

        .system-status-indicator strong {
          display: block;
          font-size: 11px;
        }

        .system-status-indicator small {
          font-size: 10px;
          color: var(--text-dim);
        }

        .sidebar-bottom-bar {
          border-top: 1px solid var(--border-color);
          padding-top: 10px;
        }

        .logout-btn {
          color: #ef4444;
          cursor: pointer;
        }

        .logout-btn:hover {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
        }

        @media (max-width: 992px) {
          .sidebar-container {
            transform: translateX(-100%);
            box-shadow: 20px 0 50px rgba(0, 0, 0, 0.5);
          }

          .sidebar-container.mobile-open {
            transform: translateX(0);
          }

          .desktop-collapse-btn {
            display: none;
          }
        }
      `})]})}function $r(){let{showToast:e}=Wn(),[t,n]=(0,x.useState)(``);return(0,P.jsxs)(`footer`,{className:`footer-modern`,children:[(0,P.jsxs)(`div`,{className:`footer-container`,children:[(0,P.jsxs)(`div`,{className:`footer-grid`,children:[(0,P.jsxs)(`div`,{className:`footer-brand-col`,children:[(0,P.jsxs)(M,{to:`/dashboard`,className:`footer-logo`,children:[(0,P.jsx)(`div`,{className:`footer-logo-icon`,children:(0,P.jsx)(Sr,{})}),(0,P.jsxs)(`span`,{children:[`AI`,(0,P.jsx)(`span`,{className:`gradient-text`,children:`HUB`})]})]}),(0,P.jsx)(`p`,{className:`footer-tagline`,children:`Discover, compare, and benchmark 30+ leading artificial intelligence models, developer tools, creative suites, and productivity engines.`}),(0,P.jsxs)(`div`,{className:`footer-social-links`,children:[(0,P.jsx)(`a`,{href:`https://github.com`,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`GitHub`,children:(0,P.jsx)(sr,{})}),(0,P.jsx)(`a`,{href:`https://twitter.com`,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`Twitter`,children:(0,P.jsx)(ir,{})}),(0,P.jsx)(`a`,{href:`https://linkedin.com`,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`LinkedIn`,children:(0,P.jsx)(ar,{})})]})]}),(0,P.jsxs)(`div`,{className:`footer-col`,children:[(0,P.jsx)(`h4`,{children:`Explore AI`}),(0,P.jsx)(M,{to:`/tools`,children:`All 30+ AI Tools`}),(0,P.jsx)(M,{to:`/categories`,children:`AI Categories`}),(0,P.jsx)(M,{to:`/compare`,children:`Side-by-Side Comparison`}),(0,P.jsx)(M,{to:`/trending`,children:`Hot Trending Leaderboard`}),(0,P.jsx)(M,{to:`/favorites`,children:`Saved Favorites`})]}),(0,P.jsxs)(`div`,{className:`footer-col`,children:[(0,P.jsx)(`h4`,{children:`Top Categories`}),(0,P.jsx)(M,{to:`/tools?category=assistant`,children:`AI Assistants & LLMs`}),(0,P.jsx)(M,{to:`/tools?category=coding`,children:`Coding & IDE Tools`}),(0,P.jsx)(M,{to:`/tools?category=image`,children:`Image & Photorealism`}),(0,P.jsx)(M,{to:`/tools?category=video`,children:`Cinematic Video AI`}),(0,P.jsx)(M,{to:`/tools?category=audio`,children:`Voice & Studio Music`})]}),(0,P.jsxs)(`div`,{className:`footer-col newsletter-col`,children:[(0,P.jsx)(`h4`,{children:`AI-Hub Newsletter`}),(0,P.jsx)(`p`,{children:`Get weekly updates on new frontier models, open-source weights, and major AI releases.`}),(0,P.jsxs)(`form`,{className:`footer-newsletter-form`,onSubmit:r=>{r.preventDefault(),t&&(e(`🎉 Thanks for subscribing to AI-Hub Weekly Intelligence!`,`success`),n(``))},children:[(0,P.jsx)(`input`,{type:`email`,placeholder:`Enter your email`,value:t,onChange:e=>n(e.target.value),required:!0}),(0,P.jsx)(`button`,{type:`submit`,className:`btn-primary subscribe-btn`,children:(0,P.jsx)(Cr,{})})]})]})]}),(0,P.jsxs)(`div`,{className:`footer-bottom-row`,children:[(0,P.jsxs)(`p`,{children:[`© `,new Date().getFullYear(),` AI-HUB Platform. Built with high precision & state-of-the-art design.`]}),(0,P.jsxs)(`p`,{className:`made-with-love`,children:[`Engineered with `,(0,P.jsx)(Nr,{className:`heart-pink`}),` for AI creators & builders worldwide.`]})]})]}),(0,P.jsx)(`style`,{children:`
        .footer-modern {
          margin-top: 80px;
          border-top: 1px solid var(--border-color);
          background: var(--bg-surface);
          padding: 60px 24px 30px;
          color: var(--text-muted);
        }

        .footer-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 40px;
          margin-bottom: 50px;
        }

        .footer-brand-col {
          max-width: 360px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          font-size: 24px;
          font-weight: 900;
          color: var(--text-main);
          margin-bottom: 16px;
        }

        .footer-logo-icon {
          width: 38px;
          height: 38px;
          border-radius: var(--radius-md);
          background: var(--accent-gradient);
          color: white;
          display: grid;
          place-items: center;
          font-size: 18px;
        }

        .footer-tagline {
          font-size: 13.5px;
          line-height: 1.7;
          color: var(--text-dim);
          margin-bottom: 20px;
        }

        .footer-social-links {
          display: flex;
          gap: 10px;
        }

        .footer-social-links a {
          width: 38px;
          height: 38px;
          border-radius: var(--radius-sm);
          background: var(--bg-glass-strong);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          display: grid;
          place-items: center;
          transition: 0.2s;
        }

        .footer-social-links a:hover {
          color: var(--accent-primary);
          border-color: var(--accent-primary);
          transform: translateY(-2px);
        }

        .footer-col h4 {
          font-size: 15px;
          font-weight: 800;
          color: var(--text-main);
          margin-bottom: 18px;
        }

        .footer-col a {
          display: block;
          font-size: 13.5px;
          color: var(--text-dim);
          margin-bottom: 10px;
          transition: 0.2s;
        }

        .footer-col a:hover {
          color: var(--accent-primary);
          transform: translateX(3px);
        }

        .newsletter-col p {
          font-size: 13px;
          color: var(--text-dim);
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .footer-newsletter-form {
          display: flex;
          gap: 8px;
        }

        .footer-newsletter-form input {
          flex: 1;
          background: var(--bg-main);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 10px 14px;
          color: var(--text-main);
          font-size: 13px;
          outline: none;
        }

        .footer-newsletter-form input:focus {
          border-color: var(--accent-primary);
        }

        .subscribe-btn {
          width: 44px;
          height: 44px;
          padding: 0 !important;
          border-radius: var(--radius-md) !important;
        }

        .footer-bottom-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 24px;
          border-top: 1px solid var(--border-color);
          font-size: 12.5px;
          color: var(--text-dim);
          flex-wrap: wrap;
          gap: 12px;
        }

        .heart-pink {
          color: #ec4899;
          vertical-align: middle;
          margin: 0 3px;
        }

        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .footer-bottom-row {
            flex-direction: column;
            text-align: center;
          }
        }
      `})]})}function ei(){let{selectedToolForModal:e,closeToolModal:t,toggleFavorite:n,isFavorite:r,showToast:i}=Wn(),[a,o]=(0,x.useState)(`overview`),[s,c]=(0,x.useState)(5),[l,u]=(0,x.useState)(``),[d,f]=(0,x.useState)([{author:`Arjun Verma`,role:`AI Engineer`,rating:5,time:`2 days ago`,comment:`Unbelievable reasoning speed and accuracy. Replaced multiple other tools in my daily workflow.`},{author:`Elena Rostova`,role:`Product Designer`,rating:5,time:`1 week ago`,comment:`The multimodal understanding is unmatched. Saves me 10+ hours every week.`}]);if(!e)return null;let p=e,m=r(p.id);return(0,P.jsxs)(`div`,{className:`modal-backdrop`,onClick:t,children:[(0,P.jsxs)(`div`,{className:`modal-container`,onClick:e=>e.stopPropagation(),children:[(0,P.jsxs)(`div`,{className:`modal-banner`,children:[(0,P.jsx)(`button`,{className:`modal-close-btn`,onClick:t,title:`Close Modal`,children:(0,P.jsx)(dr,{})}),(0,P.jsxs)(`div`,{className:`modal-header-content`,children:[(0,P.jsx)(`div`,{className:`modal-logo-wrapper`,children:(0,P.jsx)(Xr,{name:p.name,size:64})}),(0,P.jsxs)(`div`,{className:`modal-title-area`,children:[(0,P.jsxs)(`div`,{className:`title-row`,children:[(0,P.jsx)(`h2`,{children:p.name}),p.verified&&(0,P.jsxs)(`span`,{className:`verified-pill`,title:`Verified AI Platform`,children:[(0,P.jsx)(_r,{}),` Verified`]}),(0,P.jsx)(`span`,{className:`badge-pricing ${(p.pricingModel||`freemium`).toLowerCase()}`,children:p.pricingModel})]}),(0,P.jsxs)(`p`,{className:`creator-text`,children:[`by `,p.creator,` • `,p.categoryLabel]}),(0,P.jsxs)(`div`,{className:`stats-pill-row`,children:[(0,P.jsxs)(`span`,{children:[(0,P.jsx)(hr,{className:`star-icon`}),` `,p.rating,` (`,p.reviewsCount.toLocaleString(),` reviews)`]}),(0,P.jsxs)(`span`,{children:[`👥 `,p.monthlyUsers,` monthly users`]}),(0,P.jsxs)(`span`,{children:[`📈 `,p.growthRate,` growth`]})]})]})]}),(0,P.jsxs)(`div`,{className:`modal-actions-top`,children:[(0,P.jsxs)(`button`,{className:`fav-btn-modal ${m?`active`:``}`,onClick:()=>n(p.id),children:[(0,P.jsx)(Nr,{}),` `,m?`Favorited`:`Add to Favorites`]}),(0,P.jsxs)(`button`,{className:`share-btn-modal`,onClick:()=>{navigator.clipboard.writeText(window.location.origin+`/tools?search=${encodeURIComponent(p.name)}`),i(`Tool link copied to clipboard! 📋`,`info`)},children:[(0,P.jsx)(vr,{}),` Share`]}),(0,P.jsxs)(`a`,{href:p.websiteUrl,target:`_blank`,rel:`noopener noreferrer`,className:`btn-primary visit-btn-modal`,children:[(0,P.jsx)(xr,{}),` Launch Tool `,(0,P.jsx)(Lr,{style:{fontSize:`11px`}})]})]})]}),(0,P.jsxs)(`div`,{className:`modal-tabs`,children:[(0,P.jsx)(`button`,{className:`tab-btn ${a===`overview`?`active`:``}`,onClick:()=>o(`overview`),children:`Overview & Features`}),(0,P.jsx)(`button`,{className:`tab-btn ${a===`specs`?`active`:``}`,onClick:()=>o(`specs`),children:`Technical Specs & Pricing`}),(0,P.jsxs)(`button`,{className:`tab-btn ${a===`reviews`?`active`:``}`,onClick:()=>o(`reviews`),children:[`Community Reviews (`,d.length,`)`]})]}),(0,P.jsxs)(`div`,{className:`modal-body`,children:[a===`overview`&&(0,P.jsxs)(`div`,{className:`tab-content`,children:[(0,P.jsxs)(`div`,{className:`overview-section`,children:[(0,P.jsxs)(`h3`,{children:[`About `,p.name]}),(0,P.jsx)(`p`,{className:`long-desc`,children:p.description})]}),(0,P.jsx)(`div`,{className:`tags-cluster`,children:p.tags.map(e=>(0,P.jsxs)(`span`,{className:`tool-tag`,children:[`#`,e]},e))}),(0,P.jsxs)(`div`,{className:`pros-cons-grid`,children:[(0,P.jsxs)(`div`,{className:`pros-box`,children:[(0,P.jsxs)(`h4`,{children:[(0,P.jsx)(Ur,{className:`check-icon`}),` Key Strengths`]}),(0,P.jsx)(`ul`,{children:p.pros.map((e,t)=>(0,P.jsx)(`li`,{children:e},t))})]}),(0,P.jsxs)(`div`,{className:`cons-box`,children:[(0,P.jsxs)(`h4`,{children:[(0,P.jsx)(fr,{className:`cross-icon`}),` Considerations`]}),(0,P.jsx)(`ul`,{children:p.cons.map((e,t)=>(0,P.jsx)(`li`,{children:e},t))})]})]})]}),a===`specs`&&(0,P.jsx)(`div`,{className:`tab-content`,children:(0,P.jsxs)(`div`,{className:`specs-table`,children:[(0,P.jsxs)(`div`,{className:`spec-row`,children:[(0,P.jsx)(`span`,{className:`spec-key`,children:`Pricing Details`}),(0,P.jsx)(`span`,{className:`spec-val highlight`,children:p.priceText})]}),(0,P.jsxs)(`div`,{className:`spec-row`,children:[(0,P.jsx)(`span`,{className:`spec-key`,children:`Context Window`}),(0,P.jsx)(`span`,{className:`spec-val`,children:p.specs.contextWindow})]}),(0,P.jsxs)(`div`,{className:`spec-row`,children:[(0,P.jsx)(`span`,{className:`spec-key`,children:`API Availability`}),(0,P.jsx)(`span`,{className:`spec-val`,children:p.specs.apiAvailable})]}),(0,P.jsxs)(`div`,{className:`spec-row`,children:[(0,P.jsx)(`span`,{className:`spec-key`,children:`Image Generation`}),(0,P.jsx)(`span`,{className:`spec-val`,children:p.specs.imageGeneration})]}),(0,P.jsxs)(`div`,{className:`spec-row`,children:[(0,P.jsx)(`span`,{className:`spec-key`,children:`Voice Capabilities`}),(0,P.jsx)(`span`,{className:`spec-val`,children:p.specs.voiceMode})]}),(0,P.jsxs)(`div`,{className:`spec-row`,children:[(0,P.jsx)(`span`,{className:`spec-key`,children:`Coding Assistance`}),(0,P.jsx)(`span`,{className:`spec-val`,children:p.specs.codingSupport})]}),(0,P.jsxs)(`div`,{className:`spec-row`,children:[(0,P.jsx)(`span`,{className:`spec-key`,children:`Supported Platforms`}),(0,P.jsx)(`span`,{className:`spec-val`,children:p.specs.platforms})]}),(0,P.jsxs)(`div`,{className:`spec-row`,children:[(0,P.jsx)(`span`,{className:`spec-key`,children:`Free Tier Policy`}),(0,P.jsx)(`span`,{className:`spec-val`,children:p.specs.freeTier})]})]})}),a===`reviews`&&(0,P.jsxs)(`div`,{className:`tab-content`,children:[(0,P.jsxs)(`form`,{className:`add-review-form`,onSubmit:e=>{e.preventDefault(),l.trim()&&(f([{author:`Sakshi Patel (You)`,role:`AI Explorer`,rating:s,time:`Just now`,comment:l},...d]),u(``),i(`Thank you! Your review has been published! ⭐`,`success`))},children:[(0,P.jsx)(`h4`,{children:`Write a Community Review`}),(0,P.jsxs)(`div`,{className:`rating-select-row`,children:[(0,P.jsx)(`span`,{children:`Your Rating:`}),(0,P.jsx)(`div`,{className:`star-selector`,children:[1,2,3,4,5].map(e=>(0,P.jsx)(`button`,{type:`button`,className:e<=s?`active`:``,onClick:()=>c(e),children:`★`},e))})]}),(0,P.jsx)(`textarea`,{rows:`3`,placeholder:`Share your thoughts on ${p.name}...`,value:l,onChange:e=>u(e.target.value),required:!0}),(0,P.jsx)(`button`,{type:`submit`,className:`btn-primary submit-review-btn`,children:`Publish Review`})]}),(0,P.jsx)(`div`,{className:`reviews-list`,children:d.map((e,t)=>(0,P.jsxs)(`div`,{className:`review-item`,children:[(0,P.jsxs)(`div`,{className:`review-header`,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`strong`,{children:e.author}),(0,P.jsx)(`span`,{className:`author-role`,children:e.role})]}),(0,P.jsxs)(`div`,{className:`review-meta`,children:[(0,P.jsx)(`span`,{className:`review-stars`,children:`★`.repeat(e.rating)}),(0,P.jsx)(`span`,{className:`review-time`,children:e.time})]})]}),(0,P.jsxs)(`p`,{className:`review-body`,children:[`"`,e.comment,`"`]})]},t))})]})]})]}),(0,P.jsx)(`style`,{children:`
        .modal-banner {
          padding: 30px;
          background: linear-gradient(180deg, var(--bg-surface) 0%, rgba(124, 92, 255, 0.06) 100%);
          border-bottom: 1px solid var(--border-color);
          position: relative;
        }

        .modal-close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--bg-glass-strong);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          display: grid;
          place-items: center;
          cursor: pointer;
          transition: 0.2s;
        }

        .modal-close-btn:hover {
          color: #fff;
          background: #ef4444;
          border-color: #ef4444;
        }

        .modal-header-content {
          display: flex;
          gap: 20px;
          align-items: center;
          margin-bottom: 22px;
        }

        .modal-title-area {
          flex: 1;
        }

        .title-row {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .title-row h2 {
          font-size: 26px;
          font-weight: 800;
          color: var(--text-main);
          margin: 0;
        }

        .verified-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 3px 9px;
          border-radius: var(--radius-pill);
          background: rgba(6, 182, 212, 0.15);
          color: #06b6d4;
          font-size: 11px;
          font-weight: 700;
        }

        .creator-text {
          color: var(--text-muted);
          font-size: 13px;
          margin: 4px 0 10px;
        }

        .stats-pill-row {
          display: flex;
          gap: 16px;
          font-size: 13px;
          color: var(--text-dim);
          flex-wrap: wrap;
        }

        .star-icon {
          color: #f59e0b;
        }

        .modal-actions-top {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .fav-btn-modal, .share-btn-modal {
          padding: 10px 18px;
          border-radius: var(--radius-md);
          background: var(--bg-glass-strong);
          border: 1px solid var(--border-color);
          color: var(--text-main);
          font-weight: 600;
          font-size: 13px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: 0.2s;
        }

        .fav-btn-modal.active {
          color: #ef4444;
          border-color: rgba(239, 68, 68, 0.4);
          background: rgba(239, 68, 68, 0.1);
        }

        .visit-btn-modal {
          margin-left: auto;
        }

        .modal-tabs {
          display: flex;
          border-bottom: 1px solid var(--border-color);
          background: var(--bg-main);
          padding: 0 30px;
          gap: 8px;
        }

        .tab-btn {
          padding: 14px 18px;
          color: var(--text-muted);
          font-weight: 600;
          font-size: 14px;
          border-bottom: 2px solid transparent;
          cursor: pointer;
          transition: 0.2s;
        }

        .tab-btn:hover {
          color: var(--text-main);
        }

        .tab-btn.active {
          color: var(--accent-primary);
          border-bottom-color: var(--accent-primary);
        }

        .modal-body {
          padding: 28px 30px;
        }

        .long-desc {
          color: var(--text-muted);
          line-height: 1.7;
          font-size: 15px;
          margin-top: 8px;
        }

        .tags-cluster {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin: 20px 0;
        }

        .tool-tag {
          padding: 4px 10px;
          border-radius: var(--radius-pill);
          background: var(--bg-glass-strong);
          color: var(--text-muted);
          font-size: 12px;
          font-weight: 600;
        }

        .pros-cons-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-top: 20px;
        }

        .pros-box, .cons-box {
          padding: 20px;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
          background: var(--bg-glass);
        }

        .pros-box h4 {
          color: #10b981;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          margin-bottom: 12px;
        }

        .cons-box h4 {
          color: #f59e0b;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          margin-bottom: 12px;
        }

        .pros-box ul, .cons-box ul {
          list-style: none;
          padding: 0;
          margin: 0;
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .pros-box li::before {
          content: "✓ ";
          color: #10b981;
          font-weight: bold;
        }

        .cons-box li::before {
          content: "• ";
          color: #f59e0b;
          font-weight: bold;
        }

        /* Specs table */
        .specs-table {
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          overflow: hidden;
        }

        .spec-row {
          display: grid;
          grid-template-columns: 180px 1fr;
          padding: 12px 18px;
          border-bottom: 1px solid var(--border-color);
          font-size: 14px;
        }

        .spec-row:last-child {
          border-bottom: none;
        }

        .spec-key {
          color: var(--text-dim);
          font-weight: 600;
        }

        .spec-val {
          color: var(--text-main);
        }

        .spec-val.highlight {
          color: var(--accent-primary);
          font-weight: 700;
        }

        /* Reviews */
        .add-review-form {
          padding: 20px;
          border-radius: var(--radius-md);
          background: var(--bg-glass-strong);
          border: 1px solid var(--border-color);
          margin-bottom: 24px;
        }

        .add-review-form h4 {
          margin-bottom: 12px;
        }

        .rating-select-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
          font-size: 14px;
        }

        .star-selector button {
          font-size: 20px;
          color: var(--text-dim);
          cursor: pointer;
          transition: 0.15s;
        }

        .star-selector button.active {
          color: #f59e0b;
        }

        .add-review-form textarea {
          width: 100%;
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: 10px 14px;
          color: var(--text-main);
          font-size: 14px;
          margin-bottom: 12px;
          outline: none;
        }

        .add-review-form textarea:focus {
          border-color: var(--accent-primary);
        }

        .reviews-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .review-item {
          padding: 16px 18px;
          border-radius: var(--radius-md);
          background: var(--bg-glass);
          border: 1px solid var(--border-color);
        }

        .review-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
        }

        .author-role {
          display: block;
          font-size: 11px;
          color: var(--text-dim);
        }

        .review-stars {
          color: #f59e0b;
          margin-right: 8px;
        }

        .review-time {
          font-size: 12px;
          color: var(--text-dim);
        }

        .review-body {
          color: var(--text-muted);
          font-size: 14px;
          line-height: 1.5;
          margin: 0;
        }

        @media (max-width: 600px) {
          .modal-header-content {
            flex-direction: column;
            align-items: flex-start;
          }
          .modal-banner, .modal-body, .modal-tabs {
            padding: 20px 16px;
          }
          .pros-cons-grid {
            grid-template-columns: 1fr;
          }
          .spec-row {
            grid-template-columns: 1fr;
            gap: 4px;
          }
          .visit-btn-modal {
            margin-left: 0;
            width: 100%;
          }
        }
      `})]})}function ti(){let{isAiAssistantOpen:e,setIsAiAssistantOpen:t,openToolModal:n}=Wn(),[r,i]=(0,x.useState)([{role:`assistant`,text:`👋 Hi! I'm your AI-Hub Matchmaker. Tell me what task you're trying to accomplish (e.g. *'I need the best coding assistant'* or *'Free tool for image generation'*) and I'll find the perfect AI tool for you!`,tools:[`claude`,`cursor`,`midjourney`]}]),[a,o]=(0,x.useState)(``),[s,c]=(0,x.useState)(!1),l=(0,x.useRef)(null);if((0,x.useEffect)(()=>{e&&l.current?.scrollIntoView({behavior:`smooth`})},[r,e,s]),!e)return null;let u=e=>{let t=e||a;if(!t.trim())return;let n={role:`user`,text:t};i(e=>[...e,n]),o(``),c(!0),setTimeout(()=>{let e=t.toLowerCase(),n=``,r=[];e.includes(`code`)||e.includes(`program`)||e.includes(`developer`)||e.includes(`python`)||e.includes(`react`)?(n=`For software engineering and programming, **Claude 3.7 Sonnet** and **Cursor AI** are currently leading the industry. Claude 3.7 excels at complex architectural reasoning, while Cursor offers full codebase indexing and multi-file editing (Composer). If you want instant UI generation, checkout **v0 by Vercel**!`,r=[`claude`,`cursor`,`v0`,`copilot`]):e.includes(`image`)||e.includes(`art`)||e.includes(`photo`)||e.includes(`logo`)||e.includes(`draw`)?(n=`For high-end image synthesis, **Midjourney v6** provides unmatched artistic photorealism. If you need crisp text inside images or open-weights, **Flux 1.1 Pro** is state-of-the-art. For conversational prompt adherence, **DALL-E 3** inside ChatGPT is great.`,r=[`midjourney`,`flux`,`dalle`]):e.includes(`video`)||e.includes(`animation`)||e.includes(`movie`)||e.includes(`clip`)?(n=`For AI video generation, **Runway Gen-3 Alpha** provides cinematic camera controls and director modes. **Luma Dream Machine** is exceptionally fast with 30 free generations per month.`,r=[`runway`,`luma`]):e.includes(`voice`)||e.includes(`audio`)||e.includes(`music`)||e.includes(`song`)||e.includes(`speech`)?(n=`For ultra-realistic human voice cloning and text-to-speech, **ElevenLabs** is the clear leader. If you're looking to generate full studio-quality music tracks with singing, **Suno AI v4** is incredible!`,r=[`elevenlabs`,`suno`]):e.includes(`free`)||e.includes(`cheap`)||e.includes(`open source`)?(n=`Here are the top high-performing free/open-weight AI platforms: **DeepSeek R1** (100% free reasoning online), **Google Gemini** (free 2.0 Flash access with 1M context), and **Windsurf by Codeium** (free individual tier for devs).`,r=[`deepseek`,`gemini`,`codeium`]):e.includes(`research`)||e.includes(`science`)||e.includes(`paper`)||e.includes(`search`)?(n=`For scientific inquiry and literature reviews, **Consensus AI** searches 200M+ peer-reviewed papers with expert agreement scoring. For general search with live web citations, **Perplexity AI** is the best.`,r=[`consensus`,`perplexity`,`julius`]):(n=`Based on your request, I recommend exploring our top-ranked general purpose assistants: **ChatGPT** (versatile all-rounder with voice & DALL-E), **Claude 3.7** (deep reasoning & coding), and **Google Gemini** (massive 2M context).`,r=[`chatgpt`,`claude`,`gemini`]),i(e=>[...e,{role:`assistant`,text:n,tools:r}]),c(!1)},700)};return(0,P.jsxs)(`div`,{className:`modal-backdrop`,onClick:()=>t(!1),children:[(0,P.jsxs)(`div`,{className:`modal-container ai-assistant-modal`,onClick:e=>e.stopPropagation(),children:[(0,P.jsxs)(`div`,{className:`assistant-header`,children:[(0,P.jsxs)(`div`,{className:`assistant-brand`,children:[(0,P.jsx)(`div`,{className:`assistant-avatar`,children:(0,P.jsx)(Sr,{})}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`h3`,{children:`AI-Hub Matchmaker`}),(0,P.jsx)(`p`,{children:`Instant tool recommendations powered by intelligent matching`})]})]}),(0,P.jsx)(`button`,{className:`modal-close-btn`,onClick:()=>t(!1),children:(0,P.jsx)(dr,{})})]}),(0,P.jsxs)(`div`,{className:`assistant-chat-body`,children:[r.map((e,r)=>(0,P.jsxs)(`div`,{className:`chat-bubble-wrap ${e.role}`,children:[e.role===`assistant`&&(0,P.jsx)(`div`,{className:`bubble-avatar`,children:(0,P.jsx)(Sr,{})}),(0,P.jsxs)(`div`,{className:`bubble-content`,children:[(0,P.jsx)(`div`,{className:`bubble-text`,children:e.text}),e.tools&&e.tools.length>0&&(0,P.jsxs)(`div`,{className:`suggested-tools-strip`,children:[(0,P.jsxs)(`span`,{className:`strip-title`,children:[(0,P.jsx)(Or,{}),` Recommended Tools:`]}),(0,P.jsx)(`div`,{className:`tools-mini-grid`,children:e.tools.map(e=>{let r=N.find(t=>t.id===e);return r?(0,P.jsxs)(`div`,{className:`tool-mini-card`,onClick:()=>{t(!1),n(r)},children:[(0,P.jsx)(Xr,{name:r.name,size:28}),(0,P.jsxs)(`div`,{className:`mini-info`,children:[(0,P.jsx)(`strong`,{children:r.name}),(0,P.jsx)(`small`,{children:r.categoryLabel})]}),(0,P.jsx)(`span`,{className:`mini-arrow`,children:`→`})]},r.id):null})})]})]})]},r)),s&&(0,P.jsxs)(`div`,{className:`chat-bubble-wrap assistant`,children:[(0,P.jsx)(`div`,{className:`bubble-avatar`,children:(0,P.jsx)(Sr,{})}),(0,P.jsxs)(`div`,{className:`typing-dots`,children:[(0,P.jsx)(`span`,{}),(0,P.jsx)(`span`,{}),(0,P.jsx)(`span`,{})]})]}),(0,P.jsx)(`div`,{ref:l})]}),(0,P.jsx)(`div`,{className:`sample-prompts-bar`,children:[`Best AI for coding full-stack apps?`,`Free tools for realistic image generation`,`How to generate full music tracks?`,`Best search engine with citations`].map((e,t)=>(0,P.jsxs)(`button`,{className:`prompt-chip`,onClick:()=>u(e),children:[(0,P.jsx)(Tr,{}),` `,e]},t))}),(0,P.jsxs)(`form`,{className:`assistant-input-form`,onSubmit:e=>{e.preventDefault(),u()},children:[(0,P.jsx)(`input`,{type:`text`,placeholder:`Ask AI-Hub: 'Which tool is best for...'`,value:a,onChange:e=>o(e.target.value)}),(0,P.jsx)(`button`,{type:`submit`,className:`btn-primary send-msg-btn`,children:(0,P.jsx)(Cr,{})})]})]}),(0,P.jsx)(`style`,{children:`
        .ai-assistant-modal {
          max-width: 680px;
          display: flex;
          flex-direction: column;
          height: 600px;
          max-height: 85vh;
        }

        .assistant-header {
          padding: 18px 24px;
          border-bottom: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: var(--bg-surface);
        }

        .assistant-brand {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .assistant-avatar {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: var(--accent-gradient);
          color: white;
          display: grid;
          place-items: center;
          font-size: 20px;
          box-shadow: 0 5px 15px rgba(124, 92, 255, 0.4);
        }

        .assistant-brand h3 {
          font-size: 17px;
          margin: 0;
        }

        .assistant-brand p {
          font-size: 12px;
          color: var(--text-dim);
          margin: 2px 0 0;
        }

        .assistant-chat-body {
          flex: 1;
          overflow-y: auto;
          padding: 20px 24px;
          display: flex;
          flex-direction: column;
          gap: 18px;
          background: var(--bg-main);
        }

        .chat-bubble-wrap {
          display: flex;
          gap: 12px;
          max-width: 85%;
        }

        .chat-bubble-wrap.user {
          margin-left: auto;
          flex-direction: row-reverse;
        }

        .bubble-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--accent-primary);
          color: white;
          display: grid;
          place-items: center;
          font-size: 14px;
          flex-shrink: 0;
        }

        .bubble-content {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .bubble-text {
          padding: 12px 18px;
          border-radius: 18px;
          font-size: 14px;
          line-height: 1.6;
        }

        .assistant .bubble-text {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          color: var(--text-main);
          border-top-left-radius: 4px;
        }

        .user .bubble-text {
          background: var(--accent-primary);
          color: #ffffff;
          border-top-right-radius: 4px;
        }

        .suggested-tools-strip {
          padding: 12px;
          border-radius: var(--radius-md);
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
        }

        .strip-title {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 700;
          color: var(--accent-primary);
          margin-bottom: 8px;
        }

        .tools-mini-grid {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .tool-mini-card {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 12px;
          border-radius: var(--radius-sm);
          background: var(--bg-glass-strong);
          border: 1px solid transparent;
          cursor: pointer;
          transition: 0.2s;
        }

        .tool-mini-card:hover {
          border-color: var(--accent-primary);
          background: var(--border-color);
          transform: translateX(4px);
        }

        .mini-info {
          flex: 1;
        }

        .mini-info strong {
          font-size: 13px;
          display: block;
        }

        .mini-info small {
          font-size: 11px;
          color: var(--text-dim);
        }

        .mini-arrow {
          color: var(--accent-primary);
          font-weight: bold;
        }

        .typing-dots {
          display: flex;
          gap: 4px;
          padding: 14px 18px;
          background: var(--bg-card);
          border-radius: 18px;
          align-items: center;
        }

        .typing-dots span {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-primary);
          animation: dotBounce 1.2s infinite ease-in-out;
        }

        .typing-dots span:nth-child(2) { animation-delay: 0.2s; }
        .typing-dots span:nth-child(3) { animation-delay: 0.4s; }

        @keyframes dotBounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-6px); }
        }

        .sample-prompts-bar {
          display: flex;
          gap: 8px;
          padding: 10px 24px;
          overflow-x: auto;
          background: var(--bg-surface);
          border-top: 1px solid var(--border-color);
        }

        .prompt-chip {
          white-space: nowrap;
          font-size: 11px;
          font-weight: 600;
          padding: 6px 12px;
          border-radius: var(--radius-pill);
          background: var(--bg-glass-strong);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          cursor: pointer;
          transition: 0.2s;
        }

        .prompt-chip:hover {
          color: var(--accent-primary);
          border-color: var(--accent-primary);
        }

        .assistant-input-form {
          display: flex;
          gap: 10px;
          padding: 16px 24px;
          background: var(--bg-surface);
          border-top: 1px solid var(--border-color);
        }

        .assistant-input-form input {
          flex: 1;
          background: var(--bg-main);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-pill);
          padding: 12px 20px;
          color: var(--text-main);
          font-size: 14px;
          outline: none;
        }

        .assistant-input-form input:focus {
          border-color: var(--accent-primary);
        }

        .send-msg-btn {
          width: 44px;
          height: 44px;
          border-radius: 50% !important;
          padding: 0 !important;
          flex-shrink: 0;
        }
      `})]})}function ni(){let{toasts:e,removeToast:t}=Wn();return!e||e.length===0?null:(0,P.jsxs)(`div`,{className:`toast-stack`,children:[e.map(e=>(0,P.jsxs)(`div`,{className:`toast-item ${e.type||`success`}`,children:[(0,P.jsxs)(`div`,{className:`toast-icon`,children:[e.type===`error`&&(0,P.jsx)(Rr,{style:{color:`#ef4444`}}),e.type===`info`&&(0,P.jsx)(jr,{style:{color:`#3b82f6`}}),(e.type===`success`||!e.type)&&(0,P.jsx)(Wr,{style:{color:`#10b981`}})]}),(0,P.jsx)(`span`,{className:`toast-message-text`,children:e.message}),(0,P.jsx)(`button`,{type:`button`,className:`toast-close-btn`,onClick:()=>t(e.id),children:(0,P.jsx)(dr,{})})]},e.id)),(0,P.jsx)(`style`,{children:`
        .toast-icon {
          font-size: 18px;
          display: grid;
          place-items: center;
        }

        .toast-message-text {
          flex: 1;
          font-size: 13.5px;
          font-weight: 600;
          line-height: 1.4;
        }

        .toast-close-btn {
          color: var(--text-dim);
          cursor: pointer;
          font-size: 12px;
          padding: 4px;
          transition: 0.2s;
        }

        .toast-close-btn:hover {
          color: var(--text-main);
        }
      `})]})}function ri({tool:e}){let{toggleFavorite:t,isFavorite:n,openToolModal:r,setCompareList:i}=Wn();if(!e)return null;let a=n(e.id);return(0,P.jsxs)(`div`,{className:`tool-card-modern glass-card ${e.featured?`is-featured`:``}`,children:[e.featured&&(0,P.jsx)(`div`,{className:`featured-ribbon`,children:`FEATURED`}),(0,P.jsxs)(`div`,{className:`card-head`,children:[(0,P.jsx)(`div`,{className:`card-logo-box`,children:(0,P.jsx)(Xr,{name:e.name,size:48})}),(0,P.jsxs)(`div`,{className:`card-title-group`,children:[(0,P.jsxs)(`div`,{className:`title-verified`,children:[(0,P.jsx)(`h4`,{children:e.name}),e.verified&&(0,P.jsx)(_r,{className:`verified-icon`,title:`Verified AI Platform`})]}),(0,P.jsx)(`span`,{className:`card-category-pill`,children:e.categoryLabel})]}),(0,P.jsx)(`button`,{type:`button`,className:`card-heart-btn ${a?`active`:``}`,onClick:n=>{n.stopPropagation(),t(e.id)},title:a?`Remove from Favorites`:`Add to Favorites`,children:(0,P.jsx)(Nr,{})})]}),(0,P.jsx)(`p`,{className:`card-tagline`,children:e.tagline||e.description}),(0,P.jsx)(`div`,{className:`card-tags-row`,children:(e.tags||[]).slice(0,3).map(e=>(0,P.jsxs)(`span`,{className:`tag-chip`,children:[`#`,e]},e))}),(0,P.jsxs)(`div`,{className:`card-metrics-row`,children:[(0,P.jsxs)(`div`,{className:`metric-item`,children:[(0,P.jsx)(hr,{className:`star-yellow`}),(0,P.jsx)(`strong`,{children:e.rating}),(0,P.jsxs)(`small`,{children:[`(`,(e.reviewsCount/1e3).toFixed(1),`k)`]})]}),(0,P.jsxs)(`div`,{className:`metric-item users`,children:[`👥 `,e.monthlyUsers]}),(0,P.jsx)(`span`,{className:`badge-pricing ${(e.pricingModel||`freemium`).toLowerCase()}`,children:e.pricingModel})]}),(0,P.jsxs)(`div`,{className:`card-actions-bar`,children:[(0,P.jsxs)(`button`,{type:`button`,className:`btn-details`,onClick:()=>r(e),children:[`Quick View `,(0,P.jsx)(Yr,{style:{fontSize:`11px`}})]}),(0,P.jsx)(`button`,{type:`button`,className:`btn-compare-action`,onClick:t=>{t.stopPropagation(),i(t=>t.includes(e.id)?t:[t[0]||`chatgpt`,e.id]),window.location.href=`/compare`},title:`Compare with another AI tool`,children:(0,P.jsx)(Jr,{})}),(0,P.jsx)(`a`,{href:e.websiteUrl,target:`_blank`,rel:`noopener noreferrer`,className:`btn-external-link`,title:`Visit ${e.name}`,onClick:e=>e.stopPropagation(),children:(0,P.jsx)(Lr,{})})]}),(0,P.jsx)(`style`,{children:`
        .tool-card-modern {
          position: relative;
          padding: 24px;
          display: flex;
          flex-direction: column;
          border-radius: var(--radius-lg);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }

        .tool-card-modern.is-featured {
          border-color: rgba(124, 92, 255, 0.4);
          background: linear-gradient(145deg, var(--bg-card) 0%, rgba(124, 92, 255, 0.05) 100%);
        }

        .featured-ribbon {
          position: absolute;
          top: 14px;
          right: -32px;
          transform: rotate(45deg);
          background: var(--accent-gradient);
          color: white;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1px;
          padding: 4px 34px;
          box-shadow: 0 4px 10px rgba(124, 92, 255, 0.4);
        }

        .card-head {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 14px;
        }

        .card-logo-box {
          flex-shrink: 0;
        }

        .card-title-group {
          flex: 1;
          min-width: 0;
        }

        .title-verified {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .title-verified h4 {
          font-size: 17px;
          font-weight: 800;
          color: var(--text-main);
          margin: 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .verified-icon {
          color: #00d4ff;
          font-size: 13px;
        }

        .card-category-pill {
          font-size: 12px;
          font-weight: 600;
          color: var(--accent-primary);
          display: block;
          margin-top: 2px;
        }

        .card-heart-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--bg-glass-strong);
          border: 1px solid var(--border-color);
          color: var(--text-dim);
          display: grid;
          place-items: center;
          cursor: pointer;
          transition: 0.2s;
          font-size: 14px;
        }

        .card-heart-btn:hover {
          color: #ef4444;
          transform: scale(1.15);
        }

        .card-heart-btn.active {
          color: #ef4444;
          background: rgba(239, 68, 68, 0.12);
          border-color: rgba(239, 68, 68, 0.35);
        }

        .card-tagline {
          color: var(--text-muted);
          font-size: 13.5px;
          line-height: 1.6;
          min-height: 44px;
          margin: 0 0 14px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .card-tags-row {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
          margin-bottom: 16px;
        }

        .tag-chip {
          padding: 3px 8px;
          border-radius: var(--radius-sm);
          background: var(--bg-glass-strong);
          color: var(--text-dim);
          font-size: 11px;
          font-weight: 600;
        }

        .card-metrics-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 0;
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
          margin-bottom: 16px;
          font-size: 12.5px;
        }

        .metric-item {
          display: flex;
          align-items: center;
          gap: 5px;
          color: var(--text-main);
        }

        .metric-item.users {
          color: var(--text-dim);
        }

        .star-yellow {
          color: #f59e0b;
        }

        .metric-item small {
          color: var(--text-dim);
        }

        .card-actions-bar {
          display: flex;
          gap: 8px;
          margin-top: auto;
        }

        .btn-details {
          flex: 1;
          height: 38px;
          border-radius: var(--radius-md);
          background: var(--bg-glass-strong);
          border: 1px solid var(--border-color);
          color: var(--text-main);
          font-weight: 700;
          font-size: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-details:hover {
          background: var(--accent-gradient);
          color: #ffffff;
          border-color: transparent;
          box-shadow: 0 8px 20px rgba(124, 92, 255, 0.35);
        }

        .btn-compare-action, .btn-external-link {
          width: 38px;
          height: 38px;
          border-radius: var(--radius-md);
          background: var(--bg-glass-strong);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          display: grid;
          place-items: center;
          cursor: pointer;
          transition: 0.2s;
          font-size: 13px;
        }

        .btn-compare-action:hover {
          color: var(--accent-primary);
          border-color: var(--accent-primary);
        }

        .btn-external-link:hover {
          color: var(--accent-secondary);
          border-color: var(--accent-secondary);
        }
      `})]})}function ii(){let e=k(),{loginAsDemo:t,setIsAiAssistantOpen:n}=Wn(),[r,i]=(0,x.useState)(``),a=N.filter(e=>e.featured).slice(0,6),o=t=>{t.preventDefault(),r.trim()?e(`/tools?search=${encodeURIComponent(r)}`):e(`/tools`)},s=()=>{t(),e(`/dashboard`)};return(0,P.jsxs)(`div`,{className:`landing-page-wrapper`,children:[(0,P.jsx)(`header`,{className:`landing-nav glass-card`,children:(0,P.jsxs)(`div`,{className:`landing-nav-inner`,children:[(0,P.jsxs)(M,{to:`/`,className:`landing-brand`,children:[(0,P.jsx)(`div`,{className:`brand-icon-box`,children:`🤖`}),(0,P.jsxs)(`span`,{children:[`AI`,(0,P.jsx)(`span`,{className:`gradient-text`,children:`HUB`})]})]}),(0,P.jsxs)(`div`,{className:`landing-nav-links`,children:[(0,P.jsx)(M,{to:`/tools`,children:`AI Directory`}),(0,P.jsx)(M,{to:`/categories`,children:`Categories`}),(0,P.jsx)(M,{to:`/compare`,children:`Compare Matrix`}),(0,P.jsx)(M,{to:`/trending`,children:`Trending 🔥`})]}),(0,P.jsxs)(`div`,{className:`landing-nav-ctas`,children:[(0,P.jsx)(`button`,{type:`button`,className:`btn-secondary demo-quick-btn`,onClick:s,children:`⚡ 1-Click  Login`}),(0,P.jsxs)(M,{to:`/login`,className:`btn-primary`,children:[`Sign In `,(0,P.jsx)(Yr,{style:{fontSize:`11px`}})]})]})]})}),(0,P.jsxs)(`section`,{className:`landing-hero-section`,children:[(0,P.jsx)(`div`,{className:`hero-glow-blob blob-1`}),(0,P.jsx)(`div`,{className:`hero-glow-blob blob-2`}),(0,P.jsxs)(`div`,{className:`hero-content`,children:[(0,P.jsxs)(`div`,{className:`hero-badge badge-glow`,children:[(0,P.jsx)(Kr,{}),` Next-Gen AI Intelligence Platform`]}),(0,P.jsxs)(`h1`,{className:`hero-title`,children:[`Discover, Compare & Benchmark `,(0,P.jsx)(`br`,{}),(0,P.jsx)(`span`,{className:`gradient-text`,children:`Frontier AI Tools`}),` in One Place.`]}),(0,P.jsx)(`p`,{className:`hero-subtitle`,children:`Explore 30+ verified AI models spanning conversational reasoning, full-stack coding, photorealistic image synthesis, voice cloning, and workflow automation.`}),(0,P.jsxs)(`form`,{className:`hero-search-form glass-card`,onSubmit:o,children:[(0,P.jsx)(yr,{className:`hero-search-icon`}),(0,P.jsx)(`input`,{type:`text`,placeholder:`Search by use case (e.g. 'coding assistant', 'text-to-video', 'free reasoning')...`,value:r,onChange:e=>i(e.target.value)}),(0,P.jsxs)(`button`,{type:`submit`,className:`btn-primary hero-search-submit`,children:[`Explore Tools `,(0,P.jsx)(Yr,{})]})]}),(0,P.jsxs)(`div`,{className:`hero-pills-row`,children:[(0,P.jsx)(`span`,{className:`hero-pills-label`,children:`Trending Now:`}),[`Claude 3.7`,`DeepSeek R1`,`Cursor AI`,`Midjourney v6`,`ElevenLabs`,`Suno v4`].map(t=>(0,P.jsxs)(`button`,{type:`button`,className:`hero-pill-btn`,onClick:()=>e(`/tools?search=${encodeURIComponent(t)}`),children:[(0,P.jsx)(Xr,{name:t,size:18}),(0,P.jsx)(`span`,{children:t})]},t))]}),(0,P.jsxs)(`div`,{className:`hero-cta-group`,children:[(0,P.jsxs)(`button`,{type:`button`,className:`btn-primary hero-main-cta`,onClick:s,children:[(0,P.jsx)(xr,{}),` Launch Dashboard (1-Click )`]}),(0,P.jsxs)(`button`,{type:`button`,className:`btn-secondary hero-matchmaker-cta`,onClick:()=>n(!0),children:[(0,P.jsx)(Tr,{}),` Try AI Matchmaker`]})]})]})]}),(0,P.jsxs)(`section`,{className:`landing-stats-bar glass-card`,children:[(0,P.jsxs)(`div`,{className:`stat-pill-item`,children:[(0,P.jsx)(`h2`,{children:`32+`}),(0,P.jsx)(`p`,{children:`Frontier AI Tools`})]}),(0,P.jsx)(`div`,{className:`stat-divider`}),(0,P.jsxs)(`div`,{className:`stat-pill-item`,children:[(0,P.jsx)(`h2`,{children:`800M+`}),(0,P.jsx)(`p`,{children:`Monthly Active Users`})]}),(0,P.jsx)(`div`,{className:`stat-divider`}),(0,P.jsxs)(`div`,{className:`stat-pill-item`,children:[(0,P.jsx)(`h2`,{children:`8`}),(0,P.jsx)(`p`,{children:`Curated Categories`})]}),(0,P.jsx)(`div`,{className:`stat-divider`}),(0,P.jsxs)(`div`,{className:`stat-pill-item`,children:[(0,P.jsx)(`h2`,{children:`100%`}),(0,P.jsx)(`p`,{children:`Verified Specs & Benchmarks`})]})]}),(0,P.jsxs)(`section`,{className:`landing-section`,children:[(0,P.jsxs)(`div`,{className:`section-head-center`,children:[(0,P.jsxs)(`span`,{className:`badge-glow`,children:[(0,P.jsx)(Pr,{}),` CURATED SELECTION`]}),(0,P.jsx)(`h2`,{children:`Featured AI Frontier Models`}),(0,P.jsx)(`p`,{children:`The highest rated and most adopted generative AI tools powering millions of workflows.`})]}),(0,P.jsx)(`div`,{className:`tools-grid`,children:a.map(e=>(0,P.jsx)(ri,{tool:e},e.id))}),(0,P.jsx)(`div`,{className:`section-footer-cta`,children:(0,P.jsxs)(M,{to:`/tools`,className:`btn-primary view-all-tools-btn`,children:[`View All 30+ AI Tools in Directory `,(0,P.jsx)(Yr,{})]})})]}),(0,P.jsxs)(`section`,{className:`landing-section categories-section`,children:[(0,P.jsxs)(`div`,{className:`section-head-center`,children:[(0,P.jsx)(`span`,{className:`badge-glow`,children:`⚡ EXPLORE BY DOMAIN`}),(0,P.jsx)(`h2`,{children:`Find the Right Tool for Your Workflow`}),(0,P.jsx)(`p`,{children:`Browse by specific creative, engineering, and research domains.`})]}),(0,P.jsx)(`div`,{className:`landing-categories-grid`,children:Bn.filter(e=>e.id!==`all`).map(t=>(0,P.jsxs)(`div`,{className:`landing-category-card glass-card`,onClick:()=>e(`/tools?category=${t.id}`),children:[(0,P.jsx)(`div`,{className:`cat-icon-badge`,children:t.icon}),(0,P.jsx)(`h3`,{children:t.name}),(0,P.jsx)(`p`,{children:t.description}),(0,P.jsxs)(`span`,{className:`cat-count-link`,children:[t.count,` Tools Available →`]})]},t.id))})]}),(0,P.jsx)(`section`,{className:`landing-section comparison-teaser-section`,children:(0,P.jsxs)(`div`,{className:`comparison-banner glass-card`,children:[(0,P.jsxs)(`div`,{className:`comparison-banner-content`,children:[(0,P.jsxs)(`span`,{className:`badge-glow`,children:[(0,P.jsx)(Jr,{}),` SMART MATRIX`]}),(0,P.jsx)(`h2`,{children:`Compare AI Tools Side-by-Side`}),(0,P.jsx)(`p`,{children:`Unsure which model fits your budget and technical requirements? Compare context windows, API rates, coding scores, and image capabilities in real time.`}),(0,P.jsxs)(M,{to:`/compare`,className:`btn-primary`,children:[`Open Comparison Matrix `,(0,P.jsx)(Yr,{})]})]}),(0,P.jsxs)(`div`,{className:`comparison-graphic`,children:[(0,P.jsxs)(`div`,{className:`graphic-card card-a`,children:[(0,P.jsx)(Xr,{name:`ChatGPT`,size:40}),(0,P.jsx)(`strong`,{children:`ChatGPT Plus`}),(0,P.jsx)(`small`,{children:`GPT-4o & Advanced Voice`})]}),(0,P.jsx)(`div`,{className:`vs-badge`,children:`VS`}),(0,P.jsxs)(`div`,{className:`graphic-card card-b`,children:[(0,P.jsx)(Xr,{name:`Claude`,size:40}),(0,P.jsx)(`strong`,{children:`Claude 3.7`}),(0,P.jsx)(`small`,{children:`Hybrid Reasoning & Coding`})]})]})]})}),(0,P.jsx)(`footer`,{className:`landing-footer`,children:(0,P.jsxs)(`div`,{className:`footer-bottom-row`,children:[(0,P.jsxs)(`p`,{children:[`© `,new Date().getFullYear(),` AIHUB. The leading AI directory & comparison platform.`]}),(0,P.jsxs)(`div`,{className:`footer-simple-links`,children:[(0,P.jsx)(M,{to:`/tools`,children:`Tools`}),(0,P.jsx)(M,{to:`/categories`,children:`Categories`}),(0,P.jsx)(M,{to:`/compare`,children:`Compare`}),(0,P.jsx)(M,{to:`/login`,children:`Sign In`})]})]})}),(0,P.jsx)(`style`,{children:`
        .landing-page-wrapper {
          min-height: 100vh;
          background-color: var(--bg-main);
          color: var(--text-main);
          position: relative;
          overflow-x: hidden;
        }

        /* Floating Nav */
        .landing-nav {
          position: sticky;
          top: 16px;
          margin: 0 auto;
          max-width: 1280px;
          padding: 12px 24px;
          z-index: 1000;
          border-radius: var(--radius-pill);
        }

        .landing-nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .landing-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          font-size: 20px;
          font-weight: 900;
          color: var(--text-main);
        }

        .landing-brand .brand-icon-box {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-md);
          background: var(--accent-gradient);
          display: grid;
          place-items: center;
          font-size: 18px;
        }

        .landing-nav-links {
          display: flex;
          gap: 24px;
        }

        .landing-nav-links a {
          color: var(--text-muted);
          font-size: 14px;
          font-weight: 600;
          transition: 0.2s;
        }

        .landing-nav-links a:hover {
          color: var(--accent-primary);
        }

        .landing-nav-ctas {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .demo-quick-btn {
          padding: 9px 16px !important;
          font-size: 13px !important;
        }

        /* Hero */
        .landing-hero-section {
          position: relative;
          padding: 100px 24px 70px;
          display: flex;
          justify-content: center;
          text-align: center;
        }

        .hero-glow-blob {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.22;
          pointer-events: none;
          z-index: 1;
        }

        .blob-1 {
          background: #7c5cff;
          top: -100px;
          left: 10%;
        }

        .blob-2 {
          background: #00d4ff;
          top: 50px;
          right: 10%;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 920px;
          margin: 0 auto;
        }

        .hero-badge {
          margin-bottom: 24px;
        }

        .hero-title {
          font-size: clamp(38px, 6vw, 68px);
          font-weight: 900;
          line-height: 1.1;
          letter-spacing: -1.5px;
          margin-bottom: 22px;
        }

        .hero-subtitle {
          font-size: clamp(16px, 2vw, 19px);
          color: var(--text-muted);
          line-height: 1.7;
          max-width: 760px;
          margin: 0 auto 36px;
        }

        .hero-search-form {
          display: flex;
          align-items: center;
          max-width: 680px;
          margin: 0 auto 28px;
          padding: 8px 10px 8px 20px;
          border-radius: var(--radius-pill);
          border: 1px solid var(--border-highlight);
        }

        .hero-search-icon {
          color: var(--accent-primary);
          font-size: 18px;
          margin-right: 12px;
        }

        .hero-search-form input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: var(--text-main);
          font-size: 15px;
        }

        .hero-search-submit {
          padding: 12px 24px !important;
          border-radius: var(--radius-pill) !important;
        }

        .hero-pills-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 36px;
        }

        .hero-pills-label {
          font-size: 12.5px;
          color: var(--text-dim);
          font-weight: 700;
        }

        .hero-pill-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: var(--radius-pill);
          background: var(--bg-glass-strong);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .hero-pill-btn:hover {
          color: var(--text-main);
          border-color: var(--accent-primary);
          transform: translateY(-2px);
        }

        .hero-cta-group {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .hero-main-cta {
          padding: 15px 32px !important;
          font-size: 16px !important;
          border-radius: var(--radius-pill) !important;
        }

        .hero-matchmaker-cta {
          padding: 15px 28px !important;
          font-size: 15px !important;
          border-radius: var(--radius-pill) !important;
        }

        /* Stats Bar */
        .landing-stats-bar {
          max-width: 1100px;
          margin: -20px auto 80px;
          padding: 30px 40px;
          display: flex;
          align-items: center;
          justify-content: space-around;
          border-radius: var(--radius-xl);
        }

        .stat-pill-item {
          text-align: center;
        }

        .stat-pill-item h2 {
          font-size: 34px;
          font-weight: 900;
          color: var(--accent-primary);
          margin-bottom: 4px;
        }

        .stat-pill-item p {
          font-size: 13px;
          color: var(--text-muted);
          font-weight: 600;
        }

        .stat-divider {
          width: 1px;
          height: 50px;
          background: var(--border-color);
        }

        /* Sections */
        .landing-section {
          max-width: 1280px;
          margin: 0 auto 100px;
          padding: 0 24px;
        }

        .section-head-center {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 50px;
        }

        .section-head-center h2 {
          font-size: 34px;
          font-weight: 800;
          margin: 12px 0 10px;
        }

        .section-head-center p {
          color: var(--text-muted);
          font-size: 15px;
        }

        .section-footer-cta {
          text-align: center;
          margin-top: 40px;
        }

        .view-all-tools-btn {
          padding: 14px 30px !important;
          border-radius: var(--radius-pill) !important;
        }

        /* Categories Grid */
        .landing-categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
        }

        .landing-category-card {
          padding: 26px;
          border-radius: var(--radius-lg);
          cursor: pointer;
          transition: all 0.3s;
          position: relative;
        }

        .landing-category-card:hover {
          transform: translateY(-6px);
          border-color: var(--accent-primary);
        }

        .cat-icon-badge {
          font-size: 32px;
          margin-bottom: 16px;
        }

        .landing-category-card h3 {
          font-size: 18px;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .landing-category-card p {
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.5;
          margin-bottom: 16px;
        }

        .cat-count-link {
          font-size: 12px;
          font-weight: 700;
          color: var(--accent-primary);
        }

        /* Comparison Teaser */
        .comparison-banner {
          padding: 50px;
          border-radius: var(--radius-xl);
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .comparison-banner-content h2 {
          font-size: 32px;
          font-weight: 900;
          margin: 14px 0 12px;
        }

        .comparison-banner-content p {
          font-size: 15px;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 24px;
        }

        .comparison-graphic {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
        }

        .graphic-card {
          padding: 24px;
          border-radius: var(--radius-lg);
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          text-align: center;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .graphic-card strong {
          font-size: 15px;
        }

        .graphic-card small {
          font-size: 11px;
          color: var(--text-dim);
        }

        .vs-badge {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--accent-gradient);
          color: white;
          font-weight: 900;
          font-size: 13px;
          display: grid;
          place-items: center;
          box-shadow: 0 4px 15px rgba(124, 92, 255, 0.5);
        }

        /* Footer */
        .landing-footer {
          border-top: 1px solid var(--border-color);
          padding: 30px 24px;
          max-width: 1280px;
          margin: 0 auto;
        }

        .landing-footer .footer-bottom-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--text-dim);
          font-size: 13px;
        }

        .footer-simple-links {
          display: flex;
          gap: 20px;
        }

        .footer-simple-links a {
          color: var(--text-muted);
          font-weight: 600;
        }

        .footer-simple-links a:hover {
          color: var(--accent-primary);
        }

        @media (max-width: 900px) {
          .landing-nav-links {
            display: none;
          }
          .comparison-banner {
            grid-template-columns: 1fr;
            padding: 30px 20px;
          }
          .landing-stats-bar {
            flex-direction: column;
            gap: 24px;
            padding: 24px;
          }
          .stat-divider {
            display: none;
          }
        }
      `})]})}function ai(){let e=k(),{user:t,favorites:n,recentActivity:r,setIsAiAssistantOpen:i,openToolModal:a}=Wn(),[o,s]=(0,x.useState)(`all`),c=N.filter(e=>o===`all`?e.featured:e.category===o).slice(0,6),l=N.slice(0,4);return(0,P.jsxs)(`div`,{className:`dashboard-page-container`,children:[(0,P.jsxs)(`div`,{className:`dashboard-welcome-banner glass-card`,children:[(0,P.jsxs)(`div`,{className:`welcome-text-col`,children:[(0,P.jsx)(`div`,{className:`welcome-badge badge-glow`,children:`✨ AI-HUB EXECUTIVE DASHBOARD`}),(0,P.jsxs)(`h1`,{children:[`Welcome back, `,(0,P.jsx)(`span`,{className:`gradient-text`,children:t.name||`Explorer`}),` 👋`]}),(0,P.jsx)(`p`,{children:`Explore real-time benchmarks, discover newly launched models, and manage your custom AI toolkit.`}),(0,P.jsxs)(`div`,{className:`banner-actions-row`,children:[(0,P.jsxs)(M,{to:`/tools`,className:`btn-primary`,children:[(0,P.jsx)(xr,{}),` Browse Directory`]}),(0,P.jsxs)(`button`,{type:`button`,className:`btn-secondary`,onClick:()=>i(!0),children:[(0,P.jsx)(Tr,{}),` Ask AI Matchmaker`]})]})]}),(0,P.jsxs)(`div`,{className:`welcome-avatar-stat`,children:[(0,P.jsx)(`div`,{className:`user-big-avatar`,children:t.avatar||`👩‍💻`}),(0,P.jsxs)(`div`,{className:`user-membership-info`,children:[(0,P.jsx)(`strong`,{children:t.plan||`AIHUB Pro`}),(0,P.jsx)(`small`,{children:`Active Explorer`})]})]})]}),(0,P.jsxs)(`div`,{className:`stats-dashboard-grid`,children:[(0,P.jsxs)(`div`,{className:`stat-box glass-card`,children:[(0,P.jsx)(`div`,{className:`stat-icon-wrapper blue`,children:(0,P.jsx)(Sr,{})}),(0,P.jsxs)(`div`,{className:`stat-text-area`,children:[(0,P.jsx)(`h3`,{children:`32+`}),(0,P.jsx)(`p`,{children:`Frontier Models`})]})]}),(0,P.jsxs)(`div`,{className:`stat-box glass-card`,onClick:()=>e(`/favorites`),style:{cursor:`pointer`},children:[(0,P.jsx)(`div`,{className:`stat-icon-wrapper red`,children:(0,P.jsx)(Nr,{})}),(0,P.jsxs)(`div`,{className:`stat-text-area`,children:[(0,P.jsx)(`h3`,{children:n.length}),(0,P.jsx)(`p`,{children:`Saved Favorites`})]})]}),(0,P.jsxs)(`div`,{className:`stat-box glass-card`,onClick:()=>e(`/compare`),style:{cursor:`pointer`},children:[(0,P.jsx)(`div`,{className:`stat-icon-wrapper purple`,children:(0,P.jsx)(Jr,{})}),(0,P.jsxs)(`div`,{className:`stat-text-area`,children:[(0,P.jsx)(`h3`,{children:`Side-by-Side`}),(0,P.jsx)(`p`,{children:`Model Matrix`})]})]}),(0,P.jsxs)(`div`,{className:`stat-box glass-card`,onClick:()=>e(`/categories`),style:{cursor:`pointer`},children:[(0,P.jsx)(`div`,{className:`stat-icon-wrapper cyan`,children:(0,P.jsx)(kr,{})}),(0,P.jsxs)(`div`,{className:`stat-text-area`,children:[(0,P.jsx)(`h3`,{children:`8`}),(0,P.jsx)(`p`,{children:`AI Categories`})]})]})]}),(0,P.jsxs)(`div`,{className:`dashboard-content-section`,children:[(0,P.jsxs)(`div`,{className:`section-header-flex`,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`h2`,{children:`⭐ Popular & Frontier Models`}),(0,P.jsx)(`p`,{children:`Hand-picked, state-of-the-art tools across creative and technical sectors.`})]}),(0,P.jsxs)(M,{to:`/tools`,className:`view-all-link`,children:[`View All (`,N.length,`) `,(0,P.jsx)(Yr,{})]})]}),(0,P.jsxs)(`div`,{className:`category-pill-bar`,children:[(0,P.jsx)(`button`,{type:`button`,className:`filter-pill ${o===`all`?`active`:``}`,onClick:()=>s(`all`),children:`🌟 All Featured`}),Bn.filter(e=>e.id!==`all`).map(e=>(0,P.jsxs)(`button`,{type:`button`,className:`filter-pill ${o===e.id?`active`:``}`,onClick:()=>s(e.id),children:[e.icon,` `,e.name]},e.id))]}),(0,P.jsx)(`div`,{className:`tools-grid`,children:c.map(e=>(0,P.jsx)(ri,{tool:e},e.id))})]}),(0,P.jsxs)(`div`,{className:`dashboard-dual-grid`,children:[(0,P.jsxs)(`div`,{className:`dual-card glass-card`,children:[(0,P.jsxs)(`div`,{className:`dual-card-header`,children:[(0,P.jsxs)(`div`,{className:`title-with-icon`,children:[(0,P.jsx)(Pr,{className:`fire-icon`}),(0,P.jsx)(`h3`,{children:`Trending This Week`})]}),(0,P.jsx)(M,{to:`/trending`,className:`link-arrow`,children:`Full Leaderboard →`})]}),(0,P.jsx)(`div`,{className:`trending-mini-list`,children:l.map((e,t)=>(0,P.jsxs)(`div`,{className:`trending-mini-item`,onClick:()=>a(e),children:[(0,P.jsxs)(`span`,{className:`rank-num`,children:[`#`,t+1]}),(0,P.jsx)(Xr,{name:e.name,size:36}),(0,P.jsxs)(`div`,{className:`trending-info-text`,children:[(0,P.jsx)(`strong`,{children:e.name}),(0,P.jsxs)(`small`,{children:[e.categoryLabel,` • `,e.monthlyUsers,` users`]})]}),(0,P.jsx)(`div`,{className:`trending-growth-badge`,children:e.growthRate})]},e.id))})]}),(0,P.jsxs)(`div`,{className:`dual-card glass-card`,children:[(0,P.jsxs)(`div`,{className:`dual-card-header`,children:[(0,P.jsxs)(`div`,{className:`title-with-icon`,children:[(0,P.jsx)(xr,{className:`rocket-icon`}),(0,P.jsx)(`h3`,{children:`Your AI Activity`})]}),(0,P.jsxs)(`span`,{className:`activity-badge-count`,children:[r.length,` events`]})]}),(0,P.jsx)(`div`,{className:`activity-stream-list`,children:r.slice(0,5).map(e=>(0,P.jsxs)(`div`,{className:`activity-stream-item`,children:[(0,P.jsx)(`div`,{className:`act-icon-box`,children:e.icon||`⚡`}),(0,P.jsxs)(`div`,{className:`act-content-text`,children:[(0,P.jsx)(`strong`,{children:e.text||e.toolName}),(0,P.jsx)(`small`,{children:e.time})]})]},e.id))})]})]}),(0,P.jsx)(`style`,{children:`
        .dashboard-page-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 36px;
        }

        /* Welcome Banner */
        .dashboard-welcome-banner {
          padding: 40px;
          border-radius: var(--radius-xl);
          background: linear-gradient(135deg, var(--bg-surface) 0%, rgba(124, 92, 255, 0.1) 100%);
          border: 1px solid var(--border-highlight);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }

        .welcome-text-col {
          max-width: 650px;
        }

        .welcome-badge {
          margin-bottom: 14px;
        }

        .welcome-text-col h1 {
          font-size: 32px;
          font-weight: 900;
          margin-bottom: 10px;
        }

        .welcome-text-col p {
          color: var(--text-muted);
          font-size: 15px;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .banner-actions-row {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .welcome-avatar-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          padding: 24px;
          border-radius: var(--radius-lg);
          background: var(--bg-glass-strong);
          border: 1px solid var(--border-color);
          text-align: center;
          min-width: 170px;
        }

        .user-big-avatar {
          font-size: 48px;
        }

        .user-membership-info strong {
          display: block;
          font-size: 14px;
          color: var(--accent-primary);
        }

        .user-membership-info small {
          font-size: 11px;
          color: var(--text-dim);
        }

        /* Stats Grid */
        .stats-dashboard-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .stat-box {
          padding: 22px;
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          gap: 16px;
          transition: transform 0.2s;
        }

        .stat-box:hover {
          transform: translateY(-4px);
        }

        .stat-icon-wrapper {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-md);
          display: grid;
          place-items: center;
          font-size: 22px;
          flex-shrink: 0;
        }

        .stat-icon-wrapper.blue { background: rgba(59, 130, 246, 0.15); color: #3b82f6; }
        .stat-icon-wrapper.red { background: rgba(239, 68, 68, 0.15); color: #ef4444; }
        .stat-icon-wrapper.purple { background: rgba(139, 92, 246, 0.15); color: #8b5cf6; }
        .stat-icon-wrapper.cyan { background: rgba(6, 182, 212, 0.15); color: #06b6d4; }

        .stat-text-area h3 {
          font-size: 24px;
          font-weight: 800;
          margin: 0;
          color: var(--text-main);
        }

        .stat-text-area p {
          font-size: 13px;
          color: var(--text-muted);
          margin: 2px 0 0;
          font-weight: 600;
        }

        /* Section Header */
        .section-header-flex {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .section-header-flex h2 {
          font-size: 24px;
          font-weight: 800;
          margin: 0 0 4px;
        }

        .section-header-flex p {
          color: var(--text-muted);
          font-size: 14px;
          margin: 0;
        }

        .view-all-link {
          font-size: 14px;
          font-weight: 700;
          color: var(--accent-primary);
          display: flex;
          align-items: center;
          gap: 6px;
          transition: 0.2s;
        }

        .view-all-link:hover {
          transform: translateX(4px);
        }

        /* Filter Pills */
        .category-pill-bar {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          padding-bottom: 10px;
          margin-bottom: 24px;
        }

        .filter-pill {
          padding: 8px 16px;
          border-radius: var(--radius-pill);
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          font-weight: 600;
          font-size: 13px;
          white-space: nowrap;
          cursor: pointer;
          transition: 0.2s;
        }

        .filter-pill:hover {
          color: var(--text-main);
          border-color: var(--accent-primary);
        }

        .filter-pill.active {
          background: var(--accent-primary);
          color: #ffffff;
          border-color: var(--accent-primary);
          box-shadow: 0 4px 15px rgba(124, 92, 255, 0.35);
        }

        /* Dual Grid */
        .dashboard-dual-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .dual-card {
          padding: 28px;
          border-radius: var(--radius-xl);
        }

        .dual-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .title-with-icon {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .title-with-icon h3 {
          font-size: 18px;
          font-weight: 800;
          margin: 0;
        }

        .fire-icon { color: #ec4899; }
        .rocket-icon { color: var(--accent-primary); }

        .link-arrow {
          font-size: 13px;
          font-weight: 700;
          color: var(--accent-primary);
        }

        .activity-badge-count {
          font-size: 11px;
          padding: 3px 8px;
          border-radius: var(--radius-pill);
          background: var(--bg-glass-strong);
          color: var(--text-dim);
          font-weight: 700;
        }

        /* Trending Mini */
        .trending-mini-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .trending-mini-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 10px 14px;
          border-radius: var(--radius-md);
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          cursor: pointer;
          transition: 0.2s;
        }

        .trending-mini-item:hover {
          border-color: var(--accent-primary);
          transform: translateX(4px);
        }

        .rank-num {
          font-weight: 900;
          font-size: 14px;
          color: var(--accent-primary);
          width: 26px;
        }

        .trending-info-text {
          flex: 1;
        }

        .trending-info-text strong {
          display: block;
          font-size: 14px;
        }

        .trending-info-text small {
          font-size: 11.5px;
          color: var(--text-dim);
        }

        .trending-growth-badge {
          padding: 4px 10px;
          border-radius: var(--radius-pill);
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
          font-weight: 800;
          font-size: 12px;
        }

        /* Activity Stream */
        .activity-stream-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .activity-stream-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 14px;
          border-radius: var(--radius-md);
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
        }

        .act-icon-box {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          background: var(--bg-glass-strong);
          display: grid;
          place-items: center;
          font-size: 16px;
          flex-shrink: 0;
        }

        .act-content-text {
          flex: 1;
        }

        .act-content-text strong {
          display: block;
          font-size: 13.5px;
        }

        .act-content-text small {
          font-size: 11px;
          color: var(--text-dim);
        }

        @media (max-width: 1024px) {
          .stats-dashboard-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .dashboard-dual-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .dashboard-welcome-banner {
            flex-direction: column;
            padding: 24px;
          }
          .stats-dashboard-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function oi(){let[e,t]=Nn(),{openToolModal:n,isFavorite:r,toggleFavorite:i}=Wn(),a=e.get(`search`)||``,o=e.get(`category`)||`all`,[s,c]=(0,x.useState)(a),[l,u]=(0,x.useState)(o),[d,f]=(0,x.useState)(`all`),[p,m]=(0,x.useState)(`all`),[h,g]=(0,x.useState)(`popular`),[_,v]=(0,x.useState)(`grid`);(0,x.useEffect)(()=>{let t=e.get(`search`),n=e.get(`category`);t!==null&&c(t),n!==null&&u(n)},[e]);let y=(0,x.useMemo)(()=>N.filter(e=>{let t=!s.trim()||e.name.toLowerCase().includes(s.toLowerCase())||e.description.toLowerCase().includes(s.toLowerCase())||e.tags.some(e=>e.toLowerCase().includes(s.toLowerCase())),n=l===`all`||e.category===l,r=d===`all`||e.pricingModel.toLowerCase().includes(d.toLowerCase()),i=p===`all`||e.rating>=parseFloat(p);return t&&n&&r&&i}).sort((e,t)=>h===`rating`?t.rating-e.rating:h===`growth`?parseInt(t.growthRate)-parseInt(e.growthRate):h===`name`?e.name.localeCompare(t.name):(t.trendingScore||0)-(e.trendingScore||0)),[s,l,d,p,h]),b=()=>{c(``),u(`all`),f(`all`),m(`all`),g(`popular`),t({})},S=s||l!==`all`||d!==`all`||p!==`all`||h!==`popular`;return(0,P.jsxs)(`div`,{className:`tools-directory-page`,children:[(0,P.jsxs)(`div`,{className:`tools-page-header glass-card`,children:[(0,P.jsx)(`span`,{className:`badge-glow`,children:`🤖 FRONTIER AI DIRECTORY`}),(0,P.jsx)(`h1`,{children:`Explore 30+ Leading AI Models & Tools`}),(0,P.jsx)(`p`,{children:`Discover cutting-edge generative AI models, developer tools, and workflow automations with verified benchmarks and live launch links.`})]}),(0,P.jsxs)(`div`,{className:`directory-controls-bar glass-card`,children:[(0,P.jsxs)(`div`,{className:`controls-search-wrap`,children:[(0,P.jsx)(yr,{className:`controls-search-icon`}),(0,P.jsx)(`input`,{type:`text`,placeholder:`Search by name, tag, or capability (e.g. 'coding', 'reasoning', 'image')...`,value:s,onChange:e=>c(e.target.value)}),s&&(0,P.jsx)(`button`,{type:`button`,className:`controls-clear-search`,onClick:()=>c(``),children:(0,P.jsx)(dr,{})})]}),(0,P.jsxs)(`div`,{className:`controls-dropdowns-group`,children:[(0,P.jsx)(`select`,{value:l,onChange:e=>u(e.target.value),className:`filter-select`,children:Bn.map(e=>(0,P.jsxs)(`option`,{value:e.id,children:[e.icon,` `,e.name]},e.id))}),(0,P.jsxs)(`select`,{value:d,onChange:e=>f(e.target.value),className:`filter-select`,children:[(0,P.jsx)(`option`,{value:`all`,children:`💳 All Pricing`}),(0,P.jsx)(`option`,{value:`freemium`,children:`Free / Freemium`}),(0,P.jsx)(`option`,{value:`free`,children:`100% Free / Open Source`}),(0,P.jsx)(`option`,{value:`paid`,children:`Paid Only`})]}),(0,P.jsxs)(`select`,{value:p,onChange:e=>m(e.target.value),className:`filter-select`,children:[(0,P.jsx)(`option`,{value:`all`,children:`⭐ Any Rating`}),(0,P.jsx)(`option`,{value:`4.8`,children:`⭐ 4.8 & Above`}),(0,P.jsx)(`option`,{value:`4.7`,children:`⭐ 4.7 & Above`})]}),(0,P.jsxs)(`select`,{value:h,onChange:e=>g(e.target.value),className:`filter-select`,children:[(0,P.jsx)(`option`,{value:`popular`,children:`🔥 Most Popular`}),(0,P.jsx)(`option`,{value:`rating`,children:`⭐ Highest Rated`}),(0,P.jsx)(`option`,{value:`growth`,children:`📈 Fastest Growing`}),(0,P.jsx)(`option`,{value:`name`,children:`🔤 Alphabetical (A-Z)`})]}),(0,P.jsxs)(`div`,{className:`view-mode-toggle`,children:[(0,P.jsx)(`button`,{type:`button`,className:`view-toggle-btn ${_===`grid`?`active`:``}`,onClick:()=>v(`grid`),title:`Grid View`,children:(0,P.jsx)(pr,{})}),(0,P.jsx)(`button`,{type:`button`,className:`view-toggle-btn ${_===`list`?`active`:``}`,onClick:()=>v(`list`),title:`List View`,children:(0,P.jsx)(Dr,{})})]})]})]}),(0,P.jsxs)(`div`,{className:`filter-summary-row`,children:[(0,P.jsxs)(`div`,{className:`results-count-text`,children:[`Showing `,(0,P.jsx)(`strong`,{children:y.length}),` of `,(0,P.jsx)(`strong`,{children:N.length}),` AI Tools`]}),S&&(0,P.jsxs)(`div`,{className:`active-chips-area`,children:[l!==`all`&&(0,P.jsxs)(`span`,{className:`active-filter-chip`,children:[`Category: `,Bn.find(e=>e.id===l)?.name,(0,P.jsx)(`button`,{onClick:()=>u(`all`),children:(0,P.jsx)(dr,{})})]}),d!==`all`&&(0,P.jsxs)(`span`,{className:`active-filter-chip`,children:[`Pricing: `,d,(0,P.jsx)(`button`,{onClick:()=>f(`all`),children:(0,P.jsx)(dr,{})})]}),p!==`all`&&(0,P.jsxs)(`span`,{className:`active-filter-chip`,children:[`Rating: `,p,`+`,(0,P.jsx)(`button`,{onClick:()=>m(`all`),children:(0,P.jsx)(dr,{})})]}),s&&(0,P.jsxs)(`span`,{className:`active-filter-chip`,children:[`"`,s,`"`,(0,P.jsx)(`button`,{onClick:()=>c(``),children:(0,P.jsx)(dr,{})})]}),(0,P.jsxs)(`button`,{className:`reset-all-btn`,onClick:b,children:[(0,P.jsx)(ur,{}),` Reset All`]})]})]}),y.length>0?_===`grid`?(0,P.jsx)(`div`,{className:`tools-grid`,children:y.map(e=>(0,P.jsx)(ri,{tool:e},e.id))}):(0,P.jsx)(`div`,{className:`tools-list-view`,children:y.map(e=>{let t=r(e.id);return(0,P.jsxs)(`div`,{className:`tool-list-row glass-card`,children:[(0,P.jsx)(Xr,{name:e.name,size:48}),(0,P.jsxs)(`div`,{className:`list-main-info`,children:[(0,P.jsxs)(`div`,{className:`list-title-row`,children:[(0,P.jsx)(`h3`,{children:e.name}),(0,P.jsx)(`span`,{className:`card-category-pill`,children:e.categoryLabel}),(0,P.jsx)(`span`,{className:`badge-pricing ${(e.pricingModel||`freemium`).toLowerCase()}`,children:e.pricingModel})]}),(0,P.jsx)(`p`,{className:`list-tagline`,children:e.description}),(0,P.jsx)(`div`,{className:`list-tags`,children:e.tags.map(e=>(0,P.jsxs)(`span`,{className:`tag-chip`,children:[`#`,e]},e))})]}),(0,P.jsxs)(`div`,{className:`list-metrics-col`,children:[(0,P.jsxs)(`div`,{className:`metric-rating`,children:[`⭐ `,(0,P.jsx)(`strong`,{children:e.rating}),` `,(0,P.jsxs)(`small`,{children:[`(`,(e.reviewsCount/1e3).toFixed(1),`k)`]})]}),(0,P.jsxs)(`div`,{className:`metric-users`,children:[`👥 `,e.monthlyUsers,` users`]}),(0,P.jsxs)(`div`,{className:`metric-growth`,children:[`↗ `,e.growthRate]})]}),(0,P.jsxs)(`div`,{className:`list-actions-col`,children:[(0,P.jsx)(`button`,{type:`button`,className:`btn-primary list-view-btn`,onClick:()=>n(e),children:`Quick View`}),(0,P.jsx)(`button`,{type:`button`,className:`card-heart-btn ${t?`active`:``}`,onClick:()=>i(e.id),children:`❤️`})]})]},e.id)})}):(0,P.jsxs)(`div`,{className:`empty-results-box glass-card`,children:[(0,P.jsx)(`div`,{className:`empty-icon-large`,children:`🔍`}),(0,P.jsx)(`h3`,{children:`No AI Tools Found`}),(0,P.jsx)(`p`,{children:`No tools matched your current search filters. Try clearing your filters or search keywords.`}),(0,P.jsxs)(`button`,{type:`button`,className:`btn-primary`,onClick:b,children:[(0,P.jsx)(ur,{}),` Reset All Filters`]})]}),(0,P.jsx)(`style`,{children:`
        .tools-directory-page {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .tools-page-header {
          padding: 36px 40px;
          border-radius: var(--radius-xl);
          background: linear-gradient(135deg, var(--bg-surface) 0%, rgba(124, 92, 255, 0.08) 100%);
          border: 1px solid var(--border-highlight);
        }

        .tools-page-header h1 {
          font-size: 32px;
          font-weight: 900;
          margin: 12px 0 8px;
        }

        .tools-page-header p {
          color: var(--text-muted);
          font-size: 15px;
          max-width: 700px;
          margin: 0;
        }

        /* Controls Bar */
        .directory-controls-bar {
          padding: 16px 20px;
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .controls-search-wrap {
          flex: 1;
          min-width: 260px;
          display: flex;
          align-items: center;
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 0 14px;
          height: 44px;
        }

        .controls-search-wrap:focus-within {
          border-color: var(--accent-primary);
        }

        .controls-search-icon {
          color: var(--accent-primary);
          margin-right: 10px;
        }

        .controls-search-wrap input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: var(--text-main);
          font-size: 13.5px;
        }

        .controls-clear-search {
          color: var(--text-dim);
          cursor: pointer;
        }

        .controls-dropdowns-group {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .filter-select {
          height: 44px;
          padding: 0 14px;
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          color: var(--text-main);
          font-size: 13px;
          font-weight: 600;
          outline: none;
          cursor: pointer;
        }

        .filter-select:focus {
          border-color: var(--accent-primary);
        }

        .view-mode-toggle {
          display: flex;
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          overflow: hidden;
          height: 44px;
        }

        .view-toggle-btn {
          width: 44px;
          height: 44px;
          display: grid;
          place-items: center;
          color: var(--text-dim);
          cursor: pointer;
          transition: 0.2s;
        }

        .view-toggle-btn.active {
          background: var(--accent-primary);
          color: #ffffff;
        }

        /* Active Chips */
        .filter-summary-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }

        .results-count-text {
          font-size: 14px;
          color: var(--text-muted);
        }

        .results-count-text strong {
          color: var(--text-main);
        }

        .active-chips-area {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .active-filter-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          border-radius: var(--radius-pill);
          background: rgba(124, 92, 255, 0.12);
          border: 1px solid rgba(124, 92, 255, 0.3);
          color: var(--accent-primary);
          font-size: 12px;
          font-weight: 700;
        }

        .active-filter-chip button {
          cursor: pointer;
          color: var(--accent-primary);
          display: grid;
          place-items: center;
        }

        .reset-all-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #ef4444;
          font-size: 12.5px;
          font-weight: 700;
          cursor: pointer;
          padding: 5px 10px;
          border-radius: var(--radius-pill);
          background: rgba(239, 68, 68, 0.1);
        }

        /* List View */
        .tools-list-view {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .tool-list-row {
          padding: 20px 24px;
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          gap: 20px;
          transition: all 0.2s;
        }

        .tool-list-row:hover {
          border-color: var(--border-highlight);
          transform: translateY(-2px);
        }

        .list-main-info {
          flex: 1;
          min-width: 0;
        }

        .list-title-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 6px;
        }

        .list-title-row h3 {
          font-size: 18px;
          font-weight: 800;
          margin: 0;
        }

        .list-tagline {
          color: var(--text-muted);
          font-size: 13.5px;
          line-height: 1.5;
          margin: 0 0 8px;
        }

        .list-tags {
          display: flex;
          gap: 6px;
        }

        .list-metrics-col {
          display: flex;
          flex-direction: column;
          gap: 4px;
          font-size: 12.5px;
          min-width: 140px;
        }

        .metric-growth {
          color: #10b981;
          font-weight: 700;
        }

        .list-actions-col {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .list-view-btn {
          padding: 10px 18px !important;
          font-size: 13px !important;
        }

        /* Empty state */
        .empty-results-box {
          text-align: center;
          padding: 80px 20px;
          border-radius: var(--radius-xl);
        }

        .empty-icon-large {
          font-size: 48px;
          margin-bottom: 16px;
        }

        .empty-results-box h3 {
          font-size: 22px;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .empty-results-box p {
          color: var(--text-muted);
          font-size: 14px;
          max-width: 480px;
          margin: 0 auto 24px;
        }

        @media (max-width: 900px) {
          .tool-list-row {
            flex-direction: column;
            align-items: flex-start;
          }
          .list-actions-col {
            width: 100%;
            justify-content: space-between;
          }
        }
      `})]})}function si(){let e=k(),t=Bn.filter(e=>e.id!==`all`);return(0,P.jsxs)(`div`,{className:`categories-page-container`,children:[(0,P.jsxs)(`div`,{className:`categories-hero-banner glass-card`,children:[(0,P.jsxs)(`span`,{className:`badge-glow`,children:[(0,P.jsx)(kr,{}),` AI ECOSYSTEM ARCHITECTURE`]}),(0,P.jsx)(`h1`,{children:`Explore AI Tools by Category`}),(0,P.jsx)(`p`,{children:`Discover frontier models and specialized software organized across 8 primary domains of artificial intelligence.`})]}),(0,P.jsx)(`div`,{className:`categories-main-grid`,children:t.map(t=>{let n=N.filter(e=>e.category===t.id).slice(0,3),r=N.filter(e=>e.category===t.id).length;return(0,P.jsxs)(`div`,{className:`category-card-pro glass-card`,onClick:()=>e(`/tools?category=${t.id}`),children:[(0,P.jsxs)(`div`,{className:`category-top-row`,children:[(0,P.jsx)(`div`,{className:`category-emoji-box`,children:t.icon}),(0,P.jsxs)(`span`,{className:`category-tools-count`,children:[r,` Models Available`]})]}),(0,P.jsx)(`h2`,{children:t.name}),(0,P.jsx)(`p`,{className:`category-card-desc`,children:t.description}),(0,P.jsxs)(`div`,{className:`category-samples-strip`,children:[(0,P.jsx)(`span`,{className:`samples-label`,children:`Popular in this category:`}),(0,P.jsx)(`div`,{className:`samples-icons-row`,children:n.map(e=>(0,P.jsxs)(`div`,{className:`sample-tool-chip`,title:e.name,children:[(0,P.jsx)(Xr,{name:e.name,size:22}),(0,P.jsx)(`span`,{children:e.name})]},e.id))})]}),(0,P.jsxs)(`div`,{className:`category-card-footer`,children:[(0,P.jsxs)(`span`,{children:[`Browse all `,t.name,` tools`]}),(0,P.jsx)(Yr,{className:`footer-arrow`})]})]},t.id)})}),(0,P.jsx)(`style`,{children:`
        .categories-page-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .categories-hero-banner {
          padding: 36px 40px;
          border-radius: var(--radius-xl);
          background: linear-gradient(135deg, var(--bg-surface) 0%, rgba(124, 92, 255, 0.08) 100%);
          border: 1px solid var(--border-highlight);
        }

        .categories-hero-banner h1 {
          font-size: 32px;
          font-weight: 900;
          margin: 12px 0 8px;
        }

        .categories-hero-banner p {
          color: var(--text-muted);
          font-size: 15px;
          max-width: 680px;
          margin: 0;
        }

        .categories-main-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 24px;
        }

        .category-card-pro {
          padding: 28px;
          border-radius: var(--radius-xl);
          display: flex;
          flex-direction: column;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .category-card-pro:hover {
          transform: translateY(-6px);
          border-color: var(--accent-primary);
        }

        .category-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .category-emoji-box {
          width: 50px;
          height: 50px;
          border-radius: var(--radius-md);
          background: var(--bg-glass-strong);
          display: grid;
          place-items: center;
          font-size: 26px;
        }

        .category-tools-count {
          font-size: 12px;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: var(--radius-pill);
          background: rgba(124, 92, 255, 0.12);
          color: var(--accent-primary);
        }

        .category-card-pro h2 {
          font-size: 20px;
          font-weight: 800;
          margin-bottom: 8px;
          color: var(--text-main);
        }

        .category-card-desc {
          font-size: 13.5px;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .category-samples-strip {
          padding: 12px 14px;
          border-radius: var(--radius-md);
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          margin-bottom: 20px;
        }

        .samples-label {
          font-size: 11px;
          color: var(--text-dim);
          font-weight: 700;
          display: block;
          margin-bottom: 8px;
        }

        .samples-icons-row {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .sample-tool-chip {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 4px 8px;
          border-radius: var(--radius-sm);
          background: var(--bg-glass-strong);
          font-size: 11.5px;
          font-weight: 600;
          color: var(--text-muted);
        }

        .category-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
          padding-top: 14px;
          border-top: 1px solid var(--border-color);
          font-size: 13px;
          font-weight: 700;
          color: var(--accent-primary);
        }

        .footer-arrow {
          transition: transform 0.2s;
        }

        .category-card-pro:hover .footer-arrow {
          transform: translateX(5px);
        }

        @media (max-width: 600px) {
          .categories-main-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function ci(){let{openToolModal:e,toggleFavorite:t,isFavorite:n}=Wn(),[r,i]=(0,x.useState)(`all`),a=[...N].filter(e=>r===`all`||e.category===r).sort((e,t)=>(t.trendingScore||0)-(e.trendingScore||0));return(0,P.jsxs)(`div`,{className:`trending-page-container`,children:[(0,P.jsxs)(`div`,{className:`trending-hero-banner glass-card`,children:[(0,P.jsxs)(`span`,{className:`badge-glow`,children:[(0,P.jsx)(Pr,{}),` LIVE LEADERBOARD`]}),(0,P.jsx)(`h1`,{children:`🔥 Trending AI Models This Week`}),(0,P.jsx)(`p`,{children:`Rankings updated weekly based on active user growth, GitHub stars, developer adoption, and community benchmarks.`}),(0,P.jsxs)(`div`,{className:`trending-category-pills`,children:[(0,P.jsx)(`button`,{type:`button`,className:`pill-btn ${r===`all`?`active`:``}`,onClick:()=>i(`all`),children:`🔥 All Trends`}),Bn.filter(e=>e.id!==`all`).map(e=>(0,P.jsxs)(`button`,{type:`button`,className:`pill-btn ${r===e.id?`active`:``}`,onClick:()=>i(e.id),children:[e.icon,` `,e.name]},e.id))]})]}),(0,P.jsx)(`div`,{className:`trending-leaderboard-list`,children:a.map((r,i)=>{let a=i+1,o=n(r.id);return(0,P.jsxs)(`div`,{className:`trending-row-card glass-card ${a<=3?`top-rank rank-${a}`:``}`,children:[(0,P.jsxs)(`div`,{className:`rank-badge-box`,children:[a===1&&(0,P.jsx)(`span`,{className:`crown-icon`,children:`👑`}),(0,P.jsxs)(`span`,{className:`rank-digit`,children:[`#`,a]})]}),(0,P.jsxs)(`div`,{className:`tool-brand-col`,children:[(0,P.jsx)(Xr,{name:r.name,size:48}),(0,P.jsxs)(`div`,{className:`tool-naming-text`,children:[(0,P.jsxs)(`div`,{className:`name-and-tag`,children:[(0,P.jsx)(`h3`,{children:r.name}),(0,P.jsx)(`span`,{className:`card-category-pill`,children:r.categoryLabel}),(0,P.jsx)(`span`,{className:`badge-pricing ${(r.pricingModel||`freemium`).toLowerCase()}`,children:r.pricingModel})]}),(0,P.jsx)(`p`,{className:`tool-one-liner`,children:r.tagline})]})]}),(0,P.jsxs)(`div`,{className:`popularity-meter-col`,children:[(0,P.jsxs)(`div`,{className:`score-text`,children:[(0,P.jsx)(`small`,{children:`Popularity Score`}),(0,P.jsxs)(`strong`,{children:[r.trendingScore||90,`/100`]})]}),(0,P.jsx)(`div`,{className:`progress-bar-bg`,children:(0,P.jsx)(`div`,{className:`progress-bar-fill`,style:{width:`${r.trendingScore||90}%`}})})]}),(0,P.jsxs)(`div`,{className:`growth-metric-col`,children:[(0,P.jsxs)(`span`,{className:`growth-delta-pill`,children:[(0,P.jsx)(Gr,{}),` `,r.growthRate]}),(0,P.jsxs)(`small`,{children:[r.monthlyUsers,` users`]})]}),(0,P.jsxs)(`div`,{className:`trending-actions-col`,children:[(0,P.jsx)(`button`,{type:`button`,className:`btn-secondary`,onClick:()=>e(r),children:`Quick View`}),(0,P.jsx)(`button`,{type:`button`,className:`card-heart-btn ${o?`active`:``}`,onClick:()=>t(r.id),title:o?`Favorited`:`Add to favorites`,children:`❤️`}),(0,P.jsx)(`a`,{href:r.websiteUrl,target:`_blank`,rel:`noopener noreferrer`,className:`btn-primary launch-mini-btn`,title:`Launch tool`,children:(0,P.jsx)(Lr,{})})]})]},r.id)})}),(0,P.jsx)(`style`,{children:`
        .trending-page-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .trending-hero-banner {
          padding: 36px 40px;
          border-radius: var(--radius-xl);
          background: linear-gradient(135deg, var(--bg-surface) 0%, rgba(236, 72, 153, 0.08) 100%);
          border: 1px solid var(--border-highlight);
        }

        .trending-hero-banner h1 {
          font-size: 32px;
          font-weight: 900;
          margin: 12px 0 8px;
        }

        .trending-hero-banner p {
          color: var(--text-muted);
          font-size: 15px;
          max-width: 720px;
          margin: 0 0 24px;
        }

        .trending-category-pills {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          padding-bottom: 6px;
        }

        .pill-btn {
          padding: 8px 16px;
          border-radius: var(--radius-pill);
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          font-size: 13px;
          font-weight: 600;
          white-space: nowrap;
          cursor: pointer;
          transition: 0.2s;
        }

        .pill-btn:hover {
          color: var(--text-main);
          border-color: var(--accent-primary);
        }

        .pill-btn.active {
          background: var(--accent-primary);
          color: white;
          border-color: var(--accent-primary);
          box-shadow: 0 4px 15px rgba(124, 92, 255, 0.35);
        }

        .trending-leaderboard-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .trending-row-card {
          padding: 20px 28px;
          border-radius: var(--radius-xl);
          display: flex;
          align-items: center;
          gap: 24px;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .trending-row-card:hover {
          transform: translateY(-3px) translateX(4px);
          border-color: var(--accent-primary);
        }

        .trending-row-card.rank-1 {
          border-color: rgba(245, 158, 11, 0.4);
          background: linear-gradient(90deg, var(--bg-surface) 0%, rgba(245, 158, 11, 0.05) 100%);
        }

        .trending-row-card.rank-2 {
          border-color: rgba(124, 92, 255, 0.4);
        }

        .rank-badge-box {
          width: 50px;
          text-align: center;
          flex-shrink: 0;
        }

        .crown-icon {
          display: block;
          font-size: 18px;
          margin-bottom: -2px;
        }

        .rank-digit {
          font-size: 22px;
          font-weight: 900;
          color: var(--accent-primary);
        }

        .tool-brand-col {
          display: flex;
          align-items: center;
          gap: 16px;
          flex: 1;
          min-width: 0;
        }

        .name-and-tag {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .name-and-tag h3 {
          font-size: 18px;
          font-weight: 800;
          margin: 0;
        }

        .tool-one-liner {
          font-size: 13px;
          color: var(--text-muted);
          margin: 4px 0 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 480px;
        }

        .popularity-meter-col {
          width: 140px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .score-text {
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          color: var(--text-dim);
        }

        .score-text strong {
          color: var(--text-main);
        }

        .progress-bar-bg {
          height: 6px;
          border-radius: 99px;
          background: var(--bg-glass-strong);
          overflow: hidden;
        }

        .progress-bar-fill {
          height: 100%;
          border-radius: 99px;
          background: var(--accent-gradient);
        }

        .growth-metric-col {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 4px;
          min-width: 110px;
        }

        .growth-delta-pill {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 4px 10px;
          border-radius: var(--radius-pill);
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
          font-weight: 800;
          font-size: 12px;
        }

        .growth-metric-col small {
          font-size: 11px;
          color: var(--text-dim);
        }

        .trending-actions-col {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .launch-mini-btn {
          width: 38px;
          height: 38px;
          padding: 0 !important;
          border-radius: var(--radius-md) !important;
        }

        @media (max-width: 900px) {
          .trending-row-card {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
          .popularity-meter-col, .growth-metric-col {
            width: 100%;
            align-items: flex-start;
          }
          .trending-actions-col {
            width: 100%;
            justify-content: space-between;
          }
        }
      `})]})}function li(){let e=k(),{favorites:t,toggleFavorite:n,setCompareList:r,showToast:i}=Wn(),[a,o]=(0,x.useState)(``),s=N.filter(e=>t.includes(e.id)),c=s.filter(e=>!a.trim()||e.name.toLowerCase().includes(a.toLowerCase())||e.categoryLabel.toLowerCase().includes(a.toLowerCase()));return(0,P.jsxs)(`div`,{className:`favorites-page-container`,children:[(0,P.jsxs)(`div`,{className:`favorites-hero-banner glass-card`,children:[(0,P.jsxs)(`div`,{className:`banner-left`,children:[(0,P.jsxs)(`span`,{className:`badge-glow`,children:[(0,P.jsx)(Nr,{}),` YOUR PRIVATE STACK`]}),(0,P.jsx)(`h1`,{children:`❤️ Favorite AI Tools Collection`}),(0,P.jsx)(`p`,{children:`Quick access to all your bookmarked models, prompts, and productivity engines saved locally in your workspace.`})]}),s.length>=2&&(0,P.jsxs)(`button`,{type:`button`,className:`btn-primary compare-favs-cta`,onClick:()=>{if(s.length<2){i(`Please save at least 2 favorite tools to compare!`,`info`);return}r([s[0].id,s[1].id]),e(`/compare`)},children:[(0,P.jsx)(Jr,{}),` Compare Saved Tools`]})]}),s.length>0&&(0,P.jsxs)(`div`,{className:`favorites-search-bar glass-card`,children:[(0,P.jsxs)(`div`,{className:`fav-search-input`,children:[(0,P.jsx)(yr,{className:`fav-search-icon`}),(0,P.jsx)(`input`,{type:`text`,placeholder:`Search within your saved favorites...`,value:a,onChange:e=>o(e.target.value)})]}),(0,P.jsxs)(`div`,{className:`fav-counter-badge`,children:[(0,P.jsx)(`strong`,{children:c.length}),` of `,s.length,` tools saved`]})]}),s.length===0?(0,P.jsxs)(`div`,{className:`empty-favorites-card glass-card`,children:[(0,P.jsx)(`div`,{className:`empty-heart-icon`,children:`💔`}),(0,P.jsx)(`h2`,{children:`No Saved AI Tools Yet`}),(0,P.jsx)(`p`,{children:`You haven't bookmarked any tools yet. Explore our directory of 30+ AI models and click the heart icon on any card to build your custom stack!`}),(0,P.jsxs)(M,{to:`/tools`,className:`btn-primary browse-tools-cta`,children:[(0,P.jsx)(xr,{}),` Browse AI Directory`]})]}):c.length===0?(0,P.jsxs)(`div`,{className:`empty-favorites-card glass-card`,children:[(0,P.jsx)(`div`,{className:`empty-heart-icon`,children:`🔍`}),(0,P.jsx)(`h2`,{children:`No Matching Favorites`}),(0,P.jsxs)(`p`,{children:[`No saved tool matches your search keyword "`,a,`".`]}),(0,P.jsxs)(`button`,{type:`button`,className:`btn-secondary`,onClick:()=>o(``),children:[(0,P.jsx)(ur,{}),` Clear Search`]})]}):(0,P.jsx)(`div`,{className:`tools-grid`,children:c.map(e=>(0,P.jsx)(ri,{tool:e},e.id))}),(0,P.jsx)(`style`,{children:`
        .favorites-page-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .favorites-hero-banner {
          padding: 36px 40px;
          border-radius: var(--radius-xl);
          background: linear-gradient(135deg, var(--bg-surface) 0%, rgba(239, 68, 68, 0.08) 100%);
          border: 1px solid var(--border-highlight);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .favorites-hero-banner h1 {
          font-size: 32px;
          font-weight: 900;
          margin: 12px 0 8px;
        }

        .favorites-hero-banner p {
          color: var(--text-muted);
          font-size: 15px;
          max-width: 680px;
          margin: 0;
        }

        .compare-favs-cta {
          white-space: nowrap;
          padding: 14px 24px !important;
        }

        .favorites-search-bar {
          padding: 16px 24px;
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .fav-search-input {
          display: flex;
          align-items: center;
          gap: 12px;
          flex: 1;
        }

        .fav-search-icon {
          color: var(--accent-primary);
        }

        .fav-search-input input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: var(--text-main);
          font-size: 14px;
        }

        .fav-counter-badge {
          font-size: 13px;
          color: var(--text-muted);
          padding: 6px 14px;
          border-radius: var(--radius-pill);
          background: var(--bg-glass-strong);
          border: 1px solid var(--border-color);
        }

        .fav-counter-badge strong {
          color: var(--accent-primary);
        }

        .empty-favorites-card {
          text-align: center;
          padding: 80px 24px;
          border-radius: var(--radius-xl);
        }

        .empty-heart-icon {
          font-size: 56px;
          margin-bottom: 16px;
        }

        .empty-favorites-card h2 {
          font-size: 24px;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .empty-favorites-card p {
          color: var(--text-muted);
          font-size: 14.5px;
          max-width: 500px;
          margin: 0 auto 24px;
          line-height: 1.6;
        }

        .browse-tools-cta {
          padding: 14px 28px !important;
          border-radius: var(--radius-pill) !important;
        }

        @media (max-width: 768px) {
          .favorites-hero-banner {
            flex-direction: column;
            align-items: flex-start;
          }
          .compare-favs-cta {
            width: 100%;
          }
        }
      `})]})}function ui(){let{compareList:e,setCompareList:t,openToolModal:n}=Wn(),[r,i]=(0,x.useState)(e[0]||`chatgpt`),[a,o]=(0,x.useState)(e[1]||`claude`),[s,c]=(0,x.useState)(e[2]||`gemini`),[l,u]=(0,x.useState)(!1),d=N.find(e=>e.id===r)||N[0],f=N.find(e=>e.id===a)||N[1],p=N.find(e=>e.id===s)||N[2],m=l?[d,f,p]:[d,f];return(0,P.jsxs)(`div`,{className:`compare-page-container`,children:[(0,P.jsxs)(`div`,{className:`compare-hero-banner glass-card`,children:[(0,P.jsxs)(`span`,{className:`badge-glow`,children:[(0,P.jsx)(Jr,{}),` BENCHMARK ENGINE`]}),(0,P.jsx)(`h1`,{children:`Side-by-Side Model Comparison`}),(0,P.jsx)(`p`,{children:`Evaluate architecture, context lengths, free tier limits, and API rates to choose the optimal AI tool for your project.`}),(0,P.jsxs)(`div`,{className:`compare-toggle-row`,children:[(0,P.jsx)(`button`,{type:`button`,className:`btn-secondary mode-switch ${l?``:`active`}`,onClick:()=>u(!1),children:`2 Models Comparison`}),(0,P.jsx)(`button`,{type:`button`,className:`btn-secondary mode-switch ${l?`active`:``}`,onClick:()=>u(!0),children:`3 Models Comparison (Pro)`})]})]}),(0,P.jsxs)(`div`,{className:`compare-selectors-bar glass-card`,children:[(0,P.jsxs)(`div`,{className:`selector-group`,children:[(0,P.jsx)(`label`,{children:`Select Model #1:`}),(0,P.jsx)(`select`,{value:r,onChange:e=>i(e.target.value),className:`model-select`,children:N.map(e=>(0,P.jsxs)(`option`,{value:e.id,children:[e.name,` (`,e.categoryLabel,`)`]},e.id))})]}),(0,P.jsx)(`div`,{className:`selector-vs-badge`,children:`VS`}),(0,P.jsxs)(`div`,{className:`selector-group`,children:[(0,P.jsx)(`label`,{children:`Select Model #2:`}),(0,P.jsx)(`select`,{value:a,onChange:e=>o(e.target.value),className:`model-select`,children:N.map(e=>(0,P.jsxs)(`option`,{value:e.id,children:[e.name,` (`,e.categoryLabel,`)`]},e.id))})]}),l&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`div`,{className:`selector-vs-badge`,children:`VS`}),(0,P.jsxs)(`div`,{className:`selector-group`,children:[(0,P.jsx)(`label`,{children:`Select Model #3:`}),(0,P.jsx)(`select`,{value:s,onChange:e=>c(e.target.value),className:`model-select`,children:N.map(e=>(0,P.jsxs)(`option`,{value:e.id,children:[e.name,` (`,e.categoryLabel,`)`]},e.id))})]})]})]}),(0,P.jsxs)(`div`,{className:`comparison-table-wrapper glass-card`,children:[(0,P.jsxs)(`div`,{className:`compare-head-grid ${l?`three-way`:`two-way`}`,children:[(0,P.jsxs)(`div`,{className:`spec-label-header`,children:[(0,P.jsx)(`h3`,{children:`Key Capabilities`}),(0,P.jsx)(`small`,{children:`Direct specification breakdown`})]}),m.map(e=>(0,P.jsxs)(`div`,{className:`compared-tool-hero`,children:[(0,P.jsx)(Xr,{name:e.name,size:56}),(0,P.jsxs)(`div`,{className:`tool-hero-title`,children:[(0,P.jsx)(`h2`,{children:e.name}),(0,P.jsxs)(`div`,{className:`rating-pill`,children:[(0,P.jsx)(hr,{className:`star-icon`}),` `,e.rating,` (`,e.monthlyUsers,` users)`]})]}),(0,P.jsxs)(`div`,{className:`compared-hero-actions`,children:[(0,P.jsx)(`button`,{type:`button`,className:`btn-secondary`,onClick:()=>n(e),children:`View Details`}),(0,P.jsxs)(`a`,{href:e.websiteUrl,target:`_blank`,rel:`noopener noreferrer`,className:`btn-primary`,children:[`Launch `,(0,P.jsx)(Lr,{style:{fontSize:`11px`}})]})]})]},e.id))]}),(0,P.jsxs)(`div`,{className:`compare-rows-container`,children:[[{label:`Creator / Org`,key:`creator`},{label:`Primary Category`,key:`categoryLabel`},{label:`Pricing Model`,key:`pricingModel`},{label:`Monthly Cost / Tier`,key:`priceText`},{label:`Context Window`,specKey:`contextWindow`},{label:`Free Tier Policy`,specKey:`freeTier`},{label:`API Availability`,specKey:`apiAvailable`},{label:`Image Generation`,specKey:`imageGeneration`},{label:`Voice / Speech Mode`,specKey:`voiceMode`},{label:`Coding Benchmark / IDE`,specKey:`codingSupport`},{label:`Supported Platforms`,specKey:`platforms`}].map((e,t)=>(0,P.jsxs)(`div`,{className:`compare-spec-row ${l?`three-way`:`two-way`}`,children:[(0,P.jsx)(`div`,{className:`spec-name-cell`,children:(0,P.jsx)(`strong`,{children:e.label})}),m.map(t=>{let n=e.specKey?t.specs[e.specKey]:t[e.key];return(0,P.jsx)(`div`,{className:`spec-val-cell`,children:n||`—`},t.id)})]},t)),(0,P.jsxs)(`div`,{className:`compare-spec-row pros-row ${l?`three-way`:`two-way`}`,children:[(0,P.jsx)(`div`,{className:`spec-name-cell`,children:(0,P.jsx)(`strong`,{children:`Top Strengths`})}),m.map(e=>(0,P.jsx)(`div`,{className:`spec-val-cell pros-cell`,children:(0,P.jsx)(`ul`,{children:e.pros.map((e,t)=>(0,P.jsxs)(`li`,{children:[(0,P.jsx)(Ur,{className:`check-green`}),` `,e]},t))})},e.id))]}),(0,P.jsxs)(`div`,{className:`compare-spec-row cons-row ${l?`three-way`:`two-way`}`,children:[(0,P.jsx)(`div`,{className:`spec-name-cell`,children:(0,P.jsx)(`strong`,{children:`Considerations`})}),m.map(e=>(0,P.jsx)(`div`,{className:`spec-val-cell cons-cell`,children:(0,P.jsx)(`ul`,{children:e.cons.map((e,t)=>(0,P.jsxs)(`li`,{children:[`• `,e]},t))})},e.id))]})]})]}),(0,P.jsx)(`style`,{children:`
        .compare-page-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .compare-hero-banner {
          padding: 36px 40px;
          border-radius: var(--radius-xl);
          background: linear-gradient(135deg, var(--bg-surface) 0%, rgba(124, 92, 255, 0.08) 100%);
          border: 1px solid var(--border-highlight);
        }

        .compare-hero-banner h1 {
          font-size: 32px;
          font-weight: 900;
          margin: 12px 0 8px;
        }

        .compare-hero-banner p {
          color: var(--text-muted);
          font-size: 15px;
          max-width: 700px;
          margin: 0 0 24px;
        }

        .compare-toggle-row {
          display: flex;
          gap: 12px;
        }

        .mode-switch {
          padding: 8px 16px !important;
          font-size: 13px !important;
          border-radius: var(--radius-pill) !important;
        }

        .mode-switch.active {
          background: var(--accent-primary);
          color: white;
          border-color: var(--accent-primary);
        }

        /* Selectors */
        .compare-selectors-bar {
          padding: 20px 24px;
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: space-around;
          gap: 16px;
          flex-wrap: wrap;
        }

        .selector-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
          flex: 1;
          min-width: 220px;
        }

        .selector-group label {
          font-size: 12px;
          font-weight: 700;
          color: var(--text-dim);
        }

        .model-select {
          height: 44px;
          padding: 0 14px;
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          color: var(--text-main);
          font-size: 14px;
          font-weight: 600;
          outline: none;
        }

        .model-select:focus {
          border-color: var(--accent-primary);
        }

        .selector-vs-badge {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: var(--accent-gradient);
          color: white;
          font-weight: 900;
          font-size: 12px;
          display: grid;
          place-items: center;
          box-shadow: 0 4px 12px rgba(124, 92, 255, 0.4);
        }

        /* Table */
        .comparison-table-wrapper {
          border-radius: var(--radius-xl);
          overflow: hidden;
        }

        .compare-head-grid {
          display: grid;
          padding: 30px;
          background: var(--bg-surface);
          border-bottom: 1px solid var(--border-color);
          align-items: center;
          gap: 24px;
        }

        .compare-head-grid.two-way {
          grid-template-columns: 220px 1fr 1fr;
        }

        .compare-head-grid.three-way {
          grid-template-columns: 200px 1fr 1fr 1fr;
        }

        .spec-label-header h3 {
          font-size: 20px;
          font-weight: 800;
          margin-bottom: 4px;
        }

        .spec-label-header small {
          color: var(--text-dim);
          font-size: 12px;
        }

        .compared-tool-hero {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 12px;
          padding: 20px;
          border-radius: var(--radius-lg);
          background: var(--bg-glass-strong);
          border: 1px solid var(--border-color);
        }

        .tool-hero-title h2 {
          font-size: 20px;
          font-weight: 800;
          margin-bottom: 4px;
        }

        .rating-pill {
          font-size: 12px;
          color: var(--text-muted);
          font-weight: 600;
        }

        .star-icon {
          color: #f59e0b;
        }

        .compared-hero-actions {
          display: flex;
          gap: 8px;
          width: 100%;
        }

        .compared-hero-actions button,
        .compared-hero-actions a {
          flex: 1;
          padding: 9px !important;
          font-size: 12px !important;
        }

        /* Spec Rows */
        .compare-rows-container {
          display: flex;
          flex-direction: column;
        }

        .compare-spec-row {
          display: grid;
          padding: 16px 30px;
          border-bottom: 1px solid var(--border-color);
          font-size: 13.5px;
          align-items: center;
          gap: 24px;
        }

        .compare-spec-row:nth-child(even) {
          background: var(--bg-glass);
        }

        .compare-spec-row.two-way {
          grid-template-columns: 220px 1fr 1fr;
        }

        .compare-spec-row.three-way {
          grid-template-columns: 200px 1fr 1fr 1fr;
        }

        .spec-name-cell {
          color: var(--text-muted);
          font-weight: 700;
        }

        .spec-val-cell {
          color: var(--text-main);
        }

        .pros-cell ul, .cons-cell ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .check-green {
          color: #10b981;
          margin-right: 6px;
        }

        .cons-cell li {
          color: var(--text-muted);
        }

        @media (max-width: 900px) {
          .compare-head-grid.two-way,
          .compare-spec-row.two-way {
            grid-template-columns: 140px 1fr 1fr;
            padding: 16px 14px;
            gap: 12px;
          }
          .compare-head-grid.three-way,
          .compare-spec-row.three-way {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }
      `})]})}function di(){let{user:e,updateProfile:t,favorites:n,recentActivity:r,theme:i,toggleTheme:a,showToast:o}=Wn(),[s,c]=(0,x.useState)({name:e.name||`Sakshi Patel`,email:e.email||`sakshi@aihub.dev`,bio:e.bio||`AI researcher & full-stack developer exploring future frontier models.`,avatar:e.avatar||`👩‍💻`,role:`Full-Stack AI Developer`}),[l,u]=(0,x.useState)(!1),[d,f]=(0,x.useState)(`sk-aihub-demo-992384729184`);return(0,P.jsxs)(`div`,{className:`profile-page-container`,children:[(0,P.jsxs)(`div`,{className:`profile-hero-card glass-card`,children:[(0,P.jsx)(`div`,{className:`profile-avatar-large`,children:(0,P.jsx)(`span`,{children:s.avatar})}),(0,P.jsxs)(`div`,{className:`profile-hero-info`,children:[(0,P.jsxs)(`div`,{className:`name-badge-row`,children:[(0,P.jsx)(`h1`,{children:s.name}),(0,P.jsxs)(`span`,{className:`badge-glow`,children:[(0,P.jsx)(_r,{}),` `,e.plan||`AIHUB Pro`]})]}),(0,P.jsx)(`p`,{className:`profile-email-text`,children:s.email}),(0,P.jsxs)(`p`,{className:`profile-bio-quote`,children:[`"`,s.bio,`"`]})]}),(0,P.jsxs)(`div`,{className:`profile-stats-summary`,children:[(0,P.jsxs)(`div`,{className:`stat-pill`,children:[(0,P.jsx)(`strong`,{children:n.length}),(0,P.jsx)(`small`,{children:`Favorites Saved`})]}),(0,P.jsxs)(`div`,{className:`stat-pill`,children:[(0,P.jsx)(`strong`,{children:`32`}),(0,P.jsx)(`small`,{children:`Models Catalog`})]}),(0,P.jsxs)(`div`,{className:`stat-pill`,children:[(0,P.jsx)(`strong`,{children:r.length}),(0,P.jsx)(`small`,{children:`Activities`})]})]})]}),(0,P.jsxs)(`div`,{className:`profile-settings-grid`,children:[(0,P.jsxs)(`div`,{className:`profile-card glass-card`,children:[(0,P.jsxs)(`div`,{className:`card-section-title`,children:[(0,P.jsx)(cr,{className:`section-icon`}),(0,P.jsx)(`h3`,{children:`Personal Information`})]}),(0,P.jsxs)(`form`,{onSubmit:e=>{e.preventDefault(),t({name:s.name,email:s.email,bio:s.bio,avatar:s.avatar}),u(!0),setTimeout(()=>u(!1),3e3)},className:`profile-edit-form`,children:[(0,P.jsxs)(`div`,{className:`form-group-field`,children:[(0,P.jsx)(`label`,{children:`Choose Avatar Icon`}),(0,P.jsx)(`div`,{className:`avatar-selection-row`,children:[`👩‍💻`,`👨‍💻`,`🤖`,`🚀`,`🧠`,`✨`,`⚡`,`🎨`].map(e=>(0,P.jsx)(`button`,{type:`button`,className:`avatar-option-btn ${s.avatar===e?`active`:``}`,onClick:()=>c({...s,avatar:e}),children:e},e))})]}),(0,P.jsxs)(`div`,{className:`form-group-field`,children:[(0,P.jsx)(`label`,{children:`Full Name`}),(0,P.jsx)(`input`,{type:`text`,value:s.name,onChange:e=>c({...s,name:e.target.value}),required:!0})]}),(0,P.jsxs)(`div`,{className:`form-group-field`,children:[(0,P.jsx)(`label`,{children:`Email Address`}),(0,P.jsx)(`input`,{type:`email`,value:s.email,onChange:e=>c({...s,email:e.target.value}),required:!0})]}),(0,P.jsxs)(`div`,{className:`form-group-field`,children:[(0,P.jsx)(`label`,{children:`Professional Bio`}),(0,P.jsx)(`textarea`,{rows:`3`,value:s.bio,onChange:e=>c({...s,bio:e.target.value})})]}),(0,P.jsxs)(`button`,{type:`submit`,className:`btn-primary save-profile-btn`,children:[(0,P.jsx)(br,{}),` Save Profile Changes`]}),l&&(0,P.jsxs)(`div`,{className:`save-success-alert`,children:[(0,P.jsx)(Ur,{}),` Profile changes saved successfully!`]})]})]}),(0,P.jsxs)(`div`,{className:`profile-card glass-card`,children:[(0,P.jsxs)(`div`,{className:`card-section-title`,children:[(0,P.jsx)(Br,{className:`section-icon`}),(0,P.jsx)(`h3`,{children:`Preferences & Integrations`})]}),(0,P.jsxs)(`div`,{className:`preferences-list`,children:[(0,P.jsxs)(`div`,{className:`pref-item`,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`strong`,{children:`Interface Appearance`}),(0,P.jsxs)(`small`,{children:[`Currently using `,i===`dark`?`Dark Cyber`:`Clean Light`,` theme`]})]}),(0,P.jsxs)(`button`,{type:`button`,className:`btn-secondary`,onClick:a,children:[`Switch to `,i===`dark`?`Light`:`Dark`]})]}),(0,P.jsx)(`div`,{className:`pref-item api-item`,children:(0,P.jsxs)(`div`,{children:[(0,P.jsxs)(`strong`,{className:`api-key-label`,children:[(0,P.jsx)(Ar,{}),` AIHUB API Access Token`]}),(0,P.jsx)(`small`,{children:`Use this token for programmatic model benchmark access`}),(0,P.jsxs)(`div`,{className:`api-key-display`,children:[(0,P.jsx)(`code`,{children:d}),(0,P.jsx)(`button`,{type:`button`,className:`btn-secondary copy-key-btn`,onClick:()=>{navigator.clipboard.writeText(d),o(`API Key copied to clipboard! 🔑`,`info`)},children:`Copy`})]})]})}),(0,P.jsxs)(`div`,{className:`pref-item`,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`strong`,{children:`Weekly Model Release Radar`}),(0,P.jsx)(`small`,{children:`Receive summaries of newly launched frontier LLMs`})]}),(0,P.jsxs)(`label`,{className:`toggle-switch`,children:[(0,P.jsx)(`input`,{type:`checkbox`,defaultChecked:!0}),(0,P.jsx)(`span`,{className:`toggle-slider`})]})]}),(0,P.jsxs)(`div`,{className:`pref-item`,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`strong`,{children:`Benchmark Price Drop Alerts`}),(0,P.jsx)(`small`,{children:`Get notified when API token prices drop across providers`})]}),(0,P.jsxs)(`label`,{className:`toggle-switch`,children:[(0,P.jsx)(`input`,{type:`checkbox`,defaultChecked:!0}),(0,P.jsx)(`span`,{className:`toggle-slider`})]})]})]})]})]}),(0,P.jsx)(`style`,{children:`
        .profile-page-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .profile-hero-card {
          padding: 36px 40px;
          border-radius: var(--radius-xl);
          background: linear-gradient(135deg, var(--bg-surface) 0%, rgba(124, 92, 255, 0.08) 100%);
          border: 1px solid var(--border-highlight);
          display: flex;
          align-items: center;
          gap: 30px;
          flex-wrap: wrap;
        }

        .profile-avatar-large {
          width: 96px;
          height: 96px;
          border-radius: 50%;
          background: var(--accent-gradient);
          display: grid;
          place-items: center;
          font-size: 48px;
          box-shadow: 0 10px 25px rgba(124, 92, 255, 0.4);
        }

        .profile-hero-info {
          flex: 1;
          min-width: 280px;
        }

        .name-badge-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 4px;
        }

        .name-badge-row h1 {
          font-size: 28px;
          font-weight: 900;
          margin: 0;
        }

        .profile-email-text {
          color: var(--text-dim);
          font-size: 13.5px;
          margin-bottom: 10px;
        }

        .profile-bio-quote {
          color: var(--text-muted);
          font-size: 14px;
          font-style: italic;
          margin: 0;
        }

        .profile-stats-summary {
          display: flex;
          gap: 16px;
        }

        .stat-pill {
          padding: 14px 20px;
          border-radius: var(--radius-md);
          background: var(--bg-glass-strong);
          border: 1px solid var(--border-color);
          text-align: center;
        }

        .stat-pill strong {
          display: block;
          font-size: 20px;
          color: var(--accent-primary);
        }

        .stat-pill small {
          font-size: 11px;
          color: var(--text-dim);
        }

        /* 2-Col Settings */
        .profile-settings-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 28px;
        }

        .profile-card {
          padding: 30px;
          border-radius: var(--radius-xl);
        }

        .card-section-title {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 24px;
          padding-bottom: 14px;
          border-bottom: 1px solid var(--border-color);
        }

        .section-icon {
          color: var(--accent-primary);
          font-size: 18px;
        }

        .card-section-title h3 {
          font-size: 18px;
          font-weight: 800;
          margin: 0;
        }

        .profile-edit-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .form-group-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group-field label {
          font-size: 13px;
          font-weight: 700;
          color: var(--text-muted);
        }

        .avatar-selection-row {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .avatar-option-btn {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          font-size: 20px;
          cursor: pointer;
          transition: 0.2s;
          display: grid;
          place-items: center;
        }

        .avatar-option-btn:hover {
          border-color: var(--accent-primary);
          transform: scale(1.1);
        }

        .avatar-option-btn.active {
          border-color: var(--accent-primary);
          background: rgba(124, 92, 255, 0.2);
          box-shadow: 0 0 15px rgba(124, 92, 255, 0.4);
        }

        .form-group-field input,
        .form-group-field textarea {
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 12px 16px;
          color: var(--text-main);
          font-size: 14px;
          outline: none;
        }

        .form-group-field input:focus,
        .form-group-field textarea:focus {
          border-color: var(--accent-primary);
        }

        .save-profile-btn {
          margin-top: 10px;
        }

        .save-success-alert {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          border-radius: var(--radius-md);
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
          font-size: 13px;
          font-weight: 700;
        }

        /* Preferences */
        .preferences-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .pref-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px;
          border-radius: var(--radius-md);
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
        }

        .pref-item strong {
          display: block;
          font-size: 14px;
          margin-bottom: 2px;
        }

        .pref-item small {
          color: var(--text-dim);
          font-size: 11.5px;
        }

        .api-item {
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
        }

        .api-key-label {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .api-key-display {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 8px;
          width: 100%;
        }

        .api-key-display code {
          flex: 1;
          padding: 8px 12px;
          background: var(--bg-main);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          font-family: monospace;
          font-size: 12px;
          color: var(--accent-secondary);
        }

        .copy-key-btn {
          padding: 8px 14px !important;
          font-size: 12px !important;
        }

        /* Toggle */
        .toggle-switch {
          position: relative;
          display: inline-block;
          width: 44px;
          height: 24px;
        }

        .toggle-switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .toggle-slider {
          position: absolute;
          cursor: pointer;
          inset: 0;
          background-color: var(--bg-glass-strong);
          border: 1px solid var(--border-color);
          transition: 0.3s;
          border-radius: 34px;
        }

        .toggle-slider:before {
          position: absolute;
          content: "";
          height: 16px;
          width: 16px;
          left: 3px;
          bottom: 3px;
          background-color: white;
          transition: 0.3s;
          border-radius: 50%;
        }

        .toggle-switch input:checked + .toggle-slider {
          background-color: var(--accent-primary);
          border-color: var(--accent-primary);
        }

        .toggle-switch input:checked + .toggle-slider:before {
          transform: translateX(20px);
        }

        @media (max-width: 900px) {
          .profile-settings-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function fi(){let e=k(),{login:t,loginAsDemo:n}=Wn(),[r,i]=(0,x.useState)(``),[a,o]=(0,x.useState)(``),[s,c]=(0,x.useState)(!1),l=n=>{n.preventDefault(),!(!r.trim()||!a.trim())&&(t(r,r.split(`@`)[0]),e(`/dashboard`))},u=()=>{n(),e(`/dashboard`)};return(0,P.jsxs)(`div`,{className:`auth-page-wrapper`,children:[(0,P.jsx)(`div`,{className:`auth-glow-blob blob-left`}),(0,P.jsx)(`div`,{className:`auth-glow-blob blob-right`}),(0,P.jsxs)(`div`,{className:`auth-card-container glass-card`,children:[(0,P.jsxs)(M,{to:`/`,className:`auth-brand-head`,children:[(0,P.jsx)(`div`,{className:`brand-icon-box`,children:(0,P.jsx)(Sr,{})}),(0,P.jsxs)(`span`,{children:[`AI`,(0,P.jsx)(`span`,{className:`gradient-text`,children:`HUB`})]})]}),(0,P.jsxs)(`div`,{className:`auth-title-section`,children:[(0,P.jsx)(`h2`,{children:`Welcome Back 👋`}),(0,P.jsx)(`p`,{children:`Sign in to your personalized AI discovery & intelligence platform.`})]}),(0,P.jsxs)(`button`,{type:`button`,className:`btn-primary quick-demo-btn`,onClick:u,children:[(0,P.jsx)(Kr,{className:`bolt-pulse`}),` 1-Click Demo Sign In (Instant Access)`]}),(0,P.jsx)(`div`,{className:`auth-divider`,children:(0,P.jsx)(`span`,{children:`OR SIGN IN WITH EMAIL`})}),(0,P.jsxs)(`form`,{onSubmit:l,className:`auth-form-body`,children:[(0,P.jsxs)(`div`,{className:`auth-input-group`,children:[(0,P.jsx)(`label`,{children:`Email Address`}),(0,P.jsxs)(`div`,{className:`input-box-wrapper`,children:[(0,P.jsx)(zr,{className:`input-icon`}),(0,P.jsx)(`input`,{type:`email`,placeholder:`name@company.com`,value:r,onChange:e=>i(e.target.value),required:!0})]})]}),(0,P.jsxs)(`div`,{className:`auth-input-group`,children:[(0,P.jsxs)(`div`,{className:`label-with-link`,children:[(0,P.jsx)(`label`,{children:`Password`}),(0,P.jsx)(M,{to:`/forgot-password`,children:`Forgot password?`})]}),(0,P.jsxs)(`div`,{className:`input-box-wrapper`,children:[(0,P.jsx)(Er,{className:`input-icon`}),(0,P.jsx)(`input`,{type:s?`text`:`password`,placeholder:`Enter your password`,value:a,onChange:e=>o(e.target.value),required:!0}),(0,P.jsx)(`button`,{type:`button`,className:`eye-toggle-btn`,onClick:()=>c(!s),children:s?(0,P.jsx)(Ir,{}):(0,P.jsx)(Fr,{})})]})]}),(0,P.jsxs)(`button`,{type:`submit`,className:`btn-primary auth-submit-btn`,children:[`Sign In `,(0,P.jsx)(Yr,{style:{fontSize:`12px`}})]})]}),(0,P.jsxs)(`div`,{className:`auth-social-row`,children:[(0,P.jsxs)(`button`,{type:`button`,className:`social-login-btn`,onClick:u,children:[(0,P.jsx)(or,{}),` Google`]}),(0,P.jsxs)(`button`,{type:`button`,className:`social-login-btn`,onClick:u,children:[(0,P.jsx)(sr,{}),` GitHub`]})]}),(0,P.jsxs)(`p`,{className:`auth-footer-text`,children:[`Don't have an account yet? `,(0,P.jsx)(M,{to:`/register`,children:`Create an account`})]})]}),(0,P.jsx)(`style`,{children:`
        .auth-page-wrapper {
          min-height: 100vh;
          background: var(--bg-main);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          position: relative;
          overflow: hidden;
        }

        .auth-glow-blob {
          position: absolute;
          width: 450px;
          height: 450px;
          border-radius: 50%;
          filter: blur(140px);
          opacity: 0.2;
          pointer-events: none;
        }

        .blob-left {
          background: #7c5cff;
          top: -100px;
          left: -100px;
        }

        .blob-right {
          background: #00d4ff;
          bottom: -100px;
          right: -100px;
        }

        .auth-card-container {
          width: 100%;
          max-width: 460px;
          padding: 40px;
          border-radius: var(--radius-xl);
          border: 1px solid var(--border-highlight);
          position: relative;
          z-index: 2;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.6);
        }

        .auth-brand-head {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          text-decoration: none;
          font-size: 22px;
          font-weight: 900;
          color: var(--text-main);
          margin-bottom: 24px;
        }

        .auth-brand-head .brand-icon-box {
          width: 38px;
          height: 38px;
          border-radius: var(--radius-md);
          background: var(--accent-gradient);
          color: white;
          display: grid;
          place-items: center;
          font-size: 18px;
        }

        .auth-title-section {
          text-align: center;
          margin-bottom: 24px;
        }

        .auth-title-section h2 {
          font-size: 24px;
          font-weight: 800;
          margin-bottom: 6px;
        }

        .auth-title-section p {
          color: var(--text-muted);
          font-size: 13.5px;
        }

        .quick-demo-btn {
          width: 100%;
          padding: 13px !important;
          border-radius: var(--radius-md) !important;
          background: var(--accent-gradient-alt) !important;
          font-size: 14px !important;
          margin-bottom: 20px;
        }

        .bolt-pulse {
          animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }

        .auth-divider {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--text-dim);
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.8px;
          margin-bottom: 20px;
        }

        .auth-divider::before,
        .auth-divider::after {
          content: "";
          flex: 1;
          height: 1px;
          background: var(--border-color);
        }

        .auth-form-body {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 20px;
        }

        .auth-input-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .auth-input-group label {
          font-size: 12.5px;
          font-weight: 700;
          color: var(--text-muted);
        }

        .label-with-link {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .label-with-link a {
          font-size: 11.5px;
          color: var(--accent-primary);
          font-weight: 600;
        }

        .input-box-wrapper {
          display: flex;
          align-items: center;
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 0 14px;
          height: 46px;
        }

        .input-box-wrapper:focus-within {
          border-color: var(--accent-primary);
        }

        .input-icon {
          color: var(--text-dim);
          margin-right: 10px;
          font-size: 14px;
        }

        .input-box-wrapper input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: var(--text-main);
          font-size: 13.5px;
        }

        .eye-toggle-btn {
          color: var(--text-dim);
          cursor: pointer;
        }

        .auth-submit-btn {
          width: 100%;
          padding: 13px !important;
          border-radius: var(--radius-md) !important;
          margin-top: 6px;
        }

        .auth-social-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 24px;
        }

        .social-login-btn {
          height: 42px;
          border-radius: var(--radius-md);
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          color: var(--text-main);
          font-size: 13px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
          transition: 0.2s;
        }

        .social-login-btn:hover {
          border-color: var(--accent-primary);
          background: var(--bg-glass-strong);
        }

        .auth-footer-text {
          text-align: center;
          font-size: 13px;
          color: var(--text-dim);
          margin: 0;
        }

        .auth-footer-text a {
          color: var(--accent-primary);
          font-weight: 700;
        }
      `})]})}function pi(){let e=k(),{login:t,loginAsDemo:n,showToast:r}=Wn(),[i,a]=(0,x.useState)({name:``,email:``,password:``,agreeTerms:!0}),[o,s]=(0,x.useState)(!1);return(0,P.jsxs)(`div`,{className:`auth-page-wrapper`,children:[(0,P.jsx)(`div`,{className:`auth-glow-blob blob-left`}),(0,P.jsx)(`div`,{className:`auth-glow-blob blob-right`}),(0,P.jsxs)(`div`,{className:`auth-card-container glass-card`,children:[(0,P.jsxs)(M,{to:`/`,className:`auth-brand-head`,children:[(0,P.jsx)(`div`,{className:`brand-icon-box`,children:(0,P.jsx)(Sr,{})}),(0,P.jsxs)(`span`,{children:[`AI`,(0,P.jsx)(`span`,{className:`gradient-text`,children:`HUB`})]})]}),(0,P.jsxs)(`div`,{className:`auth-title-section`,children:[(0,P.jsx)(`h2`,{children:`Create Your Account 🚀`}),(0,P.jsx)(`p`,{children:`Join over 800,000+ engineers, researchers, and AI creators.`})]}),(0,P.jsxs)(`button`,{type:`button`,className:`btn-primary quick-demo-btn`,onClick:()=>{n(),e(`/dashboard`)},children:[(0,P.jsx)(Kr,{className:`bolt-pulse`}),` 1-Click Instant Demo Access`]}),(0,P.jsx)(`div`,{className:`auth-divider`,children:(0,P.jsx)(`span`,{children:`OR REGISTER WITH EMAIL`})}),(0,P.jsxs)(`form`,{onSubmit:n=>{if(n.preventDefault(),!i.name.trim()||!i.email.trim()||!i.password.trim()){r(`Please fill in all registration fields.`,`error`);return}t(i.email,i.name),r(`🎉 Account created successfully! Welcome to AIHUB.`,`success`),e(`/dashboard`)},className:`auth-form-body`,children:[(0,P.jsxs)(`div`,{className:`auth-input-group`,children:[(0,P.jsx)(`label`,{children:`Full Name`}),(0,P.jsxs)(`div`,{className:`input-box-wrapper`,children:[(0,P.jsx)(cr,{className:`input-icon`}),(0,P.jsx)(`input`,{type:`text`,placeholder:`e.g. Sakshi Patel`,value:i.name,onChange:e=>a({...i,name:e.target.value}),required:!0})]})]}),(0,P.jsxs)(`div`,{className:`auth-input-group`,children:[(0,P.jsx)(`label`,{children:`Work or Personal Email`}),(0,P.jsxs)(`div`,{className:`input-box-wrapper`,children:[(0,P.jsx)(zr,{className:`input-icon`}),(0,P.jsx)(`input`,{type:`email`,placeholder:`you@company.com`,value:i.email,onChange:e=>a({...i,email:e.target.value}),required:!0})]})]}),(0,P.jsxs)(`div`,{className:`auth-input-group`,children:[(0,P.jsx)(`label`,{children:`Create Password`}),(0,P.jsxs)(`div`,{className:`input-box-wrapper`,children:[(0,P.jsx)(Er,{className:`input-icon`}),(0,P.jsx)(`input`,{type:o?`text`:`password`,placeholder:`Minimum 6 characters`,value:i.password,onChange:e=>a({...i,password:e.target.value}),required:!0,minLength:6}),(0,P.jsx)(`button`,{type:`button`,className:`eye-toggle-btn`,onClick:()=>s(!o),children:o?(0,P.jsx)(Ir,{}):(0,P.jsx)(Fr,{})})]})]}),(0,P.jsxs)(`label`,{className:`terms-checkbox-label`,children:[(0,P.jsx)(`input`,{type:`checkbox`,checked:i.agreeTerms,onChange:e=>a({...i,agreeTerms:e.target.checked}),required:!0}),(0,P.jsx)(`span`,{children:`I agree to the AIHUB Terms of Service & Privacy Policy`})]}),(0,P.jsxs)(`button`,{type:`submit`,className:`btn-primary auth-submit-btn`,children:[`Create Account & Explore `,(0,P.jsx)(Yr,{style:{fontSize:`12px`}})]})]}),(0,P.jsxs)(`p`,{className:`auth-footer-text`,children:[`Already have an account? `,(0,P.jsx)(M,{to:`/login`,children:`Sign in instead`})]})]}),(0,P.jsx)(`style`,{children:`
        .auth-page-wrapper {
          min-height: 100vh;
          background: var(--bg-main);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          position: relative;
          overflow: hidden;
        }

        .auth-glow-blob {
          position: absolute;
          width: 450px;
          height: 450px;
          border-radius: 50%;
          filter: blur(140px);
          opacity: 0.2;
          pointer-events: none;
        }

        .blob-left {
          background: #7c5cff;
          top: -100px;
          left: -100px;
        }

        .blob-right {
          background: #ec4899;
          bottom: -100px;
          right: -100px;
        }

        .auth-card-container {
          width: 100%;
          max-width: 480px;
          padding: 40px;
          border-radius: var(--radius-xl);
          border: 1px solid var(--border-highlight);
          position: relative;
          z-index: 2;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.6);
        }

        .auth-brand-head {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          text-decoration: none;
          font-size: 22px;
          font-weight: 900;
          color: var(--text-main);
          margin-bottom: 24px;
        }

        .auth-brand-head .brand-icon-box {
          width: 38px;
          height: 38px;
          border-radius: var(--radius-md);
          background: var(--accent-gradient);
          color: white;
          display: grid;
          place-items: center;
          font-size: 18px;
        }

        .auth-title-section {
          text-align: center;
          margin-bottom: 24px;
        }

        .auth-title-section h2 {
          font-size: 24px;
          font-weight: 800;
          margin-bottom: 6px;
        }

        .auth-title-section p {
          color: var(--text-muted);
          font-size: 13.5px;
        }

        .quick-demo-btn {
          width: 100%;
          padding: 13px !important;
          border-radius: var(--radius-md) !important;
          background: var(--accent-gradient-alt) !important;
          font-size: 14px !important;
          margin-bottom: 20px;
        }

        .bolt-pulse {
          animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }

        .auth-divider {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--text-dim);
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.8px;
          margin-bottom: 20px;
        }

        .auth-divider::before,
        .auth-divider::after {
          content: "";
          flex: 1;
          height: 1px;
          background: var(--border-color);
        }

        .auth-form-body {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 20px;
        }

        .auth-input-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .auth-input-group label {
          font-size: 12.5px;
          font-weight: 700;
          color: var(--text-muted);
        }

        .input-box-wrapper {
          display: flex;
          align-items: center;
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 0 14px;
          height: 46px;
        }

        .input-box-wrapper:focus-within {
          border-color: var(--accent-primary);
        }

        .input-icon {
          color: var(--text-dim);
          margin-right: 10px;
          font-size: 14px;
        }

        .input-box-wrapper input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: var(--text-main);
          font-size: 13.5px;
        }

        .eye-toggle-btn {
          color: var(--text-dim);
          cursor: pointer;
        }

        .terms-checkbox-label {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 12px;
          color: var(--text-dim);
          cursor: pointer;
          margin: 4px 0;
        }

        .terms-checkbox-label input {
          accent-color: var(--accent-primary);
          margin-top: 2px;
        }

        .auth-submit-btn {
          width: 100%;
          padding: 13px !important;
          border-radius: var(--radius-md) !important;
          margin-top: 6px;
        }

        .auth-footer-text {
          text-align: center;
          font-size: 13px;
          color: var(--text-dim);
          margin: 0;
        }

        .auth-footer-text a {
          color: var(--accent-primary);
          font-weight: 700;
        }
      `})]})}function mi(){let{showToast:e}=Wn(),[t,n]=(0,x.useState)(``),[r,i]=(0,x.useState)(!1);return(0,P.jsxs)(`div`,{className:`auth-page-wrapper`,children:[(0,P.jsx)(`div`,{className:`auth-glow-blob blob-left`}),(0,P.jsx)(`div`,{className:`auth-glow-blob blob-right`}),(0,P.jsxs)(`div`,{className:`auth-card-container glass-card`,children:[(0,P.jsxs)(M,{to:`/`,className:`auth-brand-head`,children:[(0,P.jsx)(`div`,{className:`brand-icon-box`,children:(0,P.jsx)(Sr,{})}),(0,P.jsxs)(`span`,{children:[`AI`,(0,P.jsx)(`span`,{className:`gradient-text`,children:`HUB`})]})]}),r?(0,P.jsxs)(`div`,{className:`sent-success-box`,children:[(0,P.jsx)(Wr,{className:`sent-success-icon`}),(0,P.jsx)(`h2`,{children:`Check Your Inbox`}),(0,P.jsxs)(`p`,{children:[`We've dispatched a recovery link to `,(0,P.jsx)(`strong`,{children:t}),`. Please check your spam folder if it doesn't appear in 2 minutes.`]}),(0,P.jsxs)(`div`,{className:`sent-actions-row`,children:[(0,P.jsx)(`button`,{type:`button`,className:`btn-secondary`,onClick:()=>i(!1),children:`Try Another Email`}),(0,P.jsx)(M,{to:`/login`,className:`btn-primary`,children:`Return to Login`})]})]}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(`div`,{className:`auth-title-section`,children:[(0,P.jsx)(`div`,{className:`auth-icon-badge`,children:(0,P.jsx)(Er,{})}),(0,P.jsx)(`h2`,{children:`Forgot Password?`}),(0,P.jsx)(`p`,{children:`Enter your account email and we'll send you a secure verification link to reset your credentials.`})]}),(0,P.jsxs)(`form`,{onSubmit:n=>{n.preventDefault(),t.trim()&&(i(!0),e(`Password reset instructions dispatched to your email! ✉️`,`success`))},className:`auth-form-body`,children:[(0,P.jsxs)(`div`,{className:`auth-input-group`,children:[(0,P.jsx)(`label`,{children:`Registered Email Address`}),(0,P.jsxs)(`div`,{className:`input-box-wrapper`,children:[(0,P.jsx)(zr,{className:`input-icon`}),(0,P.jsx)(`input`,{type:`email`,placeholder:`you@company.com`,value:t,onChange:e=>n(e.target.value),required:!0})]})]}),(0,P.jsxs)(`button`,{type:`submit`,className:`btn-primary auth-submit-btn`,children:[`Send Reset Link `,(0,P.jsx)(Yr,{style:{fontSize:`12px`}})]})]}),(0,P.jsxs)(`p`,{className:`auth-footer-text`,children:[`Remember your password? `,(0,P.jsx)(M,{to:`/login`,children:`Back to Sign In`})]})]})]}),(0,P.jsx)(`style`,{children:`
        .auth-page-wrapper {
          min-height: 100vh;
          background: var(--bg-main);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          position: relative;
          overflow: hidden;
        }

        .auth-glow-blob {
          position: absolute;
          width: 450px;
          height: 450px;
          border-radius: 50%;
          filter: blur(140px);
          opacity: 0.2;
          pointer-events: none;
        }

        .blob-left { background: #7c5cff; top: -100px; left: -100px; }
        .blob-right { background: #00d4ff; bottom: -100px; right: -100px; }

        .auth-card-container {
          width: 100%;
          max-width: 460px;
          padding: 40px;
          border-radius: var(--radius-xl);
          border: 1px solid var(--border-highlight);
          position: relative;
          z-index: 2;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.6);
        }

        .auth-brand-head {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          text-decoration: none;
          font-size: 22px;
          font-weight: 900;
          color: var(--text-main);
          margin-bottom: 24px;
        }

        .auth-brand-head .brand-icon-box {
          width: 38px;
          height: 38px;
          border-radius: var(--radius-md);
          background: var(--accent-gradient);
          color: white;
          display: grid;
          place-items: center;
          font-size: 18px;
        }

        .auth-title-section {
          text-align: center;
          margin-bottom: 24px;
        }

        .auth-icon-badge {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-md);
          background: rgba(124, 92, 255, 0.15);
          color: var(--accent-primary);
          display: grid;
          place-items: center;
          font-size: 20px;
          margin: 0 auto 16px;
        }

        .auth-title-section h2 {
          font-size: 24px;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .auth-title-section p {
          color: var(--text-muted);
          font-size: 13.5px;
          line-height: 1.5;
        }

        .auth-form-body {
          display: flex;
          flex-direction: column;
          gap: 18px;
          margin-bottom: 24px;
        }

        .auth-input-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .auth-input-group label {
          font-size: 12.5px;
          font-weight: 700;
          color: var(--text-muted);
        }

        .input-box-wrapper {
          display: flex;
          align-items: center;
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 0 14px;
          height: 46px;
        }

        .input-box-wrapper:focus-within {
          border-color: var(--accent-primary);
        }

        .input-icon {
          color: var(--text-dim);
          margin-right: 10px;
          font-size: 14px;
        }

        .input-box-wrapper input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: var(--text-main);
          font-size: 13.5px;
        }

        .auth-submit-btn {
          width: 100%;
          padding: 13px !important;
          border-radius: var(--radius-md) !important;
        }

        .auth-footer-text {
          text-align: center;
          font-size: 13px;
          color: var(--text-dim);
          margin: 0;
        }

        .auth-footer-text a {
          color: var(--accent-primary);
          font-weight: 700;
        }

        /* Success box */
        .sent-success-box {
          text-align: center;
          padding: 10px 0;
        }

        .sent-success-icon {
          font-size: 54px;
          color: #10b981;
          margin-bottom: 16px;
        }

        .sent-success-box h2 {
          font-size: 22px;
          font-weight: 800;
          margin-bottom: 10px;
        }

        .sent-success-box p {
          color: var(--text-muted);
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .sent-actions-row {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
      `})]})}function hi(){let e=k(),{showToast:t}=Wn(),[n,r]=(0,x.useState)(``),[i,a]=(0,x.useState)(``),[o,s]=(0,x.useState)(!1);return(0,P.jsxs)(`div`,{className:`auth-page-wrapper`,children:[(0,P.jsx)(`div`,{className:`auth-glow-blob blob-left`}),(0,P.jsx)(`div`,{className:`auth-glow-blob blob-right`}),(0,P.jsxs)(`div`,{className:`auth-card-container glass-card`,children:[(0,P.jsxs)(M,{to:`/`,className:`auth-brand-head`,children:[(0,P.jsx)(`div`,{className:`brand-icon-box`,children:(0,P.jsx)(Sr,{})}),(0,P.jsxs)(`span`,{children:[`AI`,(0,P.jsx)(`span`,{className:`gradient-text`,children:`HUB`})]})]}),(0,P.jsxs)(`div`,{className:`auth-title-section`,children:[(0,P.jsx)(`h2`,{children:`Create New Password 🔒`}),(0,P.jsx)(`p`,{children:`Your new password must be at least 6 characters long.`})]}),(0,P.jsxs)(`form`,{onSubmit:r=>{if(r.preventDefault(),n.length<6){t(`Password must be at least 6 characters.`,`error`);return}if(n!==i){t(`Passwords do not match.`,`error`);return}t(`Password updated successfully! Redirecting to login...`,`success`),setTimeout(()=>{e(`/login`)},1200)},className:`auth-form-body`,children:[(0,P.jsxs)(`div`,{className:`auth-input-group`,children:[(0,P.jsx)(`label`,{children:`New Password`}),(0,P.jsxs)(`div`,{className:`input-box-wrapper`,children:[(0,P.jsx)(Er,{className:`input-icon`}),(0,P.jsx)(`input`,{type:o?`text`:`password`,placeholder:`Enter new password`,value:n,onChange:e=>r(e.target.value),required:!0,minLength:6}),(0,P.jsx)(`button`,{type:`button`,className:`eye-toggle-btn`,onClick:()=>s(!o),children:o?(0,P.jsx)(Ir,{}):(0,P.jsx)(Fr,{})})]})]}),(0,P.jsxs)(`div`,{className:`auth-input-group`,children:[(0,P.jsx)(`label`,{children:`Confirm New Password`}),(0,P.jsxs)(`div`,{className:`input-box-wrapper`,children:[(0,P.jsx)(Er,{className:`input-icon`}),(0,P.jsx)(`input`,{type:o?`text`:`password`,placeholder:`Re-enter new password`,value:i,onChange:e=>a(e.target.value),required:!0,minLength:6})]})]}),(0,P.jsxs)(`button`,{type:`submit`,className:`btn-primary auth-submit-btn`,children:[`Update Password & Sign In `,(0,P.jsx)(Yr,{style:{fontSize:`12px`}})]})]}),(0,P.jsx)(`p`,{className:`auth-footer-text`,children:(0,P.jsx)(M,{to:`/login`,children:`← Back to Sign In`})})]}),(0,P.jsx)(`style`,{children:`
        .auth-page-wrapper {
          min-height: 100vh;
          background: var(--bg-main);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          position: relative;
          overflow: hidden;
        }

        .auth-glow-blob {
          position: absolute;
          width: 450px;
          height: 450px;
          border-radius: 50%;
          filter: blur(140px);
          opacity: 0.2;
          pointer-events: none;
        }

        .blob-left { background: #7c5cff; top: -100px; left: -100px; }
        .blob-right { background: #00d4ff; bottom: -100px; right: -100px; }

        .auth-card-container {
          width: 100%;
          max-width: 460px;
          padding: 40px;
          border-radius: var(--radius-xl);
          border: 1px solid var(--border-highlight);
          position: relative;
          z-index: 2;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.6);
        }

        .auth-brand-head {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          text-decoration: none;
          font-size: 22px;
          font-weight: 900;
          color: var(--text-main);
          margin-bottom: 24px;
        }

        .auth-brand-head .brand-icon-box {
          width: 38px;
          height: 38px;
          border-radius: var(--radius-md);
          background: var(--accent-gradient);
          color: white;
          display: grid;
          place-items: center;
          font-size: 18px;
        }

        .auth-title-section {
          text-align: center;
          margin-bottom: 24px;
        }

        .auth-title-section h2 {
          font-size: 24px;
          font-weight: 800;
          margin-bottom: 6px;
        }

        .auth-title-section p {
          color: var(--text-muted);
          font-size: 13.5px;
        }

        .auth-form-body {
          display: flex;
          flex-direction: column;
          gap: 18px;
          margin-bottom: 24px;
        }

        .auth-input-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .auth-input-group label {
          font-size: 12.5px;
          font-weight: 700;
          color: var(--text-muted);
        }

        .input-box-wrapper {
          display: flex;
          align-items: center;
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 0 14px;
          height: 46px;
        }

        .input-box-wrapper:focus-within {
          border-color: var(--accent-primary);
        }

        .input-icon {
          color: var(--text-dim);
          margin-right: 10px;
          font-size: 14px;
        }

        .input-box-wrapper input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: var(--text-main);
          font-size: 13.5px;
        }

        .eye-toggle-btn {
          color: var(--text-dim);
          cursor: pointer;
        }

        .auth-submit-btn {
          width: 100%;
          padding: 13px !important;
          border-radius: var(--radius-md) !important;
        }

        .auth-footer-text {
          text-align: center;
          font-size: 13px;
          color: var(--text-dim);
          margin: 0;
        }

        .auth-footer-text a {
          color: var(--accent-primary);
          font-weight: 700;
        }
      `})]})}var gi=({children:e})=>{let{user:t,sidebarCollapsed:n,setIsAiAssistantOpen:r}=Wn(),i=mt();return!t.isLoggedIn&&i.pathname!==`/login`&&i.pathname!==`/register`&&i.pathname!==`/`?(0,P.jsx)(Rt,{to:`/login`,replace:!0}):(0,P.jsxs)(`div`,{className:`app-layout`,children:[(0,P.jsx)(Zr,{}),(0,P.jsxs)(`div`,{className:`main-wrapper`,children:[(0,P.jsx)(Qr,{}),(0,P.jsx)(`main`,{className:`page-content ${n?`collapsed`:``}`,children:e})]}),(0,P.jsx)($r,{}),(0,P.jsxs)(`button`,{type:`button`,className:`ai-assistant-fab`,onClick:()=>r(!0),title:`Ask AI-Hub Matchmaker`,children:[(0,P.jsx)(`span`,{className:`fab-icon`,children:`✨`}),(0,P.jsx)(`span`,{children:`Ask AI Matchmaker`})]}),(0,P.jsx)(ei,{}),(0,P.jsx)(ti,{}),(0,P.jsx)(ni,{})]})};function _i(){return(0,P.jsxs)(Bt,{children:[(0,P.jsx)(j,{path:`/`,element:(0,P.jsx)(ii,{})}),(0,P.jsx)(j,{path:`/login`,element:(0,P.jsx)(fi,{})}),(0,P.jsx)(j,{path:`/register`,element:(0,P.jsx)(pi,{})}),(0,P.jsx)(j,{path:`/forgot-password`,element:(0,P.jsx)(mi,{})}),(0,P.jsx)(j,{path:`/reset-password`,element:(0,P.jsx)(hi,{})}),(0,P.jsx)(j,{path:`/dashboard`,element:(0,P.jsx)(gi,{children:(0,P.jsx)(ai,{})})}),(0,P.jsx)(j,{path:`/tools`,element:(0,P.jsx)(gi,{children:(0,P.jsx)(oi,{})})}),(0,P.jsx)(j,{path:`/categories`,element:(0,P.jsx)(gi,{children:(0,P.jsx)(si,{})})}),(0,P.jsx)(j,{path:`/compare`,element:(0,P.jsx)(gi,{children:(0,P.jsx)(ui,{})})}),(0,P.jsx)(j,{path:`/trending`,element:(0,P.jsx)(gi,{children:(0,P.jsx)(ci,{})})}),(0,P.jsx)(j,{path:`/favorites`,element:(0,P.jsx)(gi,{children:(0,P.jsx)(li,{})})}),(0,P.jsx)(j,{path:`/profile`,element:(0,P.jsx)(gi,{children:(0,P.jsx)(di,{})})}),(0,P.jsx)(j,{path:`*`,element:(0,P.jsx)(Rt,{to:`/`,replace:!0})})]})}function vi(){return(0,P.jsx)(Un,{children:(0,P.jsxs)(Dn,{children:[(0,P.jsx)(_i,{}),(0,P.jsx)(ni,{}),(0,P.jsx)(ti,{}),(0,P.jsx)(ei,{})]})})}zn.createRoot(document.getElementById(`root`)).render((0,P.jsx)(x.StrictMode,{children:(0,P.jsx)(vi,{})}));