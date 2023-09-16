// @ts-check
const fs = require("node:fs");
const path = require("node:path");
const { defineConfig } = require("eslint-define-config");

const cwd = process.cwd();
const hasUnoConfig =
	fs.existsSync(path.join(cwd, "uno.config.ts")) ||
	fs.existsSync(path.join(cwd, "unocss.config.ts"));

module.exports = defineConfig({
	env: {
		es6: true,
		es2021: true,
		browser: true,
		node: true,
	},
	parserOptions: {
		ecmaVersion: 2022,
		ecmaFeatures: {
			jsx: true,
		},
		sourceType: "module",
	},
	globals: {
		document: "readonly",
		navigator: "readonly",
		window: "readonly",
	},
	reportUnusedDisableDirectives: true,
	plugins: [
		"@so1ve",
		"@so1ve/sort-imports",
		"@html-eslint",
		"@unocss",
		"html",
		"jsdoc",
		"vitest",
		"json-schema-validator",
		"unicorn",
		"unused-imports",
		"only-error",
		"no-only-tests",
		"import",
		"n",
		"promise",
	],
	extends: [
		"plugin:import/recommended",
		"plugin:@eslint-community/eslint-comments/recommended",
		"plugin:jsonc/recommended-with-jsonc",
		"plugin:yml/prettier",
		"plugin:yml/recommended",
		"plugin:eslint-plugin-jest-formatting/strict",
		"plugin:regexp/recommended",
		"plugin:case-police/recommended",
		"plugin:toml/recommended",
		"plugin:array-func/all",
		"plugin:vitest/recommended",
	],
	ignorePatterns: [
		"*.min.*",
		"CHANGELOG.md",
		"dist*",
		"release",
		"LICENSE*",
		"output",
		"out",
		"coverage",
		"public",
		"!src/public",
		"temp",
		".nuxt",
		".nitro",
		".yarn",
		"package-lock.json",
		"pnpm-lock.yaml",
		"yarn.lock",
		"__snapshots__",
		"*.d.ts",
		// Volar virtual files
		"*.vue.js",
		"*.vue.jsx",
		"*.vue.ts",
		"*.vue.tsx",
		// ignore for in lint-staged
		"*.png",
		"*.ico",
		"*.patch",
		"*.txt",
		"*.crt",
		"*.key",
		// force include
		"!.github",
		"!.vitepress",
		"!.vscode",
		"!.eslintrc*",
		// force exclude
		"**/.vitepress/cache",
	],
	settings: {
		"import/resolver": {
			node: { extensions: [".js", ".mjs"] },
		},
		"mdx/code-blocks": true,
		"html/report-bad-indent": "off",
	},
	overrides: [
		{
			files: ["*.html"],
			parser: "@html-eslint/parser",
			extends: ["plugin:@html-eslint/recommended"],
			rules: {
				"@html-eslint/indent": "off",
				"@html-eslint/no-trailing-spaces": "off",
				"@html-eslint/require-closing-tags": "off",
				"@html-eslint/no-extra-spacing-attrs": "off",
				"@html-eslint/quotes": "off",
			},
		},
		{
			files: ["*.json", "*.json5", "*.jsonc", ".eslintrc"],
			parser: "jsonc-eslint-parser",
			rules: {
				"jsonc/no-octal-escape": "error",
				"jsonc/quotes": "off",
				"jsonc/quotes-props": "off",
			},
		},
		{
			files: ["*.yaml", "*.yml"],
			parser: "yaml-eslint-parser",
			rules: {
				"spaced-comment": "off",
				"yml/no-empty-document": "off",
			},
		},
		{
			files: ["*.toml"],
			parser: "toml-eslint-parser",
			rules: {
				"spaced-comment": "off",
			},
		},
		{
			files: ["package.json"],
			parser: "jsonc-eslint-parser",
			rules: {
				"jsonc/sort-keys": [
					"error",
					{
						pathPattern: "^exports$",
						order: { type: "asc" },
					},
					{
						pathPattern: "^exports.*$",
						order: ["types", "require", "import", "default"],
					},
				],
			},
		},
		{
			files: ["*.d.ts"],
			rules: {
				"import/no-duplicates": "off",
			},
		},
		{
			files: ["*.js", "*.cjs", "*.jsx"],
			rules: {
				"@typescript-eslint/no-var-requires": "off",
				"@typescript-eslint/no-require-imports": "off",
			},
		},
		{
			files: ["*.ts", "*.tsx", "*.mts", "*.cts"],
			rules: {
				"no-void": ["error", { allowAsStatement: true }],
			},
		},
		{
			files: ["scripts/**/*.*", "cli.*"],
			rules: {
				"no-console": "off",
			},
		},
		{
			files: ["*.md", "*.mdx"],
			extends: ["plugin:mdx/overrides", "plugin:mdx/base"],
		},
		{
			// Code blocks in markdown or mdx file
			files: ["**/*.{md,mdx}/**"],
			extends: "plugin:mdx/code-blocks",
			rules: {
				"@html-eslint/require-doctype": "off",
				"@typescript-eslint/no-redeclare": "off",
				"@typescript-eslint/no-unused-vars": "off",
				"@typescript-eslint/no-use-before-define": "off",
				"@typescript-eslint/no-var-requires": "off",
				"@typescript-eslint/consistent-type-imports": "off",
				"@typescript-eslint/no-namespace": "off",
				"@typescript-eslint/no-require-imports": "off",
				"import/no-unresolved": "off",
				"unused-imports/no-unused-imports": "off",
				"unused-imports/no-unused-vars": "off",
				"no-alert": "off",
				"no-console": "off",
				"no-restricted-imports": "off",
				"no-undef": "off",
				"no-unused-expressions": "off",
				"no-unused-vars": "off",
			},
		},
	],
	rules: {
		// Common
		"array-bracket-newline": "off",
		"array-element-newline": "off",
		"arrow-body-style": "off",
		"arrow-parens": "off",
		"dot-notation": ["error", { allowKeywords: true }],
		"function-call-argument-newline": "off",
		"function-paren-newline": "off",
		"generator-star": "off",
		"implicit-arrow-linebreak": "off",
		"indent": "off",
		"indent-legacy": "off",
		"jsx-quotes": "off",
		"linebreak-style": "off",
		"newline-per-chained-call": "off",
		"no-arrow-condition": "off",
		"no-comma-dangle": "off",
		"no-confusing-arrow": "off",
		"no-extra-semi": "off",
		"no-reserved-keys": "off",
		"no-spaced-func": "off",
		"no-space-before-semi": "off",
		"no-wrap-func": "off",
		"nonblock-statement-body-position": "off",
		"one-var-declaration-per-line": "off",
		"switch-colon-spacing": "off",
		"symbol-description": "off",
		"wrap-regex": "off",

		"unused-imports/no-unused-imports": "error",
		"unused-imports/no-unused-vars": [
			"error",
			{
				vars: "all",
				varsIgnorePattern: "^_",
				args: "after-used",
				argsIgnorePattern: "^_",
			},
		],

		"accessor-pairs": [
			"error",
			{ setWithoutGet: true, enforceForClassMembers: true },
		],
		"constructor-super": "error",
		"default-case-last": "error",
		"lines-between-class-members": [
			"error",
			"always",
			{ exceptAfterSingleLine: true },
		],
		"new-cap": ["error", { newIsCap: true, capIsNew: false, properties: true }],
		"no-array-constructor": "error",
		"no-async-promise-executor": "error",
		"no-caller": "error",
		"no-class-assign": "error",
		"no-compare-neg-zero": "error",
		"no-const-assign": "error",
		"no-control-regex": "error",
		"no-delete-var": "error",
		"no-dupe-args": "error",
		"no-dupe-class-members": "error",
		"no-dupe-keys": "error",
		"no-duplicate-case": "error",
		"no-useless-backreference": "error",
		"no-useless-call": "error",
		"no-useless-computed-key": "error",
		"no-useless-constructor": "error",
		"no-useless-rename": "error",
		"no-useless-return": "error",
		"no-void": "error",
		"no-empty": ["error", { allowEmptyCatch: true }],
		"no-empty-character-class": "error",
		"no-empty-pattern": "error",
		"no-eval": "error",
		"no-ex-assign": "error",
		"no-extend-native": "error",
		"no-extra-bind": "error",
		"no-extra-boolean-cast": "error",
		"no-extra-parens": ["error", "functions"],
		"no-fallthrough": "error",
		"no-func-assign": "error",
		"no-global-assign": "error",
		"no-implied-eval": "error",
		"no-import-assign": "error",
		"no-invalid-regexp": "error",
		"no-irregular-whitespace": "error",
		"no-iterator": "error",
		"no-labels": ["error", { allowLoop: true, allowSwitch: false }],
		"no-lone-blocks": "error",
		"no-loss-of-precision": "error",
		"no-misleading-character-class": "error",
		"no-new-func": "error",
		"no-new-object": "error",
		"no-new-symbol": "error",
		"no-new-wrappers": "error",
		"no-prototype-builtins": "error",
		"no-useless-catch": "error",
		"no-param-reassign": "off",
		"no-constant-condition": "error",
		"no-debugger": "error",
		"no-console": ["error", { allow: ["error", "warn", "table", "time"] }],
		"no-cond-assign": ["error", "always"],
		"no-restricted-syntax": [
			"error",
			"DebuggerStatement",
			"LabeledStatement",
			"WithStatement",
		],
		"no-restricted-globals": [
			"error",
			{ name: "global", message: "Use `globalThis` instead." },
			{ name: "self", message: "Use `globalThis` instead." },
			{ name: "isNaN", message: "Use `Number.isNaN` instead" },
			{ name: "isFinite", message: "Use `Number.isFinite` instead" },
			{ name: "parseFloat", message: "Use `Number.parseFloat` instead" },
			{ name: "parseInt", message: "Use `Number.parseInt` instead" },
		],
		"no-restricted-properties": [
			"error",
			{
				object: "globalThis",
				property: "isNaN",
				message: "Use `Number.isNaN` instead",
			},
			{
				object: "globalThis",
				property: "isFinite",
				message: "Use `Number.isFinite` instead",
			},
			{
				object: "globalThis",
				property: "parseFloat",
				message: "Use `Number.parseFloat` instead",
			},
			{
				object: "globalThis",
				property: "parseInt",
				message: "Use `Number.parseInt` instead",
			},
			{
				object: "window",
				property: "isNaN",
				message: "Use `Number.isNaN` instead",
			},
			{
				object: "window",
				property: "isFinite",
				message: "Use `Number.isFinite` instead",
			},
			{
				object: "window",
				property: "parseFloat",
				message: "Use `Number.parseFloat` instead",
			},
			{
				object: "window",
				property: "parseInt",
				message: "Use `Number.parseInt` instead",
			},
		],
		"no-obj-calls": "error",
		"no-octal": "error",
		"no-octal-escape": "error",
		"no-proto": "error",
		"no-redeclare": ["error", { builtinGlobals: false }],
		"no-regex-spaces": "error",
		"no-self-assign": ["error", { props: true }],
		"no-self-compare": "error",
		"no-sequences": "error",
		"no-shadow-restricted-names": "error",
		"no-template-curly-in-string": "error",
		"no-this-before-super": "error",
		"no-throw-literal": "error",
		"no-undef": "error",
		"no-undef-init": "error",
		"no-unexpected-multiline": "error",
		"no-unmodified-loop-condition": "error",
		"no-unneeded-ternary": ["error", { defaultAssignment: false }],
		"no-unreachable": "error",
		"no-unreachable-loop": "error",
		"no-unsafe-finally": "error",
		"no-unsafe-negation": "error",
		"no-return-await": "off",

		// es6
		"no-var": "error",
		"prefer-const": [
			"error",
			{
				destructuring: "all",
				ignoreReadBeforeAssign: true,
			},
		],
		"prefer-arrow-callback": [
			"error",
			{
				allowNamedFunctions: false,
				allowUnboundThis: true,
			},
		],
		"one-var": ["error", "never"],
		"object-shorthand": [
			"error",
			"always",
			{
				ignoreConstructors: false,
			},
		],
		"quote-props": ["error", "consistent-as-needed"],
		"padding-line-between-statements": [
			"error",
			{ blankLine: "always", prev: "*", next: "return" },
		],
		"prefer-exponentiation-operator": "error",
		"prefer-rest-params": "error",
		"prefer-spread": "error",
		"prefer-template": "error",
		"prefer-promise-reject-errors": "error",
		"prefer-regex-literals": ["error", { disallowRedundantWrapping: true }],
		"yoda": ["error", "never"],
		"spaced-comment": [
			"error",
			"always",
			{
				line: {
					markers: ["/"],
					exceptions: ["/", "#"],
				},
				block: {
					markers: ["!"],
					exceptions: ["*"],
					balanced: true,
				},
			},
		],

		// best-practice
		"array-callback-return": "error",
		"block-scoped-var": "error",
		"no-unused-expressions": [
			"error",
			{
				allowShortCircuit: true,
				allowTernary: true,
				allowTaggedTemplates: true,
			},
		],
		"no-unused-vars": [
			"error",
			{
				args: "none",
				caughtErrors: "none",
				ignoreRestSiblings: true,
				vars: "all",
			},
		],
		"no-use-before-define": [
			"error",
			{ functions: false, classes: false, variables: true },
		],
		"consistent-return": "off",
		"complexity": ["off", 11],
		"eqeqeq": ["error", "smart"],
		"no-alert": "error",
		"no-case-declarations": "error",
		"no-multi-str": "error",
		"no-with": "error",
		"no-invalid-this": "error",
		"vars-on-top": "error",
		"require-await": "off",
		"use-isnan": [
			"error",
			{
				enforceForSwitchCase: true,
				enforceForIndexOf: true,
			},
		],
		"valid-typeof": ["error", { requireStringLiterals: true }],

		// Test
		"no-only-tests/no-only-tests": "error",
		"vitest/expect-expect": "off",
		"vitest/valid-describe-callback": "off",
		"vitest/no-alias-methods": "error",
		"vitest/no-interpolation-in-snapshots": "error",
		"vitest/no-test-prefixes": "error",
		"vitest/prefer-expect-resolves": "error",
		"vitest/prefer-comparison-matcher": "error",
		"vitest/prefer-mock-promise-shorthand": "error",
		"vitest/prefer-spy-on": "error",
		"vitest/prefer-to-be-falsy": "error",
		"vitest/prefer-to-be-object": "error",
		"vitest/prefer-to-be-truthy": "error",
		"vitest/prefer-to-contain": "error",
		"vitest/prefer-to-have-length": "error",
		"vitest/prefer-todo": "error",
		"vitest/valid-title": ["error", { allowArguments: true }],

		// unicorns
		"unicorn/error-message": "error",
		"unicorn/escape-case": "error",
		"unicorn/no-instanceof-array": "error",
		"unicorn/no-new-buffer": "error",
		"unicorn/no-new-array": "error",
		"unicorn/no-unsafe-regex": "off",
		"unicorn/number-literal-case": "error",
		"unicorn/numeric-separators-style": "error",
		"unicorn/throw-new-error": "error",
		"unicorn/no-useless-spread": "error",
		"unicorn/relative-url-style": ["error", "always"],
		"unicorn/explicit-length-check": "error",
		"unicorn/new-for-builtins": "error",
		"unicorn/no-array-for-each": "error",
		"unicorn/no-array-method-this-argument": "error",
		"unicorn/no-for-loop": "error",
		"unicorn/no-lonely-if": "error",
		"unicorn/no-negated-condition": "error",
		"unicorn/switch-case-braces": "error",
		"unicorn/prefer-ternary": "error",
		"unicorn/prefer-query-selector": "error",
		"unicorn/prefer-modern-dom-apis": "error",
		"unicorn/prefer-modern-math-apis": "error",
		"unicorn/prefer-json-parse-buffer": "error",
		"unicorn/prefer-date-now": "error",
		"unicorn/prefer-array-some": "error",
		"unicorn/prefer-array-index-of": "error",
		"unicorn/prefer-array-flat": "error",
		"unicorn/prefer-array-find": "error",
		"unicorn/prefer-spread": "error",
		"unicorn/prefer-set-size": "error",
		"unicorn/prefer-string-slice": "error",
		"unicorn/prefer-includes": "error",
		"unicorn/prefer-string-starts-ends-with": "error",
		"unicorn/prefer-text-content": "error",
		"unicorn/prefer-type-error": "error",
		"unicorn/prefer-node-protocol": "error",
		"unicorn/prefer-regexp-test": "error",
		"unicorn/prefer-optional-catch-binding": "error",

		// import
		"import/first": "error",
		"import/no-mutable-exports": "error",
		"import/no-useless-path-segments": ["error", { noUselessIndex: true }],
		"import/no-unresolved": "off",
		"import/no-absolute-path": "off",
		"import/namespace": "off", // Disable this for better performance
		"import/export": "error",
		"import/no-duplicates": "error",
		"import/no-named-default": "error",
		"import/no-webpack-loader-syntax": "error",
		"import/no-named-as-default-member": "off",

		// Sort imports
		"@so1ve/sort-imports/imports": ["error"],
		"@so1ve/sort-imports/exports": "error",

		// array-func
		"array-func/prefer-array-from": "off",

		// json-schema-validator
		"json-schema-validator/no-invalid": "warn",

		// regexp
		"regexp/no-unused-capturing-group": "warn",

		// Eslint Comments
		"@eslint-community/eslint-comments/disable-enable-pair": "off",
		"@eslint-community/eslint-comments/no-unlimited-disable": "off",

		// Node
		"n/no-callback-literal": "off",
		"n/handle-callback-err": ["error", "^(err|error)$"],
		"n/no-deprecated-api": "error",
		"n/no-exports-assign": "error",
		"n/no-new-require": "error",
		"n/no-path-concat": "error",
		"n/process-exit-as-throw": "error",

		// Promise
		"promise/param-names": "error",

		// Unocss
		...(hasUnoConfig
			? { "@unocss/order": "error", "@unocss/order-attributify": "error" }
			: {}),

		// so1ve
		"@so1ve/import-dedupe": "error",
		"@so1ve/no-useless-template-string": "error",
		"@so1ve/no-negated-comparison": "error",
		"@so1ve/no-import-promises-as": "error",
		"@so1ve/pad-after-last-import": "error",
		"@so1ve/function-style": "error",
		"@so1ve/use-async-with-await": "error",
	},
});
