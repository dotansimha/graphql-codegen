(self.webpackChunk_graphql_codegen_website=self.webpackChunk_graphql_codegen_website||[]).push([[9306],{35318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return N}});var a=n(27378);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,p=function(e,t){if(null==e)return{};var n,a,p={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,p=e.mdxType,r=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(n),N=p,k=u["".concat(o,".").concat(N)]||u[N]||d[N]||r;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function N(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:p,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},76046:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return s},default:function(){return d}});var a=n(29603),p=n(50120),r=(n(27378),n(35318)),i=["components"],l={id:"typescript-type-graphql",title:"TypeScript TypeGraphQL"},o={unversionedId:"plugins/typescript-type-graphql",id:"plugins/typescript-type-graphql",isDocsHomePage:!1,title:"TypeScript TypeGraphQL",description:"This plugin is similar to the basic TypeScript plugin. However, this package generates types that can be used by TypeGraphQL to generate a GraphQL schema. This is especially useful if you are building a service that is a gateway to multiple downstream GraphQL services, or otherwise combining GraphQL schemas. In this case, this plugin can be used to re-expose types defined in downstream GraphQL services without redefining them as TypeGraphQL objects. This plugin should be compatible with other client-side plugins, such as typescript-operations.",source:"@site/docs/plugins/typescript-type-graphql.md",sourceDirName:"plugins",slug:"/plugins/typescript-type-graphql",permalink:"/docs/plugins/typescript-type-graphql",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/plugins/typescript-type-graphql.md",version:"current",frontMatter:{id:"typescript-type-graphql",title:"TypeScript TypeGraphQL"},sidebar:"sidebar",previous:{title:"Named Operations Object",permalink:"/docs/plugins/named-operations-object"},next:{title:"Typescript Apollo Nextjs",permalink:"/docs/plugins/typescript-apollo-next"}},s=[],m={toc:s};function d(e){var t=e.components,n=(0,p.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This plugin is similar to the basic TypeScript plugin. However, this package generates types that can be used by TypeGraphQL to generate a GraphQL schema. This is especially useful if you are building a service that is a gateway to multiple downstream GraphQL services, or otherwise combining GraphQL schemas. In this case, this plugin can be used to re-expose types defined in downstream GraphQL services without redefining them as TypeGraphQL objects. This plugin should be compatible with other client-side plugins, such as typescript-operations."),(0,r.kt)("p",null,"Some differences with the the types generated by the basic TypeScript plugin:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"classes are generated instead of interfaces"),(0,r.kt)("li",{parentName:"ul"},"TypeGraphQL decorators like @ObjectType and @Field will be added")),(0,r.kt)("p",null,(0,r.kt)("h2",{parentName:"p"},"Installation"),(0,r.kt)("img",{alt:"typescript-type-graphql plugin version",src:"https://img.shields.io/npm/v/@graphql-codegen/typescript-type-graphql?color=%23e15799&label=plugin\xa0version&style=for-the-badge"}),(0,r.kt)("div",{parentName:"p",className:"admonition admonition-shell"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"}),(0,r.kt)("path",{parentName:"svg",d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"}))),"Using ",(0,r.kt)("inlineCode",{parentName:"h5"},"yarn"))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre"},"yarn add -D @graphql-codegen/typescript-type-graphql\n")))),(0,r.kt)("h2",{parentName:"p"},"API Reference"),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"decoratorName")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"Partial_1"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"{ type: 'ObjectType', interface: 'InterfaceType', arguments: 'ArgsType', field: 'Field', input: 'InputType' }")),(0,r.kt)("p",{parentName:"p"},"allow overriding of TypeGraphQL decorator types"),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"decorateTypes")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string[]")),(0,r.kt)("p",{parentName:"p"},"Speciies the objects that will have TypeGraphQL decorators prepended to them, by name. Non-matching types will still be output, but without decorators. If not set, all types will be decorated."),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"avoidOptionals")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"AvoidOptionalsConfig | boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",{parentName:"p"},"This will cause the generator to avoid using TypeScript optionals (",(0,r.kt)("inlineCode",{parentName:"p"},"?"),") on types,\nso the following definition: ",(0,r.kt)("inlineCode",{parentName:"p"},"type A { myField: String }")," will output ",(0,r.kt)("inlineCode",{parentName:"p"},"myField: Maybe<string>"),"\ninstead of ",(0,r.kt)("inlineCode",{parentName:"p"},"myField?: Maybe<string>"),"."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("h5",{parentName:"p"},"Override all definition types"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   avoidOptionals: true\n")),(0,r.kt)("h5",{parentName:"p"},"Override only specific definition types"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   avoidOptionals:\n     field: true\n     inputValue: true\n     object: true\n     defaultValue: true\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"constEnums")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",{parentName:"p"},"Will prefix every generated ",(0,r.kt)("inlineCode",{parentName:"p"},"enum")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"const"),", you can read more about const enums here: ",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/enums.html"},"https://www.typescriptlang.org/docs/handbook/enums.html"),"."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   constEnums: true\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"enumsAsTypes")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",{parentName:"p"},"Generates enum as TypeScript ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"enum"),". Useful it you wish to generate ",(0,r.kt)("inlineCode",{parentName:"p"},".d.ts")," declaration file instead of ",(0,r.kt)("inlineCode",{parentName:"p"},".ts")),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   enumsAsTypes: true\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"numericEnums")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",{parentName:"p"},"Controls whether to preserve typescript enum values as numbers"),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   numericEnums: true\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"futureProofEnums")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",{parentName:"p"},"This option controls whether or not a catch-all entry is added to enum type definitions for values that may be added in the future. You also have to set ",(0,r.kt)("inlineCode",{parentName:"p"},"enumsAsTypes")," to true if you wish to use this option.\nThis is useful if you are using ",(0,r.kt)("inlineCode",{parentName:"p"},"relay"),"."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   enumsAsTypes: true\n   futureProofEnums: true\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"futureProofUnions")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",{parentName:"p"},"This option controls whether or not a catch-all entry is added to union type definitions for values that may be added in the future.\nThis is useful if you are using ",(0,r.kt)("inlineCode",{parentName:"p"},"relay"),"."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   futureProofUnions: true\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"enumsAsConst")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",{parentName:"p"},"Generates enum as TypeScript ",(0,r.kt)("inlineCode",{parentName:"p"},"const assertions")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"enum"),". This can even be used to enable enum-like patterns in plain JavaScript code if you choose not to use TypeScript\u2019s enum construct."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   enumsAsConst: true\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"onlyOperationTypes")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",{parentName:"p"},"This will cause the generator to emit types for operations only (basically only enums and scalars).\nInteracts well with ",(0,r.kt)("inlineCode",{parentName:"p"},"preResolveTypes: true")),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("p",{parentName:"p"},"Override all definition types"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\nplugins:\n- typescript\nconfig:\nonlyOperationTypes: true\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"immutableTypes")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",{parentName:"p"},"Generates immutable types by adding ",(0,r.kt)("inlineCode",{parentName:"p"},"readonly")," to properties and uses ",(0,r.kt)("inlineCode",{parentName:"p"},"ReadonlyArray"),"."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   immutableTypes: true\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"maybeValue")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"T | null")),(0,r.kt)("p",{parentName:"p"},"Allow to override the type value of ",(0,r.kt)("inlineCode",{parentName:"p"},"Maybe"),"."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("h5",{parentName:"p"},"Allow undefined"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\n path/to/file.ts:\n   plugins:\n     - typescript\n   config:\n     maybeValue: T | null | undefined\n")),(0,r.kt)("h5",{parentName:"p"},"Allow ",(0,r.kt)("inlineCode",{parentName:"h5"},"null")," in resolvers:"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\n path/to/file.ts:\n   plugins:\n     - typescript\n     - typescript-resolvers\n   config:\n     maybeValue: 'T extends PromiseLike<infer U> ? Promise<U | null> : T | null'\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"noExport")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",{parentName:"p"},"Set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," in order to generate output without ",(0,r.kt)("inlineCode",{parentName:"p"},"export")," modifier.\nThis is useful if you are generating ",(0,r.kt)("inlineCode",{parentName:"p"},".d.ts")," file and want it to be globally available."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("h5",{parentName:"p"},"Disable all export from a file"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   noExport: true\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"disableDescriptions")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",{parentName:"p"},"Set the value to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," in order to disable all description generation."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("h5",{parentName:"p"},"Disable description generation"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   disableDescriptions: true\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"useImplementingTypes")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",{parentName:"p"},"When a GraphQL interface is used for a field, this flag will use the implementing types, instead of the interface itself."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("h5",{parentName:"p"},"Override all definition types"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   useImplementingTypes: true\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"wrapEntireFieldDefinitions")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"true")),(0,r.kt)("p",{parentName:"p"},"Set the to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," in order to wrap field definitions with ",(0,r.kt)("inlineCode",{parentName:"p"},"EntireFieldWrapper"),".\nThis is useful to allow return types such as Promises and functions for fields.\nDiffers from ",(0,r.kt)("inlineCode",{parentName:"p"},"wrapFieldDefinitions")," in that this wraps the entire field definition if ie. the field is an Array, while\n",(0,r.kt)("inlineCode",{parentName:"p"},"wrapFieldDefinitions")," will wrap every single value inside the array."),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"entireFieldWrapperValue")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"T | Promise<T> | (() => T | Promise<T>)")),(0,r.kt)("p",{parentName:"p"},"Allow to override the type value of ",(0,r.kt)("inlineCode",{parentName:"p"},"EntireFieldWrapper"),". This wrapper applies outside of Array and Maybe\nunlike ",(0,r.kt)("inlineCode",{parentName:"p"},"fieldWrapperValue"),", that will wrap the inner type."),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"allowEnumStringTypes")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",{parentName:"p"},"Allow using enum string values directly."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"  config:\n    allowEnumStringTypes: true\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"addUnderscoreToArgsType")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",{parentName:"p"},"Adds ",(0,r.kt)("inlineCode",{parentName:"p"},"_")," to generated ",(0,r.kt)("inlineCode",{parentName:"p"},"Args")," types in order to avoid duplicate identifiers."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("h5",{parentName:"p"},"With Custom Values"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"  config:\n    addUnderscoreToArgsType: true\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"enumValues")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"EnumValuesMap")),(0,r.kt)("p",{parentName:"p"},"Overrides the default value of enum values declared in your GraphQL schema.\nYou can also map the entire enum to an external type by providing a string that of ",(0,r.kt)("inlineCode",{parentName:"p"},"module#type"),"."),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"declarationKind")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"DeclarationKindConfig | string (values: abstract class, class, interface, type)")),(0,r.kt)("p",{parentName:"p"},"Overrides the default output for various GraphQL elements."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("h5",{parentName:"p"},"Override all declarations"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"  config:\n    declarationKind: 'interface'\n")),(0,r.kt)("h5",{parentName:"p"},"Override only specific declarations"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"  config:\n    declarationKind:\n      type: 'interface'\n      input: 'interface'\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"enumPrefix")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"true")),(0,r.kt)("p",{parentName:"p"},"Allow you to disable prefixing for generated enums, works in combination with ",(0,r.kt)("inlineCode",{parentName:"p"},"typesPrefix"),"."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("h5",{parentName:"p"},"Disable enum prefixes"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"  config:\n    typesPrefix: I\n    enumPrefix: false\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"fieldWrapperValue")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"T")),(0,r.kt)("p",{parentName:"p"},"Allow you to add wrapper for field type, use T as the generic value. Make sure to set ",(0,r.kt)("inlineCode",{parentName:"p"},"wrapFieldDefinitions")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," in order to make this flag work."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("h5",{parentName:"p"},"Allow Promise"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   wrapFieldDefinitions: true\n   fieldWrapperValue: T | Promise<T>\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"wrapFieldDefinitions")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",{parentName:"p"},"Set the to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," in order to wrap field definitions with ",(0,r.kt)("inlineCode",{parentName:"p"},"FieldWrapper"),".\nThis is useful to allow return types such as Promises and functions."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("h5",{parentName:"p"},"Enable wrapping fields"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   wrapFieldDefinitions: true\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"ignoreEnumValuesFromSchema")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",{parentName:"p"},"This will cause the generator to ignore enum values defined in GraphQLSchema"),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("h5",{parentName:"p"},"Ignore enum values from schema"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   ignoreEnumValuesFromSchema: true\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"strictScalars")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",{parentName:"p"},"Makes scalars strict."),(0,r.kt)("p",{parentName:"p"},"If scalars are found in the schema that are not defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"scalars"),"\nan error will be thrown during codegen."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  strictScalars: true\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"defaultScalarType")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"any")),(0,r.kt)("p",{parentName:"p"},"Allows you to override the type that unknown scalars will have."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  defaultScalarType: unknown\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"scalars")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"ScalarsMap")),(0,r.kt)("p",{parentName:"p"},"Extends or overrides the built-in scalars and custom GraphQL scalars to a custom type."),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"namingConvention")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"NamingConvention"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"change-case-all#pascalCase")),(0,r.kt)("p",{parentName:"p"},"Allow you to override the naming convention of the output.\nYou can either override all namings, or specify an object with specific custom naming convention per output.\nThe format of the converter must be a valid ",(0,r.kt)("inlineCode",{parentName:"p"},"module#method"),".\nAllowed values for specific output are: ",(0,r.kt)("inlineCode",{parentName:"p"},"typeNames"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"enumValues"),'.\nYou can also use "keep" to keep all GraphQL names as-is.\nAdditionally you can set ',(0,r.kt)("inlineCode",{parentName:"p"},"transformUnderscore")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if you want to override the default behavior,\nwhich is to preserves underscores."),(0,r.kt)("p",{parentName:"p"},"Available case functions in ",(0,r.kt)("inlineCode",{parentName:"p"},"change-case-all")," are ",(0,r.kt)("inlineCode",{parentName:"p"},"camelCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"capitalCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"constantCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dotCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"headerCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"noCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"paramCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pascalCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pathCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sentenceCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"snakeCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"lowerCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"localeLowerCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"lowerCaseFirst"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"spongeCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"titleCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"upperCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"localeUpperCase")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"upperCaseFirst"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/btxtiger/change-case-all"},"See more")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"typesPrefix")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),(0,r.kt)("p",{parentName:"p"},"Prefixes all the generated types."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  typesPrefix: I\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"typesSuffix")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),(0,r.kt)("p",{parentName:"p"},"Suffixes all the generated types."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  typesSuffix: I\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"skipTypename")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",{parentName:"p"},"Does not add __typename to the generated types, unless it was specified in the selection set."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  skipTypename: true\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"nonOptionalTypename")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",{parentName:"p"},"Automatically adds ",(0,r.kt)("inlineCode",{parentName:"p"},"__typename")," field to the generated types, even when they are not specified\nin the selection set, and makes it non-optional"),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  nonOptionalTypename: true\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"useTypeImports")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",{parentName:"p"},"Will use ",(0,r.kt)("inlineCode",{parentName:"p"},"import type {}")," rather than ",(0,r.kt)("inlineCode",{parentName:"p"},"import {}"),' when importing only types. This gives\ncompatibility with TypeScript\'s "importsNotUsedAsValues": "error" option'),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"dedupeFragments")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",{parentName:"p"},"Removes fragment duplicates for reducing data transfer.\nIt is done by removing sub-fragments imports from fragment definition\nInstead - all of them are imported to the Operation node.")))}d.isMDXComponent=!0}}]);