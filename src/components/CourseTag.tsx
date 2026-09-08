import PropTypes from 'prop-types'

interface CourseTagProps {
    courseName: string,
    color: string
}

export default function CourseTag(course: CourseTagProps) {
    return (
        <>
            <span style={{ backgroundColor: course.color }}>
                {course.courseName}
            </span>
        </>
    )
}

Object.assign(CourseTag, {
    propTypes: {
        courseName: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired
    }
})