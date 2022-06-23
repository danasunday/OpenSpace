const password = document.getElementById("password");
const okBtn = document.getElementById("ok")
const inputAble = document.getElementsByTagName("input");
const launch = document.getElementById("launch");
const checks = document.querySelectorAll('input[type="checkbox"]');
const range = document.querySelectorAll('input[type="range"]');

function removeDsbl() {
    if (password.value === "TrustNo1") {
        for (index = 0; index < inputAble.length - 1; index++) {
            inputAble[index].removeAttribute("disabled");
        }
        password.setAttribute("disabled", "disabled");
        okBtn.setAttribute("disabled", "disabled");
    }}

okBtn.addEventListener("click", removeDsbl);
document.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        removeDsbl();
    }
})

function launchAble() {
    let result = true;
    checks.forEach(element => {result &&= element.checked;});
    range.forEach(element => {result &&= (element.value === element.max);});
    if (result) {
        launch.removeAttribute("disabled");
    }
}

document.getElementById("launch").addEventListener("click", function() {
    document.getElementById("rocket").animate([
        { // current position of your rocket
            left: '-190px',
            bottom: '-150px',
        },
        { //  final position of your rocket
            left: '300px',
            top: '-1000px',
        }
    ], {
        // timing options
        duration: 3000,
        iterations: 1
    })
});