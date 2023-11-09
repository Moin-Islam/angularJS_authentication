var app = angular.module("SignUp", []);

app.controller("AuthenticationCtrl", [
  "$scope",
  function ($scope) {
    $scope.email = "";
    $scope.password = "";
    $scope.confirmPassword = "";

    $scope.handleAction = function () {
      return $scope.password === $scope.confirmPassword;
    };
  },
]);
