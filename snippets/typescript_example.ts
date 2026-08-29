// snippets/typescript_example.ts
let number_var: number = 1.0
let string_var: string = "hello"

console.log(`string_var is ${typeof string_var}`)

// Now reassign the string_var to the value of float_var
string_var = number_var

console.log(`string_var is ${typeof string_var}`)
