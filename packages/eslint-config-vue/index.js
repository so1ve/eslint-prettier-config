// @ts-check
const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  overrides: [
    {
      files: ["*.vue"],
      parser: "vue-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
      rules: {
        "no-unused-vars": "off",
        "no-undef": "off",
        "@typescript-eslint/no-unused-vars": "off",
      },
    },
  ],
  extends: ["./eslint-plugin-vue/recommended", "@so1ve/eslint-config-ts"],
  rules: {
    "vue/no-v-html": "off",
    "vue/require-prop-types": "off",
    "vue/require-default-prop": "off",
    "vue/multi-word-component-names": "off",

    // reactivity transform
    "vue/no-setup-props-destructure": "off",

    "vue/component-tags-order": [
      "error",
      {
        order: ["script", "template", "style"],
      },
    ],
    "vue/block-tag-newline": [
      "error",
      {
        singleline: "always",
        multiline: "always",
        maxEmptyLines: 0,
      },
    ],
    "vue/component-api-style": ["error", ["script-setup", "composition"]],
    "vue/component-name-in-template-casing": [
      "error",
      "PascalCase",
      { registeredComponentsOnly: false },
    ],
    "vue/component-options-name-casing": ["error", "PascalCase"],
    "vue/custom-event-name-casing": ["error", "camelCase"],
    "vue/define-macros-order": [
      "error",
      {
        order: ["defineProps", "defineEmits"],
      },
    ],
    "vue/html-comment-content-spacing": [
      "error",
      "always",
      { exceptions: ["-"] },
    ],
    "vue/html-quotes": ["error", "double"],
    "vue/no-restricted-v-bind": ["error", "/^v-/"],
    "vue/no-useless-v-bind": ["error", { ignoreIncludesComment: true }],
    "vue/no-unused-refs": "error",
    "vue/no-v-text-v-html-on-component": "error",
    "vue/padding-line-between-blocks": ["error", "always"],
    "vue/prefer-separate-static-class": "error",

    // extensions
    "vue/dot-location": ["error", "property"],
    "vue/dot-notation": ["error", { allowKeywords: true }],
    "vue/eqeqeq": ["error", "smart"],
    "vue/no-constant-condition": "error",
    "vue/no-empty-pattern": "error",
    "vue/no-irregular-whitespace": "error",
    "vue/no-loss-of-precision": "error",
    "vue/no-restricted-syntax": [
      "error",
      "DebuggerStatement",
      "LabeledStatement",
      "WithStatement",
    ],
    "vue/no-sparse-arrays": "error",
    "vue/object-curly-newline": [
      "error",
      { multiline: true, consistent: true },
    ],
    "vue/object-property-newline": [
      "error",
      { allowMultiplePropertiesPerLine: true },
    ],
    "vue/object-shorthand": [
      "error",
      "always",
      { ignoreConstructors: false, avoidQuotes: true },
    ],
    "vue/prefer-template": "error",
    "vue/quote-props": ["error", "consistent-as-needed"],
    "vue/block-lang": [
      "error",
      {
        script: {
          lang: ["js", "ts"],
        },
        template: {
          lang: ["html", "jade", "pug", "ejs"],
        },
        style: {
          lang: ["css", "sass", "scss", "less", "stylus", "postcss"],
        },
      },
    ],
    "vue/require-macro-variable-name": [
      "error",
      {
        defineProps: "props",
        defineEmits: "emit",
        defineSlots: "slots",
        useSlots: "slots",
        useAttrs: "attrs",
      },
    ],
    "vue/require-typed-ref": "error",
    "vue/no-static-inline-styles": ["error", { allowBinding: true }],
    "vue/no-console": ["error", { allow: ["error", "warn", "table", "time"] }],
    "vue/camelcase": "error",
    "vue/v-for-delimiter-style": ["error", "in"],
    "vue/attributes-order": [
      "error",
      {
        order: [
          "DEFINITION",
          "LIST_RENDERING",
          "CONDITIONALS",
          "RENDER_MODIFIERS",
          "TWO_WAY_BINDING",
          "OTHER_DIRECTIVES",
          ["UNIQUE", "SLOT"],
          "GLOBAL",
          "OTHER_ATTR",
          "EVENTS",
          "CONTENT",
        ],
        alphabetical: true,
      },
    ],
    "vue/prefer-true-attribute-shorthand": "error",
    "vue/html-comment-content-newline": [
      "error",
      { singleline: "ignore", multiline: "always" },
    ],
    "vue/html-comment-indent": ["error", 2],
    "vue/no-useless-concat": "error",
    // off
    "vue/no-multiple-template-root": "off",
    "vue/multiline-html-element-content-newline": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/html-self-closing": "off",
    "vue/no-extra-parens": "off",
    "vue/array-bracket-spacing": "off",
    "vue/arrow-spacing": "off",
    "vue/block-spacing": "off",
    "vue/brace-style": "off",
    "vue/comma-dangle": "off",
    "vue/comma-spacing": "off",
    "vue/comma-style": "off",
    "vue/operator-linebreak": "off",
    "vue/template-curly-spacing": "off",
    "vue/key-spacing": "off",
    "vue/keyword-spacing": "off",
  },
});
