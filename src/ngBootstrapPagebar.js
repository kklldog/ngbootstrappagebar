(function () {
'use strict';
    var directive = function () {
        var htmlTemplate="<nav ng-show='pageInfo.totalPages>0'><ul class='pagination'><li><a href='#'>&laquo;</a></li>"+
    "<li ng-repeat='p in currentPages' ng-class='activeClass(p.index)'><a href='#' ng-click='goPage(p.index)'>{{p.index}}</a></li>"+
    "<li><a href='#'>&raquo;</a></li></ul></nav>";
        return {
                restrict: 'EA', //E = element（元素）, A = attribute（属性）, C = class, M = comment         
                scope: {
                        pageInfo: '=',
                        onChange:'&'         
                    },
                template: htmlTemplate,
                link: function ($scope, element, attrs) { 
                    $scope.currentPages=[];
                    $scope.pageInfo.showPages = $scope.pageInfo.showPages?$scope.pageInfo.showPages:5;
                    $scope.pageInfo.pageIndex = $scope.pageInfo.pageIndex?$scope.pageInfo.pageIndex:1;
                    $scope.pageInfo.totalPages= $scope.pageInfo.totalPages?$scope.pageInfo.pageIndex:0;
                    
                    var y =$scope.pageInfo.pageIndex%$scope.pageInfo.showPages;
                    if(y===0){
                        y=5;
                    }
                    for(var i=0;i<$scope.pageInfo.showPages;i++){
                        $scope.currentPages.push({
                            index:$scope.pageInfo.pageIndex-y+1+i
                        });
                    }
                    $scope.activeClass=function(index){
                        if(index===$scope.pageInfo.pageIndex){
                            return 'active';
                        }else{
                            return '';
                        }
                    };
                    $scope.goPage=function(index){
                        console.log('go to page :',index);                        
                        $scope.pageInfo.pageIndex = index;
                        if($scope.onChange){
                            $scope.onChange(index);
                        }
                    };
                } 
        };
    };

    angular.module('bootstrap-pagebar',[]).directive('pagebar', directive);

}());