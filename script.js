const quizDB=[
    {
    question:"Guru Shikhar Peak is located in which among the following states?",
    a:" Haryana",
    b:" Kerala",
    c: "Rajasthan",
    d: "Bihar",
    ans:"ans3"
},
{
    question:"Which of the following peaks of India is known as the ‘five treasures of snow’?",
    a :"Kanchenjunga",
    b :"Trishul",
    c :"Nanda Devi",
    d :"Kamet",
    ans:"ans1"
},
{
    question:"Which among the following is NOT a fundamental duty of a citizen?",
    a:"Respect for the constitution",
    b: "Respect for the National Flag",
    c: "Respect for the National Anthem",
    d:" Respect for the government",
    ans:"ans4"
},
{
    question:"Which among the following is a correct statement?", 
    a :"USA – Supremacy of the constitution ;Britain – Supremacy of the Parliament",
    b:" Britain – Supremacy of the constitution ;USA – Supremacy of the Parliament",
    c:" Britain & USA -Supremacy of the constitution",
    d :"Britain & USA -Supremacy of the Parliament",
    ans:"ans1"

},
{
    question:"Anarchical and Revolutionary Crimes Act, 1919 was also known as__?",
    a:" Indian Arms Act",
    b:" Pitts India Act",
    c:" Ilbert Bill",
    d:" Rowlatt Act",
    ans:"ans4"
},
{
    question:"Who among the following were the first to establish “Printing Press” in India?",
    a:" British",
    b:" Portuguese",
    c:" Dutch",
    d:" French",
    ans:"ans2"
},
{
    question:"Which country is called “Sugar Bowl of world”?",
    a:" Norway",
    b:" Sweden",
    c: "India",
    d: "Cuba",
    ans:"ans4"
}];
const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');

const answers=document.querySelectorAll('.answer');
const showScore=document.querySelector('#showScore');
let questionCount=0;
let score=0;

const loadQuestion=()=>{
    const questionList=quizDB[questionCount];
    question.innerText=questionList.question;
    option1.innerText=questionList.a;
    option2.innerText=questionList.b; 
    option3.innerText=questionList.c;
    option4.innerText=questionList.d;
}
loadQuestion(); 


const getCheckAnswer=()=>{
    let answer;
    answers.forEach((curAnsElem)=>{
        if(curAnsElem.checked){
            answer=curAnsElem.id;
        }
    });
    return answer;
};
const deselectAll=()=>{
    answers.forEach((curAnsElem)=>curAnsElem.checked=false);
}
submit.addEventListener('click',()=>{
    const checkedAnswer=getCheckAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer===quizDB[questionCount].ans){
        score++;
    };
    questionCount++;
    deselectAll();

    if(questionCount< quizDB.length){
        loadQuestion();
}
else{
    showScore.innerHTML=`
    <h3>you scored ${score}/${quizDB.length} ✌️</h3>
    <button class="btn" onClick="location.reload()">Play Again</button>
    `;
    showScore.classList.remove('scoreArea');
}

});