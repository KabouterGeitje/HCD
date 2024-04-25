let textContainer = document.querySelector(".buitenBeeld");
let video = document.querySelector("video");
const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const container = document.querySelector("section");
const animation = document.querySelector(".animatie");

// donker en licht op pauze en play voor body

video.addEventListener('play', function() {
    body.style.backgroundColor = 'black';
});

video.addEventListener('pause', function() {
    body.style.backgroundColor = 'white';
});

// donker en licht op pauze en play voor de h1

video.addEventListener('play', function() {
    h1.style.color = 'white';
});

video.addEventListener('pause', function() {
    h1.style.color = 'black';
});

// donker en licht op pauze en play voor container

video.addEventListener('play', function() {
    container.style.backgroundColor = 'darkblue';
});

video.addEventListener('pause', function() {
    container.style.backgroundColor = 'whitesmoke';
});

let insertCaption = async () => {
    video.addEventListener("timeupdate", () => {
        console.log(video.currentTime);
    });

    video.addEventListener("timeupdate", () => {
        let start = 11.4;
        let end = 12;
        let id = "caption-1";
        let caption = "LOUIE: Yes chef?";
        let styling = "one";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        let start = 14.3;
        let end = 15;
        let id = "caption-2";
        let caption = "NEIL: Behind";
        let styling = "two";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        let start = 15.3;
        let end = 16;
        let id = "caption-3";
        let caption = "SYDNEY: Behiiind";
        let styling = "three";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        let start = 18.7;
        let end = 19.3;
        let id = "caption-4";
        let caption = "CARMY: MARCUS!";
        let styling = "four";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        let start = 44.4;
        let end = 45;
        let id = "caption-5";
        let caption = "CARMY: Yea that's it!";
        let styling = "five";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        let start = 46;
        let end = 46.8;
        let id = "caption-6";
        let caption = "CARMY: Chef!";
        let styling = "six";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        let start = 54.5;
        let end = 55.3;
        let id = "caption-7";
        let caption = "talking to Marcus";
        let styling = "seven";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        let start = 58;
        let end = 58.52;
        let id = "caption-8";
        let caption = "SYDNEY: I'll order..";
        let styling = "eight";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        let start = 72.1;
        let end = 72.3;
        let id = "caption-9";
        let caption = "yes chef!";
        let styling = "nine";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        let start = 72.4;
        let end = 72.6;
        let id = "caption-10";
        let caption = "yes chef!";
        let styling = "ten";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        let start = 72.7;
        let end = 73;
        let id = "caption-11";
        let caption = "yes chef!";
        let styling = "eleven";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        let start = 72.7;
        let end = 73;
        let id = "caption-12";
        let caption = "yes chef!";
        let styling = "twelve";
        
        handleCaption(start, end, id, caption, styling);
    });

    video.addEventListener("timeupdate", () => {
        let start = 72.7;
        let end = 73;
        let id = "caption-13";
        let caption = "yes chef!";
        let styling = "thirteen";
        
        handleCaption(start, end, id, caption, styling);
    });
}

// function that inserts the captions   
let handleCaption = (start, end, id, caption, styling) => {
    if (
        video.currentTime >= start &&
        video.currentTime <= end &&
        !document.getElementById(id)
    ) {
        textContainer.textContent = caption;
        textContainer.classList.add(styling);
        textContainer.id = id;
    } else if (
        (video.currentTime < start || video.currentTime > end) &&
        document.getElementById(id)
    ) {
        textContainer.id = "";
        textContainer.classList.remove(styling);
        textContainer.textContent = "";
    }
};

insertCaption();

// voor de animatie hetzelfde idee als bij de captions

let videoContainer = document.querySelector("video");
let section

let insertAnimation = async () => {
    videoContainer.addEventListener("timeupdate", () => {
        console.log(videoContainer.currentTime);
    });

    videoContainer.addEventListener("timeupdate", () => {
        let start = 11.4;
        let end = 12;
        let duration = end - start;
        let id = "sound-1";
        let position = "oneAnimation"
        
        handleSound(start, end, id, position, duration);
    });

    videoContainer.addEventListener("timeupdate", () => {
        let start = 58.5;
        let end = 62;
        let duration = end - start;
        let id = "heftig";
        let position = "carmyHeftig"
        
        handleSound(start, end, id, position, duration);
    });
}

// voor animatie timing  
let handleSound = (start, end, id, position, duration) => {
    if (
        videoContainer.currentTime >= start &&
        videoContainer.currentTime <= end &&
        !document.getElementById(id)
    ) {
        animation.classList.add(position);
        animation.id = id;
        animation.style.setProperty("--duration", duration + "s");
    } else if (
        (videoContainer.currentTime < start || videoContainer.currentTime > end) &&
        document.getElementById(id)
    ) {
        animation.id = "";
        animation.classList.remove(position);
    }
};



insertAnimation();




