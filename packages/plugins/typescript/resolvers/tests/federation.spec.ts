import '@graphql-codegen/testing';
import { buildSchema } from 'graphql';
import { plugin } from '../src';
import { Types } from '@graphql-codegen/plugin-helpers';

const directives = /* GraphQL */ `
  scalar _FieldSet

  directive @external on FIELD_DEFINITION
  directive @requires(fields: _FieldSet!) on FIELD_DEFINITION
  directive @provides(fields: _FieldSet!) on FIELD_DEFINITION
  directive @key(fields: _FieldSet!) on OBJECT | INTERFACE
`;

// TODO: support `extend type Query { }`
// TODO: should we assume people add federation spec (scalars and directives) or we should do it when `federation` flag is on?

describe('TypeScript Resolvers Plugin + Apollo Federation', () => {
  it('should add __resolveReference to objects that have @key', async () => {
    const federatedSchema = buildSchema(/* GraphQL */ `
      ${directives}

      type Query {
        allUsers: [User]
      }

      type User @key(fields: "id") {
        id: ID!
        name: String
        username: String
      }

      type Book {
        id: ID!
      }
    `);

    const content = (await plugin(
      federatedSchema,
      [],
      {
        federation: true,
      } as any,
      { outputFile: 'graphql.ts' }
    )) as Types.ComplexPluginOutput;

    // User should have it
    expect(content.content).toBeSimilarStringTo(`
      __resolveReference?: Resolver<Maybe<ResolversTypes['User']>, ({ id: ParentType["id"] }), ContextType>,
    `);
    // Foo shouldn't because it doesn't have @key
    expect(content.content).not.toBeSimilarStringTo(`
      __resolveReference?: Resolver<Maybe<ResolversTypes['Book']>, ParentType, ContextType>,
    `);
  });

  it('should include fields from @requires directive', async () => {
    const federatedSchema = buildSchema(/* GraphQL */ `
      ${directives}

      type Query {
        users: [User]
      }

      type User @key(fields: "id") {
        id: ID!
        name: String @external
        age: Int! @external
        username: String @requires(fields: "name age")
      }
    `);

    const content = (await plugin(
      federatedSchema,
      [],
      {
        federation: true,
      } as any,
      { outputFile: 'graphql.ts' }
    )) as Types.ComplexPluginOutput;

    // User should have it
    expect(content.content).toBeSimilarStringTo(`
      export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
        __resolveReference?: Resolver<Maybe<ResolversTypes['User']>, ({ id: ParentType["id"] }), ContextType>,
        id?: Resolver<ResolversTypes['ID'], ({ id: ParentType["id"] }), ContextType>,
        username?: Resolver<Maybe<ResolversTypes['String']>, ({ id: ParentType["id"] }) & { name?: ParentType["name"]; age: ParentType["age"] }, ContextType>,
      };
    `);
  });

  it('should skip to generate resolvers of fields with @external directive', async () => {
    const federatedSchema = buildSchema(/* GraphQL */ `
      ${directives}

      type Query {
        users: [User]
      }

      type Book {
        author: User @provides(fields: "name")
      }

      type User @key(fields: "id") {
        id: ID!
        name: String @external
        username: String @external
      }
    `);

    const content = (await plugin(
      federatedSchema,
      [],
      {
        federation: true,
      } as any,
      { outputFile: 'graphql.ts' }
    )) as Types.ComplexPluginOutput;

    // UserResolver should not have a resolver function of name field
    expect(content.content).toBeSimilarStringTo(`
      export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
        __resolveReference?: Resolver<Maybe<ResolversTypes['User']>, ({ id: ParentType["id"] }), ContextType>,
        id?: Resolver<ResolversTypes['ID'], ({ id: ParentType["id"] }), ContextType>,
        name?: Resolver<Maybe<ResolversTypes['String']>, ({ id: ParentType["id"] }), ContextType>,
      };
    `);
  });

  it('should not include _FieldSet scalar', async () => {
    const federatedSchema = buildSchema(/* GraphQL */ `
      ${directives}

      type Query {
        users: [User]
      }

      type User @key(fields: "id") {
        id: ID!
        name: String
        username: String
      }

      type Book {
        id: ID!
      }
    `);

    const content = (await plugin(
      federatedSchema,
      [],
      {
        federation: true,
      } as any,
      { outputFile: 'graphql.ts' }
    )) as Types.ComplexPluginOutput;

    expect(content.content).not.toMatch(`_FieldSet`);
  });

  it('should not include federation directives', async () => {
    const federatedSchema = buildSchema(/* GraphQL */ `
      ${directives}

      type Query {
        users: [User]
      }

      type User @key(fields: "id") {
        id: ID!
        name: String
        username: String
      }

      type Book {
        id: ID!
      }
    `);

    const content = (await plugin(
      federatedSchema,
      [],
      {
        federation: true,
      } as any,
      { outputFile: 'graphql.ts' }
    )) as Types.ComplexPluginOutput;

    expect(content.content).not.toMatch('ExternalDirectiveResolver');
    expect(content.content).not.toMatch('RequiresDirectiveResolver');
    expect(content.content).not.toMatch('ProvidesDirectiveResolver');
    expect(content.content).not.toMatch('KeyDirectiveResolver');
  });
});
