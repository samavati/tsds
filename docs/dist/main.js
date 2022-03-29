/*! For license information please see main.js.LICENSE.txt */
(()=>{var e={927:function(e,t,n){var o,s;Element.prototype.closest||(Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest=function(e){var t=this;if(!document.documentElement.contains(this))return null;do{if(t.matches(e))return t;t=t.parentElement}while(null!==t);return null}),function(){if("function"==typeof window.CustomEvent)return!1;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e}(),s=void 0!==n.g?n.g:"undefined"!=typeof window?window:this,o=function(){return function(e){"use strict";var t={navClass:"active",contentClass:"active",nested:!1,nestedClass:"active",offset:0,reflow:!1,events:!0},n=function(e,t,n){if(n.settings.events){var o=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n});t.dispatchEvent(o)}},o=function(e){var t=0;if(e.offsetParent)for(;e;)t+=e.offsetTop,e=e.offsetParent;return t>=0?t:0},s=function(e){e&&e.sort((function(e,t){return o(e.content)<o(t.content)?-1:1}))},i=function(t,n,o){var s=t.getBoundingClientRect(),i=function(e){return"function"==typeof e.offset?parseFloat(e.offset()):parseFloat(e.offset)}(n);return o?parseInt(s.bottom,10)<(e.innerHeight||document.documentElement.clientHeight):parseInt(s.top,10)<=i},r=function(){return e.innerHeight+e.pageYOffset>=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},c=function(e,t){var n=e[e.length-1];if(function(e,t){return!(!r()||!i(e.content,t,!0))}(n,t))return n;for(var o=e.length-1;o>=0;o--)if(i(e[o].content,t))return e[o]},a=function(e,t){if(t.nested&&e.parentNode){var n=e.parentNode.closest("li");n&&(n.classList.remove(t.nestedClass),a(n,t))}},l=function(e,t){if(e){var o=e.nav.closest("li");o&&(o.classList.remove(t.navClass),e.content.classList.remove(t.contentClass),a(o,t),n("gumshoeDeactivate",o,{link:e.nav,content:e.content,settings:t}))}},d=function(e,t){if(t.nested){var n=e.parentNode.closest("li");n&&(n.classList.add(t.nestedClass),d(n,t))}};return function(o,i){var r,a,u,f,v,m={setup:function(){r=document.querySelectorAll(o),a=[],Array.prototype.forEach.call(r,(function(e){var t=document.getElementById(decodeURIComponent(e.hash.substr(1)));t&&a.push({nav:e,content:t})})),s(a)},detect:function(){var e=c(a,v);e?u&&e.content===u.content||(l(u,v),function(e,t){if(e){var o=e.nav.closest("li");o&&(o.classList.add(t.navClass),e.content.classList.add(t.contentClass),d(o,t),n("gumshoeActivate",o,{link:e.nav,content:e.content,settings:t}))}}(e,v),u=e):u&&(l(u,v),u=null)}},p=function(t){f&&e.cancelAnimationFrame(f),f=e.requestAnimationFrame(m.detect)},b=function(t){f&&e.cancelAnimationFrame(f),f=e.requestAnimationFrame((function(){s(a),m.detect()}))};return m.destroy=function(){u&&l(u,v),e.removeEventListener("scroll",p,!1),v.reflow&&e.removeEventListener("resize",b,!1),a=null,r=null,u=null,f=null,v=null},v=function(){var e={};return Array.prototype.forEach.call(arguments,(function(t){for(var n in t){if(!t.hasOwnProperty(n))return;e[n]=t[n]}})),e}(t,i||{}),m.setup(),m.detect(),e.addEventListener("scroll",p,!1),v.reflow&&e.addEventListener("resize",b,!1),m}}(s)}.apply(t,[]),void 0===o||(e.exports=o)}},t={};function n(o){var s=t[o];if(void 0!==s)return s.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=n(927),t=n.n(e);const o=document.getElementById("docs-sidebar-toggler"),s=document.getElementById("docs-sidebar"),i=document.querySelectorAll("#docs-sidebar .scrollto");function r(){window.innerWidth>=1200?(console.log("larger"),s.classList.remove("sidebar-hidden"),s.classList.add("sidebar-visible")):(console.log("smaller"),s.classList.remove("sidebar-visible"),s.classList.add("sidebar-hidden"))}window.onload=function(){r()},window.onresize=function(){r()},o.addEventListener("click",(()=>{s.classList.contains("sidebar-visible")?(console.log("visible"),s.classList.remove("sidebar-visible"),s.classList.add("sidebar-hidden")):(console.log("hidden"),s.classList.remove("sidebar-hidden"),s.classList.add("sidebar-visible"))})),i.forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault();var n=e.getAttribute("href").replace("#","");document.getElementById(n).scrollIntoView({behavior:"smooth"}),s.classList.contains("sidebar-visible")&&window.innerWidth<1200&&(s.classList.remove("sidebar-visible"),s.classList.add("sidebar-hidden"))}))}));new(t())("#docs-nav a",{offset:69})})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZG9jcy1iczUtdjEuMC8uL3NyYy9hc3NldHMvcGx1Z2lucy9ndW1zaG9lL2d1bXNob2UucG9seWZpbGxzLm1pbi5qcyIsIndlYnBhY2s6Ly9jb2RlcmRvY3MtYnM1LXYxLjAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY29kZXJkb2NzLWJzNS12MS4wL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2NvZGVyZG9jcy1iczUtdjEuMC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY29kZXJkb2NzLWJzNS12MS4wL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vY29kZXJkb2NzLWJzNS12MS4wL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY29kZXJkb2NzLWJzNS12MS4wLy4vc3JjL2Fzc2V0cy9qcy9kb2NzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISBndW1zaG9lanMgdjUuMS4yIHwgKGMpIDIwMTkgQ2hyaXMgRmVyZGluYW5kaSB8IE1JVCBMaWNlbnNlIHwgaHR0cDovL2dpdGh1Yi5jb20vY2ZlcmRpbmFuZGkvZ3Vtc2hvZSAqL1xuRWxlbWVudC5wcm90b3R5cGUuY2xvc2VzdHx8KEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXN8fChFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzPUVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yfHxFbGVtZW50LnByb3RvdHlwZS53ZWJraXRNYXRjaGVzU2VsZWN0b3IpLEVsZW1lbnQucHJvdG90eXBlLmNsb3Nlc3Q9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcztpZighZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNvbnRhaW5zKHRoaXMpKXJldHVybiBudWxsO2Rve2lmKGUubWF0Y2hlcyh0KSlyZXR1cm4gZTtlPWUucGFyZW50RWxlbWVudH13aGlsZShudWxsIT09ZSk7cmV0dXJuIG51bGx9KSwoZnVuY3Rpb24oKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiB3aW5kb3cuQ3VzdG9tRXZlbnQpcmV0dXJuITE7ZnVuY3Rpb24gdCh0LGUpe2U9ZXx8e2J1YmJsZXM6ITEsY2FuY2VsYWJsZTohMSxkZXRhaWw6dm9pZCAwfTt2YXIgbj1kb2N1bWVudC5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpO3JldHVybiBuLmluaXRDdXN0b21FdmVudCh0LGUuYnViYmxlcyxlLmNhbmNlbGFibGUsZS5kZXRhaWwpLG59dC5wcm90b3R5cGU9d2luZG93LkV2ZW50LnByb3RvdHlwZSx3aW5kb3cuQ3VzdG9tRXZlbnQ9dH0pKCksKGZ1bmN0aW9uKHQsZSl7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSwoZnVuY3Rpb24oKXtyZXR1cm4gZSh0KX0pKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1lKHQpOnQuR3Vtc2hvZT1lKHQpfSkoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbD9nbG9iYWw6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6dGhpcywoZnVuY3Rpb24odCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9e25hdkNsYXNzOlwiYWN0aXZlXCIsY29udGVudENsYXNzOlwiYWN0aXZlXCIsbmVzdGVkOiExLG5lc3RlZENsYXNzOlwiYWN0aXZlXCIsb2Zmc2V0OjAscmVmbG93OiExLGV2ZW50czohMH0sbj1mdW5jdGlvbih0LGUsbil7aWYobi5zZXR0aW5ncy5ldmVudHMpe3ZhciBvPW5ldyBDdXN0b21FdmVudCh0LHtidWJibGVzOiEwLGNhbmNlbGFibGU6ITAsZGV0YWlsOm59KTtlLmRpc3BhdGNoRXZlbnQobyl9fSxvPWZ1bmN0aW9uKHQpe3ZhciBlPTA7aWYodC5vZmZzZXRQYXJlbnQpZm9yKDt0OyllKz10Lm9mZnNldFRvcCx0PXQub2Zmc2V0UGFyZW50O3JldHVybiBlPj0wP2U6MH0scz1mdW5jdGlvbih0KXt0JiZ0LnNvcnQoKGZ1bmN0aW9uKHQsZSl7cmV0dXJuIG8odC5jb250ZW50KTxvKGUuY29udGVudCk/LTE6MX0pKX0scj1mdW5jdGlvbihlLG4sbyl7dmFyIHM9ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxyPShmdW5jdGlvbih0KXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0Lm9mZnNldD9wYXJzZUZsb2F0KHQub2Zmc2V0KCkpOnBhcnNlRmxvYXQodC5vZmZzZXQpfSkobik7cmV0dXJuIG8/cGFyc2VJbnQocy5ib3R0b20sMTApPCh0LmlubmVySGVpZ2h0fHxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KTpwYXJzZUludChzLnRvcCwxMCk8PXJ9LGM9ZnVuY3Rpb24oKXtyZXR1cm4gdC5pbm5lckhlaWdodCt0LnBhZ2VZT2Zmc2V0Pj1NYXRoLm1heChkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0LGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0LGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRIZWlnaHQsZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQsZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCl9LGk9ZnVuY3Rpb24odCxlKXt2YXIgbj10W3QubGVuZ3RoLTFdO2lmKGZ1bmN0aW9uKHQsZSl7cmV0dXJuISghYygpfHwhcih0LmNvbnRlbnQsZSwhMCkpfShuLGUpKXJldHVybiBuO2Zvcih2YXIgbz10Lmxlbmd0aC0xO28+PTA7by0tKWlmKHIodFtvXS5jb250ZW50LGUpKXJldHVybiB0W29dfSxsPWZ1bmN0aW9uKHQsZSl7aWYoZS5uZXN0ZWQmJnQucGFyZW50Tm9kZSl7dmFyIG49dC5wYXJlbnROb2RlLmNsb3Nlc3QoXCJsaVwiKTtuJiYobi5jbGFzc0xpc3QucmVtb3ZlKGUubmVzdGVkQ2xhc3MpLGwobixlKSl9fSxhPWZ1bmN0aW9uKHQsZSl7aWYodCl7dmFyIG89dC5uYXYuY2xvc2VzdChcImxpXCIpO28mJihvLmNsYXNzTGlzdC5yZW1vdmUoZS5uYXZDbGFzcyksdC5jb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoZS5jb250ZW50Q2xhc3MpLGwobyxlKSxuKFwiZ3Vtc2hvZURlYWN0aXZhdGVcIixvLHtsaW5rOnQubmF2LGNvbnRlbnQ6dC5jb250ZW50LHNldHRpbmdzOmV9KSl9fSx1PWZ1bmN0aW9uKHQsZSl7aWYoZS5uZXN0ZWQpe3ZhciBuPXQucGFyZW50Tm9kZS5jbG9zZXN0KFwibGlcIik7biYmKG4uY2xhc3NMaXN0LmFkZChlLm5lc3RlZENsYXNzKSx1KG4sZSkpfX07cmV0dXJuIGZ1bmN0aW9uKG8scil7dmFyIGMsbCxmLGQsbSx2PXt9O3Yuc2V0dXA9ZnVuY3Rpb24oKXtjPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwobyksbD1bXSxBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGMsKGZ1bmN0aW9uKHQpe3ZhciBlPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRlY29kZVVSSUNvbXBvbmVudCh0Lmhhc2guc3Vic3RyKDEpKSk7ZSYmbC5wdXNoKHtuYXY6dCxjb250ZW50OmV9KX0pKSxzKGwpfSx2LmRldGVjdD1mdW5jdGlvbigpe3ZhciB0PWkobCxtKTt0P2YmJnQuY29udGVudD09PWYuY29udGVudHx8KGEoZixtKSwoZnVuY3Rpb24odCxlKXtpZih0KXt2YXIgbz10Lm5hdi5jbG9zZXN0KFwibGlcIik7byYmKG8uY2xhc3NMaXN0LmFkZChlLm5hdkNsYXNzKSx0LmNvbnRlbnQuY2xhc3NMaXN0LmFkZChlLmNvbnRlbnRDbGFzcyksdShvLGUpLG4oXCJndW1zaG9lQWN0aXZhdGVcIixvLHtsaW5rOnQubmF2LGNvbnRlbnQ6dC5jb250ZW50LHNldHRpbmdzOmV9KSl9fSkodCxtKSxmPXQpOmYmJihhKGYsbSksZj1udWxsKX07dmFyIHA9ZnVuY3Rpb24oZSl7ZCYmdC5jYW5jZWxBbmltYXRpb25GcmFtZShkKSxkPXQucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHYuZGV0ZWN0KX0saD1mdW5jdGlvbihlKXtkJiZ0LmNhbmNlbEFuaW1hdGlvbkZyYW1lKGQpLGQ9dC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKGZ1bmN0aW9uKCl7cyhsKSx2LmRldGVjdCgpfSkpfTt2LmRlc3Ryb3k9ZnVuY3Rpb24oKXtmJiZhKGYsbSksdC5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIscCwhMSksbS5yZWZsb3cmJnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLGgsITEpLGw9bnVsbCxjPW51bGwsZj1udWxsLGQ9bnVsbCxtPW51bGx9O3JldHVybiBtPShmdW5jdGlvbigpe3ZhciB0PXt9O3JldHVybiBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGFyZ3VtZW50cywoZnVuY3Rpb24oZSl7Zm9yKHZhciBuIGluIGUpe2lmKCFlLmhhc093blByb3BlcnR5KG4pKXJldHVybjt0W25dPWVbbl19fSkpLHR9KShlLHJ8fHt9KSx2LnNldHVwKCksdi5kZXRlY3QoKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIixwLCExKSxtLnJlZmxvdyYmdC5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsaCwhMSksdn19KSk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiXCJ1c2Ugc3RyaWN0XCI7XG5pbXBvcnQgJy4vLi4vc2Nzcy90aGVtZS5zY3NzJztcbmltcG9ydCBHdW1zaG9lIGZyb20gJy4vLi4vcGx1Z2lucy9ndW1zaG9lL2d1bXNob2UucG9seWZpbGxzLm1pbi5qcyc7XG5cblxuLyogPT09PT09IERlZmluZSBKUyBDb25zdGFudHMgPT09PT09ICovXG5jb25zdCBzaWRlYmFyVG9nZ2xlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb2NzLXNpZGViYXItdG9nZ2xlcicpO1xuY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb2NzLXNpZGViYXInKTtcbmNvbnN0IHNpZGViYXJMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNkb2NzLXNpZGViYXIgLnNjcm9sbHRvJyk7XG5cblxuXG4vKiA9PT09PSBSZXNwb25zaXZlIFNpZGViYXIgPT09PT09ICovXG5cbndpbmRvdy5vbmxvYWQ9ZnVuY3Rpb24oKSBcbnsgXG4gICAgcmVzcG9uc2l2ZVNpZGViYXIoKTsgXG59O1xuXG53aW5kb3cub25yZXNpemU9ZnVuY3Rpb24oKSBcbnsgXG4gICAgcmVzcG9uc2l2ZVNpZGViYXIoKTsgXG59O1xuXG5cbmZ1bmN0aW9uIHJlc3BvbnNpdmVTaWRlYmFyKCkge1xuICAgIGxldCB3ID0gd2luZG93LmlubmVyV2lkdGg7XG5cdGlmKHcgPj0gMTIwMCkge1xuXHQgICAgLy8gaWYgbGFyZ2VyIFxuXHQgICAgY29uc29sZS5sb2coJ2xhcmdlcicpO1xuXHRcdHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZSgnc2lkZWJhci1oaWRkZW4nKTtcblx0XHRzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItdmlzaWJsZScpO1xuXHRcdFxuXHR9IGVsc2Uge1xuXHQgICAgLy8gaWYgc21hbGxlclxuXHQgICAgY29uc29sZS5sb2coJ3NtYWxsZXInKTtcblx0ICAgIHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZSgnc2lkZWJhci12aXNpYmxlJyk7XG5cdFx0c2lkZWJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWhpZGRlbicpO1xuXHR9XG59O1xuXG5zaWRlYmFyVG9nZ2xlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0aWYgKHNpZGViYXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaWRlYmFyLXZpc2libGUnKSkge1xuXHRcdGNvbnNvbGUubG9nKCd2aXNpYmxlJyk7XG5cdFx0c2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlYmFyLXZpc2libGUnKTtcblx0XHRzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItaGlkZGVuJyk7XG5cdFx0XG5cdH0gZWxzZSB7XG5cdFx0Y29uc29sZS5sb2coJ2hpZGRlbicpO1xuXHRcdHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZSgnc2lkZWJhci1oaWRkZW4nKTtcblx0XHRzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItdmlzaWJsZScpO1xuXHR9XG59KTtcblxuXG4vKiA9PT09PSBTbW9vdGggc2Nyb2xsaW5nID09PT09PSAqL1xuLyogIE5vdGU6IFlvdSBuZWVkIHRvIGluY2x1ZGUgc21vb3Roc2Nyb2xsLm1pbi5qcyAoc21vb3RoIHNjcm9sbCBiZWhhdmlvciBwb2x5ZmlsbCkgb24gdGhlIHBhZ2UgdG8gY292ZXIgc29tZSBicm93c2VycyAqL1xuLyogUmVmOiBodHRwczovL2dpdGh1Yi5jb20vaWFtZHVzdGFuL3Ntb290aHNjcm9sbCAqL1xuXG5zaWRlYmFyTGlua3MuZm9yRWFjaCgoc2lkZWJhckxpbmspID0+IHtcblx0XG5cdHNpZGViYXJMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XG5cdFx0dmFyIHRhcmdldCA9IHNpZGViYXJMaW5rLmdldEF0dHJpYnV0ZShcImhyZWZcIikucmVwbGFjZSgnIycsICcnKTtcblx0XHRcblx0XHQvL2NvbnNvbGUubG9nKHRhcmdldCk7XG5cdFx0XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldCkuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgLy9Db2xsYXBzZSBzaWRlYmFyIGFmdGVyIGNsaWNraW5nXG5cdFx0aWYgKHNpZGViYXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaWRlYmFyLXZpc2libGUnKSAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8IDEyMDApe1xuXHRcdFx0XG5cdFx0XHRzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoJ3NpZGViYXItdmlzaWJsZScpO1xuXHRcdCAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItaGlkZGVuJyk7XG5cdFx0fSBcblx0XHRcbiAgICB9KTtcblx0XG59KTtcblxuXG4vKiA9PT09PSBHdW1zaG9lIFNyb2xsU3B5ID09PT09ICovXG4vKiBSZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9jZmVyZGluYW5kaS9ndW1zaG9lICAqL1xuLy8gSW5pdGlhbGl6ZSBHdW1zaG9lXG52YXIgc3B5ID0gbmV3IEd1bXNob2UoJyNkb2NzLW5hdiBhJywge1xuXHRvZmZzZXQ6IDY5IC8vc3RpY2t5IGhlYWRlciBoZWlnaHRcbn0pO1xuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6WyJ0IiwiRWxlbWVudCIsInByb3RvdHlwZSIsImNsb3Nlc3QiLCJtYXRjaGVzIiwibXNNYXRjaGVzU2VsZWN0b3IiLCJ3ZWJraXRNYXRjaGVzU2VsZWN0b3IiLCJlIiwidGhpcyIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY29udGFpbnMiLCJwYXJlbnRFbGVtZW50Iiwid2luZG93IiwiQ3VzdG9tRXZlbnQiLCJidWJibGVzIiwiY2FuY2VsYWJsZSIsImRldGFpbCIsIm4iLCJjcmVhdGVFdmVudCIsImluaXRDdXN0b21FdmVudCIsIkV2ZW50IiwiZyIsIm5hdkNsYXNzIiwiY29udGVudENsYXNzIiwibmVzdGVkIiwibmVzdGVkQ2xhc3MiLCJvZmZzZXQiLCJyZWZsb3ciLCJldmVudHMiLCJzZXR0aW5ncyIsIm8iLCJkaXNwYXRjaEV2ZW50Iiwib2Zmc2V0UGFyZW50Iiwib2Zmc2V0VG9wIiwicyIsInNvcnQiLCJjb250ZW50IiwiciIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBhcnNlRmxvYXQiLCJwYXJzZUludCIsImJvdHRvbSIsImlubmVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwidG9wIiwiYyIsInBhZ2VZT2Zmc2V0IiwiTWF0aCIsIm1heCIsImJvZHkiLCJzY3JvbGxIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJpIiwibGVuZ3RoIiwibCIsInBhcmVudE5vZGUiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhIiwibmF2IiwibGluayIsInUiLCJhZGQiLCJmIiwiZCIsIm0iLCJ2IiwicXVlcnlTZWxlY3RvckFsbCIsIkFycmF5IiwiZm9yRWFjaCIsImNhbGwiLCJnZXRFbGVtZW50QnlJZCIsImRlY29kZVVSSUNvbXBvbmVudCIsImhhc2giLCJzdWJzdHIiLCJwdXNoIiwicCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZGV0ZWN0IiwiaCIsImRlc3Ryb3kiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYXJndW1lbnRzIiwiaGFzT3duUHJvcGVydHkiLCJzZXR1cCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJ1bmRlZmluZWQiLCJleHBvcnRzIiwibW9kdWxlIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsImdldHRlciIsIl9fZXNNb2R1bGUiLCJkZWZpbml0aW9uIiwia2V5IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiZ2xvYmFsVGhpcyIsIkZ1bmN0aW9uIiwib2JqIiwicHJvcCIsInNpZGViYXJUb2dnbGVyIiwic2lkZWJhciIsInNpZGViYXJMaW5rcyIsInJlc3BvbnNpdmVTaWRlYmFyIiwiaW5uZXJXaWR0aCIsImNvbnNvbGUiLCJsb2ciLCJvbmxvYWQiLCJvbnJlc2l6ZSIsInNpZGViYXJMaW5rIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJyZXBsYWNlIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciJdLCJzb3VyY2VSb290IjoiIn0=