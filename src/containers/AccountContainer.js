import React from 'react'

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

AccountNavigator.navigationOptions = {
  tabBarLabel: '我的',
  tabBarIcon: ({ tintColor }) => (
    <Icon
      name="person"
      size={30}
      style={{ color: tintColor }}
    />
  ),
}

export default AccountNavigator