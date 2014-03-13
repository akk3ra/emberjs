var Cricket = Ember.Application.create({
	LOG_TRANSITIONS: true
});

Cricket.Router = Ember.Router.extend({
	location: 'hash'
});

Cricket.Router.map(function(){
	this.route('index', {path: '/'});
	this.route('login', {path: '/login'});
	this.route('register', {path: '/register'});
	this.route('welcome', {path: '/welcome'});
});

Cricket.IndexRoute = Ember.Route.extend({
	redirect: function(){
		this.transitionTo('login');
	}
});
Cricket.LoginRoute = Ember.Route.extend({
	model: function(){
		console.log('Loaded the login page..');
		return this.store.find('cricketLogin');
	}
});
Cricket.RegisterRoute = Ember.Route.extend({
	model: function(){
		console.log('Loaded the register page..');
	}
});
Cricket.WelcomeRoute = Ember.Route.extend({
	model: function(){
		console.log('Loaded the welcome page..');
	}
});
Cricket.RegisterController = Ember.ObjectController.extend({

	actions: {}
});
Cricket.WelcomeController = Ember.ObjectController.extend({

	actions: {}
});
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
		content.forEach(function(loginCred){
			console.log("userid from DB...."+loginCred.id);
			console.log("userid from DB...."+loginCred.get('userId'));
			console.log("password from DB...."+loginCred.get('password'));

			if(loginCred.id==userId && loginCred.get('password')==pwd){
				console.log("Authentication successful!!!!!!!");
				currController.transitionToRoute('welcome');
			}else{
				console.log("Authentication failed !!!!!!, Please enter correct credentials..");
			}
		});
	}
	}
	
});
Cricket.Store = DS.Store.extend({
	adapter: DS.FixtureAdapter
});
Cricket.CricketLogin = DS.Model.extend({
	userId: DS.attr('string'),
	password: DS.attr('string')
});
Cricket.CricketLogin.FIXTURES = [{id: 'jerrgof@gmail.com',
								 userId: 'jerrgof@gmail.com', 
								 password: 'Password1'
								},
								{id: 'sandeep.aks@gmail.com',
								 userId: 'sandeep.aks@gmail.com', 
								 password: 'Password1'
								}]
Cricket.CricketData = DS.Model.extend({

	postTitle: DS.attr('string'),
	postName: DS.attr('string'),
	postLongIntro: DS.attr('string'),
	postShortIntro: DS.attr('string'),
	postDate: DS.attr('date'),
	formattedDate: function(){
		var date = this.get('postDate');
		if(date){
			return this.get('postDate').getUTCDay() 
				+ "/" + (this.get('postDate').getUTCMonth() + 1) 
					+ "/" + this.get('postDate').getUTCFullYear();

		}
		else{	
			return '';
		}
	}.property('postDate')

});

Cricket.CricketData.FIXTURES = [
	{
	id:1, postTitle: 'Explaining Object equality in scala', 
	postDate: new Date(),
	postName: 'Scala Blog', postShortIntro:'This is Object Equality', 
	postLongIntro:'This is Object Equality', 
	postFileName: 'scala.blog'
	},
	{
	id:2, postTitle: 'Explaining Implicit conversion in scala', 
	postDate: new Date(),
	postName: 'Scala Blog', postShortIntro:'This is Object Equality', 
	postLongIntro:'This is Implicit Conversion', 
	postFileName: 'scala.blog'
	},
	{
	id:3, postTitle: 'Explaining FUnctional Literal in scala', 
	postDate: new Date(),
	postName: 'Scala Blog', postShortIntro:'This is Object Equality', 
	postLongIntro:'This is Function literal', 
	postFileName: 'scala.blog'
	},
	{
	id:4, postTitle: 'Explaining OOP in scala', 
	postDate: new Date(),
	postName: 'Scala Blog', postShortIntro:'This is Object Equality', 
	postLongIntro:'This is OOP in Scala', 
	postFileName: 'scala.blog'
	},
	{
	id:5, postTitle: 'Explaining Actors in scala',
	postDate: new Date(), 
	postName: 'Scala Blog', postShortIntro:'This is Object Equality', 
	postLongIntro:'This is Actors In Scala', 
	postFileName: 'Scala.blog'
	}
];
