lightBox
========

## Confgration ##

- LightBox container        ``` ltBox: null ```
- Dimenstions               ``` dimens: {```
  -                                 ```height: 'auto,```
  -                                 ```width: 'auto'```
-                                 ```}```
- Reset form tags inside lightbox   ``` resetForm: false ```
- Fix lightBox on screen  ``` fixed: false ```
- Open configration       ```  open: {  ```
  - open callback             		```success :function(){},```
  - open on event             		```event :'click',```
  - open css animation class  		```anim :{className:''}```
-                          		```}```
                          
- Close configration      ``` close: {```
  - Close on escape key press       ```esc: true,```
  - Close on bglayer click          ```layer: true,```
  - Close on these nodes            ```nodes : {target:'',event:'click',selector:''},```
  - Close callback                  ```success : function(){},```
  - Return focus to target on close ```returnFocus: true,```
  - Close css animation class       ```anim : {className:'',duration:0}```
-                               ```}```
                          

