webpackJsonp([1],{"5zde":function(e,t,a){a("zQR9"),a("qyJz"),e.exports=a("FeBl").Array.from},AbuL:function(e,t){},DryE:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("Xxa5"),n=a.n(r),s=a("exGp"),o=a.n(s),l=a("wwI7"),c=a("//Fk"),u=a.n(c),d=a("lHA8"),m=a.n(d),p=a("Gu7T"),f=a.n(p),v=a("M4fF"),b=a.n(v),h=a("PJh5"),g=a.n(h),y=a("JMoU"),_={name:"PlayerSearch",props:["value"],data:function(){return{username:""}},methods:{querySearchAsync:function(e,t){var a=this;return o()(n.a.mark(function r(){var s;return n.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,a.$store.dispatch("player/search",e);case 3:s=r.sent,t(s.map(function(e){return{id:e.id,value:e.account_no+" - "+e.username,contact:e.contact}})),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),a.$message({type:"error",message:r.t0.message});case 10:case"end":return r.stop()}},r,a,[[0,7]])}))()},clear:function(){this.$emit("input",null)},handleSelect:function(e){this.$emit("input",e.id),this.$emit("contact",e.contact)}}},w={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("el-autocomplete",{attrs:{"popper-class":"player-search-wrapper",placeholder:"Player","fetch-suggestions":e.querySearchAsync,clearable:""},on:{clear:e.clear,select:e.handleSelect},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})},staticRenderFns:[]};var x=a("VU/8")(_,w,!1,function(e){a("AbuL")},null,null).exports,k=a("0xDb"),S={name:"BetBox",mixins:[y.a],components:{PlayerSearch:x},data:function(){return{draws:[],player:{agent_id:null,player_id:null,contact_no:null,combinations:[]},playerRules:{player_id:[{required:!0,message:"The player field is required.",trigger:"blur"},{required:!0,message:"The player field is required.",trigger:"change"}],contact_no:[{required:!0,message:"Please input contact # (ex. 09101234567)",trigger:"blur"},{required:!0,message:"Please input contact # (ex. 09101234567)",trigger:"change"}]},entry:{draw_id:null,bet:0,isramble:"S",input:""},entryRules:{input:[{required:!0,message:"Please input combination",trigger:"blur"}]},showDialog:!1,inProgress:!1,isLoading:!1}},computed:{draw:function(){var e=this;return this.entry.draw_id&&this.draws.length?this.draws.find(function(t){return t.id==e.entry.draw_id}):null},drawsMap:function(){return this.draws.reduce(function(e,t){return e[t.id]=t,e},{})},maxInput:function(){if(this.draw){var e=this.draw,t=e.numberformat;return e.maxinput*t.split("-")[1].length}return null},dialog:function(){return{date:g()().format("MMMM DD, YYYY")}},validSend:function(){return null!=this.player.player_id&&this.player.contact_no&&this.player.combinations.length},validClear:function(){return this.player.combinations.length>0},validQueue:function(){return this.entry.input.length==this.maxInput}},mounted:function(){var e=this;return o()(n.a.mark(function t(){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.reset();case 1:case"end":return t.stop()}},t,e)}))()},methods:{handleClose:function(e){this.inProgress||(this.reset(),"function"==typeof e&&e())},setContact:function(e){this.player.contact_no=e},reset:function(){this.player={agent_id:this.$user.id,player_id:null,contact_no:null,combinations:[]},this.entry={bet:null,isramble:"S",input:""}},openDialog:function(){this.showDialog=!0},closeDialog:function(){this.showDialog=!1,this.reset()},isNumber:function(e){var t=(e=e||window.event).which?e.which:e.keyCode;if(!(t>31&&(t<48||t>57)&&46!==t))return!0;e.preventDefault()},removeEntry:function(e){var t=this.player.combinations.indexOf(e);t>-1&&this.player.combinations.splice(t,1)},clearEntries:function(){this.player.combinations=[]},onDrawChange:function(){this.entry.draw_id?(this.entry.bet=this.draw.minimumbet,this.entry.isramble="S",this.entry.input=""):this.entry={bet:null,isramble:"S",input:""}},fetch:function(){var e=this;return o()(n.a.mark(function t(){var a,r;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.isLoading){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,e.isLoading=!0,t.next=6,e.$store.dispatch("bet/list");case 6:a=t.sent,r=a.data,e.draws=r,r.length?e.openDialog():e.$message({type:"warning",message:"No active draws."}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(2),e.$message({type:"error",message:t.t0.message});case 15:e.isLoading=!1;case 16:case"end":return t.stop()}},t,e,[[2,12]])}))()},handleEntry:function(){var e=this;return o()(n.a.mark(function t(){var a,r,s,i,o,l,c,u,d,m;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:try{a=e.draw,r=e.entry,s=a.numberformat.split("-")[1].length,i=k.a.Format.combination(e.entry.input,s),o=r.input,l=a.id,c=a.name,u=a.max_accumulated,"3d_rambol"==a.draw_type&&"R"==r.isramble?(d=k.a.Math.permutation(i),m=d.map(function(e){return{identifier:o,combination:e.join("-"),isramble:r.isramble,bet:r.bet}}),e.player.combinations.push({draw_name:c,draw_id:l,identifier:o,permuted:m,max_accumulated:u,combination:i.join("-"),isramble:r.isramble,bet:r.bet})):e.player.combinations.push({draw_name:c,draw_id:l,identifier:o,permuted:[],max_accumulated:u,combination:i.join("-"),bet:r.bet,isramble:r.isramble})}catch(t){e.$message({type:"error",message:t.message})}case 1:case"end":return t.stop()}},t,e)}))()},queue:function(){var e=this;return o()(n.a.mark(function t(){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.validQueue){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,e.handleEntry();case 5:e.entry.input="",t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),e.$message({type:"error",message:t.t0.message});case 11:case"end":return t.stop()}},t,e,[[2,8]])}))()},checkValidity:function(){var e=this;return o()(n.a.mark(function t(){var a,r;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("server");case 2:return a=t.sent,(r=e.player.combinations).forEach(function(t){var r=e.drawsMap[t.draw_id],n=g()(a.server).format("HH:mm"),s=g()(r.timetoclose,"HH:mm:ss").format("HH:mm");t.draw=r.name,t.valid=n<s}),t.abrupt("return",{isValid:0==r.filter(function(e){return!e.valid}).length,invalid:[].concat(f()(new m.a(r.filter(function(e){return!e.valid}).map(function(e){return e.draw}))))});case 6:case"end":return t.stop()}},t,e)}))()},handleErroMessage:function(e){var t=this;return o()(n.a.mark(function a(){return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",new u.a(function(a){setTimeout(function(){t.$notify.error({title:"Error",duration:0,message:e}),a()},250)}));case 1:case"end":return a.stop()}},a,t)}))()},send:function(){var e=this;return o()(n.a.mark(function t(){var a,r,s,o,l,c;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.inProgress){t.next=2;break}return t.abrupt("return");case 2:return e.inProgress=!0,t.next=5,e.checkValidity();case 5:if(!(a=t.sent).isValid){t.next=38;break}return t.prev=7,t.next=10,e.$store.dispatch("bet/send",e.player);case 10:e.closeDialog(),e.$emit("done"),e.$message({type:"success",message:"Bet successful!"}),t.next=36;break;case 15:if(t.prev=15,t.t0=t.catch(7),!(r=t.t0.response)){t.next=35;break}if(!(s=r.data)||!s.message){t.next=32;break}if(!b.a.isArray(s.message)){t.next=30;break}0;case 23:if(!s.message[i]){t.next=30;break}return o=s.message[i],t.next=27,e.handleErroMessage(o);case 27:0,t.next=23;break;case 30:t.next=33;break;case 32:e.$message({type:"error",message:t.t0.message});case 33:t.next=36;break;case 35:e.$message({type:"error",message:t.t0.message});case 36:t.next=46;break;case 38:l=0;case 39:if(!a.invalid[l]){t.next=46;break}return c=a.invalid[l],t.next=43,e.handleErroMessage(c+" is already closed.");case 43:l++,t.next=39;break;case 46:e.inProgress=!1;case 47:case"end":return t.stop()}},t,e,[[7,15]])}))()}}},D={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"bet-box-wrapper"},[a("el-button",{staticClass:"draw",attrs:{type:"primary",loading:e.isLoading},on:{click:e.fetch}},[a("span",[e._v("Add bet")])]),e._v(" "),a("el-dialog",{attrs:{"custom-class":"page-dialog bet-box-wrapper",visible:e.showDialog,"close-on-click-modal":!1,"close-on-press-escape":!1,"before-close":e.handleClose,width:"50%","append-to-body":""},on:{"update:visible":function(t){e.showDialog=t}}},[a("template",{slot:"title"},[e.dialog?a("div",{attrs:{layout:"row","layout-align":"space-between center"}},[a("div",[e._v(e._s(e.dialog.date))])]):e._e()]),e._v(" "),e.showDialog?a("section",[a("el-card",{staticClass:"player-bets",attrs:{shadow:"hover"}},[a("el-form",{ref:"player",attrs:{inline:!0,rules:e.playerRules,model:e.player}},[a("el-form-item",{attrs:{label:"Player",prop:"player_id"}},[a("player-search",{on:{contact:e.setContact},model:{value:e.player.player_id,callback:function(t){e.$set(e.player,"player_id",t)},expression:"player.player_id"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Contact #",prop:"contact_no"}},[a("el-input",{attrs:{maxlength:11},nativeOn:{keypress:function(t){return e.isNumber(t)}},model:{value:e.player.contact_no,callback:function(t){e.$set(e.player,"contact_no",t)},expression:"player.contact_no"}})],1)],1),e._v(" "),a("el-table",{staticStyle:{"margin-top":"10px"},attrs:{height:"285",loading:e.inProgress,data:e.player.combinations}},[a("el-table-column",{attrs:{label:"Draw",prop:"draw_name",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[a("span",[e._v(e._s(t.row.draw_name))])])]}}],null,!1,851362373)}),e._v(" "),a("el-table-column",{attrs:{label:"Numbers",prop:"combination",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.combination))]),e._v(" "),"R"==t.row.isramble?a("span",[e._v("R")]):e._e()]}}],null,!1,678562388)}),e._v(" "),a("el-table-column",{attrs:{label:"Amount",prop:"bet",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("span",{directives:[{name:"money-format",rawName:"v-money-format",value:e.row.bet,expression:"scope.row.bet"}]})]}}],null,!1,355568182)}),e._v(" "),a("el-table-column",{attrs:{label:"Actions",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-popconfirm",{attrs:{"confirm-button-type":"danger","confirm-button-text":"Delete","cancel-button-text":"Cancel",icon:"el-icon-info","icon-color":"red",title:"Do you want remove this?"},on:{confirm:function(a){return e.removeEntry(t.row)}}},[a("el-button",{attrs:{slot:"reference",disabled:e.isLoading||e.inProgress,type:"danger",icon:"el-icon-delete"},slot:"reference"})],1)]}}],null,!1,3131845484)})],1),e._v(" "),a("div",{staticClass:"controls",attrs:{layout:"row","layout-align":"end center"}},[a("el-popconfirm",{attrs:{"confirm-button-type":"danger","confirm-button-text":"Clear","cancel-button-text":"Cancel",title:"Do you want clear all?"},on:{confirm:e.clearEntries}},[a("el-button",{attrs:{slot:"reference",type:"danger",disabled:e.inProgress||!e.validClear},slot:"reference"},[a("span",[e._v("Clear")])])],1),e._v(" "),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",disabled:!e.validSend,loading:e.inProgress},on:{click:e.send}},[a("span",[e._v("Send")])])],1)],1),e._v(" "),a("el-card",{staticClass:"bet-entry-wrapper",attrs:{shadow:"hover"}},[a("el-form",{attrs:{form:"entry",inline:!0,model:e.entry,rules:e.entryRules},nativeOn:{submit:function(t){return t.preventDefault(),e.queue(t)}}},[a("el-form-item",{attrs:{label:"Draw"}},[a("el-select",{attrs:{placeholder:"Select draw",filterable:"",clearable:""},on:{change:e.onDrawChange},model:{value:e.entry.draw_id,callback:function(t){e.$set(e.entry,"draw_id",t)},expression:"entry.draw_id"}},e._l(e.draws,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1),e._v(" "),e.draw?a("el-form-item",{attrs:{label:"Combinations",prop:"entry"}},[a("el-input",{key:e.entry.draw_id,attrs:{placeholder:"Combinations",maxlength:e.maxInput},nativeOn:{keypress:function(t){return e.isNumber(t)},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.queue(t)}},model:{value:e.entry.input,callback:function(t){e.$set(e.entry,"input",t)},expression:"entry.input"}})],1):e._e(),e._v(" "),e.draw?a("el-form-item",{attrs:{label:"Amount"}},[a("el-input-number",{key:e.entry.draw_id,attrs:{"step-strictly":"",step:e.draw.amount_increment,min:e.draw.minimumbet,max:e.draw.maxbet},model:{value:e.entry.bet,callback:function(t){e.$set(e.entry,"bet",t)},expression:"entry.bet"}})],1):e._e(),e._v(" "),e.draw&&"3d_rambol"==e.draw.draw_type?a("el-form-item",{attrs:{label:"Ramble",prop:"isramble"}},[a("el-switch",{key:e.entry.draw_id,attrs:{"active-value":"R","inactive-value":"S"},model:{value:e.entry.isramble,callback:function(t){e.$set(e.entry,"isramble",t)},expression:"entry.isramble"}})],1):e._e()],1),e._v(" "),e.draw?a("div",{attrs:{layout:"row","layout-align":"space-between center"}},[a("el-alert",{attrs:{closable:!1,"show-icon":""}},[a("span",[e._v("Minimum bet is")]),e._v(" "),a("span",{directives:[{name:"money-format",rawName:"v-money-format",value:e.draw.minimumbet,expression:"draw.minimumbet"}]}),e._v(" "),a("span",[e._v("and maximum bet is")]),e._v(" "),a("span",{directives:[{name:"money-format",rawName:"v-money-format",value:e.draw.maxbet,expression:"draw.maxbet"}]}),e._v(" "),a("span",[e._v("for this draw.")])]),e._v(" "),a("el-divider",{attrs:{direction:"vertical"}}),e._v(" "),a("el-button",{attrs:{type:"primary",disabled:!e.validQueue},on:{click:e.queue}},[a("span",[e._v("Queue")])])],1):e._e()],1)],1):e._e()],2)],1)},staticRenderFns:[]};var $=a("VU/8")(S,D,!1,function(e){a("GDvy")},null,null).exports,C=a("4MVC"),M=a("Z9RD"),P={name:M.a.key,mixins:[l.a],components:{BetBox:$,DrawDropdown:C.a},data:function(){return{intervalTimeRef:null,intervalTime:null,action:null,list:{data:[],recordsFiltered:0,totalSales:0},filter:{draw:[],daterange:null,status:null},isLoading:!0,route:M.a}},computed:{currentTime:function(){return this.intervalTime},tableHeight:function(){return window.innerHeight-250}},destroyed:function(){clearInterval(this.intervalTimeRef)},mounted:function(){var e=this;return o()(n.a.mark(function t(){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fetch();case 2:return t.next=4,e.getTime();case 4:e.intervalTime=t.sent,e.intervalTimeRef=setInterval(o()(n.a.mark(function t(){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getTime();case 2:e.intervalTime=t.sent;case 3:case"end":return t.stop()}},t,e)})),6e4);case 6:case"end":return t.stop()}},t,e)}))()},methods:{getTime:function(){var e=this;return o()(n.a.mark(function t(){var a;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("server");case 2:return a=t.sent,t.abrupt("return",new Date(a.server).getTime());case 4:case"end":return t.stop()}},t,e)}))()},fetch:function(e){var t=this;return o()(n.a.mark(function a(){var r,s,i;return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t.isLoading=!0,a.prev=1,e&&(t.currPage=1),r={start:(t.currPage-1)*t.currPageSize,length:t.currPageSize,"search[value]":t.search,"columns[0][data]":"full_name","columns[0][name]":"full_name","columns[0][searchable]":!0,"columns[0][orderable]":!0,"columns[0][search][value]":"","columns[0][search][regex]":!0,"columns[1][data]":"username","columns[1][name]":"username","columns[1][searchable]":!0,"columns[1][orderable]":!0,"columns[1][search][value]":"","columns[1][search][regex]":!0,"columns[2][data]":"contact_no","columns[2][name]":"contact_no","columns[2][searchable]":!0,"columns[2][orderable]":!0,"columns[2][search][value]":"","columns[2][search][regex]":!0,"columns[3][data]":"referenceno","columns[3][name]":"referenceno","columns[3][searchable]":!0,"columns[3][orderable]":!0,"columns[3][search][value]":"","columns[3][search][regex]":!0,"columns[4][data]":"combination","columns[4][name]":"combination","columns[4][searchable]":!0,"columns[4][orderable]":!0,"columns[4][search][value]":"","columns[4][search][regex]":!0,"columns[5][data]":"bet","columns[5][name]":"bet","columns[5][searchable]":!0,"columns[5][orderable]":!0,"columns[5][search][value]":"","columns[5][search][regex]":!0},t.filter.daterange&&(s="MM-DD-YYYY",r.from=moment(t.filter.daterange[0]).format(s),r.to=moment(t.filter.daterange[1]).format(s)),t.filter.draw.length&&(r.draw=t.filter.draw.join(",")),t.filter.status&&(r.status=t.filter.status),a.next=9,t.$store.dispatch("bet_history/list",r);case 9:(i=a.sent).totalSales&&(t.list.totalSales=i.totalSales),t.list.totalSales=i.totalSales,t.list.data=i.data.map(function(e){return e.time=new Date(e.drawdate).getTime(),e}),t.list.recordsFiltered=i.recordsFiltered,a.next=19;break;case 16:a.prev=16,a.t0=a.catch(1),t.$message({type:"error",message:a.t0.message});case 19:t.isLoading=!1;case 20:case"end":return a.stop()}},a,t,[[1,16]])}))()},voidBet:function(e){var t=this;return o()(n.a.mark(function a(){return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!t.isLoading){a.next=2;break}return a.abrupt("return");case 2:return t.isLoading=!0,a.prev=3,a.next=6,t.$store.dispatch("bet_history/void",e.id);case 6:return a.next=8,t.fetch();case 8:a.next=13;break;case 10:a.prev=10,a.t0=a.catch(3),t.$message({type:"error",message:a.t0.message});case 13:t.isLoading=!1;case 14:case"end":return a.stop()}},a,t,[[3,10]])}))()}}},T={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],staticClass:"page page-bet"},[a("header",{staticClass:"page-title"},[e._v(e._s(e.route.name))]),e._v(" "),a("div",{staticClass:"page-sub"},[a("span",[e._v("Total sales:")]),e._v(" "),a("el-tag",{directives:[{name:"money-format",rawName:"v-money-format",value:this.list.totalSales,expression:"this.list.totalSales"}]})],1),e._v(" "),a("div",{staticClass:"page-content",attrs:{layout:"column","layout-align":"space-between",flex:""}},[a("div",[a("div",{staticClass:"page-controls",attrs:{layout:"row","layout-align":"space-between end"}},[a("div",{attrs:{layout:"column","layout-align":"end"}},[a("bet-box",{on:{done:function(t){return e.fetch(!0)}}})],1),e._v(" "),a("div",{staticClass:"filters",attrs:{layout:"row"}},[a("div",{attrs:{flex:""}},[e._m(0),e._v(" "),a("el-select",{attrs:{placeholder:"Select status",clearable:""},on:{change:e.fetch},model:{value:e.filter.status,callback:function(t){e.$set(e.filter,"status",t)},expression:"filter.status"}},e._l(["Successful","Void"],function(e,t){return a("el-option",{key:t,attrs:{label:e,value:e}})}),1)],1),e._v(" "),a("div",{attrs:{flex:""}},[e._m(1),e._v(" "),a("draw-dropdown",{on:{change:e.fetch},model:{value:e.filter.draw,callback:function(t){e.$set(e.filter,"draw",t)},expression:"filter.draw"}})],1),e._v(" "),a("div",{attrs:{flex:""}},[a("label",{staticClass:"label-input"},[a("span",[e._v("Dates")]),e._v(" "),a("el-date-picker",{attrs:{type:"daterange","range-separator":"To","start-placeholder":"Date from","end-placeholder":"Date to"},on:{change:e.fetch},model:{value:e.filter.daterange,callback:function(t){e.$set(e.filter,"daterange",t)},expression:"filter.daterange"}})],1)]),e._v(" "),a("div",{attrs:{flex:""}},[a("label",{staticClass:"label-input"},[a("span",[e._v("Keyword")]),e._v(" "),a("el-input",{attrs:{placeholder:"Search...",clearable:""},on:{input:e.onInput},model:{value:e.inputSearch,callback:function(t){e.inputSearch=t},expression:"inputSearch"}})],1)])])]),e._v(" "),a("el-table",{staticStyle:{"margin-top":"10px"},attrs:{"max-height":e.tableHeight,data:e.list.data}},[a("el-table-column",{attrs:{label:"Agent/sub-agent",prop:"full_name",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"Player",prop:"username",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"Contact #",prop:"contact_no",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"Reference #",prop:"referenceno",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"Draw",prop:"draw_name",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"Combination",prop:"combination",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.combination))]),e._v(" "),"R"==t.row.isramble?a("span",[e._v("R")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"Bet amount",prop:"bet",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("span",{directives:[{name:"money-format",rawName:"v-money-format",value:e.row.bet,expression:"scope.row.bet"}]})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"Date/time",prop:"drawdate",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("span",{directives:[{name:"date-format",rawName:"v-date-format",value:{date:e.row.drawdate,format:"MMM DD, YYYY hh:mm a"},expression:"{ date: scope.row.drawdate, format: 'MMM DD, YYYY hh:mm a' }"}]})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"Status",prop:"status",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return["Void"!=t.row.status&&e.currentTime-t.row.time<=6e5?a("el-button",{attrs:{type:"danger"},on:{click:function(a){return e.voidBet(t.row)}}},[a("span",[e._v("Void")])]):"Void"==t.row.status?a("el-tag",{attrs:{type:"danger"}},[e._v("Void")]):a("el-tag",{attrs:{type:"success"}},[e._v("Successful")])]}}])})],1)],1),e._v(" "),a("div",{attrs:{layout:"row","layout-align":"center center"}},[a("el-pagination",{attrs:{background:"",layout:"sizes, prev, pager, next","page-sizes":[10,25,50,100,150,200],"current-page":e.currPage,"page-size":e.currPageSize,total:e.list.recordsFiltered},on:{"update:currentPage":function(t){e.currPage=t},"update:current-page":function(t){e.currPage=t},"current-change":e.fetch,"size-change":e.handleSizeChange}}),e._v(" "),a("div",{staticStyle:{"font-family":"'Robot Light'"}},[a("el-tag",{attrs:{type:"info"}},[e._v(e._s("Total: "+e.list.recordsFiltered))])],1)],1)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"label-input"},[t("span",[this._v("Status")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"label-input"},[t("span",[this._v("Draw")])])}]};var R=a("VU/8")(P,T,!1,function(e){a("dmxm")},null,null);t.default=R.exports},GDvy:function(e,t){},Gu7T:function(e,t,a){"use strict";t.__esModule=!0;var r,n=a("c/Tr"),s=(r=n)&&r.__esModule?r:{default:r};t.default=function(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return(0,s.default)(e)}},"c/Tr":function(e,t,a){e.exports={default:a("5zde"),__esModule:!0}},dmxm:function(e,t){},fBQ2:function(e,t,a){"use strict";var r=a("evD5"),n=a("X8DO");e.exports=function(e,t,a){t in e?r.f(e,t,n(0,a)):e[t]=a}},qyJz:function(e,t,a){"use strict";var r=a("+ZMJ"),n=a("kM2E"),s=a("sB3e"),i=a("msXi"),o=a("Mhyx"),l=a("QRG4"),c=a("fBQ2"),u=a("3fs2");n(n.S+n.F*!a("dY0y")(function(e){Array.from(e)}),"Array",{from:function(e){var t,a,n,d,m=s(e),p="function"==typeof this?this:Array,f=arguments.length,v=f>1?arguments[1]:void 0,b=void 0!==v,h=0,g=u(m);if(b&&(v=r(v,f>2?arguments[2]:void 0,2)),void 0==g||p==Array&&o(g))for(a=new p(t=l(m.length));t>h;h++)c(a,h,b?v(m[h],h):m[h]);else for(d=g.call(m),a=new p;!(n=d.next()).done;h++)c(a,h,b?i(d,v,[n.value,h],!0):n.value);return a.length=h,a}})}});
//# sourceMappingURL=1.f7c7bb33680175c5d22c.js.map