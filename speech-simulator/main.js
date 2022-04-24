const synth = window.speechSynthesis;
document.querySelector('#startSpeaking').addEventListener('click', speakAloud);

function speakAloud() {
	const message = document.querySelector('#wordsToSpeak').value;
	const textToYell = `${message}`;
	document.getElementById("speechOutput").innerText = textToYell;
	let yellThis = new SpeechSynthesisUtterance(textToYell);
	synth.speak(yellThis);
}

