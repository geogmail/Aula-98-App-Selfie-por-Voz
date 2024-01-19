var SpeechRecognition= window.webkitSpeechRecognition
var recognition= new SpeechRecognition()
var textbox= document.getElementById("textbox")
function start(){
    textbox.innerHTML= ""
    recognition.start()
}