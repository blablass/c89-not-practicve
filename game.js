//
player1name = localStorage.getItem("foot1");
player2name = localStorage.getItem("foot2");
player1score = 0
player2score = 0
document.getElementById("player1name").innerHTML = player1name +":-"
document.getElementById("player2name").innerHTML = player2name +":-"
document.getElementById("player1score").innerHTML = player1score
document.getElementById("player2score").innerHTML = player2score
document.getElementById("playerq").innerHTML = "questionturn:" + player1name
document.getElementById("playera").innerHTML = "answerturn:" + player2name
function sendquestion(){
    word=document.getElementById("word").value
    getword = word.toLowerCase()
    console.log(getword);
    char1 = getword.charAt(1)
    console.log(char1)
    char2 = getword.charAt(Math.floor(getword.length/2))
    console.log(char2)
    char3 = getword.charAt(getword.length-1)
    console.log(char3)
    cuthewords = getword.replace(char1,"_")
    cutthewords = cuthewords.replace(char2,"_")
    unique = cutthewords.replace(char3,"_")
    console.log(unique)
    questionword = "<h3 id = 'word_display' > q."+unique + "</h3>"
    inputbox = "<br> answer: <input type='text' id = 'inputplease'>"
    chestbutton = "<br> <button class = 'btn btn-info' onclick = 'check()'> check</button>"
    row = questionword + inputbox + chestbutton
    document.getElementById("output").innerHTML = row
    document.getElementById("word").value = ""
}

    