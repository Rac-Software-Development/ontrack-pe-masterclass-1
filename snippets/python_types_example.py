# snippets/python_types_example.python
float_var: float = 1.0
string_var: str = "hello"
print(f"string_var is {type(string_var)}")

# Now reassign the string_var to the value of float_var
string_var = float_var

print(f"string_var is {type(string_var)}")