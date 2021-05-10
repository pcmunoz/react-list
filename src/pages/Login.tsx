import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import PageContainer from '../common/PageContainer'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { LOGIN_USER } from '../app/actions'
import { selectCurrentUserError } from '../reducers/currentUserReducer'
import FormHelperText from '@material-ui/core/FormHelperText'

const useStyles = makeStyles((theme) => ({
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}))

const Login: React.FC = () => {
    const classes = useStyles()

    const dispatch = useAppDispatch()

    const error = useAppSelector(selectCurrentUserError)

    const [username, setUsername] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const handleSubmit = () => {
        dispatch({ type: LOGIN_USER, payload: { username, password } })
    }

    return (
        <PageContainer>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Login
            </Typography>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                value={username}
                onChange={handleUsernameChange}
                error={!!error}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={handlePasswordChange}
                error={!!error}
            />
            {!!error && <FormHelperText error>{error}</FormHelperText>}
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
                onClick={handleSubmit}
            >
                Login
            </Button>
        </PageContainer>
    )
}

export default Login
