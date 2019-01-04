import React from 'react'

import { createStackNavigator } from 'react-navigation'
import { Icon } from 'native-base'

import Home from './Home'

const HomeNavigator = createStackNavigator(
  {
    MainHome: {
      screen: Home,
    },
  },
  {
    headerMode: 'screen',
  }
)

HomeNavigator.navigationOptions = {
  tabBarLabel: '首页',
  tabBarIcon: ({ tintColor }) => (
    <Icon 
      name="home" 
      size={30} 
      style={{ color: tintColor }} />
  ),
}

export default HomeNavigator
