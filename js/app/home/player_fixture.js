Cricket.Player = DS.Model.extend({
	name: DS.attr('string'),
	strength: DS.attr('string')
});
Cricket.Player.FIXTURES = [{id: 'ramki', name: 'RamaKrishna Siva', strength: 'Batsman' },
						   {id: 'kalyan', name: 'Kalyan Komma', strength: 'Batsman'},
						   {id: 'jagdeesh', name: 'Jagadeesh Ponnam', strength: 'All Rounder'},
						   {id: 'kusam', name: 'Rakesh Kusam', strength: 'Bowler'},
						   {id: 'sandeep', name: 'Sandeep Akkeera', strength: 'All Rounder'},
						   {id: 'mathi', name: ' Pradeep Mathi', strength: 'All Rounder'},
						   {id: 'sivva', name: 'Kamaraj Sivva', strength: 'All Rounder'},
						   {id: 'annavarapu', name: 'Rakesh Annavarapu', strength: 'All Rounder'},
						   {id: 'mulugu', name: 'Bhaskar Mulugu', strength: 'All Rounder'},
						   {id: 'danthuluru', name: 'Raju Danthuluru', strength: 'All Rounder'},
						   {id: 'raghavan', name: 'Sujesh Raghavan', strength: 'All Rounder'},
						   {id: 'maram', name: 'Harsha Maram', strength: 'All Rounder'},
						   {id: 'konkala', name: 'Sarath Konkala', strength: 'All Rounder'},
						   {id: 'sankuratri', name: 'Srinivas Sankuratri', strength: 'All Rounder'}
						   ];