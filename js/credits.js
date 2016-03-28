
app.controller("CreditsCtrl", ['$scope', '$http', 'PageService', function($scope, $http, PageService) {
    $scope.credits = {};

    if (PageService.getPageParams().page == "credits") {
        $http.get(PageService.getDataPath()).success(function (data, status, headers, config) {
            $scope.credits = data;
        });
    }
}]);