let id = 1;

function submitEventListener()
{
    const form = document.getElementById("form");
    form.addEventListener("submit", submitForm);
}

function toggleStrikeThrough(event)
{
    event.currentTarget.classList.toggle("done");
}

function submitForm(event)
{
    event.preventDefault();

    const data = new FormData(event.target);
    const input = [...data.entries()];

    if (input[0][1] !== "")
    {
        const list = document.getElementById("list");
        const node = document.createElement("p");
        node.setAttribute("id", id);
        node.setAttribute("class", "");
        node.appendChild(document.createTextNode(input[0][1]));
        list.appendChild(node);
        document.getElementById(id).addEventListener("click", toggleStrikeThrough);
        id++;
    }
    
}

document.addEventListener("DOMContentLoaded", submitEventListener);

