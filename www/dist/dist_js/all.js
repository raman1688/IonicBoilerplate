angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('login/templates/login.html',' <ion-view class="login-view" view-title="login" >\r\n  <ion-content class="mainBgDiv">\r\n     <div class="row noPadding">\r\n\t\t<div class="col noPadding">\r\n\t\t\t <nvd3 options="vm.options" data="vm.data"></nvd3>\r\n\t\t\t <div id="wordsCloud">\r\n   <word-cloud words="vm.words" width="vm.width" height="vm.height" on-click="vm.wordClicked">\r\n   </word-cloud>\r\n</div>\r\n\t\t\t<div class="row noPadding">\r\n\t\t\t\t<div class="col noPadding">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="col noPadding">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t</div>\r\n\t</div>\r\n\t\r\n  </ion-content>\r\n </ion-view>');
$templateCache.put('splash/templates/splash.html','<ion-view>\r\n<!-- TODO: put the background image here -->\r\n\t<ion-content class="splash">\r\n\t\r\n\t</ion-content>\r\n <div style="width:100%;height:100%;position:absolute;"><img src="img/Login/background.png" ></div>\r\n</ion-view>');}]);
	// angular.module is a global place for creating, registering and retrieving Angular modules
	// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
	// the 2nd parameter is an array of 'requires'
	var app = angular.module('starter', ['ionic', 'templates', 'pascalprecht.translate','ngAnimate','nvd3','angular-d3-word-cloud']);

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

/**
 * Common Filters
 */ 


'use strict';
app.filter('ifNullOrUndefined', function() {
	   return function(data) {

			if(data == null || data == undefined){
				return "";
			}else{
				return data;
			}
			
		}
}).filter('amountIdFormat', function() {
		  	return function(amount) {
		  		if (amount === parseInt(amount, 10)){
		  			amount = amount.toString();
		  		}
				var returnAmnt = "0";
				amount =  amount.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
				if(amount == "" || amount == null || amount == undefined){
					
					returnAmnt =  "0";
					
				}else{
					
					returnAmnt = String(amount).replace(/^\d+/, function(w){
						var rx=  /(\d+)(\d{3})/;
						while(rx.test(w)){
							w= w.replace(rx, '$1.$2');
						}
						return w;
					});
					
					if(returnAmnt == "" || returnAmnt == null || returnAmnt == undefined){
						returnAmnt = "0";
					}
					
				}
				
				return returnAmnt;
				
			}
			

});






	'use strict';
    app.constant('$ionicLoadingConfig', {
      template: 'Loading...'
    });
	app.service('constants', function() {
        //Constant
        var constants = {
            LOG_ENABLED: true,
			SERVICE_PATH_TEST:'http://testmobileagent.indosatooredoo.com:8080/MobileCRM/service/',
			SERVICE_PATH_PROD:'https://mobilecrm.indosatooredoo.com/MobileCRM/service/',
            SERVICE_PATH_TEST2:'http://testmobileagent.indosatooredoo.com:8080/MobileCRM/sprintTwo/',
			//APP_VERSION:'2.0',  //Previous Production Version
			APP_VERSION:'2.1',	  //Current Production Version
			
			SERVICE_STRING_VERSION_CHECK: 'versionCheck',
            SERVICE_STRING_LOGIN: 'login',
            SERVICE_STRING_FORGOT_PASSWORD: 'forgotPassword',
            SERVICE_STRING_CUSTOMER_PROFILE: 'customerProfile',
            SERVICE_STRING_CUSTOMER_THREECALLS:'retrieveLastContacts',
            SERVICE_STRING_ORDER_STATUS: 'retrieveOrderStatus',
            SERVICE_STRING_ORDER_HISTORY: 'retrieveOrderHistory',
			SERVICE_STRING_CREATE_INTERACTION: 'createInteraction',
			SERVICE_STRING_LOGOUT:'logout',
            VALIDATE_OTP:'validateOTP',
            SEND_OTP:'sendOTP',
            VALIDATION_ICC_ID:'validateIccIdService',
            SERVICE_STRING_CHANGE_PASSWORD: 'changePassword',
			SERVICE_STRING_ORDER_SUBMIT:'serviceRequest',
            PROFILE_CONSTANTS_BLOCK:'block',
            PROFILE_CONSTANTS_NONE:'none',
            SIM_CARD_OWNER:'SIM Card Owner',
            PROFILE_CONSTANTS_VIEW:"VIEW",
            PROFILE_CONSTANTS_CHEVRON:"ion-chevron-down",
            PROFILE_CONSTANTS_INACTIVE:"Inactive",
            PROFILE_CONSTANTS_CORPORATE:"Corporate",
            PROFILE_CONSTANTS_CATALIST:"Catalist",
            PROFILE_CONSTANTS_PREPAID:"Prepaid",
            PROFILE_CONSTANTS_POSTPAID:"Postpaid",
            PROFILE_CONSTANTS_UPGRADE:"Upgrade 4G",
            PROFILE_CONSTANTS_SIMCARDOWNER:"simCardOwner",
            PROFILE_CONSTANTS_SIMCARDOWNERNOT:"simCardOwnerNot",
            PROFILE_CONSTANTS_HIDE:"HIDE",
            PROFILE_CONSTANTS_SUCCESS:"SUCCESS",
            PROFILE_CONSTANTS_FAILURE:"FAILURE" ,
            PROFILE_CONSTANTS_SATURN:"Saturn-000",
            PROFILE_CONSTANTS_MENUHOME:"menu.home",
			SERVICE_STRING_SEND_EMAIL:'sendEmail',
			SERVICE_STRING_UPLOAD_PDF:"uploadPDF",
			SERVICE_STRING_UPLOAD_IMAGE:"uploadProfileImage",
            RETRIVEPACKAGES:"retrievePacks",
            GET_ADDRESS:"getAddress",
            GET_COUNTRY_LIST:"getCountryList",
            GET_RELIGIONS:"getReligions",
            CHECK_ELIGIBILITY:"checkEligibility",
            SUBMIT_CUSTOMER_DETAILS:"submitCustomerDetails",
            RETRIVEDEVICES:"getDevice",
            GET_RESERVE_MSISDN:"reserveMsisdn",
            PAYMENT:"payment",
            RETRIEVE_RELATIONSHIP:"retrieveRelation",
            RETRIEVE_STATIC_SERVICE:"retrieveStaticData",
			ACTIVATE_POSTPAID:"activatePostpaid",
			SERVICE_STRING_CUSTOMER_PROFILE_CHANGE_OWNER:"customerProfile",
            SERVICE_STRING_RETRIEVE_INVOICE_INFO:"retrieveInvoice",
			SERVICE_STRING_CUSTOMER_PROFILE_CHANGE_OWNER_INFO:"getCustInfo",
			SERVICE_STRING_PREPAID_TO_POSTPAID_MIGRATION:"migration",
            MIGRATION:"migration",
            CHANGE_OWNER:"changeOwnership"
        };
        return constants;
    });



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

'use strict';
app.service('messageService', function($ionicPopup) {


	//public functions
	var Messages = {
		

		//English(_en) Messages
		alertOkButton_en: 'OK',
		alertYesButton_en: 'Yes',
		alertCancelButton_en: 'Cancel',
		alertTitleError_en: 'Error',
		alertTitleVersionOutdated_en: 'Version Outdated',
		alertTryAgainBtn_en:"Try Again",
		alertTitleRegister_en: 'Register',
		alertBtnSubmit_en: 'Submit',
		alertMsgLoggingOut_en: 'Logging Out',
		success_en: 'Success',
		failure_en: 'Failure',
		msgVersinCheckOptUpdate_en: 'Your APK version is outdated. Please download the latest from <a href="http://mobilecrm.indosatooredoo.com/images/mobileCRM.apk">Click here</a>',
		msgVersinCheckManUpdate_en: 'Your APK version is outdated. Please download the latest from <a href="http://mobilecrm.indosatooredoo.com/images/mobileCRM.apk">Click here</a>',
		serviceNetwrokErrorMsg_en:"Sorry, system/network is error!",
        serviceAvailableLaterMsg_en:"Please check its availability later.",
		blank_login_en : "Fields cannot be blank, please enter valid username and password.",
		length_username_en: "Username cannot be less than 10 characters.",
		length_password_en: "Password cannot be less than 8 characters.",
		alphanum_password_en : "Password need to be alpha numeric, please enter valid Password.",
		select_gerai_type_en : "Please select Type of Gerai.",
		select_location_en : "Please select Location.",
		input_phone_msisdn_en : "Please input phone number before proceed.",
		valid_phone_msisdn_en: 'Please enter valid Phone Number.',
		valid_reason_msisdn_en :'Please input reason to upgrade.',
		valid_cust_pres_msisdn_en :'Please input customer presence.',
		cardReplacement_en:'Card Replacement',
		postpaidActivation_en:'Postpaid Activation',
		changeOwnership_en:'Change Ownership',
		migrationPostpaid_en:'Migration Prepaid To Postpaid',
		pointCamera_en:'Please point your camera at the Bar code.',
		inactiveMsg1_en:'Customer with Phone No. ',
		inactiveMsg2_en:' is in Soft blocked. Please suggest customer to Cashier/Helpdesk',
		simCardOwner_en:"SIM Card Owner",
		simCardOwnerNot_en:"Not SIM Card Owner",
		invalidICCID_en:"Invalid ICCID. <br> Please try again",
		captureICCID_en:"Please capture ICCID before submiting",
		validateICCID_en:"Please validate ICCID Before submiting",
		validateICCIDFailure_en:"New ICCID validation failed, please try again",
		validateNotOwnerSignature_en:"Please input representative's name before submitting",
		validateHomeTransit_en:"Are you sure you want to go <br><b>back home?</b>",
		validateHomePostCustomerLookupTransit_en:"Are you sure you want to go <br>back home? All data and selections <br>will be lost.",
		validateHomePostActTransit_en:"Are you sure you want to go <br>back home? All data and selections <br>will be lost.",
		validatephotoLoad1_en:"Please capture Customer Photo before submitting",
		validateCustomerId_en:"Please capture Customer ID  before submitting",
		validateSuratKuasa_en:"Please capture letter of attorney before submitting",
		validateRepresentativeId_en:"Please capture representative ID  before submitting",
		validateThreeCalls_en:"Please check last 3 calls number",
		validateCall_en:"Please do the verification call.",
		imageCapturedSuccess_en:"Image Captured Successfully.",
		validateSignature_en:"Please input customer signature before submiting",
		validateEmailNotFound_en:"Customer Email not found.",
		validateEmailInvalid_en:"Customer Email not valid.",
		notificationOTP1_en:"There will be an OTP sent to",
		notificationOTP2_en:"Please verify if the number is correct.",
		cust_id_sig_en:"Please choose customer's ID type",
		validateOrderSubmit_en:"Duplicate Order cannot be submitted.",
		subEmail_en:"Formulir Perubahan Layanan Ganti Kartu",
		bodyEmail_en:"Kepada Pelanggan Yth, <br> Berikut kami sampaikan bukti pergantian kartu atas permintaan pelanggan",
		success_email_en:"Email has been successfully sent",
		select_one_product_en:"PLEASE SELECT ONE OF PRODUCT BEFORE SWIPE TO NEXT STEP.",
		select_monthly_en:"PLEASE SELECT MONTHLY SPENDING OPTION BEFORE PROCEED",
		selectPerson1_en:"Person 1 need to be selected first.",
		selectPerson12_en:"Person 1 and Person 2 need to be selected first.",
		selectPerson123_en:"Person 1, Person 2 and Person 3 need to be selected first.",
		selectPerson1234_en:"Person 1, Person 2 , Person 3 and Person 4 need to be selected first.",
		selectPackLessParent_en:"CHOOSE A PACKAGE THAT IS LOWER OR EQUAL TO MAIN NUMBER",
		addAtleast1_en:"Please add 1 up to 4 additional members or return to freedom postpaid selections",
		selectDevice_en:"Please select a device.",
		selectPack_en:"Please select a package.",
		
		//Indonesian (_id) Messages		
		alertOkButton_id: 'OK',
		alertYesButton_id: 'Ya',
		alertCancelButton_id: 'Batalkan',
		alertTileCancelRegister_id: 'Batal?',
		alertTitleError_id: 'Error',
		alertTitleVersionOutdated_id: 'Version Outdated',
		alertTryAgainBtn_id:"Coba Lagi",
		alertTitleRegister_id: 'Daftar',
		alertBtnSubmit_id: 'Kirim',
		alertMsgLoggingOut_id: 'Logging Out',
		alertBtnClose_id: 'Tutup',			
		success_id: 'Sukses',
		failure_id: 'Gagal',
		msgVersinCheckOptUpdate_id: 'Your APK version is outdated. Please download the latest from <a href="http://mobilecrm.indosatooredoo.com/images/mobileCRM.apk">Click here</a>',
		msgVersinCheckManUpdate_id: 'Your APK version is outdated. Please download the latest from <a href="http://mobilecrm.indosatooredoo.com/images/mobileCRM.apk">Click here</a>',
		serviceNetwrokErrorMsg_id:"Maaf, system saat ini sedang error!",
        serviceAvailableMsg_id:"Mohon periksa kembali.",
		blank_login_id : "Fields tidak boleh kosong, masukkan username dan password yang valid.",
		length_username_id: "Username tidak boleh kurang dari 10 karakter.",
		length_password_id: "Password tidak boleh kurang dari 8 karakter.",
		alphanum_password_id : "Sandi harus numerik alpha, masukkan kata sandi yang valid.",
		select_gerai_type_id : "Silakan pilih Jenis Gerai.",
		select_location_id : "Silakan pilih Lokasi.",
		input_phone_msisdn_id : "Masukan nomor telpon pelanggan.",
		valid_phone_msisdn_id: 'Masukkan Nomor Telepon valid.',
		valid_reason_msisdn_id :'Tolong isi alasan penggantian.',
		valid_cust_pres_msisdn_id :'Tolong isi kedatangan pelanggan.',
		cardReplacement_id:'Penggantian Kartu',
		postpaidActivation_id:'Aktivasi Pascabayar',
		changeOwnership_id:'Penggantian Pemilik',
		migrationPostpaid_id:'Migrasi Prabayar Ke Pascabayar',
		pointCamera_id:'Silakan arahkan kamera ke kode Bar.',
		inactiveMsg1_id:'Pelanggan dengan nomor ',
		inactiveMsg2_id:' se dong dalam soft-blocked. Arahkan ke kasir / helpdesk.',
		simCardOwner_id:"Pemilik Kartu",
		simCardOwnerNot_id:"Diwakilkan",
		invalidICCID_id:"ICCID valid. Situs Silakan coba lagi",
		captureICCID_id:"Harap ambil foto ICCID sebelum submit",
		validateICCID_id:"Harap validasi ICCID sebelum submit",
		validateICCIDFailure_id:"Harap validasi ICCID sebelum disubmit",
		validateNotOwnerSignature_id:"Harap masukan nama pelapor sebelum submit.",
		validateHomeTransit_id:"Anda yakin ingin ke menu utama?",
		validateHomePostActTransit_id:"Anda yakin ingin keluar back home? <br> Semua data dan pilihan produk akan hilang.",
		validateHomePostCustomerLookupTransit_id:"Apakah Anda yakin ingin keluar? Data-data yang telah dimasukan akan hilang",
		validatephotoLoad1_id:"Harap ambil gambar Surat Kuasa sebelum disubmit",
		validateCustomerId_id:"Harap ambilfoto ID penerima kuasa sebelum submit",
		validateSuratKuasa_id:"Harap ambil foto surat kuasa sebelum submit",
		validateRepresentativeId_id:"Harap ambilfoto ID penerima kuasa sebelum submit",
		validateThreeCalls_id:"Harap periksa 3 panggilan terakhir terlebih dahulu.",
		validateCall_id:"Silakan lakukan panggilan verifikasi.",
		imageCapturedSuccess_id:"Gambar Ditangkap Berhasil.",
		validateSignature_id:"Tanda tangan pelanggan/penerima kuasa belum tersedia",
		validateEmailNotFound_id:"Pelanggan Email tidak ditemukan.",
		validateEmailInvalid_id:"Pelanggan Email tidak ditemukan.",
		notificationOTP1_id:"Akan ada OTP yang dikirim ke:",
		notificationOTP2_id:"Harap verifikasi jika nomor tersebut benar.",
		cust_id_sig_id:"Harap pilih tipe ID pelanggan terlebih dahulu.",
		validateOrderSubmit_id:"Duplikat Pesanan tidak dapat disampaikan.",
		subEmail_id:"Formulir Perubahan Layanan Ganti Kartu",
		bodyEmail_id:"Kepada Pelanggan Yth, <br> Berikut kami sampaikan bukti pergantian kartu atas permintaan pelanggan",
		success_email_id:"Email telah berhasil dikirim",
		select_one_product_id:"PILIH SALAH SATU PRODUK SEBELUM BERGESER KE LANGKAH SELANJUTNYA.",
		select_monthly_id:"PILIH SALAH SATU OPSI PENGELUARAN PER BULAN SEBELUM LIHAT HASIL",
		selectPerson1_id:"Orang 1 harus dipilih pertama.",
		selectPerson12_id:"Orang 1 dan orang 2 perlu dipilih pertama.",
		selectPerson123_id:"Orang 1, orang 2, dan orang 3 perlu dipilih pertama.",
		selectPerson1234_id:"Orang 1, orang 2, orang 3 dan orang 4 perlu dipilih pertama.",
		selectPackLessParent_id:"PILIH PAKET YANG LEBIH RENDAH ATAU SAMA DENGAN NOMOR UTAMA",
		addAtleast1_id:"Tambahkan 1 hingga 4 member tambahan atau kembali ke pilihan Freedom Postpaid",
		selectDevice_id:"Please select a device.",
		selectPack_id:"Please select a package.",

		//called in login
		//No Title Alert
		showAlert: function(msg, btnName ,callback) {
			var myPopup = $ionicPopup.show({
				template: '<div>'
				+'<div class="row padding-bottom30"> <div class="col text-center popupMsgAlert popup-color">'+msg+'</div></div>'
				+'</div>',
				cssClass: 'noTitlePopup',
				 buttons: [
				   {
						text: '<b>'+btnName+'</b>',
						type: 'button button-block button-assertive btnAlert',
						onTap: function(e) {
							console.log("Tapped!!!!!!!!!!!");
							myPopup.close();
							if(callback != null && callback!= undefined){
								callback();
							}
						}
					}]
			});	
		},

		//called in login
		showTitleAlert: function(title, msg, btnName ,callback) {

			var myPopup = $ionicPopup.show({
				template: '<div>'
				+'<div class="row padding-bottom30"> <div class="col text-center popupTitle popup-color">'+title+'</div></div>'
				+'<div class="row padding-bottom30"> <div class="col text-center popupMsg mini-font">'+msg+'</div></div>'
				+'</div>',
				cssClass: 'noTitlePopup',
				 buttons: [
				   {
						text: '<b>'+btnName+'</b>',
						type: 'button button-block button-assertive',
						onTap: function(e) {
							console.log("Tapped!!!!!!!!!!!");
							myPopup.close();
							if(callback != null && callback!= undefined){
								callback();
							}
						}
					}]
			});	
		},
		
		
		showTitleBoldAlert: function(title, msg, btnName ,callback) {
			var myPopup = $ionicPopup.show({
				template: '<div>'
				+'<div class="row padding-bottom30"> <div class="col text-center popupTitle popup-color">'+title+'</div></div>'
				+'<div class="row padding-bottom30"> <div class="col text-center popupMsg mini-font" style="font-family:ooredoo-bold;font-size:1.5em;">'+msg+'</div></div>'
				+'</div>',
				 buttons: [
				   {
						text: '<b>'+btnName+'</b>',
						type: 'button button-block button-assertive',
						onTap: function(e) {
							console.log("Tapped!!!!!!!!!!!");
							myPopup.close();
							if(callback != null && callback!= undefined){
								callback();
							}
						}
					}]
			});	
		},
		
		showVersionUpdateAlert: function(title,msg, btnName ,callback) {
			var myPopup = $ionicPopup.show({
				template: '<div>'
				+'<div class="row padding-bottom30"> <div class="col text-center popupTitle popup-color">'+title+'</div></div>'
				+'<div class="row padding-bottom30"> <div class="col text-center popupMsg mini-font">'+msg+'</div></div>'
				+'</div>',
				 buttons: [
				   {
						text: '<b>'+btnName+'</b>',
						type: 'button button-block button-assertive',
						onTap: function(e) {
							console.log("Tapped!!!!!!!!!!!");
							myPopup.close();
							if(callback != null && callback!= undefined){
								//callback();
							}
						}
					}]
			});	
		},
		
		
		showMsisdnScreenAlert: function(msg, btnName ,callback) {
			var myPopup = $ionicPopup.show({
				template: '<div>'+
							'<div class="row padding-bottom30 backHome">'+
							'<div class="col text-center popup-color">'+
							msg+
							'</div></div>'+
							'</div>',
				 buttons: [
				   {
						text: '<b>'+btnName+'</b>',
						type: 'button button-block button-assertive',
						onTap: function(e) {
							console.log("Tapped!!!!!!!!!!!");
							myPopup.close();
							if(callback != null && callback!= undefined){
								callback();
							}
						}
					}]
			});	
		},
		
		showProfileScreenAlert: function(msg, btnName ,callback) {
			var myPopup = $ionicPopup.show({
				template: '<div>'+
							'<div class="row padding-bottom30">'+
							'<div class="col text-center popup-color" style="line-height: 41px;font-family: ooredoo-bold;font-size: 1.5em;">'+
							msg+
							'</div></div>'+
							'</div>',
				cssClass: 'noTitlePopup',
				buttons: [
				   {
						text: '<b>'+btnName+'</b>',
						type: 'button button-block button-assertive',
						onTap: function(e) {
							console.log("Tapped!!!!!!!!!!!");
							myPopup.close();
							if(callback != null && callback!= undefined){
								callback();
							}
						}
					}]
			});	
		},
		
		showProfileScreenOTP: function(msg1,msisdn,msg2,btnName,callback) {
			var myPopup = $ionicPopup.show({
				template: '<div>'+
							'<div class="row padding-bottom30">'+
							'<div class="col text-center popup-color" style="line-height: 41px;font-size:1.5em;font-style:ooredoo-regular;">'+
							msg1+
							"<br><span style='font-size:1.5em;font-style:ooredoo-bold;'>"+msisdn+"</span><br>"+
							msg2+
							'</div></div>'+
							'</div>',
				 cssClass: 'noTitlePopup',
				 buttons: [
				   {
						text: '<b>'+btnName+'</b>',
						type: 'button button-block button-assertive',
						onTap: function(e) {
							console.log("Tapped!!!!!!!!!!!");
							myPopup.close();
							if(callback != null && callback!= undefined){
								callback();
							}
						}
					}]
			});	
		},
		
		
		showBackHomeAlert: function(msg,btnText1,btnText2,btnCallback1,btnCallback2) {
			
			console.log("showBackHomeAlert "+msg);
			
			
			var myPopup = $ionicPopup.show({
				template: '<div style="backgroundWhite">'+
					 '<div class="row backHome" style="font-size:1.3em;color: #FF0000">'+
					 '<div class="col text-center popup-color" style="line-height: 37px;">'+
					 msg+
					 '</div></div>'+
					'</div>',
				 cssClass: 'noTitlePopup',
				 buttons: [
			   {
					 text: '<b>'+btnText1+'</b>',
					 type: 'button button-assertive',
					 onTap: function(e) {
						 myPopup.close();
						 if(null != btnCallback1 && undefined != btnCallback1){
							 btnCallback1();
						 }
					}
				},
				{
					 text: '<b>'+btnText2+'</b>',
					 type: 'button cancelBtn buttonGrey',
					 onTap: function(e) {
						 myPopup.close();
						 if(null != btnCallback2 && undefined != btnCallback2){
							 btnCallback1();
						 }
					}
				}]
			});
			
		},

		showMigrationFailedAlert: function(title,msg1,msg2, btnName ,callback) {
			var myPopup = $ionicPopup.show({
				template: '<div>'
				+'<div class="row padding-top80"> <div class="col text-center popup-color popupMsg">'+title+'</div></div>'
				+'<div class="row"> <div class="col text-center popup-color popupMsg">'+msg1+'</div></div>'
				+'<div class="row padding-bottom30"> <div class="col text-center popup-color popupMsg">'+msg2+'</div></div>'
				+'</div>',
				cssClass: 'noTitlePopup',
				 buttons: [
				   {
						text: '<b>'+btnName+'</b>',
						type: 'button button-block button-assertive btnAlert',
						onTap: function(e) {
							console.log("Tapped!!!!!!!!!!!");
							myPopup.close();
							if(callback != null && callback!= undefined){
								callback();
							}
						}
					}]
			});	
		},
	}
   
	return Messages;
});
	

function openUrl(){
	var ref = cordova.InAppBrowser.open('https://mobileagent.indosatooredoo.com/web', '_blank', 'location=no');
	ref.addEventListener('loadstart', function(event) { console.log(event.url); });
}
'use strict';
app.factory('userSessionDataFactory', function() {
	
		//Store sensitive information about the user here and it will be deleted on app close
		//Not all information can be stored encrypted in JSONStore due to security constraints
			
		var defaultUserInfo = {
			"userId"		: "",
			"userName"		: "",
			"userType"		: "",
			"geraiList"		: [],
			"ProfileImage"	: "",
			"ProfileURL"	: ""
		};	
		
		var defaultCustomerInfo={
			msisdn:"",
			upgrade:"",
			owner:"",
			selectedBlock:""
		};
		
		var defaultUserLocation = {
			"GERAI_TYPE":"",
			"GERAI_LOCATION":""
		};
		
		var defaultVersionInfo = {
			"initiator":"MOBCRM9876543210",
			"key":"1123445566666666"
		};

		var defaultSuperPlan = {
			"flowSelected":"",           //handset or package
			"pack":"",
			"device":"",
			"selectedPeriod":"12",
			"orderPdfURL":"",
			"IMEIselectedDevice":""
		};
		
		var defaultProfileInfo={
			"Status": "",	
			"ErrorCode": "",
			"ErrorDescription": "",
			
			"ActiveDate": "",
			"AssetActivationDate": "",
			"AssetMainPackage": "",
			"AssetStatus": "",
			"BillingAccountNumber": "",
			"CardType": "",
			"CustType": "",
			"CustAddressLine1": "",
			"CustAddressLine2": "",
			"CustAddressType": "",				  
			"CustCity": "",
			"CustEmail": "",
			"CustId": "",
			"CustIDNumber": "",
			"CustIDType": "",
			"CustProvince": "",
			"CustStatus": "",
			"CustZipCode": "",
			"DompetkuBalance": "",
			"DompetkuStatus": "",
			"ExpiryDate": "",
			"FirstName": "",
			"GracePeriod": "",
			"ICCID": "",
			"LastBalance": "",
			"LastName": "",
			"LastPayment": "",
			"LastTopup":"",	
			"LastTopupChannel":"",
			"MaidenName": "",
			"Msisdn": "",
			"OfferName": "",
			"PackActivation": "",
			"PackageStatus": "", 
			"PicId": "",
			"PicName": "",
			"ServiceType": "",
			"Source": "",		 				  
			"VanityNumber": "",
			"VIP": ""	  
		}
		
		var defaultOldNewCustomerProfile={
			
		}
		
		var defaultquestAns={
			"answer1":"",
			"answer2":"",
			"package":"",
			"requestType":"",    //Freedom , Family , Abonement  else MSP
			"orderPdfURL":""
		}
		
		var defaultQuotaCallSMS={
			"quota":"",
			"call":"",
			"sms":""
		}
		
		var defaultInternetCallAbonement={
			"internetAbonement":"",
			"callAbonement":"",
			"smsAbonement":""
		}
		
		var defaultFamilyPack={
			"persons":{
				"person1":"",
				"person2":"",
				"person3":"",
				"person4":"",
				"person5":""
			},
			"count":"",
			"total":"",
			"discountedTotal":"",
			"averageTotal":"",
			"totalDiscountPercent":""
		}
		
		var defaultCustomerInformation={
			"name":"",
			"gendar":"",
			"motherName":"",
			"idType":"",
			"idNumber":"",
			"nationality":"",
			"birthPlace":"",
			"dob":"",
			"areaCode":"",
			"altNumber":"",
			"residenceAddr":"",
			"postalCode":"",
			"city":"",
			"province":"",
			"religion":"",
			"img":"",
			"idProof":"",
			"billAddrSame":""
		}

		var defaultBillingInformation = {
			"phoneNumber" :"",
			"iccid" :"",
			"email" :"",
			"billAddrEmail" :"",
			"billAddrPost" :"",
			"residenseAddr" :"",
			"postalCode" :"",
			"city" :"",
			"province" :"",
			"gender" :"",
			"refName" :"",
			"relationship" :"",
			"codeArea":"",
			"refPhoneNumber" :"",
			"isSeperateBilling":""
		}
		
		var defaultPaymentDetail={
		  "paymentMethod":"",
		  "cardOwnership":"",
		  "cardHoldernName":"",
		  "cardType":"",
		  "cardNumber":"",
		  "expireDate":"",
		  "bankIssue":"",
		  "creditCardImg":"",
		  "idCCHolder":"",
		  "alarmLimit":"",
		  "mycare":"",
		  "dompetku":"",
		  "msisdn":""
		}
			
		var defaultSubmitSignature={
			"customerSignature":"",
			"cardHolderSignature":""
		}
			
		var defaultSubmitSignatureChangeOwner={
			"newCustomerSignature":"",
			"existingCustomerSignature":"",
			"indosatSignature":""
		}
			
		var defaultSprintInfo={
			"sprint":"",
			"accountType":"",
		}
		
		
			
		var userInfo = {};
		var customerInfo = {};
		var userLocation = {};
		var versionInfo = {};
		var superplan = {};
		var profileInfo = {};
		var oldCustomerProf={};
		var newCustomerProf={};
		var questAns = {};
		var QuotaCallSMS = {};
		var internetCallAbonement = {};
		var familyPackInfo = {};
		var customerInformation = {};
		var billingInformation = {};
		var paymentDetail = {};
		var submitSignature = {};
		var submitSignatureChangeOwner = {};
		var sprintInfo = {};
		
			
		angular.extend(userInfo, defaultUserInfo);
		angular.extend(customerInfo, defaultCustomerInfo);
		angular.extend(userLocation, defaultUserLocation);
		angular.extend(versionInfo, defaultVersionInfo);
		angular.extend(superplan, defaultSuperPlan);
		angular.extend(profileInfo, defaultProfileInfo);
		angular.extend(oldCustomerProf, defaultOldNewCustomerProfile);
		angular.extend(newCustomerProf, defaultOldNewCustomerProfile);
		angular.extend(questAns, defaultquestAns);
		angular.extend(QuotaCallSMS, defaultQuotaCallSMS);
		angular.extend(internetCallAbonement, defaultInternetCallAbonement);
		angular.extend(familyPackInfo, defaultFamilyPack);
		angular.extend(customerInformation, defaultCustomerInformation);
		angular.extend(billingInformation, defaultBillingInformation);
		angular.extend(paymentDetail, defaultPaymentDetail);
		angular.extend(submitSignature, defaultSubmitSignature);
		angular.extend(submitSignatureChangeOwner, defaultSubmitSignatureChangeOwner);
		angular.extend(sprintInfo, defaultSprintInfo);

			
		return {
			
			//Return user information from the session data
			getUserInfo : function() {
				return userInfo;
			},		
			
			//set new user info
			//input: newInfo = {key : any type}
			setUserInfo : function(newInfo) {					
				angular.extend(userInfo, newInfo);
				console.log("setUserInfo with:"+JSON.stringify(newInfo)+" userInfo after="+JSON.stringify(userInfo));					
				return userInfo;
			},
			
			//reset is used if the user logs out
			resetUserSessionData : function() {
				userInfo = {};					
				angular.extend(userInfo, defaultUserInfo);
				return true;
			},
			
			getCustomerInfo : function() {
				return customerInfo;
			},	
			
			//set new customer info
			//input: newInfo = {key : any type}
			setCustomerInfo : function(newInfo) {			
				angular.extend(customerInfo, newInfo);
				console.log("setCustomerInfo with:"+JSON.stringify(newInfo)+" customerInfo after="+JSON.stringify(customerInfo));					
				return customerInfo;
			},	
			
			//Return user selected location from the session data
			getUserLocation : function() {
				return userLocation;
			},	
			
			//set new user info
			//input: newInfo = {key : any type}
			setUserLocation : function(newInfo) {				
				angular.extend(userLocation, newInfo);
				console.log("setUserLocation with:"+JSON.stringify(newInfo)+" userInfo after="+JSON.stringify(userLocation));					
				return userLocation;
			},	
			
			getVersionInfo : function() {
				return versionInfo;
			},
			
			//input: newInfo = {key : any type}
			setVersionInfo : function(newInfo) {
				angular.extend(versionInfo, newInfo);
				console.log("setVersionInfo with:"+JSON.stringify(newInfo)+" setVersionInfo after="+JSON.stringify(versionInfo));	
				return versionInfo;
			},
			
			getSuperPlan : function() {
				return superplan;
			},
			
			setSuperPlan : function(newInfo) {
				angular.extend(superplan, newInfo);
				//console.log("setSuperPlan with:"+JSON.stringify(newInfo)+" setSuperPlan after="+JSON.stringify(superplan));	
				return superplan;		
			},
			
			resetSuperPlan : function() {
				superplan = {};
				angular.extend(superplan, defaultSuperPlan);
				return true;
			},
		
			//Get Profile Info
			getProfileInfo : function() {
				return profileInfo;
			},
			
			//input: newInfo = {key : any type}
			setProfileInfo : function(newInfo) {
				angular.extend(profileInfo, newInfo);
				console.log("setProfileInfo with: "+JSON.stringify(newInfo)+" profileInfo after="+JSON.stringify(profileInfo));	
				return profileInfo;
			},
			
			resetProfileInfo : function() {	
				profileInfo = {};
				angular.extend(profileInfo, defaultProfileInfo);
				return true;
			},
			
			getOldCustomerProfileInfo : function() {
				return oldCustomerProf;
			},
			
			setOldCustomerProfileInfo : function(oldInfo) {
				angular.extend(oldCustomerProf, oldInfo);
				return oldCustomerProf;
			},
			
			resetOldCustomerProfileInfo : function() {
				oldCustomerProf = {};
				angular.extend(oldCustomerProf, defaultOldNewCustomerProfile);
				return true;
			},
			
			getNewCustomerProfileInfo : function() {
				return newCustomerProf;
			},
			
			setNewCustomerProfileInfo : function(newInfo) {
				angular.extend(newCustomerProf, newInfo);
				return newCustomerProf;
			},
			
			resetNewCustomerProfileInfo : function() {
				newCustomerProf = {};
				angular.extend(newCustomerProf, defaultOldNewCustomerProfile);
				return true;
			},
						
			//Return user information from the session data
			getQuest : function() {
				return questAns;
			},
			
			//input: newInfo = {key : any type}
			setQuest : function(newQuestAns) {	
				angular.extend(questAns, newQuestAns);	
				return questAns;
			},	
			
			resetQuest : function() {
				questAns = {};
				angular.extend(questAns, defaultquestAns);
				return true;
			},
			
			getQuotaCallSMS : function() {
				return QuotaCallSMS;
			},
			
			
			//input: newInfo = {key : any type}
			setQuotaCallSMS : function(newQuotaCallSMS) {		
				angular.extend(QuotaCallSMS, newQuotaCallSMS);	
				return QuotaCallSMS;
			},
			
			resetQuotaCallSMS : function() {
				QuotaCallSMS = {};
				angular.extend(QuotaCallSMS, defaultQuotaCallSMS);
				return true;
			},
			
			getInternetCallAbonement : function() {
				return internetCallAbonement;
			},
			
			//input: newInfo = {key : any type}
			setInternetCallAbonement : function(newInternetCallAbonement) {
				angular.extend(internetCallAbonement, newInternetCallAbonement);
				return internetCallAbonement;
			},
			
			resetInternetCallAbonement : function() {
				internetCallAbonement = {};
				angular.extend(internetCallAbonement, defaultInternetCallAbonement);
				return true;
			},
			
			//familyPlan Info
			getfamilyPackInfo : function() {
				return familyPackInfo;
			},
			
			//input: newInfo = {key : any type}
			setfamilyPackInfo : function(newFamilyPack) {
				angular.extend(familyPackInfo, newFamilyPack);
				return familyPackInfo;
			},	
			
			resetfamilyPackInfo : function() {
				familyPackInfo = {};
				angular.extend(familyPackInfo, defaultFamilyPack);
				return true;
			},
			
			getCustomerInformation : function() {
				return customerInformation;
			},
			
			setCustomerInformation : function(defaultCustomerInformation) {
				angular.extend(customerInformation, defaultCustomerInformation);
				//console.log("setVersionInfo with:"+JSON.stringify(defaultCustomerInformation)+" setCustomerInformation after="+JSON.stringify(customerInformation));
				console.log("setCustomerInformation to:",customerInformation);
				
				return customerInformation;		
			},
			
			resetCustomerInformation : function() {
				customerInformation = {};
				angular.extend(customerInformation, defaultCustomerInformation);
				return true;
			},

			getBillingInformation : function() {
				return billingInformation;
			},
			
			setBillingInformation : function(defaultBillingInformation) {
				angular.extend(billingInformation, defaultBillingInformation);
				//console.log("setBillingInformation with:"+JSON.stringify(defaultBillingInformation)+" setVersionInfo after="+JSON.stringify(billingInformation));
				console.log("setBillingInformation to:",billingInformation);
				
				return billingInformation;		
			},
			
			resetBillingInformation : function() {
				
				billingInformation = {};
				angular.extend(billingInformation, defaultBillingInformation);
				return true;
			},
			
			getPaymentDetail: function() {
				return paymentDetail;
			},
			
			setPaymentDetail : function(defaultPaymentDetail) {
				angular.extend(paymentDetail, defaultPaymentDetail);
				//console.log("setPaymentDetail with:"+JSON.stringify(defaultPaymentDetail)+" setPaymentDetail after="+JSON.stringify(paymentDetail));
				console.log("setPaymentDetail to:",paymentDetail);
				return paymentDetail;		
			},
			
			resetPaymentDetail : function() {
				paymentDetail = {};
				angular.extend(paymentDetail, defaultPaymentDetail);
				return true;
			},
			
			getSubmitSignature : function() {
				return submitSignature;
			},
			
			setSubmitSignature : function(defaultSubmitSignature) {
				angular.extend(submitSignature, defaultSubmitSignature);	
				return submitSignature;		
			},
			
			resetSubmitSignature : function() {
				submitSignature = {};
				angular.extend(submitSignature, defaultSubmitSignature);	
				return true;
			},
			resetSubmitSignatureChangeOwner : function() {
				submitSignatureChangeOwner = {};
				angular.extend(submitSignatureChangeOwner, defaultSubmitSignatureChangeOwner);	
				return true;
			},

			getSubmitSignatureChangeOwner : function() {
				return submitSignatureChangeOwner;
			},
			
			
			setSubmitSignatureChangeOwner : function(defaultSubmitSignatureChangeOwner) {
				angular.extend(submitSignatureChangeOwner, defaultSubmitSignatureChangeOwner);	
				return submitSignatureChangeOwner;		
			},	
			
			getSprintInfo : function() {
				return sprintInfo;
			},
			
			setSprintInfo : function(newSprintInfo) {
				angular.extend(sprintInfo,newSprintInfo);
				console.log("setSprintInfo with:"+JSON.stringify(newSprintInfo)+" sprintInfo after="+JSON.stringify(newSprintInfo));
				return sprintInfo;		
			},

			resetSprintInfo : function() {
				sprintInfo = {};
				angular.extend(sprintInfo, defaultSprintInfo);
				return true;
			},	
			
		}
			
});

'use strict';
app.factory('utilitiesFactory', function($ionicPopup,$translate,messageService) {

	//public functions
	return {

		/**
		 * START COMMON FUNCTIONS
		 * Put common functions here
		 */

		 removeSpacesInBetween: function(string) {   
			return string.replace(/[\s]/g, '');
		},
		
		/** Convert to date string
			@param  dateDotFormat -  new Date()
			@return convertedDate - Date In "11 Apr 2016" format
		**/
		convertToDateString : function(dateFormat,text){
			
			var convertedDate = "";
			
			console.log("convertToDateString  "+dateFormat);
						
			if(dateFormat == null || dateFormat == undefined || dateFormat == ""){
				console.log("dateFormat null or undefined or empty hence converting current Date");
				dateFormat = new Date();
			}
			
	
			var date = dateFormat;
			

			var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
			  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
			];
			
			if(text == "changeOwnerResultSubmit"){
				var monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
				  "Juli", "Agustus", "September", "Oktober", "Nopember", "Desember"
				];
			}
			
			convertedDate = date.getDate()+" "+monthNames[date.getMonth()]+" "+date.getFullYear();
			
			console.log("convertToDateString converted date "+ convertedDate);
			
			return convertedDate;
			 
		},
		
		
		/** Convert to date string
			@param  dateDotFormat -  new Date()
			@return convertedDate - Date In "11/April/2016" format
		**/
		convertToDateStringSlashFormat : function(dateFormat){
			
			var convertedDate = "";
			
			console.log("convertToDateStringSlashFormat  "+dateFormat);
						
			if(dateFormat == null || dateFormat == undefined || dateFormat == ""){
				console.log("dateFormat null or undefined or empty hence converting current Date");
				dateFormat = new Date();
			}
			
	
			var date = dateFormat;
			

			var monthNames = ["January", "February", "March", "April", "May", "June",
			  "July", "August", "September", "October", "November", "December"
			];
			
			convertedDate = date.getDate()+"/"+monthNames[date.getMonth()]+"/"+date.getFullYear();
			
			console.log("convertToDateStringSlashFormat converted date "+ convertedDate);
			
			return convertedDate;
			 
		},
		
		convertToDateStringWithDay : function(dateFormat){
			
			var convertedDate = "";
			
			console.log("convertToDateStringSlashFormat  "+dateFormat);
						
			if(dateFormat == null || dateFormat == undefined || dateFormat == ""){
				console.log("dateFormat null or undefined or empty hence converting current Date");
				dateFormat = new Date();
			}
			
	
			var date = dateFormat;
			

			var monthNames = ["January", "February", "March", "April", "May", "June",
			  "July", "August", "September", "October", "November", "December"
			];
			var dayNames = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat",
			  "Sabtu" ];
			convertedDate = dayNames[date.getDay()] + " tanggal" + date.getDate()+"/"+monthNames[date.getMonth()]+"/"+date.getFullYear();
			
			console.log("convertToDateStringWithDay converted date "+ convertedDate);
			
			return convertedDate;
			 
		},
		
		/** Convert to date string
			@param  dateDotFormat -  new Date()
			@return convertedDate - Date In "11 Apr 2016 15:05:05" format
		**/
		convertToDateTimeString : function(dateFormat){
			
			var convertedDate = "";
			
			console.log("convertToDateTimeString  "+dateFormat);
						
			if(dateFormat == null || dateFormat == undefined || dateFormat == ""){
				console.log("dateFormat null or undefined or empty hence converting current Date");
				dateFormat = new Date();
			}
			
	
			var date = dateFormat;
			

			var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
			  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
			];
			
			convertedDate = date.getDate()+" "+monthNames[date.getMonth()]+" "+date.getFullYear()+" "+
							date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
			
			console.log("convertToDateTimeString converted date "+ convertedDate);
			
			return convertedDate;
			 
		},
		
		
		/** Convert to date string
			@param dateDotFormat -  Date in "11.04.2016" format
			@return convertedDate - Date In "11 Apr 2016" format
		**/
		convertToDateStringFromDotFormat : function(dateDotFormat){
			
			console.log("convertToDateStringFromDotFormat dateDotFormat "+dateDotFormat);
			
			var convertedDate = "";
			
			if(dateDotFormat == null || dateDotFormat == undefined || dateDotFormat == ""){
				console.log("dateDotFormat null or undefined or empty hence returning empty convertedDate");
				return convertedDate;
			}else if((dateDotFormat.split(".")).length < 3){
				console.log("dateDotFormat is not expected format hence returning empty convertedDate");
				return convertedDate;
			}
			
			var dobDate = dateDotFormat.split(".")[0];
			var dobMonth= dateDotFormat.split(".")[1];
			var dobYear = dateDotFormat.split(".")[2];
			var date = new Date(dobYear,(dobMonth-1),dobDate);
			//to check invalid date again converted to date
			if(date == "Invalid Date"){
				console.log("date is Invalid Date hence returning empty convertedDate");
				return convertedDate;
			}
			
			
		  /*var monthNames = ["January", "February", "March", "April", "May", "June",
			  "July", "August", "September", "October", "November", "December"
			];*/
			
			var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
			  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
			];
			
			convertedDate = date.getDate()+" "+monthNames[date.getMonth()]+" "+date.getFullYear();
			
			console.log("convertToDateStringFromDotFormat converted date "+ convertedDate);
			
			return convertedDate;
			 
		},
		
		/** Convert to date string
			@param dateDotFormat -  Date in "11/04/2016" format
			@return convertedDate - Date In "11 Apr 2016" format
		**/
		convertToDateStringFromSlashFormat : function(dateSlashFormat){
			
			console.log("convertToDateStringFromSlashFormat dateSlashFormat "+dateSlashFormat);
			
			var convertedDate = "";
			
			if(dateSlashFormat == null || dateSlashFormat == undefined || dateSlashFormat == ""){
				console.log("dateSlashFormat null or undefined or empty hence returning empty convertedDate");
				return convertedDate;
			}else if((dateSlashFormat.split("/")).length < 3){
				console.log("dateSlashFormat is not expected format hence returning empty convertedDate");
				return convertedDate;
			}
			
			var dobDate = dateSlashFormat.split("/")[0];
			var dobMonth= dateSlashFormat.split("/")[1];
			var dobYear = dateSlashFormat.split("/")[2];
			var date = new Date(dobYear,(dobMonth-1),dobDate);
			//to check invalid date again converted to date
			if(date == "Invalid Date"){
				console.log("date is Invalid Date hence returning empty convertedDate");
				return convertedDate;
			}
			
			
		  /*var monthNames = ["January", "February", "March", "April", "May", "June",
			  "July", "August", "September", "October", "November", "December"
			];*/
			
			var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
			  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
			];
			
			convertedDate = date.getDate()+" "+monthNames[date.getMonth()]+" "+date.getFullYear();
			
			console.log("convertToDateStringFromSlashFormat converted date "+ convertedDate);
			
			return convertedDate;
			 
		},
		
		
		/** Convert to date string
			@param dateDotFormat -  Date in "06-15-2016 i.e MM-DD-YYYY" format
			@return convertedDate - Date In "Jun 15, 2016" format
		**/
		convertToDateStringProfileFromSlashFormat : function(dateSlashFormat){
			
			//console.log("convertToDateStringProfileFromSlashFormat dateSlashFormat "+dateSlashFormat);
			
			var convertedDate = "";
			
			if(dateSlashFormat == null || dateSlashFormat == undefined || dateSlashFormat == ""){
				console.log("dateSlashFormat null or undefined or empty hence returning empty convertedDate");
				return convertedDate;
			}else if((dateSlashFormat.split("-")).length < 3){
				console.log("dateSlashFormat is not expected format hence returning empty convertedDate");
				return convertedDate;
			}
			
			var dobDate = dateSlashFormat.split("-")[0];
			var dobMonth= dateSlashFormat.split("-")[1];
			var dobYear = dateSlashFormat.split("-")[2];
			//console.log("util dobDate "+dobDate);
			//console.log("util dobMonth "+dobMonth);
			//console.log("util dobYear "+dobYear);
			
			//to check invalid date again converted to date
			var date = new Date(dobYear,(dobMonth-1),dobDate);
			//console.log("util date "+date);
			

			if(date == "Invalid Date"){
				console.log("date is Invalid Date hence returning empty convertedDate");
				return convertedDate;
			}
			
			
		  /*var monthNames = ["January", "February", "March", "April", "May", "June",
			  "July", "August", "September", "October", "November", "December"
			];*/
			
			var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
			  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
			];
			
			convertedDate = monthNames[date.getMonth()] +" "+ date.getDate()+","+date.getFullYear();
			
			//console.log("convertToDateStringProfileFromSlashFormat converted date "+ convertedDate);
			
			return convertedDate;
			 
		},
			
		
		
		//Returns mobile type
		getMobileType : function() {
			
			console.log("getMobileType navigator ",navigator);
			
			var type = "";
			
			if(navigator == undefined || navigator == null || 
				navigator.userAgent == undefined || navigator.userAgent == null){
					
					console.log("navigator or navigator.useragent undefined/null ");
					return type;
			}
			
			console.log("getMobileType navigator.userAgent "+navigator.userAgent);
			
			if(navigator.userAgent.match(/Android/i)){
				type = "android";
			}else if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){
				type = "ios";
			}else if(navigator.userAgent.match(/BlackBerry/i)){
				type = "blackberry";
			}else if(navigator.userAgent.match(/IEMobile/i)){
				type = "windows";
			}else if(navigator.userAgent.match(/Opera Mini/i)){
				type = "opera";
			}
			 
			console.log("getMobileType type "+type);
			
			return type;

		},
		
		/**
			value - value
			formatExpected - format expected (string/number) default-string
		**/
		convertFormattedPrice : function(value,formatExpected){
			
			var newValue = value.toString();
			newValue = newValue.replace(/\,/g,"");
			newValue = newValue.replace(/\./g,""); 
			
			if(formatExpected == "number"){
				newValue = parseInt(newValue);
			}
			
			return newValue;
			
		},
			
		/** END COMMON FUNCTIONS **/
		showAlert:function( message){

			messageService.showAlert($translate.instant(message),$translate.instant('OK'),null);
			/*	
			var confirmSubmitPopup = $ionicPopup.alert({
				   title :"",
				   cssClass: 'button-assertive noTitlePopup',
				   template:$translate.instant(message),
				   buttons: [
							  {
								text: '<b>'+$translate.instant('OK')+'</b>',
								type: 'button ng-binding button-assertive button-stable'
							  }
					]
			  }).then(function(res){
			  });
			*/
		
		},
		
		showAlertWithoutTranslate:function( message){
			var confirmSubmitPopup = $ionicPopup.alert({
				   title :"",
				   cssClass: 'button-assertive noTitlePopup',
				   template:message,
				   buttons: [
							  {
								text: '<b>OK</b>',
								type: 'button ng-binding button-assertive button-stable'
								
							  }
				]
			  }).then(function(res){
			  });
		}

	};
});

'use strict';
app.factory('validationFactory',function() {
	
	//public functions
	return {

		/**
		 * START COMMON VALIDATORS
		 * Put common form validators here
		 */
		 
		//var zipCodeRegex = /^([0-9]{5})([-]?([0-9]{4}))?$/;
		//var phoneRegex = /^([0-9]{3})[-]?([0-9]{3})[-]?([0-9]{4})$/;
		emptyString: function(str){
			if(str != null && str != undefined && str != "-" && str != ""){
					return str
			}else{
				return "";
			}
				
		},
		
		
		invalidDate: function(date){
			if ( Object.prototype.toString.call(date) === "[object Date]" ) {
				// it is a date
				if ( isNaN( date.getTime() ) ) { 
					// date is not valid
					return "";
				}else {
					// date is valid
					return date;
			  }
			}else {
			  // not a date
			  return "";
			}		
		},

		isEmpty: function(val) {
			return val === undefined || val === null || val.length <= 0 || val == "" ? true : false;
		},
		
		validateMemberIDOrEmail : function(uniqueID) {

			if (!uniqueID) {return;}

			var specialChars = /[$%^*()+|~=`{}\[\]<>?]/;
			//check if there's an '@' symbol, if one exists assume it's an email addr, otherwise validate it as an id
			if(uniqueID.match(/\@/)){
				//var emailValidator= /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;			
				var emailValidator = /^([a-zA-Z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
				if (!uniqueID.match(emailValidator) || uniqueID.match(specialChars)) {
					return "Please enter a valid email address";
				}
				return true;
			}

			if (uniqueID.match(/[<>&\s]/)) {
				return "MemberID cannot contain & or <> characters";
			} 

			if(uniqueID.match(/["']/)) {
				return "MemberID cannot contain & or \" \' characters"
			}
			//Could have made input max length but added this coz id can be email and email can be more than 20 chars 
			if(uniqueID.length > 20) {
				return "MemberID cannot be more than 20 characters";
			}

			return true;

		},

		validateMemberID : function(memberID) {

			var specialChars = /[&;$%@'""<>()+,]/;

			if (!memberID) {return;}

			if (memberID.match(specialChars)){
				return "Please enter a valid Member ID";
			} 

			return true;

		},


		validateEmail : function(email) {
			console.log("validateEmail email"+email);
			var regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
			//return regex.test(email);
			 if (!email.match(regex)) {
					console.log("validateEmail return false");
					return false;
				}
				console.log("validateEmail return true");
			return true;

		},
		
		
		validateEmailOptional : function(email) {

			//check if there's an '@' symbol, if one exists assume it's an email addr, otherwise validate it as an id
			if(email.match(/\@/)){
				//var emailValidator= /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
				var emailValidator = /^([a-zA-Z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
				if (!email.match(emailValidator) || email.match(specialChars)) {
					return "Please enter a valid email address";
				}
				return true;
			}


			return true;

		},

		checkSpecialCharacter : function(field,value) {

			if(!value){return;}

			if (!value.match(/[a-zA-Z]+$/)) {
				return "Please enter valid "+field;
			} 
//			if(value.match(/["']/)) {
//				return field+" cannot contain & or \" \' characters"
//			}

			return true;

		},
	   
		dateValidator : function(field,value) {

			if(!value){return;}

			if (value.match(/(0[1-9]|1[012])[\/.](0[1-9]|[12][0-9]|3[01])[\/.](19|20)\d\d/)) {
				console.log("","^^^^>>>"+value);
				return "Please enter valid" +field;
			} 

			return true;

		},
		
		
		ValidateNumbersOnlywithmaxtenchar: function(val){
			var regex=/^[0-9]+$/;
			//return regex.test(val);
			if(!regex.test(val) || val.length>10)
			{
				return false;
			}
			else
			{
				return true;
			}
		},

		
		ValidateNumbersOnly: function(val){
			var regex=/^[0-9]+$/;
			return regex.test(val);
		},

		
		ValidateZip: function(val)
		{
			var regex=/(^\d{5}$)|(^\d{5}-\d{4}$)/;
			return regex.test(val);

		},

		ValidatePhone: function(val){
			var regex=/^\d{10}$/;
			return regex.test(val);
		},

		ValidateNumbersWithDecimal: function(val){
			var regex=/^[0-9.]+$/;
			return regex.test(val);
		},

		ValidateNumbersWith2DecimalPlaceMinus: function(val){
			var regex=/^[\d\-]+(?:\.\d{1,2})?$/;
			return regex.test(val);
		},

		
		ValidateNumbersWith2DecimalPlace: function(val){
			var regex=/^[\d]+(?:\.\d{1,2})?$/;
			return regex.test(val);
		},

		
		ValidateAlphabetWithSpace: function(val){
			var regex = /^[a-zA-Z\s]+$/;
			return regex.test(val);
		},

		
		ValidateAlphaNumericWithoutSpace: function(val){
			var regex = /^[a-zA-Z0-9]+$/;
			return regex.test(val);
		},

		
		ValidateAlphaNumericWithSpace: function(val){
			 var regex = /^[a-zA-Z0-9\s]+$/;
			return regex.test(val);
		},

		ValidateStringSpace: function(val)
		{
			 var regex = /\s/g;
			return regex.test(val);
		},

		 ValidatePasswordStrength: function(password){
			var level = 0;
			level += password.length > 7 ? 1 : 0;
			level += /[a-z]/.test(password) ? 1 : 0;
			level += /[A-Z]/.test(password) ? 1 : 0;
			level += /[0-9]/.test(password) ? 1 : 0;
			if(level>=4){
				return true;
			}else{
				return false;
			}
			
		}

	/** END COMMON VALIDATORS **/

	};
});

'use strict';
app.service('loginService', function(mobileCRMServiceFactory,constants) {
	
	
		
});

'use strict';
app.controller('loginController', function($rootScope,$scope,$state,$translate,$ionicLoading,constants,$window) {
	
	
	var vm = this;
  vm.options = {};
  vm.data = {};  
  
  vm.options = {  
  chart: {
    type: 'pieChart',
    height: 500,
    x: function(d){return d.key;},
    y: function(d){return d.y;},
    showLabels: true,
    duration: 500,
    labelThreshold: 0.01,
    labelSunbeamLayout: true,
    legend: {
      margin: {
        top: 5,
        right: 35,
        bottom: 5,
        left: 0
      }
    }
  }
};
vm.data = [  
  {
    key: "One",
    y: 5
  },
  {
    key: "Two",
    y: 2
  },
  {
    key: "Three",
    y: 9
  },
  {
    key: "Four",
    y: 7
  },
  {
    key: "Five",
    y: 4
  },
  {
    key: "Six",
    y: 3
  },
  {
    key: "Seven",
    y: .5
  }
];

//var self = this;
        vm.height = $window.innerHeight * 0.5;
        vm.width = document.getElementById('wordsCloud').offsetWidth;
        vm.wordClicked = wordClicked;
        vm.words = [
            {text: 'Angular',size: 20},
            {text: 'Raman',size: 35},
			{text: 'Prashant',size: 35},
            {text: 'Rahul',size: 25},
			{text: 'Dost',size: 25},
            {text: 'Alam',size: 35},
			{text: 'IBM',size: 25},
            {text: 'Tesing',size: 35},
			{text: 'HO Gya',size: 25},
            {text: 'Test',size: 35}
        ]

        function wordClicked(word){
            alert(word);
        }
	
	
 
});
			   

'use strict';

app.controller('splashController', 
	[  "$timeout", "$state", "$ionicHistory", function ( $timeout, $state, $ionicHistory) {
	
	var vm = this;
   
	var navigateHome = function() {    	 
	$timeout(function() {
		$state.go('login');
	  }, 1000);

	}
	
	navigateHome();
	return vm;
	
}]);
