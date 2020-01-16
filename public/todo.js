//Add new todos to the list
$("#new-todo").on("keypress", function(event){
  // Check if the Enter key is clicked
  if(event.which == 13){
    // Use fetch to call API and post a JSON object to create a new todo item
    (async () => {
      const rawResponse = await fetch("http://localhost:10010", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          todo: $(this).val()
        })
      });
      // Refresh the page to show the new todo list
      $(location).attr("href","/");
    })();
  }
});

// Update a todo item
$(".fa-edit").on("click", function(){
  // Get the todo item from li
  let todoToBeUpdated = $(this).parent().html().slice(96, -50);
  // Change the li to input for edit
  $(this).parent().html(`<input class="edit" type='text' value='${todoToBeUpdated}'>`);

  $(".edit").on("keypress", function(event){
    // Check if the Enter key is clicked
    if(event.which == 13){
      // Use fetch to call API and update a JSON object
      (async () => {
        const rawResponse = await fetch(`http://localhost:10010/todo/update/${todoToBeUpdated}`, {
          method: "PUT",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            todo: $(this).val()
          })
        });
        // Refresh the page to show the new todo list
        $(location).attr("href","/");
      })();
    }
  });

  $(".edit").on("keydown", function(event){
    // Check if the Esc key is clicked
    if(event.which == 27){
      // Exit edit mode
      $(this).parent().html(`
        <span class="icon"><i class="fas fa-trash-alt"></i></span>
        <span class="todo"> ${$(this).val()}</span>
        <i class="fas fa-edit"></i>
      `);

      // Refresh the page to get back to the old todo list
      $(location).attr("href","/");
      return false;
    }
  });
});

//Delete the todo if trash icon is clicked
$("ul").on("click", ".icon", function(event){
  // Add fading animation on the whole li
  $(this).parent().fadeOut(500, function(){
    // Get the todo item from li
    let todoToBeDeleted = $(this).html().slice(96, -50);
    // Use fetch to call API and delete a JSON object
    (async () => {
      const rawResponse = await fetch(`http://localhost:10010/todo/delete/${todoToBeDeleted}`, {
        method: "DELETE"
      });
      // Refresh the page to show the new todo list
      $(location).attr("href","/");
    })();
  });
  //Stop the event from bubbling up
  event.stopPropagation();
});

//Cross off an todo item when clicked
$("ul").on("click", ".todo", function(){
  $(this).toggleClass("done");
});

//The plus button controls the display of text input
$("#plusOrMinus").on("click", function(){
  $("#new-todo").fadeToggle();
  $(this).find($(".fa")).toggleClass('fa-plus fa-minus');
});
