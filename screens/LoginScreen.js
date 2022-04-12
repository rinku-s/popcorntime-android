/*
 *  file: LoginScreen.js
 *  author: Rinku Ansari <raf122@uregina.ca>
 *  version: 0.1
 *  date-created: mar-25-2022
 *  last-modified: apr-10-2022
 */

import React, { useState, useEffect } from 'react';

import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
  Platform,
  Button,
  Dimensions,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Header } from '@react-navigation/native';
import loginstyle from '../styles/LoginStyle';
import { useIsFocused } from '@react-navigation/native';
import LoginScreenUI from '../presentation/LoginScreenUI';
  /**
       * LoginScreen
       * Purpose: Define the container for the login screen of the app.
``*/
const LoginScreen = ({ navigation }) => {
 // console.log("INlogin");
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const isFocused = useIsFocused();

  /**
   * useEffect
   * Purpose: this hook runs every time the screen is rendered. When the user navigates from Register screen back to the Login screen, it clears any previous input in the username and password text input.
   *
   * Parameter(s):
   * <1> navigation: the navigation prop that is passed to all the screens in the navigation stack.
   *
   * Precondition(s):
   * <1> navigation stack must be defined and initialized containing paths for both the screens involved in navigation in the stack. Navigation prop must be passed to the main function.
   * <3> userName and password used to store user's inputs for the respective fields are defined and iniatialized.
   * Returns: N/A
   *
   * Side effect:
   * <1> if navigation value is changed i.e. each time the screen is rendered, useEffect sets userName and password fields to empty strings which resets the value of their respective text inputs.
   * <2> else, do nothing
   */
  React.useEffect(() => {
    setUserName('');
    setPassword('');
  }, [navigation, isFocused]);

  /**
   * useLayoutEffect
   * Purpose: this hook defines layout options of the header on render.
   *
   * Parameter(s):
   * <1> navigation: the navigation prop that is passed to all the screens in the navigation stack.
   *
   * Precondition(s):
   * <1> navigation stack must be defined and initialized containing paths for both the screens involved in navigation in the stack. Navigation parameter must be passed to the main function.
   * Returns: N/A
   *
   * Side effect:
   * <1> When the user navigates to the login screen, do not show the header.
   * <2> else, do nothing
   */

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown:false,
    });
  }, [navigation]);


  /**
   * loginAPI
   * Purpose: this function takes the user's input for logging in to Popcorntime and allows the users to go the home screen if the credentials exist and entered match an entry in the database.
   *
   * Parameter(s):
   *  <1> userName: The username entered by the user.
   * <2> passWord: The password entered by the user.
   *
   * Precondition(s):
   * <1> userName and password must be defined and initialized with its value set to by user to non-empty values.
   *
   * Returns: N/A
   *
   * Side effect:
   * <1> if the username and password entered are both correct, then the api will check if the username exists in the database. If yes, it will compare fetch and unencrypt the password from the database and compare it with the input given by the user. If yes, then it will return the user id from the database and go to the homepage of the app.
   * <2> else if the username or password entered is incorrect, an alert will be displayed with the same message. 
   * <3> else if the username does not exist in the database, an alert will be displayed with the same message suggesting the user to register first.
   * <4> else if the user does not enter values in username and/or password, an alert will be displayed for the same.
   * <5> else, do nothing.
   * 
   */
  const loginAPI = (userName, passWord) => {
    setLoading(true);
    console.log('Loading is ' + loading);
    Keyboard.dismiss;
    console.log('Inside login API with ', userName, ' ', password);
    if(!userName && !passWord)
      alert("Please enter a username and password ")  
      else if(!userName)
      alert("Please enter a username")
    else if (!passWord)
      alert("Please enter a password")
    if (userName && passWord) {
      userName = userName.trim()
      fetch('http://172.16.1.87:8000/users/login/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: userName,
          password: passWord,
        }),
      })
        .then((response) => response.json())
        .then((responseJsonFromServer) => {
          //      alert(JSON.stringify(responseJsonFromServer));
          console.log(responseJsonFromServer);
          if (responseJsonFromServer.success) {
            setUserId(JSON.stringify(responseJsonFromServer));
            navigation.navigate('Home');
          } else if (!responseJsonFromServer.success) {
            // ToastAndroid.show(responseJsonFromServer.error, ToastAndroid.SHORT);]
            alert(responseJsonFromServer.error)
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }
  };

 /**
   * setUserId
   * Purpose: This function is called from the loginAPI function if the server returns success as true then this function is called to store the user id in Async Storage so that the user doesn't have to login to the same account every time from the same device.
   * Parameter(s):
   *  <1> jsonString: string value of the JSON object return by the server as response
   *
   * Precondition(s):
   * <1> N/A
   *
   * Returns: N/A
   *
   * Side effect:
   * <1> User id is extracted from jsonString and stored in Async storage with key value as userIdKey.
   */
  const setUserId = async (jsonString) => {
    //   ToastAndroid.show(jsonString, ToastAndroid.SHORT)
    var parsedJson = JSON.parse(jsonString);
    const userid = parsedJson.user_id;
    console.log(userid);
    await AsyncStorage.setItem('userIdKey', userid.toString());
  };

 /**
   * goToRegistration
   * Purpose: This function is called when the user clicks on the register button to navigate the user to the Register page.
   * Parameter(s):
   *  <1> jsonString: string value of the JSON object return by the server as response
   *
   * Precondition(s):
   * <1> N/A
   *
   * Returns: N/A
   *
   * Side effect:
   * <1> If the user clicks on the Register button, then go to Register screen.
   * <2> else, do nothing.
   */

  const goToRegistration = () => {
    console.log('Inside goToRegistration');
    navigation.navigate('Register');
  };

  return (
      <LoginScreenUI  userName = {userName}
      password = {password}
      setUserName = {setUserName}
      setPassword = {setPassword}
      loginAPI = {loginAPI}
      goToRegistration = {goToRegistration}>
      </LoginScreenUI>
  );
};

export default LoginScreen;
