	// angular.module is a global place for creating, registering and retrieving Angular modules
	// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
	// the 2nd parameter is an array of 'requires'
	var app = angular.module('starter', ['ionic', 'templates', 'pascalprecht.translate','ngAnimate']);

	app.run(function($ionicPlatform, $rootScope,$state) {
		
		 $rootScope.bg = "";
	  $ionicPlatform.ready(function() {
		 	
		var DEBUG=true;   
        if (!DEBUG) {       
            if (!window.console)
                window.console = {};
            var methods = [ "log", "debug", "warn", "info" ];
            for (var i = 0; i < methods.length; i++) {
                console[methods[i]] = function() {
                };
            }
        }   
        console.log("App run called")
		console.log("Adding Back Event Listener");		
		document.addEventListener("backbutton", backKeyDown, true);
	
		function backKeyDown(event) { 
			// Call my back key code here.
			
			console.log("Back Key Pressed $state.current.name==="+ $state.current.name);
			
			if($state.current.name == "login" || $state.current.name == "splash"){
				navigator.home.home(function(){
					console.info("Successfully launched home intent");
				}, function(){
					console.error("Error launching home intent");
				});
			}
		}

		if(window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
			
			console.log("window.cordova.plugins.Keyboard initialization");
			
		  // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		  // for form inputs)
		  cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

		  // Don't remove this line unless you know what you are doing. It stops the viewport
		  // from snapping when text inputs are focused. Ionic handles this internally for
		  // a much nicer keyboard experience.
		  cordova.plugins.Keyboard.disableScroll(true);
		  
		  
		  window.addEventListener('native.keyboardshow', keyboardShowHandler);

		function keyboardShowHandler(e){
			console.log('native.keyboardshow Keyboard height is: ' + e.keyboardHeight);
			$rootScope.$broadcast('event:keyboardShown');
		}
		
		window.addEventListener('native.keyboardhide', keyboardHideHandler);

		function keyboardHideHandler(e){
			console.log('native.keyboardhide');
			$rootScope.$broadcast('event:keyboardHidden');
		}
		  

		 
		}
		if(window.StatusBar) {
		  StatusBar.styleDefault();
		}
		
		
	  });
	});

	app.init = function () {	
		angular.bootstrap(document, ['starter']);				
		console.log("Initialized the app");
	};

	



