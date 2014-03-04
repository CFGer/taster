var app = angular.module('SlideApp', ['ui.ace']);

app.directive('slideImage', function() {
    return function(scope, element, attrs) {
        attrs.$observe('slideImage', function(value) {
            element.css({
                'background-image': 'url(' + value +')',
                'background-size' : 'cover'
            });
        });
    }
});

app.controller('SlideController', function($scope, $sce) {
    $scope.data = {htmlString:"", trustedVersion:""}

    $scope.slideImages = [
        "slides/1/cfg.001.png",
        "slides/1/cfg.002.png",
        "slides/1/cfg.003.png",
        "slides/1/cfg.004.png",
        "slides/1/cfg.005.png",
        "slides/1/cfg.006.png",
        "slides/1/cfg.007.png",
        "slides/1/cfg.008.png",
        "slides/1/cfg.009.png",
        "slides/1/cfg.010.png",
        "slides/1/cfg.011.png",
        "slides/1/cfg.012.png",
        "slides/1/cfg.013.png",
        "slides/1/cfg.014.png",
        "slides/1/cfg.015.png",
        "slides/1/cfg.016.png",
        "slides/1/cfg.017.png",
        "slides/1/cfg.018.png",
        "slides/1/cfg.019.png",
        "slides/1/cfg.020.png",
        "slides/1/cfg.021.png",
        "slides/1/cfg.022.png",
        "slides/1/cfg.023.png",
        "slides/1/cfg.024.png",
        "slides/1/cfg.025.png",
        "slides/1/cfg.026.png",
        "slides/1/cfg.027.png",
        "slides/1/cfg.028.png",
        "slides/1/cfg.029.png",
        "slides/1/cfg.030.png",
        "slides/1/cfg.031.png",
        "slides/1/cfg.032.png",
        "slides/1/cfg.033.png",
        "slides/1/cfg.034.png",
        "slides/1/cfg.035.png",
        "slides/1/cfg.036.png",
        "slides/1/cfg.037.png",
        "slides/1/cfg.038.png",
        "slides/1/cfg.039.png",
        "slides/1/cfg.040.png",
        "slides/1/cfg.041.png",
        "slides/1/cfg.042.png",
        "slides/1/cfg.043.png",
        "slides/1/cfg.044.png",
        "slides/1/cfg.045.png",
        "slides/1/cfg.046.png",
        "slides/1/cfg.047.png",
        "slides/1/cfg.048.png",
        "slides/1/cfg.049.png",
        "slides/1/cfg.050.png",
        "slides/1/cfg.051.png",
        "slides/1/cfg.052.png",
        "slides/1/cfg.053.png",
        "slides/1/cfg.054.png",
        "slides/1/cfg.055.png",
        "slides/1/cfg.056.png",
        "slides/1/cfg.057.png",
        "slides/1/cfg.058.png",
        "slides/1/cfg.059.png",
        "slides/1/cfg.060.png",
        "slides/1/cfg.061.png",
        "slides/1/cfg.062.png",
        "slides/1/cfg.063.png",
        "slides/1/cfg.064.png",
        "slides/1/cfg.065.png",
        "slides/1/cfg.066.png",
        "slides/1/cfg.067.png",
        "slides/1/cfg.068.png",
        "slides/1/cfg.069.png",
        "slides/1/cfg.070.png",
        "slides/1/cfg.071.png",
        "slides/1/cfg.072.png",
        "slides/1/cfg.073.png",
        "slides/1/cfg.074.png",
        "slides/1/cfg.075.png",
        "slides/1/cfg.076.png",
        "slides/1/cfg.077.png",
        "slides/1/cfg.078.png",
        "slides/1/cfg.079.png",
        "slides/1/cfg.080.png",
        "slides/1/cfg.081.png",
        "slides/1/cfg.082.png",
        "slides/1/cfg.083.png",
        "slides/1/cfg.084.png",
        "slides/1/cfg.085.png",
        "slides/1/cfg.086.png",
        "slides/1/cfg.087.png",
        "slides/1/cfg.088.png",
        "slides/1/cfg.089.png",
        "slides/1/cfg.090.png",
        "slides/1/cfg.091.png",
        "slides/1/cfg.092.png",
        "slides/1/cfg.093.png",
        "slides/1/cfg.094.png",
        "slides/1/cfg.095.png",
        "slides/1/cfg.096.png",
        "slides/1/cfg.097.png",
        "slides/1/cfg.098.png",
        "slides/1/cfg.099.png",
        "slides/1/cfg.100.png",
        "slides/1/cfg.101.png",
        "slides/1/cfg.102.png",
        "slides/1/cfg.103.png",
        "slides/1/cfg.104.png",
        "slides/1/cfg.105.png",
        "slides/1/cfg.106.png",
        "slides/1/cfg.107.png",
        "slides/1/cfg.108.png",
        "slides/1/cfg.109.png",
        "slides/1/cfg.110.png",
        "slides/1/cfg.111.png",
        "slides/1/cfg.112.png",
        "slides/1/cfg.113.png",
        "slides/1/cfg.114.png",
        "slides/1/cfg.115.png",
        "slides/1/cfg.116.png",
        "slides/1/cfg.117.png",
        "slides/1/cfg.118.png",
        "slides/1/cfg.119.png",
        "slides/1/cfg.120.png",
        "slides/1/cfg.121.png",
        "slides/1/cfg.122.png",
        "slides/1/cfg.123.png",
        "slides/1/cfg.124.png",
        "slides/1/cfg.125.png",
        "slides/1/cfg.126.png",
        "slides/1/cfg.127.png",
        "slides/1/cfg.128.png",
        "slides/1/cfg.129.png",
        "slides/1/cfg.130.png",
        "slides/1/cfg.131.png",
        "slides/1/cfg.132.png",
        "slides/1/cfg.133.png",
        "slides/1/cfg.134.png",
        "slides/1/cfg.135.png",
        "slides/1/cfg.136.png",
        "slides/1/cfg.137.png",
        "slides/1/cfg.138.png",
        "slides/1/cfg.139.png",
        "slides/1/cfg.140.png",
        "slides/1/cfg.141.png",
        "slides/1/cfg.142.png"
        ];

    $scope.currentSlideNum = 0;

    $scope.nextSlide = function() {
        if($scope.currentSlideNum == $scope.slideImages.length-1) {
            return;
        }
        $scope.currentSlideNum++;
    }

    $scope.prevSlide = function() {
        if($scope.currentSlideNum == 0) {
            return;
        }
        $scope.currentSlideNum--;
    }

    $scope.currentSlide = function() {
        return $scope.slideImages[$scope.currentSlideNum];
    }

    $scope.progress = function() {
        var current = $scope.currentSlideNum+1,
            total = $scope.slideImages.length;
        return current + "/" + total;
    }

    $scope.$watch("data.htmlString", function(newValue) {
        //debugger;
        $scope.data.trustedVersion = $sce.trustAsHtml(newValue);
    }, true);
});
