// ...
import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import employeesReducer from '../reducers/employeesReducer'
import currentUserReducer from '../reducers/currentUserReducer'
import { rootSaga } from '../sagas'
import { loadFromLocalStorage } from '../utils/localStorageUtils'

const sagaMiddleware = createSagaMiddleware()

const persistedState = {
    currentUser: { user: loadFromLocalStorage() },
    employees: { list: [] },
}

const rootReducer = combineReducers({
    currentUser: currentUserReducer,
    employees: employeesReducer,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const store = createStore(rootReducer, persistedState, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)
