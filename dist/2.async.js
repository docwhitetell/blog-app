webpackJsonp([2],{211:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(2),l=r(n),u=a(341),s=r(u),p=a(100),o=r(p);a(342);var d=a(95),i=(r(d),a(131),a(96)),f=(r(i),a(97)),c=r(f),y=a(345),g=a(132),m=r(g);s.default.config({top:100}),t.default={namespace:"files",state:{filesList:[],videoList:[],open:m.default.get("open")?m.default.get("open"):[],alert:m.default.get("alert")?m.default.get("alert"):[],tabs:0,filesPagination:{current:1,pageSize:10,total:null}},subscriptions:{setup:function(e){var t=e.dispatch;e.history.listen(function(e){var a=e.pathname;"/admin/files-lists"===a?(t({type:"app/update",payload:{pageHeader:"Files Lists"}}),t({type:"query",payload:{pageSize:10}})):"/admin/multi-upload"===a?t({type:"app/update",payload:{pageHeader:"Multi-files drag & auto upload"}}):"/admin/my-files"===a&&t({type:"app/update",payload:{pageHeader:"My Files"}})})}},effects:{query:o.default.mark(function e(t,a){var r,n,l,u,s=t.payload,p=a.call,d=a.put;a.select;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=s||{pageSize:15},e.next=3,p(y.request,{url:c.default.api.userImgs,withtoken:!0,params:r});case 3:if(n=e.sent,200!==n.status){e.next=11;break}return l=[],u=[],n.data.data.map(function(e,t){l[t]=!1,u[t]=!1}),m.default.set("open",l),m.default.set("alert",u),e.next=11,d({type:"update",payload:{filesList:n.data.data,open:l,alert:u,filesPagination:{current:n.data.current_page,pageSize:parseInt(n.data.per_page),total:n.data.total}}});case 11:case"end":return e.stop()}},e,this)}),queryVideos:o.default.mark(function e(t,a){var r,n,l,u=(t.payload,a.call),s=a.put;a.select;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(y.request,{url:c.default.api.userVideos,withtoken:!0});case 2:if(r=e.sent,200!==r.status){e.next=10;break}return n=[],l=[],r.data.map(function(e,t){n[t]=!1,l[t]=!1}),m.default.set("open",n),m.default.set("alert",l),e.next=10,s({type:"update",payload:{filesList:r.data,open:n,alert:l,filesPagination:{current:r.data.current_page,pageSize:parseInt(r.data.per_page),total:r.data.total}}});case 10:case"end":return e.stop()}},e,this)}),delete:o.default.mark(function e(t,a){var r,n,l=t.payload,u=a.call,p=a.put;a.select;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p({type:"alertClose"});case 2:return r={id:l},e.next=5,u(y.request,{url:c.default.api.deleteFiles,withtoken:!0,params:r});case 5:if(n=e.sent,!n.data.success){e.next=12;break}return console.log("delete success"),e.next=10,p({type:"query"});case 10:e.next=13;break;case 12:n.data.error&&(console.log(n.data.error),s.default.error(""+n.data.error));case 13:case"end":return e.stop()}},e,this)})},reducers:{update:function(e,t){return(0,l.default)({},e,t.payload)},dialogOpen:function(e,t){var a=e.open;return a.map(function(e,t){!1}),a[t.payload]=!0,(0,l.default)({},e,{open:a})},dialogClose:function(e,t){var a=e.open;return a[t.payload]=!1,(0,l.default)({},e,{open:a})},alertOpen:function(e,t){var a=e.alert;return a.map(function(e,t){!1}),a[t.payload]=!0,(0,l.default)({},e,{alert:a})},alertClose:function(e,t){for(var a=e.alert,r=[],n=0;n<a.length;n++)r[n]=!1;return(0,l.default)({},e,{alert:r})}}},e.exports=t.default}});