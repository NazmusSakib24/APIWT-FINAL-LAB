import PropTypes from 'prop-types'
import CourseTag from './CourseTag'
import StatBadge from './StatBadge'
import { useContext, useState } from 'react'
import { StudentContext } from '../context/StudentContext'

interface StudentCardProps {
    name: string,
    id: number,
    avatar: string,
    gpa: number,
    major: string
}

export default function StudentCard(student: StudentCardProps) {

    const { favorites, setFavorites } = useContext(StudentContext)

    const [isFavorite, setIsFavorite] = useState(false)

    return (
        <div className="student-card">

            <img
                className="student-avatar"
                src={student.avatar}
                alt={student.name}
            />

            <h2>{student.name}</h2>

            <p>Student ID: {student.id}</p>

            <p>Major: {student.major}</p>

            <CourseTag
                courseName="Advanced Programming in Web Technology"
                color="lightblue"
            />

            <br />

            <StatBadge
                label="GPA"
                value={student.gpa.toString()}
            />

            <button
                onClick={() => {
                    setIsFavorite(!isFavorite)

                    if (!isFavorite) {
                        setFavorites(favorites + 1)
                    } else {
                        setFavorites(favorites - 1)
                    }
                }}
            >
                {isFavorite ? "★ Favorited" : "☆ Favorite"}
            </button>

        </div>
    )
}

Object.assign(StudentCard, {
    propTypes: {
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        gpa: PropTypes.number.isRequired,
        major: PropTypes.string.isRequired
    }
})