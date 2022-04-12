/*
 *  file: UserProfileUI.js
 *  author: Rinku Ansari <raf122@uregina.ca>
 *  version: 0.1
 *  date-created: mar-25-2022
 *  last-modified: apr-10-2022
 */
import React from 'react';

import {Dimensions, SafeAreaView, Text, TouchableOpacity,} from 'react-native';
import liststyle from '../styles/ListStyle';
import menustyle from '../styles/MenuStyle';
import {Colors} from '../helpers/Colors';

/**
       * detailsstyle
       * Purpose: Define the overall look of the Menu screen
``*/
const UserProfileUI = ({navigateToScreen, logout}) => {
  const windowWidth = Dimensions.get('window').width;
  return (
   <SafeAreaView style={liststyle.SafeAreaView}>
      <TouchableOpacity style={menustyle.menuoptionbg}  onPress={() => navigateToScreen('UserDetails')}>
      <Text style = {menustyle.menuoption}>My Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={menustyle.menuoptionbg} onPress={() => navigateToScreen('FavoritesList')}>
      <Text style = {menustyle.menuoption}>Favorites</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={menustyle.menuoptionbg} onPress={() => navigateToScreen('Watchlist')}>
     <Text style = {menustyle.menuoption}>Watchlist</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={menustyle.menuoptionbg} onPress={() => navigateToScreen('About')}>
     <Text style = {menustyle.menuoption}>About</Text>
      </TouchableOpacity>
    <TouchableOpacity  style={menustyle.logoutButton} onPress={()=> logout()}>
     <Text style = {[menustyle.menuoption, {color: Colors.backgroundColor}]}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default UserProfileUI;
