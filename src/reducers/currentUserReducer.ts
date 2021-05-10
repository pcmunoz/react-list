import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'
import { User } from '../model/user'

interface CurrentUserState {
    user: User | null
    error?: string
}

const initialState: CurrentUserState = {
    user: null,
}

export const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState,
    reducers: {
        setCurrentUser: (state, action: PayloadAction<User | null>) => {
            state.user = action.payload
        },
        loginError: (state, action: PayloadAction<string>) => {
            console.log('error')
            state.error = action.payload
        },
    },
})

export const { setCurrentUser } = currentUserSlice.actions

export const selectCurrentUser = (state: RootState): User | null => state.currentUser.user
export const selectCurrentUserError = (state: RootState): string | undefined =>
    state.currentUser.error

export default currentUserSlice.reducer
