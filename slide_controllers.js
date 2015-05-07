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
'slides/1/cfg.001.jpg',
'slides/1/cfg.002.jpg',
'slides/1/cfg.003.jpg',
'slides/1/cfg.004.jpg',
'slides/1/cfg.005.jpg',
'slides/1/cfg.006.jpg',
'slides/1/cfg.007.jpg',
'slides/1/cfg.008.jpg',
'slides/1/cfg.009.jpg',
'slides/1/cfg.010.jpg',
'slides/1/cfg.011.jpg',
'slides/1/cfg.012.jpg',
'slides/1/cfg.013.jpg',
'slides/1/cfg.014.jpg',
'slides/1/cfg.015.jpg',
'slides/1/cfg.016.jpg',
'slides/1/cfg.017.jpg',
'slides/1/cfg.018.jpg',
'slides/1/cfg.019.jpg',
'slides/1/cfg.020.jpg',
'slides/1/cfg.021.jpg',
'slides/1/cfg.022.jpg',
'slides/1/cfg.023.jpg',
'slides/1/cfg.024.jpg',
'slides/1/cfg.025.jpg',
'slides/1/cfg.026.jpg',
'slides/1/cfg.027.jpg',
'slides/1/cfg.028.jpg',
'slides/1/cfg.029.jpg',
'slides/1/cfg.030.jpg',
'slides/1/cfg.031.jpg',
'slides/1/cfg.032.jpg',
'slides/1/cfg.033.jpg',
'slides/1/cfg.034.jpg',
'slides/1/cfg.035.jpg',
'slides/1/cfg.036.jpg',
'slides/1/cfg.037.jpg',
'slides/1/cfg.038.jpg',
'slides/1/cfg.039.jpg',
'slides/1/cfg.040.jpg',
'slides/1/cfg.041.jpg',
'slides/1/cfg.042.jpg',
'slides/1/cfg.043.jpg',
'slides/1/cfg.044.jpg',
'slides/1/cfg.045.jpg',
'slides/1/cfg.046.jpg',
'slides/1/cfg.047.jpg',
'slides/1/cfg.048.jpg',
'slides/1/cfg.049.jpg',
'slides/1/cfg.050.jpg',
'slides/1/cfg.051.jpg',
'slides/1/cfg.052.jpg',
'slides/1/cfg.053.jpg',
'slides/1/cfg.054.jpg',
'slides/1/cfg.055.jpg',
'slides/1/cfg.056.jpg',
'slides/1/cfg.057.jpg',
'slides/1/cfg.058.jpg',
'slides/1/cfg.059.jpg',
'slides/1/cfg.060.jpg',
'slides/1/cfg.061.jpg',
'slides/1/cfg.062.jpg',
'slides/1/cfg.063.jpg',
'slides/1/cfg.064.jpg',
'slides/1/cfg.065.jpg',
'slides/1/cfg.066.jpg',
'slides/1/cfg.067.jpg',
'slides/1/cfg.068.jpg',
'slides/1/cfg.069.jpg',
'slides/1/cfg.070.jpg',
'slides/1/cfg.071.jpg',
'slides/1/cfg.072.jpg',
'slides/1/cfg.073.jpg',
'slides/1/cfg.074.jpg',
'slides/1/cfg.075.jpg',
'slides/1/cfg.076.jpg',
'slides/1/cfg.077.jpg',
'slides/1/cfg.078.jpg',
'slides/1/cfg.079.jpg',
'slides/1/cfg.080.jpg',
'slides/1/cfg.081.jpg',
'slides/1/cfg.082.jpg',
'slides/1/cfg.083.jpg',
'slides/1/cfg.084.jpg',
'slides/1/cfg.085.jpg',
'slides/1/cfg.086.jpg',
'slides/1/cfg.087.jpg',
'slides/1/cfg.088.jpg',
'slides/1/cfg.089.jpg',
'slides/1/cfg.090.jpg',
'slides/1/cfg.091.jpg',
'slides/1/cfg.092.jpg',
'slides/1/cfg.093.jpg',
'slides/1/cfg.094.jpg',
'slides/1/cfg.095.jpg',
'slides/1/cfg.096.jpg',
'slides/1/cfg.097.jpg',
'slides/1/cfg.098.jpg',
'slides/1/cfg.099.jpg',
'slides/1/cfg.100.jpg',
'slides/1/cfg.101.jpg',
'slides/1/cfg.102.jpg',
'slides/1/cfg.103.jpg',
'slides/1/cfg.104.jpg',
'slides/1/cfg.105.jpg',
'slides/1/cfg.106.jpg',
'slides/1/cfg.107.jpg',
'slides/1/cfg.108.jpg',
'slides/1/cfg.109.jpg',
'slides/1/cfg.110.jpg',
'slides/1/cfg.111.jpg',
'slides/1/cfg.112.jpg',
'slides/1/cfg.113.jpg',
'slides/1/cfg.114.jpg',
'slides/1/cfg.115.jpg',
'slides/1/cfg.116.jpg',
'slides/1/cfg.117.jpg',
'slides/1/cfg.118.jpg',
'slides/1/cfg.119.jpg',
'slides/1/cfg.120.jpg',
'slides/1/cfg.121.jpg',
'slides/1/cfg.122.jpg',
'slides/1/cfg.123.jpg',
'slides/1/cfg.124.jpg',
'slides/1/cfg.125.jpg',
'slides/1/cfg.126.jpg',
'slides/1/cfg.127.jpg',
'slides/1/cfg.128.jpg',
'slides/1/cfg.129.jpg',
'slides/1/cfg.130.jpg',
'slides/1/cfg.131.jpg',
'slides/1/cfg.132.jpg',
'slides/1/cfg.133.jpg',
'slides/1/cfg.134.jpg',
'slides/1/cfg.135.jpg',
'slides/1/cfg.136.jpg',
'slides/1/cfg.137.jpg',
'slides/1/cfg.138.jpg',
'slides/1/cfg.139.jpg',
'slides/1/cfg.140.jpg',
'slides/1/cfg.141.jpg',
'slides/1/cfg.142.jpg',
'slides/1/cfg.143.jpg',
'slides/1/cfg.144.jpg',
'slides/1/cfg.145.jpg',
'slides/1/cfg.146.jpg',
'slides/1/cfg.147.jpg',
'slides/1/cfg.148.jpg',
'slides/1/cfg.149.jpg',
'slides/1/cfg.150.jpg',
'slides/1/cfg.151.jpg',
'slides/1/cfg.152.jpg',
'slides/1/cfg.153.jpg',
'slides/1/cfg.154.jpg',
'slides/1/cfg.155.jpg',
'slides/1/cfg.156.jpg',
'slides/1/cfg.157.jpg',
'slides/1/cfg.158.jpg',
'slides/1/cfg.159.jpg',
'slides/1/cfg.160.jpg',
'slides/1/cfg.161.jpg',
'slides/1/cfg.162.jpg',
'slides/1/cfg.163.jpg',
'slides/1/cfg.164.jpg',
'slides/1/cfg.165.jpg',
'slides/1/cfg.166.jpg',
'slides/1/cfg.167.jpg',
'slides/1/cfg.168.jpg',
'slides/1/cfg.169.jpg',
'slides/1/cfg.170.jpg',
'slides/1/cfg.171.jpg',
'slides/1/cfg.172.jpg',
'slides/1/cfg.173.jpg',
'slides/1/cfg.174.jpg',
'slides/1/cfg.175.jpg',
'slides/1/cfg.176.jpg',
'slides/1/cfg.177.jpg',
'slides/1/cfg.178.jpg',
'slides/1/cfg.179.jpg',
'slides/1/cfg.180.jpg',
'slides/1/cfg.181.jpg',
'slides/1/cfg.182.jpg',
'slides/1/cfg.183.jpg',
'slides/1/cfg.184.jpg',
'slides/1/cfg.185.jpg',
'slides/1/cfg.186.jpg',
'slides/1/cfg.187.jpg',
'slides/1/cfg.188.jpg',
'slides/1/cfg.189.jpg',
'slides/1/cfg.190.jpg',
'slides/1/cfg.191.jpg',
'slides/1/cfg.192.jpg',
'slides/1/cfg.193.jpg',
'slides/1/cfg.194.jpg'
// 'slides/1/cfg.195.jpg',
// 'slides/1/cfg.196.jpg',
// 'slides/1/cfg.197.jpg',
// 'slides/1/cfg.198.jpg',
// 'slides/1/cfg.199.jpg',
// 'slides/1/cfg.200.jpg',
// 'slides/1/cfg.201.jpg',
// 'slides/1/cfg.202.jpg',
// 'slides/1/cfg.203.jpg',
// 'slides/1/cfg.204.jpg',
// 'slides/1/cfg.205.jpg',
// 'slides/1/cfg.206.jpg',
// 'slides/1/cfg.207.jpg',
// 'slides/1/cfg.208.jpg',
// 'slides/1/cfg.209.jpg',
// 'slides/1/cfg.210.jpg',
// 'slides/1/cfg.211.jpg',
// 'slides/1/cfg.212.jpg',
// 'slides/1/cfg.213.jpg',
// 'slides/1/cfg.214.jpg',
// 'slides/1/cfg.215.jpg',
// 'slides/1/cfg.216.jpg',
// 'slides/1/cfg.217.jpg',
// 'slides/1/cfg.218.jpg',
// 'slides/1/cfg.219.jpg',
// 'slides/1/cfg.220.jpg',
// 'slides/1/cfg.221.jpg'
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
        var current = $scope.currentSlideNum+1,
            total = $scope.slideImages.length;
        return current + "/" + total;
    }

    $scope.$watch("data.htmlString", function(newValue) {
        //debugger;
        $scope.data.trustedVersion = $sce.trustAsHtml(newValue);
        localStorageService.add('html', newValue);

    }, true);
});
