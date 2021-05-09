import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
}))

const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {`Copyright © Patrick Ceasar Munoz ${new Date().getFullYear()}.`}
        </Typography>
    )
}

const PageContainer: React.FC = ({ children }) => {
    const classes = useStyles()

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>{children}</div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    )
}

export default PageContainer
