export function getBMR(suly, magassag, eletkor, nem) {
    if (typeof magassag != "number" || !Number(magassag) || magassag < 90 || magassag > 250) {
        throw new Error("Érvénytelen magasság! (90 - 250 cm)");
    }
    if (typeof suly != "number" || !Number(suly) || suly < 20 || suly > 400) {
        throw new Error("Érvénytelen súly! (20 - 400 kg)");
    }
    if (typeof eletkor != "number" || !Number(eletkor) || eletkor < 18 || eletkor > 120) {
        throw new Error("Érvénytelen kor! (18 - 120 év)");
    }
    if (["F", "M"].indexOf(nem) == -1) {
        throw new Error("Érvénytelen nem! (Male vagy Female)");
    }

    let bmr;
    if (nem == "M") {
        bmr = (10 * suly) + (6.25 * magassag) - (5 * eletkor) + 5;
    }
    else {
        bmr = (10 * suly) + (6.25 * magassag) - (5 * eletkor) - 161;
    }
    return Math.round(bmr);
}