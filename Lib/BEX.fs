module BEX

type Connection = { Server:string; Database:string }
let connect conn =
    printfn "Connecting to server %s, database %s" conn.Server conn.Database
