webpackJsonp([3],{cmUZ:function(e,t){},yJ3Z:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("Xxa5"),l=a.n(n),o=a("exGp"),r=a.n(o),s=(a("M4fF"),a("H8JJ")),c=a("wNYq"),i={name:c.a.key,mixins:[s.a],data:function(){return{action:null,player:{account_no:null,username:"",amount:null},route:c.a}},computed:{data:function(){return[{account_no:"LK000001",username:"PL1",running_total:100}]},dialogTitle:function(){return"Load player"}},methods:{handleClose:function(e){this.action=null,this.player={account_no:null,username:"",amount:null},"function"==typeof e&&e()},openDialog:function(e,t){t&&(this.player=t),this.action=e,this.showDialog=!0},closeDialog:function(){this.showDialog=!1,this.handleClose()},save:function(){var e=this;return r()(l.a.mark(function t(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},t,e)}))()}}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"page-load-player-points"},[a("header",{staticClass:"page-title"},[e._v(e._s(e.route.name))]),e._v(" "),a("div",{staticClass:"page-content"},[a("div",{staticClass:"page-controls",attrs:{layout:"row","layout-align":"space-between center"}},[a("div",{attrs:{layout:"row","layout-align":"start center"}},[a("el-pagination",{attrs:{background:"",layout:"sizes, prev, pager, next","page-sizes":[10,25,50,100,150,200],"current-page":e.currPage,"page-size":e.currPageSize,total:e.data.length},on:{"update:currentPage":function(t){e.currPage=t},"update:current-page":function(t){e.currPage=t},"size-change":e.handleSizeChange}})],1),e._v(" "),a("div",{attrs:{layout:"row"}},[a("el-input",{attrs:{placeholder:"Search",clearable:""},model:{value:e.inputSearch,callback:function(t){e.inputSearch=t},expression:"inputSearch"}})],1)]),e._v(" "),a("el-table",{staticStyle:{"margin-top":"10px"},attrs:{data:e.data}},[a("el-table-column",{attrs:{label:"Account number",prop:"account_no",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"User name",prop:"username",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"Current points balance",prop:"running_total",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.running_total+" pts"))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"Action",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[a("el-tooltip",{attrs:{content:"Load",effect:"dark"}},[a("el-button",{attrs:{type:"primary"},on:{click:function(a){return e.openDialog("edit",t.row)}}},[a("span",[e._v("Load")])])],1)],1)]}}])})],1)],1),e._v(" "),a("el-dialog",{attrs:{title:e.dialogTitle,"custom-class":"page-dialog",visible:e.showDialog,"close-on-click-modal":!1,"close-on-press-escape":!1,"before-close":e.handleClose,width:"50%","append-to-body":""},on:{"update:visible":function(t){e.showDialog=t}}},[a("el-form",{attrs:{"label-position":"left","label-width":"140px",model:e.player}},[a("el-form-item",{attrs:{label:"Account No."}},[a("el-input",{model:{value:e.player.account_no,callback:function(t){e.$set(e.player,"account_no",t)},expression:"player.account_no"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Username"}},[a("el-input",{model:{value:e.player.username,callback:function(t){e.$set(e.player,"username",t)},expression:"player.username"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Amount"}},[a("el-input",{model:{value:e.player.amount,callback:function(t){e.$set(e.player,"amount",t)},expression:"player.amount"}})],1)],1),e._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.closeDialog}},[a("span",[e._v("Close")])]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.save}},[a("span",[e._v("Save")])])],1)],1)],1)},staticRenderFns:[]};var p=a("VU/8")(i,u,!1,function(e){a("cmUZ")},null,null);t.default=p.exports}});
//# sourceMappingURL=3.96b1b16e2b07d6c95e54.js.map