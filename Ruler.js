var NumeroLinhas = 0;
var MD = false;
var posX;
var posY;
var Act = 'O';

loadRulers();

function loadRulers()
{
	document.body.style.position = 'relative';
	document.body.style.top = '30px';
	document.body.style.left = '30px';
	document.body.innerHTML += '<div id=\'rulertop\' style=\'height:30px;background-color:red;width:100%;position:fixed;z-index:100000;top:0;\'></div>';
	document.body.innerHTML += '<div id=\'rulerleft\' style=\'height:100%;background-color:green;width:30px;position:fixed;left:0; z-index:100000;top:30px;\'></div>';
	document.body.innerHTML += '<div id=\'eraser\' style=\'height:30px;background-color:black;width:30px;position:fixed;left:0; z-index:100000;top:0px;\'></div>';

	document.getElementById('rulertop').addEventListener('mousedown', clickedTop, false);
	document.getElementById('rulerleft').addEventListener('mousedown', clickedLeft, false);
	document.getElementById('eraser').addEventListener('click', DestroyLines, false);
};

function clickedTop(e){
	CreateLine('H');
	MD = true;
	Act = 'H';
	posX = e.clientX;
	posY = e.clientY;
};

function clickedLeft(e){
	CreateLine('V');
	MD = true;
	Act = 'V';
	posX = e.clientX;
	posY = e.clientY;
};

function DestroyLines()
{
	for(var a=1; a< NumeroLinhas+1; a++)
	{
		document.body.removeChild(document.getElementById('rule'+a));
	};

	NumeroLinhas = 0;
};

window.addEventListener('mouseup', function(e){
	MD = false;
	Act = 'O';
});

function CreateLine(Letra)
{

	NumeroLinhas++;

	if(Letra == 'H')
	{
		document.body.innerHTML += '<div id=\'rule'+NumeroLinhas+'\' class=\'lineRuler\' style=\'position:absolute;top:0;left:0;z-index:100000;width:100%;height:1px;background-color:red;\'></div>';
	} else {
		document.body.innerHTML += '<div id=\'rule'+NumeroLinhas+'\' class=\'lineRuler\' style=\'position:absolute;top:0;left:0;z-index:100000;height:100%;width:1px;background-color:red;\'></div>';

	};

	document.getElementById('rulertop').addEventListener('mousedown', clickedTop, false);
	document.getElementById('rulerleft').addEventListener('mousedown', clickedLeft, false);
	document.getElementById('eraser').addEventListener('click', DestroyLines, false);
};

window.onmousemove = function(e){
	
	posX = e.clientX-15;
	posY = e.clientY-15;

	if(MD)
	{
		if(Act == 'H')
		{
			document.getElementById('rule'+NumeroLinhas).style.top = posY+'px';
		} else if(Act == 'V'){
			document.getElementById('rule'+NumeroLinhas).style.left = posX+'px';
		};
	};
};