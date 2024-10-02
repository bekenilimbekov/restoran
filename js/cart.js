const openCart = document.querySelector(".header__btn")
const closeCart = document.querySelector(".cart__close")
const cart = document.querySelector(".cart")
const body = document.querySelector("body")

openCart.addEventListener("click", function(){
    cart.style.display = "block";
    body.style.background ="linear-gradient(0deg, #211f20 0%, #44403f 100%)";
    body.style.opacity = 0.5;

})

closeCart.addEventListener("click", function(){
    cart.style.display = "none";
    body.style.opacity = 1;
})