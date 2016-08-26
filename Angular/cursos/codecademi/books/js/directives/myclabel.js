app.directive('myclabel', [function () {
    return {
        restrict: 'E',
        scope: {
            label : '='
        },
        templateUrl: 'js/directives/myclabel.html'
    };
}])