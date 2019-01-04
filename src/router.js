import React, { PureComponent } from 'react'

import {
  StyleSheet,
  BackHandler,
  Animated,
  Easing,
} from 'react-native'

import {
  createStackNavigator,
  createBottomTabNavigator,
  NavigationActions,
} from 'react-navigation'

import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers'

import { connect } from 'react-redux'

import { Root } from 'native-base'

import Login from './containers/Login'
import HomeContainer from './containers/HomeContainer'
import AccountContainer from './containers/AccountContainer'
import ActivityContainer from './containers/ActivityContainer'
import PatientContainer from './containers/PatientContainer'

const MainNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeContainer,
    },
    Patient: {
      screen: PatientContainer,
    },
    Activity: {
      screen: ActivityContainer,
    },
    Account: {
      screen: AccountContainer,
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#00b',
      inactiveTintColor: '#666',
    },
  }
)

const AppNavigator = createStackNavigator(
  {
    Login: { screen: Login },
    Main: { screen: MainNavigator },
  },
  {
    headerMode: 'none',
    mode: 'modal',
    navigationOptions: {
      gesturesEnabled: false,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps
        const { index } = scene

        const height = layout.initHeight
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        })

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        })

        return { opacity, transform: [{ translateY }] }
      },
    }),
  }
)

export const routerReducer = createNavigationReducer(AppNavigator)

export const routerMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.router
)

const App = reduxifyNavigator(AppNavigator, 'root')

function getActiveRouteName(navigationState) {
  if (!navigationState) {
    return null
  }
  const route = navigationState.routes[navigationState.index]
  if (route.routes) {
    return getActiveRouteName(route)
  }
  return route.routeName
}

@connect(({ app, router }) => ({ app, router }))
class Router extends PureComponent {
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backHandle)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backHandle)
  }

  backHandle = () => {
    const currentScreen = getActiveRouteName(this.props.router)
    if (currentScreen === 'Login') {
      return true
    }
    if (currentScreen !== 'Home') {
      this.props.dispatch(NavigationActions.back())
      return true
    }
    return false
  }

  render() {
    const { dispatch, router } = this.props
    console.log(router)

    return (
      <Root>
        <App dispatch={dispatch} state={router} />
      </Root>
    )
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
})

export default Router