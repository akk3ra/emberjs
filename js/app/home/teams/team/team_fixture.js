Cricket.Team = Ember.Model.extend({
	teamName: DS.attr('string'),
	players: DS.hasMany('player'),
	from: DS.attr('string')
});
Cricket.Team.FIXTURES = [{},
						{},
						{},
						{}];