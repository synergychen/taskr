$(function() {
  var newTaskForm = $("form#new_task");
  newTaskForm.submit(postNewTaskToServer);
});

var postNewTaskToServer = function() {
  var newTaskForm = $("form#new_task");
  var taskData = newTaskForm.serialize();
  var conversation = $.ajax({ url: "/tasks", type: "POST", data: taskData});
  conversation.done(addTaskDataToList);
  conversation.fail(onFailure);
  resetForm();
  return false;
};

var addTaskDataToList = function(taskHtml) {
  var taskList = $("ul#incomplete-tasks-list");
  taskList.prepend(taskHtml);
  $("#errors").html("");
};

var onFailure = function(ajaxObject) {
  var htmlFromServer = ajaxObject.responseText;
  $("#errors").html(htmlFromServer);
};

var resetForm = function() {
  var newTaskForm = $("form#new_task");
  newTaskForm.find("#task_title, #task_description").val("");
  newTaskForm.find("#task_title").focus();
};
