var text = document.getElementById("text")
var say = document.getElementById("say")
var btn = document.getElementById("btn")
var comment = document.getElementById("comment")

btn.addEventListener("click", function(){
    comment.innerHTML = comment.innerHTML + `
    <h3>${text.value}</h3>
    <p>${say.value}</p>
    `
})

var like = document.getElementById("like")
var good = document.getElementById("good")
value = 1;

like.addEventListener("click", function(){
    value++;
    like.innerHTML = `
    <button id="good">點讚</button>
    <p>x</p>
    <p>${value}</p>
    `
})