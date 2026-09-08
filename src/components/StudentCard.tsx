import CourseTag from './CourseTag'
import StatBadge from './StatBadge'

interface StudentCardProps{
    name:string,
    id:number,
    avatar:string,
    gpa:number,
    major:string
}

export default function StudentCard(student:StudentCardProps){
    return (
        <>
            <p>{student.name}</p>
            <p>{student.id}</p>
            <img src={student.avatar}/>
            <p>{student.gpa}</p>
            <p>{student.major}</p>

            <CourseTag
                courseName="Advanced Programmin in Web Technology"
                color="lightblue"
            />

            <StatBadge
                label="GPA"
                value={student.gpa.toString()}
            />
        </>
    )
}