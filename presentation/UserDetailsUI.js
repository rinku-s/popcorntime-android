/*
 *  file: UserDetailsUI.js
 *  author: Rinku Ansari <raf122@uregina.ca>
 *  version: 0.1
 *  date-created: mar-25-2022
 *  last-modified: apr-10-2022
 */
import React from 'react';


import {Text, View,} from 'react-native';
import menustyle from '../styles/MenuStyle';
import {Colors} from '../helpers/Colors';

/**
       * UserDetailsUI
       * Purpose: Define the overall look of the Profile screen
``*/
const UserDetailsUI = ({ userName, emailAddress, dateOfBirth }) => {
  return (
    <View style={{flex:1}}>
  <View style= {[menustyle.menuoptionbg,{flex:1, flexDirection: "row", height:60, maxHeight:60, justifyContent:"center", borderRadius:10, borderWidth: 1, borderColor: Colors.secondary, margin:5, alignItems:"flex-start", backgroundColor: Colors.secondaryVariant}]}>
  <Text style = {menustyle.menuheader}>Username</Text>
  <Text style = {menustyle.menuvalue}>{userName}</Text>
  </View>
  <View style= {[menustyle.menuoptionbg,{flex:1, flexDirection: "row", height:60, maxHeight:80, justifyContent:"center", borderRadius:10, borderWidth: 1, borderColor: Colors.secondary, margin:5, alignItems:"flex-start",  backgroundColor: Colors.secondaryVariant}]}>
  <Text style = {menustyle.menuheader}>Email</Text>
  <Text style = {menustyle.menuvalue}>{emailAddress}</Text>
  </View>
  <View style= {[menustyle.menuoptionbg,{flex:1, flexDirection: "row", height:60, maxHeight:60, borderRadius:10, borderWidth: 1, borderColor: Colors.secondary, margin:5, alignItems:"flex-start",  backgroundColor: Colors.secondaryVariant}]}>
  <Text style = {menustyle.menuheader}>Date of Birth</Text>
  <Text style = {menustyle.menuvalue}>{dateOfBirth}</Text>
  </View>
  <View style = {{flex:3}}></View>
  </View>
  );
};

export default UserDetailsUI;
