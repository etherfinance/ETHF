(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["a9a4a8e6"],{7017:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"refer-page"},[a("q-icon",{staticClass:"title-back-icon",attrs:{name:"navigate_before"},nativeOn:{click:function(e){return t.goBack(e)}}}),a("img",{staticStyle:{width:"60px","align-self":"center"},attrs:{src:"statics/ethfwhite.png"}}),a("span",{staticStyle:{color:"white","align-self":"center"}},[t._v(t._s(t.$t("ethf")))]),a("span",{staticStyle:{color:"white","align-self":"center","margin-top":"20px"},domProps:{innerHTML:t._s(t.$t("settoptx"))}}),a("span",{staticStyle:{color:"white","align-self":"center","margin-top":"20px"}},[t._v(t._s(t.$t("ihaveearn"))),a("span",{staticStyle:{"font-size":"23px"}},[t._v(t._s(Number(t.lastTotalInterest).toFixed(4)))]),t._v(" ETH")]),a("img",{staticStyle:{width:"200px","align-self":"center","margin-top":"20px"},attrs:{src:"statics/officeqrcode.png"}}),a("span",{staticStyle:{color:"white","align-self":"center","margin-top":"20px"}},[t._v(t._s(t.$t("refercode"))+"："),a("span",{staticStyle:{"font-size":"23px"}},[t._v(t._s(t.global.ensname))])])],1)},s=[];n._withStripped=!0;var i=a("a002"),r=a.n(i),o={components:{},data:function(){return{lastTotalInterest:""}},mounted:function(){var t=this;r.a.getItem("lastTotalInterest").then(function(e){null!==e&&(t.lastTotalInterest=e)}),r.a.getItem("sharetiphasshow").then(function(e){null===e&&toast(t.$t("share2friendcicletx")),r.a.setItem("sharetiphasshow",!0)}),""===this.global.ensname&&this.global.totalInvest<this.global.config.referRequireETH&&(toast(this.$t("notreachreferreq",{requireETH:this.global.config.referRequireETH})),this.$router.go(-1))},methods:{goBack:function(){this.$router.go(-1)}}},l=o,c=(a("eb87"),a("2877")),f=Object(c["a"])(l,n,s,!1,null,"403cd80f",null);f.options.__file="MyReferPage.vue";e["default"]=f.exports},"86de":function(t,e,a){},eb87:function(t,e,a){"use strict";var n=a("86de"),s=a.n(n);s.a}}]);