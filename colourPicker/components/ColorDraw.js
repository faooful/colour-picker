import React, { PureComponent } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ColorDraw extends PureComponent {
  render() {
    return (
      <View style={styles.container}>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flexDirection: 'row',
    height: 150,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
