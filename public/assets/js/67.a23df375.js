(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{733:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"nuxt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nuxt"}}),t._v(" Nuxt")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/nuxt/nuxt.js/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"是什么？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#是什么？"}}),t._v(" 是什么？")]),t._v(" "),a("p",[t._v("Nuxt.js 是一个基于 Vue.js 的通用应用框架。")]),t._v(" "),a("h3",{attrs:{id:"特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特点"}}),t._v(" 特点")]),t._v(" "),a("ol",[a("li",[t._v("基于Vue.js")]),t._v(" "),a("li",[t._v("服务端渲染")]),t._v(" "),a("li",[t._v("强大的路由功能")]),t._v(" "),a("li",[t._v("静态文件服务")])]),t._v(" "),a("h3",{attrs:{id:"服务端渲染ssr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务端渲染ssr"}}),t._v(" 服务端渲染"),a("code",[t._v("SSR")])]),t._v(" "),a("p",[a("strong",[t._v("单页应用程序SPA")])]),t._v(" "),a("h3",{attrs:{id:"首次使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#首次使用"}}),t._v(" 首次使用")]),t._v(" "),a("p",[t._v("创建项目")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ npx create-nuxt-app "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("项目名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n//Or\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" create-nuxt-app "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("项目名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n// Or\n$ vue init nuxt-community/starter-template "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("项目名称"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])]),a("p",[a("img",{attrs:{src:"http://alicdn.itaolaity.com/img/20200630141349.png",alt:""}})]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 目录结构")]),t._v("\n.nuxt: \nassets: 资源文件。\ncomponents: 组件，存放页面可复用组件。\nlayouts: 布局，默认default。\nmiddleware: 中间件.权限"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("认证\npages: 页面目录,一个Vue文件即一个页面。\nplugin: 插件目录。\nstatic: 静态文件。\nstore: 状态管理。\nnuxt.config.js: 配置文件。\n")])])]),a("hr"),t._v(" "),a("h2",{attrs:{id:"目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录"}}),t._v(" 目录")]),t._v(" "),a("h3",{attrs:{id:"pages目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pages目录"}}),t._v(" pages目录")]),t._v(" "),a("p",[t._v("Nuxt.js 会依据 "),a("code",[t._v("pages")]),t._v(" 目录中的所有 "),a("code",[t._v("*.vue")]),t._v(" 文件生成应用的路由配置。")]),t._v(" "),a("p",[t._v("默认是"),a("code",[t._v("pages/index.vue")])]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("pages/")]),t._v("新建一个"),a("code",[t._v("about.vue")])]),t._v(" "),a("p",[t._v("然后打开"),a("code",[t._v("127.0.0.1:3000/about")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://alicdn.itaolaity.com/img/20200630142818.png",alt:""}})]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由"}}),t._v(" 路由")]),t._v(" "),a("p",[a("em",[t._v("Nuxt.js 依据")]),t._v(" "),a("code",[t._v("pages")]),t._v(" "),a("em",[t._v("目录结构自动生成")]),t._v(" "),a("a",{attrs:{href:"https://github.com/vuejs/vue-router",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-router"),a("OutboundLink")],1),t._v(" "),a("em",[t._v("模块的路由配置。")]),a("strong",[a("u",[t._v("（无需手动配置）")])])]),t._v(" "),a("h3",{attrs:{id:"基础路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础路由"}}),t._v(" 基础路由")]),t._v(" "),a("p",[a("strong",[t._v("路由跳转")])]),t._v(" "),a("p",[t._v("要在页面之间使用路由，使用"),a("code",[t._v("<nuxt-link>")]),t._v("标签")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("nuxt-link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("to")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("/about"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("关于"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("nuxt-link")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[a("strong",[t._v("路由映射")])]),t._v(" "),a("p",[t._v("因为不需要配置路由，所以要知道映射规则")]),t._v(" "),a("p",[t._v("例子：")]),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[t._v("pages/\n--| user/\n-----| index.vue\n-----| setting.vue\n--| index.vue\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("router"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  routes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'index'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      component"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pages/index.vue'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'user'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/user'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      component"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pages/user/index.vue'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'user-setting'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/user/setting'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      component"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pages/user/setting.vue'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("/\n/user\n/user/setting\n")])])]),a("h3",{attrs:{id:"动态路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态路由"}}),t._v(" 动态路由")]),t._v(" "),a("p",[t._v("在 Nuxt.js 里面定义带参数的动态路由，需要创建对应的"),a("strong",[t._v("以下划线作为前缀")]),t._v("的 Vue 文件 或 目录。")]),t._v(" "),a("p",[t._v("比如创建一个"),a("code",[t._v("pages/user/_id.vue")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 路由映射")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'user-id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/user/:id?'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    component"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pages/user/_id.vue'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        用户 {{$route.params}}\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("访问"),a("code",[t._v("http://127.0.0.1:3000/user/1/")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://alicdn.itaolaity.com/img/20200630144516.png",alt:""}})]),t._v(" "),a("blockquote",[a("p",[t._v("路由参数校验")])]),t._v(" "),a("p",[t._v("Nuxt.js 可以让你在动态路由组件中定义参数校验方法。")]),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("validate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" params "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v("\\d"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("hr"),t._v(" "),a("h3",{attrs:{id:"嵌套路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#嵌套路由"}}),t._v(" 嵌套路由")]),t._v(" "),a("p",[t._v("需要添加一个 "),a("u",[t._v("Vue 文件")]),t._v("，同时添加一个"),a("strong",[t._v("与该文件同名")]),t._v("的目录用来存放子视图组件。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("pages"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" users"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" _id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" users"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("router"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  routes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/users'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      component"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pages/users.vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      children"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          component"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pages/users/index.vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'users'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("':id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          component"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pages/users/_id.vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'users-id'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"更多参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更多参考"}}),t._v(" 更多参考")]),t._v(" "),a("p",[t._v("官网")]),t._v(" "),a("p",[t._v("https://zh.nuxtjs.org/guide")])])}),[],!1,null,null,null);s.default=e.exports}}]);