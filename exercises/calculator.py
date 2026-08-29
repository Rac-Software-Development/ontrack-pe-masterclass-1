from math import pi  # We need pi to calculate circular shapes

print(r"""
    ·------·     .----.         /\
   /      /|   *        ·      /  \
  ·------· |  *•         ·    /    \
  |      | ·  *•*·       ·   /      \
  |      |/    *•*•*·   ·   /        \
  ·------·       *====°     `-.____.-´
   cuboid        sphere        cone  ...and more!

Volume calculator
""")

# Variables we'll need to use
volume = None
length = None
width = None
height = None
diameter = None
output = None

shape = input("""
Choose a shape:
 1. cuboid (box)
 2. sphere
 3. cone
 4. pyramid

Your choice: """)
shape_shortcut = 0


if shape == "cuboid" or shape == "box" or shape_shortcut == 1:
    length = input("length: ")
    width = input("width: ")
    height = input("height: ")
    volume = length * width * height
    output = f"{length} × {width} × {height} = {volume}"
elif shape == "sphere" or shape == 2:
    diameter = input("diameter: ")
    radius = diameter / 2
    volume = 4 / 3 * pi * radius**3
    output = f"1⅓ × π × ({diameter}/₂)³ = {volume}"
elif shape == "cone" or shape_shortcut == 3:
    diameter = input("diameter: ")
    radius = diameter / 2
    height = input("height: ")
    volume = 1 / 3 * pi * radius**2 * height
    output = f"⅓ × π × ({diameter}/₂)³ = {volume}"
elif shape == "pyramid" or shape_shortcut == 4:
    length = input("length: ")
    width = input("width: ")
    height = input("height: ")
    volume = 1 / 3 * length * width * height
    output = f"⅓ × {length} * {width} = {volume}"
else:
    print("Not a recognized shape!")

if volume != 0:
    print(output)
