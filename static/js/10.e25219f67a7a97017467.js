webpackJsonp([10],{"E/Ku":function(e,a){},OyZa:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t("Xxa5"),r=t.n(n),s=t("exGp"),l=t.n(s),o=(t("M4fF"),t("PJh5")),c=t.n(o),i=t("wwI7"),u=t("4MVC"),m=t("8Q9S"),d={name:m.a.key,mixins:[i.a],components:{DrawDropdown:u.a},data:function(){return{list:{data:[],recordsFiltered:0},filter:{draw:[],daterange:null},isLoading:!0,route:m.a}},computed:{tableHeight:function(){return window.innerHeight-250}},mounted:function(){this.fetch()},methods:{fetch:function(){var e=this;return l()(r.a.mark(function a(){var t,n;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e.isLoading=!0,a.prev=1,t={start:(e.currPage-1)*e.currPageSize,length:e.currPageSize,"search[value]":e.search,"columns[0][data]":"full_name","columns[0][name]":"full_name","columns[0][searchable]":!0,"columns[0][orderable]":!0,"columns[0][search][value]":"","columns[0][search][regex]":!0,"columns[1][data]":"username","columns[1][name]":"username","columns[1][searchable]":!0,"columns[1][orderable]":!0,"columns[1][search][value]":"","columns[1][search][regex]":!0,"columns[2][data]":"contact_no","columns[2][name]":"contact_no","columns[2][searchable]":!0,"columns[2][orderable]":!0,"columns[2][search][value]":"","columns[2][search][regex]":!0,"columns[3][data]":"referenceno","columns[3][name]":"referenceno","columns[3][searchable]":!0,"columns[3][orderable]":!0,"columns[3][search][value]":"","columns[3][search][regex]":!0,"columns[4][data]":"combination","columns[4][name]":"combination","columns[4][searchable]":!0,"columns[4][orderable]":!0,"columns[4][search][value]":"","columns[4][search][regex]":!0,"columns[5][data]":"bet","columns[5][name]":"bet","columns[5][searchable]":!0,"columns[5][orderable]":!0,"columns[5][search][value]":"","columns[5][search][regex]":!0,"columns[6][data]":"commission","columns[6][name]":"commission","columns[6][searchable]":!0,"columns[6][orderable]":!0,"columns[6][search][value]":"","columns[6][search][regex]":!0},e.filter.daterange&&(n="MM-DD-YYYY",t.from=c()(e.filter.daterange[0]).format(n),t.to=c()(e.filter.daterange[1]).format(n)),e.filter.draw.length&&(t.draw=e.filter.draw.join(",")),a.next=7,e.$store.dispatch("commission/list",t);case 7:e.list=a.sent,a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),e.$message({type:"error",message:a.t0.message});case 13:e.isLoading=!1;case 14:case"end":return a.stop()}},a,e,[[1,10]])}))()}}},p={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],staticClass:"page-commission"},[t("header",{staticClass:"page-title"},[e._v(e._s(e.route.name))]),e._v(" "),t("div",{staticClass:"page-sub"},[t("span",[e._v("Total commission of gross bets:")]),e._v(" "),t("span",{directives:[{name:"money-format",rawName:"v-money-format",value:this.list.totalCommission,expression:"this.list.totalCommission"}]})]),e._v(" "),t("div",{staticClass:"page-content",attrs:{layout:"column","layout-align":"space-between",flex:""}},[t("div",[t("div",{staticClass:"page-controls",attrs:{layout:"row","layout-align":"end center"}},[t("div",{staticClass:"filters",attrs:{layout:"row"}},[t("div",{attrs:{flex:""}},[e._m(0),e._v(" "),t("draw-dropdown",{on:{change:e.fetch},model:{value:e.filter.draw,callback:function(a){e.$set(e.filter,"draw",a)},expression:"filter.draw"}})],1),e._v(" "),t("div",{attrs:{flex:""}},[t("label",{staticClass:"label-input"},[t("span",[e._v("Dates")]),e._v(" "),t("el-date-picker",{attrs:{type:"daterange","range-separator":"To","start-placeholder":"Date from","end-placeholder":"Date to"},on:{change:e.fetch},model:{value:e.filter.daterange,callback:function(a){e.$set(e.filter,"daterange",a)},expression:"filter.daterange"}})],1)]),e._v(" "),t("div",{attrs:{flex:""}},[t("label",{staticClass:"label-input"},[t("span",[e._v("Search")]),e._v(" "),t("el-input",{attrs:{placeholder:"Search",clearable:""},on:{input:e.onInput},model:{value:e.inputSearch,callback:function(a){e.inputSearch=a},expression:"inputSearch"}})],1)])])]),e._v(" "),t("el-table",{staticStyle:{"margin-top":"10px"},attrs:{"max-height":e.tableHeight,data:e.list.data}},[t("el-table-column",{attrs:{label:"Agent/sub-agent",prop:"full_name",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{label:"Player",prop:"username",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{label:"Contact #",prop:"contact_no",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{label:"Reference #",prop:"referenceno",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{label:"Draw",prop:"name",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{label:"Combination",prop:"combination",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{label:"Bet amount",prop:"bet",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",{directives:[{name:"money-format",rawName:"v-money-format",value:a.row.bet,expression:"scope.row.bet"}]}),e._v(" "),"R"==a.row.isramble?t("span",[e._v("R")]):e._e()]}}])}),e._v(" "),t("el-table-column",{attrs:{label:"Date/time",prop:"drawdate",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[t("span",{directives:[{name:"date-format",rawName:"v-date-format",value:{date:e.row.drawdate,format:"MMM DD, YYYY hh:mm a"},expression:"{ date: scope.row.drawdate, format: 'MMM DD, YYYY hh:mm a' }"}]})]}}])}),e._v(" "),t("el-table-column",{attrs:{label:"Commission",prop:"commission",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[t("span",{directives:[{name:"money-format",rawName:"v-money-format",value:e.row.commission,expression:"scope.row.commission"}]})]}}])})],1)],1),e._v(" "),t("div",{attrs:{layout:"row","layout-align":"center center"}},[t("el-pagination",{attrs:{background:"",layout:"sizes, prev, pager, next","page-sizes":[10,25,50,100,150,200],"current-page":e.currPage,"page-size":e.currPageSize,total:e.list.recordsFiltered},on:{"update:currentPage":function(a){e.currPage=a},"update:current-page":function(a){e.currPage=a},"current-change":e.fetch,"size-change":e.handleSizeChange}}),e._v(" "),t("div",{staticStyle:{"font-family":"'Robot Light'"}},[t("el-tag",{attrs:{type:"info"}},[e._v(e._s("Total: "+e.list.recordsFiltered))])],1)],1)])])},staticRenderFns:[function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"label-input"},[a("span",[this._v("Draw")])])}]};var f=t("VU/8")(d,p,!1,function(e){t("E/Ku")},null,null);a.default=f.exports}});
//# sourceMappingURL=10.e25219f67a7a97017467.js.map