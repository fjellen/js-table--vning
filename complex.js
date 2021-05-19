const table = document.getElementById("table");
const button = document.getElementById("add");

const tableBody = (table) => table.querySelector("tbody");

/**
 * Smart function to set attribute of an element
 */
const setAttribute = (element, key, value) => { 
    element[key] = value;
    element.setAttribute(key, value);
}

/**
 * Smart function to more easily create elements
 */
const makeElement = (name, props) => {
    const element = document.createElement(name);
    Object.keys(props).forEach(key => setAttribute(element, key, props[key]));
    ('children' in props && props['children'] || []).forEach(child => element.appendChild(child))
    return element;
} 

// Creates a <td>
const createColumn = (value) => makeElement("td", { innerHTML: value });

// Creates a <tr>
const createRow = (data) => makeElement("tr", { children: Object.keys(data).map(key => createColumn(data[key])) });

// Adds a row to a table
const addRow = (table, data) => tableBody(table).appendChild(createRow(data));

// Fetch all form input values
const getFormValues = () => ({
    firstname: document.getElementById("firstname").value,
    lastname: document.getElementById("lastname").value,
    email: document.getElementById("email").value,
});

// clear all form input values
const clearFormValues = () => {
    document.getElementById("firstname").value = '';
    document.getElementById("lastname").value = '';
    document.getElementById("email").value = '';
}

// add event listener to button
button.addEventListener("click", () => addRow(table, getFormValues()) && clearFormValues())