(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{162:function(t,e,n){var content=n(242);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("add73248",content,!0,{sourceMap:!1})},163:function(t,e,n){var content=n(244);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("445d685c",content,!0,{sourceMap:!1})},164:function(t,e,n){"use strict";n.r(e);var o={computed:{currentYear:function(){return(new Date).getFullYear()}}},r=n(22),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"bg-gray-100 text-gray-400 py-4 text-sm text-center"},[n("div",{staticClass:"container mx-auto"},[t._v("© "+t._s(t.currentYear)+" Thijs Schalk")])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:n(164).default})},170:function(t,e,n){"use strict";n(241);var o=n(22),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col h-full"},[n("Navbar"),t._v(" "),n("Nuxt",{staticClass:"flex-grow"}),t._v(" "),n("Footer")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Navbar:n(245).default,Footer:n(164).default})},171:function(t,e,n){n(172),t.exports=n(173)},241:function(t,e,n){"use strict";n(162)},242:function(t,e,n){var o=n(44)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\nhtml{\n  font-family:Inter,sans-serif;\n  overflow-y:scroll\n}\n#__layout,#__nuxt,body,html{\n  display:block;\n  height:100%;\n  width:100%\n}\n.text-link{\n  --tw-text-opacity:1;\n  color:rgba(59, 130, 246, var(--tw-text-opacity))\n}\n.text-link:hover{\n  text-decoration:underline\n}\n.table-responsive{\n  width:100%;\n  overflow-y:auto\n}\n.table{\n  width:100%;\n  table-layout:auto;\n  white-space:nowrap;\n  text-align:left\n}\n.table tbody tr:nth-child(2n){\n  --tw-bg-opacity:1;\n  background-color:rgba(243, 244, 246, var(--tw-bg-opacity))\n}\n.table tbody tr:nth-child(odd){\n  --tw-bg-opacity:1;\n  background-color:rgba(249, 250, 251, var(--tw-bg-opacity))\n}\n.table tbody tr:not(:first-child) td{\n  border-top-width:2px;\n  --tw-border-opacity:1;\n  border-color:rgba(229, 231, 235, var(--tw-border-opacity))\n}\n.table tbody td{\n  padding-left:1rem;\n  padding-right:1rem;\n  padding-top:0.75rem;\n  padding-bottom:0.75rem\n}\np{\n  margin-bottom:1rem\n}\nul{\n  list-style-type:disc;\n  padding-left:1rem\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},243:function(t,e,n){"use strict";n(163)},244:function(t,e,n){var o=n(44)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\n.nuxt-link-active[data-v-a3912958]:not(.app-name){\n  --tw-bg-opacity:1;\n  background-color:rgba(30, 58, 138, var(--tw-bg-opacity));\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity))\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},245:function(t,e,n){"use strict";n.r(e);var o=n(2).a.extend({data:function(){return{isMobileMenuHidden:!0}},methods:{toggleMobileMenu:function(){this.isMobileMenuHidden=!this.isMobileMenuHidden}}}),r=(n(243),n(22)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"bg-blue-700 text-white"},[n("div",{staticClass:"container mx-auto px-4"},[n("div",{staticClass:"relative flex items-center justify-between h-16"},[n("div",{staticClass:"absolute inset-y-0 left-0 flex items-center sm:hidden"},[n("button",{staticClass:"inline-flex items-center justify-center p-2 rounded-md hover:text-white hover:bg-blue-900",attrs:{type:"button","aria-controls":"mobile-menu","aria-expanded":"false"},on:{click:t.toggleMobileMenu}},[n("span",{staticClass:"sr-only"},[t._v("Open main menu")]),t._v(" "),n("svg",{staticClass:"block h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"}})]),t._v(" "),n("svg",{staticClass:"hidden h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])])]),t._v(" "),n("div",{staticClass:"flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"},[n("div",{staticClass:"flex-shrink-0 flex items-center text-2xl text-white font-bold"},[n("NuxtLink",{staticClass:"app-name",attrs:{to:"/"}},[t._v("Thijs Schalk")])],1),t._v(" "),n("div",{staticClass:"hidden sm:block sm:ml-auto"},[n("div",{staticClass:"flex space-x-4"},[n("NuxtLink",{staticClass:"hover:bg-blue-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium",attrs:{to:"/cv"}},[t._v("CV")]),t._v(" "),n("NuxtLink",{staticClass:"hover:bg-blue-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium",attrs:{to:"/contact"}},[t._v("Contact")]),t._v(" "),n("NuxtLink",{staticClass:"hover:bg-blue-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium",attrs:{to:"/resources"}},[t._v("Resources")])],1)])])])]),t._v(" "),n("div",{staticClass:"sm:hidden",class:{hidden:t.isMobileMenuHidden},attrs:{id:"mobile-menu"}},[n("div",{staticClass:"px-2 pt-2 pb-3 space-y-1",on:{click:t.toggleMobileMenu}},[n("NuxtLink",{staticClass:"hover:bg-blue-900 hover:text-white block px-3 py-2 rounded-md font-medium",attrs:{to:"/cv"}},[t._v("CV")]),t._v(" "),n("NuxtLink",{staticClass:"hover:bg-blue-900 hover:text-white block px-3 py-2 rounded-md font-medium",attrs:{to:"/contact"}},[t._v("Contact")]),t._v(" "),n("NuxtLink",{staticClass:"hover:bg-blue-900 hover:text-white block px-3 py-2 rounded-md font-medium",attrs:{to:"/resources"}},[t._v("Resources")])],1)])])}),[],!1,null,"a3912958",null);e.default=component.exports}},[[171,10,1,11]]]);