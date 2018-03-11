import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import PropTypes from 'prop-types';

import SearchPage from 'app/containers/SearchPage';
import GalleryPage from 'app/containers/GalleryPage';
import { selectNavigator } from './selectors';
import { addNavigationListener } from '../../store';

export const AppNavigator = StackNavigator({
  SearchPage: { screen: SearchPage },
  GalleryPage: { screen: GalleryPage }
});

const Navigator = ({ dispatch, navigator }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: navigator, addListener: addNavigationListener })} />
);

const mapStateToProps = createStructuredSelector({
  navigator: selectNavigator()
});

Navigator.propTypes = {
  navigator: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(Navigator);
