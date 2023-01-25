<center>
  <h1><pre><code>react-native-template</code></pre></h1>
</center>

This is a template for creating a new React Native project. It comes based on Expo, with some extra features and quality of life improvements.

## Features

- [x] Expo
- [x] ESLint
- [x] Jest
- [x] GitHub actions
  - [x] Linting
  - [x] Testing
  - [x] Building & submitting
- [x] React Navigation
- [x] Styled Components

## Installation

```bash
git clone https://github.com/jackcrane/react-native-template.git && rm -rf .git && git init
```

```
yarn install
```

This will clone the repository to your computer and remove the Git history so your can start fresh with your project.

## Usage

```bash
yarn start
```

Or if you just want to use one platform,

```bash
yarn ios
```

```bash
yarn android
```

## Project structure

```
.
├── App.jsx
├── app.json
├── assets
│   ├── adaptive-icon.png
│   ├── favicon.png
│   ├── icon.png
│   └── splash.png
├── babel.config.js
├── components
│   ├── empty.js
│   └── index.js
├── eas.json
├── jest.config.js
├── package.json
├── readme.md
├── screens
│   └── Home.js
├── ui-kit
│   ├── __tests__
│   │   ├── __snapshots__
│   │   │   └── typography.js.snap
│   │   └── typography.js
│   ├── index.js
│   ├── typography.js
│   └── utils.js
└── yarn.lock
```

Use `App.jsx` as the entry point for your app. This is where the navigation root lives and screens should be registered. `app.json` and `eas.json` are the Expo configurations.

`assets` is where the icons and splash screens live. The assets folder has not been modified in this template from the Expo defaults, so you will need to replace the icons and splash screens with your own.

`screens` is where the screens of your app live. You can add more screens here and register them in `App.jsx`. This is where you should define components for the navigation routes for your app. Resist the urge to put everything in `screens` and instead use the `components` folder for reusable components.

`ui-kit` is where the simplest ui components should live. Your typography, buttons, inputs, containers, etc should live in `ui-kit`. More complex components should live in `components`.

`__tests__` there is a tests folder in each of the folders. This is where you should put tests for the components, hooks, etc.

## Testing

```bash
yarn test
```

## Before launching

Here is a checklist to help you prepare to launch your app. It is suggested you go through this before your first push.

- [ ] Replace the icons and splash screens in `assets`
- [ ] Replace the app name in `app.json` and `package.json`
- [ ] Set a github secret called `EXPO_TOKEN` with your Expo token
- [ ] Run `eas build --platform ios` to build the iOS app and configure EAS.

## License

[MIT](https://choosealicense.com/licenses/mit/)
