// Example of Infinite Loading Listview in React Native using FlatList
// https://aboutreact.com/infinite-list-view/

// import React in our code
import React, { useState, useEffect } from 'react';

// import all the components we are going to use
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
} from 'react-native';
import { TouchableOpacity as TouchableOpacityRNGH } from 'react-native-gesture-handler';
import homestyle from '../styles/HomeStyle';

import { RiSearchFill } from 'react-icons/fa';
const Home = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [page, setPage] = useState(1);
  const [isListEnd, setIsListEnd] = useState(false);
  const [searchString, setsearchString] = useState('');
  const [likeState, setLikeState] = useState('white');

  useEffect(() => getMoviesDataFromAPI(url), []);
  const [url, setUrl] = useState(
    'http://172.16.1.87:8000/movies/?format=json&page='
  );

  const likeAPI = () => {
    setLikeState('red');
    ToastAndroid.show('Like?' + likeState, ToastAndroid.SHORT);
  };

  const whichTab = (tabName) => {
    if (tabName == 'moviesTab') {
      ToastAndroid.show('MoviesTab', ToastAndroid.SHORT);
    } else if (tabName == 'tvTab') {
      ToastAndroid.show('TvTab', ToastAndroid.SHORT);
    }
  };
  const navigateToScreen = (screen, item) => {
    navigation.navigate(screen, {
      item,
    });
  };

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
          if (responseJson.results.length > 0) {
            setPage(page + 1);
            // After the response increasing the page
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

  const renderFooter = () => {
    return (
      <View style={homestyle.footer}>
        {loading ? (
          <ActivityIndicator color="black" style={{ margin: 15 }} />
        ) : null}
      </View>
    );
  };

  const ItemView = ({ item }) => {
    return (
      <TouchableOpacity
        style={homestyle.GridViewContainer}
        onPress={() => navigateToScreen('Details', item)}>
        <Image
          style={{ alignSelf: 'stretch', flex: 1, height: 100 }}
          source={{
            uri: 'https://image.tmdb.org/t/p/original' + item.poster_path,
          }}
        />
        <TouchableOpacityRNGH style={homestyle.LikeButton}>
          <Image
            source={require('../assets/like-icon.png')}
            resizeMode="contain"
            onPress={setLikeState('red')}
            style={homestyle.logo}
          />
        </TouchableOpacityRNGH>
        <Text
          style={{
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
            //   fontFamily: 'Times New Roman',
            textShadowColor: 'black',
            textShadowOffset: { width: 5, height: 5 },
            textShadowRadius: 20,
          }}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  const searchAPI = (userInput) => {
    if (userInput != '') {
      if (Platform.OS === 'android')
        // ToastAndroid.show(userInput, ToastAndroid.SHORT);
        ToastAndroid.show(userInput, ToastAndroid.SHORT);
      navigation.navigate('SearchScreen', {
        searchStr: userInput,
      });
    } else if (Platform.OS === 'android') {
      ToastAndroid.show('Please enter a title ', ToastAndroid.SHORT);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 0.1, flexDirection: 'row', marginBottom: 0.02 }}>
        <TextInput
          style={homestyle.TextInputStyle}
          onSubmitEditing={(event) => searchAPI(event.nativeEvent.text)}
          onChangeText={(text) => setsearchString(text)} //searchFilterFunction(text)
          value={searchString}
          clearButtonMode="always"
          underlineColorAndroid="transparent"
          placeholder="Search PopcornTime"
        />
        <TouchableOpacity
          style={homestyle.SearchButton}
          onPress={() => searchAPI(searchString)}>
          <Image
            source={require('../assets/search-icon.png')}
            resizeMode="contain"
            style={homestyle.logo}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{ flex: 0.08, flexDirection: 'row', backgroundColor: 'white' }}>
        <TouchableOpacity
          style={homestyle.TabLayout}
          onPress={() => whichTab('moviesTab')}>
          <Text>Movies</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={homestyle.TabLayout}
          onPress={() => whichTab('tvTab')}>
          <Text>TV Shows</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        style={{ flex: 0.9 }}
        data={dataSource}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={ItemView}
        ListFooterComponent={renderFooter}
        onEndReached={getMoviesDataFromAPI(url)}
        onEndReachedThreshold={0.5}
        numColumns={3}
      />
    </SafeAreaView>
  );
};

export default Home;
