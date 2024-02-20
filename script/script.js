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

function append() {
  const getID = getElement("append");
  const newElement = document.createElement("td");
  getID.append(newElement);
}
//==============================================================

// Define the setTotalSeatNumber function
function setTotalSeatNumber() {
  const initialNumber = getElementValue("initial-total-seat");
  const newNumber = initialNumber - 1;
  const newSeat = 40 - newNumber;
  setElementValue("initial-total-seat", newNumber);
  setElementValue("add-Seat", newSeat);
}
// Append Function
function append(element) {
  const getID = getElement("append");
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  td1.textContent = element;
  getID.appendChild(tr);
  tr.appendChild(td1);

  const td2 = document.createElement("td");
  td2.textContent = "Economy";
  tr.appendChild(td2);

  const td3 = document.createElement("td");
  td3.textContent = 550;
  tr.appendChild(td3);
}
//Error massage function
function massage(element,content){
    const getID = getElement(element);
    const p = document.createElement('p');
    p.textContent = content;
    getID.appendChild(p);
    return content;
}

// Total Price function
let price = 0; 
function totalPrice() {
    price += 550;
    const TotalPrice = setElementValue('Total-price', price);
    const GrandTotalPrice = setElementValue('Grand-Total', price);
}

//Apply coupon function
function applyBtn(){
    const getID = getElement('input-felid').value;
    const lowerCase = getID.toLowerCase();
    if (lowerCase === 'new15'){
        const getID = getElementValue('Grand-Total');
        const discount = (getID * 15)/100;
        massage('show-discount','Discount'+' '+'Price'+' '+discount)
        const discountPrice = getID - discount;
        setElementValue('Grand-Total', discountPrice);
        const Element = getElement('hide');
        Element.classList.add('hidden')

    }else if (lowerCase === 'couple 20'){
        const getID = getElementValue('Grand-Total');
        const discount = (getID * 20)/100;
        massage('show-discount','Discount'+' '+'Price'+' '+discount)
        const discountPrice = getID - discount;
        setElementValue('Grand-Total', discountPrice);
        const Element = getElement('hide');
        Element.classList.add('hidden')
    }
}

// Add event listener during initialization
document.addEventListener("DOMContentLoaded", function () {
  seatList();
});

// Define the seatList function
function seatList() {
  const list = document.getElementById("seat-list");
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
  document.addEventListener("click", function (event) {
    const selected = event.target.innerText.trim();
    
// When four seat selected so this button is enable
    document.getElementById('phone').addEventListener('keyup',function(even){
        const inputFelid = even.target.value;
        const convertInputFelid = parseInt(inputFelid);
        console.log(convertInputFelid);

        if (!isNaN(convertInputFelid) && typeof convertInputFelid === 'number' && selected){
         const submitBtn = getElement('submit');
         submitBtn.removeAttribute("disabled");
        }else{
            btn.setAttribute("disabled", true);
          }
  })

//when coupon apply Available
  const btn = getElement('btn-disable');
    if (limit.length === 3){
        btn.removeAttribute("disabled");
    }

//set background color and set number updated
    if (seats.includes(selected)) {
      if (limit.length < 4) {
        if (!limit.includes(selected)) {
          limit.push(selected);
          setTotalSeatNumber();
          setBackgroundColor(selected);
          append(selected);
          totalPrice();
        } else {
            massage('massage','This Seat Already Booked');
        }
      }
    }
  });
}
