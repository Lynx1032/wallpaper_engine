function date_time() {

	// Creating object of the Date class
	var date = new Date();

	// Get current hour
	var hour = date.getHours();
	// Get current minute
	var minute = date.getMinutes();
	// Get current second
	var second = date.getSeconds();
	
	/*
	// Variable to store AM / PM
	var period = "";
	*/
	
	// Get current day
	var day = date.getDate();
	// Get current month
	var month = date.getMonth() + 1;
	// Get current year
	var year = date.getYear() + 1900;

	// Assigning AM / PM according to the current hour
	
	/*
	if (hour >= 12) {
		period = "PM";
	} else {
		period = "AM";
		}

	 // Converting the hour in 12-hour format
	 if (hour == 0) {
		hour = 12;
		} else {
		if (hour > 12) {
		hour = hour - 12;
		}
	 }
	 */

	// Updating hour, minute, and second
	// if they are less than 10
	hour = update(hour);
	minute = update(minute);
	second = update(second);
	
	// Updating day, month
	// if they are less than 10
	day = update(day);
	month = update(month);
	//year = update(year);

	// Adding time elements to the div
	document.getElementById("digital-clock").innerText = hour + ":" + minute + ":" + second + "\n" + day + "-" + month + "-" + year;

	// Set Timer to 1 sec (1000 ms)
	setTimeout(date_time, 1000);
	}

	 // Function to update time elements if they are less than 10
	 // Append 0 before time elements if they are less than 10
	function update(t) {
	 if (t < 10) {
	 return "0" + t;
	 }
	 else {
	 return t;
	 }
	}

date_time();