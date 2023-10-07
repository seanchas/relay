"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[7934],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>d,MDXProvider:()=>m,mdx:()=>y,useMDXComponents:()=>p,withMDXComponents:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),u=function(e){return function(t){var n=p(t.components);return r.createElement(e,o({},t,{components:n}))}},p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,c=u["".concat(i,".").concat(m)]||u[m]||h[m]||o;return n?r.createElement(c,s(s({ref:t},d),{},{components:n})):r.createElement(c,s({ref:t},d))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},14229:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],s={},l="Queries for Interactions",d={unversionedId:"tutorial/queries-2",id:"version-v15.0.0/tutorial/queries-2",title:"Queries for Interactions",description:"We\u2019ve seen how fragments let us specify data requirements in each component, yet at runtime perform only a single query for an entire screen. Here we\u2019ll look at a situation where we want a second query on the same screen. This will also let us explore some more features of GraphQL queries.",source:"@site/versioned_docs/version-v15.0.0/tutorial/queries-2.md",sourceDirName:"tutorial",slug:"/tutorial/queries-2",permalink:"/docs/tutorial/queries-2",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v15.0.0/tutorial/queries-2.md",tags:[],version:"v15.0.0",lastUpdatedBy:"Ernie Turner",lastUpdatedAt:1696650388,formattedLastUpdatedAt:"Oct 7, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Arrays and Lists",permalink:"/docs/tutorial/arrays-lists"},next:{title:"GraphQL Types, Interfaces, and Polymorphism",permalink:"/docs/tutorial/interfaces-polymorphism"}},u={},p=[{value:"Query Variables",id:"query-variables",level:2},{value:"Step 1 \u2014 define a query variable",id:"step-1--define-a-query-variable",level:3},{value:"Step 2 \u2014 pass the variable in as a field argument",id:"step-2--pass-the-variable-in-as-a-field-argument",level:3},{value:"Step 3 \u2014 provide the argument value to useLazyLoadQuery",id:"step-3--provide-the-argument-value-to-uselazyloadquery",level:3},{value:"Step 4 \u2014 pass the ID in from the parent component",id:"step-4--pass-the-id-in-from-the-parent-component",level:3},{value:"Preloaded Queries",id:"preloaded-queries",level:2},{value:"Step 1 \u2014 change useLazyLoadQuery to usePreloadedQuery",id:"step-1--change-uselazyloadquery-to-usepreloadedquery",level:3},{value:"Step 2: export the query for access from the parent component",id:"step-2-export-the-query-for-access-from-the-parent-component",level:3},{value:"Step 3: Call useQueryLoader in the parent component",id:"step-3-call-usequeryloader-in-the-parent-component",level:3},{value:"Step 4: Fetch the query in the event handler",id:"step-4-fetch-the-query-in-the-event-handler",level:3},{value:"Summary",id:"summary",level:2}],m={toc:p};function h(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.mdx)("wrapper",(0,r.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"queries-for-interactions"},"Queries for Interactions"),(0,o.mdx)("p",null,"We\u2019ve seen how fragments let us specify data requirements in each component, yet at runtime perform only a single query for an entire screen. Here we\u2019ll look at a situation where we ",(0,o.mdx)("em",{parentName:"p"},"want")," a second query on the same screen. This will also let us explore some more features of GraphQL queries."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"We\u2019ll build a ",(0,o.mdx)("strong",{parentName:"li"},"hovercard")," that shows more details about the poster of a story when you hover over their name."),(0,o.mdx)("li",{parentName:"ul"},"The hovercard will use a second query to fetch ",(0,o.mdx)("strong",{parentName:"li"},"additional information")," that\u2019s only needed if the user hovers."),(0,o.mdx)("li",{parentName:"ul"},"We\u2019ll use ",(0,o.mdx)("strong",{parentName:"li"},"query variables")," to tell the server which person we\u2019d like more details about."),(0,o.mdx)("li",{parentName:"ul"},"We\u2019ll see how to improve performance with ",(0,o.mdx)("strong",{parentName:"li"},"preloaded queries"),".")),(0,o.mdx)("p",null,"After covering these topics, we\u2019ll return to look at some more advanced features of Fragments."),(0,o.mdx)("hr",null),(0,o.mdx)("p",null,"In this section we\u2019ll add a hovercard to ",(0,o.mdx)("inlineCode",{parentName:"p"},"PosterByline")," so that you can see more details about the poster of a story by hovering over their name."),(0,o.mdx)("details",null,(0,o.mdx)("summary",null,"Deep dive: When to use a secondary query"),(0,o.mdx)("p",null,"We've mentioned before that Relay is designed to help you fetch all of your data requirements for an entire screen up-front. But we can generalize this and say that it's a ",(0,o.mdx)("em",{parentName:"p"},"user interaction")," that should have at most one query. Navigating to another screen is just one common type of user intecation."),(0,o.mdx)("p",null,"Within a screen, some interactions may disclose additional data from what was shown initially. If an interaction is performed relatively rarely, but needs a significant amount of additional data, it can be smart to fetch that additional data in a second query, performed when the interaction happens, rather than up-front when the screen is first loaded. This makes that initial load faster and less expensive."),(0,o.mdx)("p",null,"There are also some interactions where the amount of data fetched is indefinite \u2014 e.g., a hovercard within a hovercard \u2014 and not feasible to know statically."),(0,o.mdx)("p",null,"If data is lower-priority and should be loaded after the main data has loaded, but should pop in automatically without further user input, Relay has a feature called a ",(0,o.mdx)("em",{parentName:"p"},"deferred fragment")," for that. We'll cover it later.")),(0,o.mdx)("p",null,"We\u2019ve already prepared a hovercard component that you can put to use. However, it has been in a directory called ",(0,o.mdx)("inlineCode",{parentName:"p"},"future")," in order to avoid compilation errors since it uses ",(0,o.mdx)("inlineCode",{parentName:"p"},"ImageFragment"),". Now that we\u2019re at this stage of the tutorial, you can move the modules in ",(0,o.mdx)("inlineCode",{parentName:"p"},"future")," into ",(0,o.mdx)("inlineCode",{parentName:"p"},"src/components"),":"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"mv future/* src/components\n")),(0,o.mdx)("p",null,"Now, if you did the exercise to make ",(0,o.mdx)("inlineCode",{parentName:"p"},"PosterByline")," use fragments, the ",(0,o.mdx)("inlineCode",{parentName:"p"},"PosterByline")," component should look something like this:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'export default function PosterByline({ poster }: Props): React.ReactElement {\n  const data = useFragment(PosterBylineFragment, poster);\n  return (\n    <div className="byline">\n      <Image image={data.profilePicture} width={60} height={60} className="byline__image" />\n      <div className="byline__name" ref={hoverRef}>{data.name}</div>\n    </div>\n  );\n}\n')),(0,o.mdx)("p",null,"To use the hovercard component, you can make the following changes:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'// change-line\nimport Hovercard from \'./Hovercard\';\n// change-line\nimport PosterDetailsHovercardContents from \'./PosterDetailsHovercardContents\';\n// change-line\nconst {useRef} = React;\n\n...\n\nexport default function PosterByline({ poster }: Props): React.ReactElement {\n  const data = useFragment(PosterBylineFragment, poster);\n  // change-line\n  const hoverRef = useRef(null);\n  return (\n    <div\n      // change-line\n      ref={hoverRef}\n      className="byline">\n      <Image image={data.profilePicture} width={60} height={60} className="byline__image" />\n      <div className="byline__name">{data.name}</div>\n      // change\n      <Hovercard targetRef={hoverRef}>\n        <PosterDetailsHovercardContents />\n      </Hovercard>\n      // end-change\n    </div>\n  );\n}\n')),(0,o.mdx)("p",null,"You should now see that whenever you hover over someone\u2019s name, you get a hovercard with more information. If you look inside ",(0,o.mdx)("inlineCode",{parentName:"p"},"PosterDetailsHovercardContents.tsx"),", you\u2019ll find that it performs a second query with ",(0,o.mdx)("inlineCode",{parentName:"p"},"useLazyLoadQuery")," to fetch additional information when that component is mounted."),(0,o.mdx)("p",null,"There\u2019s just one problem: it always shows the same person's information, no matter which poster you hover over!"),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"Hovercard showing the wrong person",src:n(73302).Z,width:"1256",height:"692"})),(0,o.mdx)("hr",null),(0,o.mdx)("h2",{id:"query-variables"},"Query Variables"),(0,o.mdx)("p",null,"We need to tell the server ",(0,o.mdx)("em",{parentName:"p"},"which")," information we want more information about. GraphQL lets us define ",(0,o.mdx)("em",{parentName:"p"},"query variables")," that can be passed as arguments to specific fields. These arguments are then available on the server."),(0,o.mdx)("p",null,"In the previous section, we saw how a field can accept arguments, but the argument values were hard-coded, e.g. ",(0,o.mdx)("inlineCode",{parentName:"p"},"url(width: 200, height: 200)"),". With query variables, we can determine these values at runtime. They\u2019re passed from the client to the server alongside the query itself. GraphQL variables always begin with a ",(0,o.mdx)("inlineCode",{parentName:"p"},"$")," dollar sign."),(0,o.mdx)("p",null,"Take a look inside ",(0,o.mdx)("inlineCode",{parentName:"p"},"PosterDetailsHovercardContents.tsx"),": you should see a query like this one:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'const PosterDetailsHovercardContentsQuery = graphql`\n  query PosterDetailsHovercardContentsQuery {\n    // color1\n    node(id: "1") {\n      // color2\n      ... on Actor {\n        ...PosterDetailsHovercardContentsBodyFragment\n      }\n    }\n  }\n`;\n')),(0,o.mdx)("span",{className:"color1"},"The ",(0,o.mdx)("code",null,"node")," field")," is a top-level field defined in our schema that lets us fetch any graph node given its unique ID. It takes the ID as an argument, which is currently hard-coded. In this exercise, we\u2019ll be replacing this hard-coded ID with a variable supplied by our UI state.",(0,o.mdx)("p",null,"The funny-looking ",(0,o.mdx)("inlineCode",{parentName:"p"},"... on Actor")," is a ",(0,o.mdx)("span",{className:"color2"},(0,o.mdx)("em",{parentName:"p"},"type refinement")),". We\u2019ll look at these in more detail in the next section and can ignore it for now. In brief, since we could supply any ID at all to the ",(0,o.mdx)("inlineCode",{parentName:"p"},"node")," field, there\u2019s no way to know statically what ",(0,o.mdx)("em",{parentName:"p"},"type")," of node we\u2019d be selecting. The type refinement specifies what type we expect, allowing us to use fields from the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Actor")," type"),(0,o.mdx)("p",null,"Within that, we simply spread a fragment that contains the fields we want to show \u2014 about which more later. For now, here are the steps to take to replace this hard-coded ID with the ID of the poster we\u2019re hovering over:"),(0,o.mdx)("h3",{id:"step-1--define-a-query-variable"},"Step 1 \u2014 define a query variable"),(0,o.mdx)("p",null,"First we need to edit our query to declare that it accepts a query variable. Here\u2019s the change:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'const PosterDetailsHovercardContentsQuery = graphql`\n  query PosterDetailsHovercardContentsQuery(\n    // change-line\n    $posterID: ID!\n  ) {\n    node(id: "1") {\n      ... on Actor {\n        ...PosterDetailsHovercardContentsBodyFragment\n      }\n    }\n  }\n`;\n')),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"The variable name is ",(0,o.mdx)("inlineCode",{parentName:"li"},"$posterID"),". This is the symbol we\u2019ll use within the rest of the GraphQL query to refer to the value passed in from the UI."),(0,o.mdx)("li",{parentName:"ul"},"Variables have a type \u2014 in this case ",(0,o.mdx)("inlineCode",{parentName:"li"},"ID!"),(0,o.mdx)("em",{parentName:"li"},".")," The ",(0,o.mdx)("inlineCode",{parentName:"li"},"ID")," type is a synonym for ",(0,o.mdx)("inlineCode",{parentName:"li"},"String")," that is used for node IDs to help distinguish them from other strings. The ",(0,o.mdx)("inlineCode",{parentName:"li"},"!")," on ",(0,o.mdx)("inlineCode",{parentName:"li"},"ID!")," means that field is non-nullable. In GraphQL, fields are normally nullable and non-nullability is the exception.")),(0,o.mdx)("h3",{id:"step-2--pass-the-variable-in-as-a-field-argument"},"Step 2 \u2014 pass the variable in as a field argument"),(0,o.mdx)("p",null,"Now we replace the hard-coded ",(0,o.mdx)("inlineCode",{parentName:"p"},'"1"'),"  with our new variable:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"const PosterDetailsHovercardContentsQuery = graphql`\n  query PosterDetailsHovercardContentsQuery($posterID: ID!) {\n    node(\n      // change-line\n      id: $posterID\n    ) {\n    ... on Actor {\n      ...PosterDetailsHovercardContentsBodyFragment\n      }\n    }\n  }\n`;\n")),(0,o.mdx)("admonition",{type:"note"},(0,o.mdx)("p",{parentName:"admonition"},"You can use query variables not only as field arguments, but as arguments to fragments.")),(0,o.mdx)("h3",{id:"step-3--provide-the-argument-value-to-uselazyloadquery"},"Step 3 \u2014 provide the argument value to useLazyLoadQuery"),(0,o.mdx)("p",null,"Now we need to pass in the actual value from our UI at runtime. The ",(0,o.mdx)("inlineCode",{parentName:"p"},"useLazyLoadQuery")," hook\u2019s second argument is an object with variable values. We\u2019ll add a new prop to our component and pass its value in there:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"export default function PosterDetailsHovercardContents({\n  // change-line\n  posterID,\n}: {\n  // change-line\n  posterID: string;\n}): React.ReactElement {\n  const data = useLazyLoadQuery<QueryType>(\n    PosterDetailsHovercardContentsQuery,\n    // change-line\n    {posterID},\n  );\n  return <PosterDetailsHovercardContentsBody poster={data.node} />;\n}\n")),(0,o.mdx)("h3",{id:"step-4--pass-the-id-in-from-the-parent-component"},"Step 4 \u2014 pass the ID in from the parent component"),(0,o.mdx)("p",null,"Now we need to supply the ",(0,o.mdx)("inlineCode",{parentName:"p"},"posterID")," prop from the hovercard\u2019s parent component, which is ",(0,o.mdx)("inlineCode",{parentName:"p"},"PosterByline"),". Head over to that file and add ",(0,o.mdx)("inlineCode",{parentName:"p"},"id")," to its fragment \u2014 then pass the ID in as a prop:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"const PosterBylineFragment = graphql`\n  fragment PosterBylineFragment on Actor {\n    // change-line\n    id\n    ...\n  }\n`;\n\nexport default function PosterByline({ poster }: Props): React.ReactElement {\n  ...\n  return (\n   ...\n    <PosterDetailsHovercardContents\n      // change-line\n      posterID={data.id}\n    />\n   ...\n  );\n}\n")),(0,o.mdx)("p",null,"At this point, the hovercard should show the appropriate information for each poster that we hover over."),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"Hovercard showing the correct person",src:n(92124).Z,width:"1212",height:"712"})),(0,o.mdx)("p",null,"If you use the Network inspector in your browser, you should be able to find that the variable value is being passed alongside the query:"),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"Network request inspcetor showing variable being set to the server",src:n(14470).Z,width:"1444",height:"290"})),(0,o.mdx)("p",null,"You may also notice that this request is made only the first time you hover over a particular poster. Relay caches the results of the query and re-uses them after that, until eventually removing the cached data if it hasn\u2019t been used recently."),(0,o.mdx)("details",null,(0,o.mdx)("summary",null,"Deep dive: Caching and the Relay Store"),(0,o.mdx)("p",null,"In contrast to most other systems, Relay\u2019s caching is not based on queries, but on graph nodes. Relay maintains a local cache of all the nodes it has fetched called the Relay Store. Each node in the Store is identified and retrieved by its ID. If two queries ask for the same information, as identified by node IDs, then the second query will be fulfilled using the cached information retrieved for the first query, and not be fetched.  Make sure to configure ",(0,o.mdx)("a",{parentName:"p",href:"/docs/guided-tour/reusing-cached-data/filling-in-missing-data/"},"missing field handlers")," to take advantage of this caching behavior."),(0,o.mdx)("p",null,"Relay will garbage-collect nodes from the Store if they aren\u2019t \u201creachable\u201d from any queries that are used, or have been recently used, by any mounted components.")),(0,o.mdx)("details",null,(0,o.mdx)("summary",null,"Deep dive: Why GraphQL Needs a Syntax for Variables"),(0,o.mdx)("p",null,"You might be wondering why GraphQL even has the concept of variables, instead of just interpolating the value of the variables into the query string. Well, ",(0,o.mdx)("a",{parentName:"p",href:"../queries-1"},"as mentioned before"),", the text of the GraphQL query string isn\u2019t available at runtime, because Relay replaces it with a data structure that is more efficient. You can also configure Relay to use ",(0,o.mdx)("em",{parentName:"p"},"prepared queries"),", where the compiler uploads each query to the server at build time and assigns it an ID \u2014 in that case, at runtime, Relay is just telling the server \u201cGive me query #1337\u201d, so string interpolation isn't possible and therefore the variables have to come out of band. Even when the query string is available, passing variable values separately eliminates any issues with serializing arbitrary values and escaping strings, above what is required with any HTTP request.")),(0,o.mdx)("hr",null),(0,o.mdx)("h2",{id:"preloaded-queries"},"Preloaded Queries"),(0,o.mdx)("p",null,"This example app is very simple, so performance isn't an issue. (In fact, the server is artifically slowed down in order to make loading states perceptible.) However, one of Relay's main concerns is to make performance as fast as possible in real apps."),(0,o.mdx)("p",null,"Right now, the hovercard uses the ",(0,o.mdx)("inlineCode",{parentName:"p"},"useLazyLoadQuery")," hook, which fetches the query when the component is rendered. That means the timeline looks something like this:"),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"Network doesn&#39;t start until render",src:n(82941).Z,width:"1548",height:"924"})),(0,o.mdx)("p",null,"Ideally, we should start the network fetch as early as possible, but here we don't start it until React is finished rendering. This timeline could look even worse if we used ",(0,o.mdx)("inlineCode",{parentName:"p"},"React.lazy")," to load the code for the hovercard component itself when the interaction happened. In that case, it would look like this:"),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"Network doesn&#39;t start until component is fetched and then rendered",src:n(74115).Z,width:"1872",height:"1024"})),(0,o.mdx)("p",null,"Notice how we\u2019re waiting around before we even start fetching the GraphQL query. It would be better if the query fetch began before the React component even rendered, right at the beginning in the mouse event handler itself. Then the timeline would look like this:"),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"Network and component fetch happen concurrently",src:n(32114).Z,width:"1836",height:"584"})),(0,o.mdx)("p",null,"When the user interacts, we should immediately start fetching the query we need, while also beginning to render the component (fetching its code first if needed). Once both of these async processes are complete, we can render the component with the data available and show it to the user."),(0,o.mdx)("p",null,"Relay provides a feature called ",(0,o.mdx)("em",{parentName:"p"},"preloaded queries")," that let us do this."),(0,o.mdx)("p",null,"Let\u2019s modify the hovercard to use preloaded queries."),(0,o.mdx)("h3",{id:"step-1--change-uselazyloadquery-to-usepreloadedquery"},"Step 1 \u2014 change useLazyLoadQuery to usePreloadedQuery"),(0,o.mdx)("p",null,"As a reminder, this is the ",(0,o.mdx)("inlineCode",{parentName:"p"},"PosterDetailsHovercardContents")," component that currently fetches the data lazily:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"export default function PosterDetailsHovercardContents({\n  posterID,\n}: {\n  posterID: string;\n}): React.ReactElement {\n  const data = useLazyLoadQuery<QueryType>(\n    PosterDetailsHovercardContentsQuery,\n    {posterID},\n  );\n  return <PosterDetailsHovercardContentsBody data={data.node} />;\n}\n")),(0,o.mdx)("p",null,"It calls ",(0,o.mdx)("inlineCode",{parentName:"p"},"useLazyLoadQuery")," which accepts ",(0,o.mdx)("em",{parentName:"p"},"variables")," as its second argument. We want to change this to ",(0,o.mdx)("inlineCode",{parentName:"p"},"usePreloadedQuery"),". However, with preloaded queries, the variables are actually determined when the query is fetched, which will be before this component is even rendered. So instead of variables, this hook takes a ",(0,o.mdx)("em",{parentName:"p"},"query reference")," that contains the information it needs to retrieve the results of the query. The query reference will be created when we fetch the query in Step 2."),(0,o.mdx)("p",null,"Change the component as follows:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"import {usePreloadedQuery} from 'react-relay';\nimport type {PreloadedQuery} from 'react-relay';\nimport type {PosterDetailsHovercardContentsQuery as QueryType} from './__generated__/PosterDetailsHovercardContentsQuery.graphql';\n\nexport default function PosterDetailsHovercardContents({\n  // change-line\n  queryRef,\n}: {\n  // change-line\n  queryRef: PreloadedQuery<QueryType>,\n}): React.ReactElement {\n  // change-line\n  const data = usePreloadedQuery(\n    PosterDetailsHovercardContentsQuery,\n    // change-line\n    queryRef,\n  );\n  ...\n}\n")),(0,o.mdx)("h3",{id:"step-2-export-the-query-for-access-from-the-parent-component"},"Step 2: export the query for access from the parent component"),(0,o.mdx)("p",null,"We\u2019ll be modifying the parent component, ",(0,o.mdx)("inlineCode",{parentName:"p"},"PosterByline"),", to have it initiate the ",(0,o.mdx)("inlineCode",{parentName:"p"},"PosterDetailsHovercardContentsQuery")," query. It needs a reference to that query, so we need to export it:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"export const PosterDetailsHovercardContentsQuery = graphql`...\n")),(0,o.mdx)("h3",{id:"step-3-call-usequeryloader-in-the-parent-component"},"Step 3: Call useQueryLoader in the parent component"),(0,o.mdx)("p",null,"Now that ",(0,o.mdx)("inlineCode",{parentName:"p"},"PosterDetailsHovercardContents")," expects a query ref, we need to create that query ref and pass it down from the parent component, which is ",(0,o.mdx)("inlineCode",{parentName:"p"},"PosterByline"),". We create the query ref using a hook called ",(0,o.mdx)("inlineCode",{parentName:"p"},"useQueryLoader"),". This hook also returns a function that we call in our event handler to trigger the query fetch."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"import {useQueryLoader} from 'react-relay';\nimport type {PosterDetailsHovercardContentsQuery as HovercardQueryType} from './__generated__/PosterDetailsHovercardContentsQuery.graphql';\nimport {PosterDetailsHovercardContentsQuery} from './PosterDetailsHovercardContents';\n\nexport default function PosterByline({ poster }: Props): React.ReactElement {\n  ...\n  // change\n  const [\n    hovercardQueryRef,\n    loadHovercardQuery,\n  ] = useQueryLoader<HovercardQueryType>(PosterDetailsHovercardContentsQuery);\n  // end-change\n  return (\n   ...\n    <PosterDetailsHovercardContents\n      // change-line\n      queryRef={hovercardQueryRef}\n    />\n   ...\n  );\n}\n")),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"useQueryLoader")," hook returns two things we need:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"The query ref is an opaque piece of information that ",(0,o.mdx)("inlineCode",{parentName:"li"},"usePreloadedQuery")," will use to retrieve the result of the query."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"loadHovercardQuery")," is a function that will initiate the request.")),(0,o.mdx)("h3",{id:"step-4-fetch-the-query-in-the-event-handler"},"Step 4: Fetch the query in the event handler"),(0,o.mdx)("p",null,"Finally, we need to call ",(0,o.mdx)("inlineCode",{parentName:"p"},"loadHovercardQuery")," in an event handler that happens when the card is shown. Luckily the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Hovercard")," component has a ",(0,o.mdx)("inlineCode",{parentName:"p"},"onBeginHover")," event that we can use:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'export default function PosterByline({ poster }: Props): React.ReactElement {\n  ...\n  const [\n    hovercardQueryRef,\n    loadHovercardQuery,\n  ] = useQueryLoader<HovercardQueryType>(PosterDetailsHovercardContentsQuery);\n  // change\n  function onBeginHover() {\n    loadHovercardQuery({posterID: data.id});\n  }\n  // end-change\n  return (\n    <div className="byline">\n      ...\n      <Hovercard\n        // change-line\n        onBeginHover={onBeginHover}\n        targetRef={hoverRef}>\n        <PosterDetailsHovercardContents queryRef={hovercardQueryRef} />\n      </Hovercard>\n    </div>\n  );\n}\n')),(0,o.mdx)("p",null,"Note that the query variables are now passed in here where we initiate the request."),(0,o.mdx)("p",null,"At this point, you should see the same behavior as before, but now it will be a little bit faster since Relay can get the query started earlier."),(0,o.mdx)("admonition",{type:"tip"},(0,o.mdx)("p",{parentName:"admonition"},"Although we introduced queries using ",(0,o.mdx)("inlineCode",{parentName:"p"},"useLazyLoadQuery")," for simplicity, preloaded queries are always the preferred way to use queries in Relay because they can significantly improve performance in the real world. With the appropriate ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/relayjs/relay-examples/tree/main/issue-tracker-next-v13"},"integrations with your server and router system"),", you can even preload the main query for a webpage on the server side before you\u2019ve even downloaded or run any client code.")),(0,o.mdx)("hr",null),(0,o.mdx)("h2",{id:"summary"},"Summary"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Although all of the data initially shown on a screen should be combined into one query, user interactions needing further information can be handled with secondary queries."),(0,o.mdx)("li",{parentName:"ul"},"Query variables let you pass information to the server along with your query."),(0,o.mdx)("li",{parentName:"ul"},"Query variables are used by passing them into field arguments."),(0,o.mdx)("li",{parentName:"ul"},"Preloaded queries are always the best way to go. For user interaction queries, initiate the fetch in the event handler. For the initial query for your screen, initiate the fetch as early as possible in your specific routing system. Use lazy-loaded queries only for quick prototyping, or not at all.")),(0,o.mdx)("p",null,"Next we'll briefly look at a way to enhance the hovercard by handling different types of posters differently. After that, we'll see how to handle situations where information that's part of the initial query also needs to be updated and refetched with different variables."))}h.isMDXComponent=!0},14470:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/network-request-with-variables-685cd702f4b24496f003c6dc72a18310.png"},82941:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/preloaded-basic-2693ff0ba53d8b3f7e5e905bc6a8d80d.png"},32114:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/preloaded-ideal-cd02a128e114e8cbb8dd98f38b1646b1.png"},74115:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/preloaded-lazy-b66d3f27f599118b87b8c917acbed796.png"},73302:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/queries-wrong-hovercard-person-ca391a8bfc10666af0914b2c71577a32.png"},92124:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/query-variables-hovercard-correct-4d9278160ae02a07df46a5c395659031.png"}}]);