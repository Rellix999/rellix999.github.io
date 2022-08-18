(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2,3,5],{247:function(t,e,l){var content=l(250);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(47).default)("29957ae5",content,!0,{sourceMap:!1})},248:function(t,e,l){"use strict";l.r(e);var n=l(2).a.extend({props:["title","subtitle"]}),r=l(22),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"bg-blue-100 bg-cover"},[l("div",{staticClass:"flex w-full h-full backdrop-filter backdrop-blur"},[l("div",{staticClass:"container mx-auto px-4 flex flex-col text-center text-black w-full my-6 filter drop-shadow-2xl"},[l("h1",{staticClass:"sm:text-3xl text-2xl font-bold mb-4"},[t._v(t._s(t.title))]),t._v(" "),l("p",[t._v(t._s(t.subtitle))])])])])}),[],!1,null,null,null);e.default=component.exports},249:function(t,e,l){"use strict";l(247)},250:function(t,e,l){var n=l(46)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\n.contact-map-item:hover .icon-container i[data-v-47f6646d]{\n  --tw-translate-x:0;\n  --tw-translate-y:0;\n  --tw-rotate:0;\n  --tw-skew-x:0;\n  --tw-skew-y:0;\n  --tw-scale-x:1;\n  --tw-scale-y:1;\n  transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  --tw-rotate:12deg;\n  transition-property:all;\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration:150ms\n}\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n},252:function(t,e,l){"use strict";l.r(e);var n=l(2).a.extend({props:["iconClass","title","text","url"]}),r=(l(249),l(22)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("a",{staticClass:"contact-map-item flex w-full py-2 transition-all hover:bg-blue-100",attrs:{href:t.url,target:"_blank"}},[l("div",{staticClass:"icon-container flex items-center justify-center px-2 mr-2"},[l("i",{staticClass:"bg-blue-700 p-3 rounded-full text-white",class:t.iconClass})]),t._v(" "),l("div",[l("h3",{staticClass:"font-semibold"},[t._v(t._s(t.title))]),t._v(" "),t.text?l("div",[t._v(t._s(t.text))]):l("div",[t._v(t._s(t.url))])])])}),[],!1,null,"47f6646d",null);e.default=component.exports},255:function(t,e,l){"use strict";l.r(e);var n=l(22),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"text-gray-600 body-font relative h-full"},[t._m(0),t._v(" "),l("div",{staticClass:"relative z-20 h-full"},[l("div",{staticClass:"container px-5 py-24 mx-auto flex"},[l("div",{staticClass:"lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 shadow-md"},[l("h2",{staticClass:"text-gray-900 text-lg mb-4 font-medium title-font"},[t._v("Contact")]),t._v(" "),l("ContactMapItem",{staticClass:"border-b-2",attrs:{iconClass:"fas fa-user-tie",title:"KvK number (Chamber of Commerce)",text:"804948700000",url:"https://www.kvk.nl/orderstraat/product-kiezen/?kvknummer=804948700000"}}),t._v(" "),l("ContactMapItem",{staticClass:"border-b-2",attrs:{iconClass:"fas fa-envelope",title:"E-mail",text:"thijs.schalk@gmail.com",url:"mailto:thijs.schalk@gmail.com"}}),t._v(" "),l("ContactMapItem",{staticClass:"border-b-2",attrs:{iconClass:"fab fa-linkedin",title:"LinkedIn",text:"thijsschalk",url:"https://www.linkedin.com/in/thijsschalk/"}}),t._v(" "),l("ContactMapItem",{attrs:{iconClass:"fab fa-instagram",title:"Instagram",text:"thijs.999",url:"https://www.instagram.com/thijs.999/"}})],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"absolute z-10 inset-0 bg-gray-300"},[e("iframe",{staticStyle:{border:"0",filter:"grayscale(1) contrast(1.2) opacity(0.4)"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39386.09268446376!2d5.060458644846388!3d51.90420155992009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c689f964ab4f1d%3A0x31b100b98afcca3f!2sLeerdam!5e0!3m2!1sen!2snl!4v1660825421954!5m2!1sen!2snl",width:"100%",height:"100%",frameborder:"0",allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"}})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ContactMapItem:l(252).default})},262:function(t,e,l){"use strict";l.r(e);var n=l(22),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex flex-col"},[l("PageHeading",{attrs:{title:"Contact",subtitle:"Let's make something amazing together."}}),t._v(" "),l("ContactMap")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageHeading:l(248).default,ContactMap:l(255).default})}}]);