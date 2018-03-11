import { StyleSheet } from 'react-native';
import { styleColor } from 'app/colors';

export default StyleSheet.create({
  topTitle: {
    color: styleColor.lightBlack,
    textAlign: 'center',
    flex: 1,
    alignSelf: 'center'
  },
  topBar: {
    backgroundColor: styleColor.white,
    paddingHorizontal: 10
  },
  headerText: {
    fontSize: 20,
    fontWeight: '700',
    color: styleColor.lightBlack,
    textAlign: 'center',
    flex: 1,
    alignSelf: 'center'
  },
  container: {
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 30,
    backgroundColor: styleColor.background
  },
  inputHolder: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  inputLabel: {
    fontSize: 16,
    marginRight: 7,
    color: styleColor.black
  },
  textInput: {
    fontSize: 16,
    flex: 1,
    alignSelf: 'center',
    borderBottomWidth: 2,
    borderBottomColor: styleColor.silver,
    paddingHorizontal: 5,
    paddingVertical: 3
  },
  textInputFocused: {
    borderBottomColor: styleColor.primary
  },
  sliderHolder: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30
  },
  sliderLabel: {
    paddingRight: 20,
    fontSize: 16,
    color: styleColor.black,
    paddingBottom: 2
  },
  searchButton: {
    paddingHorizontal: 30,
    alignSelf: 'center',
    paddingVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: styleColor.primary,
    backgroundColor: styleColor.primary
  },
  searchText: {
    fontSize: 18,
    textAlign: 'center',
    color: styleColor.white
  },
  warningText: {
    fontSize: 13,
    color: styleColor.white,
    textAlign: 'center',
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 7
  },
  thumbStyle: {
    width: 18,
    height: 18
  },
  trackStyle: {
    backgroundColor: styleColor.track
  }
});
