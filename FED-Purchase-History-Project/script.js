// create object for product
function Item(Date, desc, price, category){
    this.Date = Date; // Date with camel case because date is a save word in the language
    this.desc = desc;
    this.price = parseFloat(price);
    this.category = category;
}

// check if there is any items in the local storage, if there is one this function will load it
async function load(){
    try{
        const exist = await (localStorage.getItem("ItemsList") !== null);
        if (exist) {
            itemArray = await JSON.parse(localStorage.getItem("ItemsList"));
            renderTODO(itemArray);
        }
    }catch(e){
        alert(`An Error was occurred while loading the data, error: ${e}`) ;
    }
}
load();

// update the items data table
function renderTODO(array) {
    let table = document.querySelector(".tablelist");
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }
    const row = document.createElement("tr");
    const dateCell = document.createElement("th");
    const descCell = document.createElement("th");
    const priceCell = document.createElement("th");
    const ctgCell = document.createElement("th");
    dateCell.append("Date");
    descCell.append("Description");
    priceCell.append("Price");
    ctgCell.append("Category");
    row.append(dateCell);
    row.append(descCell);
    row.append(priceCell);
    row.append(ctgCell);
    document.querySelector(".tablelist").append(row);
    array.forEach(function (item) {
        const Date = item.Date; // Date with camel case because date is a save word in the language
        const desc = item.desc;
        const price = item.price;
        const ctg = item.category;
        const row = document.createElement("tr");
        const dateCell = document.createElement("td");
        const descCell = document.createElement("td");
        const priceCell = document.createElement("td");
        const ctgCell = document.createElement("td");
        dateCell.append(Date);
        descCell.append(desc);
        priceCell.append(price);
        ctgCell.append(ctg);
        row.append(dateCell);
        row.append(descCell);
        row.append(priceCell);
        row.append(ctgCell);
        document.querySelector(".tablelist").append(row);
    })
}

let itemArray = [];
let filterArray = [];

// create button to add products to the table
const btnAdd = document.querySelector(".add");
btnAdd.addEventListener("click", function (e) {
    e.preventDefault();
    const dateVal = document.querySelector("#date");
    const desc = document.querySelector("#description");
    const price = document.querySelector("#price");
    const ctg = document.querySelector("#category");
    if (dateVal.value !== "" && desc.value !== "" && price.value !== "" && ctg.value !== ""){
        const item = new Item(dateVal.value, desc.value, price.value, ctg.value);
        itemArray.push(item);
        document.querySelector('form').reset();
        document.querySelector("#month").value = "";
        document.querySelector("#year").value = "";
        renderTODO(itemArray);
        alert("The Data Added Successfully");
    }
    else{
        if (dateVal.value === ""){
            alert("Please fill the Date value");
        }
        else if (desc.value === ""){
            alert("Please fill the Description value");
        }
        else if (price.value === ""){
            alert("Please fill the Price value");
        }
        else if (ctg.value === ""){
            alert("Please choose a Category value");
        }
    }
});

// clear all the fields in the form "add new item"
const btnClr = document.querySelector(".clear");
btnClr.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector('form').reset();
    document.querySelector("#month").value = "";
    document.querySelector("#year").value = "";
    renderTODO(itemArray);
});

// save all the items data to the local storage
const save = document.querySelector(".save");
save.addEventListener("click", async function (e) {
    try{
        await window.localStorage.setItem("ItemsList", JSON.stringify(itemArray));
        alert("The Data Saved Successfully");
    } catch(e){
      alert(`An Error was occurred while saving the data, error: ${e}`) ;
    }
})

// clear all the items data from the local storage
const reset = document.querySelector(".reset");
reset.addEventListener("click", async function (e) {
    try {
        const response = confirm("Are you sure you want to delete all items?");
        if (response) {
            e.preventDefault();
            await localStorage.clear();
            itemArray = [];
            document.querySelector("#month").value = "";
            document.querySelector("#year").value = "";
            document.querySelector('form').reset();
            renderTODO(itemArray);
            alert("The Data Cleared Successfully");
        } else {
            return;
        }
    }catch(e){
        alert(`An Error was occurred while clearing the data, error: ${e}`);
    }
});

// filter function to the items data by year and month
const filterBtn = document.querySelector(".filterbtn");
filterBtn.addEventListener("click", async function (e) {
    try{
        if (itemArray.length === 0)
        {
            alert("You don't have items to filter");
            return;
        }
        filterArray = [];
        const month = document.querySelector("#month").value;
        const year = document.querySelector("#year").value;
        if (month === "" || year === "") {
            if (month === "")
            {
                alert("Please fill the Month value");
            }
            else if (year === "")
            {
                alert("Please fill the Year value");
            }
        }
        else
        {
            itemArray.forEach((item) => {
                const itemDate = item.Date;
                const newDate = new Date(itemDate);
                if(newDate.getMonth() + 1 == month && newDate.getFullYear() == year)
                {
                    filterArray.push(item);
                }
            });
            renderTODO(filterArray);
        }
    }catch(e){
        alert(`An Error was occurred while filtering the data, error: ${e}`) ;
    }
});

// cancel the filter, clear the filter fields and showing the full list of items data
const clearFilterBtn  = document.querySelector(".clearfilterbtn");
clearFilterBtn.addEventListener("click", function () {
    filterArray = [];
    document.querySelector("#month").value = "";
    document.querySelector("#year").value = "";
    renderTODO(itemArray);
});