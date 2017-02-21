app.config(['$stateProvider', 
'$urlRouterProvider', 
'$controllerProvider', 
'$translateProvider',
"$ionicConfigProvider",

function($stateProvider, 
		 $urlRouterProvider, 
		 $controllerProvider,
		 $translateProvider,
		 $ionicConfigProvider		 	 

		 ){
//				//TODO: add the language specific string from a different file
//				$translateProvider.translations('en', {
//					
//				});
	
	$translateProvider
	.useStaticFilesLoader({
	  prefix: 'i18n/',
	  suffix: '.json'
	});

	//Set the default Language
	$translateProvider.preferredLanguage('en');
	

	//set header text to center
	$ionicConfigProvider.navBar.alignTitle('center');
	$ionicConfigProvider.views.forwardCache(true); 
	

	// any unknown URLS go to 404
	$urlRouterProvider.otherwise('/404');
	// no route goes to index
	$urlRouterProvider.when('', '/');
	// use a state provider for routing
	
$stateProvider
	.state('splash', {
		cache: false,
		url: '/',
		templateUrl: 'splash/templates/splash.html',
		controller: 'splashController',
		controllerAs: 'ctrl'
	})
	.state('login', {
		url: '/login',
		cache: false,
		templateUrl: 'login/templates/login.html',
		controller: 'loginController',
		controllerAs: 'vm'
	})
	
		
}]);
