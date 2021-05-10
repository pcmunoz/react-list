import React from 'react'
import './App.css'
import Login from './pages/Login'
import { useAppSelector } from './app/hooks'
import { selectCurrentUser } from './reducers/currentUserReducer'
import FlatList from './pages/List'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SingleDetail from './pages/Detail'

const App: React.FC = () => {
    const user = useAppSelector(selectCurrentUser)
    console.log('user', user)
    if (!user) {
        return <Login />
    }

    return (
        <Router>
            <Switch>
                <Route path="/react-list/:employeeId">
                    <SingleDetail />
                </Route>
                <Route path="/">
                    <FlatList />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
