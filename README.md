lightBox
========

## Confgration ##

- LightBox container        ``` ltBox: null ```
-       dimens: {
            height: 'auto',
            width: 'auto'
        }
-        resetForm: false
-        fixed: false
-        open:{
    				success : function(){},
    				event : 'click',
    				anim : {className:''}				
    		}
-       close: {
            esc: true,
            layer: true,
            nodes : {target:'',event:'click',selector:''},
            success : function(){},
            returnFocus: true,
            anim : {className:'',duration:0}
        }

