console.log("welcome  to spotify");
//initialise the variable
let songindex=0;
let audioelement=new Audio('song1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songitem = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    { songname:"Sweethearts" , filePath: "song1.mp3" , coverPath:"cover1.jpg"},
    { songname:"Twohearts" , filePath: "song2.mp3" , coverPath:"cover2.jpg"},
    { songname:"Bisket Taco" , filePath: "song3.mp3" , coverPath:"cover3.jpg"},
    { songname:"Day Y Noche" , filePath: "song4.mp3" , coverPath:"cover4.jpg"},
    { songname:"Sunny Day" , filePath: "song5.mp3" , coverPath:"cover5.jpg"},
    { songname:"Robot boogie" , filePath: "song6.mp3" , coverPath:"cover6.jpg"},

]
songitem.forEach((element,i)=>{
   // console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songname;
})

//handle play and pause
masterplay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
       audioelement.play();
       masterplay.classList.remove('fa-play-circle');
       masterplay.classList.add('fa-pause-circle');
       gif.style.opacity=1;
    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
//listen to events
audioelement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update seekbar
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
    // console.log(progress);
    myprogressbar.value = progress;
})
// agar progress baar chnage karne se gana bhi chahnge hone lage toh uske liye ye karenge
myprogressbar.addEventListener('change',()=>{
    audioelement.currentTime = myprogressbar.value * audioelement.duration/100;

})
const makeAllPlays=()=>{

    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songindex=parseInt(e.target.id);
        
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioelement.src = songs[songindex].filePath;
        mastersongname.innerText = songs[songindex].songname
        audioelement.currentTime=0;
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');

    

    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songindex>6){
        songindex=0;
    }
    else{
        songindex += 1;
    }
    audioelement.src = songs[songindex].filePath;
    mastersongname.innerText = songs[songindex].songname;
    audioelement.currentTime=0;
    audioelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=0;
    }
    else{
        songindex -= 1;
    }
    audioelement.src = songs[songindex].filePath;
    mastersongname.innerText = songs[songindex].songname;
    audioelement.currentTime=0;
    audioelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');

})