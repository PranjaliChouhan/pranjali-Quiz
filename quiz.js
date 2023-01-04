var readlineSync=require('readline-Sync');
var userName=readlineSync.question('Tell me your name?');
console.log(userName);
var welcomeMessage="welcome to the quiz" +userName;
console.log(welcomeMessage);
var wantToPlay=readlineSync.question('Do you want to play?');
if(wantToPlay=='yes'){
    console.log("lets get started");
}
else
{
    console.log("exit");
    return;
}
var score=0;
function play(question,answer)
{
    var userAnswer=readlineSync.question(question);
    if(userAnswer==answer){
        console.log("right");
        score++;
    }else{
        console.log("wrong");
        score--;
    }
console.log("--------------");
console.log("current score:",score);
console.log("--------------");
}
console.log("**************");
console.log("level 1");
console.log("**************");
play("who is  prime minister of India?","Narendra Modi");
play("who is president of India? ","Droupadi Murmu");
play("Capital of India is","Delhi");
console.log("**************");
console.log("level 2");
console.log("**************");
var questionone={
    question:"how many states India have?",
    answer:"28",
}
var questiontwo={
    question:"how many UTs India have?",
    answer:"8",
}
var leveltwo=[questionone,questiontwo];
{
    for(i=0;i<leveltwo.length;i++)
    {
        var currentQuestion=leveltwo[i];
        play(currentQuestion.question, currentQuestion.answer);
    }
}
console.log("**************");
console.log("level 3");
console.log("**************");
var levelthree=[{
    question:"in which state statue of unity is there?",
    answer:"Gujrat",
},
{
    question:"in which state of India only floating park in the world exist ?",
    answer:"Manipur",
},
{
    question:"Sree Padmanabhaswamy Temple is in which state ?",
    answer:"kerala",
}];
for(i=0;i<levelthree.length;i++)
    {
        var currentQuestion=levelthree[i];
        play(currentQuestion.question, currentQuestion.answer);
    }
    console.log("final score is-",score);
