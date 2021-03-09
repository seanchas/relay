(window.webpackJsonp=window.webpackJsonp||[]).push([[943],{1019:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(7),o=(t(0),t(1171)),i={id:"conversion-playbook",title:"Conversion Playbook",original_id:"conversion-playbook"},l={unversionedId:"conversion-playbook",id:"version-v10.0.0/conversion-playbook",isDocsHomePage:!1,title:"Conversion Playbook",description:"Incrementally modernize your Relay Classic app in these steps:",source:"@site/versioned_docs/version-v10.0.0/Modern-ConversionPlaybook.md",slug:"/conversion-playbook",permalink:"/docs/v10.0.0/conversion-playbook",editUrl:"https://github.com/facebook/relay/edit/master/website-v2/docs/versioned_docs/version-v10.0.0/Modern-ConversionPlaybook.md",version:"v10.0.0",lastUpdatedBy:"Robert Balicki",lastUpdatedAt:1615306898},c=[{value:"Step 0: Install and configure your environment",id:"step-0-install-and-configure-your-environment",children:[]},{value:"Step 1: Incrementally convert to Relay Compat",id:"step-1-incrementally-convert-to-relay-compat",children:[]},{value:"Step 2: Introduce <code>&lt;QueryRenderer&gt;</code>",id:"step-2-introduce-queryrenderer",children:[]},{value:"Step 3: Introduce Relay Modern runtime",id:"step-3-introduce-relay-modern-runtime",children:[]},{value:"Step 4: Clean up by replacing Relay Compat with Relay Modern.",id:"step-4-clean-up-by-replacing-relay-compat-with-relay-modern",children:[]},{value:"Note: Determining variable values at runtime",id:"note-determining-variable-values-at-runtime",children:[]}],p={toc:c};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Incrementally modernize your Relay Classic app in these steps:"),Object(o.b)("h2",{id:"step-0-install-and-configure-your-environment"},"Step 0: Install and configure your environment"),Object(o.b)("p",null,"Follow the steps outlined in the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"./migration-setup"}),"Migration Setup")," guide."),Object(o.b)("h2",{id:"step-1-incrementally-convert-to-relay-compat"},"Step 1: Incrementally convert to Relay Compat"),Object(o.b)("p",null,"Start converting your components and mutations to use the Relay Modern APIs from the ",Object(o.b)("inlineCode",{parentName:"p"},"'react-relay/compat'")," module (",Object(o.b)("inlineCode",{parentName:"p"},"createFragmentContainer"),", ",Object(o.b)("inlineCode",{parentName:"p"},"createRefetchContainer"),", ",Object(o.b)("inlineCode",{parentName:"p"},"createPaginationContainer"),", ",Object(o.b)("inlineCode",{parentName:"p"},"commitMutation"),"). It will be easier to go from the leaf components up. The ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/relayjs/relay-codemod"}),"conversion scripts")," should make this step less tedious."),Object(o.b)("p",null,"If a fragment uses variables that are determined at runtime, ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#note-determining-variable-values-at-runtime"}),"see below"),"."),Object(o.b)("h2",{id:"step-2-introduce-queryrenderer"},"Step 2: Introduce ",Object(o.b)("inlineCode",{parentName:"h2"},"<QueryRenderer>")),Object(o.b)("p",null,"Once all the components and mutations have been converted to use the Relay Modern APIs, convert to using ",Object(o.b)("inlineCode",{parentName:"p"},"QueryRenderer")," instead of using ",Object(o.b)("inlineCode",{parentName:"p"},"Relay.Renderer")," or ",Object(o.b)("inlineCode",{parentName:"p"},"Relay.RootContainer"),". You may supply ",Object(o.b)("inlineCode",{parentName:"p"},"Store")," from ",Object(o.b)("inlineCode",{parentName:"p"},"'react-relay/classic'")," as the ",Object(o.b)("inlineCode",{parentName:"p"},"environment")," for most cases."),Object(o.b)("h2",{id:"step-3-introduce-relay-modern-runtime"},"Step 3: Introduce Relay Modern runtime"),Object(o.b)("p",null,"Once a few or all of your views are using ",Object(o.b)("inlineCode",{parentName:"p"},"QueryRenderer"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Store")," from ",Object(o.b)("inlineCode",{parentName:"p"},"'react-relay/classic'")," could be replaced with a ",Object(o.b)("inlineCode",{parentName:"p"},"RelayModernEnvironment"),". Keep in mind that ",Object(o.b)("inlineCode",{parentName:"p"},"RelayModernEnvironment")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Store")," do not share any data. You might want to hold off on this step until views that have significant data overlap can be switched over at the same time. This step is what unlocks the perf wins for your app. Apps using the ",Object(o.b)("inlineCode",{parentName:"p"},"RelayModernEnvironment")," get to send persisted query IDs instead of the full query strings to the server, as well as much more optimized data normalizing and processing."),Object(o.b)("h2",{id:"step-4-clean-up-by-replacing-relay-compat-with-relay-modern"},"Step 4: Clean up by replacing Relay Compat with Relay Modern."),Object(o.b)("p",null,"Switch the ",Object(o.b)("inlineCode",{parentName:"p"},"'react-relay/compat'")," references in your app to ",Object(o.b)("inlineCode",{parentName:"p"},"'react-relay'"),". This is more of a clean-up step that prevents your app from pulling in unnecessary ",Object(o.b)("inlineCode",{parentName:"p"},"'react-relay/classic'")," code."),Object(o.b)("h2",{id:"note-determining-variable-values-at-runtime"},"Note: Determining variable values at runtime"),Object(o.b)("p",null,"There is currently only one supported way to set the initial value of a variable dynamically: using global variables defined on the query that includes the fragment (or via ",Object(o.b)("inlineCode",{parentName:"p"},"variables")," on the ",Object(o.b)("inlineCode",{parentName:"p"},"QueryRenderer"),")."),Object(o.b)("p",null,"For example, if ",Object(o.b)("inlineCode",{parentName:"p"},"currentDate")," is set in ",Object(o.b)("inlineCode",{parentName:"p"},"QueryRenderer")," ",Object(o.b)("inlineCode",{parentName:"p"},"variables"),", then $currentDate may be referenced in any fragment included in the ",Object(o.b)("inlineCode",{parentName:"p"},"QueryRenderer")," ",Object(o.b)("inlineCode",{parentName:"p"},"query"),"."),Object(o.b)("p",null,"If you're using ",Object(o.b)("inlineCode",{parentName:"p"},"createRefetchContainer")," then your ",Object(o.b)("inlineCode",{parentName:"p"},"refetch")," method may also update these variables to render with new values."))}s.isMDXComponent=!0},1171:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),s=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(t),b=r,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return t?a.a.createElement(m,l(l({ref:n},p),{},{components:t})):a.a.createElement(m,l({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=b;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);