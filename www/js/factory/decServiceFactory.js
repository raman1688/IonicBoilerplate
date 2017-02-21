
'use strict';
app.factory('decServiceFactory', function($http, $log, $q,$state,$translate,$rootScope,$timeout,$ionicLoading,constants,messageService,userSessionDataFactory) {
	
	var vm = this;
	vm.getServiceData = getServiceData;
	
	function getServiceData(serviceName, reqData) {
		
		//console.log("URL "+$rootScope.getAppConfigVars.serviceURL+""+ serviceName);
		console.log("serviceName "+serviceName);
		console.log("request data ",reqData);
		//console.log("request data "+JSON.toString(reqData));
		
		var url = "";
		
		// path to be put in constants
		//var path = "http://testmobileagent.indosatooredoo.com:8080/MobileCRM/service/";
		
		//var path = constants.SERVICE_PATH_TEST;  // DEV URL
		var path = constants.SERVICE_PATH_PROD;    //PROD URL 
		
		url = path+''+ serviceName;
		console.log("url "+url);
		//console.log("url "+url+" request Data ",reqData);
		
		var deferred = $q.defer();
		
		$http({
			method : 'POST',
			url : url,
			data : reqData,
			timeout : 60000,                          // will call error callback if response not received in 45 seconds
			headers : {
				'Content-Type' : 'application/json'
			}
		})
		.success(function(data) {
			console.log("success ", data);
			//console.log("success serviceName "+serviceName+" reqData ",reqData);
			//console.log("success serviceName "+serviceName+" response data ", data);
			if(data.ErrorCode == "Error" || data.ErrorMessage_en == "Session Timeout."){
				console.log("session timeout factory");
				/*
				var requestData = {
					"userId":userSessionDataFactory.getUserInfo().userId
				};
				var callback = function(){
					$http({
							method : 'POST',
							url : path+'logout',
							data : requestData,
							headers : {
								'Content-Type' : 'application/json'
							}
					})
					.success(function(resp) {
						console.log("success session timeout sending login");
						$timeout(function(){
							$state.go("login");
						}, 1000); 
					})
					.error(function(error) {					
						console.log("error session timeout sending login");
						$timeout(function(){
							$state.go("login");
						}, 1000); 
					});
					
				}
				*/
				//messageService.showTitleAlert(data["ErrorMessage" + "_" + $translate.use()],data["ErrorDescription" + "_" + $translate.use()], messageService["alertOkButton"+"_"+$translate.use()],callback);	
				messageService.showTitleAlert(data["ErrorMessage" + "_" + $translate.use()],data["ErrorDescription" + "_" + $translate.use()], messageService["alertOkButton"+"_"+$translate.use()],null);	
				$ionicLoading.hide();
				$timeout(function(){
					$state.go("login");
					$ionicLoading.hide();
				}, 1000); 
			}else{
				console.log("session sending to service");
				deferred.resolve(data);                          //if data is null or undefined than only some services where implemented will display  serviceNetwrokErrorMsg
			}													//CAN DO : SAME LIKE ERROR BELOW  in null case 	
		})
		.error(function(data) {                      //called on timeout error or no network
			//deferred.reject(data);                //function(error) {} thing handled here only will now not go to any service
			// $log.error(msg, code);              // will display serviceNetwrokErrorMsg
			console.log("error ", data);
			$ionicLoading.hide();
			var callback = function(){
				$state.go("login");
				$ionicLoading.hide();
			}
			messageService.showTitleAlert(messageService["serviceNetwrokErrorMsg"+"_"+$translate.use()],messageService["serviceAvailableLaterMsg"+"_"+$translate.use()], messageService["alertTryAgainBtn"+"_"+$translate.use()],callback);
		});
		return deferred.promise;
	}

	return{
		getServiceData:getServiceData
	}
});