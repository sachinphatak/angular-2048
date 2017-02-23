'use strict';

(function () {
    angular.module('game.controllers', ['cfp.hotkeys']);
})();

angular.module('game.controllers')
    .controller('GameCtrl', ['$scope', '$timeout', 'hotkeys',
        function ($scope, $timeout, hotkeys) {
            $scope.gridRows = [1,2,3,4];
            $scope.gridCells = [1,2,3,4];
            $scope.tileClass = 'tile-1-1';

            hotkeys.bindTo($scope)
                .add({
                    combo: 'right',
                    description: 'Move tiles right',
                    callback: function (event) {
                        event.preventDefault();
                        var row = $scope.tileClass.split('-')[1];
                        var col = $scope.tileClass.split('-')[2];
                        if (col < 4) {
                            $scope.tileClass = 'tile-' + row + '-' + (++col);
                        }
                    }
                })
                .add({
                    combo: 'left',
                    description: 'Move tiles left',
                    callback: function (event) {
                        event.preventDefault();
                        var row = $scope.tileClass.split('-')[1];
                        var col = $scope.tileClass.split('-')[2];
                        if (col > 1) {
                            $scope.tileClass = 'tile-' + row + '-' + (--col);
                        }
                    }
                })
                .add({
                    combo: 'up',
                    description: 'Move tiles up',
                    callback: function (event) {
                        event.preventDefault();
                        var row = $scope.tileClass.split('-')[1];
                        var col = $scope.tileClass.split('-')[2];
                        if (row > 1) {
                            $scope.tileClass = 'tile-' + (--row) + '-' + col;
                        }
                    }
                })
                .add({
                    combo: 'down',
                    description: 'Move tiles down',
                    callback: function (event) {
                        event.preventDefault();
                        var row = $scope.tileClass.split('-')[1];
                        var col = $scope.tileClass.split('-')[2];
                        if (row < 4) {
                            $scope.tileClass = 'tile-' + (++row) + '-' + col;
                        }
                    }
                })
        }
    ]);