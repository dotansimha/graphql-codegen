import { printSchemaWithDirectives } from 'graphql-toolkit';
import { RawResolversConfig } from '@graphql-codegen/visitor-plugin-common';
import { Types, PluginFunction, addFederationReferencesToSchema } from '@graphql-codegen/plugin-helpers';
import { isScalarType, parse, printSchema, visit, GraphQLSchema } from 'graphql';
import { FlowResolversVisitor } from './visitor';

export interface FlowResolversPluginConfig extends RawResolversConfig {}

export const plugin: PluginFunction<FlowResolversPluginConfig> = (schema: GraphQLSchema, documents: Types.DocumentFile[], config: FlowResolversPluginConfig) => {
  const imports = ['type GraphQLResolveInfo'];
  const showUnusedMappers = typeof config.showUnusedMappers === 'boolean' ? config.showUnusedMappers : true;

  const gqlImports = `import { ${imports.join(', ')} } from 'graphql';`;

  const transformedSchema = config.federation ? addFederationReferencesToSchema(schema) : schema;

  const printedSchema = config.federation ? printSchemaWithDirectives(transformedSchema) : printSchema(transformedSchema);
  const astNode = parse(printedSchema);
  const visitor = new FlowResolversVisitor(config, transformedSchema);

  const header = `export type Resolver<Result, Parent = {}, Context = {}, Args = {}> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export type ReferenceResolver<Result, Reference = {}, Context = {}> = (
  reference: Reference,
  context: Context,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export type SubscriptionSubscribeFn<Result, Parent, Context, Args> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => AsyncIterator<Result> | Promise<AsyncIterator<Result>>;

export type SubscriptionResolveFn<Result, Parent, Context, Args> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => Result | Promise<Result>;

export interface SubscriptionSubscriberObject<Result, Key: string, Parent, Context, Args> {
  subscribe: SubscriptionSubscribeFn<{ [key: Key]: Result }, Parent, Context, Args>;
  resolve?: SubscriptionResolveFn<Result, { [key: Key]: Result }, Context, Args>;
}

export interface SubscriptionResolverObject<Result, Parent, Context, Args> {
  subscribe: SubscriptionSubscribeFn<mixed, Parent, Context, Args>;
  resolve: SubscriptionResolveFn<Result, mixed, Context, Args>;
}

export type SubscriptionObject<Result, Key: string, Parent, Context, Args> =
  | SubscriptionSubscriberObject<Result, Key, Parent, Context, Args>
  | SubscriptionResolverObject<Result, Parent, Context, Args>;

export type SubscriptionResolver<Result, Key: string, Parent = {}, Context = {}, Args = {}> =
  | ((...args: Array<any>) => SubscriptionObject<Result, Key, Parent, Context, Args>)
  | SubscriptionObject<Result, Key, Parent, Context, Args>;

export type TypeResolveFn<Types, Parent = {}, Context = {}> = (
  parent: Parent,
  context: Context,
  info: GraphQLResolveInfo
) => ?Types;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<Result = {}, Parent = {}, Args = {}, Context = {}> = (
  next: NextResolverFn<Result>,
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => Result | Promise<Result>;

${visitor.getResolverTypeWrapperSignature()}
`;

  const visitorResult = visit(astNode, { leave: visitor });
  const resolversTypeMapping = visitor.buildResolversTypes();
  const resolversParentTypeMapping = visitor.buildResolversParentTypes();
  const { getRootResolver, getAllDirectiveResolvers, mappersImports, unusedMappers, hasScalars } = visitor;

  if (hasScalars()) {
    imports.push('type GraphQLScalarTypeConfig');
  }

  if (showUnusedMappers && unusedMappers.length) {
    console['warn'](`Unused mappers: ${unusedMappers.join(',')}`);
  }

  return {
    prepend: [gqlImports, ...mappersImports, ...visitor.globalDeclarations],
    content: [header, resolversTypeMapping, resolversParentTypeMapping, ...visitorResult.definitions.filter(d => typeof d === 'string'), getRootResolver(), getAllDirectiveResolvers()].join('\n'),
  };
};
