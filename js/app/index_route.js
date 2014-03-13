Cricket.IndexRoute = Ember.Route.extend({
	redirect: function(){
		this.transitionTo('login');
	}
});