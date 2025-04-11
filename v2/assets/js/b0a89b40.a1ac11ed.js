"use strict";(self.webpackChunkautox_doc=self.webpackChunkautox_doc||[]).push([[7315],{4049:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"nodejs/intro","title":"\u6982\u8ff0","description":"\u542f\u7528 nodejs \u5f15\u64ce","source":"@site/docs/nodejs/intro.md","sourceDirName":"nodejs","slug":"/nodejs/intro","permalink":"/docs/nodejs/intro","draft":false,"unlisted":false,"editUrl":"https://github.com/aiselp/AutoxDoc/tree/main/docs/nodejs/intro.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"nodejs","next":{"title":"\u5728 vscode \u5f00\u53d1","permalink":"/docs/nodejs/vscode"}}');var t=n(4848),o=n(8453);const r={sidebar_position:1},c="\u6982\u8ff0",d={},l=[{value:"\u542f\u7528 nodejs \u5f15\u64ce",id:"\u542f\u7528-nodejs-\u5f15\u64ce",level:2},{value:"\u4ece\u5168\u5c40\u53d8\u91cf\u6539\u4e3a\u5bfc\u5165\u6a21\u5757",id:"\u4ece\u5168\u5c40\u53d8\u91cf\u6539\u4e3a\u5bfc\u5165\u6a21\u5757",level:2},{value:"\u591a\u7ebf\u7a0b\u4e0e\u5f02\u6b65",id:"\u591a\u7ebf\u7a0b\u4e0e\u5f02\u6b65",level:2},{value:"autox v7 \u5f00\u53d1\u8fdb\u5ea6",id:"autox-v7-\u5f00\u53d1\u8fdb\u5ea6",level:2},{value:"\u53c2\u4e0e\u5f00\u53d1\u57fa\u672c\u64cd\u4f5c",id:"\u53c2\u4e0e\u5f00\u53d1\u57fa\u672c\u64cd\u4f5c",level:2}];function a(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",input:"input",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"\u6982\u8ff0",children:"\u6982\u8ff0"})}),"\n",(0,t.jsx)(s.admonition,{title:"\u6ce8\u610f\uff1aV7 \u7248\u672c\u76ee\u524d\u5904\u4e8e\u5f00\u53d1\u4e2d\uff0c\u672c\u6587\u6863\u63cf\u8ff0\u7684\u529f\u80fd\u6a21\u5757\u5728 V6 \u7248\u672c\u4e0d\u53ef\u7528",type:"warning"}),"\n",(0,t.jsx)(s.h2,{id:"\u542f\u7528-nodejs-\u5f15\u64ce",children:"\u542f\u7528 nodejs \u5f15\u64ce"}),"\n",(0,t.jsx)(s.p,{children:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b js \u6587\u4ef6\u7531\u7b2c\u4e00\u4ee3\u5f15\u64ce(Rhino)\u8fd0\u884c\uff0c\u5f53\u6587\u4ef6\u540d\u7531 mjs,cjs,node.js \u7ed3\u5c3e\u65f6\u4f7f\u7528 nodejs \u5f15\u64ce\u8fd0\u884c\uff0c\u4ee5 mjs \u7ed3\u5c3e\u8fd8\u4f1a\u542f\u7528 esm \u6a21\u5757\u7279\u6027\uff0c\u8fd9\u662f\u63a8\u8350\u7684\u8fd0\u884c\u65b9\u5f0f"}),"\n",(0,t.jsx)(s.h2,{id:"\u4ece\u5168\u5c40\u53d8\u91cf\u6539\u4e3a\u5bfc\u5165\u6a21\u5757",children:"\u4ece\u5168\u5c40\u53d8\u91cf\u6539\u4e3a\u5bfc\u5165\u6a21\u5757"}),"\n",(0,t.jsxs)(s.p,{children:["\u5728\u7b2c 2 \u4ee3 api\uff0c\u6240\u6709\u6a21\u5757\u5168\u90e8\u9700\u8981\u4f7f\u7528",(0,t.jsx)(s.code,{children:"import "}),"\u5173\u952e\u5b57\u5bfc\u5165\uff0c\u5982\r\n",(0,t.jsx)(s.code,{children:"import { showToast } from 'toast'"}),",\u6682\u4e0d\u652f\u6301",(0,t.jsx)(s.code,{children:"require()"}),"\u548c",(0,t.jsx)(s.code,{children:"import()"}),"\u52a8\u6001\u5bfc\u5165"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:'import { showToast } from "toast";\n'})}),"\n",(0,t.jsx)(s.h2,{id:"\u591a\u7ebf\u7a0b\u4e0e\u5f02\u6b65",children:"\u591a\u7ebf\u7a0b\u4e0e\u5f02\u6b65"}),"\n",(0,t.jsxs)(s.p,{children:["\u5728 nodejs \u5f15\u64ce\u5c06\u4e0d\u518d\u652f\u6301\u591a\u7ebf\u7a0b\uff0c\u53d6\u800c\u4ee3\u4e4b\u7684\u662f",(0,t.jsx)(s.code,{children:"Promise"}),"\u548c\u5f02\u6b65\u51fd\u6570\uff0c\u7b2c\u4e8c\u4ee3 api \u5927\u591a\u6570\u90fd\u5c06\u4ee5\u8fd4\u56de",(0,t.jsx)(s.code,{children:"Promise"}),"\u8868\u793a\u5f02\u6b65\u64cd\u4f5c\uff0c\u5bf9\u4e8e\u6765\u81ea java \u7684\u963b\u585e\u8c03\u7528\uff08\u5982 io \u8bfb\u5199\uff09\u53ef\u901a\u8fc7",(0,t.jsx)(s.code,{children:"java"}),"\u6a21\u5757\u4e2d\u7684\u76f8\u5173\u51fd\u6570\u8f6c\u6362\u6210\u4e00\u4e2a",(0,t.jsx)(s.code,{children:"Promise"}),"\u800c\u4e0d\u963b\u585e nodejs \u7ebf\u7a0b\u3002"]}),"\n",(0,t.jsx)(s.admonition,{type:"warning",children:(0,t.jsxs)(s.p,{children:["\u5982\u679c\u4f60\u5f3a\u884c\u4f7f\u7528",(0,t.jsx)(s.code,{children:"java.lang.Thread"}),"\u7c7b\u8fd0\u884c js \u4ee3\u7801\u5c06\u4f1a\u4f7f\u5f15\u64ce\u5d29\u6e83"]})}),"\n",(0,t.jsx)(s.p,{children:"........\u5f85\u8865\u5145"}),"\n",(0,t.jsx)(s.h2,{id:"autox-v7-\u5f00\u53d1\u8fdb\u5ea6",children:"autox v7 \u5f00\u53d1\u8fdb\u5ea6"}),"\n",(0,t.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,t.jsx)(s.strong,{children:"\u5206\u79bb\u811a\u672c\u5f15\u64ce\u8fd0\u884c\u7684\u8fdb\u7a0b"}),"\r\n\u4f7f\u811a\u672c\u8fd0\u884c\u5728\u4e0e app \u4e0d\u540c\u7684\u8fdb\u7a0b\uff0c\u5f7b\u5e95\u89e3\u51b3\u811a\u672c\u5d29\u6e83\u8fde\u540c app \u4e00\u8d77\u5d29\u6e83\u7684\u95ee\u9898"]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ",(0,t.jsx)(s.strong,{children:"\u8fc1\u79fb app \u754c\u9762\u81f3 m3 \u98ce\u683c"})]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ",(0,t.jsx)(s.strong,{children:"\u5b8c\u5584\u7684\u63d2\u4ef6\u6269\u5c55\u529f\u80fd"}),"\r\n\u4f7f\u7528\u4e00\u4e2a\u72ec\u7acb\u7684\u9875\u9762\u663e\u793a\u5df2\u5b89\u88c5\u548c\u53ef\u4e0b\u8f7d\u7684\u63d2\u4ef6\uff0c\u91c7\u7528\u6fc0\u6d3b/\u7981\u7528\u7684\u65b9\u5f0f\u5728\u6bcf\u6b21\u8fd0\u884c\u811a\u672c\u65f6\u81ea\u52a8\u52a0\u8f7d\u63d2\u4ef6\uff0c\u65e0\u9700\u5728\u4ee3\u7801\u4e2d\u663e\u5f0f\u52a0\u8f7d"]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,t.jsxs)(s.strong,{children:["\u96c6\u6210\u57fa\u4e8e",(0,t.jsx)(s.a,{href:"https://github.com/caoccao/Javet",children:"Javet"}),"\u7684 v8/nodejs \u5f15\u64ce"]})]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ",(0,t.jsx)(s.strong,{children:"nodejs \u5f15\u64ce\u529f\u80fd\u6a21\u5757\u9002\u914d"})]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ",(0,t.jsxs)(s.strong,{children:["\u5168\u65b0\u7684 ui \u8bbe\u8ba1\u6846\u67b6\uff0c\u91c7\u7528 vue3 \u7684",(0,t.jsx)(s.a,{href:"https://github.com/vuejs/core",children:"vue-core"}),"\u6846\u67b6\u4e0e",(0,t.jsx)(s.a,{href:"https://github.com/developit/htm",children:"htm"}),"\u6a21\u677f\u5f15\u64ce"]}),"\r\n\u57fa\u4e8e\u65b0\u7684\u5f15\u64ce\u8bbe\u8ba1\uff0c\u652f\u6301\u7ec4\u4ef6\u548c vue \u4e00\u6837\u7684\u54cd\u5e94\u5f0f\u72b6\u6001"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"\u53c2\u4e0e\u5f00\u53d1\u57fa\u672c\u64cd\u4f5c",children:"\u53c2\u4e0e\u5f00\u53d1\u57fa\u672c\u64cd\u4f5c"}),"\n",(0,t.jsxs)(s.p,{children:["V7 \u7248\u672c\u5f00\u53d1\u76ee\u524d\u7531\u5f00\u53d1\u8005\u3010",(0,t.jsx)(s.a,{href:"https://github.com/aiselp",children:"aiselp"}),"\u3011\u7ec4\u6210\uff0c\u5982\u6709\u5174\u8da3\u5171\u540c\u53c2\u4e0e\u5f00\u53d1\u548c\u6d4b\u8bd5\u53ef\u52a0\u5165\u672c\u4eba\u521b\u5efa\u7684",(0,t.jsx)(s.a,{href:"https://t.me/+bkx23tdbM6U3N2M1",children:"tg \u5f00\u53d1\u7fa4"}),"\u4ea4\u6d41"]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"\u9996\u5148\u786e\u4fdd\u4f60\u5df2\u7ecf fork \u4e86\u6b64\u4ed3\u5e93\uff0c\u5e76\u4e14\u5df2\u62c9\u53d6\u5230\u672c\u5730\u5e76\u80fd\u591f\u5b8c\u6210\u6784\u5efa"}),"\n",(0,t.jsx)(s.li,{children:"\u6253\u5f00\u4e00\u4e2a\u7ec8\u7aef\u5207\u6362\u5230\u9879\u76ee\u76ee\u5f55\u8f93\u5165"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"git remote add aiselp git@github.com:aiselp/AutoX.git\r\n#\u66f4\u65b0\u8fdc\u7a0b\u4ed3\u5e93\r\ngit fetch --all\n"})}),"\n",(0,t.jsxs)(s.ol,{start:"3",children:["\n",(0,t.jsx)(s.li,{children:"\u521b\u5efa\u5e76\u62c9\u53d6 v7 \u5206\u652f"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"git checkout -b setup-v7 aiselp/setup-v7\n"})}),"\n",(0,t.jsxs)(s.ol,{start:"4",children:["\n",(0,t.jsxs)(s.li,{children:["\u63a8\u9001\u5230\u4f60\u7684\u8fdc\u7a0b\u4ed3\u5e93\u5e76\u8bbe\u7f6e\u4e3a\u9ed8\u8ba4\r\n",(0,t.jsx)(s.code,{children:"git push -u origin setup-v7"}),"\r\n\u5176\u4e2d origin \u8868\u793a\u4f60\u7684\u8fdc\u7a0b\u4ed3\u5e93\u540d\uff0c\u53ef\u80fd\u5e76\u975e\u4e3a origin"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>c});var i=n(6540);const t={},o=i.createContext(t);function r(e){const s=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:s},e.children)}}}]);