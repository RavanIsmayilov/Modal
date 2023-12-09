var overlay = document.querySelector(".overlay");
var modal = document.querySelector(".modal");
var openBtn = document.querySelector(".btn-open");
var closeBtn = document.querySelector(".btn-close");
var closeBtn2 = document.querySelector(".btn-close2");
var openOrder = document.querySelector(".btn-order")
var modal2 = document.querySelector(".modal2");


function openModal() {
    modal.classList.remove("hidden")
    overlay.classList.remove("hidden")
}

function closeModal() {
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
}

function clickOrder(){
    modal.classList.add("hidden")
    modal2.classList.remove("hidden")
    
}

function closeModal2() {
    modal2.classList.add("hidden")
    overlay.classList.add("hidden")
}


document.addEventListener('keydown', function(event) {

    if (event.key === "Escape") {

        closeModal2();
        closeModal();

    }
});




openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
openOrder.addEventListener("click",clickOrder);
closeBtn2.addEventListener("click", closeModal2);
overlay.addEventListener("click", closeModal2);


