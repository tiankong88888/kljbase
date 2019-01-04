import React, { Component } from 'react'
import { StyleSheet, View, } from 'react-native'
import { connect } from 'react-redux'

import {
  Header,
  Body,
  Container,
  Text,
} from 'native-base'

import {
  NavigationActions,
  createAction,
  createActionWithCallback,
} from '../utils'

import Loading from './Loading'

@connect(({ app }) => ({ ...app }))
export default class Home extends Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    const {
      loading,
    } = this.props

    return loading ? (
      <Loading />
    ) : (
       <Container>
        <Header>
          <Body style={styles.body}>
            <Text style={styles.text}>主页</Text>
          </Body>
        </Header>
        <View>
          <Text>我的主页</Text>
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
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 25,
    overflow: 'hidden',
  },
})

