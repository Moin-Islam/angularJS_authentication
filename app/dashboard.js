var dashboard = angular.module("Dashboard", []);

dashboard.controller("DashboardCtrl", [
  "$scope",
  "$window",
  function ($scope, $window) {
    $scope.name = "aaaa";
    $scope.users= [];
    $scope.fetchData = function(){
        var promise =  $.ajax({
            type: "GET",
            url: "http://localhost/api/customer/listCustomer.php",
          });
        //console.log(promise);
        $.when(promise).then(function(response) {
            $scope.users = response.records;
            $scope.$applyAsync();
        
        })
    }
    $scope.fetchData();

    $scope.editUser = function(id) {
        console.log(id);
    }

    $scope.deleteUser = function(id) {
        console.log(id);
        $.ajax({
            type: "DELETE",
            url: "http://localhost/api/customer/deleteCustomer.php",
            contentType: "application/json",
            data: JSON.stringify({
                "id" : id
            }),
            success: function (response) {
                console.log(response)
                $scope.fetchData();
            }
        });
    }
    // console.log($scope.users);

  },
]);
