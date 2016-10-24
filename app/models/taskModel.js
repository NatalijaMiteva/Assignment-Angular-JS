task.factory('taskModel', ['$rootScope', function($rootScope){
  var taskArr = [];
  var archivedTasks=[];
  var saveTask = function (task) {
    taskArr.push(task);
    console.log(taskArr);
  };

  var getTasks = function(){
    console.log(taskArr);
    return taskArr;
  };
  var removeTask = function(index){
    taskArr.splice(index, 1);
  };
  var archiveTask = function(task, index){
    archivedTasks.push(task);
    taskArr.splice(index, 1);
  };

  var getArchivedTasks = function(){
    return archivedTasks;
  };
  var restoreTask = function(task, index){
    archivedTasks.splice(index, 1);
    taskArr.push(task);
  };
  var deleteArchivedTask= function(index){
    archivedTasks.splice(index, 1);
  }

  return{
    saveTask: saveTask,
    getTasks : getTasks,
    removeTask : removeTask,
    archiveTask: archiveTask,
    getArchivedTasks: getArchivedTasks,
    restoreTask: restoreTask
    deleteArchivedTask:deleteArchivedTask
  }
}])
