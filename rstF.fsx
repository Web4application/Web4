open System

// --------------------------
// RFC / Documentation system
// --------------------------
type RFC = {
    Id: int
    Title: string
    Description: string
    Author: string
    Markdown: string
}

module RFCSystem =
    let rfcList = [
        { Id=1; Title="Student Database"; Description="Manage student data"; Author="Alice"; Markdown="# Student DB\nThis RFC describes the student DB." }
        { Id=2; Title="Math Library"; Description="Advanced math"; Author="Bob"; Markdown="# MathLib\nProvides math functions." }
    ]

    let printRFCs() =
        printfn "Registered RFCs:"
        rfcList |> List.iter (fun r ->
            printfn "ID:%d | %s | By: %s\n  %s\n  Markdown:\n%s" r.Id r.Title r.Author r.Description r.Markdown)

    let findRFC id = rfcList |> List.tryFind (fun r -> r.Id = id)


// --------------------------
// Student system (with SQL simulation)
// --------------------------
type Student = {
    Id:int
    Name:string
    Age:int
    Score:int
}

module StudentSystem =
    let mutable students = [
        { Id=1; Name="Alice"; Age=20; Score=85 }
        { Id=2; Name="Bob"; Age=22; Score=90 }
        { Id=3; Name="Charlie"; Age=19; Score=72 }
    ]

    // Simulate a SQL SELECT query
    let query sql =
        match sql.ToLower() with
        | s when s.Contains("select * from students") -> students
        | s when s.Contains("where score > 80") -> students |> List.filter (fun st -> st.Score > 80)
        | _ -> []

    let printStudents list =
        list |> List.iter (fun s ->
            printfn "ID:%d Name:%s Age:%d Score:%d" s.Id s.Name s.Age s.Score)

    let classifyScore score =
        match score with
        | s when s >= 90 -> "Excellent"
        | s when s >= 75 -> "Good"
        | s when s >= 50 -> "Average"
        | _ -> "Fail"


// --------------------------
// Math module
// --------------------------
module MathSystem =
    let add a b = a + b
    let subtract a b = a - b
    let multiply a b = a * b
    let divide a b = a / b
    let square x = x * x
    let power x n = 
        let rec pow acc n =
            if n <= 0 then acc else pow (acc * x) (n - 1)
        pow 1 n


// --------------------------
// Mini Prolog-style logic engine
// --------------------------
type Fact = string * string list

module LogicEngine =
    let mutable facts: Fact list = []

    let addFact (predicate:string) (args:string list) =
        facts <- (predicate, args) :: facts

    let queryFact (predicate:string) (args:string list) =
        facts |> List.exists (fun (p, a) -> p = predicate && a = args)


// --------------------------
// Main program
// --------------------------
[<EntryPoint>]
let main argv =

    printfn "--- RFCS RFC System ---"
    RFCSystem.printRFCs()
    printfn ""

    printfn "--- Student System (SQL Simulation) ---"
    let allStudents = StudentSystem.query "SELECT * FROM students"
    StudentSystem.printStudents allStudents

    printfn "\nStudents with score > 80:"
    let topStudents = StudentSystem.query "SELECT * FROM students WHERE score > 80"
    StudentSystem.printStudents topStudents
    printfn ""

    printfn "--- Math Module ---"
    let a, b = 5, 3
    printfn "%d + %d = %d" a b (MathSystem.add a b)
    printfn "%d ^ %d = %d" a b (MathSystem.power a b)
    printfn ""

    printfn "--- Logic Engine ---"
    LogicEngine.addFact "parent" ["John"; "Mary"]
    LogicEngine.addFact "parent" ["Alice"; "Bob"]

    printfn "Query: Is John parent of Mary? %b" (LogicEngine.queryFact "parent" ["John"; "Mary"])
    printfn "Query: Is Alice parent of Mary? %b" (LogicEngine.queryFact "parent" ["Alice"; "Mary"])

    0
