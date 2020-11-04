import { RawTypesConfig, AvoidOptionalsConfig } from '@graphql-codegen/visitor-plugin-common';

/**
 * @description This plugin generates the base TypeScript types, based on your GraphQL schema.
 *
 * The types generated by this plugin are simple, and refers to the exact structure of your schema, and it's used as the base types for other plugins (such as `typescript-operations` / `typescript-resolvers`)
 */
export interface TypeScriptPluginConfig extends RawTypesConfig {
  /**
   * @description This will cause the generator to avoid using TypeScript optionals (`?`) on types,
   * so the following definition: `type A { myField: String }` will output `myField: Maybe<string>`
   * instead of `myField?: Maybe<string>`.
   * @default false
   *
   * @exampleMarkdown
   * ## Override all definition types
   * ```yml
   * generates:
   * path/to/file.ts:
   *  plugins:
   *    - typescript
   *  config:
   *    avoidOptionals: true
   * ```
   *
   * ## Override only specific definition types
   * ```yml
   * generates:
   * path/to/file.ts:
   *  plugins:
   *    - typescript
   *  config:
   *    avoidOptionals:
   *      field: true
   *      inputValue: true
   *      object: true
   * ```
   */
  avoidOptionals?: boolean | AvoidOptionalsConfig;
  /**
   * @description Will prefix every generated `enum` with `const`, you can read more about const enums here: https://www.typescriptlang.org/docs/handbook/enums.html.
   * @default false
   *
   * @exampleMarkdown
   * ```yml
   * generates:
   * path/to/file.ts:
   *  plugins:
   *    - typescript
   *  config:
   *    constEnums: true
   * ```
   */
  constEnums?: boolean;
  /**
   * @description Generates enum as TypeScript `type` instead of `enum`. Useful it you wish to generate `.d.ts` declaration file instead of `.ts`
   * @default false
   *
   * @exampleMarkdown
   * ```yml
   * generates:
   * path/to/file.ts:
   *  plugins:
   *    - typescript
   *  config:
   *    enumsAsTypes: true
   * ```
   */
  enumsAsTypes?: boolean;
  /**
   * @description Controls whether to preserve typescript enum values as numbers
   * @default false
   *
   * @exampleMarkdown
   * ```yml
   * generates:
   * path/to/file.ts:
   *  plugins:
   *    - typescript
   *  config:
   *    numericEnums: true
   * ```
   */
  numericEnums?: boolean;
  /**
   * @description This option controls whether or not a catch-all entry is added to enum type definitions for values that may be added in the future. You also have to set `enumsAsTypes` to true if you wish to use this option.
   * This is useful if you are using `relay`.
   * @default false
   *
   * @exampleMarkdown
   * ```yml
   * generates:
   * path/to/file.ts:
   *  plugins:
   *    - typescript
   *  config:
   *    enumsAsTypes: true
   *    futureProofEnums: true
   * ```
   */
  futureProofEnums?: boolean;
  /**
   * @description Generates enum as TypeScript `const assertions` instead of `enum`. This can even be used to enable enum-like patterns in plain JavaScript code if you choose not to use TypeScript’s enum construct.
   * @default false
   *
   * @exampleMarkdown
   * ```yml
   * generates:
   * path/to/file.ts:
   *  plugins:
   *    - typescript
   *  config:
   *    enumsAsConst: true
   * ```
   */
  enumsAsConst?: boolean;
  /**
   * @description This will cause the generator to emit types for operations only (basically only enums and scalars).
   * Interacts well with `preResolveTypes: true`
   * @default false
   *
   * @exampleMarkdown Override all definition types
   * ```yml
   * generates:
   * path/to/file.ts:
   *  plugins:
   *    - typescript
   *  config:
   *    onlyOperationTypes: true
   * ```
   */
  onlyOperationTypes?: boolean;
  /**
   * @description Generates immutable types by adding `readonly` to properties and uses `ReadonlyArray`.
   * @default false
   *
   * @exampleMarkdown
   * ```yml
   * generates:
   * path/to/file.ts:
   *  plugins:
   *    - typescript
   *  config:
   *    immutableTypes: true
   * ```
   */
  immutableTypes?: boolean;
  /**
   * @description Allow to override the type value of `Maybe`.
   * @default T | null
   *
   * @exampleMarkdown
   * ## Allow undefined
   * ```yml
   * generates:
   *  path/to/file.ts:
   *    plugins:
   *      - typescript
   *    config:
   *      maybeValue: T | null | undefined
   * ```
   *
   * ## Allow `null` in resolvers:
   * ```yml
   * generates:
   *  path/to/file.ts:
   *    plugins:
   *      - typescript
   *      - typescript-resolvers
   *    config:
   *      maybeValue: 'T extends PromiseLike<infer U> ? Promise<U | null> : T | null'
   * ```
   */
  maybeValue?: string;
  /**
   * @description Set the to `true` in order to generate output without `export` modifier.
   * This is useful if you are generating `.d.ts` file and want it to be globally available.
   * @default false
   *
   * @exampleMarkdown
   * ## Disable all export from a file
   * ```yml
   * generates:
   * path/to/file.ts:
   *  plugins:
   *    - typescript
   *  config:
   *    noExport: true
   * ```
   */
  noExport?: boolean;
}
