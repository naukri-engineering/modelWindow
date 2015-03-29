/* jslint curly : false	 */
/* jslint asi : true	 */
/*global pageXOffset */
/*global pageYOffset */

/*Start of lightBox*/
(function($){
  
	/** Singleton Pattern */
	/** If options are given each time a new object will be returned otherwise last configure object will be returend  */
	
	var pluginName = 'lightBox';
	var lightBox = model.getNewModel(pluginName);

	lightBox.prototype.resize = function () {
		
		model.resize();			
	
		var _doc = document.documentElement || document.body,
			innerH = $(window).height(),
			innerW = $(window).width(),

			scrollT = window.pageYOffset ? pageYOffset : _doc.scrollTop,
			scrollL = window.pageXOffset ? pageXOffset : _doc.scrollLeft			
		var availH = innerH - this.options.model.height(),
			tpPos = 0;
		var availW = innerW - this.options.model.width(),
			lpPos = 0;
		if (availH > 0) {			
			tpPos = (!this.options.fixed?scrollT:0) + (availH / 2);
		} else {			
			/*scrollT = totalH > innerH ? scrollT - 20 : scrollT;
			tpPos = scrollT + availH;*/
			tpPos = 0;
			window.scrollTo(0, tpPos);
		}
		lpPos = availW > 0 ? availW / 2 : 0

		this.options.model.css({
			top: tpPos + 'px',
			left: lpPos + 'px'		            
		});
		return true;		
	}		
		
	
		
	
	$.fn.lightBox = function (options) {
		var obj = null, 
			mask = null;

		/** Support for legacy option : ltBox*/
		var temp;		
		if(options){
			try{
				temp = options.model; 
				options.model = options.ltBox;
				options.ltBox = null;
				if(!options.model)throw temp;
			}catch(e){options.model = e}
		}
		
				
			
		if (model.util.is_options_valid(options)) {

			/** Support for legacy option : anim*/
			if(options.open){
				try{
					temp = options.open.anim; 
					if(!(options.open.anim = options.open.anim.className))throw temp;
				}catch(e){options.open.anim=e}
			}
			
			if(options.close){
				try{
					temp = options.close.anim; 
					if(!(options.close.anim = options.close.anim.className))throw temp;
				}catch(e){options.close.anim=e;}
			}

			
			$.each(this,function(a,b){
				
				var _this = $(b);
				
				obj = new lightBox(options,_this);
				
				mask = {
					resize:function(){obj.resize();},
					open: function(){obj.open();},
					close: function(index,noAnim){obj.close(index,noAnim);}
				};
									
				_this.data('model', mask);
			});
		}	
		return this.data('model') || obj;
	};
	
	

	$.fn.lightBox.close = function(option){
		
		var start,end;
	
		start = 0;
		end = 0;		
		option = option || {};
		
		if(option.all){
			start = (model.lt.stack.length-1);			
		}
		if(option.allPrevious){
			start = (model.lt.stack.length-1);			
			end = 1;
		}
		else if(option.index)
		{
			end = start = option.index;
		}
		
		for(var i=start;i>=end;i--){
			(i in model.lt.stack)?model.lt.stack[i].close(i,option.noAnim):'';
		}	
	};
	
	$.fn.lightBox.closeAll = function(option){
		$.fn.lightBox.close(option||{all:true});
	};

}(jQuery));
/*End of lightBox*/