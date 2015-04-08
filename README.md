jQuery LightBox
================

Customizable, CSS powered, jQuery lightBox plugin.

Jquery lightBox accepts CSS transitions classes to animate opening/closing. It takes little configuration or code to use it on your project. [Try out the demo](https://jsfiddle.net/ankit90_anand/75jx05xq/embedded/result/).

Supports IE7+ and modern browsers.

**Usage**

```javascript
$('.trigger').lightBox({"model":$('#container')});
```

**Options**

Name             | Default                       | Type              | Description
:----------------|:----------------------------- |:----------------- |:-----------
model            | `null`                        | Element | Node to be opened as lightBox               
dimens           | `{"height":"auto","width":"auto"}`| Object  | Dimensions of lightBox                  
resetForm        | `false`                       | Boolean | Reset FORM inside lightBox at open & close
fixed            | `false`                       | Boolean | Position lightbox as absolute or fixed.
open             | `{...}`                       | Object  | Opening properties 
                 |  success  : `function(){}`    | Function | Open success callback
                 |  event    : `"click"`         | String   | Open trigger event.
                 |  selector : `""`              | String   | Selector for target delegation.
                 |  anim     : `""`              | String   | CSS animation class added on lightbox at open.
close            | `{...}`                       | Object   | Closing properties                 
                 |  esc      : `true`            | Boolean  | Close lightBox on escape key press.
                 | layer     : `true`            | Boolean  | Close lightBox on background layer click.
                 | nodes     : `{"target":"","event":"click","selector":""}`| Object  | Define nodes to close lightBox.
                 |  success  : `function(){}`    | Function  | Close success callback.
                 |  returnFocus : `true`         | Boolean  | Return focus to trigger element on close.
                 |  anim     : `""`              | String  | CSS animation class added on lightbox at close.
                 
                  
**Methods**

`$('#trigger').lightBox().open()` Open lightBox

`$('#trigger').lightBox().close()` Close lightBox

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
