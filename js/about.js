app.controller("AboutCtrl", ['$scope', '$http', 'Lightbox', 'PageService', function ($scope, $http, Lightbox, PageService) {
    $scope.about = {};

    if (PageService.getPageParams().page == "about") {
        $http.get(PageService.getDataPath()).success(function (data, status, headers, config) {
            $scope.about = data;

            $scope.about.nametagsImg = [
                {
                    'thumbUrl': 'images/img/nametag/nametag_1.png',
                    'url': 'images/img/nametag/nametag_1.png',
                    'caption': ''
                },
                {
                    'thumbUrl': 'images/img/nametag/nametag_2.png',
                    'url': 'images/img/nametag/nametag_2.png',
                    'caption': ''
                },
                {
                    'thumbUrl': 'images/img/nametag/nametag_3.png',
                    'url': 'images/img/nametag/nametag_3.png',
                    'caption': ''
                },
                {
                    'thumbUrl': 'images/img/nametag/nametag_4.png',
                    'url': 'images/img/nametag/nametag_4.png',
                    'caption': ''
                },
                {
                    'thumbUrl': 'images/img/nametag/nametag_5.png',
                    'url': 'images/img/nametag/nametag_5.png',
                    'caption': ''
                },
                {
                    'thumbUrl': 'images/img/nametag/nametag_6.png',
                    'url': 'images/img/nametag/nametag_6.png',
                    'caption': ''
                },
                {
                    'thumbUrl': 'images/img/nametag/recipe.png',
                    'url': 'images/img/nametag/recipe.png',
                    'caption': ''
                }
            ];
            $scope.about.breedingImg = [
                {
                    'thumbUrl': 'images/img/breeding/breeding_1.png',
                    'url': 'images/img/breeding/breeding_1.png',
                    'caption': ''
                },
                {
                    'thumbUrl': 'images/img/breeding/breeding_2.png',
                    'url': 'images/img/breeding/breeding_2.png',
                    'caption': ''
                },
                {
                    'thumbUrl': 'images/img/breeding/breeding_3.png',
                    'url': 'images/img/breeding/breeding_3.png',
                    'caption': ''
                },
                {
                    'thumbUrl': 'images/img/breeding/breeding_4.png',
                    'url': 'images/img/breeding/breeding_4.png',
                    'caption': ''
                },
                {
                    'thumbUrl': 'images/img/breeding/recipe.png',
                    'url': 'images/img/breeding/recipe.png',
                    'caption': ''
                }
            ];
            $scope.about.biomeWolvesImg = [
                {
                    'thumbUrl': 'images/img/biomeWolves/biomeWolves_1.png',
                    'url': 'images/img/biomeWolves/biomeWolves_1.png',
                    'caption': ''
                },
                {
                    'thumbUrl': 'images/img/biomeWolves/biomeWolves_2.png',
                    'url': 'images/img/biomeWolves/biomeWolves_2.png',
                    'caption': ''
                },
                {
                    'thumbUrl': 'images/img/biomeWolves/biomeWolves_3.png',
                    'url': 'images/img/biomeWolves/biomeWolves_3.png',
                    'caption': ''
                },
                {
                    'thumbUrl': 'images/img/biomeWolves/biomeWolves_4.png',
                    'url': 'images/img/biomeWolves/biomeWolves_4.png',
                    'caption': ''
                }
            ];
            $scope.about.extinguishingImg = [
                {
                    'thumbUrl': 'images/img/extinguishing/extinguishing_1.png',
                    'url': 'images/img/extinguishing/extinguishing_1.png',
                    'caption': ''
                },
                {
                    'thumbUrl': 'images/img/extinguishing/extinguishing_2.png',
                    'url': 'images/img/extinguishing/extinguishing_2.png',
                    'caption': ''
                }
            ];
            $scope.about.creeperImg = [
                {
                    'thumbUrl': 'images/img/creeper/creeper_1.png',
                    'url': 'images/img/creeper/creeper_1.png',
                    'caption': ''
                },
                {
                    'thumbUrl': 'images/img/creeper/creeper_2.png',
                    'url': 'images/img/creeper/creeper_2.png',
                    'caption': ''
                }
            ];
        });

        $scope.openLightboxModal = function (images, index) {
            Lightbox.openModal(images, index);
        };
    }
}]);

app.config(function (LightboxProvider) {
    LightboxProvider.templateUrl = 'template/libs/lightbox.html';
});