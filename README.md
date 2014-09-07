lightBox
========

## Confgration ##

- LightBox container        ``` ltBox: null ```
- Dimenstions               ``` dimens: {
                                    height: 'auto',
                                    width: 'auto'
                                }
                            ```
- Reset form tags inside lightbox   ``` resetForm: false ```
- Fix lightBox on screen  ``` fixed: false ```
- Open configration       ```  open:{
  - open callback             			success : function(){},
  - open on event             			event : 'click',
  - open css animation class  			anim : {className:''}				
                          		}
                          ```
- Close configration      ``` close: {
                                esc: true,
                                layer: true,
                                nodes : {target:'',event:'click',selector:''},
                                success : function(){},
                                returnFocus: true,
                                anim : {className:'',duration:0}
                            }
                          ```

