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
import AboutUI from '../presentation/AboutUI'

const About = ({ navigation }) => {
  const description = "PopcornTime is a free, cross-platform mobile application for Android and iOS which can be used to discover, manage, organize and share movies that users enjoy. Built as a training project to learn React Native, it is intended for non-commercial use only." +
"\n\nIt provide a user-friendly, intuitive interface to its users to manage their catalog of movies. A user can start by registering for a profile or an account in the app. It provides a seamless experience in terms of application usage to browse through the list of movies sorted by popularity and view details about the movie such as the plot summary, runtime and release year of the movie. A user can organize the movies into Favorites and Watchlist. It also allows the users to view similar titles below for the movie that they are interested in" +"\n\nThis software is freely distributable under the MIT License. \n\n Source code found at \nhttps://github.com/rinku-s/popcorntime-android/\n\n\n Copyright (c) 2022 rinku-s"
  // const isFocused = useIsFocused;
  // const [userId, setUserId] = useState(0);
  
  // const navigateToScreen = (screen) => {
  //    navigation.navigate(screen)
  // }
  // React.useEffect(() => {
  //   // AsyncStorage.getItem('userIdKey').then((value) => {
  //   //   setUserId(value);
  //   });
  // }, [navigation, isFocused]);

// const logout = ()  => {
//   setUserId(0)
//   navigation.navigate("Login")
//   ToastAndroid.show("Logout Successful", ToastAndroid.SHORT)
// }
  return (
 <AboutUI
    description = {description}
// navigateToScreen = {navigateToScreen}
// logout = {logout}
 />
  );
};

export default About;
