var isStatus = document.querySelector("h5");
var addFriend = document.querySelector("#Add");
var removeFriend = document.querySelector("#Remove");
addFriend.addEventListener("click", function () {
    isStatus.innerHTML = "Friends";
    isStatus.style.color = "green";
});
removeFriend.addEventListener("click", function () {
    isStatus.innerHTML = "Stranger";
    isStatus.style.color = "red";
});
