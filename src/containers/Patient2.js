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
export default class Patient extends Component {
  static navigationOptions = {
    title: '患者2',
    headerStyle: {
      backgroundColor: '#3F51B5',
    },
  }

  gotoActivity2 = () => {
    this.props.navigation.navigate({ routeName: 'Activity2' })
    //this.props.dispatch(NavigationActions.navigate({routeName: 'Activity', screenName: 'Activity2'} ))
  }

  render() {

    return (
      <Container>
        <View>
          <Text>Patient Body</Text>
          <Button onPress={this.gotoActivity2}><Text>Activity2</Text></Button>
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

