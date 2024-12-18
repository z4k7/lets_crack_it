/*

process.nextTick:
    process.nextTick is a function provided by Node.js that allows a callback to be 
    scheduled to be executed immediately after the current operation completes and before 
    the event loop continues.
    It provides a way to defer the execution of a function until the next pass of the event loop.
    process.nextTick callbacks are processed before any timers, I/O events, or setImmediate 
    callbacks.
//----------------------------------------------------------------------------------------------------------------------------------------------------

API
    An application programming interface is a way for two or more computer 
    programs to communicate with each other.
//----------------------------------------------------------------------------------------------------------------------------------------------------

API versioning
    API versioning is the practice of creating multiple versions of an API to support different
     clients and use cases. It helps ensure that changes to an API don't break existing 
     clients and provides a way to evolve the API over time.
     1.url based
     2.header 
     3.content negotiation
//----------------------------------------------------------------------------------------------------------------------------------------------------

RATE LIMITING
    Rate limiting is a strategy for limiting network traffic on a server. It puts a cap on 
    how quickly and frequently a user can interact with a server or resource, preventing 
    overload and abuse. For instance, we might want to set a limit of, say, 25 requests per 
    hour for users.
//----------------------------------------------------------------------------------------------------------------------------------------------------

IDEMPOTENCE
   Idempotence, in the context of Node.js and web development in general, refers to the property of an operation 
   or function that, when applied multiple times, has the same effect as applying it once. In other words, an
    idempotent operation produces the same result regardless of how many times it is executed.

For HTTP methods, which are commonly used in Node.js applications, idempotence has specific implications:

Safe Methods (Idempotent by Convention): HTTP methods like GET, HEAD, and OPTIONS are considered safe, and they 
are expected to be idempotent. These methods should not have any side effects on the server or the resource being
 accessed. For example, making repeated GET requests to retrieve information should not change the state of the server
  or the resource.

Idempotent Methods: Certain HTTP methods are explicitly designed to be idempotent. The most common examples are PUT 
and DELETE. When you perform a PUT request to update a resource or a DELETE request to delete a resource, the operation 
should be idempotent. Repeating the same request should have the same effect as the initial request.

In Node.js, when you design APIs or web services, it's a good practice to ensure that operations with potential side 
effects are idempotent, especially when dealing with operations that modify data or have consequences on the server 
state. This helps in scenarios where a request is retried due to network issues or other factors.
//----------------------------------------------------------------------------------------------------------------------------------------------------

ORIGIN POLICY
    it helps in connecting to the other website. It implements security so that no other websites 
    can connect to the current website and cause issues
//----------------------------------------------------------------------------------------------------------------------------------------------------

PREFLIGHT
    It is an HTTP request of the OPTIONS method, sent before the request itself, in order to determine 
//----------------------------------------------------------------------------------------------------------------------------------------------------
    if it is safe to send it to check whether the server permits the request

CONTENT NEGOTIATION
    Content negotiation refers to mechanisms defined as a part of HTTP that make it possible to serve 
    different versions of a document (or more generally, representations of a resource) at the same URI, 
    so that user agents can specify which version fits their capabilities the best.

    Content negotiation is the process of selecting one of multiple possible representations to return to
     a client, based on client or server preferences. the header describe the desired user choice

    THE ACCEPT in http request defines the content type the response the user can accept

//----------------------------------------------------------------------------------------------------------------------------------------------------

PROCESS
    , a process refers to a running instance of a computer program. It's an instance of a computer program that's
     being executed or has been launched.

    The process object provides information about, and control over, the current Node.js process.

    Node.js provides a global object called process that provides information and control over the Node.js process.
     It allows you to perform various operations such as:

    Environment Variables: Access environment variables via process.env.
    Exit the Process: Terminate the current process using process.exit().
    Event Loop: Obtain information about the event loop with process.nextTick() and process.on() for handling events.
    Process Arguments: Access command-line arguments using process.argv.
    Process ID: Access the ID of the current process with process.pid.
//----------------------------------------------------------------------------------------------------------------------------------------------------

THREAD
    threads are unit of execution that handle different tasks simultaneously within a program
//----------------------------------------------------------------------------------------------------------------------------------------------------

event EventEmitter
    After some code works if we want to execute or some code to work we can use event emitter
//----------------------------------------------------------------------------------------------------------------------------------------------------

control flow function
   a control flow fn is a fn that runs in between asynchronous function calls and it takes care of collecting data,
    calling the next step of programs
//----------------------------------------------------------------------------------------------------------------------------------------------------

concurrency
    Concurrency is an essential feature of Node. js that enables it to handle large numbers of 
    I/O operations simultaneously, without blocking the execution thread. This concurrency model 
    allows Node. js to handle many requests concurrently, resulting in improved application 
    performance.
//----------------------------------------------------------------------------------------------------------------------------------------------------

cluster
    The cluster module provides a way of creating child processes that runs simultaneously and 
    share the same server port.
//----------------------------------------------------------------------------------------------------------------------------------------------------

child process
 
A child process in Node.js refers to an independently executed program or script created and managed by the main Node.js
 process. These child processes allow Node.js to run system commands, execute other scripts, or perform operations outside
  of its main event loop, enabling concurrency and handling tasks that might be blocking or CPU-intensive without affecting
   the main application's performance.
//----------------------------------------------------------------------------------------------------------------------------------------------------

stub
   stub is a small program that can be used as a longer program and to be loaded later
   it affect the behavior of components or module
   implemented to pre programmed responses
   dummy object for testing
//----------------------------------------------------------------------------------------------------------------------------------------------------

net module
    net module provides an asynchronous network API for creating stream-based TCP or IPC 
    servers.
    it provides asynchronous network api used to create tcp server and client
//----------------------------------------------------------------------------------------------------------------------------------------------------

http head
    it is used to retrive headers details and will not get any normal responsex
//----------------------------------------------------------------------------------------------------------------------------------------------------

http connect
    The CONNECT method is used to start a two-way communications with the requested resource. it connect target sever via proxy server
//----------------------------------------------------------------------------------------------------------------------------------------------------

http OPTIONS
    The HTTP OPTIONS method requests permitted communication options for a given URL or server.
//----------------------------------------------------------------------------------------------------------------------------------------------------

SPAWN
It is used to start a new process and execute in command
//----------------------------------------------------------------------------------------------------------------------------------------------------

FORK
It is used to create child process that run node js modules 

Use fork for running multiple instances of Node.js scripts with IPC.
Use spawn for running external commands or scripts with asynchronous communication.
Use exec when you need to execute a command in a shell environment.
Use execFile when you want to run an executable file directly without involving a shell.
//----------------------------------------------------------------------------------------------------------------------------------------------------

REST
representational state transfer api
features :
    stateless - The communication between client and server does not keep track of the state of sessions from one request to the next
    caching - responses can be cached
    separation of client and server - both should be separated so they can be implemented independently
    layered architecture = A client connected to a REST API usually cannot distinguish whether it is communicating with the end server
     or an intermediate server.
    uniform interface

//----------------------------------------------------------------------------------------------------------------------------------------------------

why http is stateless
We say that HTTP is a stateless protocol, because these commands are executed independently — without any knowledge of previous commands.
 The server is not required to retain any information about a user over the course of multiple requests. In other words, there is no
  recorded continuity.
//----------------------------------------------------------------------------------------------------------------------------------------------------

url module - get url details
dynamic routes = routes that can handle various parameters
//----------------------------------------------------------------------------------------------------------------------------------------------------

http trace
The HTTP TRACE method is designed for diagnostic purposes. If enabled, the web server will respond to requests that use the TRACE 
method by echoing in its response the exact request that was received.
//----------------------------------------------------------------------------------------------------------------------------------------------------

proxy_pass - it is used to configure reverse proxy
//----------------------------------------------------------------------------------------------------------------------------------------------------

fs.stat
it is used to get the metadata of the file, like size,isFile()
//----------------------------------------------------------------------------------------------------------------------------------------------------

CSRF = cross site request forgery
it is a security vulnerability attack
it makes the user to send request ot a user logged in website uninted
to resolve
use csrf tokens - change during sessions
set samesite true   

//----------------------------------------------------------------------------------------------------------------------------------------------------

cors headers
//----------------------------------------------------------------------------------------------------------------------------------------------------

access-control allow ORIGIN
//----------------------------------------------------------------------------------------------------------------------------------------------------

access control maxage
//----------------------------------------------------------------------------------------------------------------------------------------------------

allow credentials
//----------------------------------------------------------------------------------------------------------------------------------------------------

allow headers
//----------------------------------------------------------------------------------------------------------------------------------------------------

threads in thread pool = 4
//----------------------------------------------------------------------------------------------------------------------------------------------------

express.urlencoded = it is used to parse the request to get the contents
extended  means the encoding type of parsing
//----------------------------------------------------------------------------------------------------------------------------------------------------


Task:

A task is a generic term used to describe a unit of work or an operation to be performed. It can be any executable code
 or set of instructions that achieves a specific goal.
In some contexts, "task" is used interchangeably with "process" or "thread," but it can also refer to a higher-level 
abstraction that encompasses multiple processes or threads working together to accomplish a larger goal.

Thread:

A thread is the smallest unit of execution within a process. A process can have multiple threads, and these threads share
 the same resources (memory space, file descriptors, etc.) but run independently.
Threads within a process share the same code section, data section, and open files. However, they have their own registers,
 stack space, and thread-specific data.
Threads are used to achieve parallelism and concurrency, allowing multiple tasks to be performed simultaneously within the 
same process.

Process:

A process is a self-contained unit of execution that runs in its own memory space. It consists of an executable program, data,
 and system resources such as file handles and other attributes.
Processes are isolated from each other, meaning that the memory space of one process is typically not accessible by another.
 Processes communicate through inter-process communication (IPC) mechanisms if needed.
Each process has its own address space, code section, data section, and system resources. Processes provide strong isolation,
 which enhances system stability and security.

In summary:

Task: A general term referring to a unit of work or an operation.
Thread: The smallest unit of execution within a process, running independently within the same process space.
Process: A self-contained unit of execution with its own memory space, resources, and isolation from other processes.
Threads and processes are essential for concurrent programming, allowing computers to execute multiple tasks simultaneously and
efficiently utilize the available resources. The choice between using threads or processes depends on factors such as the nature
of the task, communication requirements, and the desired level of isolation.
//----------------------------------------------------------------------------------------------------------------------------------------------------

thread= it is the unit of execution of 
//----------------------------------------------------------------------------------------------------------------------------------------------------

design patterns = they are blueprints that can be used to create structures and it is reusable
//----------------------------------------------------------------------------------------------------------------------------------------------------

promise patterns
//----------------------------------------------------------------------------------------------------------------------------------------------------

callback patterns
//----------------------------------------------------------------------------------------------------------------------------------------------------

middleware patterns
//----------------------------------------------------------------------------------------------------------------------------------------------------

module
//----------------------------------------------------------------------------------------------------------------------------------------------------

async/await
//----------------------------------------------------------------------------------------------------------------------------------------------------

socket = it refers to endpoint that is used for sending and receive data between two nodes.
//----------------------------------------------------------------------------------------------------------------------------------------------------


zlib

In Node.js, zlib is a built-in module that provides compression and decompression functionalities, allowing you to work with
 data in compressed formats. It supports various compression algorithms such as gzip, deflate, and brotli.
//----------------------------------------------------------------------------------------------------------------------------------------------------


 */