(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{39:function(t,e,n){"use strict";n.r(e);var i=n(70),a=n(55);for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);n(61);var o=n(2),r=n(68),c=Object(o.a)(a.default,i.a,i.b,!1,null,"43d03e50",null);"function"==typeof r.a&&Object(r.a)(c),c.options.__file="blog.vue",e.default=c.exports},43:function(t,e,n){"use strict";var i=n(0);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n(1)),u={};a.default.util.defineReactive(u,"data",{});var o={set:function(t,e){return a.default.set(u.data,t,e)},delete:function(t){return a.default.delete(u.data,t)},get:function(t){return u.data[t]},has:function(t){return!!u.data[t]}};e.default=o},44:function(t,e,n){"use strict";var i=n(0);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n(1)),u=i(n(43)),o=a.default.config.optionMergeStrategies;e.default=function(t){var e=t.options,i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(e.__pageQuery)e.__pageQuery=i;else{e.__pageQuery=i,e.computed=o.computed({$page:function(){return u.default.get(this.$route.fullPath)}},e.computed);var a=function(t){e[t]=o[t]([r(e)],e[t])},r=function(){return function(t,i,a){n.e(10).then(n.t.bind(null,35,7)).then(function(n){n.default(t,e.__pageQuery).then(a)})}};a("beforeRouteEnter"),a("beforeRouteUpdate")}}},55:function(t,e,n){"use strict";n.r(e);var i=n(56),a=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);e.default=a.a},56:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={metaInfo:function(){return{title:this.$page.blog.title,meta:[{property:"og:description",content:this.$page.blog.summary,vmid:"og:description"},{property:"og:image",content:this.$page.blog.cover,vmid:"og:image"}]}}}},57:function(t,e,n){},61:function(t,e,n){"use strict";var i=n(57);n.n(i).a},68:function(t,e,n){"use strict";var i=n(44),a=n.n(i);e.a=(t=>{a()(t,void 0)})},70:function(t,e,n){"use strict";var i=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Layout",[e("img",{staticClass:"cover",attrs:{src:this.$page.blog.cover}}),e("h1",{staticClass:"title"},[this._v(this._s(this.$page.blog.title))]),e("br"),e("div",{staticClass:"blog-container"},[e("div",{staticClass:"content",domProps:{innerHTML:this._s(this.$page.blog.content)}})])])],1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})}}]);