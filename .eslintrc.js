module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: { project: "./tsconfig.json" },
    plugins: ["@typescript-eslint", "prettier", "promise", "security"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "plugin:security/recommended",
    ],
    rules: {
        "@typescript-eslint/await-thenable": "error",
        "@typescript-eslint/consistent-type-assertions": ["warn", { assertionStyle: "as" }],
        "@typescript-eslint/explicit-function-return-type": "error",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/no-namespace": "error",
        "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/space-infix-ops": "error",
        "@typescript-eslint/switch-exhaustiveness-check": "error",
        "@typescript-eslint/typedef": [
            "error",
            {
                arrayDestructuring: true,
                arrowParameter: true,
                memberVariableDeclaration: true,
                objectDestructuring: true,
                parameter: true,
                propertyDeclaration: true,
                variableDeclaration: true,
            },
        ],
        "@typescript-eslint/unified-signatures": "error",
        "array-callback-return": "error",
        "arrow-body-style": ["error", "as-needed"],
        "constructor-super": "error",
        "max-len": [
            "warn",
            {
                code: 120,
                ignorePattern: "^(?!.*/(/|\\*) .* .*).*$",
            },
        ],
        "no-async-promise-executor": "error",
        "no-await-in-loop": "error",
        "no-class-assign": "error",
        "no-compare-neg-zero": "error",
        "no-cond-assign": "error",
        "no-constant-condition": "error",
        "no-dupe-class-members": "error",
        "no-dupe-else-if": "error",
        "no-dupe-keys": "error",
        "no-duplicate-imports": "error",
        "no-restricted-globals": "error",
        "no-eval": "error",
        "no-extra-boolean-cast": "error",
        "no-fallthrough": "error",
        "no-func-assign": "error",
        "no-global-assign": "error",
        "no-implicit-coercion": "error",
        "no-implicit-globals": "error",
        "no-implied-eval": "error",
        "no-invalid-this": "error",
        "no-irregular-whitespace": "error",
        "no-lone-blocks": "error",
        "no-lonely-if": "error",
        "no-loss-of-precision": "error",
        "no-nested-ternary": "error",
        "no-plusplus": "error",
        "no-self-assign": "error",
        "no-self-compare": "error",
        "no-sparse-arrays": "error",
        "no-this-before-super": "error",
        "no-unreachable": "error",
        "no-unsafe-optional-chaining": "error",
        "no-unused-private-class-members": "error",
        "no-useless-backreference": "error",
        "no-useless-catch": "error",
        "no-useless-computed-key": "error",
        "no-useless-concat": "error",
        "no-useless-rename": "error",
        "no-useless-return": "error",
        "object-shorthand": ["error", "always"],
        "one-var": ["error", "never"],
        "padding-line-between-statements": [
            "warn",
            {
                blankLine: "always",
                prev: "*",
                next: [
                    "class",
                    "do",
                    "for",
                    "function",
                    "if",
                    "multiline-block-like",
                    "multiline-const",
                    "multiline-expression",
                    "multiline-let",
                    "multiline-var",
                    "switch",
                    "try",
                    "while",
                ],
            },
            {
                blankLine: "always",
                prev: [
                    "class",
                    "do",
                    "for",
                    "function",
                    "if",
                    "multiline-block-like",
                    "multiline-const",
                    "multiline-expression",
                    "multiline-let",
                    "multiline-var",
                    "switch",
                    "try",
                    "while",
                ],
                next: "*",
            },
            {
                blankLine: "always",
                prev: "*",
                next: ["continue", "return"],
            },
        ],
        "prefer-template": "error",
        "prettier/prettier": "error",
        "promise/prefer-await-to-then": "error",
        "require-atomic-updates": "error",
        "require-await": "warn",
        "security/detect-non-literal-fs-filename": "off",
        "security/detect-object-injection": "off",
        "spaced-comment": ["warn", "always"],
        "sort-imports": ["error", { allowSeparatedGroups: true, ignoreCase: true }],
        "valid-typeof": "error",
    },
};
