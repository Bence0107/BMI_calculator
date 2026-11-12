import { bmiRules } from "./rules";

export function getCateg(height,weight){
     if (typeof height !== 'number' || typeof weight !== 'number') {
        throw new Error('A magasságnak és a súlynak számnak kell lennie!');
    }

    if (height <= 0 || weight <= 0) {
        throw new Error('A magasság és a súly csak pozitív szám lehet!');
    }
    const heightM=height/100
    const bmi = Math.round(weight / (heightM * heightM) * 10) / 10;
    const obj = bmiRules.find(rule => bmi >= rule.min && bmi < rule.max);
    return {...obj,bmi}
}


