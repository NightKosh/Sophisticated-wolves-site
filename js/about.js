app.controller("AboutCtrl", ['$scope', '$http', 'PageService', function ($scope, $http, PageService) {
    $scope.about = {};

    if (PageService.getPageParams().page == "about") {
        $http.get(PageService.getDataPath()).success(function (data, status, headers, config) {
            $scope.about = data;

            $scope.about.zoologistImg = {
                images: [
                    '1.png', '2.png', 'trades_1.png', 'trades_2.png',
                    'recipe.png'
                ],
                path: "images/img/zoologist/",
                thumb: true
            };

            $scope.about.commandsImg = {
                images: [
                    'food.png', 'targets.png', 'commands.png'
                ],
                path: "images/img/commands/",
                thumb: true
            };

            $scope.about.nametagsImg = {
                images: [
                    '1.png', '2.png', '3.png', '4.png', '5.png', '6.png',
                    'recipe.png'
                ],
                path: "images/img/nametag/",
                thumb: true
            };
            $scope.about.breedingImg = {
                images: [
                    '1.png', '2.png', '3.png', '4.png',
                    'recipe_4.0.0.png',
                    'recipe.png'
                ],
                path: "images/img/breeding/",
                thumb: true
            };
            $scope.about.biomeWolvesImg = {
                images: [
                    '1.png', '2.png', '3.png', '4.png'
                ],
                path: "images/img/biomeWolves/",
                thumb: true
            };
            $scope.about.creeperImg = {
                images: [
                    'creeper_1.png', 'creeper_2.png'
                ],
                path: "images/img/creeper/",
                thumb: true
            };
            $scope.about.extinguishingImg = {
                images: [
                    '1.png', '2.png'
                ],
                path: "images/img/extinguishing/",
                thumb: true
            };
            $scope.about.feedingImg = {
                images: [
                    'gui.png',
                    'bowls.png',
                    'recipe_4.0.0.png',
                    'recipe.png'
                ],
                path: "images/img/feeding/",
                thumb: true
            };
            $scope.about.transportingImg = {
                images: [
                    '1.png',
                    '2.png',
                    'recipe_4.0.0.png',
                    'recipe.png'
                ],
                path: "images/img/carrier/",
                thumb: true
            };
            $scope.about.cancelingImg = {
                images: [
                    'recipe_4.0.0.png',
                    'recipe.png'
                ],
                path: "images/img/canceling/",
                thumb: true
            };
        });
    }
}]);