module PSX

let superAdd a b c = a + b + c

let factorial n =
    let rec fact acc n = if n <= 1 then acc else fact (acc * n) (n-1)
    fact 1 n
