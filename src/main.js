import './style.css';

window.szamitas = function szamitas() {
  const testsuly = document.getElementById("testsuly").value;
  const magassag = document.getElementById("magassag").value / 100;
  const bmi_eredmeny = Number(testsuly / magassag.toFixed(1));
}