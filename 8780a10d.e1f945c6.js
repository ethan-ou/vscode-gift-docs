(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{140:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return p}));var a=t(1),r=t(9),l=(t(0),t(158)),c={id:"questions",title:"Question Types"},i={id:"questions",title:"Question Types",description:"The following is adapted from [Moodle's documentation](https://docs.moodle.org/38/en/GIFT_format).",source:"@site/docs/questions.md",permalink:"/vscode-gift-docs/docs/questions",sidebar:"docs",previous:{title:"Getting Started",permalink:"/vscode-gift-docs/docs/getting-started"},next:{title:"Optional Extras",permalink:"/vscode-gift-docs/docs/options"}},o=[{value:"Multiple Choice",id:"multiple-choice",children:[]},{value:"Multiple Choice with Multiple Answers",id:"multiple-choice-with-multiple-answers",children:[]},{value:"True-False",id:"true-false",children:[]},{value:"Short Answer",id:"short-answer",children:[]},{value:"Missing Word",id:"missing-word",children:[]},{value:"Matching",id:"matching",children:[]},{value:"Numerical",id:"numerical",children:[]},{value:"Essay",id:"essay",children:[]}],b={rightToc:o};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The following is adapted from ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.moodle.org/38/en/GIFT_format"}),"Moodle's documentation"),"."),Object(l.b)("h3",{id:"multiple-choice"},"Multiple Choice"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"multiple choice question"),", ",Object(l.b)("inlineCode",{parentName:"p"},"mcq"),", ",Object(l.b)("inlineCode",{parentName:"p"},"mc[2-5]")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Format:")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-plain"}),"Question Text {\n    =Correct Answer\n    ~Incorrect Answer\n    ~Incorrect Answer\n    ~Incorrect Answer\n}\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Examples:")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-plain"}),"What is the largest desert on Earth? {\n    =Antarctica\n    ~Sahara Desert\n    ~Australian Desert\n    ~Arabian Desert\n}\n\nJapanese characters originally came from which country? {\n    ~India\n    =China\n    ~Korea\n    ~Egypt\n}\n")),Object(l.b)("h3",{id:"multiple-choice-with-multiple-answers"},"Multiple Choice with Multiple Answers"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"multiple choice question multiple"),", ",Object(l.b)("inlineCode",{parentName:"p"},"mcqm"),", ",Object(l.b)("inlineCode",{parentName:"p"},"mc[2-5]m")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Format:")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-plain"}),"Question Text {\n    ~%25%Correct Answer\n    ~%25%Correct Answer\n    ~%25%Correct Answer\n    ~%25%Correct Answer\n    ~%-100%Incorrect Answer\n    ~%-100%Incorrect Answer\n}\n\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Examples:")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-plain"}),"Select all world leaders below who were involved in World War II {\n    ~%33.33333%Winston Churchill\n    ~%33.33333%Adolf Hitler\n    ~%33.33333%Joseph Stalin\n    ~%-100%Hillary Clinton\n    ~%-100%Benjamin Franklin\n}\n")),Object(l.b)("p",null,"Tips:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"To avoid students automatically getting 100% by checking all answers, include negative answer weights for wrong answers."),Object(l.b)("li",{parentName:"ul"},"Moodle uses 5 decimal places to do math. If you wish to divide percentages in thirds, use %33.33333 instead of %33 or %33.33.")),Object(l.b)("h3",{id:"true-false"},"True-False"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"true false question"),", ",Object(l.b)("inlineCode",{parentName:"p"},"tfq")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Format:")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-plain"}),"Question Text {T} //OR:\nQuestion Text {TRUE}\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Examples:")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-plain"}),"Australia was founded in 1788 {FALSE}\n\nIceland is covered in ice {F}\n")),Object(l.b)("p",null,"Tips:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"You can use any of the following in a true-false question: ",Object(l.b)("inlineCode",{parentName:"li"},"TRUE"),", ",Object(l.b)("inlineCode",{parentName:"li"},"T"),", ",Object(l.b)("inlineCode",{parentName:"li"},"FALSE"),", ",Object(l.b)("inlineCode",{parentName:"li"},"F"),"."),Object(l.b)("li",{parentName:"ul"},"You can also write a true-false question in the multiple-choice question format."),Object(l.b)("li",{parentName:"ul"},"Feedback in a true-false question has a different format. Refer to the feedback section of the docs to find out more.")),Object(l.b)("h3",{id:"short-answer"},"Short Answer"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"short answer question"),", ",Object(l.b)("inlineCode",{parentName:"p"},"saq"),", ",Object(l.b)("inlineCode",{parentName:"p"},"sa[1-5]")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Format:")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-plain"}),"Question Text { =Answer =Answer =Answer }\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Examples:")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-plain"}),"Japanese characters originally came from which country? {=China}\n")),Object(l.b)("p",null,"Tips:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Make sure all answers use an equals sign ",Object(l.b)("inlineCode",{parentName:"li"},"="),".")),Object(l.b)("h3",{id:"missing-word"},"Missing Word"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"missing word question"),", ",Object(l.b)("inlineCode",{parentName:"p"},"mwq"),", ",Object(l.b)("inlineCode",{parentName:"p"},"mw[1-5]")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Format:")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-plain"}),"Sentence Start { =Answer ~Incorrect Answer ~Incorrect Answer } Sentence End.\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Examples:")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-plain"}),"The American holiday of Thanksgiving is celebrated on the {~second ~third =fourth} Thursday of November.\n")),Object(l.b)("p",null,"Tips:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Only one set of missing words are possible in the GIFT format. If you'd like more, use the Moodle interface.")),Object(l.b)("h3",{id:"matching"},"Matching"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"matching question"),", ",Object(l.b)("inlineCode",{parentName:"p"},"maq"),", ",Object(l.b)("inlineCode",{parentName:"p"},"ma[2-5]")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Format:")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-plain"}),"Question Text {\n    =Item 1 -> Match 1\n    =Item 2 -> Match 2\n    =Item 3 -> Match 3\n    =Item 4 -> Match 4\n}\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Examples:")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-plain"}),"Match the following countries with their corresponding capitals. {\n    =Canada -> Ottawa\n    =Italy  -> Rome\n    =Japan  -> Tokyo\n    =India  -> New Delhi\n}\n")),Object(l.b)("p",null,"Tips:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"You cannot use feedback or percentage weights with matching questions. General feedback however, is allowed."),Object(l.b)("li",{parentName:"ul"},"Make sure all answers use an equals sign ",Object(l.b)("inlineCode",{parentName:"li"},"="),".")),Object(l.b)("h3",{id:"numerical"},"Numerical"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"numerical question"),", ",Object(l.b)("inlineCode",{parentName:"p"},"nq")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Format:")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-plain"}),"Question Text {#Number} //OR:\nQuestion Text {#Number:Range} //OR:\nQuestion Text {#LowestNumber..HighestNumber}\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Examples:")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-plain"}),"What's 2 plus 2? {#4}\n\nWhat is the value of pi (to 3 decimal places)? {#3.1415:0.0005}\n\nWhat is the value of pi (to 3 decimal places)? {#3.141..3.142}\n")),Object(l.b)("h3",{id:"essay"},"Essay"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"essay question"),", ",Object(l.b)("inlineCode",{parentName:"p"},"ess")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Format:")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-plain"}),"Question Text {}\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Examples:")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-plain"}),"Write a short explanation of how ocean tides work. {}\n\nHow are you? {}\n")))}p.isMDXComponent=!0},158:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return O}));var a=t(0),r=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var b=r.a.createContext({}),p=function(e){var n=r.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):i({},n,{},e)),t},s=function(e){var n=p(e.components);return r.a.createElement(b.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),s=p(t),m=a,O=s["".concat(c,".").concat(m)]||s[m]||u[m]||l;return t?r.a.createElement(O,i({ref:n},b,{components:t})):r.a.createElement(O,i({ref:n},b))}));function O(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,c=new Array(l);c[0]=m;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var b=2;b<l;b++)c[b]=t[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);