status = "";
objects = [];

var SR = window.webkitSpeechRecognition;
var r = new SR();

function preload() {}

function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
}

function start() {
  status = true;

  document.getElementById("status").innerHTML = "Status: Detecting objects";
  object_Detector = ml5.objectDetector("cocossd", function () {
    console.log("Model loaded");
  });
}

function draw() {
  image(video, 0, 0, 640, 420);
  // console.log(status);
  // if (status != "") {
  //   object_Detector.detect(video, function (error, results) {
  //     if (error) {
  //       console.error(error);
  //     } else {
  //       console.log(results);
  //       objects = results;
  //     }
  //   });
  //   document.getElementById("status").innerHTML = "Status: Objects detected";
  //   for (i = 0; i < objects.length; i++) {
  //     objectFind = document.getElementById("object").value;

  //     if (objectFind == objects[i].label) {
  //       document.getElementById("no_of_objects").innerHTML = speak_data =
  //         objectFind + " found!";
  //       var synth = window.speechSynthesis;
  //       speak_data = objectFind + " found!";
  //       utterThis = new SpeechSynthesisUtterance(speak_data);
  //       synth.speak(utterThis);
  //       image(video, 0, 0, 0, 0);
  //     }

  //     document.getElementById("no_of_objects").innerHTML = percent = floor(
  //       objects[i].confidence * 100
  //     );
  //     fill("#FF0000");
  //     text(
  //       objects[i].label + " " + percent + "%",
  //       objects[i].x + 15,
  //       objects[i].y + 15
  //     );
  //     noFill();
  //     stroke("#FF0000");
  //     rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
  //   }
  // }
}
