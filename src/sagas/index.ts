import { FETCH_EMPLOYEES, LOGIN_USER, LOGOUT_USER } from '../app/actions'
import { takeLatest } from 'redux-saga/effects'
import { loginSaga } from './loginSaga'
import { employeesSaga } from './employeesSaga'
import { logoutSaga } from './logoutSaga'

export function* rootSaga() {
    yield takeLatest(LOGIN_USER, loginSaga)
    yield takeLatest(LOGOUT_USER, logoutSaga)
    yield takeLatest(FETCH_EMPLOYEES, employeesSaga)
}
