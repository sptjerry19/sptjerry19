// Converting Strings to Numbers:

 Number("3.14")      // return 3.14
 Number(Math.PI)     // return 3.141592653589793
 Number(" ")         // return 0
 Number("")          // return 0
 Number("99 88")     // error (in string is not a type of number)
 Number("John")      // error (in string is not number)

//  NUMBER METHODs:
// Method	    Description
Number()	    // Returns a number, converted from its argument
parseFloat()	// Parses a string and returns a floating point number
parseInt()	    // Parses a string and returns an integer


// Converting Numbers to Strings:
// method           Description
toString()          // convert other type to string
toExponential()     // Returns a string, with a number rounded and written using exponential notation.
toFixed()	        // Returns a string, with a number rounded and written with a specified number of decimals.
                    // số giá trị được làm tròn từ phần thập phân được viết trong ()
toPrecision()       // Returns a string, with a number written with a specified length


(124.42).toString();    //return "124.42"
Date.toString();        //return "date"


// Method	        Description
getDate()	        //Get the day as a number (1-31)
getDay()	        //Get the weekday a number (0-6)
getFullYear()	    //Get the four digit year (yyyy)
getHours()	        //Get the hour (0-23)
getMilliseconds()	//Get the milliseconds (0-999)
getMinutes()	    //Get the minutes (0-59)
getMonth()	        //Get the month (0-11)
getSeconds()	    //Get the seconds (0-59)
getTime()	        //Get the time (milliseconds since January 1, 1970)