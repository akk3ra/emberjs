Cricket.Player = DS.Model.extend({
	name: DS.attr('string'),
	strength: DS.attr('string')
});
Cricket.Player.FIXTURES = [{id: 'ramki', name: 'RamaKrishna Siva', strength: 'Batsman' },
						   {id: 'kalyan', name: 'Kalyan Komma', strength: 'Batsman'},
						   {id: 'jagdeesh', name: 'Jagadeesh Ponnam', strength: 'All Rounder'},
						   {id: 'kusam', name: 'Rakesh Kusam', strength: 'Bowler}
						   ]