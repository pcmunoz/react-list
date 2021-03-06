import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { useAppDispatch } from '../app/hooks'
import { LOGOUT_USER } from '../app/actions'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import IconButton from '@material-ui/core/IconButton'
import { useHistory } from 'react-router-dom'

interface CommonAppBarProps {
    name: string
    showBack?: boolean
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
)

const CommonAppBar: React.FC<CommonAppBarProps> = ({ name, showBack }) => {
    const classes = useStyles()

    const dispatch = useAppDispatch()
    const history = useHistory()

    const handleLogout = () => {
        dispatch({ type: LOGOUT_USER })
    }

    const handleBack = () => {
        history.goBack()
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    {showBack && (
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            onClick={handleBack}
                        >
                            <ArrowBackIcon />
                        </IconButton>
                    )}
                    <Typography variant="h6" className={classes.title}>
                        {name}
                    </Typography>
                    <Button color="inherit" onClick={handleLogout}>
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default CommonAppBar
