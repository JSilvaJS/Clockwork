// Clock Counter #1
function getTime(){
	
	var rightNow = new Date();
	var hours = rightNow.getHours(); 
	var minutes = rightNow.getMinutes();
	var secs = rightNow.getSeconds();

	var addSec = (secs.toString().length < 2) ?  "0" + secs :  secs;
	var addMin = (minutes.toString().length < 2) ?  "0" + minutes :  minutes;
	var addHour = (hours.toString().length < 2) ?  "0" + hours :  hours;  

	var finalCount = addHour + ":" +  addMin + ":" + addSec;  

	var clockDisplay = document.querySelector('#c_clock');

	clockDisplay.innerHTML = finalCount;

};

var finalTime = window.setInterval(getTime,1000); 

//Background Color Counter

function changeColor() {

};



