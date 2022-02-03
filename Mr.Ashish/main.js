let tag = document.getElementById('tag');
let nav = document.getElementById('navUL');

tag.addEventListener('click', () => {
    if (nav.classList.contains('closing')) {
        nav.classList.replace('closing', 'navOPEN');
    }
    else {
        nav.classList.add("closing")
        nav.classList.remove('navOPEN')
    }
})
let logBtn = document.getElementById('logbtn')
let log = document.getElementById('logContent')
let notN = document.getElementById('not')
logBtn.addEventListener('click', () => {
    if (log.style.width == "0%") {
        log.style.width = "100%";
        log.style.opacity = "1";
    }
    else {
        log.style.width = "0%"
        log.style.opacity = "0"
    }
})
notN.addEventListener('click', () => {
    if (log.style.width == "0%") {
        log.style.width = "100%";
        log.style.opacity = "1";
    }
    else {
        log.style.width = "0%"
        log.style.opacity = "0"
    }
})
let showBTN = document.getElementById('hide');
showBTN.addEventListener('click', ()=>{
    if(passB.getAttribute('type') == 'password'){
    passB.setAttribute("type", "text")
    }
    else{
        passB.setAttribute("type", "password")
    }
})
let SubBTN = document.getElementById('login');
let inputB = document.getElementById('email');
let passB = document.getElementById('pass');
SubBTN.addEventListener('click',(e)=>{
    if(inputB.value == "Ashishsharma@gmail.com" && passB.value == "DEVrocks"){
        console.log("chal raha hai ");
        logBtn.innerHTML = "HI,ASHISH";
        logBtn.click()
        trueD()
        clear()
    }
    else{
        console.log("error"); 
        e.preventDefault();
        errorDi()
    }
})
let trueD = ()=>{
    let body = document.querySelector('body')
    let errorD =  document.createElement('div');
    let errorT = document.createElement('p');
    errorT.innerText = "welcome !! Mr.Ashish" ;
    errorD.classList.add('LogDia');
    errorD.classList.add('loggedIN');
    errorD.appendChild(errorT);
    body.append(errorD);
    let remover = ()=>{
           body.removeChild(errorD);
       }
    setTimeout(remover,2000);

}
let errorDi = ()=>{
    let body = document.querySelector('body')
    let errorD =  document.createElement('div');
    let errorT = document.createElement('p');
    errorT.innerText = "oops error !!!";
    errorD.classList.add('LogDia');
    errorD.classList.add('ERRORIN');
    errorD.appendChild(errorT);
    body.append(errorD);
    let remover = ()=>{
           body.removeChild(errorD);
       }
    setTimeout(remover,2000);
}
let clear = ()=>{
    inputB.value = " ";
    passB.value = " ";
}
window.addEventListener('scroll',()=>{
    let cardC = document.querySelector('.projectC');
    let cardP = cardC.getBoundingClientRect().top;
    let screenP = window.innerHeight;
    let cards = document.querySelectorAll('.project')
    for (let i = 0; i < cards.length; i++) {
        if (cardP < screenP) {
            cards[i].classList.add('active')
        }
        else{
            cards[i].classList.remove('active')
        }
    } 
})

window.addEventListener('scroll' , ()=>{
    let bar = document.querySelector('.skillc');
    let barP = bar.getBoundingClientRect().top;
    console.log(barP);
    let screenP = window.innerHeight;
    let bars = document.querySelectorAll('.barS');
    for (let i = 0; i < bars.length; i++) {
        if (barP < screenP)  {
            bars[i].classList.add('animate2')
        }
        else{
            bars[i].classList.remove('animate2')
        }
        
    }
})
