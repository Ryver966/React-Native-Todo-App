import React from 'react'
import { StyleSheet } from 'react-native'
import { ThemeContext, getTheme } from 'react-native-material-ui'
import { ApolloProvider } from 'react-apollo'

import client from './src/apolloClient'
import { uiTheme, colors } from './src/globalStyles'
import Routes from './src/routes'


export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <ThemeContext.Provider value={getTheme(uiTheme)}>
          <Routes />
        </ThemeContext.Provider>
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
});
