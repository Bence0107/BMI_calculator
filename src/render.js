export function renderBmi(arr) {
    const cardString = arr.map(obj => `
        <div class="card">
            <img src="src/bmi_calc/${obj.image}">
            <p>BMI: ${obj.min} - ${obj.max}</p>
            <h3>${obj.category}</h3>
            <p>${obj.message}</p>
        </div>
    `).join();

    document.querySelector('.bmi').innerHTML = cardString;
}