/*
 *  file: ListStyle.js
 *  author: Rinku Ansari <raf122@uregina.ca>
 *  version: 0.1
 *  date-created: mar-25-2022
 *  last-modified: apr-10-2022
 */
import {StyleSheet} from 'react-native';
import {Colors} from '../helpers/Colors';

/**
       * ListStyle
       * Purpose: Define the overall look of the lists on screen
``*/
const ListStyle = StyleSheet.create({
  itemView: {
    borderRadius: 20,
    margin: 2,
    padding: 5,
    backgroundColor: Colors.secondary,
    borderWidth:1,
    borderColor: Colors.backgroundColor,
  },

  title: {
    alignSelf: 'stretch',
    flex: 1,
    height: 100,
    margin: 15,
    justifyContent: 'center',
    color: Colors.primary,
  },
  safeAreaView:{
    backgroundColor:Colors.secondaryVariant,
    flex:1
  },

});

export default ListStyle;
