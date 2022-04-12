/*
 *  file: SearchScreen.js
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
  Dimensions,
} from 'react-native';

import searchscreenstyle from '../styles/SearchScreenStyle';
import SearchUI from '../presentation/SearchUI';


  /**
       * SearchScreen
       * Purpose: Defines the container for the search screen of the app.
``*/
function SearchScreen({ navigation, route }) {
  const { searchStr } = route.params;
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [page, setPage] = useState(1);
  const [isListEnd, setIsListEnd] = useState(false);
  const [searchString, setsearchString] = useState('');
  const [likeState, setLikeState] = useState('white');
  const [resultCount, setResultCount] = useState(0);
  useEffect(() => getData(), []);
  const url = 'http://172.16.1.87:8000/api/movies/?format=json&title=';

  const [count, setCount] = useState(1);

  /**
   * navigateToScreen
   * Purpose: This function allows navigation from Details screen to any screen according to  the parameters.
   * Parameter(s):
   * <1> screen: The props for screen name to be called.
   * <2> item: The props for the item to be passed as props.
   * Precondition(s):N/A
   *
   * Returns: N/A
   *
   * Side effect:
   * <1> If the user clicks on the any of the movies in the recommendations list, this function navigates the user to the screen passed as parameter.
   * <2> else, do nothing.
   */
  const navigateToScreen = (item) => {
    navigation.navigate('Details', {
      item,
    });
  };

   /**
   * getData
   * Purpose: This function fetches the list of all movies that match the search string entered by user
   * Parameter(s): N/A
   *
   * Precondition(s):
   * <1> loading, isListEnd, dataSource, and url are defined and initialized.
   *
   * Returns: N/A
   *
   * Side effect:
   * <2> Fetches the list of all movies that match the search string entered by user
   */
  const getData = () => {
    if (!loading && !isListEnd) {
      setLoading(true);
      fetch(
        'http://172.16.1.87:8000/api/movies/?format=json&title=' +
          searchStr.trim() +
          '&page=' +
          page
      )
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);
          if (responseJson.results.length > 0) {
            setResultCount(responseJson.count);
            console.log('Result Length' + responseJson.count);
            setPage(page + 1);
            setDataSource([...dataSource, ...responseJson.results]);
            setLoading(false);
          } else {
            setIsListEnd(true);
            setLoading(false);
          }
        })
        .catch((error) => {
          console.error('Error' + error);
        });
    }
  };

  return (
    <SearchUI
      searchStr={searchStr}
      dataSource={dataSource}
      resultCount={resultCount}
      getData={getData}
      loading={loading}
      navigateToScreen={navigateToScreen}
    />
  );
}

export default SearchScreen;
