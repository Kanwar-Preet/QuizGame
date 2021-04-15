var arr_question = [{
    "Q":"Which type of language is JavaScript?",
    "O1":"Object-Oriented",
    "O2":"Object-Based",
    "O3":"Assembly-language",
    "O4":"High Level",
    "ans":"Object-Based"
},{
    "Q":"Inside which HTML element do we put the JavaScript?",
    "O1":"javascript",
    "O2":"scripting" ,
    "O3":"script",
    "O4":"js",
    "ans":"script"
},{
    "Q":" The pop() method of the array does which of the following task?",
    "O1":"Decrements the total length by 1",
    "O2":"Increments the total length by 1",
    "O3":"Prints the first element but no effect on the length",
    "O4":"updates the element",
    "ans":"Decrements the total length by 1"
},{
    "Q":" What is the full form of CSS?",
    "O1":"Hyper Text Markup Language",
    "O2":"Cascading Style Sheets",
    "O3":"JavaScript",
    "O4":"None of these",
    "ans":"Cascading Style Sheets"
},{
    "Q":" Which one of the following operator is used to check weather a specific property exists or not:",
    "O1":"Exists",
    "O2":"exist",
    "O3":"within",
    "O4":"in",
    "ans":"in"
},{
    "Q":" Which of the following function of String object returns the characters in a string between two indexes into the string?",
    "O1":"splice()",
    "O2":"split()",
    "O3":"substr()",
    "O4":"substring()",
    "ans":"substring()"
},{
    "Q":" Which of the following function of Array object returns true if every element in this array satisfies the provided testing function?",
    "O1":"concat()",
    "O2":"every()",
    "O3":"push()",
    "O4":"some()",
    "ans":"every()"
},{
    "Q":" Which of the following function of String object returns a number indicating the Unicode value of the character at the given index?",
    "O1":"charAt()",
    "O2":"charCodeAt()",
    "O3":"concat()",
    "O4":"indexOf()",
    "ans":"CharCodeAt()"
},{
    "Q":" Which one of the following is the correct way for calling the JavaScript code?",
    "O1":"Preprocessor",
    "O2":"Triggered Event",
    "O3":"RMI",
    "O4":"Function/Method",
    "ans":"Function/Method"
},{
    "Q":" In JavaScript the x===y statement implies that:",
    "O1":"Both x and y are equal in value, type and reference address as well.",
    "O2":"Both are x and y are equal in value only.",
    "O3":"Both are equal in the value and data type.",
    "O4":"Both are not same at all.",
    "ans":"Both are equal in the value and data type."
}];
var arr_ans = [{
    "A":"O2"
},{
    "A":"O3"
},{
    "A":"O1"
},{
    "A":"O2"
},{
    "A":"O4"
},{
    "A":"O4"
},{
    "A":"O2"
},{
    "A":"O2"
},{
    "A":"O4"
},{
    "A":"O3"
}];
var rightQuestionCount=0;
var mainPage = document.getElementById("main-div");
var mainHeading = document.getElementById("main-heading");
var lastDiv = document.getElementById("last-div");
var anskey = document.getElementById("ans");
var question = document.getElementById("question");
var l_f_option = document.getElementById("op1");
var l_s_option = document.getElementById("op2");
var l_th_option = document.getElementById("op3");
var l_fo_option = document.getElementById("op4");
var f_option = document.getElementById("O1");
var s_option = document.getElementById("O2");
var th_option = document.getElementById("O3");
var fo_option = document.getElementById("O4");
var nextbtn = document.getElementById("next");
var subbtn = document.getElementById("subbtn");
var resbtn = document.getElementById("resbtn");
var correct_div = document.getElementById("correct");
var incorrect_div = document.getElementById("incorrect");
var next_question = 0;
var questionChosen = "";

function clearAll()
{
    f_option.checked=false;
    s_option.checked=false;
    th_option.checked=false;
    fo_option.checked=false;
}
function display(i){
    clearAll();
    question.innerText=arr_question[i].Q;
    l_f_option.innerText=arr_question[i].O1;
    l_s_option.innerText=arr_question[i].O2;
    l_th_option.innerText=arr_question[i].O3;
    l_fo_option.innerText=arr_question[i].O4;
}
subbtn.addEventListener("click",function(){
    if(f_option.checked == false && s_option.checked == false && th_option.checked == false && fo_option.checked == false)
    {
        alert("Please choose one option");
    }
    else
    {
        chosenOptionReturner();
        checkCorrect();
    }
})
function chosenOptionReturner(){
    if(f_option.checked == true)
    {
        questionChosen=f_option.id;
    }
    if(s_option.checked == true)
    {
        questionChosen=s_option.id;
    }
    if(th_option.checked == true)
    {
        questionChosen=th_option.id;
    }
    if(fo_option.checked == true)
    {
        questionChosen=fo_option.id;
    }
}
function checkCorrect(){
    if(questionChosen == arr_ans[next_question].A)
    {
        correct_div.style.display="block";
        nextbtn.style.display="block";
        subbtn.style.display="none";
        rightQuestionCount++;
    }
    else
    {
        incorrect_div.style.display="block";
        nextbtn.style.display="block";
        subbtn.style.display="none";
    }
}

nextbtn.addEventListener("click",function(){
    correct_div.style.display="none";
    incorrect_div.style.display="none";
    nextbtn.style.display="none";
    subbtn.style.display="block";
    next_question++;
    if(next_question<arr_question.length)
    {
        display(next_question);
    }
    else
    {
        lastPageDisplay();
    }
})

function lastPageDisplay(){
    mainHeading.innerText="Score: "+rightQuestionCount;
    mainPage.style.display="none";
    anskey.style.display="block";
    resbtn.style.display="block";
    lastDiv.style.display="block";
    lastDivCreator();
}
function lastDivCreator(){
    var list = document.createElement("ul");
    arr_question.forEach(function(item,index){
        var listItem = document.createElement("li");
        listItem.innerText=item.Q+" - ";
        listItem.style.padding=7;
        list.appendChild(listItem);
        var span = document.createElement("span");
        span.innerText=item.ans;
        span.style.backgroundColor="green";
        span.style.color="white";
        span.style.padding=3;
        listItem.appendChild(span);
    })
    list.setAttribute("id","demolist");
    lastDiv.appendChild(list);
}
resbtn.addEventListener("click",function(){
    var list = document.getElementById("demolist");
    lastDiv.removeChild(list);
    mainHeading.innerText="Quiz";
    mainPage.style.display="block";
    lastDiv.style.display="none";
    resbtn.style.display="none";
    anskey.style.display="none";
    next_question=0;
    rightQuestionCount=0;
    display(next_question);
})
display(next_question);