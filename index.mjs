import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import typescriptEslint from "typescript-eslint";
import vueParser from "vue-eslint-parser";
import js from "@eslint/js";
import prettier from "eslint-config-prettier/flat";
import vue from "eslint-plugin-vue";
import tsParser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";

export default defineConfig([
	globalIgnores([
		"Lib/External",
		"Apps/AATS/WebTemplater/Templates",
		"Testing/FunctionalTests",
		"Testing/Benchmarks",
		"**/Release/",
		"**/Misc/",
		".output/",
		".nuxt/"
	]),
	js.configs.recommended,
	importPlugin.flatConfigs.recommended,
	importPlugin.flatConfigs.typescript,
	prettier,
	typescriptEslint.configs.recommended,
	vue.configs["flat/recommended"],
	{
		languageOptions: {
			globals: {
				...globals.node,
				...globals.jquery,
				...globals.browser
			},

			ecmaVersion: "latest",
			sourceType: "commonjs",

			parserOptions: {
				projectService: true
			}
		},

		settings: {
			"import/external-module-folders": [
				"../.local/AATSV4/node_modules",
				".local/AATSV4/node_modules",
				".local/node_modules",
				"AATSV4",
				"AATSV4/Lib",
				"AATSV4/node_modules",
				"jenkins-orchestrator/node_modules"
			],
			"import/resolver": {
				node: {
					extensions: [".js", ".jsx", ".ts", ".tsx", ".vue"],
					moduleDirectory: [
						"../.local/AATSV4/node_modules",
						".local/AATSV4/node_modules",
						".local/node_modules",
						"AATSV4",
						"AATSV4/Lib",
						"AATSV4/node_modules",
						"jenkins-orchestrator/node_modules"
					]
				},
				typescript: true
			}
		},

		rules: {
			"no-underscore-dangle": "off",
			"no-tabs": "off",
			"no-use-before-define": "off",
			camelcase: "off",
			"no-plusplus": "off",
			"func-names": "off",
			"no-param-reassign": "off",
			"spaced-comment": "off",
			"no-restricted-globals": "off",
			"no-prototype-builtins": "off",
			"no-sync": "off",
			"class-methods-use-this": "off",
			"newline-per-chained-call": "off",
			"space-before-function-paren": "off",
			"no-control-regex": "off",
			"no-lonely-if": "off",
			"smart-tabs": "off",
			"new-cap": "off",
			"no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
			"operator-linebreak": "off",
			"keyword-spacing": "off",

			"space-unary-ops": [
				1,
				{
					words: true,
					nonwords: false,

					overrides: {
						typeof: false,
						delete: false
					}
				}
			],

			"no-bitwise": ["warn"],

			"no-multiple-empty-lines": [
				"error",
				{
					max: 3,
					maxEOF: 3,
					maxBOF: 0
				}
			],

			"prefer-destructuring": "off",
			"prefer-promise-reject-errors": "warn",
			indent: "off",
			eqeqeq: "error",
			"linebreak-style": ["off"],
			quotes: ["off"],
			semi: ["error", "always"],
			"no-unused-vars": ["warn"],
			"no-var": ["error"],
			"prefer-const": ["warn"],
			curly: ["error"],
			"no-else-return": ["warn"],
			"no-implicit-coercion": ["warn"],
			"no-multi-spaces": ["warn"],

			"max-len": [
				"off",
				{
					code: 1600,
					ignoreStrings: true,
					ignoreRegExpLiterals: true
				}
			],

			yoda: [
				"error",
				"always",
				{
					onlyEquality: true
				}
			],

			"implicit-arrow-linebreak": ["off"],
			"no-continue": "off",

			"no-constant-condition": [
				"error",
				{
					checkLoops: false
				}
			],

			"import/no-extraneous-dependencies": ["off"],

			"import/no-unresolved": ["error", { commonjs: true, caseSensitive: true }],
			"import/named": "error",
			"import/default": "off",
			"import/namespace": "off",
			"import/export": "error",
			"import/no-named-as-default": "error",
			"import/no-named-as-default-member": "error",
			"import/no-deprecated": "off",
			"import/no-mutable-exports": "error",
			"import/no-commonjs": "off",
			"import/no-nodejs-modules": "off",
			"import/first": "error",
			"import/imports-first": "off",
			"import/no-duplicates": "error",
			"import/no-namespace": "off",
			"import/extensions": "off",
			"import/order": ["error", { groups: [["builtin", "external", "internal"]] }],
			"import/newline-after-import": "error",
			"import/prefer-default-export": "error",
			"import/no-restricted-paths": "off",
			"import/max-dependencies": ["off", { max: 10 }],
			"import/no-absolute-path": "error",
			"import/no-dynamic-require": "error",
			"import/no-internal-modules": [
				"off",
				{
					allow: []
				}
			],
			"import/unambiguous": "off",
			"import/no-unassigned-import": "off",
			"import/no-named-default": "error",
			"import/no-anonymous-default-export": [
				"off",
				{
					allowArray: false,
					allowArrowFunction: false,
					allowAnonymousClass: false,
					allowAnonymousFunction: false,
					allowLiteral: false,
					allowObject: false
				}
			],
			"import/exports-last": "off",
			"import/group-exports": "off",
			"import/no-default-export": "off",
			"import/no-named-export": "off",
			"import/no-self-import": "error",
			"import/no-cycle": ["error", { maxDepth: "∞" }],
			"import/no-useless-path-segments": ["error", { commonjs: true }],
			"import/no-relative-parent-imports": "off",
			"import/no-unused-modules": [
				"off",
				{
					ignoreExports: [],
					missingExports: true,
					unusedExports: true
				}
			],
			"import/no-import-module-exports": [
				"error",
				{
					exceptions: []
				}
			],
			"import/no-relative-packages": "error",
			"import/consistent-type-specifier-style": ["off", "prefer-inline"],
			"import/no-empty-named-blocks": "off",

			"@typescript-eslint/no-unused-vars": "warn"
		}
	},
	{
		files: ["**/*.js", "**/*.cjs"],
		rules: {
			"@typescript-eslint/no-require-imports": "off"
		}
	},
	{
		files: ["**/*.ts", "**/*.tsx"],

		languageOptions: {
			parserOptions: {
				projectService: true
			}
		},

		rules: {
			"@typescript-eslint/no-underscore-dangle": "off",
			"@typescript-eslint/no-tabs": "off",
			"@typescript-eslint/no-use-before-define": "off",
			"@typescript-eslint/camelcase": "off",
			"@typescript-eslint/no-plusplus": "off",
			"@typescript-eslint/func-names": "off",
			"@typescript-eslint/no-param-reassign": "off",
			"@typescript-eslint/spaced-comment": "off",
			"@typescript-eslint/no-restricted-globals": "off",
			"@typescript-eslint/no-prototype-builtins": "off",
			"@typescript-eslint/no-sync": "off",
			"@typescript-eslint/class-methods-use-this": "off",
			"@typescript-eslint/newline-per-chained-call": "off",
			"@typescript-eslint/space-before-function-paren": "off",
			"@typescript-eslint/no-control-regex": "off",
			"@typescript-eslint/no-lonely-if": "off",
			"@typescript-eslint/smart-tabs": "off",
			"@typescript-eslint/new-cap": "off",
			"@typescript-eslint/operator-linebreak": "off",
			"@typescript-eslint/keyword-spacing": "off",

			"@typescript-eslint/no-namespace": "off",

			"@typescript-eslint/prefer-destructuring": "off",
			"@typescript-eslint/indent": "off",
			"@typescript-eslint/quotes": ["off"],
			"@typescript-eslint/no-unused-vars": ["warn"],

			"@typescript-eslint/no-explicit-any": "off",

			"@typescript-eslint/max-len": [
				"off",
				{
					code: 1600,
					ignoreStrings: true,
					ignoreRegExpLiterals: true
				}
			],

			"@typescript-eslint/no-continue": "off",
			"@typescript-eslint/consistent-type-imports": "error",
			"@typescript-eslint/no-floating-promises": ["warn"]
		}
	},
	{
		files: ["**/*.test.js", "**/*.test.ts"],

		languageOptions: {
			globals: {
				...globals.jest
			}
		}
	},
	{
		files: ["**/*.vue"],

		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",

			globals: {
				...globals.browser
			},

			parser: vueParser,
			parserOptions: {
				parser: tsParser,
				sourceType: "module",
				extraFileExtensions: [".vue"],
				projectService: true,

				vueFeatures: {
					filter: true,
					interpolationAsNonHTML: true
				}
			}
		},

		settings: {
			"import/external-module-folders": [
				"../.local/AATSV4/node_modules",
				".local/AATSV4/node_modules",
				".local/node_modules",
				"AATSV4",
				"AATSV4/Lib",
				"AATSV4/node_modules",
				"jenkins-orchestrator/node_modules"
			],
			"import/resolver": {
				node: {
					extensions: [".js", ".jsx", ".ts", ".tsx", ".vue"],
					moduleDirectory: [
						"../.local/AATSV4/node_modules",
						".local/AATSV4/node_modules",
						".local/node_modules",
						"AATSV4",
						"AATSV4/Lib",
						"AATSV4/node_modules",
						"jenkins-orchestrator/node_modules"
					]
				}
			}
		},

		rules: {
			"@typescript-eslint/no-underscore-dangle": "off",
			"@typescript-eslint/no-tabs": "off",
			"@typescript-eslint/no-use-before-define": "off",
			"@typescript-eslint/camelcase": "off",
			"@typescript-eslint/no-plusplus": "off",
			"@typescript-eslint/func-names": "off",
			"@typescript-eslint/no-param-reassign": "off",
			"@typescript-eslint/spaced-comment": "off",
			"@typescript-eslint/no-restricted-globals": "off",
			"@typescript-eslint/no-prototype-builtins": "off",
			"@typescript-eslint/no-sync": "off",
			"@typescript-eslint/class-methods-use-this": "off",
			"@typescript-eslint/newline-per-chained-call": "off",
			"@typescript-eslint/space-before-function-paren": "off",
			"@typescript-eslint/no-control-regex": "off",
			"@typescript-eslint/no-lonely-if": "off",
			"@typescript-eslint/smart-tabs": "off",
			"@typescript-eslint/new-cap": "off",
			"@typescript-eslint/operator-linebreak": "off",
			"@typescript-eslint/keyword-spacing": "off",

			"@typescript-eslint/prefer-destructuring": "off",
			"@typescript-eslint/indent": "off",
			"@typescript-eslint/quotes": ["off"],
			"@typescript-eslint/no-unused-vars": ["warn"],

			"@typescript-eslint/max-len": [
				"off",
				{
					code: 1600,
					ignoreStrings: true,
					ignoreRegExpLiterals: true
				}
			],

			"@typescript-eslint/no-continue": "off",
			"@typescript-eslint/consistent-type-imports": "error",
			"@typescript-eslint/no-explicit-any": "off",

			"vue/singleline-html-element-content-newline": "off",
			"vue/html-closing-bracket-newline": "off",
			"vue/first-attribute-linebreak": "off",
			"vue/max-attributes-per-line": "off",
			"vue/html-indent": ["off", "tab"],
			"vue/script-indent": ["off", "tab"],

			"vue/max-len": [
				"error",
				{
					code: 128,
					template: 128,
					ignoreStrings: true
				}
			],

			"vue/html-self-closing": [
				"error",
				{
					html: {
						void: "always"
					}
				}
			],

			"vue/html-quotes": [
				"error",
				"double",
				{
					avoidEscape: true
				}
			],

			"vue/no-mutating-props": [
				"error",
				{
					shallowOnly: true
				}
			],

			"@typescript-eslint/no-floating-promises": ["warn"]
		}
	}
]);
