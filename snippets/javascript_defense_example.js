let number_var = 1.0
let string_var = "hello"
console.log(`string_var is ${typeof string_var}`)

// By assigning the number value to the string_var, it becomes a number
string_var = number_var

console.log(`string_var is ${typeof string_var}`)

// So using a string function on it gives an error.
let to_uppercase
if (typeof string_var === "string") {
  to_uppercase = string_var.toUpperCase()
}

console.log(`string_var.toUpperCase() is ${to_uppercase}`)
