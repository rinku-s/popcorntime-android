/*
 *  file: AboutUI.js
 *  author: Rinku Ansari <raf122@uregina.ca>
 *  version: 0.1
 *  date-created: mar-25-2022
 *  last-modified: apr-10-2022
 */
import React from 'react';

import {SafeAreaView, Text,} from 'react-native';
import homestyle from '../styles/HomeStyle';
import {Colors} from '../helpers/Colors';
import detailsstyle from '../styles/DetailsStyle';

/**
       * AboutUI
       * Purpose: Define the overall look of the About screen
``*/
const AboutUI = ({description}) => {
  return (
  <SafeAreaView style={homestyle.safeareaview}>
   <Text style={[detailsstyle.summary, {margin: 15, color:Colors.primary, fontSize:14, fontWeight:"bold" }]}>{description} </Text>
   </SafeAreaView>
  );
};

export default AboutUI;
