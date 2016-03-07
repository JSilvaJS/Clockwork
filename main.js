function getTime(){
	
	var rightNow = new Date();
	var hours = rightNow.getHours(); 
	var minutes = rightNow.getMinutes();
	var secs = rightNow.getSeconds();

	var finalCount = hours + ":" +  minutes + ":" + secs;  //need to call a function here

	var clockDisplay = document.querySelector('#c_clock');

	clockDisplay.innerHTML = finalCount;

};

var finalTime = window.setInterval(getTime,1000); 




// //need to call a function (not string)


// var hr; 
// var min;
// var sc;

// var staticTime = function(hr, min, sc) {
// 	return hr + ":" + min + ":" + sc;
// };

//Problem is can't have single digits. We need to add zeroes for the numbers between 0 - 9. When the seconds is between 0 - 9, we need to add a zero to that piece of data.// 
// Maybe use a while loop. Maybe an if/else statement. 
// window.setInterval(  , 1000);




// var zeroSeconds = secs(function(number) {
// 	if (secs <= 9) {
// 		return "0" + secs;
// 	} else {
// 		return secs;
// 	}
// });





