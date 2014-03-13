module.exports = {

	options:{
		separator: '\n'
	},
	dist:{
		src: ['js/app/**/*.js', 'dist/templates.js'],
		dest: 'dest/<%=pkg.name%>.js'
	}
}