const container = document.querySelector('#container');

    const p = document.createElement("p");
        p.textContent = "Hey I´m Red!";
        p.style.color = "#d40614";

    const h3 = document.createElement("h3");
        h3.textContent ="I´m a blue h3!";
        h3.style.color = "#0a06d4";

    const div = document.createElement("div");
        const h1 = document.createElement("h1");
        const pDiv = document.createElement("p");
            h1.textContent = "I´m in a div";
            pDiv.textContent = "ME TOO!"
            div.style.cssText = "border: #000000; backgroundColor: #ceb2d9";
        div.appendChild(h1).appendChild(pDiv);

container.appendChild(p).appendChild(h3).appendChild(div);

