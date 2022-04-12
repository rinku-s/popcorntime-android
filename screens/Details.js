/*
 *  file: Details.js
 *  author: Rinku Ansari <raf122@uregina.ca>
 *  version: 0.1
 *  date-created: mar-25-2022
 *  last-modified: apr-10-2022
 */
import React, { useState, useEffect } from 'react';
import { getMovieDetailById } from './FavoritesList';
//import GlobalFunc from '../helpers/globalFunc';

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
  ImageBackground,
  ScrollView,
} from 'react-native';
import searchscreenstyle from '../styles/SearchScreenStyle';

import Icon from 'react-native-vector-icons/FontAwesome';
import detailsstyle from '../styles/DetailsStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
import homestyle from '../styles/HomeStyle';
import FavoritesList from './FavoritesList';
import DetailsUI from '../presentation/DetailsUI';
import Constants from 'expo-constants';
import { Colors } from '../helpers/Colors';
import ProfileIconUI from '../presentation/ProfileIconUI';
/**
       * Details
       * Purpose: Define the container for the details screen of the app.
``*/
function Details({ navigation, route }) {
  const { item } = route.params;
  const [watchListState, setWatchListState] = useState('');
  const [faveListState, setFaveListState] = useState('');
  const isFocused = useIsFocused();
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState('');
  const [movieId, setMovieId] = useState(0);
  const [faveId, setFaveId] = useState(0);
  const [watchlistId, setWatchlistId] = useState(0);
  const [resultCount, setResultCount] = useState(0);
  const [recordExists, setRecordExists] = useState(false);
  const [watchlistExists, setWatchListExists] = useState(false);
  const [recMovieList, setRecMovieList] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  const [movie1, setMovie1] = useState('');
  const [movie1Data, setMovie1Data] = useState('');
  const [movie2, setMovie2] = useState('');
  const [movie2Data, setMovie2Data] = useState('');
  const [movie3, setMovie3] = useState('');
  const [movie3Data, setMovie3Data] = useState('');
  const [movie4, setMovie4] = useState('');
  const [movie4Data, setMovie4Data] = useState('');
  const [movie5, setMovie5] = useState('');
  const [movie5Data, setMovie5Data] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const moviesList = [];

  /**
   * useEffect
   * Purpose: this hook runs every time the screen is rendered. When the user navigates to the Details page of the app, then movie recommendations, states of favorites and watchlist icons are fetched from the database. Data processing for rendering is performed.
   *
   * Parameter(s):
   * <1> navigation: the navigation prop that is passed to all the screens in the navigation stack.
   * <2> isFocused must be defined and initialized
   * <3> userId must be defined and fetched from Async storage for getting favorites and watchlist
   * <4> getRecommendations, addToFaveListAPI, addToWatchListAPI, checkFaveList, checkWatchList must be defined and initialized
   *
   * Precondition(s):
   * <1> navigation stack must be defined and initialized containing paths for both the screens involved in navigation in the stack. Navigation prop must be passed to the main function.
   * Returns: N/A
   *
   * Side effect:
   * <1> if navigation value is changed i.e. each time the screen is rendered, useEffect sets userId and fetches the state of favorites using checkFaveList and sets it using addToFaveListAPI. Similarly, checkWatchList fetches the state of watchlist for that movie and sets it using addToWatchListAPI function.
   * <2> else, do nothing
   */
  React.useEffect(() => {
    if (isFocused) {
      console.log('Item from props' + item);
      setMovieId(item.id);
      getRecommendations(item.id);
      AsyncStorage.getItem('userIdKey').then((value) => {
        setUserId(value);
      });
      var releaseYearTemp = item.release_date;
      releaseYearTemp = releaseYearTemp.substring(0, 4);
      //  console.log("Release Year"+ releaseYear)
      setReleaseYear(releaseYearTemp);
      checkFaveList(userId, movieId);
      checkWatchList(userId, movieId);
      console.log('MOVIE 1 DATA' + movie1Data);
    } else if (!isFocused) {
      addToFaveListAPI(userId, item.id, faveListState);
      addToWatchListAPI(userId, item.id, watchListState);
    }
  }, [navigation, isFocused, userId, item]);
  /**
   * useLayoutEffect
   * Purpose: this hook defines the header for this page including the profile icon at the right in the header on render.
   *
   * Parameter(s):
   * <1> navigation: the navigation prop that is passed to all the screens in the navigation stack.
   *
   * Precondition(s):
   * <1> navigation stack must be defined and initialized containing paths for both the screens involved in navigation in the stack. Navigation parameter must be passed to the main function.
   * <2> colors are defined and iniatialized.
   * <4> navigateToScreen function must be defined and initialized.
   * Returns: N/A
   *
   * Side effect:
   * <1> if navigation changes, then customize the app bar or header to display profile icon on the right.
   * <2> When the profile icon is clicked go to User Menu screen.
   * <3> else, do nothing
   */
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
          <Image
            source={require('../assets/user-icon.png')}
            style={homestyle.profileIcon}
            tintColor={Colors.backgroundColor}
          />
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: Colors.primaryVariant,
        paddingTop: Constants.statusBarHeight,
      },
      headerTintColor: Colors.backgroundColor,
    });
  }, [navigation]);

  /**
   * getRecommendations
   * Purpose: This function takes the input as the movie id of the details page and fetches recommendations from the database for that movie
   * Parameter(s):
   * <1> movieId: Movie id of the movie of which the details screen is open.
   *
   * Precondition(s): N/A
   *
   * Returns: N/A
   *
   * Side effect:
   * <1> If recommendations for the movie exist, store them in a list to be displayed.
   * <2> Else display No recommendations for this title.
   */
  const getRecommendations = (movieId) => {
    fetch('http://172.16.1.87:8000/recommendations/?movie_id1=' + movieId)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('Get recommendations', ToastAndroid.SHORT);
        //   setLoading(false);
        if (responseJson.count > 0) {
          for (var i = 0; i < 5; i++) {
            console.log(
              'Movie ' +
                i +
                ' Title ' +
                responseJson.results[i].movie_id2 +
                ' ' +
                responseJson.results[i].poster_path
            );
            moviesList.push(responseJson.results[i].poster_path);
            if (i == 0) {
              getMovieData(responseJson.results[i].movie_id2, 1);
              setMovie1(
                'https://image.tmdb.org/t/p/original' +
                  responseJson.results[i].poster_path
              );
            } else if (i == 1) {
              getMovieData(responseJson.results[i].movie_id2, 2);
              setMovie2(
                'https://image.tmdb.org/t/p/original' +
                  responseJson.results[i].poster_path
              );
            } else if (i == 2) {
              getMovieData(responseJson.results[i].movie_id2, 3);
              setMovie3(
                'https://image.tmdb.org/t/p/original' +
                  responseJson.results[i].poster_path
              );
            } else if (i == 3) {
              getMovieData(responseJson.results[i].movie_id2, 4);
              setMovie4(
                'https://image.tmdb.org/t/p/original' +
                  responseJson.results[i].poster_path
              );
            } else if (i == 4) {
              getMovieData(responseJson.results[i].movie_id2, 5);
              setMovie5(
                'https://image.tmdb.org/t/p/original' +
                  responseJson.results[i].poster_path
              );
            }
          }
        }
      })
      .catch((error) => {
        console.error('Error:' + error);
      });
    setDataSource([...dataSource, ...moviesList]);
  };

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

  const navigateToScreen = (screen, item) => {
    // console.log("Inside navigateToScreen with screen "+screen + " props "+ item + " props string" + JSON.stringify(item))
    navigation.navigate(screen, item);
    navigation.navigate(screen, {
      item,
    });
  };
  /**
   * getMoviesDataFromAPI
   * Purpose: This function fetches movies in recommendations from the database by movie id parameter and stores the response which is fed to Scrollview for display.
   * Parameter(s):
   * <1> movieid: The url of the api for movies data..
   * <2> movieno: The props to pass to the screen being called.
   *
   * Precondition(s):
   * <1> movieid must have recommendations against it in the database
   *
   * Returns: N/A
   *
   * Side effect:
   * <1> If the navigation moves to home screen, this function fetches the data for five movies in the recommendations list.
   * <2> else, do nothing.
   */
  const getMovieData = (movieid, movie_no) => {
    console.log('Inside getMovieData for ' + movieid + ' movie #' + movie_no);
    if (!loading) {
      setLoading(true);
      fetch('http://172.16.1.87:8000/api/movies/' + movieid)
        .then((response) => response.json())
        .then((responseJson) => {
          // console.log("Movie Data fetched " + JSON.stringify(responseJson) );
          console.log('Movie Data fetched ' + responseJson);
          if (movie_no == 1) setMovie1Data({ ...movie1Data, ...responseJson });
          else if (movie_no == 2)
            setMovie2Data({ ...movie2Data, ...responseJson });
          else if (movie_no == 3)
            setMovie3Data({ ...movie3Data, ...responseJson });
          else if (movie_no == 4)
            setMovie4Data({ ...movie4Data, ...responseJson });
          else if (movie_no == 5)
            setMovie5Data({ ...movie5Data, ...responseJson });
          setLoading(false);
          //}
          //    else
          {
            //  setIsListEnd(true);
            setLoading(false);
          }
        })
        .catch((error) => {
          console.error('Error' + error);
        });
    }
  };

  /**
   * addToFaveListAPI
   * Purpose: If the user adds or removes the movie from the favorites list by clicking the icon, store the status in database.
   * Parameter(s):
   * <1> userId: The user id of the user
   * <2> movieId: The movie id of the details screen
   * <3> faveListState: The state of the movie in favorites list fetched from the database
   * Precondition(s): N/A
   *
   * Returns: N/A
   *
   * Side effect:
   * <1> If the user adds the movie in the favorites lists then make a POST call to the API.
   * <2> else if the movie already exists as a favorite and the user unfavorites it, make a DELETE call to the API
   * <3> else,show error
   * 
   */

  const addToFaveListAPI = (userId, movieId, faveListState) => {
    setLoading(true);
    if (userId && movieId && faveListState == 'red') {
      fetch('http://172.16.1.87:8000/favorites/', {
        method: 'POST',
        headers: {
          //   Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: userId,
          movie: movieId,
        }),
      })
        .then((response) => response.json())
        .then((responseJson) => {
          //     ToastAndroid.show('Added to Fave', ToastAndroid.SHORT);
          setLoading(false);
        })
        .catch((error) => {
          //    ToastAndroid.show('Error in addToFaveListAPI: '+error, ToastAndroid.SHORT);
          console.error('Error in addToFaveListAPI: ' + error);
          setLoading(false);
        });
    } else if (userId && movieId && faveListState == 'black' && faveId != 0) {
      fetch('http://172.16.1.87:8000/favorites/' + faveId + '/', {
        method: 'DELETE',
      })
        .then((response) => response.json())
        .then((responseJson) => {
          //  ToastAndroid.show('Removed from Favorites', ToastAndroid.SHORT);
          setLoading(false);
        })
        .catch((error) => {
          //  ToastAndroid.show('Error in ad dto fave: '+error, ToastAndroid.SHORT);
          console.error('Error in addToFaveListAPI: ' + error);
          setLoading(false);
        });
    }
  };

  /**
   * addToWatchListAPI
   * Purpose: If the user adds or removes the movie from the watchlist by clicking the icon, store the status in database.
   * Parameter(s):
   * <1> userId: The user id of the user
   * <2> movieId: The movie id of the details screen
   * <3> watchListState: The state of the movie in watchlist list fetched from the database
   * Precondition(s): N/A
   *
   * Returns: N/A
   *
   * Side effect:
   * <1> If the user adds the movie in the watchlist lists then make a POST call to the API.
   * <2> else if the movie already exists in watchlist and the user unclicks it, make a DELETE call to the API
   * <3> else,show error
   * 
   */
  const addToWatchListAPI = (userId, movieId, watchListState) => {
    setLoading(true);
    if (userId && movieId && watchListState == 'yellow') {
      fetch('http://172.16.1.87:8000/watchlist/', {
        method: 'POST',
        headers: {
          //   Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: userId,
          movie: movieId,
        }),
      })
        .then((response) => response.json())
        .then((responseJson) => {
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error in add to watch: ' + error);
          setLoading(false);
        });
    } else if (
      userId &&
      movieId &&
      watchListState == 'black' &&
      watchlistId != 0
    ) {
      fetch('http://172.16.1.87:8000/watchlist/' + watchlistId + '/', {
        method: 'DELETE',
      })
        .then((response) => response.json())
        .then((responseJson) => {
          //  ToastAndroid.show('Removed from Watchlist', ToastAndroid.SHORT);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error in add to watch api Error:' + error);
          setLoading(false);
        });
    }
  };

  /**
   * checkFaveList
   * Purpose: This function checks the favorites status of the movie in the database.
   * Parameter(s):
   * <1> userId: The user id of the user
   * <2> movieId: The movie id of the details screen
   *
   * Returns: N/A
   *
   * Side effect:
   * <1> If the user has already added the movie in the favorites list then set favorites icon color as red the API.
   * <2> else set favorites icon color as dark.
   * <3> else,show error
   * 
   */
  const checkFaveList = (userId, movieId) => {
    //console.log('Inside checkfavelist ' + userId + ' ' + movieId);
    if (userId && movieId) {
      fetch(
        'http://172.16.1.87:8000/favorites/?user_id=' +
          userId +
          '&movie=' +
          movieId
      )
        .then((response) => response.json())
        .then((responseJson) => {
          //   console.log(responseJson);
          setResultCount(responseJson.count);
          if (responseJson.results.length == 1) {
            setRecordExists(true);
            setFaveListState('red');
            setFaveId(responseJson.results[0].fave_id);
            //  console.log(responseJson);
            setLoading(false);
          } else {
            setLoading(false);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

    /**
   * checkWatchList
   * Purpose: This function checks the watchlist status of the movie in the database.
   * Parameter(s):
   * <1> userId: The user id of the user
   * <2> movieId: The movie id of the details screen
   *
   * Returns: N/A
   *
   * Side effect:
   * <1> If the user has already added the movie in the watchlist then set watchlist icon color as yellow the API.
   * <2> else set watchlist icon color as dark.
   * <3> else,show error
   * 
   */
  const checkWatchList = (userId, movieId) => {
    //console.log('Inside checkwatchlist ' + userId + ' ' + movieId);
    if (userId && movieId) {
      fetch(
        'http://172.16.1.87:8000/watchlist/?user_id=' +
          userId +
          '&movie=' +
          movieId
      )
        .then((response) => response.json())
        .then((responseJson) => {
          //    console.log(responseJson);
          if (responseJson.results.length == 1) {
            setWatchListExists(true);
            setWatchListState('yellow');
            setWatchlistId(responseJson.results[0].watchlist_id);
            //     console.log(responseJson);
            setLoading(false);
          } else {
            setLoading(false);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  /**
   * addToFaveList
   * Purpose: This function dynamically changes the color of the favorite icon when user clicks on it.
   * Parameter(s):
   * <1> faveListState: The state of the movie in favorites list fetched from the database
   *
   * Returns: N/A
   *
   * Side effect:
   * <1> If the user clicks on the favorites icon once, set it as red
   * <2> else set favorites icon color as dark.
   * 
   */
  const addToFaveList = (faveListState) => {
    if (faveListState == 'black' || faveListState == '') {
      ToastAndroid.show('Added  to Favorites ', ToastAndroid.SHORT);
      setFaveListState('red');
    } else if (faveListState == 'red') {
      setFaveListState('black');
      ToastAndroid.show('Removed from Favorites ', ToastAndroid.SHORT);
    }
  };


  /**
   * addToWatchList
   * Purpose: This function dynamically changes the color of the watchlist icon when user clicks on it.
   * Parameter(s):
   * <1> watchListState: The state of the movie in watchlist fetched from the database
   *
   * Returns: N/A
   *
   * Side effect:
   * <1> If the user clicks on the watchlist icon once, set it as red
   * <2> else set watchlist icon color as dark.
   * 
   */
  const addToWatchList = (watchListState) => {
    if (watchListState == 'black' || watchListState == '') {
      ToastAndroid.show('Added  to Watchlist ', ToastAndroid.SHORT);
      setWatchListState('yellow');
    } else if (watchListState == 'yellow') {
      setWatchListState('black');
      ToastAndroid.show('Removed from Watchlist ', ToastAndroid.SHORT);
    }
  };

  return (
    <DetailsUI
      item={item}
      addToFaveList={addToFaveList}
      faveListState={faveListState}
      addToWatchList={addToWatchList}
      watchListState={watchListState}
      movie1={movie1}
      movie2={movie2}
      movie3={movie3}
      movie4={movie4}
      movie5={movie5}
      movie1Data={movie1Data}
      movie2Data={movie2Data}
      movie3Data={movie3Data}
      movie4Data={movie4Data}
      movie5Data={movie5Data}
      navigateToScreen={navigateToScreen}
      releaseYear={releaseYear}></DetailsUI>
  );
}

export default Details;
