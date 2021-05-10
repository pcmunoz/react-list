export const fetchEmployeesService = () => {
    const EMPLOYEE_API_ENDPOINT = 'http://dummy.restapiexample.com/api/v1/employees'

    const parameters = {
        method: 'GET',
    }

    return fetch(EMPLOYEE_API_ENDPOINT, parameters)
        .then((response) => {
            console.log(response)
            return response.json()
        })
        .then((json) => {
            return json
        })
}
