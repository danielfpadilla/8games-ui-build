webpackJsonp([7],{WzSs:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("Xxa5"),n=a.n(r),l=a("exGp"),s=a.n(l),i=a("M4fF"),c=a.n(i),o=a("H8JJ"),u=a("Pvr2"),p={name:u.a.key,mixins:[o.a],data:function(){return{action:null,list:null,filter:{status:null,draw:null,daterange:null,search:null},isLoading:!0,route:u.a}},computed:{data:function(){var e=this.search.trim().toUpperCase(),t=this.list?this.list.data.filter(function(t){return!e||t.name.toUpperCase().indexOf(e)>-1}):[];return this.sort.order?c.a.orderBy(t,[this.sort.prop],[this.sort.order]):t},tableHeight:function(){return window.innerHeight-250}},mounted:function(){this.fetch()},methods:{fetch:function(){var e=this;return s()(n.a.mark(function t(){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("winners/list");case 3:e.list=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),e.$message({type:"error",message:t.t0.message});case 9:e.isLoading=!1;case 10:case"end":return t.stop()}},t,e,[[0,6]])}))()},claim:function(e){var t=this;return s()(n.a.mark(function a(){return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!t.isLoading){a.next=2;break}return a.abrupt("return");case 2:return t.isLoading=!0,a.prev=3,a.next=6,t.$store.dispatch("winners/claim",e.id);case 6:return a.next=8,t.fetch();case 8:a.next=13;break;case 10:a.prev=10,a.t0=a.catch(3),t.$message({type:"error",message:a.t0.message});case 13:t.isLoading=!1;case 14:case"end":return a.stop()}},a,t,[[3,10]])}))()}}},d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],staticClass:"page-winners"},[a("header",{staticClass:"page-title"},[e._v(e._s(e.route.name))]),e._v(" "),a("div",{staticClass:"page-content",attrs:{layout:"column","layout-align":"space-between",flex:""}},[a("div",[a("div",{staticClass:"page-controls",attrs:{layout:"row","layout-align":"end center"}},[a("div",{staticClass:"filters",attrs:{layout:"row"}},[a("div",{attrs:{flex:""}},[a("label",{staticClass:"label-input"},[a("span",[e._v("Status")]),e._v(" "),a("el-input",{attrs:{placeholder:"Search status",clearable:""},model:{value:e.filter.status,callback:function(t){e.$set(e.filter,"status",t)},expression:"filter.status"}})],1)]),e._v(" "),a("div",{attrs:{flex:""}},[a("label",{staticClass:"label-input"},[a("span",[e._v("Draw")]),e._v(" "),a("el-input",{attrs:{placeholder:"Search draw",clearable:""},model:{value:e.filter.draw,callback:function(t){e.$set(e.filter,"draw",t)},expression:"filter.draw"}})],1)]),e._v(" "),a("div",{attrs:{flex:""}},[a("label",{staticClass:"label-input"},[a("span",[e._v("Dates")]),e._v(" "),a("el-date-picker",{attrs:{type:"daterange","range-separator":"To","start-placeholder":"Date from","end-placeholder":"Date to"},model:{value:e.filter.daterange,callback:function(t){e.$set(e.filter,"daterange",t)},expression:"filter.daterange"}})],1)]),e._v(" "),a("div",{attrs:{flex:""}},[a("label",{staticClass:"label-input"},[a("span",[e._v("Keyword")]),e._v(" "),a("el-input",{attrs:{placeholder:"Search...",clearable:""},model:{value:e.filter.search,callback:function(t){e.$set(e.filter,"search",t)},expression:"filter.search"}})],1)])])]),e._v(" "),a("el-table",{staticStyle:{"margin-top":"10px"},attrs:{"max-height":e.tableHeight,data:e.tableData[e.currPage-1]}},[a("el-table-column",{attrs:{label:"Agent / Sub-agent",prop:"full_name",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"Player username",prop:"username",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"Contact #",prop:"contact_no",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"Reference #",prop:"referenceno",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"Draw",prop:"draw_name",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"Combination",prop:"combination",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"Bet amount",prop:"bet",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"Payout",prop:"winningprize",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"Date/Time",prop:"drawdate",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("span",{directives:[{name:"date-format",rawName:"v-date-format",value:{date:e.row.drawdate,format:"MMM DD, YYYY hh:mm a"},expression:"{ date: scope.row.drawdate, format: 'MMM DD, YYYY hh:mm a' }"}]})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"Status",width:"200px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return["Unclaimed"==t.row.claimed?a("el-popconfirm",{attrs:{title:"Want to claim this?"},on:{confirm:function(a){return e.claim(t.row)}}},[a("el-button",{attrs:{slot:"reference",size:"small",type:"warning",plain:""},slot:"reference"},[a("span",[e._v("Unclaimed")])])],1):a("el-tag",{attrs:{type:"success"}},[e._v("Claimed")])]}}])})],1)],1),e._v(" "),a("div",{attrs:{layout:"row","layout-align":"center center"}},[a("el-pagination",{attrs:{background:"",layout:"sizes, prev, pager, next","page-sizes":[10,25,50,100,150,200],"current-page":e.currPage,"page-size":e.currPageSize,total:e.data.length},on:{"update:currentPage":function(t){e.currPage=t},"update:current-page":function(t){e.currPage=t},"size-change":e.handleSizeChange}}),e._v(" "),a("el-tag",{attrs:{type:"info"}},[e._v(e._s("Total: "+e.data.length))])],1)])])},staticRenderFns:[]};var f=a("VU/8")(p,d,!1,function(e){a("ZgKc")},null,null);t.default=f.exports},ZgKc:function(e,t){}});
//# sourceMappingURL=7.6a2bbc8d0eda710abd59.js.map