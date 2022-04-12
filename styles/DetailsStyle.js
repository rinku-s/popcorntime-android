/*
 *  file: DetailsStyle.js
 *  author: Rinku Ansari <raf122@uregina.ca>
 *  version: 0.1
 *  date-created: mar-25-2022
 *  last-modified: apr-10-2022
 */

import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../helpers/Colors';

/**
       * detailsstyle
       * Purpose: Define the overall look of the Details screen
``*/
const detailsstyle = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.secondaryVariant,
  },
  backdrop: {
    flex: 1,
    borderColor: Colors.secondaryVariant,
   // borderTopWidth: 2,
  //  borderBottomWidth: 2,
    borderRadius: 20,
  },
  backdropposter: {
    alignSelf: 'stretch',
    flex: 1,
    height: 100,
    width: Dimensions.get("window").width,
    borderRadius: 20,
    },
  recommended: {
    alignSelf: 'stretch',
    flex: 1,
    width: 100,
    height: 150,
    margin: 5,
    borderRadius:5,
  },

  similarMovieTitle: {
    fontSize: 18,
    paddingLeft: 5,
    fontWeight:"bold",
    color: Colors.primary,
    borderTopColor: Colors.secondary,
  },

  movieTitle: {
    fontSize: 20,
    color: Colors.primary,
    textAlign: 'left',
    justifyContent: 'flex-start',
    fontFamily: 'Mono',
    fontWeight: 'bold',
    borderRadius: 4,
    borderColor: 'black',
    // position: 'absolute',
    margin: 5,
    paddingLeft: 5,
  },

  subtitle: {
    fontSize: 14,
    // paddingLeft: 15,
    alignText: 'left',
    justifyContent: 'flex-start',
    // backgroundColor: Colors.primaryVariant,
    // borderWidth: 1,
    // borderColor: Colors.accent,
    //  borderRadius: 10,
    margin: 5,
    paddingLeft: 5,
    color: Colors.primaryVariant,
  },
  genre: {
    fontSize: 12,
    padding: 5,
    alignText: 'center',
    backgroundColor: Colors.primaryVariant,
    borderWidth: 1,
    borderColor: Colors.secondaryVariant,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
    color: Colors.backgroundColor,
  },
  title: {
    position: 'absolute',
    bottom: 20,
    left: 15,
    paddingLeft: 15,
    textAlign: 'center',
    justifyContent: 'flex-start',
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  tagline: {
    position: 'absolute',
    bottom: 5,
    left: 15,
    paddingLeft: 15,
    textAlign: 'center',
    justifyContent: 'flex-start',
    fontSize: 10,
    color: 'white',
    fontWeight: 'normal',
  },
  favelistbutton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    borderColor: Colors.backgroundColor,
    borderWidth: 1,
    backgroundColor: Colors.secondary,
    borderRadius: 400,
    margin: 5,
  },
  watchlistbutton: {
    height: 40,
    width: 40,
    alignItems: 'center',
    borderWidth: 1,
  //  borderColor: Colors.backgroundColor,
        borderColor: Colors.secondary,
    backgroundColor: Colors.primaryVariant,
   // backgroundColor: Colors.secondary,
    borderRadius: 400,
    margin: 5,
  },
  summary: {
    textAlign: 'justify',
    justifyContent: 'flex-start',
    fontSize: 12,
    padding: 15,
    // color: Colors.backgroundColor,
  },
});

export default detailsstyle;
