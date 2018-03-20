var app = angular.module('basicApp', []); 
app.controller('homeController', function initController($scope){
     $scope.uname="List of Items"; 
     $scope.items=['first Item'];
     $scope.addItem=function(){
         if($scope.newItem){
             $scope.items.push($scope.newItem);
             $scope.newItem=undefined;
         }
     }
})