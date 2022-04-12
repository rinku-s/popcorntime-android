/*
 *  file: Home.js
 *  author: Rinku Ansari <raf122@uregina.ca>
 *  version: 0.1
 *  date-created: mar-25-2022
 *  last-modified: apr-10-2022
 */

import React, {useState} from 'react';

import {Platform, ToastAndroid,} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
import Constants from 'expo-constants';
import {Colors} from '../helpers/Colors';
import HomeUI from '../presentation/HomeUI';
import ProfileIconUI from '../presentation/ProfileIconUI';
import AppIconUI from '../presentation/AppIconUI';

/**
       * Home
       * Purpose: Define the container for the home screen of the app.
``*/
const Home = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [page, setPage] = useState(1);
  const [isListEnd, setIsListEnd] = useState(false);
  const [searchString, setsearchString] = useState('');
  const [likeState, setLikeState] = useState('white');
  const isFocused = useIsFocused();
  const [userId, setUserId] = useState('');
  const [resultCount, setResultCount] = useState(0);
  const [url, setUrl] = useState('http://172.16.1.87:8000/movies/?format=json&page=');

  /**
   * useEffect
   * Purpose: this hook runs every time the screen is rendered. When the user navigates to the Home page of the app, then call a function to get movie details by API calls to be displayed on the page.
   *
   * Parameter(s):
   * <1> navigation: the navigation prop that is passed to all the screens in the navigation stack.
   * <2> isFocused must be defined and initialized.
   *
   * Precondition(s):
   * <1> navigation stack must be defined and initialized containing paths for both the screens involved in navigation in the stack. Navigation prop must be passed to the main function.
   * <3>  getMoviesDataFromAPI function must be defined and initialized.
   * Returns: N/A
   *
   * Side effect:
   * <1> if navigation value is changed i.e. each time the screen is rendered, useEffect sets userName and password fields to empty strings which resets the value of their respective text inputs.
   * <2> else, do nothing
   */
  React.useEffect(() =>
  getMoviesDataFromAPI(url), []);
  React.useEffect(() => {
    AsyncStorage.getItem('userIdKey').then((value) => {
      setUserId(value);
    });
  }, [navigation, isFocused]);

  /**
   * useLayoutEffect
   * Purpose: this hook defines the header for this page including app icon displayed at the left and the profile icon at the right in the header on render.
   *
   * Parameter(s):
   * <1> navigation: the navigation prop that is passed to all the screens in the navigation stack.
   *
   * Precondition(s):
   * <1> navigation stack must be defined and initialized containing paths for both the screens involved in navigation in the stack. Navigation parameter must be passed to the main function.
   * <2> colors are defined and iniatialized.
   * <3> AppUIIcon must be defined and imported.
   * <4> navigateToScreen function must be defined and initialized.
   * <5> ProfileIconUI must be defined and imported.
   * Returns: N/A
   *
   * Side effect:
   * <1> if navigation changes, then customize the app bar or header to display profile icon on the right and the icon of the app on the left.
   * <2> When the profile icon is clicked go to User Menu screen.
   * <3> else, do nothing
   */
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerLeft: () => (
        <AppIconUI/>
    ),
      headerTitleAlign: 'left',
      headerRight: () => (
        <ProfileIconUI navigateToScreen={navigateToScreen} />
      ),
      headerStyle: {
        backgroundColor: Colors.primaryVariant,
        paddingTop: Constants.statusBarHeight,
        paddingLeft: 15,
      },
      headerTintColor: Colors.backgroundColor,
    });
  }, [navigation]);


   /**
   * navigateToScreen
   * Purpose: This function allows navigation from Home screen to any other screen according to  the parameters.
   * Parameter(s):
   * <1> screen: The name of the screen to navigate to.
   * <2> item: The props to pass to the screen being called.
   *
   * Precondition(s):
   * <1> N/A
   *
   * Returns: N/A
   *
   * Side effect:
   * <1> If the user clicks on the any of the movies displayed, this function navigates the user to the details screen for that movie.
   * <2> Else if the user clicks on the search icon, this function navigates the user to the search screen for the search string entered.
   * <2> else, do nothing.
   */
  const navigateToScreen = (screen, item) => {
    navigation.navigate(screen, {
      item,
    });
  };

   /**
   * getMoviesDataFromAPI
   * Purpose: This function fetches the list of all movies from the database ordered by popularity parameter and stores the response in dataSource variable which is fed to Flatlist for display.
   * Parameter(s):
   * <1> url: The url of the api for movies data..
   * <2> item: The props to pass to the screen being called.
   *
   * Precondition(s):
   * <1> loading, isListEnd, dataSource, and url are defined and initialized.
   *
   * Returns: N/A
   *
   * Side effect:
   * <1> If the navigation moves to home screen, this function fetches the data for all movies in the database page by page. Each page has been configured to have 24 movies on the api side and the data is fetched until the last page is reached. This data is stored in the dataSource variable.
   * <2> Else if the user clicks on the search icon, this function navigates the user to the search screen for the search string entered.
   * <2> else, do nothing.
   */
  const getMoviesDataFromAPI = (url) => {
    //console.log(page);
    if (!loading && !isListEnd) {
      //console.log('getMoviesDataFromAPI', + url);
      setLoading(true);
      // Service to get the data from the server to render
      fetch(url + page)
        // Sending the currect page with get request
        .then((response) => response.json())
        .then((responseJson) => {
          // Successful response from the API Call
          console.log(responseJson);
          setResultCount(responseJson.count);
          if (responseJson.results.length > 0) {
            setPage(page + 1);
            // After the response increasing the page
            console.log(responseJson);
            setDataSource([...dataSource, ...responseJson.results]);
            setLoading(false);
          } else {
            setIsListEnd(true);
            setLoading(false);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

   /**
   * searchAPI
   * Purpose: This function takes the user input in the search text input box and navigates the user to the search screen for that string.
   * Parameter(s):
   * <1> userInput: The search string entered by user.
   *
   * Precondition(s):
   * <1> userInput, and navigation are defined and initialized.
   *
   * Returns: N/A
   *
   * Side effect:
   * <1> If the user enters data in the search text box and then clicks on the search button then searchAPI will navigate the user to the search screen with the search string passed as a prop.
   * <2> Else if the user clicks on the search button and no data is present in the search text input, this function displays a message to prompt the user to give input for search.
   * <2> else, do nothing.
   */
  const searchAPI = (userInput) => {
    if (userInput != '') {
      if (Platform.OS === 'android')
        // ToastAndroid.show(userInput, ToastAndroid.SHORT);
       // ToastAndroid.show(userInput, ToastAndroid.SHORT);
      navigation.navigate('SearchScreen', {
        searchStr: userInput,
      });
    } else if (Platform.OS === 'android') {
      ToastAndroid.show('Please enter a movie name', ToastAndroid.SHORT);
    }
  };

  return (
    <HomeUI
      dataSource={dataSource}
      searchString={searchString}
      setsearchString={setsearchString}
      searchAPI={searchAPI}
      resultCount={resultCount}
      getMoviesDataFromAPI={getMoviesDataFromAPI}
      url={url}
      loading={loading}
      navigateToScreen={navigateToScreen}></HomeUI>
  );
};

export default Home;
