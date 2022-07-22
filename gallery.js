/*
Assignment 3 - CSI3140 - Summer 2022

Ibrahim Maalej - 300145176
Mayowa Awosiyan - 300127459
*/

let selectedForPurchase = [];
let total = 0;
let toBuy = 0;
let toBuyCount = document.getElementById("cart");
toBuyCount.innerHTML = "";

const handleImgSelected = (e) => {
  if (e.target.nodeName == "IMG") {
    if (selectedForPurchase.includes(e.target /*.src*/)) {
      let indexOfItem = selectedForPurchase.indexOf(e.target /*.src*/);
      let confirmation = e.target.parentElement.querySelector("span");
      selectedForPurchase.splice(indexOfItem, 1);
      toBuy = toBuy - 1;
      toBuyCount.innerHTML = toBuy;
      let value = e.target.parentElement.querySelector("div").innerHTML;
      value = value.replace("$", "");
      total = total - value;
      confirmation.style.display = "none";
      if (toBuy === 0) {
        toBuyCount.innerHTML = "";
      }
    } else {
      let value = e.target.parentElement.querySelector("div").innerHTML;
      let confirmation = e.target.parentElement.querySelector("span");
      value = value.replace("$", "");
      total = total + parseFloat(value);
      console.log(total);
      selectedForPurchase.push(e.target);
      toBuy = toBuy + 1;
      toBuyCount.innerHTML = toBuy;
      confirmation.style.display = "block";
    }
  }
};

function handleShoppingCart() {
  let ul = document.createElement("div");
  let cartContent = document.getElementById("cart-content");
  cartContent.innerHTML = "";
  cartContent.append(ul);
  selectedForPurchase.forEach((item) => {
    let div = document.createElement("div");
    div.classList.add("cartcontainer");
    let li = document.createElement("h6");
    div.appendChild(li);
    li.innerHTML += item.parentElement.querySelector("div").innerHTML;
    let img = document.createElement("img");
    img.src = item.src;
    img.classList.add("mini");
    div.appendChild(img);
    ul.appendChild(div);
  });
  let totaltext = document.getElementById("total");
  totaltext.innerHTML = "Total: " + total.toFixed(2);
}

function purchase() {
  alert("Thank you for your purchase.");
}

document
  //.querySelector(".container")
  .querySelector(".gallerylist")
  .addEventListener("click", handleImgSelected);
