var Blog = Ember.Application.create({
	LOG_TRANSACTIONS:true
});
Blog.Router = Ember.Router.extend({
	location: 'hash'
});
Blog.Router.map(function(){
	this.route('index', {path: '/'});
	this.resource('blog', {path: '/blog'}, function(){
		this.route('index', {path: '/posts'});
		this.route('post', {path: '/post/:post_id'});
	});
});
Blog.IndexRoute = Ember.Route.extend({
	redirect: function(){
		console.log('Routing the request to blog..');
		this.transitionTo('blog');
	}
});
Blog.BlogIndexRoute = Ember.Route.extend({
	model: function(){
		console.log('Fetching the blog data from fixtures..');
		return this.store.find('blogPost');
	}
});
Blog.BlogPostRoute = Ember.Route.extend({
	model: function(post){
		return this.store.find('blogPost', post.post_id);
	}
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
	postDate: DS.attr('date'),
	postShortIntro: DS.attr('string'),
	postLongIntro: DS.attr('string'),
	postFileName: DS.attr('string'),
});
Blog.BlogPost.FIXTURES = [
	{
	id:1, postTitle: 'Explaining Object equality in scala', 
	postDate: new Date(),
	postName: 'Scala Blog', 
	postShortIntro:'This is Object Equality', 
	postLongIntro:'This should start your Nexus repository in the Jetty container. Fire up your favourite browser and go to http://[domain]:8080/nexus/ or http://localhost:8080/nexus/ if you are running Nexus on your local machine. You should be presented with the nexus front end and can start managing your repositories', 
	postFileName: 'scala.blog'
	},
	{
	id:2, postTitle: 'Explaining Implicit conversion in scala', 
	postDate: new Date(),
	postName: 'Scala Blog', 
	postShortIntro:'This is Object Equality', 
	postLongIntro:'This should start your Nexus repository in the Jetty container. Fire up your favourite browser and go to http://[domain]:8080/nexus/ or http://localhost:8080/nexus/ if you are running Nexus on your local machine. You should be presented with the nexus front end and can start managing your repositories', 
	postFileName: 'scala.blog'
	},
	{
	id:3, postTitle: 'Explaining FUnctional Literal in scala', 
	postDate: new Date(),
	postName: 'Scala Blog', 
	postShortIntro:'This is Object Equality', 
	postLongIntro:'This should start your Nexus repository in the Jetty container. Fire up your favourite browser and go to http://[domain]:8080/nexus/ or http://localhost:8080/nexus/ if you are running Nexus on your local machine. You should be presented with the nexus front end and can start managing your repositories', 
	postFileName: 'scala.blog'
	},
	{
	id:4, postTitle: 'Explaining OOP in scala', 
	postDate: new Date(),
	postName: 'Scala Blog', 
	postShortIntro:'This is Object Equality', 
	postLongIntro:'This should start your Nexus repository in the Jetty container. Fire up your favourite browser and go to http://[domain]:8080/nexus/ or http://localhost:8080/nexus/ if you are running Nexus on your local machine. You should be presented with the nexus front end and can start managing your repositories', 
	postFileName: 'scala.blog'
	},
	{
	id:5, postTitle: 'Explaining Actors in scala',
	postDate: new Date(), 
	postName: 'Scala Blog', 
	postShortIntro:'This is Object Equality', 
	postLongIntro:'This should start your Nexus repository in the Jetty container. Fire up your favourite browser and go to http://[domain]:8080/nexus/ or http://localhost:8080/nexus/ if you are running Nexus on your local machine. You should be presented with the nexus front end and can start managing your repositories', 
	postFileName: 'Scala.blog'
	}
];

















