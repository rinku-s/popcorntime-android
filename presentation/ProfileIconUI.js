/*
 *  file: ProfileIconUI.js
 *  author: Rinku Ansari <raf122@uregina.ca>
 *  version: 0.1
 *  date-created: mar-25-2022
 *  last-modified: apr-10-2022
 */
import React from 'react';

import {Image, TouchableOpacity,} from 'react-native';
import homestyle from '../styles/HomeStyle';
import {Colors} from '../helpers/Colors';
//import {navigateToScreen} from '../helpers/globalVariables';
/**
       * ProfileIconUI
       * Purpose: Define the overall look of the Profile Icon of the header
``*/
const ProfileIconUI = ({ navigateToScreen }) => {
  return (
    <TouchableOpacity onPress={() => navigateToScreen('UserProfile' )}>
      <Image
        source={require('../assets/user-icon.png')}
        style={homestyle.profileIcon}
        tintColor={Colors.backgroundColor}
      />
    </TouchableOpacity>
  );
};

export default ProfileIconUI;
