const affichageTravail = document.querySelector(".affichageT");
const affichagePause = document.querySelector(".affichageP");
const btnStart = document.querySelector(".btn1");
const btnPause = document.querySelector(".btn2");
const btnStop = document.querySelector(".btn3");
const cycles = document.querySelector("h2");

let checkInterval = false;
let tempsInitial = 1200;
let tempsDeRepos = 300;
let pause = false;
let nbDeCycles = 0;
cycles.innerText = `Nombre de cycles : ${nbDeCycles}`;

const form = document.querySelector("form");
const travail = document.getElementById("travail")
const repos = document.getElementById("repos")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    tempsInitial = travail.value;
    tempsDeRepos = repos.value;
    affichageTravail.innerText = `${Math.trunc(tempsInitial/60)} : ${(tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;
    affichagePause.innerText = `${Math.trunc(tempsDeRepos/60)} : ${(tempsDeRepos % 60 <10) ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60}`;
})

affichageTravail.innerText = `${Math.trunc(tempsInitial/60)} : ${(tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;

affichagePause.innerText = `${Math.trunc(tempsDeRepos/60)} : ${(tempsDeRepos % 60 <10) ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60}`;

btnStart.addEventListener('click', () => {

    if(checkInterval === false){
    checkInterval = true;

    let timer = setInterval(() => {
        if(pause === false && tempsInitial > 0){
            tempsInitial--;
            affichageTravail.innerText = `${Math.trunc(tempsInitial/60)} : ${(tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;
        } else if (pause === false &&tempsInitial === 0 && tempsDeRepos === 0){
            nbDeCycles ++;
            cycles.innerText = `Nombre de cycles : ${nbDeCycles}`;
            tempsInitial = travail.value;
            affichageTravail.innerText = `${Math.trunc(tempsInitial/60)} : ${(tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;
            tempsDeRepos = repos.value;
            affichagePause.innerText = `${Math.trunc(tempsDeRepos/60)} : ${(tempsDeRepos % 60 <10) ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60}`;
        } else if (pause === false && tempsInitial === 0){
            tempsDeRepos--;
            affichagePause.innerText = `${Math.trunc(tempsDeRepos/60)} : ${(tempsDeRepos % 60 <10) ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60}`;
        } 
    }, 1000)
    btnStop.addEventListener('click', () => {
        clearInterval(timer);
        btnStart.style.opacity = '1';
        checkInterval = false;
        tempsInitial = travail.value;
        tempsDeRepos = repos.value;
        affichageTravail.innerText = `${Math.trunc(tempsInitial/60)} : ${(tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;
        affichagePause.innerText = `${Math.trunc(tempsDeRepos/60)} : ${(tempsDeRepos % 60 <10) ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60}`;
    })
    } else {
        return;
    }
})

btnPause.addEventListener('click', () => {
    if(pause === false){
        btnPause.innerHTML = `<i class="fa-solid fa-play"></i></i>`;
        btnStart.style.opacity = '0.2';
    } else if(pause === true){
        btnPause.innerHTML = `<i class="fa-solid fa-pause"></i>`;
        btnStart.style.opacity = '1';
    }
    pause = !pause;
})