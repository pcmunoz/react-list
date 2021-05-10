import React from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import PageContainer from '../common/PageContainer'
import TextField from '@material-ui/core/TextField'
import CommonAppBar from '../common/AppBar'
import { selectEmployees, selectEmployeesError } from '../reducers/employeesReducer'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { FETCH_EMPLOYEES } from '../app/actions'
import CommonSnackbar from '../common/Snackbar'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            backgroundColor: theme.palette.background.paper,
        },
    }),
)

const FlatList: React.FC = () => {
    const classes = useStyles()

    const history = useHistory()

    const employees = useAppSelector(selectEmployees)
    const employeesFetchError = useAppSelector(selectEmployeesError)
    const dispatch = useAppDispatch()

    const handleEmployeeClick = (id: number) => {
        history.push(`/${id}`)
    }

    React.useEffect(() => {
        if (employees.length === 0) {
            dispatch({ type: FETCH_EMPLOYEES })
        }
    }, [dispatch, employees])

    return (
        <PageContainer>
            {!!employeesFetchError && <CommonSnackbar message={employeesFetchError} />}
            <div className={classes.root}>
                <CommonAppBar name="List" />
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="search"
                    label="Search List"
                    id="search"
                />
                <List component="nav">
                    {employees.map((eachEmployee, index) => {
                        return (
                            <ListItem
                                key={index}
                                button
                                onClick={() => handleEmployeeClick(eachEmployee.id)}
                            >
                                <ListItemText>{eachEmployee.employee_name}</ListItemText>
                            </ListItem>
                        )
                    })}
                </List>
            </div>
        </PageContainer>
    )
}

export default FlatList
