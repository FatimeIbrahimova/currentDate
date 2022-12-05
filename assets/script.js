// const Baku=document.querySelector(".Baku");
// const NewYork=document.querySelector(".NewYork");
// const Moskow=document.querySelector(".Moskow");

const setInt=setInterval(()=>{
    const date=new Date();
    const Baku=document.querySelector(".Baku");
    Baku.innerText=`current time in Baku is:" ${moment(date).format('MMMM Do YYYY, h:mm:ss a')}`;
    const NewYork=document.querySelector(".New-York");
    NewYork.innerText=`current time in NewYork is:" ${moment(date).format('MMMM Do YYYY, h:mm:ss a')}`;
    const Moskow=document.querySelector(".Moskow");
    Moskow.innerText=`current time in Moskow is:" ${moment(date).format('MMMM Do YYYY, h:mm:ss a')}`;
}, 1000);

const button=document.querySelector(".btn-stop");
button.addEventListener("click",()=>{
    clearInterval(setInt);
})

const calendar-
