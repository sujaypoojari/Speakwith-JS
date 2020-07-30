const sayit = (id) => {
  const input = document.getElementById(id).value;

  let speech = new SpeechSynthesisUtterance();

  speech.lang = "en-US";
  speech.text = input;
  speech.rate = 1;
  speech.pitch = 1;
  speech.volume = 2;

  window.speechSynthesis.speak(speech);
  console.log(input);
};
