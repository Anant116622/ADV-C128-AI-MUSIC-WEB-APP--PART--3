
harryp = ""
peterp = ""
leftWristY = 0
leftWristX = 0
rightwristY = 0
rightwristX = 0


function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('poses', Gotposes);
}
function draw()
{
    image(video ,0 ,0 ,600 ,530);
}
function preload()
{
 harryp = loadSound("music.mp3");
 peterp = loadSound("music2.mp3");
}
function modelLoaded()
{
    console.log('PoseNet Is Initialized!');
}
function Gotposes(results)
{
     if(result.length > 0)
     {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;;
        console.log('leftWristX = ' + leftWristX + 'leftWristY = ' + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;;
        console.log('rightWristX = ' + rightWristX + 'rightWristY = ' + rightWristY);
     }
}


