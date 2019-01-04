import React, { Component } from 'react'
import {  StyleSheet, View, } from 'react-native'
import { connect } from 'react-redux'

import {
  Header,
  Body,
  Container,
  Text,
  Button,
} from 'native-base'

import {
  NavigationActions,
  createAction,
  createActionWithCallback,
} from '../utils'

@connect(({ app }) => ({ ...app }))
export default class Actvity extends Component {
  static navigationOptions = {
    title: '活动2',
    headerStyle: {
      backgroundColor: '#3F51B5',
    },
  }

  gotoPatient2 = () => {
    this.props.navigation.navigate({ routeName: 'Patient' })
  }

  render() {
    return (
      <Container>
        <View>
          <Text>Activity Body</Text>
          <Button onPress={this.gotoPatient2}><Text>Patient2</Text></Button>
        </View>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  body: { 
    flex: 1, 
    alignItems: 'center' 
  },
  text: {
    fontSize: 20, 
    color: '#fff'
  },
})
