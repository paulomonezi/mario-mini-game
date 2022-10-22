let check1 = document.querySelector("#check-1");
let check2 = document.querySelector("#check-2");
let check3 = document.querySelector("#check-3");
let resetGame = document.querySelector(".reset")

function stopAnimation() {
    if (check1.checked) {
        check1.disabled = true
    }
    if (check2.checked) {
        check2.disabled = true
    }
    if (check3.checked) {
        check3.disabled = true
    }
    return;
}
check1.onclick = stopAnimation;
check2.onclick = stopAnimation;
check3.onclick = stopAnimation;

resetGame.onclick = function () {
    check1.disabled = false;
    check1.checked = false;

    check2.disabled = false;
    check2.checked = false;

    check3.disabled = false;
    check3.checked = false;
}