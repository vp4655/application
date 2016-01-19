/**
 * Created by Valentino on 12.12.2015..
 */
twitterApp.controller('HomeController', ['$scope', '$location', '$sce', '$anchorScroll', '$mdDialog', function($scope, $location, $sce, $anchorScroll, $mdDialog, Socket, TwitterSearch, Paginator) {


    $scope.scrollTo = scrollTo;

    function scrollTo(id){
        $location.hash(id);
        $anchorScroll();
    }
}
]);