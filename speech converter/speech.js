let speech = new SpeechSynthesisUtterance();

let voices= [];
let speechVoices = document.querySelector('select');
window.speechSynthesis.onvoiceschanged = ()=>{
     voices = window.speechSynthesis.getVoices();
     console.log(voices);
     speech.voice = voices[0];
     voices.forEach((voice, i) =>(speechVoices.options[i] = new Option(voice.name,i)));
}
   speechVoices.addEventListener("change", ()=>{
    speech.voice = voices[speechVoices.value];
   });






document.querySelector('button').addEventListener("click", ()=>{
    speech.text = document.querySelector('textarea').value;
    window.speechSynthesis.speak(speech);
});