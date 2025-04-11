"use strict";(self.webpackChunkautox_doc=self.webpackChunkautox_doc||[]).push([[2665],{7551:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"rhino/advanced/media","title":"Media \u591a\u5a92\u4f53","description":"\u7a33\u5b9a\u6027: \u7a33\u5b9a","source":"@site/docs/rhino/advanced/media.md","sourceDirName":"rhino/advanced","slug":"/rhino/advanced/media","permalink":"/docs/rhino/advanced/media","draft":false,"unlisted":false,"editUrl":"https://github.com/aiselp/AutoxDoc/tree/main/docs/rhino/advanced/media.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"keyboard \u952e\u76d8\u8f93\u5165","permalink":"/docs/rhino/advanced/keyboard"},"next":{"title":"module (\u6a21\u5757)","permalink":"/docs/rhino/advanced/modules"}}');var d=n(4848),c=n(8453);const a={},r="Media \u591a\u5a92\u4f53",l={},o=[{value:"media.scanFile(path)",id:"mediascanfilepath",level:2},{value:"media.playMusic(path[, volume, looping])",id:"mediaplaymusicpath-volume-looping",level:2},{value:"media.musicSeekTo(msec)",id:"mediamusicseektomsec",level:2},{value:"media.pauseMusic()",id:"mediapausemusic",level:2},{value:"media.resumeMusic()",id:"mediaresumemusic",level:2},{value:"media.stopMusic()",id:"mediastopmusic",level:2},{value:"media.isMusicPlaying()",id:"mediaismusicplaying",level:2},{value:"media.getMusicDuration()",id:"mediagetmusicduration",level:2},{value:"media.getMusicCurrentPosition()",id:"mediagetmusiccurrentposition",level:2}];function t(e){const i={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.header,{children:(0,d.jsx)(i.h1,{id:"media-\u591a\u5a92\u4f53",children:"Media \u591a\u5a92\u4f53"})}),"\n",(0,d.jsxs)(i.blockquote,{children:["\n",(0,d.jsx)(i.p,{children:"\u7a33\u5b9a\u6027: \u7a33\u5b9a"}),"\n"]}),"\n",(0,d.jsx)(i.p,{children:"media \u6a21\u5757\u63d0\u4f9b\u591a\u5a92\u4f53\u7f16\u7a0b\u7684\u652f\u6301\u3002\u76ee\u524d\u4ec5\u652f\u6301\u97f3\u4e50\u64ad\u653e\u548c\u5a92\u4f53\u6587\u4ef6\u626b\u63cf\u3002\u540e\u7eed\u4f1a\u7ed3\u5408 UI \u52a0\u5165\u89c6\u9891\u64ad\u653e\u7b49\u529f\u80fd\u3002"}),"\n",(0,d.jsxs)(i.p,{children:["\u9700\u8981\u6ce8\u610f\u662f\uff0c\u4f7f\u7528\u8be5\u6a21\u5757\u64ad\u653e\u97f3\u4e50\u65f6\u662f\u5728\u540e\u53f0\u5f02\u6b65\u64ad\u653e\u7684\uff0c\u5728\u811a\u672c\u7ed3\u675f\u540e\u4f1a\u81ea\u52a8\u7ed3\u675f\u64ad\u653e\uff0c\u56e0\u6b64\u53ef\u80fd\u9700\u8981\u63d2\u5165\u8bf8\u5982",(0,d.jsx)(i.code,{children:"sleep()"}),"\u7684\u8bed\u53e5\u6765\u4f7f\u811a\u672c\u4fdd\u6301\u8fd0\u884c\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-js",children:'//\u64ad\u653e\u97f3\u4e50\r\nmedia.playMusic("/sdcard/1.mp3");\r\n//\u8ba9\u97f3\u4e50\u64ad\u653e\u5b8c\r\nsleep(media.getMusicDuration());\n'})}),"\n",(0,d.jsx)(i.h2,{id:"mediascanfilepath",children:"media.scanFile(path)"}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"path"})," {string} \u5a92\u4f53\u6587\u4ef6\u8def\u5f84"]}),"\n"]}),"\n",(0,d.jsx)(i.p,{children:"\u626b\u63cf\u8def\u5f84 path \u7684\u5a92\u4f53\u6587\u4ef6\uff0c\u5c06\u5b83\u52a0\u5165\u5a92\u4f53\u5e93\u4e2d\uff1b\u6216\u8005\u5982\u679c\u8be5\u6587\u4ef6\u4ee5\u53ca\u88ab\u5220\u9664\uff0c\u5219\u901a\u77e5\u5a92\u4f53\u5e93\u79fb\u9664\u8be5\u6587\u4ef6\u3002"}),"\n",(0,d.jsx)(i.p,{children:"\u5a92\u4f53\u5e93\u5305\u62ec\u76f8\u518c\u3001\u97f3\u4e50\u5e93\u7b49\uff0c\u56e0\u6b64\u8be5\u51fd\u6570\u53ef\u4ee5\u7528\u4e8e\u628a\u67d0\u4e2a\u56fe\u7247\u6587\u4ef6\u52a0\u5165\u76f8\u518c\u3002"}),"\n",(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-js",children:'//\u8bf7\u6c42\u622a\u56fe\r\nrequestScreenCapture(false);\r\n//\u622a\u56fe\r\nvar im = captureScreen();\r\nvar path = "/sdcard/screenshot.png";\r\n//\u4fdd\u5b58\u56fe\u7247\r\nim.saveTo(path);\r\n//\u628a\u56fe\u7247\u52a0\u5165\u76f8\u518c\r\nmedia.scanFile(path);\n'})}),"\n",(0,d.jsx)(i.h2,{id:"mediaplaymusicpath-volume-looping",children:"media.playMusic(path[, volume, looping])"}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"path"})," {string} \u97f3\u4e50\u6587\u4ef6\u8def\u5f84"]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"volume"})," {number} \u64ad\u653e\u97f3\u91cf\uff0c\u4e3a 0~1 \u7684\u6d6e\u70b9\u6570\uff0c\u9ed8\u8ba4\u4e3a 1"]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"looping"})," {boolean} \u662f\u5426\u5faa\u73af\u64ad\u653e\uff0c\u5982\u679c looping \u4e3a",(0,d.jsx)(i.code,{children:"true"}),"\u5219\u5faa\u73af\u64ad\u653e\uff0c\u9ed8\u8ba4\u4e3a",(0,d.jsx)(i.code,{children:"false"})]}),"\n"]}),"\n",(0,d.jsxs)(i.p,{children:["\u64ad\u653e\u97f3\u4e50\u6587\u4ef6 path\u3002\u8be5\u51fd\u6570\u4e0d\u4f1a\u663e\u793a\u4efb\u4f55\u97f3\u4e50\u64ad\u653e\u754c\u9762\u3002\u5982\u679c\u6587\u4ef6\u4e0d\u5b58\u5728\u6216\u8005\u6587\u4ef6\u4e0d\u662f\u53d7\u652f\u6301\u7684\u97f3\u4e50\u683c\u5f0f\uff0c\u5219\u629b\u51fa",(0,d.jsx)(i.code,{children:"UncheckedIOException"}),"\u5f02\u5e38\u3002"]}),"\n",(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-js",children:'//\u64ad\u653e\u97f3\u4e50\r\nmedia.playMusic("/sdcard/1.mp3");\r\n//\u8ba9\u97f3\u4e50\u64ad\u653e\u5b8c\r\nsleep(media.getMusicDuration());\n'})}),"\n",(0,d.jsx)(i.p,{children:"\u5982\u679c\u8981\u5faa\u73af\u64ad\u653e\u97f3\u4e50\uff0c\u5219\u4f7f\u7528 looping \u53c2\u6570\uff1a"}),"\n",(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{children:'```js\r\n//\u4f20\u9012\u7b2c\u4e09\u4e2a\u53c2\u6570\u4e3atrue\u4ee5\u5faa\u73af\u64ad\u653e\u97f3\u4e50\r\nmedia.playMusic("/sdcard/1.mp3", 1, true);\r\n//\u7b49\u5f85\u4e09\u6b21\u64ad\u653e\u7684\u65f6\u95f4\r\nsleep(media.getMusicDuration() * 3);\n'})}),"\n",(0,d.jsxs)(i.p,{children:["\u5982\u679c\u8981\u4f7f\u7528\u97f3\u4e50\u64ad\u653e\u5668\u64ad\u653e\u97f3\u4e50\uff0c\u8c03\u7528",(0,d.jsx)(i.code,{children:"app.viewFile(path)"}),"\u51fd\u6570\u3002"]}),"\n",(0,d.jsx)(i.h2,{id:"mediamusicseektomsec",children:"media.musicSeekTo(msec)"}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"msec"})," {number} \u6beb\u79d2\u6570\uff0c\u8868\u793a\u97f3\u4e50\u8fdb\u5ea6"]}),"\n"]}),"\n",(0,d.jsx)(i.p,{children:"\u628a\u5f53\u524d\u64ad\u653e\u8fdb\u5ea6\u8c03\u6574\u5230\u65f6\u95f4 msec \u7684\u4f4d\u7f6e\u3002\u5982\u679c\u5f53\u524d\u6ca1\u6709\u5728\u64ad\u653e\u97f3\u4e50\uff0c\u5219\u8c03\u7528\u51fd\u6570\u6ca1\u6709\u4efb\u4f55\u6548\u679c\u3002"}),"\n",(0,d.jsxs)(i.p,{children:["\u4f8b\u5982\uff0c\u8981\u628a\u97f3\u4e50\u8c03\u5230 1 \u5206\u949f\u7684\u4f4d\u7f6e\uff0c\u4e3a",(0,d.jsx)(i.code,{children:"media.musicSeekTo(60 * 1000)"}),"\u3002"]}),"\n",(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-js",children:'//\u64ad\u653e\u97f3\u4e50\r\nmedia.playMusic("/sdcard/1.mp3");\r\n//\u8c03\u6574\u523030\u79d2\u7684\u4f4d\u7f6e\r\nmedia.musicSeekTo(30 * 1000);\r\n//\u7b49\u5f85\u97f3\u4e50\u64ad\u653e\u5b8c\u6210\r\nsleep(media.getMusicDuration() - 30 * 1000);\n'})}),"\n",(0,d.jsx)(i.h2,{id:"mediapausemusic",children:"media.pauseMusic()"}),"\n",(0,d.jsx)(i.p,{children:"\u6682\u505c\u97f3\u4e50\u64ad\u653e\u3002\u5982\u679c\u5f53\u524d\u6ca1\u6709\u5728\u64ad\u653e\u97f3\u4e50\uff0c\u5219\u8c03\u7528\u51fd\u6570\u6ca1\u6709\u4efb\u4f55\u6548\u679c\u3002"}),"\n",(0,d.jsx)(i.h2,{id:"mediaresumemusic",children:"media.resumeMusic()"}),"\n",(0,d.jsx)(i.p,{children:"\u7ee7\u7eed\u97f3\u4e50\u64ad\u653e\u3002\u5982\u679c\u5f53\u524d\u6ca1\u6709\u64ad\u653e\u8fc7\u97f3\u4e50\uff0c\u5219\u8c03\u7528\u8be5\u51fd\u6570\u6ca1\u6709\u4efb\u4f55\u6548\u679c\u3002"}),"\n",(0,d.jsx)(i.h2,{id:"mediastopmusic",children:"media.stopMusic()"}),"\n",(0,d.jsx)(i.p,{children:"\u505c\u6b62\u97f3\u4e50\u64ad\u653e\u3002\u5982\u679c\u5f53\u524d\u6ca1\u6709\u5728\u64ad\u653e\u97f3\u4e50\uff0c\u5219\u8c03\u7528\u51fd\u6570\u6ca1\u6709\u4efb\u4f55\u6548\u679c\u3002"}),"\n",(0,d.jsx)(i.h2,{id:"mediaismusicplaying",children:"media.isMusicPlaying()"}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsx)(i.li,{children:"\u8fd4\u56de {boolean}"}),"\n"]}),"\n",(0,d.jsx)(i.p,{children:"\u8fd4\u56de\u5f53\u524d\u662f\u5426\u6b63\u5728\u64ad\u653e\u97f3\u4e50\u3002"}),"\n",(0,d.jsx)(i.h2,{id:"mediagetmusicduration",children:"media.getMusicDuration()"}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsx)(i.li,{children:"\u8fd4\u56de {number}"}),"\n"]}),"\n",(0,d.jsx)(i.p,{children:"\u8fd4\u56de\u5f53\u524d\u97f3\u4e50\u7684\u65f6\u957f\u3002\u5355\u4f4d\u6beb\u79d2\u3002"}),"\n",(0,d.jsx)(i.h2,{id:"mediagetmusiccurrentposition",children:"media.getMusicCurrentPosition()"}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsx)(i.li,{children:"\u8fd4\u56de {number}"}),"\n"]}),"\n",(0,d.jsx)(i.p,{children:"\u8fd4\u56de\u5f53\u524d\u97f3\u4e50\u7684\u64ad\u653e\u8fdb\u5ea6(\u5df2\u7ecf\u64ad\u653e\u7684\u65f6\u95f4)\uff0c\u5355\u4f4d\u6beb\u79d2\u3002"})]})}function u(e={}){const{wrapper:i}={...(0,c.R)(),...e.components};return i?(0,d.jsx)(i,{...e,children:(0,d.jsx)(t,{...e})}):t(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>a,x:()=>r});var s=n(6540);const d={},c=s.createContext(d);function a(e){const i=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),s.createElement(c.Provider,{value:i},e.children)}}}]);