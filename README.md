jQuery LightBox
================

Customizable, CSS powered, jQuery lightBox plugin.

Jquery lightBox accepts CSS transitions classes to animate opening/closing. It takes little configuration or code to use it on your project. [Try out the demo](//vctrfrnndz.github.io/jquery-accordion).

Supports IE7+ and modern browsers.

Developed by [@vctrfrnndz](//vctrfrnndz.com). Licensed under the MIT License.

**Usage**

```javascript
$('#trigger').lightBox({
    "ltBox":$('#container')
});
```

**Options**

Name             | Default                           | Type    | Description
:----------------|:---------------------------       |:--------|:-----------
ltBox            | `null`                            | Element | HTML element to be shown in lightBox.                
dimens           | `{"height":"auto","width":"auto"}`| Object  | Dimensions of lightBox container.                  resetForm        | `false`                      | Boolean | Don't reset form inside lightBox on open and close.
fixed            | `false`                      | Boolean | Show lightBox in center of screen at absolute position.
open             | `{}`                         | Object  | Params to open lightBox
                 |  `success` | function(){}    | Function | Open callback.
                 | `event`    | `"click"`       | String   | Event to bind on trigger to opens lightBox.
                 | `anim`     | `{"className":""}`| Object | classname to add animation while open.                  
close            | `{}`                         | Object   | Params to close lightBox.                 
                 | `esc`| `true`                | Boolean  | Close lightBox on escape key press.
                 | `layer`| `true`              | Boolean  | Close lightBox on background layer click.
                 | `nodes`| `{"target":"","event":"click","selector":""}`| Object  | Close lightBox on click of nodes. Specify selector to bind close using delegation under target.
                 | `success`| `function(){}`    | Function  | Close callback.
                 | `returnFocus`| `true`        | Boolean  | Return focus to lightBox trigger element on close.
                 | `anim`| `{"className":"","duration":0}` | Object  | classname to add animation while close and duration of close animation. *Require by plugin.
                 
                  
**Events**

`accordion.open` fires when any accordion opens

`accordion.close` fires when any accordion closes

**Sample Structure**

For a simple accordion/dropdown, use the following structure/data-attributes:

```html
<div data-accordion>
    <div data-control>Control</div>
    <div data-content>
        <div>Row</div>
        <div>Row</div>
        <div>Row</div>
    </div>
</div>
```

For a group of accordions, you can use the `data-accordion-group` attribute on a parent, this will allow you to activate/deactivate the single open behavior by setting `singleOpen` to true/false.

```html
<div data-accordion-group>
    <div class="accordion" data-accordion>
        <div data-control>Control</div>
        <div data-content>
            <div>Row</div>
            <div>Row</div>
            <div>Row</div>
        </div>
    </div>
    <div class="accordion" data-accordion>
        <div data-control>Control</div>
        <div data-content>
            <div>Row</div>
            <div>Row</div>
            <div>Row</div>
        </div>
    </div>
</div>
```

## Confgration ##

- LightBox container        ``` ltBox: null ```
- Dimenstions               ``` dimens:```
  -                                 ```height: 'auto,```
  -                                 ```width: 'auto'```

- Reset form tags inside lightbox   ``` resetForm: false ```
- Fix lightBox on screen  ``` fixed: false ```
- Open configration       ```  open:```
  - open callback             		``` success :function(){},```
  - open on event             		``` event :'click',```
  - open css animation class  		``` anim :{className:''}```

- Close configration      ``` close:```
  - Close on escape key press       ``` esc: true,```
  - Close on bglayer click          ``` layer: true,```
  - Close on these nodes            ``` nodes : {target:'',event:'click',selector:''},```
  - Close callback                  ``` success : function(){},```
  - Return focus to target on close ``` returnFocus: true,```
  - Close css animation class       ``` anim : {className:'',duration:0}```
