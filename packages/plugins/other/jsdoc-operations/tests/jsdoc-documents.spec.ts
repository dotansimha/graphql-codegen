import { buildSchema, parse } from 'graphql';
import { plugin } from '../src/index';

describe('JSDoc Operations Plugin', () => {
  it('should generate a typedef with a property', async () => {
    const schema = buildSchema(/* Graphql */ `
        type Foo {
            foo: Int!
        }
    `);

    const ast = parse(/* GraphQL */ `
      query {
        foo
      }
    `);

    const config = {};
    const result = await plugin(schema, [{ filePath: 'test-file.ts', content: ast }], config, { outputFile: '' });

    expect(result).toEqual(`/**
 * @typedef {Object} Foo
 * @property {number} foo
 */`);
  });

  it('should generate a typedef with a nullable property', async () => {
    const schema = buildSchema(/* Graphql */ `
        type Foo {
            foo: Int
        }
    `);

    const ast = parse(/* GraphQL */ `
      query {
        foo
      }
    `);

    const config = {};
    const result = await plugin(schema, [{ filePath: 'test-file.ts', content: ast }], config, { outputFile: '' });

    expect(result).toEqual(expect.stringContaining('@property {number} [foo]'));
  });

  it('should generate a typedef for a union', async () => {
    const schema = buildSchema(/* Graphql */ `
        union FooBar = Int | Boolean
    `);

    const ast = parse(/* GraphQL */ `
      query {
        foo
      }
    `);

    const config = {};
    const result = await plugin(schema, [{ filePath: 'test-file.ts', content: ast }], config, { outputFile: '' });

    expect(result).toEqual(`/**
 * @typedef {(Int|Boolean)} FooBar
 */`);
  });

  it('should generate a typedef with a list property', async () => {
    const schema = buildSchema(/* Graphql */ `
        type Foo {
            foo: [Int!]!
            nullableFoo: [Int!]
            nullableItemsFoo: [Int]!
            nullableItemsNullableFoo: [Int]
        }
    `);

    const ast = parse(/* GraphQL */ `
      query {
        foo
      }
    `);

    const config = {};
    const result = await plugin(schema, [{ filePath: 'test-file.ts', content: ast }], config, { outputFile: '' });

    expect(result).toEqual(expect.stringContaining('@property {Array<Int>} foo'));
    expect(result).toEqual(expect.stringContaining('@property {Array<Int>} [nullableFoo]'));
    expect(result).toEqual(expect.stringContaining('@property {Array<Int|null|undefined>} nullableItemsFoo'));
    expect(result).toEqual(expect.stringContaining('@property {Array<Int|null|undefined>} [nullableItemsNullableFoo]'));
  });

  it('should generate a typedef with a custom scalar', async () => {
    const schema = buildSchema(/* Graphql */ `
        scalar Bar

        type Foo {
            foo: Bar
        }
    `);

    const ast = parse(/* GraphQL */ `
      query {
        foo
      }
    `);

    const config = {};
    const result = await plugin(schema, [{ filePath: 'test-file.ts', content: ast }], config, { outputFile: '' });

    expect(result).toEqual(expect.stringContaining('@property {Bar} [foo]'));
  });
});
