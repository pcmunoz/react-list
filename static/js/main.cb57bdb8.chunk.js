(this["webpackJsonpreact-list"]=this["webpackJsonpreact-list"]||[]).push([[0],{105:function(e,a,r){},106:function(e,a,r){},120:function(e,a,r){"use strict";r.r(a);var t=r(0),n=r.n(t),o=r(12),l=r.n(o),c=(r(105),r(106),r(37)),i=r(172),s=r(160),m=r(167),p=r(79),u=r.n(p),d=r(63),y=r(153),j=r(157),b=r(156),g=r(168),f=r(5),h=Object(y.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"}}})),O=function(){return Object(f.jsx)(d.a,{variant:"body2",color:"textSecondary",align:"center",children:"Copyright \xa9 Patrick Ceasar Munoz ".concat((new Date).getFullYear(),".")})},_=function(e){var a=e.children,r=h();return Object(f.jsxs)(b.a,{component:"main",maxWidth:"xs",children:[Object(f.jsx)(j.a,{}),Object(f.jsx)("div",{className:r.paper,children:a}),Object(f.jsx)(g.a,{mt:8,children:Object(f.jsx)(O,{})})]})},x=r(54),v=function(){return Object(x.b)()},w=x.c,C="LOGIN_USER",k="LOGOUT_USER",E="FETCH_EMPLOYEES",S=r(61),L=Object(S.a)({name:"currentUser",initialState:{user:null},reducers:{setCurrentUser:function(e,a){e.user=a.payload},loginError:function(e,a){console.log("error"),e.error=a.payload}}}),N=(L.actions.setCurrentUser,function(e){return e.currentUser.user}),U=function(e){return e.currentUser.error},I=L.reducer,B=r(159),W=Object(y.a)((function(e){return{avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},submit:{margin:e.spacing(3,0,2)}}})),F=function(){var e=W(),a=v(),r=w(U),t=n.a.useState(""),o=Object(c.a)(t,2),l=o[0],p=o[1],y=n.a.useState(""),j=Object(c.a)(y,2),b=j[0],g=j[1];return Object(f.jsxs)(_,{children:[Object(f.jsx)(i.a,{className:e.avatar,children:Object(f.jsx)(u.a,{})}),Object(f.jsx)(d.a,{component:"h1",variant:"h5",children:"Login"}),Object(f.jsx)(m.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",autoFocus:!0,value:l,onChange:function(e){p(e.target.value)},error:!!r}),Object(f.jsx)(m.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:b,onChange:function(e){g(e.target.value)},error:!!r}),!!r&&Object(f.jsx)(B.a,{error:!0,children:r}),Object(f.jsx)(s.a,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",className:e.submit,onClick:function(){a({type:C,payload:{username:l,password:b}})},children:"Login"})]})},G=r(173),J=r(158),D=r(165),T=r(166),H=r(161),R=r(162),A=r(80),M=r.n(A),P=r(163),z=r(17),Y=Object(y.a)((function(e){return Object(G.a)({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}})})),q=function(e){var a=e.name,r=e.showBack,t=Y(),n=v(),o=Object(z.f)();return Object(f.jsx)("div",{className:t.root,children:Object(f.jsx)(H.a,{position:"static",children:Object(f.jsxs)(R.a,{children:[r&&Object(f.jsx)(P.a,{edge:"start",className:t.menuButton,color:"inherit",onClick:function(){o.goBack()},children:Object(f.jsx)(M.a,{})}),Object(f.jsx)(d.a,{variant:"h6",className:t.title,children:a}),Object(f.jsx)(s.a,{color:"inherit",onClick:function(){n({type:k})},children:"Logout"})]})})})},K=Object(S.a)({name:"employees",initialState:{list:[],loading:!0},reducers:{setEmployees:function(e,a){e.list=a.payload,e.error=void 0},fetchEmployeesLoading:function(e,a){e.loading=a.payload},fetchEmployeesError:function(e,a){e.error=a.payload}}}),Q=(K.actions.setEmployees,function(e){return e.employees.list}),V=function(e){return e.employees.loading},$=function(e){return e.employees.error},X=K.reducer,Z=r(62),ee=r(171),ae=r(169);function re(e){return Object(f.jsx)(ae.a,Object(Z.a)({elevation:6,variant:"filled"},e))}var te=function(e){var a=e.message,r=n.a.useState(!0),t=Object(c.a)(r,2),o=t[0],l=t[1],i=function(e,a){"clickaway"!==a&&l(!1)};return Object(f.jsx)("div",{children:Object(f.jsx)(ee.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:o,autoHideDuration:6e3,onClose:i,children:Object(f.jsx)(re,{severity:"error",onClose:i,children:a})})})},ne=r(164),oe=Object(y.a)((function(e){return Object(G.a)({root:{width:"100%",backgroundColor:e.palette.background.paper},loading:{marginLeft:"calc(50% - 22px)"}})})),le=function(){var e=oe(),a=Object(z.f)(),r=w(Q),t=w(V),o=w($),l=v(),i=n.a.useState(""),s=Object(c.a)(i,2),p=s[0],u=s[1],d=n.a.useState([]),y=Object(c.a)(d,2),j=y[0],b=y[1];return n.a.useEffect((function(){0===r.length&&l({type:E})}),[l,r]),n.a.useEffect((function(){r.length>0&&b(p?r.filter((function(e){return e.employee_name.toLocaleLowerCase().includes(p)})):r)}),[p,r]),Object(f.jsxs)(_,{children:[!!o&&Object(f.jsx)(te,{message:o}),Object(f.jsxs)("div",{className:e.root,children:[Object(f.jsx)(q,{name:"List"}),t?Object(f.jsx)("div",{className:e.loading,children:Object(f.jsx)(ne.a,{})}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(m.a,{variant:"outlined",margin:"normal",fullWidth:!0,name:"search",label:"Search List",id:"search",value:p,onChange:function(e){u(e.target.value)}}),Object(f.jsx)(J.a,{component:"nav",children:j.map((function(e,r){return Object(f.jsx)(D.a,{button:!0,onClick:function(){return r=e.id,void a.push("/react-list/".concat(r));var r},children:Object(f.jsx)(T.a,{children:e.employee_name})},r)}))})]})]})]})},ce=r(50),ie=Object(y.a)((function(e){return Object(G.a)({root:{width:"100%",backgroundColor:e.palette.background.paper},loading:{marginLeft:"calc(50% - 22px)"}})})),se=function(){var e=ie(),a=Object(z.g)(),r=v(),t=w(Q),o=w(V),l=w($),c=null===t||void 0===t?void 0:t.find((function(e){return e.id===parseInt(a.employeeId)}));return n.a.useEffect((function(){0===t.length&&r({type:E})}),[r,t]),Object(f.jsxs)(_,{children:[!!l&&Object(f.jsx)(te,{message:l}),Object(f.jsxs)("div",{className:e.root,children:[Object(f.jsx)(q,{name:"Detail",showBack:!0}),o?Object(f.jsx)("div",{className:e.loading,children:Object(f.jsx)(ne.a,{})}):Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(J.a,{component:"nav",children:[Object(f.jsx)(D.a,{children:Object(f.jsxs)(T.a,{children:["Name: ",null===c||void 0===c?void 0:c.employee_name]})}),Object(f.jsx)(D.a,{children:Object(f.jsxs)(T.a,{children:["Age: ",null===c||void 0===c?void 0:c.employee_age]})}),Object(f.jsx)(D.a,{children:Object(f.jsxs)(T.a,{children:["Salary: ",null===c||void 0===c?void 0:c.employee_salary]})}),Object(f.jsx)(D.a,{children:Object(f.jsxs)(T.a,{children:["Image: ",null===c||void 0===c?void 0:c.profile_image]})})]})})]})]})},me=function(){var e=w(N);return console.log("user",e),e?Object(f.jsx)(ce.a,{children:Object(f.jsxs)(z.c,{children:[Object(f.jsx)(z.a,{path:"/react-list/:employeeId",children:Object(f.jsx)(se,{})}),Object(f.jsx)(z.a,{path:"/",children:Object(f.jsx)(le,{})})]})}):Object(f.jsx)(F,{})},pe=r(22),ue=r(83),de=r(25),ye=r.n(de),je=r(20),be=r(84),ge=r(81),fe="react-list-currentUser",he=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:fe;try{localStorage.setItem(a,e)}catch(r){}},Oe=ye.a.mark(_e);function _e(e){var a,r,t,n;return ye.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(a=ge,e.payload.username||e.payload.password){o.next=6;break}return o.next=4,Object(je.b)({type:"currentUser/loginError",payload:"Invalid username and password"});case 4:o.next=16;break;case 6:if(1!==(r=a.filter((function(a){return a.username===e.payload.username&&a.password===e.payload.password}))).length){o.next=14;break}return t=r[0],t.password,n=Object(be.a)(t,["password"]),he(JSON.stringify(Object(Z.a)({},n))),o.next=12,Object(je.b)({type:"currentUser/setCurrentUser",payload:r[0]});case 12:o.next=16;break;case 14:return o.next=16,Object(je.b)({type:"currentUser/loginError",payload:"Invalid username and password"});case 16:case"end":return o.stop()}}),Oe)}var xe=function(){return fetch("https://dummy.restapiexample.com/api/v1/employees",{method:"GET"}).then((function(e){return e.json()})).then((function(e){return e}))},ve=r(82),we=ye.a.mark(Ce);function Ce(){var e,a,r;return ye.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(je.b)({type:"employees/fetchEmployeesLoading",payload:!0});case 3:return t.next=5,Object(je.a)(xe);case 5:return e=t.sent,a=e.data,console.log("response",e),t.next=10,Object(je.b)({type:"employees/setEmployees",payload:a});case 10:return t.next=12,Object(je.b)({type:"employees/fetchEmployeesLoading",payload:!1});case 12:t.next=25;break;case 14:return t.prev=14,t.t0=t.catch(0),r=ve.data,console.log("local",r),console.log("error",t.t0),t.next=21,Object(je.b)({type:"employees/setEmployees",payload:r});case 21:return t.next=23,Object(je.b)({type:"employees/fetchEmployeesError",payload:"Error on fetching. Loading local employees data instead"});case 23:return t.next=25,Object(je.b)({type:"employees/fetchEmployeesLoading",payload:!1});case 25:case"end":return t.stop()}}),we,null,[[0,14]])}var ke=ye.a.mark(Ee);function Ee(){return ye.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.removeItem(fe),e.next=3,Object(je.b)({type:"currentUser/setCurrentUser",payload:null});case 3:case"end":return e.stop()}}),ke)}var Se=ye.a.mark(Le);function Le(){return ye.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(je.c)(C,_e);case 2:return e.next=4,Object(je.c)(k,Ee);case 4:return e.next=6,Object(je.c)(E,Ce);case 6:case"end":return e.stop()}}),Se)}var Ne=Object(ue.a)(),Ue={currentUser:{user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe;try{var a=localStorage.getItem(e);if(null===a)return;return JSON.parse(a)}catch(r){return}}()},employees:{list:[],loading:!0}},Ie=Object(pe.b)({currentUser:I,employees:X}),Be=Object(pe.d)(Ie,Ue,Object(pe.a)(Ne));Ne.run(Le);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(Object(f.jsx)(x.a,{store:Be,children:Object(f.jsx)(me,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},81:function(e){e.exports=JSON.parse('[{"username":"user1","password":"user1","firstName":"First","lastName":"Last"}]')},82:function(e){e.exports=JSON.parse('{"status":"success","data":[{"id":1,"employee_name":"Tiger Nixon","employee_salary":320800,"employee_age":61,"profile_image":""},{"id":2,"employee_name":"Garrett Winters","employee_salary":170750,"employee_age":63,"profile_image":""},{"id":3,"employee_name":"Ashton Cox","employee_salary":86000,"employee_age":66,"profile_image":""},{"id":4,"employee_name":"Cedric Kelly","employee_salary":433060,"employee_age":22,"profile_image":""},{"id":5,"employee_name":"Airi Satou","employee_salary":162700,"employee_age":33,"profile_image":""},{"id":6,"employee_name":"Brielle Williamson","employee_salary":372000,"employee_age":61,"profile_image":""},{"id":7,"employee_name":"Herrod Chandler","employee_salary":137500,"employee_age":59,"profile_image":""},{"id":8,"employee_name":"Rhona Davidson","employee_salary":327900,"employee_age":55,"profile_image":""},{"id":9,"employee_name":"Colleen Hurst","employee_salary":205500,"employee_age":39,"profile_image":""},{"id":10,"employee_name":"Sonya Frost","employee_salary":103600,"employee_age":23,"profile_image":""},{"id":11,"employee_name":"Jena Gaines","employee_salary":90560,"employee_age":30,"profile_image":""},{"id":12,"employee_name":"Quinn Flynn","employee_salary":342000,"employee_age":22,"profile_image":""},{"id":13,"employee_name":"Charde Marshall","employee_salary":470600,"employee_age":36,"profile_image":""},{"id":14,"employee_name":"Haley Kennedy","employee_salary":313500,"employee_age":43,"profile_image":""},{"id":15,"employee_name":"Tatyana Fitzpatrick","employee_salary":385750,"employee_age":19,"profile_image":""},{"id":16,"employee_name":"Michael Silva","employee_salary":198500,"employee_age":66,"profile_image":""},{"id":17,"employee_name":"Paul Byrd","employee_salary":725000,"employee_age":64,"profile_image":""},{"id":18,"employee_name":"Gloria Little","employee_salary":237500,"employee_age":59,"profile_image":""},{"id":19,"employee_name":"Bradley Greer","employee_salary":132000,"employee_age":41,"profile_image":""},{"id":20,"employee_name":"Dai Rios","employee_salary":217500,"employee_age":35,"profile_image":""},{"id":21,"employee_name":"Jenette Caldwell","employee_salary":345000,"employee_age":30,"profile_image":""},{"id":22,"employee_name":"Yuri Berry","employee_salary":675000,"employee_age":40,"profile_image":""},{"id":23,"employee_name":"Caesar Vance","employee_salary":106450,"employee_age":21,"profile_image":""},{"id":24,"employee_name":"Doris Wilder","employee_salary":85600,"employee_age":23,"profile_image":""}],"message":"Successfully! All records has been fetched."}')}},[[120,1,2]]]);
//# sourceMappingURL=main.cb57bdb8.chunk.js.map