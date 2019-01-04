import React, { Component } from 'react'
import { connect } from 'react-redux'

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

@connect()
export default class HomcContainer extends Component {
  static navigationOptions = {
    tabBarLabel: '首页',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="home" size={30} style={{ color: tintColor }} />
    ),
  }

  render() {
    return <HomeNavigator />
  }
}
