import React, { Component } from 'react'
import { StyleSheet, View, } from 'react-native'
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
    header: null,
  }

  gotoPatient2 = () => {
    this.props.navigation.navigate({ routeName: 'Patient2' })
  }

  render() {

    return (
      <Container>
        <Header>
          <Body style={styles.body}>
            <Text style={styles.text}>Patient</Text>
          </Body>
        </Header>
        <View>
          <Text>Patient Body</Text>
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

