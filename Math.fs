module MathSystem

let add a b = a + b
let subtract a b = a - b
let multiply a b = a * b
let divide a b = a / b
let square x = x * x
let power x n =
    let rec pow acc n = if n <= 0 then acc else pow (acc * x) (n-1)
    pow 1 n
