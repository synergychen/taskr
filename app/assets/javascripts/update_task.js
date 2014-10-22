$(function() {
  $("ul").on("submit", "form.edit_task", updateTaskFromServer);
});

var updateTaskFromServer = function() {
  var taskData = $(this).serialize();
  var conversation = $.ajax({ 
    url: $(this).attr("action"), 
      type: "POST",
      data: taskData
  });
  $(this).parent("li").fadeOut("fast");
  conversation.done(updateTaskDataFromList);
  conversation.fail(onFailure);
  return false;
};

var updateTaskDataFromList = function(html) {
  var completeTaskList = $("ul#complete-tasks-list");
  completeTaskList.prepend(html);

  console.log("UPDATED!");
};

var onFailure = function(ajaxObject) {
  console.log("FAILED");
  var htmlFromServer = ajaxObject.responseText;
};
