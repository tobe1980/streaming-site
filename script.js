const videos = [
  { name: "spiderman", link: "https://www.youtube.com/embed/t06RUxPbp_c" },
  { name: "deadpool", link: "https://www.youtube.com/embed/ONHBaC-pfsk" },
  { name: "batman", link: "https://www.youtube.com/embed/mqqft2x_Aa4" },
  { name: "iron man", link: "https://www.youtube.com/embed/8ugaeA-nMTc" },
  { name: "super man", link: "https://www.youtube.com/embed/gX-B3HMlMfY" },
  { name: "flash", link: " https://www.youtube.com/embed/hebWYacbdvc" },
  { name: "flash", link: "https://www.youtube.com/embed/IgVyroQjZbE" },
  { name: "higher card", link: " https://www.youtube.com/embed/SX9O1WJMrbA" },
  { name: "one piece", link: "https://www.youtube.com/embed/MCb13lbVGE0" },
  { name: "thunderman", link: "https://www.youtube.com/embed/gYA5WOFhd-Y" },
  { name: "the simpsons", link: "https://www.youtube.com/embed/3R1ebDCv7vM" },
  { name: "7 deadly sins", link: "https://www.youtube.com/embed/euUnz0RP6Zg" },
  { name: "kite", link: "https://www.youtube.com/embed/ixerKA_Dvsk" },
  { name: "sonic", link: "https://www.youtube.com/embed/OSOyFiOiNd4" },
  ];

const videoslist = document.getElementById("videos");

videos.forEach((video) => {
  videoslist.innerHTML += `
  <div id="video-container">
    <iframe
          src="${video.link}"
          width="400"
          height="250"
          frameborder="0"
          allowfullscreen
        >
      </iframe>
      </div>`;
});
