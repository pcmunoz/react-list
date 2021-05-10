import { put, call } from 'redux-saga/effects'
import { fetchEmployeesService } from '../services/fetchEmployeesService'
import sampleEmployees from '../sample-employees.json'

export function* employeesSaga() {
    try {
        const response = yield call(fetchEmployeesService)
        const { data } = response
        console.log('response', response)
        yield put({ type: 'employees/setEmployees', payload: data })
    } catch (error) {
        const { data } = sampleEmployees
        console.log('local', data)
        console.log('error', error)
        yield put({ type: 'employees/setEmployees', payload: data })
        yield put({
            type: 'employees/fetchEmployeesError',
            payload: 'Error on fetching. Loading local employees data instead',
        })
    }
}
