var login = angular.module("Login", []);

login.controller("LoginCtrl", ["$scope","$window", function($scope, $window) {
    $scope.email = "";
    $scope.password = "";

    $scope.handleLogin = function() {
        if($scope.emaill != "" && $scope.password !=""){
            console.log("a");
            var loginInfo = {
                "email" : $scope.email,
                "password" : $scope.password
            };

            $.ajax({
                type: "POST",
                url: "http://localhost/api/customer/authentication.php",
                data: JSON.stringify(loginInfo),
                success: function (response) {
                    window.alert(response.message);
                    if(response.code == 200){
                        $window.location.href = 'dashboard.html'
                    }
                }
            });
        }
    }
}]);