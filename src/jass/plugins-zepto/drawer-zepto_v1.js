/* jslint curly : false  */
/* jslint asi : true     */
/*global pageXOffset */
/*global pageYOffset */
/*Start of Drawer Model*/
(function($) {

    /** Singleton Pattern */
    /** If options are given each time a new object will be returned otherwise last configure object will be returend  */

    var pluginName = 'drawer';
    var default_opt = {
        "dir": "right",
        "open": {
            "anim": "sideIn"
        },
        "zLayer": false,
        "close": {
            "anim": " "
        } /*Empty class required*/
    };
    var drawer = model.getNewModel(pluginName);




    drawer.prototype.default_opt = $.extend(true, {}, model.default_opt, default_opt);

    drawer.prototype.init_structure = function() {

        model.init_structure.call(this);
        this.options.model.addClass(this.options.dir);
    }



    drawer.prototype.resize = function() {
        var minHeight = parseInt($('body').css('minHeight'));

        model.lt.cont.css({
            width: 'auto',
            height: 'auto'
        })

        var totalH = minHeight || $(window).height(),
            totalW = $(document).width();

/*        this.options.contentWrapper.css({
            width: totalW + 'px',
            height: totalH + 'px'
        });
*/

        model.lt.cont.css({
            width: totalW + 'px',
            height: totalH + 'px'
        });

    }

    /** Wrapped to handle drawer open and close */


    var drawer_open = function() {
        model.open.call(this);



    }
    var drawer_close = function() {
        model.close.call(this);

    }

    $.fn.drawer = function(options) {
        var obj = null,
            mask = null;

        if (model.util.is_options_valid(options)) {

            $.each(this, function(a, b) {

                var _this = $(b);

                obj = new drawer(options, _this);

                obj.open = function() {
                    drawer_open.call(obj);
                }
                obj.close = function() {
                    drawer_close.call(obj);
                }

                mask = {
                    open: obj.open,
                    close: obj.close,
                    on: function() {
                        obj.on();
                    },
                    off: function() {
                        obj.off();
                    }
                };

                _this[0].model = mask;
            });
        }
        return this[0].model || obj;
    };


}(Zepto));
/*End of Drawer Model*/
