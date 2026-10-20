(()=>{var O1=Object.create;var x_=Object.defineProperty;var I1=Object.getOwnPropertyDescriptor;var P1=Object.getOwnPropertyNames;var B1=Object.getPrototypeOf,F1=Object.prototype.hasOwnProperty;var as=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}};var z1=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of P1(t))!F1.call(e,s)&&s!==n&&x_(e,s,{get:()=>t[s],enumerable:!(i=I1(t,s))||i.enumerable});return e};var Fr=(e,t,n)=>(n=e!=null?O1(B1(e)):{},z1(t||!e||!e.__esModule?x_(n,"default",{value:e,enumerable:!0}):n,e));var N_=as(We=>{"use strict";function Jd(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<au(s,t))e[i]=t,e[n]=s,n=i;else break t}}function rs(e){return e.length===0?null:e[0]}function ou(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>au(o,n))l<s&&0>au(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<s&&0>au(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function au(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}We.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(S_=performance,We.unstable_now=function(){return S_.now()}):(qd=Date,M_=qd.now(),We.unstable_now=function(){return qd.now()-M_});var S_,qd,M_,Ns=[],ea=[],H1=1,wi=null,Ln=3,Kd=!1,vl=!1,yl=!1,Qd=!1,E_=typeof setTimeout=="function"?setTimeout:null,A_=typeof clearTimeout=="function"?clearTimeout:null,b_=typeof setImmediate<"u"?setImmediate:null;function ru(e){for(var t=rs(ea);t!==null;){if(t.callback===null)ou(ea);else if(t.startTime<=e)ou(ea),t.sortIndex=t.expirationTime,Jd(Ns,t);else break;t=rs(ea)}}function jd(e){if(yl=!1,ru(e),!vl)if(rs(Ns)!==null)vl=!0,Hr||(Hr=!0,zr());else{var t=rs(ea);t!==null&&$d(jd,t.startTime-e)}}var Hr=!1,xl=-1,w_=5,C_=-1;function R_(){return Qd?!0:!(We.unstable_now()-C_<w_)}function Yd(){if(Qd=!1,Hr){var e=We.unstable_now();C_=e;var t=!0;try{t:{vl=!1,yl&&(yl=!1,A_(xl),xl=-1),Kd=!0;var n=Ln;try{e:{for(ru(e),wi=rs(Ns);wi!==null&&!(wi.expirationTime>e&&R_());){var i=wi.callback;if(typeof i=="function"){wi.callback=null,Ln=wi.priorityLevel;var s=i(wi.expirationTime<=e);if(e=We.unstable_now(),typeof s=="function"){wi.callback=s,ru(e),t=!0;break e}wi===rs(Ns)&&ou(Ns),ru(e)}else ou(Ns);wi=rs(Ns)}if(wi!==null)t=!0;else{var a=rs(ea);a!==null&&$d(jd,a.startTime-e),t=!1}}break t}finally{wi=null,Ln=n,Kd=!1}t=void 0}}finally{t?zr():Hr=!1}}}var zr;typeof b_=="function"?zr=function(){b_(Yd)}:typeof MessageChannel<"u"?(Zd=new MessageChannel,T_=Zd.port2,Zd.port1.onmessage=Yd,zr=function(){T_.postMessage(null)}):zr=function(){E_(Yd,0)};var Zd,T_;function $d(e,t){xl=E_(function(){e(We.unstable_now())},t)}We.unstable_IdlePriority=5;We.unstable_ImmediatePriority=1;We.unstable_LowPriority=4;We.unstable_NormalPriority=3;We.unstable_Profiling=null;We.unstable_UserBlockingPriority=2;We.unstable_cancelCallback=function(e){e.callback=null};We.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w_=0<e?Math.floor(1e3/e):5};We.unstable_getCurrentPriorityLevel=function(){return Ln};We.unstable_next=function(e){switch(Ln){case 1:case 2:case 3:var t=3;break;default:t=Ln}var n=Ln;Ln=t;try{return e()}finally{Ln=n}};We.unstable_requestPaint=function(){Qd=!0};We.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=Ln;Ln=e;try{return t()}finally{Ln=n}};We.unstable_scheduleCallback=function(e,t,n){var i=We.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:H1++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,Jd(ea,e),rs(Ns)===null&&e===rs(ea)&&(yl?(A_(xl),xl=-1):yl=!0,$d(jd,n-i))):(e.sortIndex=s,Jd(Ns,e),vl||Kd||(vl=!0,Hr||(Hr=!0,zr()))),e};We.unstable_shouldYield=R_;We.unstable_wrapCallback=function(e){var t=Ln;return function(){var n=Ln;Ln=t;try{return e.apply(this,arguments)}finally{Ln=n}}}});var U_=as((JN,D_)=>{"use strict";D_.exports=N_()});var W_=as(Xt=>{"use strict";var np=Symbol.for("react.transitional.element"),V1=Symbol.for("react.portal"),G1=Symbol.for("react.fragment"),k1=Symbol.for("react.strict_mode"),X1=Symbol.for("react.profiler"),W1=Symbol.for("react.consumer"),q1=Symbol.for("react.context"),Y1=Symbol.for("react.forward_ref"),Z1=Symbol.for("react.suspense"),J1=Symbol.for("react.memo"),B_=Symbol.for("react.lazy"),K1=Symbol.for("react.activity"),Q1=Symbol.for("react.view_transition"),L_=Symbol.iterator;function j1(e){return e===null||typeof e!="object"?null:(e=L_&&e[L_]||e["@@iterator"],typeof e=="function"?e:null)}var F_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z_=Object.assign,H_={};function Gr(e,t,n){this.props=e,this.context=t,this.refs=H_,this.updater=n||F_}Gr.prototype.isReactComponent={};Gr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Gr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function V_(){}V_.prototype=Gr.prototype;function ip(e,t,n){this.props=e,this.context=t,this.refs=H_,this.updater=n||F_}var sp=ip.prototype=new V_;sp.constructor=ip;z_(sp,Gr.prototype);sp.isPureReactComponent=!0;var O_=Array.isArray;function ep(){}var Fe={H:null,A:null,T:null,S:null},G_=Object.prototype.hasOwnProperty;function ap(e,t,n){var i=n.ref;return{$$typeof:np,type:e,key:t,ref:i!==void 0?i:null,props:n}}function $1(e,t){return ap(e.type,t,e.props)}function rp(e){return typeof e=="object"&&e!==null&&e.$$typeof===np}function tT(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var I_=/\/+/g;function tp(e,t){return typeof e=="object"&&e!==null&&e.key!=null?tT(""+e.key):t.toString(36)}function eT(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(ep,ep):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Vr(e,t,n,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case np:case V1:r=!0;break;case B_:return r=e._init,Vr(r(e._payload),t,n,i,s)}}if(r)return s=s(e),r=i===""?"."+tp(e,0):i,O_(s)?(n="",r!=null&&(n=r.replace(I_,"$&/")+"/"),Vr(s,t,n,"",function(c){return c})):s!=null&&(rp(s)&&(s=$1(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(I_,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if(O_(e))for(var l=0;l<e.length;l++)i=e[l],a=o+tp(i,l),r+=Vr(i,t,n,a,s);else if(l=j1(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,a=o+tp(i,l++),r+=Vr(i,t,n,a,s);else if(a==="object"){if(typeof e.then=="function")return Vr(eT(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function lu(e,t,n){if(e==null)return e;var i=[],s=0;return Vr(e,i,"","",function(a){return t.call(n,a,s++)}),i}function nT(e){if(e._status===-1){var t=e._result,n=t();n.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i,n.status===void 0&&(n.status="fulfilled",n.value=i))},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i,n.status===void 0&&(n.status="rejected",n.reason=i))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var P_=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function k_(e){var t=Fe.T,n={};n.types=t!==null?t.types:null,Fe.T=n;try{var i=e(),s=Fe.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(ep,P_)}catch(a){P_(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),Fe.T=t}}function X_(e){var t=Fe.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else k_(X_.bind(null,e))}var iT={map:lu,forEach:function(e,t,n){lu(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return lu(e,function(){t++}),t},toArray:function(e){return lu(e,function(t){return t})||[]},only:function(e){if(!rp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Xt.Activity=K1;Xt.Children=iT;Xt.Component=Gr;Xt.Fragment=G1;Xt.Profiler=X1;Xt.PureComponent=ip;Xt.StrictMode=k1;Xt.Suspense=Z1;Xt.ViewTransition=Q1;Xt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Fe;Xt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Fe.H.useMemoCache(e)}};Xt.addTransitionType=X_;Xt.cache=function(e){return function(){return e.apply(null,arguments)}};Xt.cacheSignal=function(){return null};Xt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=z_({},e.props),s=e.key;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)!G_.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var r=Array(a),o=0;o<a;o++)r[o]=arguments[o+2];i.children=r}return ap(e.type,s,i)};Xt.createContext=function(e){return e={$$typeof:q1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:W1,_context:e},e};Xt.createElement=function(e,t,n){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)G_.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return ap(e,a,s)};Xt.createRef=function(){return{current:null}};Xt.forwardRef=function(e){return{$$typeof:Y1,render:e}};Xt.isValidElement=rp;Xt.lazy=function(e){return{$$typeof:B_,_payload:{_status:-1,_result:e},_init:nT}};Xt.memo=function(e,t){return{$$typeof:J1,type:e,compare:t===void 0?null:t}};Xt.startTransition=k_;Xt.unstable_useCacheRefresh=function(){return Fe.H.useCacheRefresh()};Xt.use=function(e){return Fe.H.use(e)};Xt.useActionState=function(e,t,n){return Fe.H.useActionState(e,t,n)};Xt.useCallback=function(e,t){return Fe.H.useCallback(e,t)};Xt.useContext=function(e){return Fe.H.useContext(e)};Xt.useDebugValue=function(){};Xt.useDeferredValue=function(e,t){return Fe.H.useDeferredValue(e,t)};Xt.useEffect=function(e,t){return Fe.H.useEffect(e,t)};Xt.useEffectEvent=function(e){return Fe.H.useEffectEvent(e)};Xt.useId=function(){return Fe.H.useId()};Xt.useImperativeHandle=function(e,t,n){return Fe.H.useImperativeHandle(e,t,n)};Xt.useInsertionEffect=function(e,t){return Fe.H.useInsertionEffect(e,t)};Xt.useLayoutEffect=function(e,t){return Fe.H.useLayoutEffect(e,t)};Xt.useMemo=function(e,t){return Fe.H.useMemo(e,t)};Xt.useOptimistic=function(e,t){return Fe.H.useOptimistic(e,t)};Xt.useReducer=function(e,t,n){return Fe.H.useReducer(e,t,n)};Xt.useRef=function(e){return Fe.H.useRef(e)};Xt.useState=function(e){return Fe.H.useState(e)};Xt.useSyncExternalStore=function(e,t,n){return Fe.H.useSyncExternalStore(e,t,n)};Xt.useTransition=function(){return Fe.H.useTransition()};Xt.version="19.3.1"});var cu=as((QN,q_)=>{"use strict";q_.exports=W_()});var J_=as(On=>{"use strict";var sT=cu();function Z_(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function na(){}var Gn={d:{f:na,r:function(){throw Error(Z_(522))},D:na,C:na,L:na,m:na,X:na,S:na,M:na},p:0,findDOMNode:null},aT=Symbol.for("react.portal"),rT=Symbol.for("react.recoverable"),Y_=Symbol.for("react.optimistic_key");function oT(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:aT,key:i==null?null:i===Y_?Y_:""+i,children:e,containerInfo:t,implementation:n}}var Sl=sT.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function uu(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Gn;On.browser=function(e){return{$$typeof:rT,_reason:e}};On.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(Z_(299));return oT(e,t,null,n)};On.flushSync=function(e){var t=Sl.T,n=Gn.p;try{if(Sl.T=null,Gn.p=2,e)return e()}finally{Sl.T=t,Gn.p=n,Gn.d.f()}};On.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Gn.d.C(e,t))};On.prefetchDNS=function(e){typeof e=="string"&&Gn.d.D(e)};On.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=uu(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?Gn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&Gn.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};On.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=uu(t.as,t.crossOrigin);Gn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}}else t==null&&Gn.d.M(e)};On.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=uu(n,t.crossOrigin);Gn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};On.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=uu(t.as,t.crossOrigin);Gn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}else Gn.d.m(e)};On.requestFormReset=function(e){Gn.d.r(e)};On.unstable_batchedUpdates=function(e,t){return e(t)};On.useFormState=function(e,t,n){return Sl.H.useFormState(e,t,n)};On.useFormStatus=function(){return Sl.H.useHostTransitionStatus()};On.version="19.3.1"});var j_=as(($N,Q_)=>{"use strict";function K_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(K_)}catch(e){console.error(e)}}K_(),Q_.exports=J_()});var FM=as(Wh=>{"use strict";var pn=U_(),By=cu(),lT=j_();function tt(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Fy(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function lc(e){for(var t=e,n=t;n&&!n.alternate;)t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function zy(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Hy(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function $_(e){if(lc(e)!==e)throw Error(tt(188))}function cT(e){var t=e.alternate;if(!t){if(t=lc(e),t===null)throw Error(tt(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return $_(s),e;if(a===i)return $_(s),t;a=a.sibling}throw Error(tt(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error(tt(189))}}if(n.alternate!==i)throw Error(tt(190))}if(n.tag!==3)throw Error(tt(188));return n.stateNode.current===n?e:t}function Vy(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Vy(e),t!==null)return t;e=e.sibling}return null}function ti(e,t,n,i,s,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,i,s,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&ti(e.child,t,n,i,s,a))return!0;e=e.sibling}return!1}function vr(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function tv(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function Gy(e){var t=[null,null],n=vr(e);return n===null||ky(t,e,n.child,{foundSelf:!1}),t}function ky(e,t,n,i){for(;n!==null;){if(n===t)i.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(i.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&ky(e,t,n.child,i))return!0;n=n.sibling}return!1}function dn(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(tt(559))}}var Jr=null,Fp=null;function uT(e,t,n){return e===n?!0:e===t?(Jr=e,!0):!1}function hT(e,t,n){return e===n?(Fp=e,!1):e===t?(Fp!==null&&(Jr=e),!0):!1}function ev(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function zp(e,t,n){for(var i=0,s=e;s;s=n(s))i++;s=0;for(var a=t;a;a=n(a))s++;for(;0<i-s;)e=n(e),i--;for(;0<s-i;)t=n(t),s--;for(;i--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var Pe=Object.assign,fT=Symbol.for("react.element"),hu=Symbol.for("react.transitional.element"),Cl=Symbol.for("react.portal"),Kr=Symbol.for("react.fragment"),Xy=Symbol.for("react.strict_mode"),Hp=Symbol.for("react.profiler"),Wy=Symbol.for("react.consumer"),fs=Symbol.for("react.context"),Jm=Symbol.for("react.forward_ref"),Vp=Symbol.for("react.suspense"),Gp=Symbol.for("react.suspense_list"),Km=Symbol.for("react.memo"),ra=Symbol.for("react.lazy"),kp=Symbol.for("react.activity"),dT=Symbol.for("react.legacy_hidden"),pT=Symbol.for("react.memo_cache_sentinel"),Xp=Symbol.for("react.view_transition"),mT=Symbol.for("react.recoverable"),nv=Symbol.iterator;function Ml(e){return e===null||typeof e!="object"?null:(e=nv&&e[nv]||e["@@iterator"],typeof e=="function"?e:null)}var gT=Symbol.for("react.client.reference");function Wp(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===gT?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Kr:return"Fragment";case Hp:return"Profiler";case Xy:return"StrictMode";case Vp:return"Suspense";case Gp:return"SuspenseList";case kp:return"Activity";case Xp:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case Cl:return"Portal";case fs:return e.displayName||"Context";case Wy:return(e._context.displayName||"Context")+".Consumer";case Jm:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Km:return t=e.displayName||null,t!==null?t:Wp(e.type)||"Memo";case ra:t=e._payload,e=e._init;try{return Wp(e(t))}catch{}}return null}var Rl=Array.isArray,Ht=By.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,be=lT.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ar={pending:!1,data:null,method:null,action:null},qp=[],Qr=-1;function ys(e){return{current:e}}function Cn(e){0>Qr||(e.current=qp[Qr],qp[Qr]=null,Qr--)}function Ve(e,t){Qr++,qp[Qr]=e.current,e.current=t}var gs=ys(null),ql=ys(null),ma=ys(null),Qu=ys(null);function ju(e,t){switch(Ve(ma,t),Ve(ql,e),Ve(gs,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?gy(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=gy(t),e=dM(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Cn(gs),Ve(gs,e)}function vo(){Cn(gs),Cn(ql),Cn(ma)}function Yp(e){var t=e.memoizedState;t!==null&&(Co._currentValue=t.memoizedState,Ve(Qu,e)),t=gs.current;var n=dM(t,e.type);t!==n&&(Ve(ql,e),Ve(gs,n))}function $u(e){ql.current===e&&(Cn(gs),Cn(ql)),Qu.current===e&&(Cn(Qu),Co._currentValue=ar)}var op,iv;function sa(e){if(op===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);op=t&&t[1]||"",iv=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+op+e+iv}var lp=!1;function cp(e,t){if(!e||lp)return"";lp=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(v){var u=v}Reflect.construct(e,[],p)}else{try{p.call()}catch(v){u=v}p=!1;try{var d=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),p=!0,new e}finally{p&&(d!==void 0?Object.defineProperty(e.prototype,"props",d):delete e.prototype.props)}}}else{try{throw Error()}catch(v){u=v}(p=e())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(v){if(v&&u&&typeof v.stack=="string")return[v.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var f=`
`+l[i].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=i&&0<=s);break}}}finally{lp=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?sa(n):""}function _T(e,t){switch(e.tag){case 26:case 27:case 5:return sa(e.type);case 16:return sa("Lazy");case 13:return e.child!==t&&t!==null?sa("Suspense Fallback"):sa("Suspense");case 19:return sa("SuspenseList");case 0:case 15:return cp(e.type,!1);case 11:return cp(e.type.render,!1);case 1:return cp(e.type,!0);case 31:return sa("Activity");case 30:return sa("ViewTransition");default:return""}}function sv(e){try{var t="",n=null;do t+=_T(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Zp=Object.prototype.hasOwnProperty,Qm=pn.unstable_scheduleCallback,up=pn.unstable_cancelCallback,vT=pn.unstable_shouldYield,yT=pn.unstable_requestPaint,pi=pn.unstable_now,xT=pn.unstable_getCurrentPriorityLevel,qy=pn.unstable_ImmediatePriority,Yy=pn.unstable_UserBlockingPriority,th=pn.unstable_NormalPriority,ST=pn.unstable_LowPriority,Zy=pn.unstable_IdlePriority,MT=pn.log,bT=pn.unstable_setDisableYieldValue,cc=null,mi=null;function ca(e){if(typeof MT=="function"&&bT(e),mi&&typeof mi.setStrictMode=="function")try{mi.setStrictMode(cc,e)}catch{}}var gi=Math.clz32?Math.clz32:AT,TT=Math.log,ET=Math.LN2;function AT(e){return e>>>=0,e===0?32:31-(TT(e)/ET|0)|0}var fu=256,du=262144,pu=4194304;function tr(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ah(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=tr(i):(r&=o,r!==0?s=tr(r):n||(n=o&~e,n!==0&&(s=tr(n))))):(o=i&~a,o!==0?s=tr(o):r!==0?s=tr(r):n||(n=i&~e,n!==0&&(s=tr(n)))),s===0?0:t!==0&&t!==s&&(t&a)===0&&(a=s&-s,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:s}function uc(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Jy(e,t){(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-gi(n),s=1<<i;t|=e[i],n&=~s}return t}function wT(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ky(){var e=pu;return pu<<=1,(pu&62914560)===0&&(pu=4194304),e}function hp(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function hc(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function CT(e,t,n,i,s,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var f=31-gi(n),p=1<<f;o[f]=0,l[f]=-1;var u=c[f];if(u!==null)for(c[f]=null,f=0;f<u.length;f++){var d=u[f];d!==null&&(d.lane&=-536870913)}n&=~p}i!==0&&Qy(e,i,0),a!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function Qy(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-gi(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function jy(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-gi(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function $y(e,t){var n=t&-t;return n=(n&42)!==0?1:jm(n),(n&(e.suspendedLanes|t))!==0?0:n}function jm(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function $m(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function tx(){var e=be.p;return e!==0?e:(e=window.event,e===void 0?32:IM(e.type))}function av(e,t){var n=be.p;try{return be.p=e,t()}finally{be.p=n}}var ks=Math.random().toString(36).slice(2),An="__reactFiber$"+ks,ei="__reactProps$"+ks,Do="__reactContainer$"+ks,rv="__reactEvents$"+ks,RT="__reactListeners$"+ks,NT="__reactHandles$"+ks,ov="__reactResources$"+ks,fc="__reactMarker$"+ks,eh="__reactLoad$"+ks;function wh(e){delete e[An],delete e[ei],delete e[RT],delete e[NT]}function ir(e){var t;if(t=e[An])return t;for(var n=e.parentNode;n;){if(t=n[Do]||n[An]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ty(e);e!==null;){if(n=e[An])return n;e=Ty(e)}return t}e=n,n=e.parentNode}return null}function Uo(e){if(e=e[An]||e[Do]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Nl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(tt(33))}function oo(e){var t=e[ov];return t||(t=e[ov]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function yn(e){e[fc]=!0}function ex(e){e[eh]=void 0}var nx=new Set,ix={};function yr(e,t){yo(e,t),yo(e+"Capture",t)}function yo(e,t){for(ix[e]=t,e=0;e<t.length;e++)nx.add(t[e])}var DT=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lv={},cv={};function UT(e){return Zp.call(cv,e)?!0:Zp.call(lv,e)?!1:DT.test(e)?cv[e]=!0:(lv[e]=!0,!1)}var xe=!1;function uv(){var e=xe;return xe=!1,e}function Uu(e,t,n){if(UT(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function mu(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function Ds(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,i)}}function ui(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sx(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function LT(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Jp(e){if(!e._valueTracker){var t=sx(e)?"checked":"value";e._valueTracker=LT(e,t,""+e[t])}}function ax(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=sx(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}var OT=/[\n"\\]/g;function Ui(e){return e.replace(OT,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Kp(e,t,n,i,s,a,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ui(t)):e.value!==""+ui(t)&&(e.value=""+ui(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?r==="number"&&e.value==t?fp(e,ui(e.value)):fp(e,ui(t)):n!=null?fp(e,ui(n)):i!=null&&e.removeAttribute("value"),s==null&&a!=null&&(e.defaultChecked=!!a),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+ui(o):e.removeAttribute("name")}function rx(e,t,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){Jp(e);return}n=n!=null?""+ui(n):"",t=t!=null?""+ui(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Jp(e)}function fp(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function lo(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+ui(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function ox(e,t,n){if(t!=null&&(t=""+ui(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+ui(n):""}function lx(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(tt(92));if(Rl(i)){if(1<i.length)throw Error(tt(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=ui(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Jp(e)}function xo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var IT=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function hv(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||IT.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function cx(e,t,n){if(t!=null&&typeof t!="object")throw Error(tt(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="",xe=!0);for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&(hv(e,s,i),xe=!0)}else for(var a in t)t.hasOwnProperty(a)&&hv(e,a,t[a])}function t0(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var PT=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),BT=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Lu(e){return BT.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ds(){}var Qp=null;function e0(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var jr=null,co=null;function fv(e){var t=Uo(e);if(t&&(e=t.stateNode)){var n=e[ei]||null;t:switch(e=t.stateNode,t.type){case"input":if(Kp(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ui(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[ei]||null;if(!s)throw Error(tt(90));Kp(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&ax(i)}break t;case"textarea":ox(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&lo(e,!!n.multiple,t,!1)}}}var dp=!1;function ux(e,t,n){if(dp)return e(t,n);dp=!0;try{var i=e(t);return i}finally{if(dp=!1,(jr!==null||co!==null)&&(Vh(),jr&&(t=jr,e=co,co=jr=null,fv(t),e)))for(t=0;t<e.length;t++)fv(e[t])}}function Yl(e,t){var n=e.stateNode;if(n===null)return null;var i=n[ei]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(tt(231,t,typeof n));return n}var Bs=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jp=!1;if(Bs)try{kr={},Object.defineProperty(kr,"passive",{get:function(){jp=!0}}),window.addEventListener("test",kr,kr),window.removeEventListener("test",kr,kr)}catch{jp=!1}var kr,ua=null,n0=null,Ou=null;function hx(){if(Ou)return Ou;var e,t=n0,n=t.length,i,s="value"in ua?ua.value:ua.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===s[a-i];i++);return Ou=s.slice(e,1<i?1-i:void 0)}function Iu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function gu(){return!0}function dv(){return!1}function qn(e){function t(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?gu:dv,this.isPropagationStopped=dv,this}return Pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=gu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=gu)},persist:function(){},isPersistent:gu}),t}var Na={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ch=qn(Na),dc=Pe({},Na,{view:0,detail:0}),FT=qn(dc),pp,mp,bl,Rh=Pe({},dc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:i0,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==bl&&(bl&&e.type==="mousemove"?(pp=e.screenX-bl.screenX,mp=e.screenY-bl.screenY):mp=pp=0,bl=e),pp)},movementY:function(e){return"movementY"in e?e.movementY:mp}}),pv=qn(Rh),zT=Pe({},Rh,{dataTransfer:0}),HT=qn(zT),VT=Pe({},dc,{relatedTarget:0}),gp=qn(VT),GT=Pe({},Na,{animationName:0,elapsedTime:0,pseudoElement:0}),kT=qn(GT),XT=Pe({},Na,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),WT=qn(XT),qT=Pe({},Na,{data:0}),mv=qn(qT),YT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ZT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},JT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function KT(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=JT[e])?!!t[e]:!1}function i0(){return KT}var QT=Pe({},dc,{key:function(e){if(e.key){var t=YT[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Iu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ZT[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:i0,charCode:function(e){return e.type==="keypress"?Iu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Iu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),jT=qn(QT),$T=Pe({},Rh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gv=qn($T),tE=Pe({},Na,{submitter:0}),eE=qn(tE),nE=Pe({},dc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:i0}),iE=qn(nE),sE=Pe({},Na,{propertyName:0,elapsedTime:0,pseudoElement:0}),aE=qn(sE),rE=Pe({},Rh,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),oE=qn(rE),lE=Pe({},Na,{newState:0,oldState:0,source:0}),cE=qn(lE),uE=[9,13,27,32],s0=Bs&&"CompositionEvent"in window,Ll=null;Bs&&"documentMode"in document&&(Ll=document.documentMode);var hE=Bs&&"TextEvent"in window&&!Ll,fx=Bs&&(!s0||Ll&&8<Ll&&11>=Ll),_v=" ",vv=!1;function dx(e,t){switch(e){case"keyup":return uE.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function px(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $r=!1;function fE(e,t){switch(e){case"compositionend":return px(t);case"keypress":return t.which!==32?null:(vv=!0,_v);case"textInput":return e=t.data,e===_v&&vv?null:e;default:return null}}function dE(e,t){if($r)return e==="compositionend"||!s0&&dx(e,t)?(e=hx(),Ou=n0=ua=null,$r=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return fx&&t.locale!=="ko"?null:t.data;default:return null}}var pE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yv(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!pE[e.type]:t==="textarea"}function mx(e,t,n,i){jr?co?co.push(i):co=[i]:jr=i,t=bh(t,"onChange"),0<t.length&&(n=new Ch("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Ol=null,Zl=null;function mE(e){uM(e,0)}function Nh(e){var t=Nl(e);if(ax(t))return e}function xv(e,t){if(e==="change")return t}var gx=!1;Bs&&(Bs?(vu="oninput"in document,vu||(_p=document.createElement("div"),_p.setAttribute("oninput","return;"),vu=typeof _p.oninput=="function"),_u=vu):_u=!1,gx=_u&&(!document.documentMode||9<document.documentMode));var _u,vu,_p;function Sv(){Ol&&(Ol.detachEvent("onpropertychange",_x),Zl=Ol=null)}function _x(e){if(e.propertyName==="value"&&Nh(Zl)){var t=[];mx(t,Zl,e,e0(e)),ux(mE,t)}}function gE(e,t,n){e==="focusin"?(Sv(),Ol=t,Zl=n,Ol.attachEvent("onpropertychange",_x)):e==="focusout"&&Sv()}function _E(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Nh(Zl)}function vE(e,t){if(e==="click")return Nh(t)}function yE(e,t){if(e==="input"||e==="change")return Nh(t)}function xE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var vi=typeof Object.is=="function"?Object.is:xE;function Jl(e,t){if(vi(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!Zp.call(t,s)||!vi(e[s],t[s]))return!1}return!0}function $p(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Mv(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bv(e,t){var n=Mv(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Mv(n)}}function vx(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vx(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function yx(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=$p(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=$p(e.document)}return t}function a0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var SE=Bs&&"documentMode"in document&&11>=document.documentMode,to=null,tm=null,Il=null,em=!1;function Tv(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;em||to==null||to!==$p(i)||(i=to,"selectionStart"in i&&a0(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Il&&Jl(Il,i)||(Il=i,i=bh(tm,"onSelect"),0<i.length&&(t=new Ch("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=to)))}function ja(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var eo={animationend:ja("Animation","AnimationEnd"),animationiteration:ja("Animation","AnimationIteration"),animationstart:ja("Animation","AnimationStart"),transitionrun:ja("Transition","TransitionRun"),transitionstart:ja("Transition","TransitionStart"),transitioncancel:ja("Transition","TransitionCancel"),transitionend:ja("Transition","TransitionEnd")},vp={},xx={};Bs&&(xx=document.createElement("div").style,"AnimationEvent"in window||(delete eo.animationend.animation,delete eo.animationiteration.animation,delete eo.animationstart.animation),"TransitionEvent"in window||delete eo.transitionend.transition);function xr(e){if(vp[e])return vp[e];if(!eo[e])return e;var t=eo[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in xx)return vp[e]=t[n];return e}var Sx=xr("animationend"),Mx=xr("animationiteration"),bx=xr("animationstart"),ME=xr("transitionrun"),bE=xr("transitionstart"),TE=xr("transitioncancel"),Tx=xr("transitionend"),Ex=new Map,nm="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");nm.push("scrollEnd");function Ji(e,t){Ex.set(e,t),yr(t,[e])}var EE=0;function Fs(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=Zi.identifierPrefix;var n=EE++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function Ev(e){if(e==null||typeof e=="string")return e;var t=null,n=_o;if(n!==null)for(var i=0;i<n.length;i++){var s=e[n[i]];if(s!=null){if(s==="none")return"none";t=t==null?s:t+(" "+s)}}return t??e.default}function Xs(e,t){return e=Ev(e),t=Ev(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var nh=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ri=[],no=0,r0=0;function Dh(){for(var e=no,t=r0=no=0;t<e;){var n=Ri[t];Ri[t++]=null;var i=Ri[t];Ri[t++]=null;var s=Ri[t];Ri[t++]=null;var a=Ri[t];if(Ri[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&Ax(n,s,a)}}function Uh(e,t,n,i){Ri[no++]=e,Ri[no++]=t,Ri[no++]=n,Ri[no++]=i,r0|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function o0(e,t,n,i){return Uh(e,t,n,i),ih(e)}function Sr(e,t){return Uh(e,null,null,t),ih(e)}function Ax(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(s=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,s&&t!==null&&(s=31-gi(n),e=a.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),a):null}function ih(e){if(50<Wl)throw Wl=0,Wu=null,Error(tt(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var io={};function AE(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(e,t,n,i){return new AE(e,t,n,i)}function l0(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Is(e,t){var n=e.alternate;return n===null?(n=jn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function wx(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Pu(e,t,n,i,s,a){var r=0;if(i=e,typeof i=="function")l0(i)&&(r=1);else if(typeof i=="string")r=jA(e,n,gs.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(i){case kp:return e=jn(31,n,t,s),e.elementType=kp,e.lanes=a,e;case Kr:return rr(n.children,s,a,t);case Xy:r=8,s|=24;break;case Hp:return e=jn(12,n,t,s|2),e.elementType=Hp,e.lanes=a,e;case Vp:return e=jn(13,n,t,s),e.elementType=Vp,e.lanes=a,e;case Gp:return e=jn(19,n,t,s),e.elementType=Gp,e.lanes=a,e;case dT:case Xp:return e=s|32,e=jn(30,n,t,e),e.elementType=Xp,e.lanes=a,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case fs:r=10;break t;case Wy:r=9;break t;case Jm:r=11;break t;case Km:r=14;break t;case ra:r=16,i=null;break t}r=29,n=Error(tt(130,e===null?"null":typeof e,"")),i=null}return t=jn(r,n,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function rr(e,t,n,i){return e=jn(7,e,i,t),e.lanes=n,e}function yp(e,t,n){return e=jn(6,e,null,t),e.lanes=n,e}function Cx(e){var t=jn(18,null,null,0);return t.stateNode=e,t}function xp(e,t,n){return t=jn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Av=new WeakMap;function Li(e,t){if(typeof e=="object"&&e!==null){var n=Av.get(e);return n!==void 0?n:(t={value:e,source:t,stack:sv(t)},Av.set(e,t),t)}return{value:e,source:t,stack:sv(t)}}var so=[],ao=0,sh=null,Kl=0,Ni=[],Di=0,Ea=null,ps=1,ms="";function Ls(e,t){so[ao++]=Kl,so[ao++]=sh,sh=e,Kl=t}function Rx(e,t,n){Ni[Di++]=ps,Ni[Di++]=ms,Ni[Di++]=Ea,Ea=e;var i=ps;e=ms;var s=32-gi(i)-1;i&=~(1<<s),n+=1;var a=32-gi(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,ps=1<<32-gi(t)+s|n<<s|i,ms=a+e}else ps=1<<a|n<<s|i,ms=e}function Lh(e){e.return!==null&&(Ls(e,1),Rx(e,1,0))}function c0(e){for(;e===sh;)sh=so[--ao],so[ao]=null,Kl=so[--ao],so[ao]=null;for(;e===Ea;)Ea=Ni[--Di],Ni[Di]=null,ms=Ni[--Di],Ni[Di]=null,ps=Ni[--Di],Ni[Di]=null}function Nx(e,t){Ni[Di++]=ps,Ni[Di++]=ms,Ni[Di++]=Ea,ps=t.id,ms=t.overflow,Ea=e}var xn=null,He=null,ne=!1,ga=null,Oi=!1,im=Error(tt(519));function Aa(e){var t=Error(tt(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ql(Li(t,e)),im}function wv(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[An]=e,t[ei]=i,n){case"dialog":se("cancel",t),se("close",t);break;case"iframe":case"object":case"embed":se("load",t);break;case"video":case"audio":for(n=0;n<ec.length;n++)se(ec[n],t);break;case"source":se("error",t);break;case"img":case"image":case"link":se("error",t),se("load",t);break;case"details":se("toggle",t);break;case"input":se("invalid",t),rx(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":se("invalid",t);break;case"textarea":se("invalid",t),lx(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||fM(t.textContent,n)?(i.popover!=null&&(se("beforetoggle",t),se("toggle",t)),i.onScroll!=null&&se("scroll",t),i.onScrollEnd!=null&&se("scrollend",t),i.onClick!=null&&(t.onclick=ds),t=!0):t=!1,t||Aa(e,!0)}function ah(e){for(xn=e.return;xn;)switch(xn.tag){case 5:case 31:case 13:Oi=!1;return;case 27:case 3:Oi=!0;return;default:xn=xn.return}}function Xr(e){if(e!==xn)return!1;if(!ne)return ah(e),ne=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Vm(e.type,e.memoizedProps)),n=!n),n&&He&&Aa(e),ah(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(tt(317));He=by(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(tt(317));He=by(e)}else t===27?(t=He,Da(e.type)?(e=Wm,Wm=null,He=e):He=t):He=xn?Ii(e.stateNode.nextSibling):null;return!0}function ur(){He=xn=null,ne=!1}function Sp(){var e=ga;return e!==null&&(Kn===null?Kn=e:Kn.push.apply(Kn,e),ga=null),e}function Ql(e){ga===null?ga=[e]:ga.push(e)}var sm=ys(null),Mr=null,Os=null;function ha(e,t,n){Ve(sm,t._currentValue),t._currentValue=n}function Ps(e){e._currentValue=sm.current,Cn(sm)}function Bu(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function am(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Bu(a.return,n,e),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(tt(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),Bu(r,n,e),r=null}else s.tag===13&&s.memoizedState!==null&&s.memoizedState.dehydrated===null?(s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),Bu(s.return,n,e),r=s.child,r=r!==null?r.sibling:null):r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function hr(e,t,n,i){e=null;for(var s=t,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(tt(387));if(r=r.memoizedProps,r!==null){var o=s.type;vi(s.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(s===Qu.current){if(r=s.alternate,r===null)throw Error(tt(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(Co):e=[Co])}s=s.return}return e!==null&&am(t,e,n,i),t.flags|=262144,e!==null}function rh(e){for(e=e.firstContext;e!==null;){if(!vi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function fr(e){Mr=e,Os=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function wn(e){return Dx(Mr,e)}function yu(e,t){return Mr===null&&fr(e),Dx(e,t)}function Dx(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Os===null){if(e===null)throw Error(tt(308));Os=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Os=Os.next=t;return n}var wE=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},CE=pn.unstable_scheduleCallback,RE=pn.unstable_NormalPriority,ln={$$typeof:fs,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function u0(){return{controller:new wE,data:new Map,refCount:0}}function pc(e){e.refCount--,e.refCount===0&&CE(RE,function(){e.controller.abort()})}function Cv(e,t){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var i=t[e];n.indexOf(i)===-1&&n.push(i)}}}var Dl=null;function NE(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Pl=null,rm=0,dr=0,uo=null;function DE(e,t){if(Pl===null){var n=Pl=[];rm=0,dr=F0(),uo={status:"pending",value:void 0,then:function(i){n.push(i)}}}return rm++,t.then(Rv,Rv),t}function Rv(){if(--rm===0&&(Dl=null,Pl!==null)){uo!==null&&(uo.status="fulfilled");var e=Pl;Pl=null,dr=0,uo=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function UE(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var Nv=Ht.S;Ht.S=function(e,t){if(JS=pi(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&DE(e,t),Dl!==null)for(var n=Eo;n!==null;)Cv(n,Dl),n=n.next;if(n=e.types,n!==null){for(var i=Eo;i!==null;)Cv(i,n),i=i.next;if(dr!==0){i=Dl,i===null&&(i=Dl=[]);for(var s=0;s<n.length;s++){var a=n[s];i.indexOf(a)===-1&&i.push(a)}}}Nv!==null&&Nv(e,t)};var or=ys(null);function h0(){var e=or.current;return e!==null?e:Ie.pooledCache}function Fu(e,t){t===null?Ve(or,or.current):Ve(or,t.pool)}function Ux(){var e=h0();return e===null?null:{parent:ln._currentValue,pool:e}}var Lo=Error(tt(460)),f0=Error(tt(474)),Oh=Error(tt(542)),oh={then:function(){}};function Dv(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Lx(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ds,ds),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Lv(e),e===void 0&&!("reason"in t)?Error(tt(600)):e;default:if(typeof t.status=="string")t.then(ds,ds);else{if(e=Ie,e!==null&&100<e.shellSuspendCounter)throw Error(tt(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Lv(e),e}throw lr=t,Lo}}function er(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(lr=n,Lo):n}}var lr=null;function Uv(){if(lr===null)throw Error(tt(459));var e=lr;return lr=null,e}function Lv(e){if(e===Lo||e===Oh)throw Error(tt(483))}var ho=null,jl=0;function xu(e){var t=jl;return jl+=1,ho===null&&(ho=[]),Lx(ho,e,t)}function ia(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Su(e,t){throw t.$$typeof===fT?Error(tt(525)):(e=Object.prototype.toString.call(t),Error(tt(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ox(e){function t(h,g){if(e){var M=h.deletions;M===null?(h.deletions=[g],h.flags|=16):M.push(g)}}function n(h,g){if(!e)return null;for(;g!==null;)t(h,g),g=g.sibling;return null}function i(h){for(var g=new Map;h!==null;)h.key===null?g.set(h.index,h):g.set(h.key,h),h=h.sibling;return g}function s(h,g){return h=Is(h,g),h.index=0,h.sibling=null,h}function a(h,g,M){return h.index=M,e?(M=h.alternate,M!==null?(M=M.index,M<g?(h.flags|=2,g):M):(h.flags|=134217730,g)):(h.flags|=1048576,g)}function r(h){return e&&h.alternate===null&&(h.flags|=134217730),h}function o(h,g,M,y){return g===null||g.tag!==6?(g=yp(M,h.mode,y),g.return=h,g):(g=s(g,M),g.return=h,g)}function l(h,g,M,y){var T=M.type;return T===Kr?(h=f(h,g,M.props.children,y,M.key),ia(h,M),h):g!==null&&(g.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ra&&er(T)===g.type)?(g=s(g,M.props),ia(g,M),g.return=h,g):(g=Pu(M.type,M.key,M.props,null,h.mode,y),ia(g,M),g.return=h,g)}function c(h,g,M,y){return g===null||g.tag!==4||g.stateNode.containerInfo!==M.containerInfo||g.stateNode.implementation!==M.implementation?(g=xp(M,h.mode,y),g.return=h,g):(g=s(g,M.children||[]),g.return=h,g)}function f(h,g,M,y,T){return g===null||g.tag!==7?(g=rr(M,h.mode,y,T),g.return=h,g):(g=s(g,M),g.return=h,g)}function p(h,g,M){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=yp(""+g,h.mode,M),g.return=h,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case hu:return M=Pu(g.type,g.key,g.props,null,h.mode,M),ia(M,g),M.return=h,M;case Cl:return g=xp(g,h.mode,M),g.return=h,g;case ra:return g=er(g),p(h,g,M)}if(Rl(g)||Ml(g))return g=rr(g,h.mode,M,null),g.return=h,g;if(typeof g.then=="function")return p(h,xu(g),M);if(g.$$typeof===fs)return p(h,yu(h,g),M);Su(h,g)}return null}function u(h,g,M,y){var T=g!==null?g.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return T!==null?null:o(h,g,""+M,y);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case hu:return M.key===T?l(h,g,M,y):null;case Cl:return M.key===T?c(h,g,M,y):null;case ra:return M=er(M),u(h,g,M,y)}if(Rl(M)||Ml(M))return T!==null?null:f(h,g,M,y,null);if(typeof M.then=="function")return u(h,g,xu(M),y);if(M.$$typeof===fs)return u(h,g,yu(h,M),y);Su(h,M)}return null}function d(h,g,M,y,T){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return h=h.get(M)||null,o(g,h,""+y,T);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case hu:return h=h.get(y.key===null?M:y.key)||null,l(g,h,y,T);case Cl:return h=h.get(y.key===null?M:y.key)||null,c(g,h,y,T);case ra:return y=er(y),d(h,g,M,y,T)}if(Rl(y)||Ml(y))return h=h.get(M)||null,f(g,h,y,T,null);if(typeof y.then=="function")return d(h,g,M,xu(y),T);if(y.$$typeof===fs)return d(h,g,M,yu(g,y),T);Su(g,y)}return null}function v(h,g,M,y){for(var T=null,E=null,w=g,S=g=0,C=null;w!==null&&S<M.length;S++){w.index>S?(C=w,w=null):C=w.sibling;var N=u(h,w,M[S],y);if(N===null){w===null&&(w=C);break}e&&w&&N.alternate===null&&t(h,w),g=a(N,g,S),E===null?T=N:E.sibling=N,E=N,w=C}if(S===M.length)return n(h,w),ne&&Ls(h,S),T;if(w===null){for(;S<M.length;S++)w=p(h,M[S],y),w!==null&&(g=a(w,g,S),E===null?T=w:E.sibling=w,E=w);return ne&&Ls(h,S),T}for(w=i(w);S<M.length;S++)C=d(w,h,S,M[S],y),C!==null&&(e&&(N=C.alternate,N!==null&&w.delete(N.key===null?S:N.key)),g=a(C,g,S),E===null?T=C:E.sibling=C,E=C);return e&&w.forEach(function(O){return t(h,O)}),ne&&Ls(h,S),T}function b(h,g,M,y){if(M==null)throw Error(tt(151));for(var T=null,E=null,w=g,S=g=0,C=null,N=M.next();w!==null&&!N.done;S++,N=M.next()){w.index>S?(C=w,w=null):C=w.sibling;var O=u(h,w,N.value,y);if(O===null){w===null&&(w=C);break}e&&w&&O.alternate===null&&t(h,w),g=a(O,g,S),E===null?T=O:E.sibling=O,E=O,w=C}if(N.done)return n(h,w),ne&&Ls(h,S),T;if(w===null){for(;!N.done;S++,N=M.next())N=p(h,N.value,y),N!==null&&(g=a(N,g,S),E===null?T=N:E.sibling=N,E=N);return ne&&Ls(h,S),T}for(w=i(w);!N.done;S++,N=M.next())N=d(w,h,S,N.value,y),N!==null&&(e&&(C=N.alternate,C!==null&&w.delete(C.key===null?S:C.key)),g=a(N,g,S),E===null?T=N:E.sibling=N,E=N);return e&&w.forEach(function(z){return t(h,z)}),ne&&Ls(h,S),T}function m(h,g,M,y){if(typeof M=="object"&&M!==null&&M.type===Kr&&M.key===null&&M.props.ref===void 0&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case hu:t:{for(var T=M.key;g!==null;){if(g.key===T){if(T=M.type,T===Kr){if(g.tag===7){n(h,g.sibling),y=s(g,M.props.children),ia(y,M),y.return=h,h=y;break t}}else if(g.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ra&&er(T)===g.type){n(h,g.sibling),y=s(g,M.props),ia(y,M),y.return=h,h=y;break t}n(h,g);break}else t(h,g);g=g.sibling}M.type===Kr?(y=rr(M.props.children,h.mode,y,M.key),ia(y,M),y.return=h,h=y):(y=Pu(M.type,M.key,M.props,null,h.mode,y),ia(y,M),y.return=h,h=y)}return r(h);case Cl:t:{for(T=M.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===M.containerInfo&&g.stateNode.implementation===M.implementation){n(h,g.sibling),y=s(g,M.children||[]),y.return=h,h=y;break t}else{n(h,g);break}else t(h,g);g=g.sibling}y=xp(M,h.mode,y),y.return=h,h=y}return r(h);case ra:return M=er(M),m(h,g,M,y)}if(Rl(M))return v(h,g,M,y);if(Ml(M)){if(T=Ml(M),typeof T!="function")throw Error(tt(150));return M=T.call(M),b(h,g,M,y)}if(typeof M.then=="function")return m(h,g,xu(M),y);if(M.$$typeof===fs)return m(h,g,yu(h,M),y);Su(h,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,g!==null&&g.tag===6?(n(h,g.sibling),y=s(g,M),y.return=h,h=y):(n(h,g),y=yp(M,h.mode,y),y.return=h,h=y),r(h)):n(h,g)}return function(h,g,M,y){try{jl=0;var T=m(h,g,M,y);return ho=null,T}catch(w){if(w===Lo||w===Oh)throw w;var E=jn(29,w,null,h.mode);return E.lanes=y,E.return=h,E}}}var pr=Ox(!0),Ix=Ox(!1),oa=!1;function d0(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function om(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function _a(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function va(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Me&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=ih(e),Ax(e,null,n),t}return Uh(e,i,t,n),ih(e)}function Bl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,jy(e,n)}}function Mp(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var lm=!1;function Fl(){if(lm){var e=uo;if(e!==null)throw e}}function zl(e,t,n,i){lm=!1;var s=e.updateQueue;oa=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var f=e.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==r&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(a!==null){var p=s.baseState;r=0,f=c=l=null,o=a;do{var u=o.lane&-536870913,d=u!==o.lane;if(d?(le&u)===u:(i&u)===u){u!==0&&u===dr&&(lm=!0),f!==null&&(f=f.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var v=e,b=o;u=t;var m=n;switch(b.tag){case 1:if(v=b.payload,typeof v=="function"){p=v.call(m,p,u);break t}p=v;break t;case 3:v.flags=v.flags&-65537|128;case 0:if(v=b.payload,u=typeof v=="function"?v.call(m,p,u):v,u==null)break t;p=Pe({},p,u);break t;case 2:oa=!0}}u=o.callback,u!==null&&(e.flags|=64,d&&(e.flags|=8192),d=s.callbacks,d===null?s.callbacks=[u]:d.push(u))}else d={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=d,l=p):f=f.next=d,r|=u;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;d=o,o=d.next,d.next=null,s.lastBaseUpdate=d,s.shared.pending=null}}while(!0);f===null&&(l=p),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=f,a===null&&(s.shared.lanes=0),Ra|=r,e.lanes=r,e.memoizedState=p}}function Px(e,t){if(typeof e!="function")throw Error(tt(191,e));e.call(t)}function Bx(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Px(n[e],t)}var wa=ys(null),lh=ys(0);function Ov(e,t){e=Gs,Ve(lh,e),Ve(wa,t),Gs=e|t.baseLanes}function cm(){Ve(lh,Gs),Ve(wa,wa.current)}function p0(){Gs=lh.current,Cn(wa),Cn(lh)}var Dn=ys(null),In=null;function ya(e){var t=e.alternate;Ve(Rn,Rn.current&1),Ve(Dn,e),In===null&&(t===null||wa.current!==null||t.memoizedState!==null)&&(In=e)}function um(e){Ve(Rn,Rn.current),Ve(Dn,e),In===null&&(In=e)}function Fx(e){e.tag===22?(Ve(Rn,Rn.current),Ve(Dn,e),In===null&&(In=e)):xa()}function xa(){Ve(Rn,Rn.current),Ve(Dn,Dn.current)}function hi(e){Cn(Dn),In===e&&(In=null),Cn(Rn)}var Rn=ys(0);function $l(e,t){Ve(Dn,Dn.current),Ve(Rn,t)}function m0(e){Cn(Rn),Cn(Dn),In===e&&(In=null)}function ch(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Xm(n)||G0(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var zs=0,Jt=null,Oe=null,on=null,uh=!1,fo=!1,mr=!1,hh=0,tc=0,po=null,LE=0;function $e(){throw Error(tt(321))}function g0(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!vi(e[n],t[n]))return!1;return!0}function _0(e,t,n,i,s,a){return zs=a,Jt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ht.H=e===null||e.memoizedState===null?mS:gS,mr=!1,a=n(i,s),mr=!1,fo&&(a=Hx(t,n,i,s)),zx(e),a}function zx(e){Ht.H=fh;var t=Oe!==null&&Oe.next!==null;if(zs=0,on=Oe=Jt=null,uh=!1,tc=0,po=null,t)throw Error(tt(300));e===null||cn||(e=e.dependencies,e!==null&&rh(e)&&(cn=!0))}function Hx(e,t,n,i){Jt=e;var s=0;do{if(fo&&(po=null),tc=0,fo=!1,25<=s)throw Error(tt(301));if(s+=1,on=Oe=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}Ht.H=VE,a=t(n,i)}while(fo);return a}function OE(){var e=Ht.H,t=e.useState()[0];return t=typeof t.then=="function"?mc(t):t,e=e.useState()[0],(Oe!==null?Oe.memoizedState:null)!==e&&(Jt.flags|=1024),t}function v0(){var e=hh!==0;return hh=0,e}function y0(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function x0(e){if(uh){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}uh=!1}zs=0,on=Oe=Jt=null,fo=!1,tc=hh=0,po=null}function Wn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?Jt.memoizedState=on=e:on=on.next=e,on}function nn(){if(Oe===null){var e=Jt.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var t=on===null?Jt.memoizedState:on.next;if(t!==null)on=t,Oe=e;else{if(e===null)throw Jt.alternate===null?Error(tt(467)):Error(tt(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},on===null?Jt.memoizedState=on=e:on=on.next=e}return on}function Ih(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function mc(e){var t=tc;return tc+=1,po===null&&(po=[]),e=Lx(po,e,t),t=Jt,(on===null?t.memoizedState:on.next)===null&&(t=t.alternate,Ht.H=t===null||t.memoizedState===null?mS:gS),e}function Ph(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return mc(e);if(e.$$typeof===mT)return;if(e.$$typeof===fs)return wn(e)}throw Error(tt(438,String(e)))}function S0(e){var t=null,n=Jt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Jt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Ih(),Jt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=pT;return t.index++,n}function Hs(e,t){return typeof t=="function"?t(e):t}function zu(e){var t=nn();return M0(t,Oe,e)}function M0(e,t,n){var i=e.queue;if(i===null)throw Error(tt(311));i.lastRenderedReducer=n;var s=e.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=e.baseState,s===null)e.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,f=!1;do{var p=c.lane&-536870913;if(p!==c.lane?(le&p)===p:(zs&p)===p){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),p===dr&&(f=!0);else if((zs&u)===u){c=c.next,u===dr&&(f=!0);continue}else p={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=p,r=a):l=l.next=p,Jt.lanes|=u,Ra|=u;p=c.action,mr&&n(a,p),a=c.hasEagerState?c.eagerState:n(a,p)}else u={lane:p,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,r=a):l=l.next=u,Jt.lanes|=p,Ra|=p;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!vi(a,e.memoizedState)&&(cn=!0,f&&(n=uo,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function bp(e){var t=nn(),n=t.queue;if(n===null)throw Error(tt(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=e(a,r.action),r=r.next;while(r!==s);vi(a,t.memoizedState)||(cn=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function Vx(e,t,n){var i=Jt,s=nn(),a=ne;if(a){if(n===void 0)throw Error(tt(407));n=n()}else n=t();var r=!vi((Oe||s).memoizedState,n);if(r&&(s.memoizedState=n,cn=!0),s=s.queue,b0(Xx.bind(null,i,s,e),[e]),e=s.getSnapshot!==t||r||on!==null&&(on.memoizedState.tag&1)!==0,So(e?9:8,{destroy:void 0},kx.bind(null,i,s,n,t),null),e){if(i.flags|=2048,Ie===null)throw Error(tt(349));a||(zs&127)!==0||Gx(i,t,n)}return n}function Gx(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Jt.updateQueue,t===null?(t=Ih(),Jt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function kx(e,t,n,i){t.value=n,t.getSnapshot=i,Wx(t)&&qx(e)}function Xx(e,t,n){return n(function(){Wx(t)&&qx(e)})}function Wx(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!vi(e,n)}catch{return!0}}function qx(e){var t=Sr(e,2);t!==null&&$n(t,e,2)}function hm(e){var t=Wn();if(typeof e=="function"){var n=e;if(e=n(),mr){ca(!0);try{n()}finally{ca(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hs,lastRenderedState:e},t}function Yx(e,t,n,i){return e.baseState=n,M0(e,Oe,typeof i=="function"?i:Hs)}function IE(e,t,n,i,s){if(Fh(e))throw Error(tt(485));if(e=t.action,e!==null){var a={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};Ht.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,Zx(t,a)):(a.next=n.next,t.pending=n.next=a)}}function Zx(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var a=Ht.T,r={};r.types=a!==null?a.types:null,Ht.T=r;try{var o=n(s,i),l=Ht.S;l!==null&&l(r,o),Iv(e,t,o)}catch(c){fm(e,t,c)}finally{a!==null&&r.types!==null&&(a.types=r.types),Ht.T=a}}else try{a=n(s,i),Iv(e,t,a)}catch(c){fm(e,t,c)}}function Iv(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Pv(e,t,i)},function(i){return fm(e,t,i)}):Pv(e,t,n)}function Pv(e,t,n){t.status="fulfilled",t.value=n,Jx(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Zx(e,n)))}function fm(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Jx(t),t=t.next;while(t!==i)}e.action=null}function Jx(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Kx(e,t){return t}function Bv(e,t){if(ne){var n=Ie.formState;if(n!==null){t:{var i=Jt;if(ne){if(He){e:{for(var s=He,a=Oi;s.nodeType!==8;){if(!a){s=null;break e}if(s=Ii(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){He=Ii(s.nextSibling),i=s.data==="F!";break t}}Aa(i)}i=!1}i&&(t=n[0])}}return n=Wn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kx,lastRenderedState:t},n.queue=i,n=fS.bind(null,Jt,i),i.dispatch=n,i=hm(!1),a=w0.bind(null,Jt,!1,i.queue),i=Wn(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=IE.bind(null,Jt,s,a,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function Fv(e){var t=nn();return Qx(t,Oe,e)}function Qx(e,t,n){if(t=M0(e,t,Kx)[0],e=zu(Hs)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=mc(t)}catch(r){throw r===Lo?Oh:r}else i=t;t=nn();var s=t.queue,a=s.dispatch;return n!==t.memoizedState&&(Jt.flags|=2048,So(9,{destroy:void 0},PE.bind(null,s,n),null)),[i,a,e]}function PE(e,t){e.action=t}function zv(e){var t=nn(),n=Oe;if(n!==null)return Qx(t,n,e);nn(),t=t.memoizedState,n=nn();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function So(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Jt.updateQueue,t===null&&(t=Ih(),Jt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function jx(){return nn().memoizedState}function Hu(e,t,n,i){var s=Wn();Jt.flags|=e,s.memoizedState=So(1|t,{destroy:void 0},n,i===void 0?null:i)}function Bh(e,t,n,i){var s=nn();i=i===void 0?null:i;var a=s.memoizedState.inst;Oe!==null&&i!==null&&g0(i,Oe.memoizedState.deps)?s.memoizedState=So(t,a,n,i):(Jt.flags|=e,s.memoizedState=So(1|t,a,n,i))}function Hv(e,t){Hu(8390656,8,e,t)}function b0(e,t){Bh(2048,8,e,t)}function BE(e){Jt.flags|=4;var t=Jt.updateQueue;if(t===null)t=Ih(),Jt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function $x(e){var t=nn().memoizedState;return BE({ref:t,nextImpl:e}),function(){if((Me&2)!==0)throw Error(tt(440));return t.impl.apply(void 0,arguments)}}function tS(e,t){return Bh(4,2,e,t)}function eS(e,t){return Bh(4,4,e,t)}function nS(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function iS(e,t,n){n=n!=null?n.concat([e]):null,Bh(4,4,nS.bind(null,t,e),n)}function T0(){}function sS(e,t){var n=nn();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&g0(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function aS(e,t){var n=nn();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&g0(t,i[1]))return i[0];if(i=e(),mr){ca(!0);try{e()}finally{ca(!1)}}return n.memoizedState=[i,t],i}function E0(e,t,n){return n===void 0||(zs&1073741824)!==0&&(le&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=QS(),Jt.lanes|=e,Ra|=e,n)}function rS(e,t,n,i){return vi(n,t)?n:wa.current!==null?(e=E0(e,n,i),vi(e,t)||(cn=!0),e):(zs&106)===0||(zs&1073741824)!==0&&(le&261930)===0?(cn=!0,e.memoizedState=n):(e=QS(),Jt.lanes|=e,Ra|=e,t)}function oS(e,t,n,i,s){var a=be.p;be.p=a!==0&&8>a?a:8;var r=Ht.T,o={};o.types=r!==null?r.types:null,Ht.T=o,w0(e,!1,t,n);try{var l=s(),c=Ht.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var f=UE(l,i);Hl(e,t,f,_i(e))}else Hl(e,t,i,_i(e))}catch(p){Hl(e,t,{then:function(){},status:"rejected",reason:p},_i())}finally{be.p=a,r!==null&&o.types!==null&&(r.types=o.types),Ht.T=r}}function FE(){}function dm(e,t,n,i){if(e.tag!==5)throw Error(tt(476));var s=lS(e).queue;oS(e,s,t,ar,n===null?FE:function(){return cS(e),n(i)})}function lS(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ar,baseState:ar,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hs,lastRenderedState:ar},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hs,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function cS(e){var t=lS(e);t.next===null&&(t=e.alternate.memoizedState),Hl(e,t.next.queue,{},_i())}function A0(){return wn(Co)}function uS(){return nn().memoizedState}function hS(){return nn().memoizedState}function zE(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=_i();e=_a(n);var i=va(t,e,n);i!==null&&($n(i,t,n),Bl(i,t,n)),t={cache:u0()},e.payload=t;return}t=t.return}}function HE(e,t,n){var i=_i();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Fh(e)?dS(t,n):(n=o0(e,t,n,i),n!==null&&($n(n,e,i),pS(n,t,i)))}function fS(e,t,n){var i=_i();Hl(e,t,n,i)}function Hl(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fh(e))dS(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,vi(o,r))return Uh(e,t,s,0),Ie===null&&Dh(),!1}catch{}if(n=o0(e,t,s,i),n!==null)return $n(n,e,i),pS(n,t,i),!0}return!1}function w0(e,t,n,i){if(i={lane:2,revertLane:F0(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Fh(e)){if(t)throw Error(tt(479))}else t=o0(e,n,i,2),t!==null&&$n(t,e,2)}function Fh(e){var t=e.alternate;return e===Jt||t!==null&&t===Jt}function dS(e,t){fo=uh=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function pS(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,jy(e,n)}}var fh={readContext:wn,use:Ph,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e,useHostTransitionStatus:$e,useFormState:$e,useActionState:$e,useOptimistic:$e,useMemoCache:$e,useCacheRefresh:$e,useEffectEvent:$e},mS={readContext:wn,use:Ph,useCallback:function(e,t){return Wn().memoizedState=[e,t===void 0?null:t],e},useContext:wn,useEffect:Hv,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Hu(4194308,4,nS.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Hu(4194308,4,e,t)},useInsertionEffect:function(e,t){Hu(4,2,e,t)},useMemo:function(e,t){var n=Wn();t=t===void 0?null:t;var i=e();if(mr){ca(!0);try{e()}finally{ca(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Wn();if(n!==void 0){var s=n(t);if(mr){ca(!0);try{n(t)}finally{ca(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=HE.bind(null,Jt,e),[i.memoizedState,e]},useRef:function(e){var t=Wn();return e={current:e},t.memoizedState=e},useState:function(e){e=hm(e);var t=e.queue,n=fS.bind(null,Jt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:T0,useDeferredValue:function(e,t){var n=Wn();return E0(n,e,t)},useTransition:function(){var e=hm(!1);return e=oS.bind(null,Jt,e.queue,!0,!1),Wn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Jt,s=Wn();if(ne){if(n===void 0)throw Error(tt(407));n=n()}else{if(n=t(),Ie===null)throw Error(tt(349));(le&127)!==0||Gx(i,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,Hv(Xx.bind(null,i,a,e),[e]),i.flags|=2048,So(9,{destroy:void 0},kx.bind(null,i,a,n,t),null),n},useId:function(){var e=Wn(),t=Ie.identifierPrefix;if(ne){var n=ms,i=ps;n=(i&~(1<<32-gi(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=hh++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=LE++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:A0,useFormState:Bv,useActionState:Bv,useOptimistic:function(e){var t=Wn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=w0.bind(null,Jt,!0,n),n.dispatch=t,[e,t]},useMemoCache:S0,useCacheRefresh:function(){return Wn().memoizedState=zE.bind(null,Jt)},useEffectEvent:function(e){var t=Wn(),n={impl:e};return t.memoizedState=n,function(){if((Me&2)!==0)throw Error(tt(440));return n.impl.apply(void 0,arguments)}}},gS={readContext:wn,use:Ph,useCallback:sS,useContext:wn,useEffect:b0,useImperativeHandle:iS,useInsertionEffect:tS,useLayoutEffect:eS,useMemo:aS,useReducer:zu,useRef:jx,useState:function(){return zu(Hs)},useDebugValue:T0,useDeferredValue:function(e,t){var n=nn();return rS(n,Oe.memoizedState,e,t)},useTransition:function(){var e=zu(Hs)[0],t=nn().memoizedState;return[typeof e=="boolean"?e:mc(e),t]},useSyncExternalStore:Vx,useId:uS,useHostTransitionStatus:A0,useFormState:Fv,useActionState:Fv,useOptimistic:function(e,t){var n=nn();return Yx(n,Oe,e,t)},useMemoCache:S0,useCacheRefresh:hS,useEffectEvent:$x},VE={readContext:wn,use:Ph,useCallback:sS,useContext:wn,useEffect:b0,useImperativeHandle:iS,useInsertionEffect:tS,useLayoutEffect:eS,useMemo:aS,useReducer:bp,useRef:jx,useState:function(){return bp(Hs)},useDebugValue:T0,useDeferredValue:function(e,t){var n=nn();return Oe===null?E0(n,e,t):rS(n,Oe.memoizedState,e,t)},useTransition:function(){var e=bp(Hs)[0],t=nn().memoizedState;return[typeof e=="boolean"?e:mc(e),t]},useSyncExternalStore:Vx,useId:uS,useHostTransitionStatus:A0,useFormState:zv,useActionState:zv,useOptimistic:function(e,t){var n=nn();return Oe!==null?Yx(n,Oe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:S0,useCacheRefresh:hS,useEffectEvent:$x};function Tp(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Pe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var pm={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=_i(),s=_a(i);s.payload=t,n!=null&&(s.callback=n),t=va(e,s,i),t!==null&&($n(t,e,i),Bl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=_i(),s=_a(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=va(e,s,i),t!==null&&($n(t,e,i),Bl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=_i(),i=_a(n);i.tag=2,t!=null&&(i.callback=t),t=va(e,i,n),t!==null&&($n(t,e,n),Bl(t,e,n))}};function Vv(e,t,n,i,s,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!Jl(n,i)||!Jl(s,a):!0}function Gv(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&pm.enqueueReplaceState(t,t.state,null)}function gr(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Pe({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function _S(e){nh(e)}function vS(e){console.error(e)}function yS(e){nh(e)}function dh(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function kv(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function mm(e,t,n){return n=_a(n),n.tag=3,n.payload={element:null},n.callback=function(){dh(e,t)},n}function xS(e){return e=_a(e),e.tag=3,e}function SS(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;e.payload=function(){return s(a)},e.callback=function(){kv(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){kv(t,n,i),typeof s!="function"&&(Sa===null?Sa=new Set([this]):Sa.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function GE(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&hr(t,n,s,!0),n=Dn.current,n!==null){switch(n.tag){case 31:case 13:case 19:return In===null?Sh():n.alternate===null&&tn===0&&(tn=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===oh?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Dp(e,i,s)),!1;case 22:return n.flags|=65536,i===oh?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Dp(e,i,s)),!1}throw Error(tt(435,n.tag))}return Dp(e,i,s),Sh(),!1}if(ne)return t=Dn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==im&&(e=Error(tt(422),{cause:i}),Ql(Li(e,n)))):(i!==im&&(t=Error(tt(423),{cause:i}),Ql(Li(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=Li(i,n),s=mm(e.stateNode,i,s),Mp(e,s),tn!==4&&(tn=2)),!1;var a=Error(tt(520),{cause:i});if(a=Li(a,n),Xl===null?Xl=[a]:Xl.push(a),tn!==4&&(tn=2),t===null)return!0;i=Li(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=mm(n.stateNode,i,e),Mp(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(Sa===null||!Sa.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=xS(s),SS(s,e,n,i),Mp(n,s),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var C0=Error(tt(461)),cn=!1;function fn(e,t,n,i){t.child=e===null?Ix(t,null,n,i):pr(t,e.child,n,i)}function Xv(e,t,n,i,s){n=n.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return fr(t),i=_0(e,t,n,r,a,s),o=v0(),e!==null&&!cn?(y0(e,t,s),Vs(e,t,s)):(ne&&o&&Lh(t),t.flags|=1,fn(e,t,i,s),t.child)}function Wv(e,t,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!l0(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,MS(e,t,a,i,s)):(e=Pu(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!N0(e,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:Jl,n(r,i)&&e.ref===t.ref)return Vs(e,t,s)}return t.flags|=1,e=Is(a,i),e.ref=t.ref,e.return=t,t.child=e}function MS(e,t,n,i,s){if(e!==null){var a=e.memoizedProps;if(Jl(a,i)&&e.ref===t.ref)if(cn=!1,t.pendingProps=i=a,N0(e,s))(e.flags&131072)!==0&&(cn=!0);else return t.lanes=e.lanes,Vs(e,t,s)}return gm(e,t,n,i,s)}function bS(e,t,n,i){var s=i.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~a}else i=0,t.child=null;return qv(e,t,a,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Fu(t,a!==null?a.cachePool:null),a!==null?Ov(t,a):cm(),Fx(t);else return i=t.lanes=536870912,qv(e,t,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(Fu(t,a.cachePool),Ov(t,a),xa(),t.memoizedState=null):(e!==null&&Fu(t,null),cm(),xa());return fn(e,t,s,n),t.child}function Vl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function qv(e,t,n,i,s){var a=h0();return a=a===null?null:{parent:ln._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Fu(t,null),cm(),Fx(t),e!==null&&hr(e,t,i,!0),t.childLanes=s,null}function Vu(e,t){return t=zh({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Yv(e,t,n){return pr(t,e.child,null,n),e=Vu(t,t.pendingProps),e.flags|=2,hi(t),t.memoizedState=null,e}function kE(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ne){if(i.mode==="hidden")return e=Vu(t,i),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Vl(null,e);if(um(t),(e=He)?(e=bM(e,Oi),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ea!==null?{id:ps,overflow:ms}:null,retryLane:536870912,hydrationErrors:null},n=Cx(e),n.return=t,t.child=n,xn=t,He=null)):e=null,e===null)throw Aa(t);return t.lanes=536870912,null}return Vu(t,i)}var a=e.memoizedState;if(a!==null){var r=a.dehydrated;if(um(t),s)if(t.flags&256)t.flags&=-257,t=Yv(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(tt(558));else if(cn||hr(e,t,n,!1),s=(n&e.childLanes)!==0,cn||s){if(wa.current===null){if(i=Ie,i!==null&&(r=$y(i,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,Sr(e,r),$n(i,e,r),C0;Sh()}t=Yv(e,t,n)}else e=a.treeContext,He=Ii(r.nextSibling),xn=t,ne=!0,ga=null,Oi=!1,e!==null&&Nx(t,e),t=Vu(t,i),t.flags|=134221824;return t}return e=Is(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function qr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(tt(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function gm(e,t,n,i,s){return fr(t),n=_0(e,t,n,i,void 0,s),i=v0(),e!==null&&!cn?(y0(e,t,s),Vs(e,t,s)):(ne&&i&&Lh(t),t.flags|=1,fn(e,t,n,s),t.child)}function Zv(e,t,n,i,s,a){return fr(t),t.updateQueue=null,n=Hx(t,i,n,s),zx(e),i=v0(),e!==null&&!cn?(y0(e,t,a),Vs(e,t,a)):(ne&&i&&Lh(t),t.flags|=1,fn(e,t,n,a),t.child)}function Jv(e,t,n,i,s){if(fr(t),t.stateNode===null){var a=io,r=n.contextType;typeof r=="object"&&r!==null&&(a=wn(r)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=pm,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},d0(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?wn(r):io,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Tp(t,n,r,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&pm.enqueueReplaceState(a,a.state,null),zl(t,i,a,s),Fl(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,l=gr(n,o);a.props=l;var c=a.context,f=n.contextType;r=io,typeof f=="object"&&f!==null&&(r=wn(f));var p=n.getDerivedStateFromProps;f=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&Gv(t,a,i,r),oa=!1;var u=t.memoizedState;a.state=u,zl(t,i,a,s),Fl(),c=t.memoizedState,o||u!==c||oa?(typeof p=="function"&&(Tp(t,n,p,i),c=t.memoizedState),(l=oa||Vv(t,n,l,i,u,c,r))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,om(e,t),r=t.memoizedProps,f=gr(n,r),a.props=f,p=t.pendingProps,u=a.context,c=n.contextType,l=io,typeof c=="object"&&c!==null&&(l=wn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==p||u!==l)&&Gv(t,a,i,l),oa=!1,u=t.memoizedState,a.state=u,zl(t,i,a,s),Fl();var d=t.memoizedState;r!==p||u!==d||oa||e!==null&&e.dependencies!==null&&rh(e.dependencies)?(typeof o=="function"&&(Tp(t,n,o,i),d=t.memoizedState),(f=oa||Vv(t,n,f,i,u,d,l)||e!==null&&e.dependencies!==null&&rh(e.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,d,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,d,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=d),a.props=i,a.state=d,a.context=l,i=f):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,qr(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=pr(t,e.child,null,s),t.child=pr(t,null,n,s)):fn(e,t,n,s),t.memoizedState=a.state,e=t.child):e=Vs(e,t,s),e}function Kv(e,t,n,i){return ur(),t.flags|=256,fn(e,t,n,i),t.child}var _m={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vm(e){return{baseLanes:e,cachePool:Ux()}}function ym(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=di),e}function TS(e,t,n){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(Rn.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(ne){if(s?ya(t):xa(),(e=He)?(e=bM(e,Oi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ea!==null?{id:ps,overflow:ms}:null,retryLane:536870912,hydrationErrors:null},n=Cx(e),n.return=t,t.child=n,xn=t,He=null)):e=null,e===null)throw Aa(t);return G0(e)?t.lanes=32:t.lanes=536870912,null}return a=i.children,i=i.fallback,s?(xa(),s=t.mode,a=zh({mode:"hidden",children:a},s),i=rr(i,s,n,null),a.return=t,i.return=t,a.sibling=i,t.child=a,i=t.child,i.memoizedState=vm(n),i.childLanes=ym(e,r,n),t.memoizedState=_m,Vl(null,i)):(ya(t),R0(t,a))}var o=e.memoizedState;if(o!==null){var l=o.dehydrated;if(l!==null)return XE(e,t,a,r,i,l,o,n)}return s?(xa(),s=i.fallback,a=t.mode,o=e.child,l=o.sibling,i=Is(o,{mode:"hidden",children:i.children}),i.subtreeFlags=o.subtreeFlags&1206910976,l!==null?s=Is(l,s):(s=rr(s,a,n,null),s.flags|=2),s.return=t,i.return=t,i.sibling=s,t.child=i,Vl(null,i),i=t.child,s=e.child.memoizedState,s===null?s=vm(n):(a=s.cachePool,a!==null?(o=ln._currentValue,a=a.parent!==o?{parent:o,pool:o}:a):a=Ux(),s={baseLanes:s.baseLanes|n,cachePool:a}),i.memoizedState=s,i.childLanes=ym(e,r,n),t.memoizedState=_m,Vl(e.child,i)):(ya(t),n=e.child,e=n.sibling,n=Is(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function R0(e,t){return t=zh({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function zh(e,t){return e=jn(22,e,null,t),e.lanes=0,e}function Mu(e,t,n){return pr(t,e.child,null,n),e=R0(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function XE(e,t,n,i,s,a,r,o){if(n)return t.flags&256?(ya(t),t.flags&=-257,Mu(e,t,o)):t.memoizedState!==null?(xa(),t.child=e.child,t.flags|=128,null):(xa(),a=s.fallback,r=t.mode,s=zh({mode:"visible",children:s.children},r),a=rr(a,r,o,null),a.flags|=2,s.return=t,a.return=t,s.sibling=a,t.child=s,pr(t,e.child,null,o),s=t.child,s.memoizedState=vm(o),s.childLanes=ym(e,i,o),t.memoizedState=_m,Vl(null,s));if(ya(t),G0(a)){if(i=a.nextSibling&&a.nextSibling.dataset,i)var l=i.dgst;return i=l,i!==""&&(s=Error(tt(419)),s.stack="",s.digest=i,Ql({value:s,source:null,stack:null})),Mu(e,t,o)}if(cn||hr(e,t,o,!1),i=(o&e.childLanes)!==0,cn||i){if(wa.current!==null)return Mu(e,t,o);if(i=Ie,i!==null&&(s=$y(i,o),s!==0&&s!==r.retryLane))throw r.retryLane=s,Sr(e,s),$n(i,e,s),C0;return Xm(a)||Sh(),Mu(e,t,o)}return Xm(a)?(t.flags|=192,t.child=e.child,null):(e=r.treeContext,He=Ii(a.nextSibling),xn=t,ne=!0,ga=null,Oi=!1,e!==null&&Nx(t,e),t=R0(t,s.children),t.flags|=134221824,t)}function Qv(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Bu(e.return,t,n)}function jv(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&ch(n)===null&&(t=e),e=e.sibling}return t}function bu(e,t,n,i,s,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s,r.treeForkCount=a)}function Ep(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function xm(e,t,n){var i=t.pendingProps,s=i.revealOrder,a=i.tail;i=i.children;var r=Rn.current;if(t.flags&128)return $l(t,r),null;var o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,$l(t,r),s==="backwards"&&e!==null?(Ep(e),fn(e,t,i,n),Ep(e)):fn(e,t,i,n),i=ne?Kl:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qv(e,n,t);else if(e.tag===19)Qv(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"backwards":n=jv(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null,Ep(t)),bu(t,!0,s,null,a,i);break;case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&ch(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}bu(t,!0,n,null,a,i);break;case"together":bu(t,!1,null,null,void 0,i);break;case"independent":t.memoizedState=null;break;default:n=jv(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),bu(t,!1,s,n,a,i)}return t.child}function $v(e,t,n){var i=t.pendingProps;return ha(t,t.type,i.value),fn(e,t,i.children,n),t.child}function Vs(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ra|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(hr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(tt(153));if(t.child!==null){for(e=t.child,n=Is(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Is(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function N0(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&rh(e)))}function WE(e,t,n){switch(t.tag){case 3:ju(t,t.stateNode.containerInfo),ha(t,ln,e.memoizedState.cache),ur();break;case 27:case 5:Yp(t);break;case 4:ju(t,t.stateNode.containerInfo);break;case 10:ha(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,um(t),null;break;case 13:var i=t.memoizedState;if(i!==null){if(i.dehydrated!==null)return ya(t),t.flags|=128,null;i=hr(e,t,n,!1);var s=t.child.childLanes;return i||(n&s)!==0?TS(e,t,n):(ya(t),e=Vs(e,t,n),e!==null?e.sibling:null)}ya(t);break;case 19:if(t.flags&128)return xm(e,t,n);if(s=(e.flags&128)!==0,i=(n&t.childLanes)!==0,i||(hr(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return xm(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),$l(t,Rn.current),i)break;return null;case 22:return t.lanes=0,bS(e,t,n,t.pendingProps);case 24:ha(t,ln,e.memoizedState.cache)}return Vs(e,t,n)}function ES(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)cn=!0;else{if(!N0(e,n)&&(t.flags&128)===0)return cn=!1,WE(e,t,n);cn=(e.flags&131072)!==0}else cn=!1,ne&&(t.flags&1048576)!==0&&Rx(t,Kl,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=er(t.elementType),t.type=e,typeof e=="function")l0(e)?(i=gr(e,i),t.tag=1,t=Jv(null,t,e,i,n)):(t.tag=0,t=gm(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===Jm){t.tag=11,t=Xv(null,t,e,i,n);break t}else if(s===Km){t.tag=14,t=Wv(null,t,e,i,n);break t}else if(s===fs){t.tag=10,t.type=e,t=$v(null,t,n);break t}}throw t=Wp(e)||e,Error(tt(306,t,""))}}return t;case 0:return gm(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=gr(i,t.pendingProps),Jv(e,t,i,s,n);case 3:t:{if(ju(t,t.stateNode.containerInfo),e===null)throw Error(tt(387));i=t.pendingProps;var a=t.memoizedState;s=a.element,om(e,t),zl(t,i,null,n);var r=t.memoizedState;if(i=r.cache,ha(t,ln,i),i!==a.cache&&am(t,[ln],n,!0),Fl(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=Kv(e,t,i,n);break t}else if(i!==s){s=Li(Error(tt(424)),t),Ql(s),t=Kv(e,t,i,n);break t}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,He=Ii(e.firstChild),xn=t,ne=!0,ga=null,Oi=!0,n=Ix(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling;else{if(ur(),i===s){t=Vs(e,t,n);break t}fn(e,t,i,n)}t=t.child}return t;case 26:return qr(e,t),e===null?(n=Ay(t.type,null,t.pendingProps,null))?t.memoizedState=n:ne||(t.stateNode=pM(t.type,t.pendingProps,ma.current,t)):t.memoizedState=Ay(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Yp(t),e===null&&ne&&(i=t.stateNode=TM(t.type,t.pendingProps,ma.current),xn=t,Oi=!0,s=He,Da(t.type)?(Wm=s,He=Ii(i.firstChild)):He=s),fn(e,t,t.pendingProps.children,n),qr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ne&&((s=i=He)&&(i=BA(i,t.type,t.pendingProps,Oi),i!==null?(t.stateNode=i,xn=t,He=Ii(i.firstChild),Oi=!1,s=!0):s=!1),s||Aa(t)),Yp(t),s=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,Vm(s,a)?i=null:r!==null&&Vm(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=_0(e,t,OE,null,null,n),Co._currentValue=s),qr(e,t),fn(e,t,i,n),t.child;case 6:return e===null&&ne&&((e=n=He)&&(n=FA(n,t.pendingProps,Oi),n!==null?(t.stateNode=n,xn=t,He=null,e=!0):e=!1),e||Aa(t)),null;case 13:return TS(e,t,n);case 4:return ju(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=pr(t,null,i,n):fn(e,t,i,n),t.child;case 11:return Xv(e,t,t.type,t.pendingProps,n);case 7:return i=t.pendingProps,qr(e,t),fn(e,t,i,n),t.child;case 8:return fn(e,t,t.pendingProps.children,n),t.child;case 12:return fn(e,t,t.pendingProps.children,n),t.child;case 10:return $v(e,t,n);case 9:return s=t.type._context,i=t.pendingProps.children,fr(t),s=wn(s),i=i(s),t.flags|=1,fn(e,t,i,n),t.child;case 14:return Wv(e,t,t.type,t.pendingProps,n);case 15:return MS(e,t,t.type,t.pendingProps,n);case 19:return xm(e,t,n);case 31:return kE(e,t,n);case 22:return bS(e,t,n,t.pendingProps);case 24:return fr(t),i=wn(ln),e===null?(s=h0(),s===null&&(s=Ie,a=u0(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),t.memoizedState={parent:i,cache:s},d0(t),ha(t,ln,s)):((e.lanes&n)!==0&&(om(e,t),zl(t,null,null,n),Fl()),s=e.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),ha(t,ln,i)):(i=a.cache,ha(t,ln,i),i!==s.cache&&am(t,[ln],n,!0))),fn(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),i=t.pendingProps,i.name!=null&&i.name!=="auto"?t.flags|=e===null?18882560:18874368:ne&&Lh(t),e!==null&&e.memoizedProps.name!==i.name?t.flags|=4194816:qr(e,t),fn(e,t,i.children,n),t.child;case 29:throw t.pendingProps}throw Error(tt(156,t.tag))}function Us(e){e.flags|=4}function Ap(e,t,n,i,s){var a;if((a=(e.mode&32)!==0)&&(a=n===null?Ry(t,i):Ry(t,i)&&(i.src!==n.src||i.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(tM())e.flags|=8192;else throw lr=oh,f0}else e.flags&=-16777217}function ty(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!CM(t))if(tM())e.flags|=8192;else throw lr=oh,f0}function Tu(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Ky():536870912,e.lanes|=t,Mo|=t)}function Tl(e,t){if(!ne)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&1206910976,i|=s.flags&1206910976,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function qE(e,t,n){var i=t.pendingProps;switch(c0(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return ze(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Ps(ln),vo(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Xr(t)?Us(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Sp())),ze(t),null;case 26:var s=t.type,a=t.memoizedState;return e===null?(Us(t),a!==null?(ze(t),ty(t,a)):(ze(t),Ap(t,s,null,i,n))):a?a!==e.memoizedState?(Us(t),ze(t),ty(t,a)):(ze(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Us(t),ze(t),Ap(t,s,e,i,n)),null;case 27:if($u(t),n=ma.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Us(t);else{if(!i){if(t.stateNode===null)throw Error(tt(166));return ze(t),t.subtreeFlags&=-33554433,null}e=gs.current,Xr(t)?wv(t,e):(e=TM(s,i,n),t.stateNode=e,Us(t))}return ze(t),t.subtreeFlags&=-33554433,null;case 5:if($u(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Us(t);else{if(!i){if(t.stateNode===null)throw Error(tt(166));return ze(t),t.subtreeFlags&=-33554433,null}if(a=gs.current,Xr(t))wv(t,a);else{var r=ic(ma.current);switch(a){case 1:a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=r.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?r.createElement(s,{is:i.is}):r.createElement(s)}}a[An]=t,a[ei]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=a;t:switch(Nn(a,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Us(t)}}return ze(t),t.subtreeFlags&=-33554433,Ap(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Us(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(tt(166));if(e=ma.current,Xr(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=xn,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[An]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||fM(e.nodeValue,n)),e||Aa(t,!0)}else e=ic(e).createTextNode(i),e[An]=t,t.stateNode=e}return ze(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Xr(t),n!==null){if(e===null){if(!i)throw Error(tt(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(tt(557));e[An]=t}else ur(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),e=!1}else n=Sp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(hi(t),t):(hi(t),null);if((t.flags&128)!==0)throw Error(tt(558))}return ze(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=Xr(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(tt(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(tt(317));s[An]=t}else ur(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),s=!1}else s=Sp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(hi(t),t):(hi(t),null)}return hi(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Tu(t,t.updateQueue),ze(t),null);case 4:return vo(),e===null&&z0(t.stateNode.containerInfo),t.flags|=67108864,ze(t),null;case 10:return Ps(t.type),ze(t),null;case 19:if(m0(t),i=t.memoizedState,i===null)return ze(t),null;if(s=(t.flags&128)!==0,a=i.rendering,a===null)if(s)Tl(i,!1);else{if(tn!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=ch(e),a!==null){for(t.flags|=128,Tl(i,!1),e=a.updateQueue,t.updateQueue=e,Tu(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)wx(n,e),n=n.sibling;return $l(t,Rn.current&1|2),ne&&Ls(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&pi()>yh&&(t.flags|=128,s=!0,Tl(i,!1),t.lanes=4194304)}else{if(!s)if(e=ch(a),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,Tu(t,e),Tl(i,!0),i.tail===null&&i.tailMode!=="collapsed"&&i.tailMode!=="visible"&&!a.alternate&&!ne)return ze(t),null}else 2*pi()-i.renderingStartTime>yh&&n!==536870912&&(t.flags|=128,s=!0,Tl(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}if(i.tail!==null){e=i.tail;t:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break t}n=n.sibling}n=!0}return i.rendering=e,i.tail=e.sibling,i.renderingStartTime=pi(),e.sibling=null,a=Rn.current,a=s?a&1|2:a&1,i.tailMode==="visible"||i.tailMode==="collapsed"||!n||ne?$l(t,a):(n=a,Ve(Dn,t),Ve(Rn,n),In===null&&(In=t)),ne&&Ls(t,i.treeForkCount),e}return ze(t),null;case 22:case 23:return hi(t),p0(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),n=t.updateQueue,n!==null&&Tu(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&Cn(or),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ps(ln),ze(t),null;case 25:return null;case 30:return t.flags|=33554432,ze(t),null}throw Error(tt(156,t.tag))}function YE(e,t){switch(c0(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ps(ln),vo(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return $u(t),null;case 31:if(t.memoizedState!==null){if(hi(t),t.alternate===null)throw Error(tt(340));ur()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(hi(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(tt(340));ur()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return m0(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return vo(),null;case 10:return Ps(t.type),null;case 22:case 23:return hi(t),p0(),e!==null&&Cn(or),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ps(ln),null;case 25:return null;default:return null}}function AS(e,t){switch(c0(t),t.tag){case 3:Ps(ln),vo();break;case 26:case 27:case 5:$u(t);break;case 4:vo();break;case 31:t.memoizedState!==null&&hi(t);break;case 13:hi(t);break;case 19:m0(t);break;case 10:Ps(t.type);break;case 22:case 23:hi(t),p0(),e!==null&&Cn(or);break;case 24:Ps(ln)}}function gc(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){Ue(t,t.return,o)}}function Ca(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(f){Ue(s,l,f)}}}i=i.next}while(i!==a)}}catch(f){Ue(t,t.return,f)}}function wS(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Bx(t,n)}catch(i){Ue(e,e.return,i)}}}function CS(e,t,n){n.props=gr(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){Ue(e,t,i)}}function us(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:var s=e.stateNode,a=Fs(e.memoizedProps,s);(s.ref===null||s.ref.name!==a)&&(s.ref=vM(a)),i=s.ref;break;case 7:if(e.stateNode===null){var r=new yi(e);ti(e.child,!1,IA,r,void 0,void 0),e.stateNode=r}i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(o){Ue(e,t,o)}}function En(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){Ue(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){Ue(e,t,s)}else n.current=null}function ph(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)MM(e.stateNode,t[n])}function ey(e){for(var t=e.return;t!==null&&(U0(t)&&MM(e.stateNode,t.stateNode),!D0(t));)t=t.return}function Gl(e){for(var t=e.return;t!==null&&(U0(t)&&PA(e.stateNode,t.stateNode),!D0(t));)t=t.return}function D0(e){return e.tag===5||e.tag===3||e.tag===27}function U0(e){return e&&e.tag===7&&e.stateNode!==null}function Sm(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){Ue(e,e.return,s)}}function wp(e,t,n){try{var i=e.stateNode;_A(i,e.type,n,t),i[ei]=t}catch(s){Ue(e,e.return,s)}}function RS(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Da(e.type)||e.tag===4}function Cp(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||RS(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Da(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Mm(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(s,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(s),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ds)),ph(e,i),xe=!0;else if(s!==4&&(s===27&&(ph(e,i),i=null,Da(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Mm(e,t,n,i),e=e.sibling;e!==null;)Mm(e,t,n,i),e=e.sibling}function mh(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?n.insertBefore(s,t):n.appendChild(s),ph(e,i),xe=!0;else if(s!==4&&(s===27&&(ph(e,i),i=null,Da(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(mh(e,t,n,i),e=e.sibling;e!==null;)mh(e,t,n,i),e=e.sibling}function NS(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);Nn(t,i,n),t[An]=e,t[ei]=n}catch(a){Ue(e,e.return,a)}}var gh=!1,fi=null;function ny(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(gh=!0)}var hs=null;function iy(){var e=hs;return hs=null,e}var Qn=0;function Oo(e,t,n,i,s){return Qn=0,DS(e.child,t,n,i,s)}function DS(e,t,n,i,s){for(var a=!1;e!==null;){if(e.tag===5){var r=e.stateNode;if(i!==null){var o=Gm(r);i.push(o),o.view&&(a=!0)}else a||Gm(r).view&&(a=!0);gh=!0,mM(r,Qn===0?t:t+"_"+Qn,n),Qn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&s||DS(e.child,t,n,i,s)&&(a=!0));e=e.sibling}return a}function vs(e,t){for(;e!==null;)e.tag===5?gM(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||vs(e.child,t)),e=e.sibling}function Gu(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Gu(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(tt(544));var n=t.name;t=Xs(t.default,t.share),t!=="none"&&(Oo(e,n,t,null,!1)||vs(e.child,!1))}e=e.sibling}}function bm(e,t){if(e.tag===30){var n=e.stateNode,i=e.memoizedProps,s=Fs(i,n),a=Xs(i.default,n.paired?i.share:i.enter);a!=="none"?Oo(e,s,a,null,!1)?(Gu(e),n.paired||t||bo(e,i.onEnter)):vs(e.child,!1):Gu(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)bm(e,t),e=e.sibling;else Gu(e)}function Tm(e){if(fi!==null&&fi.size!==0){var t=fi;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,i=n.name;if(i!=null&&i!=="auto"){var s=t.get(i);if(s!==void 0){var a=Xs(n.default,n.share);if(a!=="none"&&(Oo(e,i,a,null,!1)?(a=e.stateNode,s.paired=a,a.paired=s,bo(e,n.onShare)):vs(e.child,!1)),t.delete(i),t.size===0)break}}}Tm(e)}e=e.sibling}}}function Em(e){if(e.tag===30){var t=e.memoizedProps,n=Fs(t,e.stateNode),i=fi!==null?fi.get(n):void 0,s=Xs(t.default,i!==void 0?t.share:t.exit);s!=="none"&&(Oo(e,n,s,null,!1)?i!==void 0?(s=e.stateNode,i.paired=s,s.paired=i,fi.delete(n),bo(e,t.onShare)):bo(e,t.onExit):vs(e.child,!1)),fi!==null&&Tm(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Em(e),e=e.sibling;else fi!==null&&Tm(e)}function US(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=Fs(t,e.stateNode);t=Xs(t.default,t.update),e.flags&=-5,t!=="none"&&Oo(e,n,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&US(e);e=e.sibling}}function Am(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,vs(e.child,!1))}Am(e)}e=e.sibling}}function ku(e){if(e.tag===30)e.stateNode.paired=null,vs(e.child,!1),Am(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)ku(e),e=e.sibling;else Am(e)}function LS(e){for(e=e.child;e!==null;)e.tag===30?vs(e.child,!1):(e.subtreeFlags&33554432)!==0&&LS(e),e=e.sibling}function L0(e,t,n,i,s,a,r){for(var o=!1;t!==null;){if(t.tag===5){var l=t.stateNode;if(a!==null&&Qn<a.length){var c=a[Qn],f=Gm(l);(c.view||f.view)&&(o=!0);var p;if(p=(e.flags&4)===0)if(f.clip)p=!0;else{p=c.rect;var u=f.rect;p=p.y!==u.y||p.x!==u.x||p.height!==u.height||p.width!==u.width}p&&(e.flags|=4),f.abs?f=!c.abs:(c=c.rect,f=f.rect,f=c.height!==f.height||c.width!==f.width),f&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&mM(l,Qn===0?n:n+"_"+Qn,s),o&&(e.flags&4)!==0||(hs===null&&(hs=[]),hs.push(l,Qn===0?i:i+"_"+Qn,t.memoizedProps)),Qn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&r?e.flags|=t.flags&32:L0(e,t.child,n,i,s,a,r)&&(o=!0));t=t.sibling}return o}function OS(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,i=e.stateNode,s=Fs(n,i),a=Xs(n.default,n.update);if(t){i=i.clones;var r=i===null?null:i.map(bA)}else r=e.memoizedState,e.memoizedState=null;i=e;var o=e.child;Qn=0,s=L0(i,o,s,s,a,r,!1),(e.flags&4)!==0&&s&&(t||bo(e,n.onUpdate))}else(e.subtreeFlags&33554432)!==0&&OS(e,t);e=e.sibling}}var _n=!1,Ee=!1,os=!1,Rp=!1,sy=typeof WeakSet=="function"?WeakSet:Set,vn=null,ls=!1,Ul=!1,_h=!1,wm=!1;function ZE(e,t,n){if(e=e.containerInfo,zm=Ro,e=yx(e),a0(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else t:{i=(i=e.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var a=s.anchorOffset,r=s.focusNode;s=s.focusOffset;try{i.nodeType,r.nodeType}catch{i=null;break t}var o=0,l=-1,c=-1,f=0,p=0,u=e,d=null;e:for(;;){for(var v;u!==i||a!==0&&u.nodeType!==3||(l=o+a),u!==r||s!==0&&u.nodeType!==3||(c=o+s),u.nodeType===3&&(o+=u.nodeValue.length),(v=u.firstChild)!==null;)d=u,u=v;for(;;){if(u===e)break e;if(d===i&&++f===a&&(l=o),d===r&&++p===s&&(c=o),(v=u.nextSibling)!==null)break;u=d,d=u.parentNode}u=v}i=l===-1||c===-1?null:{start:l,end:c}}else i=null}i=i||{start:0,end:0}}else i=null;for(Hm={focusedElem:e,selectionRange:i},Ro=!1,n=(n&335544064)===n,vn=t,t=n?9270:1024;vn!==null;){if(e=vn,n&&(i=e.deletions,i!==null))for(a=0;a<i.length;a++)n&&Em(i[a]);if(e.alternate===null&&(e.flags&2)!==0)n&&ny(e),Eu(n);else{if(e.tag===22){if(i=e.alternate,e.memoizedState!==null){i!==null&&i.memoizedState===null&&n&&Em(i),Eu(n);continue}else if(i!==null&&i.memoizedState!==null){n&&ny(e),Eu(n);continue}}i=e.child,(e.subtreeFlags&t)!==0&&i!==null?(i.return=e,vn=i):(n&&US(e),Eu(n))}}fi=null}function Eu(e){for(;vn!==null;){var t=vn,n=e,i=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((s&1024)!==0&&i!==null){n=void 0,s=i.memoizedProps,i=i.memoizedState;var a=t.stateNode;try{var r=gr(t.type,s);n=a.getSnapshotBeforeUpdate(r,i),a.__reactInternalSnapshotBeforeUpdate=n}catch(o){Ue(t,t.return,o)}}break;case 3:if((s&1024)!==0){if(i=t.stateNode.containerInfo,n=i.nodeType,n===9)km(i);else if(n===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":km(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&i!==null&&(n=Fs(i.memoizedProps,i.stateNode),s=t.memoizedProps,s=Xs(s.default,s.update),s!=="none"&&Oo(i,n,s,i.memoizedState=[],!0));break;default:if((s&1024)!==0)throw Error(tt(163))}if(i=t.sibling,i!==null){i.return=t.return,vn=i;break}vn=t.return}}function IS(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:cs(e,n),i&4&&gc(5,n);break;case 1:if(cs(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){Ue(n,n.return,r)}else{var s=gr(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){Ue(n,n.return,r)}}i&64&&wS(n),i&512&&us(n,n.return);break;case 3:if(cs(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Bx(e,t)}catch(r){Ue(n,n.return,r)}}break;case 27:t===null&&i&4&&NS(n);case 26:case 5:cs(e,n),t===null&&i&4&&Sm(n),i&512&&us(n,n.return);break;case 12:cs(e,n);break;case 31:cs(e,n),i&4&&zS(e,n);break;case 13:cs(e,n),i&4&&HS(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=rA.bind(null,n),zA(e,n))));break;case 22:if(i=n.memoizedState!==null||_n,!i){var a=t!==null&&t.memoizedState!==null||Ee;t=_n,s=Ee,_n=i,(Ee=a)&&!s?(i=2,(n.subtreeFlags&8772)!==0&&(i|=1),Wi(e,n,i)):cs(e,n),_n=t,Ee=s}break;case 30:cs(e,n),i&512&&us(n,n.return);break;case 7:i&512&&us(n,n.return);default:cs(e,n)}}function Cm(e,t){for(e=e.child;e!==null;)PS(e,t),e=e.sibling}function PS(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var i=n.style;typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"}else{var s=e.stateNode,a=e.memoizedProps.style,r=a!=null&&a.hasOwnProperty("display")?a.display:null;s.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(l){Ue(e,e.return,l)}Rm(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,xe=!0}catch(l){Ue(e,e.return,l)}break;case 18:try{var o=e.stateNode;t?xy(o,!0):xy(e.stateNode,!1)}catch(l){Ue(e,e.return,l)}break;case 22:case 23:e.memoizedState===null&&Cm(e,t);break;default:Cm(e,t)}}function Rm(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var n=e,i=t;switch(n.tag){case 4:PS(n,i);break t;case 22:n.memoizedState===null&&Rm(n,i);break t;default:Rm(n,i)}}e=e.sibling}}function BS(e){var t=e.alternate;t!==null&&(e.alternate=null,BS(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&wh(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var qe=null,Jn=!1;function Xi(e,t,n){for(n=n.child;n!==null;)FS(e,t,n),n=n.sibling}function FS(e,t,n){if(mi&&typeof mi.onCommitFiberUnmount=="function")try{mi.onCommitFiberUnmount(cc,n)}catch{}switch(n.tag){case 26:Ee||En(n,t),Xi(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!Ee&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ee||En(n,t),Gl(n);var i=qe,s=Jn;Da(n.type)&&(qe=n.stateNode,Jn=!1),Xi(e,t,n),EM(n.stateNode,n.type,n.memoizedProps),qe=i,Jn=s;break;case 5:Ee||En(n,t),Gl(n);case 6:if(n.tag===6&&Gl(n),i=qe,s=Jn,qe=null,Xi(e,t,n),qe=i,Jn=s,qe!==null)if(Jn)try{(qe.nodeType===9?qe.body:qe.nodeName==="HTML"?qe.ownerDocument.body:qe).removeChild(n.stateNode),xe=!0}catch(a){Ue(n,t,a)}else try{qe.removeChild(n.stateNode),xe=!0}catch(a){Ue(n,t,a)}break;case 18:qe!==null&&(Jn?(e=qe,yy(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),No(e)):yy(qe,n.stateNode));break;case 4:i=qe,s=Jn,qe=n.stateNode.containerInfo,Jn=!0,Xi(e,t,n),qe=i,Jn=s;break;case 0:case 11:case 14:case 15:Ca(2,n,t),Ee||Ca(4,n,t),Xi(e,t,n);break;case 1:Ee||(En(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&CS(n,t,i)),Xi(e,t,n);break;case 21:Xi(e,t,n);break;case 22:Ee=(i=Ee)||n.memoizedState!==null,Xi(e,t,n),Ee=i;break;case 30:En(n,t),Xi(e,t,n);break;case 7:Ee||En(n,t),Xi(e,t,n);break;default:Xi(e,t,n)}}function zS(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{No(e)}catch(n){Ue(t,t.return,n)}}}function HS(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{No(e)}catch(n){Ue(t,t.return,n)}}function JE(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new sy),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new sy),t;default:throw Error(tt(435,e.tag))}}function Au(e,t){var n=JE(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=oA.bind(null,e,i);i.then(s,s)}})}function kn(e,t,n){var i=t.deletions;if(i!==null)for(var s=0;s<i.length;s++){var a=i[s],r=e,o=t,l=o;t:for(;l!==null;){switch(l.tag){case 27:if(Da(l.type)){qe=l.stateNode,Jn=!1;break t}break;case 5:qe=l.stateNode,Jn=!1;break t;case 3:case 4:qe=l.stateNode.containerInfo,Jn=!0;break t}l=l.return}if(qe===null)throw Error(tt(160));FS(r,o,a),qe=null,Jn=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)VS(t,e,n),t=t.sibling}var qi=null;function VS(e,t,n){var i=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(s&4&&(i=e.updateQueue,i=i!==null?i.events:null,i!==null))for(var a=0;a<i.length;a++){var r=i[a];r.ref.impl=r.nextImpl}kn(t,e,n),Xn(e),s&4&&(Ca(3,e,e.return),gc(3,e),Ca(5,e,e.return));break;case 1:kn(t,e,n),Xn(e),s&512&&(Ee||i===null||En(i,i.return)),s&64&&_n&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(a=qi,kn(t,e,n),Xn(e),s&512&&(Ee||i===null||En(i,i.return)),s&4)if(s=i!==null?i.memoizedState:null,n=e.memoizedState,i===null)if(n===null)if(e.stateNode===null)if(_n)e.stateNode=pM(e.type,e.memoizedProps,t.containerInfo,e);else{t:{t=e.type,n=e.memoizedProps,s=a.ownerDocument||a;e:switch(t){case"title":i=s.getElementsByTagName("title")[0],(!i||i[fc]||i[An]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=s.createElement(t),s.head.insertBefore(i,s.querySelector("head > title"))),Nn(i,t,n),i[An]=e,yn(i),t=i;break t;case"link":if(a=Cy("link","href",s).get(t+(n.href||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){a.splice(r,1);break e}}i=s.createElement(t),Nn(i,t,n),s.head.appendChild(i);break;case"meta":if(a=Cy("meta","content",s).get(t+(n.content||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){a.splice(r,1);break e}}i=s.createElement(t),Nn(i,t,n),s.head.appendChild(i);break;default:throw Error(tt(468,t))}i[An]=e,yn(i),t=i}e.stateNode=t}else _n||qm(a,e.type,e.stateNode);else e.stateNode=wy(a,n,e.memoizedProps);else s!==n?(s===null?(t=i.stateNode,t===null||Ee||t.parentNode.removeChild(t)):s.count--,n===null?_n||qm(a,e.type,e.stateNode):wy(a,n,e.memoizedProps)):n===null&&e.stateNode!==null&&wp(e,e.memoizedProps,i.memoizedProps);break;case 27:kn(t,e,n),Xn(e),s&512&&(Ee||i===null||En(i,i.return)),i!==null&&s&4&&wp(e,e.memoizedProps,i.memoizedProps);break;case 5:if(a=os,os=!1,kn(t,e,n),os=a,Xn(e),s&512&&(Ee||i===null||En(i,i.return)),e.flags&32){t=e.stateNode;try{xo(t,""),xe=!0}catch(f){Ue(e,e.return,f)}}s&4&&e.stateNode!=null&&(t=e.memoizedProps,wp(e,t,i!==null?i.memoizedProps:t)),s&1024&&(Rp=!0);break;case 6:if(kn(t,e,n),Xn(e),s&4){if(e.stateNode===null)throw Error(tt(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,xe=!0}catch(f){Ue(e,e.return,f)}}break;case 3:if(xe=!1,Yu=null,a=qi,qi=sc(t.containerInfo),kn(t,e,n),qi=a,Xn(e),s&4&&i!==null&&i.memoizedState.isDehydrated)try{No(t.containerInfo)}catch(f){Ue(e,e.return,f)}Rp&&(Rp=!1,GS(e)),xe=!1;break;case 4:s=os,os=_n,i=uv(),a=qi,qi=sc(e.stateNode.containerInfo),kn(t,e,n),Xn(e),qi=a,xe&&Ul&&(_h=!0),xe=i,os=s;break;case 12:kn(t,e,n),Xn(e);break;case 31:kn(t,e,n),Xn(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Au(e,t)));break;case 13:kn(t,e,n),Xn(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(Hh=pi()),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Au(e,t)));break;case 22:a=e.memoizedState!==null,r=i!==null&&i.memoizedState!==null;var o=_n,l=Ee,c=os;_n=o||a,os=c||a,Ee=l||r,kn(t,e,n),Ee=l,os=c,_n=o,Xn(e),s&8192&&(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,!a||i===null||r||_n||Ee||(t=r||Ee,n=_n,i=Ee,_n=a||_n,Ee=t,aa(e,2),_n=n,Ee=i),!a&&os||Cm(e,a)),s&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,Au(e,n))));break;case 19:kn(t,e,n),Xn(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Au(e,t)));break;case 30:s&512&&(Ee||i===null||En(i,i.return)),s=uv(),a=Ul,r=(n&335544064)===n,o=e.memoizedProps,Ul=r&&Xs(o.default,o.update)!=="none",kn(t,e,n),Xn(e),r&&i!==null&&xe&&(e.flags|=4),Ul=a,xe=s;break;case 21:break;case 7:s&512&&(Ee||i===null||En(i,i.return)),i&&i.stateNode!==null&&(i.stateNode._fragmentFiber=e);default:kn(t,e,n),Xn(e)}}function Xn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(RS(i)){n=i;break}i=i.return}i=null;for(var s=e.return;s!==null;){if(U0(s)){var a=s.stateNode;i===null?i=[a]:i.push(a)}if(D0(s))break;s=s.return}var r=i;if(n==null)throw Error(tt(160));switch(n.tag){case 27:var o=n.stateNode,l=Cp(e);mh(e,l,o,r);break;case 5:var c=n.stateNode;n.flags&32&&(xo(c,""),n.flags&=-33);var f=Cp(e);mh(e,f,c,r);break;case 3:case 4:var p=n.stateNode.containerInfo,u=Cp(e);Mm(e,u,p,r);break;default:throw Error(tt(161))}}catch(d){Ue(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function GS(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;GS(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,Ro=!0,t.reset(),Ro=!1),e=e.sibling}}function Wr(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)kS(t,e),t=t.sibling;else OS(t,!1)}function kS(e,t){var n=e.alternate;if(n===null)bm(e,!1);else switch(e.tag){case 3:if(wm=ls=!1,iy(),Wr(t,e),!ls&&!_h){if(e=hs,e!==null)for(var i=0;i<e.length;i+=3){n=e[i];var s=e[i+1];gM(n,e[i+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+s+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),wm=!0}hs=null;break;case 5:Wr(t,e);break;case 4:i=ls,ls=!1,Wr(t,e),ls&&(_h=!0),ls=i;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?bm(e,!1):Wr(t,e));break;case 30:i=ls,s=iy(),ls=!1,Wr(t,e),ls&&(e.flags|=4);var a=e.memoizedProps,r=e.stateNode;t=Fs(a,r),r=Fs(n.memoizedProps,r);var o=Xs(a.default,a.update);o==="none"?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Qn=0,t=L0(e,n,t,r,o,a,!0),Qn!==(a===null?0:a.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(bo(e,e.memoizedProps.onUpdate),hs=s):s!==null&&(s.push.apply(s,hs),hs=s),ls=(e.flags&32)!==0?!0:i;break;default:Wr(t,e)}}function cs(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)IS(e,t.alternate,t),t=t.sibling}function aa(e,t){for(e=e.child;e!==null;){var n=e,i=t;switch(n.tag){case 0:case 11:case 14:case 15:Ca(4,n,n.return),aa(n,i);break;case 1:En(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&CS(n,n.return,s),aa(n,i);break;case 27:(i&2)!==0&&EM(n.stateNode,n.type,n.memoizedProps);case 5:En(n,n.return),n.tag!==5&&n.tag!==27||Gl(n),aa(n,i);break;case 6:Gl(n);break;case 26:En(n,n.return),s=n.stateNode,n.memoizedState!==null||s===null||Ee||s.parentNode.removeChild(s),aa(n,i);break;case 22:n.memoizedState===null&&aa(n,i);break;case 30:En(n,n.return),aa(n,i);break;case 7:En(n,n.return);default:aa(n,i)}e=e.sibling}}function Wi(e,t,n){for(n=(t.subtreeFlags&8772)!==0?n:n&-2,t=t.child;t!==null;){var i=t.alternate,s=e,a=t,r=a.flags,o=(n&1)!==0;switch(a.tag){case 0:case 11:case 15:Wi(s,a,n),gc(4,a);break;case 1:if(Wi(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(f){Ue(i,i.return,f)}if(i=a,s=i.updateQueue,s!==null){var l=i.stateNode;try{var c=s.shared.hiddenCallbacks;if(c!==null)for(s.shared.hiddenCallbacks=null,s=0;s<c.length;s++)Px(c[s],l)}catch(f){Ue(i,i.return,f)}}o&&r&64&&wS(a),us(a,a.return);break;case 27:(n&2)!==0&&NS(a);case 5:a.tag!==5&&a.tag!==27||ey(a),Wi(s,a,n),o&&i===null&&r&4&&Sm(a),us(a,a.return);break;case 6:ey(a);break;case 26:l=a.stateNode,a.memoizedState!==null||l===null||_n||qm(sc(l.ownerDocument),a.type,l),Wi(s,a,n),o&&i===null&&r&4&&Sm(a),us(a,a.return);break;case 12:Wi(s,a,n);break;case 31:Wi(s,a,n),o&&r&4&&zS(s,a);break;case 13:Wi(s,a,n),o&&r&4&&HS(s,a);break;case 22:a.memoizedState===null&&Wi(s,a,n),us(a,a.return);break;case 30:Wi(s,a,n),us(a,a.return);break;case 7:us(a,a.return);default:Wi(s,a,n)}t=t.sibling}}function O0(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&pc(n))}function I0(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&pc(e))}function Ci(e,t,n,i){var s=(n&335544064)===n;if(t.subtreeFlags&(s?10262:10256))for(t=t.child;t!==null;)XS(e,t,n,i),t=t.sibling;else s&&LS(t)}function XS(e,t,n,i){var s=(n&335544064)===n;s&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&ku(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:Ci(e,t,n,i),a&2048&&gc(9,t);break;case 1:Ci(e,t,n,i);break;case 3:Ci(e,t,n,i),s&&wm&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&pc(a)));break;case 12:if(a&2048){Ci(e,t,n,i),a=t.stateNode;try{var r=t.memoizedProps,o=r.id,l=r.onPostCommit;typeof l=="function"&&l(o,t.alternate===null?"mount":"update",a.passiveEffectDuration,-0)}catch(c){Ue(t,t.return,c)}}else Ci(e,t,n,i);break;case 31:Ci(e,t,n,i);break;case 13:Ci(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?(s&&o!==null&&o.memoizedState===null&&ku(o),r._visibility&2?Ci(e,t,n,i):kl(e,t)):(s&&o!==null&&o.memoizedState!==null&&ku(t),r._visibility&2?Ci(e,t,n,i):(r._visibility|=2,Yr(e,t,n,i,(t.subtreeFlags&10256)!==0||!1))),a&2048&&O0(o,t);break;case 24:Ci(e,t,n,i),a&2048&&I0(t.alternate,t);break;case 30:s&&(a=t.alternate,a!==null&&(vs(a.child,!0),vs(t.child,!0))),Ci(e,t,n,i);break;default:Ci(e,t,n,i)}}function Yr(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:Yr(a,r,o,l,s),gc(8,r);break;case 23:break;case 22:var f=r.stateNode;r.memoizedState!==null?f._visibility&2?Yr(a,r,o,l,s):kl(a,r):(f._visibility|=2,Yr(a,r,o,l,s)),s&&c&2048&&O0(r.alternate,r);break;case 24:Yr(a,r,o,l,s),s&&c&2048&&I0(r.alternate,r);break;default:Yr(a,r,o,l,s)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:kl(n,i),s&2048&&O0(i.alternate,i);break;case 24:kl(n,i),s&2048&&I0(i.alternate,i);break;default:kl(n,i)}t=t.sibling}}var nr=8192;function $a(e,t,n){if(e.subtreeFlags&nr)for(e=e.child;e!==null;)WS(e,t,n),e=e.sibling}function WS(e,t,n){switch(e.tag){case 26:$a(e,t,n),e.flags&nr&&(e.memoizedState!==null?$A(n,qi,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&Ny(n,e)));break;case 5:$a(e,t,n),e.flags&nr&&(e=e.stateNode,(t&335544128)===t&&Ny(n,e));break;case 3:case 4:var i=qi;qi=sc(e.stateNode.containerInfo),$a(e,t,n),qi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=nr,nr=16777216,$a(e,t,n),nr=i):$a(e,t,n));break;case 30:if((e.flags&nr)!==0&&(i=e.memoizedProps.name,i!=null&&i!=="auto")){var s=e.stateNode;s.paired=null,fi===null&&(fi=new Map),fi.set(i,s)}$a(e,t,n);break;default:$a(e,t,n)}}function qS(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function El(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];vn=i,ZS(i,e)}qS(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)YS(e),e=e.sibling}function YS(e){switch(e.tag){case 0:case 11:case 15:El(e),e.flags&2048&&Ca(9,e,e.return);break;case 3:El(e);break;case 12:El(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Xu(e)):El(e);break;default:El(e)}}function Xu(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];vn=i,ZS(i,e)}qS(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ca(8,t,t.return),Xu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Xu(t));break;default:Xu(t)}e=e.sibling}}function ZS(e,t){for(;vn!==null;){var n=vn;switch(n.tag){case 0:case 11:case 15:Ca(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:pc(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,vn=i;else t:for(n=e;vn!==null;){i=vn;var s=i.sibling,a=i.return;if(BS(i),i===n){vn=null;break t}if(s!==null){s.return=a,vn=s;break t}vn=a}}}var KE={getCacheForType:function(e){var t=wn(ln),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return wn(ln).controller.signal}},QE=typeof WeakMap=="function"?WeakMap:Map,Me=0,Ie=null,ae=null,le=0,Ne=0,ci=null,fa=!1,Io=!1,P0=!1,Gs=0,tn=0,Ra=0,cr=0,vh=0,di=0,Mo=0,Xl=null,Kn=null,Nm=!1,Hh=0,JS=0,yh=1/0,xh=null,Sa=null,Je=0,Zi=null,_r=null,_s=0,Dm=0,Um=null,KS=null,mo=null,go=null,_o=null,Wl=0,Wu=null;function _i(){return(Me&2)!==0&&le!==0?le&-le:Ht.T!==null?F0():tx()}function QS(){if(di===0)if((le&536870912)===0||ne){var e=du;du<<=1,(du&3932160)===0&&(du=262144),di=e}else di=536870912;return e=Dn.current,e!==null&&(e.flags|=32),di}function bo(e,t){if(t!=null){var n=e.stateNode,i=n.ref;i===null&&(i=n.ref=vM(Fs(e.memoizedProps,n))),go===null&&(go=[]),go.push(t.bind(null,i))}}function $n(e,t,n){(e===Ie&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)&&(To(e,0),da(e,le,di,!1)),hc(e,n),((Me&2)===0||e!==Ie)&&(e===Ie&&((Me&2)===0&&(cr|=n),tn===4&&da(e,le,di,!1)),xs(e))}function jS(e,t,n){if((Me&6)!==0)throw Error(tt(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||uc(e,t),s=i?tA(e,t):Np(e,t,!0),a=i;do{if(s===0){Io&&!i&&da(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!jE(n)){s=Np(e,t,!1),a=!1;continue}if(s===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;s=Xl;var l=o.current.memoizedState.isDehydrated;if(l&&(To(o,r).flags|=256),r=Np(o,r,!1),r!==2&&r!==6){if(P0&&!l){o.errorRecoveryDisabledLanes|=a,cr|=a,s=4;break t}a=Kn,Kn=s,a!==null&&(Kn===null?Kn=a:Kn.push.apply(Kn,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){To(e,0),da(e,t,0,!0);break}t:{switch(i=e,a=s,a){case 0:case 1:throw Error(tt(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:da(i,t,di,!fa);break t;case 2:Kn=null;break;case 3:case 5:break;default:throw Error(tt(329))}if((t&62914560)===t&&(s=Hh+300-pi(),10<s)){if(da(i,t,di,!fa),Ah(i,0,!0)!==0)break t;_s=t,i.timeoutHandle=H0(ay.bind(null,i,n,Kn,xh,Nm,t,di,cr,Mo,fa,a,"Throttled",-0,0),s);break t}ay(i,n,Kn,xh,Nm,t,di,cr,Mo,fa,a,null,-0,0)}}break}while(!0);xs(e)}function ay(e,t,n,i,s,a,r,o,l,c,f,p,u,d){e.timeoutHandle=-1;var v=t.subtreeFlags,b=(a&335544064)===a;if(p=null,(b||v&8192||(v&16785408)===16785408)&&(p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ds},fi=null,WS(t,a,p),b&&(v=p,b=e.containerInfo,b=(b.nodeType===9?b:b.ownerDocument).__reactViewTransition,b!=null&&(v.count++,v.waitingForViewTransition=!0,v=ac.bind(v),b.finished.then(v,v))),v=(a&62914560)===a?Hh-pi():(a&4194048)===a?JS-pi():0,v=tw(p,v),v!==null)){_s=a,e.cancelPendingCommit=v(oy.bind(null,e,t,a,n,i,s,r,o,l,c,f,p,null,u,d)),da(e,a,r,!c);return}oy(e,t,a,n,i,s,r,o,l,c,f,p)}function jE(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!vi(a(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function da(e,t,n,i){t=Jy(e,t),t&=~vh,t&=~cr,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var a=31-gi(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&Qy(e,n,t)}function Vh(){return(Me&6)===0?(_c(0,!1),!1):!0}function B0(){if(ae!==null){if(Ne===0)var e=ae.return;else e=ae,Os=Mr=null,x0(e),ho=null,jl=0,e=ae;for(;e!==null;)AS(e.alternate,e),e=e.return;ae=null}}function To(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,xA(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),_s=0,B0(),Ie=e,ae=n=Is(e.current,null),le=t,Ne=0,ci=null,fa=!1,Io=uc(e,t),P0=!1,Mo=di=vh=cr=Ra=tn=0,Kn=Xl=null,Nm=!1,Gs=Jy(e,t),Dh(),n}function $S(e,t){Jt=null,Ht.H=fh,t===Lo||t===Oh?(t=Uv(),Ne=3):t===f0?(t=Uv(),Ne=4):Ne=t===C0?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ci=t,ae===null&&(tn=1,dh(e,Li(t,e.current)))}function tM(){var e=Dn.current;return e===null?!0:(le&4194048)===le?In===null:(le&62914560)===le||(le&536870912)!==0?e===In:!1}function eM(){var e=Ht.H;return Ht.H=fh,e===null?fh:e}function nM(){var e=Ht.A;return Ht.A=KE,e}function Sh(){tn=4,fa||(le&4194048)!==le&&Dn.current!==null||(Io=!0),(Ra&134217727)===0&&(cr&134217727)===0||Ie===null||da(Ie,le,di,!1)}function Np(e,t,n){var i=Me;Me|=2;var s=eM(),a=nM();(Ie!==e||le!==t)&&(xh=null,To(e,t)),t=!1;var r=tn;t:do try{if(Ne!==0&&ae!==null){var o=ae,l=ci;switch(Ne){case 8:B0(),r=6;break t;case 3:case 2:case 9:case 6:Dn.current===null&&(t=!0);var c=Ne;if(Ne=0,ci=null,ro(e,o,l,c),n&&Io){r=0;break t}break;default:c=Ne,Ne=0,ci=null,ro(e,o,l,c)}}$E(),r=tn;break}catch(f){$S(e,f)}while(!0);return t&&e.shellSuspendCounter++,Os=Mr=null,Me=i,Ht.H=s,Ht.A=a,ae===null&&(Ie=null,le=0,Dh()),r}function $E(){for(;ae!==null;)iM(ae)}function tA(e,t){var n=Me;Me|=2;var i=eM(),s=nM();Ie!==e||le!==t?(xh=null,yh=pi()+500,To(e,t)):Io=uc(e,t);t:do try{if(Ne!==0&&ae!==null){t=ae;var a=ci;e:switch(Ne){case 1:Ne=0,ci=null,ro(e,t,a,1);break;case 2:case 9:if(Dv(a)){Ne=0,ci=null,ry(t);break}t=function(){Ne!==2&&Ne!==9||Ie!==e||(Ne=7),xs(e)},a.then(t,t);break t;case 3:Ne=7;break t;case 4:Ne=5;break t;case 7:Dv(a)?(Ne=0,ci=null,ry(t)):(Ne=0,ci=null,ro(e,t,a,7));break;case 5:var r=null;switch(ae.tag){case 26:r=ae.memoizedState;case 5:case 27:var o=ae;if(r?CM(r):o.stateNode.complete){Ne=0,ci=null;var l=o.sibling;if(l!==null)ae=l;else{var c=o.return;c!==null?(ae=c,Gh(c)):ae=null}break e}}Ne=0,ci=null,ro(e,t,a,5);break;case 6:Ne=0,ci=null,ro(e,t,a,6);break;case 8:B0(),tn=6;break t;default:throw Error(tt(462))}}eA();break}catch(f){$S(e,f)}while(!0);return Os=Mr=null,Ht.H=i,Ht.A=s,Me=n,ae!==null?0:(Ie=null,le=0,Dh(),tn)}function eA(){for(;ae!==null&&!vT();)iM(ae)}function iM(e){var t=ES(e.alternate,e,Gs);e.memoizedProps=e.pendingProps,t===null?Gh(e):ae=t}function ry(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Zv(n,t,t.pendingProps,t.type,void 0,le);break;case 11:t=Zv(n,t,t.pendingProps,t.type.render,t.ref,le);break;case 5:x0(t);var i=t;i===xn&&(ne?(ah(i),i.tag===5&&i.stateNode!=null&&(He=i.stateNode)):(ah(i),ne=!0));default:AS(n,t),t=ae=wx(t,Gs),t=ES(n,t,Gs)}e.memoizedProps=e.pendingProps,t===null?Gh(e):ae=t}function ro(e,t,n,i){Os=Mr=null,x0(t),ho=null,jl=0;var s=t.return;try{if(GE(e,s,t,n,le)){tn=1,dh(e,Li(n,e.current)),ae=null;return}}catch(a){if(s!==null)throw ae=s,a;tn=1,dh(e,Li(n,e.current)),ae=null;return}t.flags&32768?(ne||i===1?e=!0:Io||(le&536870912)!==0?e=!1:(fa=e=!0,(i===2||i===9||i===3||i===6)&&(i=Dn.current,i!==null&&i.tag===13&&(i.flags|=16384))),sM(t,e)):Gh(t)}function Gh(e){var t=e;do{if((t.flags&32768)!==0){sM(t,fa);return}e=t.return;var n=qE(t.alternate,t,Gs);if(n!==null){ae=n;return}if(t=t.sibling,t!==null){ae=t;return}ae=t=e}while(t!==null);tn===0&&(tn=5)}function sM(e,t){do{var n=YE(e.alternate,e);if(n!==null){n.flags&=32767,ae=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ae=e;return}ae=e=n}while(e!==null);tn=6,ae=null}function oy(e,t,n,i,s,a,r,o,l,c,f,p){e.cancelPendingCommit=null;do kh();while(Je!==0);if((Me&6)!==0)throw Error(tt(327));if(t!==null){if(t===e.current)throw Error(tt(177));e===Ie&&(ae=Ie=null,le=0),_r=t,Zi=e,_s=n,Um=s,KS=i,nA(e,t,n,r,o,l,p)}}function nA(e,t,n,i,s,a,r){var o=t.lanes|t.childLanes;if(Dm=o,o|=r0,CT(e,n,o,i,s,a),go=null,(n&335544064)===n?(_o=NE(e),i=10262):(_o=null,i=10256),(t.subtreeFlags&i)!==0||(t.flags&i)!==0?(e.callbackNode=null,e.callbackPriority=0,lA(th,function(){return Pm(),null})):(e.callbackNode=null,e.callbackPriority=0),gh=!1,i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Ht.T,Ht.T=null,s=be.p,be.p=2,a=Me,Me|=4;try{ZE(e,t,n)}finally{Me=a,be.p=s,Ht.T=i}}Je=1,gh?mo=AA(r,e.containerInfo,_o,Lm,Om,sA,Im,Pm,iA,null,null):(Lm(),Om(),Im())}function iA(e){if(Je!==0){var t=Zi.onRecoverableError;t(e,{componentStack:null})}}function sA(){Je===3&&(Je=0,kS(_r,Zi),Je=4)}function Lm(){if(Je===1){Je=0;var e=Zi,t=_r,n=_s,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=Ht.T,Ht.T=null;var s=be.p;be.p=2;var a=Me;Me|=4;try{Ul=_h=!1,VS(t,e,n),n=Hm;var r=yx(e.containerInfo),o=n.focusedElem,l=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&vx(o.ownerDocument.documentElement,o)){if(l!==null&&a0(o)){var c=l.start,f=l.end;if(f===void 0&&(f=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(f,o.value.length);else{var p=o.ownerDocument||document,u=p&&p.defaultView||window;if(u.getSelection){var d=u.getSelection(),v=o.textContent.length,b=Math.min(l.start,v),m=l.end===void 0?b:Math.min(l.end,v);!d.extend&&b>m&&(r=m,m=b,b=r);var h=bv(o,b),g=bv(o,m);if(h&&g&&(d.rangeCount!==1||d.anchorNode!==h.node||d.anchorOffset!==h.offset||d.focusNode!==g.node||d.focusOffset!==g.offset)){var M=p.createRange();M.setStart(h.node,h.offset),d.removeAllRanges(),b>m?(d.addRange(M),d.extend(g.node,g.offset)):(M.setEnd(g.node,g.offset),d.addRange(M))}}}}for(p=[],d=o;d=d.parentNode;)d.nodeType===1&&p.push({element:d,left:d.scrollLeft,top:d.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<p.length;o++){var y=p[o];y.element.scrollLeft=y.left,y.element.scrollTop=y.top}}Ro=!!zm,Hm=zm=null}finally{Me=a,be.p=s,Ht.T=i}}e.current=t,Je=2}}function Om(){if(Je===2){Je=0;var e=Zi,t=_r,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Ht.T,Ht.T=null;var i=be.p;be.p=2;var s=Me;Me|=4;try{IS(e,t.alternate,t)}finally{Me=s,be.p=i,Ht.T=n}}Je=3}}function Im(){if(Je===4||Je===3){Je=0;var e=mo;mo=null,yT();var t=Zi,n=_r,i=_s,s=KS,a=(i&335544064)===i?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?Je=5:(Je=0,_r=Zi=null,aM(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(Sa=null),$m(i),n=n.stateNode,mi&&typeof mi.onCommitFiberRoot=="function")try{mi.onCommitFiberRoot(cc,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=Ht.T,a=be.p,be.p=2,Ht.T=null;try{for(var r=t.onRecoverableError,o=0;o<s.length;o++){var l=s[o];r(l.value,{componentStack:l.stack})}}finally{Ht.T=n,be.p=a}}if(s=go,r=_o,_o=null,s!==null&&(go=null,r===null&&(r=[]),e!==null))for(l=0;l<s.length;l++)n=(0,s[l])(r),n!==void 0&&e.finished.finally(n);(_s&3)!==0&&kh(),xs(t),a=t.pendingLanes,(i&261930)!==0&&(a&42)!==0?t===Wu?Wl++:(Wl=0,Wu=t):(Wl=0,Wu=null),_c(0,!1)}}function aM(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,pc(t)))}function kh(){return mo!==null&&(mo.skipTransition(),mo=null),Lm(),Om(),Im(),Pm()}function Pm(){if(Je!==5)return!1;var e=Zi,t=Dm;Dm=0;var n=$m(_s),i=Ht.T,s=be.p;try{be.p=32>n?32:n,Ht.T=null,n=Um,Um=null;var a=Zi,r=_s;if(Je=0,_r=Zi=null,_s=0,(Me&6)!==0)throw Error(tt(331));var o=Me;if(Me|=4,YS(a.current),XS(a,a.current,r,n),Me=o,_c(0,!1),mi&&typeof mi.onPostCommitFiberRoot=="function")try{mi.onPostCommitFiberRoot(cc,a)}catch{}return!0}finally{be.p=s,Ht.T=i,aM(e,t)}}function ly(e,t,n){t=Li(n,t),t=mm(e.stateNode,t,2),e=va(e,t,2),e!==null&&(hc(e,2),xs(e))}function Ue(e,t,n){if(e.tag===3)ly(e,e,n);else for(;t!==null;){if(t.tag===3){ly(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Sa===null||!Sa.has(i))){e=Li(n,e),n=xS(2),i=va(t,n,2),i!==null&&(SS(n,i,t,e),hc(i,2),xs(i));break}}t=t.return}}function Dp(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new QE;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(P0=!0,s.add(n),e=aA.bind(null,e,t,n),t.then(e,e))}function aA(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ie===e&&(le&n)===n&&((tn===4||tn===3&&(le&62914560)===le&&300>pi()-Hh)&&(Me&2)===0?To(e,0):vh|=n,Mo===le&&(Mo=0)),xs(e)}function rM(e,t){t===0&&(t=Ky()),e=Sr(e,t),e!==null&&(hc(e,t),xs(e))}function rA(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),rM(e,n)}function oA(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(tt(314))}i!==null&&i.delete(t),rM(e,n)}function lA(e,t){return Qm(e,t)}var Eo=null,Zr=null,Bm=!1,Mh=!1,Up=!1,pa=0;function xs(e){e!==Zr&&e.next===null&&(Zr===null?Eo=Zr=e:Zr=Zr.next=e),Mh=!0,Bm||(Bm=!0,uA())}function _c(e,t){if(!Up&&Mh){Up=!0;do for(var n=!1,i=Eo;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-gi(42|e)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,cy(i,a))}else a=le,a=Ah(i,i===Ie?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||uc(i,a)||(n=!0,cy(i,a));i=i.next}while(n);Up=!1}}function cA(){oM()}function oM(){Mh=Bm=!1;var e=0;pa!==0&&yA()&&(e=pa);for(var t=pi(),n=null,i=Eo;i!==null;){var s=i.next,a=lM(i,t);a===0?(i.next=null,n===null?Eo=s:n.next=s,s===null&&(Zr=n)):(n=i,(e!==0||(a&3)!==0)&&(Mh=!0)),i=s}Je!==0&&Je!==5||_c(e,!1),pa!==0&&(pa=0)}function lM(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-gi(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=wT(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(t=Ie,n=le,n=Ah(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&up(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||uc(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&up(i),$m(n)){case 2:case 8:n=Yy;break;case 32:n=th;break;case 268435456:n=Zy;break;default:n=th}return i=cM.bind(null,e),n=Qm(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&up(i),e.callbackPriority=2,e.callbackNode=null,2}function cM(e,t){if(Je!==0&&Je!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(kh()&&e.callbackNode!==n)return null;var i=le;return i=Ah(e,e===Ie?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(jS(e,i,t),lM(e,pi()),e.callbackNode!=null&&e.callbackNode===n?cM.bind(null,e):null)}function cy(e,t){if(kh())return null;jS(e,t,!0)}function uA(){SA(function(){(Me&6)!==0?Qm(qy,cA):oM()})}function F0(){if(pa===0){var e=dr;e===0&&(e=fu,fu<<=1,(fu&261888)===0&&(fu=256)),pa=e}return pa}function uy(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Lu(e)}function hA(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var a=uy((s[ei]||null).action),r=i.submitter;r&&(t=(t=r[ei]||null)?uy(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new Ch("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(pa!==0){var l=new FormData(s,r);dm(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=new FormData(s,r),dm(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(wu=0;wu<nm.length;wu++)Cu=nm[wu],hy=Cu.toLowerCase(),fy=Cu[0].toUpperCase()+Cu.slice(1),Ji(hy,"on"+fy);var Cu,hy,fy,wu;Ji(Sx,"onAnimationEnd");Ji(Mx,"onAnimationIteration");Ji(bx,"onAnimationStart");Ji("dblclick","onDoubleClick");Ji("focusin","onFocus");Ji("focusout","onBlur");Ji(ME,"onTransitionRun");Ji(bE,"onTransitionStart");Ji(TE,"onTransitionCancel");Ji(Tx,"onTransitionEnd");yo("onMouseEnter",["mouseout","mouseover"]);yo("onMouseLeave",["mouseout","mouseover"]);yo("onPointerEnter",["pointerout","pointerover"]);yo("onPointerLeave",["pointerout","pointerover"]);yr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));yr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));yr("onBeforeInput",["compositionend","keypress","textInput","paste"]);yr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));yr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));yr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ec="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ec));function uM(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(f){nh(f)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(f){nh(f)}s.currentTarget=null,a=l}}}}function se(e,t){var n=t[rv];n===void 0&&(n=t[rv]=new Set);var i=e+"__bubble";n.has(i)||(hM(t,e,2,!1),n.add(i))}function Lp(e,t,n){var i=0;t&&(i|=4),hM(n,e,i,t)}var Ru="_reactListening"+Math.random().toString(36).slice(2);function z0(e){if(!e[Ru]){e[Ru]=!0,nx.forEach(function(n){n!=="selectionchange"&&(fA.has(n)||Lp(n,!1,e),Lp(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ru]||(t[Ru]=!0,Lp("selectionchange",!1,t))}}function hM(e,t,n,i){switch(IM(t)){case 2:var s=sw;break;case 8:s=aw;break;default:s=q0}n=s.bind(null,t,n,e),s=void 0,!jp||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Op(e,t,n,i,s){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=ir(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}ux(function(){var c=a,f=e0(n),p=[];t:{var u=Ex.get(e);if(u!==void 0){var d=Ch,v=e;switch(e){case"keypress":if(Iu(n)===0)break t;case"keydown":case"keyup":d=jT;break;case"focusin":v="focus",d=gp;break;case"focusout":v="blur",d=gp;break;case"beforeblur":case"afterblur":d=gp;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=pv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=HT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=iE;break;case Sx:case Mx:case bx:d=kT;break;case Tx:d=aE;break;case"scroll":case"scrollend":d=FT;break;case"wheel":d=oE;break;case"copy":case"cut":case"paste":d=WT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=gv;break;case"submit":d=eE;break;case"toggle":case"beforetoggle":d=cE}var b=(t&4)!==0,m=!b&&(e==="scroll"||e==="scrollend"),h=b?u!==null?u+"Capture":null:u;b=[];for(var g=c,M;g!==null;){var y=g;if(M=y.stateNode,y=y.tag,y!==5&&y!==26&&y!==27||M===null||h===null||(y=Yl(g,h),y!=null&&b.push(nc(g,y,M))),m)break;g=g.return}0<b.length&&(u=new d(u,v,null,n,f),p.push({event:u,listeners:b}))}}if((t&7)===0){t:{if(d=e==="mouseover"||e==="pointerover",u=e==="mouseout"||e==="pointerout",d&&n!==Qp&&(v=n.relatedTarget||n.fromElement)&&(ir(v)||v[Do]))break t;(u||d)&&(v=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,u?(d=n.relatedTarget||n.toElement,u=c,d=d?ir(d):null,d!==null&&(m=lc(d),b=d.tag,d!==m||b!==5&&b!==27&&b!==6)&&(d=null)):(u=null,d=c),u!==d&&(b=pv,y="onMouseLeave",h="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(b=gv,y="onPointerLeave",h="onPointerEnter",g="pointer"),m=u==null?v:Nl(u),M=d==null?v:Nl(d),v=new b(y,g+"leave",u,n,f),v.target=m,v.relatedTarget=M,y=null,ir(f)===c&&(b=new b(h,g+"enter",d,n,f),b.target=M,b.relatedTarget=m,y=b),m=y,b=u&&d?zp(u,d,dA):null,u!==null&&dy(p,v,u,b,!1),d!==null&&m!==null&&dy(p,m,d,b,!0)))}t:{if(u=c?Nl(c):window,d=u.nodeName&&u.nodeName.toLowerCase(),d==="select"||d==="input"&&u.type==="file")var T=xv;else if(yv(u))if(gx)T=yE;else{T=_E;var E=gE}else d=u.nodeName,!d||d.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&t0(c.elementType)&&(T=xv):T=vE;if(T&&(T=T(e,c))){mx(p,T,n,f);break t}E&&E(e,u,c)}switch(E=c?Nl(c):window,e){case"focusin":(yv(E)||E.contentEditable==="true")&&(to=E,tm=c,Il=null);break;case"focusout":Il=tm=to=null;break;case"mousedown":em=!0;break;case"contextmenu":case"mouseup":case"dragend":em=!1,Tv(p,n,f);break;case"selectionchange":if(SE)break;case"keydown":case"keyup":Tv(p,n,f)}var w;if(s0)t:{switch(e){case"compositionstart":var S="onCompositionStart";break t;case"compositionend":S="onCompositionEnd";break t;case"compositionupdate":S="onCompositionUpdate";break t}S=void 0}else $r?dx(e,n)&&(S="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(fx&&n.locale!=="ko"&&($r||S!=="onCompositionStart"?S==="onCompositionEnd"&&$r&&(w=hx()):(ua=f,n0="value"in ua?ua.value:ua.textContent,$r=!0)),E=bh(c,S),0<E.length&&(S=new mv(S,e,null,n,f),p.push({event:S,listeners:E}),w?S.data=w:(w=px(n),w!==null&&(S.data=w)))),(w=hE?fE(e,n):dE(e,n))&&(S=bh(c,"onBeforeInput"),0<S.length&&(E=new mv("onBeforeInput","beforeinput",null,n,f),p.push({event:E,listeners:S}),E.data=w)),hA(p,e,c,n,f)}uM(p,t)})}function nc(e,t,n){return{instance:e,listener:t,currentTarget:n}}function bh(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=Yl(e,n),s!=null&&i.unshift(nc(e,s,a)),s=Yl(e,t),s!=null&&i.push(nc(e,s,a))),e.tag===3)return i;e=e.return}return[]}function dA(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function dy(e,t,n,i,s){for(var a=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=Yl(n,a),c!=null&&r.unshift(nc(n,c,l))):s||(c=Yl(n,a),c!=null&&r.push(nc(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var pA=/\r\n?/g,mA=/\u0000|\uFFFD/g;function py(e){return(typeof e=="string"?e:""+e).replace(pA,`
`).replace(mA,"")}function fM(e,t){return t=py(t),py(e)===t}function De(e,t,n,i,s,a){switch(n){case"children":if(typeof i=="string")t==="body"||t==="textarea"&&i===""||xo(e,i);else if(typeof i=="number"||typeof i=="bigint")t!=="body"&&xo(e,""+i);else return;break;case"className":mu(e,"class",i);break;case"tabIndex":mu(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":mu(e,n,i);break;case"style":cx(e,i,a);return;case"data":if(t!=="object"){mu(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Lu(i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&De(e,t,"name",s.name,s,null),De(e,t,"formEncType",s.formEncType,s,null),De(e,t,"formMethod",s.formMethod,s,null),De(e,t,"formTarget",s.formTarget,s,null)):(De(e,t,"encType",s.encType,s,null),De(e,t,"method",s.method,s,null),De(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Lu(i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=ds);return;case"onScroll":i!=null&&se("scroll",e);return;case"onScrollEnd":i!=null&&se("scrollend",e);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(tt(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(tt(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Lu(i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":se("beforetoggle",e),se("toggle",e),Uu(e,"popover",i);break;case"xlinkActuate":Ds(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Ds(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Ds(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Ds(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Ds(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Ds(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Ds(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Ds(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Ds(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Uu(e,"is",i);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=PT.get(n)||n,Uu(e,n,i);else return}xe=!0}function Fm(e,t,n,i,s,a){switch(n){case"style":cx(e,i,a);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(tt(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(tt(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"children":if(typeof i=="string")xo(e,i);else if(typeof i=="number"||typeof i=="bigint")xo(e,""+i);else return;break;case"onScroll":i!=null&&se("scroll",e);return;case"onScrollEnd":i!=null&&se("scrollend",e);return;case"onClick":i!=null&&(e.onclick=ds);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!ix.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),a=n.slice(2,s?n.length-7:void 0),t=e[ei]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(a,t,s),typeof i=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(a,i,s);break t}xe=!0,n in e?e[n]=i:i===!0?e.setAttribute(n,""):Uu(e,n,i)}return}xe=!0}function Nn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":se("error",e),se("load",e);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(tt(137,t));default:De(e,t,a,r,n,null)}}s&&De(e,t,"srcSet",n.srcSet,n,null),i&&De(e,t,"src",n.src,n,null);return;case"input":se("invalid",e);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var f=n[i];if(f!=null)switch(i){case"name":s=f;break;case"type":r=f;break;case"checked":l=f;break;case"defaultChecked":c=f;break;case"value":a=f;break;case"defaultValue":o=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(tt(137,t));break;default:De(e,t,i,f,n,null)}}rx(e,a,o,l,c,r,s,!1);return;case"select":se("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:De(e,t,s,o,n,null)}t=a,n=r,e.multiple=!!i,t!=null?lo(e,!!i,t,!1):n!=null&&lo(e,!!i,n,!0);return;case"textarea":se("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(tt(91));break;default:De(e,t,r,o,n,null)}lx(e,i,s,a);return;case"option":for(l in n)n.hasOwnProperty(l)&&(i=n[l],i!=null)&&(l==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":De(e,t,l,i,n,null));return;case"dialog":se("beforetoggle",e),se("toggle",e),se("cancel",e),se("close",e);break;case"iframe":case"object":se("load",e);break;case"video":case"audio":for(i=0;i<ec.length;i++)se(ec[i],e);break;case"image":se("error",e),se("load",e);break;case"details":se("toggle",e);break;case"embed":case"source":case"link":se("error",e),se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(tt(137,t));default:De(e,t,c,i,n,null)}return;default:if(t0(t)){for(f in n)n.hasOwnProperty(f)&&(i=n[f],i!==void 0&&Fm(e,t,f,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&De(e,t,o,i,n,null))}var gA={};function _A(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,f=null;for(d in n){var p=n[d];if(n.hasOwnProperty(d)&&p!=null)switch(d){case"checked":break;case"value":break;case"defaultValue":l=p;default:i.hasOwnProperty(d)||De(e,t,d,null,i,p)}}for(var u in i){var d=i[u];if(p=n[u],i.hasOwnProperty(u)&&(d!=null||p!=null))switch(u){case"type":d!==p&&(xe=!0),a=d;break;case"name":d!==p&&(xe=!0),s=d;break;case"checked":d!==p&&(xe=!0),c=d;break;case"defaultChecked":d!==p&&(xe=!0),f=d;break;case"value":d!==p&&(xe=!0),r=d;break;case"defaultValue":d!==p&&(xe=!0),o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(tt(137,t));break;default:d!==p&&De(e,t,u,d,i,p)}}Kp(e,r,o,l,c,f,a,s);return;case"select":d=r=o=u=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":d=l;default:i.hasOwnProperty(a)||De(e,t,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":a!==l&&(xe=!0),u=a;break;case"defaultValue":a!==l&&(xe=!0),o=a;break;case"multiple":a!==l&&(xe=!0),r=a;default:a!==l&&De(e,t,s,a,i,l)}t=o,n=r,i=d,u!=null?lo(e,!!n,u,!1):!!i!=!!n&&(t!=null?lo(e,!!n,t,!0):lo(e,!!n,n?[]:"",!1));return;case"textarea":d=u=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:De(e,t,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":s!==a&&(xe=!0),u=s;break;case"defaultValue":s!==a&&(xe=!0),d=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(tt(91));break;default:s!==a&&De(e,t,r,s,i,a)}ox(e,u,d);return;case"option":for(var v in n)u=n[v],n.hasOwnProperty(v)&&u!=null&&!i.hasOwnProperty(v)&&(v==="selected"?e.selected=!1:De(e,t,v,null,i,u));for(l in i)u=i[l],d=n[l],i.hasOwnProperty(l)&&u!==d&&(u!=null||d!=null)&&(l==="selected"?(u!==d&&(xe=!0),e.selected=u&&typeof u!="function"&&typeof u!="symbol"):De(e,t,l,u,i,d));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var b in n)u=n[b],n.hasOwnProperty(b)&&u!=null&&!i.hasOwnProperty(b)&&De(e,t,b,null,i,u);for(c in i)if(u=i[c],d=n[c],i.hasOwnProperty(c)&&u!==d&&(u!=null||d!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(tt(137,t));break;default:De(e,t,c,u,i,d)}return;default:if(t0(t)){for(var m in n)u=n[m],n.hasOwnProperty(m)&&u!==void 0&&!i.hasOwnProperty(m)&&Fm(e,t,m,void 0,i,u);for(f in i)u=i[f],d=n[f],!i.hasOwnProperty(f)||u===d||u===void 0&&d===void 0||Fm(e,t,f,u,i,d);return}}for(var h in n)u=n[h],n.hasOwnProperty(h)&&u!=null&&!i.hasOwnProperty(h)&&De(e,t,h,null,i,u);for(p in i)u=i[p],d=n[p],!i.hasOwnProperty(p)||u===d||u==null&&d==null||De(e,t,p,u,i,d)}function my(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function vA(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],a=s.transferSize,r=s.initiatorType,o=s.duration;if(a&&o&&my(r)){for(r=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var f=l.transferSize,p=l.initiatorType;f&&my(p)&&(l=l.responseEnd,r+=f*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(a+r)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var zm=null,Hm=null;function ic(e){return e.nodeType===9?e:e.ownerDocument}function gy(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function dM(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function pM(e,t,n,i){return n=ic(n).createElement(e),n[An]=i,n[ei]=t,Nn(n,e,t),yn(n),n}function Vm(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ip=null;function yA(){var e=window.event;return e&&e.type==="popstate"?e===Ip?!1:(Ip=e,!0):(Ip=null,!1)}var H0=typeof setTimeout=="function"?setTimeout:void 0,xA=typeof clearTimeout=="function"?clearTimeout:void 0,_y=typeof Promise=="function"?Promise:void 0,vy=typeof requestAnimationFrame=="function"?requestAnimationFrame:H0,SA=typeof queueMicrotask=="function"?queueMicrotask:typeof _y<"u"?function(e){return _y.resolve(null).then(e).catch(MA)}:H0;function MA(e){setTimeout(function(){throw e})}function Da(e){return e==="head"}function yy(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),No(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Bp(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Bp(n);for(var a=n.firstChild;a;){var r=a.nextSibling,o=a.nodeName;a[fc]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n==="body"&&Bp(e.ownerDocument.body);n=s}while(n);No(t)}function xy(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function mM(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var i=1;else for(var s=i=0;s<t.length;s++){var a=t[s];0<a.width&&0<a.height&&i++}i===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function gM(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function _M(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Gm(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return _M(t,n,e)}function bA(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return _M(t,n,e)}function TA(e){return e.documentElement.clientHeight}function EA(e){this.addEventListener("load",e),this.addEventListener("error",e)}function AA(e,t,n,i,s,a,r,o,l){var c=t.nodeType===9?t:t.ownerDocument;try{var f=c.startViewTransition({update:function(){var u=c.defaultView,d=u.navigation&&u.navigation.transition,v=c.fonts.status;i();var b=[];if(v==="loaded"&&(TA(c),c.fonts.status==="loading"&&b.push(c.fonts.ready)),v=b.length,e!==null)for(var m=e.suspenseyImages,h=0,g=0;g<m.length;g++){var M=m[g];if(!M.complete){var y=M.getBoundingClientRect();if(0<y.bottom&&0<y.right&&y.top<u.innerHeight&&y.left<u.innerWidth){if(h+=RM(M),h>Zu){b.length=v;break}M=new Promise(EA.bind(M)),b.push(M)}}}if(0<b.length)return u=Promise.race([Promise.all(b),new Promise(function(T){return setTimeout(T,500)})]).then(s,s),(d?Promise.allSettled([d.finished,u]):u).then(a,a);if(s(),d)return d.finished.then(a,a);a()},types:n});c.__reactViewTransition=f;var p=[];return f.ready.then(function(){for(var u=c.documentElement.getAnimations({subtree:!0}),d=0;d<u.length;d++){var v=u[d],b=v.effect,m=b.pseudoElement;if(m!=null&&m.startsWith("::view-transition")){p.push(v),v=b.getKeyframes();for(var h=m=void 0,g=!0,M=0;M<v.length;M++){var y=v[M],T=y.width;if(m===void 0)m=T;else if(m!==T){g=!1;break}if(T=y.height,h===void 0)h=T;else if(h!==T){g=!1;break}delete y.width,delete y.height,y.transform==="none"&&delete y.transform}g&&m!==void 0&&h!==void 0&&(b.setKeyframes(v),g=getComputedStyle(b.target,b.pseudoElement),g.width!==m||g.height!==h)&&(g=v[0],g.width=m,g.height=h,g=v[v.length-1],g.width=m,g.height=h,b.setKeyframes(v))}}r()},function(u){c.__reactViewTransition===f&&(c.__reactViewTransition=null);try{typeof u=="object"&&u!==null&&u.name==="InvalidStateError"&&(u.message==="View transition was skipped because document visibility state is hidden."||u.message==="Skipping view transition because document visibility state has become hidden."||u.message==="Skipping view transition because viewport size changed."||u.message==="Transition was aborted because of invalid state")&&(u=null),u!==null&&l(u)}finally{i(),s(),r()}}),f.finished.finally(function(){for(var u=0;u<p.length;u++)p[u].cancel();c.__reactViewTransition===f&&(c.__reactViewTransition=null),o()}),f}catch{return i(),s(),r(),null}}function sr(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}sr.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:Pe({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)};sr.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),i=[],s=0;s<n.length;s++){var a=n[s].effect;a!==null&&a.target===e&&a.pseudoElement===t&&i.push(n[s])}return i};sr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function vM(e){return{name:e,group:new sr("group",e),imagePair:new sr("image-pair",e),old:new sr("old",e),new:new sr("new",e)}}function yi(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}yi.prototype.addEventListener=function(e,t,n){var i=null,s=null;if(!(n!=null&&typeof n!="boolean"&&(i=n.signal||null,i!==null&&i.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(yM(a,e,t,n)===-1){var r=this,o=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(o=function(l){r.removeEventListener(e,t,n),typeof t=="function"?t.call(this,l):t.handleEvent(l)}),i!==null&&(s=r.removeEventListener.bind(r,e,t,n),i.addEventListener("abort",s,{once:!0}),s=i.removeEventListener.bind(i,"abort",s)),i=Ao(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:o,cleanup:s}),ti(this._fragmentFiber.child,!1,wA,e,o,i)}this._eventListeners=a}};function wA(e,t,n,i){return dn(e).addEventListener(t,n,i),!1}yi.prototype.removeEventListener=function(e,t,n){var i=this._eventListeners;if(i!==null&&(t=yM(i,e,t,n),t!==-1)){var s=i[t];n=s.attachedListener;var a=s.cleanup;s=Ao(s.optionsOrUseCapture),ti(this._fragmentFiber.child,!1,CA,e,n,s),i.splice(t,1),a!==null&&a()}};function CA(e,t,n,i){return dn(e).removeEventListener(t,n,i),!1}function Ao(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Sy(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function yM(e,t,n,i){if(e.length===0)return-1;i=Sy(i);for(var s=0;s<e.length;s++){var a=e[s];if(a.type===t&&a.listener===n&&Sy(a.optionsOrUseCapture)===i)return s}return-1}yi.prototype.dispatchEvent=function(e){var t=vr(this._fragmentFiber);if(t===null)return!0;t=dn(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var i=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var s=0;s<n.length;s++){var a=n[s];i.addEventListener(a.type,a.attachedListener,Ao(a.optionsOrUseCapture))}if(t.appendChild(i),e=i.dispatchEvent(e),n)for(s=0;s<n.length;s++)a=n[s],i.removeEventListener(a.type,a.attachedListener,Ao(a.optionsOrUseCapture));return t.removeChild(i),e}return t.dispatchEvent(e)};yi.prototype.focus=function(e){ti(this._fragmentFiber.child,!0,xM,e,void 0,void 0)};function xM(e,t){return e.tag===6?!1:(e=dn(e),HA(e,t))}yi.prototype.focusLast=function(e){var t=[];ti(this._fragmentFiber.child,!0,V0,t,void 0,void 0);for(var n=t.length-1;0<=n&&!xM(t[n],e);n--);};function V0(e,t){return t.push(e),!1}yi.prototype.blur=function(){var e=vr(this._fragmentFiber);e!==null&&(e=dn(e),e=ic(e).activeElement,e!==null&&ti(this._fragmentFiber.child,!1,RA,e,void 0,void 0))};function RA(e,t){return e.tag===6?!1:(e=dn(e),e===t||e.contains(t)?(t.blur(),!0):!1)}yi.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),ti(this._fragmentFiber.child,!1,NA,e,void 0,void 0)};function NA(e,t){return e.tag===6||(e=dn(e),t.observe(e)),!1}yi.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),ti(this._fragmentFiber.child,!1,DA,e,void 0,void 0);for(var n=t=0;n<Yi.length;n++){var i=Yi[n];i.fragmentInstance===this&&i.observer===e?e.unobserve(i.instance):Yi[t++]=i}Yi.length=t}};function DA(e,t){return e.tag===6||(e=dn(e),t.unobserve(e)),!1}var Yi=[],Pp=!1;function UA(e,t,n){Yi.push({fragmentInstance:e,observer:t,instance:n}),Pp||(Pp=!0,VA(function(){Pp=!1;var i=Yi;Yi=[];for(var s=0;s<i.length;s++){var a=i[s];a.observer.unobserve(a.instance)}}))}yi.prototype.getClientRects=function(){var e=[];return ti(this._fragmentFiber.child,!1,LA,e,void 0,void 0),e};function LA(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=dn(e),t.push.apply(t,e.getClientRects());return!1}yi.prototype.getRootNode=function(e){var t=vr(this._fragmentFiber);return t===null?this:dn(t).getRootNode(e)};yi.prototype.compareDocumentPosition=function(e){var t=vr(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];ti(this._fragmentFiber.child,!1,V0,n,void 0,void 0);var i=dn(t);if(n.length===0){if(n=i,tv(this._fragmentFiber)){t:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break t}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var s=i=n.compareDocumentPosition(e);return n===e?s=Node.DOCUMENT_POSITION_CONTAINS:i&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=Gy(t)[1],n===null?s=Node.DOCUMENT_POSITION_PRECEDING:(e=dn(n).compareDocumentPosition(e),s=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),s|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=dn(n[0]),s=dn(n[n.length-1]);var a=tv(this._fragmentFiber)?t.parentElement:i;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;i=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(s)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=t.compareDocumentPosition(e),o=s.compareDocumentPosition(e),l=r&Node.DOCUMENT_POSITION_CONTAINED_BY||o&Node.DOCUMENT_POSITION_CONTAINED_BY;return o=i&&a&&r&Node.DOCUMENT_POSITION_FOLLOWING&&o&Node.DOCUMENT_POSITION_PRECEDING,t=i&&t===e||a&&s===e||l||o?Node.DOCUMENT_POSITION_CONTAINED_BY:!i&&t===e||!a&&s===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||OA(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function OA(e,t,n,i,s){var a=ir(s);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)t:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break t}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=s.ownerDocument,s===a||s===a.documentElement||s===a.body;t:{for(a=t,t=vr(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break t}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=zp(n,a,ev),t===null?t=!1:(ti(t,!0,uT,a,n),a=Jr,Jr=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===i)&&(t=zp(i,a,ev),t===null?t=!1:(ti(t,!0,hT,a,i),a=Jr,Fp=Jr=null,t=a!==null)),t):!1}function My(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}yi.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(tt(566));var t=[];ti(this._fragmentFiber.child,!1,V0,t,void 0,void 0);var n=e!==!1;if(t.length===0){var i=Gy(this._fragmentFiber);if(i=n?i[1]||i[0]||vr(this._fragmentFiber):i[0]||i[1],i===null)return;if(i.tag===6){e=dn(i),My(e,n);return}if(i=dn(i),i.nodeType!==9){if(i.nodeType===11){n="host"in i?i.host:null,n!==null&&n.scrollIntoView(e);return}i.scrollIntoView(e)}}for(i=n?t.length-1:0;i!==(n?-1:t.length);){var s=t[i];s.tag===6?(s=dn(s),My(s,n)):dn(s).scrollIntoView(e),i+=n?-1:1}};function IA(e,t){return e=dn(e),SM(e,t),!1}function SM(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function MM(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.addEventListener(s.type,s.attachedListener,Ao(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){for(var r=0,o=0;o<Yi.length;o++){var l=Yi[o];(l.fragmentInstance!==t||l.observer!==a||l.instance!==e)&&(Yi[r++]=l)}Yi.length=r,a.observe(e)}),SM(e,t))}function PA(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.removeEventListener(s.type,s.attachedListener,Ao(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){typeof a.rootMargin=="string"?UA(t,a,e):a.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function km(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":km(n),wh(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function BA(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[fc])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=Ii(e.nextSibling),e===null)break}return null}function FA(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ii(e.nextSibling),e===null))return null;return e}function bM(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ii(e.nextSibling),e===null))return null;return e}function Xm(e){return e.data==="$?"||e.data==="$~"}function G0(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function zA(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Ii(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Wm=null;function by(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Ii(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Ty(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function HA(e,t){function n(){i=!0}if(e.ownerDocument.activeElement===e)return!0;var i=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return i}function VA(e){vy(function(){vy(function(t){return e(t)})})}function TM(e,t,n){switch(t=ic(n),e){case"html":if(e=t.documentElement,!e)throw Error(tt(452));return e;case"head":if(e=t.head,!e)throw Error(tt(453));return e;case"body":if(e=t.body,!e)throw Error(tt(454));return e;default:throw Error(tt(451))}}function EM(e,t,n){for(var i in n){var s=n[i];n.hasOwnProperty(i)&&s!=null&&De(e,t,i,null,gA,s)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===ds&&(e.onclick=null),wh(e)}function Bp(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);wh(e)}var Pi=new Map,Ey=new Set;function sc(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var Ws=be.d;be.d={f:GA,r:kA,D:XA,C:WA,L:qA,m:YA,X:JA,S:ZA,M:KA};function GA(){var e=Ws.f(),t=Vh();return e||t}function kA(e){var t=Uo(e);t!==null&&t.tag===5&&t.type==="form"?cS(t):Ws.r(e)}var Po=typeof document>"u"?null:document;function AM(e,t,n){var i=Po;if(i&&typeof t=="string"&&t){var s=Ui(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),Ey.has(s)||(Ey.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),Nn(t,"link",e),yn(t),i.head.appendChild(t)))}}function XA(e){Ws.D(e),AM("dns-prefetch",e,null)}function WA(e,t){Ws.C(e,t),AM("preconnect",e,t)}function qA(e,t,n){Ws.L(e,t,n);var i=Po;if(i&&e&&t){var s='link[rel="preload"][as="'+Ui(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+Ui(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+Ui(n.imageSizes)+'"]')):s+='[href="'+Ui(e)+'"]';var a=s;switch(t){case"style":a=wo(e);break;case"script":a=Bo(e)}if(!(Pi.has(a)||(e=Pe({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Pi.set(a,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(vc(a))||t==="script"&&i.querySelector(yc(a))))){var r=i.createElement("link");Nn(r,"link",e),t==="style"&&(r[eh]=!0,r.onload=r.onerror=function(){ex(r)}),yn(r),i.head.appendChild(r)}}}function YA(e,t){Ws.m(e,t);var n=Po;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+Ui(i)+'"][href="'+Ui(e)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Bo(e)}if(!Pi.has(a)&&(e=Pe({rel:"modulepreload",href:e},t),Pi.set(a,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(yc(a)))return}i=n.createElement("link"),Nn(i,"link",e),yn(i),n.head.appendChild(i)}}}function ZA(e,t,n){Ws.S(e,t,n);var i=Po;if(i&&e){var s=oo(i).hoistableStyles,a=wo(e);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(vc(a)))o.loading=5;else{e=Pe({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Pi.get(a))&&k0(e,n);var l=r=i.createElement("link");yn(l),Nn(l,"link",e),l._p=new Promise(function(c,f){l.onload=c,l.onerror=f}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,qu(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function JA(e,t){Ws.X(e,t);var n=Po;if(n&&e){var i=oo(n).hoistableScripts,s=Bo(e),a=i.get(s);a||(a=n.querySelector(yc(s)),a||(e=Pe({src:e,async:!0},t),(t=Pi.get(s))&&X0(e,t),a=n.createElement("script"),yn(a),Nn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function KA(e,t){Ws.M(e,t);var n=Po;if(n&&e){var i=oo(n).hoistableScripts,s=Bo(e),a=i.get(s);a||(a=n.querySelector(yc(s)),a||(e=Pe({src:e,async:!0,type:"module"},t),(t=Pi.get(s))&&X0(e,t),a=n.createElement("script"),yn(a),Nn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function Ay(e,t,n,i){var s=(s=ma.current)?sc(s):null;if(!s)throw Error(tt(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=wo(n.href),t=oo(s).hoistableStyles,i=t.get(n),i||(i={type:"style",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=wo(n.href);var a=oo(s).hoistableStyles,r=a.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=s.querySelector(vc(e)))?a._p||(r.instance=a,r.state.loading=5):(a=Pi.get(e),a||(a={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Pi.set(e,a)),QA(s,e,a,r.state))),t&&i===null)throw Error(tt(528,""));return r}if(t&&i!==null)throw Error(tt(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=Bo(n),t=oo(s).hoistableScripts,i=t.get(n),i||(i={type:"script",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(tt(444,e))}}function wo(e){return'href="'+Ui(e)+'"'}function vc(e){return'link[rel="stylesheet"]['+e+"]"}function wM(e){return Pe({},e,{"data-precedence":e.precedence,precedence:null})}function QA(e,t,n,i){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[eh]!==!0){i.loading=1;return}}else t=e.createElement("link"),t[eh]=!0,t.onload=t.onerror=ex.bind(null,t),Nn(t,"link",n),yn(t),e.head.appendChild(t);i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2})}function Bo(e){return'[src="'+Ui(e)+'"]'}function yc(e){return"script[async]"+e}function wy(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Ui(n.href)+'"]');if(i)return t.instance=i,yn(i),i;var s=Pe({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),yn(i),Nn(i,"style",s),qu(i,n.precedence,e),t.instance=i;case"stylesheet":s=wo(n.href);var a=e.querySelector(vc(s));if(a)return t.state.loading|=4,t.instance=a,yn(a),a;i=wM(n),(s=Pi.get(s))&&k0(i,s),a=(e.ownerDocument||e).createElement("link"),yn(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),Nn(a,"link",i),t.state.loading|=4,qu(a,n.precedence,e),t.instance=a;case"script":return a=Bo(n.src),(s=e.querySelector(yc(a)))?(t.instance=s,yn(s),s):(i=n,(s=Pi.get(a))&&(i=Pe({},n),X0(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),yn(s),Nn(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(tt(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,qu(i,n.precedence,e));return t.instance}function qu(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function k0(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function X0(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Yu=null;function Cy(e,t,n){if(Yu===null){var i=new Map,s=Yu=new Map;s.set(n,i)}else s=Yu,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var a=n[s];if(!(a[fc]||a[An]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function qm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function jA(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Ry(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function CM(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function RM(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Ny(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=RM(t),e.suspenseyImages.push(t)),e=ew.bind(e),t.decode().then(e,e))}function $A(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=wo(i.href),a=t.querySelector(vc(s));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=ac.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,yn(a);return}a=t.ownerDocument||t,i=wM(i),(s=Pi.get(s))&&k0(i,s),a=a.createElement("link"),yn(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),Nn(a,"link",i),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=ac.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Zu=0;function tw(e,t){return e.stylesheets&&e.count===0&&Ju(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Ju(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&Zu===0&&(Zu=62500*vA());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ju(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>Zu?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function NM(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Ju(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function ac(){this.count--,NM(this)}function ew(){this.imgCount--,NM(this)}var Th=null;function Ju(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Th=new Map,t.forEach(nw,e),Th=null,ac.call(e))}function nw(e,t){if(!(t.state.loading&4)){var n=Th.get(e);if(n)var i=n.get(null);else{n=new Map,Th.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=ac.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var Co={$$typeof:fs,Provider:null,Consumer:null,_currentValue:ar,_currentValue2:ar,_threadCount:0};function iw(e,t,n,i,s,a,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=hp(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hp(0),this.hiddenUpdates=hp(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.transitionTypes=null,this.incompleteTransitions=new Map}function DM(e,t,n,i,s,a,r,o,l,c,f,p){return e=new iw(e,t,n,r,l,c,f,p,o),t=1,a===!0&&(t|=24),a=jn(3,null,null,t),e.current=a,a.stateNode=e,t=u0(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},d0(a),e}function UM(e){return e?(e=io,e):io}function LM(e,t,n,i,s,a){s=UM(s),i.context===null?i.context=s:i.pendingContext=s,i=_a(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=va(e,i,t),n!==null&&($n(n,e,t),Bl(n,e,t))}function Dy(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function W0(e,t){Dy(e,t),(e=e.alternate)&&Dy(e,t)}function OM(e){if(e.tag===13||e.tag===31){var t=Sr(e,67108864);t!==null&&$n(t,e,67108864),W0(e,67108864)}}function Uy(e){if(e.tag===13||e.tag===31){var t=_i();t=jm(t);var n=Sr(e,t);n!==null&&$n(n,e,t),W0(e,t)}}var Ro=!0;function sw(e,t,n,i){var s=Ht.T;Ht.T=null;var a=be.p;try{be.p=2,q0(e,t,n,i)}finally{be.p=a,Ht.T=s}}function aw(e,t,n,i){var s=Ht.T;Ht.T=null;var a=be.p;try{be.p=8,q0(e,t,n,i)}finally{be.p=a,Ht.T=s}}function q0(e,t,n,i){if(Ro){var s=Ym(i);if(s===null)Op(e,t,i,Eh,n),Ly(e,i);else if(ow(s,e,t,n,i))i.stopPropagation();else if(Ly(e,i),t&4&&-1<rw.indexOf(e)){for(;s!==null;){var a=Uo(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=tr(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-gi(r);o.entanglements[1]|=l,r&=~l}xs(a),(Me&6)===0&&(yh=pi()+500,_c(0,!1))}}break;case 31:case 13:o=Sr(a,2),o!==null&&$n(o,a,2),Vh(),W0(a,2)}if(a=Ym(i),a===null&&Op(e,t,i,Eh,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else Op(e,t,i,null,n)}}function Ym(e){return e=e0(e),Y0(e)}var Eh=null;function Y0(e){if(Eh=null,e=ir(e),e!==null){var t=lc(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=zy(t),e!==null)return e;e=null}else if(n===31){if(e=Hy(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Eh=e,null}function IM(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(xT()){case qy:return 2;case Yy:return 8;case th:case ST:return 32;case Zy:return 268435456;default:return 32}default:return 32}}var Zm=!1,Ma=null,ba=null,Ta=null,rc=new Map,oc=new Map,la=[],rw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ly(e,t){switch(e){case"focusin":case"focusout":Ma=null;break;case"dragenter":case"dragleave":ba=null;break;case"mouseover":case"mouseout":Ta=null;break;case"pointerover":case"pointerout":rc.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":oc.delete(t.pointerId)}}function Al(e,t,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=Uo(t),t!==null&&OM(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function ow(e,t,n,i,s){switch(t){case"focusin":return Ma=Al(Ma,e,t,n,i,s),!0;case"dragenter":return ba=Al(ba,e,t,n,i,s),!0;case"mouseover":return Ta=Al(Ta,e,t,n,i,s),!0;case"pointerover":var a=s.pointerId;return rc.set(a,Al(rc.get(a)||null,e,t,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,oc.set(a,Al(oc.get(a)||null,e,t,n,i,s)),!0}return!1}function PM(e){var t=ir(e.target);if(t!==null){var n=lc(t);if(n!==null){if(t=n.tag,t===13){if(t=zy(n),t!==null){e.blockedOn=t,av(e.priority,function(){Uy(n)});return}}else if(t===31){if(t=Hy(n),t!==null){e.blockedOn=t,av(e.priority,function(){Uy(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ku(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ym(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Qp=i,n.target.dispatchEvent(i),Qp=null}else return t=Uo(n),t!==null&&OM(t),e.blockedOn=n,!1;t.shift()}return!0}function Oy(e,t,n){Ku(e)&&n.delete(t)}function lw(){Zm=!1,Ma!==null&&Ku(Ma)&&(Ma=null),ba!==null&&Ku(ba)&&(ba=null),Ta!==null&&Ku(Ta)&&(Ta=null),rc.forEach(Oy),oc.forEach(Oy)}function Nu(e,t){e.blockedOn===t&&(e.blockedOn=null,Zm||(Zm=!0,pn.unstable_scheduleCallback(pn.unstable_NormalPriority,lw)))}var Du=null;function Iy(e){Du!==e&&(Du=e,pn.unstable_scheduleCallback(pn.unstable_NormalPriority,function(){Du===e&&(Du=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(Y0(i||n)===null)continue;break}var a=Uo(n);a!==null&&(e.splice(t,3),t-=3,dm(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function No(e){function t(l){return Nu(l,e)}Ma!==null&&Nu(Ma,e),ba!==null&&Nu(ba,e),Ta!==null&&Nu(Ta,e),rc.forEach(t),oc.forEach(t);for(var n=0;n<la.length;n++){var i=la[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<la.length&&(n=la[0],n.blockedOn===null);)PM(n),n.blockedOn===null&&la.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[ei]||null;if(typeof a=="function")r||Iy(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[ei]||null)o=r.formAction;else if(Y0(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),Iy(n)}}}function BM(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function Z0(e){this._internalRoot=e}Xh.prototype.render=Z0.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(tt(409));var n=t.current,i=_i();LM(n,i,e,t,null,null)};Xh.prototype.unmount=Z0.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;LM(e.current,2,null,e,null,null),Vh(),t[Do]=null}};function Xh(e){this._internalRoot=e}Xh.prototype.unstable_scheduleHydration=function(e){if(e){var t=tx();e={blockedOn:null,target:e,priority:t};for(var n=0;n<la.length&&t!==0&&t<la[n].priority;n++);la.splice(n,0,e),n===0&&PM(e)}};var Py=By.version;if(Py!=="19.3.1")throw Error(tt(527,Py,"19.3.1"));be.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(tt(188)):(e=Object.keys(e).join(","),Error(tt(268,e)));return e=cT(t),e=e!==null?Vy(e):null,e=e===null?null:e.stateNode,e};var cw={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Ht,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(wl=__REACT_DEVTOOLS_GLOBAL_HOOK__,!wl.isDisabled&&wl.supportsFiber))try{cc=wl.inject(cw),mi=wl}catch{}var wl;Wh.createRoot=function(e,t){if(!Fy(e))throw Error(tt(299));var n=!1,i="",s=_S,a=vS,r=yS;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=DM(e,1,!1,null,null,n,i,null,s,a,r,BM),e[Do]=t.current,z0(e),new Z0(t)};Wh.hydrateRoot=function(e,t,n){if(!Fy(e))throw Error(tt(299));var i=!1,s="",a=_S,r=vS,o=yS,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=DM(e,1,!0,t,n??null,i,s,l,a,r,o,BM),t.context=UM(null),n=t.current,i=_i(),i=jm(i),s=_a(i),s.callback=null,va(n,s,i),n=i,t.current.lanes=n,hc(t,n),xs(t),e[Do]=t.current,z0(e),new Xh(t)};Wh.version="19.3.1"});var VM=as((eD,HM)=>{"use strict";function zM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zM)}catch(e){console.error(e)}}zM(),HM.exports=FM()});var E1=as(zd=>{"use strict";var PN=Symbol.for("react.transitional.element"),BN=Symbol.for("react.fragment");function T1(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var s in t)s!=="key"&&(n[s]=t[s])}else n=t;return t=n.ref,{$$typeof:PN,type:e,key:i,ref:t!==void 0?t:null,props:n}}zd.Fragment=BN;zd.jsx=T1;zd.jsxs=T1});var eu=as((JO,A1)=>{"use strict";A1.exports=E1()});var U1=Fr(VM());var oi=Fr(cu());var ob=0,bg=1,lb=2;var Vc=1,cb=2,sl=3,Xa=0,Yn=1,ws=2,Vi=0,al=1,Gc=2,Tg=3,Eg=4,ub=5;var Ur=100,hb=101,fb=102,db=103,pb=104,mb=200,gb=201,_b=202,vb=203,Ag=204,wg=205,yb=206,xb=207,Sb=208,Mb=209,bb=210,Tb=211,Eb=212,Ab=213,wb=214,pf=0,mf=1,gf=2,jo=3,_f=4,vf=5,yf=6,xf=7,Cg=0,Cb=1,Rb=2,es=0,Rg=1,Ng=2,Dg=3,Ug=4,Lg=5,Og=6,Ig=7;var Pg=300,Wa=301,Lr=302,Wf=303,qf=304,kc=306,Sf=1e3,Ms=1001,Mf=1002,an=1003,Nb=1004;var Xc=1005;var hn=1006,Yf=1007;var qa=1008;var Ti=1009,Bg=1010,Fg=1011,rl=1012,Zf=1013,ns=1014,zn=1015,Ei=1016,Jf=1017,Kf=1018,ol=1020,zg=35902,Hg=35899,Vg=1021,Gg=1022,Hn=1023,bs=1026,Ya=1027,kg=1028,Qf=1029,is=1030,jf=1031;var $f=1033,Wc=33776,qc=33777,Yc=33778,Zc=33779,td=35840,ed=35841,nd=35842,id=35843,sd=36196,ad=37492,rd=37496,od=37488,ld=37489,Jc=37490,cd=37491,ud=37808,hd=37809,fd=37810,dd=37811,pd=37812,md=37813,gd=37814,_d=37815,vd=37816,yd=37817,xd=37818,Sd=37819,Md=37820,bd=37821,Td=36492,Ed=36494,Ad=36495,wd=36283,Cd=36284,Kc=36285,Rd=36286;var Ec=2300,bf=2301,ff=2302,_g=2303,vg=2400,yg=2401,xg=2402;var Db=3200;var Xg=0,Ub=1,ss="",Mi="srgb",Ac="srgb-linear",wc="linear",Ae="srgb";var df=7680;var Lb=519,Ob=512,Ib=513,Pb=514,Nd=515,Bb=516,Fb=517,Dd=518,zb=519,Hb=35044;var Wg="300 es",ts=2e3,Cc=2001;function uw(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function hw(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Rc(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Vb(){let e=Rc("canvas");return e.style.display="block",e}var GM={},$o=null;function qg(...e){let t="THREE."+e.shift();$o?$o("log",t,...e):console.log(t,...e)}function Gb(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Ft(...e){e=Gb(e);let t="THREE."+e.shift();if($o)$o("warn",t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Vt(...e){e=Gb(e);let t="THREE."+e.shift();if($o)$o("error",t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Cr(...e){let t=e.join(" ");t in GM||(GM[t]=!0,Ft(...e))}function kb(e,t,n){return new Promise(function(i,s){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}var Xb={[pf]:mf,[gf]:yf,[_f]:xf,[jo]:vf,[mf]:pf,[yf]:gf,[xf]:_f,[vf]:jo},Ts=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var J0=Math.PI/180,Tf=180/Math.PI;function Qc(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pn[e&255]+Pn[e>>8&255]+Pn[e>>16&255]+Pn[e>>24&255]+"-"+Pn[t&255]+Pn[t>>8&255]+"-"+Pn[t>>16&15|64]+Pn[t>>24&255]+"-"+Pn[n&63|128]+Pn[n>>8&255]+"-"+Pn[n>>16&255]+Pn[n>>24&255]+Pn[i&255]+Pn[i>>8&255]+Pn[i>>16&255]+Pn[i>>24&255]).toLowerCase()}function ue(e,t,n){return Math.max(t,Math.min(n,e))}function fw(e,t){return(e%t+t)%t}function K0(e,t,n){return(1-n)*e+n*t}function xc(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ni(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var re=class e{static{e.prototype.isVector2=!0}constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=ue(this.x,t.x,n.x),this.y=ue(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=ue(this.x,t,n),this.y=ue(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ue(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(ue(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Es=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],f=i[s+2],p=i[s+3],u=a[r+0],d=a[r+1],v=a[r+2],b=a[r+3];if(p!==b||l!==u||c!==d||f!==v){let m=l*u+c*d+f*v+p*b;m<0&&(u=-u,d=-d,v=-v,b=-b,m=-m);let h=1-o;if(m<.9995){let g=Math.acos(m),M=Math.sin(g);h=Math.sin(h*g)/M,o=Math.sin(o*g)/M,l=l*h+u*o,c=c*h+d*o,f=f*h+v*o,p=p*h+b*o}else{l=l*h+u*o,c=c*h+d*o,f=f*h+v*o,p=p*h+b*o;let g=1/Math.sqrt(l*l+c*c+f*f+p*p);l*=g,c*=g,f*=g,p*=g}}t[n]=l,t[n+1]=c,t[n+2]=f,t[n+3]=p}static multiplyQuaternionsFlat(t,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],f=i[s+3],p=a[r],u=a[r+1],d=a[r+2],v=a[r+3];return t[n]=o*v+f*p+l*d-c*u,t[n+1]=l*v+f*u+c*p-o*d,t[n+2]=c*v+f*d+o*u-l*p,t[n+3]=f*v-o*p-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(s/2),p=o(a/2),u=l(i/2),d=l(s/2),v=l(a/2);switch(r){case"XYZ":this._x=u*f*p+c*d*v,this._y=c*d*p-u*f*v,this._z=c*f*v+u*d*p,this._w=c*f*p-u*d*v;break;case"YXZ":this._x=u*f*p+c*d*v,this._y=c*d*p-u*f*v,this._z=c*f*v-u*d*p,this._w=c*f*p+u*d*v;break;case"ZXY":this._x=u*f*p-c*d*v,this._y=c*d*p+u*f*v,this._z=c*f*v+u*d*p,this._w=c*f*p-u*d*v;break;case"ZYX":this._x=u*f*p-c*d*v,this._y=c*d*p+u*f*v,this._z=c*f*v-u*d*p,this._w=c*f*p+u*d*v;break;case"YZX":this._x=u*f*p+c*d*v,this._y=c*d*p+u*f*v,this._z=c*f*v-u*d*p,this._w=c*f*p-u*d*v;break;case"XZY":this._x=u*f*p-c*d*v,this._y=c*d*p-u*f*v,this._z=c*f*v+u*d*p,this._w=c*f*p+u*d*v;break;default:Ft("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],f=n[6],p=n[10],u=i+o+p;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(f-l)*d,this._y=(a-c)*d,this._z=(r-s)*d}else if(i>o&&i>p){let d=2*Math.sqrt(1+i-o-p);this._w=(f-l)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(a+c)/d}else if(o>p){let d=2*Math.sqrt(1+o-i-p);this._w=(a-c)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(l+f)/d}else{let d=2*Math.sqrt(1+p-i-o);this._w=(r-s)/d,this._x=(a+c)/d,this._y=(l+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ue(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+r*o+s*c-a*l,this._y=s*f+r*l+a*o-i*c,this._z=a*f+r*c+i*l-s*o,this._w=r*f-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,a=-a,r=-r,o=-o);let l=1-n;if(o<.9995){let c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(n),a*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},X=class e{static{e.prototype.isVector3=!0}constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(kM.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(kM.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),f=2*(o*n-a*s),p=2*(a*i-r*n);return this.x=n+l*c+r*p-o*f,this.y=i+l*f+o*c-a*p,this.z=s+l*p+a*f-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=ue(this.x,t.x,n.x),this.y=ue(this.y,t.y,n.y),this.z=ue(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=ue(this.x,t,n),this.y=ue(this.y,t,n),this.z=ue(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ue(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,a=t.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Q0.copy(this).projectOnVector(t),this.sub(Q0)}reflect(t){return this.sub(Q0.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(ue(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Q0=new X,kM=new Es,Wt=class e{static{e.prototype.isMatrix3=!0}constructor(t,n,i,s,a,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c)}set(t,n,i,s,a,r,o,l,c){let f=this.elements;return f[0]=t,f[1]=s,f[2]=o,f[3]=n,f[4]=a,f[5]=l,f[6]=i,f[7]=r,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],f=i[4],p=i[7],u=i[2],d=i[5],v=i[8],b=s[0],m=s[3],h=s[6],g=s[1],M=s[4],y=s[7],T=s[2],E=s[5],w=s[8];return a[0]=r*b+o*g+l*T,a[3]=r*m+o*M+l*E,a[6]=r*h+o*y+l*w,a[1]=c*b+f*g+p*T,a[4]=c*m+f*M+p*E,a[7]=c*h+f*y+p*w,a[2]=u*b+d*g+v*T,a[5]=u*m+d*M+v*E,a[8]=u*h+d*y+v*w,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8];return n*r*f-n*o*c-i*a*f+i*o*l+s*a*c-s*r*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],p=f*r-o*c,u=o*l-f*a,d=c*a-r*l,v=n*p+i*u+s*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/v;return t[0]=p*b,t[1]=(s*c-f*i)*b,t[2]=(o*i-s*r)*b,t[3]=u*b,t[4]=(f*n-s*l)*b,t[5]=(s*a-o*n)*b,t[6]=d*b,t[7]=(i*l-c*n)*b,t[8]=(r*n-i*a)*b,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return Cr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(j0.makeScale(t,n)),this}rotate(t){return Cr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(j0.makeRotation(-t)),this}translate(t,n){return Cr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(j0.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},j0=new Wt,XM=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),WM=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dw(){let e={enabled:!0,workingColorSpace:Ac,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===Ae&&(s.r=Qs(s.r),s.g=Qs(s.g),s.b=Qs(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===Ae&&(s.r=Qo(s.r),s.g=Qo(s.g),s.b=Qo(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ss?wc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return Cr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return Cr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,a)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[Ac]:{primaries:t,whitePoint:i,transfer:wc,toXYZ:XM,fromXYZ:WM,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Mi},outputColorSpaceConfig:{drawingBufferColorSpace:Mi}},[Mi]:{primaries:t,whitePoint:i,transfer:Ae,toXYZ:XM,fromXYZ:WM,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Mi}}}),e}var ce=dw();function Qs(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Qo(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Fo,Ef=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Fo===void 0&&(Fo=Rc("canvas")),Fo.width=t.width,Fo.height=t.height;let s=Fo.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Fo}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=Rc("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=Qs(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Qs(n[i]/255)*255):n[i]=Qs(n[i]);return{data:n,width:t.width,height:t.height}}else return Ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},pw=0,tl=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:pw++}),this.uuid=Qc(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push($0(s[r].image)):a.push($0(s[r]))}else a=$0(s);i.url=a}return n||(t.images[this.uuid]=i),i}};function $0(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Ef.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Ft("Texture: Unable to serialize Texture."),{})}var mw=0,tg=new X,si=class e extends Ts{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=Ms,s=Ms,a=hn,r=qa,o=Hn,l=Ti,c=e.DEFAULT_ANISOTROPY,f=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mw++}),this.uuid=Qc(),this.name="",this.source=new tl(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(tg).x}get height(){return this.source.getSize(tg).y}get depth(){return this.source.getSize(tg).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){Ft(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Ft(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Sf:t.x=t.x-Math.floor(t.x);break;case Ms:t.x=t.x<0?0:1;break;case Mf:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Sf:t.y=t.y-Math.floor(t.y);break;case Ms:t.y=t.y<0?0:1;break;case Mf:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};si.DEFAULT_IMAGE=null;si.DEFAULT_MAPPING=Pg;si.DEFAULT_ANISOTROPY=1;var Ke=class e{static{e.prototype.isVector4=!0}constructor(t=0,n=0,i=0,s=1){this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,a,l=t.elements,c=l[0],f=l[4],p=l[8],u=l[1],d=l[5],v=l[9],b=l[2],m=l[6],h=l[10];if(Math.abs(f-u)<.01&&Math.abs(p-b)<.01&&Math.abs(v-m)<.01){if(Math.abs(f+u)<.1&&Math.abs(p+b)<.1&&Math.abs(v+m)<.1&&Math.abs(c+d+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let M=(c+1)/2,y=(d+1)/2,T=(h+1)/2,E=(f+u)/4,w=(p+b)/4,S=(v+m)/4;return M>y&&M>T?M<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(M),s=E/i,a=w/i):y>T?y<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(y),i=E/s,a=S/s):T<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(T),i=w/a,s=S/a),this.set(i,s,a,n),this}let g=Math.sqrt((m-v)*(m-v)+(p-b)*(p-b)+(u-f)*(u-f));return Math.abs(g)<.001&&(g=1),this.x=(m-v)/g,this.y=(p-b)/g,this.z=(u-f)/g,this.w=Math.acos((c+d+h-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=ue(this.x,t.x,n.x),this.y=ue(this.y,t.y,n.y),this.z=ue(this.z,t.z,n.z),this.w=ue(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=ue(this.x,t,n),this.y=ue(this.y,t,n),this.z=ue(this.z,t,n),this.w=ue(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ue(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Af=class extends Ts{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Ke(0,0,t,n),this.scissorTest=!1,this.viewport=new Ke(0,0,t,n),this.textures=[];let s={width:t,height:n,depth:i.depth},a=new si(s),r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let n={minFilter:hn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new tl(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let n=t.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fn=class extends Af{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},Nc=class extends si{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var wf=class extends si{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var sn=class e{static{e.prototype.isMatrix4=!0}constructor(t,n,i,s,a,r,o,l,c,f,p,u,d,v,b,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c,f,p,u,d,v,b,m)}set(t,n,i,s,a,r,o,l,c,f,p,u,d,v,b,m){let h=this.elements;return h[0]=t,h[4]=n,h[8]=i,h[12]=s,h[1]=a,h[5]=r,h[9]=o,h[13]=l,h[2]=c,h[6]=f,h[10]=p,h[14]=u,h[3]=d,h[7]=v,h[11]=b,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let n=this.elements,i=t.elements,s=1/zo.setFromMatrixColumn(t,0).length(),a=1/zo.setFromMatrixColumn(t,1).length(),r=1/zo.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),f=Math.cos(a),p=Math.sin(a);if(t.order==="XYZ"){let u=r*f,d=r*p,v=o*f,b=o*p;n[0]=l*f,n[4]=-l*p,n[8]=c,n[1]=d+v*c,n[5]=u-b*c,n[9]=-o*l,n[2]=b-u*c,n[6]=v+d*c,n[10]=r*l}else if(t.order==="YXZ"){let u=l*f,d=l*p,v=c*f,b=c*p;n[0]=u+b*o,n[4]=v*o-d,n[8]=r*c,n[1]=r*p,n[5]=r*f,n[9]=-o,n[2]=d*o-v,n[6]=b+u*o,n[10]=r*l}else if(t.order==="ZXY"){let u=l*f,d=l*p,v=c*f,b=c*p;n[0]=u-b*o,n[4]=-r*p,n[8]=v+d*o,n[1]=d+v*o,n[5]=r*f,n[9]=b-u*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let u=r*f,d=r*p,v=o*f,b=o*p;n[0]=l*f,n[4]=v*c-d,n[8]=u*c+b,n[1]=l*p,n[5]=b*c+u,n[9]=d*c-v,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let u=r*l,d=r*c,v=o*l,b=o*c;n[0]=l*f,n[4]=b-u*p,n[8]=v*p+d,n[1]=p,n[5]=r*f,n[9]=-o*f,n[2]=-c*f,n[6]=d*p+v,n[10]=u-b*p}else if(t.order==="XZY"){let u=r*l,d=r*c,v=o*l,b=o*c;n[0]=l*f,n[4]=-p,n[8]=c*f,n[1]=u*p+b,n[5]=r*f,n[9]=d*p-v,n[2]=v*p-d,n[6]=o*f,n[10]=b*p+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gw,t,_w)}lookAt(t,n,i){let s=this.elements;return xi.subVectors(t,n),xi.lengthSq()===0&&(xi.z=1),xi.normalize(),Ua.crossVectors(i,xi),Ua.lengthSq()===0&&(Math.abs(i.z)===1?xi.x+=1e-4:xi.z+=1e-4,xi.normalize(),Ua.crossVectors(i,xi)),Ua.normalize(),qh.crossVectors(xi,Ua),s[0]=Ua.x,s[4]=qh.x,s[8]=xi.x,s[1]=Ua.y,s[5]=qh.y,s[9]=xi.y,s[2]=Ua.z,s[6]=qh.z,s[10]=xi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],f=i[1],p=i[5],u=i[9],d=i[13],v=i[2],b=i[6],m=i[10],h=i[14],g=i[3],M=i[7],y=i[11],T=i[15],E=s[0],w=s[4],S=s[8],C=s[12],N=s[1],O=s[5],z=s[9],k=s[13],I=s[2],G=s[6],Q=s[10],q=s[14],$=s[3],H=s[7],W=s[11],nt=s[15];return a[0]=r*E+o*N+l*I+c*$,a[4]=r*w+o*O+l*G+c*H,a[8]=r*S+o*z+l*Q+c*W,a[12]=r*C+o*k+l*q+c*nt,a[1]=f*E+p*N+u*I+d*$,a[5]=f*w+p*O+u*G+d*H,a[9]=f*S+p*z+u*Q+d*W,a[13]=f*C+p*k+u*q+d*nt,a[2]=v*E+b*N+m*I+h*$,a[6]=v*w+b*O+m*G+h*H,a[10]=v*S+b*z+m*Q+h*W,a[14]=v*C+b*k+m*q+h*nt,a[3]=g*E+M*N+y*I+T*$,a[7]=g*w+M*O+y*G+T*H,a[11]=g*S+M*z+y*Q+T*W,a[15]=g*C+M*k+y*q+T*nt,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],f=t[2],p=t[6],u=t[10],d=t[14],v=t[3],b=t[7],m=t[11],h=t[15],g=l*d-c*u,M=o*d-c*p,y=o*u-l*p,T=r*d-c*f,E=r*u-l*f,w=r*p-o*f;return n*(b*g-m*M+h*y)-i*(v*g-m*T+h*E)+s*(v*M-b*T+h*w)-a*(v*y-b*E+m*w)}determinantAffine(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[1],r=t[5],o=t[9],l=t[2],c=t[6],f=t[10];return n*(r*f-o*c)-i*(a*f-o*l)+s*(a*c-r*l)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],p=t[9],u=t[10],d=t[11],v=t[12],b=t[13],m=t[14],h=t[15],g=n*o-i*r,M=n*l-s*r,y=n*c-a*r,T=i*l-s*o,E=i*c-a*o,w=s*c-a*l,S=f*b-p*v,C=f*m-u*v,N=f*h-d*v,O=p*m-u*b,z=p*h-d*b,k=u*h-d*m,I=g*k-M*z+y*O+T*N-E*C+w*S;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/I;return t[0]=(o*k-l*z+c*O)*G,t[1]=(s*z-i*k-a*O)*G,t[2]=(b*w-m*E+h*T)*G,t[3]=(u*E-p*w-d*T)*G,t[4]=(l*N-r*k-c*C)*G,t[5]=(n*k-s*N+a*C)*G,t[6]=(m*y-v*w-h*M)*G,t[7]=(f*w-u*y+d*M)*G,t[8]=(r*z-o*N+c*S)*G,t[9]=(i*N-n*z-a*S)*G,t[10]=(v*E-b*y+h*g)*G,t[11]=(p*y-f*E-d*g)*G,t[12]=(o*C-r*O-l*S)*G,t[13]=(n*O-i*C+s*S)*G,t[14]=(b*M-v*T-m*g)*G,t[15]=(f*T-p*M+u*g)*G,this}scale(t){let n=this.elements,i=t.x,s=t.y,a=t.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,f=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,f*o+i,f*l-s*r,0,c*l-s*o,f*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,f=r+r,p=o+o,u=a*c,d=a*f,v=a*p,b=r*f,m=r*p,h=o*p,g=l*c,M=l*f,y=l*p,T=i.x,E=i.y,w=i.z;return s[0]=(1-(b+h))*T,s[1]=(d+y)*T,s[2]=(v-M)*T,s[3]=0,s[4]=(d-y)*E,s[5]=(1-(u+h))*E,s[6]=(m+g)*E,s[7]=0,s[8]=(v+M)*w,s[9]=(m-g)*w,s[10]=(1-(u+b))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let a=this.determinantAffine();if(a===0)return i.set(1,1,1),n.identity(),this;let r=zo.set(s[0],s[1],s[2]).length(),o=zo.set(s[4],s[5],s[6]).length(),l=zo.set(s[8],s[9],s[10]).length();a<0&&(r=-r),Ki.copy(this);let c=1/r,f=1/o,p=1/l;return Ki.elements[0]*=c,Ki.elements[1]*=c,Ki.elements[2]*=c,Ki.elements[4]*=f,Ki.elements[5]*=f,Ki.elements[6]*=f,Ki.elements[8]*=p,Ki.elements[9]*=p,Ki.elements[10]*=p,n.setFromRotationMatrix(Ki),i.x=r,i.y=o,i.z=l,this}makePerspective(t,n,i,s,a,r,o=ts,l=!1){let c=this.elements,f=2*a/(n-t),p=2*a/(i-s),u=(n+t)/(n-t),d=(i+s)/(i-s),v,b;if(l)v=a/(r-a),b=r*a/(r-a);else if(o===ts)v=-(r+a)/(r-a),b=-2*r*a/(r-a);else if(o===Cc)v=-r/(r-a),b=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,a,r,o=ts,l=!1){let c=this.elements,f=2/(n-t),p=2/(i-s),u=-(n+t)/(n-t),d=-(i+s)/(i-s),v,b;if(l)v=1/(r-a),b=r/(r-a);else if(o===ts)v=-2/(r-a),b=-(r+a)/(r-a);else if(o===Cc)v=-1/(r-a),b=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=v,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},zo=new X,Ki=new sn,gw=new X(0,0,0),_w=new X(1,1,1),Ua=new X,qh=new X,xi=new X,qM=new sn,YM=new Es,Fa=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],f=s[9],p=s[2],u=s[6],d=s[10];switch(n){case"XYZ":this._y=Math.asin(ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ue(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(ue(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-ue(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(ue(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ue(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-f,d),this._y=0);break;default:Ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return qM.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qM,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return YM.setFromEuler(this),this.setFromQuaternion(YM,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Fa.DEFAULT_ORDER="XYZ";var Dc=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},vw=0,ZM=new X,Ho=new Es,qs=new sn,Yh=new X,Sc=new X,yw=new X,xw=new Es,JM=new X(1,0,0),KM=new X(0,1,0),QM=new X(0,0,1),jM={type:"added"},Sw={type:"removed"},Vo={type:"childadded",child:null},eg={type:"childremoved",child:null},Hi=class e extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vw++}),this.uuid=Qc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new X,n=new Fa,i=new Es,s=new X(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new sn},normalMatrix:{value:new Wt}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Ho.setFromAxisAngle(t,n),this.quaternion.multiply(Ho),this}rotateOnWorldAxis(t,n){return Ho.setFromAxisAngle(t,n),this.quaternion.premultiply(Ho),this}rotateX(t){return this.rotateOnAxis(JM,t)}rotateY(t){return this.rotateOnAxis(KM,t)}rotateZ(t){return this.rotateOnAxis(QM,t)}translateOnAxis(t,n){return ZM.copy(t).applyQuaternion(this.quaternion),this.position.add(ZM.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(JM,t)}translateY(t){return this.translateOnAxis(KM,t)}translateZ(t){return this.translateOnAxis(QM,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qs.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Yh.copy(t):Yh.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Sc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qs.lookAt(Sc,Yh,this.up):qs.lookAt(Yh,Sc,this.up),this.quaternion.setFromRotationMatrix(qs),s&&(qs.extractRotation(s.matrixWorld),Ho.setFromRotationMatrix(qs),this.quaternion.premultiply(Ho.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Vt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(jM),Vo.child=t,this.dispatchEvent(Vo),Vo.child=null):Vt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(Sw),eg.child=t,this.dispatchEvent(eg),eg.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qs.multiply(t.parent.matrixWorld)),t.applyMatrix4(qs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(jM),Vo.child=t,this.dispatchEvent(Vo),Vo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sc,t,yw),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sc,xw,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,i=t.y,s=t.z,a=this.matrix.elements;a[12]+=n-a[0]*n-a[4]*i-a[8]*s,a[13]+=i-a[1]*n-a[5]*i-a[9]*s,a[14]+=s-a[2]*n-a[6]*i-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,i)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let p=l[c];a(t.shapes,p)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),f=r(t.images),p=r(t.shapes),u=r(t.skeletons),d=r(t.animations),v=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),v.length>0&&(i.nodes=v)}return i.object=s,i;function r(o){let l=[];for(let c in o){let f=o[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Hi.DEFAULT_UP=new X(0,1,0);Hi.DEFAULT_MATRIX_AUTO_UPDATE=!0;Hi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wr=class extends Hi{constructor(){super(),this.isGroup=!0,this.type="Group"}},Mw={type:"move"},el=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let b of t.hand.values()){let m=n.getJointPose(b,i),h=this._getHandJoint(c,b);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}let f=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=f.position.distanceTo(p.position),d=.02,v=.005;c.inputState.pinching&&u>d+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mw)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new wr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},Wb={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},La={h:0,s:0,l:0},Zh={h:0,s:0,l:0};function ng(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var he=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Mi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=ce.workingColorSpace){return this.r=t,this.g=n,this.b=i,ce.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=ce.workingColorSpace){if(t=fw(t,1),n=ue(n,0,1),i=ue(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=ng(r,a,t+1/3),this.g=ng(r,a,t),this.b=ng(r,a,t-1/3)}return ce.colorSpaceToWorking(this,s),this}setStyle(t,n=Mi){function i(a){a!==void 0&&parseFloat(a)<1&&Ft("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:Ft("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);Ft("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Mi){let i=Wb[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Ft("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qs(t.r),this.g=Qs(t.g),this.b=Qs(t.b),this}copyLinearToSRGB(t){return this.r=Qo(t.r),this.g=Qo(t.g),this.b=Qo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Mi){return ce.workingToColorSpace(Bn.copy(this),t),Math.round(ue(Bn.r*255,0,255))*65536+Math.round(ue(Bn.g*255,0,255))*256+Math.round(ue(Bn.b*255,0,255))}getHexString(t=Mi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=ce.workingColorSpace){ce.workingToColorSpace(Bn.copy(this),n);let i=Bn.r,s=Bn.g,a=Bn.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,f=(o+r)/2;if(o===r)l=0,c=0;else{let p=r-o;switch(c=f<=.5?p/(r+o):p/(2-r-o),r){case i:l=(s-a)/p+(s<a?6:0);break;case s:l=(a-i)/p+2;break;case a:l=(i-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,n=ce.workingColorSpace){return ce.workingToColorSpace(Bn.copy(this),n),t.r=Bn.r,t.g=Bn.g,t.b=Bn.b,t}getStyle(t=Mi){ce.workingToColorSpace(Bn.copy(this),t);let n=Bn.r,i=Bn.g,s=Bn.b;return t!==Mi?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(La),this.setHSL(La.h+t,La.s+n,La.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(La),t.getHSL(Zh);let i=K0(La.h,Zh.h,n),s=K0(La.s,Zh.s,n),a=K0(La.l,Zh.l,n);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Bn=new he;he.NAMES=Wb;var Uc=class extends Hi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fa,this.environmentIntensity=1,this.environmentRotation=new Fa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}},Qi=new X,Ys=new X,ig=new X,Zs=new X,Go=new X,ko=new X,$M=new X,sg=new X,ag=new X,rg=new X,og=new Ke,lg=new Ke,cg=new Ke,Ba=class e{constructor(t=new X,n=new X,i=new X){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),Qi.subVectors(t,n),s.cross(Qi);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,n,i,s,a){Qi.subVectors(s,n),Ys.subVectors(i,n),ig.subVectors(t,n);let r=Qi.dot(Qi),o=Qi.dot(Ys),l=Qi.dot(ig),c=Ys.dot(Ys),f=Ys.dot(ig),p=r*c-o*o;if(p===0)return a.set(0,0,0),null;let u=1/p,d=(c*l-o*f)*u,v=(r*f-o*l)*u;return a.set(1-d-v,v,d)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,Zs)===null?!1:Zs.x>=0&&Zs.y>=0&&Zs.x+Zs.y<=1}static getInterpolation(t,n,i,s,a,r,o,l){return this.getBarycoord(t,n,i,s,Zs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Zs.x),l.addScaledVector(r,Zs.y),l.addScaledVector(o,Zs.z),l)}static getInterpolatedAttribute(t,n,i,s,a,r){return og.setScalar(0),lg.setScalar(0),cg.setScalar(0),og.fromBufferAttribute(t,n),lg.fromBufferAttribute(t,i),cg.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(og,a.x),r.addScaledVector(lg,a.y),r.addScaledVector(cg,a.z),r}static isFrontFacing(t,n,i,s){return Qi.subVectors(i,n),Ys.subVectors(t,n),Qi.cross(Ys).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qi.subVectors(this.c,this.b),Ys.subVectors(this.a,this.b),Qi.cross(Ys).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,a){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,a=this.c,r,o;Go.subVectors(s,i),ko.subVectors(a,i),sg.subVectors(t,i);let l=Go.dot(sg),c=ko.dot(sg);if(l<=0&&c<=0)return n.copy(i);ag.subVectors(t,s);let f=Go.dot(ag),p=ko.dot(ag);if(f>=0&&p<=f)return n.copy(s);let u=l*p-f*c;if(u<=0&&l>=0&&f<=0)return r=l/(l-f),n.copy(i).addScaledVector(Go,r);rg.subVectors(t,a);let d=Go.dot(rg),v=ko.dot(rg);if(v>=0&&d<=v)return n.copy(a);let b=d*c-l*v;if(b<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(ko,o);let m=f*v-d*p;if(m<=0&&p-f>=0&&d-v>=0)return $M.subVectors(a,s),o=(p-f)/(p-f+(d-v)),n.copy(s).addScaledVector($M,o);let h=1/(m+b+u);return r=b*h,o=u*h,n.copy(i).addScaledVector(Go,r).addScaledVector(ko,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},za=class{constructor(t=new X(1/0,1/0,1/0),n=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(ji.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(ji.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=ji.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,ji):ji.fromBufferAttribute(a,r),ji.applyMatrix4(t.matrixWorld),this.expandByPoint(ji);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Jh.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Jh.copy(i.boundingBox)),Jh.applyMatrix4(t.matrixWorld),this.union(Jh)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ji),ji.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Mc),Kh.subVectors(this.max,Mc),Xo.subVectors(t.a,Mc),Wo.subVectors(t.b,Mc),qo.subVectors(t.c,Mc),Oa.subVectors(Wo,Xo),Ia.subVectors(qo,Wo),br.subVectors(Xo,qo);let n=[0,-Oa.z,Oa.y,0,-Ia.z,Ia.y,0,-br.z,br.y,Oa.z,0,-Oa.x,Ia.z,0,-Ia.x,br.z,0,-br.x,-Oa.y,Oa.x,0,-Ia.y,Ia.x,0,-br.y,br.x,0];return!ug(n,Xo,Wo,qo,Kh)||(n=[1,0,0,0,1,0,0,0,1],!ug(n,Xo,Wo,qo,Kh))?!1:(Qh.crossVectors(Oa,Ia),n=[Qh.x,Qh.y,Qh.z],ug(n,Xo,Wo,qo,Kh))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ji).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ji).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Js[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Js[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Js[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Js[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Js[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Js[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Js[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Js[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Js),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Js=[new X,new X,new X,new X,new X,new X,new X,new X],ji=new X,Jh=new za,Xo=new X,Wo=new X,qo=new X,Oa=new X,Ia=new X,br=new X,Mc=new X,Kh=new X,Qh=new X,Tr=new X;function ug(e,t,n,i,s){for(let a=0,r=e.length-3;a<=r;a+=3){Tr.fromArray(e,a);let o=s.x*Math.abs(Tr.x)+s.y*Math.abs(Tr.y)+s.z*Math.abs(Tr.z),l=t.dot(Tr),c=n.dot(Tr),f=i.dot(Tr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}var un=new X,jh=new re,bw=0,Fi=class extends Ts{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bw++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=Hb,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)jh.fromBufferAttribute(this,n),jh.applyMatrix3(t),this.setXY(n,jh.x,jh.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)un.fromBufferAttribute(this,n),un.applyMatrix3(t),this.setXYZ(n,un.x,un.y,un.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)un.fromBufferAttribute(this,n),un.applyMatrix4(t),this.setXYZ(n,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)un.fromBufferAttribute(this,n),un.applyNormalMatrix(t),this.setXYZ(n,un.x,un.y,un.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)un.fromBufferAttribute(this,n),un.transformDirection(t),this.setXYZ(n,un.x,un.y,un.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=xc(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=ni(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=xc(n,this.array)),n}setX(t,n){return this.normalized&&(n=ni(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=xc(n,this.array)),n}setY(t,n){return this.normalized&&(n=ni(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=xc(n,this.array)),n}setZ(t,n){return this.normalized&&(n=ni(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=xc(n,this.array)),n}setW(t,n){return this.normalized&&(n=ni(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=ni(n,this.array),i=ni(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=ni(n,this.array),i=ni(i,this.array),s=ni(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t*=this.itemSize,this.normalized&&(n=ni(n,this.array),i=ni(i,this.array),s=ni(s,this.array),a=ni(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Lc=class extends Fi{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var Oc=class extends Fi{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var zi=class extends Fi{constructor(t,n,i){super(new Float32Array(t),n,i)}},Tw=new za,bc=new X,hg=new X,nl=class{constructor(t=new X,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):Tw.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;bc.subVectors(t,this.center);let n=bc.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(bc,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(hg.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(bc.copy(t.center).add(hg)),this.expandByPoint(bc.copy(t.center).sub(hg))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Ew=0,Bi=new sn,fg=new Hi,Yo=new X,Si=new za,Tc=new za,Sn=new X,As=class e extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ew++}),this.uuid=Qc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(uw(t)?Oc:Lc)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Wt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Bi.makeRotationFromQuaternion(t),this.applyMatrix4(Bi),this}rotateX(t){return Bi.makeRotationX(t),this.applyMatrix4(Bi),this}rotateY(t){return Bi.makeRotationY(t),this.applyMatrix4(Bi),this}rotateZ(t){return Bi.makeRotationZ(t),this.applyMatrix4(Bi),this}translate(t,n,i){return Bi.makeTranslation(t,n,i),this.applyMatrix4(Bi),this}scale(t,n,i){return Bi.makeScale(t,n,i),this.applyMatrix4(Bi),this}lookAt(t){return fg.lookAt(t),fg.updateMatrix(),this.applyMatrix4(fg.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yo).negate(),this.translate(Yo.x,Yo.y,Yo.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new zi(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let a=t[s];n.setXYZ(s,a.x,a.y,a.z||0)}t.length>n.count&&Ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new za);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];Si.setFromBufferAttribute(a),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,Si.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,Si.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(Si.min),this.boundingBox.expandByPoint(Si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Vt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nl);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){let i=this.boundingSphere.center;if(Si.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];Tc.setFromBufferAttribute(o),this.morphTargetsRelative?(Sn.addVectors(Si.min,Tc.min),Si.expandByPoint(Sn),Sn.addVectors(Si.max,Tc.max),Si.expandByPoint(Sn)):(Si.expandByPoint(Tc.min),Si.expandByPoint(Tc.max))}Si.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)Sn.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(Sn));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)Sn.fromBufferAttribute(o,c),l&&(Yo.fromBufferAttribute(t,c),Sn.add(Yo)),s=Math.max(s,i.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Vt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Vt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,a=n.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new Fi(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));let o=[],l=[];for(let S=0;S<i.count;S++)o[S]=new X,l[S]=new X;let c=new X,f=new X,p=new X,u=new re,d=new re,v=new re,b=new X,m=new X;function h(S,C,N){c.fromBufferAttribute(i,S),f.fromBufferAttribute(i,C),p.fromBufferAttribute(i,N),u.fromBufferAttribute(a,S),d.fromBufferAttribute(a,C),v.fromBufferAttribute(a,N),f.sub(c),p.sub(c),d.sub(u),v.sub(u);let O=1/(d.x*v.y-v.x*d.y);isFinite(O)&&(b.copy(f).multiplyScalar(v.y).addScaledVector(p,-d.y).multiplyScalar(O),m.copy(p).multiplyScalar(d.x).addScaledVector(f,-v.x).multiplyScalar(O),o[S].add(b),o[C].add(b),o[N].add(b),l[S].add(m),l[C].add(m),l[N].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:t.count}]);for(let S=0,C=g.length;S<C;++S){let N=g[S],O=N.start,z=N.count;for(let k=O,I=O+z;k<I;k+=3)h(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let M=new X,y=new X,T=new X,E=new X;function w(S){T.fromBufferAttribute(s,S),E.copy(T);let C=o[S];M.copy(C),M.sub(T.multiplyScalar(T.dot(C))).normalize(),y.crossVectors(E,C);let O=y.dot(l[S])<0?-1:1;r.setXYZW(S,M.x,M.y,M.z,O)}for(let S=0,C=g.length;S<C;++S){let N=g[S],O=N.start,z=N.count;for(let k=O,I=O+z;k<I;k+=3)w(t.getX(k+0)),w(t.getX(k+1)),w(t.getX(k+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Fi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new X,a=new X,r=new X,o=new X,l=new X,c=new X,f=new X,p=new X;if(t)for(let u=0,d=t.count;u<d;u+=3){let v=t.getX(u+0),b=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(n,v),a.fromBufferAttribute(n,b),r.fromBufferAttribute(n,m),f.subVectors(r,a),p.subVectors(s,a),f.cross(p),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,m),o.add(f),l.add(f),c.add(f),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=n.count;u<d;u+=3)s.fromBufferAttribute(n,u+0),a.fromBufferAttribute(n,u+1),r.fromBufferAttribute(n,u+2),f.subVectors(r,a),p.subVectors(s,a),f.cross(p),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)Sn.fromBufferAttribute(t,n),Sn.normalize(),t.setXYZ(n,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function t(o,l){let c=o.array,f=o.itemSize,p=o.normalized,u=new c.constructor(l.length*f),d=0,v=0;for(let b=0,m=l.length;b<m;b++){o.isInterleavedBufferAttribute?d=l[b]*o.data.stride+o.offset:d=l[b]*f;for(let h=0;h<f;h++)u[v++]=c[d++]}return new Fi(u,f,p)}if(this.index===null)return Ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let f=0,p=c.length;f<p;f++){let u=c[f],d=t(u,i);l.push(d)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let p=0,u=c.length;p<u;p++){let d=c[p];f.push(d.toJSON(t.data))}f.length>0&&(s[l]=f,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let f=s[c];this.setAttribute(c,f.clone(n))}let a=t.morphAttributes;for(let c in a){let f=[],p=a[c];for(let u=0,d=p.length;u<d;u++)f.push(p[u].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,f=r.length;c<f;c++){let p=r[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var dg=new X,Aw=new X,ww=new Wt,$i=class{constructor(t=new X(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=dg.subVectors(i,n).cross(Aw.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){let s=t.delta(dg),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/a;return i===!0&&(r<0||r>1)?null:n.copy(t.start).addScaledVector(s,r)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||ww.getNormalMatrix(t),s=this.coplanarPoint(dg).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Cw=0,Rr=class extends Ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cw++}),this.uuid=Qc(),this.name="",this.type="Material",this.blending=al,this.side=Xa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ag,this.blendDst=wg,this.blendEquation=Ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new he(0,0,0),this.blendAlpha=0,this.depthFunc=jo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lb,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=df,this.stencilZFail=df,this.stencilZPass=df,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){Ft(`Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Ft(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new he().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new $i().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new re().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new re().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Ks=new X,pg=new X,$h=new X,tf=new X,Cf=class{constructor(t=new X,n=new X(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ks)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=Ks.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Ks.copy(this.origin).addScaledVector(this.direction,n),Ks.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){pg.copy(t).add(n).multiplyScalar(.5),$h.copy(n).sub(t).normalize(),tf.copy(this.origin).sub(pg);let a=t.distanceTo(n)*.5,r=-this.direction.dot($h),o=tf.dot(this.direction),l=-tf.dot($h),c=tf.lengthSq(),f=Math.abs(1-r*r),p,u,d,v;if(f>0)if(p=r*l-o,u=r*o-l,v=a*f,p>=0)if(u>=-v)if(u<=v){let b=1/f;p*=b,u*=b,d=p*(p+r*u+2*o)+u*(r*p+u+2*l)+c}else u=a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;else u=-a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;else u<=-v?(p=Math.max(0,-(-r*a+o)),u=p>0?-a:Math.min(Math.max(-a,-l),a),d=-p*p+u*(u+2*l)+c):u<=v?(p=0,u=Math.min(Math.max(-a,-l),a),d=u*(u+2*l)+c):(p=Math.max(0,-(r*a+o)),u=p>0?a:Math.min(Math.max(-a,-l),a),d=-p*p+u*(u+2*l)+c);else u=r>0?-a:a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(pg).addScaledVector($h,u),d}intersectSphere(t,n){if(t.radius<0)return null;Ks.subVectors(t.center,this.origin);let i=Ks.dot(this.direction),s=Ks.dot(Ks)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,a,r,o,l,c=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),f>=0?(a=(t.min.y-u.y)*f,r=(t.max.y-u.y)*f):(a=(t.max.y-u.y)*f,r=(t.min.y-u.y)*f),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),p>=0?(o=(t.min.z-u.z)*p,l=(t.max.z-u.z)*p):(o=(t.max.z-u.z)*p,l=(t.min.z-u.z)*p),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,Ks)!==null}intersectTriangle(t,n,i,s,a){let r=this.origin,o=this.direction,l=o.x,c=o.y,f=o.z,p=t.x-r.x,u=t.y-r.y,d=t.z-r.z,v=n.x-r.x,b=n.y-r.y,m=n.z-r.z,h=i.x-r.x,g=i.y-r.y,M=i.z-r.z,y=Math.abs(l),T=Math.abs(c),E=Math.abs(f),w,S,C,N,O,z,k,I,G,Q,q,$;if(y>=T&&y>=E?(C=l,z=p,G=v,$=h,l>=0?(w=c,S=f,N=u,O=d,k=b,I=m,Q=g,q=M):(w=f,S=c,N=d,O=u,k=m,I=b,Q=M,q=g)):T>=E?(C=c,z=u,G=b,$=g,c>=0?(w=f,S=l,N=d,O=p,k=m,I=v,Q=M,q=h):(w=l,S=f,N=p,O=d,k=v,I=m,Q=h,q=M)):(C=f,z=d,G=m,$=M,f>=0?(w=l,S=c,N=p,O=u,k=v,I=b,Q=h,q=g):(w=c,S=l,N=u,O=p,k=b,I=v,Q=g,q=h)),C===0)return null;let H=w/C,W=S/C,nt=1/C,Rt=N-H*z,Et=O-W*z,$t=k-H*G,Yt=I-W*G,Kt=Q-H*$,J=q-W*$,et=Kt*Yt-J*$t,Tt=Rt*J-Et*Kt,It=$t*Et-Yt*Rt;if(s){if(et<0||Tt<0||It<0)return null}else if((et<0||Tt<0||It<0)&&(et>0||Tt>0||It>0))return null;let yt=et+Tt+It;if(yt===0)return null;let Ot=nt*(et*z+Tt*G+It*$);return(yt>0?Ot<0:Ot>0)?null:this.at(Ot/yt,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ic=class extends Rr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fa,this.combine=Cg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},tb=new sn,Er=new Cf,ef=new nl,eb=new X,nf=new X,sf=new X,af=new X,mg=new X,rf=new X,nb=new X,of=new X,ai=class extends Hi{constructor(t=new As,n=new Ic){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){rf.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let f=o[l],p=a[l];f!==0&&(mg.fromBufferAttribute(p,t),r?rf.addScaledVector(mg,f):rf.addScaledVector(mg.sub(n),f))}n.add(rf)}return n}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ef.copy(i.boundingSphere),ef.applyMatrix4(a),Er.copy(t.ray).recast(t.near),!(ef.containsPoint(Er.origin)===!1&&(Er.intersectSphere(ef,eb)===null||Er.origin.distanceToSquared(eb)>(t.far-t.near)**2))&&(tb.copy(a).invert(),Er.copy(t.ray).applyMatrix4(tb),!(i.boundingBox!==null&&Er.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Er)))}_computeIntersections(t,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,f=a.attributes.uv1,p=a.attributes.normal,u=a.groups,d=a.drawRange;if(o!==null)if(Array.isArray(r))for(let v=0,b=u.length;v<b;v++){let m=u[v],h=r[m.materialIndex],g=Math.max(m.start,d.start),M=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let y=g,T=M;y<T;y+=3){let E=o.getX(y),w=o.getX(y+1),S=o.getX(y+2);s=lf(this,h,t,i,c,f,p,E,w,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let v=Math.max(0,d.start),b=Math.min(o.count,d.start+d.count);for(let m=v,h=b;m<h;m+=3){let g=o.getX(m),M=o.getX(m+1),y=o.getX(m+2);s=lf(this,r,t,i,c,f,p,g,M,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let v=0,b=u.length;v<b;v++){let m=u[v],h=r[m.materialIndex],g=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=g,T=M;y<T;y+=3){let E=y,w=y+1,S=y+2;s=lf(this,h,t,i,c,f,p,E,w,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let v=Math.max(0,d.start),b=Math.min(l.count,d.start+d.count);for(let m=v,h=b;m<h;m+=3){let g=m,M=m+1,y=m+2;s=lf(this,r,t,i,c,f,p,g,M,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function Rw(e,t,n,i,s,a,r,o){let l;if(t.side===Yn?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===Xa,o),l===null)return null;of.copy(o),of.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(of);return c<n.near||c>n.far?null:{distance:c,point:of.clone(),object:e}}function lf(e,t,n,i,s,a,r,o,l,c){e.getVertexPosition(o,nf),e.getVertexPosition(l,sf),e.getVertexPosition(c,af);let f=Rw(e,t,n,i,nf,sf,af,nb);if(f){let p=new X;Ba.getBarycoord(nb,nf,sf,af,p),s&&(f.uv=Ba.getInterpolatedAttribute(s,o,l,c,p,new re)),a&&(f.uv1=Ba.getInterpolatedAttribute(a,o,l,c,p,new re)),r&&(f.normal=Ba.getInterpolatedAttribute(r,o,l,c,p,new X),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new X,materialIndex:0};Ba.getNormal(nf,sf,af,u.normal),f.face=u,f.barycoord=p}return f}var js=class extends si{constructor(t=null,n=1,i=1,s,a,r,o,l,c=an,f=an,p,u){super(null,r,o,l,c,f,s,a,p,u),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ar=new nl,Nw=new re(.5,.5),cf=new X,Pc=class{constructor(t=new $i,n=new $i,i=new $i,s=new $i,a=new $i,r=new $i){this.planes=[t,n,i,s,a,r]}set(t,n,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=ts,i=!1){let s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],f=a[4],p=a[5],u=a[6],d=a[7],v=a[8],b=a[9],m=a[10],h=a[11],g=a[12],M=a[13],y=a[14],T=a[15];if(s[0].setComponents(c-r,d-f,h-v,T-g).normalize(),s[1].setComponents(c+r,d+f,h+v,T+g).normalize(),s[2].setComponents(c+o,d+p,h+b,T+M).normalize(),s[3].setComponents(c-o,d-p,h-b,T-M).normalize(),i)s[4].setComponents(l,u,m,y).normalize(),s[5].setComponents(c-l,d-u,h-m,T-y).normalize();else if(s[4].setComponents(c-l,d-u,h-m,T-y).normalize(),n===ts)s[5].setComponents(c+l,d+u,h+m,T+y).normalize();else if(n===Cc)s[5].setComponents(l,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ar.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ar)}intersectsSprite(t){Ar.center.set(0,0,0);let n=Nw.distanceTo(t.center);return Ar.radius=.7071067811865476+n,Ar.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ar)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(cf.x=s.normal.x>0?t.max.x:t.min.x,cf.y=s.normal.y>0?t.max.y:t.min.y,cf.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(cf)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Bc=class extends si{constructor(t=[],n=Wa,i,s,a,r,o,l,c,f){super(t,n,i,s,a,r,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Ha=class extends si{constructor(t,n,i=ns,s,a,r,o=an,l=an,c,f=bs,p=1){if(f!==bs&&f!==Ya)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:n,depth:p};super(u,s,a,r,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new tl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return n.compareFunction=this.compareFunction,n}},Rf=class extends Ha{constructor(t,n=ns,i=Wa,s,a,r=an,o=an,l,c=bs){let f={width:t,height:t,depth:1},p=[f,f,f,f,f,f];super(t,t,n,i,s,a,r,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Fc=class extends si{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},il=class e extends As{constructor(t=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],f=[],p=[],u=0,d=0;v("z","y","x",-1,-1,i,n,t,r,a,0),v("z","y","x",1,-1,i,n,-t,r,a,1),v("x","z","y",1,1,t,i,n,s,r,2),v("x","z","y",1,-1,t,i,-n,s,r,3),v("x","y","z",1,-1,t,n,i,s,a,4),v("x","y","z",-1,-1,t,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new zi(c,3)),this.setAttribute("normal",new zi(f,3)),this.setAttribute("uv",new zi(p,2));function v(b,m,h,g,M,y,T,E,w,S,C){let N=y/w,O=T/S,z=y/2,k=T/2,I=E/2,G=w+1,Q=S+1,q=0,$=0,H=new X;for(let W=0;W<Q;W++){let nt=W*O-k;for(let Rt=0;Rt<G;Rt++){let Et=Rt*N-z;H[b]=Et*g,H[m]=nt*M,H[h]=I,c.push(H.x,H.y,H.z),H[b]=0,H[m]=0,H[h]=E>0?1:-1,f.push(H.x,H.y,H.z),p.push(Rt/w),p.push(1-W/S),q+=1}}for(let W=0;W<S;W++)for(let nt=0;nt<w;nt++){let Rt=u+nt+G*W,Et=u+nt+G*(W+1),$t=u+(nt+1)+G*(W+1),Yt=u+(nt+1)+G*W;l.push(Rt,Et,Yt),l.push(Et,$t,Yt),$+=6}o.addGroup(d,$,C),d+=$,u+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Nr=class e extends As{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let a=t/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,f=l+1,p=t/o,u=n/l,d=[],v=[],b=[],m=[];for(let h=0;h<f;h++){let g=h*u-r;for(let M=0;M<c;M++){let y=M*p-a;v.push(y,-g,0),b.push(0,0,1),m.push(M/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let g=0;g<o;g++){let M=g+c*h,y=g+c*(h+1),T=g+1+c*(h+1),E=g+1+c*h;d.push(M,y,E),d.push(y,T,E)}this.setIndex(d),this.setAttribute("position",new zi(v,3)),this.setAttribute("normal",new zi(b,3)),this.setAttribute("uv",new zi(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};function Or(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];if(ib(s))s.isRenderTargetTexture?(Ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone();else if(Array.isArray(s))if(ib(s[0])){let a=[];for(let r=0,o=s.length;r<o;r++)a[r]=s[r].clone();t[n][i]=a}else t[n][i]=s.slice();else t[n][i]=s}}return t}function Vn(e){let t={};for(let n=0;n<e.length;n++){let i=Or(e[n]);for(let s in i)t[s]=i[s]}return t}function ib(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Dw(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Yg(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}var qb={clone:Or,merge:Vn},Uw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mn=class extends Rr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Uw,this.fragmentShader=Lw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Or(t.uniforms),this.uniformsGroups=Dw(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new he().setHex(s.value);break;case"v2":this.uniforms[i].value=new re().fromArray(s.value);break;case"v3":this.uniforms[i].value=new X().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ke().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Wt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new sn().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Nf=class extends Mn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Df=class extends Rr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Db,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Uf=class extends Rr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Zo(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function gg(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Va=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];t:{e:{let r;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],t<s)break e}r=n.length;break n}if(!(t>=a)){let o=n[1];t<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],t>=a)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Lf=class extends Va{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vg,endingEnd:vg}}intervalChanged_(t,n,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case yg:a=t,o=2*n-i;break;case xg:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case yg:r=t,l=2*i-n;break;case xg:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=n}let c=(i-n)*.5,f=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*f,this._offsetNext=r*f}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,d=this._weightNext,v=(i-n)/(s-n),b=v*v,m=b*v,h=-u*m+2*u*b-u*v,g=(1+u)*m+(-1.5-2*u)*b+(-.5+u)*v+1,M=(-1-d)*m+(1.5+d)*b+.5*v,y=d*m-d*b;for(let T=0;T!==o;++T)a[T]=h*r[f+T]+g*r[c+T]+M*r[l+T]+y*r[p+T];return a}},Of=class extends Va{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=(i-n)/(s-n),p=1-f;for(let u=0;u!==o;++u)a[u]=r[c+u]*p+r[l+u]*f;return a}},If=class extends Va{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Pf=class extends Va{interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=this.inTangents,p=this.outTangents;if(!f||!p){let v=(i-n)/(s-n),b=1-v;for(let m=0;m!==o;++m)a[m]=r[c+m]*b+r[l+m]*v;return a}let u=o*2,d=t-1;for(let v=0;v!==o;++v){let b=r[c+v],m=r[l+v],h=d*u+v*2,g=p[h],M=p[h+1],y=t*u+v*2,T=f[y],E=f[y+1],w=Iw(i,n,g,T,s);a[v]=Yb(w,b,M,E,m)}return a}};function Yb(e,t,n,i,s){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*i+e*e*e*s}function Ow(e,t,n,i,s){let a=1-e;return 3*a*a*(n-t)+6*a*e*(i-n)+3*e*e*(s-i)}function Iw(e,t,n,i,s){let a=(e-t)/(s-t);for(let r=0;r<8;r++){let o=Yb(a,t,n,i,s)-e;if(Math.abs(o)<1e-10)break;let l=Ow(a,t,n,i,s);if(Math.abs(l)<1e-10)break;a=Math.max(0,Math.min(1,a-o/l))}return a}var bi=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Zo(n,this.TimeBufferType),this.values=Zo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:Zo(t.times,Array),values:Zo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),gg(t.settings)&&(i.settings={inTangents:Zo(t.settings.inTangents,Array),outTangents:Zo(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new If(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Of(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Lf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let n=new Pf(this.times,this.values,this.getValueSize(),t);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(t){let n;switch(t){case Ec:n=this.InterpolantFactoryMethodDiscrete;break;case bf:n=this.InterpolantFactoryMethodLinear;break;case ff:n=this.InterpolantFactoryMethodSmooth;break;case _g:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ft("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ec;case this.InterpolantFactoryMethodLinear:return bf;case this.InterpolantFactoryMethodSmooth:return ff;case this.InterpolantFactoryMethodBezier:return _g}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t;gg(this.settings)&&(sb(this.settings.inTangents,t),sb(this.settings.outTangents,t))}return this}trim(t,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Vt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(Vt("KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Vt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){Vt("KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(s!==void 0&&hw(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Vt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ff,a=t.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=t[o],f=t[o+1];if(c!==f&&(o!==1||c!==t[0]))if(s)l=!0;else{let p=o*i,u=p-i,d=p+i;for(let v=0;v!==i;++v){let b=n[p+v];if(b!==n[u+v]||b!==n[d+v]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let p=o*i,u=r*i;for(let d=0;d!==i;++d)n[u+d]=n[p+d]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,gg(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function sb(e,t){for(let n=0,i=e.length;n!==i;n+=2)e[n]*=t}bi.prototype.ValueTypeName="";bi.prototype.TimeBufferType=Float32Array;bi.prototype.ValueBufferType=Float32Array;bi.prototype.DefaultInterpolation=bf;var Ga=class extends bi{constructor(t,n,i){super(t,n,i)}};Ga.prototype.ValueTypeName="bool";Ga.prototype.ValueBufferType=Array;Ga.prototype.DefaultInterpolation=Ec;Ga.prototype.InterpolantFactoryMethodLinear=void 0;Ga.prototype.InterpolantFactoryMethodSmooth=void 0;var Bf=class extends bi{constructor(t,n,i,s){super(t,n,i,s)}};Bf.prototype.ValueTypeName="color";var Ff=class extends bi{constructor(t,n,i,s){super(t,n,i,s)}};Ff.prototype.ValueTypeName="number";var zf=class extends Va{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let f=c+o;c!==f;c+=4)Es.slerpFlat(a,0,r,c-o,r,c,l);return a}},zc=class extends bi{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new zf(this.times,this.values,this.getValueSize(),t)}};zc.prototype.ValueTypeName="quaternion";zc.prototype.InterpolantFactoryMethodSmooth=void 0;var ka=class extends bi{constructor(t,n,i){super(t,n,i)}};ka.prototype.ValueTypeName="string";ka.prototype.ValueBufferType=Array;ka.prototype.DefaultInterpolation=Ec;ka.prototype.InterpolantFactoryMethodLinear=void 0;ka.prototype.InterpolantFactoryMethodSmooth=void 0;var Hf=class extends bi{constructor(t,n,i,s){super(t,n,i,s)}};Hf.prototype.ValueTypeName="vector";var Vf=class{constructor(t,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(f){o++,a===!1&&s.onStart!==void 0&&s.onStart(f,r,o),a=!0},this.itemEnd=function(f){r++,s.onProgress!==void 0&&s.onProgress(f,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,p){return c.push(f,p),this},this.removeHandler=function(f){let p=c.indexOf(f);return p!==-1&&c.splice(p,2),this},this.getHandler=function(f){for(let p=0,u=c.length;p<u;p+=2){let d=c[p],v=c[p+1];if(d.global&&(d.lastIndex=0),d.test(f))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Zb=new Vf,Gf=class{constructor(t){this.manager=t!==void 0?t:Zb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,a){i.load(t,s,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Gf.DEFAULT_MATERIAL_NAME="__DEFAULT";var uf=new X,hf=new Es,Ss=new X,Hc=class extends Hi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=ts,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(uf,hf,Ss),Ss.x===1&&Ss.y===1&&Ss.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(uf,hf,Ss.set(1,1,1)).invert()}updateWorldMatrix(t,n,i=!1){super.updateWorldMatrix(t,n,i),this.matrixWorld.decompose(uf,hf,Ss),Ss.x===1&&Ss.y===1&&Ss.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(uf,hf,Ss.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Pa=new X,ab=new re,rb=new re,ii=class extends Hc{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=Tf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(J0*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Tf*2*Math.atan(Math.tan(J0*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Pa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pa.x,Pa.y).multiplyScalar(-t/Pa.z),Pa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pa.x,Pa.y).multiplyScalar(-t/Pa.z)}getViewSize(t,n){return this.getViewBounds(t,ab,rb),n.subVectors(rb,ab)}setViewOffset(t,n,i,s,a,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(J0*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var Dr=class extends Hc{constructor(t=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}};var Jo=-90,Ko=1,kf=class extends Hi{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ii(Jo,Ko,t,n);s.layers=this.layers,this.add(s);let a=new ii(Jo,Ko,t,n);a.layers=this.layers,this.add(a);let r=new ii(Jo,Ko,t,n);r.layers=this.layers,this.add(r);let o=new ii(Jo,Ko,t,n);o.layers=this.layers,this.add(o);let l=new ii(Jo,Ko,t,n);l.layers=this.layers,this.add(l);let c=new ii(Jo,Ko,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(t===ts)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Cc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,f]=this.children,p=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,a),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.generateMipmaps=b,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,f),t.setRenderTarget(p,u,d),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}},Xf=class extends ii{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Zg="\\[\\]\\.:\\/",Pw=new RegExp("["+Zg+"]","g"),Jg="[^"+Zg+"]",Bw="[^"+Zg.replace("\\.","")+"]",Fw=/((?:WC+[\/:])*)/.source.replace("WC",Jg),zw=/(WCOD+)?/.source.replace("WCOD",Bw),Hw=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jg),Vw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jg),Gw=new RegExp("^"+Fw+zw+Hw+Vw+"$"),kw=["material","materials","bones","map"],Sg=class{constructor(t,n,i){let s=i||Xe.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Xe=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Pw,"")}static parseTrackName(t){let n=Gw.exec(t);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);kw.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ft("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){Vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Vt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Vt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===c){c=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Vt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Vt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Vt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=n.nodeName;Vt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Xe.Composite=Sg;Xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Xe.prototype.GetterByBindingType=[Xe.prototype._getValue_direct,Xe.prototype._getValue_array,Xe.prototype._getValue_arrayElement,Xe.prototype._getValue_toArray];Xe.prototype.SetterByBindingTypeAndVersioning=[[Xe.prototype._setValue_direct,Xe.prototype._setValue_direct_setNeedsUpdate,Xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_array,Xe.prototype._setValue_array_setNeedsUpdate,Xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_arrayElement,Xe.prototype._setValue_arrayElement_setNeedsUpdate,Xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_fromArray,Xe.prototype._setValue_fromArray_setNeedsUpdate,Xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var nD=new Float32Array(1);var Mg=class e{static{e.prototype.isMatrix2=!0}constructor(t,n,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,s){let a=this.elements;return a[0]=t,a[2]=n,a[1]=i,a[3]=s,this}};function Kg(e,t,n,i){let s=Xw(i);switch(n){case Vg:return e*t;case kg:return e*t/s.components*s.byteLength;case Qf:return e*t/s.components*s.byteLength;case is:return e*t*2/s.components*s.byteLength;case jf:return e*t*2/s.components*s.byteLength;case Gg:return e*t*3/s.components*s.byteLength;case Hn:return e*t*4/s.components*s.byteLength;case $f:return e*t*4/s.components*s.byteLength;case Wc:case qc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Yc:case Zc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ed:case id:return Math.max(e,16)*Math.max(t,8)/4;case td:case nd:return Math.max(e,8)*Math.max(t,8)/2;case sd:case ad:case od:case ld:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case rd:case Jc:case cd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ud:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case hd:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case fd:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case dd:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case pd:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case md:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case gd:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case _d:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case vd:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case yd:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case xd:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Sd:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Md:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case bd:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Td:case Ed:case Ad:return Math.ceil(e/4)*Math.ceil(t/4)*16;case wd:case Cd:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Kc:case Rd:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Xw(e){switch(e){case Ti:case Bg:return{byteLength:1,components:1};case rl:case Fg:case Ei:return{byteLength:2,components:1};case Jf:case Kf:return{byteLength:2,components:4};case ns:case Zf:case zn:return{byteLength:4,components:1};case zg:case Hg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function g1(){let e=null,t=!1,n=null,i=null;function s(a,r){i=e.requestAnimationFrame(s),n(a,r)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function qw(e){let t=new WeakMap;function n(o,l){let c=o.array,f=o.usage,p=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,f),o.onUploadCallback();let d;if(c instanceof Float32Array)d=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=e.HALF_FLOAT:d=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=e.SHORT;else if(c instanceof Uint32Array)d=e.UNSIGNED_INT;else if(c instanceof Int32Array)d=e.INT;else if(c instanceof Int8Array)d=e.BYTE;else if(c instanceof Uint8Array)d=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){let f=l.array,p=l.updateRanges;if(e.bindBuffer(c,o),p.length===0)e.bufferSubData(c,0,f);else{p.sort((d,v)=>d.start-v.start);let u=0;for(let d=1;d<p.length;d++){let v=p[u],b=p[d];b.start<=v.start+v.count+1?v.count=Math.max(v.count,b.start+b.count-v.start):(++u,p[u]=b)}p.length=u+1;for(let d=0,v=p.length;d<v;d++){let b=p[d];e.bufferSubData(c,b.start*f.BYTES_PER_ELEMENT,f,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let f=t.get(o);(!f||f.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var Yw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Jw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$w=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,tC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eC=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,nC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,iC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,aC=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,rC=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,oC=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lC=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,cC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,dC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,pC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,mC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,gC=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_C=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vC=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,yC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,SC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,MC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bC="gl_FragColor = linearToOutputTexel( gl_FragColor );",TC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,EC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,AC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,wC=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,CC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,RC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,NC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,DC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,UC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,LC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,OC=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,IC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,PC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,BC=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,FC=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,zC=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,HC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,VC=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,GC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kC=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,XC=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,WC=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qC=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,YC=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ZC=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,JC=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,KC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,QC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$C=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,iR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,aR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,oR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,uR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,gR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_R=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,SR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,MR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,bR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,TR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ER=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,AR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,CR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,RR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,NR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,DR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,UR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,LR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,OR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,IR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,PR=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,BR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,FR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,HR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,VR=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,GR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,XR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,WR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,YR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ZR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$R=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,t3=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,e3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,n3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,i3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,s3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a3=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,r3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,o3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,l3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,f3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,p3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,m3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,v3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,M3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,b3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,E3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,A3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,te={alphahash_fragment:Yw,alphahash_pars_fragment:Zw,alphamap_fragment:Jw,alphamap_pars_fragment:Kw,alphatest_fragment:Qw,alphatest_pars_fragment:jw,aomap_fragment:$w,aomap_pars_fragment:tC,batching_pars_vertex:eC,batching_vertex:nC,begin_vertex:iC,beginnormal_vertex:sC,bsdfs:aC,iridescence_fragment:rC,bumpmap_pars_fragment:oC,clipping_planes_fragment:lC,clipping_planes_pars_fragment:cC,clipping_planes_pars_vertex:uC,clipping_planes_vertex:hC,color_fragment:fC,color_pars_fragment:dC,color_pars_vertex:pC,color_vertex:mC,common:gC,cube_uv_reflection_fragment:_C,defaultnormal_vertex:vC,displacementmap_pars_vertex:yC,displacementmap_vertex:xC,emissivemap_fragment:SC,emissivemap_pars_fragment:MC,colorspace_fragment:bC,colorspace_pars_fragment:TC,envmap_fragment:EC,envmap_common_pars_fragment:AC,envmap_pars_fragment:wC,envmap_pars_vertex:CC,envmap_physical_pars_fragment:zC,envmap_vertex:RC,fog_vertex:NC,fog_pars_vertex:DC,fog_fragment:UC,fog_pars_fragment:LC,gradientmap_pars_fragment:OC,lightmap_pars_fragment:IC,lights_lambert_fragment:PC,lights_lambert_pars_fragment:BC,lights_pars_begin:FC,lights_toon_fragment:HC,lights_toon_pars_fragment:VC,lights_phong_fragment:GC,lights_phong_pars_fragment:kC,lights_physical_fragment:XC,lights_physical_pars_fragment:WC,lights_fragment_begin:qC,lights_fragment_maps:YC,lights_fragment_end:ZC,lightprobes_pars_fragment:JC,logdepthbuf_fragment:KC,logdepthbuf_pars_fragment:QC,logdepthbuf_pars_vertex:jC,logdepthbuf_vertex:$C,map_fragment:tR,map_pars_fragment:eR,map_particle_fragment:nR,map_particle_pars_fragment:iR,metalnessmap_fragment:sR,metalnessmap_pars_fragment:aR,morphinstance_vertex:rR,morphcolor_vertex:oR,morphnormal_vertex:lR,morphtarget_pars_vertex:cR,morphtarget_vertex:uR,normal_fragment_begin:hR,normal_fragment_maps:fR,normal_pars_fragment:dR,normal_pars_vertex:pR,normal_vertex:mR,normalmap_pars_fragment:gR,clearcoat_normal_fragment_begin:_R,clearcoat_normal_fragment_maps:vR,clearcoat_pars_fragment:yR,iridescence_pars_fragment:xR,opaque_fragment:SR,packing:MR,premultiplied_alpha_fragment:bR,project_vertex:TR,dithering_fragment:ER,dithering_pars_fragment:AR,roughnessmap_fragment:wR,roughnessmap_pars_fragment:CR,shadowmap_pars_fragment:RR,shadowmap_pars_vertex:NR,shadowmap_vertex:DR,shadowmask_pars_fragment:UR,skinbase_vertex:LR,skinning_pars_vertex:OR,skinning_vertex:IR,skinnormal_vertex:PR,specularmap_fragment:BR,specularmap_pars_fragment:FR,tonemapping_fragment:zR,tonemapping_pars_fragment:HR,transmission_fragment:VR,transmission_pars_fragment:GR,uv_pars_fragment:kR,uv_pars_vertex:XR,uv_vertex:WR,worldpos_vertex:qR,background_vert:YR,background_frag:ZR,backgroundCube_vert:JR,backgroundCube_frag:KR,cube_vert:QR,cube_frag:jR,depth_vert:$R,depth_frag:t3,distance_vert:e3,distance_frag:n3,equirect_vert:i3,equirect_frag:s3,linedashed_vert:a3,linedashed_frag:r3,meshbasic_vert:o3,meshbasic_frag:l3,meshlambert_vert:c3,meshlambert_frag:u3,meshmatcap_vert:h3,meshmatcap_frag:f3,meshnormal_vert:d3,meshnormal_frag:p3,meshphong_vert:m3,meshphong_frag:g3,meshphysical_vert:_3,meshphysical_frag:v3,meshtoon_vert:y3,meshtoon_frag:x3,points_vert:S3,points_frag:M3,shadow_vert:b3,shadow_frag:T3,sprite_vert:E3,sprite_frag:A3},St={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new X},probesMax:{value:new X},probesResolution:{value:new X}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},Rs={basic:{uniforms:Vn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:Vn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new he(0)},envMapIntensity:{value:1}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:Vn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:Vn([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:Vn([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new he(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:Vn([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:Vn([St.points,St.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:Vn([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:Vn([St.common,St.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:Vn([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:Vn([St.sprite,St.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distance:{uniforms:Vn([St.common,St.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distance_vert,fragmentShader:te.distance_frag},shadow:{uniforms:Vn([St.lights,St.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};Rs.physical={uniforms:Vn([Rs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new he(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new he(0)},specularColor:{value:new he(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};var Ud={r:0,b:0,g:0},w3=new sn,_1=new Wt;_1.set(-1,0,0,0,1,0,0,0,1);function C3(e,t,n,i,s,a){let r=new he(0),o=s===!0?0:1,l,c,f=null,p=0,u=null;function d(g){let M=g.isScene===!0?g.background:null;if(M&&M.isTexture){let y=g.backgroundBlurriness>0;M=t.get(M,y)}return M}function v(g){let M=!1,y=d(g);y===null?m(r,o):y&&y.isColor&&(m(y,1),M=!0);let T=e.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function b(g,M){let y=d(M);y&&(y.isCubeTexture||y.mapping===kc)?(c===void 0&&(c=new ai(new il(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:Or(Rs.backgroundCube.uniforms),vertexShader:Rs.backgroundCube.vertexShader,fragmentShader:Rs.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(w3.makeRotationFromEuler(M.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(_1),c.material.toneMapped=ce.getTransfer(y.colorSpace)!==Ae,(f!==y||p!==y.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,f=y,p=y.version,u=e.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ai(new Nr(2,2),new Mn({name:"BackgroundMaterial",uniforms:Or(Rs.background.uniforms),vertexShader:Rs.background.vertexShader,fragmentShader:Rs.background.fragmentShader,side:Xa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ce.getTransfer(y.colorSpace)!==Ae,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||p!==y.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,f=y,p=y.version,u=e.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function m(g,M){g.getRGB(Ud,Yg(e)),n.buffers.color.setClear(Ud.r,Ud.g,Ud.b,M,a)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(g,M=1){r.set(g),o=M,m(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,m(r,o)},render:v,addToRenderList:b,dispose:h}}function R3(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=u(null),a=s,r=!1;function o(O,z,k,I,G){let Q=!1,q=p(O,I,k,z);a!==q&&(a=q,c(a.object)),Q=d(O,I,k,G),Q&&v(O,I,k,G),G!==null&&t.update(G,e.ELEMENT_ARRAY_BUFFER),(Q||r)&&(r=!1,y(O,z,k,I),G!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return e.createVertexArray()}function c(O){return e.bindVertexArray(O)}function f(O){return e.deleteVertexArray(O)}function p(O,z,k,I){let G=I.wireframe===!0,Q=i[z.id];Q===void 0&&(Q={},i[z.id]=Q);let q=O.isInstancedMesh===!0?O.id:0,$=Q[q];$===void 0&&($={},Q[q]=$);let H=$[k.id];H===void 0&&(H={},$[k.id]=H);let W=H[G];return W===void 0&&(W=u(l()),H[G]=W),W}function u(O){let z=[],k=[],I=[];for(let G=0;G<n;G++)z[G]=0,k[G]=0,I[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:k,attributeDivisors:I,object:O,attributes:{},index:null}}function d(O,z,k,I){let G=a.attributes,Q=z.attributes,q=0,$=k.getAttributes();for(let H in $)if($[H].location>=0){let nt=G[H],Rt=Q[H];if(Rt===void 0&&(H==="instanceMatrix"&&O.instanceMatrix&&(Rt=O.instanceMatrix),H==="instanceColor"&&O.instanceColor&&(Rt=O.instanceColor)),nt===void 0||nt.attribute!==Rt||Rt&&nt.data!==Rt.data)return!0;q++}return a.attributesNum!==q||a.index!==I}function v(O,z,k,I){let G={},Q=z.attributes,q=0,$=k.getAttributes();for(let H in $)if($[H].location>=0){let nt=Q[H];nt===void 0&&(H==="instanceMatrix"&&O.instanceMatrix&&(nt=O.instanceMatrix),H==="instanceColor"&&O.instanceColor&&(nt=O.instanceColor));let Rt={};Rt.attribute=nt,nt&&nt.data&&(Rt.data=nt.data),G[H]=Rt,q++}a.attributes=G,a.attributesNum=q,a.index=I}function b(){let O=a.newAttributes;for(let z=0,k=O.length;z<k;z++)O[z]=0}function m(O){h(O,0)}function h(O,z){let k=a.newAttributes,I=a.enabledAttributes,G=a.attributeDivisors;k[O]=1,I[O]===0&&(e.enableVertexAttribArray(O),I[O]=1),G[O]!==z&&(e.vertexAttribDivisor(O,z),G[O]=z)}function g(){let O=a.newAttributes,z=a.enabledAttributes;for(let k=0,I=z.length;k<I;k++)z[k]!==O[k]&&(e.disableVertexAttribArray(k),z[k]=0)}function M(O,z,k,I,G,Q,q){q===!0?e.vertexAttribIPointer(O,z,k,G,Q):e.vertexAttribPointer(O,z,k,I,G,Q)}function y(O,z,k,I){b();let G=I.attributes,Q=k.getAttributes(),q=z.defaultAttributeValues;for(let $ in Q){let H=Q[$];if(H.location>=0){let W=G[$];if(W===void 0&&($==="instanceMatrix"&&O.instanceMatrix&&(W=O.instanceMatrix),$==="instanceColor"&&O.instanceColor&&(W=O.instanceColor)),W!==void 0){let nt=W.normalized,Rt=W.itemSize,Et=t.get(W);if(Et===void 0)continue;let $t=Et.buffer,Yt=Et.type,Kt=Et.bytesPerElement,J=Yt===e.INT||Yt===e.UNSIGNED_INT||W.gpuType===Zf;if(W.isInterleavedBufferAttribute){let et=W.data,Tt=et.stride,It=W.offset;if(et.isInstancedInterleavedBuffer){for(let yt=0;yt<H.locationSize;yt++)h(H.location+yt,et.meshPerAttribute);O.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let yt=0;yt<H.locationSize;yt++)m(H.location+yt);e.bindBuffer(e.ARRAY_BUFFER,$t);for(let yt=0;yt<H.locationSize;yt++)M(H.location+yt,Rt/H.locationSize,Yt,nt,Tt*Kt,(It+Rt/H.locationSize*yt)*Kt,J)}else{if(W.isInstancedBufferAttribute){for(let et=0;et<H.locationSize;et++)h(H.location+et,W.meshPerAttribute);O.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let et=0;et<H.locationSize;et++)m(H.location+et);e.bindBuffer(e.ARRAY_BUFFER,$t);for(let et=0;et<H.locationSize;et++)M(H.location+et,Rt/H.locationSize,Yt,nt,Rt*Kt,Rt/H.locationSize*et*Kt,J)}}else if(q!==void 0){let nt=q[$];if(nt!==void 0)switch(nt.length){case 2:e.vertexAttrib2fv(H.location,nt);break;case 3:e.vertexAttrib3fv(H.location,nt);break;case 4:e.vertexAttrib4fv(H.location,nt);break;default:e.vertexAttrib1fv(H.location,nt)}}}}g()}function T(){C();for(let O in i){let z=i[O];for(let k in z){let I=z[k];for(let G in I){let Q=I[G];for(let q in Q)f(Q[q].object),delete Q[q];delete I[G]}}delete i[O]}}function E(O){if(i[O.id]===void 0)return;let z=i[O.id];for(let k in z){let I=z[k];for(let G in I){let Q=I[G];for(let q in Q)f(Q[q].object),delete Q[q];delete I[G]}}delete i[O.id]}function w(O){for(let z in i){let k=i[z];for(let I in k){let G=k[I];if(G[O.id]===void 0)continue;let Q=G[O.id];for(let q in Q)f(Q[q].object),delete Q[q];delete G[O.id]}}}function S(O){for(let z in i){let k=i[z],I=O.isInstancedMesh===!0?O.id:0,G=k[I];if(G!==void 0){for(let Q in G){let q=G[Q];for(let $ in q)f(q[$].object),delete q[$];delete G[Q]}delete k[I],Object.keys(k).length===0&&delete i[z]}}}function C(){N(),r=!0,a!==s&&(a=s,c(a.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:N,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:S,releaseStatesOfProgram:w,initAttributes:b,enableAttribute:m,disableUnusedAttributes:g}}function N3(e,t,n){let i;function s(l){i=l}function a(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,f){f!==0&&(e.drawArraysInstanced(i,l,c,f),n.update(c,i,f))}function o(l,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let u=0;for(let d=0;d<f;d++)u+=c[d];n.update(u,i,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function D3(e,t,n,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(w){return!(w!==Hn&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let S=w===Ei&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Ti&&w!==zn&&!S&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",f=l(c);f!==c&&(Ft("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let p=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&Ft("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),h=e.getParameter(e.MAX_VERTEX_ATTRIBS),g=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),M=e.getParameter(e.MAX_VARYING_VECTORS),y=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),T=e.getParameter(e.MAX_SAMPLES),E=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:v,maxTextureSize:b,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:g,maxVaryings:M,maxFragmentUniforms:y,maxSamples:T,samples:E}}function U3(e){let t=this,n=null,i=0,s=!1,a=!1,r=new $i,o=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let d=p.length!==0||u||i!==0||s;return s=u,i=p.length,d},this.beginShadows=function(){a=!0,f(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,u){n=f(p,u,0)},this.setState=function(p,u,d){let v=p.clippingPlanes,b=p.clipIntersection,m=p.clipShadows,h=e.get(p);if(!s||v===null||v.length===0||a&&!m)a?f(null):c();else{let g=a?0:i,M=g*4,y=h.clippingState||null;l.value=y,y=f(v,u,M,d);for(let T=0;T!==M;++T)y[T]=n[T];h.clippingState=y,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(p,u,d,v){let b=p!==null?p.length:0,m=null;if(b!==0){if(m=l.value,v!==!0||m===null){let h=d+b*4,g=u.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<h)&&(m=new Float32Array(h));for(let M=0,y=d;M!==b;++M,y+=4)r.copy(p[M]).applyMatrix4(g,o),r.normal.toArray(m,y),m[y+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,m}}var cl=4,L3=6,O3=20,I3=256,jc=new Dr,Jb=new he,Qg=null,jg=0,$g=0,t_=!1,P3=new X,Ir=new X,Od=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,s=100,a={}){let{size:r=256,position:o=P3}=a;Qg=this._renderer.getRenderTarget(),jg=this._renderer.getActiveCubeFace(),$g=this._renderer.getActiveMipmapLevel(),t_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jb(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qb(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Qg,jg,$g),this._renderer.xr.enabled=t_,t.scissorTest=!1,ll(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Wa||t.mapping===Lr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qg=this._renderer.getRenderTarget(),jg=this._renderer.getActiveCubeFace(),$g=this._renderer.getActiveMipmapLevel(),t_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:Ei,format:Hn,colorSpace:Ac,depthBuffer:!1},s=Kb(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kb(t,n,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=B3(a)),this._blurMaterial=z3(a,t,n),this._ggxMaterial=F3(a,t,n)}return s}_compileMaterial(t){let n=new ai(new As,t);this._renderer.compile(n,jc)}_sceneToCubeUV(t,n,i,s,a){let l=new ii(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,d=p.toneMapping;p.getClearColor(Jb),p.toneMapping=es,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ai(new il,new Ic({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,m=b.material,h=!1,g=t.background;g?g.isColor&&(m.color.copy(g),t.background=null,h=!0):(m.color.copy(Jb),h=!0);for(let M=0;M<6;M++){let y=M%3;y===0?(l.up.set(0,c[M],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+f[M],a.y,a.z)):y===1?(l.up.set(0,0,c[M]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+f[M],a.z)):(l.up.set(0,c[M],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+f[M]));let T=this._cubeSize;ll(s,y*T,M>2?T:0,T,T),p.setRenderTarget(s),h&&p.render(b,l),p.render(t,l)}p.toneMapping=d,p.autoClear=u,t.background=g}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===Wa||t.mapping===Lr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jb()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qb());let a=s?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=a;let o=a.uniforms;o.envMap.value=t;let l=this._cubeSize;ll(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,jc)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodMeshes.length;for(let a=1;a<s;a++)this._applyGGXFilter(t,a-1,a);n.autoClear=i}_applyGGXFilter(t,n,i){let s=this._renderer,a=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;let l=r.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),p=Math.sqrt(c*c-f*f),u=c*1.25,d=p*u,{_lodMax:v}=this,b=this._sizeLods[i],m=3*b*(i>v-cl?i-v+cl:0),h=4*(this._cubeSize-b);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=v-n,ll(a,m,h,3*b,2*b),s.setRenderTarget(a),s.render(o,jc),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=v-i,ll(t,m,h,3*b,2*b),s.setRenderTarget(t),s.render(o,jc)}_blur(t,n,i,s){let a=this._pingPongRenderTarget,r=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,a,n,i,r),this._blurPass(a,t,i,i,r)}_blurPass(t,n,i,s,a){let r=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=a,c.mipInt.value=this._lodMax-i;let f=this._sizeLods[s],p=3*f*(s>this._lodMax-cl?s-this._lodMax+cl:0),u=4*(this._cubeSize-f);ll(n,p,u,3*f,2*f),r.setRenderTarget(n),r.render(l,jc)}};function B3(e){let t=[],n=[],i=e,s=e-cl+1+L3;for(let a=0;a<s;a++){let r=Math.pow(2,i);t.push(r);let o=1/(r-2),l=-o,c=1+o,f=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,u=6,d=3,v=new Float32Array(d*u*p),b=new Float32Array(d*u*p);for(let h=0;h<p;h++){let g=h%3*2/3-1,M=h>2?0:-1,y=[g,M,0,g+2/3,M,0,g+2/3,M+1,0,g,M,0,g+2/3,M+1,0,g,M+1,0];v.set(y,d*u*h);for(let T=0;T<u;T++){let E=f[T*2]*2-1,w=f[T*2+1]*2-1;h===0?Ir.set(1,w,E):h===1?Ir.set(-E,1,-w):h===2?Ir.set(-E,w,1):h===3?Ir.set(-1,w,-E):h===4?Ir.set(-E,-1,w):Ir.set(E,w,-1),Ir.toArray(b,(h*u+T)*d)}}let m=new As;m.setAttribute("position",new Fi(v,d)),m.setAttribute("outputDirection",new Fi(b,d)),n.push(new ai(m,null)),i>cl&&i--}return{lodMeshes:n,sizeLods:t}}function Kb(e,t,n){let i=new Fn(e,t,n);return i.texture.mapping=kc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ll(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function F3(e,t,n){return new Mn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:I3,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Bd(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function z3(e,t,n){return new Mn({name:"SphericalGaussianBlur",defines:{SAMPLES:O3,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Bd(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Qb(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function jb(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Bd(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Id=class extends Fn{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Bc(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new il(5,5,5),a=new Mn({name:"CubemapFromEquirect",uniforms:Or(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yn,blending:Vi});a.uniforms.tEquirect.value=n;let r=new ai(s,a),o=n.minFilter;return n.minFilter===qa&&(n.minFilter=hn),new kf(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,s);t.setRenderTarget(a)}};function H3(e){let t=new WeakMap,n=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?r(u):a(u)}function a(u){if(u&&u.isTexture){let d=u.mapping;if(d===Wf||d===qf)if(t.has(u)){let v=t.get(u).texture;return o(v,u.mapping)}else{let v=u.image;if(v&&v.height>0){let b=new Id(v.height);return b.fromEquirectangularTexture(e,u),t.set(u,b),u.addEventListener("dispose",c),o(b.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){let d=u.mapping,v=d===Wf||d===qf,b=d===Wa||d===Lr;if(v||b){let m=n.get(u),h=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return i===null&&(i=new Od(e)),m=v?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),m.texture;if(m!==void 0)return m.texture;{let g=u.image;return v&&g&&g.height>0||b&&g&&l(g)?(i===null&&(i=new Od(e)),m=v?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),u.addEventListener("dispose",f),m.texture):null}}}return u}function o(u,d){return d===Wf?u.mapping=Wa:d===qf&&(u.mapping=Lr),u}function l(u){let d=0,v=6;for(let b=0;b<v;b++)u[b]!==void 0&&d++;return d===v}function c(u){let d=u.target;d.removeEventListener("dispose",c);let v=t.get(d);v!==void 0&&(t.delete(d),v.dispose())}function f(u){let d=u.target;d.removeEventListener("dispose",f);let v=n.get(d);v!==void 0&&(n.delete(d),v.dispose())}function p(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:p}}function V3(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s=e.getExtension(i);return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&Cr("WebGLRenderer: "+i+" extension not supported."),s}}}function G3(e,t,n,i){let s={},a=new WeakMap;function r(p){let u=p.target;u.index!==null&&t.remove(u.index);for(let v in u.attributes)t.remove(u.attributes[v]);u.removeEventListener("dispose",r),delete s[u.id];let d=a.get(u);d&&(t.remove(d),a.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(p,u){return s[u.id]===!0||(u.addEventListener("dispose",r),s[u.id]=!0,n.memory.geometries++),u}function l(p){let u=p.attributes;for(let d in u)t.update(u[d],e.ARRAY_BUFFER)}function c(p){let u=[],d=p.index,v=p.attributes.position,b=0;if(v===void 0)return;if(d!==null){let g=d.array;b=d.version;for(let M=0,y=g.length;M<y;M+=3){let T=g[M+0],E=g[M+1],w=g[M+2];u.push(T,E,E,w,w,T)}}else{let g=v.array;b=v.version;for(let M=0,y=g.length/3-1;M<y;M+=3){let T=M+0,E=M+1,w=M+2;u.push(T,E,E,w,w,T)}}let m=new(v.count>=65535?Oc:Lc)(u,1);m.version=b;let h=a.get(p);h&&t.remove(h),a.set(p,m)}function f(p){let u=a.get(p);if(u){let d=p.index;d!==null&&u.version<d.version&&c(p)}else c(p);return a.get(p)}return{get:o,update:l,getWireframeAttribute:f}}function k3(e,t,n){let i;function s(p){i=p}let a,r;function o(p){a=p.type,r=p.bytesPerElement}function l(p,u){e.drawElements(i,u,a,p*r),n.update(u,i,1)}function c(p,u,d){d!==0&&(e.drawElementsInstanced(i,u,a,p*r,d),n.update(u,i,d))}function f(p,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,a,p,0,d);let b=0;for(let m=0;m<d;m++)b+=u[m];n.update(b,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function X3(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:Vt("WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function W3(e,t,n){let i=new WeakMap,s=new Ke;function a(r,o,l){let c=r.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=f!==void 0?f.length:0,u=i.get(o);if(u===void 0||u.count!==p){let C=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",C)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],g=o.morphAttributes.color||[],M=0;d===!0&&(M=1),v===!0&&(M=2),b===!0&&(M=3);let y=o.attributes.position.count*M,T=1;y>t.maxTextureSize&&(T=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let E=new Float32Array(y*T*4*p),w=new Nc(E,y,T,p);w.type=zn,w.needsUpdate=!0;let S=M*4;for(let N=0;N<p;N++){let O=m[N],z=h[N],k=g[N],I=y*T*4*N;for(let G=0;G<O.count;G++){let Q=G*S;d===!0&&(s.fromBufferAttribute(O,G),E[I+Q+0]=s.x,E[I+Q+1]=s.y,E[I+Q+2]=s.z,E[I+Q+3]=0),v===!0&&(s.fromBufferAttribute(z,G),E[I+Q+4]=s.x,E[I+Q+5]=s.y,E[I+Q+6]=s.z,E[I+Q+7]=0),b===!0&&(s.fromBufferAttribute(k,G),E[I+Q+8]=s.x,E[I+Q+9]=s.y,E[I+Q+10]=s.z,E[I+Q+11]=k.itemSize===4?s.w:1)}}u={count:p,texture:w,size:new re(y,T)},i.set(o,u),o.addEventListener("dispose",C)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let d=0;for(let b=0;b<c.length;b++)d+=c[b];let v=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(e,"morphTargetBaseInfluence",v),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:a}}function q3(e,t,n,i,s){let a=new WeakMap;function r(c){let f=s.render.frame,p=c.geometry,u=t.get(c,p);if(a.get(u)!==f&&(t.update(u),a.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==f&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),a.set(c,f))),c.isSkinnedMesh){let d=c.skeleton;a.get(d)!==f&&(d.update(),a.set(d,f))}return u}function o(){a=new WeakMap}function l(c){let f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:r,dispose:o}}var Y3={[Rg]:"LINEAR_TONE_MAPPING",[Ng]:"REINHARD_TONE_MAPPING",[Dg]:"CINEON_TONE_MAPPING",[Ug]:"ACES_FILMIC_TONE_MAPPING",[Og]:"AGX_TONE_MAPPING",[Ig]:"NEUTRAL_TONE_MAPPING",[Lg]:"CUSTOM_TONE_MAPPING"};function Z3(e,t,n,i,s,a){let r=new Fn(t,n,{type:e,depthBuffer:s,stencilBuffer:a,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new As;c.setAttribute("position",new zi([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new zi([0,2,0,0,2,0],2));let f=new Nf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new ai(c,f),u=new Dr(-1,1,1,-1,0,1),d=null,v=null,b=!1,m,h=null,g=[],M=!1;this.setSize=function(y,T){r.setSize(y,T),o!==null&&o.setSize(y,T),l!==null&&l.setSize(y,T);for(let E=0;E<g.length;E++){let w=g[E];w.setSize&&w.setSize(y,T)}},this.setEffects=function(y){g=y,M=g.length>0&&g[0].isRenderPass===!0;let T=r.width,E=r.height;g.length>0&&o===null&&(o=new Fn(T,E,{type:Ei,depthBuffer:!1,stencilBuffer:!1}),l=new Fn(T,E,{type:Ei,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<g.length;w++){let S=g[w];S.setSize&&S.setSize(T,E)}},this.begin=function(y,T){if(b||y.toneMapping===es&&g.length===0)return!1;if(h=T,T!==null){let E=T.width,w=T.height;(r.width!==E||r.height!==w)&&this.setSize(E,w)}return M===!1&&y.setRenderTarget(r),m=y.toneMapping,y.toneMapping=es,!0},this.hasRenderPass=function(){return M},this.end=function(y,T){y.toneMapping=m,b=!0;let E=r,w=o;for(let S=0;S<g.length;S++){let C=g[S];C.enabled!==!1&&(C.render(y,w,E,T),C.needsSwap!==!1&&(E=w,w=w===o?l:o))}if(d!==y.outputColorSpace||v!==y.toneMapping){d=y.outputColorSpace,v=y.toneMapping,f.defines={},ce.getTransfer(d)===Ae&&(f.defines.SRGB_TRANSFER="");let S=Y3[v];S&&(f.defines[S]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(h),y.render(p,u),h=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),f.dispose()}}var v1=new si,i_=new Ha(1,1),y1=new Nc,x1=new wf,S1=new Bc,$b=[],t1=[],e1=new Float32Array(16),n1=new Float32Array(9),i1=new Float32Array(4);function hl(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,a=$b[s];if(a===void 0&&(a=new Float32Array(s),$b[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(a,o)}return a}function mn(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function gn(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Fd(e,t){let n=t1[t];n===void 0&&(n=new Int32Array(t),t1[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function J3(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function K3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(mn(n,t))return;e.uniform2fv(this.addr,t),gn(n,t)}}function Q3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(mn(n,t))return;e.uniform3fv(this.addr,t),gn(n,t)}}function j3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(mn(n,t))return;e.uniform4fv(this.addr,t),gn(n,t)}}function $3(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(mn(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),gn(n,t)}else{if(mn(n,i))return;i1.set(i),e.uniformMatrix2fv(this.addr,!1,i1),gn(n,i)}}function t2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(mn(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),gn(n,t)}else{if(mn(n,i))return;n1.set(i),e.uniformMatrix3fv(this.addr,!1,n1),gn(n,i)}}function e2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(mn(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),gn(n,t)}else{if(mn(n,i))return;e1.set(i),e.uniformMatrix4fv(this.addr,!1,e1),gn(n,i)}}function n2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function i2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(mn(n,t))return;e.uniform2iv(this.addr,t),gn(n,t)}}function s2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(mn(n,t))return;e.uniform3iv(this.addr,t),gn(n,t)}}function a2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(mn(n,t))return;e.uniform4iv(this.addr,t),gn(n,t)}}function r2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function o2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(mn(n,t))return;e.uniform2uiv(this.addr,t),gn(n,t)}}function l2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(mn(n,t))return;e.uniform3uiv(this.addr,t),gn(n,t)}}function c2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(mn(n,t))return;e.uniform4uiv(this.addr,t),gn(n,t)}}function u2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_2D_SHADOW?(i_.compareFunction=n.isReversedDepthBuffer()?Dd:Nd,a=i_):a=v1,n.setTexture2D(t||a,s)}function h2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||x1,s)}function f2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||S1,s)}function d2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||y1,s)}function p2(e){switch(e){case 5126:return J3;case 35664:return K3;case 35665:return Q3;case 35666:return j3;case 35674:return $3;case 35675:return t2;case 35676:return e2;case 5124:case 35670:return n2;case 35667:case 35671:return i2;case 35668:case 35672:return s2;case 35669:case 35673:return a2;case 5125:return r2;case 36294:return o2;case 36295:return l2;case 36296:return c2;case 35678:case 36198:case 36298:case 36306:case 35682:return u2;case 35679:case 36299:case 36307:return h2;case 35680:case 36300:case 36308:case 36293:return f2;case 36289:case 36303:case 36311:case 36292:return d2}}function m2(e,t){e.uniform1fv(this.addr,t)}function g2(e,t){let n=hl(t,this.size,2);e.uniform2fv(this.addr,n)}function _2(e,t){let n=hl(t,this.size,3);e.uniform3fv(this.addr,n)}function v2(e,t){let n=hl(t,this.size,4);e.uniform4fv(this.addr,n)}function y2(e,t){let n=hl(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function x2(e,t){let n=hl(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function S2(e,t){let n=hl(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function M2(e,t){e.uniform1iv(this.addr,t)}function b2(e,t){e.uniform2iv(this.addr,t)}function T2(e,t){e.uniform3iv(this.addr,t)}function E2(e,t){e.uniform4iv(this.addr,t)}function A2(e,t){e.uniform1uiv(this.addr,t)}function w2(e,t){e.uniform2uiv(this.addr,t)}function C2(e,t){e.uniform3uiv(this.addr,t)}function R2(e,t){e.uniform4uiv(this.addr,t)}function N2(e,t,n){let i=this.cache,s=t.length,a=Fd(n,s);mn(i,a)||(e.uniform1iv(this.addr,a),gn(i,a));let r;this.type===e.SAMPLER_2D_SHADOW?r=i_:r=v1;for(let o=0;o!==s;++o)n.setTexture2D(t[o]||r,a[o])}function D2(e,t,n){let i=this.cache,s=t.length,a=Fd(n,s);mn(i,a)||(e.uniform1iv(this.addr,a),gn(i,a));for(let r=0;r!==s;++r)n.setTexture3D(t[r]||x1,a[r])}function U2(e,t,n){let i=this.cache,s=t.length,a=Fd(n,s);mn(i,a)||(e.uniform1iv(this.addr,a),gn(i,a));for(let r=0;r!==s;++r)n.setTextureCube(t[r]||S1,a[r])}function L2(e,t,n){let i=this.cache,s=t.length,a=Fd(n,s);mn(i,a)||(e.uniform1iv(this.addr,a),gn(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(t[r]||y1,a[r])}function O2(e){switch(e){case 5126:return m2;case 35664:return g2;case 35665:return _2;case 35666:return v2;case 35674:return y2;case 35675:return x2;case 35676:return S2;case 5124:case 35670:return M2;case 35667:case 35671:return b2;case 35668:case 35672:return T2;case 35669:case 35673:return E2;case 5125:return A2;case 36294:return w2;case 36295:return C2;case 36296:return R2;case 35678:case 36198:case 36298:case 36306:case 35682:return N2;case 35679:case 36299:case 36307:return D2;case 35680:case 36300:case 36308:case 36293:return U2;case 36289:case 36303:case 36311:case 36292:return L2}}var s_=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=p2(n.type)}},a_=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=O2(n.type)}},r_=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,n[o.id],i)}}},e_=/(\w+)(\])?(\[|\.)?/g;function s1(e,t){e.seq.push(t),e.map[t.id]=t}function I2(e,t,n){let i=e.name,s=i.length;for(e_.lastIndex=0;;){let a=e_.exec(i),r=e_.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){s1(n,c===void 0?new s_(o,e,t):new a_(o,e,t));break}else{let p=n.map[o];p===void 0&&(p=new r_(o),s1(n,p)),n=p}}}var ul=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let o=t.getActiveUniform(n,r),l=t.getUniformLocation(n,o.name);I2(o,l,this)}let s=[],a=[];for(let r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(t,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in n&&i.push(r)}return i}};function a1(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var P2=37297,B2=0;function F2(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var r1=new Wt;function z2(e){ce._getMatrix(r1,ce.workingColorSpace,e);let t=`mat3( ${r1.elements.map(n=>n.toFixed(4))} )`;switch(ce.getTransfer(e)){case wc:return[t,"LinearTransferOETF"];case Ae:return[t,"sRGBTransferOETF"];default:return Ft("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function o1(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+F2(e.getShaderSource(t),o)}else return a}function H2(e,t){let n=z2(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var V2={[Rg]:"Linear",[Ng]:"Reinhard",[Dg]:"Cineon",[Ug]:"ACESFilmic",[Og]:"AgX",[Ig]:"Neutral",[Lg]:"Custom"};function G2(e,t){let n=V2[t];return n===void 0?(Ft("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Ld=new X;function k2(){ce.getLuminanceCoefficients(Ld);let e=Ld.x.toFixed(4),t=Ld.y.toFixed(4),n=Ld.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function X2(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tu).join(`
`)}function W2(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function q2(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=e.getActiveAttrib(t,s),r=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function tu(e){return e!==""}function l1(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function c1(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Y2=/^[ \t]*#include +<([\w\d./]+)>/gm;function o_(e){return e.replace(Y2,J2)}var Z2=new Map;function J2(e,t){let n=te[t];if(n===void 0){let i=Z2.get(t);if(i!==void 0)n=te[i],Ft('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return o_(n)}var K2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function u1(e){return e.replace(K2,Q2)}function Q2(e,t,n,i){let s="";for(let a=parseInt(t);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function h1(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var j2={[Vc]:"SHADOWMAP_TYPE_PCF",[sl]:"SHADOWMAP_TYPE_VSM"};function $2(e){return j2[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var tN={[Wa]:"ENVMAP_TYPE_CUBE",[Lr]:"ENVMAP_TYPE_CUBE",[kc]:"ENVMAP_TYPE_CUBE_UV"};function eN(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":tN[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var nN={[Lr]:"ENVMAP_MODE_REFRACTION"};function iN(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":nN[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var sN={[Cg]:"ENVMAP_BLENDING_MULTIPLY",[Cb]:"ENVMAP_BLENDING_MIX",[Rb]:"ENVMAP_BLENDING_ADD"};function aN(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":sN[e.combine]||"ENVMAP_BLENDING_NONE"}function rN(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function oN(e,t,n,i){let s=e.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=$2(n),c=eN(n),f=iN(n),p=aN(n),u=rN(n),d=X2(n),v=W2(a),b=s.createProgram(),m,h,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(tu).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(tu).join(`
`),h.length>0&&(h+=`
`)):(m=[h1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tu).join(`
`),h=[h1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==es?"#define TONE_MAPPING":"",n.toneMapping!==es?te.tonemapping_pars_fragment:"",n.toneMapping!==es?G2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,H2("linearToOutputTexel",n.outputColorSpace),k2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(tu).join(`
`)),r=o_(r),r=l1(r,n),r=c1(r,n),o=o_(o),o=l1(o,n),o=c1(o,n),r=u1(r),o=u1(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===Wg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Wg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let M=g+m+r,y=g+h+o,T=a1(s,s.VERTEX_SHADER,M),E=a1(s,s.FRAGMENT_SHADER,y);s.attachShader(b,T),s.attachShader(b,E),n.index0AttributeName!==void 0?s.bindAttribLocation(b,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function w(O){if(e.debug.checkShaderErrors){let z=s.getProgramInfoLog(b)||"",k=s.getShaderInfoLog(T)||"",I=s.getShaderInfoLog(E)||"",G=z.trim(),Q=k.trim(),q=I.trim(),$=!0,H=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if($=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,b,T,E);else{let W=o1(s,T,"vertex"),nt=o1(s,E,"fragment");Vt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+G+`
`+W+`
`+nt)}else G!==""?Ft("WebGLProgram: Program Info Log:",G):(Q===""||q==="")&&(H=!1);H&&(O.diagnostics={runnable:$,programLog:G,vertexShader:{log:Q,prefix:m},fragmentShader:{log:q,prefix:h}})}s.deleteShader(T),s.deleteShader(E),S=new ul(s,b),C=q2(s,b)}let S;this.getUniforms=function(){return S===void 0&&w(this),S};let C;this.getAttributes=function(){return C===void 0&&w(this),C};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(b,P2)),N},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=B2++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=T,this.fragmentShader=E,this}var lN=0,l_=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,i){let s=this._getShaderCacheForMaterial(t);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new c_(t),n.set(t,i)),i}},c_=class{constructor(t){this.id=lN++,this.code=t,this.usedTimes=0}};function cN(e){return e===is||e===Jc||e===Kc}function uN(e,t,n,i,s,a){let r=new Dc,o=new l_,l=new Set,c=[],f=new Map,p=i.logarithmicDepthBuffer,u=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return l.add(S),S===0?"uv":`uv${S}`}function b(S,C,N,O,z,k){let I=O.fog,G=z.geometry,Q=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?O.environment:null,q=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,$=t.get(S.envMap||Q,q),H=$&&$.mapping===kc?$.image.height:null,W=d[S.type];S.precision!==null&&(u=i.getMaxPrecision(S.precision),u!==S.precision&&Ft("WebGLProgram.getParameters:",S.precision,"not supported, using",u,"instead."));let nt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Rt=nt!==void 0?nt.length:0,Et=0;G.morphAttributes.position!==void 0&&(Et=1),G.morphAttributes.normal!==void 0&&(Et=2),G.morphAttributes.color!==void 0&&(Et=3);let $t,Yt,Kt,J;if(W){let Le=Rs[W];$t=Le.vertexShader,Yt=Le.fragmentShader}else{$t=S.vertexShader,Yt=S.fragmentShader;let Le=o.getVertexShaderStage(S),_e=o.getFragmentShaderStage(S);o.update(S,Le,_e),Kt=Le.id,J=_e.id}let et=e.getRenderTarget(),Tt=e.state.buffers.depth.getReversed(),It=z.isInstancedMesh===!0,yt=z.isBatchedMesh===!0,Ot=!!S.map,fe=!!S.matcap,Zt=!!$,ie=!!S.aoMap,we=!!S.lightMap,Gt=!!S.bumpMap&&S.wireframe===!1,pe=!!S.normalMap,Qe=!!S.displacementMap,bn=!!S.emissiveMap,ge=!!S.metalnessMap,Ye=!!S.roughnessMap,L=S.anisotropy>0,Ze=S.clearcoat>0,de=S.dispersion>0,A=S.retroreflectivity>0,_=S.iridescence>0,F=S.sheen>0,V=S.transmission>0,Y=L&&!!S.anisotropyMap,ut=Ze&&!!S.clearcoatMap,ht=Ze&&!!S.clearcoatNormalMap,Z=Ze&&!!S.clearcoatRoughnessMap,K=_&&!!S.iridescenceMap,mt=_&&!!S.iridescenceThicknessMap,Ut=F&&!!S.sheenColorMap,vt=F&&!!S.sheenRoughnessMap,pt=!!S.specularMap,Dt=!!S.specularColorMap,Pt=!!S.specularIntensityMap,kt=V&&!!S.transmissionMap,D=V&&!!S.thicknessMap,gt=!!S.gradientMap,j=!!S.alphaMap,_t=S.alphaTest>0,xt=!!S.alphaHash,st=!!S.extensions,Lt=es;S.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Lt=e.toneMapping);let Nt={shaderID:W,shaderType:S.type,shaderName:S.name,vertexShader:$t,fragmentShader:Yt,defines:S.defines,customVertexShaderID:Kt,customFragmentShaderID:J,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:u,batching:yt,batchingColor:yt&&z._colorsTexture!==null,instancing:It,instancingColor:It&&z.instanceColor!==null,instancingMorph:It&&z.morphTexture!==null,outputColorSpace:et===null?e.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:ce.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:Ot,matcap:fe,envMap:Zt,envMapMode:Zt&&$.mapping,envMapCubeUVHeight:H,aoMap:ie,lightMap:we,bumpMap:Gt,normalMap:pe,displacementMap:Qe,emissiveMap:bn,normalMapObjectSpace:pe&&S.normalMapType===Ub,normalMapTangentSpace:pe&&S.normalMapType===Xg,packedNormalMap:pe&&S.normalMapType===Xg&&cN(S.normalMap.format),metalnessMap:ge,roughnessMap:Ye,anisotropy:L,anisotropyMap:Y,clearcoat:Ze,clearcoatMap:ut,clearcoatNormalMap:ht,clearcoatRoughnessMap:Z,dispersion:de,retroreflection:A,iridescence:_,iridescenceMap:K,iridescenceThicknessMap:mt,sheen:F,sheenColorMap:Ut,sheenRoughnessMap:vt,specularMap:pt,specularColorMap:Dt,specularIntensityMap:Pt,transmission:V,transmissionMap:kt,thicknessMap:D,gradientMap:gt,opaque:S.transparent===!1&&S.blending===al&&S.alphaToCoverage===!1,alphaMap:j,alphaTest:_t,alphaHash:xt,combine:S.combine,mapUv:Ot&&v(S.map.channel),aoMapUv:ie&&v(S.aoMap.channel),lightMapUv:we&&v(S.lightMap.channel),bumpMapUv:Gt&&v(S.bumpMap.channel),normalMapUv:pe&&v(S.normalMap.channel),displacementMapUv:Qe&&v(S.displacementMap.channel),emissiveMapUv:bn&&v(S.emissiveMap.channel),metalnessMapUv:ge&&v(S.metalnessMap.channel),roughnessMapUv:Ye&&v(S.roughnessMap.channel),anisotropyMapUv:Y&&v(S.anisotropyMap.channel),clearcoatMapUv:ut&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:ht&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:vt&&v(S.sheenRoughnessMap.channel),specularMapUv:pt&&v(S.specularMap.channel),specularColorMapUv:Dt&&v(S.specularColorMap.channel),specularIntensityMapUv:Pt&&v(S.specularIntensityMap.channel),transmissionMapUv:kt&&v(S.transmissionMap.channel),thicknessMapUv:D&&v(S.thicknessMap.channel),alphaMapUv:j&&v(S.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(pe||L),vertexNormals:!!G.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!G.attributes.uv&&(Ot||j),fog:!!I,useFog:S.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||G.attributes.normal===void 0&&pe===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Tt,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:Et,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:e.shadowMap.enabled&&N.length>0,shadowMapType:e.shadowMap.type,toneMapping:Lt,decodeVideoTexture:Ot&&S.map.isVideoTexture===!0&&ce.getTransfer(S.map.colorSpace)===Ae,decodeVideoTextureEmissive:bn&&S.emissiveMap.isVideoTexture===!0&&ce.getTransfer(S.emissiveMap.colorSpace)===Ae,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ws,flipSided:S.side===Yn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:st&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&S.extensions.multiDraw===!0||yt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Nt.vertexUv1s=l.has(1),Nt.vertexUv2s=l.has(2),Nt.vertexUv3s=l.has(3),l.clear(),Nt}function m(S){let C=[];if(S.shaderID?C.push(S.shaderID):(C.push(S.customVertexShaderID),C.push(S.customFragmentShaderID)),S.defines!==void 0)for(let N in S.defines)C.push(N),C.push(S.defines[N]);return S.isRawShaderMaterial===!1&&(h(C,S),g(C,S),C.push(e.outputColorSpace)),C.push(S.customProgramCacheKey),C.join()}function h(S,C){S.push(C.precision),S.push(C.outputColorSpace),S.push(C.envMapMode),S.push(C.envMapCubeUVHeight),S.push(C.mapUv),S.push(C.alphaMapUv),S.push(C.lightMapUv),S.push(C.aoMapUv),S.push(C.bumpMapUv),S.push(C.normalMapUv),S.push(C.displacementMapUv),S.push(C.emissiveMapUv),S.push(C.metalnessMapUv),S.push(C.roughnessMapUv),S.push(C.anisotropyMapUv),S.push(C.clearcoatMapUv),S.push(C.clearcoatNormalMapUv),S.push(C.clearcoatRoughnessMapUv),S.push(C.iridescenceMapUv),S.push(C.iridescenceThicknessMapUv),S.push(C.sheenColorMapUv),S.push(C.sheenRoughnessMapUv),S.push(C.specularMapUv),S.push(C.specularColorMapUv),S.push(C.specularIntensityMapUv),S.push(C.transmissionMapUv),S.push(C.thicknessMapUv),S.push(C.combine),S.push(C.fogExp2),S.push(C.sizeAttenuation),S.push(C.morphTargetsCount),S.push(C.morphAttributeCount),S.push(C.numSunLights),S.push(C.numDirLights),S.push(C.numPointLights),S.push(C.numSpotLights),S.push(C.numSpotLightMaps),S.push(C.numHemiLights),S.push(C.numRectAreaLights),S.push(C.numSunLightShadows),S.push(C.numDirLightShadows),S.push(C.numPointLightShadows),S.push(C.numSpotLightShadows),S.push(C.numSpotLightShadowsWithMaps),S.push(C.numLightProbes),S.push(C.shadowMapType),S.push(C.toneMapping),S.push(C.numClippingPlanes),S.push(C.numClipIntersection),S.push(C.depthPacking)}function g(S,C){r.disableAll(),C.instancing&&r.enable(0),C.instancingColor&&r.enable(1),C.instancingMorph&&r.enable(2),C.matcap&&r.enable(3),C.envMap&&r.enable(4),C.normalMapObjectSpace&&r.enable(5),C.normalMapTangentSpace&&r.enable(6),C.clearcoat&&r.enable(7),C.iridescence&&r.enable(8),C.alphaTest&&r.enable(9),C.vertexColors&&r.enable(10),C.vertexAlphas&&r.enable(11),C.vertexUv1s&&r.enable(12),C.vertexUv2s&&r.enable(13),C.vertexUv3s&&r.enable(14),C.vertexTangents&&r.enable(15),C.anisotropy&&r.enable(16),C.alphaHash&&r.enable(17),C.batching&&r.enable(18),C.dispersion&&r.enable(19),C.retroreflection&&r.enable(24),C.batchingColor&&r.enable(20),C.gradientMap&&r.enable(21),C.packedNormalMap&&r.enable(22),C.vertexNormals&&r.enable(23),S.push(r.mask),r.disableAll(),C.fog&&r.enable(0),C.useFog&&r.enable(1),C.flatShading&&r.enable(2),C.logarithmicDepthBuffer&&r.enable(3),C.reversedDepthBuffer&&r.enable(4),C.skinning&&r.enable(5),C.morphTargets&&r.enable(6),C.morphNormals&&r.enable(7),C.morphColors&&r.enable(8),C.premultipliedAlpha&&r.enable(9),C.shadowMapEnabled&&r.enable(10),C.doubleSided&&r.enable(11),C.flipSided&&r.enable(12),C.useDepthPacking&&r.enable(13),C.dithering&&r.enable(14),C.transmission&&r.enable(15),C.sheen&&r.enable(16),C.opaque&&r.enable(17),C.pointsUvs&&r.enable(18),C.decodeVideoTexture&&r.enable(19),C.decodeVideoTextureEmissive&&r.enable(20),C.alphaToCoverage&&r.enable(21),C.numLightProbeGrids>0&&r.enable(22),C.hasPositionAttribute&&r.enable(23),S.push(r.mask)}function M(S){let C=d[S.type],N;if(C){let O=Rs[C];N=qb.clone(O.uniforms)}else N=S.uniforms;return N}function y(S,C){let N=f.get(C);return N!==void 0?++N.usedTimes:(N=new oN(e,C,S,s),c.push(N),f.set(C,N)),N}function T(S){if(--S.usedTimes===0){let C=c.indexOf(S);c[C]=c[c.length-1],c.pop(),f.delete(S.cacheKey),S.destroy()}}function E(S){o.remove(S)}function w(){o.dispose()}return{getParameters:b,getProgramCacheKey:m,getUniforms:M,acquireProgram:y,releaseProgram:T,releaseShaderCache:E,programs:c,dispose:w}}function hN(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function s(r,o,l){e.get(r)[o]=l}function a(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:a}}function fN(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function f1(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function d1(){let e=[],t=0,n=[],i=[],s=[];function a(){t=0,n.length=0,i.length=0,s.length=0}function r(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,v,b,m,h){let g=e[t];return g===void 0?(g={id:u.id,object:u,geometry:d,material:v,materialVariant:r(u),groupOrder:b,renderOrder:u.renderOrder,z:m,group:h},e[t]=g):(g.id=u.id,g.object=u,g.geometry=d,g.material=v,g.materialVariant=r(u),g.groupOrder=b,g.renderOrder=u.renderOrder,g.z=m,g.group=h),t++,g}function l(u,d,v,b,m,h,g){g.reversedDepth===!0&&(m=-m);let M=o(u,d,v,b,m,h);v.transmission>0?i.push(M):v.transparent===!0?s.push(M):n.push(M)}function c(u,d,v,b,m,h){let g=o(u,d,v,b,m,h);v.transmission>0?i.unshift(g):v.transparent===!0?s.unshift(g):n.unshift(g)}function f(u,d){n.length>1&&n.sort(u||fN),i.length>1&&i.sort(d||f1),s.length>1&&s.sort(d||f1)}function p(){for(let u=t,d=e.length;u<d;u++){let v=e[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:l,unshift:c,finish:p,sort:f}}function dN(){let e=new WeakMap;function t(i,s){let a=e.get(i),r;return a===void 0?(r=new d1,e.set(i,[r])):s>=a.length?(r=new d1,a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function pN(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={direction:new X,color:new he};break;case"SpotLight":n={position:new X,direction:new X,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new he,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new he,groundColor:new he};break;case"RectAreaLight":n={color:new he,position:new X,halfWidth:new X,halfHeight:new X};break}return e[t.id]=n,n}}}function mN(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var gN=0;function _N(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function vN(e){let t=new pN,n=mN(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new X);let s=new X,a=new sn,r=new sn;function o(c){let f=0,p=0,u=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let d=0,v=0,b=0,m=0,h=0,g=0,M=0,y=0,T=0,E=0,w=0,S=0,C=0,N=0;c.sort(_N);for(let z=0,k=c.length;z<k;z++){let I=c[z],G=I.color,Q=I.intensity,q=I.distance,$=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===is?$=I.shadow.map.texture:$=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)f+=G.r*Q,p+=G.g*Q,u+=G.b*Q;else if(I.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(I.sh.coefficients[H],Q);N++}else if(I.isSunLight){let H=t.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let W=I.shadow,nt=n.get(I);nt.shadowIntensity=W.intensity,nt.shadowBias=W.bias,nt.shadowNormalBias=W.normalBias,nt.shadowRadius=W.radius,nt.shadowMapSize.copy(W.mapSize).multiply(W.getFrameExtents()),i.sunShadow[v]=nt,i.sunShadowMap[v]=$;let Rt=W.getViewportCount();for(let Et=0;Et<Rt;Et++)i.sunShadowMatrix[b+Et]=W.getMatrix(Et),i.sunShadowCascade[b+Et]=W._cascadeData[Et];b+=Rt,v++}i.sun[d]=H,d++}else if(I.isDirectionalLight){let H=t.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let W=I.shadow,nt=n.get(I);nt.shadowIntensity=W.intensity,nt.shadowBias=W.bias,nt.shadowNormalBias=W.normalBias,nt.shadowRadius=W.radius,nt.shadowMapSize=W.mapSize,i.directionalShadow[m]=nt,i.directionalShadowMap[m]=$,i.directionalShadowMatrix[m]=I.shadow.matrix,T++}i.directional[m]=H,m++}else if(I.isSpotLight){let H=t.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(G).multiplyScalar(Q),H.distance=q,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,i.spot[g]=H;let W=I.shadow;if(I.map&&(i.spotLightMap[S]=I.map,S++,W.updateMatrices(I),I.castShadow&&C++),i.spotLightMatrix[g]=W.matrix,I.castShadow){let nt=n.get(I);nt.shadowIntensity=W.intensity,nt.shadowBias=W.bias,nt.shadowNormalBias=W.normalBias,nt.shadowRadius=W.radius,nt.shadowMapSize=W.mapSize,i.spotShadow[g]=nt,i.spotShadowMap[g]=$,w++}g++}else if(I.isRectAreaLight){let H=t.get(I);H.color.copy(G).multiplyScalar(Q),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),i.rectArea[M]=H,M++}else if(I.isPointLight){let H=t.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),H.distance=I.distance,H.decay=I.decay,I.castShadow){let W=I.shadow,nt=n.get(I);nt.shadowIntensity=W.intensity,nt.shadowBias=W.bias,nt.shadowNormalBias=W.normalBias,nt.shadowRadius=W.radius,nt.shadowMapSize=W.mapSize,nt.shadowCameraNear=W.camera.near,nt.shadowCameraFar=W.camera.far,i.pointShadow[h]=nt,i.pointShadowMap[h]=$,i.pointShadowMatrix[h]=I.shadow.matrix,E++}i.point[h]=H,h++}else if(I.isHemisphereLight){let H=t.get(I);H.skyColor.copy(I.color).multiplyScalar(Q),H.groundColor.copy(I.groundColor).multiplyScalar(Q),i.hemi[y]=H,y++}}M>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=St.LTC_FLOAT_1,i.rectAreaLTC2=St.LTC_FLOAT_2):(i.rectAreaLTC1=St.LTC_HALF_1,i.rectAreaLTC2=St.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=u;let O=i.hash;(O.sunLength!==d||O.directionalLength!==m||O.pointLength!==h||O.spotLength!==g||O.rectAreaLength!==M||O.hemiLength!==y||O.numSunShadows!==v||O.numDirectionalShadows!==T||O.numPointShadows!==E||O.numSpotShadows!==w||O.numSpotMaps!==S||O.numLightProbes!==N)&&(i.sun.length=d,i.directional.length=m,i.spot.length=g,i.rectArea.length=M,i.point.length=h,i.hemi.length=y,i.sunShadow.length=v,i.sunShadowMap.length=v,i.sunShadowMatrix.length=b,i.sunShadowCascade.length=b,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=w,i.spotShadowMap.length=w,i.spotLightMatrix.length=w+S-C,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=N,O.sunLength=d,O.directionalLength=m,O.pointLength=h,O.spotLength=g,O.rectAreaLength=M,O.hemiLength=y,O.numSunShadows=v,O.numDirectionalShadows=T,O.numPointShadows=E,O.numSpotShadows=w,O.numSpotMaps=S,O.numLightProbes=N,i.version=gN++)}function l(c,f){let p=0,u=0,d=0,v=0,b=0,m=0,h=f.matrixWorldInverse;for(let g=0,M=c.length;g<M;g++){let y=c[g];if(y.isSunLight){let T=i.sun[p];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(h),p++}else if(y.isDirectionalLight){let T=i.directional[u];T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(h),u++}else if(y.isSpotLight){let T=i.spot[v];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(h),T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(h),v++}else if(y.isRectAreaLight){let T=i.rectArea[b];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(h),r.identity(),a.copy(y.matrixWorld),a.premultiply(h),r.extractRotation(a),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(r),T.halfHeight.applyMatrix4(r),b++}else if(y.isPointLight){let T=i.point[d];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(h),d++}else if(y.isHemisphereLight){let T=i.hemi[m];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(h),m++}}}return{setup:o,setupView:l,state:i}}function p1(e){let t=new vN(e),n=[],i=[],s=[];function a(u){p.camera=u,n.length=0,i.length=0,s.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function l(u){s.push(u)}function c(){t.setup(n)}function f(u){t.setupView(n,u)}let p={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:p,setupLights:c,setupLightsView:f,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function yN(e){let t=new WeakMap;function n(s,a=0){let r=t.get(s),o;return r===void 0?(o=new p1(e),t.set(s,[o])):a>=r.length?(o=new p1(e),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var xN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,SN=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,MN=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],bN=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],m1=new sn,$c=new X,n_=new X;function TN(e,t,n){let i=new Pc,s=new re,a=new re,r=new Ke,o=new Df,l=new Uf,c={},f=n.maxTextureSize,p={[Xa]:Yn,[Yn]:Xa,[ws]:ws},u=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:xN,fragmentShader:SN}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let v=new As;v.setAttribute("position",new Fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new ai(v,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vc;let h=this.type;this.render=function(E,w,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===cb&&(Ft("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Vc);let C=e.getRenderTarget(),N=e.getActiveCubeFace(),O=e.getActiveMipmapLevel(),z=e.state;z.setBlending(Vi),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let k=h!==this.type;k&&w.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(G=>G.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,G=E.length;I<G;I++){let Q=E[I],q=Q.shadow;if(q===void 0){Ft("WebGLShadowMap:",Q,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let $=q.getFrameExtents();s.multiply($),a.copy(q.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(a.x=Math.floor(f/$.x),s.x=a.x*$.x,q.mapSize.x=a.x),s.y>f&&(a.y=Math.floor(f/$.y),s.y=a.y*$.y,q.mapSize.y=a.y));let H=e.state.buffers.depth.getReversed();if(q.camera._reversedDepth=H,q.map===null||k===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===sl){if(Q.isPointLight){Ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Fn(s.x,s.y,{format:is,type:Ei,minFilter:hn,magFilter:hn,generateMipmaps:!1}),q.map.texture.name=Q.name+".shadowMap",q.map.depthTexture=new Ha(s.x,s.y,zn),q.map.depthTexture.name=Q.name+".shadowMapDepth",q.map.depthTexture.format=bs,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=an,q.map.depthTexture.magFilter=an}else Q.isPointLight?(q.map=new Id(s.x),q.map.depthTexture=new Rf(s.x,ns)):(q.map=new Fn(s.x,s.y),q.map.depthTexture=new Ha(s.x,s.y,ns)),q.map.depthTexture.name=Q.name+".shadowMap",q.map.depthTexture.format=bs,this.type===Vc?(q.map.depthTexture.compareFunction=H?Dd:Nd,q.map.depthTexture.minFilter=hn,q.map.depthTexture.magFilter=hn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=an,q.map.depthTexture.magFilter=an);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);let W=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();Q.isPointLight!==!0&&q.updateMatrices(Q,S);for(let nt=0;nt<W;nt++){let Rt=q.getCamera(nt);if(Q.isPointLight){let Et=q.camera,$t=q.matrix,Yt=Q.distance||Et.far;Yt!==Et.far&&(Et.far=Yt,Et.updateProjectionMatrix()),$c.setFromMatrixPosition(Q.matrixWorld),Et.position.copy($c),n_.copy(Et.position),n_.add(MN[nt]),Et.up.copy(bN[nt]),Et.lookAt(n_),Et.updateMatrixWorld(),$t.makeTranslation(-$c.x,-$c.y,-$c.z),m1.multiplyMatrices(Et.projectionMatrix,Et.matrixWorldInverse),q._frustum.setFromProjectionMatrix(m1,Et.coordinateSystem,Et.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)e.setRenderTarget(q.map,nt),e.clear();else{nt===0&&(e.setRenderTarget(q.map),e.clear());let Et=q.getViewport(nt);r.set(a.x*Et.x,a.y*Et.y,a.x*Et.z,a.y*Et.w),z.viewport(r)}i=q.getFrustum(nt),y(w,S,Rt,Q,this.type)}q.isPointLightShadow!==!0&&this.type===sl&&g(q,S),q.needsUpdate=!1}h=this.type,m.needsUpdate=!1,e.setRenderTarget(C,N,O)};function g(E,w){let S=t.update(b);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new Fn(s.x,s.y,{format:is,type:Ei}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,e.setRenderTarget(E.mapPass),e.clear(),e.renderBufferDirect(w,null,S,u,b,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,e.setRenderTarget(E.map),e.clear(),e.renderBufferDirect(w,null,S,d,b,null)}function M(E,w,S,C){let N=null,O=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(O!==void 0)N=O;else if(N=S.isPointLight===!0?l:o,e.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let z=N.uuid,k=w.uuid,I=c[z];I===void 0&&(I={},c[z]=I);let G=I[k];G===void 0&&(G=N.clone(),I[k]=G,w.addEventListener("dispose",T)),N=G}if(N.visible=w.visible,N.wireframe=w.wireframe,C===sl?N.side=w.shadowSide!==null?w.shadowSide:w.side:N.side=w.shadowSide!==null?w.shadowSide:p[w.side],N.alphaMap=w.alphaMap,N.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,N.map=w.map,N.clipShadows=w.clipShadows,N.clippingPlanes=w.clippingPlanes,N.clipIntersection=w.clipIntersection,N.displacementMap=w.displacementMap,N.displacementScale=w.displacementScale,N.displacementBias=w.displacementBias,N.wireframeLinewidth=w.wireframeLinewidth,N.linewidth=w.linewidth,S.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let z=e.properties.get(N);z.light=S}return N}function y(E,w,S,C,N){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&N===sl)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);let k=t.update(E),I=E.material;if(Array.isArray(I)){let G=k.groups;for(let Q=0,q=G.length;Q<q;Q++){let $=G[Q],H=I[$.materialIndex];if(H&&H.visible){let W=M(E,H,C,N);E.onBeforeShadow(e,E,w,S,k,W,$),e.renderBufferDirect(S,null,k,W,E,$),E.onAfterShadow(e,E,w,S,k,W,$)}}}else if(I.visible){let G=M(E,I,C,N);E.onBeforeShadow(e,E,w,S,k,G,null),e.renderBufferDirect(S,null,k,G,E,null),E.onAfterShadow(e,E,w,S,k,G,null)}}let z=E.children;for(let k=0,I=z.length;k<I;k++)y(z[k],w,S,C,N)}function T(E){E.target.removeEventListener("dispose",T);for(let S in c){let C=c[S],N=E.target.uuid;N in C&&(C[N].dispose(),delete C[N])}}}function EN(e,t){function n(){let D=!1,gt=new Ke,j=null,_t=new Ke(0,0,0,0);return{setMask:function(xt){j!==xt&&!D&&(e.colorMask(xt,xt,xt,xt),j=xt)},setLocked:function(xt){D=xt},setClear:function(xt,st,Lt,Nt,Le){Le===!0&&(xt*=Nt,st*=Nt,Lt*=Nt),gt.set(xt,st,Lt,Nt),_t.equals(gt)===!1&&(e.clearColor(xt,st,Lt,Nt),_t.copy(gt))},reset:function(){D=!1,j=null,_t.set(-1,0,0,0)}}}function i(){let D=!1,gt=!1,j=null,_t=null,xt=null;return{setReversed:function(st){if(gt!==st){let Lt=t.get("EXT_clip_control");st?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT),gt=st;let Nt=xt;xt=null,this.setClear(Nt)}},getReversed:function(){return gt},setTest:function(st){st?et(e.DEPTH_TEST):Tt(e.DEPTH_TEST)},setMask:function(st){j!==st&&!D&&(e.depthMask(st),j=st)},setFunc:function(st){if(gt&&(st=Xb[st]),_t!==st){switch(st){case pf:e.depthFunc(e.NEVER);break;case mf:e.depthFunc(e.ALWAYS);break;case gf:e.depthFunc(e.LESS);break;case jo:e.depthFunc(e.LEQUAL);break;case _f:e.depthFunc(e.EQUAL);break;case vf:e.depthFunc(e.GEQUAL);break;case yf:e.depthFunc(e.GREATER);break;case xf:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}_t=st}},setLocked:function(st){D=st},setClear:function(st){xt!==st&&(xt=st,gt&&(st=1-st),e.clearDepth(st))},reset:function(){D=!1,j=null,_t=null,xt=null,gt=!1}}}function s(){let D=!1,gt=null,j=null,_t=null,xt=null,st=null,Lt=null,Nt=null,Le=null;return{setTest:function(_e){D||(_e?et(e.STENCIL_TEST):Tt(e.STENCIL_TEST))},setMask:function(_e){gt!==_e&&!D&&(e.stencilMask(_e),gt=_e)},setFunc:function(_e,li,Zn){(j!==_e||_t!==li||xt!==Zn)&&(e.stencilFunc(_e,li,Zn),j=_e,_t=li,xt=Zn)},setOp:function(_e,li,Zn){(st!==_e||Lt!==li||Nt!==Zn)&&(e.stencilOp(_e,li,Zn),st=_e,Lt=li,Nt=Zn)},setLocked:function(_e){D=_e},setClear:function(_e){Le!==_e&&(e.clearStencil(_e),Le=_e)},reset:function(){D=!1,gt=null,j=null,_t=null,xt=null,st=null,Lt=null,Nt=null,Le=null}}}let a=new n,r=new i,o=new s,l=new WeakMap,c=new WeakMap,f={},p={},u={},d=new WeakMap,v=[],b=null,m=!1,h=null,g=null,M=null,y=null,T=null,E=null,w=null,S=new he(0,0,0),C=0,N=!1,O=null,z=null,k=null,I=null,G=null,Q=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,$=0,H=e.getParameter(e.VERSION);H.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(H)[1]),q=$>=1):H.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),q=$>=2);let W=null,nt={},Rt=e.getParameter(e.SCISSOR_BOX),Et=e.getParameter(e.VIEWPORT),$t=new Ke().fromArray(Rt),Yt=new Ke().fromArray(Et);function Kt(D,gt,j,_t){let xt=new Uint8Array(4),st=e.createTexture();e.bindTexture(D,st),e.texParameteri(D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(D,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Lt=0;Lt<j;Lt++)D===e.TEXTURE_3D||D===e.TEXTURE_2D_ARRAY?e.texImage3D(gt,0,e.RGBA,1,1,_t,0,e.RGBA,e.UNSIGNED_BYTE,xt):e.texImage2D(gt+Lt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,xt);return st}let J={};J[e.TEXTURE_2D]=Kt(e.TEXTURE_2D,e.TEXTURE_2D,1),J[e.TEXTURE_CUBE_MAP]=Kt(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[e.TEXTURE_2D_ARRAY]=Kt(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),J[e.TEXTURE_3D]=Kt(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),et(e.DEPTH_TEST),r.setFunc(jo),Gt(!1),pe(bg),et(e.CULL_FACE),ie(Vi);function et(D){f[D]!==!0&&(e.enable(D),f[D]=!0)}function Tt(D){f[D]!==!1&&(e.disable(D),f[D]=!1)}function It(D,gt){return u[D]!==gt?(e.bindFramebuffer(D,gt),u[D]=gt,D===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=gt),D===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=gt),!0):!1}function yt(D,gt){let j=v,_t=!1;if(D){j=d.get(gt),j===void 0&&(j=[],d.set(gt,j));let xt=D.textures;if(j.length!==xt.length||j[0]!==e.COLOR_ATTACHMENT0){for(let st=0,Lt=xt.length;st<Lt;st++)j[st]=e.COLOR_ATTACHMENT0+st;j.length=xt.length,_t=!0}}else j[0]!==e.BACK&&(j[0]=e.BACK,_t=!0);_t&&e.drawBuffers(j)}function Ot(D){return b!==D?(e.useProgram(D),b=D,!0):!1}let fe={[Ur]:e.FUNC_ADD,[hb]:e.FUNC_SUBTRACT,[fb]:e.FUNC_REVERSE_SUBTRACT};fe[db]=e.MIN,fe[pb]=e.MAX;let Zt={[mb]:e.ZERO,[gb]:e.ONE,[_b]:e.SRC_COLOR,[Ag]:e.SRC_ALPHA,[bb]:e.SRC_ALPHA_SATURATE,[Sb]:e.DST_COLOR,[yb]:e.DST_ALPHA,[vb]:e.ONE_MINUS_SRC_COLOR,[wg]:e.ONE_MINUS_SRC_ALPHA,[Mb]:e.ONE_MINUS_DST_COLOR,[xb]:e.ONE_MINUS_DST_ALPHA,[Tb]:e.CONSTANT_COLOR,[Eb]:e.ONE_MINUS_CONSTANT_COLOR,[Ab]:e.CONSTANT_ALPHA,[wb]:e.ONE_MINUS_CONSTANT_ALPHA};function ie(D,gt,j,_t,xt,st,Lt,Nt,Le,_e){if(D===Vi){m===!0&&(Tt(e.BLEND),m=!1);return}if(m===!1&&(et(e.BLEND),m=!0),D!==ub){if(D!==h||_e!==N){if((g!==Ur||T!==Ur)&&(e.blendEquation(e.FUNC_ADD),g=Ur,T=Ur),_e)switch(D){case al:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Gc:e.blendFunc(e.ONE,e.ONE);break;case Tg:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Eg:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Vt("WebGLState: Invalid blending: ",D);break}else switch(D){case al:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Gc:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Tg:Vt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Eg:Vt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Vt("WebGLState: Invalid blending: ",D);break}M=null,y=null,E=null,w=null,S.set(0,0,0),C=0,h=D,N=_e}return}xt=xt||gt,st=st||j,Lt=Lt||_t,(gt!==g||xt!==T)&&(e.blendEquationSeparate(fe[gt],fe[xt]),g=gt,T=xt),(j!==M||_t!==y||st!==E||Lt!==w)&&(e.blendFuncSeparate(Zt[j],Zt[_t],Zt[st],Zt[Lt]),M=j,y=_t,E=st,w=Lt),(Nt.equals(S)===!1||Le!==C)&&(e.blendColor(Nt.r,Nt.g,Nt.b,Le),S.copy(Nt),C=Le),h=D,N=!1}function we(D,gt){D.side===ws?Tt(e.CULL_FACE):et(e.CULL_FACE);let j=D.side===Yn;gt&&(j=!j),Gt(j),D.blending===al&&D.transparent===!1?ie(Vi):ie(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),a.setMask(D.colorWrite);let _t=D.stencilWrite;o.setTest(_t),_t&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),bn(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?et(e.SAMPLE_ALPHA_TO_COVERAGE):Tt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(D){O!==D&&(D?e.frontFace(e.CW):e.frontFace(e.CCW),O=D)}function pe(D){D!==ob?(et(e.CULL_FACE),D!==z&&(D===bg?e.cullFace(e.BACK):D===lb?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Tt(e.CULL_FACE),z=D}function Qe(D){D!==k&&(q&&e.lineWidth(D),k=D)}function bn(D,gt,j){D?(et(e.POLYGON_OFFSET_FILL),(I!==gt||G!==j)&&(I=gt,G=j,r.getReversed()&&(gt=-gt),e.polygonOffset(gt,j))):Tt(e.POLYGON_OFFSET_FILL)}function ge(D){D?et(e.SCISSOR_TEST):Tt(e.SCISSOR_TEST)}function Ye(D){D===void 0&&(D=e.TEXTURE0+Q-1),W!==D&&(e.activeTexture(D),W=D)}function L(D,gt,j){j===void 0&&(W===null?j=e.TEXTURE0+Q-1:j=W);let _t=nt[j];_t===void 0&&(_t={type:void 0,texture:void 0},nt[j]=_t),(_t.type!==D||_t.texture!==gt)&&(W!==j&&(e.activeTexture(j),W=j),e.bindTexture(D,gt||J[D]),_t.type=D,_t.texture=gt)}function Ze(){let D=nt[W];D!==void 0&&D.type!==void 0&&(e.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function de(){try{e.compressedTexImage2D(...arguments)}catch(D){Vt("WebGLState:",D)}}function A(){try{e.compressedTexImage3D(...arguments)}catch(D){Vt("WebGLState:",D)}}function _(){try{e.texSubImage2D(...arguments)}catch(D){Vt("WebGLState:",D)}}function F(){try{e.texSubImage3D(...arguments)}catch(D){Vt("WebGLState:",D)}}function V(){try{e.compressedTexSubImage2D(...arguments)}catch(D){Vt("WebGLState:",D)}}function Y(){try{e.compressedTexSubImage3D(...arguments)}catch(D){Vt("WebGLState:",D)}}function ut(){try{e.texStorage2D(...arguments)}catch(D){Vt("WebGLState:",D)}}function ht(){try{e.texStorage3D(...arguments)}catch(D){Vt("WebGLState:",D)}}function Z(){try{e.texImage2D(...arguments)}catch(D){Vt("WebGLState:",D)}}function K(){try{e.texImage3D(...arguments)}catch(D){Vt("WebGLState:",D)}}function mt(D){return p[D]!==void 0?p[D]:e.getParameter(D)}function Ut(D,gt){p[D]!==gt&&(e.pixelStorei(D,gt),p[D]=gt)}function vt(D){$t.equals(D)===!1&&(e.scissor(D.x,D.y,D.z,D.w),$t.copy(D))}function pt(D){Yt.equals(D)===!1&&(e.viewport(D.x,D.y,D.z,D.w),Yt.copy(D))}function Dt(D,gt){let j=c.get(gt);j===void 0&&(j=new WeakMap,c.set(gt,j));let _t=j.get(D);_t===void 0&&(_t=e.getUniformBlockIndex(gt,D.name),j.set(D,_t))}function Pt(D,gt){let _t=c.get(gt).get(D);l.get(gt)!==_t&&(e.uniformBlockBinding(gt,_t,D.__bindingPointIndex),l.set(gt,_t))}function kt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),f={},p={},W=null,nt={},u={},d=new WeakMap,v=[],b=null,m=!1,h=null,g=null,M=null,y=null,T=null,E=null,w=null,S=new he(0,0,0),C=0,N=!1,O=null,z=null,k=null,I=null,G=null,$t.set(0,0,e.canvas.width,e.canvas.height),Yt.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:et,disable:Tt,bindFramebuffer:It,drawBuffers:yt,useProgram:Ot,setBlending:ie,setMaterial:we,setFlipSided:Gt,setCullFace:pe,setLineWidth:Qe,setPolygonOffset:bn,setScissorTest:ge,activeTexture:Ye,bindTexture:L,unbindTexture:Ze,compressedTexImage2D:de,compressedTexImage3D:A,texImage2D:Z,texImage3D:K,pixelStorei:Ut,getParameter:mt,updateUBOMapping:Dt,uniformBlockBinding:Pt,texStorage2D:ut,texStorage3D:ht,texSubImage2D:_,texSubImage3D:F,compressedTexSubImage2D:V,compressedTexSubImage3D:Y,scissor:vt,viewport:pt,reset:kt}}function AN(e,t,n,i,s,a,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new re,f=new WeakMap,p=new Set,u,d=new WeakMap,v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(A,_){return v?new OffscreenCanvas(A,_):Rc("canvas")}function m(A,_,F){let V=1,Y=de(A);if((Y.width>F||Y.height>F)&&(V=F/Math.max(Y.width,Y.height)),V<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ut=Math.floor(V*Y.width),ht=Math.floor(V*Y.height);u===void 0&&(u=b(ut,ht));let Z=_?b(ut,ht):u;return Z.width=ut,Z.height=ht,Z.getContext("2d").drawImage(A,0,0,ut,ht),Ft("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+ut+"x"+ht+")."),Z}else return"data"in A&&Ft("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),A;return A}function h(A){return A.generateMipmaps}function g(A){e.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?e.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function y(A,_,F,V,Y,ut=!1){if(A!==null){if(e[A]!==void 0)return e[A];Ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ht;V&&(ht=t.get("EXT_texture_norm16"),ht||Ft("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=_;if(_===e.RED&&(F===e.FLOAT&&(Z=e.R32F),F===e.HALF_FLOAT&&(Z=e.R16F),F===e.UNSIGNED_BYTE&&(Z=e.R8),F===e.UNSIGNED_SHORT&&ht&&(Z=ht.R16_EXT),F===e.SHORT&&ht&&(Z=ht.R16_SNORM_EXT)),_===e.RED_INTEGER&&(F===e.UNSIGNED_BYTE&&(Z=e.R8UI),F===e.UNSIGNED_SHORT&&(Z=e.R16UI),F===e.UNSIGNED_INT&&(Z=e.R32UI),F===e.BYTE&&(Z=e.R8I),F===e.SHORT&&(Z=e.R16I),F===e.INT&&(Z=e.R32I)),_===e.RG&&(F===e.FLOAT&&(Z=e.RG32F),F===e.HALF_FLOAT&&(Z=e.RG16F),F===e.UNSIGNED_BYTE&&(Z=e.RG8),F===e.UNSIGNED_SHORT&&ht&&(Z=ht.RG16_EXT),F===e.SHORT&&ht&&(Z=ht.RG16_SNORM_EXT)),_===e.RG_INTEGER&&(F===e.UNSIGNED_BYTE&&(Z=e.RG8UI),F===e.UNSIGNED_SHORT&&(Z=e.RG16UI),F===e.UNSIGNED_INT&&(Z=e.RG32UI),F===e.BYTE&&(Z=e.RG8I),F===e.SHORT&&(Z=e.RG16I),F===e.INT&&(Z=e.RG32I)),_===e.RGB_INTEGER&&(F===e.UNSIGNED_BYTE&&(Z=e.RGB8UI),F===e.UNSIGNED_SHORT&&(Z=e.RGB16UI),F===e.UNSIGNED_INT&&(Z=e.RGB32UI),F===e.BYTE&&(Z=e.RGB8I),F===e.SHORT&&(Z=e.RGB16I),F===e.INT&&(Z=e.RGB32I)),_===e.RGBA_INTEGER&&(F===e.UNSIGNED_BYTE&&(Z=e.RGBA8UI),F===e.UNSIGNED_SHORT&&(Z=e.RGBA16UI),F===e.UNSIGNED_INT&&(Z=e.RGBA32UI),F===e.BYTE&&(Z=e.RGBA8I),F===e.SHORT&&(Z=e.RGBA16I),F===e.INT&&(Z=e.RGBA32I)),_===e.RGB&&(F===e.UNSIGNED_SHORT&&ht&&(Z=ht.RGB16_EXT),F===e.SHORT&&ht&&(Z=ht.RGB16_SNORM_EXT),F===e.UNSIGNED_INT_5_9_9_9_REV&&(Z=e.RGB9_E5),F===e.UNSIGNED_INT_10F_11F_11F_REV&&(Z=e.R11F_G11F_B10F)),_===e.RGBA){let K=ut?wc:ce.getTransfer(Y);F===e.FLOAT&&(Z=e.RGBA32F),F===e.HALF_FLOAT&&(Z=e.RGBA16F),F===e.UNSIGNED_BYTE&&(Z=K===Ae?e.SRGB8_ALPHA8:e.RGBA8),F===e.UNSIGNED_SHORT&&ht&&(Z=ht.RGBA16_EXT),F===e.SHORT&&ht&&(Z=ht.RGBA16_SNORM_EXT),F===e.UNSIGNED_SHORT_4_4_4_4&&(Z=e.RGBA4),F===e.UNSIGNED_SHORT_5_5_5_1&&(Z=e.RGB5_A1)}return(Z===e.R16F||Z===e.R32F||Z===e.RG16F||Z===e.RG32F||Z===e.RGBA16F||Z===e.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function T(A,_){let F;return A?_===null||_===ns||_===ol?F=e.DEPTH24_STENCIL8:_===zn?F=e.DEPTH32F_STENCIL8:_===rl&&(F=e.DEPTH24_STENCIL8,Ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ns||_===ol?F=e.DEPTH_COMPONENT24:_===zn?F=e.DEPTH_COMPONENT32F:_===rl&&(F=e.DEPTH_COMPONENT16),F}function E(A,_){return h(A)===!0||A.isFramebufferTexture&&A.minFilter!==an&&A.minFilter!==hn?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function w(A){let _=A.target;_.removeEventListener("dispose",w),C(_),_.isVideoTexture&&f.delete(_),_.isHTMLTexture&&p.delete(_)}function S(A){let _=A.target;_.removeEventListener("dispose",S),O(_)}function C(A){let _=i.get(A);if(_.__webglInit===void 0)return;let F=A.source,V=d.get(F);if(V){let Y=V[_.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&N(A),Object.keys(V).length===0&&d.delete(F)}i.remove(A)}function N(A){let _=i.get(A);e.deleteTexture(_.__webglTexture);let F=A.source,V=d.get(F);delete V[_.__cacheKey],r.memory.textures--}function O(A){let _=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(_.__webglFramebuffer[V]))for(let Y=0;Y<_.__webglFramebuffer[V].length;Y++)e.deleteFramebuffer(_.__webglFramebuffer[V][Y]);else e.deleteFramebuffer(_.__webglFramebuffer[V]);_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer[V])}else{if(Array.isArray(_.__webglFramebuffer))for(let V=0;V<_.__webglFramebuffer.length;V++)e.deleteFramebuffer(_.__webglFramebuffer[V]);else e.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&e.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let V=0;V<_.__webglColorRenderbuffer.length;V++)_.__webglColorRenderbuffer[V]&&e.deleteRenderbuffer(_.__webglColorRenderbuffer[V]);_.__webglDepthRenderbuffer&&e.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let F=A.textures;for(let V=0,Y=F.length;V<Y;V++){let ut=i.get(F[V]);ut.__webglTexture&&(e.deleteTexture(ut.__webglTexture),r.memory.textures--),i.remove(F[V])}i.remove(A)}let z=0;function k(){z=0}function I(){return z}function G(A){z=A}function Q(){let A=z;return A>=s.maxTextures&&Ft("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,A}function q(A){let _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function $(A,_){let F=i.get(A);if(A.isVideoTexture&&L(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&F.__version!==A.version){let V=A.image;if(V===null)Ft("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Ft("WebGLRenderer: Texture marked for update but image is incomplete");else{Tt(F,A,_);return}}else A.isExternalTexture&&(F.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,F.__webglTexture,e.TEXTURE0+_)}function H(A,_){let F=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){Tt(F,A,_);return}else A.isExternalTexture&&(F.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,F.__webglTexture,e.TEXTURE0+_)}function W(A,_){let F=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){Tt(F,A,_);return}n.bindTexture(e.TEXTURE_3D,F.__webglTexture,e.TEXTURE0+_)}function nt(A,_){let F=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&F.__version!==A.version){It(F,A,_);return}n.bindTexture(e.TEXTURE_CUBE_MAP,F.__webglTexture,e.TEXTURE0+_)}let Rt={[Sf]:e.REPEAT,[Ms]:e.CLAMP_TO_EDGE,[Mf]:e.MIRRORED_REPEAT},Et={[an]:e.NEAREST,[Nb]:e.NEAREST_MIPMAP_NEAREST,[Xc]:e.NEAREST_MIPMAP_LINEAR,[hn]:e.LINEAR,[Yf]:e.LINEAR_MIPMAP_NEAREST,[qa]:e.LINEAR_MIPMAP_LINEAR},$t={[Ob]:e.NEVER,[zb]:e.ALWAYS,[Ib]:e.LESS,[Nd]:e.LEQUAL,[Pb]:e.EQUAL,[Dd]:e.GEQUAL,[Bb]:e.GREATER,[Fb]:e.NOTEQUAL};function Yt(A,_){if(_.type===zn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===hn||_.magFilter===Yf||_.magFilter===Xc||_.magFilter===qa||_.minFilter===hn||_.minFilter===Yf||_.minFilter===Xc||_.minFilter===qa)&&Ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(A,e.TEXTURE_WRAP_S,Rt[_.wrapS]),e.texParameteri(A,e.TEXTURE_WRAP_T,Rt[_.wrapT]),(A===e.TEXTURE_3D||A===e.TEXTURE_2D_ARRAY)&&e.texParameteri(A,e.TEXTURE_WRAP_R,Rt[_.wrapR]),e.texParameteri(A,e.TEXTURE_MAG_FILTER,Et[_.magFilter]),e.texParameteri(A,e.TEXTURE_MIN_FILTER,Et[_.minFilter]),_.compareFunction&&(e.texParameteri(A,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(A,e.TEXTURE_COMPARE_FUNC,$t[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===an||_.minFilter!==Xc&&_.minFilter!==qa||_.type===zn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");e.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Kt(A,_){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",w));let V=_.source,Y=d.get(V);Y===void 0&&(Y={},d.set(V,Y));let ut=q(_);if(ut!==A.__cacheKey){Y[ut]===void 0&&(Y[ut]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,F=!0),Y[ut].usedTimes++;let ht=Y[A.__cacheKey];ht!==void 0&&(Y[A.__cacheKey].usedTimes--,ht.usedTimes===0&&N(_)),A.__cacheKey=ut,A.__webglTexture=Y[ut].texture}return F}function J(A,_,F){return Math.floor(Math.floor(A/F)/_)}function et(A,_,F,V){let ut=A.updateRanges;if(ut.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,_.width,_.height,F,V,_.data);else{ut.sort((Ut,vt)=>Ut.start-vt.start);let ht=0;for(let Ut=1;Ut<ut.length;Ut++){let vt=ut[ht],pt=ut[Ut],Dt=vt.start+vt.count,Pt=J(pt.start,_.width,4),kt=J(vt.start,_.width,4);pt.start<=Dt+1&&Pt===kt&&J(pt.start+pt.count-1,_.width,4)===Pt?vt.count=Math.max(vt.count,pt.start+pt.count-vt.start):(++ht,ut[ht]=pt)}ut.length=ht+1;let Z=n.getParameter(e.UNPACK_ROW_LENGTH),K=n.getParameter(e.UNPACK_SKIP_PIXELS),mt=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,_.width);for(let Ut=0,vt=ut.length;Ut<vt;Ut++){let pt=ut[Ut],Dt=Math.floor(pt.start/4),Pt=Math.ceil(pt.count/4),kt=Dt%_.width,D=Math.floor(Dt/_.width),gt=Pt,j=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,kt),n.pixelStorei(e.UNPACK_SKIP_ROWS,D),n.texSubImage2D(e.TEXTURE_2D,0,kt,D,gt,j,F,V,_.data)}A.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,Z),n.pixelStorei(e.UNPACK_SKIP_PIXELS,K),n.pixelStorei(e.UNPACK_SKIP_ROWS,mt)}}function Tt(A,_,F){let V=e.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(V=e.TEXTURE_2D_ARRAY),_.isData3DTexture&&(V=e.TEXTURE_3D);let Y=Kt(A,_),ut=_.source;n.bindTexture(V,A.__webglTexture,e.TEXTURE0+F);let ht=i.get(ut);if(ut.version!==ht.__version||Y===!0){if(n.activeTexture(e.TEXTURE0+F),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let j=ce.getPrimaries(ce.workingColorSpace),_t=_.colorSpace===ss?null:ce.getPrimaries(_.colorSpace),xt=_.colorSpace===ss||j===_t?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt)}n.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment);let K=m(_.image,!1,s.maxTextureSize);K=Ze(_,K);let mt=a.convert(_.format,_.colorSpace),Ut=a.convert(_.type),vt=y(_.internalFormat,mt,Ut,_.normalized,_.colorSpace,_.isVideoTexture);Yt(V,_);let pt,Dt=_.mipmaps,Pt=_.isVideoTexture!==!0,kt=ht.__version===void 0||Y===!0,D=ut.dataReady,gt=E(_,K);if(_.isDepthTexture)vt=T(_.format===Ya,_.type),kt&&(Pt?n.texStorage2D(e.TEXTURE_2D,1,vt,K.width,K.height):n.texImage2D(e.TEXTURE_2D,0,vt,K.width,K.height,0,mt,Ut,null));else if(_.isDataTexture)if(Dt.length>0){Pt&&kt&&n.texStorage2D(e.TEXTURE_2D,gt,vt,Dt[0].width,Dt[0].height);for(let j=0,_t=Dt.length;j<_t;j++)pt=Dt[j],Pt?D&&n.texSubImage2D(e.TEXTURE_2D,j,0,0,pt.width,pt.height,mt,Ut,pt.data):n.texImage2D(e.TEXTURE_2D,j,vt,pt.width,pt.height,0,mt,Ut,pt.data);_.generateMipmaps=!1}else Pt?(kt&&n.texStorage2D(e.TEXTURE_2D,gt,vt,K.width,K.height),D&&et(_,K,mt,Ut)):n.texImage2D(e.TEXTURE_2D,0,vt,K.width,K.height,0,mt,Ut,K.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Pt&&kt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,gt,vt,Dt[0].width,Dt[0].height,K.depth);for(let j=0,_t=Dt.length;j<_t;j++)if(pt=Dt[j],_.format!==Hn)if(mt!==null)if(Pt){if(D)if(_.layerUpdates.size>0){let xt=Kg(pt.width,pt.height,_.format,_.type);for(let st of _.layerUpdates){let Lt=pt.data.subarray(st*xt/pt.data.BYTES_PER_ELEMENT,(st+1)*xt/pt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,j,0,0,st,pt.width,pt.height,1,mt,Lt)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,j,0,0,0,pt.width,pt.height,K.depth,mt,pt.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,j,vt,pt.width,pt.height,K.depth,0,pt.data,0,0);else Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pt?D&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,j,0,0,0,pt.width,pt.height,K.depth,mt,Ut,pt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,j,vt,pt.width,pt.height,K.depth,0,mt,Ut,pt.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Pt&&kt&&n.texStorage2D(e.TEXTURE_2D,gt,vt,Dt[0].width,Dt[0].height);for(let j=0,_t=Dt.length;j<_t;j++)pt=Dt[j],_.format!==Hn?mt!==null?Pt?D&&n.compressedTexSubImage2D(e.TEXTURE_2D,j,0,0,pt.width,pt.height,mt,pt.data):n.compressedTexImage2D(e.TEXTURE_2D,j,vt,pt.width,pt.height,0,pt.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pt?D&&n.texSubImage2D(e.TEXTURE_2D,j,0,0,pt.width,pt.height,mt,Ut,pt.data):n.texImage2D(e.TEXTURE_2D,j,vt,pt.width,pt.height,0,mt,Ut,pt.data)}else if(_.isDataArrayTexture)if(Pt){if(kt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,gt,vt,K.width,K.height,K.depth),D)if(_.layerUpdates.size>0){let j=Kg(K.width,K.height,_.format,_.type);for(let _t of _.layerUpdates){let xt=K.data.subarray(_t*j/K.data.BYTES_PER_ELEMENT,(_t+1)*j/K.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,_t,K.width,K.height,1,mt,Ut,xt)}_.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,mt,Ut,K.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,vt,K.width,K.height,K.depth,0,mt,Ut,K.data);else if(_.isData3DTexture)Pt?(kt&&n.texStorage3D(e.TEXTURE_3D,gt,vt,K.width,K.height,K.depth),D&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,mt,Ut,K.data)):n.texImage3D(e.TEXTURE_3D,0,vt,K.width,K.height,K.depth,0,mt,Ut,K.data);else if(_.isFramebufferTexture){if(kt)if(Pt)n.texStorage2D(e.TEXTURE_2D,gt,vt,K.width,K.height);else{let j=K.width,_t=K.height;for(let xt=0;xt<gt;xt++)n.texImage2D(e.TEXTURE_2D,xt,vt,j,_t,0,mt,Ut,null),j>>=1,_t>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in e){let j=e.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),K.parentNode!==j){j.appendChild(K),p.add(_),j.onpaint=_t=>{let xt=_t.changedElements;for(let st of p)xt.includes(st.image)&&(st.needsUpdate=!0)},j.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,K);else{let xt=e.RGBA,st=e.RGBA,Lt=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,xt,st,Lt,K)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Dt.length>0){if(Pt&&kt){let j=de(Dt[0]);n.texStorage2D(e.TEXTURE_2D,gt,vt,j.width,j.height)}for(let j=0,_t=Dt.length;j<_t;j++)pt=Dt[j],Pt?D&&n.texSubImage2D(e.TEXTURE_2D,j,0,0,mt,Ut,pt):n.texImage2D(e.TEXTURE_2D,j,vt,mt,Ut,pt);_.generateMipmaps=!1}else if(Pt){if(kt){let j=de(K);n.texStorage2D(e.TEXTURE_2D,gt,vt,j.width,j.height)}D&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,mt,Ut,K)}else n.texImage2D(e.TEXTURE_2D,0,vt,mt,Ut,K);h(_)&&g(V),ht.__version=ut.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function It(A,_,F){if(_.image.length!==6)return;let V=Kt(A,_),Y=_.source;n.bindTexture(e.TEXTURE_CUBE_MAP,A.__webglTexture,e.TEXTURE0+F);let ut=i.get(Y);if(Y.version!==ut.__version||V===!0){n.activeTexture(e.TEXTURE0+F);let ht=ce.getPrimaries(ce.workingColorSpace),Z=_.colorSpace===ss?null:ce.getPrimaries(_.colorSpace),K=_.colorSpace===ss||ht===Z?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let mt=_.isCompressedTexture||_.image[0].isCompressedTexture,Ut=_.image[0]&&_.image[0].isDataTexture,vt=[];for(let st=0;st<6;st++)!mt&&!Ut?vt[st]=m(_.image[st],!0,s.maxCubemapSize):vt[st]=Ut?_.image[st].image:_.image[st],vt[st]=Ze(_,vt[st]);let pt=vt[0],Dt=a.convert(_.format,_.colorSpace),Pt=a.convert(_.type),kt=y(_.internalFormat,Dt,Pt,_.normalized,_.colorSpace),D=_.isVideoTexture!==!0,gt=ut.__version===void 0||V===!0,j=Y.dataReady,_t=E(_,pt);Yt(e.TEXTURE_CUBE_MAP,_);let xt;if(mt){D&&gt&&n.texStorage2D(e.TEXTURE_CUBE_MAP,_t,kt,pt.width,pt.height);for(let st=0;st<6;st++){xt=vt[st].mipmaps;for(let Lt=0;Lt<xt.length;Lt++){let Nt=xt[Lt];_.format!==Hn?Dt!==null?D?j&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Lt,0,0,Nt.width,Nt.height,Dt,Nt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Lt,kt,Nt.width,Nt.height,0,Nt.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?j&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Lt,0,0,Nt.width,Nt.height,Dt,Pt,Nt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Lt,kt,Nt.width,Nt.height,0,Dt,Pt,Nt.data)}}}else{if(xt=_.mipmaps,D&&gt){xt.length>0&&_t++;let st=de(vt[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,_t,kt,st.width,st.height)}for(let st=0;st<6;st++)if(Ut){D?j&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,vt[st].width,vt[st].height,Dt,Pt,vt[st].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,kt,vt[st].width,vt[st].height,0,Dt,Pt,vt[st].data);for(let Lt=0;Lt<xt.length;Lt++){let Le=xt[Lt].image[st].image;D?j&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Lt+1,0,0,Le.width,Le.height,Dt,Pt,Le.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Lt+1,kt,Le.width,Le.height,0,Dt,Pt,Le.data)}}else{D?j&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Dt,Pt,vt[st]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,kt,Dt,Pt,vt[st]);for(let Lt=0;Lt<xt.length;Lt++){let Nt=xt[Lt];D?j&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Lt+1,0,0,Dt,Pt,Nt.image[st]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Lt+1,kt,Dt,Pt,Nt.image[st])}}}h(_)&&g(e.TEXTURE_CUBE_MAP),ut.__version=Y.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function yt(A,_,F,V,Y,ut){let ht=a.convert(F.format,F.colorSpace),Z=a.convert(F.type),K=y(F.internalFormat,ht,Z,F.normalized,F.colorSpace),mt=i.get(_),Ut=i.get(F);if(Ut.__renderTarget=_,!mt.__hasExternalTextures){let vt=Math.max(1,_.width>>ut),pt=Math.max(1,_.height>>ut);Y===e.TEXTURE_3D||Y===e.TEXTURE_2D_ARRAY?n.texImage3D(Y,ut,K,vt,pt,_.depth,0,ht,Z,null):n.texImage2D(Y,ut,K,vt,pt,0,ht,Z,null)}n.bindFramebuffer(e.FRAMEBUFFER,A),Ye(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,V,Y,Ut.__webglTexture,0,ge(_)):(Y===e.TEXTURE_2D||Y>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,V,Y,Ut.__webglTexture,ut),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ot(A,_,F){if(e.bindRenderbuffer(e.RENDERBUFFER,A),_.depthBuffer){let V=_.depthTexture,Y=V&&V.isDepthTexture?V.type:null,ut=T(_.stencilBuffer,Y),ht=_.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Ye(_)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ge(_),ut,_.width,_.height):F?e.renderbufferStorageMultisample(e.RENDERBUFFER,ge(_),ut,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,ut,_.width,_.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ht,e.RENDERBUFFER,A)}else{let V=_.textures;for(let Y=0;Y<V.length;Y++){let ut=V[Y],ht=a.convert(ut.format,ut.colorSpace),Z=a.convert(ut.type),K=y(ut.internalFormat,ht,Z,ut.normalized,ut.colorSpace);Ye(_)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ge(_),K,_.width,_.height):F?e.renderbufferStorageMultisample(e.RENDERBUFFER,ge(_),K,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,K,_.width,_.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function fe(A,_,F){let V=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y=i.get(_.depthTexture);if(Y.__renderTarget=_,(!Y.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),V){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,_.depthTexture.addEventListener("dispose",w)),Y.__webglTexture===void 0){Y.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,Y.__webglTexture),Yt(e.TEXTURE_CUBE_MAP,_.depthTexture);let mt=a.convert(_.depthTexture.format),Ut=a.convert(_.depthTexture.type),vt;_.depthTexture.format===bs?vt=e.DEPTH_COMPONENT24:_.depthTexture.format===Ya&&(vt=e.DEPTH24_STENCIL8);for(let pt=0;pt<6;pt++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,vt,_.width,_.height,0,mt,Ut,null)}}else $(_.depthTexture,0);let ut=Y.__webglTexture,ht=ge(_),Z=V?e.TEXTURE_CUBE_MAP_POSITIVE_X+F:e.TEXTURE_2D,K=_.depthTexture.format===Ya?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(_.depthTexture.format===bs)Ye(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,K,Z,ut,0,ht):e.framebufferTexture2D(e.FRAMEBUFFER,K,Z,ut,0);else if(_.depthTexture.format===Ya)Ye(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,K,Z,ut,0,ht):e.framebufferTexture2D(e.FRAMEBUFFER,K,Z,ut,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Zt(A){let _=i.get(A),F=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){let V=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),V){let Y=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,V.removeEventListener("dispose",Y)};V.addEventListener("dispose",Y),_.__depthDisposeCallback=Y}_.__boundDepthTexture=V}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(F)for(let V=0;V<6;V++)fe(_.__webglFramebuffer[V],A,V);else{let V=A.texture.mipmaps;V&&V.length>0?fe(_.__webglFramebuffer[0],A,0):fe(_.__webglFramebuffer,A,0)}else if(F){_.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(n.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[V]),_.__webglDepthbuffer[V]===void 0)_.__webglDepthbuffer[V]=e.createRenderbuffer(),Ot(_.__webglDepthbuffer[V],A,!1);else{let Y=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ut=_.__webglDepthbuffer[V];e.bindRenderbuffer(e.RENDERBUFFER,ut),e.framebufferRenderbuffer(e.FRAMEBUFFER,Y,e.RENDERBUFFER,ut)}}else{let V=A.texture.mipmaps;if(V&&V.length>0?n.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=e.createRenderbuffer(),Ot(_.__webglDepthbuffer,A,!1);else{let Y=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ut=_.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,ut),e.framebufferRenderbuffer(e.FRAMEBUFFER,Y,e.RENDERBUFFER,ut)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ie(A,_,F){let V=i.get(A);_!==void 0&&yt(V.__webglFramebuffer,A,A.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),F!==void 0&&Zt(A)}function we(A){let _=A.texture,F=i.get(A),V=i.get(_);A.addEventListener("dispose",S);let Y=A.textures,ut=A.isWebGLCubeRenderTarget===!0,ht=Y.length>1;if(ht||(V.__webglTexture===void 0&&(V.__webglTexture=e.createTexture()),V.__version=_.version,r.memory.textures++),ut){F.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[Z]=[];for(let K=0;K<_.mipmaps.length;K++)F.__webglFramebuffer[Z][K]=e.createFramebuffer()}else F.__webglFramebuffer[Z]=e.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let Z=0;Z<_.mipmaps.length;Z++)F.__webglFramebuffer[Z]=e.createFramebuffer()}else F.__webglFramebuffer=e.createFramebuffer();if(ht)for(let Z=0,K=Y.length;Z<K;Z++){let mt=i.get(Y[Z]);mt.__webglTexture===void 0&&(mt.__webglTexture=e.createTexture(),r.memory.textures++)}if(A.samples>0&&Ye(A)===!1){F.__webglMultisampledFramebuffer=e.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let Z=0;Z<Y.length;Z++){let K=Y[Z];F.__webglColorRenderbuffer[Z]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,F.__webglColorRenderbuffer[Z]);let mt=a.convert(K.format,K.colorSpace),Ut=a.convert(K.type),vt=y(K.internalFormat,mt,Ut,K.normalized,K.colorSpace,A.isXRRenderTarget===!0),pt=ge(A);e.renderbufferStorageMultisample(e.RENDERBUFFER,pt,vt,A.width,A.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Z,e.RENDERBUFFER,F.__webglColorRenderbuffer[Z])}e.bindRenderbuffer(e.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=e.createRenderbuffer(),Ot(F.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(ut){n.bindTexture(e.TEXTURE_CUBE_MAP,V.__webglTexture),Yt(e.TEXTURE_CUBE_MAP,_);for(let Z=0;Z<6;Z++)if(_.mipmaps&&_.mipmaps.length>0)for(let K=0;K<_.mipmaps.length;K++)yt(F.__webglFramebuffer[Z][K],A,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,K);else yt(F.__webglFramebuffer[Z],A,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);h(_)&&g(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ht){for(let Z=0,K=Y.length;Z<K;Z++){let mt=Y[Z],Ut=i.get(mt),vt=e.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(vt=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(vt,Ut.__webglTexture),Yt(vt,mt),yt(F.__webglFramebuffer,A,mt,e.COLOR_ATTACHMENT0+Z,vt,0),h(mt)&&g(vt)}n.unbindTexture()}else{let Z=e.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Z=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(Z,V.__webglTexture),Yt(Z,_),_.mipmaps&&_.mipmaps.length>0)for(let K=0;K<_.mipmaps.length;K++)yt(F.__webglFramebuffer[K],A,_,e.COLOR_ATTACHMENT0,Z,K);else yt(F.__webglFramebuffer,A,_,e.COLOR_ATTACHMENT0,Z,0);h(_)&&g(Z),n.unbindTexture()}A.depthBuffer&&Zt(A)}function Gt(A){let _=A.textures;for(let F=0,V=_.length;F<V;F++){let Y=_[F];if(h(Y)){let ut=M(A),ht=i.get(Y).__webglTexture;n.bindTexture(ut,ht),g(ut),n.unbindTexture()}}}let pe=[],Qe=[];function bn(A){if(A.samples>0){if(Ye(A)===!1){let _=A.textures,F=A.width,V=A.height,Y=e.COLOR_BUFFER_BIT,ut=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ht=i.get(A),Z=_.length>1;if(Z)for(let mt=0;mt<_.length;mt++)n.bindFramebuffer(e.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+mt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,ht.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+mt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer);let K=A.texture.mipmaps;K&&K.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ht.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let mt=0;mt<_.length;mt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Y|=e.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Y|=e.STENCIL_BUFFER_BIT)),Z){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ht.__webglColorRenderbuffer[mt]);let Ut=i.get(_[mt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Ut,0)}e.blitFramebuffer(0,0,F,V,0,0,F,V,Y,e.NEAREST),l===!0&&(pe.length=0,Qe.length=0,pe.push(e.COLOR_ATTACHMENT0+mt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(pe.push(ut),Qe.push(ut),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Qe)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,pe))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),Z)for(let mt=0;mt<_.length;mt++){n.bindFramebuffer(e.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+mt,e.RENDERBUFFER,ht.__webglColorRenderbuffer[mt]);let Ut=i.get(_[mt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,ht.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+mt,e.TEXTURE_2D,Ut,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let _=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[_])}}}function ge(A){return Math.min(s.maxSamples,A.samples)}function Ye(A){let _=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function L(A){let _=r.render.frame;f.get(A)!==_&&(f.set(A,_),A.update())}function Ze(A,_){let F=A.colorSpace,V=A.format,Y=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==Ac&&F!==ss&&(ce.getTransfer(F)===Ae?(V!==Hn||Y!==Ti)&&Ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Vt("WebGLTextures: Unsupported texture color space:",F)),_}function de(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Q,this.resetTextureUnits=k,this.getTextureUnits=I,this.setTextureUnits=G,this.setTexture2D=$,this.setTexture2DArray=H,this.setTexture3D=W,this.setTextureCube=nt,this.rebindTextures=ie,this.setupRenderTarget=we,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=bn,this.setupDepthRenderbuffer=Zt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=Ye,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function wN(e,t){function n(i,s=ss){let a,r=ce.getTransfer(s);if(i===Ti)return e.UNSIGNED_BYTE;if(i===Jf)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Kf)return e.UNSIGNED_SHORT_5_5_5_1;if(i===zg)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Hg)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===Bg)return e.BYTE;if(i===Fg)return e.SHORT;if(i===rl)return e.UNSIGNED_SHORT;if(i===Zf)return e.INT;if(i===ns)return e.UNSIGNED_INT;if(i===zn)return e.FLOAT;if(i===Ei)return e.HALF_FLOAT;if(i===Vg)return e.ALPHA;if(i===Gg)return e.RGB;if(i===Hn)return e.RGBA;if(i===bs)return e.DEPTH_COMPONENT;if(i===Ya)return e.DEPTH_STENCIL;if(i===kg)return e.RED;if(i===Qf)return e.RED_INTEGER;if(i===is)return e.RG;if(i===jf)return e.RG_INTEGER;if(i===$f)return e.RGBA_INTEGER;if(i===Wc||i===qc||i===Yc||i===Zc)if(r===Ae)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Wc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===qc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Yc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Zc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Wc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===qc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Yc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Zc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===td||i===ed||i===nd||i===id)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===td)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ed)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===nd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===id)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===sd||i===ad||i===rd||i===od||i===ld||i===Jc||i===cd)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===sd||i===ad)return r===Ae?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===rd)return r===Ae?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===od)return a.COMPRESSED_R11_EAC;if(i===ld)return a.COMPRESSED_SIGNED_R11_EAC;if(i===Jc)return a.COMPRESSED_RG11_EAC;if(i===cd)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ud||i===hd||i===fd||i===dd||i===pd||i===md||i===gd||i===_d||i===vd||i===yd||i===xd||i===Sd||i===Md||i===bd)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===ud)return r===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===hd)return r===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===fd)return r===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===dd)return r===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===pd)return r===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===md)return r===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===gd)return r===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_d)return r===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===vd)return r===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===yd)return r===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===xd)return r===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Sd)return r===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Md)return r===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===bd)return r===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Td||i===Ed||i===Ad)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===Td)return r===Ae?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ed)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ad)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===wd||i===Cd||i===Kc||i===Rd)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===wd)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Cd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Kc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Rd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ol?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var CN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,RN=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,u_=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new Fc(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new Mn({vertexShader:CN,fragmentShader:RN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ai(new Nr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},h_=class extends Ts{constructor(t,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,f=null,p=null,u=null,d=null,v=null,b=typeof XRWebGLBinding<"u",m=new u_,h={},g=n.getContextAttributes(),M=null,y=null,T=[],E=[],w=new re,S=null,C=null,N=new ii;N.viewport=new Ke;let O=new ii;O.viewport=new Ke;let z=[N,O],k=new Xf,I=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let et=T[J];return et===void 0&&(et=new el,T[J]=et),et.getTargetRaySpace()},this.getControllerGrip=function(J){let et=T[J];return et===void 0&&(et=new el,T[J]=et),et.getGripSpace()},this.getHand=function(J){let et=T[J];return et===void 0&&(et=new el,T[J]=et),et.getHandSpace()};function Q(J){let et=E.indexOf(J.inputSource);if(et===-1)return;let Tt=T[et];Tt!==void 0&&(Tt.update(J.inputSource,J.frame,c||r),Tt.dispatchEvent({type:J.type,data:J.inputSource}))}function q(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",$);for(let J=0;J<T.length;J++){let et=E[J];et!==null&&(E[J]=null,T[J].disconnect(et))}I=null,G=null,m.reset();for(let J in h)delete h[J];if(t.setRenderTarget(M),d=null,u=null,p=null,s=null,y=null,Kt.stop(),i.isPresenting=!1,t.setPixelRatio(S),t.setSize(w.width,w.height,!1),C!==null){let J=C.camera;J.fov=C.fov,J.zoom=C.zoom,J.updateProjectionMatrix(),C=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){a=J,i.isPresenting===!0&&Ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&Ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return p===null&&b&&(p=new XRWebGLBinding(s,n)),p},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",q),s.addEventListener("inputsourceschange",$),g.xrCompatible!==!0&&await n.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(w),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,It=null,yt=null;g.depth&&(yt=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Tt=g.stencil?Ya:bs,It=g.stencil?ol:ns);let Ot={colorFormat:n.RGBA8,depthFormat:yt,scaleFactor:a};p=this.getBinding(),u=p.createProjectionLayer(Ot),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new Fn(u.textureWidth,u.textureHeight,{format:Hn,type:Ti,depthTexture:new Ha(u.textureWidth,u.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Tt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(s,n,Tt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Fn(d.framebufferWidth,d.framebufferHeight,{format:Hn,type:Ti,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),Kt.setContext(s),Kt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function $(J){for(let et=0;et<J.removed.length;et++){let Tt=J.removed[et],It=E.indexOf(Tt);It>=0&&(E[It]=null,T[It].disconnect(Tt))}for(let et=0;et<J.added.length;et++){let Tt=J.added[et],It=E.indexOf(Tt);if(It===-1){for(let Ot=0;Ot<T.length;Ot++)if(Ot>=E.length){E.push(Tt),It=Ot;break}else if(E[Ot]===null){E[Ot]=Tt,It=Ot;break}if(It===-1)break}let yt=T[It];yt&&yt.connect(Tt)}}let H=new X,W=new X;function nt(J,et,Tt){H.setFromMatrixPosition(et.matrixWorld),W.setFromMatrixPosition(Tt.matrixWorld);let It=H.distanceTo(W),yt=et.projectionMatrix.elements,Ot=Tt.projectionMatrix.elements,fe=yt[14]/(yt[10]-1),Zt=yt[14]/(yt[10]+1),ie=(yt[9]+1)/yt[5],we=(yt[9]-1)/yt[5],Gt=(yt[8]-1)/yt[0],pe=(Ot[8]+1)/Ot[0],Qe=fe*Gt,bn=fe*pe,ge=It/(-Gt+pe),Ye=ge*-Gt;if(et.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ye),J.translateZ(ge),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),yt[10]===-1)J.projectionMatrix.copy(et.projectionMatrix),J.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let L=fe+ge,Ze=Zt+ge,de=Qe-Ye,A=bn+(It-Ye),_=ie*Zt/Ze*L,F=we*Zt/Ze*L;J.projectionMatrix.makePerspective(de,A,_,F,L,Ze),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Rt(J,et){et===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(et.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let et=J.near,Tt=J.far;m.texture!==null&&(m.depthNear>0&&(et=m.depthNear),m.depthFar>0&&(Tt=m.depthFar)),k.near=O.near=N.near=et,k.far=O.far=N.far=Tt,(I!==k.near||G!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),I=k.near,G=k.far),k.layers.mask=J.layers.mask|6,N.layers.mask=k.layers.mask&-5,O.layers.mask=k.layers.mask&-3;let It=J.parent,yt=k.cameras;Rt(k,It);for(let Ot=0;Ot<yt.length;Ot++)Rt(yt[Ot],It);yt.length===2?nt(k,N,O):k.projectionMatrix.copy(N.projectionMatrix),C===null&&J.isPerspectiveCamera&&(C={camera:J,fov:J.fov,zoom:J.zoom}),Et(J,k,It)};function Et(J,et,Tt){Tt===null?J.matrix.copy(et.matrixWorld):(J.matrix.copy(Tt.matrixWorld),J.matrix.invert(),J.matrix.multiply(et.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(et.projectionMatrix),J.projectionMatrixInverse.copy(et.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Tf*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(J){return h[J]};let $t=null;function Yt(J,et){if(f=et.getViewerPose(c||r),v=et,f!==null){let Tt=f.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let It=!1;Tt.length!==k.cameras.length&&(k.cameras.length=0,It=!0);for(let Zt=0;Zt<Tt.length;Zt++){let ie=Tt[Zt],we=null;if(d!==null)we=d.getViewport(ie);else{let pe=p.getViewSubImage(u,ie);we=pe.viewport,Zt===0&&(t.setRenderTargetTextures(y,pe.colorTexture,pe.depthStencilTexture),t.setRenderTarget(y))}let Gt=z[Zt];Gt===void 0&&(Gt=new ii,Gt.layers.enable(Zt),Gt.viewport=new Ke,z[Zt]=Gt),Gt.matrix.fromArray(ie.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(ie.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(we.x,we.y,we.width,we.height),Zt===0&&(k.matrix.copy(Gt.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),It===!0&&k.cameras.push(Gt)}let yt=s.enabledFeatures;if(yt&&yt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){p=i.getBinding();let Zt=p.getDepthInformation(Tt[0]);Zt&&Zt.isValid&&Zt.texture&&m.init(Zt,s.renderState)}if(yt&&yt.includes("camera-access")&&b){t.state.unbindTexture(),p=i.getBinding();for(let Zt=0;Zt<Tt.length;Zt++){let ie=Tt[Zt].camera;if(ie){let we=h[ie];we||(we=new Fc,h[ie]=we);let Gt=p.getCameraImage(ie);we.sourceTexture=Gt}}}}for(let Tt=0;Tt<T.length;Tt++){let It=E[Tt],yt=T[Tt];It!==null&&yt!==void 0&&yt.update(It,et,c||r)}$t&&$t(J,et),et.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:et}),v=null}let Kt=new g1;Kt.setAnimationLoop(Yt),this.setAnimationLoop=function(J){$t=J},this.dispose=function(){}}},NN=new sn,M1=new Wt;M1.set(-1,0,0,0,1,0,0,0,1);function DN(e,t){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,Yg(e)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,g,M,y){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?a(m,h):h.isMeshLambertMaterial?(a(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(a(m,h),p(m,h)):h.isMeshPhongMaterial?(a(m,h),f(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(a(m,h),u(m,h),h.isMeshPhysicalMaterial&&d(m,h,y)):h.isMeshMatcapMaterial?(a(m,h),v(m,h)):h.isMeshDepthMaterial?a(m,h):h.isMeshDistanceMaterial?(a(m,h),b(m,h)):h.isMeshNormalMaterial?a(m,h):h.isLineBasicMaterial?(r(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,g,M):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Yn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Yn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);let g=t.get(h),M=g.envMap,y=g.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(NN.makeRotationFromEuler(y)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(M1),m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function r(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,g,M){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*g,m.scale.value=M*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function f(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function p(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function u(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function d(m,h,g){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Yn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.retroreflectivity>0&&(m.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,h){h.matcap&&(m.matcap.value=h.matcap)}function b(m,h){let g=t.get(h).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function UN(e,t,n,i){let s={},a={},r=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,T){let E=T.program;i.uniformBlockBinding(y,E)}function c(y,T){let E=s[y.id];E===void 0&&(m(y),E=f(y),s[y.id]=E,y.addEventListener("dispose",g));let w=T.program;i.updateUBOMapping(y,w);let S=t.render.frame;a[y.id]!==S&&(u(y),a[y.id]=S)}function f(y){let T=p();y.__bindingPointIndex=T;let E=e.createBuffer(),w=y.__size,S=y.usage;return e.bindBuffer(e.UNIFORM_BUFFER,E),e.bufferData(e.UNIFORM_BUFFER,w,S),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,T,E),E}function p(){for(let y=0;y<o;y++)if(r.indexOf(y)===-1)return r.push(y),y;return Vt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let T=s[y.id],E=y.uniforms,w=y.__cache;e.bindBuffer(e.UNIFORM_BUFFER,T);for(let S=0,C=E.length;S<C;S++){let N=E[S];if(Array.isArray(N))for(let O=0,z=N.length;O<z;O++)d(N[O],S,O,w);else d(N,S,0,w)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function d(y,T,E,w){if(b(y,T,E,w)===!0){let S=y.__offset,C=y.value;if(Array.isArray(C)){let N=0;for(let O=0;O<C.length;O++){let z=C[O],k=h(z);v(z,y.__data,N),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(N+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(C,y.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,S,y.__data)}}function v(y,T,E){typeof y=="number"||typeof y=="boolean"?T[0]=y:y.isMatrix3?(T[0]=y.elements[0],T[1]=y.elements[1],T[2]=y.elements[2],T[3]=0,T[4]=y.elements[3],T[5]=y.elements[4],T[6]=y.elements[5],T[7]=0,T[8]=y.elements[6],T[9]=y.elements[7],T[10]=y.elements[8],T[11]=0):ArrayBuffer.isView(y)?T.set(new y.constructor(y.buffer,y.byteOffset,T.length)):y.toArray(T,E)}function b(y,T,E,w){let S=y.value,C=T+"_"+E;if(w[C]===void 0)return typeof S=="number"||typeof S=="boolean"?w[C]=S:ArrayBuffer.isView(S)?w[C]=S.slice():w[C]=S.clone(),!0;{let N=w[C];if(typeof S=="number"||typeof S=="boolean"){if(N!==S)return w[C]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(N.equals(S)===!1)return N.copy(S),!0}}return!1}function m(y){let T=y.uniforms,E=0,w=16;for(let C=0,N=T.length;C<N;C++){let O=Array.isArray(T[C])?T[C]:[T[C]];for(let z=0,k=O.length;z<k;z++){let I=O[z],G=Array.isArray(I.value)?I.value:[I.value];for(let Q=0,q=G.length;Q<q;Q++){let $=G[Q],H=h($),W=E%w,nt=W%H.boundary,Rt=W+nt;E+=nt,Rt!==0&&w-Rt<H.storage&&(E+=w-Rt),I.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=E,E+=H.storage}}}let S=E%w;return S>0&&(E+=w-S),y.__size=E,y.__cache={},this}function h(y){let T={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(T.boundary=4,T.storage=4):y.isVector2?(T.boundary=8,T.storage=8):y.isVector3||y.isColor?(T.boundary=16,T.storage=12):y.isVector4?(T.boundary=16,T.storage=16):y.isMatrix3?(T.boundary=48,T.storage=48):y.isMatrix4?(T.boundary=64,T.storage=64):y.isTexture?Ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(T.boundary=16,T.storage=y.byteLength):Ft("WebGLRenderer: Unsupported uniform value type.",y),T}function g(y){let T=y.target;T.removeEventListener("dispose",g);let E=r.indexOf(T.__bindingPointIndex);r.splice(E,1),e.deleteBuffer(s[T.id]),delete s[T.id],delete a[T.id]}function M(){for(let y in s)e.deleteBuffer(s[y]);r=[],s={},a={}}return{bind:l,update:c,dispose:M}}var LN=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Cs=null;function ON(){return Cs===null&&(Cs=new js(LN,16,16,is,Ei),Cs.name="DFG_LUT",Cs.minFilter=hn,Cs.magFilter=hn,Cs.wrapS=Ms,Cs.wrapT=Ms,Cs.generateMipmaps=!1,Cs.needsUpdate=!0),Cs}var Pd=class{constructor(t={}){let{canvas:n=Vb(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Ti}=t;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=r;let b=d,m=new Set([$f,jf,Qf]),h=new Set([Ti,ns,rl,ol,Jf,Kf]),g=new Uint32Array(4),M=new Int32Array(4),y=new X,T=null,E=null,w=[],S=[],C=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=es,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,O=!1,z=null,k=null,I=null,G=null;this._outputColorSpace=Mi;let Q=0,q=0,$=null,H=-1,W=null,nt=new Ke,Rt=new Ke,Et=null,$t=new he(0),Yt=0,Kt=n.width,J=n.height,et=1,Tt=null,It=null,yt=new Ke(0,0,Kt,J),Ot=new Ke(0,0,Kt,J),fe=!1,Zt=new Pc,ie=!1,we=!1,Gt=new sn,pe=new X,Qe=new Ke,bn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ge=!1;function Ye(){return $===null?et:1}let L=i;function Ze(x,R){return n.getContext(x,R)}let de,A,_,F,V,Y,ut,ht,Z,K,mt,Ut,vt,pt,Dt,Pt,kt,D,gt,j,_t,xt,st;try{let x={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"186"}`),n.addEventListener("webglcontextlost",Le,!1),n.addEventListener("webglcontextrestored",_e,!1),n.addEventListener("webglcontextcreationerror",li,!1),L===null){let R="webgl2";if(L=Ze(R,x),L===null)throw Ze(R)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Lt()}catch(x){throw n.removeEventListener("webglcontextlost",Le,!1),n.removeEventListener("webglcontextrestored",_e,!1),n.removeEventListener("webglcontextcreationerror",li,!1),Vt("WebGLRenderer: "+x.message),x}function Lt(){de=new V3(L),de.init(),_t=new wN(L,de),A=new D3(L,de,t,_t),_=new EN(L,de),A.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),k=L.createFramebuffer(),I=L.createFramebuffer(),G=L.createFramebuffer(),F=new X3(L),V=new hN,Y=new AN(L,de,_,V,A,_t,F),ut=new H3(N),ht=new qw(L),xt=new R3(L,ht),Z=new G3(L,ht,F,xt),K=new q3(L,Z,ht,xt,F),D=new W3(L,A,Y),Dt=new U3(V),mt=new uN(N,ut,de,A,xt,Dt),Ut=new DN(N,V),vt=new dN,pt=new yN(de),kt=new C3(N,ut,_,K,v,l),Pt=new TN(N,K,A),st=new UN(L,F,A,_),gt=new N3(L,de,F),j=new k3(L,de,F),F.programs=mt.programs,N.capabilities=A,N.extensions=de,N.properties=V,N.renderLists=vt,N.shadowMap=Pt,N.state=_,N.info=F}b!==Ti&&(C=new Z3(b,n.width,n.height,o,s,a));let Nt=new h_(N,L);this.xr=Nt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let x=de.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=de.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(x){x!==void 0&&(et=x,this.setSize(Kt,J,!1))},this.getSize=function(x){return x.set(Kt,J)},this.setSize=function(x,R,B=!0){if(Nt.isPresenting){Ft("WebGLRenderer: Can't change size while VR device is presenting.");return}Kt=x,J=R,n.width=Math.floor(x*et),n.height=Math.floor(R*et),B===!0&&(n.style.width=x+"px",n.style.height=R+"px"),C!==null&&C.setSize(n.width,n.height),this.setViewport(0,0,x,R)},this.getDrawingBufferSize=function(x){return x.set(Kt*et,J*et).floor()},this.setDrawingBufferSize=function(x,R,B){Kt=x,J=R,et=B,n.width=Math.floor(x*B),n.height=Math.floor(R*B),this.setViewport(0,0,x,R)},this.setEffects=function(x){if(b===Ti){Vt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let R=0;R<x.length;R++)if(x[R].isOutputPass===!0){Ft("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(nt)},this.getViewport=function(x){return x.copy(yt)},this.setViewport=function(x,R,B,U){x.isVector4?yt.set(x.x,x.y,x.z,x.w):yt.set(x,R,B,U),_.viewport(nt.copy(yt).multiplyScalar(et).round())},this.getScissor=function(x){return x.copy(Ot)},this.setScissor=function(x,R,B,U){x.isVector4?Ot.set(x.x,x.y,x.z,x.w):Ot.set(x,R,B,U),_.scissor(Rt.copy(Ot).multiplyScalar(et).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(x){_.setScissorTest(fe=x)},this.setOpaqueSort=function(x){Tt=x},this.setTransparentSort=function(x){It=x},this.getClearColor=function(x){return x.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor(...arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha(...arguments)},this.clear=function(x=!0,R=!0,B=!0){let U=0;if(x){let P=!1;if($!==null){let rt=$.texture.format;P=m.has(rt)}if(P){let rt=$.texture.type,at=h.has(rt),ct=kt.getClearColor(),Mt=kt.getClearAlpha(),At=ct.r,Bt=ct.g,qt=ct.b;at?(g[0]=At,g[1]=Bt,g[2]=qt,g[3]=Mt,L.clearBufferuiv(L.COLOR,0,g)):(M[0]=At,M[1]=Bt,M[2]=qt,M[3]=Mt,L.clearBufferiv(L.COLOR,0,M))}else U|=L.COLOR_BUFFER_BIT}R&&(U|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),B&&(U|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U!==0&&L.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),z=x},this.dispose=function(){n.removeEventListener("webglcontextlost",Le,!1),n.removeEventListener("webglcontextrestored",_e,!1),n.removeEventListener("webglcontextcreationerror",li,!1),kt.dispose(),vt.dispose(),pt.dispose(),V.dispose(),ut.dispose(),K.dispose(),xt.dispose(),st.dispose(),mt.dispose(),Nt.dispose(),Nt.removeEventListener("sessionstart",fl),Nt.removeEventListener("sessionend",dl),Ai.stop()};function Le(x){x.preventDefault(),qg("WebGLRenderer: Context Lost."),O=!0}function _e(){qg("WebGLRenderer: Context Restored."),O=!1;let x=F.autoReset,R=Pt.enabled,B=Pt.autoUpdate,U=Pt.needsUpdate,P=Pt.type;Lt(),F.autoReset=x,Pt.enabled=R,Pt.autoUpdate=B,Pt.needsUpdate=U,Pt.type=P}function li(x){Vt("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Zn(x){let R=x.target;R.removeEventListener("dispose",Zn),su(R)}function su(x){kd(x),V.remove(x)}function kd(x){let R=V.get(x).programs;R!==void 0&&(R.forEach(function(B){mt.releaseProgram(B)}),x.isShaderMaterial&&mt.releaseShaderCache(x))}this.renderBufferDirect=function(x,R,B,U,P,rt){R===null&&(R=bn);let at=P.isMesh&&P.matrixWorld.determinantAffine()<0,ct=lt(x,R,B,U,P);_.setMaterial(U,at);let Mt=B.index,At=1;if(U.wireframe===!0){if(Mt=Z.getWireframeAttribute(B),Mt===void 0)return;At=2}let Bt=B.drawRange,qt=B.attributes.position,wt=Bt.start*At,ee=(Bt.start+Bt.count)*At;rt!==null&&(wt=Math.max(wt,rt.start*At),ee=Math.min(ee,(rt.start+rt.count)*At)),Mt!==null?(wt=Math.max(wt,0),ee=Math.min(ee,Mt.count)):qt!=null&&(wt=Math.max(wt,0),ee=Math.min(ee,qt.count));let Ce=ee-wt;if(Ce<0||Ce===1/0)return;xt.setup(P,U,ct,B,Mt);let ve,ye=gt;if(Mt!==null&&(ve=ht.get(Mt),ye=j,ye.setIndex(ve)),P.isMesh)U.wireframe===!0?(_.setLineWidth(U.wireframeLinewidth*Ye()),ye.setMode(L.LINES)):ye.setMode(L.TRIANGLES);else if(P.isLine){let je=U.linewidth;je===void 0&&(je=1),_.setLineWidth(je*Ye()),P.isLineSegments?ye.setMode(L.LINES):P.isLineLoop?ye.setMode(L.LINE_LOOP):ye.setMode(L.LINE_STRIP)}else P.isPoints?ye.setMode(L.POINTS):P.isSprite&&ye.setMode(L.TRIANGLES);if(P.isBatchedMesh)if(de.get("WEBGL_multi_draw"))ye.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{let je=P._multiDrawStarts,bt=P._multiDrawCounts,ke=P._multiDrawCount,Ct=Mt?ht.get(Mt).bytesPerElement:1,Te=V.get(U).currentProgram.getUniforms();for(let Se=0;Se<ke;Se++)Te.setValue(L,"_gl_DrawID",Se),ye.render(je[Se]/Ct,bt[Se])}else if(P.isInstancedMesh)ye.renderInstances(wt,Ce,P.count);else if(B.isInstancedBufferGeometry){let je=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,bt=Math.min(B.instanceCount,je);ye.renderInstances(wt,Ce,bt)}else ye.render(wt,Ce)};function Gi(x,R,B,U){z!==null&&x.isNodeMaterial&&z.setObject(U,x),ie===!0&&Dt.setState(x,B,!1),x.transparent===!0&&x.side===ws&&x.forceSinglePass===!1?(x.side=Yn,x.needsUpdate=!0,Ka(x,R,U),x.side=Xa,x.needsUpdate=!0,Ka(x,R,U),x.side=ws):Ka(x,R,U)}this.compile=function(x,R,B=null){B===null&&(B=x),z!==null&&z.renderStart(x,R,B),E=pt.get(B),E.init(R),S.push(E),B.traverseVisible(function(P){P.isLight&&P.layers.test(R.layers)&&(E.pushLight(P),P.castShadow&&E.pushShadow(P))}),x!==B&&x.traverseVisible(function(P){P.isLight&&P.layers.test(R.layers)&&(E.pushLight(P),P.castShadow&&E.pushShadow(P))}),E.setupLights(),z!==null&&z.updateLights(E.state.lightsArray),we=this.localClippingEnabled,ie=Dt.init(this.clippingPlanes,we),ie===!0&&Dt.setGlobalState(this.clippingPlanes,R),z!==null&&Pt.render(E.state.shadowsArray,B,R);let U=new Set;return x.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;let rt=P.material;if(rt)if(Array.isArray(rt))for(let at=0;at<rt.length;at++){let ct=rt[at];Gi(ct,B,R,P),U.add(ct)}else Gi(rt,B,R,P),U.add(rt)}),E=S.pop(),z!==null&&z.renderEnd(),U},this.compileAsync=function(x,R,B=null){let U=this.compile(x,R,B);return new Promise(P=>{function rt(){if(U.forEach(function(at){let Mt=V.get(at).currentProgram;(Mt===void 0||Mt.isReady())&&U.delete(at)}),U.size===0){P(x);return}setTimeout(rt,10)}de.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let Pr=null;function Xd(x){Pr&&Pr(x)}function fl(){Ai.stop()}function dl(){Ai.start()}let Ai=new g1;Ai.setAnimationLoop(Xd),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(x){Pr=x,Nt.setAnimationLoop(x),x===null?Ai.stop():Ai.start()},Nt.addEventListener("sessionstart",fl),Nt.addEventListener("sessionend",dl),this.render=function(x,R){if(R!==void 0&&R.isCamera!==!0){Vt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;z!==null&&z.renderStart(x,R);let B=Nt.enabled===!0&&Nt.isPresenting===!0,U=C!==null&&($===null||B)&&C.begin(N,$);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Nt.enabled===!0&&Nt.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(Nt.cameraAutoUpdate===!0&&Nt.updateCamera(R),R=Nt.getCamera()),x.isScene===!0&&x.onBeforeRender(N,x,R,$),E=pt.get(x,S.length),E.init(R),E.state.textureUnits=Y.getTextureUnits(),S.push(E),Gt.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),Zt.setFromProjectionMatrix(Gt,ts,R.reversedDepth),we=this.localClippingEnabled,ie=Dt.init(this.clippingPlanes,we),T=vt.get(x,w.length),T.init(),w.push(T),Nt.enabled===!0&&Nt.isPresenting===!0){let at=N.xr.getDepthSensingMesh();at!==null&&Br(at,R,-1/0,N.sortObjects)}Br(x,R,0,N.sortObjects),T.finish(),z!==null&&z.updateLights(E.state.lightsArray),N.sortObjects===!0&&T.sort(Tt,It),ge=Nt.enabled===!1||Nt.isPresenting===!1||Nt.hasDepthSensing()===!1,ge&&kt.addToRenderList(T,x),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ie===!0&&Dt.beginShadows();let P=E.state.shadowsArray;if(Pt.render(P,x,R),ie===!0&&Dt.endShadows(),(U&&C.hasRenderPass())===!1){let at=T.opaque,ct=T.transmissive;if(E.setupLights(),R.isArrayCamera){let Mt=R.cameras;if(ct.length>0)for(let At=0,Bt=Mt.length;At<Bt;At++){let qt=Mt[At];ml(at,ct,x,qt)}ge&&kt.render(x);for(let At=0,Bt=Mt.length;At<Bt;At++){let qt=Mt[At];pl(T,x,qt,qt.viewport)}}else ct.length>0&&ml(at,ct,x,R),ge&&kt.render(x),pl(T,x,R)}$!==null&&q===0&&(Y.updateMultisampleRenderTarget($),Y.updateRenderTargetMipmap($)),U&&C.end(N),x.isScene===!0&&x.onAfterRender(N,x,R),xt.resetDefaultState(),H=-1,W=null,S.pop(),S.length>0?(E=S[S.length-1],Y.setTextureUnits(E.state.textureUnits),ie===!0&&Dt.setGlobalState(N.clippingPlanes,E.state.camera)):E=null,w.pop(),w.length>0?T=w[w.length-1]:T=null,z!==null&&z.renderEnd()};function Br(x,R,B,U){if(x.visible===!1)return;if(x.layers.test(R.layers)){if(x.isGroup)B=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(R);else if(x.isLightProbeGrid)E.pushLightProbeGrid(x);else if(x.isLight)E.pushLight(x),x.castShadow&&E.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||x.intersectsFrustum(Zt)){U&&Qe.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Gt);let at=K.update(x),ct=x.material;ct.visible&&T.push(x,at,ct,B,Qe.z,null,R)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||x.intersectsFrustum(Zt))){let at=K.update(x),ct=x.material;if(U&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Qe.copy(x.boundingSphere.center)):(at.boundingSphere===null&&at.computeBoundingSphere(),Qe.copy(at.boundingSphere.center)),Qe.applyMatrix4(x.matrixWorld).applyMatrix4(Gt)),Array.isArray(ct)){let Mt=at.groups;for(let At=0,Bt=Mt.length;At<Bt;At++){let qt=Mt[At],wt=ct[qt.materialIndex];wt&&wt.visible&&T.push(x,at,wt,B,Qe.z,qt,R)}}else ct.visible&&T.push(x,at,ct,B,Qe.z,null,R)}}let rt=x.children;for(let at=0,ct=rt.length;at<ct;at++)Br(rt[at],R,B,U)}function pl(x,R,B,U){let{opaque:P,transmissive:rt,transparent:at}=x;E.setupLightsView(B),ie===!0&&Dt.setGlobalState(N.clippingPlanes,B),U&&_.viewport(nt.copy(U)),P.length>0&&Ja(P,R,B),rt.length>0&&Ja(rt,R,B),at.length>0&&Ja(at,R,B),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function ml(x,R,B,U){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[U.id]===void 0){let wt=de.has("EXT_color_buffer_half_float")||de.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[U.id]=new Fn(1,1,{generateMipmaps:!0,type:wt?Ei:Ti,minFilter:qa,samples:Math.max(4,A.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ce.workingColorSpace})}let rt=E.state.transmissionRenderTarget[U.id],at=U.viewport||nt;rt.setSize(at.z*N.transmissionResolutionScale,at.w*N.transmissionResolutionScale);let ct=N.getRenderTarget(),Mt=N.getActiveCubeFace(),At=N.getActiveMipmapLevel();N.setRenderTarget(rt),N.getClearColor($t),Yt=N.getClearAlpha(),Yt<1&&N.setClearColor(16777215,.5),N.clear(),ge&&kt.render(B);let Bt=N.toneMapping;N.toneMapping=es;let qt=U.viewport;if(U.viewport!==void 0&&(U.viewport=void 0),E.setupLightsView(U),ie===!0&&Dt.setGlobalState(N.clippingPlanes,U),Ja(x,B,U),Y.updateMultisampleRenderTarget(rt),Y.updateRenderTargetMipmap(rt),de.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let ee=0,Ce=R.length;ee<Ce;ee++){let ve=R[ee],{object:ye,geometry:je,material:bt,group:ke}=ve;if(bt.side===ws&&ye.layers.test(U.layers)){let Ct=bt.side;bt.side=Yn,bt.needsUpdate=!0,gl(ye,B,U,je,bt,ke),bt.side=Ct,bt.needsUpdate=!0,wt=!0}}wt===!0&&(Y.updateMultisampleRenderTarget(rt),Y.updateRenderTargetMipmap(rt))}N.setRenderTarget(ct,Mt,At),N.setClearColor($t,Yt),qt!==void 0&&(U.viewport=qt),N.toneMapping=Bt}function Ja(x,R,B){let U=R.isScene===!0?R.overrideMaterial:null;for(let P=0,rt=x.length;P<rt;P++){let at=x[P],{object:ct,geometry:Mt,group:At}=at,Bt=at.material;Bt.allowOverride===!0&&U!==null&&(Bt=U),ct.layers.test(B.layers)&&gl(ct,R,B,Mt,Bt,At)}}function gl(x,R,B,U,P,rt){z!==null&&P.isNodeMaterial&&z.setObject(x,P),x.onBeforeRender(N,R,B,U,P,rt),x.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),P.onBeforeRender(N,R,B,U,x,rt),P.transparent===!0&&P.side===ws&&P.forceSinglePass===!1?(P.side=Yn,P.needsUpdate=!0,N.renderBufferDirect(B,R,U,P,x,rt),P.side=Xa,P.needsUpdate=!0,N.renderBufferDirect(B,R,U,P,x,rt),P.side=ws):N.renderBufferDirect(B,R,U,P,x,rt),x.onAfterRender(N,R,B,U,P,rt)}function Ka(x,R,B){R.isScene!==!0&&(R=bn);let U=V.get(x),P=E.state.lights,rt=E.state.shadowsArray,at=P.state.version,ct=mt.getParameters(x,P.state,rt,R,B,E.state.lightProbeGridArray),Mt=mt.getProgramCacheKey(ct),At=U.programs;U.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,U.fog=R.fog;let Bt=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;U.envMap=ut.get(x.envMap||U.environment,Bt),U.envMapRotation=U.environment!==null&&x.envMap===null?R.environmentRotation:x.envMapRotation,At===void 0&&(x.addEventListener("dispose",Zn),At=new Map,U.programs=At);let qt=At.get(Mt);if(qt!==void 0){if(U.currentProgram===qt&&U.lightsStateVersion===at)return it(x,ct),qt}else ct.uniforms=mt.getUniforms(x),z!==null&&x.isNodeMaterial&&z.build(x,B,ct),x.onBeforeCompile(ct,N),qt=mt.acquireProgram(ct,Mt),At.set(Mt,qt),U.uniforms=ct.uniforms;let wt=U.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(wt.clippingPlanes=Dt.uniform),it(x,ct),U.needsLights=ft(x),U.lightsStateVersion=at,U.needsLights&&(wt.ambientLightColor.value=P.state.ambient,wt.lightProbe.value=P.state.probe,wt.sunLights.value=P.state.sun,wt.sunLightShadows.value=P.state.sunShadow,wt.directionalLights.value=P.state.directional,wt.directionalLightShadows.value=P.state.directionalShadow,wt.spotLights.value=P.state.spot,wt.spotLightShadows.value=P.state.spotShadow,wt.rectAreaLights.value=P.state.rectArea,wt.ltc_1.value=P.state.rectAreaLTC1,wt.ltc_2.value=P.state.rectAreaLTC2,wt.pointLights.value=P.state.point,wt.pointLightShadows.value=P.state.pointShadow,wt.hemisphereLights.value=P.state.hemi,wt.sunShadowMatrix.value=P.state.sunShadowMatrix,wt.sunShadowCascade.value=P.state.sunShadowCascade,wt.directionalShadowMatrix.value=P.state.directionalShadowMatrix,wt.spotLightMatrix.value=P.state.spotLightMatrix,wt.spotLightMap.value=P.state.spotLightMap,wt.pointShadowMatrix.value=P.state.pointShadowMatrix),U.lightProbeGrid=E.state.lightProbeGridArray.length>0,U.currentProgram=qt,U.uniformsList=null,qt}function _l(x){if(x.uniformsList===null){let R=x.currentProgram.getUniforms();x.uniformsList=ul.seqWithValue(R.seq,x.uniforms)}return x.uniformsList}function it(x,R){let B=V.get(x);B.outputColorSpace=R.outputColorSpace,B.batching=R.batching,B.batchingColor=R.batchingColor,B.instancing=R.instancing,B.instancingColor=R.instancingColor,B.instancingMorph=R.instancingMorph,B.skinning=R.skinning,B.morphTargets=R.morphTargets,B.morphNormals=R.morphNormals,B.morphColors=R.morphColors,B.morphTargetsCount=R.morphTargetsCount,B.numClippingPlanes=R.numClippingPlanes,B.numIntersection=R.numClipIntersection,B.vertexAlphas=R.vertexAlphas,B.vertexTangents=R.vertexTangents,B.toneMapping=R.toneMapping}function ot(x,R){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;y.setFromMatrixPosition(R.matrixWorld);for(let B=0,U=x.length;B<U;B++){let P=x[B];if(P.texture!==null&&P.boundingBox.containsPoint(y))return P}return null}function lt(x,R,B,U,P){R.isScene!==!0&&(R=bn),Y.resetTextureUnits();let rt=R.fog,at=U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial?R.environment:null,ct=$===null?N.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:ce.workingColorSpace,Mt=U.isMeshStandardMaterial||U.isMeshLambertMaterial&&!U.envMap||U.isMeshPhongMaterial&&!U.envMap,At=ut.get(U.envMap||at,Mt),Bt=U.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,qt=!!B.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),wt=!!B.morphAttributes.position,ee=!!B.morphAttributes.normal,Ce=!!B.morphAttributes.color,ve=es;U.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(ve=N.toneMapping);let ye=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,je=ye!==void 0?ye.length:0,bt=V.get(U),ke=E.state.lights;if(ie===!0&&(we===!0||x!==W)){let oe=x===W&&U.id===H;Dt.setState(U,x,oe)}let Ct=!1;U.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==ke.state.version||bt.outputColorSpace!==ct||P.isBatchedMesh&&bt.batching===!1||!P.isBatchedMesh&&bt.batching===!0||P.isBatchedMesh&&bt.batchingColor===!0&&P._colorsTexture===null||P.isBatchedMesh&&bt.batchingColor===!1&&P._colorsTexture!==null||P.isInstancedMesh&&bt.instancing===!1||!P.isInstancedMesh&&bt.instancing===!0||P.isSkinnedMesh&&bt.skinning===!1||!P.isSkinnedMesh&&bt.skinning===!0||P.isInstancedMesh&&bt.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&bt.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&bt.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&bt.instancingMorph===!1&&P.morphTexture!==null||bt.envMap!==At||U.fog===!0&&bt.fog!==rt||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==Dt.numPlanes||bt.numIntersection!==Dt.numIntersection)||bt.vertexAlphas!==Bt||bt.vertexTangents!==qt||bt.morphTargets!==wt||bt.morphNormals!==ee||bt.morphColors!==Ce||bt.toneMapping!==ve||bt.morphTargetsCount!==je||!!bt.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(Ct=!0):(Ct=!0,bt.__version=U.version);let Te=bt.currentProgram;Ct===!0&&(Te=Ka(U,R,P),z&&U.isNodeMaterial&&z.onUpdateProgram(U,Te,bt));let Se=!1,Re=!1,Be=!1,Qt=Te.getUniforms(),me=bt.uniforms;if(_.useProgram(Te.program)&&(Se=!0,Re=!0,Be=!0),U.id!==H&&(H=U.id,Re=!0),bt.needsLights){let oe=ot(E.state.lightProbeGridArray,P);bt.lightProbeGrid!==oe&&(bt.lightProbeGrid=oe,Re=!0)}if(Se||W!==x){_.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),Qt.setValue(L,"projectionMatrix",x.projectionMatrix),Qt.setValue(L,"viewMatrix",x.matrixWorldInverse);let rn=Qt.map.cameraPosition;rn!==void 0&&rn.setValue(L,pe.setFromMatrixPosition(x.matrixWorld)),A.logarithmicDepthBuffer&&Qt.setValue(L,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Qt.setValue(L,"isOrthographic",x.isOrthographicCamera===!0),W!==x&&(W=x,Re=!0,Be=!0)}if(bt.needsLights&&(ke.state.sunShadowMap.length>0&&Qt.setValue(L,"sunShadowMap",ke.state.sunShadowMap,Y),ke.state.directionalShadowMap.length>0&&Qt.setValue(L,"directionalShadowMap",ke.state.directionalShadowMap,Y),ke.state.spotShadowMap.length>0&&Qt.setValue(L,"spotShadowMap",ke.state.spotShadowMap,Y),ke.state.pointShadowMap.length>0&&Qt.setValue(L,"pointShadowMap",ke.state.pointShadowMap,Y)),P.isSkinnedMesh){Qt.setOptional(L,P,"bindMatrix"),Qt.setOptional(L,P,"bindMatrixInverse");let oe=P.skeleton;oe&&(oe.boneTexture===null&&oe.computeBoneTexture(),Qt.setValue(L,"boneTexture",oe.boneTexture,Y))}P.isBatchedMesh&&(Qt.setOptional(L,P,"batchingTexture"),Qt.setValue(L,"batchingTexture",P._matricesTexture,Y),Qt.setOptional(L,P,"batchingIdTexture"),Qt.setValue(L,"batchingIdTexture",P._indirectTexture,Y),Qt.setOptional(L,P,"batchingColorTexture"),P._colorsTexture!==null&&Qt.setValue(L,"batchingColorTexture",P._colorsTexture,Y));let en=B.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&D.update(P,B,Te),(Re||bt.receiveShadow!==P.receiveShadow)&&(bt.receiveShadow=P.receiveShadow,Qt.setValue(L,"receiveShadow",P.receiveShadow)),(U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial)&&U.envMap===null&&R.environment!==null&&(me.envMapIntensity.value=R.environmentIntensity),me.dfgLUT!==void 0&&(me.dfgLUT.value=ON()),Re){if(Qt.setValue(L,"toneMappingExposure",N.toneMappingExposure),bt.needsLights&&dt(me,Be),rt&&U.fog===!0&&Ut.refreshFogUniforms(me,rt),Ut.refreshMaterialUniforms(me,U,et,J,E.state.transmissionRenderTarget[x.id]),bt.needsLights&&bt.lightProbeGrid){let oe=bt.lightProbeGrid;me.probesSH.value=oe.texture,me.probesMin.value.copy(oe.boundingBox.min),me.probesMax.value.copy(oe.boundingBox.max),me.probesResolution.value.copy(oe.resolution)}ul.upload(L,_l(bt),me,Y)}if(U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(ul.upload(L,_l(bt),me,Y),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Qt.setValue(L,"center",P.center),Qt.setValue(L,"modelViewMatrix",P.modelViewMatrix),Qt.setValue(L,"normalMatrix",P.normalMatrix),Qt.setValue(L,"modelMatrix",P.matrixWorld),U.uniformsGroups!==void 0){let oe=U.uniformsGroups;for(let rn=0,Tn=oe.length;rn<Tn;rn++){let Un=oe[rn];st.update(Un,Te),st.bind(Un,Te)}}return Te}function dt(x,R){x.ambientLightColor.needsUpdate=R,x.lightProbe.needsUpdate=R,x.sunLights.needsUpdate=R,x.sunLightShadows.needsUpdate=R,x.directionalLights.needsUpdate=R,x.directionalLightShadows.needsUpdate=R,x.pointLights.needsUpdate=R,x.pointLightShadows.needsUpdate=R,x.spotLights.needsUpdate=R,x.spotLightShadows.needsUpdate=R,x.rectAreaLights.needsUpdate=R,x.hemisphereLights.needsUpdate=R}function ft(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(x,R,B){let U=V.get(x);U.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,U.__autoAllocateDepthBuffer===!1&&(U.__useRenderToTexture=!1),V.get(x.texture).__webglTexture=R,V.get(x.depthTexture).__webglTexture=U.__autoAllocateDepthBuffer?void 0:B,U.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,R){let B=V.get(x);B.__webglFramebuffer=R,B.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(x,R=0,B=0){$=x,Q=R,q=B;let U=null,P=!1,rt=!1;if(x){let ct=V.get(x);if(ct.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(L.FRAMEBUFFER,ct.__webglFramebuffer),nt.copy(x.viewport),Rt.copy(x.scissor),Et=x.scissorTest,_.viewport(nt),_.scissor(Rt),_.setScissorTest(Et),H=-1;return}else if(ct.__webglFramebuffer===void 0)Y.setupRenderTarget(x);else if(ct.__hasExternalTextures)Y.rebindTextures(x,V.get(x.texture).__webglTexture,V.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let Bt=x.depthTexture;if(ct.__boundDepthTexture!==Bt){if(Bt!==null&&V.has(Bt)&&(x.width!==Bt.image.width||x.height!==Bt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(x)}}let Mt=x.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(rt=!0);let At=V.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(At[R])?U=At[R][B]:U=At[R],P=!0):x.samples>0&&Y.useMultisampledRTT(x)===!1?U=V.get(x).__webglMultisampledFramebuffer:Array.isArray(At)?U=At[B]:U=At,nt.copy(x.viewport),Rt.copy(x.scissor),Et=x.scissorTest}else nt.copy(yt).multiplyScalar(et).floor(),Rt.copy(Ot).multiplyScalar(et).floor(),Et=fe;if(B!==0&&(U=k),_.bindFramebuffer(L.FRAMEBUFFER,U)&&_.drawBuffers(x,U),_.viewport(nt),_.scissor(Rt),_.setScissorTest(Et),P){let ct=V.get(x.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+R,ct.__webglTexture,B)}else if(rt){let ct=R;for(let Mt=0;Mt<x.textures.length;Mt++){let At=V.get(x.textures[Mt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Mt,At.__webglTexture,B,ct)}}else if(x!==null&&B!==0){let ct=V.get(x.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ct.__webglTexture,B)}H=-1};function zt(x){let R=V.get(x);return(R.__readFormat!==x.format||R.__readType!==x.type)&&(R.__readFormat=x.format,R.__readType=x.type,R.__formatReadable=A.textureFormatReadable(x.format),R.__typeReadable=A.textureTypeReadable(x.type)),R}this.readRenderTargetPixels=function(x,R,B,U,P,rt,at,ct=0){if(!(x&&x.isWebGLRenderTarget)){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=V.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&at!==void 0&&(Mt=Mt[at]),Mt){_.bindFramebuffer(L.FRAMEBUFFER,Mt);try{let At=x.textures[ct],Bt=At.format,qt=At.type;x.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ct);let wt=zt(At);if(wt.__formatReadable===!1){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(wt.__typeReadable===!1){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=x.width-U&&B>=0&&B<=x.height-P&&L.readPixels(R,B,U,P,_t.convert(Bt),_t.convert(qt),rt)}finally{let At=$!==null?V.get($).__webglFramebuffer:null;_.bindFramebuffer(L.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(x,R,B,U,P,rt,at,ct=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=V.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&at!==void 0&&(Mt=Mt[at]),Mt)if(R>=0&&R<=x.width-U&&B>=0&&B<=x.height-P){_.bindFramebuffer(L.FRAMEBUFFER,Mt);let At=x.textures[ct],Bt=At.format,qt=At.type;x.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ct);let wt=zt(At);if(wt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(wt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ee=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ee),L.bufferData(L.PIXEL_PACK_BUFFER,rt.byteLength,L.STREAM_READ),L.readPixels(R,B,U,P,_t.convert(Bt),_t.convert(qt),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let Ce=$!==null?V.get($).__webglFramebuffer:null;_.bindFramebuffer(L.FRAMEBUFFER,Ce);let ve=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await kb(L,ve,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ee),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,rt),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(ee),L.deleteSync(ve),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,R=null,B=0){let U=Math.pow(2,-B),P=Math.floor(x.image.width*U),rt=Math.floor(x.image.height*U),at=R!==null?R.x:0,ct=R!==null?R.y:0;Y.setTexture2D(x,0),L.copyTexSubImage2D(L.TEXTURE_2D,B,0,0,at,ct,P,rt),_.unbindTexture()},this.copyTextureToTexture=function(x,R,B=null,U=null,P=0,rt=0){let at,ct,Mt,At,Bt,qt,wt,ee,Ce,ve=x.isCompressedTexture?x.mipmaps[rt]:x.image;if(B!==null)at=B.max.x-B.min.x,ct=B.max.y-B.min.y,Mt=B.isBox3?B.max.z-B.min.z:1,At=B.min.x,Bt=B.min.y,qt=B.isBox3?B.min.z:0;else{let me=Math.pow(2,-P);at=Math.floor(ve.width*me),ct=Math.floor(ve.height*me),x.isDataArrayTexture?Mt=ve.depth:x.isData3DTexture?Mt=Math.floor(ve.depth*me):Mt=1,At=0,Bt=0,qt=0}U!==null?(wt=U.x,ee=U.y,Ce=U.z):(wt=0,ee=0,Ce=0);let ye=_t.convert(R.format),je=_t.convert(R.type),bt;R.isData3DTexture?(Y.setTexture3D(R,0),bt=L.TEXTURE_3D):R.isDataArrayTexture||R.isCompressedArrayTexture?(Y.setTexture2DArray(R,0),bt=L.TEXTURE_2D_ARRAY):(Y.setTexture2D(R,0),bt=L.TEXTURE_2D),_.activeTexture(L.TEXTURE0),_.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,R.flipY),_.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),_.pixelStorei(L.UNPACK_ALIGNMENT,R.unpackAlignment);let ke=_.getParameter(L.UNPACK_ROW_LENGTH),Ct=_.getParameter(L.UNPACK_IMAGE_HEIGHT),Te=_.getParameter(L.UNPACK_SKIP_PIXELS),Se=_.getParameter(L.UNPACK_SKIP_ROWS),Re=_.getParameter(L.UNPACK_SKIP_IMAGES);_.pixelStorei(L.UNPACK_ROW_LENGTH,ve.width),_.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ve.height),_.pixelStorei(L.UNPACK_SKIP_PIXELS,At),_.pixelStorei(L.UNPACK_SKIP_ROWS,Bt),_.pixelStorei(L.UNPACK_SKIP_IMAGES,qt);let Be=x.isDataArrayTexture||x.isData3DTexture,Qt=R.isDataArrayTexture||R.isData3DTexture;if(x.isDepthTexture){let me=V.get(x),en=V.get(R),oe=V.get(me.__renderTarget),rn=V.get(en.__renderTarget);_.bindFramebuffer(L.READ_FRAMEBUFFER,oe.__webglFramebuffer),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,rn.__webglFramebuffer);for(let Tn=0;Tn<Mt;Tn++)Be&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,V.get(x).__webglTexture,P,qt+Tn),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,V.get(R).__webglTexture,rt,Ce+Tn)),L.blitFramebuffer(At,Bt,at,ct,wt,ee,at,ct,L.DEPTH_BUFFER_BIT,L.NEAREST);_.bindFramebuffer(L.READ_FRAMEBUFFER,null),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(P!==0||x.isRenderTargetTexture||V.has(x)){let me=V.get(x),en=V.get(R);_.bindFramebuffer(L.READ_FRAMEBUFFER,I),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,G);for(let oe=0;oe<Mt;oe++)Be?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,me.__webglTexture,P,qt+oe):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,me.__webglTexture,P),Qt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,en.__webglTexture,rt,Ce+oe):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,en.__webglTexture,rt),P!==0?L.blitFramebuffer(At,Bt,at,ct,wt,ee,at,ct,L.COLOR_BUFFER_BIT,L.NEAREST):Qt?L.copyTexSubImage3D(bt,rt,wt,ee,Ce+oe,At,Bt,at,ct):L.copyTexSubImage2D(bt,rt,wt,ee,At,Bt,at,ct);_.bindFramebuffer(L.READ_FRAMEBUFFER,null),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Qt?x.isDataTexture||x.isData3DTexture?L.texSubImage3D(bt,rt,wt,ee,Ce,at,ct,Mt,ye,je,ve.data):R.isCompressedArrayTexture?L.compressedTexSubImage3D(bt,rt,wt,ee,Ce,at,ct,Mt,ye,ve.data):L.texSubImage3D(bt,rt,wt,ee,Ce,at,ct,Mt,ye,je,ve):x.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,rt,wt,ee,at,ct,ye,je,ve.data):x.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,rt,wt,ee,ve.width,ve.height,ye,ve.data):L.texSubImage2D(L.TEXTURE_2D,rt,wt,ee,at,ct,ye,je,ve);_.pixelStorei(L.UNPACK_ROW_LENGTH,ke),_.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ct),_.pixelStorei(L.UNPACK_SKIP_PIXELS,Te),_.pixelStorei(L.UNPACK_SKIP_ROWS,Se),_.pixelStorei(L.UNPACK_SKIP_IMAGES,Re),rt===0&&R.generateMipmaps&&L.generateMipmap(bt),_.unbindTexture()},this.initRenderTarget=function(x){V.get(x).__webglFramebuffer===void 0&&Y.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Y.setTextureCube(x,0):x.isData3DTexture?Y.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Y.setTexture2DArray(x,0):Y.setTexture2D(x,0),_.unbindTexture()},this.resetState=function(){Q=0,q=0,$=null,_.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ts}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=ce._getDrawingBufferColorSpace(t),n.unpackColorSpace=ce._getUnpackColorSpace()}};var b1=(...e)=>e.filter(Boolean).join(" ");var iu=Fr(eu()),$s=16e3,FN=["streams","waves","vortex","radial","contours"],f_=64,zN=40,jt=(e,t,n)=>Math.min(n,Math.max(t,e)),Ge=(e,t)=>Number.isFinite(e)?e:t,Hd=new he,d_=e=>{let t=e.trim().toLowerCase();if(!t||t==="transparent"||t==="none"||t==="auto")return null;try{Hd.setStyle(t,ss)}catch{return null}return[Hd.r,Hd.g,Hd.b]},ta=e=>e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4),p_=e=>e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055,w1=([e,t,n])=>{let i=ta(e),s=ta(t),a=ta(n),r=Math.cbrt(.4122214708*i+.5363325363*s+.0514459929*a),o=Math.cbrt(.2119034982*i+.6806995451*s+.1073969566*a),l=Math.cbrt(.0883024619*i+.2817188376*s+.6299787005*a);return[.2104542553*r+.793617785*o-.0040720468*l,1.9779984951*r-2.428592205*o+.4505937099*l,.0259040371*r+.7827717662*o-.808675766*l]},C1=([e,t,n])=>{let i=Math.pow(e+.3963377774*t+.2158037573*n,3),s=Math.pow(e-.1055613458*t-.0638541728*n,3),a=Math.pow(e-.0894841775*t-1.291485548*n,3);return[jt(p_(4.0767416621*i-3.3077115913*s+.2309699292*a),0,1),jt(p_(-1.2684380046*i+2.6097574011*s-.3413193965*a),0,1),jt(p_(-.0041960863*i-.7034186147*s+1.707614701*a),0,1)]},ri=(()=>{let e=Array.from({length:256},(i,s)=>s),t=1337;for(let i=255;i>0;i--){t=t*16807%2147483647;let s=t%(i+1),a=e[i];e[i]=e[s],e[s]=a}let n=new Uint8Array(512);for(let i=0;i<512;i++)n[i]=e[i&255];return n})(),m_=e=>e*e*e*(e*(e*6-15)+10),Za=(e,t,n,i)=>{let s=e&15,a=s<8?t:n,r=s<4?n:s===12||s===14?t:i;return((s&1)===0?a:-a)+((s&2)===0?r:-r)},nu=(e,t,n)=>{let i=Math.floor(e),s=Math.floor(t),a=Math.floor(n),r=i&255,o=s&255,l=a&255,c=e-i,f=t-s,p=n-a,u=m_(c),d=m_(f),v=m_(p),b=ri[r]+o,m=ri[b]+l,h=ri[b+1]+l,g=ri[r+1]+o,M=ri[g]+l,y=ri[g+1]+l,T=(E,w,S)=>w+E*(S-w);return T(v,T(d,T(u,Za(ri[m],c,f,p),Za(ri[M],c-1,f,p)),T(u,Za(ri[h],c,f-1,p),Za(ri[y],c-1,f-1,p))),T(d,T(u,Za(ri[m+1],c,f,p-1),Za(ri[M+1],c-1,f,p-1)),T(u,Za(ri[h+1],c,f-1,p-1),Za(ri[y+1],c-1,f-1,p-1))))},HN=e=>{let t=window.matchMedia("(prefers-reduced-motion: reduce)");return t.addEventListener("change",e),()=>t.removeEventListener("change",e)},VN=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches,Vd=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,GN=`
uniform sampler2D uEnergy;
uniform sampler2D uFlow;
uniform vec2 uGrid;
uniform vec2 uOrigin;
uniform float uPitch;
uniform float uMaxRadius;
uniform float uBaseRadius;
uniform float uBase;
uniform float uGain;
uniform float uStretch;
uniform float uVariance;
uniform float uSquare;
uniform float uInk;
uniform float uFade;
uniform vec3 uBaseColor;
varying vec2 vUv;

float shape(vec2 q, float radius) {
  if (uSquare > 0.5) {
    vec2 d = abs(q) - vec2(radius * 0.86);
    return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
  }
  return length(q) - radius;
}

void main() {
  vec2 frag = gl_FragCoord.xy - uOrigin;
  vec2 cell = floor(frag / uPitch);
  if (cell.x < 0.0 || cell.y < 0.0 || cell.x >= uGrid.x || cell.y >= uGrid.y) {
    gl_FragColor = vec4(0.0);
    return;
  }
  vec2 local = frag - (cell + 0.5) * uPitch;
  vec2 uv = (cell + 0.5) / uGrid;
  vec4 energy = texture2D(uEnergy, uv);
  vec2 flow = texture2D(uFlow, uv).rg;
  float amount = max(energy.a, 0.0);
  float lit = (1.0 - exp(-amount * uGain)) * uFade;
  vec3 tint = energy.rgb / max(amount, 0.0001);
  float speed = length(flow) / max(amount, 0.0001);
  vec2 along = speed > 0.00001 ? flow / (speed * max(amount, 0.0001)) : vec2(1.0, 0.0);
  vec2 across = vec2(-along.y, along.x);
  float stretch = 1.0 + uStretch * clamp(speed * 6.0, 0.0, 1.6) * smoothstep(0.02, 0.3, lit);
  float halftone = mix(uBaseRadius, uMaxRadius, sqrt(lit));
  float panel = uMaxRadius * (0.72 + 0.28 * smoothstep(0.0, 0.45, lit));
  float radius = mix(panel, halftone, uVariance);
  vec2 q = vec2(dot(local, along) / stretch, dot(local, across));
  float d = shape(q, radius);
  float cover = 1.0 - smoothstep(-0.65, 0.65, d);
  float baseCover = (1.0 - smoothstep(-0.6, 0.6, shape(local, uBaseRadius))) * uBase * (1.0 - lit);
  if (uInk > 0.5) {
    float a = clamp(cover * lit * 2.3, 0.0, 1.0);
    vec3 color = tint * a;
    gl_FragColor = vec4(color + uBaseColor * baseCover * 0.5, a + baseCover * 0.5);
    return;
  }
  vec3 emission = tint * lit * cover * 1.6 + vec3(1.0) * max(lit - 0.82, 0.0) * cover * 0.8;
  gl_FragColor = vec4(emission + uBaseColor * baseCover, 1.0);
}
`,kN=`
uniform sampler2D uSource;
uniform vec2 uTexel;
uniform float uThreshold;
varying vec2 vUv;
vec3 tap(vec2 d) {
  vec3 c = texture2D(uSource, vUv + d * uTexel).rgb;
  float peak = max(c.r, max(c.g, c.b));
  return c * (max(peak - uThreshold, 0.0) / max(peak, 0.0001));
}
void main() {
  vec3 a = tap(vec2(-2.0, 2.0));
  vec3 b = tap(vec2(0.0, 2.0));
  vec3 c = tap(vec2(2.0, 2.0));
  vec3 d = tap(vec2(-2.0, 0.0));
  vec3 e = tap(vec2(0.0, 0.0));
  vec3 f = tap(vec2(2.0, 0.0));
  vec3 g = tap(vec2(-2.0, -2.0));
  vec3 h = tap(vec2(0.0, -2.0));
  vec3 i = tap(vec2(2.0, -2.0));
  vec3 j = tap(vec2(-1.0, 1.0));
  vec3 k = tap(vec2(1.0, 1.0));
  vec3 l = tap(vec2(-1.0, -1.0));
  vec3 m = tap(vec2(1.0, -1.0));
  vec3 color = e * 0.125 + (a + c + g + i) * 0.03125 + (b + d + f + h) * 0.0625 + (j + k + l + m) * 0.125;
  gl_FragColor = vec4(color, 1.0);
}
`,XN=`
uniform sampler2D uSource;
uniform vec2 uTexel;
varying vec2 vUv;
vec3 tap(vec2 d) { return texture2D(uSource, vUv + d * uTexel).rgb; }
void main() {
  vec3 color = tap(vec2(0.0)) * 4.0
    + (tap(vec2(-1.0, 0.0)) + tap(vec2(1.0, 0.0)) + tap(vec2(0.0, -1.0)) + tap(vec2(0.0, 1.0))) * 2.0
    + tap(vec2(-1.0, -1.0)) + tap(vec2(1.0, -1.0)) + tap(vec2(-1.0, 1.0)) + tap(vec2(1.0, 1.0));
  gl_FragColor = vec4(color / 16.0, 1.0);
}
`,WN=`
uniform sampler2D uScene;
uniform sampler2D uBloom;
uniform vec3 uBackground;
uniform float uBloomStrength;
uniform float uGrain;
uniform float uTime;
uniform float uInk;
varying vec2 vUv;

vec3 neutral(vec3 color) {
  const float start = 0.76;
  const float desaturation = 0.15;
  float x = min(color.r, min(color.g, color.b));
  float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
  color -= offset;
  float peak = max(color.r, max(color.g, color.b));
  if (peak < start) return color;
  const float d = 1.0 - start;
  float next = 1.0 - d * d / (peak + d - start);
  color *= next / peak;
  float g = 1.0 - 1.0 / (desaturation * (peak - next) + 1.0);
  return mix(color, vec3(next), g);
}

float hash(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

void main() {
  vec4 scene = texture2D(uScene, vUv);
  float n = hash(gl_FragCoord.xy + fract(uTime * 13.0) * 911.0) - 0.5;
  if (uInk > 0.5) {
    float cover = clamp(scene.a, 0.0, 1.0);
    vec3 ink = scene.rgb / max(scene.a, 0.0001);
    vec3 color = mix(uBackground, ink, cover);
    color += n * uGrain * 0.05 * smoothstep(0.0, 0.05, cover);
    gl_FragColor = vec4(clamp(color, 0.0, 1.0), 1.0);
    return;
  }
  vec3 emission = scene.rgb + texture2D(uBloom, vUv).rgb * uBloomStrength;
  vec3 light = neutral(max(emission, 0.0));
  light = pow(light, vec3(1.0 / 2.2));
  vec3 color = 1.0 - (1.0 - uBackground) * (1.0 - light);
  float l = max(light.r, max(light.g, light.b));
  float mask = smoothstep(0.0, 0.04, l);
  color += n * uGrain * 0.1 * mask;
  color += (hash(gl_FragCoord.xy * 1.7) - 0.5) / 255.0 * mask;
  gl_FragColor = vec4(clamp(color, 0.0, 1.0), 1.0);
}
`;function qN(e,t,n){let i=e.ownerDocument,s=i.defaultView??window,a=i.createElement("canvas");a.setAttribute("aria-hidden","true"),a.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block";let r;try{r=new Pd({canvas:a,alpha:!1,antialias:!1,powerPreference:"high-performance"})}catch{return null}t.appendChild(a),r.autoClear=!1;let o=()=>n.current,l=new Dr(-1,1,1,-1,-1,1),c=new Nr(2,2),f=new Uc,p=new ai(c);p.frustumCulled=!1,f.add(p);let u=1,d=1,v=new Float32Array(4),b=new Float32Array(2),m=new js(v,1,1,Hn,zn),h=new js(b,1,1,is,zn),g=new X(.04,.04,.04),M=new X(.1,.06,.3),y=new Mn({uniforms:{uEnergy:{value:m},uFlow:{value:h},uGrid:{value:new re(1,1)},uOrigin:{value:new re(0,0)},uPitch:{value:20},uMaxRadius:{value:7},uBaseRadius:{value:1.2},uBase:{value:.12},uGain:{value:.7},uStretch:{value:.35},uVariance:{value:.35},uSquare:{value:0},uInk:{value:0},uFade:{value:1},uBaseColor:{value:M}},vertexShader:Vd,fragmentShader:GN,depthTest:!1,depthWrite:!1}),T=()=>new Fn(1,1,{type:Ei,format:Hn,depthBuffer:!1,stencilBuffer:!1,minFilter:hn,magFilter:hn,generateMipmaps:!1}),E=T(),w=Array.from({length:5},T),S=new Mn({uniforms:{uSource:{value:null},uTexel:{value:new re},uThreshold:{value:0}},vertexShader:Vd,fragmentShader:kN,depthTest:!1,depthWrite:!1}),C=new Mn({uniforms:{uSource:{value:null},uTexel:{value:new re}},vertexShader:Vd,fragmentShader:XN,blending:Gc,transparent:!0,depthTest:!1,depthWrite:!1}),N=new Mn({uniforms:{uScene:{value:E.texture},uBloom:{value:w[0].texture},uBackground:{value:g},uBloomStrength:{value:.6},uGrain:{value:.2},uTime:{value:0},uInk:{value:0}},vertexShader:Vd,fragmentShader:WN,depthTest:!1,depthWrite:!1}),O=new Float32Array($s),z=new Float32Array($s),k=new Float32Array($s),I=new Float32Array($s),G=new Float32Array($s),Q=new Float32Array($s),q=new Uint8Array($s),$=0,H=f_,W=32,nt=new Float32Array((H+1)*(W+1)),Rt=new Float32Array((H+1)*(W+1)),Et=new Float32Array((H+1)*(W+1)),$t=!1,Yt=!1,Kt=new Float32Array(H*W),J=new Float32Array(H*W),et=Array.from({length:33},()=>[1,1,1]),Tt=[],It=0,yt=0,Ot=1,fe=1,Zt=!1,ie="",we="",Gt=!1,pe=[.04,.04,.04],Qe=-10,bn=0,ge=0,Ye=0,L=0,Ze=0,de=-1,A=0,_=0,F=!1,V=!1,Y=!1,ut=7,ht=null,Z=null,K=()=>(ut=ut*16807%2147483647,(ut-1)/2147483646),mt=()=>{let it=e.parentElement;for(;it;){let dt=s.getComputedStyle(it).backgroundColor.match(/rgba?\(([^)]+)\)/);if(dt){let ft=dt[1].split(",").map(zt=>Number.parseFloat(zt));if(ft.length<4||ft[3]>.05)return[ft[0]/255,ft[1]/255,ft[2]/255]}it=it.parentElement}let ot=s.getComputedStyle(e).color.match(/rgba?\(([^)]+)\)/);if(ot){let lt=ot[1].split(",").map(dt=>Number.parseFloat(dt));return lt[0]+lt[1]+lt[2]>382?[.04,.04,.04]:[1,1,1]}return[.04,.04,.04]},Ut=()=>{let it=o();pe=d_(it.backgroundColor)??mt();let ot=[pe.join(","),it.colors[0],it.colors[1]].join("|");if(ot===we)return;we=ot,Gt=.2126*pe[0]+.7152*pe[1]+.0722*pe[2]>.55,g.set(pe[0],pe[1],pe[2]);let lt=w1(d_(it.colors[0])??[.32,.15,1]),dt=w1(d_(it.colors[1])??[1,.62,.99]),ft=U=>Math.hypot(U[1],U[2]),zt=(U,P)=>{if(!Gt)return U;let rt=U;ft(U)<.03&&ft(P)>=.03&&(rt=P);let at=ft(rt);if(at<.03)return[.3,0,0];let ct=Math.max(1,.15/at);return[jt(rt[0],.34,.52),rt[1]*ct,rt[2]*ct]},x=zt(lt,dt),R=zt(dt,lt);for(let U=0;U<et.length;U++){let P=U/(et.length-1),rt=C1([x[0]+(R[0]-x[0])*P,x[1]+(R[1]-x[1])*P,x[2]+(R[2]-x[2])*P]);et[U]=Gt?rt:[ta(rt[0]),ta(rt[1]),ta(rt[2])]}let B=C1([Gt?.82:.32,x[1]*.5,x[2]*.5]);Gt?M.set(B[0],B[1],B[2]):M.set(ta(B[0])*.55,ta(B[1])*.55,ta(B[2])*.55),y.uniforms.uInk.value=Gt?1:0,N.uniforms.uInk.value=Gt?1:0},vt=it=>et[Math.round(jt(it,0,1)*(et.length-1))],pt=()=>{let it=o(),ot=Math.round(e.clientWidth),lt=Math.round(e.clientHeight);if(ot<2||lt<2)return Zt=!1,!1;let dt=Math.min(s.devicePixelRatio||1,jt(Ge(it.dpr,2),.5,3));if(Zt&&ot===It&&lt===yt&&dt===fe)return!1;Zt=!0,It=ot,yt=lt,Ot=It/yt,fe=dt,r.setPixelRatio(fe),r.setSize(It,yt,!1),E.setSize(Math.round(It*fe),Math.round(yt*fe));let ft=Math.round(It*fe),zt=Math.round(yt*fe);for(let x of w)ft=Math.max(1,Math.round(ft/2)),zt=Math.max(1,Math.round(zt/2)),x.setSize(ft,zt);return ie="",!0},Dt=()=>{let it=o(),ot=Math.max(3,Math.round(jt(Ge(it.pitch,8),4,48)*fe)),lt=[It,yt,fe,ot].join("|");if(lt===ie)return;ie=lt;let dt=Math.round(It*fe),ft=Math.round(yt*fe);u=Math.ceil(dt/ot)+1,d=Math.ceil(ft/ot)+1,v=new Float32Array(u*d*4),b=new Float32Array(u*d*2),m.dispose(),h.dispose(),m=new js(v,u,d,Hn,zn),h=new js(b,u,d,is,zn);for(let x of[m,h])x.minFilter=an,x.magFilter=an,x.needsUpdate=!0;let zt=y.uniforms;zt.uEnergy.value=m,zt.uFlow.value=h,zt.uGrid.value.set(u,d),zt.uPitch.value=ot,zt.uOrigin.value.set((dt-u*ot)/2,(ft-d*ot)/2),H=f_,W=Math.max(12,Math.round(f_/Math.max(Ot,.3))),nt=new Float32Array((H+1)*(W+1)),Rt=new Float32Array((H+1)*(W+1)),Et=new Float32Array((H+1)*(W+1)),Kt=new Float32Array(H*W),J=new Float32Array(H*W)},Pt=()=>jt(Ge(o().speed,.6),0,3)*.25,kt=()=>{let it=o(),ot=Pt(),lt=it.pattern,dt=jt(Ge(it.direction,0),-360,360)*Math.PI/180,ft=Math.cos(dt),zt=Math.sin(dt),x=Ge(it.direction,0)<0?-1:1,R=jt(Ge(it.turbulence,.6),0,2)*.3,B=jt(Ge(it.scale,1),.25,4),U=Ot*Math.abs(zt)+Math.abs(ft),P=jt(Ge(it.centerX,.5),-1,2)*Ot,rt=1-jt(Ge(it.centerY,.5),-1,2),at=Math.max(Math.hypot(P,rt),Math.hypot(Ot-P,rt),Math.hypot(P,1-rt),Math.hypot(Ot-P,1-rt),.2),ct=1.7/B,Mt=lt==="vortex"?1.35*B*x:0,At=.9*B;$t=lt==="radial"||lt==="vortex",Yt=$t;let Bt=1.35,qt=bn*Bt*.6;for(let Ct=0;Ct<=W;Ct++){let Te=Ct/W,Se=Te-.5;for(let Re=0;Re<=H;Re++){let Be=Re/H*Ot,Qt=Be-Ot/2,me=Qt*ft+Se*zt,en=-Qt*zt+Se*ft,oe=lt==="streams",rn=nu(me*Bt-(oe?qt:0),en*Bt*1.2,ge)+.42*nu(me*Bt*2.2+7.3-(oe?qt*1.3:0),en*Bt*2.3-3.1,ge*1.6+11.7)+.16*nu(me*Bt*4.6-2.1-(oe?qt*1.7:0),en*Bt*4.4+5.7,ge*2.3+3.3),Tn=Ct*(H+1)+Re;if(lt==="waves"){let Un=me/At*Math.PI*2+en*3.5+Math.sin(ge*2.1)*1.2,Qa=.075*(Math.sin(Un)+.35*Math.sin(Un*2+1.3+ge)),ki=(en+Qa+R*.3*rn)/U;nt[Tn]=ki,Et[Tn]=ki+.5}else if(lt==="vortex"||lt==="radial"){let Un=Math.hypot(Be-P,Te-rt)/at,ki=Math.atan2(Te-rt,Be-P)/(Math.PI*2)+.5+Mt*Un+R*.035*rn;nt[Tn]=ki,Et[Tn]=ki-Math.floor(ki)}else if(lt==="contours"){let Un=.62*nu(Be*ct,Te*ct,ge*.9)+.38*nu(Be*ct*2.1+5.2,Te*ct*2.1-3.4,ge*1.4+7.7)+R*.12*rn;nt[Tn]=Un,Et[Tn]=Un/1.1+.5}else{let Un=(en+R*rn)/U;nt[Tn]=Un,Et[Tn]=Un+.5}}}let wt=lt==="vortex"?ot/Math.hypot(1/(Math.PI*2*.4*at),Mt/at):lt==="radial"?ot*Math.PI*2*.4*at:lt==="contours"?ot*x*1.2/ct:ot*U,ee=Ot/H,Ce=1/W,ve=L,ye=jt(Ge(it.stir,1),0,3),je=Tt.filter(Ct=>ve-Ct.born<1.6);for(let Ct=0;Ct<=W;Ct++){let Te=Ct*Ce;for(let Se=0;Se<=H;Se++){let Re=Se*ee,Be=0;for(let Qt of je){let me=1-(ve-Qt.born)/1.6,en=Re-Qt.x,oe=Te-Qt.y,rn=Math.exp(-(en*en+oe*oe)/.02)*me*me;Be+=(Qt.vx*oe-Qt.vy*en)*rn*ye}Rt[Ct*(H+1)+Se]=Be}}let bt=ot*3+1e-4,ke=Ct=>Yt?Ct-Math.round(Ct):Ct;for(let Ct=0;Ct<W;Ct++)for(let Te=0;Te<H;Te++){let Se=Ct*(H+1)+Te,Re=nt[Se],Be=nt[Se+1],Qt=nt[Se+H+1],me=nt[Se+H+2],en=(ke(Qt-Re)+ke(me-Be))/(2*Ce),oe=(ke(Be-Re)+ke(me-Qt))/(2*ee),rn=Re+(ke(Be-Re)+ke(Qt-Re)+ke(me-Re))/4,Tn=lt==="contours"?rn/1.1+.5:$t?rn-Math.floor(rn):rn+.5,Un=.62+.76*(.5+.5*Math.sin(Tn*Math.PI*6+.9)),Qa=en*wt*Un,ki=-oe*wt*Un,Wd=Math.hypot(Qa,ki);Wd>bt&&(Qa*=bt/Wd,ki*=bt/Wd);let g_=Rt[Se],__=Rt[Se+1],v_=Rt[Se+H+1],y_=Rt[Se+H+2];Qa+=(v_+y_-g_-__)/(2*Ce),ki+=-(__+y_-g_-v_)/(2*ee),Kt[Ct*H+Te]=Qa,J[Ct*H+Te]=ki}for(let Ct=Tt.length-1;Ct>=0;Ct--)ve-Tt[Ct].born>1.6&&Tt.splice(Ct,1)},D=(it,ot,lt,dt,ft)=>{let zt=jt(ot/Ot*dt-.5,0,dt-1.001),x=jt(lt*ft-.5,0,ft-1.001),R=Math.floor(zt),B=Math.floor(x),U=zt-R,P=x-B,rt=it[B*dt+R],at=it[B*dt+R+1],ct=it[(B+1)*dt+R],Mt=it[(B+1)*dt+R+1];return rt+(at-rt)*U+(ct-rt)*P+(rt-at-ct+Mt)*U*P},gt=(it,ot)=>{let lt=jt(it/Ot*H,0,H-.001),dt=jt(ot*W,0,W-.001),ft=Math.floor(lt),zt=Math.floor(dt),x=lt-ft,R=dt-zt,B=H+1,U=Et[zt*B+ft],P=At=>$t?At-Math.round(At):At,rt=U+P(Et[zt*B+ft+1]-U),at=U+P(Et[(zt+1)*B+ft]-U),ct=U+P(Et[(zt+1)*B+ft+1]-U),Mt=U+(rt-U)*x+(at-U)*R+(U-rt-at+ct)*x*R;return $t?Mt-Math.floor(Mt):Mt},j=it=>{let ot=Math.sin(it*127.1+311.7)*43758.5453123;return ot-Math.floor(ot)},_t=(it,ot)=>{let lt=o(),dt=jt(Math.round(Ge(lt.streams,4)),1,16),ft=gt(it,ot),zt=jt(Ge(lt.spread,.5),.05,1.5)*.3/dt,x=0,R=0;for(let B=0;B<dt;B++){let U=(B+.5+(j(B*3.7+1.3)-.5)*($t?.3:.55))/dt,P=zt*(.55+.9*j(B*5.1+2.9)),rt=ft-U;$t&&(rt-=Math.round(rt));let at=Math.exp(-(rt*rt)/(2*P*P))*(.55+.45*j(B*2.3+.7));at>x&&(x=at,R=B)}return{profile:x,index:R,count:dt}},xt=(it,ot)=>{let lt=0,dt=0,ft={profile:0,index:0,count:1},zt=.18;for(let B=0;B<10&&(lt=-zt+K()*(Ot+zt*2),dt=-zt+K()*(1+zt*2),ft=_t(lt,dt),!(K()<ft.profile));B++);O[it]=lt,z[it]=dt,I[it]=2.8+K()*3.6,k[it]=ot?K()*I[it]:0;let x=K();G[it]=ft.profile*(.22+.78*x*x*x)*1.6;let R=$t?.5-.5*Math.cos(ft.index/ft.count*Math.PI*2):ft.count>1?ft.index/(ft.count-1):.5;Q[it]=jt(R+(K()-.5)*.1,0,1),q[it]=0},st=()=>{let it=o(),ot=jt(Math.round(Ge(it.streams,4)),1,16),lt=u*d/6e3,dt=jt(Ge(it.spread,.5),.05,1.5);return Math.round(jt(3400*lt*Math.sqrt(ot/4)*(.6+dt*.8),600,$s-1200))},Lt=it=>{$=st();for(let ot=0;ot<$;ot++)xt(ot,it)},Nt=(it,ot,lt)=>{let dt=Math.round(jt(lt,0,3)*110),ft=.55+K()*.45;for(let zt=0;zt<dt&&$<$s;zt++){let x=$++,R=Math.sqrt(K())*.055,B=K()*Math.PI*2;O[x]=it+Math.cos(B)*R,z[x]=ot+Math.sin(B)*R,k[x]=K()*.25,I[x]=3.2+K()*2.8,G[x]=.32+K()*.32,Q[x]=jt(ft+(K()-.5)*.18,0,1),q[x]=1}},Le=it=>{let ot=o(),lt=.08+jt(Ge(ot.trail,.6),0,1.5)*.9,dt=Math.exp(-it/lt);for(let at=0;at<v.length;at++)v[at]*=dt;for(let at=0;at<b.length;at++)b[at]*=dt;let ft=Math.round(It*fe),zt=Math.round(yt*fe),x=y.uniforms.uPitch.value,R=(ft-u*x)/2,B=(zt-d*x)/2,U=at=>(at/Ot*ft-R)/x-.5,P=at=>(at*zt-B)/x-.5,rt=it*60;for(let at=0;at<$;at++){let ct=k[at],Mt=I[at],At=Math.min(1,ct/.5)*Math.min(1,(Mt-ct)/.7);if(At<=0)continue;let Bt=G[at]*At*rt;if(Bt<=1e-4)continue;let qt=U(O[at]),wt=P(z[at]),ee=Math.floor(qt),Ce=Math.floor(wt);if(ee<-1||Ce<-1||ee>=u||Ce>=d)continue;let ve=qt-ee,ye=wt-Ce,je=vt(Q[at]+.22*Math.sin(O[at]*1.7+Ye+Q[at]*4)),bt=D(Kt,O[at],z[at],H,W),ke=D(J,O[at],z[at],H,W);for(let Ct=0;Ct<4;Ct++){let Te=ee+(Ct&1),Se=Ce+(Ct>>1);if(Te<0||Se<0||Te>=u||Se>=d)continue;let Re=(Ct&1?ve:1-ve)*(Ct>>1?ye:1-ye)*Bt,Be=Se*u+Te;v[Be*4]+=je[0]*Re,v[Be*4+1]+=je[1]*Re,v[Be*4+2]+=je[2]*Re,v[Be*4+3]+=Re,b[Be*2]+=bt*Re,b[Be*2+1]+=ke*Re}}m.needsUpdate=!0,h.needsUpdate=!0},_e=(it,ot)=>{let lt=0,dt=st();for(let ft=0;ft<$;ft++){k[ft]+=it*(q[ft]?1:ot);let zt=D(Kt,O[ft],z[ft],H,W),x=D(J,O[ft],z[ft],H,W);O[ft]+=zt*it,z[ft]+=x*it;let R=O[ft]<-.25||O[ft]>Ot+.25||z[ft]<-.25||z[ft]>1.25;if(k[ft]>=I[ft]||R){if(q[ft]||lt>=dt)continue;xt(ft,!1)}lt!==ft&&(O[lt]=O[ft],z[lt]=z[ft],k[lt]=k[ft],I[lt]=I[ft],G[lt]=G[ft],Q[lt]=Q[ft],q[lt]=q[ft]),lt++}for($=lt;$<dt;)xt($++,!1)},li=()=>{let it=o(),ot=y.uniforms.uPitch.value,lt=jt(Ge(it.dotSize,.62),.1,1),dt=y.uniforms;dt.uMaxRadius.value=ot*.5*lt,dt.uBaseRadius.value=Math.max(.6*fe,ot*.5*lt*.22),dt.uBase.value=jt(Ge(it.baseDots,.12),0,1),dt.uStretch.value=jt(Ge(it.stretch,.2),0,2),dt.uVariance.value=jt(Ge(it.variance,.35),0,1),dt.uSquare.value=it.shape==="square"?1:0;let ft=.08+jt(Ge(it.trail,.6),0,1.5)*.9;dt.uGain.value=jt(Ge(it.intensity,1),0,4)*1.05/(60*ft),dt.uFade.value=Ze,N.uniforms.uGrain.value=jt(Ge(it.grain,.2),0,1)},Zn=()=>{if(!Zt)return;let it=o();performance.now()-Qe>1e3&&(Qe=performance.now(),Ut()),Dt(),li(),Gt&&(y.blending=Vi),p.material=y,r.setRenderTarget(E),r.setClearColor(0,0),r.clear(),r.render(f,l);let ot=Gt?0:jt(Ge(it.bloom,.6),0,3);if(ot>.001){let lt=E;p.material=S;for(let dt of w)S.uniforms.uThreshold.value=lt===E?.25:0,S.uniforms.uSource.value=lt.texture,S.uniforms.uTexel.value.set(1/lt.width,1/lt.height),r.setRenderTarget(dt),r.render(f,l),lt=dt;p.material=C;for(let dt=w.length-1;dt>0;dt--)C.uniforms.uSource.value=w[dt].texture,C.uniforms.uTexel.value.set(1/w[dt].width,1/w[dt].height),r.setRenderTarget(w[dt-1]),r.render(f,l)}N.uniforms.uBloomStrength.value=ot,N.uniforms.uTime.value=L,p.material=N,r.setRenderTarget(null),r.render(f,l)},su=it=>{let ot=jt(Ge(o().speed,.6),0,3);bn+=it*Pt(),ge+=it*ot*.075,Ye+=it*ot*.2,kt(),_e(it,Math.min(1,ot/.3)),Le(it)},kd=it=>{Dt(),kt(),Lt(!0);let ot=1/30;for(let lt=0;lt<it;lt+=ot)su(ot)},Gi=()=>{V||Y||!F||A||(A=requestAnimationFrame(Pr))},Pr=it=>{if(A=0,V||Y)return;let ot=o(),lt=_&&it-_<100?Math.min(Math.max((it-_)/1e3,0),.05):1/60;_=it;let dt=!ot.reduced&&!ot.paused;if($===0&&(Dt(),kd(ot.reduced||!ot.intro?3:1.2),(ot.reduced||!ot.intro)&&(Ze=1)),dt&&(L+=lt,su(lt)),ot.intro&&!ot.reduced&&Ze<1){de<0&&(de=it);let ft=jt((it-de)/2200,0,1);Ze=ft*ft*(3-2*ft)}else Ze=1;Zn(),dt&&!document.hidden?A=requestAnimationFrame(Pr):_=0},Xd=it=>{let ot=it;return!!ot&&typeof ot.closest=="function"&&!!ot.closest("a,button,input,textarea,select,label,summary,[role=button],[contenteditable=true]")},fl=it=>{let ot=e.getBoundingClientRect();return ot.width<=0||ot.height<=0?null:{x:(it.clientX-ot.left)/ot.width*Ot,y:1-(it.clientY-ot.top)/ot.height}},dl=it=>{let ot=o();if(!ot.interactive||ot.reduced||ot.paused)return;let lt=fl(it);if(!lt)return;let dt=L;if(!ht||dt-ht.t>.25){ht={x:lt.x,y:lt.y,t:dt};return}let ft=lt.x-ht.x,zt=lt.y-ht.y,x=Math.hypot(ft,zt);if(x<.035)return;let R=Math.max(.012,dt-ht.t),U=Math.min(x/R,3)/Math.max(x,1e-4)*.12;Tt.push({x:lt.x,y:lt.y,vx:ft*U,vy:zt*U,born:dt}),Tt.length>zN&&Tt.shift(),ht={x:lt.x,y:lt.y,t:dt}},Ai=()=>{ht=null,Z=null},Br=it=>{let ot=o();Z=null,!(!ot.interactive||ot.reduced||ot.paused||!it.isPrimary)&&(it.pointerType==="mouse"&&it.button!==0||Xd(it.target)||(Z={id:it.pointerId,x:it.clientX,y:it.clientY,time:performance.now()}))},pl=it=>{let ot=Z;if(Z=null,!ot||ot.id!==it.pointerId)return;let lt=o();if(!lt.interactive||lt.reduced||lt.paused||Math.hypot(it.clientX-ot.x,it.clientY-ot.y)>10||performance.now()-ot.time>500)return;let dt=fl(it);dt&&(Nt(dt.x,dt.y,jt(Ge(lt.plume,1),0,3)),Gi())},ml=()=>{_=0,Gi()},Ja=it=>{it.preventDefault(),Y=!0,cancelAnimationFrame(A),A=0},gl=()=>{Y=!1,ie="",Gi()},Ka=new ResizeObserver(()=>{pt()&&(Dt(),$>0&&Lt(!0),Zn(),Gi())}),_l=new IntersectionObserver(([it])=>{F=it.isIntersecting,_=0,Gi()},{rootMargin:"120px"});return e.addEventListener("pointermove",dl),e.addEventListener("pointerdown",Br),e.addEventListener("pointerup",pl),e.addEventListener("pointerleave",Ai),e.addEventListener("pointercancel",Ai),document.addEventListener("visibilitychange",ml),a.addEventListener("webglcontextlost",Ja),a.addEventListener("webglcontextrestored",gl),Ka.observe(e),_l.observe(e),pt(),Ut(),{sync:()=>{Qe=-10,pt()&&(ie=""),_=0,$>0&&Math.abs($-st())>st()*.25&&Lt(!0),!A&&F&&(Zn(),Gi())},plume:(it,ot,lt)=>{let dt=o();dt.reduced||(Nt(jt(it??.5,0,1)*Ot,1-jt(ot??.5,0,1),jt(Ge(lt??dt.plume,1),0,3)),Gi())},replay:()=>{de=-1,Ze=0,$=0,v.fill(0),b.fill(0),_=0,Gi()},destroy:()=>{V=!0,cancelAnimationFrame(A),Ka.disconnect(),_l.disconnect(),e.removeEventListener("pointermove",dl),e.removeEventListener("pointerdown",Br),e.removeEventListener("pointerup",pl),e.removeEventListener("pointerleave",Ai),e.removeEventListener("pointercancel",Ai),document.removeEventListener("visibilitychange",ml),a.removeEventListener("webglcontextlost",Ja),a.removeEventListener("webglcontextrestored",gl),c.dispose(),y.dispose(),S.dispose(),C.dispose(),N.dispose(),m.dispose(),h.dispose(),E.dispose();for(let it of w)it.dispose();r.dispose(),a.remove()}}}var R1=(0,oi.forwardRef)(function({colors:t=["#5227FF","#FF9FFC"],backgroundColor:n="transparent",pattern:i="streams",centerX:s=.5,centerY:a=.5,scale:r=1,pitch:o=8,dotSize:l=.62,variance:c=.35,shape:f="circle",baseDots:p=.12,stretch:u=.2,streams:d=4,spread:v=.5,speed:b=.6,direction:m=0,turbulence:h=.6,trail:g=.6,intensity:M=1,bloom:y=.6,grain:T=.2,interactive:E=!0,stir:w=1,plume:S=1,intro:C=!0,paused:N=!1,dpr:O=2,children:z,className:k,style:I},G){let Q=(0,oi.useRef)(null),q=(0,oi.useRef)(null),$=(0,oi.useRef)(null),H=(0,oi.useSyncExternalStore)(HN,VN,()=>!1),W={colors:t,backgroundColor:n,pattern:FN.includes(i)?i:"streams",centerX:s,centerY:a,scale:r,pitch:o,dotSize:l,variance:c,shape:f==="square"?"square":"circle",baseDots:p,stretch:u,streams:d,spread:v,speed:b,direction:m,turbulence:h,trail:g,intensity:M,bloom:y,grain:T,interactive:E,stir:w,plume:S,intro:C,paused:N,dpr:O,reduced:H},nt=(0,oi.useRef)(W);(0,oi.useEffect)(()=>{nt.current=W,$.current?.sync()}),(0,oi.useEffect)(()=>{let $t=Q.current,Yt=q.current;if(!$t||!Yt)return;let Kt=qN($t,Yt,nt);return $.current=Kt,()=>{Kt?.destroy(),$.current=null}},[]),(0,oi.useImperativeHandle)(G,()=>({plume:($t,Yt,Kt)=>$.current?.plume($t,Yt,Kt),replay:()=>$.current?.replay()}),[]);let Rt=n.trim().toLowerCase(),Et=Rt==="transparent"||Rt==="";return(0,iu.jsxs)("div",{ref:Q,className:b1("relative isolate h-full min-h-[320px] w-full overflow-hidden",k),style:{backgroundColor:Et?void 0:n,touchAction:"pan-y",...I},children:[(0,iu.jsx)("div",{ref:q,"aria-hidden":"true",style:{position:"absolute",inset:0,pointerEvents:"none"}}),z?(0,iu.jsx)("div",{style:{position:"relative",zIndex:1,height:"100%"},children:z}):null]})});R1.displayName="ChromaCurrent";var N1=R1;var L1=Fr(eu()),Gd=document.getElementById("hero-chroma-root"),D1=Gd?.closest(".hero-stage");if(Gd&&D1){(0,U1.createRoot)(Gd).render((0,L1.jsx)(N1,{}));let e=t=>{let n=Gd.firstElementChild;n&&((t.type==="pointerdown"||t.type==="pointerup")&&t.target.closest("a,button,input,textarea,select,label,summary,[role=button],[contenteditable=true]")||n.dispatchEvent(new PointerEvent(t.type,{clientX:t.clientX,clientY:t.clientY,pointerId:t.pointerId,pointerType:t.pointerType,isPrimary:t.isPrimary,button:t.button,buttons:t.buttons,bubbles:!1})))};for(let t of["pointermove","pointerdown","pointerup","pointerleave","pointercancel"])D1.addEventListener(t,e,{passive:!0})}})();
/*! For license information please see chroma-current.js.LEGAL.txt */
