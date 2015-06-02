// JavaScript Document
if (!model) {
    var model = (function() {


        var isTransitionEndSupported = (function() {

            var transEndEventNames = {
                WebkitTransition: 'webkitTransitionEnd',
                MozTransition: 'transitionend',
                OTransition: 'oTransitionEnd otransitionend',
                transition: 'transitionend'
            }
            for (var name in transEndEventNames) {
                if (document.documentElement.style[name] !== undefined) {
                    return (transEndEventNames[name]);
                }
            }
        }());

        if (DEBUG) {
            window.isTransitionEndSupported = isTransitionEndSupported;
        }

        /** Refered : JQuery UI Code */
        /** Detects focusable element */
        function focusable(element, isTabIndexNotNaN) {
            var map, mapName, img,
                nodeName = element.nodeName.toLowerCase();
            if ("area" === nodeName) {
                map = element.parentNode;
                mapName = map.name;
                if (!element.href || !mapName || map.nodeName.toLowerCase() !== "map") {
                    return false;
                }
                img = $("img[usemap=#" + mapName + "]")[0];
                return !!img && visible(img);
            }
            return (/input|select|textarea|button|object/.test(nodeName) ? !element.disabled :
                    "a" === nodeName ?
                    element.href || isTabIndexNotNaN :
                    isTabIndexNotNaN) &&
                // the element and all of its ancestors must be visible
                visible(element);
        }

        function visible(element) {
            return $.expr.filters.visible(element) && !$(element).parents().addBack().filter(function() {
                return $.css(this, "visibility") === "hidden";
            }).length;
        }

        $.expr[":"].focusable = function(element) {
            return focusable(element, !isNaN($.attr(element, "tabindex")));
        };
        /** Refered : JQuery UI Code */

        /** Some common Utility functions*/
        var util = {
            is_options_valid: function(options) {
                if (!options || !options.model || (options.model.prop('nodeType') !== 1)) {
                    return false;
                }
                return true;
            },
            switchClass: function(a, b) {
                this.removeClass(a).addClass(b);
            }
        };

        if (DEBUG) {
            window.util = util;
        }


        var default_opt = {
            model: null,
            dimens: {
                height: 'auto',
                width: 'auto'
            },
            resetForm: false,
            fixed: false,
            zLayer: true,
            open: {
                minZIndex: 999,
                success: function() {},
                event: 'click',
                selector: null,
                anim: ''
                    //          anim : {className:''}               
            },
            close: {
                esc: true,
                layer: true,
                nodes: {
                    target: '',
                    event: 'click',
                    selector: ''
                },
                success: function() {},
                returnFocus: true,
                anim: ''
                    //          anim : {className:'',duration:0}
            }
        };

        /** Runs once */
        var lt = (function() {
            var cont = $('<div class="ltCont close"></div>').attr('tabIndex', 0);
            var layer = $('<div class="ltLayer close"></div>');
            cont.append(layer);

            //Reset lightBox on resize
            $(window).bind('resize', function() {
                if (lt.stack.length) {
                    var top = lt.stack[0];
                    top.resize();
                }
            });

            //Close lightBox on close
            $('html').keydown(function(event) {
                if (event.keyCode === 27 && lt.stack.length && lt.stack[0].options.close.esc) {
                    lt.stack[0].close();
                }
            });

            //Close lightBox on layer click
            layer.click(function(e) {
                e.stopPropagation();
                lt.stack[0].close_target = this;
                if (lt.stack.length && lt.stack[0].options.close.layer) {
                    lt.stack[0].close();
                }
            });

            return {
                //Top most visible lightbox is lt.stack[0]
                stack: [],
                cont: cont,
                layer: layer
            };
        }());

        if (DEBUG) {
            window.stack = lt.stack;
        }

        //Document Ready
        $(function() {
            $('body').append(lt.cont);
        });

        var manage_focus = (function() {

            /** If tab is pressend on or in lightbox */
            lt.cont.keydown(function(event) {
                if (!lt.stack.length || event.keyCode !== 9) {
                    return;
                }
                var list = lt.stack[0].options.model.find(':focusable');
                var first = list.first();
                var last = list.last();

                if ((event.target === last[0] || event.target === event.currentTarget) && !event.shiftKey) {
                    first ? first.focus() : '';
                    return false;
                } else if ((event.target === first[0] || event.target === event.currentTarget) && event.shiftKey) {
                    last ? last.focus() : '';
                    return false;
                }
                event.stopPropagation();
            });

            /** If tab is pressed on first or last focusable element and lightbox is open */
            $('html').keydown(function(event) {
                if (event.keyCode !== 9) {
                    return;
                }
                /** If lightbox is open */
                if (lt.stack.length) {
                    lt.cont.focus();
                    return false;
                }
            });
        }());

        //for findOut max ZIndex on page
        // * is replaced with .ltLayer as multiple ltCont are created when lightBox.js is included more than once. 
        function getMaxZIndex() {
            var zIndexMax = this.options.open.minZIndex;
            $('.ltCont .ltLayer').each(function() {
                var z = parseInt($(this).css('z-index'));
                if (z > zIndexMax) zIndexMax = z;
            });
            return zIndexMax;
        }

        var init_Dimensions = function() {
            this.options.model.css({
                position: (this.options.fixed ? 'fixed' : 'absolute'),
                width: this.options.dimens.width,
                height: this.options.dimens.height
            });
        }

        var init_options = function(param) {
            this.options = $.extend(true, {}, this.default_opt, param);
        }

        var init_structure = function() {
            var parent = this.options.model.parent();
            /** Check if lightBox alerady present in ltCont */
            if (!parent.hasClass('ltCont')) {
                lt.cont.append(this.options.model);
            }
        }


        var animate = {
            open: function() {
                var arr = [this.options.close.anim, this.options.open.anim];
                util.switchClass.apply(this.options.model, arr);
            },
            close: function(obj) {
                var arr = [this.options.open.anim, this.options.close.anim];
                util.switchClass.apply(this.options.model, arr);
            }
        }

        var open_firstFocus = function() {
            /** IE specific fix, for scroll move on focus*/
            var scrollTop = document.documentElement.scrollTop;
            var ff = this.options.open.firstFocus;
            if (ff)
                ff.focus();
            else
                lt.cont.focus();
            /** IE specific fix, for scroll move on focus*/
            document.documentElement.scrollTop = scrollTop;
        }
        var resetForm = function() {
            if (!this.options.resetForm)
                return;
            var forms = this.options.model.find('form');
            for (var key = 0; key < forms.length; key++) {
                forms[key].reset();
            }
        }

        var close_returnFocus = function() {
            if (!lt.stack.length) {
                var rf = this.options.close.returnFocus;
                rf === true ? this.options.trigger.focus() : $(rf).focus();
            }
        }

        var closeTransEnd_cb = function() {

            this.options.model.removeClass('model_open');

            this.options.model.css('zIndex', '-1');


            if (lt.stack.length) {
                var top = lt.stack[0];
                if (this.options.zLayer) {
                    lt.layer.css('zIndex', top.options.model.css('zIndex'));
                }
            } else {
                lt.cont.addClass('close')
            }

            close_returnFocus.call(this);

            resetForm.call(this);

            (this.options.close.success).call(this, this.close_target);
        }

        var init_openclose_Properties = function() {
            var _this = this;
            _this.state = "close"
                /** Adding event on trigger */

            this.openEventHandler = function() {
                _this.open();
            }

            console.log(this.options.open)
            this.options.trigger.on(this.options.open.event + '.' + this.pluginName,this.options.open.selector, this.openEventHandler)

            /**Adding events Closing nodes */
            init_closeNodes.call(this, this.options.close.nodes)


        }

        var init_closeNodes = function(nodes) {
            var _this = this;

            if ($.type(nodes) === 'array') { //Recursive
                $.each(nodes, function(a, b) {
                    init_closeNodes.call(_this, b)
                })
                return;
            }

            var config = null;
            if (nodes.constructor === jQuery) {
                config = $.extend({}, this.default_opt.close.nodes);
                config.target = nodes;
            } else {
                config = {
                    target: $(nodes.target),
                    event: nodes.event,
                    selector: nodes.selector
                }
            }
            config.target.on(config.event, config.selector, function() {
                _this.close();
            })
        }

        /** Run every time a new lightbox is created */
        var init = function(param) {

            init_options.call(this, param)
            this.init_structure();
            init_Dimensions.call(this);
            init_openclose_Properties.call(this);

            this.options.model.addClass(this.options.close.anim);

        }
        var reInit = function(pluginName) {
            this.options.trigger.off(this.options.open.event + '.' + this.pluginName);
        }

        var off = function() {
            this.options.trigger.off(this.options.open.event, this.openEventHandler);
        }

        var on = function() {
            this.options.trigger.on(this.options.open.event, this.openEventHandler);
        }

        /** To be overrited */
        var resize = function() {
            model.lt.cont.css({
                width: 'auto',
                height: 'auto'
            })

            var totalH = $(document).height(),
                totalW = $(document).width();

            model.lt.cont.css({
                width: totalW + 'px',
                height: totalH + 'px'
            });
        };

        var open = function() {

            this.state = 'open'
            this.options.model.addClass('model_open');
            this.options.model.data('model',this);

            /** Setting zIndex of lightBox and black layer */
            var maxZIndElm = getMaxZIndex.call(this);
            if (this.options.zLayer) {
                lt.layer.css('zIndex', maxZIndElm + 3);
            }
            if (this.pluginName != 'drawer') {
                this.options.model.css('zIndex', maxZIndElm + 3);
            }

            if (!lt.stack.length) {
                lt.cont.css('zIndex', maxZIndElm + 1);
                this.util.switchClass.call(lt.layer, 'close', 'open')
                lt.cont.removeClass('close')

            }

            resetForm.call(this);

            /** Stack Update */
            if ($.inArray(this, lt.stack) === -1) {
                lt.stack.unshift(this);
            }

            /** Center align LightBox */
            this.resize();

            /** Animation Code */
            animate.open.call(this);
            /** Focus Element */
            open_firstFocus.call(this);

            /** Success callback */
            (this.options.open.success).call(this);
        }

        var close = function(index, noAnim) {

            index = index || $(lt.stack).index(this);
            if (!lt.stack.length || index < 0)
                return;

            this.state = 'close';            
            this.options.model.data('model',this);

            lt.stack.splice(index, 1);

            if (!isTransitionEndSupported || noAnim || !this.options.open.anim) {
                closeTransEnd_cb.call(this);

            } else {

                animate.close.call(this);
            }

            if (!lt.stack.length)
                this.util.switchClass.call(lt.layer, 'open', 'close')
        }


        var getNewModel = function(pluginName) {
            var _const = function() {};
            _const.prototype = model;

            var _proto_subModel = new _const();
            _proto_subModel.pluginName = pluginName;

            function _const_subModel(options, trigger) {

                /** Cleaning registered events for same trigger-lightBox*/
                var obj = trigger.data('model');
                if (obj && obj.options && obj.options.model[0] === options.model[0]) {
                    reInit.call(this);
                }
                options.trigger = trigger;
                init.call(this, options);
            };
            _const_subModel.prototype = _proto_subModel;

            return _const_subModel;
        }




        return {
            pluginName: '',
            util: util,
            lt: lt,
            reInit: reInit,
            close_returnFocus: close_returnFocus,
            getNewModel: getNewModel,
            open: open,
            close: close,
            on: on,
            off: off,
            resize: resize,
            default_opt: default_opt,
            init_structure: init_structure,
            closeTransEnd_cb: closeTransEnd_cb
        }
    }());

}
