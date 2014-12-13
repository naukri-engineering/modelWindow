// JavaScript Document
$('#trigger1').lightBox({"ltBox":$('#container1')});

$('#trigger2').lightBox({
	"ltBox":$('#container2'),
	"dimens":{"width":"50%"}
});

$('#trigger3').lightBox({
	"ltBox":$('#container3'),
	"dimens":{"width":"50%"},
	"resetForm":true
});

$('#trigger4').lightBox({
	"ltBox":$('#container4'),
	"dimens":{"width":"50%"},
	"resetForm":true,
	"fixed": true
});