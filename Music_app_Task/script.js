const left = document.getElementById("left");
const playpush = document.getElementById("playpush");
const right = document.getElementById("right");
const control = document.getElementById("control");
const music = document.getElementById("music");
const musicname = document.getElementById("musicname");
const tstart = document.getElementById("tstart");
const curtime = document.getElementById("curtime");


let i = 0;

const musicList = [
    {
        song: "Imagine Dragons - Believer .mp3"
    },
    {
        song: "Mexican Phonk Eki (Brazilian Funk _ Phonk,.mp3"
    },
    {
        song: "Shawn Mendes, Camila Cabello - Señorita .mp3"
    },
    {
        song: "Jawan_ Not Ramaiya Vastavaiya Extended Version (Hindi)_ Shah Rukh Khan _Atlee _Anirudh _Nayanthara.mp3"
    },
    {
        song: "Alan Walker  Faded .mp3"
    }
];

function timefind() {
    let timest = ((music.duration) / 100);
    let timestring = timest.toString();
    tstart.innerHTML = "0" + timestring.slice(0, 4);
}

function curtimefind() {
    let timest = ((music.currentTime) / 100);
    let timestring = timest.toString();
    curtime.innerHTML = "0" + timestring.slice(0, 4);
}
music.onloadedmetadata = function () {
    control.max = music.duration;
    control.value = music.currentTime;
    timefind();
    curtimefind();
    songname();

};

playpush.addEventListener("click", () => {

    if (playpush.innerHTML == `<i class="fa-solid fa-play"></i>`) {
        music.play();
        playpush.innerHTML = `<i class="fa-solid fa-pause"></i>`;
        songname();
    }
    else {
        music.pause();
        playpush.innerHTML = `<i class="fa-solid fa-play"></i>`;
        songname();
    }
});

control.addEventListener("change", () => {
    music.play();
    music.currentTime = control.value;
    playpush.innerHTML = `<i class="fa-solid fa-pause"></i>`;

});

const progress = () => {
    if (music.play()) {
        setInterval(() => {
            curtimefind();
            control.value = music.currentTime;
        }, 1000)
    }
}
progress();


right.addEventListener("click", async () => {
    if (i < musicList.length - 1) {
        i = i + 1;
        music.src = musicList[i].song;
        const x = await music.play();
        playpush.innerHTML = `<i class="fa-solid fa-pause"></i>`;

        songname();
    }
    else {
        i = 0;
        music.src = musicList[i].song;
        const x = await music.play();
        playpush.innerHTML = `<i class="fa-solid fa-pause"></i>`;

        songname();
    }
})
left.addEventListener("click", async () => {
    if (i > 0) {
        i = i - 1;
        music.src = musicList[i].song;
        const x = await music.play();
        playpush.innerHTML = `<i class="fa-solid fa-pause"></i>`;

        songname();
    }
    else {
        i = musicList.length - 1;
        music.src = musicList[i].song;
        const x = await music.play();
        playpush.innerHTML = `<i class="fa-solid fa-pause"></i>`;

        songname();
    }
})


function songname() {
    musicname.innerText = musicList[i].song.slice(0, 40) + "....";
}