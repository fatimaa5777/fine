var allwatches = document.querySelectorAll(".btn")
var content = document.querySelector("#content")
var show = document.querySelector('.show-price')
var btn = document.querySelector("#addToCart")
var total = document.querySelector('#total')
var totalPrice = 0

allwatches.forEach(function(item) {
    item.onclick = function() {

        totalPrice +=  parseInt(item.getAttribute("price"))
        content.innerHTML += item.textContent + " ";

    }
})
btn.onclick = function() {
    total.innerHTML ="فَكَأنَّما حيزت لَهُ الدُّنيا"
}