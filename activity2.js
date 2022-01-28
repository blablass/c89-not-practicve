//getting score and display it
function getscore(){
    score = localStorage.getItem("score_key")
    document.getElementById("code").innerHTML = "score:"+score
}
// to go back
function goback(){
    window.location = "activity_1.html"
}