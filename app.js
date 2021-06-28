const a =document.getElementById("a");
const b =document.getElementById("b");
const c =document.getElementById("c");
const d =document.getElementById("d");
const e =document.getElementById("e");
const f =document.getElementById("f");
const g =document.getElementById("g");

a.onclick=()=>{
    const sound1=new Audio ("https://res.cloudinary.com/dgg7zx0p8/video/upload/v1624612107/tom-1_mouyue.mp3");
    sound1.play();
}

b.onclick=()=>{
    const sound1=new Audio ("https://res.cloudinary.com/dgg7zx0p8/video/upload/v1624612107/tom-2_ooryy1.mp3");
    sound1.play();
}

c.onclick=()=>{
    var sound1=new Audio ("https://res.cloudinary.com/dgg7zx0p8/video/upload/v1624612107/tom-3_ose4zi.mp3");
    sound1.play();
}

d.onclick=()=>{
    var sound1=new Audio ("https://res.cloudinary.com/dgg7zx0p8/video/upload/v1624612107/tom-4_pqk2oj.mp3");
    sound1.play();
}

e.onclick=()=>{
    var sound1=new Audio ("https://res.cloudinary.com/dgg7zx0p8/video/upload/v1624612107/snare_kzkkyz.mp3");
    sound1.play();
}

f.onclick=()=>{
    var sound1=new Audio ("https://res.cloudinary.com/dgg7zx0p8/video/upload/v1624612108/crash_jmxpuv.mp3");
    sound1.play();
}

g.onclick=()=>{
    var sound1=new Audio ("https://res.cloudinary.com/dgg7zx0p8/video/upload/v1624612107/kick-bass_ovbjvj.mp3");
    sound1.play();
}

document.addEventListener("keypress", function onEvent(event) {
    if (event.key === "a") {
        document.getElementById('audioa')
        audioa.play()
    }
});

document.addEventListener("keypress", function onEvent(event) {
    if (event.key === "s") {
        document.getElementById('audiob')
        audiob.play()
    }
});

document.addEventListener("keypress", function onEvent(event) {
    if (event.key === "d") {
        document.getElementById('audioc')
        audioc.play()
    }
});

document.addEventListener("keypress", function onEvent(event) {
    if (event.key === "f") {
        document.getElementById('audiod')
        audiod.play()
    }
});

document.addEventListener("keypress", function onEvent(event) {
    if (event.key === "g") {
        document.getElementById('audioe')
        audioe.play()
    }
});

document.addEventListener("keypress", function onEvent(event) {
    if (event.key === "h") {
        document.getElementById('audiof')
        audiof.play()
    }
});

document.addEventListener("keypress", function onEvent(event) {
    if (event.key === "j") {
        document.getElementById('audiog')
        audiog.play()
    }
});