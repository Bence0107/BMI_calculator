import { describe } from "vitest";
import { expect } from "vitest";
import { test } from "vitest";
import { getCateg } from "./utils";

test('egyszeru teszt', () => {
    expect(2 + 3).toBe(5)
})

describe("getCateg fgv teszt", () => {
    test('Normál testsúly esetén megfelelő kategóriát ad vissza', () => {
        const result = getCateg(172, 60)
        console.log(result);
        expect(result.category).toBe("Normál testsúly")
    })
    test('Alultáplált testsúly esetén megfelelő kategóriát ad vissza', () => {
        const result = getCateg(172, 40)
        console.log(result);
        expect(result.category).toBe("Alultáplált")
    })
    test('Túlsúlyos testsúly esetén megfelelő kategóriát ad vissza', () => {
        const result = getCateg(172, 100)
        console.log(result);
        expect(result.category).toBe("Elhízás I. fokozat")
    })
    test('A visszaadott érték egy objektuma', () => {
        const result = getCateg(172, 60)
        expect(result).toBeTypeOf('object')
    })
    test('A visszaadott objectumnak van tartalmazza a bmi értékét', () => {
        const result = getCateg(172, 60)
        expect(result).toHaveProperty("bmi")
    })
    test('a bmi értéke kerekítve van', () => {
        const result = getCateg(172, 60)//20.28
        expect(result.bmi).toBe(20.3)
    })
})

describe('A bemeneti értékek tesztelése', () => {
    test('ha a magasság nem szám hibát dob', () => {
        expect(() => getCateg('172', 60)).toThrow()
    })
    test('ha a testsúly nem szám hibát dob', () => {
        expect(() => getCateg(172, '60')).toThrow()
    })
    test('ha a magasság 0 hibát dob', () => {
        expect(() => getCateg(0, 60)).toThrow()
    })
    test('ha a magasság negatív hibát dob', () => {
        expect(() => getCateg(-172, 60)).toThrow()
    })
})
