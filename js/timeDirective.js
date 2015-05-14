var app = angular.module('timeApp');

app.directive('showTime', function(){
	return {
		restrict: 'E',
		template: '<div> The current time is {{time}} </div>',
		link: function(scope, element, attrs){
			function updateDate(){
				scope.time = new Date().toString();
				scope.$apply();	
			};
			setInterval(updateDate, 1000);
			scope.time = new Date().toString();	
		}
	}
});