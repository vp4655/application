/**
 * Created by Valentino on 12.12.2015..
 */
twitterApp.controller('HomeController', ['$scope', '$location', '$sce', '$anchorScroll', '$mdDialog', '$localStorage', '$state', '$window', '$sessionStorage', function($scope, $location, $sce, $anchorScroll, $mdDialog, $localStorage, $state, $window, $sessionStorage) {


    $scope.scrollTo = scrollTo;

    $scope.$storage = $localStorage.$default({
        users: [],
        thisUser: {}
    });

    $scope.visible = {
        first: true,
        second: false,
        third: false
    };
    $scope.buttons = {
        first: true,
        second: true,
        third: true
    };

    if($scope.$storage.thisUser){
        $scope.user = $scope.$storage.thisUser;
        if(firstDone()){
            $scope.buttons.first = false;
            $scope.visible.second = true;
        }
        if(secondDone()){
            $scope.buttons.second = false;
            $scope.visible.third = true;
        }
        if(thirdDone()){
            $scope.buttons.third = true;
        }
    }
    else {
        $scope.user = {};
    }

    $scope.nextStep = nextStep;

    $scope.format = 'yyyy';

    $scope.popup1 = {
        opened: false
    };

    $scope.open1 = function() {
        $scope.popup1.opened = true;
    };

    $scope.login = login;

    function nextStep(id){
        if(id == 1){
            $scope.visible.second = true;
            $location.hash('application-form-step2');
            $anchorScroll();
            $scope.buttons.first = false;
        }
        else if(id == 2){
            $scope.visible.third = true;
            $location.hash('application-form-step3');
            $anchorScroll();
            $scope.buttons.second = false;
        }
    }

    function scrollTo(id){
        console.log(id);
        $location.hash(id);
        $anchorScroll();
    }

    function login(ev) {

        if($scope.user.firstName && $scope.user.lastName && $scope.user.email && $scope.user.carMake && $scope.user.userModel && $scope.user.carDate && $scope.user.exp_month && $scope.user.exp_year && $scope.user.cardNumber){
            $scope.$storage.users.push($scope.user);
            $sessionStorage.loggedIn = true;
            $state.go('index');
        }
        else {
            $mdDialog.show(
                $mdDialog.alert()
                    .parent(angular.element(document.querySelector('#popupContainer')))
                    .clickOutsideToClose(true)
                    .title('Login failed')
                    .content('You changed some data in the process and now you should check it again.')
                    .ariaLabel('Alert Dialog Demo')
                    .ok('Got it!')
                    .targetEvent(ev)
            );
        }

    }

    function firstDone () {
        if($scope.user.firstName && $scope.user.lastName && $scope.user.email){
            $scope.buttons.first = false;
            return true;
        }
    }

    function secondDone () {
        if($scope.user.carMake && $scope.user.userModel && $scope.user.carDate){
            return true;
        }
    }

    function thirdDone(){
        if($scope.user.cardNumber && $scope.user.exp_month && $scope.user.exp_year){
            return true;
        }
    }

    var car = {};

    car.make = [{name: "Honda"}, {name: "Mazda"}, {name: "Chevrolet"}, {name: "Dodge"}];

    car.model = {
        Honda: [{name: "Civic"}, {name: "Accord"}, {name: "Amaze"}],
        Mazda: [{name: "Carlo"}, {name: "Flare"}, {name: "CX-9"}],
        Chevrolet: [{name: "Agile"}, {name: "Corvette"}, {name: "Camaro"}],
        Dodge: [{name: "Charger"}, {name: "Challenger"}, {name: "Durango"}, {name: "Viper"}]
    };

    $scope.car = car;

}
]);