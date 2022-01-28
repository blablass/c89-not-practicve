 var score = 0;
 function updatescore(){
     score = score+1;
     document.getElementById("score").innerHTML = "score:"+ score;
 }
 //save score
 function savescore(){
 localStorage.setItem("score_key",score)
 }
 function nextpage(){
     window.location = "activity_2.html";
 }