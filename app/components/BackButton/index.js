import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Button from 'react-native-vector-icons/MaterialIcons';
import { NavigationActions } from 'react-navigation';
import { styleColor } from 'app/colors';

const HeaderBackArrow = ({ dispatchNavigateBack }) => (
  <Button
    color={styleColor.lightBlack}
    size={30}
    name="arrow-back"
    backgroundColor="transparent"
    onPress={() => dispatchNavigateBack()}
  />
);

const mapDispatchToProps = dispatch => ({
  dispatchNavigateBack: () => {
    dispatch(NavigationActions.back());
  }
});

const enhancer = compose(connect(undefined, mapDispatchToProps));

HeaderBackArrow.propTypes = {
  dispatchNavigateBack: PropTypes.func
};

export default enhancer(HeaderBackArrow);
