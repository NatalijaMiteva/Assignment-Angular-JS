'use strict'
task.controller('homeController', ['taskModel','$scope', function(taskModel, $scope){
  var vm = this;
  vm.tasks = taskModel.getTasks();
  vm.archivedTasks = taskModel.getArchivedTasks();
  vm.deleteTask= function (index){
    taskModel.removeTask(index);
  }
  vm.archiveTask = function(task, index){
    taskModel.archiveTask(task, index);
  }
  vm.sortBy = function(type){
    vm.propertyName = type;
  };
  vm.restoreTask = function(task, index){
    taskModel.restoreTask(task, index);
  };
  vm.deleteArchivedTask = function(index){
    taskModel.deleteArchivedTask(index);
  }
}]);
