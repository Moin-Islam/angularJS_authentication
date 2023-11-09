var app = angular.module("SignUp", []);

app.controller("AuthenticationCtrl", [
  "$scope", "$window",
  function ($scope, $window) {
    $scope.name = "";
    $scope.email = "";
    $scope.password = "";
    $scope.confirmPassword = "";
    $scope.phone = "";
    $scope.shippingAddress = "";
    $scope.billingAddress = "";
    $scope.userInfos = [];

    console.log($scope.email);

    $scope.handleAction = function () {
      return $scope.password === $scope.confirmPassword;
    };

    $scope.submitInfo = function () {
      if ($scope.password == $scope.confirmPassword) {
        console.log("a");
        var userinfo = {
          "name": $scope.name.toString(),
          "email": $scope.email,
          "password": $scope.password,
          "confirmPassword": $scope.confirmPassword,
          "phone": $scope.phone,
          "shipping_address": $scope.shippingAddress,
          "billing_address": $scope.billingAddress,
        };
    
        console.log(userinfo);

        $.ajax({
          type: "POST",
          url: "http://localhost/api/customer/create.php",
          data: JSON.stringify(userinfo),
          success: function (response) {
            console.log(response);
            window.alert("Signing up was successful");
            $window.location.href='login.html';
          },
        });
      }
    };
  },
]);
