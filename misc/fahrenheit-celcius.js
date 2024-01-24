function temperature(type, temp) {
	if(type === "celcius")
		return(temp * 9/5 + 32);
	else if(type === "fahrenheit")
		return((temp - 32) * 5/9);
	else
		return null;
}

console.log("fahrenheit to celcius", temperature("fahrenheit", 21.2).toFixed(1));
console.log("celcius to fahrenheit ", temperature("celcius", -6,7).toFixed(1));
