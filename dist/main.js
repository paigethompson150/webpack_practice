(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>i});var a=t(81),o=t.n(a),r=t(645),s=t.n(r)()(o());s.push([n.id,'*{\n  font-family: \'Roboto\', sans-serif;\n}\n\n/*fade-in animation https://gist.github.com/nisanth074/46671279996bc9e5a863 */\n\n.fadeinUp {\n  -webkit-animation: fadeInUp 500ms ease-in-out; /* Chrome, Safari, Opera */\n  animation: fadeInUp 500ms ease-in-out;\n}\n\n/* Chrome, Safari, Opera */\n@-webkit-keyframes fadeInUp {\n  0% {\n      opacity: 0;\n      -webkit-transform: translateY(40px);\n  }\n  100% {\n      opacity: 1;\n      -webkit-transform: translateY(0);\n  }\n}\n\n/* home page start */\n\n.fade-in{\n  -webkit-animation: fadeIn 500ms ease-in-out; /* Chrome, Safari, Opera */\n  animation: fadeIn 500ms ease-in-out;\n}\n\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100%{\n    opacity: 1;\n  }\n}\n#background-video{\n  width: 100%;\n}\n\n#navigation ul{\n  font-size: 1.2em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 15px;\n  padding-bottom: 10px;\n}\n\n.nav_logo{\n  padding-left: 20px;\n  padding-right: 20px;\n  min-width: 70px;\n  max-width: 70px;\n  text-align: center;\n}\nnav li{\n  display: inline;\n}\n\nnav li, .intro_text h2{\n  transition: all .2s ease-in-out;\n}\n\nnav li:hover, .intro_text h2:hover{\n  transform: scale(1.1);\n  cursor: pointer;\n}\n\n.intro_container{\n  position: relative;\n}\n\n.intro_text{\n  color: white;\n  font-size: 2em;\n  text-align: center;\n  position: absolute;\n  top: 20%;\n  left: 30%;\n  right: 30%;\n}\n/* home page end */\n\n/* about page start */\n\n.about_container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.about_text {\n  text-align: center;\n  max-width: 400px;\n  margin-top: -100px;\n  padding: 30px;\n  font-size: 1.5em;\n}\n#about-video {\n  max-width: 40%;\n}\n\n/* about page end */\n\n/* menu page start */\n\n.menuItem {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n}\n\n.menuItem img {\n  max-width: 40%;\n}\n\n.menuText {\n  font-size: 1.2em;\n  max-width: 400px;\n}\n\n/* solo-dining page start */\n\n.boothPic {\n  width: 100%;\n}\n\n.reserveContainer {\n  text-align: center;\n  margin: auto;\n  max-width: 700px;\n  font-size: 1.3em;\n}\n\n.reserveContainer h2{\n  font-size: 1.8em;\n}\n /* solo dining page end */\n\n /* contact us page start */\n\n.contactUsTitle {\n  text-align: center;\n  font-size: 2em;\n}\n\nform { \n  width: 602px;\n  margin: auto;\n  font-size: 3em;\n  text-align: center;\n}\ninput { \n  width: 100%;\n  height: 50px;\n  margin-bottom: 20px;\n  border-radius: 5px;\n}\n\n.textInput{\n  margin-top: 10px;\n  border-radius: 5px;\n}\n\n\n\n\n\n/* CSS */\n.button-27 {\n  appearance: none;\n  background-color: #000000;\n  border: 2px solid #1A1A1A;\n  border-radius: 15px;\n  box-sizing: border-box;\n  color: #FFFFFF;\n  cursor: pointer;\n  display: inline-block;\n  font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";\n  font-size: 16px;\n  font-weight: 600;\n  line-height: normal;\n  margin: 0;\n  min-height: 60px;\n  min-width: 0;\n  outline: none;\n  padding: 16px 24px;\n  text-align: center;\n  text-decoration: none;\n  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  width: 50%;\n  will-change: transform;\n}\n\n.button-27:disabled {\n  pointer-events: none;\n}\n\n.button-27:hover {\n  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;\n  transform: translateY(-2px);\n}\n\n.button-27:active {\n  box-shadow: none;\n  transform: translateY(0);\n}\n\n/* button styling */\n\n/* CSS */\n.button-82-pushable {\nposition: relative;\nborder: none;\nbackground: transparent;\npadding: 0;\ncursor: pointer;\noutline-offset: 4px;\ntransition: filter 250ms;\nuser-select: none;\n-webkit-user-select: none;\ntouch-action: manipulation;\n}\n\n.button-82-shadow {\nposition: absolute;\ntop: 0;\nleft: 0;\nwidth: 100%;\nheight: 100%;\nborder-radius: 12px;\nbackground: hsl(0deg 0% 0% / 0.25);\nwill-change: transform;\ntransform: translateY(2px);\ntransition:\n  transform\n  600ms\n  cubic-bezier(.3, .7, .4, 1);\n}\n\n.button-82-edge {\nposition: absolute;\ntop: 0;\nleft: 0;\nwidth: 100%;\nheight: 100%;\nborder-radius: 12px;\nbackground: linear-gradient(\n  to left,\n  hsl(340deg 100% 16%) 0%,\n  hsl(340deg 100% 32%) 8%,\n  hsl(340deg 100% 32%) 92%,\n  hsl(340deg 100% 16%) 100%\n);\n}\n\n.button-82-front {\ndisplay: block;\nposition: relative;\npadding: 12px 27px;\nborder-radius: 12px;\nfont-size: 1.1rem;\ncolor: white;\nbackground: hsl(345deg 100% 47%);\nwill-change: transform;\ntransform: translateY(-4px);\ntransition:\n  transform\n  600ms\n  cubic-bezier(.3, .7, .4, 1);\n}\n\n@media (min-width: 768px) {\n.button-82-front {\n  font-size: 1.25rem;\n  padding: 12px 42px;\n}\n}\n\n.button-82-pushable:hover {\nfilter: brightness(110%);\n-webkit-filter: brightness(110%);\n}\n\n.button-82-pushable:hover .button-82-front {\ntransform: translateY(-6px);\ntransition:\n  transform\n  250ms\n  cubic-bezier(.3, .7, .4, 1.5);\n}\n\n.button-82-pushable:active .button-82-front {\ntransform: translateY(-2px);\ntransition: transform 34ms;\n}\n\n.button-82-pushable:hover .button-82-shadow {\ntransform: translateY(4px);\ntransition:\n  transform\n  250ms\n  cubic-bezier(.3, .7, .4, 1.5);\n}\n\n.button-82-pushable:active .button-82-shadow {\ntransform: translateY(1px);\ntransition: transform 34ms;\n}\n\n.button-82-pushable:focus:not(:focus-visible) {\noutline: none;\n}',""]);const i=s},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,a,o,r){"string"==typeof n&&(n=[[null,n,void 0]]);var s={};if(a)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);a&&s[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var r={},s=[],i=0;i<n.length;i++){var c=n[i],d=a.base?c[0]+a.base:c[0],l=r[d]||0,u="".concat(d," ").concat(l);r[d]=l+1;var p=t(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var h=o(m,a);a.byIndex=i,e.splice(i,0,{identifier:u,updater:h,references:1})}s.push(u)}return s}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var r=a(n=n||[],o=o||{});return function(n){n=n||[];for(var s=0;s<r.length;s++){var i=t(r[s]);e[i].references--}for(var c=a(n,o),d=0;d<r.length;d++){var l=t(r[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}r=c}}},569:n=>{var e={};n.exports=function(n,t){var a=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,o&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(a,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(a){var o=e[a];if(void 0!==o)return o.exports;var r=e[a]={id:a,exports:{}};return n[a](r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),a=t(795),o=t.n(a),r=t(569),s=t.n(r),i=t(565),c=t.n(i),d=t(216),l=t.n(d),u=t(589),p=t.n(u),m=t(426),h={};h.styleTagTransform=p(),h.setAttributes=c(),h.insert=s().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),e()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const f=n=>{for(;n.firstChild;)n.removeChild(n.lastChild)},b=n=>{const e=document.createElement("div"),t=document.createElement("div"),a=document.createElement("h2");a.innerHTML="The Miso Happy To See You";const o=document.createElement("p");o.innerHTML="This spicy miso soup features an aromatic broth swith a mixture of soy sauce, miso paste, and hot chili oil. Guaranteed to comfort you during any weather.";const r=document.createElement("img");r.alt="miso ramen credits to Crafty Ramen",r.src="../src/assets/miso.png",r.type="img",t.append(a,o),t.classList.add("menuText"),e.classList.add("menuItem"),e.append(t,r),e.classList.add("fadeinUp");const s=document.createElement("div"),i=document.createElement("div"),c=document.createElement("img");c.alt="shio ramen credits to Crafty Ramen",c.src="../src/assets/shio.png";const d=document.createElement("h2");d.innerHTML="A Knight and his Shio'ld";const l=document.createElement("p");l.innerHTML="This vegetable-based, salty broth will soothe and protect your tastebuds like a valiant knight. Topped with honey-glazed salmon, chives and chili oil.",i.append(d,l),i.classList.add("menuText"),s.classList.add("menuItem"),s.append(c,i),s.classList.add("fadeinUp");const u=document.createElement("div"),p=document.createElement("div"),m=document.createElement("h2");m.innerHTML="I'll Shoyu Who's Boss";const h=document.createElement("p");h.innerHTML="Soy-sauce based broth that will make you feel like the absolute boss. Presented with adaged chashu, bamboo shoots, and chili oil.";const f=document.createElement("img");f.alt="shoyu ramen credits to Crafty Ramen",f.src="../src/assets/shoyu.png",f.type="img",p.append(m,h),p.classList.add("menuText"),u.classList.add("menuItem"),u.append(p,f),u.classList.add("fadeinUp"),n.append(e,s,u)};(()=>{let n=document.getElementById("nav"),e=document.getElementById("content");const t=document.createElement("nav"),a=document.createElement("ul"),o=document.createElement("li"),r=document.createElement("li"),s=document.createElement("li"),i=document.createElement("img"),c=document.createElement("li"),d=document.createElement("li");t.id="navigation",o.innerHTML="About",r.innerHTML="Menu",i.src="../src/assets/logo.png",i.classList.add("nav_logo"),c.innerHTML="Solo-Dining",d.innerHTML="Contact Us",s.appendChild(i),a.append(o,r,s,c,d),t.appendChild(a),n.appendChild(t);const l=document.createElement("div"),u=document.createElement("video"),p=document.createElement("source");u.id="background-video",u.poster="../src/assets/ramen_poster.png",p.setAttribute("src","../src/assets/ramen.mp4"),p.type="video/mp4",u.appendChild(p),u.autoplay=!0,u.loop=!0,u.playsInline=!0,u.muted=!0;const m=document.createElement("div");m.classList.add("intro_text");const h=document.createElement("h2");h.innerHTML="PAGU RAMEN";const g=document.createElement("button");g.classList.add("button-82-pushable");const v=document.createElement("span");v.classList.add("button-82-shadow");const x=document.createElement("span");x.classList.add("button-82-edge");const y=document.createElement("span");y.classList.add("button-82-front"),y.classList.add("text"),y.innerHTML="Discover Menu",g.append(v,x,y),m.append(h,g),l.append(u,m),l.classList.add("fade-in"),e.appendChild(l),o.addEventListener("click",(function(){f(e),(n=>{const e=document.createElement("div");e.classList.add("about_container");const t=document.createElement("video"),a=document.createElement("source");t.id="about-video",t.poster="../src/assets/aboutVidPoster.png",a.setAttribute("src","../src/assets/aboutVid.mp4"),a.type="video/mp4",t.appendChild(a),t.autoplay=!0,t.loop=!0,t.playsInline=!0,t.muted=!0;const o=document.createElement("div");o.classList.add("about_text");const r=document.createElement("h3");r.innerHTML="About Us";const s=document.createElement("h2");s.innerHTML="Pagu Ramen";const i=document.createElement("p");i.innerHTML="Authentic Japanese style ramen handcrafted daily. You know the essentials - flour, water, chashu pork. These are the things that you find yourself running out the door for each week (or each day) to purchase.";const c=document.createElement("button");c.classList.add("button-27"),c.innerHTML="Read More",o.append(r,s,i,c),e.append(t,o),e.classList.add("fadeinUp"),n.appendChild(e)})(e)})),s.addEventListener("click",(function(){f(e),(n=>{const e=document.createElement("div"),t=document.createElement("video"),a=document.createElement("source");t.id="background-video",t.poster="../src/assets/ramen_poster.png",a.setAttribute("src","../src/assets/ramen.mp4"),a.type="video/mp4",t.appendChild(a),t.autoplay=!0,t.loop=!0,t.playsInline=!0,t.muted=!0;const o=document.createElement("div");o.classList.add("intro_text");const r=document.createElement("h2");r.innerHTML="PAGU RAMEN";const s=document.createElement("button");s.classList.add("button-82-pushable");const i=document.createElement("span");i.classList.add("button-82-shadow");const c=document.createElement("span");c.classList.add("button-82-edge");const d=document.createElement("span");d.classList.add("button-82-front"),d.classList.add("text"),d.innerHTML="Discover Menu",s.append(i,c,d),o.append(r,s),e.append(t,o),e.classList.add("fade-in"),n.appendChild(e),s.addEventListener("click",(function(){f(n),b(n)}))})(e)})),g.addEventListener("click",(function(){f(e),b(e)})),r.addEventListener("click",(function(){f(e),b(e)})),c.addEventListener("click",(function(){f(e),(n=>{const e=document.createElement("img");e.classList.add("boothPic"),e.classList.add("fadeinUp"),e.alt="solo booth dining w/ ramen, credits to Eater NY",e.src="../src/assets/soloBooth.jpg",e.type="img";const t=document.createElement("h2");t.innerHTML="Welcome to our solo-dining experience.",t.classList.add("fadeinUp");const a=document.createElement("div");a.classList.add("reserveContainer");const o=document.createElement("p");o.innerHTML="Fulfill your introverted needs with our contactless ordering and payment system. Simply order using a pen and paper, and fill out a sheet for your server for additional orders and refills.";const r=document.createElement("p");r.innerHTML="Since we would like to keep an intimate dining experience for our customers, we do not take reservations.",a.append(t,o,r),n.append(e,a)})(e)})),d.addEventListener("click",(function(){f(e),(n=>{const e=document.createElement("h2");e.classList.add("contactUsTitle"),e.innerHTML="Contact Us";const t=document.createElement("form");t.action="#",t.method="gets",t.id="form";const a=document.createElement("input");a.type="text",a.id="firstName",a.placeholder="Your name*",a.required=!0;const o=document.createElement("input");o.type="email",o.id="email",o.placeholder="Your email*",o.required=!0;const r=document.createElement("input");r.type="tel",r.id="phone-number",r.name="phone-number",r.placeholder="Your phone";const s=document.createElement("textarea");s.classList.add("textInput"),s.rows="10",s.cols="89",s.placeholder="Message*",s.required=!0;const i=document.createElement("button");i.innerHTML="Send Message",i.classList.add("button-27"),i.type="submit",i.value="submit",t.append(a,o,r,s,i),n.append(e,t)})(e)}))})()})()})();