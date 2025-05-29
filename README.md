This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> [!NOTE]
> Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

### Installation

1. If you have previously installed a global react-native-cli package, please remove it as it may cause unexpected issues: `npm uninstall -g react-native-cli @react-native-community/cli`

2. Create a new React Native project with `npx @react-native-community/cli@latest init <YourProjectName>`. (Name can only include alphanumeric characters)

This will install the necessary dependencies, ensuring your project maintains the same file structure as the repository (except the **src** folder). For better organization, consider creating a **src** folder to manage your code more efficiently.

### Running The App

1. First, you will need to run **Metro**, the JavaScript build tool for React Native. To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

2. Build and run your app. With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

#### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

#### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, every time you update your native dependencies, run the following command inside the ios folder:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

### Modify your app

#### 1. Navigation

In our starter template we have added some basic navigation with the most commonly used package **React Navigation**.

To setup React Navigation in your project follow these steps:

Install the required package:
```sh
npm install @react-navigation/native
```

Install the dependencies used by most navigators:
```sh
npm install react-native-screens react-native-safe-area-context
```

There are different types of navigators (stack, tab, and drawer being the most common). Let's start by demonstrating the stack navigator.

To use the native stack navigator, install the following:
```sh
npm install @react-navigation/native-stack @react-navigation/elements
```

In `App.tsx`, you can see the code that creates a stack navigator with a single **Home** screen.

#### 2. Styles with sass modules

In react native the default way to add styles is using react native's  **StyleSheet** which is an abstraction similar to CSS StyleSheets. If you prefer CSS-like styling with nesting, variables, and media queries then you can configure your project to use modules. In our template we are using **SCSS** modules.

To setup SCSS modules in your project follow these steps:

Install the following as dev dependencies:

```sh
npm i react-native-svg-transformer react-native-sass-transformer metro-react-native-babel-transformer babel-plugin-react-native-platform-specific-extensions babel-plugin-react-native-classname-to-style sass --save-dev
```

Add this line to your tsconfig.json, so that TypeScript recognizes the specified files:

```sh
  "include": ["src/**/*.ts", "src/**/*.tsx", "src/**/*.js", "src/**/*.jsx", "src/**/*.scss"]
```

Create a file **index.d.ts** inside **src** folder and add the following line. This will prevent TypeScript from throwing errors when importing SCSS module files. (only do this if you are going to use TypeScript):

```sh
declare module '*.module.scss';
```

For the last step, copy **customTransformer.js** file from our template into your project and also replace the existing code in **metro.config.js** and **babel.config.js** with the configuration from the template.

---

When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.


## Congratulations!

You've successfully run and modified your React Native App.
