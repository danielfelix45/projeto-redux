import { all } from 'redux-saga/effects'
import user from './user/saga'

function* rootSaga() {
  return yield all([
    user,
  ])
}

export default rootSaga