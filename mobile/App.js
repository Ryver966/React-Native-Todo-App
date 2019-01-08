import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ThemeContext, getTheme } from 'react-native-material-ui'

import { uiTheme } from './src/globalStyles'

export default class App extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value={getTheme(uiTheme)}>
        <View style={styles.container}>
          <Text>It lives!</Text>
        </View>
      </ThemeContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
