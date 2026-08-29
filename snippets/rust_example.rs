// nippets/rust_example.rs
use std::any::type_name_of_val;

fn main() {
    let float_var = 1.0;
    let string_var = "hello";
    println!("string_var is {}", type_name_of_val(string_var));

    // Now reassign the string_var to the value of float_var
    string_var = float_var;

    println!("string_var is {}", type_name_of_val(string_var));
}
