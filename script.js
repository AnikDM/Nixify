// console.log(document.querySelector(".songList button"))
let play = '<i class="fa-solid fa-3x fa-circle-play"></i>'
let pause = '<i class="fa-solid fa-3x fa-circle-pause"></i>'
let playerBar = document.getElementById("player");
let songList=document.querySelectorAll(".song");
let pbtnList=document.querySelectorAll(".items button i");
let pnp=document.getElementById('pnp')
let back=document.getElementById('back')
let fwd=document.getElementById('fwd')
let repeat=document.getElementById('repeat')
let shuffle=document.getElementById('shuffle')
let songs = [
    {name:"As It Was" ,path: "./audio/asitwas.mp3",cover:"./assets/asitwas.jpg"},
    {name:"Bones" ,path: "./audio/bones.mp3",cover:"./assets/bones.jpg"},
    {name:"Calm Down" ,path: "./audio/calmdown.mp3",cover:"./assets/calmdown.jpg"},
    {name:"Starboy" ,path: "./audio/starboy.mp3",cover:"./assets/starboy.jpg"},
    {name:"People" ,path: "./audio/people.mp3",cover:"./assets/people.jpg"}
]
let i=0
let music=new Audio(songs[0].path)
songList.forEach((e,ind)=> {
    e.innerHTML=songs[ind].name;
});


const allPlay=()=>{
    pbtnList.forEach((e,ind)=>{
        e.classList.remove("fa-pause")
        e.classList.add("fa-play")
    })
}
const disc=()=>{
    pbtnList.forEach((e)=>{
        e.classList.remove("add")
    })
}
pbtnList.forEach((e,ind)=>{
    e.addEventListener("click",()=>{
        allPlay();
        disc();
        e.classList.remove("fa-play")
        e.classList.add("fa-compact-disc")
        e.classList.add("add")
        music.src=songs[ind].path;
        i=ind
        audio()
        theme()
    })
})

pnp.addEventListener("click",()=>{
    allPlay();
    document.querySelectorAll(".items button i")[i].classList.remove("fa-play")
    document.querySelectorAll(".items button i")[i].classList.add("fa-pause")
    audio()
})
back.addEventListener("click",()=>{
    if(i>0){
    music.src=songs[--i].path;
    allPlay();
    document.querySelectorAll(".items button i")[i].classList.remove("fa-play")
    document.querySelectorAll(".items button i")[i].classList.add("fa-pause")
    audio()
    theme()}
})
fwd.addEventListener("click",()=>{
    if(i<songs.length-1){
        music.src=songs[++i].path;
        allPlay();
        document.querySelectorAll(".items button i")[i].classList.remove("fa-play")
        document.querySelectorAll(".items button i")[i].classList.add("fa-pause")
    audio()
    theme()}
})

function audio() {

    if (music.paused || music.currentTime < 0) {
        music.play();
        document.getElementById("pnp").innerHTML = pause
        document.querySelector(".bottom img").style.animationPlayState='running'
    }
    else {
        music.pause();
        document.getElementById("pnp").innerHTML = play
        document.querySelector(".bottom img").style.animationPlayState='paused'


    }
    music.addEventListener("timeupdate", () => {
        playerBar.value = parseInt((music.currentTime / music.duration) * 100)
    })
    
    playerBar.addEventListener("change", () => {
        music.currentTime = (player.value * music.duration) / 100
    })
}

function theme(){
    document.querySelector(".songName").innerHTML=songs[i].name;
    document.querySelector(".bottom img").src=songs[i].cover
    document.querySelector(".songCard img").src=songs[i].cover
    document.querySelector(".background").style.background='url('+songs[i].cover+') no-repeat '
    document.querySelector(".background").style.backgroundSize='cover'
}


