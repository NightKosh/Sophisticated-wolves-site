angular.module("nk-gallery", ['ng'])
.directive('nkGallery', ['Lightbox', function (Lightbox) {
    return {

      templateUrl: 'template/libs/nkGallery.html',   
        replace: true,
        scope: {
        	data: '='
        },
        link: function (scope, element, attrs) {
        	scope.$watch("data", function(newValue, OldValue, scope){
                if (newValue) { 
                	scope.showArrow = scope.data.images.length > 5;
                	scope.images = [];
                	scope.thumbImages = [];
                	scope.data.images.forEach(function(image,index) {
                		scope.images.push(scope.data.path + image);
                		if (scope.data.thumb) {
                    		scope.thumbImages.push(scope.data.path + "thumb/" + image);
                		} else {
                    		scope.thumbImages.push(scope.data.path + image);
                		}
                	});
                }
            });
        	
            scope.expand = function() {
            	scope.galleryClass = (scope.galleryClass == "expanded") ? "" : "expanded";
            };
            scope.openImage = function (index) {
                Lightbox.openModal(scope.images, index);
            };
        }
    };
}]);