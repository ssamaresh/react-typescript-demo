
STEPS to configure a React Typescript project

// Create Folder
    mkdir <name> && cd <name>

// Run npm init
    npm init

// npm package install
    npm i react react-dom
    npm i webpack webpack-dev-server -D
    npm i typescript awesome-typescript-loader -D
    npm i ts-loader
    npm i @types/react @types/react-dom -D

// Create and configure webpack.config.js file
    touch webpack.config.js

// Create and configure tsconfig.json file
    touch tsconfig.json

// Create base index.html file
    touch index.html

// Add npm script to run webpack build and hot reload
    "start": "webpack-dev-server"

// Open http://localhost:8080/
