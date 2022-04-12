/*
 *  file: LoginStyle.js
 *  author: Rinku Ansari <raf122@uregina.ca>
 *  version: 0.1
 *  date-created: mar-25-2022
 *  last-modified: apr-10-2022
 */
import {StyleSheet} from 'react-native';
import {Colors} from '../helpers/Colors';

/**
       * loginstyle
       * Purpose: Define the overall look of the Login screen
``*/
const loginstyle = StyleSheet.create({

  keyboardavoidingview:{
   flex: 1 ,
   backgroundColor: Colors.backgroundColor,
  },
  LoginContainer: {
    flex: 0.5,
    alignItems: 'center',
    padding: 5,
    margin: 5,
    backgroundColor: Colors.backgroundColor,
  },

  tinyLogo: {
    height: 150, //200
    width: 150, //350
    justifyContent: 'center',
    alignItems: 'center',
  },

  tinyLogoContainer: {
    height: 150, //200
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    backgroundColor: Colors.backgroundColor,
  },

  TextInputStyle: {
    height: 60,
    padding: 20,
    margin: 5,
    alignItems: 'flex-start',
    width: 300,
    borderWidth: 2,
    borderColor: Colors.secondary,
    borderRadius: 8,
    backgroundColor: Colors.secondaryVariant,
  },

  loginButton: {
    height: 60,
    width: 300,
    backgroundColor: Colors.primary,
    padding: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },

  LoginButtonTextStyle: {
    color: Colors.backgroundColor,
  },

  registerButton: {
    height: 60,
    width: 300,
    backgroundColor: Colors.secondary,
    padding: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});

export default loginstyle;
