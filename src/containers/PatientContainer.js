import React from 'react'

import { createStackNavigator } from 'react-navigation'
import { Icon } from 'native-base'

import Patient from './Patient'
import Patient2 from './Patient2'

const PatientNavigator = createStackNavigator(
  {
    PatientHome: {
      screen: Patient,
    },
    Patient2: {
      screen: Patient2,
    },
  },
  {
    headerMode: 'screen',
  }
)

PatientNavigator.navigationOptions = {
  tabBarLabel: '患者',
  tabBarIcon: ({ tintColor }) => (
    <Icon
      type="MaterialIcons"
      name="group"
      size={30}
      style={{ color: tintColor }}
    />
  ),
}

export default PatientNavigator