import { put } from 'redux-saga/effects'
import sampleUsers from '../sample-user.json'
import { PayloadAction } from '@reduxjs/toolkit'
import { saveToLocalStorage } from '../utils/localStorageUtils'

export function* loginSaga(action: PayloadAction<{ username: string; password: string }>) {
    // const response = yield call(fetchEmployeesService)

    // console.log('sg', response)

    const users = sampleUsers

    if (!action.payload.username && !action.payload.password) {
        yield put({ type: 'currentUser/loginError', payload: 'Invalid username and password' })
    } else {
        const check = users.filter(
            (eachUser) =>
                eachUser.username === action.payload.username &&
                eachUser.password === action.payload.password,
        )

        if (check.length === 1) {
            const { password, ...rest } = check[0]
            saveToLocalStorage(JSON.stringify({ ...rest }))
            yield put({ type: 'currentUser/setCurrentUser', payload: check[0] })
        } else {
            yield put({ type: 'currentUser/loginError', payload: 'Invalid username and password' })
        }
    }
}
