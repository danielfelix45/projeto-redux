import { all, takeEvery, call, put, delay, takeLatest } from 'redux-saga/effects'
import { fetchUsersSuccess, fetchUsersFailure } from './slice'

import axios from 'axios'
// API USERS: http://jsonplaceholder.typicode.com/users/")

// Função com asterisco são chamadas de funções geradoras, são usadas quando precisa buscar dados externos como de uma API ou banco de dados, são como async/await(yield = await) 
function* fetchUsers() {
  try {
    // Aumenta em 2 segundos a demora pra buscar os dados na API, dica de simulação.
    yield delay(1000)

    const response = yield call(axios.get, "http://jsonplaceholder.typicode.com/users/")
    yield put(fetchUsersSuccess(response.data))

  } catch (e) {
    yield put(fetchUsersFailure(e.message))
  }
}

export default all([
  // TakeLatest mostra os dados da ùltima chamada.
  //takeLatest("user/fetchUsers", fetchUsers),
  // TakeEvery mostra os dados de todas as chamadas.
  takeEvery("user/fetchUsers", fetchUsers)
])