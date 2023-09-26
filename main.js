coordinadesX = 0;
coordinadesY = 0;
coordinadesX2 = 0;
coordinadesY2 = 0;

function preload() {
  narizVerde = loadImage("Nariz-removebg-preview.png");
  indoAli = loadImage("indo_ali-removebg.png");
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    console.log("nose x = " + results[0].pose.nose.x);
    console.log("nose y = " + results[0].pose.nose.y);
    coordinadesX = results[0].pose.nose.x;
    coordinadesY = results[0].pose.nose.y;
    console.log("rightShoulder x = " + results[0].pose.rightShoulder.x);
    console.log("rightShoulder y = " + results[0].pose.rightShoulder.y);
    coordinadesX2 = results[0].pose.rightShoulder.x;
    coordinadesY2 = results[0].pose.rightShoulder.y;
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(narizVerde, coordinadesX - 30, coordinadesY - 30, 60, 60);
  image(indoAli, coordinadesX2 - 15, coordinadesY2 - 80, 60, 60);
}

function take_snapshot(){    
  save('myFilterImage.png');
}
