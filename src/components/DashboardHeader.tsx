import PropTypes from 'prop-types'
import StatBadge from './StatBadge'
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { StudentContext } from "../context/StudentContext"

interface DashboardHeaderProps {
    title: string,
    tagline: string,
    favorites: number
}

export default function DashboardHeader(header: DashboardHeaderProps) {

    const { theme, toggleTheme } = useContext(ThemeContext)
    const { students } = useContext(StudentContext)

    return (
        <>
            <header>

                <h1>{header.title}</h1>

                <p>{header.tagline}</p>

                <nav>
                    <a href="#">Dashboard</a>
                    <a href="#">Students</a>
                    <a href="#">Courses</a>
                </nav>

                <button onClick={toggleTheme}>
                    {theme === "light" ? "Dark Mode" : "Light Mode"}
                </button>

                <StatBadge
                    label="Students"
                    value={students.length.toString()}
                />

                <StatBadge
                    label="favorites"
                    value={header.favorites.toString()}
                />

            </header>
        </>
    )
}

Object.assign(DashboardHeader, {
    propTypes: {
        title: PropTypes.string.isRequired,
        tagline: PropTypes.string.isRequired,
        favorites: PropTypes.number.isRequired
    }
})