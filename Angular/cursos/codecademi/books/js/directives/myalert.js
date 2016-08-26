app.directive('myalert', [function () {
    return {
        restrict: 'E',
        scope: {
            alert : '='
        },
        templateUrl: 'js/directives/myalert.html'
    };
}])