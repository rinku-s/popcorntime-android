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
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import detailsstyle from '../styles/DetailsStyle';

function Details({ navigation, route }) {
  const { item } = route.params;
  const [watchListState, setWatchListState] = useState('');
  const [faveListState, setFaveListState] = useState('');

  const addToFaveList = (faveListState) => {
    if (faveListState == 'black' || faveListState == '') {
      ToastAndroid.show('Added  to Favorites ', ToastAndroid.SHORT);
      setFaveListState('red');
    } else if (faveListState == 'red') {
      setFaveListState('black');
      ToastAndroid.show('Removed from Favorites ', ToastAndroid.SHORT);
    }
  };

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
    <View style={detailsstyle.MainContainer}>
      <ImageBackground
        style={{ flex: 1 }}
        source={{
          uri: 'https://image.tmdb.org/t/p/original' + item.backdrop_path,
        }}>
        <View style={{ flex: 1 }}>
          <Image
            style={{ alignSelf: 'stretch', flex: 1, height: 100, width: 400 }}
            source={{
              uri: 'https://image.tmdb.org/t/p/original' + item.backdrop_path,
            }}
          />
          <Text style={detailsstyle.title}>{item.title}</Text>
          <Text style={detailsstyle.tagline}>
            {'\n'}
            {item.tagline}
          </Text>
        </View>
      </ImageBackground>

      <View style={{ flex: 3 }}>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            backgroundColor: 'blue',
            maxHeight: 50,
          }}>
          <TouchableOpacity
            style={{ flex: 1, height: 50, alignItems: 'center' }}
            onPress={() => addToFaveList(faveListState)}>
            <Image
              source={require('../assets/like-icon.png')}
              resizeMode="contain"
              style={{
                flex: 1,
                width: 30,
                height: 50,
                tintColor: faveListState == 'red' ? 'red' : 'black',
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{ flex: 1, height: 50, alignItems: 'center' }}
            onPress={() => addToWatchList(watchListState)}>
            <Image
              source={require('../assets/watchlist-icon.png')}
              resizeMode="contain"
              style={{
                flex: 1,
                width: 30,
                height: 50,
                tintColor: watchListState == 'yellow' ? 'yellow' : 'black',
              }}
            />
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 18, paddingLeft: 15 }}>{item.title}</Text>
        <Text style={{ fontSize: 12, paddingLeft: 15 }}>{item.tagline}</Text>
        <Text style={detailsstyle.summary}>{item.overview} </Text>
      </View>
    </View>
  );
}

export default Details;
