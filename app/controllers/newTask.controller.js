'use strict'
task.controller('newTask.controller',['taskModel', '$scope', function(taskModel, $scope){
  var vm=this;
  //creating JSON Object for Task
  $scope.saveTask = function() {
    var task={
      "subject" : vm.subject,
      "details" : vm.detail,
      "priority" : vm.priority,
      "user" : vm.user,
      "date" : vm.date
    }
    //saving the Task(adding the Task to Tasks list)
    taskModel.saveTask(task);
    //reseting from
    vm.subject=vm.detail = vm.priority=vm.user=vm.date=null;
  }
}])
