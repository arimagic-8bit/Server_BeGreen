(this["webpackJsonpreact-auth-client"]=this["webpackJsonpreact-auth-client"]||[]).push([[0],{49:function(e,t){},50:function(e,t){},52:function(e,t,n){e.exports=n(81)},58:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),l=n.n(c),i=n(11),o=(n(57),n(4)),u=n(5),s=n(7),p=n(6),m=n(9),d=(n(58),function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navHome"},r.a.createElement("img",{className:"BeGreen",src:"https://res.cloudinary.com/dywatr6gy/image/upload/v1590218353/BeGreen/Icon_iynxyu.jpg",alt:"Be Green"}),r.a.createElement("div",{className:"homeNavbar"},r.a.createElement(i.b,{className:"signup",to:"/signup"},"SIGN UP"),r.a.createElement(i.b,{className:"login",to:"/login"},"LOG IN")))}}]),n}(a.Component)),h=n(43);var g=function(){return r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement("div",{className:"big-container"},r.a.createElement("div",{className:"text-container"},r.a.createElement("h2",null,"Healthy life,",r.a.createElement("br",null),"healthy heart"),r.a.createElement("br",null),r.a.createElement("p",null,"Even if you are a pro-vegan or a",r.a.createElement("br",null),"newbie, in Be Green we want to",r.a.createElement("br",null),"take care of you."),r.a.createElement("br",null),r.a.createElement(i.b,{className:"signup",to:"/signup"},"SIGN UP")),r.a.createElement(h.a,{className:"happy-cooking",src:"https://res.cloudinary.com/dywatr6gy/image/upload/v1590217883/BeGreen/3838063_hoqgca.jpg",alt:"HappyCooking",fluid:!0})),r.a.createElement("div",{className:"comparative-container"},r.a.createElement("h2",null,"But wait, there's more!"),r.a.createElement("p",null,"If you become a premium user we can make you a",r.a.createElement("br",null),"personaliced plan"),r.a.createElement("div",{className:"comparative"},r.a.createElement("div",{className:"user-type"},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{src:"https://res.cloudinary.com/dywatr6gy/image/upload/v1590218187/BeGreen/pollito_lrnv9v.jpg",alt:"Free User"})),r.a.createElement("h4",null,"FREE USER"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u2713 Create daily menu"),r.a.createElement("li",null,"\u2713 Save your menus"),r.a.createElement("li",null,"\u2a2f Personaliced service"),r.a.createElement("li",null,"\u2a2f Live-chat with nutritionist")),r.a.createElement("h4",null,"- FREE -")),r.a.createElement("div",{className:"user-type"},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{src:"https://res.cloudinary.com/dywatr6gy/image/upload/v1590218186/BeGreen/gallo_gseejo.jpg",alt:"Premium User"})),r.a.createElement("h4",null,"PREMIUM USER"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u2713 Create daily menu"),r.a.createElement("li",null,"\u2713 Save your menus"),r.a.createElement("li",null,"\u2713 Personaliced service"),r.a.createElement("li",null,"\u2713 Live-chat with nutritionist")),r.a.createElement("h4",null,"- 100\u20ac/YEAR -")))),r.a.createElement("footer",null,r.a.createElement("p",null,"- Be Green 2020 - By alpagor & arimagic ")))},v=n(18),b=n(12),f=n.n(b),E=r.a.createContext(),O=E.Consumer,j=E.Provider;function y(e){return function(t){return r.a.createElement(O,null,(function(n){return r.a.createElement(e,Object.assign({},t,{user:n.user,isLoggedIn:n.isLoggedIn,isLoading:n.isLoading,login:n.login,signup:n.signup,logout:n.logout}))}))}}var x=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={user:null,isLoggedIn:!1,isLoading:!0},e.login=function(t,n){f.a.post("https://begreen.herokuapp.com/auth/login",{username:t,password:n},{withCredentials:!0}).then((function(t){var n=t.data;e.setState({isLoggedIn:!0,isLoading:!1,user:n})})).catch((function(e){return console.log(e)}))},e.signup=function(t,n){f.a.post("https://begreen.herokuapp.com/auth/signup",{username:t,password:n},{withCredentials:!0}).then((function(t){var n=t.data;e.setState({isLoggedIn:!0,isLoading:!1,user:n})})).catch((function(e){return console.log(e)}))},e.logout=function(){f.a.get("https://begreen.herokuapp.com/auth/logout",{withCredentials:!0}).then((function(t){e.setState({isLoggedIn:!1,isLoading:!1,user:null})})).catch((function(e){return console.log(e)}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;f.a.get("https://begreen.herokuapp.com/auth/me",{withCredentials:!0}).then((function(t){var n=t.data;e.setState({isLoggedIn:!0,isLoading:!1,user:n})})).catch((function(t){return e.setState({isLoggedIn:!1,isLoading:!1,user:null})}))}},{key:"render",value:function(){var e=this.state,t=e.user,n=e.isLoggedIn,a=e.isLoading,c=this.login,l=this.signup,i=this.logout;return r.a.createElement(j,{value:{user:t,isLoggedIn:n,isLoading:a,login:c,signup:l,logout:i}},a?"loading":this.props.children)}}]),n}(r.a.Component),I=y(function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:""},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state,a=n.username,r=n.password;e.props.signup(a,r)},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(v.a)({},a,r))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.password;return r.a.createElement("div",null,r.a.createElement("h1",null,"Sign Up"),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"username",value:t,onChange:this.handleChange}),r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",name:"password",value:n,onChange:this.handleChange}),r.a.createElement("input",{type:"submit",value:"Signup"})),r.a.createElement("p",null,"Already have account?"),r.a.createElement(i.b,{to:"/login"}," Login"))}}]),n}(a.Component)),k=y(function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:""},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state,a=n.username,r=n.password;e.props.login(a,r)},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(v.a)({},a,r))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.password;return r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"username",value:t,onChange:this.handleChange}),r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",name:"password",value:n,onChange:this.handleChange}),r.a.createElement("input",{type:"submit",value:"Login"})))}}]),n}(a.Component)),C=y(function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Private Route"),this.props.isLoggedIn?r.a.createElement("h3",null,"Username: ",this.props.user.username):null)}}]),n}(a.Component)),w=n(30),L=n(20),S=(a.Component,function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar"},r.a.createElement(i.b,{to:"/generator"},"Generator"),r.a.createElement(i.b,{to:"/menu"},"Menu"),r.a.createElement(i.b,{to:"/chat"},"Chat"),r.a.createElement(i.b,{to:"/user-zone"},"User Zone"))}}]),n}(a.Component)),N=n(51),A=(a.Component,function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).getAllMenus=function(){f.a.get("https://begreen.herokuapp.com/api/menu").then((function(t){var n=t.data;e.setState({menuList:n})})).catch((function(e){return console.log(e)}))},e.handleOnClick=function(t){var n=t.target.value;e.props.removeFromMenu(n)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement("h1",null,"MENUs"),this.props.menu.map((function(t){return r.a.createElement("div",{key:t._id}," ",t.name,r.a.createElement("button",{value:t._id,onClick:e.handleOnClick},"DELETE"))})))}}]),n}(a.Component)),R=n(13),D=n(23),U=n(21),B=n(25);function P(){var e=Object(D.a)(["\n  border: 1px solid lightgrey;\n  border-radius: 2px;\n  padding: 8px;\n  margin-bottom: 8px;\n  background-color: ",";\n"]);return P=function(){return e},e}var G=U.a.div(P(),(function(e){return e.isDragging?"lightgreen":"white"})),M=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement(B.b,{draggableId:this.props.recipe.id,index:this.props.index},(function(t,n){return r.a.createElement(G,Object.assign({},t.draggableProps,t.dragHandleProps,{ref:t.innerRef,isDragging:n.isDragging}),e.props.recipe.content)}))}}]),n}(a.Component);function _(){var e=Object(D.a)(["\n  padding: 8px;\n  transition: background-color 0.2s ease;\n  background-color: ",";\n  flex-grow: 1;\n  min-height: 108px;\n"]);return _=function(){return e},e}function F(){var e=Object(D.a)(["\n  padding: 8px;\n"]);return F=function(){return e},e}function H(){var e=Object(D.a)(["\n  margin: 8px;\n  border: 1px solid lightgrey;\n  border-radius: 2px;\n  width: 220px;\n\n  display: flex;\n  flex-direction: column;\n"]);return H=function(){return e},e}var T=U.a.div(H()),z=U.a.h3(F()),J=U.a.div(_(),(function(e){return e.isDraggingOver?"skyblue":"white"})),Y=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"shouldComponentUpdate",value:function(e){return e.recipes!==this.props.recipes}},{key:"render",value:function(){return this.props.recipes.map((function(e,t){return r.a.createElement(M,{key:e.id,recipe:e,index:t})}))}}]),n}(r.a.Component),q=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement(T,null,r.a.createElement(z,null,this.props.column.title),r.a.createElement(B.c,{droppableId:this.props.column.id,index:this.props.index},(function(t,n){return r.a.createElement(J,Object.assign({ref:t.innerRef},t.droppableProps,{isDraggingOver:n.isDraggingOver}),r.a.createElement(Y,{recipes:e.props.recipes}),t.placeholder)})))}}]),n}(r.a.Component);function Z(){var e=Object(D.a)(["\n  display: flex;\n"]);return Z=function(){return e},e}var K=U.a.div(Z()),Q=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={recipes:{},columns:{"column-1":{id:"column-1",title:"Recipes List",recipeIds:[]},"column-2":{id:"column-2",title:"Menu",recipeIds:[]}},columnOrder:["column-1","column-2"]},e.onDragEnd=function(t){var n,a=t.destination,r=t.source,c=t.draggableId;if(console.log(t),a&&(a.droppableId!==r.droppableId||a.index!==r.index)){var l=e.state.columns[r.droppableId],i=e.state.columns[a.droppableId];if(l!==i){var o=Array.from(l.recipeIds);o.splice(r.index,1);var u=Object(R.a)(Object(R.a)({},l),{},{recipeIds:o}),s=Array.from(i.recipeIds);s.splice(a.index,0,c);var p=Object(R.a)(Object(R.a)({},i),{},{recipeIds:s}),m=Object(R.a)(Object(R.a)({},e.state),{},{columns:Object(R.a)(Object(R.a)({},e.state.columns),{},(n={},Object(v.a)(n,u.id,u),Object(v.a)(n,p.id,p),n))});e.setState(m)}else{var d=Array.from(l.recipeIds);d.splice(r.index,1),d.splice(a.index,0,c);var h=Object(R.a)(Object(R.a)({},l),{},{recipeIds:d}),g=Object(R.a)(Object(R.a)({},e.state),{},{columns:Object(R.a)(Object(R.a)({},e.state.columns),{},Object(v.a)({},h.id,h))});e.setState(g)}}},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.recipes,t={},n=Object(R.a)({},this.state.columns);e.forEach((function(e){t[e._id]=e,n["column-1"].recipeIds.push(e._id)})),this.setState({columns:n,recipes:t})}},{key:"render",value:function(){var e=this;return r.a.createElement(B.a,{onDragEnd:this.onDragEnd},r.a.createElement(K,null,this.state.columnOrder.map((function(t){var n=e.state.columns[t],a=n.recipeIds.map((function(t){return e.state.recipes[t]}));return r.a.createElement(q,{key:n.id,column:n,recipes:a})}))))}}]),n}(a.Component),V=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={recipes:[],recipeById:{},menu:[],menusList:[]},e.getAllRecipes=function(t){var n=t?"?type=".concat(t):"",a="https://begreen.herokuapp.com"+"/api/recipe".concat(n);f.a.get(a).then((function(t){var n=t.data;e.setState({recipes:n})})).catch((function(e){return console.log(e)}))},e.getRecipeById=function(t){e.state.menu.length<3?f.a.get("https://begreen.herokuapp.com"+"/api/recipe/".concat(t)).then((function(n){var a,r=n.data,c=[].concat(Object(w.a)(e.state.menu),[r]);e.state.recipes.forEach((function(e,n){e._id===t&&(a=n)}));var l=Object(w.a)(e.state.recipes);l.splice(a,1),e.setState({recipeById:r,menu:c,recipes:l})})).catch((function(e){return console.log(e)})):alert("You can only put 3 recipes!")},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getAllRecipes()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement(Q,{recipes:this.state.recipes,getAllRecipes:this.getAllRecipes}))}}]),n}(a.Component),W=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement("h1",null,"THIS IS CHAT"))}}]),n}(a.Component),X=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement("h1",null,"THIS IS USER PAGE"))}}]),n}(a.Component),$=n(49),ee=n.n($),te=n(50),ne=n.n(te);var ae=y((function(e){console.log("props :>> ",e);var t=e.exact,n=e.path,a=e.component,c=e.isLoggedIn,l=a;return r.a.createElement(m.b,{exact:t,path:n,render:function(e){return c?r.a.createElement(m.a,{to:"/private"}):c?void 0:r.a.createElement(l,e)}})}));var re=y((function(e){console.log("props :>> ",e);var t=e.exact,n=e.path,a=e.component,c=e.isLoggedIn,l=a;return r.a.createElement(m.b,{exact:t,path:n,render:function(e){return c?r.a.createElement(l,e):c?void 0:r.a.createElement(m.a,{to:"/login"})}})})),ce=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/",component:g}),r.a.createElement(ae,{exact:!0,path:"/signup",component:I}),r.a.createElement(ae,{exact:!0,path:"/login",component:k}),r.a.createElement(re,{exact:!0,path:"/private",component:C}),r.a.createElement(re,{exact:!0,path:"/generator",component:V}),r.a.createElement(re,{exact:!0,path:"/menu",component:A}),r.a.createElement(re,{exact:!0,path:"/chat",component:W})," ",r.a.createElement(re,{exact:!0,path:"/user-zone",component:X}),r.a.createElement(re,{exact:!0,path:"/premium-info",component:ee.a}),r.a.createElement(re,{exact:!0,path:"/premium-form",component:ne.a})))}}]),n}(a.Component);n(80);l.a.render(r.a.createElement(i.a,null,r.a.createElement(x,null,r.a.createElement(ce,null))),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.77a5db1b.chunk.js.map