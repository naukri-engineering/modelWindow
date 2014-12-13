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

$('#trigger5').lightBox({
	"ltBox":$('#container5'),
	"dimens":{"width":"50%"},
	"resetForm":true,
	"fixed": true,
	"open":{"anim":{"className":"flipOpen"}},
	"close":{"anim":{"className":'flipClose',"duration":300}}
});  

$('#trigger6').lightBox({
	"ltBox":$('#container6'),
	"dimens":{"width":"50%"},
	"resetForm":true,
	"fixed": true,
	"open":{"anim":{"className":"flipOpen"}},
	"close":{"nodes":$("#container6 .close"),//{"target":$("#container6"),"selector":".close"} is also valid
	"anim":{"className":'flipClose',"duration":300}}	
});  
