module.exports = function(grunt){

	function config(name){
			return require('./tasks/'+name)
	}
	//Pull project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat : config('concat'),
		jshint : config('jshint'),
		emberTemplates : config('emberTemplates'),
		uglify : config('uglify'),
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-ember-templates');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	//Add default tasks
	grunt.registerTask('default', ['jshint','emberTemplates','concat','uglify']);
}