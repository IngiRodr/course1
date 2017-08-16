(function(){
	'use strict';
	angular.module('DIApp',[])
	
	.controller('DIController', DIController);
	
	//en angular $ hace referencia a un servicio
	//filter es un servicio para dar formato a la data q visualiza el user
	function DIController ($scope, $filter){
		$scope.name="Ingi";
		
		$scope.upper = function(){
			var upCase = $filter('uppercase');
			$scope.name = upCase($scope.name);
		};
		
		
	}
	
})();