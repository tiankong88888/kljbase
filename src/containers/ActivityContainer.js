import React  from 'react'

import { createStackNavigator } from 'react-navigation'
import { Icon } from 'native-base'

import Activity from './Activity'
import Activity2 from './Activity2'

const ActivityNavigator = createStackNavigator(
  {
    ActivityHome: {
      screen: Activity,
    },
    Activity2: {
      screen: Activity2,
    },
  },
  {
    headerMode: 'screen',
  }
)

ActivityNavigator.navigationOptions = {
  tabBarLabel: '活动',
  tabBarIcon: ({ tintColor }) => (
    <Icon
    types="Feather"
    name="calendar"
      size={30}
      style={{ color: tintColor }}
    />
  ),
}

export default ActivityNavigator