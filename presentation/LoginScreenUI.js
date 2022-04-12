/*
 *  file: LoginScreenUI.js
 *  author: Rinku Ansari <raf122@uregina.ca>
 *  version: 0.1
 *  date-created: mar-25-2022
 *  last-modified: apr-10-2022
 */
import React from 'react';

import {Image, Keyboard, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View,} from 'react-native';
import loginstyle from '../styles/LoginStyle';
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {Colors} from '../helpers/Colors';

/**
       * LoginScreenUI
       * Purpose: Define the overall look of the LoginScreen screen
``*/
const LoginScreenUI = ({ userName, password, setUserName, setPassword , loginAPI, goToRegistration}) => {
  return (
          <KeyboardAwareScrollView
        keyboardShouldPersistTaps={'always'}
        contentContainerStyle={{
          flexGrow: 1 // this will fix scrollview scroll issue by passing parent view width and height to it
        }}
                style={loginstyle.keyboardavoidingview}
      >
      <View style={loginstyle.tinyLogoContainer}>
      <Image
        style={loginstyle.tinyLogo}
        source={require('../assets/app-icon.png')}
      />
      </View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={loginstyle.LoginContainer}>
          <TextInput
            style={loginstyle.TextInputStyle}
            // onSubmitEditing={(event) => loginAPI(event.nativeEvent.text)}
            onChangeText={(text) => setUserName(text)}
            value={userName}
            clearButtonMode="always"
            underlineColorAndroid="transparent"
            placeholder="Username"
          />
          <TextInput
            style={loginstyle.TextInputStyle}
            // onSubmitEditing={(event) => loginAPI(event.nativeEvent.text)}
            onChangeText={(text) => setPassword(text)}
            value={password}
            clearButtonMode="always"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            placeholder="Password"
          />
          <TouchableOpacity
            style={loginstyle.loginButton}
            onPress={() => loginAPI(userName, password)}>
            <Text style ={loginstyle.LoginButtonTextStyle}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
             style={loginstyle.registerButton}
            onPress={() => goToRegistration()}>
            <Text style={[loginstyle.LoginButtonTextStyle, {color:Colors.primary}]}>Register</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
 )
}

export default LoginScreenUI;
