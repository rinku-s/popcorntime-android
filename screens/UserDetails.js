import React, { useState, useEffect } from 'react';

import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
/*
 *  file: UserDetails.js
 *  author: Rinku Ansari <raf122@uregina.ca>
 *  version: 0.1
 *  date-created: mar-25-2022
 *  last-modified: apr-10-2022
 */
  ActivityIndicator,
  Image,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
  Platform,
  Button,
} from 'react-native';
import { TouchableOpacity as TouchableOpacityRNGH } from 'react-native-gesture-handler';
import homestyle from '../styles/HomeStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
import UserDetailsUI from '../presentation/UserDetailsUI';


  /**
       * UserDetails
       * Purpose: Define the container for the user profile screen of the app.
``*/
const UserDetails = ({navigation}) => {

const [loading, setLoading] = useState(false)
const [userId, setUserId] = useState(0)
const [userName, setUserName] = useState(false)
const [emailAddress, setEmailAddress] = useState("")
const [dateOfBirth, setDateOfBirth] = useState("")
const isFocused = useIsFocused
  /**
   * useEffect
   * Purpose: this hook runs every time the screen is rendered. When the user navigates to the Profile page of the app, then call a function to get user details by user ID.
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
   * <1> if navigation value is changed i.e. each time the screen is rendered, useEffect sets userId and passes it to getUserDetails to fetch all details of the user for display.
   * <2> else, do nothing
   */

React.useEffect(()=>{
    AsyncStorage.getItem('userIdKey').then((value) => {
       setUserId(value);
       getUserDetails(value)
    });
  }, [navigation, isFocused])


  /**
   * getUserDetails
   * Purpose: this function runs every time the screen is rendered. When the user navigates to the Profile page of the app, then call this function to get user details by user ID  from the database.
   *
   * Parameter(s):
   * <1> userId: user id of the user fetched from async storage
   * 
   * Precondition(s): N/A
   * 
   * Returns: N/A
   *
   * Side effect:
   * <1> if navigation value is changed i.e. each time the screen is rendered, useEffect sets userId and passes it to getUserDetails to fetch all details of the user for display.
   * <2> else, do nothing
   */
const getUserDetails = (userId) => {
      if(!loading)
      setLoading(true);
      console.log(userId)
      fetch(
        'http://172.16.1.87:8000/users/' +  userId +  '/')
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);
        setUserName(responseJson.username)
        setEmailAddress(responseJson.email)
        setDateOfBirth(responseJson.birth_date)
        })
        .catch((error) => {
          console.error('Error' + error);
        });
}

  return(
 <UserDetailsUI
 userName = {userName}
 emailAddress = {emailAddress}
 dateOfBirth = {dateOfBirth}
 />
  );
}

export default UserDetails;