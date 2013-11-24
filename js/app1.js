var Notes = Ember.Application.create({
	LOG_TRANSACTIONS: true
});
Notes.Router.map(function(){
	this.resource('notes', {path: "/"}, function(){
		this.route('note', {path: "/note/note_id"});
	});
});
Notes.NotesRoute = Ember.Route.extend({

	model: function(){
		console.log("Data pushed to the template..");
		//return ['ball', 'bat', 'wicket'];
		return this.store.find('notes');
	}
});
Notes.NotesController = Ember.ArrayController.extend({
	newNote: null,
	actions: {
		createNewNote: function(){
			var newNoteName = this.get('newNote');
			var content = this.get('content');
			var unique = newNoteName!=null && newNoteName.length>2
				content.forEach(function(note){
					if(newNoteName===note.get('name')){
						unique = false;
						return;
					}
				});
				if(unique){
					var newNote = this.store.createRecord('notes');
					newNote.set('id', newNoteName);
					newNote.set('name', newNoteName);
					newNote.save();
					this.set('newNoteName', null);
				} else {
					alert("Please select a unique name with more than 2 digits in length..");
				}
			
			//console.log("The new note created is -->>"+ newNoteName);
		}
	}
});

Notes.Store = DS.Store.extend({
	adapter: DS.LSAdapter
});
Notes.Notes = DS.Model.extend({
	name: DS.attr('string'),
	value: DS.attr('string')
});













