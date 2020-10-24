(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{563:function(t,a,s){"use strict";s.r(a);var n=s(6),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("code",[t._v("Django3.x")])]),t._v(" "),s("p",[t._v("目前版本是"),s("code",[t._v("Django==3.1.2")])]),t._v(" "),s("h3",{attrs:{id:"_1-有什么不一样"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-有什么不一样"}}),t._v(" 1. 有什么不一样")]),t._v(" "),s("p",[t._v("对Python版本要求3.6")]),t._v(" "),s("p",[t._v("支持ASGI，异步服务网关接口。")]),t._v(" "),s("p",[t._v("支持原生的异步视图，同时也支持异步中间件。")]),t._v(" "),s("h3",{attrs:{id:"_2-支持asgi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-支持asgi"}}),t._v(" 2. 支持ASGI")]),t._v(" "),s("blockquote",[s("p",[t._v("历史背景：如何实时消息通知机制？")])]),t._v(" "),s("p",[s("strong",[t._v("HTTP协议")])]),t._v(" "),s("p",[t._v("使用Http协议，每隔一段时间询问一次。 (轮询方式)")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://alicdn.taoya.art/img/20201021225558.png",alt:"image-20201021225557958"}})]),t._v(" "),s("ul",[s("li",[t._v("服务器压力很大")]),t._v(" "),s("li",[t._v("发送了很多重复的报文")])]),t._v(" "),s("p",[t._v("（长轮询）")]),t._v(" "),s("p",[t._v("Http是一种同步的通信机制。")]),t._v(" "),s("p",[s("strong",[t._v("WebSocket协议")])]),t._v(" "),s("p",[t._v("建立持久的双向通信的连接")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://alicdn.taoya.art/img/20201021230014.png",alt:"image-20201021230014588"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"http://alicdn.taoya.art/img/20201021230110.png",alt:"image-20201021230110324"}})]),t._v(" "),s("blockquote",[s("p",[t._v("单台服务器并发连接")])]),t._v(" "),s("p",[s("img",{attrs:{src:"http://alicdn.taoya.art/img/20201021230325.png",alt:"image-20201021230324991"}})]),t._v(" "),s("h3",{attrs:{id:"_3-体验"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-体验"}}),t._v(" 3. 体验")]),t._v(" "),s("p",[t._v("找到一个目录")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("python3 -m venv venv\n")])])]),s("p",[t._v("Mac电脑")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("➜  "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" ./venv/bin/activate\n")])])]),s("p",[t._v("可以看到新增的"),s("code",[t._v("asg i.py")]),t._v("文件。")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("├── ddd\n│   ├── __init__.py\n│   ├── asgi.py\n│   ├── settings.py\n│   ├── urls.py\n│   └── wsgi.py\n└── manage.py\n")])])]),s("p",[t._v("第一个异步视图")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" django"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("http "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" HttpResponse\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("index")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" HttpResponse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"异步视图"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[s("code",[t._v("urls.py")])]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" django"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("contrib "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" admin\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" django"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("urls "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" path\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" django31"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("views "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" index\n\nurlpatterns "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'admin/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" admin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("site"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("urls"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);