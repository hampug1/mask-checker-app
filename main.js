function setup(){
    canvas = createCanvas(300, 300); 
    canvas.position(470,370);
    video = createCapture(VIDEO)
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/y1c2slq4W/model.json',modelLoaded);
}

function modelLoaded(){
    console.log("model loaded");
}

function draw(){
    image(video, 0, 0, 300, 300);

    classifier.classify(video, gotResults)
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results)
        document.getElementById("object").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence;
    }
}