Cricket.HomeTeamRoute = Ember.Route.extend({
	model: function(team){
		return this.store.find('team', team.team_id);
	}
});