var sum = 100;
var income = 100;
var expense = 0;

function balance_updater(sum) {
    let bal = document.querySelector("#bal");
    bal.textContent = sum;
    if (sum < 0) {
        bal.style.color = "red";
    } else {
        bal.style.color = "black";
    }
}

function polupdater(value) {
    if (value > 0) {
        let incomeElem = document.getElementById("income");
        income += value;
        incomeElem.textContent = income;
    } else {
        let expenseElem = document.getElementById("expense");
        expense += value;
        expenseElem.textContent = expense;
    }
}

function polupdaterRemove(value) {
    if (value < 0) {
        let incomeElem = document.getElementById("income");
        income += value;
        incomeElem.textContent = income;
    } else {
        let expenseElem = document.getElementById("expense");
        expense += value;
        expenseElem.textContent = expense;
    }
}

let add_btn = document.getElementById("add_btn");
add_btn.addEventListener("click", addTransaction);

function addTransaction(e) {
    let newList = document.createElement("li");
    newList.className = "listItem";
    let inputName = document.getElementById("expenceName");
    let inputAmt = document.getElementById("expenceAmt");
    let text = inputName.value;
    let amt = inputAmt.value;
    sum += Number(amt);
    let v = Number(amt);
    balance_updater(sum);
    polupdater(v);
    newList.innerHTML = `<h3>${text}</h3>
                         <p>${amt}</p>
                         <button id="rmvbtn" onclick="removeBtn(this)">Remove</button>`;
    let parentList = document.getElementById("parentList");
    parentList.appendChild(newList);

    // Clear input fields after adding item
    inputName.value = "";
    inputAmt.value = "";
}

function removeBtn(currElement) {
    let s = currElement.parentElement.children[1].textContent;
    let decrease = -1 * Number(s);
    sum += decrease;
    balance_updater(sum);
    polupdaterRemove(decrease);
    currElement.parentElement.remove();
}
