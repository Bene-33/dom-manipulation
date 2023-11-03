const container = document.querySelector('#container');

const p = document.createElement("p");
    p.textContent = "Hey I´m Red!";
    p.style.color = "#d40614";

const h3 = document.createElement("h3");
    h3.textContent ="I´m a blue h3!";
    h3.style.color = "#0a06d4";

container.appendChild(p).appendChild(h3);
