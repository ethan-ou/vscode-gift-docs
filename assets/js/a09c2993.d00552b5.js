"use strict";(self.webpackChunkvscode_gift_docs=self.webpackChunkvscode_gift_docs||[]).push([[128],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,h=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8495:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],s={id:"introduction",title:"Introduction"},l=void 0,u={unversionedId:"introduction",id:"introduction",title:"Introduction",description:"What is GIFT?",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/vscode-gift-docs/docs/introduction",draft:!1,tags:[],version:"current",frontMatter:{id:"introduction",title:"Introduction"},sidebar:"docs",next:{title:"Installation",permalink:"/vscode-gift-docs/docs/installation"}},c={},p=[{value:"What is GIFT?",id:"what-is-gift",level:2},{value:"Motivation",id:"motivation",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-is-gift"},"What is GIFT?"),(0,i.kt)("p",null,"GIFT or General Import Format Template, is a language used to write and edit question banks for Moodle, without needing to use Moodle's interface."),(0,i.kt)("p",null,"Instead of clicking through a web page, the GIFT format lets you write questions using plain text, similar to writing in a Word document."),(0,i.kt)("p",null,"A typical multiple choice question can be written in the following manner:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plain"},"What is the largest desert on Earth? {\n    =Antarctica\n    ~Sahara Desert\n    ~Australian Desert\n    ~Arabian Desert\n}\n")),(0,i.kt)("p",null,"Questions can then be uploaded to Moodle, allowing users to bypass the traditional method of authoring on Moodle."),(0,i.kt)("p",null,"This approach has a couple of advantages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Easy to write questions quickly"),(0,i.kt)("li",{parentName:"ul"},"Simple to edit, review and delete existing questions"),(0,i.kt)("li",{parentName:"ul"},"Can work offline or in remote places without issue"),(0,i.kt)("li",{parentName:"ul"},"Easily share question banks with people who cannot access Moodle")),(0,i.kt)("p",null,"All these benefits lead to faster development times for Moodle question banks and better quality questions for students."),(0,i.kt)("h2",{id:"motivation"},"Motivation"),(0,i.kt)("p",null,"As Moodle users, we regularly encounter courses that need ",(0,i.kt)("strong",{parentName:"p"},"hundreds of questions")," written to accompany course content. Developing these questions from scratch is hard enough. Inputting these questions into Moodle however, takes a lot of time and effort."),(0,i.kt)("p",null,"In frustration, we tried to look for alternatives and found the that we could use General Import Format Template (GIFT)."),(0,i.kt)("p",null,"The GIFT format allowed us to write ",(0,i.kt)("strong",{parentName:"p"},"hundreds of questions in half the time"),". Instead of writing questions directly in Moodle, we could write straight to plain text, bypassing Moodle until the very end of the process."),(0,i.kt)("p",null,"The power of this format got us excited. Finally, we could write questions at the speed at which we thought them up."),(0,i.kt)("p",null,"As we dug deeper, we also realised that using GIFT brought about a whole host of benefits that made our lives easier. There was however one major drawback: writing in GIFT was ",(0,i.kt)("strong",{parentName:"p"},"difficult")," without help."),(0,i.kt)("p",null,"To make writing in GIFT easier, we wrote ",(0,i.kt)("strong",{parentName:"p"},"three extensions")," for one of the most popular text editors today: ",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"Visual Studio Code"),". These extensions allow users to catch errors and preview their questions in real time, making the process of writing in GIFT more intuitive."),(0,i.kt)("p",null,"We hope these tools help make writing Moodle questions an enjoyable and fun experience\u2060\u2014one that will reflect in an engaging experience for your students."),(0,i.kt)("p",null,"Special thanks to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fuhrmanator"},"fuhrmanator")," for his work on building the GIFT parser. His work was invaluable in turning this project into reality."))}f.isMDXComponent=!0}}]);