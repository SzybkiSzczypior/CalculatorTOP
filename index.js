document.addEventListener("DOMContentLoaded", () => {
    let container = document.createElement("div");
    let display = document.createElement("div");
    //may prove useful
    //let buttonOperator = document.createElement("div");
    let table = document.createElement("div");
    let button;
    let tableRow;

    let displayInput = document.createElement("input");

    displayInput.id = "displayInput";



    display.appendChild(displayInput);

    container.id = "container";
    display.id = "display";
    table.id = "table";

    document.body.appendChild(container);
    container.appendChild(display);
    container.appendChild(table);

    for (let index = 1; index < 10; index++) {
        if (index % 3 === 1) { // Trigger every third iteration
            // Create a new table row every third iteration
            tableRow = document.createElement("div");
            tableRow.id = `tableRow${Math.ceil(index / 3)}`;
            tableRow.classList = "tableRow";
            table.appendChild(tableRow);
        }

        button = document.createElement("div");
        button.classList = "digit";
        button.id = `button${index}`;
        button.innerHTML = `${index}`;

        // Append button to the last created table row
        let lastTableRow = table.lastChild;
        if (lastTableRow === null) {
            // If there is no table row yet, create one
            tableRow = document.createElement("div");
            tableRow.id = `tableRow${Math.ceil(index / 3)}`;
            tableRow.classList = "tableRow";
            table.appendChild(tableRow);
            lastTableRow = tableRow;
        }

        lastTableRow.appendChild(button);
    }
     tableRow = document.createElement("div")
     tableRow.id = "tableRow4";
     tableRow.classList= "tableRow";
     tableRow.innerHTML = `<div class="digit">=</div>
     <div class="digit">+</div>
     <div class="digit">-</div>
     <div class="digit">*</div>
     <div class="digit">/</div>`
     table.appendChild(tableRow);
    
});
