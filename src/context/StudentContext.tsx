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
    query: string,
    setQuery: (query: string) => void,
    favorites: number,
    setFavorites: (favorites: number) => void,
    sort: string,
    setSort: (sort: string) => void
}

export const StudentContext = createContext<StudentContextType>({
    students: [],
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

    useEffect(() => {

        setTimeout(() => {

            const studentData: Student[] = [
                {
                    id: 1,
                    name: "Ahmed Nazmus Sakib",
                    avatar: "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    gpa: 3.54,
                    major: "Software Engineering"
                },
                {
                    id: 2,
                    name: "Rahim Ahmed",
                    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aHVtYW58ZW58MHx8MHx8fDA%3D",
                    gpa: 3.72,
                    major: "Computer Science"
                },
                {
                    id: 3,
                    name: "Karim Hasan",
                    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGh1bWFufGVufDB8fDB8fHww",
                    gpa: 3.41,
                    major: "Management Information System"
                },
                {
                    id: 4,
                    name: "Sadia Islam",
                    avatar: "https://media.istockphoto.com/id/2224013845/photo/professional-businesswoman-smiling-gripping-laptop-standing-confidently-in-sleek-corporate.webp?a=1&b=1&s=612x612&w=0&k=20&c=vx96XqWomAT9JHJuKds_EyLon6GLY63QfQJddXR6sD8=",
                    gpa: 3.88,
                    major: "Software Engineering"
                }
            ]

            setStudents(studentData)

        }, 1500)

    }, [])

    return (
        <StudentContext.Provider
            value={{
                students,
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