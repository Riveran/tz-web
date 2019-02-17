import Axios from 'axios'
import {
  URL_GET,
  SET_NEWS,
  CONNECT_ERROR,
  SET_LOADING,
  URL_POST,
  SET_LOGIN,
  STATUS_LOGIN
} from './../constants/index'

export function connectApi () {
  return async dispatch => {
    try {
      const getNews = await Axios.get(`${URL_GET}`)
      dispatch(newsResult(getNews.data))
      dispatch(setLoading(false))
    } catch {
      dispatch(errorConnect('Ошибка при загрузке данных'))
    }
  }
}

export function login (email, password) {
  return async dispatch => {
    try {
      const connectLogin = await Axios.post(`${URL_POST}`, {
        email: email,
        password: password
      })
      dispatch(statusLogin(connectLogin.data.status))
      dispatch(setLogin(connectLogin.data))
    } catch {
      dispatch(errorConnect('Ошибка при загрузке данных'))
    }
  }
}

const newsResult = news => ({
  type: SET_NEWS,
  news
})

const errorConnect = payload => ({
  type: CONNECT_ERROR,
  payload
})

const setLoading = payload => ({
  type: SET_LOADING,
  payload
})

const setLogin = payload => ({
  type: SET_LOGIN,
  payload
})
const statusLogin = payload => ({
  type: STATUS_LOGIN,
  payload
})
