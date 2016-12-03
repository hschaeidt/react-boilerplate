# Boilerplate React App

Boilerplate project with [foundation](http://foundation.zurb.com/) integration, [scss](http://sass-lang.com/) and [react-router](https://github.com/ReactTraining/react-router) integration.
* [ESLint](http://eslint.org/) & [Airbnb javascript styleguide](https://github.com/airbnb/javascript)
* [Enzyme](http://airbnb.io/enzyme/) & [Jest](https://facebook.github.io/jest/) test utilities
* [Yarn](https://yarnpkg.com/) package manager

## Getting started

### Installation

`yarn` is the recommended package manager to manage this projects dependencies.

Run once:

```bash
yarn install
```

### `yarn start`

Runs the app in development mode.<br/>
Open [http://localhost:8080](http://localhost:8080) to view in the browser.

## Folder Structure

```
react-boilerplate/
    app/
        __tests__
        components/
        styles/
        app.jsx
    config/
        webpack.config.js
        webpack.dev.config.js
        webpack.prod.config.js
    public/
        index.html
    .babelrc
    .eslintrc.js
    .gitignore
    package.json
    README.md
    yarn.lock
```

For the project to build the `app/app.jsx` and the dependencies of [jquery](https://jquery.com/) and [foundation](http://foundation.zurb.com/) are necessary.

