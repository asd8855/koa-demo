(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21be96c9"],{1104:function(e,t,n){},"267c":function(e,t,n){"use strict";var i=n("f063"),r=n.n(i);r.a},"292c":function(e,t,n){"use strict";n.d(t,"a",function(){return a});var i=n("d225"),r=n("b0b4"),o=(n("a49b"),n("b1dd")),s="eduplus-uc",a=function(){function e(){Object(i["a"])(this,e)}return Object(r["a"])(e,null,[{key:"queryRelationChildInfoList",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o["a"].getJSON(s+"/rest/uc/child/allRelationChildInfoListByPhone",e)}},{key:"queryIsBindAlipayId",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return o["a"].postJSON(s+"/rest/uc/user/isbindAlipayId",e,t)}},{key:"unBindChild",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return o["a"].postJSON(s+"/rest/uc/child/unBindChild",e,t)}},{key:"unBindChildByPhone",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return o["a"].postJSON(s+"/rest/uc/child/unBindChildByPhone",e,t)}},{key:"querySchoolList",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return o["a"].getJSON(s+"/rest/uc/school/schoolListByDistrictNo",e,t)}},{key:"bindAlipayId",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return o["a"].postJSON(s+"/rest/uc/user/bindAlipayId",e,t)}},{key:"queryUserInfoByPhone",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return o["a"].getJSON(s+"/rest/uc/user/queryUserInfoByPhone",e,t)}},{key:"queryUniqueChild",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return o["a"].getJSON(s+"/rest/uc/child/uniqueChild",e,t)}},{key:"bindChild",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return o["a"].postJSON(s+"/rest/uc/child/bindChild",e,t)}},{key:"sendSMSCode",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return o["a"].postJSON(s+"/rest/uc/user/sendSMSCode",e,t)}},{key:"queryChildRelation",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return o["a"].getJSON(s+"/rest/uc/child/childRelation",e,t)}},{key:"queryUserIdentityByPhone",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return o["a"].getJSON(s+"/rest/uc/user/userIdentityByPhone",e,t)}},{key:"queryIsBindWx",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return o["a"].postJSON(s+"/rest/uc/user/isBindWx",e,t)}},{key:"bindWxId",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return o["a"].postJSON(s+"/rest/uc/user/bindWx",e,t)}},{key:"unBindWx",value:function(e,t){return o["a"].postJSON(s+"/rest/uc/user/unBindWx",e,t)}},{key:"getAllCityList",value:function(){return o["a"].getJSON(s+"/rest/uc/baseData/allCity")}},{key:"querySchoolByCity",value:function(e){return o["a"].getJSON(s+"/rest/uc/school/querySchoolByCity",e)}}]),e}()},"5a3e":function(e,t,n){"use strict";var i=n("1104"),r=n.n(i);r.a},ac6a:function(e,t,n){for(var i=n("cadf"),r=n("0d58"),o=n("2aba"),s=n("7726"),a=n("32e9"),c=n("84f2"),l=n("2b4c"),u=l("iterator"),h=l("toStringTag"),d=c.Array,v={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},f=r(v),p=0;p<f.length;p++){var g,y=f[p],m=v[y],b=s[y],k=b&&b.prototype;if(k&&(k[u]||a(k,u,d),k[h]||a(k,h,y),c[y]=d,m))for(g in i)k[g]||o(k,g,i[g],!0)}},ae7f:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search-child"},[n("van-cell-group",[n("van-cell",{attrs:{title:"学校所在地","is-link":"",value:e.addressContent,"value-class":"请选择"==e.addressContent?"value-class":"value-class1"},on:{click:e.showAddressPopup}}),n("van-cell",{attrs:{title:"所在学校","is-link":"",value:e.schoolContent,"value-class":"请选择"==e.schoolContent?"value-class":"value-class1"},on:{click:e.showSchoolPopup}}),n("van-popup",{attrs:{position:"bottom",overlay:!0,"close-on-click-overlay":!1},model:{value:e.showAddressModel,callback:function(t){e.showAddressModel=t},expression:"showAddressModel"}},[n("van-picker",{attrs:{"show-toolbar":"",columns:e.columns,"value-key":"name"},on:{cancel:function(t){e.showAddressModel=!1},change:e.onChange,confirm:e.confirmAddress}})],1),n("van-popup",{attrs:{position:"bottom",overlay:!0,"close-on-click-overlay":!1},model:{value:e.showSchoolModel,callback:function(t){e.showSchoolModel=t},expression:"showSchoolModel"}},[n("van-picker",{attrs:{"show-toolbar":"",columns:e.schoolLists,"value-key":"schoolName"},on:{cancel:function(t){e.showSchoolModel=!1},confirm:e.confirmSchool}})],1),n("van-field",{attrs:{label:"学生姓名",placeholder:"请输入学生姓名","input-align":"left"},model:{value:e.childName,callback:function(t){e.childName=t},expression:"childName"}}),n("van-field",{attrs:{label:e.checkTermLabel,placeholder:e.checkTermPlaceholder,"input-align":"left"},model:{value:e.checkTerm,callback:function(t){e.checkTerm=t},expression:"checkTerm"}})],1),n("div",{staticClass:"submit-box"},[n("van-button",{staticClass:"submit-btn",attrs:{loading:e.btnLoading,"loading-text":"加载中...",type:"primary",size:"normal"},on:{click:e.bindUser}},[e._v("绑定")])],1)],1)},r=[],o=(n("ac6a"),n("7f7f"),n("96cf"),n("3b8d")),s=n("d225"),a=n("b0b4"),c=(n("a49b"),n("b1dd")),l=function(){function e(){Object(s["a"])(this,e)}return Object(a["a"])(e,null,[{key:"getAllProvince",value:function(e,t){return c["a"].getForm("/xys_api/region/getAllProvince",e,t)}},{key:"getCityByProvinceId",value:function(e,t){return c["a"].getForm("/xys_api/region/getCityByProvinceId",e,t)}},{key:"getDistrictsByCityId",value:function(e,t){return c["a"].getForm("/xys_api/wireless/train/getDistrictsByCityId",e,t)}}]),e}(),u=n("292c"),h=n("813e"),d=(n("9ef1"),{data:function(){return{childName:"",checkTerm:"",checkTermLabel:"家长手机号",checkTermPlaceholder:"请输入家长手机号",checkValue:"MOBILE",showAddressModel:!1,showSchoolModel:!1,addressContent:"请选择",schoolContent:"请选择",schoolLists:[],loading:!1,btnLoading:!1,columns:[{values:[],className:"column1"},{values:[],className:"column2"},{values:[],className:"column3"}]}},methods:{onChange:function(e,t,n){if(console.log("picker",e),console.log("index",n),console.log("values",t),0==n){var i=this.province.filter(function(e){return e.id==t[0].id});this.getCity({provinceId:i[0].id},e)}if(1==n){var r=this.city.filter(function(e){return e.id==t[1].id});console.log("city->",r),this.getDistrict({cityId:r[0].id},e)}},getSchoolList:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t={districtNo:this.districtData.districtNo},e.next=3,u["a"].querySchoolList(t);case 3:n=e.sent,this.schoolLists=n.data.filter(function(e){return"xys"==e.source});case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),queryUniqueChild:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t={schoolNo:this.currentSchool.schoolNo,childName:this.childName,verifiyValue:this.checkTerm,source:this.currentSchool.source},e.next=3,u["a"].queryUniqueChild(t);case 3:n=e.sent,n&&n.data&&n.data.childNo?this.bindChild(n.data.childNo):this.$toast("未查询到该孩子信息");case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),bindChild:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(t){var n,i,r,o=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=h["a"].getLgObj("userInfo"),n.userId,n.alipayUid,i=n.wxOpenId,r={userId:n.userId,alipayUID:n.alipayUid||"",wxOpenId:i||"",childNo:t,source:this.currentSchool.source},this.btnLoading=!0,e.next=6,u["a"].bindChild({},r).catch(function(e){o.btnLoading=!1});case 6:e.sent,this.btnLoading=!1,r&&(this.$toast("添加成功"),this.$router.push({path:"/relevantChild"}));case 9:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),showSchoolPopup:function(){"请选择"!=this.addressContent?this.schoolLists.length?this.showSchoolModel=!0:this.$toast("该区域无学校信息"):this.$toast("请选择学校所在地")},showAddressPopup:function(){this.showAddressModel=!0},confirmSchool:function(e,t){switch(this.currentSchool=e,this.schoolContent=e.schoolName,e.verifiyType){case"MOBILE":this.checkTermLabel="家长手机号",this.checkTermPlaceholder="请输入家长手机号";break;case"STUDENT_CODE":this.checkTermLabel="学生学号",this.checkTermPlaceholder="请输入学生学号";break;case"ID_NO":this.checkTermLabel="身份证号",this.checkTermPlaceholder="请输入身份证号";break}this.showSchoolModel=!1},confirmAddress:function(e){console.log("address--\x3e",e),this.cityData=e[1],this.districtData=e[2],this.addressContent="".concat(e[0].name,",").concat(e[1].name,",").concat(e[2].name),this.showAddressModel=!1,this.getSchoolList()},bindUser:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if("请选择"!=this.addressContent){e.next=3;break}return this.$toast("请选择学校所在地"),e.abrupt("return");case 3:if("请选择"!=this.schoolContent){e.next=6;break}return this.$toast("请选择学校!"),e.abrupt("return");case 6:if(this.childName){e.next=9;break}return this.$toast("请输入学生姓名！"),e.abrupt("return");case 9:if(this.checkTerm){e.next=12;break}return"MOBILE"==this.currentSchool.attrValue?this.$toast("请输入家长手机号"):"STUDENT_CODE"==this.currentSchool.attrValue?this.$toast("请输入学生学号"):this.$toast("请输入身份证号"),e.abrupt("return");case 12:this.queryUniqueChild();case 13:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getAllProvince:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.getAllProvince();case 2:t=e.sent,console.log("province--\x3e",t),t&&(this.province=t.data,t.data.map(function(e){return e.name=e.proivnceName}),this.columns[0].values=t.data,this.getCity({provinceId:t.data[0].id}));case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getCity:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(t,n){var i,r=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,e.next=3,l.getCityByProvinceId(t).catch(function(e){r.loading=!1});case 3:i=e.sent,this.loading=!1,i&&(this.city=i.data,i.data.map(function(e){return e.name=e.cityName}),this.columns[1].values=i.data,n&&n.setColumnValues(1,this.columns[1].values),this.getDistrict({cityId:i.data[0].id},n));case 6:case"end":return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}(),getDistrict:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(t,n){var i,r=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,e.next=3,l.getDistrictsByCityId(t).catch(function(e){r.loading=!1});case 3:i=e.sent,this.loading=!1,i&&(this.district=i.data,this.columns[2].values=i.data,console.log("district.data->",i.data),n&&n.setColumnValues(2,this.columns[2].values));case 6:case"end":return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}()},created:function(){document.title="关联孩子",this.wxOpenId=this.$route.query.wxOpenId,this.getAllProvince()},mounted:function(){}}),v=d,f=(n("5a3e"),n("267c"),n("2877")),p=Object(f["a"])(v,i,r,!1,null,"98a145ce",null);t["default"]=p.exports},f063:function(e,t,n){}}]);