# Getting Started

- Setting up the Environment
  
## Setting up the Environment

- Install node
- Install the `expo-cli`
  ```
  npm install -g expo-cli
  ```
- Initialize the project
  ```
  expo init Firebase-Project --npm
  ```
  Select first option under the Managed Workflow
  `blank`
  ```
  cd Firebase-Project
  npm start
  ```
- Fix the `babel-preset-expo` issue
  Run
  ```
  npm install babel-preset-expo --save
  ```
- Add the Firebase SDK
  ```
  expo install firebase
  ```
- Install the Firebase Command Line Tools
  ```
  npm i -g firebase-tools
  ```
- Login to Firebase account
  ```
  firebase login
  ```
- Create new Firebase project
  ```
  firebase init
  ```
  - Select `◯ Database: Deploy Firebase Realtime Database Rules`
  - Select `Create a new project`
  - Specify a unique project id `react-native-firebase-<random 5 characters>`
  - Name your project as `React-Native-Firebase`
  - Use `database.rules.json` as the file for database rules
- Add Firebase to the app
  - Go to the firebase console
  - Go to `React-Native-Firebase`
  - Go to `Project Settings`
  - Add a web application
    - Give a nickname to the application
    - Click on `Register app`
    - Copy the Firebase Configuration script
      ```
      var firebaseConfig = {
        apiKey: <API Key>,
        authDomain: "<Project ID>.firebaseapp.com",
        databaseURL: "https://<Project ID>.firebaseio.com",
        projectId: <Project ID>,
        storageBucket: "<Project ID>.appspot.com",
        messagingSenderId: <Messaging Sender ID>,
        appId: <App ID>
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      ```

## Enable Navigation Screens

- Install React Navigation
  ```
  npm install @react-navigation/native @react-navigation/stack
  ```
- Install dependencies with `expo`
  ```
  expo install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
  ```
- Import React Native Gesture Handler
  Add the following import statement to App.js
  ```
  import 'react-native-gesture-handler'
  ```
- Import `NavigationContainer` and `createStackNavigator`
  Add the following import statements to App.js
  ```
  import { NavigationContainer } from '@react-navigation/native'
  import { createStackNavigator } from '@react-navigation/stack'
  ```
- Initialize Firebase Database
  ```
  firebase init database
  ```
- Deploy Firebase Rules
  ```
  firebase deploy --only database
  ```
