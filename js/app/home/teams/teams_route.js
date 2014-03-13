Cricket.HomeTeamsRoute = Ember.Route.extend({
	model: function(){
		return this.store.find('homeData');
	}
});