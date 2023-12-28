let isPregnancyTestPositive = false;

export function renderBabyPage() {
    const contentContainer = document.getElementById("content");
    contentContainer.innerHTML = ""; // limpar html
    $('body').find('img').remove();
    const pregnantContainer = document.createElement("div");
    pregnantContainer.classList.add("main-gen")

    pregnantContainer.innerHTML = `
    <div class="video2back">
        <video autoplay muted loop class="myVideo">
            <source src="/resources/videos/rhinnabackvideo.mp4" type="video/mp4">
        </video>
    </div>   
    <div class="welcome-box">
        <h1 class="testeh1s" id="typewriter">Is it a Girl? or a boy?</h1>
    

        <button id="pregnancybtn" class="btn1" type="button">Pregnancy test</button> 
        <p id="pregnancyResult"></p>
        <div id="pregnancyImg"></div>
        <div id="pregnancyText"></div>

        <div class="main-reveal">
            <button id="genderbtn" type="button">Gender reveal</button>
            <p id="genderResult"></p>
            <div id="genderImg"></div>
        </div>

    </div>`
    contentContainer.appendChild(pregnantContainer);
    pregnancyTestListener();
    genderRevealListener();
}

const babyAudio = new Audio('resources/music/baby.mp3');
const noBabyAudio = new Audio('resources/music/noBaby.mp3');
const girlAudio = new Audio('resources/music/girl.mp3');
const boyAudio = new Audio('resources/music/boy.mp3');
const unknownAudio = new Audio('resources/music/unknown.mp3');
const peeAudio = new Audio('resources/music/takingTest.mp3');
const drumAudio = new Audio('resources/music/genderReveal.mp3');
const inviteAudio = new Audio('resources/music/invite.mp3');

let preganacyTestRunning = false;
let genderRevealRunning = false;


export function pauseAudios() {
    babyAudio.pause();
    noBabyAudio.pause();
    girlAudio.pause();
    boyAudio.pause();
    unknownAudio.pause();
    peeAudio.pause();
    drumAudio.pause();
    inviteAudio.pause();
}

function pregnancyTest() {
    if (preganacyTestRunning) {
        return;
    }

    preganacyTestRunning = true;

    let result = Math.floor(Math.random() * 2);
    console.log(result);
    $('#pregnancyResult').empty();

    pauseAudios();

    $('body').find('img').remove();
    $('#pregnancyText').empty();

    peeAudio.play();

    if (result === 0) {

        setTimeout(showNegative, 4000);

    } else {

        setTimeout(showPositive, 4000);
    }
}

function showNegative() {
    $('#pregnancyImg').show();

    $('#genderbtn').prop('disabled', true);
    peeAudio.pause();
    noBabyAudio.play();

    const string = "No pon the baby"

    $('#pregnancyResult').append(string);
    $('#genderbtn').prop('disabled', true);
    $('#genderResult').empty();
    const toastImg = document.createElement('img');
    toastImg.id = "pregnancyImg";
    toastImg.src = 'resources/images/toast.jpeg';
    toastImg.alt = 'toast';
    $('#pregnancyImg').append(toastImg);

    const pregnancyText = 'A toast for another month not getting pregnant'
    $('#pregnancyText').append(pregnancyText)

    preganacyTestRunning = false;
}

function showPositive() {
    $('#pregnancyImg').show();

    $('#genderbtn').show();

    $('#genderbtn').prop('disabled', false);

    // Atualizar o estado do teste de gravidez
    isPregnancyTestPositive = true;

    peeAudio.pause();
    babyAudio.play();
    $('body').find('img').remove();
    // genderRevealListener();
    $('#pregnancybtn').removeClass('pumpAnimation');
    const string = "SOS please, there's a baby on the way"
    $('#pregnancyResult').append(string);
    $('#genderbtn').prop('disabled', false);

    $('#genderbtn').addClass('pumpAnimation');

    const pregnantImg = document.createElement('img');
    pregnantImg.id = "pregnancyImg";
    pregnantImg.src = 'resources/images/preg.png';
    pregnantImg.alt = 'pregnant';
    $('#pregnancyImg').append(pregnantImg);

    const pregnancyText = "REVEAL GENDER NOW !!"
    $('#pregnancyText').append(pregnancyText)

    preganacyTestRunning = false;
}




function pregnancyTestListener() {
    $('#genderbtn').off('click').hide();

    $('#pregnancybtn').click(function () {
        pregnancyTest();
    })
}




function genderReveal() {
    if (genderRevealRunning) {
        console.log('gender reveal running');
        return;
    }

    genderRevealRunning = true;

    let gender = Math.floor(Math.random() * 3);

    const resultbox = $('#genderResult');
    resultbox.empty();

    pauseAudios();

    $('body').find('img').remove();

    drumAudio.play();

    if (gender === 0) {

        setTimeout(showGirl, 4000);

    }
    else if (gender === 1) {

        setTimeout(showBoy, 4000);

    } else {

        setTimeout(showUnknown, 4000);
    }
    $('#pregnancyImg').hide();
    $('#pregnancybtn').off('click');
    $('#pregnancybtn').off('click').hide();
}


function showGirl() {
    $('body').find('img').remove();
    const string1 = "Girl"
    $('#genderResult').append(string1);

    girlAudio.play();

    const pinkSmokeImg = document.createElement('img');
    pinkSmokeImg.id = "pregnancyImg";
    pinkSmokeImg.src = 'resources/images/pinkSmoke.png';
    pinkSmokeImg.alt = 'pink smoke';
    $('#genderImg').append(pinkSmokeImg);

    genderRevealRunning = false;

    showform();
}

function showBoy() {
    $('body').find('img').remove();
    const string2 = "Boy"
    $('#genderResult').append(string2);

    boyAudio.play();

    const blueSmokeImg = document.createElement('img');
    blueSmokeImg.id = "pregnancyImg";
    blueSmokeImg.src = 'resources/images/blueSmoke.png';
    blueSmokeImg.alt = 'blue smoke';
    $('#genderImg').append(blueSmokeImg);

    genderRevealRunning = false;

    showform();
}

function showUnknown() {
    $('body').find('img').remove();
    const string3 = "We leave this decision to the baby"
    $('#genderResult').append(string3);

    unknownAudio.play();

    const undefinedSmokeImg = document.createElement('img');
    undefinedSmokeImg.id = "pregnancyImg";
    undefinedSmokeImg.src = 'resources/images/undefinedSmoke.jpeg';
    undefinedSmokeImg.alt = 'undefined smoke';
    $('#genderImg').append(undefinedSmokeImg);

    genderRevealRunning = false;

    showform();
}


function genderRevealListener() {
    $('#genderbtn').click(function () {
        if (isPregnancyTestPositive) {
            $('.formdiv').remove();
            genderReveal();
            reloadform();
        } else {
            alert("You need a positive pregnancy test first!");
        }
    })
}

function showform() {
    $('.formdiv').remove();

    const contentContainer = document.getElementById("content");

    console.log('showform');

    const formContainer = document.createElement("div");

    formContainer.innerHTML = `
    <div class="formdiv">
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Invite Your Friends' To baby Shower: </label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    placeholder="Enter email">
               
            </div>
             <p id="emailForm">* We'll never share your emails with anyone else.</p>
            <button type="submit" id="btninvite" class="btn btn-primary">Invite Friends</button>
            <button type="submit" id="btndone" class="btn btn-primary">Done</button>
        </form>
    </div>`
    
    contentContainer.appendChild(formContainer);

    reloadform();
    
    $('#btndone').off('click');
}


function reloadform() {
    $('#content').on('click', '#btninvite', function (event) {
        event.preventDefault();
       
        showform();
    });
}

let doneClicked = false;

function doneShow() {
    if (doneClicked) {
        return;
    }

    $('#content').on('click', '#btndone', function (event) {
        event.preventDefault();
        alert("Your Friends Already Receive The Invite!!")
        location.reload();
        contentContainer.appendChild(formContainer);
        doneClicked = true;
        $('#content').off('click', '#btndone');
        pauseAudios();
        inviteAudio.play();
    });


} 
doneShow();

