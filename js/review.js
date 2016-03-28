app.controller("ReviewCtrl", ['$scope', '$http', 'PageService', function ($scope, $http, PageService) {
    $scope.review = {};

    if (PageService.getPageParams().page == "review") {
        $http.get(PageService.getDataPath()).success(function (data, status, headers, config) {
            $scope.review = data;

            $scope.review.video = {
                en: [
                    {
                        url: "P1rHoTzFZJ4"
                    },
                    {
                        url: "pnPAxmuphVw"
                    },
                    {
                        url: "3KdY3DCjZ-w"
                    }
                ],
                ru: [
                    {
                        url: "Hs41ro6aa_8"
                    }
                ]
            };

            $scope.getVideosPreviewUrl($scope.review.video.en);
            $scope.getVideosPreviewUrl($scope.review.video.ru);
        });
    }

    $scope.getVideosPreviewUrl = function (videos) {
        videos.forEach(function (video) {
            video.previewUrl = "http://img.youtube.com/vi/" + video.url + "/hqdefault.jpg";
        });
    };

    $scope.loadVideo = function (video) {
        video.playing = true;
    };

    $scope.playerVars = {
        autoplay: 1
    };
}]);