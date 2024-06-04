var isStatus=document.querySelector("h5")as HTMLElement


var addFriend= document.querySelector("#Add")as HTMLElement
var removeFriend=document.querySelector("#Remove")as HTMLElement

addFriend.addEventListener("click",function(){
    isStatus.innerHTML="Friends"
    isStatus.style.color="green"



})

removeFriend.addEventListener("click",function(){
    isStatus.innerHTML="Stranger"
    isStatus.style.color="red"


})