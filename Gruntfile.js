module.exports = function(grunt) {
	grunt.initConfig({
		concat: {
			lightBox_model_v1 : {
			  src: [
			  	'src/jass/plugins/modelWindow_v2.js',
			  	'src/jass/plugins/lightBox_model_v1.js'			  	  
			  ],
			  dest: 'src/j/plugins/lightBox_model_v1.js',
			  nonull:true
			},
			lightBox_model:{
			  src: [
			  	'src/jass/plugins/modelWindow_v1.js',
			  	'src/jass/plugins/lightBox_model.js'			  	  
			  ],
			  dest: 'src/j/plugins/lightBox_model.js',
			  nonull:true	
			},
			drawer:{
			  src: [
			  	'src/jass/plugins/modelWindow_v2.js',
			  	'src/jass/plugins/drawer.js'			  	  
			  ],
			  dest: 'src/j/plugins/drawer.js',
			  nonull:true	
			},
			drawerZepto:{
			  src: [
			  	'src/jass/plugins-zepto/modelWindow_v1-zepto.js',
			  	'src/jass/plugins-zepto/drawer-zepto_v2.js'			  	  
			  ],
			  dest: 'src/j/plugins-zepto/drawer-zepto_v2.js',
			  nonull:true	
			}
		}
	});
	
	grunt.file.expand('../node_modules/grunt-*/tasks').forEach(grunt.loadTasks);
	require('../node_modules/grunt-config-merge')(grunt);
	require('../grunt/global/grunt-default.js')(grunt);
};


//ankit anand