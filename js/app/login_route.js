Cricket.LoginRoute = Ember.Route.extend({
	model: function(){
		console.log('Loaded the login page..');
		return this.store.find('cricketLogin');
	}
});