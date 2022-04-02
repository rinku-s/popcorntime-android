import {StyleSheet} from "react-native"

const detailsstyle = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    position: 'absolute',
    bottom: 20,
    left: 15,
    paddingLeft: 15,
    textAlign: 'center',
    justifyContent: 'flex-start',
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  tagline: {
    position: 'absolute',
    bottom: 5,
    left: 15,
    paddingLeft: 15,
    textAlign: 'center',
    justifyContent: 'flex-start',
    fontSize: 10,
    color: 'white',
    fontWeight: 'normal',
  },
  summary: {
    textAlign: 'justify',
    justifyContent: 'flex-start',
    fontSize: 12,
    padding: 15,
  },
});


export default detailsstyle;