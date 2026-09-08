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