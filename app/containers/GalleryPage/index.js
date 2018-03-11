import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, ActivityIndicator, Text, Platform } from 'react-native';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import Grid from 'react-native-grid-component';
import Image from 'react-native-image-progress';
// components
import BackButton from 'app/components/BackButton';
// redux
import { selectSearchValue, selectColumns } from 'app/containers/App/selectors';
// styles
import { styleColor } from 'app/colors';
import { SUB_KEY, HOST } from './constants';

import s from './styles';

class GalleryPage extends PureComponent {
  constructor() {
    super();
    this.state = {
      images: [],
      isFetched: false
    };
  }
  componentDidMount() {
    const { searchValue } = this.props;
    const payload = {
      method: 'GET',
      headers: {
        'Ocp-Apim-Subscription-Key': `${SUB_KEY}`
      }
    };
    fetch(`${HOST}/search?&q=${searchValue}`, payload)
      .then(response => response.json())
      .then(responseJSON => {
        const { value } = responseJSON;
        const imagesArray = [];
        value.map(el => imagesArray.push(el.thumbnailUrl));
        this.setState({ images: imagesArray, isFetched: true });
      });
  }

  renderImageItem = (data, i) => (
    <View style={s.imageItem} key={i}>
      <Image indicatorProps={{ color: styleColor.primary }} source={{ uri: data }} style={s.img} />
    </View>
  );
  render() {
    const { columns } = this.props;
    const { images, isFetched } = this.state;
    if (!images.length && isFetched) {
      return (
        <View style={[s.container, s.notFoundHolder]}>
          <Text style={s.notFound}>Unfortunately no images were wound by this request :(</Text>
        </View>
      );
    }
    if (!images.length) {
      return (
        <View style={s.container}>
          <ActivityIndicator size="large" color={styleColor.primary} />
        </View>
      );
    }
    return (
      <View style={s.container}>
        <Grid style={s.imagesList} renderItem={this.renderImageItem} data={images} itemsPerRow={columns} />
      </View>
    );
  }
}

GalleryPage.navigationOptions = () => ({
  headerTitle: <Text style={Platform.OS === 'android' ? s.headerTextAndroid : s.headerText}>Gallery</Text>,
  headerLeft: <BackButton />,
  headerStyle: s.topBar,
  headerTitleStyle: s.topTitle
});

const mapStateToProps = createStructuredSelector({
  searchValue: selectSearchValue(),
  columns: selectColumns()
});

const enhancer = compose(connect(mapStateToProps, undefined));

GalleryPage.propTypes = {
  searchValue: PropTypes.string,
  columns: PropTypes.number
};

export default enhancer(GalleryPage);
