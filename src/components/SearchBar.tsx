import { useContext } from "react"
import { StudentContext } from "../context/StudentContext"

export default function SearchBar() {

    const { query, setQuery } = useContext(StudentContext)

    return (
        <>
            <input
                type="text"
                placeholder="Search students..."
                value={query}
                onChange={(event) => setQuery(event.target.value)}
            />
        </>
    )
}