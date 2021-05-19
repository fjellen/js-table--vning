/*
    Hamtar alla element vi behover
*/
const tableBody = document.getElementById("tbody");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const button = document.getElementById("add");


/*
<tr>
    <td>Sebastian</td>
    <td>Karlsson</td>
    <td>ianertson@gmail.com</td>
</tr>*/
function whenClicked() {

    // skapar ett <tr> element
    const row = document.createElement("tr");

    // skapar ett <td> element
    const td1 = document.createElement("td");
    // lagger vi vardet fran <input>
    // firstname i td elementet
    td1.innerText = firstName.value;

    // skapar ett <td> element
    const td2 = document.createElement("td");
    // lagger vi vardet fran <input>
    // lastName i td elementet
    td2.innerText = lastName.value;

    // skapar ett <td> element
    const td3 = document.createElement("td");
    // lagger vi vardet fran <input>
    // email i td elementet
    td3.innerText = email.value;

    // Vi lagger in alla <td> vi skapat
    // inuti varan <tr> som vi skapat (table row)
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);

    // stoppar in varan <tr> vi skapat i varan
    // tabels <tbody>.
    tableBody.appendChild(row);
}

button.addEventListener("click", whenClicked);