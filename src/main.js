import './style.css';
import { renderImages } from './render';
import { bmiRules } from './rules';

renderBmi(bmiRules);

window.szamitas = function szamitas() {
  const testsuly = document.getElementById("testsuly").value;
  const magassag = document.getElementById("magassag").value / 100;
  if (testsuly == "" || magassag == "" || testsuly <= 0 || magassag <= 0) {
    alert("Hiányos vagy hibás adat!");
    return;
  }
  const bmi = testsuly / (magassag * magassag);
  const bmi_eredmeny = Number(bmi.toFixed(1));
  const kategoriaEredmeny = bmiRules.find(obj => obj.min < bmi_eredmeny && obj.max > bmi_eredmeny);
  document.getElementById("eredmeny").className = "eredmeny";
  document.querySelector(".eredmeny").innerHTML = `
  <h3 class="font-bold">A BMI-értéked: ${bmi_eredmeny}</h3>
  <p>${kategoriaEredmeny.category}</p>
  <p>${kategoriaEredmeny.message}</p>
  `;
  document.getElementById("testsuly").value = "";
  document.getElementById("magassag").value = "";
  for (let index = 1; index <= bmiRules.length; index++) {
    document.getElementById(`${index}`).className = "card";
  }
  document.getElementById(`${kategoriaEredmeny.id}`).className = "card zold";
}