import { SelectionSetToObject, ConvertNameFn, NormalizedScalarsMap, LoadedFragment } from '@graphql-codegen/visitor-plugin-common';
import { GraphQLSchema, GraphQLNamedType, SelectionSetNode, GraphQLObjectType, GraphQLNonNull, GraphQLList, isNonNullType, isListType } from 'graphql';
import { TypeScriptDocumentsParsedConfig } from './visitor';

export class TypeScriptSelectionSetToObject extends SelectionSetToObject<TypeScriptDocumentsParsedConfig> {
  constructor(_scalars: NormalizedScalarsMap, _schema: GraphQLSchema, _convertName: ConvertNameFn, _loadedFragments: LoadedFragment[], _config: TypeScriptDocumentsParsedConfig, _parentSchemaType?: GraphQLNamedType, _selectionSet?: SelectionSetNode) {
    super(_scalars, _schema, _convertName, _loadedFragments, _config, _parentSchemaType, _selectionSet);
  }

  public createNext(parentSchemaType: GraphQLNamedType, selectionSet: SelectionSetNode): SelectionSetToObject {
    return new TypeScriptSelectionSetToObject(this._scalars, this._schema, this._convertName, this._loadedFragments, this._config, parentSchemaType, selectionSet);
  }

  private clearOptional(str: string): string {
    const prefix = this._config.namespacedImportName ? `${this._config.namespacedImportName}\.` : '';
    const rgx = new RegExp(`^${prefix}Maybe<(.*?)>$`, 'is');

    if (str.startsWith(`${this._config.namespacedImportName ? `${this._config.namespacedImportName}.` : ''}Maybe`)) {
      return str.replace(rgx, '$1');
    }

    return str;
  }

  protected formatNamedField(name: string): string {
    return this._config.immutableTypes ? `readonly ${name}` : name;
  }

  protected wrapTypeWithModifiers(baseType: string, type: GraphQLObjectType | GraphQLNonNull<GraphQLObjectType> | GraphQLList<GraphQLObjectType>): string {
    const prefix = this._config.namespacedImportName ? `${this._config.namespacedImportName}.` : '';

    if (isNonNullType(type)) {
      return this.clearOptional(this.wrapTypeWithModifiers(baseType, type.ofType));
    } else if (isListType(type)) {
      const innerType = this.wrapTypeWithModifiers(baseType, type.ofType);

      return `${prefix}Maybe<${this._config.immutableTypes ? 'ReadonlyArray' : 'Array'}<${innerType}>>`;
    } else {
      return `${prefix}Maybe<${baseType}>`;
    }
  }
}
