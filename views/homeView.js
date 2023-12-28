export function renderHomePage() {
    const contentContainer = document.getElementById("content");
    contentContainer.innerHTML = ""; // limpar html
    $('body').find('img').remove();
    const welcomeHeading = document.createElement("div");
    welcomeHeading.classList.add("main-container")

    fetch("/quotes.json")
        .then(response => response.json())
        .then(quotes => {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            const randomQuote = quotes[randomIndex];

            welcomeHeading.innerHTML = `
            <p style="background-image: url('resources/images/wallpaper.jpeg');"></p>
            <div class="videoback">
                <video autoplay muted loop class="video-back">
                    <source src="resources/videos/newvideo.mp4" type="video/mp4">
                </video>
            </div>
          
            <div class="videodiv">
                <video controls autoplay class="video-container">
                    <source src="resources/videos/RihannaShow.mp4" type="video/mp4">
                </video>
            </div>
              <div class="appgender">
                <h1>The most secure app for a gender reveal!</h1>
            </div>  
            <div class="img-container">
                <img src="resources/images/wallpaper.jpeg" alt="">
            </div>
            <div class="quotes">
                <h4 class="quotep"> " ${randomQuote} "</h4>
            </div>
        `
            contentContainer.appendChild(welcomeHeading);
        })
}  



