/*
 *  file: RegisterScreen.js
 *  author: Rinku Ansari <raf122@uregina.ca>
 *  version: 0.1
 *  date-created: mar-25-2022
 *  last-modified: apr-10-2022
 */
import React, {useState} from 'react';

import {Keyboard, ToastAndroid,} from 'react-native';
import RegisterUI from '../presentation/RegisterUI';

/**
       * RegisterScreen
       * Purpose: Define the container for the register screen of the app.
``*/
const RegisterScreen = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [emailAddress, setEmailAddress] = useState('');
  const [birthDate, setBirthDate] = useState(new Date());
  const [response, setResponse] = useState('');
  const [open, setOpen] = useState(false)

   /**
   * registerAPI
   * Purpose: This function takes user input for all four parameters mentioned below and creates a user account if there are no erors
   * Parameter(s):
   * <1> userName: user name entered by user
   * <2> emailAddress: email entered by user
   * <3> passWord: password entered by user
   * <4> birthDate: birth date entered by user
   * Precondition(s):N/A
   *
   * Returns: N/A
   *
   * Side effect:
   * <1> If the user clicks on the register button after entering all values and the values are correct and an account with the same username and id does not exis, then create an account.
   * <2> else, display error message.
   */
  const registerAPI = (userName, emailAddress, passWord, birthDate) => {
    setLoading(true);
    Keyboard.dismiss;
    console.log(
      'Inside register API with ',
      userName,
      ' ',
      passWord,
      ' ',
      emailAddress,
      ' ',
      birthDate
    );

    var Exp = /^[0-9a-z]+$/;   //alphanumeric, no special characters
    if (!userName || userName=="") {
      alert("Username cannot be empty")
    }
    else if (Exp.test(userName)) {
        alert("Username must be alphanumeric")
    }
    if (userName && passWord && emailAddress && birthDate) {
      userName = userName.toLowerCase();
      userName = userName.trim();
      emailAddress = emailAddress.toLowerCase();
      emailAddress = emailAddress.trim();
      fetch('http://172.16.1.87:8000/users/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: userName,
          email: emailAddress,
          password: passWord,
          birth_date: birthDate,
        }),
      })
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.status == 'success') {
            ToastAndroid.show('Registration successful!', ToastAndroid.SHORT);
            navigation.navigate('Login');
          } else if (responseJson.status == 'error')
            ToastAndroid.show(response.errors, ToastAndroid.SHORT);

          setLoading(false);
        })
        .catch((error) => {
          ToastAndroid.show('Error:', ToastAndroid.SHORT);
          setLoading(false);
        });
    }
  };

  return (
    <RegisterUI
      userName={userName}
      setUserName={setUserName}
      emailAddress={emailAddress}
      setEmailAddress={setEmailAddress}
      birthDate={birthDate}
      setBirthDate={setBirthDate}
      password={password}
      setPassword={setPassword}
      registerAPI={registerAPI}>
      </RegisterUI>
  );
};

export default RegisterScreen;
