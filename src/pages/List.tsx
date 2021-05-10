import React from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import PageContainer from '../common/PageContainer'
import TextField from '@material-ui/core/TextField'
import CommonAppBar from '../common/AppBar'
import {
    selectEmployees,
    selectEmployeesError,
    selectEmployeesLoading,
} from '../reducers/employeesReducer'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { FETCH_EMPLOYEES } from '../app/actions'
import CommonSnackbar from '../common/Snackbar'
import { useHistory } from 'react-router-dom'
import { Employee } from '../model/employee'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            backgroundColor: theme.palette.background.paper,
        },
        loading: { marginLeft: 'calc(50% - 22px)' },
    }),
)

const FlatList: React.FC = () => {
    const classes = useStyles()

    const history = useHistory()

    const employees = useAppSelector(selectEmployees)
    const employeesFetchLoading = useAppSelector(selectEmployeesLoading)
    const employeesFetchError = useAppSelector(selectEmployeesError)
    const dispatch = useAppDispatch()

    const [search, setSearch] = React.useState<string>('')
    const [localEmployees, setLocalEmployees] = React.useState<Employee[]>([])

    const handleEmployeeClick = (id: number) => {
        history.push(`/react-list/${id}`)
    }

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }

    React.useEffect(() => {
        if (employees.length === 0) {
            dispatch({ type: FETCH_EMPLOYEES })
        }
    }, [dispatch, employees])

    React.useEffect(() => {
        if (employees.length > 0) {
            if (search) {
                setLocalEmployees(
                    employees.filter((eachEmployee) =>
                        eachEmployee.employee_name.toLocaleLowerCase().includes(search),
                    ),
                )
            } else {
                setLocalEmployees(employees)
            }
        }
    }, [search, employees])

    return (
        <PageContainer>
            {!!employeesFetchError && <CommonSnackbar message={employeesFetchError} />}
            <div className={classes.root}>
                <CommonAppBar name="List" />
                {employeesFetchLoading ? (
                    <div className={classes.loading}>
                        <CircularProgress />
                    </div>
                ) : (
                    <>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            name="search"
                            label="Search List"
                            id="search"
                            value={search}
                            onChange={handleSearchChange}
                        />
                        <List component="nav">
                            {localEmployees.map((eachEmployee, index) => {
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
                    </>
                )}
            </div>
        </PageContainer>
    )
}

export default FlatList
