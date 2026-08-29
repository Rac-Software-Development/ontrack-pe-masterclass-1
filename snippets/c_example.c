// snippets/c_example.c
#include <stdio.h>

int main() {
  float float_var = 1.0;
  char* string_var = "hello";
  printf("string_var is %s", string_var);

  // Now reassign the string_var to the value of float_var
  string_var = float_var;

  printf("string_var is %s", string_var);
}
