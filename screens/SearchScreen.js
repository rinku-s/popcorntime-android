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
  Dimensions,
} from 'react-native';

import searchscreenstyle from '../styles/SearchScreenStyle';

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

  useEffect(() => {
    if (resultCount > 25) {
      console.log('Count is more that 25');
    } else {
      console.log('Count is less that 5');
    }
  }, [resultCount]);

  const navigateToScreen = (item) => {
    navigation.navigate('Details', {
      item,
    });
  };

  const getData = () => {
    // console.log(page);
    if (!loading && !isListEnd) {
      console.log(
        'getData from search' +
          'http://172.16.1.87:8000/api/movies/?format=json&title=' +
          searchStr +
          '&page=' +
          page
      );
      setLoading(true);
      fetch(
        'http://172.16.1.87:8000/api/movies/?format=json&title=' +
          searchStr +
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

  const renderFooter = () => {
    return (
      // Footer View with Loader
      <View style={searchscreenstyle.footer}>
        {loading ? (
          <ActivityIndicator color="black" style={{ margin: 15 }} />
        ) : null}
      </View>
    );
  };

  const ItemView = ({ item }) => {
    return (
      <TouchableOpacity
        style={searchscreenstyle.GridViewContainer}
        onPress={() => navigateToScreen(item)}>
        <Image
          style={{ alignSelf: 'stretch', flex: 1, height: 100 }}
          source={{
            uri: 'https://image.tmdb.org/t/p/original' + item.poster_path,
          }}
        />
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
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={searchscreenstyle.searchResultText}>
        {' '}
        Search Results for "{searchStr}"{' '}
      </Text>
      <FlatList
        style={{ flex: 0.9, backgroundColor: 'yellow' }}
        data={dataSource}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={ItemView}
        ListFooterComponent={renderFooter}
        // onEndReached={getData}
        onEndReached={resultCount > 24 ? getData : null}
        onEndReachedThreshold={0.5}
        numColumns={3}
      />
    </SafeAreaView>
  );
}

export default SearchScreen;
