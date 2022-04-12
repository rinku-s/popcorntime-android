/*
 *  file: DetailsUI.js
 *  author: Rinku Ansari <raf122@uregina.ca>
 *  version: 0.1
 *  date-created: mar-25-2022
 *  last-modified: apr-10-2022
 */
import React from 'react';
//import GlobalFunc from '../helpers/globalFunc';
import {Image, ImageBackground, ScrollView, Text, TouchableOpacity, View,} from 'react-native';
import detailsstyle from '../styles/DetailsStyle';
import homestyle from '../styles/HomeStyle';
import {Colors} from '../helpers/Colors';

/**
       * DetailsUI
       * Purpose: Define the overall look of the Details screen
``*/
const DetailsUI = ({
  item,
  addToFaveList,
  faveListState,
  addToWatchList,
  watchListState,
  movie1,
  movie2,
  movie3,
  movie4,
  movie5,
  movie1Data,
  movie2Data,
  movie3Data,
  movie4Data,
  movie5Data,
  navigateToScreen,
  releaseYear,
}) => {
  const similarMoviesTitle = () => {
    return <Text style={detailsstyle.similarMovieTitle}> Similar Movies </Text>;
  };

  const displayRec = () => {
    console.log('DIsplay Rec log ' + movie1Data);
    if (
      movie1 != '' &&
      movie2 != '' &&
      movie3 != '' &&
      movie4 != '' &&
      movie5 != '' &&
      movie1Data != '' &&
      movie2Data != '' &&
      movie3Data != '' &&
      movie4Data != '' &&
      movie5Data != ''
    ) {
      return (
        <ScrollView horizontal={true}>
          <TouchableOpacity
            style={homestyle.GridViewContainer}
            onPress={() => navigateToScreen('Details', movie1Data)}>
            <Image style={homestyle.poster} source={{ uri: movie1 }} />
            <Text style={homestyle.title}>{movie1Data.title}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={homestyle.GridViewContainer}
            onPress={() => navigateToScreen('Details', movie2Data)}>
            <Image style={homestyle.poster} source={{ uri: movie2 }} />
            <Text style={homestyle.title}>{movie2Data.title}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={homestyle.GridViewContainer}
            onPress={() => navigateToScreen('Details', movie3Data)}>
            <Image style={homestyle.poster} source={{ uri: movie3 }} />
            <Text style={homestyle.title}>{movie3Data.title}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={homestyle.GridViewContainer}
            onPress={() => navigateToScreen('Details', movie4Data)}>
            <Image style={homestyle.poster} source={{ uri: movie4 }} />
            <Text style={homestyle.title}>{movie4Data.title}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={homestyle.GridViewContainer}
            onPress={() => navigateToScreen('Details', movie5Data)}>
            <Image style={homestyle.poster} source={{ uri: movie5 }} />
            <Text style={homestyle.title}>{movie5Data.title}</Text>
          </TouchableOpacity>
        </ScrollView>
      );
    } else {
      return <Text style={{ paddingLeft: 15 }}>No recommendations</Text>;
    }
  };
  return (
    <View style={detailsstyle.MainContainer}>
      <View style={{ flex: 1 }}>
        <ImageBackground
          style={detailsstyle.backdrop}
          source={{
            uri: 'https://image.tmdb.org/t/p/original' + item.backdrop_path,
          }}>
          <View style={{ flex: 1 }}>
            <Image
              style={detailsstyle.backdropposter}
              source={{
                uri: 'https://image.tmdb.org/t/p/original' + item.backdrop_path,
              }}
            />
          </View>
        </ImageBackground>
      </View>
      <View style={{ flex: 3 }}>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            flexGrow: 0.4,
            maxHeight: 60,
            //backgroundColor: 'blue',
            //   maxHeight: 60,
            // borderBottomWidth:2,
            // borderColor:Colors.secondaryVariant,
          }}>
          <View style={{ alignItems: 'flex-start', flex: 2.5 }}>
            <Text style={detailsstyle.movieTitle}>{item.title} </Text>
            <Text style={detailsstyle.subtitle}>{item.tagline} </Text>
          </View>
          <View
            style={{ alignItems: 'stretch', flex: 1, flexDirection: 'row' }}>
            <TouchableOpacity
              style={detailsstyle.favelistbutton}
              onPress={() => addToFaveList(faveListState)}>
              <Image
                source={require('../assets/heart-icon.png')}
                resizeMode="contain"
                style={{
                  flex: 1,
                  width: 30,
                  height: 30,
                  tintColor:
                    faveListState == 'red' ? 'red' : Colors.backgroundColor,
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={detailsstyle.watchlistbutton}
              onPress={() => addToWatchList(watchListState)}>
              <Image
                source={require('../assets/watchlist-icon.png')}
                resizeMode="contain"
                style={{
                  flex: 1,
                  width: 30,
                  height: 30,
                  tintColor:
                    watchListState == 'yellow'
                      ? 'yellow'
                      : Colors.backgroundColor,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 0.2 }}></View>
        <View
          style={{
            flex: 0.2,
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            flexDirection: 'row',
            margin: 2,
            padding: 5,
          }}>
          <Text style={detailsstyle.genre}>{item.genres[0]}</Text>
          <Text style={detailsstyle.genre}>{item.genres[1]}</Text>
          <Text style={detailsstyle.genre}>{item.genres[2]}</Text>
        </View>
        <Text style={detailsstyle.summary}>{item.overview} </Text>

        <View
          style={{
            flex: 0.3,
            flexDirection: 'row',
            alignContent: 'stretch',
            borderRadius: 20,
            margin: 5,
            borderColor: Colors.secondary,
            backgroundColor: Colors.secondaryVariant,
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-evenly',
              borderRadius: 50,
              margin: 5,
            }}>
            <Text style={{ textAlign: 'center', fontSize: 16 }}>
              {item.runtime}
            </Text>
            <Text style={{ textAlign: 'center', fontSize: 10 }}>minutes</Text>
          </View>
          <Text
            style={{
              textAlign: 'center',
              flex: 1,
              fontSize: 18,
              justifyContent: 'center',
              padding: 7,
              borderLeftWidth: 1,
              borderLeftColor: Colors.primaryVariant,
            }}>
            {' '}
            {releaseYear}
          </Text>
        </View>
        <View style={{ flex: 0.2 }}></View>
        <View>{similarMoviesTitle()}</View>
        <View style={{ flex: 1 }}>{displayRec()}</View>
      </View>
    </View>
  );
};

export default DetailsUI;
