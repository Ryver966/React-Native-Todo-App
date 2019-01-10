import React from 'react'
import { Text, View } from 'react-native'
import propTypes from 'prop-types'

import TextField from '../../fields/TextField'
import SendButton from '../../buttons/SendButton'

import styles from './styles'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: {
        username: '',
        password: ''
      }
    }
  }

  onChangeValue = (fieldId, value) =>
    this.setState({
      value: {
        ...this.state.value,
        [fieldId]: value
      }
    })

  handleSubmit = () => {
    return  this.props.onSend({ username: 'piotr.gorski', password: 'U2FsdGVkX1/L13vuq6pJT3iYsF/f1OS3Ftv7ib5SvKY=' })
  }

  render() {
    return (
      <View style={styles.container}>
        <TextField
          fieldId='username'
          placeholder='Username'
          onChange={this.onChangeValue}
          value={this.state.value['username']}
        />

        <TextField
          fieldId='password'
          placeholder='Password'
          onChange={this.onChangeValue}
          value={this.state.value['password']}
        />

        <View style={styles.buttonContainer}>
          <SendButton 
            onPress={this.handleSubmit}
            label='Login'
          />
        </View>
      </View>
    )
  }
}

LoginForm.propTypes = {
  onSend: propTypes.func.isRequired
}

export default LoginForm
