
app.controller("FaqCtrl", ['$scope', '$http', 'PageService', function($scope, $http, PageService) {
    $scope.faq = {};

    if (PageService.getPageParams().page == "faq") {
        $http.get(PageService.getDataPath()).success(function (data, status, headers, config) {
            $scope.faq = data;
        });
    }
}]);

app.controller("FaqMenuCtrl", ['$scope', '$http', 'PageService', function($scope, $http, PageService) {
    $scope.faqMenu = {};

    if (PageService.getPageParams().page == "faq") {
        $http.get(PageService.getSubMenuDataPath()).success(function (data, status, headers, config) {
            $scope.faqMenu = data;
        });
    }
}]);