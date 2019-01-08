import React from 'react'
import { TextInput } from 'react-native'
import propTypes from 'prop-types'

import styles from './styles'

const TextField = props => (
  <TextInput 
    style={styles.input}
    onChangeText={val => props.onChange(props.fieldId, val)}
    value={props.value}
    placeholder={props.placeholder}
    placeholderTextColor={'rgba(230,184,0,0.2)'}
  />
)

TextField.propTypes = {
  onChange: propTypes.func.isRequired,
  fieldId: propTypes.string.isRequired,
  placeholder: propTypes.string,
  value: propTypes.string
}

export default TextField
