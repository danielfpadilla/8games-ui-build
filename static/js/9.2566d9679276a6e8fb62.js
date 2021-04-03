webpackJsonp([9],{"VKi/":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("Xxa5"),s=a.n(n),r=a("exGp"),o=a.n(r),l=(a("M4fF"),a("wwI7")),c=a("Fdg/"),i={name:c.a.key,mixins:[l.a],data:function(){return{action:null,list:{data:[],recordsFiltered:0},subAgent:{id:null,account_no:null,username:"",name:"",lname:"",commission:0,status:1,password:""},rules:{username:[{required:!0,message:"Please input username",trigger:"blur"}],password:[{required:!0,message:"Please input password",trigger:"blur"}]},showDialog:!1,isLoading:!0,isFetching:!1,isSaving:!1,route:c.a}},computed:{dialogTitle:function(){return"add"==this.action?"Add new sub-agent":"Edit sub-agent"},tableHeight:function(){return window.innerHeight-250}},mounted:function(){this.fetch()},methods:{handleClose:function(e){this.action=null,this.subAgent={id:null,account_no:null,username:"",name:"",lname:"",commission:0,status:1,password:""},"function"==typeof e&&e()},openDialog:function(e){this.action=e,this.showDialog=!0},closeDialog:function(){this.handleClose(),this.showDialog=!1},fetch:function(){var e=this;return o()(s.a.mark(function t(){var a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.prev=1,a={start:(e.currPage-1)*e.currPageSize,length:e.currPageSize,"search[value]":e.search,"columns[0][data]":"account_no","columns[0][name]":"account_no","columns[0][searchable]":!0,"columns[0][orderable]":!0,"columns[0][search][value]":"","columns[0][search][regex]":!0,"columns[1][data]":"username","columns[1][name]":"username","columns[1][searchable]":!0,"columns[1][orderable]":!0,"columns[1][search][value]":"","columns[1][search][regex]":!0,"columns[2][data]":"full_name","columns[2][name]":"full_name","columns[2][searchable]":!0,"columns[2][orderable]":!0,"columns[2][search][value]":"","columns[2][search][regex]":!0},t.next=5,e.$store.dispatch("subagent/list",a);case 5:e.list=t.sent,t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e.$message({type:"error",message:t.t0.message});case 11:e.isLoading=!1;case 12:case"end":return t.stop()}},t,e,[[1,8]])}))()},remove:function(e){var t=this;return o()(s.a.mark(function a(){return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,t.$store.dispatch("subagent/remove",e);case 3:t.fetch(),t.$message({type:"success",message:"Delete Successful"}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),t.$message({type:"error",message:"Unable to remove."});case 10:case"end":return a.stop()}},a,t,[[0,7]])}))()},edit:function(e){var t=this;return o()(s.a.mark(function a(){return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t.isLoading=!0,a.prev=1,a.next=4,t.$store.dispatch("subagent/get",e);case 4:t.subAgent=a.sent,a.next=10;break;case 7:a.prev=7,a.t0=a.catch(1),t.$message({type:"error",message:a.t0.message});case 10:t.isLoading=!1,t.openDialog("edit");case 12:case"end":return a.stop()}},a,t,[[1,7]])}))()},save:function(){var e=this;return o()(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.isSaving){t.next=2;break}return t.abrupt("return");case 2:e.$refs.form.validate(function(){var t=o()(s.a.mark(function t(a){var n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a&&!e.isSaving){t.next=2;break}return t.abrupt("return");case 2:return e.isSaving=!0,t.prev=3,delete e.subAgent.account_no,delete e.subAgent.pa_id,t.next=8,e.$store.dispatch("subagent/save",e.subAgent);case 8:n="add"==e.action?"Add Successful":"Update Successful",e.fetch(),e.closeDialog(),e.$message({type:"success",message:n}),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(3),e.$message({type:"error",message:t.t0.message});case 17:e.isSaving=!1;case 18:case"end":return t.stop()}},t,e,[[3,14]])}));return function(e){return t.apply(this,arguments)}}());case 3:case"end":return t.stop()}},t,e)}))()}}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],staticClass:"page-sub-agents"},[a("header",{staticClass:"page-title"},[e._v(e._s(e.route.name))]),e._v(" "),a("div",{staticClass:"page-content",attrs:{layout:"column","layout-align":"space-between",flex:""}},[a("div",[a("div",{staticClass:"page-controls",attrs:{layout:"row","layout-align":"end center"}},[a("div",{attrs:{layout:"row"}},[a("el-input",{attrs:{placeholder:"Search",clearable:""},on:{input:e.onInput},model:{value:e.inputSearch,callback:function(t){e.inputSearch=t},expression:"inputSearch"}}),e._v(" "),a("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary"},on:{click:function(t){return e.openDialog("add")}}},[a("span",[e._v("Add sub-agent")])])],1)]),e._v(" "),a("el-table",{staticStyle:{"margin-top":"10px"},attrs:{"max-height":e.tableHeight,data:e.list.data}},[a("el-table-column",{attrs:{label:"Account #",prop:"account_no",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"Username",prop:"username",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"Name",prop:"full_name",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"Commission (%)",prop:"commission",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"Status",prop:"status",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:t.row.status?"success":"info"}},[a("span",[e._v(e._s(t.row.status?"Active":"Inactive"))])])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"Action",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[a("el-tooltip",{attrs:{content:"Edit",placement:"top",effect:"dark"}},[a("el-button",{attrs:{icon:"el-icon-edit"},on:{click:function(a){return e.edit(t.row.id)}}})],1),e._v(" "),a("el-popconfirm",{attrs:{"confirm-button-text":"Delete","cancel-button-text":"Cancel",icon:"el-icon-info","icon-color":"red",title:"Delete sub-agent?"},on:{confirm:function(a){return e.remove(t.row.id)}}},[a("el-button",{attrs:{slot:"reference",type:"danger",icon:"el-icon-delete"},slot:"reference"})],1)],1)]}}])})],1)],1),e._v(" "),a("div",{attrs:{layout:"row","layout-align":"center center"}},[a("el-pagination",{attrs:{background:"",layout:"sizes, prev, pager, next","page-sizes":[10,25,50,100,150,200],"current-page":e.currPage,"page-size":e.currPageSize,total:e.list.recordsFiltered},on:{"update:currentPage":function(t){e.currPage=t},"update:current-page":function(t){e.currPage=t},"size-change":e.handleSizeChange}}),e._v(" "),a("div",{staticStyle:{"font-family":"'Robot Light'"}},[a("el-tag",{attrs:{type:"info"}},[e._v(e._s("Total: "+e.list.recordsFiltered))])],1)],1)]),e._v(" "),a("el-dialog",{attrs:{title:e.dialogTitle,"custom-class":"page-dialog",visible:e.showDialog,"close-on-click-modal":!1,"close-on-press-escape":!1,"before-close":e.handleClose,width:"50%","append-to-body":""},on:{"update:visible":function(t){e.showDialog=t}}},[e.showDialog?a("el-form",{ref:"form",attrs:{"label-width":"140px",rules:e.rules,model:e.subAgent}},[e.subAgent.account_no?a("el-form-item",{attrs:{label:"Account #"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.subAgent.account_no,callback:function(t){e.$set(e.subAgent,"account_no",t)},expression:"subAgent.account_no"}})],1):e._e(),e._v(" "),a("el-form-item",{attrs:{label:"Username",prop:"username"}},[a("el-input",{attrs:{clearable:""},model:{value:e.subAgent.username,callback:function(t){e.$set(e.subAgent,"username",t)},expression:"subAgent.username"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"First name",prop:"name"}},[a("el-input",{attrs:{clearable:""},model:{value:e.subAgent.name,callback:function(t){e.$set(e.subAgent,"name",t)},expression:"subAgent.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Last name",prop:"lname"}},[a("el-input",{attrs:{clearable:""},model:{value:e.subAgent.lname,callback:function(t){e.$set(e.subAgent,"lname",t)},expression:"subAgent.lname"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Password",prop:"password"}},[a("el-input",{attrs:{type:"password","show-password":""},model:{value:e.subAgent.password,callback:function(t){e.$set(e.subAgent,"password",t)},expression:"subAgent.password"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Commission (%)"}},[a("el-input-number",{attrs:{min:0},model:{value:e.subAgent.commission,callback:function(t){e.$set(e.subAgent,"commission",t)},expression:"subAgent.commission"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Status",prop:"status"}},[a("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:e.subAgent.status,callback:function(t){e.$set(e.subAgent,"status",t)},expression:"subAgent.status"}})],1)],1):e._e(),e._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",loading:e.isSaving},on:{click:e.save}},[a("span",[e._v("Save")])])],1)],1)],1)},staticRenderFns:[]};var m=a("VU/8")(i,u,!1,function(e){a("WL6m")},null,null);t.default=m.exports},WL6m:function(e,t){}});
//# sourceMappingURL=9.2566d9679276a6e8fb62.js.map