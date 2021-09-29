// Change display of item amount bar
function changeAmount(change,element){
    var inputValue = element.parentNode.getElementsByTagName("input")[0];
    var max = inputValue.getAttribute("max");
    var result = parseInt(inputValue.value)+change;
    if (result < 0){
        inputValue.value  = 0;
    }else if(result>max){
        inputValue.value  = max;
    }else{
        inputValue.value = result;
    }
    calculateTotalPrice();
}

// Calculate total price of items
function calculateTotalPrice(){
    var i;
    var itemSlot = document.getElementsByClassName("itemSlot");
    var subtotalPrice = 0;
    var totalPrice = 0;
    var totalAmount = 0;
    var price = 0;
    var amount = 0;
    var discount = 0;
    for (i = 0;i < itemSlot.length;i++){
        price = itemSlot[i].getElementsByClassName("itemPrice")[0].innerHTML;
        amount = parseInt(itemSlot[i].getElementsByTagName("input")[0].value);
        subtotalPrice +=parseFloat(price)*amount;
        if (amount>0){
            totalAmount += 1;
        }
    }
    var code = document.getElementById("promoteCode");
    totalPrice = subtotalPrice;
    if (code.value.length == 11){
        if (code.value == "1831-123488"){
            totalPrice = totalPrice-(totalPrice * 0.1);
            discount = 10;
        }
        if (code.value == "2331-136498"){
            totalPrice = totalPrice-(totalPrice * 0.15);
            discount = 15;
        }
    }
    if(itemSlot.length == 0){
        document.getElementById("emptySlot").style.display="block";
    }
    document.getElementById("totalPrice").innerText=totalPrice;
    document.getElementById("discountAmount").innerText=discount;
    document.getElementById("subtotalPrice").innerText=subtotalPrice;
    document.getElementById("totalItem").innerText=totalAmount+" items";
}

// Remove items from shopping cart
function remove(element){
    element.parentNode.parentNode.parentNode.classList.add("itemFadeOut");
    setTimeout(function(){element.parentNode.parentNode.parentNode.remove();calculateTotalPrice();},180);
    
}

// Validation for promotional code
function promoCodeCheck(){
    var code = document.getElementById("promoteCode");
    var valid = document.getElementById("valid");
    var invalid = document.getElementById("invalid");
    var unknown = document.getElementById("unknown");
    if (code.value.length == 11){
        if (code.value == "1831-123488"||code.value == "2331-136498"){
            valid.style.display="inline-block";
            invalid.style.display="none";
            unknown.style.display="none";
        }else{
            valid.style.display="none";
            invalid.style.display="inline-block";
            unknown.style.display="none";
        }
    }else{
        valid.style.display="none";
        invalid.style.display="none";
        unknown.style.display="inline-block";
    }
    calculateTotalPrice();
}