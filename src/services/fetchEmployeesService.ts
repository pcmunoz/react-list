export const fetchEmployeesService = () => {
    const EMPLOYEE_API_ENDPOINT = 'https://dummy.restapiexample.com/api/v1/employees'

    const parameters = {
        method: 'GET',
    }

    return fetch(EMPLOYEE_API_ENDPOINT, parameters)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            return json
        })
}
