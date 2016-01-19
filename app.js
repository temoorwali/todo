/**
 * Created by HAMMAD on 1/10/2016.
 */

var App =angular.module('mainApp',['ngMaterial','ngMdIcons']);
App.controller('ctrl1',['$scope',function($scope){
   // $scope.nv='as';
   // $scope.myObject={ val: 'title'};
    $scope.myArray=[
        {val :"To do Item",status : false}
    ];

 $scope.totalItems=$scope.myArray.length;
$scope.remain;
    $scope.add = function ()
    {
        if($scope.newItem)
            $scope.myArray.push({val: $scope.newItem, status: false});
    };
    $scope.delete=function()
    {
            $scope.myArray=$scope.myArray.filter(function(item){
                remain= !item.status;
                return remain;
            })

    };
}]);