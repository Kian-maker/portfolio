var SpeechRecognition =  window.webkitSpeechRecognition

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function run (event) {

    console.log(event)

    var Content = event.result[0][0].transcript;

    console.log(Content)

    document.getElementById("textbox").innerHTML = Content;

}

recognition.onresult= function(event) {
    console.log(event); 
var Content = event.results[0][0].transcript;
Textbox.innerHTML = Content;
    console.log(Content);
      if(Content =="take my selfie")
      {
        console.log("taking selfie --- ");
        speak();
      }
}

function speak(){
    var synth = window.speechSynthesis;

    speak_data = "Taking you Selfie in 5 seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);

    setTimeout(function()
    { 
        take_selfie(); 
        save();
    }, 5000);
}

 
camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90
});

function take_selfie()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}


function save()
{
  link = document.getElementById("link");
  image = document.getElementById("selfie_image").src ;
  link.href = image;
  link.click();
}

var person = { person1 :{firstName: "John",
                          lastName: "Doe",
                          age: 50,
                          eyeColor: "blue"},
              person2 :{firstName: "John",
                          lastName: "Doe",
                          age: 50,
                          eyeColor: "blue"},
              person3 :{firstName: "John",
                          lastName: "Doe",
                          age: 50,
                          eyeColor: "blue"},
};

console.log(person.person1.firstName);
console.log(person.person1.eyeColor);

Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
  });
  Webcam.attach( '#my_camera' );
  
  <script src="https://cdnjs.cloudflare.com/ajax/libs/webcamjs/1.0.26/webcam.js"></script>

  function take_snapshot()
  {

    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<id="selfie_image" src ="'+data_uri+'">';
    });
  }

  function speak(){
      var synth = window.speechSynthesis;

      speak_data = "Taking your selfie in 5 seconds";

      var utterThis = new SpeechSynthesisUtterance(speak_data)

      synth.speak(utterThis);
      Webcam.attach(camera);

      setTimeout(function()
      {
          take_snapshot();
          save();
      },5000);
  }

  function save()
  {
      link = document.getElementById("link");
      image = document.getElementById("selfie_image").src;
      link.href = image;
      link.click();
  }