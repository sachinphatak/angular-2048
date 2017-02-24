'use strict';

(function () {
    angular.module('game.controllers', ['cfp.hotkeys']);
})();

angular.module('game.controllers')
    .controller('GameCtrl', ['$scope', '$timeout', 'hotkeys',
        function ($scope, $timeout, hotkeys) {
            $scope.gridRows = [1,2,3,4];
            $scope.gridCells = [1,2,3,4];
            $scope.rowMax = 4;
            $scope.colMax = 4;
            $scope.tiles = [
                {
                    numberInTile: 2,
                    row: 1,
                    col: 1
                },
                {
                    numberInTile: 4,
                    row: 2,
                    col: 3
                }
            ];

            hotkeys.bindTo($scope)
                .add({
                    combo: 'right',
                    description: 'Move tiles right',
                    callback: function (event) {
                        event.preventDefault();
                        $scope.tiles.forEach(function (tile) {
                            if (tile.col < $scope.colMax) {
                                ++tile.col;
                            }
                        });
                    }
                })
                .add({
                    combo: 'left',
                    description: 'Move tiles left',
                    callback: function (event) {
                        event.preventDefault();
                        $scope.tiles.forEach(function (tile) {
                            if (tile.col > 1) {
                                --tile.col;
                            }
                        });
                    }
                })
                .add({
                    combo: 'up',
                    description: 'Move tiles up',
                    callback: function (event) {
                        event.preventDefault();
                        $scope.tiles.forEach(function (tile) {
                            if (tile.row > 1) {
                                --tile.row;
                            }
                        });
                    }
                })
                .add({
                    combo: 'down',
                    description: 'Move tiles down',
                    callback: function (event) {
                        event.preventDefault();
                        $scope.tiles.forEach(function (tile) {
                            if (tile.row < $scope.rowMax) {
                                ++tile.row;
                            }
                        });
                    }
                })
        }
    ]);