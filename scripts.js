function mudarBackground(id){
let body = document.body
switch(id){
    case "1":
        body.style.backgroundImage="url('img1.jpg')";
    break;

    case "2":
        body.style.backgroundImage="url('img2.jpg')";
    break;

}
}

document.getElementById("1").addEventListener("click", function(){
    mudarBackground("1")
});

document.getElementById("2").addEventListener("click", function(){
    mudarBackground("2")
});


