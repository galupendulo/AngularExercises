app.directive('pilllabel', [function () {
    return {
        restrict: 'E',
        scope: {
            label : '='
        },
        templateUrl: 'js/directives/pilllabel.html'
    };
}])