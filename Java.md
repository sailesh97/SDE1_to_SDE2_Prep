Pillars of OOPs:
1. Abstraction
2. Encapsulation
3. Inheritance
    1. Single
    2. Multi-level
    3. Heirarchihcal
    4. Multiple
4. Polymorphism
    1. Method Overloading:
        Same function defintion (name & return type are same)
        No. of args or datatype of args can differ
    2. Method Overriding
        Child class and parent class can have the same function name. Exact function definition and type of arg as parent.

Is-A relationship and Has-A relationship:
Is-A example: Dog is-A animal

Has-A relationship: One class holding objects of another class
Has-A example: School has Students
Has-A relationship can be of 3types:
    1. 1 to 1
    2. 1 to Many
    3. Many to Many

- Aggregation (Weak Relationship):
    - Both objects can survive independently and destroying one object won't end the other object.
    - School has 100 students.
    5 Students left.
    School still exists
- Composition (Strong Relationship)
    - School is built of Class rooms. If no class room, school also won't exist.

### Java vs JavaScript
1. Java is platform-independent, object oriented and provides high portability (WORA: Write Once, Run Anywhere).

###### Platform Independent:
- Java is platform independent means that Java programs can run on any operating system or hardware without modification, as long as the system has a Java Virtual Machine (JVM).

- Java source code (.java) is compiled into bytecode (.class)
- Bytecode (.class file genertaed from .java class) is not machine-specific 
- The same bytecode runs on:
    - Windows
    - Linux
    - macOS
    - Any OS with a JVM
- You don’t recompile Java code for each OS.

###### Role of JVM (Key reason)
- Each platform has its own JVM implementation
- JVM translates bytecode into native machine instructions at runtime

What “platform” means here

A platform =
 - Operating System (Windows, Linux, macOS)
 - Hardware architecture (x86, ARM)

Java hides both using JVM.

❌ Java itself is NOT 100% platform independent
✅ Java programs are platform independent, JVM is platform dependent

### Is JavaScript platform independent? If not why
- Yes, JavaScript is platform independent — but for a different reason than Java.
- JavaScript code runs inside a JavaScript engine, which abstracts the underlying platform.
- Examples:
    - Browser engines
        - Chrome → V8
        - Firefox → SpiderMonkey
        - Safari → JavaScriptCore
    - Server-side
        - Node.js → V8

As long as a JS engine exists for the platform, the same JS code runs unchanged.

JavaScript cannot directly access OS features (file system, networking, hardware) on its own.

Instead, it relies on:

 - Browser APIs (DOM, Fetch, Web APIs)
 - Node.js APIs (fs, net, process) 

These APIs vary by environment, not by OS.

### Why JavaScript does NOT truly follow WORA

WORA (Write Once, Run Anywhere) means:

- Same compiled output
- Same runtime contract
- Same behavior across platforms

JavaScript fails runtime consistency, even though the code often runs.
### Reason why JS is not strictly following WORA
No single standardized runtime

Java → JVM (strict spec)

JS → multiple engines + environments

JS Code → V8 / SpiderMonkey / JSCore → Browser / Node

Behavior can differ due to:

- Engine differences

- Browser APIs

- Node vs Browser globals

### Java: Compiler :: Javascript : Interpreter (JIT)

One-line comparison

Java: Explicit compile → portable bytecode → JVM

JavaScript: Direct execution → engine → JIT → native code

### jar files:
✅ A .jar file contains Java bytecode, NOT machine code.

.java file (source code)
   ↓ javac
.class file (bytecode)
   ↓ jar
.jar (bytecode bundled)
   ↓ JVM
Native machine code (via JIT)

###### Why .jar does NOT contain machine code

- Machine code is OS + CPU specific

- .jar is meant to be platform independent

- JVM converts bytecode → machine code at runtime

If .jar had machine code:
❌ It would break WORA

This jar is highly portable and can be shared to any OS (Windows / Linux / Mac) and each of these OS has their own JVM.
as we discussed earlier, JVM is platform dependent.

### JRE : Java Runtime Environment
JDK = JRE + Other things (compiler(javac), Debugger, Java Syntax Support etc)
JRE = JVM + Class Libraries

Class Libs: 
1. Math
2. Map

JVM alone has no existence as it doesn't have access to class libs. 
Reason: Just by custom codes without using libraries like Math and other utility libs, we can't develop enterprise solutions.

JRE can understand your custom java code and library code and
as it has JVM, it can translate byte code(.class files) to machine code.

But can you write the java syntax code like, .java files in JRE? No
For that we need JDK : Java Development Kit.

JDK has compiler resposible for converting .java to .class.

- All 3 JDK, JRE and JVM are platform dependent


### Other terms you should know:
- JSE : Java Standard Edition 
    - Core Java
- JEE : Java Enterprise Edition / Jakarta EE:
    - JSE + Other APIs
    - Other APIs involves:
        - Transactional APIs (Rollback, Commit)
        - Servlets
        - JSP
        - Persistent API - To manage relational DB
    - Useful for building large scale apps like, e-commerce

- JME : Java Micro/Mobile Edition
    - JSE + APIs for building mobile apps
