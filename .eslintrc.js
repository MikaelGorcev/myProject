module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "react-app",
        "prettier",
        "plugin:react-hooks/recommended" 
    ],
    "parserOptions": {
      
        
        
    },
    "plugins": [
        "prettier",
        "react-hooks"
    ],
    "rules": {
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "jsx-quotes": [
            1,
            "prefer-double"
          ]
    }
}
