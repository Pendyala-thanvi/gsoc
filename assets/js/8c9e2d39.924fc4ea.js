"use strict";(self.webpackChunkgosc_2021=self.webpackChunkgosc_2021||[]).push([[1908],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(n),d=i,g=h["".concat(s,".").concat(d)]||h[d]||p[d]||a;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5374:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(3117),i=n(102),a=(n(7294),n(3905)),o=["components"],l={sidebar_position:1,title:"Introduction",slug:"/2021/copyrights/"},s=void 0,c={unversionedId:"2021/copyrights/index",id:"2021/copyrights/index",title:"Introduction",description:"\x3c!--",source:"@site/docs/2021/copyrights/index.md",sourceDirName:"2021/copyrights",slug:"/2021/copyrights/",permalink:"/gsoc/docs/2021/copyrights/",draft:!1,editUrl:"https://github.com/fossology/gsoc/edit/main/docs/2021/copyrights/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Introduction",slug:"/2021/copyrights/"},sidebar:"2021",previous:{title:"Final Evaluation",permalink:"/gsoc/docs/2021/buildsystem/final-evaluation"},next:{title:"Week 1",permalink:"/gsoc/docs/2021/copyrights/updates/2021-06-07"}},u={},p=[{value:"Author",id:"author",level:2},{value:"Contact info",id:"contact-info",level:2},{value:"What&#39;s the project about?",id:"whats-the-project-about",level:2},{value:"What should be done?",id:"what-should-be-done",level:2},{value:"What is that I am doing right now?",id:"what-is-that-i-am-doing-right-now",level:2}],h={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"author"},"Author"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Kaushl2208"},"Kaushlendra Pratap")),(0,a.kt)("h2",{id:"contact-info"},"Contact info"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"mailto:kaushlendrapratap.9837@gmail.com"},"Email")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://linkedin.com/in/kaushl2208"},"LinkedIn"))),(0,a.kt)("h2",{id:"whats-the-project-about"},"What's the project about?"),(0,a.kt)("p",null,"Fossology's copyright detection agent uses a rule-based approach to detect copyright statements but like all the rule based approaches the edge cases in the stock of copyrights statements are increasing day by day thus the agent is showing a lot of False Positives result. "),(0,a.kt)("p",null,"Eg:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'"copyright (c) 2021, Kaushlendra Pratap < ',(0,a.kt)("a",{parentName:"li",href:"mailto:kaushlendrapratap.9837@gmail.com"},"kaushlendrapratap.9837@gmail.com"),' >"   # ',(0,a.kt)("em",{parentName:"li"},"Seems like a valid copyright statement."),"\nBut,"),(0,a.kt)("li",{parentName:"ul"},'"copyright is something which should be present in the code/software provided by Kaushlendra."    #  ',(0,a.kt)("em",{parentName:"li"},"Has been tagged as copyright by current agent but it is a False Positive"))),(0,a.kt)("h2",{id:"what-should-be-done"},"What should be done?"),(0,a.kt)("p",null,"Just like any other detection technique, we need to build a complete process/pipeline through which the copyright statements will go and the detector will classify it as True Positive or a False Positive."),(0,a.kt)("p",null,"Interesting? Let's discuss about the ways we can do it:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Developing NLP drived rule based multi-layered checks")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Introducing a Machine learning based classifier which will train on existing manually classified copyright statements"))),(0,a.kt)("h2",{id:"what-is-that-i-am-doing-right-now"},"What is that I am doing right now?"),(0,a.kt)("p",null,"Copyrights are more of a specifically structured statements which can be understood by the entities and Positions of each word. I am implementing  ",(0,a.kt)("strong",{parentName:"p"},"NER Model")," and ",(0,a.kt)("strong",{parentName:"p"},"POS Tagging")," and through the results of each of it, I will be postulating a multilayered checking which will give good accuracy over detection.Applying checks on multiple levels and limiting it down to only the part where only the copyright statement is present will definitely help in detection of False Positives."))}d.isMDXComponent=!0}}]);