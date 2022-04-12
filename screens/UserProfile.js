/*
 *  file: UserProfile.js
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
  Pressable,
} from 'react-native';
import { TouchableOpacity as TouchableOpacityRNGH } from 'react-native-gesture-handler';
import homestyle from '../styles/HomeStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
import UserProfileUI from '../presentation/UserProfileUI'

  /**
       * UserProfile
       * Purpose: Define the container for the user menu screen of the app.
``*/
const UserProfile = ({ navigation }) => {
  const isFocused = useIsFocused;
  const [userId, setUserId] = useState(0);
 /**
   * useEffect
   * Purpose: this hook runs every time the screen is rendered. When the user navigates to the Menu page of the app, then get user ID.
   *
   * Parameter(s):
   * <1> navigation: the navigation prop that is passed to all the screens in the navigation stack.
   * <2> isFocused must be defined and initialized.
   * 
   * Precondition(s):
   * <1> navigation stack must be defined and initialized containing paths for both the screens involved in navigation in the stack. Navigation prop must be passed to the main function.
   * <3>  getUserDetails function must be defined and initialized.
   * Returns: N/A
   *
   * Side effect:
   * <1> if navigation value is changed i.e. each time the screen is rendered, useEffect sets userId of the user
   * <2> else, do nothing
   */
  React.useEffect(() => {
    AsyncStorage.getItem('userIdKey').then((value) => {
      setUserId(value);
    });
  }, [navigation, isFocused]);

   /**
   * navigateToScreen
   * Purpose: This function allows navigation from Watchlist screen to any screen according to  the parameters.
   * Parameter(s):
   * <1> screen: The props for screen name to be called.
   *
   * Precondition(s):
   * <1> N/A
   *
   * Returns: N/A
   *
   * Side effect:
   * <1> If the user clicks on the any of the options on the menu, this function navigates the user to the screen passed as parameter.
   * <2> else, do nothing.
   */ 
  const navigateToScreen = (screen) => {
     navigation.navigate(screen)
  }


   /**
   * logout
   * Purpose: This function logs the user out of their account and navigates them back to login screen.
   * Parameter(s):   N/A
   * 
   * Precondition(s): N/A
   *
   * Returns: N/A
   *
   * Side effect:
   * <1> If the user clicks on the any of the options on the menu, this function clears userId in async storage and navigates them back to login screen.
   * <2> else, do nothing.
   */ 
const logout = ()  => {
  setUserId(0)
  navigation.navigate("Login")
  ToastAndroid.show("Logout Successful", ToastAndroid.SHORT)
}
  return (
 <UserProfileUI
 navigateToScreen = {navigateToScreen}
 logout = {logout}/>
  );
};

export default UserProfile;
