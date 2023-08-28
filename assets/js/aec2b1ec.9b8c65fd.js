"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[650],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>c,MDXProvider:()=>d,mdx:()=>g,useMDXComponents:()=>m,withMDXComponents:()=>u});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){return function(n){var t=m(n.components);return r.createElement(e,a({},n,{components:t}))}},m=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=m(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=m(t),d=o,y=u["".concat(i,".").concat(d)]||u[d]||p[d]||a;return t?r.createElement(y,s(s({ref:n},c),{},{components:t})):r.createElement(y,s({ref:n},c))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=y;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},68629:(e,n,t)=>{t.d(n,{Z:()=>p});var r=t(39960),o=t(86341),a=t(67294);function i(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function s(e){var n=e.children;return a.createElement("div",{className:"docsRating",id:"docsRating"},a.createElement("hr",null),n)}var l=function(){var e=a.useState(!1),n=e[0],t=e[1],r=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?"Thank you for letting us know!":a.createElement(a.Fragment,null,"Is this page useful?",a.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(1)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),a.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(0)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},c=function(){return a.createElement("p",null,"Let us know how these docs can be improved by",a.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:i},"Filing a task"))},u=function(){return a.createElement("p",null,"Help us make the site even better by"," ",a.createElement(r.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},m=function(){return a.createElement(s,null,a.createElement(c,null),a.createElement(l,null),a.createElement(u,null))},d=function(){return a.createElement(s,null,a.createElement(l,null),a.createElement(u,null))};const p=function(){return(0,o.fbContent)({internal:a.createElement(m,null),external:a.createElement(d,null)})}},4422:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>u,default:()=>g,frontMatter:()=>c,metadata:()=>m,toc:()=>p});var r=t(83117),o=t(80102),a=(t(67294),t(3905)),i=t(68629),s=t(86341),l=["components"],c={id:"inconsistent-typename-error",title:"Inconsistent Typename Error",slug:"/debugging/inconsistent-typename-error/",description:"Debugging inconsistent typename errors in Relay",keywords:["debugging","troubleshooting","inconsistent typename","RelayResponseNormalizer","globally unique id"]},u=void 0,m={unversionedId:"debugging/inconsistent-typename-error",id:"debugging/inconsistent-typename-error",title:"Inconsistent Typename Error",description:"Debugging inconsistent typename errors in Relay",source:"@site/docs/debugging/inconsistent-typename-error.md",sourceDirName:"debugging",slug:"/debugging/inconsistent-typename-error/",permalink:"/docs/next/debugging/inconsistent-typename-error/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/docs/debugging/inconsistent-typename-error.md",tags:[],version:"current",lastUpdatedBy:"Marc Haase",lastUpdatedAt:1693254973,formattedLastUpdatedAt:"Aug 28, 2023",frontMatter:{id:"inconsistent-typename-error",title:"Inconsistent Typename Error",slug:"/debugging/inconsistent-typename-error/",description:"Debugging inconsistent typename errors in Relay",keywords:["debugging","troubleshooting","inconsistent typename","RelayResponseNormalizer","globally unique id"]},sidebar:"docs",previous:{title:"Relay DevTools",permalink:"/docs/next/debugging/relay-devtools/"},next:{title:"Debugging Declarative Mutation Directives",permalink:"/docs/next/debugging/declarative-mutation-directives/"}},d={},p=[{value:"Inconsistent <code>__typename</code> error",id:"inconsistent-__typename-error",level:2},{value:"Common cause",id:"common-cause",level:2},{value:"Fix: Make your type spec compliant",id:"fix-make-your-type-spec-compliant",level:2},{value:"Example",id:"example",level:3}],y={toc:p};function g(e){var n=e.components,t=(0,o.Z)(e,l);return(0,a.mdx)("wrapper",(0,r.Z)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("h2",{id:"inconsistent-__typename-error"},"Inconsistent ",(0,a.mdx)("inlineCode",{parentName:"h2"},"__typename")," error"),(0,a.mdx)("p",null,"The GraphQL server likely violated the globally unique ID requirement by returning the same ID for different objects."),(0,a.mdx)("p",null,"If you're seeing an error like:"),(0,a.mdx)("blockquote",null,(0,a.mdx)("p",{parentName:"blockquote"},(0,a.mdx)("inlineCode",{parentName:"p"},"RelayResponseNormalizer: Invalid record '543'. Expected __typename to be consistent, but the record was assigned conflicting types Foo and Bar. The GraphQL server likely violated the globally unique ID requirement by returning the same ID for different objects."))),(0,a.mdx)("p",null,"the server implementation of one of the types is not spec compliant. We require the ",(0,a.mdx)("inlineCode",{parentName:"p"},"id")," field to be globally unique. This is a problem because Relay stores objects in a normalized key-value store and one of the object just overwrote the other. This means your app is broken in some subtle or less subtle way."),(0,a.mdx)("h2",{id:"common-cause"},"Common cause"),(0,a.mdx)("p",null,"The most common reason for this error is that 2 objects backed by an ID are using the plain ID as the id field, such as a ",(0,a.mdx)("inlineCode",{parentName:"p"},"User")," and ",(0,a.mdx)("inlineCode",{parentName:"p"},"MessagingParticipant"),"."),(0,a.mdx)("p",null,"Less common reasons could be using array indices or auto-increment IDs from some database that might not be unique to this type."),(0,a.mdx)("h2",{id:"fix-make-your-type-spec-compliant"},"Fix: Make your type spec compliant"),(0,a.mdx)("p",null,"The best way to fix this is to make your type spec compliant. For the case of 2 different types backed by the same ID, a common solution is to prefix the ID of the less widely used type with a unique string and then base64 encode the result. This can be accomplished fairly easily by implementing a ",(0,a.mdx)("inlineCode",{parentName:"p"},"NodeTokenResolver")," using the helper trait ",(0,a.mdx)("inlineCode",{parentName:"p"},"NodeTokenResolverWithPrefix"),".  When the ",(0,a.mdx)("inlineCode",{parentName:"p"},"NodeTokenResolver")," is registered is allows you to load your type using ",(0,a.mdx)("inlineCode",{parentName:"p"},"node(id: $yourID)")," GraphQL call and your type can return an encoded ID."),(0,a.mdx)(s.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,a.mdx)("h3",{id:"example"},"Example"),(0,a.mdx)("p",null,"See ",(0,a.mdx)("a",{parentName:"p",href:"https://www.internalfb.com/diff/D17996531"},"D17996531")," for an example on how to fix this. It created a ",(0,a.mdx)("inlineCode",{parentName:"p"},"FusionPlatformComponentsCategoryNodeResolver")," added the trait ",(0,a.mdx)("inlineCode",{parentName:"p"},"TGraphQLNodeMixin")," to the conflicting class so that it generates the base64 encoded ID.")),(0,a.mdx)(i.Z,{mdxType:"DocsRating"}))}g.isMDXComponent=!0}}]);