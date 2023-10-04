const audioCtx = new AudioContext();

var oscillator1;
var oscillator2;
var oscillator3;

const checkbox1 = document.getElementById("checkbox1");
const number1 = document.getElementById("number1");
const checkbox2 = document.getElementById("checkbox2");
const number2 = document.getElementById("number2");
const checkbox3 = document.getElementById("checkbox3");
const number3 = document.getElementById("number3");

checkbox1.addEventListener("change", function(e) {
    if (e.target.checked) {
        oscillator1 = audioCtx.createOscillator();
        oscillator1.frequency.value = number1.value;
        oscillator1.connect(audioCtx.destination);
        oscillator1.start();
    } else {
        if (oscillator1 != null) {
            oscillator1.stop();
            oscillator1 = null;
        }
    }
})

number1.addEventListener("change", function(e) {
    if (oscillator1 != null) {
        oscillator1.frequency.value = e.target.value;
    }
})


checkbox2.addEventListener("change", function(e) {
    if (e.target.checked) {
        oscillator2 = audioCtx.createOscillator();
        oscillator2.frequency.value = number2.value;
        oscillator2.connect(audioCtx.destination);
        oscillator2.start();
    } else {
        if (oscillator2 != null) {
            oscillator2.stop();
            oscillator2 = null;
        }
    }
})

number2.addEventListener("change", function(e) {
    if (oscillator2 != null) {
        oscillator2.frequency.value = e.target.value;
    }
})

checkbox3.addEventListener("change", function(e) {
    if (e.target.checked) {
        oscillator3 = audioCtx.createOscillator();
        oscillator3.frequency.value = number3.value;
        oscillator3.connect(audioCtx.destination);
        oscillator3.start();
    } else {
        if (oscillator3 != null) {
            oscillator3.stop();
            oscillator3 = null;
        }
    }
})

number3.addEventListener("change", function(e) {
    if (oscillator3 != null) {
        oscillator3.frequency.value = e.target.value;
    }
})
