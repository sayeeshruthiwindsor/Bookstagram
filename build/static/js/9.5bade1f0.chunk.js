/*! For license information please see 9.5bade1f0.chunk.js.LICENSE.txt */
(this.webpackJsonpBookstagram=this.webpackJsonpBookstagram||[]).push([[9],{236:function(e,c,s){"use strict";var t=s(2),a=(s(0),s(25)),i=s(7),n=s(63);c.a=Object(i.i)((function(){return Object(t.jsxs)("div",{class:"sidebar",children:[Object(t.jsx)("div",{class:"brand-logo",children:Object(t.jsx)("a",{href:"index.html",children:Object(t.jsx)("img",{src:n.a,alt:"logo",height:"75px",width:"75px"})})}),Object(t.jsxs)("div",{class:"menu",children:[Object(t.jsxs)("ul",{children:[Object(t.jsx)("li",{children:Object(t.jsx)(a.b,{to:"/home","data-toggle":"tooltip","data-placement":"right",title:"Home",children:Object(t.jsx)("span",{children:Object(t.jsx)("i",{class:"icofont-ui-home"})})})}),Object(t.jsx)("li",{children:Object(t.jsx)(a.b,{to:"/my-books","data-toggle":"tooltip","data-placement":"right",title:"My book Shelf",children:Object(t.jsx)("span",{children:Object(t.jsx)("i",{class:"icofont-library"})})})}),Object(t.jsx)("li",{children:Object(t.jsx)(a.b,{to:"/book-list","data-toggle":"tooltip","data-placement":"right",title:"List Of Books",children:Object(t.jsx)("span",{children:Object(t.jsx)("i",{class:"icofont-book"})})})}),Object(t.jsx)("li",{children:Object(t.jsx)(a.b,{to:"/my-friends","data-toggle":"tooltip","data-placement":"right",title:"My Friends",children:Object(t.jsx)("span",{children:Object(t.jsx)("i",{class:"icofont-ui-user-group"})})})}),Object(t.jsx)("li",{class:"logout",children:Object(t.jsx)("a",{href:"signin.html","data-toggle":"tooltip","data-placement":"right",title:"Signout",children:Object(t.jsx)("span",{children:Object(t.jsx)("i",{class:"icofont-power"})})})})]}),Object(t.jsxs)("p",{class:"copyright",children:["\xa9 ",Object(t.jsx)("a",{href:"#",children:"Bookstagram INC"})]})]})]})}))},237:function(e,c,s){"use strict";c.a=s.p+"static/media/2.103f6fcc.png"},238:function(e,c,s){"use strict";var t=s(62),a=s.n(t),i=localStorage.getItem("userToken"),n=a.a.create({baseURL:"http://40.80.95.65/store",headers:{Authorization:"token "+i}});c.a=n},239:function(e,c,s){"use strict";var t=s(19),a=s(2),i=s(0),n=s.n(i),r=s(34),l=s(237),o=s(236),j=s(15),d=s(25);c.a=function(){JSON.parse(localStorage.getItem("userData"));var e=Object(i.useState)(!1),c=Object(t.a)(e,2),s=c[0],b=c[1],h=Object(i.useState)(!1),m=Object(t.a)(h,2),O=m[0],u=m[1],x=Object(r.b)();Object(r.c)((function(e){return e}));return Object(a.jsxs)(n.a.Fragment,{children:[Object(a.jsx)("div",{className:"header",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-xxl-12",children:Object(a.jsxs)("div",{className:"header-content",children:[Object(a.jsxs)("div",{className:"header-right",children:[Object(a.jsx)("div",{className:"brand-logo",children:Object(a.jsxs)("a",{href:"index.html",children:[Object(a.jsx)("img",{src:"./images/logo.png",alt:""}),Object(a.jsx)("span",{children:"Bookstagram"})]})}),Object(a.jsx)("div",{className:"search",children:Object(a.jsx)("form",{action:"#",children:Object(a.jsxs)("div",{className:"input-group",children:[Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Search Here"}),Object(a.jsx)("span",{className:"input-group-text",children:Object(a.jsx)("i",{className:"icofont-search"})})]})})})]}),Object(a.jsxs)("div",{className:"header-right",children:[Object(a.jsxs)("div",{className:"dark-light-toggle",onclick:function(){return console.log("Toggle Clicked")},children:[Object(a.jsx)("span",{className:"dark",children:Object(a.jsx)("i",{className:"icofont-moon"})}),Object(a.jsx)("span",{className:"light",children:Object(a.jsx)("i",{className:"icofont-sun-alt"})})]}),Object(a.jsxs)("div",{className:"notification dropdown",children:[Object(a.jsx)("div",{className:"notify-bell",onClick:function(){return u(!O)},children:Object(a.jsx)("span",{children:Object(a.jsx)("i",{className:"icofont-alarm"})})}),O?Object(a.jsxs)("div",{className:"dropdown-menu dropdown-menu-right notification-list",children:[Object(a.jsx)("h4",{children:"Announcements"}),Object(a.jsxs)("div",{className:"lists",children:[Object(a.jsx)("a",{href:"#",className:"",children:Object(a.jsxs)("div",{className:"d-flex align-items-center",children:[Object(a.jsx)("span",{className:"mr-3 icon success",children:Object(a.jsx)("i",{className:"icofont-check"})}),Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:"Account created successfully"}),Object(a.jsx)("span",{children:"2020-11-04 12:00:23"})]})]})}),Object(a.jsx)("a",{href:"#",className:"",children:Object(a.jsxs)("div",{className:"d-flex align-items-center",children:[Object(a.jsx)("span",{className:"mr-3 icon fail",children:Object(a.jsx)("i",{className:"icofont-close"})}),Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:"2FA verification failed"}),Object(a.jsx)("span",{children:"2020-11-04 12:00:23"})]})]})}),Object(a.jsx)("a",{href:"#",className:"",children:Object(a.jsxs)("div",{className:"d-flex align-items-center",children:[Object(a.jsx)("span",{className:"mr-3 icon success",children:Object(a.jsx)("i",{className:"icofont-check"})}),Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:"Device confirmation completed"}),Object(a.jsx)("span",{children:"2020-11-04 12:00:23"})]})]})}),Object(a.jsx)("a",{href:"#",className:"",children:Object(a.jsxs)("div",{className:"d-flex align-items-center",children:[Object(a.jsx)("span",{className:"mr-3 icon pending",children:Object(a.jsx)("i",{className:"icofont-warning"})}),Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:"Phone verification pending"}),Object(a.jsx)("span",{children:"2020-11-04 12:00:23"})]})]})}),Object(a.jsxs)("a",{href:"./settings-activity.html",children:["More ",Object(a.jsx)("i",{className:"icofont-simple-right"})]})]})]}):null]}),Object(a.jsxs)("div",{className:"profile_log dropdown",children:[Object(a.jsxs)("div",{className:"user",onClick:function(){return b(!s)},children:[Object(a.jsx)("span",{className:"thumb",children:Object(a.jsx)("img",{src:l.a,alt:"profile"})}),Object(a.jsx)("span",{className:"arrow",children:Object(a.jsx)("i",{className:"icofont-angle-down"})})]}),s?Object(a.jsxs)("div",{className:"dropdown-menu dropdown-menu-right",children:[Object(a.jsx)("div",{className:"user-email",children:Object(a.jsxs)("div",{className:"user",children:[Object(a.jsx)("span",{className:"thumb",children:Object(a.jsx)("img",{src:l.a,alt:"profile"})}),Object(a.jsxs)("div",{className:"user-info",children:[Object(a.jsx)("h5",{children:"Dishant Shah"}),Object(a.jsx)("span",{children:"Bookstagram.inc@gmail.com"})]})]})}),Object(a.jsxs)(d.b,{to:"/profile",className:"dropdown-item",children:[Object(a.jsx)("i",{className:"icofont-ui-user"}),"Profile"]}),Object(a.jsxs)(d.b,{to:"/settings-profile",className:"dropdown-item",children:[Object(a.jsx)("i",{className:"icofont-ui-settings"}),"Settings"]}),Object(a.jsxs)(d.b,{to:"/settings-activity",className:"dropdown-item",children:[Object(a.jsx)("i",{className:"icofont-history"}),"Activity"]}),Object(a.jsxs)(d.b,{to:"/lock",className:"dropdown-item",children:[Object(a.jsx)("i",{className:"icofont-lock"}),"Lock"]}),Object(a.jsxs)("a",{className:"dropdown-item logout",onClick:function(){return localStorage.clear(),x(Object(j.f)()),x(Object(j.b)()),void(window.location.href="/")},children:[Object(a.jsx)("i",{className:"icofont-logout"})," Logout"]})]}):null]})]})]})})})})}),Object(a.jsx)(o.a,{})]})}},241:function(e,c,s){var t;!function(){"use strict";var s={}.hasOwnProperty;function a(){for(var e=[],c=0;c<arguments.length;c++){var t=arguments[c];if(t){var i=typeof t;if("string"===i||"number"===i)e.push(t);else if(Array.isArray(t)&&t.length){var n=a.apply(null,t);n&&e.push(n)}else if("object"===i)for(var r in t)s.call(t,r)&&t[r]&&e.push(r)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(t=function(){return a}.apply(c,[]))||(e.exports=t)}()},242:function(e,c,s){"use strict";s.d(c,"b",(function(){return n})),s.d(c,"c",(function(){return l})),s.d(c,"a",(function(){return o}));var t,a=s(21),i=s.n(a);function n(e,c){return void 0===e&&(e=""),void 0===c&&(c=t),c?e.split(" ").map((function(e){return c[e]||e})).join(" "):e}var r="object"===typeof window&&window.Element||function(){};i.a.oneOfType([i.a.string,i.a.func,function(e,c,s){if(!(e[c]instanceof r))return new Error("Invalid prop `"+c+"` supplied to `"+s+"`. Expected prop to be an instance of Element. Validation failed.")},i.a.shape({current:i.a.any})]);var l=i.a.oneOfType([i.a.func,i.a.string,i.a.shape({$$typeof:i.a.symbol,render:i.a.func}),i.a.arrayOf(i.a.oneOfType([i.a.func,i.a.string,i.a.shape({$$typeof:i.a.symbol,render:i.a.func})]))]);"undefined"===typeof window||!window.document||window.document.createElement;function o(e){var c=typeof e;return null!=e&&("object"===c||"function"===c)}},262:function(e,c,s){"use strict";var t=s(5),a=s(8),i=s(0),n=s.n(i),r=s(21),l=s.n(r),o=s(241),j=s.n(o),d=s(242),b={tag:d.c,fluid:l.a.oneOfType([l.a.bool,l.a.string]),className:l.a.string,cssModule:l.a.object},h=function(e){var c=e.className,s=e.cssModule,i=e.fluid,r=e.tag,l=Object(a.a)(e,["className","cssModule","fluid","tag"]),o="container";!0===i?o="container-fluid":i&&(o="container-"+i);var b=Object(d.b)(j()(c,o),s);return n.a.createElement(r,Object(t.a)({},l,{className:b}))};h.propTypes=b,h.defaultProps={tag:"div"},c.a=h},350:function(e,c,s){"use strict";s.r(c);var t=s(19),a=s(2),i=s(0),n=s.n(i),r=s(238),l=s(45),o=s(262),j=s(7),d=s(236),b=s(239);c.default=Object(j.i)((function(e){var c=Object(i.useState)([]),s=Object(t.a)(c,2),j=s[0],h=s[1],m=Object(i.useState)([]),O=Object(t.a)(m,2),u=O[0],x=O[1],f=Object(i.useState)([]),p=Object(t.a)(f,2),g=p[0],v=p[1],N=Object(i.useState)([]),y=Object(t.a)(N,2),w=(y[0],y[1],Object(i.useState)()),k=Object(t.a)(w,2),S=(k[0],k[1]);Object(i.useEffect)((function(){E(),P()}),[g]||!1);var E=function(){var e=localStorage.getItem("userId");r.a.get("/friendlist/"+e+"/").then((function(e){200===e.status&&(console.log("RESPONSE",e.data),h(e.data),l.a.success("User Profile Fetch Successful",{position:"top-right",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}))})).catch((function(e){S(e),console.error("Error",e),S("This User Profile Fetch Failed")}))},P=function(){var e=localStorage.getItem("userId");r.a.get("/acceptfriend/"+e+"/").then((function(e){200===e.status&&(console.log("RESPONSE",e.data),x(e.data),l.a.success("User Profile Fetch Successful",{position:"top-right",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}))})).catch((function(e){S(e),console.error("Error",e),S("This User Profile Fetch Failed")}))};return Object(a.jsxs)(n.a.Fragment,{children:[Object(a.jsx)(b.a,{}),Object(a.jsx)(d.a,{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)(o.a,{children:Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-md-8",children:Object(a.jsxs)("div",{className:"people-nearby",children:[j.length>=1&&j.map((function(e,c){e.id;var s=e.first_name,t=e.last_name,i=e.usertype,n=e.country;return Object(a.jsx)("div",{className:"nearby-user",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-md-2 col-sm-2",children:Object(a.jsx)("img",{src:"https://bootdey.com/img/Content/avatar/avatar7.png",alt:"user",className:"profile-photo-lg"})}),Object(a.jsxs)("div",{className:"col-md-7 col-sm-7",children:[Object(a.jsx)("h5",{children:Object(a.jsxs)("a",{href:"#",className:"profile-link",children:[s," ",t]})}),Object(a.jsx)("p",{children:i}),Object(a.jsx)("p",{className:"text-muted",children:n})]}),Object(a.jsx)("div",{className:"col-md-3 col-sm-3",children:Object(a.jsx)("button",{className:"btn btn-primary pull-right",onClick:function(e){localStorage.getItem("userId")},children:"Remove Friend"})})]})})})),u.length>=1&&u.map((function(e,c){var s=e.id,t=e.first_name,i=e.last_name,n=e.usertype,o=e.country;return Object(a.jsx)("div",{className:"nearby-user",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-md-2 col-sm-2",children:Object(a.jsx)("img",{src:"https://bootdey.com/img/Content/avatar/avatar7.png",alt:"user",className:"profile-photo-lg"})}),Object(a.jsxs)("div",{className:"col-md-7 col-sm-7",children:[Object(a.jsx)("h5",{children:Object(a.jsxs)("a",{href:"#",className:"profile-link",children:[t," ",i]})}),Object(a.jsx)("p",{children:n}),Object(a.jsx)("p",{className:"text-muted",children:o})]}),Object(a.jsx)("div",{className:"col-md-3 col-sm-3",children:Object(a.jsx)("button",{className:"btn btn-primary pull-right",onClick:function(e){!function(e){var c=localStorage.getItem("userId");r.a.put("/friendupdate/",{user:c,friend:e,relationship:"friends"}).then((function(e){200===e.status&&(console.log("RESPONSE",e.data),v(e.data),l.a.success("User Profile Fetch Successful",{position:"top-right",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),window.location.reload(!1))})).catch((function(e){S(e),console.error("Error",e),S("This User Profile Fetch Failed")}))}(s)},children:"Accept Request"})})]})})}))]})})})})]})}))}}]);
//# sourceMappingURL=9.5bade1f0.chunk.js.map