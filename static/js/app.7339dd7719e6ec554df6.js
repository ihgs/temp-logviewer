webpackJsonp([1],{"+Gxq":function(t,e,r){"use strict";var i=r("fnDg").a;var n=r("VU/8")(i,null,!1,function(t){r("4veK")},null,null);e.a=n.exports},"4veK":function(t,e){},"9M+g":function(t,e){},"B/Wv":function(t,e){},"HUt/":function(t,e,r){"use strict";var i=r("qRo1").a;var n=r("VU/8")(i,null,!1,function(t){r("n9mN")},null,null);e.a=n.exports},JCpY:function(t,e,r){"use strict";var i=r("rKsW").a;var n=r("VU/8")(i,null,!1,function(t){r("xBwK")},null,null);e.a=n.exports},JDVb:function(t,e,r){"use strict";var i=r("9NuQ").a;var n=r("VU/8")(i,null,!1,function(t){r("Y9O/")},null,null);e.a=n.exports},Jmt5:function(t,e){},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("b-nav",[e("b-nav-item",{attrs:{href:"#/regexp"}},[this._v("Register RegExp")]),this._v(" "),e("b-nav-item",{attrs:{href:"#/"}},[this._v("Parse Log")])],1),this._v(" "),e("div",{staticClass:"contents"},[e("router-view")],1)],1)},staticRenderFns:[]};var o=r("VU/8")({name:"app"},n,!1,function(t){r("OOmg")},null,null).exports,a=r("/ocq"),s=r("Zrlr"),l=r.n(s),u=r("wxAW"),c=r.n(u),d=function(){function t(e,r){l()(this,t),this.index=r,this.key=e,this.key.shift(),this.detail=[]}return c()(t,[{key:"add",value:function(t){this.detail.push(t)}}]),t}(),f=function(){function t(){l()(this,t)}return c()(t,[{key:"countGroup",value:function(t){var e=t.match(/\(/g);if(e){var r=t.match(/\\\(/g);return r?e.length-r.length+1:e.length+1}return 1}},{key:"setLogformat",value:function(t){"".match(t),this.logformat=t,this.size=this.countGroup(t.toString())}},{key:"initByString",value:function(t,e){var r=this;this.name=t,this.logs=[];var i=void 0,n=0;e.split(/\r?\n/).forEach(function(t){var e=t.match(r.logformat);e?(i=new d(e,++n),r.logs.push(i)):i&&i.add(t)})}},{key:"initByFile",value:function(t){var e=this;this.name=t.name,this.logs=[];var r=new FileReader;r.onload=function(t){var r=void 0,i=0;t.target.result.split(/\r?\n/).forEach(function(t){var n=t.match(e.logformat);n?(r=new d(n,++i),e.logs.push(r)):r&&r.add(t)})},r.readAsText(t)}}]),t}(),v=r("mvHQ"),m=r.n(v),g=r("M4fF"),p=r.n(g),h=function(){function t(){l()(this,t),this.reload()}return c()(t,[{key:"reload",value:function(){this.logFormats=[];var e=t.fetch();if(e){var r=e.logFormats||[];this.logFormats=r}}},{key:"add",value:function(t,e){if(this.get(t))throw Error("Already exists. "+t);var r=new _({id:t,format:e});this.logFormats.push(r)}},{key:"save",value:function(){localStorage.setItem(t.storageKey(),m()(this))}},{key:"remove",value:function(t){var e=this.logFormats.findIndex(function(e){return t===e.id});-1!==e&&this.logFormats.splice(e,1)}},{key:"get",value:function(t){return p.a.find(this.logFormats,function(e){return t===e.id})}}],[{key:"storageKey",value:function(){return"logviewer"}},{key:"fetch",value:function(){return JSON.parse(localStorage.getItem(t.storageKey()))}}]),t}(),_=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};l()(this,t),this.id=e.id||"",this.format=e.format||""},x=h,b={name:"LogTableDetail",props:["detail","logindex"],data:function(){return{modalid:"collapse-"+String(this.logindex)}}},y={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.detail.length>0?r("div",[r("b-btn",{directives:[{name:"b-modal",rawName:"v-b-modal",value:t.modalid,expression:"modalid"}]},[t._v("Show Trace")]),t._v(" "),r("b-modal",{attrs:{id:t.modalid,size:"lg",title:"Trace","ok-only":""}},[r("b-card",[r("ol",t._l(t.detail,function(e,i){return r("li",{key:i},[t._v("\n        "+t._s(e)+"\n      ")])}))])],1)],1):t._e()},staticRenderFns:[]};var k=r("VU/8")(b,y,!1,function(t){r("WWHw")},"data-v-59ee65ea",null).exports;i.a.component("logtabledetail",k);var F={name:"LogTable",props:["item"],data:function(){return{filterlogs:this.item.logs,filters:[],message:"",from:void 0,to:void 0}},watch:{item:function(){this.update()}},methods:{update:p.a.debounce(function(t,e){this.message="Filtering....",this.filterlogs=[],t&&(this.filters[t-1]=e);var r=this.filters,i=this;p.a.defer(function(){var t=0,e=i.item.logs.length;i.from&&i.from-1>t&&(t=i.from-1),i.to&&i.to<e&&(e=i.to);for(var n=t;n<e;n++){for(var o=i.item.logs[n],a=o.key.length,s=!1,l=!1,u=0;u<a;u++)if(void 0!==r[u]&&r[u].length>0&&(s=!0,o.key[u].includes(r[u]))){l=!0;break}!l&&s||i.filterlogs.push(o)}i.message=""})},1e3),exportToCsv:function(){for(var t=function(t){var e="";p.a.each(t.key,function(t){var r=(null===t?"":t.toString()).replace(/"/g,'""');e+='"'+r+'",'});var r="";return p.a.each(t.detail,function(t){r+=t+"\n"}),r=r.replace(/"/g,'""'),(e+='"'+r+'"')+"\n"},e="",r=0;r<this.filterlogs.length;r++)e+=t(this.filterlogs[r]);var i=new Blob([e],{type:"text/csv;charset=utf-8;"});if(navigator.msSaveBlob)navigator.msSaveBlob(i,"exportlog.csv");else{var n=document.createElement("a");if(void 0!==n.download){var o=URL.createObjectURL(i);n.setAttribute("href",o),n.setAttribute("download","exportlog.csv"),n.style.visibility="hidden",document.body.appendChild(n),n.click(),document.body.removeChild(n)}}}}},R={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._v("\n  "+t._s(t.item.name)+"\n  "),r("div",{attrs:{align:"right"}},[r("b-button",{attrs:{size:"sm"},on:{click:function(e){t.exportToCsv()}}},[t._v("Download CSV")])],1),t._v(" "),r("div",{attrs:{id:"message"}},[t._v(t._s(t.message))]),t._v(" "),r("div",{staticClass:"range"},[r("b-form",{attrs:{inline:""}},[r("label",[t._v(" Range: ")]),t._v(" "),r("b-form-input",{attrs:{type:"number",size:"sm"},on:{input:function(e){t.update()}},model:{value:t.from,callback:function(e){t.from=e},expression:"from"}}),t._v("\n      ~\n      "),r("b-form-input",{attrs:{type:"number",size:"sm"},on:{input:function(e){t.update()}},model:{value:t.to,callback:function(e){t.to=e},expression:"to"}})],1)],1),t._v(" "),t.item?r("table",{staticClass:"logtable"},[r("thead",[r("tr",[r("th",[t._v("No.")]),t._v(" "),t._l(this.item.size-1,function(e){return r("th",{key:e},[r("input",{attrs:{type:"text"},on:{input:function(r){t.update(e,r.target.value)}}})])}),t._v(" "),r("th")],2)]),t._v(" "),r("tbody",t._l(t.filterlogs,function(e){return r("tr",{key:e.index},[r("td",[t._v(t._s(e.index))]),t._v(" "),t._l(e.key,function(e,i){return r("td",{key:i},[t._v("\n          "+t._s(e)+"\n        ")])}),t._v(" "),r("td",[r("logtabledetail",{attrs:{detail:e.detail,logindex:e.index}})],1)],2)}))]):t._e()])},staticRenderFns:[]};var w=r("VU/8")(F,R,!1,function(t){r("B/Wv")},"data-v-96ba1d56",null).exports;i.a.component("logtable",w);var C={name:"LogViewer",data:function(){return{logFiles:[],selected:null,options:new x,select_valid:"null"}},methods:{onDragOver:function(t){t.preventDefault()},onDrop:function(t){t.preventDefault();var e=t.dataTransfer.files,r=this.options.get(this.selected);if(void 0!==r){this.logFiles.length>0&&this.logFiles.splice(0,1);for(var i=0;i<e.length;i++){var n=new f;n.setLogformat(r.format),n.initByFile(e[i]),this.logFiles.push(n);break}this.select_valid="null"}else this.select_valid="invalid"}}},S={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"upload_section"}},[r("div",{staticClass:"title"},[t._v("\n      ログ解析\n    ")]),t._v(" "),r("div",{staticClass:"input"},[r("b-form",[r("b-form-group",{attrs:{label:"Log Format"}},[r("b-form-select",{attrs:{state:t.select_valid},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[r("option",{domProps:{value:null}},[t._v("Please select an option")]),t._v(" "),t._l(t.options.logFormats,function(e){return r("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.id)+" : "+t._s(e.format)+"a")])})],2)],1)],1)],1),t._v(" "),r("div",{attrs:{id:"drop",draggable:"true"},on:{dragover:t.onDragOver,drop:t.onDrop}},[t._v("\n        ファイルをドラッグアンドドロップしてください。\n    ")]),t._v(" "),r("div",{staticClass:"logarea"},[r("ul",t._l(t.logFiles,function(t,e){return r("li",{key:e},[r("logtable",{attrs:{item:t}})],1)}))])])},staticRenderFns:[]};var L=r("VU/8")(C,S,!1,function(t){r("OtRy")},null,null).exports,V=r("SPVS"),M={name:"Helper",data:function(){return{filter:"",tmpRegex:"^",display:"",fields:["type","example","regex","action"],examples:V}},methods:{addSeparator:function(t){this.display=this.display+t.example[0],this.tmpRegex=this.tmpRegex+t.regex},addGroup:function(t){this.display=this.display+t.example[0],this.tmpRegex=this.tmpRegex+"("+t.regex+")"},clear:function(){this.display="",this.tmpRegex="^"}}},U={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-card",[r("b-input",{attrs:{type:"text",placeholder:"Filter"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),t._v(" "),r("b-table",{attrs:{items:t.examples,fields:t.fields,filter:t.filter},scopedSlots:t._u([{key:"example",fn:function(e){return[r("ul",t._l(e.item.example,function(e,i){return r("li",{key:i},[t._v("\n          "+t._s(e)+"\n        ")])}))]}},{key:"action",fn:function(e){return[e.item.separator?r("b-btn",{on:{click:function(r){t.addSeparator(e.item)}}},[t._v("Add Separator")]):t._e(),t._v(" "),e.item.separator?t._e():r("b-btn",{on:{click:function(r){t.addGroup(e.item)}}},[t._v("Add Group")])]}}])}),t._v("\n  "+t._s(t.display)+"\n  "),r("b-input",{attrs:{type:"text"},model:{value:t.tmpRegex,callback:function(e){t.tmpRegex=e},expression:"tmpRegex"}}),r("b-btn",{on:{click:t.clear}},[t._v("Clear")])],1)},staticRenderFns:[]},O={name:"RegisterRegexp",components:{helper:r("VU/8")(M,U,!1,null,null,null).exports},data:function(){return{sample:"",logformat:"",logFile:void 0,logformat_id:"",errorMsg:"",errorMsgLogFormatId:"",registerd:new x,fields:[{key:"id",label:"Id"},{key:"format",label:"Format"},{key:"actions",label:"Action"}]}},methods:{load:function(){this.errorMsg="";var t=new f;try{t.setLogformat(this.logformat)}catch(t){return this.clear(),void(this.errorMsg=t.message)}t.initByString("Check result",this.sample),this.logFile=t},clear:function(){this.errorMsg="",this.logFile=void 0},register:function(){if(this.errorMsgLogFormatId="",0!==this.logformat_id.trim().length){try{this.registerd.add(this.logformat_id.trim(),this.logformat)}catch(t){return void(this.errorMsgLogFormatId=t.message)}this.registerd.save(),this.logformat_id=""}else this.errorMsgLogFormatId="Input Log format Id"},remove:function(t){this.registerd.remove(t),this.registerd.save()},setTmpRegex:function(){this.logformat=this.$refs.helper.tmpRegex+"$"}}},E={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"register_regexp"}},[r("div",{staticClass:"title"},[t._v("\n      ログフォーマット\n  ")]),t._v(" "),r("div",{staticClass:"subtitle"},[t._v("\n    登録済みログフォーマット\n  ")]),t._v(" "),t.registerd?r("div",{staticClass:"list"},[r("b-table",{attrs:{"show-empty":"",striped:"",items:t.registerd.logFormats,fields:t.fields},scopedSlots:t._u([{key:"actions",fn:function(e){return[r("b-button",{on:{click:function(r){t.remove(e.item.id)}}},[t._v("Delete")])]}}])})],1):t._e(),t._v(" "),r("div",{staticClass:"subtitle"},[t._v("\n    ログフォーマット登録\n  ")]),t._v(" "),r("div",{staticClass:"input-area"},[r("b-form",[r("b-form-group",{attrs:{label:"Log Sample"}},[r("b-form-textarea",{staticClass:"sample",model:{value:t.sample,callback:function(e){t.sample=e},expression:"sample"}})],1),t._v(" "),r("b-form-group",{attrs:{label:"Log Format"}},[r("b-form-input",{staticClass:"logformat",attrs:{type:"text"},model:{value:t.logformat,callback:function(e){t.logformat=e},expression:"logformat"}}),t._v(" "),r("div",{staticClass:"error"},[t._v("\n          "+t._s(t.errorMsg)+"\n        ")]),t._v(" "),r("div",[r("a",{attrs:{target:"_blank",href:"https://github.com/ihgs/temp-logviewer/wiki/Regex-sample"}},[t._v("wiki")])])],1),t._v(" "),r("b-modal",{attrs:{id:"helperModal",size:"lg",title:"Regex Helper"},on:{ok:t.setTmpRegex}},[r("helper",{ref:"helper"})],1),t._v(" "),r("b-button",{attrs:{type:"submit"},on:{click:function(e){t.load()}}},[t._v("Check")]),t._v(" "),r("b-button",{attrs:{type:"reset"},on:{click:function(e){t.clear()}}},[t._v("Clear")]),t._v(" "),this.logFile?r("div",{staticClass:"logarea"},[r("logtable",{attrs:{item:t.logFile}})],1):t._e(),t._v(" "),r("b-form-group",{attrs:{label:"Log Format Id"}},[r("b-form-input",{attrs:{type:"text"},model:{value:t.logformat_id,callback:function(e){t.logformat_id=e},expression:"logformat_id"}}),t._v(" "),r("div",{staticClass:"error"},[t._v("\n          "+t._s(t.errorMsgLogFormatId)+"\n        ")])],1),t._v(" "),r("b-button",{attrs:{type:"submit"},on:{click:function(e){t.register()}}},[t._v("Register")])],1)],1)])},staticRenderFns:[]};var I=r("VU/8")(O,E,!1,function(t){r("k5to")},null,null).exports;i.a.use(a.a);var W=new a.a({routes:[{path:"/",name:"LogViewer",component:L},{path:"/regexp",name:"RegisterRegexp",component:I}]}),B=r("e6fC");r("Jmt5"),r("9M+g");i.a.use(B.a),i.a.config.productionTip=!1,new i.a({el:"#app",router:W,template:"<App/>",components:{App:o}})},OOmg:function(t,e){},OtRy:function(t,e){},SPVS:function(t,e){t.exports=[{type:"日付1",example:["2018/8/10","2018/08/10"],regex:"\\d{1,4}/\\d{1,2}/\\d{1,2}"},{type:"空白なしの文字列",example:["testhohooho"],regex:"[^\\s]+"},{type:"固定値 <br>(追加後、編集してください orz..)",example:["xxxxxxx"],regex:"xxxxxxx"},{type:"一つ以上の空白/タブ",example:["  "],regex:"[\\s]+",separator:!0},{type:"コロン",example:[":"],regex:"\\s*:\\s*",separator:!0},{type:"カンマ",example:[","],regex:"\\s*,\\s*",separator:!0},{type:"ipv4",example:["192.168.0.1"],regex:"\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}"}]},WWHw:function(t,e){},"Y9O/":function(t,e){},dW2o:function(t,e){},k5to:function(t,e){},n9mN:function(t,e){},r15W:function(t,e,r){"use strict";var i=r("E9Zr").a;var n=r("VU/8")(i,null,!1,function(t){r("dW2o")},null,null);e.a=n.exports},xBwK:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.7339dd7719e6ec554df6.js.map