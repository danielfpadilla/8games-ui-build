webpackJsonp([1],{"4MVC":function(e,t,a){"use strict";var n=a("Xxa5"),r=a.n(n),s=a("exGp"),i=a.n(s),l={name:"DrawDropdown",props:["value"],data:function(){return{isDropdownShown:!1,options:[],values:[],valuesTemp:[]}},created:function(){var e=this;return i()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("draws/get");case 2:e.options=t.sent;case 3:case"end":return t.stop()}},t,e)}))()},methods:{reset:function(){this.valuesTemp=this.values},onDropdown:function(e){(this.isDropdownShown=e,e)?this.reset():this.valuesTemp.sort().join("|")!==this.values.sort().join("|")&&this.onChange()},onChange:function(){this.$emit("input",this.values),this.$emit("change")},onClear:function(){this.onChange(),this.reset()},onRemoveTag:function(){this.isDropdownShown||(this.reset(),this.onChange())}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-select",{staticClass:"draw-dropdown-wrapper",attrs:{multiple:"","collapse-tags":"",clearable:"",placeholder:"Select draw"},on:{"remove-tag":e.onRemoveTag,clear:e.onClear,"visible-change":e.onDropdown},model:{value:e.values,callback:function(t){e.values=t},expression:"values"}},e._l(e.options,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)},staticRenderFns:[]};var c=a("VU/8")(l,o,!1,function(e){a("8z3h")},null,null);t.a=c.exports},"5zde":function(e,t,a){a("zQR9"),a("qyJz"),e.exports=a("FeBl").Array.from},"8z3h":function(e,t){},AbuL:function(e,t){},DryE:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("Xxa5"),r=a.n(n),s=a("exGp"),i=a.n(s),l=a("PJh5"),o=a.n(l),c=a("MxUf"),u=a("wwI7"),d=a("lHA8"),p=a.n(d),m=a("Gu7T"),f=a.n(m),v=(a("M4fF"),a("JMoU")),h={name:"PlayerSearch",props:["value"],data:function(){return{username:""}},methods:{querySearchAsync:function(e,t){var a=this;return i()(r.a.mark(function n(){var s;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.$store.dispatch("player/search",e);case 3:s=n.sent,t(s.map(function(e){return{id:e.id,value:e.account_no+" - "+e.username,contact:e.contact}})),n.next=9;break;case 7:n.prev=7,n.t0=n.catch(0);case 9:case"end":return n.stop()}},n,a,[[0,7]])}))()},clear:function(){this.$emit("input",null)},handleSelect:function(e){this.$emit("input",e.id),this.$emit("contact",e.contact)}}},b={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("el-autocomplete",{attrs:{"popper-class":"player-search-wrapper",placeholder:"Player","fetch-suggestions":e.querySearchAsync,clearable:""},on:{clear:e.clear,select:e.handleSelect},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})},staticRenderFns:[]};var g=a("VU/8")(h,b,!1,function(e){a("AbuL")},null,null).exports,y=a("0xDb"),w={name:"BetBox",mixins:[v.a,c.a],components:{PlayerSearch:g},data:function(){return{draws:[],player:{agent_id:null,player_id:null,contact_no:null,combinations:[]},playerRules:{player_id:[{required:!0,message:"The player field is required.",trigger:"blur"},{required:!0,message:"The player field is required.",trigger:"change"}],contact_no:[{required:!0,message:"Please input contact # (ex. 09101234567)",trigger:"blur"},{required:!0,message:"Please input contact # (ex. 09101234567)",trigger:"change"}]},entry:{draw_id:null,bet:0,isramble:"S",input:""},entryRules:{input:[{required:!0,message:"Please input combination",trigger:"blur"}]},showDialog:!1,inProgress:!1,isLoading:!1}},computed:{draw:function(){var e=this;return this.entry.draw_id&&this.draws.length?this.draws.find(function(t){return t.id==e.entry.draw_id}):null},drawsMap:function(){return this.draws.reduce(function(e,t){return e[t.id]=t,e},{})},maxInput:function(){if(this.draw){var e=this.draw,t=e.numberformat;return e.maxinput*t.split("-")[1].length}return null},dialog:function(){return{date:o()().format("MMMM DD, YYYY")}},validSend:function(){return null!=this.player.player_id&&this.player.contact_no&&this.player.combinations.length},validClear:function(){return this.player.combinations.length>0},validQueue:function(){return this.entry.input.length==this.maxInput}},mounted:function(){var e=this;return i()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.reset();case 1:case"end":return t.stop()}},t,e)}))()},methods:{handleClose:function(e){this.inProgress||(this.reset(),"function"==typeof e&&e())},setContact:function(e){this.player.contact_no=e},reset:function(){this.player={agent_id:this.$user.id,player_id:null,contact_no:null,combinations:[]},this.entry={bet:null,isramble:"S",input:""}},openDialog:function(){this.showDialog=!0},closeDialog:function(){this.showDialog=!1,this.reset()},isNumber:function(e){var t=(e=e||window.event).which?e.which:e.keyCode;if(!(t>31&&(t<48||t>57)&&46!==t))return!0;e.preventDefault()},removeEntry:function(e){var t=this.player.combinations.indexOf(e);t>-1&&this.player.combinations.splice(t,1)},clearEntries:function(){this.player.combinations=[]},onDrawChange:function(){this.entry.draw_id?(this.entry.bet=this.draw.minimumbet,this.entry.isramble="S",this.entry.input=""):this.entry={bet:null,isramble:"S",input:""}},clearNotifs:function(){this.notifs.forEach(function(e){e.close()}),this.notifs=[]},fetch:function(){var e=this;return i()(r.a.mark(function t(){var a,n;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.isLoading){t.next=2;break}return t.abrupt("return");case 2:return e.clearNotifs(),t.prev=3,e.isLoading=!0,t.next=7,e.$store.dispatch("bet/list");case 7:a=t.sent,n=a.data,e.draws=n,n.length?e.openDialog():e.handleMessage({message:"No active draws.",type:"info"}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(3),e.handleError(t.t0);case 16:e.isLoading=!1;case 17:case"end":return t.stop()}},t,e,[[3,13]])}))()},handleEntry:function(){var e=this;return i()(r.a.mark(function t(){var a,n,s,i,l,o,c,u,d,p;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:try{a=e.draw,n=e.entry,s=a.numberformat.split("-")[1].length,i=y.default.Format.combination(e.entry.input,s),l=n.input,o=a.id,c=a.name,u=a.max_accumulated,"3d_rambol"==a.draw_type&&"R"==n.isramble?(d=y.default.Math.permutation(i),p=d.map(function(e){return{identifier:l,combination:e.join("-"),isramble:n.isramble,bet:n.bet}}),e.player.combinations.push({draw_name:c,draw_id:o,identifier:l,permuted:p,max_accumulated:u,combination:i.join("-"),isramble:n.isramble,bet:n.bet})):e.player.combinations.push({draw_name:c,draw_id:o,identifier:l,permuted:[],max_accumulated:u,combination:i.join("-"),bet:n.bet,isramble:n.isramble})}catch(t){e.handleError(t)}case 1:case"end":return t.stop()}},t,e)}))()},queue:function(){var e=this;return i()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.validQueue){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,e.handleEntry();case 5:e.entry.input="",t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),e.handleError(t.t0);case 11:case"end":return t.stop()}},t,e,[[2,8]])}))()},checkValidity:function(){var e=this;return i()(r.a.mark(function t(){var a,n;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("server");case 2:return a=t.sent,(n=e.player.combinations).forEach(function(t){var n=e.drawsMap[t.draw_id],r=o()(a.server).format("HH:mm"),s=o()(n.timetoclose,"HH:mm:ss").format("HH:mm");t.draw=n.name,t.valid=r<s}),t.abrupt("return",{isValid:0==n.filter(function(e){return!e.valid}).length,invalid:[].concat(f()(new p.a(n.filter(function(e){return!e.valid}).map(function(e){return e.draw}))))});case 6:case"end":return t.stop()}},t,e)}))()},send:function(){var e=this;return i()(r.a.mark(function t(){var a,n,s;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.inProgress){t.next=2;break}return t.abrupt("return");case 2:return e.inProgress=!0,t.next=5,e.checkValidity();case 5:if(!(a=t.sent).isValid){t.next=20;break}return t.prev=7,t.next=10,e.$store.dispatch("bet/send",e.player);case 10:e.closeDialog(),e.$emit("done"),e.handleMessage({message:"Bet successful.",type:"success"}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(7),e.handleError(t.t0);case 18:t.next=28;break;case 20:n=0;case 21:if(!a.invalid[n]){t.next=28;break}return s=a.invalid[n],t.next=25,e.handleMessage({message:s+" is already closed.",type:"error"});case 25:n++,t.next=21;break;case 28:e.inProgress=!1;case 29:case"end":return t.stop()}},t,e,[[7,15]])}))()}}},_={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"bet-box-wrapper"},[a("el-button",{staticClass:"draw",attrs:{type:"primary",loading:e.isLoading},on:{click:e.fetch}},[a("span",[e._v("Add bet")])]),e._v(" "),a("el-dialog",{attrs:{"custom-class":"page-dialog bet-box-wrapper",visible:e.showDialog,"close-on-click-modal":!1,"close-on-press-escape":!1,"before-close":e.handleClose,width:"50%","append-to-body":""},on:{"update:visible":function(t){e.showDialog=t}}},[a("template",{slot:"title"},[e.dialog?a("div",{attrs:{layout:"row","layout-align":"space-between center"}},[a("div",[e._v(e._s(e.dialog.date))])]):e._e()]),e._v(" "),e.showDialog?a("section",[a("el-card",{staticClass:"player-bets",attrs:{shadow:"hover"}},[a("el-form",{ref:"player",attrs:{inline:!0,rules:e.playerRules,model:e.player}},[a("el-form-item",{attrs:{label:"Player",prop:"player_id"}},[a("player-search",{on:{contact:e.setContact},model:{value:e.player.player_id,callback:function(t){e.$set(e.player,"player_id",t)},expression:"player.player_id"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Contact #",prop:"contact_no"}},[a("el-input",{attrs:{maxlength:11},nativeOn:{keypress:function(t){return e.isNumber(t)}},model:{value:e.player.contact_no,callback:function(t){e.$set(e.player,"contact_no",t)},expression:"player.contact_no"}})],1)],1),e._v(" "),a("el-table",{staticStyle:{"margin-top":"10px"},attrs:{height:"285",loading:e.inProgress,data:e.player.combinations}},[a("el-table-column",{attrs:{label:"Draw",prop:"draw_name",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[a("span",[e._v(e._s(t.row.draw_name))])])]}}],null,!1,851362373)}),e._v(" "),a("el-table-column",{attrs:{label:"Numbers",prop:"combination",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.combination))]),e._v(" "),"R"==t.row.isramble?a("span",[e._v("R")]):e._e()]}}],null,!1,678562388)}),e._v(" "),a("el-table-column",{attrs:{label:"Amount",prop:"bet",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("span",{directives:[{name:"money-format",rawName:"v-money-format",value:e.row.bet,expression:"scope.row.bet"}]})]}}],null,!1,355568182)}),e._v(" "),a("el-table-column",{attrs:{label:"Actions",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-popconfirm",{attrs:{"confirm-button-type":"danger","confirm-button-text":"Delete","cancel-button-text":"Cancel",icon:"el-icon-info","icon-color":"red",title:"Do you want remove this?"},on:{confirm:function(a){return e.removeEntry(t.row)}}},[a("el-button",{attrs:{slot:"reference",disabled:e.isLoading||e.inProgress,type:"danger",icon:"el-icon-delete"},slot:"reference"})],1)]}}],null,!1,3131845484)})],1),e._v(" "),a("div",{staticClass:"controls",attrs:{layout:"row","layout-align":"end center"}},[a("el-popconfirm",{attrs:{"confirm-button-type":"danger","confirm-button-text":"Clear","cancel-button-text":"Cancel",title:"Do you want clear all?"},on:{confirm:e.clearEntries}},[a("el-button",{attrs:{slot:"reference",type:"danger",disabled:e.inProgress||!e.validClear},slot:"reference"},[a("span",[e._v("Clear")])])],1),e._v(" "),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",disabled:!e.validSend,loading:e.inProgress},on:{click:e.send}},[a("span",[e._v("Send")])])],1)],1),e._v(" "),a("el-card",{staticClass:"bet-entry-wrapper",attrs:{shadow:"hover"}},[a("el-form",{attrs:{form:"entry",inline:!0,model:e.entry,rules:e.entryRules},nativeOn:{submit:function(t){return t.preventDefault(),e.queue(t)}}},[a("el-form-item",{attrs:{label:"Draw"}},[a("el-select",{attrs:{placeholder:"Select draw",filterable:"",clearable:""},on:{change:e.onDrawChange},model:{value:e.entry.draw_id,callback:function(t){e.$set(e.entry,"draw_id",t)},expression:"entry.draw_id"}},e._l(e.draws,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1),e._v(" "),e.draw?a("el-form-item",{attrs:{label:"Combinations",prop:"entry"}},[a("el-input",{key:e.entry.draw_id,attrs:{placeholder:"Combinations",maxlength:e.maxInput},nativeOn:{keypress:function(t){return e.isNumber(t)},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.queue(t)}},model:{value:e.entry.input,callback:function(t){e.$set(e.entry,"input",t)},expression:"entry.input"}})],1):e._e(),e._v(" "),e.draw?a("el-form-item",{attrs:{label:"Amount"}},[a("el-input-number",{key:e.entry.draw_id,attrs:{"step-strictly":"",step:e.draw.amount_increment,min:e.draw.minimumbet,max:e.draw.maxbet},model:{value:e.entry.bet,callback:function(t){e.$set(e.entry,"bet",t)},expression:"entry.bet"}})],1):e._e(),e._v(" "),e.draw&&"3d_rambol"==e.draw.draw_type?a("el-form-item",{attrs:{label:"Ramble",prop:"isramble"}},[a("el-switch",{key:e.entry.draw_id,attrs:{"active-value":"R","inactive-value":"S"},model:{value:e.entry.isramble,callback:function(t){e.$set(e.entry,"isramble",t)},expression:"entry.isramble"}})],1):e._e()],1),e._v(" "),e.draw?a("div",{attrs:{layout:"row","layout-align":"space-between center"}},[a("el-alert",{attrs:{closable:!1,"show-icon":""}},[a("span",[e._v("Minimum bet is")]),e._v(" "),a("span",{directives:[{name:"money-format",rawName:"v-money-format",value:e.draw.minimumbet,expression:"draw.minimumbet"}]}),e._v(" "),a("span",[e._v("and maximum bet is")]),e._v(" "),a("span",{directives:[{name:"money-format",rawName:"v-money-format",value:e.draw.maxbet,expression:"draw.maxbet"}]}),e._v(" "),a("span",[e._v("for this draw.")])]),e._v(" "),a("el-divider",{attrs:{direction:"vertical"}}),e._v(" "),a("el-button",{attrs:{type:"primary",disabled:!e.validQueue},on:{click:e.queue}},[a("span",[e._v("Queue")])])],1):e._e()],1)],1):e._e()],2)],1)},staticRenderFns:[]};var x=a("VU/8")(w,_,!1,function(e){a("GDvy")},null,null).exports,k=a("4MVC"),S=a("Z9RD"),D={name:S.a.key,mixins:[c.a,u.a],components:{BetBox:x,DrawDropdown:k.a},data:function(){return{intervalTimeRef:null,intervalTime:null,action:null,list:{data:[],recordsFiltered:0,totalSales:0},filter:{draw:[],daterange:null,status:null},isLoading:!0,route:S.a}},computed:{currentTime:function(){return this.intervalTime},tableHeight:function(){return window.innerHeight-250}},destroyed:function(){clearInterval(this.intervalTimeRef)},mounted:function(){var e=this;return i()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fetch();case 2:return t.next=4,e.getTime();case 4:e.intervalTime=t.sent,e.intervalTimeRef=setInterval(i()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getTime();case 2:e.intervalTime=t.sent;case 3:case"end":return t.stop()}},t,e)})),6e4);case 6:case"end":return t.stop()}},t,e)}))()},methods:{getTime:function(){var e=this;return i()(r.a.mark(function t(){var a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("server");case 2:return a=t.sent,t.abrupt("return",new Date(a.server).getTime());case 4:case"end":return t.stop()}},t,e)}))()},fetch:function(e){var t=this;return i()(r.a.mark(function a(){var n,s,i;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t.isLoading=!0,a.prev=1,e&&(t.currPage=1),n={start:(t.currPage-1)*t.currPageSize,length:t.currPageSize,"search[value]":t.search,"columns[0][data]":"full_name","columns[0][name]":"full_name","columns[0][searchable]":!0,"columns[0][orderable]":!0,"columns[0][search][value]":"","columns[0][search][regex]":!0,"columns[1][data]":"username","columns[1][name]":"username","columns[1][searchable]":!0,"columns[1][orderable]":!0,"columns[1][search][value]":"","columns[1][search][regex]":!0,"columns[2][data]":"contact_no","columns[2][name]":"contact_no","columns[2][searchable]":!0,"columns[2][orderable]":!0,"columns[2][search][value]":"","columns[2][search][regex]":!0,"columns[3][data]":"referenceno","columns[3][name]":"referenceno","columns[3][searchable]":!0,"columns[3][orderable]":!0,"columns[3][search][value]":"","columns[3][search][regex]":!0,"columns[4][data]":"combination","columns[4][name]":"combination","columns[4][searchable]":!0,"columns[4][orderable]":!0,"columns[4][search][value]":"","columns[4][search][regex]":!0,"columns[5][data]":"bet","columns[5][name]":"bet","columns[5][searchable]":!0,"columns[5][orderable]":!0,"columns[5][search][value]":"","columns[5][search][regex]":!0,"columns[6][data]":"date_created","columns[6][name]":"date_created","columns[6][searchable]":!0,"columns[6][orderable]":!0,"columns[6][search][value]":"","columns[6][search][regex]":!0},t.filter.daterange&&(s="MM-DD-YYYY",n.from=o()(t.filter.daterange[0]).format(s),n.to=o()(t.filter.daterange[1]).format(s)),t.filter.draw.length&&(n.draw=t.filter.draw.join(",")),t.filter.status&&(n.status=t.filter.status),a.next=9,t.$store.dispatch("bet_history/list",n);case 9:(i=a.sent).totalSales&&(t.list.totalSales=i.totalSales),t.list.totalSales=i.totalSales,t.list.data=i.data.map(function(e){return e.time=new Date(e.drawdate).getTime(),e}),t.list.recordsFiltered=i.recordsFiltered,a.next=19;break;case 16:a.prev=16,a.t0=a.catch(1),t.handleError(a.t0);case 19:t.isLoading=!1;case 20:case"end":return a.stop()}},a,t,[[1,16]])}))()},voidBet:function(e){var t=this;return i()(r.a.mark(function a(){return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!t.isLoading){a.next=2;break}return a.abrupt("return");case 2:return t.isLoading=!0,a.prev=3,a.next=6,t.$store.dispatch("bet_history/void",e.id);case 6:return a.next=8,t.fetch();case 8:a.next=13;break;case 10:a.prev=10,a.t0=a.catch(3),t.handleError(a.t0);case 13:t.isLoading=!1;case 14:case"end":return a.stop()}},a,t,[[3,10]])}))()}}},C={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],staticClass:"page page-bet"},[a("header",{staticClass:"page-title"},[e._v(e._s(e.route.name))]),e._v(" "),a("div",{staticClass:"page-sub"},[a("span",[e._v("Total sales:")]),e._v(" "),a("el-tag",{directives:[{name:"money-format",rawName:"v-money-format",value:this.list.totalSales,expression:"this.list.totalSales"}]})],1),e._v(" "),a("div",{staticClass:"page-content",attrs:{layout:"column","layout-align":"space-between",flex:""}},[a("div",[a("div",{staticClass:"page-controls",attrs:{layout:"row","layout-align":"space-between end"}},[a("div",{attrs:{layout:"column","layout-align":"end"}},[a("bet-box",{on:{done:function(t){return e.fetch(!0)}}})],1),e._v(" "),a("div",{staticClass:"filters",attrs:{layout:"row"}},[a("div",{attrs:{flex:""}},[e._m(0),e._v(" "),a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"Select status",clearable:""},on:{change:e.fetch},model:{value:e.filter.status,callback:function(t){e.$set(e.filter,"status",t)},expression:"filter.status"}},e._l(["Successful","Void"],function(e,t){return a("el-option",{key:t,attrs:{label:e,value:e}})}),1)],1),e._v(" "),a("div",{attrs:{flex:""}},[e._m(1),e._v(" "),a("draw-dropdown",{on:{change:e.fetch},model:{value:e.filter.draw,callback:function(t){e.$set(e.filter,"draw",t)},expression:"filter.draw"}})],1),e._v(" "),a("div",{attrs:{flex:""}},[a("label",{staticClass:"label-input"},[a("span",[e._v("Dates")]),e._v(" "),a("el-date-picker",{attrs:{type:"daterange","range-separator":"To","start-placeholder":"Date from","end-placeholder":"Date to"},on:{change:e.fetch},model:{value:e.filter.daterange,callback:function(t){e.$set(e.filter,"daterange",t)},expression:"filter.daterange"}})],1)]),e._v(" "),a("div",{attrs:{flex:""}},[a("label",{staticClass:"label-input"},[a("span",[e._v("Keyword")]),e._v(" "),a("el-input",{attrs:{placeholder:"Search...",clearable:""},on:{input:e.onInput},model:{value:e.inputSearch,callback:function(t){e.inputSearch=t},expression:"inputSearch"}})],1)])])]),e._v(" "),a("el-table",{staticStyle:{"margin-top":"10px"},attrs:{"max-height":e.tableHeight,data:e.list.data}},[a("el-table-column",{attrs:{label:"Master agent/sub-agent",prop:"full_name",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"Player",prop:"username",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"Contact #",prop:"contact_no",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"Reference #",prop:"referenceno",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"Draw",prop:"draw_name",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"Combination",prop:"combination",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.combination))]),e._v(" "),"R"==t.row.isramble?a("span",[e._v("R")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"Bet amount",prop:"bet",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("span",{directives:[{name:"money-format",rawName:"v-money-format",value:e.row.bet,expression:"scope.row.bet"}]})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"Date/time",prop:"date_created",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"Status",prop:"status",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return["Void"!=t.row.status&&e.currentTime-t.row.time<=6e5?a("el-button",{attrs:{type:"danger"},on:{click:function(a){return e.voidBet(t.row)}}},[a("span",[e._v("Void")])]):"Void"==t.row.status?a("el-tag",{attrs:{type:"danger"}},[e._v("Void")]):a("el-tag",{attrs:{type:"success"}},[e._v("Successful")])]}}])})],1)],1),e._v(" "),a("div",{attrs:{layout:"row","layout-align":"center center"}},[a("el-pagination",{attrs:{background:"",layout:"sizes, prev, pager, next","page-sizes":[10,25,50,100,150,200],"current-page":e.currPage,"page-size":e.currPageSize,total:e.list.recordsFiltered},on:{"update:currentPage":function(t){e.currPage=t},"update:current-page":function(t){e.currPage=t},"current-change":e.fetch,"size-change":e.handleSizeChange}}),e._v(" "),a("div",{staticStyle:{"font-family":"'Robot Light'"}},[a("el-tag",{attrs:{type:"info"}},[e._v(e._s("Total: "+e.list.recordsFiltered))])],1)],1)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"label-input"},[t("span",[this._v("Status")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"label-input"},[t("span",[this._v("Draw")])])}]};var $=a("VU/8")(D,C,!1,function(e){a("Gvxl")},null,null);t.default=$.exports},GDvy:function(e,t){},Gu7T:function(e,t,a){"use strict";t.__esModule=!0;var n,r=a("c/Tr"),s=(n=r)&&n.__esModule?n:{default:n};t.default=function(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return(0,s.default)(e)}},Gvxl:function(e,t){},"c/Tr":function(e,t,a){e.exports={default:a("5zde"),__esModule:!0}},fBQ2:function(e,t,a){"use strict";var n=a("evD5"),r=a("X8DO");e.exports=function(e,t,a){t in e?n.f(e,t,r(0,a)):e[t]=a}},qyJz:function(e,t,a){"use strict";var n=a("+ZMJ"),r=a("kM2E"),s=a("sB3e"),i=a("msXi"),l=a("Mhyx"),o=a("QRG4"),c=a("fBQ2"),u=a("3fs2");r(r.S+r.F*!a("dY0y")(function(e){Array.from(e)}),"Array",{from:function(e){var t,a,r,d,p=s(e),m="function"==typeof this?this:Array,f=arguments.length,v=f>1?arguments[1]:void 0,h=void 0!==v,b=0,g=u(p);if(h&&(v=n(v,f>2?arguments[2]:void 0,2)),void 0==g||m==Array&&l(g))for(a=new m(t=o(p.length));t>b;b++)c(a,b,h?v(p[b],b):p[b]);else for(d=g.call(p),a=new m;!(r=d.next()).done;b++)c(a,b,h?i(d,v,[r.value,b],!0):r.value);return a.length=b,a}})}});
//# sourceMappingURL=1.61a8c2045e48e67970d2.js.map