(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{21:function(t,e,a){},22:function(t,e,a){"use strict";var n=a(21);a.n(n).a},23:function(t,e,a){"use strict";var n=a(0),i={};n.a.util.defineReactive(i,"data",{}),e.a={set:function(t,e){return n.a.set(i.data,t,e)},delete:function(t){return n.a.delete(i.data,t)},get:function(t){return i.data[t]},has:function(t){return!!i.data[t]}}},24:function(t,e,a){"use strict";var n={props:["link","coverImage","title","author","date","description"]},i=(a(22),a(5)),r=Object(i.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("g-link",{attrs:{to:t.link}},[a("div",{staticClass:"card",staticStyle:{width:"18rem",margin:"20px"}},[a("img",{attrs:{src:t.coverImage}}),a("div",{staticClass:"card-body"},[a("h4",{staticClass:"card-title"},[t._v(t._s(t.title))]),a("h5",{staticClass:"card-subtitle"},[a("span",{staticClass:"date"},[t._v(t._s(t.date)+","+t._s(t.author))])]),a("p",{staticClass:"card-text"},[t._v(t._s(t.description))])])])])},[],!1,null,"3e6189ff",null);e.a=r.exports},25:function(t,e,a){"use strict";var n=a(0),i=a(23),r=n.a.config.optionMergeStrategies;e.a=function(t){var e=t.options,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(e.__pageQuery)e.__pageQuery=n;else{e.__pageQuery=n,e.computed=r.computed({$page:function(){return i.a.get(this.$route.path)}},e.computed);var s=function(t){e[t]=r[t]([c(e)],e[t])},c=function(){return function(t,n,i){a.e(11).then(a.bind(null,29)).then(function(a){a.default(t,e.__pageQuery).then(i)})}};s("beforeRouteEnter"),s("beforeRouteUpdate")}}},26:function(t,e,a){},30:function(t,e,a){"use strict";var n=a(26);a.n(n).a},39:function(t,e,a){"use strict";a.r(e);var n={components:{card:a(24).a}},i=(a(30),a(5)),r=a(25),s=function(t){Object(r.a)(t,void 0)},c=Object(i.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",{staticClass:"home"},[e("h3",{attrs:{id:"title"}},[this._v("เล่าไปเรื่อย")]),e("div",{attrs:{id:"list-post-container"}},this._l(this.$page.allBlogPost.edges,function(t){var a=t.node;return e("card",{key:a.id,attrs:{coverImage:a.image.src,link:a.path,title:a.title,date:a.date,author:a.author,description:a.description}})}),1)])},[],!1,null,"a73c36c4",null);"function"==typeof s&&s(c);e.default=c.exports}}]);