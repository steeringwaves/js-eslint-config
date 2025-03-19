import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import typescriptEslint from "typescript-eslint";
import vueParser from "vue-eslint-parser";
import js from "@eslint/js";
import prettier from "eslint-config-prettier/flat";
import vue from "eslint-plugin-vue";
import tsParser from "@typescript-eslint/parser";

import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

// Fetch directory name for root directories
// https://stackoverflow.com/questions/46745014/alternative-for-dirname-in-node-js-when-using-es6-modules/50052194#50052194
const __dirname = dirname(fileURLToPath(import.meta.url));

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
	prettier,
	typescriptEslint.configs.recommendedTypeChecked,
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
				projectService: true,
				tsconfigRootDir: __dirname
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

			"import/no-extraneous-dependencies": ["off"]
		}
	},
	{
		files: ["**/*.ts", "**/*.tsx"],

		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigRootDir: __dirname
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
				tsconfigRootDir: __dirname,

				vueFeatures: {
					filter: true,
					interpolationAsNonHTML: true
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
