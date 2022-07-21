let selectedForPurchase = [];
let total = 0;
let toBuy = 0;
const handleImgSelected = (e) => {
  if (selectedForPurchase.includes(e.target.src)) {
    let indexOfItem = selectedForPurchase.indexOf(e.target.src);
    selectedForPurchase.splice(indexOfItem, 1);
    toBuy = toBuy - 1;
    let value = e.target.parentElement.querySelector("div").innerHTML;
    value = value.replace("$", "");
    total = total - total;
    console.log(value);
    console.log(total);
  } else {
    let value = e.target.parentElement.querySelector("div").innerHTML;
    value = value.replace("$", "");
    total = total + parseFloat(value);
    console.log(total);
    selectedForPurchase.push(e.target.src);
    toBuy = toBuy + 1;
  }
};

document
  .querySelector(".container")
  .addEventListener("click", handleImgSelected);
