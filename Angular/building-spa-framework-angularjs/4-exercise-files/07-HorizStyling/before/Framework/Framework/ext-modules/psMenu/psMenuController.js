"use strict";

angular.module('psMenu').controller('psMenuController',
    ['$scope', '$rootScope',
        function ($scope, $rootScope) {

            $scope.isVertical = true;

            this.getActiveElement = function () {
                return $scope.activeElement;
            };

            this.setActiveElement = function (el) {
                $scope.activeElement = el;
            };

            this.setRoute = function (route) {
                $rootScope.$broadcast('ps-menu-item-selected-event',
                    { route: route });
            };

            $scope.toggleMenuOrientation = function () {
                $scope.isVertical = !$scope.isVertical;

                $rootScope.$broadcast('ps-menu-orientation-changed-event',
                    { isMenuVertical: $scope.isVertical });
            };
        }
    ]);