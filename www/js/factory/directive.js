'use strict';
app.directive('onLongPress', function($timeout) {
	return {
		restrict: 'A',
		link: function($scope, $elm, $attrs) {
			$elm.bind('touchstart', function(evt) {
				$scope.longPress = true;
					$timeout(function() {
					if ($scope.longPress) {
						$scope.$apply(function() {
							$scope.$eval($attrs.onLongPress)
						});
					}
				}, 600);
			});
		$elm.bind('touchend', function(evt) {
				$scope.longPress = false;
				if ($attrs.onTouchEnd) {
					$scope.$apply(function() {
						$scope.$eval($attrs.onTouchEnd)
					});
				}
			});
		}
	};
})
.directive('myKeyPress', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            //if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.myKeyPress);
                });

                event.preventDefault();
            //}
        });
    };
});