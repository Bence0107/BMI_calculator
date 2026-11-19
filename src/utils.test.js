import { describe } from "vitest";
import { expect } from "vitest";
import { test } from "vitest";
import { getBMI } from "./utils";
import { getCateg } from "./utils";

describe("getBMI függvény tesztelése", () => {

    test("ha a testsúly üres hibát dob", () => {
        const result = getBMI("", 172);
        expect(result).toBe("Hibás adatok!")
    });

    test("ha a magasság üres hibát dob", () => {
        const result = getBMI(68, "");
        expect(result).toBe("Hibás adatok!")
    });

    test("ha a testsúly nulla hibát dob", () => {
        const result = getBMI(0, 172);
        expect(result).toBe("Hibás adatok!")
    });

    test("ha a magasság nulla hibát dob", () => {
        const result = getBMI(68, 0);
        expect(result).toBe("Hibás adatok!")
    });

    test("ha a testsúly negatív hibát dob", () => {
        const result = getBMI(-68, 172);
        expect(result).toBe("Hibás adatok!")
    });

    test("ha a magasság negatív hibát dob", () => {
        const result = getBMI(68, -172);
        expect(result).toBe("Hibás adatok!")
    });

    test("ha minden jó helyes számítás", () => {
        const result = getBMI(68, 172);
        expect(result).toBe(23)
    });

});

describe("getCateg függvény tesztelése", () => {

    test("alultáplált esetén megfelelő kategóriát ad vissza", () =>{
        const result = getCateg(15);
        expect(result.category).toBe("Alultáplált");
    });

    test("normál testsúly esetén megfelelő kategóriát ad vissza", () =>{
        const result = getCateg(20);
        expect(result.category).toBe("Normál testsúly");
    });

    test("túlsúlyos esetén megfelelő kategóriát ad vissza", () =>{
        const result = getCateg(29);
        expect(result.category).toBe("Túlsúlyos");
    });

    test("Elhízás I. fokozat esetén megfelelő kategóriát ad vissza", () =>{
        const result = getCateg(33);
        expect(result.category).toBe("Elhízás I. fokozat");
    });

    test("Elhízás II. fokozat esetén megfelelő kategóriát ad vissza", () =>{
        const result = getCateg(36);
        expect(result.category).toBe("Elhízás II. fokozat");
    });

    test("Elhízás III. fokozat esetén megfelelő kategóriát ad vissza", () =>{
        const result = getCateg(45);
        expect(result.category).toBe("Elhízás III. fokozat");
    });

});