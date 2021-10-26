import fetch from 'unfetch';

function checkStatus(response) {
    if (response.ok) {
        return response;
    }
    // convert non-2xx HTTP responses into errors
    // else {
    const error = new Error(response.statusText);
    error.response = response;
    return Promise.reject(error);
    // }
}

export const getAllStudents = () =>
    fetch("api/v1/students")
        .then(checkStatus);