import { bmiRules } from "./rules";

export function getBMI(testsuly, magassagCM) {
    if (testsuly == "" || magassagCM == "" || testsuly <= 0 || magassagCM <= 0) {
        return "Hibás adatok!";
    }
    const magassagM = magassagCM / 100;
    const bmi = Math.round(testsuly / (magassagM * magassagM) * 10) / 10;
    return bmi;
}

export function getCateg(bmi) {
    return bmiRules.find(obj => obj.min <= bmi && obj.max >= bmi);
}