import {StyleSheet} from "react-native";

const homestyle = StyleSheet.create({
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  GridViewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    width: 50,
    margin: 5,
    backgroundColor: '#7B1FA2',
  },

  GridViewTextLayout: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    color: '#fff',
    padding: 10,
  },

  TextInputStyle: {
    flex: 6,
    //  flexDirection:'column',
    //height: 40,
    // borderWidth: 1,
    paddingLeft: 20,
    //margin: 5,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },

  SearchButton: {
    flex: 1,
    //  flexDirection: 'column',
   // height: 40,
    // borderWidth: 1,
    //    margin: 5,
    // marginTop: 5,
    // marginRight: 5,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
  LikeButton: {
    height: 10,
    width: 10,
   position:'absolute',
    top: 0,
   right:0,
    //marginVertical:5,
    marginRight:20,
 //   backgroundColor:'white',

  },

  logo: {
    //  flex:0.2,
    alignItems: 'center',
    //  height: 30,
    //   width: 30,
    width: 30,
    height: 40,
    position:"absolute",
  },

  TabLayout:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
    
  },

  LikeButtonIcon:{
    alignItems: 'center',
    //  height: 30,
    //   width: 30,
    width: 30,
    height: 50,
    backgroundColor:'white',
  },

    LikedButtonIcon:{
    alignItems: 'center',
    //  height: 30,
    //   width: 30,
    width: 30,
    height: 50,
    tintColor: 'red'
  //  backgroundColor:'white',

  },
});

export default homestyle;