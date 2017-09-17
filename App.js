import React, { Component } from 'react'
import { StyleSheet, Text, View, AppRegistry } from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <View style={styles.box} /> */}
        <View style={{ flex: 1, backgroundColor: 'red' }} />
        <View style={{ flex: 2, backgroundColor: 'green' }} />
        <View style={{ flex: 3, backgroundColor: 'blue' }} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'flex-end',
    // alignItems: 'flex-start',
  },
  box: {
    height: 50,
    width: 50,
    backgroundColor: '#e76e63',
    margin: 10,
  }
})
