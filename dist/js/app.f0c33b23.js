(function(t){function e(e){for(var a,r,s=e[0],c=e[1],u=e[2],p=0,f=[];p<s.length;p++)r=s[p],o[r]&&f.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},o={app:0},i=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("41f5")},"0f85":function(t,e,n){"use strict";var a=n("dc9a"),o=n.n(a);o.a},"2a52":function(t,e,n){},"41f5":function(t,e,n){"use strict";n.r(e);n("1384"),n("69c2");n("56d7")},"46bd":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("1384"),n("69c2");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}}),n("router-view")],1)},i=[],r=(n("5c0b"),n("2877")),s={},c=Object(r["a"])(s,o,i,!1,null,null,null),u=c.exports,l=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("Poop")],1)},f=[],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"PoopContainer"},[t._m(0),n("router-link",{staticClass:"animated fadeIn",attrs:{to:"/faq"}},[t._v("But Kevin, why did you make this?")]),n("ul",{staticClass:"PoopContainer__data animated fadeIn"},t._l(t.poopSightings.slice().reverse(),function(e){return n("li",{key:e.key},[n("span",{staticClass:"highlight"},[t._v("On "+t._s(t._f("getDay")(e.time))+" at "+t._s(t._f("getTime")(e.time))+",")]),n("span",{staticClass:"normal"},[t._v(" while "+t._s(e.activity)+", "),n("span",{staticClass:"sawpoo"},[t._v("Kevin saw poo")]),t._v(":(")])])}))],1)},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"PoopContainer__hero animated fadeIn"},[n("h1",{staticClass:"animated fadeInDown delay-1s"},[t._v("Kevin Saw Poo")]),n("p",{staticClass:"animated fadeInDown delay-2s"},[t._v("in NYC")])])}],m=n("8aa5"),h=n.n(m),g=h.a.initializeApp({apiKey:"AIzaSyDFwsfC0bdRJIHC3ro2uo0lbgX_oIucLaE",authDomain:"kevinsawpoop.firebaseapp.com",databaseURL:"https://kevinsawpoop.firebaseio.com",projectId:"kevinsawpoop",storageBucket:"kevinsawpoop.appspot.com",messagingSenderId:"396104102260"}),_=g.database(),b=_,y=n("5a0c"),w=n.n(y),C={name:"HelloWorld",data:function(){return{poopSightings:[]}},firebase:{poopSightings:{source:b.ref("poopsightings")}},filters:{getTime:function(t){return w()(t).format("HH:mm A")},getDay:function(t){return w()(t).format("MMMM D")}}},O=C,P=(n("0f85"),Object(r["a"])(O,d,v,!1,null,"cd92f746",null)),S=P.exports,I={name:"home",components:{Poop:S}},k=I,E=Object(r["a"])(k,p,f,!1,null,null,null),j=E.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"PoopRegistration"},[n("h1",[t._v("Hi Kevin add poop sightings here")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.activity,expression:"activity"}],attrs:{type:"text",name:"activity"},domProps:{value:t.activity},on:{input:function(e){e.target.composing||(t.activity=e.target.value)}}}),n("a",{attrs:{href:""},on:{click:t.addPoop}},[t._v("\n    I Seen'd Poop\n  ")])])},D=[],M=b.ref("poopsightings"),A={name:"HelloWorld",data:function(){return{poopSightings:[],activity:""}},firebase:{poopSightings:{source:M}},methods:{addPoop:function(){M.push({time:Date.now(),activity:this.activity})}}},H=A,T=(n("d4a7"),Object(r["a"])(H,x,D,!1,null,"58a43bff",null)),$=T.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"FAQ"},[n("h1",{staticClass:"animated wobble"},[t._v("BECAUSE YALL DIDNT BELIEVE ME ABOUT HOW MUCH POO THERE IS IN NYC I TOLD YOU")]),n("router-link",{attrs:{to:"/"}},[t._v("Go back")])],1)},B=[],K={name:"FAQ"},N=K,R=(n("c739"),Object(r["a"])(N,L,B,!1,null,"61862f5e",null)),U=R.exports;a["a"].use(l["a"]);var F=new l["a"]({mode:"history",routes:[{path:"/",name:"home",component:j},{path:"/poop",name:"PoopRegistration",component:$},{path:"/faq",name:"FAQ",component:U}]}),Y=n("2f62");a["a"].use(Y["a"]);var J=new Y["a"].Store({state:{},mutations:{},actions:{}}),Q=n("5f30"),W=n.n(Q);a["a"].use(W.a),a["a"].config.productionTip=!1,new a["a"]({router:F,store:J,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("46bd"),o=n.n(a);o.a},7004:function(t,e,n){},c739:function(t,e,n){"use strict";var a=n("7004"),o=n.n(a);o.a},d4a7:function(t,e,n){"use strict";var a=n("2a52"),o=n.n(a);o.a},dc9a:function(t,e,n){}});
//# sourceMappingURL=app.f0c33b23.js.map