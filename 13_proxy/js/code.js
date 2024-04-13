
function example() {
    let out = "";

    const money = { owner: "Juan", balance: 10000 };

    // Handler is required
    const handler = {
        get(target, property) {
            out += `<h1>1 -Proxy called: ${property}</h1>`;
            return target.owner;
        },
        set(target, property, value) {
            if (property === "owner") {
                out += `<h1>3- Proxy private: ${property}</h1>`;
            }
            else if (property === "balance") {
                out += `<h1>4- Proxy edited: ${property}</h1>`;
                target.balance = value;
            }
        }
    };
    const proxy = new Proxy(money, handler);
    let owner = proxy.owner;
    // let balance = proxy.balance;

    out += `<h1>2 - Owner name: ${owner}</h1>`;

    // Extra get / set
    proxy.owner = "Maria";
    out += `<h1>Owner name: ${proxy.owner}</h1>`;
    
    document.getElementById("root").innerHTML = out;
}

window.addEventListener("load", example);