open System

// Define a record type
type Student = {
    Id: int
    Name: string
    Age: int
    Score: int
}

// Module for student operations
module StudentSystem =

    let students = [
        { Id = 1; Name = "Alice"; Age = 20; Score = 85 }
        { Id = 2; Name = "Bob"; Age = 22; Score = 90 }
        { Id = 3; Name = "Charlie"; Age = 19; Score = 72 }
        { Id = 4; Name = "Diana"; Age = 21; Score = 95 }
    ]

    // print all students
    let printStudents list =
        list |> List.iter (fun s ->
            printfn "ID:%d Name:%s Age:%d Score:%d"
                s.Id s.Name s.Age s.Score)

    // find student by id
    let findStudent id =
        students |> List.tryFind (fun s -> s.Id = id)

    // classify score
    let classifyScore score =
        match score with
        | s when s >= 90 -> "Excellent"
        | s when s >= 75 -> "Good"
        | s when s >= 50 -> "Average"
        | _ -> "Fail"

    // show report
    let showReport id =
        match findStudent id with
        | Some student ->
            let grade = classifyScore student.Score
            printfn "Student: %s | Score: %d | Grade: %s"
                student.Name student.Score grade
        | None ->
            printfn "Student not found"

// main program
printfn "Student List:"
StudentSystem.printStudents StudentSystem.students

printfn "\nReport for student ID 2:"
StudentSystem.showReport 2

