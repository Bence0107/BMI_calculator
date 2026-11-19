import { test } from "vitest";
import { describe } from "vitest";
import { getBMR } from "./bmr";
import { expect } from "vitest";

describe("getBMR függvény tesztelése", () => {

    test("20 éves, 170c magas, 70 kg-os férfi BMR értéke", () => {
        const result = getBMR(70, 170, 20, "M");
        expect(result).toBe(1668);
    });

    test("18 éves, 180 cm magas, 60 kg-os férfi BMR értéke", () => {
        const result = getBMR(60, 180, 18, "M");
        expect(result).toBe(1640);
    });

    test("22 éves, 165 cm magas, 55 kg-os nő BMR értéke", () => {
        const result = getBMR(55, 165, 22, "F");
        expect(result).toBe(1310);
    });

    test("30 éves, 170 cm magas, 60 kg-os nő BMR értéke", () => {
        const result = getBMR(60, 170, 30, "F");
        expect(result).toBe(1352);
    });

});

describe("bemeneti adatok ellenőrzése", () => {

    test("érvénytelen magasság esetén hibát dob", () => {
        expect(() => {getBMR(70, 1700, 20, "M")}).toThrow();
    })

    test("érvénytelen súly esetén hibát dob", () => {
        expect(() => {getBMR(700, 170, 20, "M")}).toThrow();
    });

    test("érvénytelen életkor esetén hibát dob", () => {
        expect(() => {getBMR(70, 170, 17, "M")}).toThrow();
    });

    test("érvénytelen életkor esetén hibát dob", () => {
        expect(() => {getBMR(70, 170, 121, "M")}).toThrow();
    });

    test("érvénytelen nem esetén hibát dob", () => {
        expect(() => {getBMR(70, 170, 20, "isdhf")}).toThrow();
    });

    test("érvénytelen nem esetén hibát dob", () => {
        expect(() => {getBMR(70, 170, 20, 1)}).toThrow();
    });

    test("nem szám esetén hibát kell dobjon", () => {
        expect(() => {getBMR("70", 170, 20, "M")}).toThrow();
    });

    test("null esetén (súly) hibát kell dobjon", () => {
        expect(() => {getBMR(null, 170, 20, "M")}).toThrow();
    });

    test("nem megfelelő string esetén hibát kell dobjon", () => {
        expect(() => {getBMR(70, 170, 20, "g")}).toThrow();
    });

});