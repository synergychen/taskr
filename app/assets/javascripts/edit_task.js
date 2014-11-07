$(function() {
  $("body").on("click", ".title", editTaskTitle);
});

var editTaskTitle = function() {
  $(this).attr("contenteditable", true).focus();
  $(this).on("keydown", function(){
    if (event.keyCode === 13) {
      console.log("Enter pressed");
      var newTaskTitle = $(this).text();

      var conversation = $.ajax({
          url: "/tasks/" + $(this).parent().data("id"),
          type: "PATCH",
          data: { task: { title: newTaskTitle }}
      });
      $(this).highlight();
      $(this).attr("contenteditable", false);
      return false;
    }
  });

};
