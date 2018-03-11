import { StyleSheet } from 'react-native';
import { styleColor } from 'app/colors';

export default StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 5,
    backgroundColor: styleColor.background
  },
  headerText: {
    fontSize: 20,
    fontWeight: '700',
    color: styleColor.lightBlack,
    alignSelf: 'center'
  },
  headerTextAndroid: {
    fontSize: 20,
    fontWeight: '700',
    color: styleColor.lightBlack,
    flex: 0.8,
    alignSelf: 'center',
    textAlign: 'center'
  },
  topTitle: {
    alignSelf: 'center',
    color: styleColor.lightBlack
  },
  topBar: {
    backgroundColor: styleColor.white,
    paddingHorizontal: 10,
    fontSize: 26
  },
  imagesList: {
    flex: 1,
    paddingHorizontal: 10
  },
  imageMidItem: {
    flex: 1,
    height: 125,
    margin: 5,
    borderWidth: 1,
    borderColor: styleColor.silver
  },
  imageBigItem: {
    flex: 1,
    margin: 5,
    borderWidth: 1,
    borderColor: styleColor.silver,
    height: 185
  },
  imageSmallItem: {
    flex: 1,
    margin: 5,
    borderWidth: 1,
    borderColor: styleColor.silver,
    height: 80
  },
  img: {
    flex: 1
  },
  notFoundHolder: {
    paddingHorizontal: 30
  },
  notFound: {
    fontSize: 18,
    lineHeight: 22,
    color: styleColor.lightBlack,
    textAlign: 'center'
  }
});
