(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{613:function(t,s,a){"use strict";a.r(s);var e=a(6),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("Django默认会创建一个"),a("code",[t._v("settings.py")]),t._v("目录，所有的配置都在这个文件内。")]),t._v(" "),a("p",[t._v("拆分Django设置进行本地和生产环境进行开发。")]),t._v(" "),a("p",[a("strong",[t._v("怎么做？")])]),t._v(" "),a("p",[t._v("将之前"),a("code",[t._v("settings.py")]),t._v("内容放在"),a("code",[t._v("settings/base.py")]),t._v("中。删除原有的"),a("code",[t._v("settings.py")]),t._v("文件。同时新增"),a("code",[t._v("__init__.py")]),t._v(", "),a("code",[t._v("develop.py")]),t._v(", "),a("code",[t._v("product.py")]),t._v(".")]),t._v(" "),a("p",[t._v("独立拆分后，把需要独立配置的内容放在不同的模块中。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://alicdn.itaolaity.com/img/20200729165500.png",alt:""}})]),t._v(" "),a("hr"),t._v(" "),a("p",[a("code",[t._v("__init__.py")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("base "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("develop "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n    live "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果假就不会往下执行")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" ImportError"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    live "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" live"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("product "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n")])])]),a("p",[a("code",[t._v("base.py")])]),t._v(" "),a("p",[t._v("公共配置")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 存放本来的settings.py")]),t._v("\n")])])]),a("p",[a("code",[t._v("develop.py")])]),t._v(" "),a("p",[t._v("开发环境配置")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("DEBUG "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("\nAllower_hosts "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n")])])]),a("p",[a("code",[t._v("product.py")])]),t._v(" "),a("p",[t._v("生产环境配置")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("DEBUG "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),t._v("\nALLOWER_HOSTS "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n")])])]),a("p",[t._v("然后出现了模板找不到的情况，修改"),a("code",[t._v("base.py")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);