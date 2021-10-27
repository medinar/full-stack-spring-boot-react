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

export const getStudentById = studentId =>
    fetch(`api/v1/students/${studentId}`)
        .then(checkStatus);

export const addNewStudent = student =>
    fetch("api/v1/students", {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(student)
    });

export const updateStudent = student =>
    fetch("api/v1/students", {
        headers: {
            "Content-Type": "application/json"
        },
        method: "PUT",
        body: JSON.stringify(student)
    });

export const deleteStudent = studentId =>
    fetch(`api/v1/students/${studentId}`, {
        method: "DELETE"
    }).then(checkStatus);