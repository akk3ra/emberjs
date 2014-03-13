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
		//Get hold of the current controllers context to use later
		var currController = this;
		console.log('User id-->>'+userId+' , Password-->>'+pwd);
		//this.set('userEmail', null);
		//this.set('userPassword', null);
		console.log("Reached.....");
		var content = this.get('content');
		content.forEach(function(loginCred){
			console.log("userid from DB...."+loginCred.id);
			console.log("userid from DB...."+loginCred.get('userId'));
			console.log("password from DB...."+loginCred.get('password'));

			if(loginCred.id==userId && loginCred.get('password')==pwd){
				console.log("Authentication successful!!!!!!!");
				currController.transitionToRoute('welcome');
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

Ember.TEMPLATES["welcome"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("</script type=\"text/x-handlebars\" id=\"welcome\">\n<div class=\"container navbar-inverse\" >\n	<div class = \"navbar-header\">\n		<button class=\"navbar-toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\".bs-navbar-collapse\">\n	        <span class=\"sr-only\">Toggle navigation</span>\n	        <span class=\"icon-bar\"></span>\n	        <span class=\"icon-bar\"></span>\n	        <span class=\"icon-bar\"></span>\n	    </button>\n		<a href=\"index.htm\" class=\"navbar-brand\">Cricket Scorecard</a>\n	</div>\n		<nav class=\"collapse navbar-collapse bs-navbar-collapse\" role=\"navigation\">\n	        <ul class=\"nav navbar-nav navbar-right\">\n		        <li class = \"active\" >\n		          <a href=\"#\">Sign In</a>\n		        </li>\n		        <li>\n		          <a href=\"#\">Home</a>\n		        </li>\n		        <li>\n		          <a href=\"#/Teams\">Teams</a>\n		        </li>\n		        <li>\n		          <a href=\"#\" class = \"dropdown-toggle\" data-toggle = \"dropdown\" >History <b class =\"caret\"></b> </a>\n	          		<ul class=\"dropdown-menu\">\n						<li><a href = \"#\">April 10</a></li>\n						<li><a href = \"#\">April 14</a></li>\n						<li><a href = \"#\">May 05</a></li>\n					</ul>\n		        </li>\n		        <li>\n		          <a href=\"#\">Guest</a>\n		        </li>\n		        <li id=\"adminLink\">\n		          <a href=\"#\">Admin</a>\n		        </li>\n		    </ul>\n		</nav>\n</div>\n</script>");
  
});