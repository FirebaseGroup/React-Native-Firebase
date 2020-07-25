import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as firebase from 'Firebase';

const Stack = createStackNavigator();

const firebaseConfig = {
  apiKey: "AIzaSyDQyEHHX8nRg3GZMwaMAHOdnc3i9KJ8ClY",
  authDomain: "react-native-firebase-abhi12.firebaseapp.com",
  databaseURL: "https://react-native-firebase-abhi12.firebaseio.com",
  projectId: "react-native-firebase-abhi12",
  storageBucket: "react-native-firebase-abhi12.appspot.com",
  messagingSenderId: "990244535757",
  appId: "1:990244535757:web:a97c5eece8a6a8b8115884"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Go to Abhinav's profile"
      onPress={() =>
        storeName("Abhinav");
        navigation.navigate('Profile', { name: 'Jane' })
      }
    />
  );
};

const ProfileScreen = () => {
  return <Text>This is Abhinav's profile</Text>;
};

function storeName(name) {
  firebase.database().ref('name').push(name);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
