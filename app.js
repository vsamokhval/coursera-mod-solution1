(function () {
'use strict';

angular.module('LunchCheck', [])
    .controller('LunchCheckController', lunchCheckController);

    lunchCheckController.$inject = ['$scope'];
    function lunchCheckController($scope) {
        $scope.lunchItems = '';

        $scope.checkLunchItems = function () {

            var items =  $scope.lunchItems.split(',');
            items = items.filter(function(item){
                return !!item.trim();
            });

            $scope.checkItemsResult = $scope.getOutputMessage(items.length);
            $scope.elemColor = $scope.getElementColor(items.length);
        };

        $scope.getOutputMessage = function(count) {
            return count === 0 ? 'Please enter data first' :
                count > 3 ? 'Too much!' : 'Enjoy!';
        };

        $scope.getElementColor = function (count) {
            return count === 0 ? 'red' : 'green';
        };
    };

})();
