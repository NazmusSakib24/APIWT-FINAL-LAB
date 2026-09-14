import { useContext, useEffect, useState } from 'react'
import StudentCard from './components/StudentCard'
import DashboardHeader from './components/DashboardHeader'
import './App.css'
import SearchBar from './components/SearchBar'
import SortControls from './components/SortControls'
import { StudentContext } from './context/StudentContext'

function App() {

    const {
        students,
        query,
        favorites,
        sort
    } = useContext(StudentContext)

    const [loading, setLoading] = useState(true)

    useEffect(() => {

        if (students.length > 0) {
            setLoading(false)
        }

    }, [students])

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

    return (
        <>
            <DashboardHeader
                title="Student Dashboard"
                tagline="Manage and view student information"
                favorites={favorites}
            />

            <SearchBar />

            <SortControls />

            {
                loading ? (
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