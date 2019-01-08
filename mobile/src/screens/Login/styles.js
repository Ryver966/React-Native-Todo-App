import { StyleSheet } from 'react-native'
import { colors, screenStyles } from '../../globalStyles'

export default styles =  StyleSheet.create({
  container: screenStyles,
  titleContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 30,
    color: colors.main,
    textAlign: 'center'
  },
  formContainer: {
    flex: 2,
    width: '100%'
  }
})