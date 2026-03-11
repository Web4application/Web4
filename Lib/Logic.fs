module LogicEngine

type Fact = string * string list
let mutable facts: Fact list = []

let addFact predicate args = facts <- (predicate, args)::facts
let queryFact predicate args = facts |> List.exists (fun (p,a) -> p = predicate && a = args)
