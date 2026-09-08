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
        </>
    )
}