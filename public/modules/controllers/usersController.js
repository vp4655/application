/**
 * Created by Valentino on 12.12.2015..
 */
twitterApp.controller('UsersController', ['$scope', '$location', '$localStorage', '$window', '$state', '$sessionStorage', function($scope, $location, $localStorage, $window, $state, $sessionStorage) {

    if($sessionStorage.loggedIn){

        delete $sessionStorage.loggedIn;

        $scope.users = [];

        $scope.$storage = $localStorage;

        $scope.users = $scope.$storage.users;

        $scope.onExit = function() {
            $location.path('/home');
            if($scope.message){
                return ('bye bye');
            }
        };

        $window.onbeforeunload =  $scope.onExit;
    }
    else {
        $state.go('home');
    }

}
]);