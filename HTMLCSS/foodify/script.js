function update(){
    const cardName = document.getElementById("#foodlist");
    cardName.textContent = "Noodles";
    console.log(cardName);
}

 function addDetails(nam){
    const foodList = document.getElementById("foodlist");

    const foodCard = document.createElement("div");
    foodCard.classList.add("card");

    const img = document.createElement("img");
    img.src = "";

    const name = document.createElement("p");
    name.classList.add("foodName");
    name.innerHTML = "Name : "+nameFood;
    const price = document.createElement("p");
    price.classList.add("foodName");
    price.innerHTML = "Price : "+priceFood;
    
    foodCard.appendChild(img);
    foodCard.appendChild(name);
    foodCard.appendChild(price);
    foodList.appendChild(foodCard);
}

addDetails("biriyani", 200);
addDetails("noodles", 100);
addDetails("pizza", 300);
addDetails("burger", 150);
update();


