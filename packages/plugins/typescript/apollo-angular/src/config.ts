import { RawClientSideBasePluginConfig } from '@graphql-codegen/visitor-plugin-common';

/**
 * @description This plugin generates Apollo services (`Query`, `Mutation` and `Subscription`) with TypeScript typings.
 *
 * It will generate a strongly typed Angular service for every defined query, mutation or subscription. The generated Angular services are ready to inject and use within your Angular component.
 *
 * It extends the basic TypeScript plugins: `@graphql-codegen/typescript`, `@graphql-codegen/typescript-operations` - and thus shares a similar configuration.
 *
 * To shed some more light regards this template, it's recommended to go through the this article: http://apollographql.com/docs/angular/basics/services.html , and to read the Code Generation with Apollo Angular: https://the-guild.dev/blog/apollo-angular-12
 */
export interface ApolloAngularRawPluginConfig extends RawClientSideBasePluginConfig {
  /**
   * @description Allows to define `ngModule` as part of the plugin's config so it's globally available.
   *
   * @examples
   * ```yml
   * config:
   *   ngModule: ./path/to/module#MyModule
   * ```
   */
  ngModule?: string;
  /**
   * @description Defined the global value of `namedClient`.
   *
   * @examples
   * ```yml
   * config:
   *   namedClient: 'customName'
   * ```
   */
  namedClient?: string;
  /**
   * @description Defined the global value of `serviceName`.
   *
   * @examples
   * ```yml
   * config:
   *   serviceName: 'MySDK'
   * ```
   */
  serviceName?: string;
  /**
   * @description Defined the global value of `serviceProvidedInRoot`.
   *
   * @examples
   * ```yml
   * config:
   *   serviceProvidedInRoot: false
   * ```
   */
  serviceProvidedInRoot?: boolean;
  /**
   * @description Set to `true` in order to generate a SDK service class that uses all generated services.
   * @default false
   */
  sdkClass?: boolean;
  /**
   * @description Allows to define a custom suffix for query operations.
   * @default GQL
   *
   * @examples
   * ```yml
   * config:
   *   querySuffix: 'QueryService'
   * ```
   */
  querySuffix?: string;
  /**
   * @description Allows to define a custom suffix for mutation operations.
   * @default GQL
   *
   * @examples
   * ```yml
   * config:
   *   mutationSuffix: 'MutationService'
   * ```
   */
  mutationSuffix?: string;
  /**
   * @description Allows to define a custom suffix for Subscription operations.
   * @default GQL
   *
   * @examples
   * ```yml
   * config:
   *   subscriptionSuffix: 'SubscriptionService'
   * ```
   */
  subscriptionSuffix?: 'GQL' | string;
  /**
   * @description Allows to define a custom Apollo-Angular package to import types from.
   * @default 'apollo-angular'
   */
  apolloAngularPackage?: 'apollo-angular' | string;
}
