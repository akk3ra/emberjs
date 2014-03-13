Cricket.HomeData = DS.Model.extend({
	teamName: DS.attr('string')
});
Cricket.HomeData.FIXTURES = [{id: 'mightyMinns',
							teamName: 'Mighty Minns'},
							{id: 'hydHawks',
							teamName: 'Hyd Hawks'},
							{id: 'royalTigers',
							teamName: 'Royal Tigers'},
							{id: 'sunRisers',
							teamName: 'Sunrisers'}
							];