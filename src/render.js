export function renderImages(arr) {
    const cardString = arr.map(obj => `
        <div id="${obj.id}" class="card">
            <img src="./src/images/${obj.image}">
            <p class="text-green-700 font-bold">BMI: ${obj.min} - ${obj.max}</p>
            <h3 class="font-bold text-2xl">${obj.category}</h3>
            <p>${obj.message}</p>
        </div>
        `).join("");
    document.querySelector(".cards").innerHTML = cardString;
}