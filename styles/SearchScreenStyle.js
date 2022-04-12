/*
 *  file: SearchScreenStyle.js
 *  author: Rinku Ansari <raf122@uregina.ca>
 *  version: 0.1
 *  date-created: mar-25-2022
 *  last-modified: apr-10-2022
 */
import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../helpers/Colors'

/**
       * searchscreenstyle
       * Purpose: Define the overall look of the Search Screen screen
``*/
const searchscreenstyle = StyleSheet.create({
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  GridViewContainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    width: Dimensions.get('window').width / 3 - 10,
    margin: 5,
    marginRight: 5,
    backgroundColor: '#7B1FA2',
  },
  searchResultText: {
    fontSize: 18,
    color: Colors.primary
  },
});

export default searchscreenstyle;
