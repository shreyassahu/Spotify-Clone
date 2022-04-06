let index = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName("songItem"));
let miniPlay = Array.from(document.getElementsByClassName('miniPlay'));

let songs = [
    {songName : "Sunflower", filePath : "songs/1.mp3", coverPath : "1.jpg"},
    {songName : "Way Up", filePath : "songs/2.mp3", coverPath : "1.jpg"},
    {songName : "Familia", filePath : "songs/3.mp3", coverPath : "1.jpg"},
    {songName : "Invincible", filePath : "songs/4.mp3", coverPath : "1.jpg"},
    {songName : "Elevate", filePath : "songs/5.mp3", coverPath : "1.jpg"},
    {songName : "Home", filePath : "songs/6.mp3", coverPath : "1.jpg"},
    {songName : "Start a Riot", filePath : "songs/7.mp3", coverPath : "1.jpg"},
    {songName : "Memories", filePath : "songs/8.mp3", coverPath : "1.jpg"},
    {songName : "Hide", filePath : "songs/9.mp3", coverPath : "1.jpg"},
    {songName : "Let Go", filePath : "songs/10.mp3", coverPath : "1.jpg"}
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// audioElement.play();
masterPlay.addEventListener('click', ()=> {
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        makeAllPlays();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=> {
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    miniPlay.forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
} 

miniPlay.forEach((element) =>{
    element.addEventListener('click', (e) => {
        makeAllPlays();
        index = parseInt(e.target.id);

        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${index + 1}.mp3`;
        masterSongName.innerText = songs[index].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(index>=9){
        index = 0
    }
    else{
        index += 1;
    }
    audioElement.src = `songs/${index+1}.mp3`;
    masterSongName.innerText = songs[index].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(index<=0){
        index = 0
    }
    else{
        index -= 1;
    }
    audioElement.src = `songs/${index+1}.mp3`;
    masterSongName.innerText = songs[index].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})