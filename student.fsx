module StudentSystem

type Student = {
    Id:int
    Name:string
    Age:int
    Score:int
}

let mutable students = [
    { Id=1; Name="Alice"; Age=20; Score=85 }
    { Id=2; Name="Bob"; Age=22; Score=90 }
]

let printStudents list =
    list |> List.iter (fun s -> printfn "ID:%d Name:%s Age:%d Score:%d" s.Id s.Name s.Age s.Score)
