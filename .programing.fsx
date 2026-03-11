open System
open RFCSystem
open StudentSystem
open MathSystem
open LogicEngine
open PSX
open BEX
open ASX
open SWX 

[<EntryPoint>]
let main argv =
    printfn "--- RFCS Starter Project ---\n"

    // RFCs
    RFCSystem.printRFCs()
    printfn ""

    // Students
    StudentSystem.printStudents StudentSystem.students
    printfn ""

    // Math
    printfn "5 + 3 = %d" (MathSystem.add 5 3)
    printfn "5 ^ 3 = %d" (MathSystem.power 5 3)
    printfn ""

    // Logic engine
    LogicEngine.addFact "parent" ["John"; "Mary"]
    printfn "Is John parent of Mary? %b" (LogicEngine.queryFact "parent" ["John"; "Mary"])
    printfn ""

    // PSX
    printfn "Super Add 1+2+3 = %d" (PSX.superAdd 1 2 3)
    printfn "Factorial 5 = %d" (PSX.factorial 5)
    printfn ""

    // BEX
    let conn = { BEX.Server = "localhost"; Database = "RFCS_DB" }
    BEX.connect conn
    printfn ""

    // ASX
    let data = [10;20;30;40]
    printfn "Average = %f" (ASX.average data)
    printfn "Sum = %d" (ASX.sum data)
    printfn ""

    // SWX
    SWX.renderMarkdown "# Hello from SWX\nThis is Markdown rendered!"
    0

