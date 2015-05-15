jQuery modelWindow (previously called lightBox)
================

Customizable, CSS powered, jQuery modelWindow plugin.

It accepts CSS transitions classes to animate opening/closing. It takes little configuration or code to use it on your project. 

**Support**  

modelWindow is available in jQUery and Zepto variants.  
jQuery supports IE7+ and modern browsers.  
Zepto supports  IE10+ and modern mobile browsers.  

**Derived plugin**  

LightBox [Try out the demo](https://jsfiddle.net/ankit90_anand/75jx05xq/embedded/result/).  
Drawer  [Try out the demo](http://jsfiddle.net/ankit90_anand/jqkj0L8g/embedded/result/).

**Usage**

```javascript
$('.trigger').lightBox({"model":$('#container')});
```

**Model Options**

Name             | Default                       | Type              | Description
:----------------|:----------------------------- |:----------------- |:-----------
model            | `null`                        | Element | Node to be opened as lightBox               
dimens           | `{"height":"auto","width":"auto"}`| Object  | Dimensions of lightBox                  
resetForm        | `false`                           | Boolean | Reset FORM inside lightBox at open & close
fixed            | `false`                           | Boolean | Position lightbox as absolute or fixed.
zLayer           | `true`                            | Boolean | Change zIndex of black layer on opening new modelWindow
open             | `{...}`                           | Object  | Opening properties 
                 |  minZIndex: `999`                 | Number  | Define minimum starting z-index for lightBox
                 |  success  : `function(){}`        | Function | Open success callback
                 |                                   |          | this is lightbox instance
                 |  event    : `"click"`             | String   | Open trigger event.
                 |  selector : `""`                  | String   | Selector for target delegation.
                 |  anim     : `""`                  | String   | CSS animation class added on lightbox at open.
close            | `{...}`                           | Object   | Closing properties                 
                 |  esc      : `true`                | Boolean  | Close lightBox on escape key press.
                 |  layer     : `true`               | Boolean  | Close lightBox on background layer click.
                 |  success  : `function(target){}`  | Function  | Close success callback.
                 |                                   |           | this : lightbox instance,    target: node which fired close
                 |  returnFocus : `true`             | Boolean   | Return focus to trigger element on close.
                 |  anim     : `""`                  | String    | CSS animation class added on lightbox at close.
                 |  nodes     : `{"target":"","event":"click","selector":""}`| Object  | Define nodes to close lightBox.

**Drawer Options**

Name             | Default                       | Type              | Description
:----------------|:----------------------------- |:----------------- |:-----------
dir              | `right`                       | String  | Direction of opening of drawer               
zLayer           | `false`                       | Boolean | Set to false for mobile optimization
open             | `{...}`                       | Object  | Opening properties 
                 |  anim     : `"sideIn"`        | String  | Default CSS animation sideIn.

                  
**Methods**

`$('#trigger').lightBox().open()` Open lightBox

`$('#trigger').lightBox().close()` Close lightBox

`$('#trigger').lightBox().on() Enable lightBox`

`$('#trigger').lightBox().off() Disable lightBox`

`$.fn.lightBox.close()` Close topmost lightBox.

`$.fn.lightBox.closeAll()` Close all lightBox.
`

**Sample Structure**

For a simple lightBox, add class .lightBox to container:

```html
<div id="container" class="lightBox">
    Show content in lightBox
</div>
```

For a group of trigger which open single lightBox

```javascript
$('.trigger').lightBox({"model":$('#container')});
```

```html
<span class="trigger"> Trigger 1 </span>
<span class="trigger"> Trigger 2 </span>

<div id="container" class="lightBox">
    Show content in lightBox
</div>

<span class="trigger"> Trigger 3 </span>
```