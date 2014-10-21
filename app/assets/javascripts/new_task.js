$(function() {
  var newTaskForm = $("form#new_task");
  newTaskForm.submit(postNewTaskToServer);
});

function postNewTaskToServer() {
  var newTaskForm = $("form#new_task");
  var taskData = newTaskForm.serialize();
  var conversation = $.ajax({ url: "/tasks", type: "POST", data: taskData});
  conversation.done(addTaskDataToList);
  return false;
};

function addTaskDataToList(task) {
  var taskList = $("ul");
  taskList.prepend(task);
};
