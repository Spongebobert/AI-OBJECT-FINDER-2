
status1 = "";


function setup(){
    canvas = createCanvas(480,380);
    canvas.center()

    video = createCapture();
    video.hide()
}
function draw(){
    image(video,0,0,480,380)
}
function start(){
    object_detector = ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML = "Status: detecting objects"
    input = document.getElementById("input").value
}
 
function modelloaded(){
    console.log("model is loaded")
    status1 = true;
}