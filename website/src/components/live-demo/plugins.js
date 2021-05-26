export const presetLoaderMap = {
  'near-operation-file': () => import('@graphql-codegen/near-operation-file-preset'),
  'import-types': () => import('@graphql-codegen/import-types-preset'),
  'java-apollo-android': () => import('@graphql-codegen/java-apollo-android'),
};

export const pluginLoaderMap = {
  jsdoc: () => import('@graphql-codegen/jsdoc'),
  java: () => import('@graphql-codegen/java'),
  'java-resolvers': () => import('@graphql-codegen/java-resolvers'),
  'fragment-matcher': () => import('@graphql-codegen/fragment-matcher'),
  flow: () => import('@graphql-codegen/flow'),
  'flow-operations': () => import('@graphql-codegen/flow-operations'),
  'flow-resolvers': () => import('@graphql-codegen/flow-resolvers'),
  typescript: () => import('@graphql-codegen/typescript'),
  'typescript-compatibility': () => import('@graphql-codegen/typescript-compatibility'),
  'typescript-operations': () => import('@graphql-codegen/typescript-operations'),
  'typescript-resolvers': () => import('@graphql-codegen/typescript-resolvers'),
  'typescript-apollo-angular': () => import('@graphql-codegen/typescript-apollo-angular'),
  'typescript-react-apollo': () => import('@graphql-codegen/typescript-react-apollo'),
  'typescript-vue-apollo': () => import('@graphql-codegen/typescript-vue-apollo'),
  'typescript-stencil-apollo': () => import('@graphql-codegen/typescript-stencil-apollo'),
  'typescript-svelte-apollo': () => import('@graphql-codegen/typescript-svelte-apollo'),
  'typescript-graphql-files-modules': () => import('@graphql-codegen/typescript-graphql-files-modules'),
  'typescript-graphql-request': () => import('@graphql-codegen/typescript-graphql-request'),
  'typescript-generic-sdk': () => import('@graphql-codegen/typescript-generic-sdk'),
  'typescript-type-graphql': () => import('@graphql-codegen/typescript-type-graphql'),
  'typescript-react-query': () => import('@graphql-codegen/typescript-react-query'),
  'typescript-mongodb': () => import('@graphql-codegen/typescript-mongodb'),
  'java-apollo-android': () => import('@graphql-codegen/java-apollo-android'),
  'c-sharp-operations': () => import('@graphql-codegen/c-sharp-operations'),
  'c-sharp': () => import('@graphql-codegen/c-sharp'),
  'typescript-urql': () => import('@graphql-codegen/typescript-urql'),
  'typed-document-node': () => import('@graphql-codegen/typed-document-node'),
  add: () => import('@graphql-codegen/add'),
  time: () => import('@graphql-codegen/time'),
  introspection: () => import('@graphql-codegen/introspection'),
  'schema-ast': () => import('@graphql-codegen/schema-ast'),
  'typescript-apollo-client-helpers': () => import('@graphql-codegen/typescript-apollo-client-helpers'),
};
