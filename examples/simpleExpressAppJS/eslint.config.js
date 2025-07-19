import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import eslintConfigPrettierRecommended from "eslint-plugin-prettier/recommended";

export default defineConfig([
	{
		rules: {
			"no-unused-vars": [
				"error",
				{ argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
			],
		},
	},
	{
		ignores: ["node_modules"],
	},
	{
		files: ["**/src*.{js,mjs,cjs}"],
		plugins: { js },
		extends: ["js/recommended"],
	},
	{
		files: ["**/src*.{js,mjs,cjs}"],
		languageOptions: { globals: globals.node },
	},
	eslintConfigPrettierRecommended,
]);
