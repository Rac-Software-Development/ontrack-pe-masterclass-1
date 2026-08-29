import { createInterface } from 'node:readline/promises';
import { stdin, stdout } from 'node:process';

const rl = createInterface({ input: stdin, output: stdout });

console.log(`
    ·------·     .----.         /\\
   /      /|   *        ·      /  \\
  ·------· |  *•         ·    /    \\
  |      | ·  *•*·       ·   /      \\
  |      |/    *•*•*·   ·   /        \\
  ·------·       *====°     \`-.____.-´
   cuboid        sphere        cone  ...and more!

Volume calculator
`)

// Variables we'll need to use
let volume
let length
let width
let height
let diameter
let output

const shape = await rl.question(`
Choose a shape:
 1. cuboid (box)
 2. sphere
 3. cone
 4. pyramid

Your choice: `)
const shape_shortcut = 0

if (shape == "cuboid" || shape == "box" || shape_shortcut == 1) {
  length = await rl.question("length: ")
  width = await rl.question("width: ")
  height = await rl.question("height: ")
  volume = length * width * height
  output = `${length} × ${width} × ${height} = ${volume}`
} else if (shape == "sphere" || shape == 2) {
  diameter = await rl.question("diameter: ")
  radius = diameter / 2
  volume = 4 / 3 * pi * radius**3
  output = `1⅓ × π × (${diameter}/₂)³ = ${volume}`
} else if (shape == "cone" || shape_shortcut == 3) {
  diameter = await rl.question("diameter: ")
  radius = diameter / 2
  height = await rl.question("height: ")
  volume = 1 / 3 * pi * radius**2 * height
  output = `⅓ × π × (${diameter}/₂)³ = ${volume}`
} else if (shape == "pyramid" || shape_shortcut == 4) {
  length = await rl.question("length: ")
  width = await rl.question("width: ")
  height = await rl.question("height: ")
  volume = 1 / 3 * length * width * height
  output = `⅓ × ${length} * ${width} = ${volume}`
} else {
  console.log("Not a recognized shape!")
}

if (volume !== 0) {
  console.log(output)
}

rl.close();
