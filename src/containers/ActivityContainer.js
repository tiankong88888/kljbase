import React, { Component } from 'react'

import { connect } from 'react-redux'

import { createStackNavigator } from 'react-navigation'
import { Icon } from 'native-base'

import Activity from './Activity'

const ActivityNavigator = createStackNavigator(
  {
    ActivityHome: {
      screen: Activity,
    },
  },
  {
    headerMode: 'screen',
  }
)

@connect()
export default class ActivityContainer extends Component {
  static navigationOptions = {
    tabBarLabel: '活动',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name="home"
        size={30}
        style={{ color: tintColor }}
      />
    ),
  }

  render() {
    return <ActivityNavigator/>
  }
}
