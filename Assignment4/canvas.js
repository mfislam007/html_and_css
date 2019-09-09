function drop_down(selectObj) {
  var value = selectObj.value;

  if (value == 1) {
    draw_circle();
  }
  else if (value == 2) {
    draw_line();
  }
  else if (value == 3) {
    linear_gradient();
  }
  else if (value == 4) {
    radial_gradient();
  }
  else if (value == 5) {
    image();
  }
  else {
    clear_canvas();
  }
}

function draw_line() {
  var canvas = document.getElementById("drawing_area");
  var context = canvas.getContext("2d");

  var x=Math.random() * canvas.width;
  var y=Math.random() * canvas.height;
  var x1=Math.random() * canvas.width
  var y1=Math.random() * canvas.height;
//Here we draw non-filled rectangles
  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(x1, y1);
  context.lineWidth = "1";
   //Here we call getRandomColor() function to get a random color
  context.strokeStyle = getRandomColor();
  context.stroke();
}



function draw_circle() {
	 var canvas = document.getElementById("drawing_area");
		var context = canvas.getContext("2d");

		var rx=canvas.width/2, ry=canvas.height/2;

		var r=Math.random() * (canvas.width/4);

		//Here we draw an arc clockwise 
		context.beginPath();
		//Here we draw an arc clockwise 
		context.arc(rx,ry,r, 0, 2*Math.PI,true);
		//context.strokeStyle="#FF0000";
		//Here we call getRandomColor() to get a random color 
		context.strokeStyle=getRandomColor();
		context.lineWidth='2';
		context.stroke();
		} 


function linear_gradient() {
  var canvas = document.getElementById("drawing_area");
  var context = canvas.getContext("2d");
//Here we call getRandomColor() to get a random color
  var color1 = getRandomColor();
  var color2 = getRandomColor();
  var color3 = getRandomColor();
//Define the position randomly
  var a = Math.random() * (canvas.height/8);
  var b = Math.random() * (canvas.width/6);
  var c = Math.random() * (canvas.height);
  var d = Math.random() * (canvas.width);
// Create gradient
  var lgradient = context.createLinearGradient(0, 0, 200, 0);
//set colors
  lgradient.addColorStop(0, color1);
  lgradient.addColorStop(0.5, color2);
  lgradient.addColorStop(1, color3);

// Fill with gradient
  context.fillStyle = lgradient;
  context.fillRect(a, b, c, d);
}


function radial_gradient() {
  var canvas = document.getElementById("drawing_area");
  var context = canvas.getContext("2d");
  //Here we call getRandomColor() to get a random color
    var color1 = getRandomColor();
    var color2 = getRandomColor();
    var color3 = getRandomColor();
  //Define the position randomly
    var a = Math.random() * (canvas.height/4);
    var b = Math.random() * (canvas.width/4);
    var c = Math.random() * (canvas.height);
    var d = Math.random() * (canvas.width/2);
  // Create gradient
    var rgradient = context.createRadialGradient(75, 50, 5, 90, 60, 100);
  //set colors
    rgradient.addColorStop(0, color1);
    rgradient.addColorStop(0.5, color2);
    rgradient.addColorStop(1, color3);

  // Fill with gradient
    context.fillStyle = rgradient;
    context.fillRect(a, b, c, d);
}


function image() {
	 var c = document.getElementById("drawing_area");
	  var ctx = c.getContext("2d");
	  var img = document.getElementById("scream");
	  ctx.drawImage(img,10,10,200,100);
	}




//This function is used to clear the canvas
function clear_canvas() {
  var canvas = document.getElementById("drawing_area");
  var context = canvas.getContext("2d");

    context.clearRect(0, 0, canvas.width, canvas.height);
}

//This function is used to generate random colors
function getRandomColor() {
	var digits = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0;
		i < 6;
		i++) {     color += digits[Math.floor(Math.random() * 16)];
		  }   return color;
		}
