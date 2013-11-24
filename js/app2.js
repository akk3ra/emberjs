var Notes = Ember.Application.create();

Notes.Router.map(function(){
	this.resource('notes', {path: "/"}, function(){
		this.route('note', {path: "/note/:note_id"});
	});
});

Notes.NotesRoute = Ember.Route.extend({
	model: function(){
			return this.store.find('notes');
	}
});

Notes.NotesNoteRoute = Ember.Route.extend({
	model: function(note){
		return this.store.find('notes', note.note_id);
	}
});

Notes.NotesController = Ember.ArrayController.extend({

	newNoteName: null,
	actions: {
		createNewNote: function(){

			var newNote = this.get('newNoteName');
			var content = this.get('content');

			var unique = newNote!=null && newNote.length>2;

			content.forEach(function(note){
				if(newNote===note.get('name')){
					unique = false;
					return;
				}
			});

			if(unique){
				var newNoteRecord = this.store.createRecord('notes');
				newNoteRecord.set('name', newNote);
				newNoteRecord.set('value', newNote);
				newNoteRecord.save();
				this.set('newNoteName', null);
			} else{
				alert('Please select a unique name which has more than 2 letters of length...');
			}
		}
	}
});

Notes.Store = DS.Store.extend({
	adapter: DS.LSAdapter
});

Notes.Notes = DS.Model.extend({
	name: DS.attr('string'),
	value: DS.attr('string'),
	nameChange: function(){
		var name = this.get('name');
		return name + name;
	}.property('name')
});





