/**
 * Created by Valentino on 12.12.2015..
 */
twitterApp.controller('IndexController', ['$scope', '$location', '$state', '$window', '$sessionStorage', function($scope, $location, $state, $window, $sessionStorage) {

    if($sessionStorage.loggedIn){

        delete $sessionStorage.loggedIn;

        $scope.seeLoggedIn = goToUsers;

        function goToUsers(){
            $sessionStorage.loggedIn = true;
            $state.go('users');
        }

    }
    else{
        $state.go('home');
    }
}
]);