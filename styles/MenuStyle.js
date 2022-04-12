/*
 *  file: MenuStyle.js
 *  author: Rinku Ansari <raf122@uregina.ca>
 *  version: 0.1
 *  date-created: mar-25-2022
 *  last-modified: apr-10-2022
 */
import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../helpers/Colors';

/**
       * MenuStyle
       * Purpose: Define the overall look of the Menu screen
``*/
const MenuStyle = StyleSheet.create({
  menuoptionbg: {
    borderRadius: 10,
    margin: 2,
    padding: 5,
    backgroundColor: Colors.secondaryVariant,
    borderWidth: 2,
    borderColor: Colors.secondary,
  },

  menuoption: {
    fontSize: 16,
    textAlign: 'left',
    justifyContent: 'center',
    padding: 5,
  },
  logoutButton: {
    alignSelf: 'center',
    height: 60,
    width: Dimensions.get('window').width - 100,
    backgroundColor: Colors.primary,
    padding: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  menuheader: {
    flex: 1,
    fontSize: 16,
    textAlign: 'left',
    justifyContent: 'center',
    padding: 5,
    fontWeight: 'bold',
    color: Colors.primary,
    // borderRadius: 10,
    // borderWidth: 1,
  },
  menuvalue: {
    flex: 1,
    fontSize: 16,
    textAlign: 'left',
    justifyContent: 'center',
    padding: 5,
    color: Colors.primary,
    // alignItems: 'center',
    // borderRadius: 10,
    // borderWidth: 1,
    // borderColor: Colors.primaryVariant,
  },
  othermenuoptionbg: {
   // borderRadius: 10,
  //  margin: 2,
    padding: 5,
    backgroundColor: Colors.secondaryVariant,
 //   borderWidth: 2,
    borderColor: Colors.secondary,
    flex: 1,
    flexDirection: 'row',
    height: 60,
    maxHeight: 60,
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
   // borderColor: Colors.secondary,
    margin: 5,
    alignItems: 'flex-start',
  //  backgroundColor: Colors.secondaryVariant,
  },
});

export default MenuStyle;
