# snippets/python_defense_example.python
float_var = 1.0
string_var = "hello"
print(f"string_var is {type(string_var)}")

# Now reassign the string_var to the value of float_var
string_var = float_var

to_uppercase = None
if type(string_var) is str:
    to_uppercase = string_var.upper()

print(f"string_var is {to_uppercase}")

