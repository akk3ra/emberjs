Cricket.LoginController = Ember.ObjectController.extend({
	userEmail: null,
	userPassword: null,
	//content: [],
	//loginData: Cricket.CricketLogin.find(),
	actions: {
		submitLogin: function(){
		var userId = this.get('userEmail');
		var pwd = this.get('userPassword');

		console.log('User id-->>'+userId+' , Password-->>'+pwd);
		//this.set('userEmail', null);
		//this.set('userPassword', null);
		console.log("Reached.....");
		//Get hold of the current controllers context to use later
		var currController = this;
		var content = this.get('content');
		var userPresent = false;
		content.forEach(function(loginCred){
			console.log("userid from DB...."+loginCred.id);
			console.log("userid from DB...."+loginCred.get('userId'));
			console.log("password from DB...."+loginCred.get('password'));

			if(loginCred.id==userId && loginCred.get('password')==pwd){
				console.log("Authentication successful!!!!!!!");
				userPresent = true;
				currController.transitionToRoute('home');
			}
		});
		if(!userPresent){
			console.log("Authentication failed !!!!!!, Please enter correct credentials..");
			currController.transitionToRoute('loginError');
		}
	}
	}
	
});