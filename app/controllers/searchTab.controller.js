'use strict'
task.controller('searchTab.controller', ['taskModel','$scope', function(taskModel, $scope){
  var vm = this;
  vm.tasks = taskModel.getTasks();

}]);
