Cricket.Team = DS.Model.extend({
	teamName: DS.attr('string'),
	players: DS.hasMany('player',{async: true}),
	from: DS.attr('string')
});
Cricket.Team.FIXTURES = [{id: 'mightyMinns', 
						teamName: 'Mighty Minns', 
						players :['ramki','komma','ponnam','kusam'], 
						from : 'Minneapolis'},
						{id: 'hydHawks',
						teamName: 'Hyderabad Hawks',
						players :['sankuratri','sandeep','mathi','maram'], 
						from : 'Hyderabad'},
						{id: 'royalTigers',
						teamName: 'Royal Tigers',
						players :['mulugu','danthuluru','konkala','annavarapu'], 
						from : 'Kolkata'},
						{id: 'sunRisers',
						teamName: 'Sun Risers',
						players :['raghavan','sivva','ponnam','kusam'], 
						from : 'Chennai'}];