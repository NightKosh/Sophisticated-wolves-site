
app.controller("DownloadCtrl", ['$scope', '$http', 'PageService', function($scope, $http, PageService) {
    $scope.download = {};

    if (PageService.getPageParams().page == "download") {
        $http.get(PageService.getDataPath()).success(function (data, status, headers, config) {
            $scope.download = data;
        });
    }
}]);