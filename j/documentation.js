// JavaScript Document



/*Initialization Structure

	obj = $.fn.lightBox({ ltBox:<jQuery Node> })
	<jQuery Node>.lightBox({ ltBox:<jQuery Node> })

Call Structure
	
	obj.open(),	obj.close()	
	<jQuery Node>.lightBox().open(),<jQuery Node>.lightBox().close()

Params

	ltBox : Html node tree to show as lightbox, [Jquery HTML Object][Mandatory]
	dimens : Dimensions of lightbox, can be in any fesable unit like (%,px,em..etc),[String][Optional][Default: auto]
	fixed : Allow lightbox to move with scroll.[Boolean][Optional][Default: true]
	resetForm : Reset forms inside lightbox [Boolean][Optional][Default: false]
	open : {[Optional]
		firstFocus : Node to get focus on lightbox open [Jquery HTML Object][Optional]
		success : Function to fire on lightbox open[Function][Optional]
		anim : {
			className: //Animation class
		)
		event : Name of event on which lightBox should open[String][Optional][Default: click]
	}
	close : {[Optional]			
		esc: Close LightBox on escape keypress [Boolean][Optional][Default:true]
	    layer : Close LightBox on click on background layer[Boolean][Optional][Default:true]
		nodes : List of items on which lightbox will be close [Optional]
				Example
					Case 1	--	nodes : {target:'..selector..',selector:'..selector..',event : <'click'>}
					Case 2	--	nodes : $('..selector..') 
					Case 3	--	nodes : Array of Case 1 or Csse 2				
					
		success : Function to fire on lightbox close[Function][Optional]
		returnFocus: On lightbox close, focus is set back to trigger element if true, to body if false, to given element if provided
					[Boolean,Jquery Element][Optional][Default:true]			
		anim : {
			className: //Animation class [String]
			duration: //Animation duration [Number in ms]
		)

	}
	
	Peniding Work on close and closeAll
	
	*/
