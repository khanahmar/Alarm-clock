const hourSelect = document.getElementById("hourSelect");
const minSelect = document.getElementById("minSelect");
const secSelect = document.getElementById("secSelect");
const apmpSel = document.getElementById("apmpSel");
const button = document.getElementById("button");
const selectEl = document.getElementsByTagName("select");
const h1 = document.getElementById("h1");

console.log(hourSelect);

for (let i = 1; i <= 12; i++) {
  const optionEl = document.createElement("option");
  optionEl.innerText = i;
  hourSelect.appendChild(optionEl);
}

for (let i = 1; i <= 60; i++) {
  const optionEl = document.createElement("option");
  optionEl.innerText = i;
  minSelect.appendChild(optionEl);
}

for (let i = 1; i <= 60; i++) {
  const optionEl = document.createElement("option");
  optionEl.innerText = i;
  secSelect.appendChild(optionEl);
}

setInterval(() => {
  h = new Date().getHours();
  m = new Date().getMinutes();
  s = new Date().getSeconds();
  ampm = "am";

  if (h > 12) {
    h = h - 12;
    ampm = "pm";
  }

  h = h == 0 ? (h = 12) : h;

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  h1.innerText = `${h} : ${m} : ${s} ${ampm}`;
}, 1000);

button.addEventListener("click", () => setAlarm());

function setAlarm() {
  console.log(selectEl[0].value);
}
