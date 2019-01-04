import { createAction, NavigationActions, Storage } from '../utils'
import * as authService from '../services/auth'
import * as userService from '../services/userService'

export default {
  namespace: 'app',
  state: {
    login: false,
    loading: false,
    fetching: false,

    //login user info
    status: null,
    type: null,
    token: null,
    name: 'guest',
    orgUuid: null,
    userUuid: null,
    phone: null,
    roles: [],

  },

  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload }
    },

    changeLoginStatusOAuth(state, { payload }) {
      if (!payload) {
        return {
          ...state,
          status: 'error',
        }
      }

      return {
        ...state,
        status: payload.status,
        type: payload.type,
        token: payload.access_token,
        name: payload.name,
        roles: payload.currentAuthority && payload.currentAuthority,
        orgUuid: payload.organization,
        userUuid: payload.uuid,
        phone: payload.phone,
      }
    },

    setUserDetail(state, { payload }) {
      if (!payload) {
        return {
          ...state,
          status: 'error',
        }
      }

      return {
        ...state,
        userDetail: {
          ...payload,
        },
      }
    },
  },

  effects: {
    *login({ payload }, { call, put }) {
      yield put(createAction('updateState')({ fetching: true }))

      const response = yield call(authService.login, payload)
      let login = !!(response && response.access_token)

      // role check
      const roles = response && response.currentAuthority
      if (!login) {
        alert('登录失败')
      }

      if (roles && !roles.includes('doctor') && !roles.includes('nurse')) {
        alert('没有权限')
        login = false
      }

      let userDetail = {}

      if (login) {
        yield put(createAction('changeLoginStatusOAuth')({ ...response }))

        // get user details, include org
        userDetail = yield call(userService.getUserDetail, {
          token: response.access_token,
          orgUuid: response.organization,
          userUuid: response.uuid,
          roles,
        })
        yield put(createAction('setUserDetail')({ ...userDetail }))

        // yield put(NavigationActions.back())
        yield put(
          NavigationActions.navigate({
            routeName: 'Main',
            action: NavigationActions.navigate({ routeName: 'Home' }),
          })
        )
      }

      yield put(createAction('updateState')({ login, fetching: false }))
    },

    *logout(action, { call, put }) {
      yield put(
        createAction('updateState')({
          login: false,
          status: null,
          type: null,
          token: null,
          name: null,
          orgUuid: null,
          phone: null,
          userDetail: {},
        })
      )

      yield put(NavigationActions.navigate({ routeName: 'Login' }))
    },
    
  },

  subscriptions: {
    //no subscription now
  },
}
