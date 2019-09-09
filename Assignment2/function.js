/*The first page of index.html*/
function myself() {
	var p= "<h1>Hello!</h1><p>I am an active and organized worker. I am also dedicated to my tasks. I have experience of working as a Front-end developer and attempting to have expert skills in UX/UI design. Besides, I am a keen learner. My multiple study background give me versatility and flexibility.</p> <footer><p>&copy; Malika Tasnim Taky</p></footer>";

	document.getElementById("para").innerHTML= p;
}
/*The second page of index.html*/
function interest() {
	var p= "<br><br><br><p>I am interested in UX/UI design, full-stack and software development. In the meantime of my studies, I would like to pursue the skills of UX/UI design and full-stack development. If I can get any internship based on those positions, that would be great! These skills are going to help to develop my softeare development skills. After graduation, I want to get a placement as a software engineer in a Software company.</p>  <footer><p>&copy; Malika Tasnim Taky</p></footer>";

	document.getElementById("para").innerHTML= p;
}
/*The third page of index.html*/
function hobby() {
	var p= "<br><br><br><p>My hobby is participating in Hackathons. For me, it is a great platform to build up my network, meet with new people, work with them, learn from them, meet with companies and their employers, work on challenges, code and most importantly visit a new place for free and have a lots of fun!</p>  <footer><p>&copy; Malika Tasnim Taky</p></footer>";

	document.getElementById("para").innerHTML= p;
}
/*Function for submitting data outside of form*/
function register() {
	document.getElementById("data").submit();
}

/* Calculating function of BMI from bonus feature*/
/*function calculate() {
	var weight, height, BMI;

	weight= Number(document.getElementById("wg").value);
	height= Number(document.getElementById("hg").value);
	BMI= weight/ (height * height);

	document.getElementById("bmi").value = BMI.toFixed(2);

	if (BMI <= 18){
		document.getElementById("pic").src = "https://i.pinimg.com/originals/9e/fc/35/9efc35bb04a4f8a88440446383bb819d.jpg";
		document.getElementById("pic2").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToAvJ5Xczdrl3F5iM_VjJkEJPVpnKUnZgI1KIjk49quhgYx65L";
		document.getElementById("msg").innerHTML = "You seems underweighted. To be healthy, you should eat healthy food and do exercise."
	}
	else if (18.5 <= BMI && BMI <= 24.9){
		document.getElementById("pic").src = "https://i.pinimg.com/originals/9e/fc/35/9efc35bb04a4f8a88440446383bb819d.jpg";
		document.getElementById("pic2").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToAvJ5Xczdrl3F5iM_VjJkEJPVpnKUnZgI1KIjk49quhgYx65L";
		document.getElementById("msg").innerHTML = "You are having a healthy body! To maintain it, you should eat healthy food and do exercise."
	}
	else if (25 <= BMI && BMI <= 29.9){
		document.getElementById("pic2").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToAvJ5Xczdrl3F5iM_VjJkEJPVpnKUnZgI1KIjk49quhgYx65L";
		document.getElementById("msg").innerHTML = "You seems overweighted. To be healthy, along with eating healthy food, you should do exercise regularly.";
	}
	else {
		document.getElementById("pic2").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToAvJ5Xczdrl3F5iM_VjJkEJPVpnKUnZgI1KIjk49quhgYx65L";
		document.getElementById("msg").innerHTML = "To reduce your obesity, you should do exercise regularly."
	}
}*/
