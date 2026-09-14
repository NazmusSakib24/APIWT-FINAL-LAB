import { useContext } from "react"
import { StudentContext } from "../context/StudentContext"

export default function SortControls() {

    const { setSort } = useContext(StudentContext)

    return (
        <>
            <button onClick={() => setSort("name")}>
                Name (A-Z)
            </button>

            <button onClick={() => setSort("gpa")}>
                GPA (High to Low)
            </button>

            <button onClick={() => setSort("default")}>
                Default Order
            </button>
        </>
    )
}