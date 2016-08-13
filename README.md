# Synopsis
The goal is to create a javascript clock like the gif below. 
![alt text](https://tiy-learn-content.s3.amazonaws.com/c0df5c51-basic.gif)

Then the goal becomes to create a clock like ticker like the one below that changes colors on every change.
![alt text](https://tiy-learn-content.s3.amazonaws.com/4b5c2bc2-hex.gif)

# Sample Code
``` javascript
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
```
# Deployed Code
[Check It Here!](http://jsilvajs.github.io/Clockwork/)
