import './style.css';
import { renderCategories } from './render';
import { bmiRules } from './rules';
import { getBMI, getCateg } from './utils';

renderCategories(bmiRules);

window.szamitas = function szamitas() {
  const testsuly = document.getElementById("testsuly").value;
  const magassagCM = document.getElementById("magassag").value;
  const bmi = getBMI(testsuly, magassagCM);
  for (let index = 1; index <= bmiRules.length; index++) document.getElementById(`${index}`).className = "card";
  if (bmi === "Hibás adatok!") {
    document.getElementById("eredmeny").className = "eredmeny hiba";
    document.querySelector(".eredmeny").innerHTML = `<h3 class="font-bold">Nem megfelelő vagy hibás adatot adtál meg!</h3>`;
  }
  else {
    const categ = getCateg(bmi);
    document.getElementById("eredmeny").className = "eredmeny";
    document.querySelector(".eredmeny").innerHTML = `
    <h3 class="font-bold">A BMI-értéked: ${bmi}</h3>
    <p>${categ.category}</p>
    <p>${categ.message}</p>
    `;
    document.getElementById(`${categ.id}`).className = "card zold";
  }
  document.getElementById("testsuly").value = "";
  document.getElementById("magassag").value = "";
}