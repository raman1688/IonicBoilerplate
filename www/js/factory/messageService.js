
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