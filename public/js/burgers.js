// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".EatIt").on("click", function(event) {
      var id = $(this).data("id");
      var newDevoured = $(this).data("devoured");

      console.log(id, newDevoured);
  
      var newDevourState = {
        devoured: newDevoured
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          console.log("changed devour to", newDevoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
        console.log(id);
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });