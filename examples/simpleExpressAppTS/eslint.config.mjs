import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import eslintConfigPrettierRecommended from "eslint-plugin-prettier/recommended";
import eslintPluginTs from "@typescript-eslint/eslint-plugin";

export default defineConfig([
	{
		ignores: ["node_modules", "./dist"],
	},
	{
		files: ["**/src*.{js,mjs,cjs,ts}"],
		plugins: { js, "@typescript-eslint": eslintPluginTs },
		extends: ["js/recommended"],
	},
	{ files: ["**/src*.js"], languageOptions: { sourceType: "commonjs" } },
	{
		files: ["**/src*.{js,mjs,cjs,ts}"],
		languageOptions: { globals: globals.node },
	},
	{
		rules: {
			"@typescript-eslint/no-unused-vars": [
				"error",
				{
					argsIgnorePattern: "^_",
					varsIgnorePattern: "^_",
					caughtErrorsIgnorePattern: "^_",
				},
			],
		},
	},
	eslintConfigPrettierRecommended,
	...tseslint.configs.recommended,
]);
