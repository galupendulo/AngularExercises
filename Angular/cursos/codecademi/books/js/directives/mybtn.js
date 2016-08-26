app.directive('mybtn', [function () {
    return {
        restrict: 'E',
        scope: {
            btn : '='
        },
        templateUrl: 'js/directives/mybtn.html'
    };
}])