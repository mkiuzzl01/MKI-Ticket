//utility function
function getElement(elementID) {
  const getElementID = document.getElementById(elementID);
  return getElementID;
}

function getElementValue(elementID) {
  const getElement = document.getElementById(elementID);
  const element = getElement.innerText;
  const newElement = parseInt(element);
  return newElement;
}

function setElementValue(elementID, value) {
  const getElement = document.getElementById(elementID);
  getElement.innerText = value;
}

function setBackgroundColor(selectedSeat) {
  const seat = getElement(selectedSeat);
  seat.classList.add("bg-[#1DD100]");
}

function append(){
    const getID = getElement('append');
    const newElement = document.createElement ('td');
    getID.append(newElement);
}
//==============================================================

// Define the setTotalSeatNumber function
function setTotalSeatNumber() {
    const initialNumber = getElementValue('initial-total-seat');
        const newNumber = initialNumber - 1;
        const newSeat = 40 - newNumber;
        setElementValue('initial-total-seat', newNumber);
        setElementValue('add-Seat', newSeat);
}
// Append Function
function append(element){
    const getID = getElement('append');
            const tr = document.createElement('tr');
           const td1 = document.createElement('td');
           td1.textContent = element;
           getID.appendChild(tr);
           tr.appendChild(td1)

           const td2 = document.createElement('td');
           td2.textContent = 'Economy';
           tr.appendChild(td2);

           const td3 = document.createElement('td');
           td3.textContent = 550;
           tr.appendChild(td3);
}

// Total Price function
function totalPrice(){
    const price = 550;
    let getID = getElementValue('Total-price');
    getID = 0;
    let total = getID + price;
    setElementValue('Total-price',total);
    const newPrice = getElementValue('Total-price');
    console.log(newPrice);
}


// Add event listener during initialization
document.addEventListener('DOMContentLoaded', function() {
    seatList();
});

// Define the seatList function
function seatList() {
    const list = document.getElementById('seat-list');
    const listItems1 = list.children[0].children;
    const listItems2 = list.children[1].children;
    const seats = [];
    
    for (const seat of listItems1) {
        seats.push(seat.innerText);
    }
    for (const seat of listItems2) {
        seats.push(seat.innerText);
    }
    
    const limit = [];
    document.addEventListener('click', function(event) {
        const selected = event.target.innerText.trim();
        if (seats.includes(selected)) {

            if (limit.length < 4){
            setBackgroundColor(selected);
            setTotalSeatNumber();
            totalPrice();
            const seatADD = getElementValue('add-Seat');
            limit.push(seatADD);
            //Append
            append(selected);
            }
        }
    });
}


