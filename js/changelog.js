
app.controller("ChangeLogCtrl", ['$scope', '$http', 'PageService', function($scope, $http, PageService) {
    $scope.log = {};

    if (PageService.getPageParams().page == "changelog" && PageService.getPageParams().sub_page != "old") {
        $http.get(PageService.getDataPath()).success(function (data, status, headers, config) {
            $scope.log = data;
        });
    }
}]);