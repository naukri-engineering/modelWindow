// JavaScript Document
$('#trigger1').lightBox({"model":$('#container1')});

$('#trigger2').lightBox({
	"model":$('#container2'),
	"dimens":{"width":"50%"}
});

$('#trigger3').lightBox({
	"model":$('#container3'),
	"dimens":{"width":"50%"},
	"resetForm":true
});

$('#trigger4').lightBox({
	"model":$('#container4'),
	"dimens":{"width":"50%"},
	"resetForm":true,
	"fixed": true
});

$('#trigger5').lightBox({
	"model":$('#container5'),
	"dimens":{"width":"50%"},
	"resetForm":true,
	"fixed": true,
	"open":{"anim" :"flipOpen"},
	"close":{"anim" :"flipClose"}
});  

$('#trigger6').lightBox({
	"model":$('#container6'),
	"dimens":{"width":"50%"},
	"resetForm":true,
	"fixed": true,
	"open":{"anim":"flipOpen"},
	"close":{"nodes":$("#container6 .close"),//{"target":$("#container6"),"selector":".close"} is also valid
	"anim":"flipClose"}	
});  

$('#trigger7').lightBox({
    "model":$('#container7'),
    "dimens":{"width":"50%"},
    "resetForm":true,
    "fixed": true,
    "open":{"anim":"flipOpen","selector":"input"},
    "close":{"nodes":$("#container7 .close"),
    "anim":"flipClose"}  
}); 