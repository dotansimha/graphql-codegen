(self.webpackChunk_graphql_codegen_website=self.webpackChunk_graphql_codegen_website||[]).push([[7675],{35318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(27378);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,p=function(e,t){if(null==e)return{};var n,a,p={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,p=e.mdxType,r=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(n),c=p,k=u["".concat(l,".").concat(c)]||u[c]||d[c]||r;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function c(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var r=n.length,i=new Array(r);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:p,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},52847:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var a=n(29603),p=n(50120),r=(n(27378),n(35318)),i=["components"],o={id:"typescript-vue-apollo",title:"TypeScript Vue Apollo Composition API"},l={unversionedId:"plugins/typescript-vue-apollo",id:"plugins/typescript-vue-apollo",isDocsHomePage:!1,title:"TypeScript Vue Apollo Composition API",description:"{@import ../plugins/client-note.md}",source:"@site/docs/plugins/typescript-vue-apollo.md",sourceDirName:"plugins",slug:"/plugins/typescript-vue-apollo",permalink:"/docs/plugins/typescript-vue-apollo",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/plugins/typescript-vue-apollo.md",version:"current",frontMatter:{id:"typescript-vue-apollo",title:"TypeScript Vue Apollo Composition API"},sidebar:"sidebar",previous:{title:"Typescript Svelte Apollo",permalink:"/docs/plugins/typescript-svelte-apollo"},next:{title:"TypeScript Vue Apollo Smart Operations",permalink:"/docs/plugins/typescript-vue-apollo-smart-ops"}},s=[{value:"Installation",id:"installation",children:[]},{value:"Examples",id:"examples",children:[{value:"Queries",id:"queries",children:[]}]}],m={toc:s};function d(e){var t=e.components,n=(0,p.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("div",{parentName:"p",className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Usage Requirements")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"In order to use this GraphQL Codegen plugin, please make sure that you have GraphQL operations (",(0,r.kt)("inlineCode",{parentName:"p"},"query")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"mutation")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"subscription")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"fragment"),") set as ",(0,r.kt)("inlineCode",{parentName:"p"},"documents: ...")," in your ",(0,r.kt)("inlineCode",{parentName:"p"},"codegen.yml"),"."),(0,r.kt)("p",{parentName:"div"},"Without loading your GraphQL operations (query, mutation, subscription and fragment), you won't see any change in the generated output.")))),(0,r.kt)("p",null,"Instead of using this plugin, it is recommended that you use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/plugins/typed-document-node"},"TypedDocumentNode plugin")," together with the ",(0,r.kt)("a",{parentName:"p",href:"https://apollo.vuejs.org/"},"Vue Apollo library"),"."),(0,r.kt)("p",null,(0,r.kt)("p",{parentName:"p"},"This plugin generates"),(0,r.kt)("h2",{parentName:"p"},"Installation"),(0,r.kt)("img",{alt:"typescript-vue-apollo plugin version",src:"https://img.shields.io/npm/v/@graphql-codegen/typescript-vue-apollo?color=%23e15799&label=plugin\xa0version&style=for-the-badge"}),(0,r.kt)("div",{parentName:"p",className:"admonition admonition-shell"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"}),(0,r.kt)("path",{parentName:"svg",d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"}))),"Using ",(0,r.kt)("inlineCode",{parentName:"h5"},"yarn"))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre"},"yarn add -D @graphql-codegen/typescript-vue-apollo\n")))),(0,r.kt)("h2",{parentName:"p"},"API Reference"),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"withCompositionFunctions")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"true")),(0,r.kt)("p",{parentName:"p"},"Customized the output by enabling/disabling the generated Vue composition functions."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-operations\n   - typescript-vue-apollo\n config:\n   withCompositionFunctions: true\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"vueApolloComposableImportFrom")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-operations\n   - typescript-vue-apollo\n config:\n   vueApolloComposableImportFrom: vue\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"vueCompositionApiImportFrom")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-operations\n   - typescript-vue-apollo\n config:\n   vueCompositionApiImportFrom: vue\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"addDocBlocks")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"true")),(0,r.kt)("p",{parentName:"p"},"Allows you to enable/disable the generation of docblocks in generated code.\nSome IDE's (like VSCode) add extra inline information with docblocks, you can disable this feature if your preferred IDE does not."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-operations\n   - typescript-vue-apollo\n config:\n   addDocBlocks: true\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"noGraphQLTag")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",{parentName:"p"},"Deprecated. Changes the documentMode to ",(0,r.kt)("inlineCode",{parentName:"p"},"documentNode"),"."),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"gqlImport")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql-tag#gql")),(0,r.kt)("p",{parentName:"p"},"Customize from which module will ",(0,r.kt)("inlineCode",{parentName:"p"},"gql")," be imported from.\nThis is useful if you want to use modules other than ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql-tag"),", e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql.macro"),"."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("h5",{parentName:"p"},"graphql.macro"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  gqlImport: graphql.macro#gql\n")),(0,r.kt)("h5",{parentName:"p"},"Gatsby"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  gqlImport: gatsby#graphql\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"documentNodeImport")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql#DocumentNode")),(0,r.kt)("p",{parentName:"p"},"Customize from which module will ",(0,r.kt)("inlineCode",{parentName:"p"},"DocumentNode")," be imported from.\nThis is useful if you want to use modules other than ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql"),", e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"@graphql-typed-document-node"),"."),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"noExport")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",{parentName:"p"},"Set this configuration to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if you wish to tell codegen to generate code with no ",(0,r.kt)("inlineCode",{parentName:"p"},"export")," identifier."),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"dedupeOperationSuffix")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",{parentName:"p"},"Set this configuration to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if you wish to make sure to remove duplicate operation name suffix."),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"omitOperationSuffix")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",{parentName:"p"},"Set this configuration to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if you wish to disable auto add suffix of operation name, like ",(0,r.kt)("inlineCode",{parentName:"p"},"Query"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Mutation"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Subscription"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Fragment"),"."),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"operationResultSuffix")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),(0,r.kt)("p",{parentName:"p"},"Adds a suffix to generated operation result type names"),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"documentVariablePrefix")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),(0,r.kt)("p",{parentName:"p"},"Changes the GraphQL operations variables prefix."),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"documentVariableSuffix")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"Document")),(0,r.kt)("p",{parentName:"p"},"Changes the GraphQL operations variables suffix."),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"fragmentVariablePrefix")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),(0,r.kt)("p",{parentName:"p"},"Changes the GraphQL fragments variables prefix."),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"fragmentVariableSuffix")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"FragmentDoc")),(0,r.kt)("p",{parentName:"p"},"Changes the GraphQL fragments variables suffix."),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"documentMode")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"DocumentMode"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"graphQLTag")),(0,r.kt)("p",{parentName:"p"},"Declares how DocumentNode are created:"),(0,r.kt)("ul",{parentName:"p"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"graphQLTag"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"graphql-tag")," or other modules (check ",(0,r.kt)("inlineCode",{parentName:"li"},"gqlImport"),") will be used to generate document nodes. If this is used, document nodes are generated on client side i.e. the module used to generate this will be shipped to the client"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"documentNode"),": document nodes will be generated as objects when we generate the templates."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"documentNodeImportFragments"),": Similar to documentNode except it imports external fragments instead of embedding them."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"external"),": document nodes are imported from an external file. To be used with ",(0,r.kt)("inlineCode",{parentName:"li"},"importDocumentNodeExternallyFrom"))),(0,r.kt)("p",{parentName:"p"},"Note that some plugins (like ",(0,r.kt)("inlineCode",{parentName:"p"},"typescript-graphql-request"),") also supports ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," for this parameter."),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"optimizeDocumentNode")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"true")),(0,r.kt)("p",{parentName:"p"},"If you are using ",(0,r.kt)("inlineCode",{parentName:"p"},"documentNode: documentMode | documentNodeImportFragments"),", you can set this to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),' to apply document optimizations for your GraphQL document.\nThis will remove all "loc" and "description" fields from the compiled document, and will remove all empty arrays (such as ',(0,r.kt)("inlineCode",{parentName:"p"},"directives"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"arguments")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"variableDefinitions"),")."),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"importOperationTypesFrom")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),(0,r.kt)("p",{parentName:"p"},"This config is used internally by presets, but you can use it manually to tell codegen to prefix all base types that it's using.\nThis is useful if you wish to generate base types from ",(0,r.kt)("inlineCode",{parentName:"p"},"typescript-operations")," plugin into a different file, and import it from there."),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"importDocumentNodeExternallyFrom")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),(0,r.kt)("p",{parentName:"p"},"This config should be used if ",(0,r.kt)("inlineCode",{parentName:"p"},"documentMode")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"external"),". This has 2 usage:"),(0,r.kt)("ul",{parentName:"p"},(0,r.kt)("li",{parentName:"ul"},"any string: This would be the path to import document nodes from. This can be used if we want to manually create the document nodes e.g. Use ",(0,r.kt)("inlineCode",{parentName:"li"},"graphql-tag")," in a separate file and export the generated document"),(0,r.kt)("li",{parentName:"ul"},"'near-operation-file': This is a special mode that is intended to be used with ",(0,r.kt)("inlineCode",{parentName:"li"},"near-operation-file")," preset to import document nodes from those files. If these files are ",(0,r.kt)("inlineCode",{parentName:"li"},".graphql")," files, we make use of webpack loader.")),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  documentMode: external\n  importDocumentNodeExternallyFrom: path/to/document-node-file\n")),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  documentMode: external\n  importDocumentNodeExternallyFrom: near-operation-file\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"pureMagicComment")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",{parentName:"p"},"This config adds PURE magic comment to the static variables to enforce treeshaking for your bundler."),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"experimentalFragmentVariables")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",{parentName:"p"},"If set to true, it will enable support for parsing variables on fragments."),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"strictScalars")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",{parentName:"p"},"Makes scalars strict."),(0,r.kt)("p",{parentName:"p"},"If scalars are found in the schema that are not defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"scalars"),"\nan error will be thrown during codegen."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  strictScalars: true\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"defaultScalarType")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"any")),(0,r.kt)("p",{parentName:"p"},"Allows you to override the type that unknown scalars will have."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  defaultScalarType: unknown\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"scalars")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"ScalarsMap")),(0,r.kt)("p",{parentName:"p"},"Extends or overrides the built-in scalars and custom GraphQL scalars to a custom type."),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"namingConvention")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"NamingConvention"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"change-case-all#pascalCase")),(0,r.kt)("p",{parentName:"p"},"Allow you to override the naming convention of the output.\nYou can either override all namings, or specify an object with specific custom naming convention per output.\nThe format of the converter must be a valid ",(0,r.kt)("inlineCode",{parentName:"p"},"module#method"),".\nAllowed values for specific output are: ",(0,r.kt)("inlineCode",{parentName:"p"},"typeNames"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"enumValues"),'.\nYou can also use "keep" to keep all GraphQL names as-is.\nAdditionally you can set ',(0,r.kt)("inlineCode",{parentName:"p"},"transformUnderscore")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if you want to override the default behavior,\nwhich is to preserves underscores."),(0,r.kt)("p",{parentName:"p"},"Available case functions in ",(0,r.kt)("inlineCode",{parentName:"p"},"change-case-all")," are ",(0,r.kt)("inlineCode",{parentName:"p"},"camelCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"capitalCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"constantCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dotCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"headerCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"noCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"paramCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pascalCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pathCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sentenceCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"snakeCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"lowerCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"localeLowerCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"lowerCaseFirst"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"spongeCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"titleCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"upperCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"localeUpperCase")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"upperCaseFirst"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/btxtiger/change-case-all"},"See more")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"typesPrefix")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),(0,r.kt)("p",{parentName:"p"},"Prefixes all the generated types."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  typesPrefix: I\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"typesSuffix")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),(0,r.kt)("p",{parentName:"p"},"Suffixes all the generated types."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  typesSuffix: I\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"skipTypename")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",{parentName:"p"},"Does not add __typename to the generated types, unless it was specified in the selection set."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  skipTypename: true\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"nonOptionalTypename")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",{parentName:"p"},"Automatically adds ",(0,r.kt)("inlineCode",{parentName:"p"},"__typename")," field to the generated types, even when they are not specified\nin the selection set, and makes it non-optional"),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  nonOptionalTypename: true\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"useTypeImports")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",{parentName:"p"},"Will use ",(0,r.kt)("inlineCode",{parentName:"p"},"import type {}")," rather than ",(0,r.kt)("inlineCode",{parentName:"p"},"import {}"),' when importing only types. This gives\ncompatibility with TypeScript\'s "importsNotUsedAsValues": "error" option'),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"dedupeFragments")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",{parentName:"p"},"Removes fragment duplicates for reducing data transfer.\nIt is done by removing sub-fragments imports from fragment definition\nInstead - all of them are imported to the Operation node.")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"  yarn add @graphql-codegen/typescript-vue-apollo @vue/apollo-composable @vue/composition-api\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"The examples below use Vue 2 with the (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/vuejs/composition-api"},"composition api plugin"),")."),(0,r.kt)("h3",{id:"queries"},"Queries"),(0,r.kt)("p",null,"Using the generated query code."),(0,r.kt)("h4",{id:"basic-query"},"Basic query"),(0,r.kt)("p",null,"For the given input:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"query Message {\n  feed {\n    id\n  }\n}\n")),(0,r.kt)("p",null,"We can use the generated code like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vue"},'<template>\n  <div>\n    <div v-if="loading">Loading...</div>\n    <div v-else>{{ result.feed.id }}</div>\n  </div>\n</template>\n\n<script lang="ts">\nimport { defineComponent } from "@vue/composition-api"\nimport { useMessageQuery } from "../generated/graphqlOperations"\n\nexport default defineComponent({\n  setup() {\n    const { result, loading } = useMessageQuery()\n    return { result, loading }\n  }\n})\n<\/script>\n')),(0,r.kt)("h4",{id:"select-a-single-property-with-useresult-and-add-an-error-message"},"Select a single property with useResult and add an error message"),(0,r.kt)("p",null,"For the given input:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"query allAccounts {\n  accounts {\n    accountID\n    givenName\n    age\n  }\n}\n")),(0,r.kt)("p",null,"We can use the generated code with ",(0,r.kt)("inlineCode",{parentName:"p"},"useResult")," like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vue"},'<template>\n  <div>\n    <div v-if="loading">Loading...</div>\n    <div v-else-if="error">Error: {{ error.message }}</div>\n    <div v-else-if="allAccounts">\n      <div v-for="account in allAccounts" :key="account.accountID">\n        {{ account.accountID }}  {{ account.givenName }}  {{ account.age }}\n      </div>\n    </div>\n  </div>\n</template>\n\n<script lang="ts">\nimport { defineComponent } from "@vue/composition-api"\nimport { useResult } from \'@vue/apollo-composable\'\nimport { useAllAccountsQuery } from "../generated/graphqlOperations"\n\nexport default defineComponent({\n  setup() {\n    const { result, loading, error } = useAllAccountsQuery()\n    // Only select the property \'accounts\' for use in the template\n    const allAccounts = useResult(result, null, (data) => data.accounts)\n    return { allAccounts, loading, error }\n  }\n})\n<\/script>\n')),(0,r.kt)("h4",{id:"use-an-options-object"},"Use an options object"),(0,r.kt)("p",null,"Every ",(0,r.kt)("inlineCode",{parentName:"p"},"useXxxxQuery")," can receive an ",(0,r.kt)("a",{parentName:"p",href:"https://v4.apollo.vuejs.org/guide-composable/query.html#options"},"options object")," to define query specific settings. To demonstrate the use of an options object we will try to only execute a query once a condition is met."),(0,r.kt)("p",null,"The ref ",(0,r.kt)("inlineCode",{parentName:"p"},"isAuthenticated")," represents a boolean value that is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," once the user successfully logged in to the app. To retrieve the user's application settings we can only execute the graqhl query once the user is logged on (and the ref ",(0,r.kt)("inlineCode",{parentName:"p"},"isAuthenticated")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"). Setting this ref is done in another part of the app and is used as a simple example. "),(0,r.kt)("p",null,"For the given input:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"query {\n  viewer {\n    preference {\n      language\n      darkMode\n    }\n  }\n}\n")),(0,r.kt)("p",null,"Within the options object is a property ",(0,r.kt)("inlineCode",{parentName:"p"},"enabled")," that defines if a query is enabled or disabled. To only execute the query when ",(0,r.kt)("inlineCode",{parentName:"p"},"isAuthenticated")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," we set the property ",(0,r.kt)("inlineCode",{parentName:"p"},"enabled")," equal to the ref ",(0,r.kt)("inlineCode",{parentName:"p"},"isAuthenticated"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vue"},"import { defineComponent, watchEffect } from '@vue/composition-api'\nimport { useViewerQuery } from '../generated/graphqlOperations'\nimport { isAuthenticated } from 'src/store/authentication'\n\nexport default defineComponent({\n  setup(_, { root }) {\n    // our imported ref:\n    // const isAuthenticated = ref(false)\n    const { result, loading, error } = useViewerQuery(() => ({\n      enabled: isAuthenticated.value,\n    }))\n\n    return {\n      loading,\n      error,\n      result,\n    }\n  },\n})\n<\/script>\n")))}d.isMDXComponent=!0}}]);