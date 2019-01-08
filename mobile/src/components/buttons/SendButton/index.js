import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import propTypes from 'prop-types'

import styles from './styles'

const SendButton = ({ onPress, label, onLongPress }) => (
  <TouchableOpacity 
    style={styles.container}
    onPress={onPress} 
    onLongPress={onLongPress}
  >
    <Text style={styles.content}>{label}</Text>
  </TouchableOpacity>
)

SendButton.propTypes = {
  onPress: propTypes.func.isRequired,
  label: propTypes.string.isRequired,
  onLongPress: propTypes.func
}

export default SendButton
