// Classic strings
let x = 'This is a string!';
let y = "This is another string!";


let greeting = 'Hello!';
let bye = 'See ya\' soon!';

// A small function that returns true if a number is even
function even(x){
  return x % 2 == 0;
}

// Template literal
let z = `
  ${greeting}
  Let's write something cool here!
  We can write several lines in a template literal!
  ${bye}

  P.S. I forgot to tell you that 2 + 2 is ${2 + 2}.
       Is that number even? ${even(2 + 2)} that!
`;

console.log(x);
console.log(y);
console.log(z);