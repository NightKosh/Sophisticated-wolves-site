app.controller("AboutCtrl", ['$scope', '$http', 'PageService', function ($scope, $http, PageService) {
    $scope.about = {};

    if (PageService.getPageParams().page == "about") {
        $http.get(PageService.getDataPath()).success(function (data, status, headers, config) {
            $scope.about = data;

            $scope.about.nametagsImg = {
                images: [
                    'nametag_1.png', 'nametag_2.png', 'nametag_3.png', 'nametag_4.png',
                    'nametag_5.png', 'nametag_6.png', 'recipe.png'
                ],
                path: "images/img/nametag/",
                thumb: false
            };
            $scope.about.breedingImg = {
                images: [
                    'breeding_1.png', 'breeding_2.png', 'breeding_3.png', 'breeding_4.png', 'recipe.png'
                ],
                path: "images/img/breeding/",
                thumb: false
            };
            $scope.about.biomeWolvesImg = {
                images: [
                    'biomeWolves_1.png', 'biomeWolves_2.png', 'biomeWolves_3.png', 'biomeWolves_4.png'
                ],
                path: "images/img/biomeWolves/",
                thumb: false
            };
            $scope.about.creeperImg = {
                images: [
                    'creeper_1.png', 'creeper_2.png'
                ],
                path: "images/img/creeper/",
                thumb: false
            };
            $scope.about.extinguishingImg = {
                images: [
                    'extinguishing_1.png', 'extinguishing_2.png'
                ],
                path: "images/img/extinguishing/",
                thumb: false
            };
            $scope.about.feedingImg = {
                images: [
                    'bowls.png', 'recipe.png'
                ],
                path: "images/img/feeding/",
                thumb: true
            };
        });
    }
}]);