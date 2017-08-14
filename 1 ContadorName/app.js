(function (){
	'use strict';
	angular.module('myFirstApp',[])
	
	//scope es el objeto para comunicarse entre esquemas
	.controller('MyFirstController', function($scope){
		//$scope.name = "Ingi";
		$scope.sayHello = function(){
			return "Hello Course";
		}
		
		$scope.name = "";
		$scope.totalvalue = 0;
		
		$scope.displayNumeric = function(){
			var totalNameValue = 
				calculateNumericForString($scope.name); //get the total value
				
			$scope.totalvalue = totalNameValue;
		};
		
		function calculateNumericForString(string){
			var totalStringvalue = 0;
			
			for(var i=0; i<string.length; i++){
				totalStringvalue += string.charCodeAt(i);
			}
			
			return totalStringvalue;
		}
		
	});
})();