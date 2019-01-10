import React from 'react'
import { Text, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { getUserByUsernameAndPassword } from '../../actions/user'
import LoginForm from '../../components/forms/Login'

import styles from './styles'

class LoginScreen extends React.Component {
  static navigationOptions = () => ({
    header: null,
  })

  logIn = ({ username, password }) =>
    getUserByUsernameAndPassword({ username, password })

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView
          contentContainerStyle={styles.container}
          enableResetScrollToCoords={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.titleContainer}>
            <Text style={styles.title}>RN Todo App</Text>
          </View>

          <View style={styles.formContainer}>
            <LoginForm 
              onSend={this.logIn}
            />
          </View>
      </KeyboardAwareScrollView>
      </View>
    )
  }
}

export default LoginScreen
