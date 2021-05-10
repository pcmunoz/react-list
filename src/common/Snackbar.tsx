import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert'

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />
}

interface CommonSnackbarProps {
    message: string
}

const CommonSnackbar: React.FC<CommonSnackbarProps> = ({ message }) => {
    const [open, setOpen] = React.useState(true)

    const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return
        }

        setOpen(false)
    }

    return (
        <div>
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <Alert severity="error" onClose={handleClose}>
                    {message}
                </Alert>
            </Snackbar>
        </div>
    )
}

export default CommonSnackbar
