const quizData = [
    {
        question:'Which city is home to the Brandenburg Gate?',
        a:'London',
        b:'Zurich',
        c:'Vienna',
        d:'Berlin',
        correct:'d'
    },

    {
        question:'Who sang the title song for the latest Bond film, No Time to Die?',
        a:'Billie Eilish',
        b:'Adele',
        c:'Taylor Swift',
        d:'Sam Smith',
        correct:'a'
    },

    {
        question:'Who is generally considered the inventor of the motor car?',
        a:'Henry Ford',
        b:'Karl Benz',
        c:'Henry M. Leland',
        d:'Gottlieb Daimler',
        correct:'b'
    },

    {
        question:'What number was the Apollo mission that successfully put a man on the moon for the first time in human history?',
        a:'Apollo 11',
        b:'Apollo 12',
        c:'Apollo 10',
        d:'Apollo 13',
        correct:'a'
    },
    {
        question:'Where was tea invented?',
        a:'England',
        b:'India',
        c:'USA',
        d:'China',
        correct:'d'
    },

    {
        question:'What was the original name of Mickey Mouse?',
        a:'Marshall Mouse',
        b:'Mortimer Mouse',
        c:'The Rat',
        d:'Marvin Mouse',
        correct:'b'
    },
    {
        question:'What is the name of the element with the chemical symbol ‘He’?',
        a:'Hydrogen',
        b:'Holmium',
        c:'Helium',
        d:'Hafnium',
        correct:'c'
    },
    {
        question:'What do you call traditional Japanese female entertainers who act as hostesses and whose skills include performing various Japanese arts?',
        a:'Geisha',
        b:'Hakama',
        c:'Kimono',
        d:'Maiko',
        correct:'a'
    },


    {
        question:'“Mama Mia” is based on a song by which Swedish musical act?',
        a:'Elton John',
        b:'Queen',
        c:'Bee Gees',
        d:'ABBA',
        correct:'d'
    },

    {
        question:'Henry John Heinz founded a company specializing in the production of which food product?',
        a:'Mustard',
        b:'Ketchup',
        c:'Mayonnaise',
        d:'Relish',
        correct:'b'
    }

]
const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
//let answer = undefined;
let score = 0;

loadQuiz();    //funkcija sto kje se povikuva sekogas koga kje se klikne Submit

function loadQuiz(){

    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText= currentQuizData.question;
    a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b;
    c_text.innerText=currentQuizData.c;
    d_text.innerText=currentQuizData.d;


}

function getSelected(){
    let answer = undefined;

    answerEls.forEach((answerEl)=>{

        if(answerEl.checked){
          answer=answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers(){

    answerEls.forEach((answerEl)=>{
       answerEl.checked=false;
    });
}


submitBtn.addEventListener("click", ()=>{


    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;
        if(currentQuiz<quizData.length){
            loadQuiz();
        }
        else{
            quiz.innerHTML= `<h2> You answered correctly at  ${score}/${quizData.length} questions. </h2> 
            <button onclick="location.reload()">Reload</button>`
        }
    }


})