module.exports = function(grunt) {
	grunt.initConfig({

		concat: {
			pluginsJobseeker: {
			  src: [
						'../../Static0/0/src/jass/jsonpErrorSupport.js',
						'../../Static0/0/src/jass/jQuery_stringify.js',
						'../../Static0/0/src/jass/IE_commonObject.js',
						'../../Static0/0/src/jass/gnb_api_v2.js',
						'../../Static0/0/src/jass/commonValidation_JQ_v5.js',
						'../../Static0/0/src/jass/lightBox.js',
						'../../Static0/0/src/jass/newJquerySugg.js',
						'../../Static0/0/src/jass/singleSelect_DD.js',
						'../../Static0/0/src/jass/tab.js',
						'../../Static0/0/src/jass/customScroll.js',
						'../../Static0/0/src/jass/carousel.js',
						'../../Static0/0/src/jass/gl.js',
						'../../Static0/0/src/jass/sticky.js',
						'../../Static0/0/src/jass/accordion.js',
						'../../Static0/0/src/jass/customDropdown.js',
						'./src/jass/cookie.js',
						'../../Static0/0/src/jass/profileCompleteness.js'
				],
			  dest: 'src/j/plugins_v2.1.js',
			  nonull:true
			},
			plugins_js: {
			  src: [
						'../../Static0/0/src/jass/jsonpErrorSupport.js',
						'../../Static0/0/src/jass/jQuery_stringify.js',
						'../../Static0/0/src/jass/IE_commonObject.js',
						'../../Static0/0/src/jass/gnb_api_v2.js',
						'../../Static0/0/src/jass/commonValidation_JQ_v7.js',
						'../../Static0/0/src/jass/lightBox.js',
						'../../Static0/0/src/jass/newJquerySugg.js',
						'../../Static0/0/src/jass/singleSelect_DD_rdx.js',
						'../../Static0/0/src/jass/tab.js',
						'../../Static0/0/src/jass/customScroll.js',
						'../../Static0/0/src/jass/carousel.js',
						'../../Static0/0/src/jass/gl.js',
						'../../Static0/0/src/jass/sticky.js',
						'../../Static0/0/src/jass/accordion.js',
						'../../Static0/0/src/jass/customDropdown_resdex.js',
//						'../../Static0/0/src/jass/cookie.js',
						'../../Static0/0/src/jass/profileCompleteness.js',
						'../../Static0/0/src/jass/ncCache.js',
						'../../Static0/0/src/jass/tags.js',
						'../../Static0/0/src/jass/tooltip.js'
				],
			  dest: 'src/j/plugins_rdx_v1.js',
			  nonull:true
			},
			pluginsFF_js: {
			  src: [
						'../../Static0/0/src/jass/jsonpErrorSupport.js',
						'../../Static0/0/src/jass/jQuery_stringify.js',
						'../../Static0/0/src/jass/IE_commonObject.js',
						'../../Static0/0/src/jass/gnb_api_v2.js',
						'../../Static0/0/src/jass/commonValidation_JQ_v5.js',
						'../../Static0/0/src/jass/lightBox.js',
						'../../Static0/0/src/jass/newJquerySugg.js',
						'../../Static0/0/src/jass/singleSelect_DD.js',
						'../../Static0/0/src/jass/tab.js',
						'../../Static0/0/src/jass/customScroll.js',
						'../../Static0/0/src/jass/carousel.js',
						//'../../Static0/0/src/jass/gl.js',
						//'../../Static0/0/src/jass/sticky.js',
						'../../Static0/0/src/jass/accordion.js',
						//'../../Static0/0/src/jass/customDropdown.js',
						//'../../Static0/0/src/jass/cookie.js',
						//'../../Static0/0/src/jass/profileCompleteness.js'
				],
			  dest: 'src/j/pluginsFF.js',
			  nonull:true
			},
			pluginsReferral_js: {
			  src: [
						'../../Static0/0/src/jass/jsonpErrorSupport.js',
						'../../Static0/0/src/jass/jQuery_stringify.js',
						'../../Static0/0/src/jass/IE_commonObject.js',
						'../../Static0/0/src/jass/gnb_api_v2.js',
						'../../Static0/0/src/jass/commonValidation_JQ_v5.js',
						'../../Static0/0/src/jass/lightBox.js',
						'../../Static0/0/src/jass/newJquerySugg.js',
						'../../Static0/0/src/jass/singleSelect_DD.js',
						'../../Static0/0/src/jass/tab.js',
						'../../Static0/0/src/jass/customScroll.js',
						'../../Static0/0/src/jass/carousel.js',
						'../../Static0/0/src/jass/gl.js',
						'../../Static0/0/src/jass/sticky.js',
						'../../Static0/0/src/jass/accordion.js',
						'../../Static0/0/src/jass/customDropdown.js',
						'./src/jass/cookie.js',
						'../../Static0/0/src/jass/profileCompleteness.js'
				],
			  dest: 'src/j/plugins_employRefferral.js',
			  nonull:true
			},

	  }

	});
	
	grunt.file.expand('../node_modules/grunt-*/tasks').forEach(grunt.loadTasks);
	require('../node_modules/grunt-config-merge')(grunt);
	require('../grunt/global/grunt-default.js')(grunt);
};