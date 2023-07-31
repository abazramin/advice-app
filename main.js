let adciceText = document.getElementById("advice-text");
let adciceBox = document.getElementById("advice-box");
let adciceBtn = document.getElementById("generator-btn");
let url = "https://api.adviceslip.com/advice";


async function adciceTool() {
    let all = await fetch(url)
    let { slip: { id, advice } } = await all.json()
    adciceBox.innerHTML = id;
    adciceText.innerHTML = advice;
}
adciceTool();
