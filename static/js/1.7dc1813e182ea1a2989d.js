webpackJsonp([1],{"1EXa":function(e,t){},"6cD8":function(e,t){},AbuL:function(e,t){},DryE:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("Xxa5"),r=n.n(a),i=n("exGp"),s=n.n(i),o=n("Z9RD"),l=n("M4fF"),c=n.n(l),u=n("PJh5"),p=n.n(u),m=n("JMoU"),d={name:"PlayerSearch",props:["value"],data:function(){return{username:""}},methods:{querySearchAsync:function(e,t){var n=this;return s()(r.a.mark(function a(){var i;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,n.$store.dispatch("player/search",e);case 3:i=a.sent,t(i.map(function(e){return{id:e.id,value:e.username,contact:e.contact}})),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),n.$message({type:"error",message:a.t0.message});case 10:case"end":return a.stop()}},a,n,[[0,7]])}))()},clear:function(){this.$emit("input",null)},handleSelect:function(e){this.$emit("input",e.id),this.$emit("contact",e.contact)}}},b={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("el-autocomplete",{attrs:{"popper-class":"player-search-wrapper",placeholder:"Player","fetch-suggestions":e.querySearchAsync,clearable:""},on:{clear:e.clear,select:e.handleSelect},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})},staticRenderFns:[]};var f=n("VU/8")(d,b,!1,function(e){n("AbuL")},null,null).exports,y=n("0xDb"),h={name:"BetBox",mixins:[m.a],components:{PlayerSearch:f},props:["draw"],data:function(){return{player:{agent_id:null,player_id:null,contact_no:null,draw_id:null,max_accumulated:null,combinations:[]},playerRules:{player_id:[{required:!0,message:"The player field is required.",trigger:"blur"},{required:!0,message:"The player field is required.",trigger:"change"}],contact_no:[{required:!0,message:"Please input contact # (ex. 09101234567)",trigger:"blur"}]},entry:{bet:0,isramble:"S",input:""},entryRules:{input:[{required:!0,message:"Please input combination",trigger:"blur"}]},showDialog:!1,inProgress:!1}},computed:{maxInput:function(){var e=this.draw,t=e.numberformat,n=e.maxinput;return"0-9"==t?n:"0-99"==t?2*n:6},dialog:function(){return this.draw?{title:this.draw.name,date:p()().format("MMMM DD, YYYY")}:null},validSend:function(){return null!=this.player.player_id&&this.player.contact_no&&this.player.combinations.length},validClear:function(){return this.player.combinations.length>0},validQueue:function(){return this.entry.input.length==this.maxInput}},mounted:function(){this.reset()},methods:{handleClose:function(e){"function"==typeof e&&e()},setContact:function(e){this.player.contact_no=e},reset:function(){this.player={agent_id:this.$user.id,player_id:null,contact_no:null,draw_id:this.draw.id,max_accumulated:this.draw.max_accumulated,combinations:[]},this.entry={bet:this.draw.minimumbet,isramble:"3d_rambol"==this.draw.draw_type?"S":"R",input:""}},openDialog:function(){this.showDialog=!0},closeDialog:function(){this.showDialog=!1,this.reset()},isNumber:function(e){var t=(e=e||window.event).which?e.which:e.keyCode;if(!(t>31&&(t<48||t>57)&&46!==t))return!0;e.preventDefault()},removeEntry:function(e){var t=this.player.combinations.indexOf(e);t>-1&&this.player.combinations.splice(t,1)},clearEntries:function(){this.player.combinations=[]},handleEntry:function(){var e=this;return s()(r.a.mark(function t(){var n,a,i,s,o,l,u;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.draw,a=e.entry,"0-9"!=n.numberformat){t.next=22;break}if(i=e.entry.input.split(""),s=a.input,"3d_rambol"!=n.draw_type){t.next=21;break}if("R"!=a.isramble){t.next=18;break}if(o=y.a.Math.permutation(i),l=c.a.sortBy(o.map(function(e){return e.join("")})).join("|"),u=o.map(function(e){return{clientIdentifier:l,identifier:s,combination:e.join("-"),isramble:a.isramble,bet:a.bet}}),!(e.player.combinations.filter(function(e){return e.clientIdentifier==l}).length>0)){t.next=15;break}throw new Error("You already entered same ramble combination");case 15:e.player.combinations=e.player.combinations.concat(u);case 16:t.next=19;break;case 18:e.player.combinations.push({identifier:s,combination:i.join("-"),bet:a.bet,isramble:a.isramble});case 19:t.next=22;break;case 21:e.player.combinations.push({identifier:s,combination:i.join("-"),bet:a.bet,isramble:a.isramble});case 22:case"end":return t.stop()}},t,e)}))()},queue:function(){var e=this;return s()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.validQueue){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,e.handleEntry();case 5:e.entry.bet=e.draw.minimumbet,e.entry.input="",t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),e.$message({type:"error",message:t.t0.message});case 12:case"end":return t.stop()}},t,e,[[2,9]])}))()},send:function(){var e=this;return s()(r.a.mark(function t(){var n,a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.inProgress){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,e.inProgress=!0,t.next=6,e.$store.dispatch("bet/send",e.player);case 6:e.closeDialog(),e.$message({type:"success",message:"Bet successful!"}),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(2),(n=t.t0.response)&&(a=n.data)&&a.message?c.a.isArray(a.message)&&a.message.forEach(function(t){e.$message({type:"error",message:t})}):e.$message({type:"error",message:t.t0.message});case 14:e.inProgress=!1;case 15:case"end":return t.stop()}},t,e,[[2,10]])}))()}}},v={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"bet-box-wrapper"},[n("el-button",{staticClass:"draw",attrs:{type:"primary",size:"large"},on:{click:e.openDialog}},[n("label",[e._v(e._s(e.draw.name))])]),e._v(" "),n("el-dialog",{attrs:{"custom-class":"page-dialog bet-box-wrapper",visible:e.showDialog,"close-on-click-modal":!1,"close-on-press-escape":!1,"show-close":!1,"before-close":e.handleClose,width:"50%","append-to-body":""},on:{"update:visible":function(t){e.showDialog=t}}},[n("template",{slot:"title"},[e.dialog?n("div",{attrs:{layout:"row","layout-align":"space-between center"}},[n("header",{staticClass:"dialog-title"},[e._v(e._s(e.dialog.title))]),e._v(" "),n("div",[e._v(e._s(e.dialog.date))])]):e._e()]),e._v(" "),e.showDialog?n("section",[n("el-card",{staticClass:"player-bets",attrs:{shadow:"hover"}},[n("el-form",{ref:"player",attrs:{inline:!0,rules:e.playerRules,model:e.player}},[n("el-form-item",{attrs:{label:"Player",prop:"player_id"}},[n("player-search",{on:{contact:e.setContact},model:{value:e.player.player_id,callback:function(t){e.$set(e.player,"player_id",t)},expression:"player.player_id"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"Contact No.",prop:"contact_no"}},[n("el-input",{attrs:{maxlength:11},nativeOn:{keypress:function(t){return e.isNumber(t)}},model:{value:e.player.contact_no,callback:function(t){e.$set(e.player,"contact_no",t)},expression:"player.contact_no"}})],1)],1),e._v(" "),n("el-table",{staticStyle:{"margin-top":"10px"},attrs:{height:"285",loading:e.inProgress,data:e.player.combinations}},[n("el-table-column",{attrs:{label:"Number",prop:"combination",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{label:"Amount",prop:"bet",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s("R"==t.row.isramble?t.row.bet+"R":t.row.bet))])]}}],null,!1,2929983694)}),e._v(" "),n("el-table-column",{attrs:{label:"Action",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-popconfirm",{attrs:{"confirm-button-type":"danger","confirm-button-text":"Delete","cancel-button-text":"Cancel",icon:"el-icon-info","icon-color":"red",title:"Do you want remove this?"},on:{confirm:function(n){return e.removeEntry(t.row)}}},[n("el-button",{attrs:{slot:"reference",type:"danger",icon:"el-icon-delete"},slot:"reference"})],1)]}}],null,!1,4012774828)})],1),e._v(" "),n("div",{staticClass:"controls",attrs:{layout:"row","layout-align":"end center"}},[n("el-popconfirm",{attrs:{"confirm-button-type":"danger","confirm-button-text":"Clear","cancel-button-text":"Cancel",title:"Do you want clear all?"},on:{confirm:e.clearEntries}},[n("el-button",{attrs:{slot:"reference",type:"danger",disabled:e.inProgress||!e.validClear},slot:"reference"},[n("span",[e._v("Clear")])])],1),e._v(" "),n("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",disabled:!e.validSend,loading:e.inProgress},on:{click:e.send}},[n("span",[e._v("Send")])])],1)],1),e._v(" "),n("el-card",{staticClass:"bet-entry-wrapper",attrs:{shadow:"hover"}},[n("el-form",{attrs:{form:"entry",inline:!0,model:e.entry,rules:e.entryRules},nativeOn:{submit:function(t){return t.preventDefault(),e.queue(t)}}},[n("el-form-item",{attrs:{label:"Combinations",prop:"entry"}},[n("el-input",{attrs:{placeholder:"Combinations",maxlength:e.maxInput},nativeOn:{keypress:function(t){return e.isNumber(t)},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.queue(t)}},model:{value:e.entry.input,callback:function(t){e.$set(e.entry,"input",t)},expression:"entry.input"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"Amount"}},[n("el-input-number",{attrs:{"step-strictly":"",step:e.draw.step?e.draw.step:10,min:e.draw.minimumbet,max:e.draw.maxbet},model:{value:e.entry.bet,callback:function(t){e.$set(e.entry,"bet",t)},expression:"entry.bet"}})],1),e._v(" "),"3d_rambol"==e.draw.draw_type?n("el-form-item",{attrs:{label:"Ramble",prop:"isramble"}},[n("el-switch",{attrs:{"active-value":"R","inactive-value":"S"},model:{value:e.entry.isramble,callback:function(t){e.$set(e.entry,"isramble",t)},expression:"entry.isramble"}})],1):e._e()],1),e._v(" "),n("div",{attrs:{layout:"row","layout-align":"space-between center"}},[n("el-alert",{attrs:{closable:!1,"show-icon":""}},[n("span",[e._v(e._s("Minimum bet is "+e.draw.minimumbet+". Maximum bet is "+e.draw.maxbet+"."))])]),e._v(" "),n("el-divider",{attrs:{direction:"vertical"}}),e._v(" "),n("el-button",{attrs:{type:"primary",disabled:!e.validQueue},on:{click:e.queue}},[n("span",[e._v("Queue")])])],1)],1)],1):e._e(),e._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{disabled:e.inProgress},on:{click:e.closeDialog}},[n("span",[e._v("Close")])])],1)],2)],1)},staticRenderFns:[]};var g=n("VU/8")(h,v,!1,function(e){n("6cD8")},null,null).exports,_={name:o.a.key,components:{BetBox:g},data:function(){return{route:o.a,drawList:null,hasError:!1,isLoading:!0}},computed:{data:function(){return this.drawList?this.drawList.data:[]}},mounted:function(){var e=this;return s()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("bet/list");case 3:e.drawList=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),e.$message({type:"error",message:t.t0.message});case 9:e.isLoading=!1;case 10:case"end":return t.stop()}},t,e,[[0,6]])}))()},methods:{}},w={render:function(){var e=this.$createElement,t=this._self._c||e;return t("section",{directives:[{name:"loading",rawName:"v-loading",value:this.isLoading,expression:"isLoading"}],staticClass:"page page-bet",attrs:{layout:"column"}},[t("header",{staticClass:"page-title"},[this._v(this._s(this.route.name))]),this._v(" "),t("div",{staticClass:"page-content",attrs:{layout:"row"}},this._l(this.data,function(e,n){return t("bet-box",{key:n,attrs:{draw:e}})}),1)])},staticRenderFns:[]};var x=n("VU/8")(_,w,!1,function(e){n("1EXa")},null,null);t.default=x.exports}});
//# sourceMappingURL=1.7dc1813e182ea1a2989d.js.map