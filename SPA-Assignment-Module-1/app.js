
var app = angular.module('LunchCheck', []);
app.controller('LunchCheckController',  ['$scope', function($scope) {
    $scope.post = {dishNames: null};
    $scope.comma = ',';


    $scope.CheckDish = function (dishToSplit, separator) {
  var dishCount = dishToSplit.split(separator);

if (dishCount.length > 0 && dishCount.length <= 3){
  $scope.message = "Enjoy";
}else if(dishCount.length > 3){
  $scope.message = "Too mch";
} else {
    $scope.message = "Please enter data first";
}


}

}]);
