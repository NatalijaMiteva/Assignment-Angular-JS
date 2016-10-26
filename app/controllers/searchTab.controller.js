'use strict'
task.controller('searchTab.controller', ['taskModel','$scope', function(taskModel, $scope){
  var vm = this;
  vm.value="searchTask";
  vm.tasks = taskModel.getTasks();
  vm.tmpTasks = vm.tasks;
  vm.filteredArr=[];

  //search by user
  vm.selectByUser = function(arr) {
      vm.filteredArr=[];
    angular.forEach(vm.tmpTasks, function(value1, key1) {
      angular.forEach(arr, function(value2, key2) {
        if (value1.user == value2) {
          vm.filteredArr.push(value1);
        }
      });
    });
    vm.tasks = vm.filteredArr;
  }
  //search by priority
  vm.selectByPriority = function(arr) {
    vm.filteredArr=[];
    angular.forEach(vm.tmpTasks, function(value1, key1) {
      angular.forEach(arr, function(value2, key2) {
        if (value1.priority == value2) {
          vm.filteredArr.push(value1);
        }
      });
    });
    vm.tasks = vm.filteredArr;
  }
  //search my date
  vm.selectByDate = function() {
    angular.forEach(vm.tmpTasks, function(value1) {
      if(value1.date.getTime() == vm.date.getTime()){
        vm.filteredArr.push(value1);
      }
    vm.tasks = vm.filteredArr;
    });
  }
  //restore fileds for searching
  vm.restoreSearch= function(){
    vm.user=vm.priority=vm.date=null;
    vm.tasks = vm.tmpTasks;
  }
}]);
