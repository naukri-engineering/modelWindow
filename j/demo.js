// JavaScript Document

$(document).ready(function(){

	/** Initialization options */
	var options = {
			ltBox:$('#link_lightBox'),					
			resetForm  : true,
			dimens:{
				width:'30%'
			},
			open:{
				success:function(){ },
				event : 'click',
				anim:{className:'flipOpen'}
			},
			close:{
				nodes : {target:'#link_lightBox',selector:'#link_close'},
				layer: false,
				success: function(){},
				anim:{className:'flipClose',duration:300}
			}			
		};	
		
	var options2 = {
		ltBox:$('#link_lightBox2'),
		dimens:{
			width:'150px',
		},
		open:{
			firstFocus  :$('#dooooo'),
			success:function(){
				$('#link_open1').lightBox().close();			
			},
			event : 'click',
			anim:{className:'flipOpen'}
		},
		close:{
			nodes : [{target:$('#link_close2'),event:'focus'}],
			anim:{className:'flipClose',duration:300}
		}			
	};
	/** Initializing lightbox */
	var val = $('#link_open0,#link_open1').lightBox(options);	

	/** Initializing lightbox */
	var obj_link_lightBox = $('#link_open2').lightBox(options2);	
	$('body').append('<script src="j/lightBox.js"></script>')
		
})