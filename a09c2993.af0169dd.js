(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var o=n(1),r=n(9),a=(n(0),n(158)),i={id:"introduction",title:"Introduction"},s={id:"introduction",title:"Introduction",description:"## What is GIFT?",source:"@site/docs/introduction.md",permalink:"/vscode-gift-docs/docs/introduction",sidebar:"docs",next:{title:"Installation",permalink:"/vscode-gift-docs/docs/installation"}},l=[{value:"What is GIFT?",id:"what-is-gift",children:[]},{value:"Motivation",id:"motivation",children:[]}],c={rightToc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"what-is-gift"},"What is GIFT?"),Object(a.b)("p",null,"GIFT or General Import Format Template, is a language used to write and edit question banks for Moodle, without needing to use Moodle's interface."),Object(a.b)("p",null,"Instead of clicking through a web page, the GIFT format lets you write questions using plain text, similar to writing in a Word document."),Object(a.b)("p",null,"A typical multiple choice question can be written in the following manner:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-plain"}),"What is the largest desert on Earth? {\n    =Antarctica\n    ~Sahara Desert\n    ~Australian Desert\n    ~Arabian Desert\n}\n")),Object(a.b)("p",null,"Questions can then be uploaded to Moodle, allowing users to bypass the traditional method of authoring on Moodle."),Object(a.b)("p",null,"This approach has a couple of advantages:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Easy to write questions quickly"),Object(a.b)("li",{parentName:"ul"},"Simple to edit, review and delete existing questions"),Object(a.b)("li",{parentName:"ul"},"Can work offline or in remote places without issue"),Object(a.b)("li",{parentName:"ul"},"Easily share question banks with people who cannot access Moodle")),Object(a.b)("p",null,"All these benefits lead to faster development times for Moodle question banks and better quality questions for students."),Object(a.b)("h2",{id:"motivation"},"Motivation"),Object(a.b)("p",null,"As Moodle users, we regularly encounter courses that need ",Object(a.b)("strong",{parentName:"p"},"hundreds of questions")," written to accompany course content. Developing these questions from scratch is hard enough. Inputting these questions into Moodle however, takes a lot of time and effort."),Object(a.b)("p",null,"In frustration, we tried to look for alternatives and found the that we could use General Import Format Template (GIFT)."),Object(a.b)("p",null,"The GIFT format allowed us to write ",Object(a.b)("strong",{parentName:"p"},"hundreds of questions in half the time"),". Instead of writing questions directly in Moodle, we could write straight to plain text, bypassing Moodle until the very end of the process."),Object(a.b)("p",null,"The power of this format got us excited. Finally, we could write questions at the speed at which we thought them up."),Object(a.b)("p",null,"As we dug deeper, we also realised that using GIFT brought about a whole host of benefits that made our lives easier. There was however one major drawback: writing in GIFT was ",Object(a.b)("strong",{parentName:"p"},"difficult")," without help."),Object(a.b)("p",null,"To make writing in GIFT easier, we wrote ",Object(a.b)("strong",{parentName:"p"},"three extensions")," for one of the most popular text editors today: ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://code.visualstudio.com/"}),"Visual Studio Code"),". These extensions allow users to catch errors and preview their questions in real time, making the process of writing in GIFT more intuitive."),Object(a.b)("p",null,"We hope these tools help make writing Moodle questions an enjoyable and fun experience\u2060\u2014one that will reflect in an engaging experience for your students."),Object(a.b)("p",null,"Special thanks to ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/fuhrmanator"}),"fuhrmanator")," for his work on building the GIFT parser. His work was invaluable in turning this project into reality."))}u.isMDXComponent=!0},158:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},p=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=o,h=p["".concat(i,".").concat(b)]||p[b]||d[b]||a;return n?r.a.createElement(h,s({ref:t},c,{components:n})):r.a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);