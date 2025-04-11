"use strict";(self.webpackChunkautox_doc=self.webpackChunkautox_doc||[]).push([[6691],{8082:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"rhino/npm/event-stream","title":"event-stream","description":"v6.4.0\u65b0\u589e","source":"@site/docs/rhino/npm/event-stream.md","sourceDirName":"rhino/npm","slug":"/rhino/npm/event-stream","permalink":"/docs/rhino/npm/event-stream","draft":false,"unlisted":false,"editUrl":"https://github.com/aiselp/AutoxDoc/tree/main/docs/rhino/npm/event-stream.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"cheerio","permalink":"/docs/rhino/npm/cheerio"},"next":{"title":"events","permalink":"/docs/rhino/npm/events"}}');var a=r(4848),s=r(8453);const c={},l="event-stream",i={},o=[];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"event-stream",children:"event-stream"})}),"\n",(0,a.jsx)(n.p,{children:"v6.4.0\u65b0\u589e"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"\u7a33\u5b9a\u6027: \u7a33\u5b9a"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"\u6765\u81eanpm\u6a21\u5757event-stream\uff0c\u5982\u9700\u4f7f\u7528\uff0c\u8bf7\u7528"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const es = require('event-stream')\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u8be5\u6a21\u5757\u7528\u4e8e\u4fbf\u6377\u7684\u521b\u5efa\u6d41\uff0c\u5b8c\u6574\u8bf4\u660e\u89c1",(0,a.jsx)(n.a,{href:"https://github.com/dominictarr/event-stream",children:"\u9879\u76ee\u4e3b\u9875"}),"\r\n\u53ef\u8bfb\u6d41:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"es.readable(function (count, callback) {\r\n  if(streamHasEnded)\r\n    return this.emit('end')\r\n  \r\n  //...\r\n  \r\n  this.emit('data', data) //use this way to emit multiple chunks per call.\r\n      \r\n  callback() // you MUST always call the callback eventually.\r\n             // the function will not be called again until you do this.\r\n})\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u8f6c\u6362\u6d41:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"var es = require('event-stream')\r\nes.map(function (data, callback) {\r\n  //transform data\r\n  // ...\r\n  callback(null, data)\r\n})\r\n \n"})}),"\n",(0,a.jsx)(n.p,{children:"\u53ef\u5199\u6d41:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"var es = require('event-stream')\r\nes.map(function (data, callback) {\r\n  // ...\r\n  callback(null, null)\r\n})\r\n \n"})}),"\n",(0,a.jsx)(n.p,{children:"\u4f8b\u5b50:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const es = require(\"event-stream\");\r\n\r\n//\u521b\u5efa\u4e00\u4e2a\u53ef\u8bfb\u6d41\r\nlet e = 0\r\nlet r = es.readable(function(count, callback) {\r\n    if (e > (10)) return this.emit('end')\r\n    this.emit('data', String(e));\r\n    e++;\r\n    return callback()\r\n});\r\n//\u8f6c\u6362\u6d41\r\nlet map = es.map(function (data, callback) {\r\n  data = `--${data}--`\r\n  callback(null, data)\r\n})\r\n\r\n//\u53ef\u5199\u6d41\uff0c\u8fd9\u91cc\u662f\u5c06\u6570\u636e\u6253\u5370\u51fa\u6765\r\nlet w = es.map(function (data, callback) {\r\n  log(data)\r\n  callback(null, null)\r\n})\r\n\r\nw.on('close',()=>{\r\n    log('\u64cd\u4f5c\u5b8c\u6210')\r\n});\r\n\r\nr.pipe(map).pipe(w);//\u5c063\u4e2a\u6d41\u8fde\u8d77\u6765\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u4f8b\u5b502\uff08\u914d\u5408io\u6d41\u4f7f\u7528\uff09:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'const es = require("event-stream");\r\nconst stream = require("stream")\r\n\r\nlet r = stream.createFileReadStream(\r\n    \'/sdcard/\u6587\u672c\u6587\u4ef6.txt\'\r\n)\r\n\r\n//\u53ef\u5199\u6d41\uff0c\u8fd9\u91cc\u662f\u5c06\u6570\u636e\u6253\u5370\u51fa\u6765\r\nlet w = es.map(function (data, callback) {\r\n  log(data)\r\n  callback(null, null)\r\n})\r\n\r\n//\u8fde\u901a\u6d41\uff0c\u5176\u4e2des.split()\u662f\u4e00\u4e2a\u6d41\uff0c\u8d1f\u8d23\u5c06\u6570\u636e\u6309\u884c\u8f93\u51fa\r\nr.pipe(es.split()).pipe(w)\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>l});var t=r(6540);const a={},s=t.createContext(a);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);