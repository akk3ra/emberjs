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
	this.resource('home', {path: '/home'}, function(){
		this.route('index',{path: '/welcome'});
		this.route('teams', {path: '/teams'});
		this.route('signoff', {path: '/signoff'});
		this.route('guest', {path: '/guest'});
	});
	this.route('loginError', {path: '/loginError'});
});
Cricket.HomeRoute = Ember.Route.extend({
	model: function(){
		return this.store.find('homeData');
	}
});
Cricket.HomeTeamsRoute = Ember.Route.extend({
	model: function(){
		return this.store.find('homeData');
	}
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
Cricket.LoginErrorRoute = Ember.Route.extend({
	model: function(){
		console.log("Login error page loaded as the credentials were wrong!!!!");
	}
});

Cricket.RegisterController = Ember.ObjectController.extend({

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
Cricket.Store = DS.Store.extend({
	adapter: DS.FixtureAdapter
});
Cricket.HomeData = DS.Model.extend({
	teamName: DS.attr('string')
});
Cricket.HomeData.FIXTURES = [{id: 'mightyMinns',
							teamName: 'Mighty Minns'},
							{id: 'hydHawks',
							teamName: 'Hyd Hawks'},
							{id: 'royalTigers',
							teamName: 'Royal Tigers'},
							{id: 'sunRisers',
							teamName: 'Sunrisers'}
							];
Cricket.CricketLogin = DS.Model.extend({
	userId: DS.attr('string'),
	password: DS.attr('string')
});
Cricket.CricketLogin.FIXTURES = [{id: 'a',
								 userId: 'a', 
								 password: 'a'
								},
								{id: 'jerrgof@gmail.com',
								 userId: 'jerrgof@gmail.com', 
								 password: 'Password1'
								},
								{id: 'sandeep.aks@gmail.com',
								 userId: 'sandeep.aks@gmail.com', 
								 password: 'Password1'
								}];
