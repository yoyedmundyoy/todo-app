let id = 1;

function submitEventListener()
{
    const form = document.getElementById("form");
    form.addEventListener("submit", submitForm);
}

function toggleStrikeThrough(event)
{
    const checkbox = event.currentTarget;
    const textElement = checkbox.nextElementSibling;

    textElement.classList.toggle("done");
}

function deleteEntry(event)
{
    event.currentTarget.parentNode.remove();
}

function submitForm(event)
{
    event.preventDefault();

    const data = new FormData(event.target);
    const input = [...data.entries()];

    if (input[0][1] !== "")
    {
        const list = document.getElementById("list");

        // Create container
        const container = document.createElement("div");

        // Create checkbox element
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `checkbox-${id}`;
        checkbox.addEventListener("change", toggleStrikeThrough);

        // Create label element for checkbox
        const label = document.createElement("label");
        label.setAttribute("for", `checkbox-${id}`);
        label.textContent = input[0][1];
    
        const remove = document.createElement("button");
        remove.textContent = "x";
        remove.addEventListener("click", deleteEntry);

        container.appendChild(checkbox);
        container.appendChild(label);
        container.appendChild(remove);
        list.appendChild(container);

        // Increment id value
        id++;
    }
    
}

document.addEventListener("DOMContentLoaded", submitEventListener);

