const disp = document.getElementById("w1");
const inputArea = document.getElementById("para");
const btn = document.getElementById("btn");
const delayControl = document.getElementById("speed");

btn.addEventListener("click", startReader);

async function startReader() {
  let text = inputArea.value;
  if (!text.trim()) {
    alert("Please enter some text first.");
    return;
  }
  inputArea.hidden=true
  btn.hidden=true
  delayControl.hidden = true;

  await readWords(text);

  inputArea.hidden=false
  btn.hidden=false
  delayControl.hidden = false;

}

function parseWord(word) {
  mid = Math.floor(word.length / 2);
  if (word.length === 0) return "";
  if (word.length === 1) return `<span id="span">${word}</span>`;
  let outStr =
    word.slice(0, mid) +
    `<span id="focus">${word[mid]}</span>` +
    word.slice(mid + 1);

  return outStr;
}

async function readWords(str) {
  let words = str.split(/\s+/);
  console.log(words);

  for (let i of words) {
    disp.innerHTML = parseWord(i);
    
    let speed = parseInt(delayControl.value);
     if (i.endsWith(".") || i.endsWith(",") || i.endsWith("?") || i.endsWith("!")) {
      speed += 150; 
    }

    await sleep(speed);
  }
    disp.innerHTML = `d<span id="focus">o</span>ne`;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
