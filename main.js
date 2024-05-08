Webcam.set({
width:250,height:150, image_format:"png", image_quality:99  
})
Webcam.attach("#don")
function meh (){
    Webcam.snap(function(data_uri) { document.getElementById("mr").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>'; });    
}
console.log("ml5");
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/vZtps2k53/model.json",mkl);
function mkl(){
    console.log("lol");
}
function lol(){
var burp=document.getElementById("selfie_image");
classifier.classify(burp ,mama)
}
function mama(){

}