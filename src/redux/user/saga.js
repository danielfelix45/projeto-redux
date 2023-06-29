import { all, takeEvery, call, put, delay } from 'redux-saga/effects'
import { fetchUsersSuccess, fetchUsersFailure } from './slice'

import axios from 'axios'
// API USERS: http://jsonplaceholder.typicode.com/users/")

function* fetchUsers() {
  try {
    // Aumenta em 2segundos a demora pra buscar os dados na API, dica de simulação.
    yield delay(1000)

    const response = yield call(axios.get, "http://jsonplaceholder.typicode.com/users/")
    yield put(fetchUsersSuccess(response.data))

  } catch (e) {
    yield put(fetchUsersFailure(e.message))
  }
}

export default all([
  takeEvery("user/fetchUsers", fetchUsers)
])