
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

