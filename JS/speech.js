// let synth=window.speechSynthesis;
let speech=new SpeechSynthesisUtterance();
let voices=[];
let voiceSelect=document.getElementById("voice-selector");
window.speechSynthesis.onvoiceschanged= () =>{
    voices=window.speechSynthesis.getVoices();
    speech.voice=voices[0];
    speech.pitch=1;
    speech.rate=1;
    voices.forEach((voice, i) => (voiceSelect.options[i]=new Option(voice.name, i)))
};
voiceSelect.addEventListener("change", ()=>{
speech.voice=voices[voiceSelect.value]
})
document.getElementById("speakbtn").addEventListener("click", ()=>{
    speech.text = document.getElementById("textbox").value;
    // voice.voice = sounds[7];
    window.speechSynthesis.speak(speech);
});

