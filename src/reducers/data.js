import {
  SET_NEWS,
  CONNECT_ERROR,
  SET_LOADING,
  SET_LOGIN,
  STATUS_LOGIN
} from './../constants/index'

const initialState = {
  hello: 'neuro',
  news: [],
  errorMsg: '',
  loading: true,
  login: [],
  loginStatus: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_NEWS:
      return { ...state, news: action.news }

    case CONNECT_ERROR:
      return { ...state, errorMsg: action.payload }

    case SET_LOADING:
      return { ...state, loading: action.payload }

    case SET_LOGIN:
      return { ...state, login: action.payload }
    case STATUS_LOGIN:
      return { ...state, loginStatus: action.payload }

    default:
      return state
  }
}
