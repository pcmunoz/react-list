import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'
import { Employee } from '../model/employee'

interface EmployeesState {
    list: Employee[]
    error?: string
    loading?: boolean
}

const initialState: EmployeesState = {
    list: [],
    loading: true,
}

export const employeesSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        setEmployees: (state, action: PayloadAction<Employee[]>) => {
            state.list = action.payload
            state.error = undefined
        },
        fetchEmployeesLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload
        },
        fetchEmployeesError: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
    },
})

export const { setEmployees } = employeesSlice.actions

export const selectEmployees = (state: RootState): Employee[] => state.employees.list
export const selectEmployeesLoading = (state: RootState): boolean | undefined =>
    state.employees.loading
export const selectEmployeesError = (state: RootState): string | undefined => state.employees.error

export default employeesSlice.reducer
