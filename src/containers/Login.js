import React, { Component } from 'react'
import { StyleSheet, View, Image, ActivityIndicator } from 'react-native'

import {
  Header,
  Body,
  Content,
  Input,
  List,
  ListItem,
  Button,
  InputGroup,
  Icon,
  Text,
} from 'native-base'

import { connect } from 'react-redux'

import { createAction, NavigationActions } from '../utils'

@connect(({ app }) => ({ ...app }))
class Login extends Component {
  static navigationOptions = {
    title: 'Login',
  }

  constructor(props) {
    super(props)
    this.state = {
      username: null,
      password: null,
    }
  }

  onLogin = () => {
    this.props.dispatch(
      createAction('app/login')({
        username: this.state.username,
        password: this.state.password,
      })
    )
  }

  onClose = () => {
    this.props.dispatch(NavigationActions.back())
  }

  render() {
    const { fetching } = this.props
    return (
      <View style={styles.container}>
        {fetching ? (
          <ActivityIndicator />
        ) : (
          <Content contentContainerStyle={styles.content}>
            <View style={styles.header}>
              <Image
                style={{ width: 80, height: 80 }}
                source={require('../images/logo2.png')}
              />
              <Text style={{ fontSize: 30 }}>康乐居</Text>
            </View>
            <List>
              <ListItem>
                <InputGroup>
                  <Icon name="ios-person" style={{ color: '#0A69FE' }} />
                  <Input
                    onChangeText={text => this.setState({ username: text })}
                    value={this.state.username}
                    placeholder="用户名"
                  />
                </InputGroup>
              </ListItem>
              <ListItem>
                <InputGroup>
                  <Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
                  <Input
                    onChangeText={text => this.setState({ password: text })}
                    value={this.state.password}
                    secureTextEntry
                    placeholder="密码"
                  />
                </InputGroup>
              </ListItem>
            </List>
            <Button style={{ margin: 10 }} full primary onPress={this.onLogin}>
              <Text>登录</Text>
            </Button>
          </Content>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 50,
  },
  close: {
    position: 'absolute',
    right: 10,
    top: 30,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: 'gray',
  },
})

export default Login
