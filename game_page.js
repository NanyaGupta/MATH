var player1Score=0;
var player2Score=0;
var player1Name=localStorage.getItem("Player 1 Name");
var player2Name=localStorage.getItem("Player 2 Name");


document.getElementById("player1Score").value=player1Score;
document.getElementById("player2Score").value=player2Score;
document.getElementById("player1Name").innerHTML=player1Name + " : ";
document.getElementById("player2Name").innerHTML=player2Name + " : ";

function send(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    var actual_answer=parseInt(number1)*parseInt(number2);
    questionNumber="<h4>" + number1 + "X" + number2 + "<h4>"
    inputBox="<br>Answer : <input type='text' id='inputCheckbox'>"
    checkButton="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    var row = questionNumber + inputBox + checkButton ;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}
var questionTurn="player1";
var answerTurn="player2";

function check(){
  var getAnswer= document.getElementById("input_check_box").value;
  console.log("answer is- "+ getAnswer);
  if (getAnswer==actual_answer){
      if(answerTurn=="player1"){
      player1Score=player1Score+1;
      document.getElementById("player1Score").innerHTML=player1Score;
      }
      else{
        player2Score=player2Score+1;
      document.getElementById("player2Score").innerHTML=player2Score;  
      } 
}
if(answerTurn=="player1"){
    answerTurn="player2"
    document.getElementById("playerAnswer").innerHTML="Answer Turn= "+player2Name;
}
else{
    answerTurn="player1"
    document.getElementById("playerAnswer").innerHTML="Answer Turn= "+player1Name;
}
if(questionTurn=="player1"){
   questionTurn="player2"
    document.getElementById("playerQuestion").innerHTML="Question Turn= "+player2Name;
}
else{
    questionTurn="player1"
    document.getElementById("playerQuestion").innerHTML="Question Turn= "+player1Name;
}
document.getElementById("output").innerHTML="";
}