jQuery LightBox
================

Customizable, CSS powered, jQuery lightBox plugin.

Jquery lightBox accepts CSS transitions classes to animate opening/closing. It takes little configuration or code to use it on your project. [Try out the demo](//vctrfrnndz.github.io/jquery-accordion).

Supports IE7+ and modern browsers.

Developed by [@vctrfrnndz](//vctrfrnndz.com). Licensed under the MIT License.

**Usage**

```javascript
$('.trigger').lightBox({"ltBox":$('#container')});
```

**Options**

Name             | Default   |                   | Type    | Description
:----------------|:----------|:----------------- |:--------|:-----------
ltBox            | `null`    |                   | Element | HTML element to be shown in lightBox.               dimens           | `{"height":"auto","width":"auto"}`|| Object  | Dimensions of lightBox container.                  resetForm        | `false`   |                   | Boolean | Don't reset form inside lightBox on open and close.
fixed            | `false`   |                   | Boolean | Show lightBox in center of screen at absolute position.
open             | `{}`      |                   | Object  | Params to open lightBox
                 |  success  | `function(){}`    | Function | Open callback.
                 |  event    | `"click"`         | String   | Event to bind on trigger to opens lightBox.
                 |  anim     | `{"className":""}`| Object | classname to add animation while open.                  
close            | `{}`      |                   | Object   | Params to close lightBox.                 
                 |  esc      | `true`            | Boolean  | Close lightBox on escape key press.
                 | layer     | `true`            | Boolean  | Close lightBox on background layer click.
                 | nodes     | `{"target":"","event":"click","selector":""}`| Object  | Close lightBox on click of nodes. Specify selector to bind close using delegation under target.
                 |  success  | `function(){}`    | Function  | Close callback.
                 |  returnFocus | `true`         | Boolean  | Return focus to lightBox trigger element on close.
                 |  anim     | `{"className":"","duration":0}` | Object  | classname to add animation while close and duration of close animation. *Require by plugin.
                 
                  
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

```html
<span class="trigger"> Trigger 1 </span>
<span class="trigger"> Trigger 3 </span>
<span class="trigger"> Trigger 3 </span>
<div id="container" class="lightBox">
    Show content in lightBox
</div>
```

```javascript
$('.trigger').lightBox({"ltBox":$('#container')});
```
