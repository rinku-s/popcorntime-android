/*
 *  file: FavoritesList.js
 *  author: Rinku Ansari <raf122@uregina.ca>
 *  version: 0.1
 *  date-created: mar-25-2022
 *  last-modified: apr-10-2022
 */
import React, { useState, useEffect } from 'react';

import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
  Platform,
  Button,
  Pressable,
  ScrollView,
} from 'react-native';
import { TouchableOpacity as TouchableOpacityRNGH } from 'react-native-gesture-handler';
import homestyle from '../styles/HomeStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
import searchscreenstyle from '../styles/SearchScreenStyle';
import FavoritesUI from '../presentation/FavoritesUI'
  /**
       * FavoritesList
       * Purpose: Define the container for the favorites screen of the app.
``*/
const FavoritesList = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [isListEnd, setIsListEnd] = useState(false);
  const isFocused = useIsFocused;
  const [userId, setUserId] = useState(0);
  const [noOfFaves, setNoOfFaves] = useState(0);
  const [page, setPage] = useState(1);
  const moviesList = [];
  const moviesDataList = [];
  const [dataSource, setDataSource] = useState([]);

    /**
   * useEffect
   * Purpose: this hook runs every time the screen is rendered. When the user navigatesv to the Favorites screen, it fetches the user id from Async storage to be passed to the function getFavesList that calls the api to get all items in the user's Favorites.
   *
   * Parameter(s):
   * <1> navigation: the navigation prop that is passed to all the screens in the navigation stack.
   * <2> isFocused must be defined and initalized
   * Precondition(s):
   * <1> navigation stack must be defined and initialized containing paths for both the screens involved in navigation in the stack. Navigation prop must be passed to the main function.
   * <2> getFavesList function must be defined and initialized
   * <3> user Id must be stored in Async storage
   * Returns: N/A
   *
   * Side effect:
   * <1> if navigation value is changed i.e. each time the screen is rendered, useEffect gets userId and calls getFavesList function that fetches all movies in a user's Favorites.
   * <2> else, do nothing
   */
 React.useEffect(() => {
    console.log('inside useEffect');
    AsyncStorage.getItem('userIdKey').then((value) => {
      setUserId(value);
      // console.log('userId' + value);
      getFavesList(value);
    });
    console.log('Data source: ' + dataSource);
  }, [navigation, isFocused, dataSource]);

  /**
   * navigateToScreen
   * Purpose: This function allows navigation from Favorites screen to Details screen according to  the parameters.
   * Parameter(s):
   * <1> item: The props to pass to the screen being called.
   *
   * Precondition(s):
   * <1> N/A
   *
   * Returns: N/A
   *
   * Side effect:
   * <1> If the user clicks on the any of the movies displayed, this function navigates the user to the details screen for that movie.
   * <2> else, do nothing.
   */
  const navigateToScreen = (item) => {
    navigation.navigate('Details', {
      item,
    });
  };

   /**
   * getFavesList
   * Purpose: this function runs every time the screen is rendered. It calls the api to get all items in the user's favorites list.
   *
   * Parameter(s):
   * <1> userId must be defined and fetched from Async storage
   * <2> getMovieDetailsById must be defined and initialized
   * Precondition(s):
   * <1> user Id must be stored in Async storage
   * Returns: N/A
   *
   * Side effect:
   * <1> if navigation value is changed i.e. each time the screen is rendered, useEffect calls getFavesList function that fetches all movies in a user's watchlist. getMovieDetailsById is called for each movie in the watchlist to fetch details about the movie.
   * 
   * <2> else, show error
   */
  const getFavesList = async (user_id) => {
    console.log('Inside getFavesList');
    if (!loading && !isListEnd) {
      setLoading(true);
      await fetch('http://172.16.1.87:8000/favorites/?user_id=' + user_id)
        .then((response) => response.json())
        .then((responseJson) => {
          setNoOfFaves(responseJson.count);
          console.log('Count ' + setNoOfFaves(responseJson.count));
          if (responseJson.count > 0) {
            for (var i = 0; i < responseJson.count; i++) {
              moviesList.push(responseJson.results[i].movie);
              getMovieDetailsById(responseJson.results[i].movie);
            }
          }
          if (responseJson.results.length > 0) {
            setPage(page + 1);
            setLoading(false);
          } else {
            setIsListEnd(true);
            setLoading(false);
          }
        })
        .catch((error) => {
          console.error(error);
        });
        console.log("Movies Data List" + moviesDataList)

    }
  };

  /**
   * getMovieDetailsById
   * Purpose: this function runs every time the screen is rendered. It calls the api to get all items in the user's watchlist.
   *
   * Parameter(s):
   * <1> movie_id must be defined and fetched from Async storage
   * Precondition(s): N/A
   * Returns: N/A
   *
   * Side effect:
   * <1> if movie details for the movie id exist, then fetch the details and store in a list.
   * <2> else, show error
   */
  
  const getMovieDetailsById = async (movie_id) => {  
    console.log('Inside getMovieDetailsById : ' + movie_id);
    setLoading(true);
    await fetch('http://172.16.1.87:8000/api/movies/' + movie_id)
      .then((response) => response.json())
      .then((responseJson) => {
        moviesDataList.push(responseJson)
      })
      .catch((error) => {
        console.error(error);
      });
      setDataSource([...dataSource, ...moviesDataList]);
  };

  const getItem = (item) => {
   navigateToScreen(item)
  };

  return (
    <FavoritesUI
    dataSource = {dataSource}
    navigateToScreen = {navigateToScreen}
    getItem = {getItem}>
    </FavoritesUI>
  );
};

export default FavoritesList;
