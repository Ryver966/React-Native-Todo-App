import { StyleSheet } from 'react-native'
import { colors } from '../../../globalStyles'

export default styles =  StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    backgroundColor: colors.main,
    alignItems: 'center'
  },
  content: {
    color: colors.background,
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
})
