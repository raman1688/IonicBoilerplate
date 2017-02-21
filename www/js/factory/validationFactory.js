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