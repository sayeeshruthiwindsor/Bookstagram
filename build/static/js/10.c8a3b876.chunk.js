(this.webpackJsonpBookstagram=this.webpackJsonpBookstagram||[]).push([[10],{236:function(e,c,s){"use strict";var t=s(2),i=(s(0),s(25)),a=s(7),n=s(63);c.a=Object(a.i)((function(){return Object(t.jsxs)("div",{class:"sidebar",children:[Object(t.jsx)("div",{class:"brand-logo",children:Object(t.jsx)("a",{href:"index.html",children:Object(t.jsx)("img",{src:n.a,alt:"logo",height:"75px",width:"75px"})})}),Object(t.jsxs)("div",{class:"menu",children:[Object(t.jsxs)("ul",{children:[Object(t.jsx)("li",{children:Object(t.jsx)(i.b,{to:"/home","data-toggle":"tooltip","data-placement":"right",title:"Home",children:Object(t.jsx)("span",{children:Object(t.jsx)("i",{class:"icofont-ui-home"})})})}),Object(t.jsx)("li",{children:Object(t.jsx)(i.b,{to:"/my-books","data-toggle":"tooltip","data-placement":"right",title:"My book Shelf",children:Object(t.jsx)("span",{children:Object(t.jsx)("i",{class:"icofont-library"})})})}),Object(t.jsx)("li",{children:Object(t.jsx)(i.b,{to:"/book-list","data-toggle":"tooltip","data-placement":"right",title:"List Of Books",children:Object(t.jsx)("span",{children:Object(t.jsx)("i",{class:"icofont-book"})})})}),Object(t.jsx)("li",{children:Object(t.jsx)(i.b,{to:"/my-friends","data-toggle":"tooltip","data-placement":"right",title:"My Friends",children:Object(t.jsx)("span",{children:Object(t.jsx)("i",{class:"icofont-ui-user-group"})})})}),Object(t.jsx)("li",{class:"logout",children:Object(t.jsx)("a",{href:"signin.html","data-toggle":"tooltip","data-placement":"right",title:"Signout",children:Object(t.jsx)("span",{children:Object(t.jsx)("i",{class:"icofont-power"})})})})]}),Object(t.jsxs)("p",{class:"copyright",children:["\xa9 ",Object(t.jsx)("a",{href:"#",children:"Bookstagram INC"})]})]})]})}))},237:function(e,c,s){"use strict";c.a=s.p+"static/media/2.103f6fcc.png"},238:function(e,c,s){"use strict";var t=s(62),i=s.n(t),a=localStorage.getItem("userToken"),n=i.a.create({baseURL:"http://40.80.95.65/store",headers:{Authorization:"token "+a}});c.a=n},239:function(e,c,s){"use strict";var t=s(19),i=s(2),a=s(0),n=s.n(a),l=s(34),j=s(237),r=s(236),o=s(15),d=s(25);c.a=function(){JSON.parse(localStorage.getItem("userData"));var e=Object(a.useState)(!1),c=Object(t.a)(e,2),s=c[0],b=c[1],h=Object(a.useState)(!1),O=Object(t.a)(h,2),m=O[0],x=O[1],p=Object(l.b)();Object(l.c)((function(e){return e}));return Object(i.jsxs)(n.a.Fragment,{children:[Object(i.jsx)("div",{className:"header",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{className:"col-xxl-12",children:Object(i.jsxs)("div",{className:"header-content",children:[Object(i.jsxs)("div",{className:"header-right",children:[Object(i.jsx)("div",{className:"brand-logo",children:Object(i.jsxs)("a",{href:"index.html",children:[Object(i.jsx)("img",{src:"./images/logo.png",alt:""}),Object(i.jsx)("span",{children:"Bookstagram"})]})}),Object(i.jsx)("div",{className:"search",children:Object(i.jsx)("form",{action:"#",children:Object(i.jsxs)("div",{className:"input-group",children:[Object(i.jsx)("input",{type:"text",className:"form-control",placeholder:"Search Here"}),Object(i.jsx)("span",{className:"input-group-text",children:Object(i.jsx)("i",{className:"icofont-search"})})]})})})]}),Object(i.jsxs)("div",{className:"header-right",children:[Object(i.jsxs)("div",{className:"dark-light-toggle",onclick:function(){return console.log("Toggle Clicked")},children:[Object(i.jsx)("span",{className:"dark",children:Object(i.jsx)("i",{className:"icofont-moon"})}),Object(i.jsx)("span",{className:"light",children:Object(i.jsx)("i",{className:"icofont-sun-alt"})})]}),Object(i.jsxs)("div",{className:"notification dropdown",children:[Object(i.jsx)("div",{className:"notify-bell",onClick:function(){return x(!m)},children:Object(i.jsx)("span",{children:Object(i.jsx)("i",{className:"icofont-alarm"})})}),m?Object(i.jsxs)("div",{className:"dropdown-menu dropdown-menu-right notification-list",children:[Object(i.jsx)("h4",{children:"Announcements"}),Object(i.jsxs)("div",{className:"lists",children:[Object(i.jsx)("a",{href:"#",className:"",children:Object(i.jsxs)("div",{className:"d-flex align-items-center",children:[Object(i.jsx)("span",{className:"mr-3 icon success",children:Object(i.jsx)("i",{className:"icofont-check"})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("p",{children:"Account created successfully"}),Object(i.jsx)("span",{children:"2020-11-04 12:00:23"})]})]})}),Object(i.jsx)("a",{href:"#",className:"",children:Object(i.jsxs)("div",{className:"d-flex align-items-center",children:[Object(i.jsx)("span",{className:"mr-3 icon fail",children:Object(i.jsx)("i",{className:"icofont-close"})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("p",{children:"2FA verification failed"}),Object(i.jsx)("span",{children:"2020-11-04 12:00:23"})]})]})}),Object(i.jsx)("a",{href:"#",className:"",children:Object(i.jsxs)("div",{className:"d-flex align-items-center",children:[Object(i.jsx)("span",{className:"mr-3 icon success",children:Object(i.jsx)("i",{className:"icofont-check"})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("p",{children:"Device confirmation completed"}),Object(i.jsx)("span",{children:"2020-11-04 12:00:23"})]})]})}),Object(i.jsx)("a",{href:"#",className:"",children:Object(i.jsxs)("div",{className:"d-flex align-items-center",children:[Object(i.jsx)("span",{className:"mr-3 icon pending",children:Object(i.jsx)("i",{className:"icofont-warning"})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("p",{children:"Phone verification pending"}),Object(i.jsx)("span",{children:"2020-11-04 12:00:23"})]})]})}),Object(i.jsxs)("a",{href:"./settings-activity.html",children:["More ",Object(i.jsx)("i",{className:"icofont-simple-right"})]})]})]}):null]}),Object(i.jsxs)("div",{className:"profile_log dropdown",children:[Object(i.jsxs)("div",{className:"user",onClick:function(){return b(!s)},children:[Object(i.jsx)("span",{className:"thumb",children:Object(i.jsx)("img",{src:j.a,alt:"profile"})}),Object(i.jsx)("span",{className:"arrow",children:Object(i.jsx)("i",{className:"icofont-angle-down"})})]}),s?Object(i.jsxs)("div",{className:"dropdown-menu dropdown-menu-right",children:[Object(i.jsx)("div",{className:"user-email",children:Object(i.jsxs)("div",{className:"user",children:[Object(i.jsx)("span",{className:"thumb",children:Object(i.jsx)("img",{src:j.a,alt:"profile"})}),Object(i.jsxs)("div",{className:"user-info",children:[Object(i.jsx)("h5",{children:"Dishant Shah"}),Object(i.jsx)("span",{children:"Bookstagram.inc@gmail.com"})]})]})}),Object(i.jsxs)(d.b,{to:"/profile",className:"dropdown-item",children:[Object(i.jsx)("i",{className:"icofont-ui-user"}),"Profile"]}),Object(i.jsxs)(d.b,{to:"/settings-profile",className:"dropdown-item",children:[Object(i.jsx)("i",{className:"icofont-ui-settings"}),"Settings"]}),Object(i.jsxs)(d.b,{to:"/settings-activity",className:"dropdown-item",children:[Object(i.jsx)("i",{className:"icofont-history"}),"Activity"]}),Object(i.jsxs)(d.b,{to:"/lock",className:"dropdown-item",children:[Object(i.jsx)("i",{className:"icofont-lock"}),"Lock"]}),Object(i.jsxs)("a",{className:"dropdown-item logout",onClick:function(){return localStorage.clear(),p(Object(o.f)()),p(Object(o.b)()),void(window.location.href="/")},children:[Object(i.jsx)("i",{className:"icofont-logout"})," Logout"]})]}):null]})]})]})})})})}),Object(i.jsx)(r.a,{})]})}},359:function(e,c,s){"use strict";s.r(c);var t=s(19),i=s(2),a=s(0),n=s.n(a),l=s(25),j=s(238),r=s(45),o=s(236),d=s(239),b=s(7),h=(s.p,s.p,s.p,s(294));c.default=Object(b.i)((function(e){var c=Object(a.useState)(null),s=Object(t.a)(c,2),b=s[0],O=s[1],m=Object(a.useState)(),x=Object(t.a)(m,2),p=x[0],u=x[1],f=Object(a.useState)(),g=Object(t.a)(f,2),N=(g[0],g[1]);Object(a.useEffect)((function(){if(!b&&e.location.state){console.log("Props",e.location.state.bookId);var c=e.location.state.bookId;u(c),console.log("Data",p),j.a.get("/book/"+e.location.state.bookId+"/").then((function(e){200===e.status&&(console.log("Response",e.data),O(e.data),r.a.success("User Books Fetch Successful",{position:"top-right",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}))})).catch((function(e){N(e),console.error("Error",e),N("This Books Fetch Failed")}))}}),[]);var v=function(e){for(var c=[],s=0;s<e;s++)c.push(Object(i.jsx)("button",{type:"button",className:"btn btn-warning btn-xs","aria-label":"Left Align",children:Object(i.jsx)("span",{children:Object(i.jsx)(h.a,{})})}));return c};return Object(i.jsxs)(n.a.Fragment,{children:[Object(i.jsx)(d.a,{}),Object(i.jsx)(o.a,{}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("head",{children:Object(i.jsx)(l.b,{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"})}),b?Object(i.jsxs)("main",{className:"container-bookdesc",children:[Object(i.jsx)("div",{className:"left-column-bookdesc",children:Object(i.jsx)("img",{className:"active",src:b.dp,alt:""})}),Object(i.jsxs)("div",{className:"right-column-bookdesc",children:[Object(i.jsxs)("div",{className:"product-description",children:[Object(i.jsx)("h2",{children:b.name}),Object(i.jsx)("h1",{children:b.authJSON.first_name}),Object(i.jsxs)("p",{children:["Description for the book: ",b.desc,Object(i.jsx)("span",{id:"dots",children:"..."}),Object(i.jsx)("span",{id:"more",children:b.desc})]}),Object(i.jsx)("button",{onclick:"myFunction()",id:"myBtn",children:"Read more"})]}),Object(i.jsx)("div",{className:"product-configuration"}),Object(i.jsxs)("div",{className:"product-price",children:[Object(i.jsxs)("span",{children:[b.rate,"$"]}),Object(i.jsx)("a",{href:"#",className:"cart-btn",children:"Add to cart"})]}),Object(i.jsx)("div",{}),Object(i.jsx)("a",{href:"../../asset/wof.pdf",className:"cart-btn read_online",children:"Read Online"})]})]}):null,Object(i.jsx)("main",{children:Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{className:"col-sm-7",children:Object(i.jsxs)("div",{className:"review-block",children:[b&&b.CommentJSON.length>=1&&b.CommentJSON.map((function(e,c){var s=e.ratings,t=e.comments,a=e.AuthJSON,n=e.publist;return Object(i.jsxs)("div",{className:"row",children:[Object(i.jsxs)("div",{className:"col-sm-3",children:[Object(i.jsx)("img",{src:"http://dummyimage.com/60x60/666/ffffff&text=No+Image",className:"img-rounded"}),Object(i.jsx)("div",{className:"review-block-name",children:Object(i.jsx)("a",{href:"#",children:a.first_name})}),Object(i.jsx)("div",{className:"review-block-date",children:n})]}),Object(i.jsxs)("div",{className:"col-sm-9",children:[Object(i.jsx)("div",{className:"review-block-rate",children:v(s)}),Object(i.jsx)("div",{className:"review-block-title",children:t}),Object(i.jsx)("div",{className:"review-block-description",children:t})]})]})})),Object(i.jsx)("hr",{})]})})})})]})}))}}]);
//# sourceMappingURL=10.c8a3b876.chunk.js.map