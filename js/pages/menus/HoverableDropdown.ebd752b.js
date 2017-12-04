webpackJsonp([0],{"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/menus/Dropdown.vue":function(e,o,s){"use strict";o.a={name:"dropdown",props:{title:{type:String,required:!0},icon:String}}},"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/menus/TopNav.vue":function(e,o,s){"use strict";o.a={name:"top-nav",props:{isResponsive:Boolean,isBottom:Boolean},data:function(){return{isActive:!1}},computed:{classes:function(){var e=[];return this.isResponsive&&e.push("is-responsive"),this.isActive&&e.push("is-active"),this.isBottom&&e.push("is-bottom"),e}},methods:{toggleMenu:function(){this.isActive=!this.isActive}}}},"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/pages/menus/HoverableDropdown.vue":function(e,o,s){"use strict";var n=s("./src/components/menus/TopNav.vue"),d=s("./src/components/menus/Dropdown.vue");o.a={name:"hoverable-dropdown-page",data:function(){return{examples:[["``` html",'<div class="dropdown">','  <button class="dropbtn">Dropdown</button>','  <div class="dropdown-content">','    <a href="#">Link 1</a>','    <a href="#">Link 2</a>','    <a href="#">Link 3</a>',"  </div>","</div>","```"],["``` css","/* Dropdown Button */",".dropbtn {","  background-color: #4CAF50;","  color: white;","  padding: 16px;","  font-size: 16px;","  border: none;","  cursor: pointer;","}","","/* The container <div> - needed to position the dropdown content */",".dropdown {","  position: relative;","  display: inline-block;","}","","/* Dropdown Content (Hidden by Default) */",".dropdown-content {","  display: none;","  position: absolute;","  background-color: #f9f9f9;","  min-width: 160px;","  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);","  z-index: 1;","}","","/* Links inside the dropdown */",".dropdown-content a {","  color: black;","  padding: 12px 16px;","  text-decoration: none;","  display: block;","}","","/* Change color of dropdown links on hover */",".dropdown-content a:hover {background-color: #f1f1f1}","","/* Show the dropdown menu on hover */",".dropdown:hover .dropdown-content {","  display: block;","}","","/* Change the background color of the dropdown button when the dropdown content is shown */",".dropdown:hover .dropbtn {","  background-color: #3e8e41;","}","```"]]}},components:{Dropdown:d.a,TopNav:n.a}}},'./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-1f730e36","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/menus/Dropdown.vue':function(e,o,s){o=e.exports=s("./node_modules/css-loader/lib/css-base.js")(void 0),o.push([e.i,".dropdown{position:relative;display:inline-block}.dropdown button{background-color:#4caf50;color:#fff;padding:16px;font-size:16px;border:none;cursor:pointer}.dropdown .content{display:none;position:absolute;background-color:#f9f9f9;min-width:160px;box-shadow:0 8px 16px 0 rgba(0,0,0,.2);z-index:1}.dropdown .content a{color:#000;padding:12px 16px;text-decoration:none;display:block}.dropdown .content a:hover{background-color:#f1f1f1}.dropdown:hover button{background-color:#3e8e41}.dropdown:hover .content{display:block}",""])},'./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-3abf742a","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/menus/HoverableDropdown.vue':function(e,o,s){o=e.exports=s("./node_modules/css-loader/lib/css-base.js")(void 0),o.push([e.i,".right-aligned-dropdown-example .sample{min-height:300px;flex-direction:column}.right-aligned-dropdown-example .sample .buttons{display:flex;justify-content:space-between}.right-aligned-dropdown-example .sample .buttons .right .content{right:0}.dropdown-menu-in-navbar-example .sample{min-height:200px;flex-direction:column}.dropdown-menu-in-navbar-example .sample .top-nav{overflow:inherit}.dropdown-menu-in-navbar-example .sample .top-nav .dropdown button{background-color:#333;color:#f2f2f2;border-radius:0}.dropdown-menu-in-navbar-example .sample .top-nav .dropdown button:hover{background-color:#ddd;color:#000}.dropdown-menu-in-navbar-example .sample .top-nav .dropdown a{text-align:left}",""])},'./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-5f3d80ec","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/menus/TopNav.vue':function(e,o,s){o=e.exports=s("./node_modules/css-loader/lib/css-base.js")(void 0),o.push([e.i,".top-nav{width:100%;background-color:#333;overflow:auto;display:flex}.top-nav.is-responsive a{float:left}.top-nav.is-bottom{position:absolute!important;bottom:0}.top-nav a{display:block;color:#f2f2f2;text-align:center;padding:14px 16px;text-decoration:none;font-size:18px;cursor:pointer}.top-nav a:hover{background-color:#ddd;color:#000}.top-nav a.is-active{background-color:#4caf50;color:#fff}.top-nav a.toggle-menu{display:none}@media (max-width:768px){.top-nav.is-responsive{display:block}.top-nav.is-responsive a:not(.is-active){display:none}.top-nav.is-responsive .toggle-menu{float:right;font-size:1em;display:block!important}.top-nav.is-responsive.is-active{position:relative}.top-nav.is-responsive.is-active.is-bottom .toggle-menu{bottom:0;top:unset}.top-nav.is-responsive.is-active .toggle-menu{position:absolute;right:0;top:0}.top-nav.is-responsive.is-active a{float:none;display:block;text-align:left}}",""])},'./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-1f730e36","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/menus/Dropdown.vue':function(e,o,s){"use strict";var n=function(){var e=this,o=e.$createElement,s=e._self._c||o;return s("div",{staticClass:"dropdown"},[s("button",[e._v("\n    "+e._s(e.title)+"\n    "),e.icon?s("i",{staticClass:"fa",class:e.icon}):e._e()]),e._v(" "),s("div",{staticClass:"content"},[e._t("default")],2)])},d=[],t={render:n,staticRenderFns:d};o.a=t},'./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-3abf742a","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/menus/HoverableDropdown.vue':function(e,o,s){"use strict";var n=function(){var e=this,o=e.$createElement,s=e._self._c||o;return s("page",{attrs:{title:"Hoverable Dropdown",intro:"a hoverable dropdown menu with CSS"}},[s("template",{slot:"header"},[s("h2",{staticClass:"title"},[e._v("Dropdown")]),e._v(" "),s("p",[e._v("A dropdown menu is a toggleable menu that allows the user to choose one value from a predefined list:")])]),e._v(" "),s("sample",[s("dropdown",{attrs:{title:"Hover Me"}},[s("a",{attrs:{href:"javascript:void(0)"}},[e._v("Link 1")]),e._v(" "),s("a",{attrs:{href:"javascript:void(0)"}},[e._v("Link 2")]),e._v(" "),s("a",{attrs:{href:"javascript:void(0)"}},[e._v("Link 3")])])],1),e._v(" "),s("template",{slot:"examples"},[s("hr"),e._v(" "),s("h2",{staticClass:"title"},[e._v("Create A Hoverable Dropdown")]),e._v(" "),s("p",[e._v("Create a dropdown menu that appears when the user moves the mouse over an element.")]),e._v(" "),s("step",{attrs:{no:"1",html:""}}),e._v(" "),s("example-code",{attrs:{code:e.examples[0]}}),e._v(" "),s("h3",{staticClass:"explain"},[e._v("Example Explained")]),e._v(" "),s("p",[e._v("Use any element to open the dropdown menu, e.g. a <button>, <a> or <p> element.")]),e._v(" "),s("p",[e._v("Use a container element (like <div>) to create the dropdown menu and add the dropdown links inside it.")]),e._v(" "),s("p",[e._v("Wrap a <div> element around the button and the <div> to position the dropdown menu correctly with CSS.")]),e._v(" "),s("hr"),e._v(" "),s("step",{attrs:{no:"2",css:""}}),e._v(" "),s("example-code",{attrs:{code:e.examples[1]}}),e._v(" "),s("h3",{staticClass:"explain"},[e._v("Example Explained")]),e._v(" "),s("p",[e._v("We have styled the dropdown button with a background-color, padding, etc.")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v(".dropdown")]),e._v(" class uses "),s("code",[e._v("position:relative")]),e._v(", which is needed when we want the dropdown content to be placed right below the dropdown button (using "),s("code",[e._v("position:absolute")]),e._v(").")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v(".dropdown-content")]),e._v(" class holds the actual dropdown menu. It is hidden by default, and will be displayed on hover (see below). Note the "),s("code",[e._v("min-width")]),e._v(" is set to 160px. Feel free to change this. "),s("b",[e._v("Tip:")]),e._v(" If you want the width of the dropdown content to be as wide as the dropdown button, set the "),s("code",[e._v("width")]),e._v(" to 100% (and "),s("code",[e._v("overflow:auto")]),e._v(" to enable scroll on small screens).")]),e._v(" "),s("p",[e._v("Instead of using a border, we have used the "),s("code",[e._v("box-shadow")]),e._v(' property to make the dropdown menu look like a "card". We also use z-index to place the dropdown in front of other elements.')]),e._v(" "),s("p",[e._v("The "),s("code",[e._v(":hover")]),e._v(" selector is used to show the dropdown menu when the user moves the mouse over the dropdown button.")]),e._v(" "),s("hr"),e._v(" "),s("h2",{staticClass:"title"},[e._v("Right-aligned dropdown")]),e._v(" "),s("example-code",{staticClass:"right-aligned-dropdown-example"},[s("h2",[e._v("Aligned Dropdown Content")]),e._v(" "),s("p",[e._v("Determine whether the dropdown content should go from left to right or right to left with the left and right properties.")]),e._v(" "),s("div",{staticClass:"buttons"},[s("dropdown",{staticClass:"left",attrs:{title:"Left"}},[s("a",{attrs:{href:"javascript:void(0)"}},[e._v("Link 1")]),e._v(" "),s("a",{attrs:{href:"javascript:void(0)"}},[e._v("Link 2")]),e._v(" "),s("a",{attrs:{href:"javascript:void(0)"}},[e._v("Link 3")])]),e._v(" "),s("dropdown",{staticClass:"right",attrs:{title:"Right"}},[s("a",{attrs:{href:"javascript:void(0)"}},[e._v("Link 1")]),e._v(" "),s("a",{attrs:{href:"javascript:void(0)"}},[e._v("Link 2")]),e._v(" "),s("a",{attrs:{href:"javascript:void(0)"}},[e._v("Link 3")])])],1)]),e._v(" "),s("hr"),e._v(" "),s("h2",{staticClass:"title"},[e._v("Dropdown Menu in Navbar")]),e._v(" "),s("example-code",{staticClass:"dropdown-menu-in-navbar-example"},[s("top-nav",[s("a",[e._v("Home")]),e._v(" "),s("a",[e._v("News")]),e._v(" "),s("dropdown",{attrs:{title:"Dropdown",icon:"fa-caret-down"}},[s("a",{attrs:{href:"javascript:void(0)"}},[e._v("Link 1")]),e._v(" "),s("a",{attrs:{href:"javascript:void(0)"}},[e._v("Link 2")]),e._v(" "),s("a",{attrs:{href:"javascript:void(0)"}},[e._v("Link 3")])])],1),e._v(" "),s("h3",[e._v("Dropdown Menu inside a Navigation Bar")]),e._v(" "),s("p",[e._v('Hover over the "Dropdown" link to see the dropdown menu.')])],1)],1)],2)},d=[],t={render:n,staticRenderFns:d};o.a=t},'./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-5f3d80ec","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/menus/TopNav.vue':function(e,o,s){"use strict";var n=function(){var e=this,o=e.$createElement,s=e._self._c||o;return s("nav",{staticClass:"top-nav",class:e.classes},[e._t("default"),e._v(" "),e.isResponsive?s("a",{staticClass:"toggle-menu",on:{click:function(o){e.toggleMenu()}}},[e._v("☰")]):e._e()],2)},d=[],t={render:n,staticRenderFns:d};o.a=t},'./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-1f730e36","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/menus/Dropdown.vue':function(e,o,s){var n=s('./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-1f730e36","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/menus/Dropdown.vue');"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);s("./node_modules/vue-style-loader/lib/addStylesClient.js")("156218ca",n,!0)},'./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-3abf742a","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/menus/HoverableDropdown.vue':function(e,o,s){var n=s('./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-3abf742a","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/menus/HoverableDropdown.vue');"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);s("./node_modules/vue-style-loader/lib/addStylesClient.js")("476ff8b2",n,!0)},'./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-5f3d80ec","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/menus/TopNav.vue':function(e,o,s){var n=s('./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-5f3d80ec","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/menus/TopNav.vue');"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);s("./node_modules/vue-style-loader/lib/addStylesClient.js")("1da746c4",n,!0)},"./src/components/menus/Dropdown.vue":function(e,o,s){"use strict";function n(e){s('./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-1f730e36","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/menus/Dropdown.vue')}var d=s("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/menus/Dropdown.vue"),t=s('./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-1f730e36","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/menus/Dropdown.vue'),a=s("./node_modules/vue-loader/lib/component-normalizer.js"),l=n,r=a(d.a,t.a,!1,l,null,null);o.a=r.exports},"./src/components/menus/TopNav.vue":function(e,o,s){"use strict";function n(e){s('./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-5f3d80ec","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/menus/TopNav.vue')}var d=s("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/menus/TopNav.vue"),t=s('./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-5f3d80ec","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/menus/TopNav.vue'),a=s("./node_modules/vue-loader/lib/component-normalizer.js"),l=n,r=a(d.a,t.a,!1,l,null,null);o.a=r.exports},"./src/pages/menus/HoverableDropdown.vue":function(e,o,s){"use strict";function n(e){s('./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-3abf742a","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/menus/HoverableDropdown.vue')}Object.defineProperty(o,"__esModule",{value:!0});var d=s("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/pages/menus/HoverableDropdown.vue"),t=s('./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-3abf742a","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/menus/HoverableDropdown.vue'),a=s("./node_modules/vue-loader/lib/component-normalizer.js"),l=n,r=a(d.a,t.a,!1,l,null,null);o.default=r.exports}});
//# sourceMappingURL=HoverableDropdown.ebd752b.js.map