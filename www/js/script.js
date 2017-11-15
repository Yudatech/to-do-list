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



$("#add").click(function () {
  let toAdd = $("input[name=checkListItem]").val();
  todoList.push(toAdd);
  console.log(todoList);
  //document.getElementById("list").innerHTML = printList(todoList);
  //cannot call function printList. don't know why.
});

$("#top").click(function () {
  var toTop = $("input[name=checkListItem]").val();
  todoList.unshift(toTop);
  console.log(todoList);
});

$("#remove_bt").click(function () {
  todoList.pop();
  console.log(todoList);
});

$("#remove_tp").click(function () {
  todoList.shift();
  console.log(todoList);
});
$("#remove_index").click(function () {
  var toRemove = $("input[name=checkListItem]").val()/1;
  if(toRemove<todoList.length && toRemove>=0){
      todoList.splice(toRemove, 1);
      console.log(todoList);
  }else{
      alert("Check it first!");
  }
});



$(document).on('click', '.item', function () {
  $(this).toggleClass("scratch");
});

