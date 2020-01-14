//Cross off an todo item when clicked
$("ul").on("click", "li", function(){
  $(this).toggleClass("done");
});

//Delete the todo if trash icon is clicked
$("ul").on("click", ".icon", function(event){
  // Add fading animation on the whole li
  $(this).parent().fadeOut(500, function(){
    // Get the todo item from li
    let todoToBeDeleted = $(this).html().slice(59).replace(" ", "_");
    // Redirect to the delete route
    window.location.href = `http://localhost:3000/todos/delete/${todoToBeDeleted}`;
  });
  //Stop the event from bubbling up
  event.stopPropagation();
});

//Add new todos to the list
$("input[type='text']").on("keypress", function(event){
  // Check if the Enter key is clicked
  if(event.which == 13){
    // Use fetch to call API and post a JSON object
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
      // Redirect back to home page
      $(location).attr("href","http://localhost:3000");
    })();
  }
});

//The plus button controls the display of text input
$("#plus").on("click", function(){
  $("input[type='text']").fadeToggle();
});