import { useContext, useState } from "react"
import { StudentContext } from "../context/StudentContext"

export default function AddStudentForm() {

    const { students, setStudents } = useContext(StudentContext)

    const [name, setName] = useState("")
    const [id, setId] = useState("")
    const [major, setMajor] = useState("")
    const [gpa, setGpa] = useState("")
    const [courses, setCourses] = useState("")

    const [nameError, setNameError] = useState("")
    const [idError, setIdError] = useState("")
    const [majorError, setMajorError] = useState("")
    const [gpaError, setGpaError] = useState("")

    const handleSubmit = (event: React.FormEvent) => {

        event.preventDefault()

        setNameError("")
        setIdError("")
        setMajorError("")
        setGpaError("")

        let valid = true

        if (name.trim() === "") {
            setNameError("Name is required")
            valid = false
        }

        if (id.trim() === "") {
            setIdError("Student ID is required")
            valid = false
        } else if (!/^\d+$/.test(id)) {
            setIdError("Student ID must be numeric")
            valid = false
        } else if (students.some((student) => student.id === Number(id))) {
            setIdError("Student ID must be unique")
            valid = false
        }

        if (major.trim() === "") {
            setMajorError("Major is required")
            valid = false
        }

        if (gpa === "") {
            setGpaError("GPA is required")
            valid = false
        } else if (Number(gpa) < 0 || Number(gpa) > 4) {
            setGpaError("GPA must be between 0 and 4.0")
            valid = false
        }

        if (!valid) {
            return
        }

        const newStudent = {
            id: Number(id),
            name: name,
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
            gpa: Number(gpa),
            major: major
        }

        setStudents([...students, newStudent])

        setName("")
        setId("")
        setMajor("")
        setGpa("")
        setCourses("")
    }

    return (
        <form onSubmit={handleSubmit}>

            <h2>Add Student</h2>

            <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            {nameError && <p>{nameError}</p>}

            <input
                type="text"
                placeholder="Student ID"
                value={id}
                onChange={(event) => setId(event.target.value)}
            />
            {idError && <p>{idError}</p>}

            <input
                type="text"
                placeholder="Major"
                value={major}
                onChange={(event) => setMajor(event.target.value)}
            />
            {majorError && <p>{majorError}</p>}

            <input
                type="number"
                placeholder="GPA"
                value={gpa}
                onChange={(event) => setGpa(event.target.value)}
            />
            {gpaError && <p>{gpaError}</p>}

            <input
                type="text"
                placeholder="Courses (comma-separated)"
                value={courses}
                onChange={(event) => setCourses(event.target.value)}
            />

            <button type="submit">
                Add Student
            </button>

        </form>
    )
}