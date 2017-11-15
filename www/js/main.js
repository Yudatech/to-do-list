
function getIndex(array,item){
    for(let i = 0; i < array.length; i++){
      if(array[i] == item){
        return i;
      }
    }
  }
  
  
  // Step 1
  let todoList = [];
  
  // Step 2
  function addToList(item){
    // push adds an item last in an array
    todoList.push(item);
    return todoList;
  }
  
  // Step 3
  function addToTopOfList(item){
    // unshift adds an item first in an array
    todoList.unshift(item);
    return todoList;
  }
  
  // Step 4
  function removeFromBottomOfList(){
    // pop removes an item last in an array
    // and returns the removed item
    return todoList.pop();
  }
  
  // Step 5
  function removeFromTopOfList(){
    // shift removes an item first in an array
    // and returns the removed item
    return todoList.shift();
  }
  
  // Step 6
  function removeFromListByIndex(index){
    // splice(index, numberOfitemsToRemove)
    // splice can remove zero to many items
    // from anywhere in an array and returns
    // an array of removed items
    if(index >= 0){
      return todoList.splice(index,1)[0];
    }
  }
  
  // Step 7
  function removeFromListByName(item){
    // indexOf returns the index of
    // an item in an array
    let index = todoList.indexOf(item);
    return removeFromListByIndex(index);
  }
  
  // Step 8
  let doneList = [];
  function removeFromListAndAddToDone(item){
    // removeFromListByName returns the removed
    // item, we then push it to doneList
    doneList.push(removeFromListByName(item));
    return doneList;
  }
  
  // Step 9
  function moveToTop(item){
    // removeFromListByName returns the removed
    // item, we then add it to the top of the list
    addToTopOfList(removeFromListByName(item));
    return todoList;
  }
  
  // Step 10
  function moveToBottom(item){
    // removeFromListByName returns the removed
    // item, we then add it to the bottom of the list
    addToList(removeFromListByName(item));
    return todoList;
  }
  
  // Step 11
  function moveDown(item){
    // indexOf returns the index of
    // an item in an array
    let index = todoList.indexOf(item);
    // move down by switching places
    // but only if not last
    if(index + 1 < todoList.length){
      todoList[index] = todoList[index + 1];
      todoList[index + 1] = item;
    }
    return todoList;
  }
  
  // Step 12
  function moveUp(item){
    // indexOf returns the index of
    // an item in an array
    let index = todoList.indexOf(item);
    // move up by switching places
    // but only if not first
    if(index > 0){
      todoList[index] = todoList[index - 1];
      todoList[index - 1] = item;
    }
    return todoList;
  }
  
  // Step 13
  function logTodoList(){
    // Loop through an array with a
    // standard for loop using array.length to
    // find out how many times whe should loop
    for(let i = 0; i < todoList.length; i++){
      console.log(todoList[i]);
    }
  }
  
  // Step 14
  function logTodoListVer2(){
    // Loop through an array with for...of
    for(let item of todoList){
      console.log(item);
    }
  }





  

    function printList(print){
        var print = [];
        var text = "";
        var i;
        for (i = 0; i < print.length; i++) {
            text += print[i] + "<br>";
        }
        return text;
    }

 


$(document).ready(function () {
    let todoList = [];

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
});





