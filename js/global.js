
app.controller("GlobalPageCtrl", ['$scope', '$http', 'PageService', function($scope, $http, PageService) {
    $scope.globalData = {};

    $http.get('data/global/' + PageService.getPageParams().lang + '.json').success(function (data, status, headers, config) {
        $scope.globalData = data;

        $scope.globalData.enLink = PageService.getNewLocalizedLinkByParams("en");
        $scope.globalData.ruLink = PageService.getNewLocalizedLinkByParams("ru");

        $scope.globalData.titleLink = PageService.getLinkWithLangParams("/");
        $scope.globalData.menuDownloadLink = PageService.getLinkWithLangParams("/");
        $scope.globalData.menuAboutLink = PageService.getLinkWithLangParams("?page=about");
        $scope.globalData.menuReviewLink = PageService.getLinkWithLangParams("?page=review");
        $scope.globalData.menuChangelogLink = PageService.getLinkWithLangParams("?page=changelog");
        $scope.globalData.menuFaqLink = PageService.getLinkWithLangParams("?page=faq");
        $scope.globalData.menuCreditsLink = PageService.getLinkWithLangParams("?page=credits");
    });

    $scope.contentTemplatePath = PageService.getTemplatePath();
    $scope.subMenuTemplatePath = PageService.getSubMenuTemplatePath();
}]);