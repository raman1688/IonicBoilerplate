'use strict';
app.factory('utilitiesFactory', ['$ionicPopup', '$translate', 'messageService', function($ionicPopup,$translate,messageService) {

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
}]);
