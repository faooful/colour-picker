import React, { PureComponent } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

export default class ColorSelection extends PureComponent {
  render() {
    return (
      <ScrollView horizontal style={styles.container}>
        <View style={styles.color}/>
        <View style={styles.color}/>
        <View style={styles.color}/>
        <View style={styles.color}/>
        <View style={styles.color}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 67,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 200,
    marginLeft: 20,
    // left: 0,
    // right: 0,
  },
  color: {
    backgroundColor: 'white',
    height: 67,
    width: 67,
    marginRight: 20,
    borderRadius: 8,
  },
});
