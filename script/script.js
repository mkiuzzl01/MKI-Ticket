//utility function
function getElement(elementID) {
  const getElementID = document.getElementById(elementID);
  return getElementID;
}

function getElementValue() {
  const getElement = document.getElementById("initial-total-seat");
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


document.addEventListener('click',function(even){
    const color = even.target.innerText;
    console.log(even);
    setBackgroundColor(color);
})

