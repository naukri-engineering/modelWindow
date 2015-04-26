/* jslint curly : false	 */
/* jslint asi : true	 */
/*global pageXOffset */
/*global pageYOffset */
/*Start of Drawer Model*/
(function($){
  
	/** Singleton Pattern */
	/** If options are given each time a new object will be returned otherwise last configure object will be returend  */

	var pluginName = 'drawer';
	var default_opt = {	
						"dir":"right",
						"open":{"anim":"open"},
						"zLayer":false,
						"close":{"anim":" "}/*Empty class required*/
					};
	var drawer = model.getNewModel(pluginName);
	
	drawer.prototype.default_opt = $.extend(true,{},model.default_opt,default_opt); 
	
	drawer.prototype.init_structure = function(){
		
		model.init_structure.call(this);
		this.options.model.addClass(this.options.dir);			
	}
		
	$.fn.drawer = function (options) {
		var obj = null, 
			mask = null;
			
			
		if (model.util.is_options_valid(options)) {
			
			$.each(this,function(a,b){
				
				var _this = $(b);
				
				obj = new drawer(options,_this);
				
				mask = {
					open: function(){obj.open();},
					close: function(){obj.close();},
					on:function(){obj.on();},
					off:function(){obj.off();}
				};
									
				_this.data('model', mask);
			});
		}	
		return this.data('model') || obj;
	};

	
}(Zepto));
/*End of Drawer Model*/