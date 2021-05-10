import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'
import { Employee } from '../model/employee'

interface EmployeesState {
    list: Employee[]
    error?: string
}

const initialState: EmployeesState = {
    list: [],
}

export const employeesSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        setEmployees: (state, action: PayloadAction<Employee[]>) => {
            console.log(action)
            state.list = action.payload
        },
        fetchEmployeesError: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
    },
})

export const { setEmployees } = employeesSlice.actions

export const selectEmployees = (state: RootState): Employee[] => state.employees.list
export const selectEmployeesError = (state: RootState): string | undefined => state.employees.error

export default employeesSlice.reducer
