/*
 *  file: SearchUI.js
 *  author: Rinku Ansari <raf122@uregina.ca>
 *  version: 0.1
 *  date-created: mar-25-2022
 *  last-modified: apr-10-2022
 */
import React from 'react';

import {ActivityIndicator, FlatList, Image, SafeAreaView, Text, TouchableOpacity, View,} from 'react-native';

import searchscreenstyle from '../styles/SearchScreenStyle';
import {Colors} from '../helpers/Colors';
import homestyle from '../styles/HomeStyle';

/**
       * SearchUI
       * Purpose: Define the overall look of the Search screen
``*/
const SearchUI = ({
  searchStr,
  dataSource,
  resultCount,
  getData,
  loading,
  navigateToScreen,
}) => {
  const renderFooter = () => {
    return (
      // Footer View with Loader
      <View style={searchscreenstyle.footer}>
        {loading ? (
          <ActivityIndicator color={Colors.primary} style={{ margin: 15,  }} />
        ) : null}
      </View>
    );
  };

  const ItemView = ({ item }) => {
    return (
      <TouchableOpacity
        style={homestyle.GridViewContainer}
        onPress={() => navigateToScreen(item)}>
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

  const ItemSeparatorView = () => {
    return (
      <View
        style={homestyle.itemSeparator}
      />
    );
  };
  return (
    <SafeAreaView style={homestyle.safeareaview}>
      <Text style={homestyle.searchResultText}>
        {' '}
        Search Results for "{searchStr}"{' '}
      </Text>
      <FlatList
        style={[homestyle.FlatListLayout, { flex: 0.9, backgroundColor: Colors.secondaryVariant }]}
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
};

export default SearchUI;
