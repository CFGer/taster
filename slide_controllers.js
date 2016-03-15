var app = angular.module('SlideApp', ['ui.ace', 'LocalStorageModule']);

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

app.controller('SlideController', function($scope, $sce, localStorageService) {
    $scope.slideImages = [
'slides/3/cfg.001.jpg',
'slides/3/cfg.002.jpg',
'slides/3/cfg.003.jpg',
'slides/3/cfg.004.jpg',
'slides/3/cfg.005.jpg',
'slides/3/cfg.006.jpg',
'slides/3/cfg.007.jpg',
'slides/3/cfg.008.jpg',
'slides/3/cfg.009.jpg',
'slides/3/cfg.010.jpg',
'slides/3/cfg.011.jpg',
'slides/3/cfg.012.jpg',
'slides/3/cfg.013.jpg',
'slides/3/cfg.014.jpg',
'slides/3/cfg.015.jpg',
'slides/3/cfg.016.jpg',
'slides/3/cfg.017.jpg',
'slides/3/cfg.018.jpg',
'slides/3/cfg.019.jpg',
'slides/3/cfg.020.jpg',
'slides/3/cfg.021.jpg',
'slides/3/cfg.022.jpg',
'slides/3/cfg.023.jpg',
'slides/3/cfg.024.jpg',
'slides/3/cfg.025.jpg',
'slides/3/cfg.026.jpg',
'slides/3/cfg.027.jpg',
'slides/3/cfg.028.jpg',
'slides/3/cfg.029.jpg',
'slides/3/cfg.030.jpg',
'slides/3/cfg.031.jpg',
'slides/3/cfg.032.jpg',
'slides/3/cfg.033.jpg',
'slides/3/cfg.034.jpg',
'slides/3/cfg.035.jpg',
'slides/3/cfg.036.jpg',
'slides/3/cfg.037.jpg',
'slides/3/cfg.038.jpg',
'slides/3/cfg.039.jpg',
'slides/3/cfg.040.jpg',
'slides/3/cfg.041.jpg',
'slides/3/cfg.042.jpg',
'slides/3/cfg.043.jpg',
'slides/3/cfg.044.jpg',
'slides/3/cfg.045.jpg',
'slides/3/cfg.046.jpg',
'slides/3/cfg.047.jpg',
'slides/3/cfg.048.jpg',
'slides/3/cfg.049.jpg',
'slides/3/cfg.050.jpg',
'slides/3/cfg.051.jpg',
'slides/3/cfg.052.jpg',
'slides/3/cfg.053.jpg',
'slides/3/cfg.054.jpg',
'slides/3/cfg.055.jpg',
'slides/3/cfg.056.jpg',
'slides/3/cfg.057.jpg',
'slides/3/cfg.058.jpg',
'slides/3/cfg.059.jpg',
'slides/3/cfg.060.jpg',
'slides/3/cfg.061.jpg',
'slides/3/cfg.062.jpg',
'slides/3/cfg.063.jpg',
'slides/3/cfg.064.jpg',
'slides/3/cfg.065.jpg',
'slides/3/cfg.066.jpg',
'slides/3/cfg.067.jpg',
'slides/3/cfg.068.jpg',
'slides/3/cfg.069.jpg',
'slides/3/cfg.070.jpg',
'slides/3/cfg.071.jpg',
'slides/3/cfg.072.jpg',
'slides/3/cfg.073.jpg',
'slides/3/cfg.074.jpg',
'slides/3/cfg.075.jpg',
'slides/3/cfg.076.jpg',
'slides/3/cfg.077.jpg',
'slides/3/cfg.078.jpg',
'slides/3/cfg.079.jpg',
'slides/3/cfg.080.jpg',
'slides/3/cfg.081.jpg',
'slides/3/cfg.082.jpg',
'slides/3/cfg.083.jpg',
'slides/3/cfg.084.jpg',
'slides/3/cfg.085.jpg',
'slides/3/cfg.086.jpg',
'slides/3/cfg.087.jpg',
'slides/3/cfg.088.jpg',
'slides/3/cfg.089.jpg',
'slides/3/cfg.090.jpg',
'slides/3/cfg.091.jpg',
'slides/3/cfg.092.jpg',
'slides/3/cfg.093.jpg',
'slides/3/cfg.094.jpg',
'slides/3/cfg.095.jpg',
'slides/3/cfg.096.jpg',
'slides/3/cfg.097.jpg',
'slides/3/cfg.098.jpg',
'slides/3/cfg.099.jpg',
'slides/3/cfg.100.jpg',
'slides/3/cfg.101.jpg',
'slides/3/cfg.102.jpg',
'slides/3/cfg.103.jpg',
'slides/3/cfg.104.jpg',
'slides/3/cfg.105.jpg',
'slides/3/cfg.106.jpg',
'slides/3/cfg.107.jpg',
'slides/3/cfg.108.jpg',
'slides/3/cfg.109.jpg',
'slides/3/cfg.110.jpg',
'slides/3/cfg.111.jpg',
'slides/3/cfg.112.jpg',
'slides/3/cfg.113.jpg',
'slides/3/cfg.114.jpg',
'slides/3/cfg.115.jpg',
'slides/3/cfg.116.jpg',
'slides/3/cfg.117.jpg',
'slides/3/cfg.118.jpg',
'slides/3/cfg.119.jpg',
'slides/3/cfg.120.jpg',
'slides/3/cfg.121.jpg',
'slides/3/cfg.122.jpg',
'slides/3/cfg.123.jpg',
'slides/3/cfg.124.jpg',
'slides/3/cfg.125.jpg',
'slides/3/cfg.126.jpg',
'slides/3/cfg.127.jpg',
'slides/3/cfg.128.jpg',
'slides/3/cfg.129.jpg',
'slides/3/cfg.130.jpg',
'slides/3/cfg.131.jpg',
'slides/3/cfg.132.jpg',
'slides/3/cfg.133.jpg',
'slides/3/cfg.134.jpg',
'slides/3/cfg.135.jpg',
'slides/3/cfg.136.jpg',
'slides/3/cfg.137.jpg',
'slides/3/cfg.138.jpg',
'slides/3/cfg.139.jpg',
'slides/3/cfg.140.jpg',
'slides/3/cfg.141.jpg',
'slides/3/cfg.142.jpg',
'slides/3/cfg.143.jpg',
'slides/3/cfg.144.jpg',
'slides/3/cfg.145.jpg',
'slides/3/cfg.146.jpg',
'slides/3/cfg.147.jpg',
'slides/3/cfg.148.jpg',
'slides/3/cfg.149.jpg',
'slides/3/cfg.150.jpg',
'slides/3/cfg.151.jpg',
'slides/3/cfg.152.jpg',
'slides/3/cfg.153.jpg',
'slides/3/cfg.154.jpg',
'slides/3/cfg.155.jpg',
'slides/3/cfg.156.jpg',
'slides/3/cfg.157.jpg',
'slides/3/cfg.158.jpg',
'slides/3/cfg.159.jpg',
'slides/3/cfg.160.jpg',
'slides/3/cfg.161.jpg',
'slides/3/cfg.162.jpg',
'slides/3/cfg.163.jpg',
'slides/3/cfg.164.jpg',
'slides/3/cfg.165.jpg',
'slides/3/cfg.166.jpg',
'slides/3/cfg.167.jpg',
'slides/3/cfg.168.jpg',
'slides/3/cfg.169.jpg',
'slides/3/cfg.170.jpg',
'slides/3/cfg.171.jpg',
'slides/3/cfg.172.jpg',
'slides/3/cfg.173.jpg',
'slides/3/cfg.174.jpg',
'slides/3/cfg.175.jpg',
'slides/3/cfg.176.jpg',
'slides/3/cfg.177.jpg',
'slides/3/cfg.178.jpg',
'slides/3/cfg.179.jpg',
'slides/3/cfg.180.jpg',
'slides/3/cfg.181.jpg',
'slides/3/cfg.182.jpg',
'slides/3/cfg.183.jpg',
'slides/3/cfg.184.jpg',
'slides/3/cfg.185.jpg',
'slides/3/cfg.186.jpg',
'slides/3/cfg.187.jpg',
'slides/3/cfg.188.jpg',
'slides/3/cfg.189.jpg',
'slides/3/cfg.190.jpg',
'slides/3/cfg.191.jpg',
'slides/3/cfg.192.jpg',
'slides/3/cfg.193.jpg',
'slides/3/cfg.194.jpg',
'slides/4/cfg.195.jpg',
'slides/4/cfg.196.jpg',
'slides/4/cfg.197.jpg'
        ];
    var html = localStorageService.get('html') || "";
    $scope.data = {htmlString:html, trustedVersion:html}

    var slideNos = localStorageService.get('currentSlideNum') || 0;
    $scope.currentSlideNum = slideNos;
    $scope.$watch('currentSlideNum', function(value){
        localStorageService.add('currentSlideNum', value);
    });




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
        var current = parseInt($scope.currentSlideNum) + 1,
            total = $scope.slideImages.length;
        return current + "/" + total;
    }

    $scope.$watch("data.htmlString", function(newValue) {
        $scope.data.trustedVersion = $sce.trustAsHtml(newValue);
        localStorageService.add('html', newValue);

    }, true);
});
