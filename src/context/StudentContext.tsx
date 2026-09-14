import { createContext, useEffect, useState } from "react"

export interface Student {
    id: number,
    name: string,
    avatar: string,
    gpa: number,
    major: string
}

interface StudentContextType {
    students: Student[],
    setStudents: (students: Student[]) => void,
    query: string,
    setQuery: (query: string) => void,
    favorites: number,
    setFavorites: (favorites: number) => void,
    sort: string,
    setSort: (sort: string) => void
}

export const StudentContext = createContext<StudentContextType>({
    students: [],
    setStudents: () => {},
    query: "",
    setQuery: () => {},
    favorites: 0,
    setFavorites: () => {},
    sort: "default",
    setSort: () => {}
})

export function StudentProvider({ children }: { children: React.ReactNode }) {

    const [students, setStudents] = useState<Student[]>([])
    const [query, setQuery] = useState("")
    const [favorites, setFavorites] = useState(0)
    const [sort, setSort] = useState("default")
    const [studentsLoaded, setStudentsLoaded] = useState(false)

    useEffect(() => {

        const savedStudents = localStorage.getItem("students")

        if (savedStudents) {

            setStudents(JSON.parse(savedStudents))
            setStudentsLoaded(true)

        } else {

            setTimeout(() => {

                const studentData: Student[] = [
                    {
                        id: 1,
                        name: "Ahmed Nazmus Sakib",
                        avatar: "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1974&auto=format&fit=crop",
                        gpa: 3.54,
                        major: "Software Engineering"
                    },
                    {
                        id: 2,
                        name: "Rahim Ahmed",
                        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&auto=format&fit=crop&q=60",
                        gpa: 3.72,
                        major: "Computer Science"
                    },
                    {
                        id: 3,
                        name: "Karim Hasan",
                        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60",
                        gpa: 3.41,
                        major: "Management Information System"
                    },
                    {
                        id: 4,
                        name: "Sadia Islam",
                        avatar: "https://media.istockphoto.com/id/2224013845/photo/professional-businesswoman-smiling-gripping-laptop-standing-confidently-in-sleek-corporate.webp",
                        gpa: 3.88,
                        major: "Software Engineering"
                    }
                ]

                setStudents(studentData)
                setStudentsLoaded(true)

            }, 1500)
        }

    }, [])

    useEffect(() => {

        if (studentsLoaded) {
            localStorage.setItem("students", JSON.stringify(students))
        }

    }, [students, studentsLoaded])

    return (
        <StudentContext.Provider
            value={{
                students,
                setStudents,
                query,
                setQuery,
                favorites,
                setFavorites,
                sort,
                setSort
            }}
        >
            {children}
        </StudentContext.Provider>
    )
}