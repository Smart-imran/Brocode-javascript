let count = 0;
document.getElementById("decreseId").onclick = function () {
    count -= 1;
    document.getElementById("countLabel").innerHTML = count;

}
document.getElementById("resetId").onclick = function () {
    count = 0;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("incrementId").onclick = function () {
    count += 1;
    document.getElementById("countLabel").innerHTML = count;

}
