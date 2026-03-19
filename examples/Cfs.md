# web4 cfs template


```fsharp
open Falco
open Microsoft.AspNetCore.Builder

let wapp = WebApplication.Create()
wapp.Run(Response.ofPlainText "Hello world")
```

[cfs](https://github.com/FalcoFramework/example) is a toolkit for building functional-first, full-stack web applications using F#.

- Built on the high-performance components of ASP.NET Core.
- Seamlessly integrates with existing .NET Core middleware and libraries.
- Designed to be simple, lightweight and easy to learn.

## Key Features

- Simple and powerful [routing](documentation/routing.md) API.
- Uniform API for [accessing _any_ request data](documentation/request.md).
- Native F# [view engine](documentation/markup.md).
- Asynchronous [request handling](documentation/response.md).
- [Authentication](documentation/authentication.md) and [security](documentation/cross-site-request-forgery.md) utilities.
- Built-in support for [large uploads](documentation/request.md#multipartform-data-binding) and [binary responses](documentation/response.md#content-disposition).


## Design Goals

- Provide a toolset to build full-stack web application in F#.
- Should be simple, extensible and integrate with existing .NET libraries.
- Can be easily learned.


