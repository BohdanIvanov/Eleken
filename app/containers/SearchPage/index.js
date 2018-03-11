import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  Keyboard
} from 'react-native';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Slider from 'react-native-slider';
import DropdownAlert from 'react-native-dropdownalert';
import { NavigationActions } from 'react-navigation';
// redux
import { searchImages } from 'app/containers/App/actions';
// styles
import { styleColor } from 'app/colors';
import s from './styles';

const WrapperView = Platform.OS === 'android' ? View : KeyboardAvoidingView;
const wrapperViewProps = {
  behavior: Platform.OS === 'android' ? 'padding' : 'position'
};

class SearchPage extends PureComponent {
  constructor() {
    super();
    this.state = {
      placeholder: 'Enter text',
      searchValue: '',
      isFocused: false,
      columnsCount: 1
    };
  }
  onChangeInput = inputValue => {
    this.setState({ searchValue: inputValue });
  };

  searchImages = async () => {
    const { dispatchNavigateTo, dispatchInitGallery } = this.props;
    const { searchValue, columnsCount } = this.state;
    if (searchValue.length >= 3) {
      Keyboard.dismiss();
      this.setState({ searchValue: '' });
      await dispatchInitGallery(searchValue, columnsCount);
      dispatchNavigateTo('GalleryPage');
    } else {
      this.dropdown.alertWithType('info', '', 'Invalid input value. Length of the text must be minimum 3 characters');
    }
  };
  render() {
    const { placeholder, isFocused, searchValue, columnsCount } = this.state;
    return (
      <ScrollView contentContainerStyle={s.container} keyboardShouldPersistTaps="handled">
        <WrapperView {...wrapperViewProps}>
          <View style={s.inputHolder}>
            <Text style={s.inputLabel}>Search Term:</Text>
            <TextInput
              style={[s.textInput, isFocused && s.textInputFocused]}
              value={searchValue}
              underlineColorAndroid="transparent"
              autoCorrect={false}
              returnKeyType="go"
              autoCapitalize="none"
              placeholder={placeholder}
              placeholderTextColor={styleColor.silver}
              onFocus={() => this.setState({ isFocused: true, placeholder: '' })}
              onBlur={() => this.setState({ isFocused: false, placeholder: 'Enter text' })}
              onSubmitEditing={this.searchImages}
              onChangeText={this.onChangeInput}
            />
          </View>
        </WrapperView>

        <View style={s.sliderHolder}>
          <Text style={s.sliderLabel}>{`Columns: ${columnsCount}`}</Text>
          <Slider
            style={{ flex: 1 }}
            minimumValue={1}
            maximumValue={5}
            step={1}
            value={columnsCount}
            thumbTintColor={styleColor.primary}
            minimumTrackTintColor={styleColor.primary}
            returnKeyType="go"
            thumbStyle={s.thumbStyle}
            trackStyle={s.trackStyle}
            onValueChange={value => this.setState({ columnsCount: value })}
          />
        </View>
        <TouchableOpacity style={s.searchButton} onPress={this.searchImages}>
          <Text style={s.searchText}>Search</Text>
        </TouchableOpacity>
        <DropdownAlert
          updateStatusBar={false}
          messageStyle={s.warningText}
          infoColor={styleColor.lightBlack}
          ref={ref => {
            this.dropdown = ref;
          }}
        />
      </ScrollView>
    );
  }
}

SearchPage.navigationOptions = () => ({
  headerTitle: <Text style={s.headerText}>Eleken</Text>,
  headerTitleStyle: s.topTitle,
  headerStyle: s.topBar
});

const mapDispatchToProps = dispatch => ({
  dispatchNavigateTo: routeName => {
    dispatch(NavigationActions.navigate({ routeName }));
  },
  dispatchInitGallery: (value, columns) => {
    dispatch(searchImages(value, columns));
  }
});

const enhancer = compose(connect(undefined, mapDispatchToProps));

SearchPage.propTypes = {
  dispatchNavigateTo: PropTypes.func
};

export default enhancer(SearchPage);
