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
		this.resource('teams', {path: '/teams'}, function(){
			this.route('team', {path: '/:team_id'});
		});
		this.route('signoff', {path: '/signoff'});
		this.route('guest', {path: '/guest'});
	});
	this.route('loginError', {path: '/loginError'});
});
Cricket.Store = DS.Store.extend({
	adapter: DS.FixtureAdapter
});


