Cricket.CricketLogin = DS.Model.extend({
	userId: DS.attr('string'),
	password: DS.attr('string')
});
Cricket.CricketLogin.FIXTURES = [{id: 'a',
								 userId: 'a', 
								 password: 'a'
								},
								{id: 'jerrgof@gmail.com',
								 userId: 'jerrgof@gmail.com', 
								 password: 'Password1'
								},
								{id: 'sandeep.aks@gmail.com',
								 userId: 'sandeep.aks@gmail.com', 
								 password: 'Password1'
								}];