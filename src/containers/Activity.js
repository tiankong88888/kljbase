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
    header: null,
  }

  gotoActivity2 = () => {
    this.props.navigation.navigate({ routeName: 'Activity2' })
  }

  render() {
    return (
      <Container>
        <Header>
          <Body style={styles.body}>
            <Text style={styles.text}>Activity</Text>
          </Body>
        </Header>
        <View>
          <Text>Activity Body</Text>
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
