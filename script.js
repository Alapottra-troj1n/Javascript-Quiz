const correctanswers = ['B','A' ,'A' ,'A' ,'A'];

const form = document.querySelector ('.quiz');
const scoreboard = document.querySelector ('.scoreboard');
let displayScore = document.querySelector ('#score');


form.addEventListener('submit', e =>{
    e.preventDefault();

    let score = 0;

    let useranswers = [form.q1.value, form.q2.value, form.q3.value , form.q4.value , form.q5.value];


    //check answers

    useranswers.forEach((answer, index) => {
        if (answer === correctanswers[index] ){
            score += 20;
        }
    });

    scoreboard.style.display = 'block';

    scrollTo (0,0)

    let output = 0;

    const timer = setInterval(() =>{
        scoreboard.querySelector('#score').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        }
        else{
            output++
        }

    },10)
    
} );



