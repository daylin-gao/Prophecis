(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b75621a"],{"505c":function(t,A,s){"use strict";s("5da6")},"5da6":function(t,A,s){},6395:function(t,A,s){t.exports=s.p+"img/task.1cf2cc14.png"},bb51:function(t,A,s){"use strict";s.r(A);var n=function(){var t=this,A=t.$createElement,s=t._self._c||A;return s("div",[s("breadcrumb-nav"),s("div",{staticClass:"home-page"},[s("el-row",{staticClass:"content-box header"},[s("div",{staticClass:"title"},[t._v(" "+t._s(t.$t("home.title"))+" ")]),s("div",{staticClass:"introduce"},[t._v(" "+t._s(t.$t("home.introduction"))+" ")])]),s("div",{staticClass:"label"},[t._v(" "+t._s(t.$t("home.modelTrain"))+" ")]),s("div",{staticClass:"content-box"},[s("el-row",[s("el-col",{staticClass:"notebooks",attrs:{span:18}},[t._v(" Notebooks"),s("span",[t._v("MLLabis")])]),s("el-col",{staticClass:"btn-right",attrs:{span:6}},[s("el-button",{attrs:{type:"primary"},on:{click:t.goNotebook}},[t._v(" "+t._s(t.$t("home.instanceList"))+" ")])],1)],1),s("el-row",{staticClass:"center stauts-row"},[s("el-col",{attrs:{span:4}},[t._v(" "+t._s(t.AIDEList.nbTotal)+" ")]),s("el-col",{attrs:{span:4}},[t._v(" "+t._s(t.AIDEList.nbRunning)+" ")]),s("el-col",{attrs:{span:4}},[t._v(" "+t._s(t.AIDEList.gpuCount)+" ")])],1),s("el-row",{staticClass:"center img-row"},[s("el-col",{attrs:{span:4}},[s("img",{attrs:{src:t.taskImg}})]),s("el-col",{attrs:{span:4}},[s("img",{attrs:{src:t.taskImg}})]),s("el-col",{attrs:{span:4}},[s("img",{attrs:{src:t.cardImg}})])],1),s("el-row",{staticClass:"center nape-text"},[s("el-col",{attrs:{span:4}},[t._v(" "+t._s(t.$t("home.totalInstance"))+" ")]),s("el-col",{attrs:{span:4}},[t._v(" "+t._s(t.$t("home.runInstance"))+" ")]),s("el-col",{attrs:{span:4}},[t._v(" "+t._s(t.$t("home.cardNumber"))+" ")])],1)],1)],1)],1)},o=[],a=s("6395"),E=s.n(a),g=s("ded2"),e=s.n(g),i={data:function(){return{taskImg:E.a,cardImg:e.a,intervalAIDEFunc:"",AIDEList:{gpuCount:0,nbRunning:0,nbTotal:0}}},mounted:function(){this.getAIDEList()},methods:{getAIDEList:function(){var t=this;this.getAIDEFunc(),this.intervalAIDEFunc=setInterval((function(){t.getAIDEFunc()}),1e4)},getAIDEFunc:function(){var t=this,A="/aide/".concat(this.FesEnv.aideApiVersion,"/dashboards");this.FesApi.fetch(A,"get").then((function(A){t.AIDEList=A}),(function(){t.AIDEList={gpuCount:0,nbRunning:0,nbTotal:0}}))},goNotebook:function(){this.$router.push("/AIDE")}},destroyed:function(){clearInterval(this.intervalAIDEFunc)}},C=i,c=(s("505c"),s("2877")),Q=Object(c["a"])(C,n,o,!1,null,"69bd7162",null);A["default"]=Q.exports},ded2:function(t,A){t.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=chunk-2b75621a.7266b91f.js.map