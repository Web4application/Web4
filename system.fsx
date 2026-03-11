open System

// --------------------------
// RFC / Documentation system
// --------------------------
type RFC = {
    Id: int
    Title: string
    Description: string
    Author: string
}

// Module for RFCs
module RFCSystem =
    let rfcList = [
        { Id = 1; Title = "Student Database"; Description = "Manage student data"; Author = "Alice" }
        { Id = 2; Title = "Math Library"; Description = "Advanced math operations"; Author = "Bob" }
        { Id = 3; Title = "Mini Compiler"; Description = "Parse and run simple DSL"; Author = "Charlie" }
    ]

    let printRFCs() =
        printfn "Registered RFCs:"
        rfcList |> List.iter (fun r ->
            printfn "ID:%d | %s | By: %s\n  %s" r.Id r.Title r.Author r.Description)

    let findRFC id =
        rfcList |> List.tryFind (fun r -> r.Id = id)


// --------------------------
// Student system
// --------------------------
type Student = {
    Id: int
    Name: string
    Age: int
    Score: int
}

module StudentSystem =
    let mutable students = [
        { Id = 1; Name = "Alice"; Age = 20; Score = 85 }
        { Id = 2; Name = "Bob"; Age = 22; Score = 90 }
        { Id = 3; Name = "Charlie"; Age = 19; Score = 72 }
    ]

    let printStudents() =
        students |> List.iter (fun s ->
            printfn "ID:%d Name:%s Age:%d Score:%d" s.Id s.Name s.Age s.Score)

    let addStudent student =
        students <- student :: students

    let classifyScore score =
        match score with
        | s when s >= 90 -> "Excellent"
        | s when s >= 75 -> "Good"
        | s when s >= 50 -> "Average"
        | _ -> "Fail"

    let showReport id =
        match students |> List.tryFind (fun s -> s.Id = id) with
        | Some student ->
            let grade = classifyScore student.Score
            printfn "Report for %s | Score: %d | Grade: %s" student.Name student.Score grade
        | None ->
            printfn "Student not found"

// --------------------------
// Mini Math Module
// --------------------------
module MathSystem =
    let add a b = a + b
    let subtract a b = a - b
    let multiply a b = a * b
    let divide a b = a / b
    let square x = x * x
    let power x n = 
        let rec pow acc n =
            if n <= 0 then acc
            else pow (acc * x) (n - 1)
        pow 1 n

// --------------------------
// Main program
// --------------------------
[<EntryPoint>]
let main argv =
    // Show RFCs
    RFCSystem.printRFCs()
    printfn ""

    // Show students
    printfn "Student List:"
    StudentSystem.printStudents()
    printfn ""

    // Add new student
    StudentSystem.addStudent { Id = 4; Name = "Diana"; Age = 21; Score = 95 }
    printfn "After adding Diana:"
    StudentSystem.printStudents()
    printfn ""

    // Show student report
    StudentSystem.showReport 2
    StudentSystem.showReport 4
    printfn ""

    // Use Math module
    let a = 5
    let b = 3
    printfn "Math operations: %d + %d = %d" a b (MathSystem.add a b)
    printfn "%d ^ %d = %d" a b (MathSystem.power a b)

    0 // return exit code
