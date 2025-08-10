const bubbleMap = {
  a: "ⓐ", b: "ⓑ", c: "ⓒ", d: "ⓓ", e: "ⓔ", f: "ⓕ", g: "ⓖ", h: "ⓗ", i: "ⓘ", j: "ⓙ",
  k: "ⓚ", l: "ⓛ", m: "ⓜ", n: "ⓝ", o: "ⓞ", p: "ⓟ", q: "ⓠ", r: "ⓡ", s: "ⓢ", t: "ⓣ",
  u: "ⓤ", v: "ⓥ", w: "ⓦ", x: "ⓧ", y: "ⓨ", z: "ⓩ"
};

const smallCapsMap = {
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
  k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "s", t: "ᴛ",
  u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
};

const upsideMap = {
  a: "ɐ", b: "q", c: "ɔ", d: "p", e: "ǝ", f: "ɟ", g: "ƃ", h: "ɥ", i: "ᴉ", j: "ɾ",
  k: "ʞ", l: "l", m: "ɯ", n: "u", o: "o", p: "d", q: "b", r: "ɹ", s: "s", t: "ʇ",
  u: "n", v: "ʌ", w: "ʍ", x: "x", y: "ʎ", z: "z"
};

const zalgoUp = ["̍", "̎", "̄", "̅", "̿", "̑", "̆", "̐", "͒", "͗", "͑"];
    

const textInput = document.getElementById("textInput");
const selectStyle = document.getElementById("selectStyle");
const generateBtn = document.getElementById("generateBtn");
const result = document.getElementById("result");

generateBtn.addEventListener('click', () => {
  const text = textInput.value.trim();
  const style = selectStyle.value;

  if(text === ""){
    result.textContent = "Please enter some text!";
    return;
  }

  result.textContent = applyStyle(text, style);
})


function applyStyle(text, style){
  text = text.toLowerCase();
  if(style === "bubble"){
    return [...text].map((char) => bubbleMap[char] || char).join("");
  }
  else if(style === "smallcaps"){
    return [...text].map((char) => smallCapsMap[char] || char).join("");
  }
  else if(style === "upside"){
    return [...text].map((char) => upsideMap[char] || char).join("");
  }
  else if(style === "zanlgo"){
    return [...text].map((char) => char + zalgoUp[Math.floor(Math.random() * zalgoUp.length)]).join("");
  }
}





