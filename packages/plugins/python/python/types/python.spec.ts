import '@graphql-codegen/testing';
import { buildSchema } from 'graphql';
import { plugin } from '../src';

describe('Base Requirements', () => {
  it('should import optional, list, and enum types', async () => {
    const schema = buildSchema(`type SimpleClass {
      attr: String!
    }`);
    const result = await plugin(schema, [], {}, {});

    expect(result.prepend).toContain('from typing import Optional, List, Union, Any, Literal');
    expect(result.prepend).toContain('from enum import Enum');
  });

  it('should emit a scalars class', async () => {
    const schema = buildSchema(`type SimpleClass {
      attr: String!
    }`);
    const result = await plugin(schema, [], {}, {});

    expect(result.content).toBeSimilarStringTo(`
      class Scalars:
        ID = Union[str]
        String = Union[str]
        Boolean = Union[bool]
        Int = Union[int]
        Float = Union[float]
    `);
  });

  it('should output a simple class', async () => {
    const schema = buildSchema(`type SimpleClass {
      attr: String!
    }`);
    const result = await plugin(schema, [], {}, {});
    expect(result.content).toBeSimilarStringTo(`
      class SimpleClass:
        __typename: Optional[Literal["SimpleClass"]]
        attr: Scalars.String
    `);
  });

  it('should define a less conflict-prone alias', async () => {
    const schema = buildSchema(`type SimpleClass {
      attr: String!
    }`);
    const result = await plugin(schema, [], {}, {});
    expect(result.content).toBeSimilarStringTo(`
      __GQL_CODEGEN_SimpleClass__ = SimpleClass
    `);
  });

  it('should add comments to user classes', async () => {
    const schema = buildSchema(`
      "My sad, sad class"
      type SimpleClass {
        attr: String!
      }`);
    const result = await plugin(schema, [], {}, {});
    expect(result.content).toBeSimilarStringTo(`
      # My sad, sad class
      class SimpleClass:
        __typename: Optional[Literal["SimpleClass"]]
        attr: Scalars.String
    `);
  });

  it('should add multi-line comments to user classes', async () => {
    const schema = buildSchema(`
      """
      So, so many comments on this class!
      Not the best self-documentation...
      """
      type SimpleClass {
        attr: String!
      }`);

    const result = await plugin(schema, [], {}, {});
    expect(result.content).toBeSimilarStringTo(`
      """
      So, so many comments on this class!
      Not the best self-documentation...
      """
      class SimpleClass:
        __typename: Optional[Literal["SimpleClass"]]
        attr: Scalars.String
    `);
  });

  it('should handle nullable fields', async () => {
    const schema = buildSchema(`type SimpleClass {
        attr: String
      }`);
    const result = await plugin(schema, [], {}, {});
    expect(result.content).toBeSimilarStringTo(`
        class SimpleClass:
          __typename: Optional[Literal["SimpleClass"]]
          attr: Optional[Scalars.String]
      `);
  });

  it('should handle arrays', async () => {
    const schema = buildSchema(`type SimpleClass {
      attr: [String]
    }`);
    const result = await plugin(schema, [], {}, {});
    expect(result.content).toBeSimilarStringTo(`
      class SimpleClass:
        __typename: Optional[Literal["SimpleClass"]]
        attr: Optional[List[Optional[Scalars.String]]]
    `);
  });

  it('should handle all array-null variants', async () => {
    const schema = buildSchema(`type SimpleClass {
      fullyNullable: [String]
      nullableElements: [String]!
      nullableArray: [String!]
      notNullable: [String!]!
    }`);
    const result = await plugin(schema, [], {}, {});
    expect(result.content).toBeSimilarStringTo(`
      class SimpleClass:
        __typename: Optional[Literal["SimpleClass"]]
        fullyNullable: Optional[List[Optional[Scalars.String]]]
        nullableElements: List[Optional[Scalars.String]]
        nullableArray: Optional[List[Scalars.String]]
        notNullable: List[Scalars.String]
    `);
  });

  it('should be able to create a class with every scalar', async () => {
    const schema = buildSchema(`type SimpleClass {
      attr: String!
      boolean: Boolean
      myFancyNum: Int!
      myLessPreciseButNoLessFancyNum: Float
    }`);
    const result = await plugin(schema, [], {}, {});
    expect(result.content).toBeSimilarStringTo(`
    class SimpleClass:
      __typename: Optional[Literal["SimpleClass"]]
      attr: Scalars.String
      boolean: Optional[Scalars.Boolean]
      myFancyNum: Scalars.Int
      myLessPreciseButNoLessFancyNum: Optional[Scalars.Float]
    `);
  });

  it('should reference user defined types', async () => {
    const schema = buildSchema(`
    type SimpleClass {
      attr: String!
    }
    
    type ComplexClass {
      complexAttr: SimpleClass
    }
    `);
    const result = await plugin(schema, [], {}, {});
    expect(result.content).toBeSimilarStringTo(`
      class SimpleClass:
        __typename: Optional[Literal["SimpleClass"]]
        attr: Scalars.String
    `);

    expect(result.content).toBeSimilarStringTo(`
      class ComplexClass:
        __typename: Optional[Literal["ComplexClass"]]
        complexAttr: Optional["__GQL_CODEGEN_SimpleClass__"]
    `);
  });

  it('should convert union to Python union', async () => {
    const schema = buildSchema(`
      union BasicUnion = Int | String

      type BasicType {
        myUnion: BasicUnion!
      }
    `);
    const result = await plugin(schema, [], {}, {});
    expect(result.content).toBeSimilarStringTo(`
      BasicUnion = Union[Scalars.Int, Scalars.String]
    `);

    expect(result.content).toBeSimilarStringTo(`
      class BasicType:
        __typename: Optional[Literal["BasicType"]]
        myUnion: "__GQL_CODEGEN_BasicUnion__"
    `);
  });

  it('should output alias for union', async () => {
    const schema = buildSchema(`
      union BasicUnion = Int | String
    `);
    const result = await plugin(schema, [], {}, {});
    expect(result.content).toBeSimilarStringTo(`
      __GQL_CODEGEN_BasicUnion__ = BasicUnion
    `);
  });

  it('should use use type alias for user-defined within unions', async () => {
    const schema = buildSchema(`
      type BasicType {
        id: ID!
      }

      union BasicUnion = BasicType | String
    `);
    const result = await plugin(schema, [], {}, {});
    expect(result.content).toBeSimilarStringTo(`
      BasicUnion = Union["__GQL_CODEGEN_BasicType__", Scalars.String]
    `);
  });

  it('should inherit interfaces in class', async () => {
    const schema = buildSchema(`
    interface MyInterface {
      field: String!
    }

    type SubType implements MyInterface {
      field: String!
      otherProp: Boolean!
    }
    `);
    const result = await plugin(schema, [], {}, {});
    expect(result.content).toBeSimilarStringTo(`
      class MyInterface:
        field: Scalars.String
    `);

    expect(result.content).toBeSimilarStringTo(`
      class SubType(MyInterface):
        __typename: Optional[Literal["SubType"]]
        field: Scalars.String
        otherProp: Scalars.Boolean
    `);
  });

  it('should work for input types', async () => {
    const schema = buildSchema(`input SimpleInput {
      attr: String!
    }`);
    const result = await plugin(schema, [], {}, {});
    expect(result.content).toBeSimilarStringTo(`
      class SimpleInput:
        attr: Scalars.String
    `);
  });

  it('should support custom scalars', async () => {
    const schema = buildSchema(`
      scalar MyScalar

      type MyType {
        foo: String
        bar: MyScalar!
      }`);
    const result = await plugin(schema, [], { scalars: { MyScalar: 'Date' } }, {});

    expect(result.content).toBeSimilarStringTo(`MyScalar = Union[Date]`);
    expect(result.content).toBeSimilarStringTo(`
      class MyType:
        __typename: Optional[Literal["MyType"]]
        foo: Optional[Scalars.String]
        bar: Scalars.MyScalar
      `);
  });

  it('should include a description for Scalars type', async () => {
    const schema = buildSchema(/* GraphQL */ `
      "My custom scalar"
      scalar A
    `);
    const result = await plugin(schema, [], {}, { outputFile: '' });
    expect(result.content).toBeSimilarStringTo(`
      # My custom scalar
      A = Union[Any]
    `);
  });

  it('Should add description for input types', async () => {
    const schema = buildSchema(/* GraphQL */ `
      "MyInput"
      input MyInput {
        f: String
      }
    `);
    const result = await plugin(schema, [], {}, { outputFile: '' });

    expect(result.content).toBeSimilarStringTo(`
      # MyInput
      class MyInput:`);
  });

  it('Should add description for input fields', async () => {
    const schema = buildSchema(/* GraphQL */ `
      "MyInput"
      input MyInput {
        "f is something"
        f: String!
      }
    `);
    const result = await plugin(schema, [], {}, { outputFile: '' });

    expect(result.content).toBeSimilarStringTo(`
      # MyInput
      class MyInput:
        # f is something
        f: Scalars.String
      `);
  });

  it('should comment type fields', async () => {
    const schema = buildSchema(/* GraphQL */ `
      type SimpleType {
        "the attribute"
        attr: String!
      }
    `);
    const result = await plugin(schema, [], {}, { outputFile: '' });

    expect(result.content).toBeSimilarStringTo(`
    class SimpleType:
      __typename: Optional[Literal["SimpleType"]]
      # the attribute
      attr: Scalars.String
    `);
  });
});

describe('Config', () => {
  it(`omits typename when skipTypename=true`, async () => {
    const schema = buildSchema(`type SimpleClass {
      attr: String!
    }`);
    const result = await plugin(schema, [], { skipTypename: true }, {});

    expect(result.content).not.toContain(`__typename: `);
  });

  it("doesn't use Literal when typenameAsString=true", async () => {
    const schema = buildSchema(`type SimpleClass {
      attr: String!
    }`);
    const result = await plugin(schema, [], { typenameAsString: true }, {});

    expect(result.prepend.join('')).toEqual(expect.not.stringContaining('Literal'));
    expect(result.content).toBeSimilarStringTo(`
      class SimpleClass:
        __typename: Optional[Scalars.String]
    `);
  });

  it('can makes typename nonOptional', async () => {
    const schema = buildSchema(`type SimpleClass {
      attr: String!
    }`);
    const result = await plugin(schema, [], { nonOptionalTypename: true }, {});

    expect(result.content).toBeSimilarStringTo(`
      class SimpleClass:
        __typename: Literal["SimpleClass"]
    `);
  });

  it('Should generate a scalars mapping correctly for custom scalars with mapping', async () => {
    const schema = buildSchema(`
    scalar MyScalar

    type MyType {
      foo: String
      bar: MyScalar!
    }`);
    const result = await plugin(schema, [], { scalars: { MyScalar: 'Date' } }, { outputFile: '' });

    expect(result.content).toBeSimilarStringTo(`
    class Scalars:
      ID = Union[str]
      String = Union[str]
      Boolean = Union[bool]
      Int = Union[int]
      Float = Union[float]
      MyScalar = Union[Date]
    `);

    expect(result.content).toBeSimilarStringTo(`
    class MyType:
      __typename: Optional[Literal["MyType"]]
      foo: Optional[Scalars.String]
      bar: Scalars.MyScalar
    `);
  });

  describe('Naming Convention & Types Prefix', () => {
    it('Should use custom namingConvention for type name and args typename', async () => {
      const schema = buildSchema(`type MyType { foo(a: String!, b: String, c: [String], d: [Int!]!): String }`);
      const result = await plugin(schema, [], { namingConvention: 'lower-case#lowerCase' }, { outputFile: '' });

      expect(result.content).toBeSimilarStringTo(`
        class mytypefooargs:
          a: Scalars.String
          b: Optional[Scalars.String]
          c: Optional[List[Optional[Scalars.String]]]
          d: List[Scalars.Int]
    `);
      expect(result.content).toBeSimilarStringTo(`
        class mytype:
          __typename: Optional[Literal["MyType"]]
          foo: Optional[Scalars.String]
    `);
    });

    it('Should use custom namingConvention and add custom prefix', async () => {
      const schema = buildSchema(`type MyType { foo(a: String!, b: String, c: [String], d: [Int!]!): String }`);
      const result = await plugin(
        schema,
        [],
        { namingConvention: 'lower-case#lowerCase', typesPrefix: 'I' },
        { outputFile: '' }
      );

      expect(result.content).toBeSimilarStringTo(`
        class Imytypefooargs:
          a: Scalars.String
          b: Optional[Scalars.String]
          c: Optional[List[Optional[Scalars.String]]]
          d: List[Scalars.Int]
      `);

      expect(result.content).toBeSimilarStringTo(`
        class Imytype:
          __typename: Optional[Literal["MyType"]]
          foo: Optional[Scalars.String]
      `);
    });

    it('Should allow to disable typesPrefix for enums', async () => {
      const schema = buildSchema(`type T { f: String, e: E } enum E { A }`);
      const result = await plugin(schema, [], { typesPrefix: 'I', enumPrefix: false }, { outputFile: '' });

      expect(result.content).toContain(`class E(Enum):`);
      expect(result.content).toContain(`e: Optional["__GQL_CODEGEN_E__"]`);
    });

    it('Should enable typesPrefix for enums by default', async () => {
      const schema = buildSchema(`type T { f: String, e: E } enum E { A }`);
      const result = await plugin(schema, [], { typesPrefix: 'I' }, { outputFile: '' });

      expect(result.content).toContain(`class IE(Enum):`);
      expect(result.content).toContain(`e: Optional["__GQL_CODEGEN_IE__"]`);
    });

    const schema = buildSchema(`
      enum MyEnum {
        A
        B
        C
      }

      type MyType {
        f: String
        bar: MyEnum
        b_a_r: String
        myOtherField: String
      }

      type My_Type {
        linkTest: MyType
      }

      union MyUnion = My_Type | MyType

      interface Some_Interface {
        id: ID!
      }

      type Impl1 implements Some_Interface {
        id: ID!
      }

      type Impl_2 implements Some_Interface {
        id: ID!
      }

      type impl_3 implements Some_Interface {
        id: ID!
      }

      type Query {
        something: MyUnion
        use_interface: Some_Interface
      }
    `);

    it('Should generate correct values when using links between types - lowerCase', async () => {
      const result = await plugin(schema, [], { namingConvention: 'lower-case#lowerCase' }, { outputFile: '' });

      expect(result.content).toBeSimilarStringTo(`
        class myenum(Enum):
          a = 'A'
          b = 'B'
          c = 'C'
        `);
      expect(result.content).toBeSimilarStringTo(`
        class mytype:
          __typename: Optional[Literal["MyType"]]
          f: Optional[Scalars.String]
          bar: Optional["__GQL_CODEGEN_myenum__"]
          b_a_r: Optional[Scalars.String]
          myOtherField: Optional[Scalars.String]
        `);
      expect(result.content).toBeSimilarStringTo(`
        class my_type:
          __typename: Optional[Literal["My_Type"]]
          linkTest: Optional["__GQL_CODEGEN_mytype__"]
        `);
      expect(result.content).toBeSimilarStringTo(`
        myunion = Union["__GQL_CODEGEN_my_type__", "__GQL_CODEGEN_mytype__"]
      `);
      expect(result.content).toBeSimilarStringTo(`
        class some_interface:
          id: Scalars.ID
        `);
      expect(result.content).toBeSimilarStringTo(`
        class impl1(some_interface):
          __typename: Optional[Literal["Impl1"]]
          id: Scalars.ID
        `);
      expect(result.content).toBeSimilarStringTo(`
      class impl_2(some_interface):
        __typename: Optional[Literal["Impl_2"]]
        id: Scalars.ID
        `);
      expect(result.content).toBeSimilarStringTo(`
        class impl_2(some_interface):
          __typename: Optional[Literal["Impl_2"]]
          id: Scalars.ID
        `);
      expect(result.content).toBeSimilarStringTo(`
        class query:
          __typename: Optional[Literal["Query"]]
          something: Optional["__GQL_CODEGEN_myunion__"]
          use_interface: Optional["__GQL_CODEGEN_some_interface__"]
      `);
    });

    it('Should generate correct values when using links between types - pascalCase (default)', async () => {
      const result = await plugin(schema, [], {}, { outputFile: '' });

      expect(result.content).toBeSimilarStringTo(`
      class MyEnum(Enum): 
        A = 'A'
        B = 'B'
        C = 'C'
      `);
      expect(result.content).toBeSimilarStringTo(`
      class MyType:
        __typename: Optional[Literal["MyType"]]
        f: Optional[Scalars.String]
        bar: Optional["__GQL_CODEGEN_MyEnum__"]
        b_a_r: Optional[Scalars.String]
        myOtherField: Optional[Scalars.String]
      `);
      expect(result.content).toBeSimilarStringTo(`
      class My_Type:
        __typename: Optional[Literal["My_Type"]]
        linkTest: Optional["__GQL_CODEGEN_MyType__"]
      `);
      expect(result.content).toBeSimilarStringTo(`
        MyUnion = Union["__GQL_CODEGEN_My_Type__", "__GQL_CODEGEN_MyType__"]
      `);
      expect(result.content).toBeSimilarStringTo(`
      class Some_Interface:
        id: Scalars.ID
        `);
      expect(result.content).toBeSimilarStringTo(`
        class Impl1(Some_Interface):
          __typename: Optional[Literal["Impl1"]]
          id: Scalars.ID
      `);
      expect(result.content).toBeSimilarStringTo(`
        class Impl_2(Some_Interface):
          __typename: Optional[Literal["Impl_2"]]
          id: Scalars.ID
      `);
      expect(result.content).toBeSimilarStringTo(`
        class Impl_3(Some_Interface):
          __typename: Optional[Literal["impl_3"]]
          id: Scalars.ID
      `);
      expect(result.content).toBeSimilarStringTo(`
        class Query:
          __typename: Optional[Literal["Query"]]
          something: Optional["__GQL_CODEGEN_MyUnion__"]
          use_interface: Optional["__GQL_CODEGEN_Some_Interface__"]
      `);
    });

    it('Should generate correct values when using links between types - pascalCase (default) with custom prefix', async () => {
      const result = await plugin(schema, [], { typesPrefix: 'I' }, { outputFile: '' });

      expect(result.content).toBeSimilarStringTo(`
      class IMyEnum(Enum):
        A = 'A'
        B = 'B'
        C = 'C'
      `);

      expect(result.content).toBeSimilarStringTo(`
      class IMyType:
        __typename: Optional[Literal["MyType"]]
        f: Optional[Scalars.String]
        bar: Optional["__GQL_CODEGEN_IMyEnum__"]
        b_a_r: Optional[Scalars.String]
        myOtherField: Optional[Scalars.String]
      `);
      expect(result.content).toBeSimilarStringTo(`
        class IMy_Type:
          __typename: Optional[Literal["My_Type"]]
          linkTest: Optional["__GQL_CODEGEN_IMyType__"]
      `);
      expect(result.content).toBeSimilarStringTo(
        `IMyUnion = Union["__GQL_CODEGEN_IMy_Type__", "__GQL_CODEGEN_IMyType__"]`
      );
      expect(result.content).toBeSimilarStringTo(`
        class ISome_Interface:
          id: Scalars.ID
      `);
      expect(result.content).toBeSimilarStringTo(`
        class IImpl1(ISome_Interface):
          __typename: Optional[Literal["Impl1"]]
          id: Scalars.ID
      `);
      expect(result.content).toBeSimilarStringTo(`
        class IImpl_2(ISome_Interface):
          __typename: Optional[Literal["Impl_2"]]
          id: Scalars.ID
      `);
      expect(result.content).toBeSimilarStringTo(`
        class IImpl_3(ISome_Interface):
          __typename: Optional[Literal["impl_3"]]
          id: Scalars.ID
      `);
      expect(result.content).toBeSimilarStringTo(`
        class IQuery:
          __typename: Optional[Literal["Query"]]
          something: Optional["__GQL_CODEGEN_IMyUnion__"]
          use_interface: Optional["__GQL_CODEGEN_ISome_Interface__"]
      `);
    });
  });
});

describe('Arguments', () => {
  it('Should generate correctly types for field arguments - with basic fields', async () => {
    const schema = buildSchema(`type MyType { foo(a: String!, b: String, c: [String], d: [Int!]!): String }`);

    const result = await plugin(schema, [], {}, { outputFile: '' });

    expect(result.content).toBeSimilarStringTo(`
      class MyTypeFooArgs:
        a: Scalars.String
        b: Optional[Scalars.String]
        c: Optional[List[Optional[Scalars.String]]]
        d: List[Scalars.Int]
    `);
  });

  it('Should generate correctly types for field arguments - with default value', async () => {
    const schema = buildSchema(
      `type MyType { foo(a: String = "default", b: String! = "default", c: String, d: String!): String }`
    );
    const result = await plugin(schema, [], {}, { outputFile: '' });

    expect(result.content).toBeSimilarStringTo(`
      class MyTypeFooArgs:
        a: Optional[Scalars.String]
        b: Scalars.String
        c: Optional[Scalars.String]
        d: Scalars.String
  `);
  });

  it('Should generate correctly types for field arguments - with input type', async () => {
    const schema = buildSchema(
      `input MyInput { f: String } type MyType { foo(a: MyInput, b: MyInput!, c: [MyInput], d: [MyInput]!, e: [MyInput!]!): String }`
    );
    const result = await plugin(schema, [], {}, { outputFile: '' });

    expect(result.content).toBeSimilarStringTo(`
      class MyTypeFooArgs:
        a: Optional[MyInput]
        b: MyInput
        c: Optional[List[Optional[MyInput]]]
        d: List[Optional[MyInput]]
        e: List[MyInput]
    `);
  });
});

describe('Enum', () => {
  it('should permit enums', async () => {
    const schema = buildSchema(`
      enum Episode {
        NEWHOPE
        EMPIRE
        JEDI
      }
      type Character {
        appearsIn: [Episode!]!
      }
    `);
    const result = await plugin(schema, [], {}, {});
    expect(result.content).toBeSimilarStringTo(`
      class Episode(Enum):
        Newhope = 'NEWHOPE'
        Empire = 'EMPIRE'
        Jedi = 'JEDI'
    `);

    expect(result.content).toBeSimilarStringTo(`
      class Character:
        __typename: Optional[Literal["Character"]]
        appearsIn: List["__GQL_CODEGEN_Episode__"]
    `);
  });

  it('should build enum correctly with custom values', async () => {
    const schema = buildSchema(`enum MyEnum { A, B, C }`);
    const result = await plugin(
      schema,
      [],
      { enumValues: { MyEnum: { A: 'SomeValue', B: 'TEST' } } },
      { outputFile: '' }
    );
    expect(result.content).toBeSimilarStringTo(`
      class MyEnum(Enum):
        A = 'SomeValue'
        B = 'TEST'
        C = 'C'
    `);
  });

  it('Should build enum correctly with custom imported enum', async () => {
    const schema = buildSchema(`enum MyEnum { A, B, C }`);
    const result = await plugin(schema, [], { enumValues: { MyEnum: './my-file#MyEnum' } }, { outputFile: '' });
    expect(result.content).not.toContain(`class MyEnum(Enum):`);
    expect(result.prepend).toContain(`from ./my-file import MyEnum`);
  });

  it('Should build enum correctly with custom imported enum with different name', async () => {
    const schema = buildSchema(`enum MyEnum { A, B, C } type Query { t: MyEnum }`);
    const result = await plugin(schema, [], { enumValues: { MyEnum: './my-file#MyCustomEnum' } }, { outputFile: '' });

    expect(result.content).not.toContain(`export enum MyEnum`);
    expect(result.prepend).toContain(`from ./my-file import MyCustomEnum`);
    expect(result.prepend).toContain(`MyEnum = MyCustomEnum`);
  });

  it('Should build enum correctly with custom imported enum from namspace with same name', async () => {
    const schema = buildSchema(`enum MyEnum { A, B, C }`);
    const result = await plugin(schema, [], { enumValues: { MyEnum: './my-file#NS.MyEnum' } }, { outputFile: '' });

    expect(result.content).not.toContain(`export enum MyEnum`);
    expect(result.prepend).toContain(`from ./my-file import NS`);
    expect(result.prepend).toContain('MyEnum = NS.MyEnum');
  });
});
