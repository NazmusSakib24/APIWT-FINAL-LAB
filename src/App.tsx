import StudentCard from './components/StudentCard'

interface Student {
    id: number,
    name: string,
    avatar: string,
    gpa: number,
    major: string
}

function App() {

    const students: Student[] = [
        {
            id: 1,
            name: "Ahmed Nazmus Sakib",
            avatar: "",
            gpa: 3.54,
            major: "Software Engineering"
        },
        {
            id: 2,
            name: "Rahim Ahmed",
            avatar: "",
            gpa: 3.72,
            major: "Computer Science"
        },
        {
            id: 3,
            name: "Karim Hasan",
            avatar: "",
            gpa: 3.41,
            major: "Information Technology"
        },
        {
            id: 4,
            name: "Sadia Islam",
            avatar: "",
            gpa: 3.88,
            major: "Software Engineering"
        }
    ]

    return (
        <>
            {
                students.map((student) => {
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
        </>
    )
}

export default App