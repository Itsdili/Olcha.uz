const min = document.querySelector("#minus")
const p = document.querySelector("#plus")
const text = document.querySelector("#number")


let localCounter = localStorage.getItem("counter");

let counter = localCounter ? localCounter : 0;
text.innerHTML = counter;

p.addEventListener("click", plus)
min.addEventListener("click", minus)



function plus() {
    counter++;
    text.innerHTML = counter;
    localStorage.setItem("counter", counter)
}


function minus() {
    if (counter > 0) {
        counter--;
        text.innerHTML = counter;
        localStorage.setItem("counter", counter)
    }
}