"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[49562],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>s,MDXProvider:()=>p,mdx:()=>h,useMDXComponents:()=>u,withMDXComponents:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){return function(t){var n=u(t.components);return a.createElement(e,i({},t,{components:n}))}},u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(n),p=r,f=c["".concat(o,".").concat(p)]||c[p]||m[p]||i;return n?a.createElement(f,d(d({ref:t},s),{},{components:n})):a.createElement(f,d({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:r,o[1]=d;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},68629:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(39960),r=n(44256),i=n(67294);function o(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function d(e){var t=e.children;return i.createElement("div",{className:"docsRating",id:"docsRating"},i.createElement("hr",null),t)}var l=function(){var e=i.useState(!1),t=e[0],n=e[1],a=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":i.createElement(i.Fragment,null,"Is this page useful?",i.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(1)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),i.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(0)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},s=function(){return i.createElement("p",null,"Let us know how these docs can be improved by",i.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:o},"Filing a task"))},c=function(){return i.createElement("p",null,"Help us make the site even better by"," ",i.createElement(a.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},u=function(){return i.createElement(d,null,i.createElement(s,null),i.createElement(l,null),i.createElement(c,null))},p=function(){return i.createElement(d,null,i.createElement(l,null),i.createElement(c,null))};const m=function(){return(0,r.fbContent)({internal:i.createElement(u,null),external:i.createElement(p,null)})}},56945:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=n(68629),d=(n(44256),["components"]),l={id:"imperatively-modifying-store-data",title:"Imperatively modifying store data",slug:"/guided-tour/updating-data/imperatively-modifying-store-data/",description:"Using readUpdatableQuery_EXPERIMENTAL to update scalar fields in the store",keywords:["record source","store","updater","typesafe updaters","readUpdatableQuery","readUpdatableFragment","updatable"]},s=void 0,c={unversionedId:"guided-tour/updating-data/imperatively-modifying-store-data",id:"version-v14.0.0/guided-tour/updating-data/imperatively-modifying-store-data",title:"Imperatively modifying store data",description:"Using readUpdatableQuery_EXPERIMENTAL to update scalar fields in the store",source:"@site/versioned_docs/version-v14.0.0/guided-tour/updating-data/imperatively-modifying-store-data.md",sourceDirName:"guided-tour/updating-data",slug:"/guided-tour/updating-data/imperatively-modifying-store-data/",permalink:"/docs/guided-tour/updating-data/imperatively-modifying-store-data/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v14.0.0/guided-tour/updating-data/imperatively-modifying-store-data.md",tags:[],version:"v14.0.0",lastUpdatedBy:"Rujin Cao",lastUpdatedAt:1664057714,formattedLastUpdatedAt:"9/24/2022",frontMatter:{id:"imperatively-modifying-store-data",title:"Imperatively modifying store data",slug:"/guided-tour/updating-data/imperatively-modifying-store-data/",description:"Using readUpdatableQuery_EXPERIMENTAL to update scalar fields in the store",keywords:["record source","store","updater","typesafe updaters","readUpdatableQuery","readUpdatableFragment","updatable"]}},u={},p=[{value:"When to use updaters",id:"when-to-use-updaters",level:2},{value:"Complex client updates",id:"complex-client-updates",level:3},{value:"Client schema extensions",id:"client-schema-extensions",level:3},{value:"Use of other APIs",id:"use-of-other-apis",level:3},{value:"If multiple optimistic responses modify a given store value",id:"if-multiple-optimistic-responses-modify-a-given-store-value",level:3},{value:"When <strong>not</strong> to use updaters",id:"when-not-to-use-updaters",level:2},{value:"To trigger other side effects",id:"to-trigger-other-side-effects",level:3},{value:"The various types of updater functions",id:"the-various-types-of-updater-functions",level:2},{value:"Optimistic updaters vs updaters",id:"optimistic-updaters-vs-updaters",level:2},{value:"Example",id:"example",level:2},{value:"Example 2: Updating data in response to user interactions",id:"example-2-updating-data-in-response-to-user-interactions",level:2},{value:"Alternative API: <code>readUpdatableQuery_EXPERIMENTAL</code>.",id:"alternative-api-readupdatablequery_experimental",level:2}],m={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,d);return(0,i.mdx)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"See also ",(0,i.mdx)("a",{parentName:"p",href:"../imperatively-modifying-linked-fields"},"this guide on updating linked fields in the store"),"."))),(0,i.mdx)("p",null,"Data in Relay stores can be imperatively modified within updater functions."),(0,i.mdx)("h2",{id:"when-to-use-updaters"},"When to use updaters"),(0,i.mdx)("h3",{id:"complex-client-updates"},"Complex client updates"),(0,i.mdx)("p",null,"You might provide an updater function if the changes to local data are more complex than what can be achieved by simply writing a network response to the store and cannot be handled by the declarative mutation directives."),(0,i.mdx)("h3",{id:"client-schema-extensions"},"Client schema extensions"),(0,i.mdx)("p",null,"In addition, since the network response necessarily will not include data for fields defined in client schema extensions, you may wish to use an updater to initialize data defined in client schema extensions."),(0,i.mdx)("h3",{id:"use-of-other-apis"},"Use of other APIs"),(0,i.mdx)("p",null,"Lastly, there are things you can only achieve using updaters, such as invalidating nodes, deleting nodes, finding all connections at a given field, etc."),(0,i.mdx)("h3",{id:"if-multiple-optimistic-responses-modify-a-given-store-value"},"If multiple optimistic responses modify a given store value"),(0,i.mdx)("p",null,"If two optimistic responses affect a given value, and the first optimistic response is rolled back, the second one will remain applied."),(0,i.mdx)("p",null,"For example, if two optimistic responses each increase a story's like count by one, and the first optimistic response is rolled back, the second optimistic response remains applied. However, it is ",(0,i.mdx)("strong",{parentName:"p"},"not recalculated"),", and the value of the like count will remain increased by two."),(0,i.mdx)("h2",{id:"when-not-to-use-updaters"},"When ",(0,i.mdx)("strong",{parentName:"h2"},"not")," to use updaters"),(0,i.mdx)("h3",{id:"to-trigger-other-side-effects"},"To trigger other side effects"),(0,i.mdx)("p",null,"You should use the ",(0,i.mdx)("inlineCode",{parentName:"p"},"onCompleted")," callback to trigger other side effects."),(0,i.mdx)("h2",{id:"the-various-types-of-updater-functions"},"The various types of updater functions"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"useMutation")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"commitMutation")," APIs accept configuration objects which can include ",(0,i.mdx)("inlineCode",{parentName:"p"},"optimisticUpdater")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"updater")," fields. The ",(0,i.mdx)("inlineCode",{parentName:"p"},"requestSubscription")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"useSubscription")," APIs accept configuration objects which can include ",(0,i.mdx)("inlineCode",{parentName:"p"},"updater")," fields."),(0,i.mdx)("p",null,"In addition, there is another API (",(0,i.mdx)("inlineCode",{parentName:"p"},"commitLocalUpdate"),") which also accepts an updater function. It will be discussed in the ",(0,i.mdx)("a",{parentName:"p",href:"../local-data-updates/"},"Other APIs for modifying local data")," section."),(0,i.mdx)("h2",{id:"optimistic-updaters-vs-updaters"},"Optimistic updaters vs updaters"),(0,i.mdx)("p",null,"Mutations can have both optimistic and regular updaters. Optimistic updaters are executed when a mutation is triggered. When that mutation completes or errors, the optimistic update is rolled back."),(0,i.mdx)("p",null,"Regular updaters are executed when a mutation completes successfully."),(0,i.mdx)("h2",{id:"example"},"Example"),(0,i.mdx)("p",null,"Let's construct an example in which an ",(0,i.mdx)("inlineCode",{parentName:"p"},"is_new_comment")," field (which is defined in a schema extension) is set to ",(0,i.mdx)("inlineCode",{parentName:"p"},"true")," on a newly created Feedback object in a mutation updater."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},"# Feedback.graphql\nextend type Feedback {\n  is_new_comment: Boolean\n}\n")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"// CreateFeedback.js\nimport type {Environment} from 'react-relay';\nimport type {\n  FeedbackCreateData,\n  CreateFeedbackMutation,\n  CreateFeedbackMutation$data,\n} from 'CreateFeedbackMutation.graphql';\n\nconst {commitMutation, graphql} = require('react-relay');\nconst {ConnectionHandler} = require('relay-runtime');\n\nfunction commitCreateFeedbackMutation(\n  environment: Environment,\n  input: FeedbackCreateData,\n) {\n  return commitMutation<FeedbackCreateData>(environment, {\n    mutation: graphql`\n      mutation CreateFeedbackMutation($input: FeedbackCreateData!) {\n        feedback_create(input: $input) {\n          feedback {\n            id\n            # Step 1: in the mutation response, spread an updatable fragment (defined below).\n            # This updatable fragment will select the fields that we want to update on this\n            # particular feedback object.\n            ...CreateFeedback_updatable_feedback\n          }\n        }\n      }\n    `,\n    variables: {input},\n\n    // Step 2: define an updater\n    updater: (store: RecordSourceSelectorProxy, response: ?CreateCommentMutation$data) => {\n      // Step 3: Access and nullcheck the feedback object.\n      // Note that this could also have been achieved with the @required directive.\n      const feedbackRef = response?.feedback_create?.feedback;\n      if (feedbackRef == null) {\n        return;\n      }\n\n      // Step 3: call store.readUpdatableFragment_EXPERIMENTAL\n      const {updatableData} = store.readUpdatableFragment_EXPERIMENTAL(\n          // Step 4: Pass it a fragment literal, where the fragment contains the @updatable directive.\n          // This fragment selects the fields that you wish to update on the feedback object.\n          // In step 1, we spread this fragment in the query response.\n          graphql`\n            fragment CreateFeedback_updatable_feedback on Feedback @updatable {\n              is_new_comment\n            }\n          `,\n          // Step 5: Pass the fragment reference.\n          feedbackRef\n        );\n\n      // Step 6: Mutate the updatableData object!\n      updatableData.is_new_comment = true;\n    },\n  });\n}\n\nmodule.exports = {commit: commitCreateFeedbackMutation};\n")),(0,i.mdx)("p",null,"Let's distill what's going on here."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"The ",(0,i.mdx)("inlineCode",{parentName:"li"},"updater")," accepts two parameters: a ",(0,i.mdx)("inlineCode",{parentName:"li"},"RecordSourceSelectorProxy")," and an optional object that is the result of reading out the mutation response.",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"The type of this second argument is a nullable version of the ",(0,i.mdx)("inlineCode",{parentName:"li"},"$data")," type that is imported from the generated mutation file."),(0,i.mdx)("li",{parentName:"ul"},"The second argument contains just the data selected directly by the mutation argument. In other words, it will not contain any fields selected solely by spread fragments."))),(0,i.mdx)("li",{parentName:"ul"},"This ",(0,i.mdx)("inlineCode",{parentName:"li"},"updater")," is executed after the mutation response has been written to the store."),(0,i.mdx)("li",{parentName:"ul"},"In this example updater, we do three things:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"First, we spread an updatable fragment in the mutation response."),(0,i.mdx)("li",{parentName:"ul"},"Second, we read out the fields selected by this fragment by calling ",(0,i.mdx)("inlineCode",{parentName:"li"},"readUpdatableFragment_EXPERIMENTAL"),". This returns an updatable proxy object."),(0,i.mdx)("li",{parentName:"ul"},"Third, we update fields on this updatable proxy."))),(0,i.mdx)("li",{parentName:"ul"},"Once this updater completes, the updates that have been recorded are written to the store, and all affected components are re-rendered.")),(0,i.mdx)("h2",{id:"example-2-updating-data-in-response-to-user-interactions"},"Example 2: Updating data in response to user interactions"),(0,i.mdx)("p",null,"Let's consider the common case of updating store data in response to a user interaction.  In a click handler, let's a toggle an ",(0,i.mdx)("inlineCode",{parentName:"p"},"is_selected")," field. This field is defined on Users in a client schema extension."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},"# User.graphql\nextend type User {\n  is_selected: Boolean\n}\n")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"// UserSelectToggle.react.js\nimport type {RecordSourceSelectorProxy} from 'react-relay';\nimport type {UserSelectToggle_viewer$key} from 'UserSelectToggle_viewer.graphql';\n\nconst {useRelayEnvironment, commitLocalUpdate} = require('react-relay');\n\nfunction UserSelectToggle({ userId, viewerRef }: {\n  userId: string,\n  viewerRef: UserSelectToggle_viewer$key,\n}) {\n  const viewer = useFragment(graphql`\n    fragment UserSelectToggle_viewer on Viewer {\n      user(user_id: $user_id) {\n        id\n        name\n        is_selected\n        ...UserSelectToggle_updatable_user\n      }\n    }\n  `, viewerRef);\n\n  const environment = useRelayEnvironment();\n\n  return <button\n    onClick={() => {\n      commitLocalUpdate(\n        environment,\n        (store: RecordSourceSelectorProxy) => {\n          const userRef = viewer.user;\n          if (userRef == null) {\n            return;\n          }\n\n          const {updatableData} = store.readUpdatableFragment_EXPERIMENTAL(\n            graphql`\n              fragment UserSelectToggle_updatable_user on User @updatable {\n                is_selected\n              }\n            `,\n            userRef\n          );\n\n          updatableData.is_selected = !viewer?.user?.is_selected;\n        }\n      );\n    }}\n  >\n    {viewer?.user?.is_selected ? 'Deselect' : 'Select'} {viewer?.user?.name}\n  </button>\n}\n")),(0,i.mdx)("p",null,"Let's distill what's going on here."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"In a click handler, we call ",(0,i.mdx)("inlineCode",{parentName:"li"},"commitLocalUpdate"),", which accepts a Relay environment and an updater function. ",(0,i.mdx)("strong",{parentName:"li"},"Unlike in the previous examples, this updater does not accept a second parameter")," because there is no associated network payload."),(0,i.mdx)("li",{parentName:"ul"},"In this updater function, we access get an updatable proxy object by calling ",(0,i.mdx)("inlineCode",{parentName:"li"},"store.readUpdatableFragment_EXPERIMENTAL"),", and toggle the ",(0,i.mdx)("inlineCode",{parentName:"li"},"is_selected")," field."),(0,i.mdx)("li",{parentName:"ul"},"Like the previous example in which we called ",(0,i.mdx)("inlineCode",{parentName:"li"},"readUpdatableFragment_EXPERIMENTAL"),", this can be rewritten to use the ",(0,i.mdx)("inlineCode",{parentName:"li"},"readUpdatableQuery_EXPERIMENTAL")," API.")),(0,i.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"This example can be rewritten using the ",(0,i.mdx)("inlineCode",{parentName:"p"},"environment.commitPayload")," API, albeit without type safety."))),(0,i.mdx)("h2",{id:"alternative-api-readupdatablequery_experimental"},"Alternative API: ",(0,i.mdx)("inlineCode",{parentName:"h2"},"readUpdatableQuery_EXPERIMENTAL"),"."),(0,i.mdx)("p",null,"In the previous examples, we used an updatable fragment to access the record whose fields we want to update. This can also be possible to do with an updatable query."),(0,i.mdx)("p",null,"If we know the path from the root (i.e. the object whose type is ",(0,i.mdx)("inlineCode",{parentName:"p"},"Query"),") to the record we wish to modify, we can use the ",(0,i.mdx)("inlineCode",{parentName:"p"},"readUpdatableQuery_EXPERIMENTAL")," API to achieve this."),(0,i.mdx)("p",null,"For example, we could set the viewer's ",(0,i.mdx)("inlineCode",{parentName:"p"},"name")," field in response to an event as follows:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"// NameUpdater.react.js\nfunction NameUpdater({ queryRef }: {\n  queryRef: NameUpdater_viewer$key,\n}) {\n  const environment = useRelayEnvironment();\n  const data = useFragment(\n    graphql`\n      fragment NameUpdater_viewer on Viewer {\n        name\n      }\n    `,\n    queryRef\n  );\n  const [newName, setNewName] = useState(data?.viewer?.name);\n  const onSubmit = () => {\n    commitLocalUpdate(environment, store => {\n      const {updatableData} = store.readUpdatableQuery_EXPERIMENTAL(\n        graphql`\n          viewer {\n            name\n          }\n        `,\n        {}\n      );\n      const viewer = updatableData.viewer;\n      if (viewer != null) {\n        viewer.name = newName;\n      }\n    });\n  };\n\n  // etc\n}\n")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"This particular example can be rewritten using ",(0,i.mdx)("inlineCode",{parentName:"li"},"readUpdatableFragment_EXPERIMENTAL"),". However, you may prefer ",(0,i.mdx)("inlineCode",{parentName:"li"},"readUpdatableQuery_EXPERIMENTAL")," for several reasons:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"You do not have ready access to a fragment reference, e.g. if the call to ",(0,i.mdx)("inlineCode",{parentName:"li"},"commitLocalUpdate")," is not obviously associated with a component."),(0,i.mdx)("li",{parentName:"ul"},"You do not have ready access to a fragment where we select the ",(0,i.mdx)("strong",{parentName:"li"},"parent record")," of the record we wish to modify (e.g. the ",(0,i.mdx)("inlineCode",{parentName:"li"},"Query")," in this example). Due to a known type hole in Relay, ",(0,i.mdx)("strong",{parentName:"li"},"updatable fragments cannot be spread at the top level.")),(0,i.mdx)("li",{parentName:"ul"},"You wish to use variables in the updatatable fragment. Currently, updatable fragments reuse the variables that were passed to the query. This means that you cannot, for example, have an updatable fragment with fragment-local variables and call ",(0,i.mdx)("inlineCode",{parentName:"li"},"readUpdatableFragment_EXPERIMENTAL")," multiple times, each time passing different variables.")))),(0,i.mdx)(o.Z,{mdxType:"DocsRating"}))}f.isMDXComponent=!0},47596:function(e,t,n){var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,i){function o(e){try{l(a.next(e))}catch(t){i(t)}}function d(e){try{l(a.throw(e))}catch(t){i(t)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,d)}l((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getSpecInfo=void 0;const r=n(11737);t.getSpecInfo=function(e){return a(this,void 0,void 0,(function*(){return yield r.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},11737:function(e,t){var n=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,i){function o(e){try{l(a.next(e))}catch(t){i(t)}}function d(e){try{l(a.throw(e))}catch(t){i(t)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,d)}l((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.call=void 0;let a=!1,r=0;const i={};t.call=function(e){return n(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));a||(a=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const t=e.data.id;t in i||console.error(`Recieved response for id: ${t} with no matching receiver`),"response"in e.data?i[t].resolve(e.data.response):i[t].reject(new Error(e.data.error)),delete i[t]})));const t=r++,n=new Promise(((e,n)=>{i[t]={resolve:e,reject:n}})),o={event:"static-docs-bridge-call",id:t,module:e.module,api:e.api,args:e.args},d="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(o,d),n}))}},24855:function(e,t,n){var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,i){function o(e){try{l(a.next(e))}catch(t){i(t)}}function d(e){try{l(a.throw(e))}catch(t){i(t)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,d)}l((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.reportFeatureUsage=t.reportContentCopied=void 0;const r=n(11737);t.reportContentCopied=function(e){return a(this,void 0,void 0,(function*(){const{textContent:t}=e;try{yield r.call({module:"feedback",api:"reportContentCopied",args:{textContent:t}})}catch(n){}}))},t.reportFeatureUsage=function(e){return a(this,void 0,void 0,(function*(){const{featureName:t,id:n}=e;console.log("used feature");try{yield r.call({module:"feedback",api:"reportFeatureUsage",args:{featureName:t,id:n}})}catch(a){}}))}},44256:function(e,t,n){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n),Object.defineProperty(e,a,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.OssOnly=t.FbInternalOnly=t.getEphemeralDiffNumber=t.hasEphemeralDiffNumber=t.isInternal=t.validateFbContentArgs=t.fbInternalOnly=t.fbContent=t.inpageeditor=t.feedback=t.uidocs=t.bloks=void 0,t.bloks=i(n(47596)),t.uidocs=i(n(17483)),t.feedback=i(n(24855)),t.inpageeditor=i(n(27312));const o=["internal","external"];function d(e){return s(e),c()?"internal"in e?l(e.internal):[]:"external"in e?l(e.external):[]}function l(e){return"function"==typeof e?e():e}function s(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${o}. Instead got ${e}`);if(!Object.keys(e).find((e=>o.find((t=>t===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${o}`);const t=Object.keys(e).filter((e=>!o.find((t=>t===e))));if(t.length>0)throw new Error(`Unexpected keys ${t} found in fbContent() args. Accepted keys: ${o}`)}function c(){try{return Boolean(!1)}catch(e){return console.log("process.env.FB_INTERNAL couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),!1}}function u(){try{return null}catch(e){return console.log("process.env.PHABRICATOR_DIFF_NUMBER couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),null}}t.fbContent=d,t.fbInternalOnly=function(e){return d({internal:e})},t.validateFbContentArgs=s,t.isInternal=c,t.hasEphemeralDiffNumber=function(){return Boolean(u())},t.getEphemeralDiffNumber=u,t.FbInternalOnly=function(e){return c()?e.children:null},t.OssOnly=function(e){return c()?null:e.children}},27312:function(e,t,n){var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,i){function o(e){try{l(a.next(e))}catch(t){i(t)}}function d(e){try{l(a.throw(e))}catch(t){i(t)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,d)}l((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.submitDiff=void 0;const r=n(11737);t.submitDiff=function(e){return a(this,void 0,void 0,(function*(){const{file_path:t,new_content:n,project_name:a,diff_number:i}=e;try{return yield r.call({module:"inpageeditor",api:"createPhabricatorDiffApi",args:{file_path:t,new_content:n,project_name:a,diff_number:i}})}catch(o){throw new Error(`Error occurred while trying to submit diff. Stack trace: ${o}`)}}))}},17483:function(e,t,n){var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,i){function o(e){try{l(a.next(e))}catch(t){i(t)}}function d(e){try{l(a.throw(e))}catch(t){i(t)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,d)}l((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getApi=t.docsets=void 0;const r=n(11737);t.docsets={BLOKS_CORE:"887372105406659"},t.getApi=function(e){return a(this,void 0,void 0,(function*(){const{name:t,framework:n,docset:a}=e;return yield r.call({module:"uidocs",api:"getApi",args:{name:t,framework:n,docset:a}})}))}}}]);