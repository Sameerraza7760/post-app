const container = document.querySelector(".container");
privacy = container.querySelector(".privacy");
arrowBack = container.querySelector(".arrow_back");

privacy.addEventListener("click", e => {
    container.classList.add("active");
});

arrowBack.addEventListener("click", () => {
    container.classList.remove("active");
});

var val = document.querySelector("#text")
var post = document.getElementById('post')
var textContent = document.getElementById('textContent');
var post = document.getElementById('post')
function postingInputValue() {
    if (val.value === "") {
        swal("Empty Post")
    }
    else {
        post.style.visibility = "visible"
        textContent.innerHTML = val.value;
        val.value = "";
    }
}

function deletepost(){
    post.remove()
}












var arr= [
    {firstname:"sameer",     lastname:"ahsan",},
    {firstname:"zunain",    lastname:"asif",},
    {firstname:"shoab",       lastname:"uzair",},
    {firstname:"ahmed",     lastname:"mustufa",}

]
var arr2=arr.map(test)
console.log(arr2)
function test(x){
   return x.firstname + " " +x.lastname
}

