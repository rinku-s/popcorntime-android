/*
 *  file: AppIconUI.js
 *  author: Rinku Ansari <raf122@uregina.ca>
 *  version: 0.1
 *  date-created: mar-25-2022
 *  last-modified: apr-10-2022
 */
import React from 'react';

import {Image,} from 'react-native';
import homestyle from '../styles/HomeStyle';

/**
       * AppIconUI
       * Purpose: Define the overall look of the app icon screen
``*/
const AppIconUI = () => {
  return (
      <Image
        source={require('../assets/app-icon.png')}
        style={[homestyle.profileIcon, {marginLeft:10, }]}
     //   tintColor={Colors.backgroundColor}
      />
  );
};

export default AppIconUI;
