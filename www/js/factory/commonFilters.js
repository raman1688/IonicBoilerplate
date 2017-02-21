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




