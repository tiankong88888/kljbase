import React, { Component } from 'react'

import { connect } from 'react-redux'

import { createStackNavigator } from 'react-navigation'
import { Icon } from 'native-base'

import Account from './Account'

const AccountNavigator = createStackNavigator(
  {
    AccountHome: {
      screen: Account,
    },
  },
  {
    headerMode: 'screen',
  }
)

@connect()
export default class AccountContainer extends Component {
  static navigationOptions = {
    tabBarLabel: '我的',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name="home"
        size={30}
        style={{ color: tintColor }}
      />
    ),
  }

  render() {
    return <AccountNavigator/>
  }
}
