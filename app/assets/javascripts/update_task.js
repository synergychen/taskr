$(function() {
  $("body").on("submit", "form.edit_task", updateTaskFromServer);
});

var updateTaskFromServer = function() {
  var taskData = $(this).serialize();
  var conversation = $.ajax({ 
    url: $(this).attr("action"), 
      type: "POST",
      data: taskData
  });

  $(this).parent("li").fadeOut("fast");

  var changeToCompletion = $(this).find('input[name="task[completion]"]').val();
  if ( changeToCompletion === "1" ) {
    conversation.done(addToComplete);
  } else {
    conversation.done(addToIncomplete);
  }

  conversation.fail(onFailure);
  return false;
};

var addToIncomplete = function(html) {
  console.log("unchecked");
  var incompleteTaskList = $("ul#incomplete-tasks-list");
  var element = $(html).hide();
  incompleteTaskList.prepend(html);
  element.fadeIn();
};

var addToComplete = function(html) {
  console.log("checked");
  var completeTaskList = $("ul#complete-tasks-list");
  var element = $(html).hide();
  completeTaskList.prepend(html);
  element.fadeIn();
};

var onFailure = function(ajaxObject) {
  console.log("FAILED");
  var htmlFromServer = ajaxObject.responseText;
};
