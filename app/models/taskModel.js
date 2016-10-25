task.factory('taskModel', ['$rootScope', '$location', function($rootScope, $location){
  //list for all Tasks
  var taskArr = [];
  //list for archived Tasks
  var archivedTasks=[];
  //list for Completed Tasks
  var completedTasks = [];
  //function for saving new Task
  var saveTask = function (task) {
    taskArr.push(task);
    $location.path('/home');
  };
  //get all Tasks
  var getTasks = function(){
    return taskArr;
  };
  //remove task from all Tasks list
  var removeTask = function(index){
    taskArr.splice(index, 1);
  };
  //adding task to archive list and deleting from all Tasks list
  var archiveTask = function(task, index){
    archivedTasks.push(task);
    taskArr.splice(index, 1);
  };
  //get Archived Tasks list
  var getArchivedTasks = function(){
    return archivedTasks;
  };
  //removing task from archived Task list and adding to all Tasks list
  var restoreTask = function(task, index){
    archivedTasks.splice(index, 1);
    taskArr.push(task);
  };
  //delete task from archived list
  var deleteArchivedTask= function(index){
    archivedTasks.splice(index, 1);
  }
  //set Task to copleted Task list
  var completeTask = function(task, index){
      completedTasks.push(task);
      taskArr.splice(index, 1);
  }
  //get completed Task list
  var getCompletedTask = function(){
    return completedTasks;
  }

  //public function
  return{
    saveTask: saveTask,
    getTasks : getTasks,
    removeTask : removeTask,
    archiveTask: archiveTask,
    getArchivedTasks: getArchivedTasks,
    restoreTask: restoreTask,
    deleteArchivedTask:deleteArchivedTask,
    completeTask : completeTask,
    getCompletedTask: getCompletedTask
  }
}])
