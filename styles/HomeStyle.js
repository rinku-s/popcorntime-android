/*
 *  file: HomeStyle.js
 *  author: Rinku Ansari <raf122@uregina.ca>
 *  version: 0.1
 *  date-created: mar-25-2022
 *  last-modified: apr-10-2022
 */
import {Dimensions, StyleSheet,} from 'react-native';
import {Colors} from '../helpers/Colors';

/**
       * homestyle
       * Purpose: Define the overall look of the homestyle screen
``*/
const homestyle = StyleSheet.create({
  keyboardavoidingview: { flex: 1, backgroundColor: Colors.secondaryVariant },
  safeareaview: { flex: 1, backgroundColor: Colors.secondaryVariant },
  searchbarcontainer: { flex: 0.1, flexDirection: 'row', marginBottom: 0.02 },
  profileIcon: { width: 35, height: 35, marginRight: 10 },
  GridViewContainer: {
//    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    width: Dimensions.get('window').width / 3 - 10,
    margin: 5,
    backgroundColor: Colors.secondaryVariant,
  },
  poster: {
    alignSelf: 'stretch',
    flex: 1,
    height: 100,
    borderRadius: 5,
  },
  GridViewTextLayout: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    color: '#fff',
    padding: 10,
  },
  TextInputStyle: {
    flex: 6,
    paddingLeft: 20,
    marginRight: 5,
    marginLeft: 5,
    borderColor: Colors.secondary,
    borderWidth:1,
    backgroundColor: Colors.backgroundColor,
    marginTop: 5,
    borderRadius: 5,
  },
  // TextInputStyle: {
  //   height :60,
  //      paddingLeft: 20,
  //  // borderColor: '#009688',
  //  // backgroundColor: '#FFFFFF',
  //   // marginTop:5,
  //   // marginBottom:10,
  //   borderWidth: 2,
  //   borderColor: Colors.secondary,
  //   borderRadius: 8,
  //   backgroundColor: Colors.secondaryVariant,
  //   marginLeft:5,
  // },

  // SearchButton: {
  //   flex: 1,
  //   backgroundColor: Colors.primaryVariant,
  //   justifyContent:"center",
  //   alignItems:"center",
  //   marginTop:5,
  //   marginBottom:150,
  //   borderRadius: 5,
  //   marginRight:5,
  //   borderColor: Colors.secondaryVariant,
  //   marginLeft: 5,
  // },
  title:
    {
            position: 'absolute',
            justifyContent: 'flex-end',
            bottom: 0,
            textAlign: 'center',
            paddingBottom: 5,
            color: 'white',
            adjustsFontSizeToFit: true,
            textBreakStrategy: 'simple',
            numberOfLines: 3,
            ellipsizeMode: 'tail',
            textShadowColor: 'black',
            textShadowOffset: { width: 5, height: 5 },
            textShadowRadius: 20,
  },
  itemSeparator:{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
  },
  SearchButton: {
    flex: 1,
    //  flexDirection: 'column',
    // height: 40,
    // borderWidth: 1,
    //    margin: 5,
    marginTop: 5,
    marginRight: 5,
    borderColor: Colors.secondary,
    borderWidth:1,
    backgroundColor: Colors.primaryVariant,
    justifyContent: 'center',
    borderRadius: 5,
  },
  FlatListLayout: {
    flex: 0.9,
    backgroundColor: Colors.secondaryVariant,
  },

  LikeButton: {
    height: 10,
    width: 10,
    position: 'absolute',
    top: 0,
    right: 0,
    marginRight: 20,
  },

  logo: {
    alignItems: 'center',
    width: 30,
    height: 40,
    //   padding:10,
    margin: 5,
    // position: 'absolute',
  },
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  TabLayout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  LikeButtonIcon: {
    alignItems: 'center',
    width: 30,
    height: 50,
    backgroundColor: 'white',
  },

  LikedButtonIcon: {
    alignItems: 'center',
    width: 30,
    height: 50,
    tintColor: 'red',
  },
    searchResultText: {
    fontSize: 18,
    color: Colors.primary

  },
});

export default homestyle;
