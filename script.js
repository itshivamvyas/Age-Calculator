const userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];

const button = document.querySelector(".btn")

const result = document.getElementById("result")

button.addEventListener("click", () => {
    if (userInput.value) {
        const birthDate = new Date(userInput.value);

        const d1 = birthDate.getDate();
        const m1 = birthDate.getMonth() + 1;
        const y1 = birthDate.getFullYear();

        const todayDate = new Date();

        const d2 = todayDate.getDate();
        const m2 = todayDate.getMonth() + 1;
        const y2 = todayDate.getFullYear();

        let d3, m3, y3;

        y3 = y2 - y1;

        if (m2 >= m1) {
            m3 = m2 - m1;
        } else {
            y3--;
            m3 = 12 + m2 - m1;
        }

        if (d2 >= d1) {
            d3 = d2 - d1;
        } else {
            m3--;
            d3 = getDaysInMonths(y1, m1) + d2 - d1;
        }

        if (m3 < 0) {
            m3 = 11;
            y3--;
        }

        result.innerHTML = `You Are <span>${y3}</span> Years, <span>${m3}</span> Month And <span>${d3}</span> Days Old.`
    }
})

function getDaysInMonths(year, month) {
    return new Date(year, month, 0).getDate();
}