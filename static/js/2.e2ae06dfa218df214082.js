webpackJsonp([2],{250:function(e,t,s){var a=s(19)(s(267),s(618),null,null,null);e.exports=a.exports},267:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"login",data:function(){return{flag:!0,username:"admin",password:""}},methods:{login:function(){var e=this;if("admin"==this.username)return this.$message({message:"登录成功, 准备为您跳转...",type:"success"}),void setTimeout(function(){e.$router.push("/home/user")},1666);this.$message({message:"账号或密码错误，请重试",type:"error",duration:1333})}}}},618:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"login"},[s("transition",{attrs:{"enter-active-class":"shake",appear:"","leave-active-class":"fadeOut"}},[s("div",{staticClass:"login-box animated"},[s("div",{staticClass:"avatar"},[s("img",{attrs:{src:"/static/images/logo.png",draggable:"false"}})]),e._v(" "),s("div",{staticClass:"common"},[s("label",{staticClass:"iconfont",attrs:{for:"username"}},[e._v("")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.username,expression:"username",modifiers:{trim:!0}}],attrs:{type:"text",maxlength:"20",autocomplete:"off",placeholder:"Username",id:"username"},domProps:{value:e.username},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.login(t)},input:function(t){t.target.composing||(e.username=t.target.value.trim())},blur:function(t){e.$forceUpdate()}}})]),e._v(" "),s("div",{staticClass:"common"},[s("label",{staticClass:"iconfont",attrs:{for:"password"}},[e._v("")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.password,expression:"password",modifiers:{trim:!0}}],attrs:{type:"password",maxlength:"20",autocomplete:"off",placeholder:"Password",id:"password"},domProps:{value:e.password},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.login(t)},input:function(t){t.target.composing||(e.password=t.target.value.trim())},blur:function(t){e.$forceUpdate()}}})]),e._v(" "),s("div",{staticClass:"btn",on:{click:e.login}},[e._v("登 录")])])])],1)},staticRenderFns:[]}}});