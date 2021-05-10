import { put } from 'redux-saga/effects'
import { localStorageKey } from '../utils/localStorageUtils'

export function* logoutSaga() {
    localStorage.removeItem(localStorageKey)
    yield put({ type: 'currentUser/setCurrentUser', payload: null })
}
