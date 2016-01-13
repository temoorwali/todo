/**
 * Created by HAMMAD on 1/10/2016.
 */

var App =angular.module('mainApp',['ngMaterial']);
App.controller('ctrl1',['$scope',function($scope){
   // $scope.nv='as';
    $scope.myObject={ val: 'title'};
    $scope.myArray=[
        {val :"To do app",status : false}
    ];






    $scope.add = function ()
    {
        //$scope.myObject.val=$scope.newItem;
        $scope.myArray.push({val:$scope.newItem , status:false});
        //{val:$scope.newItem}
    };
    $scope.delete=function()
    {
    };
}]);