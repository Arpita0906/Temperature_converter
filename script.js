
        function convert() {
	var degree = document.getElementById("degree").value;
	var type = document.getElementById("type").value;
	if (type== "cl") {
		if (degree != "") {
			var result = (degree * 1.8) + 32;
			document.getElementById("result").innerHTML = result.toFixed(2)+"F";
		}
	} else {
		if (degree!= "") {
			var result = (degree - 32) / 1.8;
			document.getElementById("result").innerHTML = result.toFixed(2)+"C";
		} 
	}
}
