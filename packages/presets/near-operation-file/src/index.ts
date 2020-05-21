import { Types, CodegenPlugin } from '@graphql-codegen/plugin-helpers';
import addPlugin from '@graphql-codegen/add';
import { join } from 'path';
import { FragmentDefinitionNode, buildASTSchema, GraphQLSchema } from 'graphql';
import { appendExtensionToFilePath, defineFilepathSubfolder } from './utils';
import { resolveDocumentImports, DocumentImportResolverOptions } from './resolve-document-imports';

export { resolveDocumentImports, DocumentImportResolverOptions };

export type NearOperationFileConfig = {
  /**
   * @name schemaTypesPath
   * @description Required, should point to the base schema types file.
   * The key of the output is used a the base path for this file.
   *
   * @example
   * ```yml
   * generates:
   * src/:
   *  preset: near-operation-file
   *  presetConfig:
   *    schemaTypesPath: types.ts
   *  plugins:
   *    - typescript-operations
   * ```
   */
  baseTypesPath: string;
  /**
   * @name extension
   * @description Optional, sets the extension for the generated files. Use this to override the extension if you are using plugins that requires a different type of extensions (such as `typescript-react-apollo`)
   * @default .generates.ts
   *
   * @example
   * ```yml
   * generates:
   * src/:
   *  preset: near-operation-file
   *  presetConfig:
   *    baseTypesPath: types.ts
   *    extension: .generated.tsx
   *  plugins:
   *    - typescript-operations
   *    - typescript-react-apollo
   * ```
   */
  extension?: string;
  /**
   * @name cwd
   * @description Optional, override the `cwd` of the execution. We are using `cwd` to figure out the imports between files. Use this if your execuion path is not your project root directory.
   * @default process.cwd()
   *
   * @example
   * ```yml
   * generates:
   * src/:
   *  preset: near-operation-file
   *  presetConfig:
   *    baseTypesPath: types.ts
   *    cwd: /some/path
   *  plugins:
   *    - typescript-operations
   * ```
   */
  cwd?: string;
  /**
   * @name folder
   * @description Optional, defines a folder, (Relative to the source files) where the generated files will be created.
   * @default ''
   *
   * @example
   * ```yml
   * generates:
   * src/:
   *  preset: near-operation-file
   *  presetConfig:
   *    baseTypesPath: types.ts
   *    folder: __generated__
   *  plugins:
   *    - typescript-operations
   * ```
   */
  folder?: string;
  /**
   * @name importTypesNamespace
   * @description Optional, override the name of the import namespace used to import from the `baseTypesPath` file.
   * @default Types
   *
   * @example
   * ```yml
   * generates:
   * src/:
   *  preset: near-operation-file
   *  presetConfig:
   *    baseTypesPath: types.ts
   *    importTypesNamespace: SchemaTypes
   *  plugins:
   *    - typescript-operations
   * ```
   */
  importTypesNamespace?: string;
};

export type FragmentNameToFile = {
  [fragmentName: string]: { location: string; importsNames: string[]; onType: string; node: FragmentDefinitionNode };
};

export const preset: Types.OutputPreset<NearOperationFileConfig> = {
  buildGeneratesSection: options => {
    const schemaObject: GraphQLSchema = options.schemaAst
      ? options.schemaAst
      : buildASTSchema(options.schema, options.config as any);
    const baseDir = options.presetConfig.cwd || process.cwd();
    const extension = options.presetConfig.extension || '.generated.ts';
    const folder = options.presetConfig.folder || '';
    const importTypesNamespace = options.presetConfig.importTypesNamespace || 'Types';

    const baseTypesPath = options.presetConfig.baseTypesPath;

    if (!baseTypesPath) {
      throw new Error(
        `Preset "near-operation-file" requires you to specify "baseTypesPath" configuration and point it to your base types file (generated by "typescript" plugin)!`
      );
    }

    const shouldAbsolute = !baseTypesPath.startsWith('~');

    const pluginMap: { [name: string]: CodegenPlugin } = {
      ...options.pluginMap,
      add: addPlugin,
    };

    const sources = resolveDocumentImports(options, schemaObject, {
      baseDir,
      generateFilePath(location: string) {
        const newFilePath = defineFilepathSubfolder(location, folder);
        return appendExtensionToFilePath(newFilePath, extension);
      },
      schemaTypesSource: {
        path: shouldAbsolute ? join(options.baseOutputDir, baseTypesPath) : baseTypesPath,
        namespace: importTypesNamespace,
      },
    });

    return sources.map<Types.GenerateOptions>(({ importStatements, externalFragments, fragmentImports, ...source }) => {
      const plugins = [
        // TODO/NOTE I made globalNamespace include schema types - is that correct?
        ...(options.config.globalNamespace ? [] : importStatements.map(importStatement => ({ add: importStatement }))),
        ...options.plugins,
      ];
      const config = {
        ...options.config,
        // This is set here in order to make sure the fragment spreads sub types
        // are exported from operations file
        exportFragmentSpreadSubTypes: true,
        namespacedImportName: importTypesNamespace,
        externalFragments,
        fragmentImports,
      };

      return {
        ...source,
        plugins,
        pluginMap,
        config,
        schema: options.schema,
        schemaAst: schemaObject,
        skipDocumentsValidation: true,
      };
    });
  },
};

export default preset;
