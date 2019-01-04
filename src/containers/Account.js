import React, { Component } from 'react'
import {  StyleSheet, } from 'react-native'
import { connect } from 'react-redux'

import {
  Header,
  Container,
  Text,
  Card,
  CardItem,
  Left,
  Body,
  Right,
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
  render() {
    const { userDetail } = this.props

    return (
      <Container>
        <Header>
          <Body style={styles.body}>
            <Text style={styles.text}>我的信息</Text>
          </Body>
        </Header>
        <Card>
          <CardItem header bordered>
            <Text>个人信息</Text>
          </CardItem>
          <CardItem>
            <Left style={{ flexDirection: 'column' }}>
              <Text style={{ fontSize: 15, alignSelf: 'flex-start' }}>
                姓名：{userDetail && userDetail.name}
              </Text>
              <Text style={{ fontSize: 15, alignSelf: 'flex-start' }}>
                电话：{userDetail && userDetail.phone}
              </Text>
            </Left>
            <Body />
            <Right />
          </CardItem>
        </Card>
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
