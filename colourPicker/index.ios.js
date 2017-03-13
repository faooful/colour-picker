/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ColorDraw from './components/ColorDraw';
import ColorSelection from './components/ColorSelection';

export default class ColourPicker extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ColorSelection/>
        <ColorDraw/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E0E0E',
  },
});

AppRegistry.registerComponent('colourPicker', () => ColourPicker);
