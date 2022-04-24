const synth = window.speechSynthesis;
document.querySelector('#speak').addEventListener('click', speak);

function speak() {
	const message = document.querySelector('#message').value;
	const textToYell = `${message}`;
	document.getElementById("speechOutput").innerText = textToYell;
	let yellThis = new SpeechSynthesisUtterance(textToYell);
	synth.speak(yellThis);
}

