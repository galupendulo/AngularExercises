app.directive('mylabel', [function () {
    return {
        restrict: 'E',
        scope: {
            label : '='
        },
        templateUrl: 'js/directives/mylabel.html'
    };
}])