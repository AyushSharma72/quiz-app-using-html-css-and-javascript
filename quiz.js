var index=0;//current index is zero
var score = 0;//current score is 0
var score1=0,score2=0,score3=0,score4=0;
var wrong=0;
var wrong1=0, wrong2=0, wrong3=0, wrong4=0;
var answers = document.querySelectorAll(".radio");//accessing all the radiobuttons with class option
//array of objects to display question
const questions= [
{
q: "Who is the goat Sportsman ?",
a:"Sachin Tendulakar(Cricket)",
b:"Cristiano Ronaldo (Football)",
c:"Michael phelps (Swimming)",
d:"Usain Bolt(Athletics)",
correct:"b"
},

{
q: "Which one is the best song of the chainsmokers band ?",
a:"Whatever it takes",
b:"Believer",
c:"Something just like this",
d:"Thunder",
correct:"a"
},

{
q: "Which programming language is the best ?",
a:"Java",
b:"C++",
c:"Python",
d:"JavaScript",
correct:"d"
},
      
{
q: "Which game is most Popular ?",
a:"Bgmi(Pubg)",
b:"Freefire",
c:"Among us",
d:"Call of duty",
correct:"a"
}

 ]
//function to make div visible when the start button is pressed(question containing div)
 function  visible(){

document.getElementById("startbuttoncontent").style.display="none";
document.getElementById("startpostcontent").style.display="block";
document.getElementById("inner").style.height="auto";
   }  
             //function to  load question
function loadquestion(){
  if(index==3){
    document.getElementById("nextbutton").innerHTML = "Submit";
  }
  if(index<3){
    document.getElementById("nextbutton").innerHTML = "Next";
  }
if(index > 3){

quizover();//quiz over when the user click on submit button
}

const que = questions[index];

document.getElementById("question").innerHTML = `${index+1}) ${que.q}`;//template literals to use variables inside a string
const options = document.querySelectorAll(".labelclass");
options[0].innerHTML=que.a;
options[1].innerHTML=que.b;
options[2].innerHTML=que.c;
options[3].innerHTML=que.d; 

}
//function to return which radio button is checked by the user
function answercheck()
{ 

let a;
answers.forEach((input) => {
    if(input.checked)
       {
       a = input.value;
       }

})
return a;
}

//function to comparee user input with correct answer
function  answercompare(){
const que = questions[index];
let ans =  answercheck();
if(index==0)
{
if(ans === que.correct)
{  
   if(score1<1)
{ 
    score1++;  
}//when user visit previous question and select the right answer again the score do not increases more than 1 (same happens for all question)
}
else
{
   if(score1>0)
{
  wrong1++;   
  score1=score1-wrong1; //when the user visit previous question and changes coreect choice to wrong choice the score is decreased by 1 (same happens for all question)
}
}
}
else
{
    if(index==1)
{
    if(ans === que.correct)
{  
if(score2<1)
score2++;
}
else
{
  if(score2>0)
  {
    wrong2++;
   score2= score2-wrong2;
  }
  }
  }

  else if(index==2)
    {
    if(ans === que.correct)
    { 
      if(score3<1)
       score3++; 
       }
       else
        {
        if(score3>0)
        {
           wrong3++;
          score3= score3-wrong3;
        }
        }
        }
       else if(index==3)
       {
        if(ans === que.correct)
       { 
          if(score4<1)
           score4++; 
       }
           else
         {
            if(score4>0)
         {
          wrong4++;
         score4= score4-wrong4;
         }
         }
         }
  }//else over
  score=score1+score2+score3+score4;
  console.log(score); //to check the code working
}//function over

//function to increse index before calling loadfunction
function increseindex(){
index++;
}
//quiz over when the user click on submit button called in loadquestion function
function quizover(){
const que = questions[index];

document.getElementById("startpostcontent").style.display="none";
document.getElementById("quizover").style.display="block";

if(score>2){
document.getElementById("para").innerText = `You scored ${score} / ${questions.length} 😀 \n`;
document.getElementById("answerpara").innerText ="Correct answers-> 1 - b , 2 - a , 3 - d , 4 - a";

}
if(score==2){
document.getElementById("para").innerText = `You scored ${score} / ${questions.length} 🙂\n`;
document.getElementById("answerpara").innerText ="Correct answers-> 1 - b , 2 - a , 3 - d , 4 - a";

}
if(score<2){
document.getElementById("para").innerText = `You scored ${score} / ${questions.length} 😐 \n `;
document.getElementById("answerpara").innerText ="Correct answers-> 1 - b , 2 - a , 3 - d , 4 - a";

}
}

//to reset the radio buttons upon question change
function reset(){
let radiobtn=document.querySelectorAll(".radio");
for (let i = 0; i < 4; i++) {
radiobtn[i].checked=false;

}

//to reset the whole quiz upon finishing
}
function resetquiz(){
index=0;
score=0;
score1=0,score2=0,score3=0,score4=0;
wrong1=0, wrong2=0, wrong3=0, wrong4=0;
document.getElementById("rightarrow").style.visibility="visible";
document.getElementById("prearrow").style.visibility="hidden";
document.getElementById("nextbutton").innerHTML="Next";
loadquestion();
document.getElementById("quizover").style.display="none";
document.getElementById("startpostcontent").style.display="block";

}
//to go to the next button when right arrow is clicked
function nextquestion()
{
  if(index==3){
    document.getElementById("rightarrow").style.visibility="hidden";
  }
  answercompare();
   index++;
  loadquestion();
  reset();
 
  pre_enable();
  right_enable();
 
}
//togo to the previous button when pre arrow is clicked
function prequestion()
{
  if(index==0){
    document.getElementById("prearrow").style.visibility="hidden";
  }
  
  index--;
  loadquestion();
  reset();
  
  pre_enable();
  right_enable();

  }
//to show and hide the prebutton as the index changes
function pre_enable()
{
  if(index==0){
    document.getElementById("prearrow").style.visibility="hidden";
  }
  else{
    document.getElementById("prearrow").style.visibility="visible";
  }
  
}
//to show and hide the rightarrow as the index changes
function right_enable()
{
  if(index==3){
    document.getElementById("rightarrow").style.visibility="hidden";
  }
  else{
    document.getElementById("rightarrow").style.visibility="visible";
  }
}