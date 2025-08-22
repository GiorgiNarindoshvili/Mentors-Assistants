const cart = document.getElementById("cart")
let cartItem = JSON.parse(localStorage.getItem("cart")) || []


function render() {
    cart.innerHTML = ""
    cartItem.forEach((element, index) => {
        cart.innerHTML += `
        <div class = "maindishes"> 
            <img src = ${element.image}>
            <div class = "allinfo">
                <h3>Name: ${element.name}</h3>
                <p>Description:${element.description}</p>
                <p>Category: ${element.category}
                <p>$${element.price}</p>
                
                <button id="Buy" onclick="removeProduct(${index})">Remove Product!</button>
            </div>
            
        </div>
        `
    });
}

const removeProduct = (index) => { 
    cartItem = cartItem.filter((_, i) => i !== index)
    localStorage.setItem("cart", JSON.stringify(cartItem))
    render()
}

const loadCart = () => {
    cartItem = JSON.parse(localStorage.getItem("cart"))
    render()
}
loadCart()

