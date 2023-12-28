export function renderAboutPage() {
    const contentContainer = document.getElementById("content");
    contentContainer.innerHTML = ""; // limpar html

    $('body').find('img').remove();
    const aboutContainer = document.createElement("div");

    aboutContainer.innerHTML = `
    <div class="video2back">
      <video autoplay muted loop class="myVideo">
        <source src="/resources/videos/rhinnabackvideo.mp4" type="video/mp4">
      </video>
    </div>  

    <div class="mainabout">
      <div class="about-container">
        <p>Step into the vibrant world of Rihanna's Super Bowl extravaganza with our baby reveal app, the Rihveal!<br>
        <br> Get to know your future baby - or not - while immersed by the sheer brilliance of Rihanna's Super Bowl performance, setting the stage for an unforgettable experience.<br>
        You can set the mood firstly by re-watching RiRi’s Super Bowl performance and spark your inspiration reading one of our diva’s quotes.<br>
        <br>When you’re ready, enter the enchanting baby predictor section, where biology meets Rihanna's extraordinary charisma. Take a whimsical online test and know your results amidst the pulsating beats of Rihanna's music, adding a whole new rhythm to the great - or not so great - news.<br>
        <br>It's more than a test: it's a vibrant, engaging Super Bowl recreation at your house!<br>
        <br>Share the joy, laughter, and excitement with friends and loved ones, inviting them to groove along this experience. Share your baby wish list with them and ask your best friend to plan a baby shower for you. However, your party must be as iconic as your reveal!</p>
      </div>
  
      <div class="about-container1">
        <p>Disclaimer: take the test at your own risk! RiRi is not held responsible for fake news.</p>
      </div>
    </div>`
      
    contentContainer.appendChild(aboutContainer);

}
