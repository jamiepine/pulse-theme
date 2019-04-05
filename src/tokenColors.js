module.exports = ({
  blue,
  green,
  red,
  yellow,
  violet,
  comment,
  foreground,
  background,
}) => [
  {
    settings: {
      background: background,
      foreground: foreground,
    },
  },
  {
    name: 'Comment',
    scope: ['comment', 'punctuation.definition.comment'],
    settings: {
      fontStyle: 'italic',
      foreground: comment,
    },
  },
  {
    name: 'Variables',
    scope: ['variable', 'string constant.other.placeholder'],
    settings: {
      foreground: foreground,
    },
  },
  {
    name: 'PHP Constants',
    scope: ['constant.other.php'],
    settings: {
      foreground: blue,
    },
  },
  {
    name: 'Colors',
    scope: ['constant.other.color', 'meta.jsx.children.js.jsx'],
    settings: {
      foreground: foreground,
    },
  },
  {
    name: 'Invalid',
    scope: ['invalid', 'invalid.illegal'],
    settings: {
      foreground: red,
    },
  },
  {
    name: 'Invalid deprecated',
    scope: ['invalid.deprecated'],
    settings: {
      foreground: violet,
    },
  },
  {
    name: 'Keyword, Storage',
    scope: ['keyword', 'storage.type', 'storage.modifier'],
    settings: {
      fontStyle: 'italic',
      foreground: red,
    },
  },
  {
    name: 'Punctuation',
    scope: [
      'punctuation',
      'meta.tag',
      'meta.tag.attributes',
      'punctuation.definition.tag',
      'punctuation.separator.inheritance.php',
      'punctuation.definition.tag.html',
      'punctuation.definition.tag.begin.html',
      'punctuation.definition.tag.end.html',
      'punctuation.section.embedded',
      'keyword.other.template',
      'keyword.other.substitution',
      'keyword.operator.assignment.js.jsx',
    ],
    settings: {
      foreground: comment,
    },
  },
  {
    name: 'Operator',
    scope: [
      'keyword.operator.assignment',
      'keyword.operator.comparison',
      'keyword.operator.arithmetic',
      'keyword.operator.logical',
      'storage.type.function.arrow',
    ],
    settings: {
      foreground: violet,
    },
  },
  {
    name: 'Keyword Control',
    scope: ['keyword.control'],
    settings: {
      fontStyle: 'italic',
    },
  },
  {
    name: 'Tag',
    scope: ['entity.name.tag', 'meta.tag.sgml', 'markup.deleted.git_gutter'],
    settings: {
      foreground: red,
    },
  },
  {
    name: 'Function, Special Method',
    scope: [
      'entity.name.function',
      'meta.function-call',
      'variable.function',
      'support.function',
      'keyword.other.special-method',
    ],
    settings: {
      foreground: blue,
    },
  },
  {
    name: 'Variables constant',
    scope: ['variable.other.constant'],
    settings: {
      foreground: blue,
    },
  },
  {
    name: 'Other Variable, String Link',
    scope: ['support.other.variable', 'string.other.link'],
    settings: {
      foreground: blue,
    },
  },
  {
    name: 'Number, Constant, Tag Attribute, Embedded',
    scope: [
      'constant.numeric',
      'constant.language',
      'support.constant',
      'constant.character',
      'constant.escape',
      'keyword.other.unit',
      'keyword.other',
    ],
    settings: {
      foreground: violet,
    },
  },
  {
    name: 'Function argument, Console',
    scope: ['variable.parameter', 'support.class.console.js'],
    settings: {
      foreground: foreground,
    },
  },
  {
    name: 'Number, Constant, Function Argument, Tag Attribute, Embedded',
    scope: ['variable.parameter.function.language.special'],
    settings: {
      foreground: red,
    },
  },
  {
    name: 'String, Symbols, Inherited Class, Markup Heading',
    scope: [
      'string',
      'constant.other.symbol',
      'constant.other.key',
      'entity.other.inherited-class',
      'markup.heading',
      'markup.inserted.git_gutter',
      'meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js',
    ],
    settings: {
      fontStyle: 'normal',
      foreground: yellow,
    },
  },
  {
    name: 'Class, Support',
    scope: [
      'entity.name',
      'support.type',
      'support.orther.namespace.use.php',
      'meta.use.php',
      'support.other.namespace.php',
      'markup.changed.git_gutter',
      'support.type.sys-types',
    ],
    settings: {
      foreground: yellow,
    },
  },
  {
    name: 'Entity Types',
    scope: ['support.type'],
    settings: {
      foreground: blue,
    },
  },
  {
    name: 'CSS Class and Support',
    scope: [
      'source.css support.type.property-name',
      'source.sass support.type.property-name',
      'source.scss support.type.property-name',
      'source.less support.type.property-name',
      'source.stylus support.type.property-name',
      'source.postcss support.type.property-name',
    ],
    settings: {
      foreground: blue,
    },
  },
  {
    name: 'Sub-methods',
    scope: [
      'entity.name.module.js',
      'variable.import.parameter.js',
      'variable.other.class.js',
    ],
    settings: {
      foreground: red,
    },
  },
  {
    name: 'Language methods',
    scope: ['variable.language'],
    settings: {
      fontStyle: 'italic',
      foreground: red,
    },
  },
  {
    name: 'entity.name.method.js',
    scope: ['entity.name.method.js'],
    settings: {
      fontStyle: 'italic',
      foreground: blue,
    },
  },
  {
    name: 'meta.method.js',
    scope: [
      'meta.class-method.js entity.name.function.js',
      'variable.function.constructor',
    ],
    settings: {
      foreground: blue,
    },
  },
  {
    name: 'Attributes',
    scope: ['entity.other.attribute-name'],
    settings: {
      foreground: yellow,
    },
  },
  {
    name: 'Attribute values',
    scope: [
      'string.quoted.double.html',
      'string.quoted.jade',
      'string.quoted.double.js.jsx',
    ],
    settings: {
      foreground: green,
    },
  },
  {
    name: 'HTML Attributes',
    scope: [
      'text.html.basic entity.other.attribute-name.html',
      'text.html.basic entity.other.attribute-name',
    ],
    settings: {
      fontStyle: 'italic',
      foreground: yellow,
    },
  },
  {
    name: 'CSS Classes',
    scope: ['entity.other.attribute-name.class'],
    settings: {
      foreground: yellow,
    },
  },
  {
    name: 'CSS ID',
    scope: ['entity.other.attribute-name.id'],
    settings: {
      foreground: blue,
    },
  },
  {
    name: 'Inserted',
    scope: ['markup.inserted'],
    settings: {
      foreground: green,
    },
  },
  {
    name: 'Deleted',
    scope: ['markup.deleted'],
    settings: {
      foreground: red,
    },
  },
  {
    name: 'Changed',
    scope: ['markup.changed'],
    settings: {
      foreground: violet,
    },
  },
  {
    name: 'Regular Expressions',
    scope: ['string.regexp'],
    settings: {
      foreground: blue, // maybe cyan
    },
  },
  {
    name: 'Escape Characters',
    scope: ['constant.character.escape'],
    settings: {
      foreground: blue, // maybe cyan
    },
  },
  {
    name: 'URL',
    scope: ['*url*', '*link*', '*uri*'],
    settings: {
      fontStyle: 'underline',
    },
  },
  {
    name: 'Decorators',
    scope: [
      'tag.decorator.js entity.name.tag.js',
      'tag.decorator.js punctuation.definition.tag.js',
    ],
    settings: {
      fontStyle: 'italic',
      foreground: blue,
    },
  },
  {
    name: 'ES7 Bind Operator',
    scope: ['source.js constant.other.object.key.js string.unquoted.label.js'],
    settings: {
      fontStyle: 'italic',
      foreground: red,
    },
  },
];
