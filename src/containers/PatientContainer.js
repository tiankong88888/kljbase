import React, { Component } from 'react'

import { connect } from 'react-redux'

import { createStackNavigator } from 'react-navigation'
import { Icon } from 'native-base'

import Patient from './Patient'

const PatientNavigator = createStackNavigator(
  {
    PatientHome: {
      screen: Patient,
    },
  },
  {
    headerMode: 'screen',
  }
)

@connect()
export default class ActivityContainer extends Component {
  static navigationOptions = {
    tabBarLabel: '患者',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name="home"
        size={30}
        style={{ color: tintColor }}
      />
    ),
  }

  render() {
    return <PatientNavigator/>
  }
}
