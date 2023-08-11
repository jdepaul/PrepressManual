function openSection(event, sectionName) {
	//declaring variables
	var i, tabcontent, tablinks;
	
	//select elements with .tabcontent
	tabcontent = document.getElementsByClassName('tabcontent');
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	
	//get elements with .tablinks and remove active class
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	
	//show current tab by adding .active class
	document.getElementById(sectionName).style.display = "block";
	event.currentTarget.className += " active";
	
}