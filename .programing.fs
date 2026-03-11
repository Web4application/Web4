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
    printfn "--- RFCS System ---"
    RFCSystem.printRFCs()
    StudentSystem.printStudents StudentSystem.students
    printfn "Logic Engine Test:"
    LogicEngine.addFact "parent" ["John"; "Mary"]
    printfn "%b" (LogicEngine.queryFact "parent" ["John"; "Mary"])
    0
