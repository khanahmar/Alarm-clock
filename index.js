const hourSelect = document.getElementById("hourSelect");
const minSelect = document.getElementById("minSelect");
const secSelect = document.getElementById("secSelect");
const apmpSel = document.getElementById("apmpSel");
const button = document.getElementById("button");
const selectEl = document.getElementsByTagName("select");
const h1 = document.getElementById("h1");
let time;
for (let i = 1; i <= 12; i++) {
  const optionEl = document.createElement("option");
  optionEl.innerText = i < 10 ? "0" + i : i;
  hourSelect.appendChild(optionEl);
}

for (let i = 1; i <= 60; i++) {
  const optionEl = document.createElement("option");
  optionEl.innerText = i < 10 ? "0" + i : i;
  minSelect.appendChild(optionEl);
}

for (let i = 1; i <= 60; i++) {
  const optionEl = document.createElement("option");
  optionEl.innerText = i < 10 ? "0" + i : i;
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

  if (time == h1.innerText) {
    console.log("ringing");
  }
}, 1000);

button.addEventListener("click", () => setAlarm());

function setAlarm() {
  time = `${selectEl[0].value} : ${selectEl[1].value} : ${selectEl[2].value} ${selectEl[3].value}`;
  if (
    time.includes("Hour") ||
    time.includes("Minutes") ||
    time.includes("Second")
  ) {
    return alert("invalid time selected");
  } else {
    minSelect.classList.add("disable");
    hourSelect.classList.add("disable");
    secSelect.classList.add("disable");
    apmpSel.classList.add("disable");
  }
}
