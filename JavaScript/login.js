var firebaseConfig = {
			apiKey: "AIzaSyAW1QIQCY3cmW4g1DP2cbJHa14rw8le2DU",
			authDomain: "showroom-21ecb.firebaseapp.com",
			databaseURL: "https://showroom-21ecb.firebaseio.com",
			projectId: "showroom-21ecb",
			storageBucket: "showroom-21ecb.appspot.com",
			messagingSenderId: "1077090634718",
			appId: "1:1077090634718:web:d5d88f7ecaa6d6743cab4f",
			measurementId: "G-D8L7BX5YTW"
		  };
		  // Initialize Firebase
		  firebase.initializeApp(firebaseConfig);
		  

		
		  var ref = firebase.database().ref("dinosaurs");
ref.orderByChild("height").on("child_added", function(snapshot) {
  alart(snapshot.key + " was " + snapshot.val().height + " m tall");
});
    function signup()
	{
		var name =  document.getElementById("username").value;
		var email =  document.getElementById("email").value;
		var pass = document.getElementById("password").value;
		var phone = document.getElementById("phone").value
		var cnic =  document.getElementById("cnic").value;
		var gender = document.getElementById("gender").value;
		var location = document.getElementById("location").value;  
		var date =  document.getElementById("birthday").value;
	
		window.alert("Date:" +name + "Gendermale :" +email + "Genderfemale :" +password  );
		var errorMessage="";

		if(email != "" && pass != "" && name != "" && phone != "")
		{
			firebase.auth().createUserWithEmailAndPassword(email, pass)
			.then(function(response){
				console.log('success');
				console.log(response);
				var userId = firebase.auth().currentUser.uid;

						firebase.database().ref('customer').child(userId).set({
							username:name,
							id: userId,
							email: email,
							password: pass,
							phone: phone,
							cnic: cnic,
							gender: gender,
							location: location,
							date_of_birth: date,
							country: "Pakistan",
							image_URL: ""
						}, function(error) {
							if (error) {
							window.alert(error);
							} else {
							// Data saved successfully!
							window.alert("successfully upload data in fire base")
							}
						});
						window.alert(userId);
					firebase.auth().signOut();
			}).catch(function(error) 
			{
				// Handle Errors here.
				var errorCode = error.code;
				errorMessage = error.message;
				window.alert(errorCode);
				window.alert(errorMessage);
			});
		}
		else
		{
			window.alert("Incomplete Filds");
		}
	 }
	 function SignOut()
	 {
		 var email=firebase.auth().currentUser.email;
		 firebase.auth().signOut();
		 window.alert(" This email : "+email +"is S!gNouT.......@@@@");
		 localStorage.setItem("Firebase LoginID", "Logout");
		 location.reload();
		 
	 }

	 function login()
	 {
		var email =  document.getElementById("email").value;
		var pass = document.getElementById("password").value; 
		firebase.auth().signInWithEmailAndPassword(email, pass)
		.then(function(response)
		{
			localStorage.setItem("Firebase LoginID", "Login");
			window.alert("welecom")
			window.location.href="homepage.html";
		}).catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  window.alert(errorMessage);
		});
				
	 }

	 function change()
	 {	 
	 firebase.auth().onAuthStateChanged(function(user) {
	  if (user) {
	  
		var userId=firebase.auth().currentUser.uid;
		
		firebase.database().ref('customer/'+userId).once('value').then(function(snapshot)
		{
			if(snapshot.val())
			{
				window.alert("winow change");
				window.change("homepage.html");
			}
			else{

				window.location.href="login.html";
			}
		}
		);
	  
	  } else {
	   
	  }
	 
	 });
	 }
	 
	function data()
	{
		var date =  document.getElementById("birthday").value;
		var gendermale =  document.getElementById("male").value;
		var genderfemale = document.getElementById("female").value; 
		
		window.alert("Date:" +date + "Gendermale :" +gendermale + "Genderfemale :" +genderfemale  );
		
		  //const dbRefOblsct=firebase.database().ref().child('object').set("hello");

	}

	// admin and customer btn change
	function Admin_Btn_change()
	{
		var icon = document.getElementById("icon");
		var admin = document.getElementById("Btn_admin");
		var customer = document.getElementById("Btn_customer");
		var BTN_A_login = document.getElementById("BTN_A_login");
		var BTN_C_login = document.getElementById("BTN_C_login");

		admin.className="active";
		customer.className="inactive underlineHover";
		icon.src = "Images/login_admin.png";
		BTN_C_login.setAttribute("type","hidden");
		BTN_A_login.setAttribute("type","submit");

	}
	function Customer_Btn_change()
	{
		var icon = document.getElementById("icon");
		var admin = document.getElementById("Btn_admin");
		var customer = document.getElementById("Btn_customer");
		var BTN_A_login = document.getElementById("BTN_A_login");
		var BTN_C_login = document.getElementById("BTN_C_login");

		customer.className="active";
		admin.className="inactive underlineHover";
		icon.src = "Images/img_avatar3.png";
		BTN_A_login.setAttribute("type","hidden");
		BTN_C_login.setAttribute("type","submit");

	}

