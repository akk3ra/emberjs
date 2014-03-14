Cricket.HomeTeamRoute = Ember.Route.extend({
	model: function(team){
		console.log("Entered the HomeTeamRoute...");
		return this.store.find('team', team.team_id);
	}
});