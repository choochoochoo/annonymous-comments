module.exports = {
    "extends": "google",

    "rules": {
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "no-warning-comments": [
            0
        ],
        "object-curly-spacing": ["error", "always"],
        "max-len": [
            "error",
            {
                "code": 120
            }
        ],
        "radix": [
            2,
            "as-needed"
        ],
        "no-nested-ternary": [
            0
        ]
    },

    "env": {
        "browser": true,
        "node": true
    },

    "globals": {
        "React": true
    },

    "ecmaFeatures": {
        "jsx": true
    },

    "plugins": [
        "react"
    ]
};