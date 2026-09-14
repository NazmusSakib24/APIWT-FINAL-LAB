import { useContext, useEffect } from 'react'
import StudentCard from './components/StudentCard'
import DashboardHeader from './components/DashboardHeader'
import './App.css'
import SearchBar from './components/SearchBar'
import SortControls from './components/SortControls'
import AddStudentForm from './components/AddStudentForm'
import { StudentContext } from './context/StudentContext'

function App() {

    const {
        students,
        studentsLoaded,
        query,
        favorites,
        sort
    } = useContext(StudentContext)

    const filteredStudents = students.filter((student) => {
        return (
            student.name.toLowerCase().includes(query.toLowerCase()) ||
            student.major.toLowerCase().includes(query.toLowerCase())
        )
    })

    const sortedStudents = [...filteredStudents].sort((a, b) => {

        if (sort === "name") {
            return a.name.localeCompare(b.name)
        }

        if (sort === "gpa") {
            return b.gpa - a.gpa
        }

        return 0
    })

    useEffect(() => {

        document.title = `Dashboard — ${sortedStudents.length} Students`

    }, [sortedStudents.length])

    return (
        <>
            <DashboardHeader
                title="Student Dashboard"
                tagline="Manage and view student information"
                favorites={favorites}
            />

            <SearchBar />

            <SortControls />

            <AddStudentForm />

            {
                !studentsLoaded ? (
                    <div className="loading-spinner"></div>
                ) : (
                    <div className="student-list">
                        {
                            sortedStudents.map((student) => {
                                return (
                                    <StudentCard
                                        key={student.id}
                                        name={student.name}
                                        id={student.id}
                                        avatar={student.avatar}
                                        gpa={student.gpa}
                                        major={student.major}
                                    />
                                )
                            })
                        }
                    </div>
                )
            }
        </>
    )
}

export default App