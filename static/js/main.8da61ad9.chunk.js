(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,,function(e,a,t){e.exports={message_wrapper:"Message_message_wrapper__8mBxt",logo:"Message_logo__z1zfM",message:"Message_message__1DMPf",name:"Message_name__EVMMk",time:"Message_time__2AOOR"}},function(e,a,t){e.exports={navbar:"Header_navbar__2Aa8P",inner:"Header_inner__3HtaC",button:"Header_button__7SgX9",active:"Header_active__1fjt8"}},,,,,function(e,a,t){e.exports={superInput:"SuperInputText_superInput__1VUyD",errorInput:"SuperInputText_errorInput__A6lcb",error:"SuperInputText_error__2WarT"}},function(e,a,t){e.exports={blue:"HW4_blue__3v9GA",column:"HW4_column__3Znhe",testSpanError:"HW4_testSpanError__H8FmV"}},,function(e,a,t){e.exports={main:"Error404_main__2I6na",fof:"Error404_fof__2EK_M",type:"Error404_type__qwT8Y"}},function(e,a,t){e.exports={someClass:"Greeting_someClass__3U89V",error:"Greeting_error__2HB2p"}},function(e,a,t){e.exports={default:"SuperButton_default__vdUXC",red:"SuperButton_red__2AYDl"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__1Hxu-",spanClassName:"SuperCheckbox_spanClassName__1UgV-"}},,,,,,,function(e,a,t){e.exports={App:"App_App__3xN3I"}},function(e,a,t){e.exports={hw2:"Affairs_hw2__1JNhV"}},,,function(e,a,t){e.exports=t(40)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(24),c=t.n(l),o=(t(34),t(25)),i=t.n(o),u=t(1),s=t(15),m=t.n(s);var p=function(){return r.a.createElement("div",{className:m.a.main},r.a.createElement("div",{className:m.a.fof},r.a.createElement("h1",null,"Error 404"),r.a.createElement("p",null,"page not found")))};var d=function(){return r.a.createElement("div",null,r.a.createElement(p,null))};var E=function(){return r.a.createElement("div",null,"JUNIOR",r.a.createElement(p,null))},f=t(6),_=t.n(f);var h=function(e){var a=e.avatar,t=e.name,n=e.message,l=e.time;return r.a.createElement("div",{className:_.a.message_wrapper},r.a.createElement("div",{className:_.a.logo},r.a.createElement("img",{src:a,alt:"logo"})),r.a.createElement("div",{className:_.a.message},r.a.createElement("div",{className:_.a.name},t),r.a.createElement("div",{className:_.a.text},n),r.a.createElement("div",{className:_.a.time},l)))},v="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",b="Some Name",g="Lorem ipsum dolor sit amet consec tempore dolorum aut officiis animi nesciunt sunt, voluptates doloremque molestias velit ut maiores. Ducimus quia nostrum nam voluptatibus.",N="22:00";var C=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement("hr",null),r.a.createElement(h,{avatar:v,name:b,message:g,time:N}),r.a.createElement("hr",null))},k=t(4),y=t(26),x=t.n(y);var w=function(e){var a=e.affair,t=a.name,n=a.priority,l={color:"low"===n?"blue":"middle"===n?"orange":"red"};return r.a.createElement("div",{className:x.a.hw2},r.a.createElement("span",null,t),r.a.createElement("span",{style:l},"| ",n," |"),r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var O=function(e){var a=e.data.map((function(a){return r.a.createElement(w,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",{style:{marginLeft:"40px"}},a,r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low"))},j=[{_id:1,name:"React",priority:"high",priorityN:0},{_id:2,name:"anime",priority:"low",priorityN:2},{_id:3,name:"games",priority:"low",priorityN:2},{_id:4,name:"work",priority:"high",priorityN:0},{_id:5,name:"html & css",priority:"middle",priorityN:1}];j.sort((function(e,a){return e.priorityN-a.priorityN}));var S=function(){var e=Object(n.useState)(j),a=Object(k.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(k.a)(c,2),i=o[0],u=o[1],s=function(e,a){return"low"===a?e.filter((function(e){return"low"===e.priority})):"middle"===a?e.filter((function(e){return"middle"===e.priority})):"high"===a?e.filter((function(e){return"high"===e.priority})):e}(t,i);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement("hr",null),r.a.createElement(O,{data:s,setFilter:u,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},A=t(28),I=t(42),H=t(16),U=t.n(H),T=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=l?U.a.error:U.a.someClass;return r.a.createElement("div",null,r.a.createElement("input",{value:a,onChange:t,className:o}),r.a.createElement("span",null,l&&"\u041f\u0443\u0441\u0442\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430 \u043d\u0435 \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u0430"," "),r.a.createElement("button",{onClick:n},"add"),r.a.createElement("span",null,c))},M=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(k.a)(l,2),o=c[0],i=c[1],u=Object(n.useState)(!1),s=Object(k.a)(u,2),m=s[0],p=s[1],d=a.length;return r.a.createElement(T,{name:o,setNameCallback:function(e){i(e.currentTarget.value)},addUser:function(){o?(p(!1),t(o),alert("Hello ".concat(o," !")),i("")):p(!0)},error:m,totalUsers:d})};var F=function(){var e=Object(n.useState)([]),a=Object(k.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(M,{users:t,addUserCallback:function(e){l([].concat(Object(A.a)(t),[{_id:Object(I.a)(),name:e}]))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},J=t(8),W=t(12),B=t.n(W),P=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,i=e.spanClassName,u=Object(J.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),s="".concat(B.a.error," ").concat(i||""),m="".concat(c?B.a.errorInput:""," ").concat(o||B.a.superInput,"  ");return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:m},u)),r.a.createElement("div",{style:{height:"25px"}},c&&r.a.createElement("span",{className:s},c)))},R=t(13),V=t.n(R),q=t(17),D=t.n(q),G=function(e){var a=e.red,t=e.className,n=Object(J.a)(e,["red","className"]),l="".concat(a?D.a.red:D.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},K=t(18),X=t.n(K),L=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(J.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(X.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){t&&t(e.currentTarget.checked),a&&a(e)},className:o},c)),l&&r.a.createElement("span",{className:X.a.spanClassName},l))};var Y=function(){var e=Object(n.useState)(""),a=Object(k.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t),l("")},i=Object(n.useState)(!1),u=Object(k.a)(i,2),s=u[0],m=u[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:V.a.column},r.a.createElement(P,{value:t,onChangeText:l,onEnter:o,error:c,spanClassName:V.a.testSpanError}),r.a.createElement(P,{className:V.a.blue,value:t}),r.a.createElement(G,null,"default"),r.a.createElement(G,{red:!0,onClick:o},"delete "),r.a.createElement(G,{disabled:!0},"disabled"),r.a.createElement(L,{checked:s,onChangeChecked:m},"some text "),r.a.createElement(L,{checked:s,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var z=function(){return r.a.createElement("div",null,r.a.createElement(C,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(Y,null))},Z="/pre-junior",$="/junior",Q="/junior-plus";var ee=function(){return r.a.createElement("div",null,r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/",exact:!0,render:function(){return r.a.createElement(u.a,{to:Z})}}),r.a.createElement(u.b,{path:Z,render:function(){return r.a.createElement(z,null)}}),r.a.createElement(u.b,{path:$,render:function(){return r.a.createElement(d,null)}}),r.a.createElement(u.b,{path:Q,render:function(){return r.a.createElement(E,null)}}),"// add routes",r.a.createElement(u.b,{render:function(){return r.a.createElement(p,null)}})))},ae=t(5),te=t(7),ne=t.n(te);var re=function(){return r.a.createElement("div",{className:ne.a.navbar},r.a.createElement("div",{className:ne.a.inner},r.a.createElement(ae.b,{to:Z,activeClassName:ne.a.active},"pre-JUNIOR"),r.a.createElement(ae.b,{to:$,activeClassName:ne.a.active},"JUNIOR"),r.a.createElement(ae.b,{to:Q,activeClassName:ne.a.active},"JUNIOR-plus"),r.a.createElement("div",{className:ne.a.button})))};var le=function(){return r.a.createElement("div",null,r.a.createElement(ae.a,null,r.a.createElement(re,null),r.a.createElement(ee,null)))};var ce=function(){return r.a.createElement("div",{className:i.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(le,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[29,1,2]]]);
//# sourceMappingURL=main.8da61ad9.chunk.js.map