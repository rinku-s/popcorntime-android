/*
 *  file: WatchlistUI.js
 *  author: Rinku Ansari <raf122@uregina.ca>
 *  version: 0.1
 *  date-created: mar-25-2022
 *  last-modified: apr-10-2022
 */
import React from 'react';
import {Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View,} from 'react-native';
import liststyle from '../styles/ListStyle'
import {Colors} from '../helpers/Colors'

/**
       * WatchlistUI
       * Purpose: Define the overall look of the Watchlist screen
``*/
const WatchlistUI = ({dataSource, navigateToScreen, getItem}) => {


  const ItemView = (item, key) => {
    return (
      // Flat List Item
      <View key={key} style={liststyle.itemView}>
      <TouchableOpacity style={{flex:1, flexDirection:'row',}}
        onPress={() => navigateToScreen(item)}>
              <Image
          style={{ alignSelf: 'stretch', flex: 0.3, height: 100, margin:15}}
          source={{
            uri: 'https://image.tmdb.org/t/p/original' + item.poster_path,
          }}
        />
        <Text
          style={liststyle.title}
          onPress={() => getItem(item)}>
          {item.title}
        </Text>
        <ItemSeparatorView />
       </TouchableOpacity>
      </View>
    );
  };

    const ItemSeparatorView = () => {
    return (
      <View
      //   style={styles.itemSeparatorStyle}
      />
    );
  };
  return (
        <SafeAreaView
        style={liststyle.safeAreaView}>
      <View
       style={{backgroundColor:Colors.secondaryVariant}}
      >
        {/* List Item as a function */}
        <ScrollView>
          {
            //Loop of JS which is like foreach loop
            dataSource.map(ItemView)
          }
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default WatchlistUI;
