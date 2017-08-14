(function(){
	'use strict';
	angular.module('DIApp',[])
	
	.controller('DIController', DIController);
	
	//en angular $ hace referencia a un servicio
	function DIController ($scope, $filter){
		$scope.name="Ingi";
		
	}
	
})();