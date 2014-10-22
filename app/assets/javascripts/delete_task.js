$(function() {
  $("ul").on("submit", "form.button_to", deleteTaskFromServer);
});

var deleteTaskFromServer = function() {
  var taskData = $(this).serialize();
  var conversation = $.ajax({ 
    url: $(this).attr("action"), 
    type: "DELETE",
    data: taskData
  });
  $(this).parent("li").fadeOut();
  conversation.fail(onFailure);
  console.log("DELETED!");
  return false;
};

var onFailure = function(ajaxObject) {
  console.log("FAILED");
  var htmlFromServer = ajaxObject.responseText;
};
