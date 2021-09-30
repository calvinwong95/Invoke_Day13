var amountInput1 = document.getElementById('amountInput1');
var qtyInput1 = document.getElementById('qtyInput1');
var amountInput2 = document.getElementById('amountInput2');
var qtyInput2 = document.getElementById('qtyInput2');
var amountInput3 = document.getElementById('amountInput3');
var qtyInput3 = document.getElementById('qtyInput3');
var item1Total = document.getElementById('item1Total');
var item2Total = document.getElementById('item2Total');
var item3Total = document.getElementById('item3Total')
var total = document.getElementById('total');

var subtotal = 0;
var subtotal2 = 0;
var subtotal3 = 0;
var invoiceHolder = document.getElementById('list-holder');


function calItemOne() {
    subtotal = Number(amountInput1.value) * Number(qtyInput1.value);
    console.log(subtotal);
    item1Total.innerHTML = subtotal;

}

function calItemTwo() {
   subtotal2 = Number(amountInput2.value) * Number(qtyInput2.value);
   console.log(subtotal2);
   item2Total.innerHTML = subtotal2;

}

function calItemThree() {
   subtotal3 = Number(amountInput3.value) * Number(qtyInput3.value);
   console.log(subtotal3);
   item3Total.innerHTML = subtotal3;
}


function doCal() {
   total.innerHTML = subtotal + subtotal2 + subtotal3;
}


function addNew() {
   var newDiv = document.createElement('div');
   newDiv.classList.add('list');
   var amount = document.createElement('input');
   amount.onchange = validation;
   var quantity = document.createElement('input');
   quantity.onchange = validation;
   var text = document.createElement('p');

   text.innerHTML = 0;

   newDiv.append(amount);
   newDiv.append(quantity);
   newDiv.append(text);

   invoiceHolder.append(newDiv);
   
}

function validation() {
   console.log(this.parentNode);
   var listNode = this.parentNode;
   var inputList = listNode.querySelectorAll('input');

   var subTotal = Number(inputList[0].value) * Number(inputList[1].value);
   listNode.querySelector('p').innerHTML = subTotal;
   
}

localStorage.setItem('grandTotal', 0);

var grandTotal = localStorage.getItem('grandTotal')

console.log(grandTotal);