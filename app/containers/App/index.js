import React, { Component } from 'react';
import { View } from 'react-native';
import Navigator from 'app/containers/Navigator';

import s from './styles';

class App extends Component {
  render() {
    console.disableYellowBox = true;
    return (
      <View style={s.container}>
        <Navigator />
      </View>
    );
  }
}

export default App;
