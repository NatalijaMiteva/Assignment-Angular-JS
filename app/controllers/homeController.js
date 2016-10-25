'use strict'
task.controller('homeController', ['taskModel','$scope', function(taskModel, $scope){
  var vm = this;
  //all Tasks
  vm.tasks = taskModel.getTasks();
  //all Archived Tasks
  vm.archivedTasks = taskModel.getArchivedTasks();
  //all completed Task
  vm.completedTask = taskModel.getCompletedTask();
  //function for deleting Task
  vm.deleteTask= function (index){
    taskModel.removeTask(index);
  }
  //function fo archiving Task
  vm.archiveTask = function(task, index){
    taskModel.archiveTask(task, index);
  }
  //get the type for sortBy
  vm.sortBy = function(type){
    vm.propertyName = type;
  };
  //get the Task back to Task list
  vm.restoreTask = function(task, index){
    taskModel.restoreTask(task, index);
  };
  //deleting archived Task(and it's gone from all lists)
  vm.deleteArchivedTask = function(index){
    taskModel.deleteArchivedTask(index);
  };
  //set task to completed Task list
  vm.completeTask = function(task, index){
    taskModel.completeTask(task, index);
  };
  //for setting active tab
  function widgetsController($scope, $route) {
    $scope.$route = $route;
}
}]);
