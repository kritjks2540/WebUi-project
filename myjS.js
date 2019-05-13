function checkLogin(){
	var id = document.getElementById("Email").value;
	var pass = document.getElementById("Password").value;
	if(id == "admin@nw.com" && pass=="12345**"){
		alert ("Login successfully");
		window.location = "dashboard.html"; // Redirecting to other page.
	}else{
		alert("Error !! Pls Check Username and Password");
	}
}
