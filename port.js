let control = 0;
const list1 = ['josaa.png', 'rps.png', 'yt clone.png'];
const list2 = ['JOSAA LOGIN PAGE', 'ROCK PAPER SCISSORS GAME', 'YOUTUBE CLONE'];

const list3 = ['This is a project made using basic html and css, in the early days of my web development journey. It is an elementary model of the JOSAA Counselling login page, containing all the necessary details to sign a student in.', 'This is a small rock-paper-scissors web-game, where the user can pick a move using one of three buttons, and a randomly generated computer move determines the result of the game.',  'This is a clone of a particular webpage on youtube.com, which I created in order to practice using different css properties, like block and inline block displays, flexbox, grid and position.'];

const list4 = ['rgb(4, 109, 4)', 'crimson', '#800080'];
const list5 = ['solid', 'dotted', 'dashed'];
const list6 = ['https://acac2491.github.io/JOSAA-CLONE/', 'https://acac2491.github.io/Rock-Paper-Scissors-Game/', 'https://supersimple.dev/exercises/youtube'];

function setImage(){
    const imgObj = document.querySelector('.imjs');
    const titObj = document.querySelector('.wtitle-js');
    const contObj = document.querySelector('.wcont-js');
    const paraObj = document.querySelector('.writing');
    contObj.innerHTML = list3[control];
    titObj.innerHTML = list2[control];
    titObj.style.color = list4[control];
    imgObj.innerHTML = `<a href = "${list6[control]}" target = "_blank"><img class = "storejs storecss" src = "${list1[control]}"></a>`;
}

function right(){
    if(control === 2)
        control = 0;
    else
        control++;
    setImage();
}
function left(){
    if(control === 0)
        control = 2;
    else
        control--;
    setImage();
}