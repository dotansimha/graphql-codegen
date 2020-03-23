import { GraphQLSchema, GraphQLOutputType, isEnumType, isNonNullType } from 'graphql';
import {
  wrapTypeWithModifiers,
  PreResolveTypesProcessor,
  ParsedDocumentsConfig,
  BaseDocumentsVisitor,
  LoadedFragment,
  getConfigValue,
  SelectionSetProcessorConfig,
  SelectionSetToObject,
  DeclarationKind,
  normalizeAvoidOptionals,
  AvoidOptionalsConfig,
} from '@graphql-codegen/visitor-plugin-common';
import { TypeScriptOperationVariablesToObject } from './ts-operation-variables-to-object';
import { PythonDocumentsPluginConfig } from './config';

import { TypeScriptSelectionSetProcessor } from './ts-selection-set-processor';
import autoBind from 'auto-bind';

export interface TypeScriptDocumentsParsedConfig extends ParsedDocumentsConfig {
  avoidOptionals: AvoidOptionalsConfig;
  immutableTypes: boolean;
  noExport: boolean;
}

export class PythonDocumentsVisitor extends BaseDocumentsVisitor<
  PythonDocumentsPluginConfig,
  TypeScriptDocumentsParsedConfig
> {
  constructor(schema: GraphQLSchema, config: PythonDocumentsPluginConfig, allFragments: LoadedFragment[]) {
    super(
      config,
      {
        noExport: getConfigValue(config.noExport, false),
        avoidOptionals: normalizeAvoidOptionals(getConfigValue(config.avoidOptionals, false)),
        immutableTypes: getConfigValue(config.immutableTypes, false),
        nonOptionalTypename: getConfigValue(config.nonOptionalTypename, false),
      } as TypeScriptDocumentsParsedConfig,
      schema
    );

    autoBind(this);

    const wrapOptional = (type: string) => {
      const prefix = this.config.namespacedImportName ? `${this.config.namespacedImportName}.` : '';
      return `${prefix}Maybe<${type}>`;
    };
    const wrapArray = (type: string) => {
      const listModifier = this.config.immutableTypes ? 'ReadonlyArray' : 'Array';
      return `${listModifier}<${type}>`;
    };

    const formatNamedField = (name: string, type: GraphQLOutputType | null): string => {
      const optional = !this.config.avoidOptionals.field && !!type && !isNonNullType(type);
      return (this.config.immutableTypes ? `readonly ${name}` : name) + (optional ? '?' : '');
    };

    const processorConfig: SelectionSetProcessorConfig = {
      namespacedImportName: this.config.namespacedImportName,
      convertName: this.convertName.bind(this),
      enumPrefix: this.config.enumPrefix,
      scalars: this.scalars,
      formatNamedField,
      wrapTypeWithModifiers(baseType, type) {
        return wrapTypeWithModifiers(baseType, type, { wrapOptional, wrapArray });
      },
    };
    const processor = new (config.preResolveTypes ? PreResolveTypesProcessor : TypeScriptSelectionSetProcessor)(
      processorConfig
    );
    this.setSelectionSetHandler(
      new SelectionSetToObject(
        processor,
        this.scalars,
        this.schema,
        this.convertName.bind(this),
        this.getFragmentSuffix.bind(this),
        allFragments,
        this.config
      )
    );
    const enumsNames = Object.keys(schema.getTypeMap()).filter((typeName) => isEnumType(schema.getType(typeName)));
    this.setVariablesTransformer(
      new TypeScriptOperationVariablesToObject(
        this.scalars,
        this.convertName.bind(this),
        this.config.avoidOptionals.object,
        this.config.immutableTypes,
        this.config.namespacedImportName,
        enumsNames,
        this.config.enumPrefix,
        this.config.enumValues
      )
    );
    this._declarationBlockConfig = {
      ignoreExport: this.config.noExport,
    };
  }

  protected getPunctuation(declarationKind: DeclarationKind): string {
    return ';';
  }
}
