// foundation start

var rhombus=document.getElementById('rhombus');
var rhombusText=rhombus.getContext('2d');
rhombusText.beginPath();
rhombusText.moveTo(100,20);	//начало
rhombusText.lineTo(160,36);	//1 точка
rhombusText.lineTo(160,88);	//2 точка
rhombusText.lineTo(88,100);	//3 точка
rhombusText.lineTo(60,48);	//4 точка
rhombusText.closePath();
rhombusText.strokeStyle='#cfe9ff';
rhombusText.stroke();

var cube=document.getElementById('cube');
var cubeText=cube.getContext('2d');
cubeText.beginPath();
cubeText.moveTo(50,0);	//начало
cubeText.lineTo(100,50);	//1 точка
cubeText.lineTo(50,100);	//2 точка
cubeText.lineTo(0,50);
cubeText.closePath();
cubeText.strokeStyle='#cfe9ff';
cubeText.stroke();

var waveBeziers=document.getElementById('waveBeziers');
var waveBeziersText=waveBeziers.getContext('2d');
waveBeziersText.beginPath();
waveBeziersText.moveTo(0, 15);
waveBeziersText.quadraticCurveTo(20, 0, 40, 15);
waveBeziersText.moveTo(40, 15);
waveBeziersText.quadraticCurveTo(60, 30, 80, 15);
waveBeziersText.moveTo(80, 15);
waveBeziersText.quadraticCurveTo(100, 0, 120, 15);
waveBeziersText.moveTo(120, 15);
waveBeziersText.quadraticCurveTo(140, 30, 160, 15);
waveBeziersText.moveTo(160, 15);
waveBeziersText.quadraticCurveTo(180, 0, 200, 15);
waveBeziersText.moveTo(200, 15);
waveBeziersText.quadraticCurveTo(220, 30, 240, 15);
waveBeziersText.moveTo(240, 15);
waveBeziersText.quadraticCurveTo(260, 0, 280, 15);
waveBeziersText.moveTo(280, 15);
waveBeziersText.quadraticCurveTo(300, 30, 320, 15);
waveBeziersText.lineWidth = 2;
waveBeziersText.strokeStyle = '#e4edef';
waveBeziersText.stroke();