import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ThemeContext, getTheme } from 'react-native-material-ui'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import { uiTheme, colors } from './src/globalStyles'
import Routes from './src/routes'

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql'
})

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
