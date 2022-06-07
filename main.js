//Create a reference for canvas 
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Give specific height and width to the car image
greencar_width =75;
greencar_height =100;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
greencar_x=5;
greencar_y= 100;
function add() {
	//upload car, and background images on the canvas.
	function add(){
		background_imgtag= new Image();
		background_imgtag.onload=uploadBackground;
		background_imgtag.src=background_image;


		greencar_imgtag= new Image();
		greencar_imgtag.onload=uploadgreencar;
		greencar_imgtag.src=background_image;

		
	}
}


	//Define function ‘uploadBackground’

	function uploadBackground(){
		ctx.drawImage(background_imgtag,0,0, canvas.width, canvas.height);
	}
	
	


	//Define function ‘uploadgreencar’.

	function uploadgreencar(){
		ctx.drawImage(greencar_imgtag,greencar_x,greencar_y,greencar_width,greencar_height);
	}


	



window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()

{
	//Define function to move the car upward
	if(greencar_y >=0){
		greencar_y=greencar_y-10;
		console.log("When up arrow is pressed, x="+greencar_x+"/y="+greencar_y);
		uploadBackground();
		uploadgreencar();

	}
	
}

function down(){
    if(greencar_y<=500){
        greencar_y=greencar_y+10;
        console.log("When down arrow is pressed"+greencar_x+"/ y"+greencar_y);
        uploadBackground();
        uploadgreencar();
    }
}

function left(){
    if(greencar_x>=0){
        greencar_x=greencar_x-10;
        console.log("When left arrow is pressed"+greencar_x+" /y"+greencar_y);
        uploadBackground();
        uploadgreencar();
    }
}

function right(){
    if(greencar_x<=700){
        greencar_x=greencar_x+10;
        console.log("When right arrow is pressed"+greencar_x+"/y"+greencar_y);
        uploadBackground();
        uploadgreencar();
    }
}