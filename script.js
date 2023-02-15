//white navbar
const navbar= document.querySelector('nav');

window.onscroll= () => {
    if (window.scrollY > 0) {
        navbar.classList.add ('active-nav');

    }else{
        navbar.classList.remove('active-nav');
    }
};


//popup
const popup = document.querySelector('.popup');
const close = document.querySelector('.close');

window.onload=function(){
    setTimeout(function(){
     popup.style.display="block";
    },1000)
}

close.addEventListener('click', () =>{
    popup.style.display="none";
})


//timer
const minutes=30;
let time=minutes*60;

const countdowntimer=document.getElementById('time');

setInterval(updatecountdown,1000);

function updatecountdown(){
    const minutes= Math.floor(time/60);
    let seconds=time%60;

    seconds=seconds<10 ?'0'+seconds :seconds;

    countdowntimer.innerHTML=minutes+":"+seconds;
    time--;
};
