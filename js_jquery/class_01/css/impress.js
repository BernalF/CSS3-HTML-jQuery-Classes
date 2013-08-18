/**
 * impress.js
 *
 * impress.js is a presentation tool based on the power of CSS3 transforms and transitions
 * in modern browsers and inspired by the idea behind prezi.com.
 *
 * MIT Licensed.
 *
 * Copyright 2011 Bartek Szopka (@bartaz)
 */
(function(f,h){var p=function(){var a=f.createElement("dummy").style,b=["Webkit","Moz","O","ms","Khtml"],c={};return function(e){if("undefined"===typeof c[e]){var k=e.charAt(0).toUpperCase()+e.substr(1),k=(e+" "+b.join(k+" ")+k).split(" ");c[e]=null;for(var d in k)if(void 0!==a[k[d]]){c[e]=k[d];break}}return c[e]}}(),i=function(a,b){var c,e;for(c in b)b.hasOwnProperty(c)&&(e=p(c),null!=e&&(a.style[e]=b[c]));return a},o=function(a){return f.getElementById(a)},q=function(a){return" translate3d("+a.x+
"px,"+a.y+"px,"+a.z+"px) "},r=function(a,b){var c=" rotateX("+a.x+"deg) ",e=" rotateY("+a.y+"deg) ",d=" rotateZ("+a.z+"deg) ";return b?d+e+c:c+e+d},l=navigator.userAgent.toLowerCase(),l=null!=p("perspective")&&-1==l.search(/(iphone)|(ipod)|(ipad)|(android)/),g=o("impress");if(l){g.className="";var m=f.createElement("div");m.className="canvas";[].slice.call(g.childNodes).forEach(function(a){m.appendChild(a)});g.appendChild(m);var d=function(a,b){b=b||f;return[].slice.call(b.querySelectorAll(a))}(".step",
g);f.documentElement.style.height="100%";i(f.body,{height:"100%",overflow:"hidden"});l={position:"absolute",transformOrigin:"top left",transition:"all 0s ease-in-out",transformStyle:"preserve-3d"};i(g,l);i(g,{top:"50%",left:"50%",perspective:"1000px"});i(m,l);var s={translate:{x:0,y:0,z:0},rotate:{x:0,y:0,z:0},scale:1};d.forEach(function(a,b){var c=a.dataset,c={translate:{x:c.x||0,y:c.y||0,z:c.z||0},rotate:{x:c.rotateX||0,y:c.rotateY||0,z:c.rotateZ||c.rotate||0},scale:c.scale||1};a.stepData=c;a.id||
(a.id="step-"+(b+1));i(a,{position:"absolute",transform:"translate(-50%,-50%)"+q(c.translate)+r(c.rotate)+(" scale("+c.scale+") "),transformStyle:"preserve-3d"})});var j=null,t=null,n=function(a){if(!a||!a.stepData||a==j)return!1;h.scrollTo(0,0);var b=a.stepData;j&&j.classList.remove("active");a.classList.add("active");g.className="step-"+a.id;h.clearTimeout(t);t=h.setTimeout(function(){h.location.hash="#/"+a.id},1E3);var c={rotate:{x:-parseInt(b.rotate.x,10),y:-parseInt(b.rotate.y,10),z:-parseInt(b.rotate.z,
10)},translate:{x:-b.translate.x,y:-b.translate.y,z:-b.translate.z},scale:1/parseFloat(b.scale)},e=c.scale>=s.scale,d=j?"1s":"0";i(g,{perspective:1E3*b.scale+"px",transform:" scale("+c.scale+") ",transitionDuration:d,transitionDelay:e?"500ms":"0ms"});i(m,{transform:r(c.rotate,!0)+q(c.translate),transitionDuration:d,transitionDelay:e?"0ms":"500ms"});s=c;return j=a};f.addEventListener("keydown",function(a){if(9==a.keyCode||32<=a.keyCode&&34>=a.keyCode||37<=a.keyCode&&40>=a.keyCode){switch(a.keyCode){case 33:case 37:case 38:var b=
d.indexOf(j)-1,b=0<=b?d[b]:d[d.length-1];n(b);break;case 9:case 32:case 34:case 39:case 40:b=d.indexOf(j)+1,b=b<d.length?d[b]:d[0],n(b)}a.preventDefault()}},!1);f.addEventListener("click",function(a){for(var b=a.target;"A"!=b.tagName&&!b.stepData&&b!=f.body;)b=b.parentNode;if("A"==b.tagName){var c=b.getAttribute("href");c&&"#"==c[0]&&(b=o(c.slice(1)))}n(b)&&a.preventDefault()},!1);h.addEventListener("hashchange",function(){n(o(h.location.hash.replace(/^#\/?/,"")))},!1);n(o(h.location.hash.replace(/^#\/?/,
""))||d[0])}else g.className="impress-not-supported"})(document,window);