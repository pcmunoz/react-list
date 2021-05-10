import React from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import PageContainer from '../common/PageContainer'
import CommonAppBar from '../common/AppBar'
import {
    selectEmployees,
    selectEmployeesError,
    selectEmployeesLoading,
} from '../reducers/employeesReducer'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { FETCH_EMPLOYEES } from '../app/actions'
import { useParams } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress'
import CommonSnackbar from '../common/Snackbar'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            backgroundColor: theme.palette.background.paper,
        },
        loading: { marginLeft: 'calc(50% - 22px)' },
    }),
)

const SingleDetail: React.FC = () => {
    const classes = useStyles()
    const params = useParams<{ employeeId: string }>()
    const dispatch = useAppDispatch()

    const employees = useAppSelector(selectEmployees)
    const employeesFetchLoading = useAppSelector(selectEmployeesLoading)
    const employeesFetchError = useAppSelector(selectEmployeesError)

    const employee = employees?.find(
        (eachEmployee) => eachEmployee.id === parseInt(params.employeeId),
    )

    React.useEffect(() => {
        if (employees.length === 0) {
            dispatch({ type: FETCH_EMPLOYEES })
        }
    }, [dispatch, employees])

    return (
        <PageContainer>
            {!!employeesFetchError && <CommonSnackbar message={employeesFetchError} />}
            <div className={classes.root}>
                <CommonAppBar name="Detail" showBack />
                {employeesFetchLoading ? (
                    <div className={classes.loading}>
                        <CircularProgress />
                    </div>
                ) : (
                    <>
                        <List component="nav">
                            <ListItem>
                                <ListItemText>Name: {employee?.employee_name}</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>Age: {employee?.employee_age}</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>Salary: {employee?.employee_salary}</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>Image: {employee?.profile_image}</ListItemText>
                            </ListItem>
                        </List>
                    </>
                )}
            </div>
        </PageContainer>
    )
}

export default SingleDetail
