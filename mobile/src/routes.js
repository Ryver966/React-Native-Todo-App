import {
  StackNavigator,
  SwitchNavigator
} from 'react-navigation'

import { colors } from './globalStyles'

// auth screens
import Login from './screens/Login'

// global navigation options
const navigationOptions = {
  headerStyle: {
    backgroundColor: colors.main
  }
}

// auth routes
const AuthStack = StackNavigator(
  {
    Login: { screen: Login }
  },
  { navigationOptions }
)

const RootStack = SwitchNavigator(
  {
    AuthStack
  },
  {
    initialRouteName: 'AuthStack',
    headerMode: 'none'
  }
)

export default RootStack
