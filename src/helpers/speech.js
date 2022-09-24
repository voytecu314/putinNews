const speech = (data, rand50) => {
    let speech = new SpeechSynthesisUtterance();
        speech.lang = "en-US";
        speech.text = data.results && data.results.articles[rand50].content+"To read the whole article please click on the link below."
        speech.volume = 1;
        speech.rate = .9;
        speech.pitch = .9;
        window.speechSynthesis.speak(speech);
}

export default speech;
