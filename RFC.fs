module RFCSystem

type RFC = {
    Id:int
    Title:string
    Description:string
    Author:string
    Markdown:string
}

let rfcList = [
    { Id=1; Title="Student DB"; Description="Manage students"; Author="Alice"; Markdown="# Student DB\nDocs" }
    { Id=2; Title="MathLib"; Description="Math functions"; Author="Bob"; Markdown="# MathLib\nDocs" }
]

let printRFCs() =
    rfcList |> List.iter (fun r ->
        printfn "ID:%d | %s | By:%s\n  Markdown:\n%s" r.Id r.Title r.Author r.Markdown)
