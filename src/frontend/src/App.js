import './App.css';
import { useState, useEffect } from "react";
import { getAllStudents } from "./Client";

function App() {
    const [students, setStudents] = useState([]);

    const fetchStudents = () =>
        getAllStudents()
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setStudents(data);
            });

    useEffect(() => {
        console.log("component is mounted")
        fetchStudents();
    }, [])

    if (students.length <= 0) {
        return "no data";
    }

    return students.map((student, index) => {
        return <p key={index}>{student.id} {student.name}</p>
    })
}

export default App;
