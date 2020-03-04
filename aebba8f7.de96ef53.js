(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));var a=n(1),r=n(9),c=(n(0),n(158)),o={id:"options",title:"Optional Extras"},l={id:"options",title:"Optional Extras",description:"The following is adapted from [Moodle's documentation](https://docs.moodle.org/38/en/GIFT_format).",source:"@site/docs/options.md",permalink:"/vscode-gift-docs/docs/options",sidebar:"docs",previous:{title:"Question Types",permalink:"/vscode-gift-docs/docs/questions"},next:{title:"Advanced",permalink:"/vscode-gift-docs/docs/advanced"}},i=[{value:"Comments",id:"comments",children:[]},{value:"Titles",id:"titles",children:[]},{value:"Feedback",id:"feedback",children:[]},{value:"General Feedback",id:"general-feedback",children:[]},{value:"Percentage Weights",id:"percentage-weights",children:[]},{value:"Special Characters",id:"special-characters",children:[]},{value:"Using HTML, Markdown or Plain Text",id:"using-html-markdown-or-plain-text",children:[]},{value:"Categories",id:"categories",children:[]}],b={rightToc:i};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The following is adapted from ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.moodle.org/38/en/GIFT_format"}),"Moodle's documentation"),"."),Object(c.b)("h3",{id:"comments"},"Comments"),Object(c.b)("p",null,"A comment is any line that starts with two forward slashes ",Object(c.b)("inlineCode",{parentName:"p"},"//"),". You can use them to provide headers or more information about questions."),Object(c.b)("p",null,"Moodle will hide these lines when reading the question file."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Format:")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-plain"}),"//Comment\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Examples:")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-plain"}),"//German to English Translation\n")),Object(c.b)("h3",{id:"titles"},"Titles"),Object(c.b)("p",null,"A title can be added to a question by including it within two pairs of colons ",Object(c.b)("inlineCode",{parentName:"p"},"::"),"."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Format:")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-plain"}),"::Title::\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Examples:")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-plain"}),"::Continents:: { =Asia } is the largest continent in the world.\n")),Object(c.b)("h3",{id:"feedback"},"Feedback"),Object(c.b)("p",null,"Feedback can be included for questions by adding a hash ",Object(c.b)("inlineCode",{parentName:"p"},"#")," character next to an answer."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Format:")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-plain"}),"#Feedback\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Examples:")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-plain"}),"Japanese characters originally came from which country? {\n    ~India #Sorry.\n    =China #Correct!\n    ~Korea #Try again.\n    ~Egypt #That\u2019s not it.\n}\n")),Object(c.b)("p",null,"For true-false questions, feedback is written slightly differently. The format is as follows:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-plain"}),"Question Text {TRUE #Wrong #Right}\n")),Object(c.b)("p",null,"Matching and essay questions cannot have feedback for individual answers."),Object(c.b)("h3",{id:"general-feedback"},"General Feedback"),Object(c.b)("p",null,"General feedback can be included at the end of a question block with four hash ",Object(c.b)("inlineCode",{parentName:"p"},"#")," characters."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Format:")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-plain"}),"####General Feedback\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Examples:")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-plain"}),"How are you? {\n    ####We hope you're feeling well.\n}\n")),Object(c.b)("h3",{id:"percentage-weights"},"Percentage Weights"),Object(c.b)("p",null,"You can add percentage weights to answers by adding the weight at the beginning of the answer inside two percentage signs ",Object(c.b)("inlineCode",{parentName:"p"},"%"),"."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Format:")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-plain"}),"%Weight%\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Examples:")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-plain"}),"Jesus Christ was from {\n    ~Jerusalem\n    ~%25%Bethlehem\n    ~%50%Galilee\n    =Nazareth\n}\n")),Object(c.b)("h3",{id:"special-characters"},"Special Characters"),Object(c.b)("p",null,"If you want to use characters that have special meaning in the GIFT format, such as ",Object(c.b)("inlineCode",{parentName:"p"},"~ = # { } :"),", you can use a backslash ",Object(c.b)("inlineCode",{parentName:"p"},"\\")," to escape these characters. With the backslash, these characters can be used as a normal character."),Object(c.b)("p",null,"Note, the backslash is invisible when displayed on Moodle."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Format:")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-plain"}),"\\~\n\\=\n\\#\n\\{\n\\}\n\\:\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Example:")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-plain"}),"1 + 2 \\= {3}\n\nThe largest desert on Earth is\\: {\n    =Antarctica\n    ~Sahara Desert\n    ~Australian Desert\n    ~Arabian Desert\n}\n")),Object(c.b)("h3",{id:"using-html-markdown-or-plain-text"},"Using HTML, Markdown or Plain Text"),Object(c.b)("p",null,"If you'd like to use HTML, Markdown or Plain Text inside of a question, you can do so by using the tags ",Object(c.b)("inlineCode",{parentName:"p"},"[html]"),", ",Object(c.b)("inlineCode",{parentName:"p"},"[markdown]")," or ",Object(c.b)("inlineCode",{parentName:"p"},"[plain]"),"."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Format:")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-plain"}),"[html]\n[markdown]\n[plain]\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Example:")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-plain"}),"[markdown]The *American holiday of Thanksgiving* is celebrated on the { ~second ~third =fourth } Thursday of November.\n\n[html]<p>The sun rises in which direction?</p> {\n    =<p>The east.</p>#<b>Awesome!</b>\n    ~<p>The west.</p>#What planet did <em>you</em> grow up on?\n}\n\n[html]Match the <b>activity</b> to the description.{\n    =[html]An activity supporting asynchronous discussions. -> Forum\n    =[moodle]A teacher asks a question and specifies a choice of multiple responses. -> Choice\n    =[plain]A bank of record entries which participants can add to. -> Database\n    =[markdown]A collection of web pages that anyone can add to or edit. -> Wiki\n")),Object(c.b)("h3",{id:"categories"},"Categories"),Object(c.b)("p",null,"To add categories, you can use the ",Object(c.b)("inlineCode",{parentName:"p"},"$CATEGORY:")," tag."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Format:")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-plain"}),"$CATEGORY: Label //OR:\n$CATEGORY: Folder1/Folder2/Folder3\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Example:")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-plain"}),"")))}s.isMDXComponent=!0},158:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,m=p["".concat(o,".").concat(u)]||p[u]||d[u]||c;return n?r.a.createElement(m,l({ref:t},b,{components:n})):r.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var b=2;b<c;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);