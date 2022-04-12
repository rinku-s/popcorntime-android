/*
 *  file: RegisterUI.js
 *  author: Rinku Ansari <raf122@uregina.ca>
 *  version: 0.1
 *  date-created: mar-25-2022
 *  last-modified: apr-10-2022
 */
import React from 'react';

import {Keyboard, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View,} from 'react-native';
//import DatePicker from 'react-native-date-picker';
import DatePicker from 'react-native-datepicker';
import menustyle from '../styles/MenuStyle';
import {Colors} from '../helpers/Colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

/**
       * RegisterUI
       * Purpose: Define the overall look of the Register screen
``*/
const RegisterUI = ({
  userName,
  setUserName,
  emailAddress,
  setEmailAddress,
  birthDate,
  setBirthDate,
  password,
  setPassword,
  registerAPI,
}) => {
  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps={'always'}
      contentContainerStyle={{
        flexGrow: 1, // this will fix scrollview scroll issue by passing parent view width and height to it
      }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{ flex: 0.5, alignItems: 'center', padding: 10, margin: 10 }}>
          <View style={[menustyle.othermenuoptionbg]}>
            <Text style={[menustyle.menuheader]}>Username</Text>
            <TextInput
              style={[
                menustyle.menuoptionbg,
                {
                  flex: 1,
                  paddingLeft: 5,
                  justifyContent: 'center',
                  backgroundColor: Colors.backgroundColor,
                },
              ]}
              // onSubmitEditing={(event) => loginAPI(event.nativeEvent.text)}
              onChangeText={(text) => setUserName(text)} //searchFilterFunction(text)
              value={userName}
              clearButtonMode="always"
              underlineColorAndroid="transparent"
              //   placeholder="Enter username"
            />
          </View>
          <View style={menustyle.othermenuoptionbg}>
            <Text style={menustyle.menuheader}>Email</Text>
            <TextInput
              style={[
                menustyle.menuoptionbg,
                {
                  flex: 1,
                  paddingLeft: 5,
                  justifyContent: 'center',
                  backgroundColor: Colors.backgroundColor,
                },
              ]} // onSubmitEditing={(event) => loginAPI(event.nativeEvent.text)}
              onChangeText={(text) => setEmailAddress(text)} //searchFilterFunction(text)
              value={emailAddress}
              clearButtonMode="always"
              underlineColorAndroid="transparent"
              // placeholder="Enter email address"
            />
          </View>
          <View style={menustyle.othermenuoptionbg}>
            <Text style={menustyle.menuheader}>Password</Text>
            <TextInput
              style={[
                menustyle.menuoptionbg,
                {
                  flex: 1,
                  paddingLeft: 5,
                  justifyContent: 'center',
                  backgroundColor: Colors.backgroundColor,
                },
              ]}
              // onSubmitEditing={(event) => loginAPI(event.nativeEvent.text)}
              onChangeText={(text) => setPassword(text)} //searchFilterFunction(text)
              value={password}
              clearButtonMode="always"
              secureTextEntry={true}
              underlineColorAndroid="transparent"
              //   placeholder="Enter password"
            />
          </View>
          <View style={menustyle.othermenuoptionbg}>
            <Text style={menustyle.menuheader}>Date of Birth</Text>
            <DatePicker
              style={[
                menustyle.menuoptionbg,
                {
                  flex: 1,
                  paddingLeft: 5,
                  justifyContent: 'center',
                  backgroundColor: Colors.backgroundColor,
                },
              ]}
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 36,
                  borderWidth:0,
                },
              }}
              minDate={new Date("1922-01-01")}
              maxDate={new Date()}
              date={birthDate}
              onDateChange={(date) => {
                setBirthDate(date);
              }}
            />
          </View>
          <TouchableOpacity
            style={menustyle.logoutButton}
            onPress={() =>
              registerAPI(userName, emailAddress, password, birthDate)
            }>
            <Text style={[menustyle.menuoption, {color: Colors.backgroundColor}]}>Register</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};

export default RegisterUI;
