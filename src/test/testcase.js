// JavaScript Document
window.onload = function() {
    var m = window;


    test("LightBox should be of HTML node type ", function() {
        var map = [{
            elem: $(window),
            value: "null",
            msg: 'Windows type element cannot be lightbox'
        }, {
            elem: $(document),
            value: "null",
            msg: 'Document type element cannot be lightbox'
        }, {
            elem: $('#one'),
            value: "object",
            msg: 'HTML element can be lightbox'
        }];
        for (var i = 0; i < map.length; i++) {
            var test_obj = map[i];
            var options = {
                model: test_obj['elem']
            };
            var obj = $('<div>').lightBox(options);
            ok($.type(obj) == test_obj['value'], 'Passed: ' + test_obj['msg']);
        }
    });

    var options = {
        model: $('#one'),
        resetForm: true,
        dimens: {
            width: '200px'
        },
        open: {
            event: 'dummy',
            anim: "flipOpen"
        },
        close: {
            anim: "flipClose"
        }
    };
    

    obj = $(window).lightBox(options);
    options.ltBox = $('#two');
    obj2 = $('body').lightBox(options);

    /** Make testcase.util global */
    test("Check util functions", function() {

        var flag = window.isTransitionEndSupported;
        ok(flag, "Browser support animation")

        var node = $('<div class="on">');
        m.util.switchClass.call(node, "on", "off")
        ok(node.attr('class') == "off", "switch class function switched class")
    });


    test("Single time opening and closing lightBox", function() {    	
        
        obj.open();        
        ok(m.stack.length == 1, 'Opening lightBox incremeneted stack')
        obj.close(null,true);
        ok(m.stack.length == 0, 'Closing lightBox decremeneted stack')
    });


    test("Multiple time opening and closing lightBox", function() {

        obj.open();
        obj.open();
        obj.open();
        obj.open();
        ok(m.stack.length == 1, 'Opening lightBox incremeneted stack')
        obj.close(null,true);
        obj.close(null,true);
        ok(m.stack.length == 0, 'Closing lightBox decremeneted stack')
    });

    test("Closing lightBox from code", function() {

        obj.open();
        obj2.open();
        $.fn.lightBox.close({
            index: 1
        })

        ok(m.stack[0].options.model.selector == '#two', "Closed lightBox at 1 Index")

        $.fn.lightBox.close({
            index: 0
        })
        ok(m.stack.length == 0, "Closed lightBox at 0 Index")

        obj.open();
        obj2.open();

        $.fn.lightBox.close({
            all: true
        })

        ok(m.stack.length == 0, "All LightBox closed")

    });

}
