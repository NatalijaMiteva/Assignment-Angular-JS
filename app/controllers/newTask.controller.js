'use strict'
task.controller('newTask.controller',['taskModel', '$scope', function(taskModel, $scope){
  var vm=this;
$scope.saveTask = function() {
  var task={
    "subject" : vm.subject,
    "details" : vm.detail,
    "priority" : vm.priority,
    "user" : vm.user,
    "date" : vm.date
  }
  taskModel.saveTask(task);

}
}])
