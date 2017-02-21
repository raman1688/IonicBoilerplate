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
