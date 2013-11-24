var Blog = Ember.Application.create({
	LOG_TRANSACTIONS: true
});
Blog.Router = Ember.Router.extend({
	location: 'hash'
});
Blog.Router.map(function(){
	this.route('index', {path: '/'});
	this.resource('blog', {path: '/blog'}, function(){
			this.route('index', {path: '/posts'});
			this.route('post', {path: '/post/:blog_post_id'});
	});
});
Blog.IndexRoute = Ember.Route.extend({
	redirect: function(){
		console.log('Redirecting to blog route..');
		this.transitionTo('blog');
	}
});
Blog.BlogIndexRoute = Ember.Route.extend({
	model: function(){
		console.log('Redirecting to blog route..');
		return this.store.find('blogPost');
	}
	
});
Blog.BlogPostRoute = Ember.Route.extend({
	model: function(blogPost){
		return this.store.find('blogPost', blogPost.blog_post_id);
	}
});
Blog.IndexController = Ember.ObjectController.extend({

});
Blog.BlogIndexController = Ember.ArrayController.extend({

});
Blog.BlogPostController = Ember.ObjectController.extend({

});

Blog.Store = DS.Store.extend({
	adapter: DS.FixtureAdapter
});
Blog.BlogPost = DS.Model.extend({

	postTitle: DS.attr('string'),
	postName: DS.attr('string'),
	postLongIntro: DS.attr('string'),
	postShortIntro: DS.attr('string'),
	postDate: DS.attr('date'),
	formattedDate: function(){
		var date = this.get('postDate');
		if(date){
			return this.get('postDate').getUTCDay() 
				+ "/" + (this.get('postDate').getUTCMonth() + 1) 
					+ "/" + this.get('postDate').getUTCFullYear();

		}
		else{	
			return '';
		}
	}.property('postDate')

});

Blog.BlogPost.FIXTURES = [
	{
	id:1, postTitle: 'Explaining Object equality in scala', 
	postDate: new Date(),
	postName: 'Scala Blog', postShortIntro:'This is Object Equality', 
	postLongIntro:'This is Object Equality', 
	postFileName: 'scala.blog'
	},
	{
	id:2, postTitle: 'Explaining Implicit conversion in scala', 
	postDate: new Date(),
	postName: 'Scala Blog', postShortIntro:'This is Object Equality', 
	postLongIntro:'This is Implicit Conversion', 
	postFileName: 'scala.blog'
	},
	{
	id:3, postTitle: 'Explaining FUnctional Literal in scala', 
	postDate: new Date(),
	postName: 'Scala Blog', postShortIntro:'This is Object Equality', 
	postLongIntro:'This is Function literal', 
	postFileName: 'scala.blog'
	},
	{
	id:4, postTitle: 'Explaining OOP in scala', 
	postDate: new Date(),
	postName: 'Scala Blog', postShortIntro:'This is Object Equality', 
	postLongIntro:'This is OOP in Scala', 
	postFileName: 'scala.blog'
	},
	{
	id:5, postTitle: 'Explaining Actors in scala',
	postDate: new Date(), 
	postName: 'Scala Blog', postShortIntro:'This is Object Equality', 
	postLongIntro:'This is Actors In Scala', 
	postFileName: 'Scala.blog'
	}
];





