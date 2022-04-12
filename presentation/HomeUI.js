/*
 *  file: HomeUI.js
 *  author: Rinku Ansari <raf122@uregina.ca>
 *  version: 0.1
 *  date-created: mar-25-2022
 *  last-modified: apr-10-2022
 */
import React from 'react';

import {ActivityIndicator, FlatList, Image, SafeAreaView, Text, TextInput, TouchableOpacity, View,} from 'react-native';
import homestyle from '../styles/HomeStyle';
import {Colors} from '../helpers/Colors';

/**
       * HomeUI
       * Purpose: Define the overall look of the Home screen
``*/
const HomeUI =({dataSource, searchString, setsearchString, searchAPI, resultCount, getMoviesDataFromAPI, url, loading, navigateToScreen})=>{
 // const windowHeight = useWindowDimensions().height;

const ItemView = ({ item }) => {
    return (
      <TouchableOpacity
        style={homestyle.GridViewContainer}
        onPress={() => navigateToScreen('Details', item)}>
        <Image
          style={homestyle.poster}
          source={{
            uri: 'https://image.tmdb.org/t/p/original' + item.poster_path,
          }}
        />
        <Text
          style={homestyle.title}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };
    const renderFooter = () => {
    return (
      <View style={homestyle.footer}>
        {loading ? (
          <ActivityIndicator color= {Colors.primary} style={{ margin: 15 }} />
        ) : null}
      </View>
    );
  };

  const ItemSeparatorView = () => {
    return (
      <View
        style={homestyle.itemSeparator}
      />
    );
  };

  return(
      <SafeAreaView style={homestyle.safeareaview}>
      <View style={homestyle.searchbarcontainer}>
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
      <FlatList
        style={homestyle.FlatListLayout}
        data={dataSource}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={ItemView}
        ListFooterComponent={renderFooter}
        onEndReached={resultCount > 24 ? getMoviesDataFromAPI(url) : null}
        onEndReachedThreshold={0.5}
        numColumns={3}
      />
    </SafeAreaView>
  );
}

export default HomeUI;
