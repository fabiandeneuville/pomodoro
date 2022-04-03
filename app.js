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

affichageTravail.innerText = `${Math.trunc(tempsInitial/60)} : ${(tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;

affichagePause.innerText = `${Math.trunc(tempsDeRepos/60)} : ${(tempsDeRepos % 60 <10) ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60}`;

btnStart.addEventListener('click', () => {

    if(checkInterval === false){
    checkInterval = true;

    tempsInitial--;
    affichageTravail.innerText = `${Math.trunc(tempsInitial/60)} : ${(tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;

    let timer = setInterval(() => {
        if(pause === false && tempsInitial > 0){
            tempsInitial--;
            affichageTravail.innerText = `${Math.trunc(tempsInitial/60)} : ${(tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;
        } else if (pause === false &&tempsInitial === 0 && tempsDeRepos === 0){
            nbDeCycles ++;
            cycles.innerText = `Nombre de cycles : ${nbDeCycles}`;
            tempsInitial = 1200;
            affichageTravail.innerText = `${Math.trunc(tempsInitial/60)} : ${(tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;
            tempsDeRepos = 300;
            affichagePause.innerText = `${Math.trunc(tempsDeRepos/60)} : ${(tempsDeRepos % 60 <10) ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60}`;
        } else if (pause === false && tempsInitial === 0){
            tempsDeRepos--;
            affichagePause.innerText = `${Math.trunc(tempsDeRepos/60)} : ${(tempsDeRepos % 60 <10) ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60}`;
        } 
    }, 1000)
    btnStop.addEventListener('click', () => {
        clearInterval(timer);
        checkInterval = false;
        tempsInitial = 1200;
        tempsDeRepos = 300;
        affichageTravail.innerText = `${Math.trunc(tempsInitial/60)} : ${(tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;
        affichagePause.innerText = `${Math.trunc(tempsDeRepos/60)} : ${(tempsDeRepos % 60 <10) ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60}`;
    })
    } else {
        return;
    }
})

btnPause.addEventListener('click', () => {
    if(pause ===false){
        btnPause.innerText = "PLAY";
    } else if(pause === true){
        btnPause.innerText = "PAUSE";
    }
    pause = !pause;
})